using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class PasswordResetCode
    {
        public int Id { get; set; }
        public string Email { get; set; } = null!;
        public string HashedOtp { get; set; } = null!;
        public DateTime ExpirationTime { get; set; }
        public bool IsUsed { get; set; }
        public string UserId { get; set; } = null!;
    }
}
