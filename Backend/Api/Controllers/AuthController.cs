using Application.Dtos;
using Application.Services;
using Domain.Entities;
using Domain.Enums;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _auth;

        public AuthController(AuthService auth)
        {
            _auth = auth;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                await _auth.RegisterAsync(dto);
                return Ok("Registered");
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {
                var result = await _auth.LoginAsync(dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            //try
            //{
            //    var result = await authService.SendOtp(request.Email);
            //    return StatusCode(result.StatusCode, result);
            //}
            //catch (UserNotFoundException)
            //{
            //    return NotFound("User with the provided email does not exist.");
            //}
            return Ok();
        }

        [HttpPost("IsValidOtp")]
        public async Task<IActionResult> IsValidOtp([FromBody] SendOtp request)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            //try
            //{
            //    var result = await authService.IsvalidOtp(request);
            //    return StatusCode(result.StatusCode, result);
            //}
            //catch (OtpNotFoundException)
            //{
            //    return NotFound("Otp not found for the provided email.");
            //}
            //catch (OtpUsedException)
            //{
            //    return BadRequest("This Otp has already been used.");
            //}
            //catch (OtpExpireTime)
            //{
            //    return BadRequest("This Otp has expired.");
            //}
            //catch (OtpInvaildException)
            //{
            //    return BadRequest("The provided Otp is invalid.");

            //}
            return Ok();
        }
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword(ApplyNewPassword applyNewPassword, string Token, string Email)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            //try
            //{
            //    var result = await authService.ResetPasswordAsync(applyNewPassword, Token, Email);
            //    return StatusCode(result.StatusCode, result);
            //}
            //catch (UserSaveInDatabase)
            //{
            //    return StatusCode(500, "Failed to save the new password. Please try again.");
            //}

            return Ok();

        }

        //[HttpPost("refresh")]
        //public async Task<IActionResult> Refresh(string refreshToken)
        //{
        //    return Ok(await _auth.RefreshTokenAsync(refreshToken));
        //}
    }


}
