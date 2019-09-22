using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingSite.API.Migrations
{
    public partial class userexe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Eductaion",
                table: "Users",
                newName: "Education");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Education",
                table: "Users",
                newName: "Eductaion");
        }
    }
}
