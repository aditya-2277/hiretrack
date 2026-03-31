using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HireTrack.Domain.Entities
{
    internal class User : CommonEntities
    {
        public Guid Id { get; set; }

        public string FullName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public DateOnly DateValidUpto { get; set; } = DateOnly.FromDateTime(DateTime.Now);
    }
}
