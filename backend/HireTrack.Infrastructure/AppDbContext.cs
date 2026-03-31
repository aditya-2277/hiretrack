using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HireTrack.Domain.Entities;

namespace HireTrack.Infrastructure
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }
        
        public DbSet<JobApplication> JobApplications { get; set; }

        public DbSet<JobInterview> JobInterviews { get; set; }

        public DbSet<Question> Questions { get; set; }

        public DbSet<AppUser> appUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JobInterview>()
                .HasMany(i => i.Questions)
                .WithOne(q => q.Interview)
                .HasForeignKey(q => q.InterviewId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<AppUser>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }

    }
}
