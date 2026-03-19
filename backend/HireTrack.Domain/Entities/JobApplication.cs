using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HireTrack.Domain.Entities
{
    public class JobApplication : CommonEntities
    {
        public Guid Id { get; set; }

        public string CompanyName { get; set; } = string.Empty;

        public string Position { get; set; } = string.Empty;

        public string Type { get; set; } = string.Empty;

        public string Status { get; set; } = string.Empty;

        public DateOnly DateApplied { get; set; } = DateOnly.FromDateTime(DateTime.Now);
    }
}
