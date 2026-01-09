using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class UserRepository : GenericRepository<Domain.Entities.User>, IUserRepository
    {

        private  readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext appDbContext) : base(appDbContext)
        {
            _context = appDbContext;
        }

        public async Task<User?> GetByEmailAsync(string email)
        => await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

       // public async Task<User?> GetByRefreshTokenAsync(string refreshToken)
       //=> await _context.Users
       //    .FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
    }
}
