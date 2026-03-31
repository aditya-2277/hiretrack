using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HireTrack.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Adduniqueindexonemail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "appUsers",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_appUsers_Email",
                table: "appUsers",
                column: "Email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_appUsers_Email",
                table: "appUsers");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "appUsers",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }
    }
}
