using Application.Dtos;
using Application.Interfaces;
using Domain.Entities;
using Domain.Enums;
using Domain.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace Application.Services
{
    public class AuthService
    {
        private readonly IUserRepository _userRepo;
        private readonly IConfiguration _config;
        private readonly IEmailService emailService;

        public AuthService(IUserRepository userRepo, IConfiguration config, IEmailService emailService)
        {
            _userRepo = userRepo;
            _config = config;
            this.emailService = emailService;
        }

        private string GenerateJwt(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, user.UserType.ToString()) 
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_config["JWT:Key"])
            );

            var token = new JwtSecurityToken(
                issuer: _config["JWT:Issuer"],
                audience: _config["JWT:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task RegisterAsync(RegisterDto dto)
        {
            if (await _userRepo.GetByEmailAsync(dto.Email) != null)
                throw new Exception("Email already exists");

            var user = new User
            {
                UserName = dto.UserName,
                Email = dto.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                UserType = UserType.User 
            };

            await _userRepo.AddAsync(user);
        }

        public async Task<AuthResponseDto> LoginAsync(LoginDto dto)
        {

            if (string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Password))
                throw new Exception("Email and password required");


            var user = await _userRepo.GetByEmailAsync(dto.Email);

            if (user == null ||
                !BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash))
                throw new Exception("Invalid login");

            var accessToken = GenerateJwt(user);

            user.RefreshToken = Guid.NewGuid().ToString();
            user.RefreshTokenExpiry = DateTime.UtcNow.AddDays(7);

            await _userRepo.UpdateAsync(user);

            return new AuthResponseDto
            {
                AccessToken = accessToken,
                RefreshToken = user.RefreshToken
            };
        }
        public async Task<ApiResponse<string>> SendOtp(string email)
        {
            var user = await _userRepo.GetByEmailAsync(email);
            if (user == null)
            {

                await Task.Delay(1000); // 1 seconds
                return ApiResponse<string>.Success("Reset Otp sent to your email.");

            }
            var Otp = new Random().Next(100000, 999999).ToString();

            var HashedOtp = BCrypt.Net.BCrypt.HashPassword(Otp);


           


            string body = $@"
    <h3>Password Reset</h3>
    <p>Use the Otp below to reset your password:</p>
    <p><b>Email:</b> {email}</p>
    <P><b>Otp : </b> {Otp}</p>

    <p>Go to the reset password page and enter this Otp To Reset Password.</p>
";

            await emailService.SendAsync(email, "Reset Your Password", body);

            return ApiResponse<string>.Success("Reset Otp sent to your email.");
        }

        //public async Task<ApiResponse<string>> IsvalidOtp(SendOtp resetPasswordRequest)
        //{
        //    var record = await unitOfWork.PasswordResetCodeGenerateReposatory
        //        .GetLastCodeByEmail(resetPasswordRequest.Email);

        //    if (record == null)
        //        throw new OtpNotFoundException();

        //    if (record.IsUsed)
        //        throw new OtpUsedException();

        //    if (record.ExpirationTime < DateTime.UtcNow)
        //        throw new OtpExpireTime();

        //    bool isValid = BCrypt.Net.BCrypt.Verify(resetPasswordRequest.Otp, record.HashedOtp);

        //    if (!isValid)
        //        throw new OtpInvaildException();

        //    record.IsUsed = true;
        //    var result = await unitOfWork.SaveChangesAsync();

        //    return ApiResponse<string>.Success("Otp Is Correct");
        //}
        //public async Task<ApiResponse<string>> ResetPasswordAsync(ApplyNewPassword request, string token, string Email)
        //{
        //    if (request.NewPassword != request.ConfirmPassword)
        //        return ApiResponse<string>.ErrorResponse("Passwords do not match.");

        //    var user = await unitOfWork.UserReposatory.GetByEmailAsync(Email);
        //    var hashedPassword = BCrypt.Net.BCrypt.HashPassword(request.NewPassword);
        //    user.PasswordHash = hashedPassword;
        //    unitOfWork.UserReposatory.Update(user);
        //    var result = await unitOfWork.SaveChangesAsync();
        //    if (result <= 0)
        //        throw new UserSaveInDatabase();
        //    return ApiResponse<string>.Success("Password reset successfully.");
        //}

        //public async Task<AuthResponseDto> RefreshTokenAsync(string refreshToken)
        //{
        //    var user = await _userRepo.GetByRefreshTokenAsync(refreshToken);

        //    if (user == null || user.RefreshTokenExpiry < DateTime.UtcNow)
        //        throw new Exception("Invalid refresh token");

        //    var newAccessToken = GenerateJwt(user);

        //    user.RefreshToken = Guid.NewGuid().ToString();
        //    user.RefreshTokenExpiry = DateTime.UtcNow.AddDays(7);

        //    await _userRepo.UpdateAsync(user);

        //    return new AuthResponseDto
        //    {
        //        AccessToken = newAccessToken,
        //        RefreshToken = user.RefreshToken
        //    };
        //}
    }
}
