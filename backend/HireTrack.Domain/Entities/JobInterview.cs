using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HireTrack.Domain.Entities
{
    public class JobInterview : CommonEntities
    {
        public Guid Id { get; set; }
        public string CompanyName { get; set; } = String.Empty;

        public string Position { get; set; } = String.Empty;

        public string Type { get; set; } = String.Empty;
        public DateOnly InterviewDate { get; set; } = DateOnly.FromDateTime(DateTime.Now);

        public ICollection<Question> Questions { get; set; } = new List<Question>();
        

    }
}
