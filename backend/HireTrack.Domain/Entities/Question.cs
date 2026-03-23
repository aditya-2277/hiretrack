using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HireTrack.Domain.Entities
{
    public class Question
    {
        public Guid Id { get; set; }

        public Guid InterviewId { get; set; }   // foreign key

        public string QuestionText { get; set; } = string.Empty;

        public string SampleAnswer {  get; set; } = string.Empty;
        public string? Category { get; set; }
        public string? Notes { get; set; }
        public int OrderIndex { get; set; }

        public JobInterview Interview { get; set; } = null!;
    }
}
