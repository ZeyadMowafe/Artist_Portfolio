using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options) { }

        public DbSet<PasswordResetCode> passwordResetCodes { get; set; }

        public DbSet<User> Users {  get; set; }
     
    }

}