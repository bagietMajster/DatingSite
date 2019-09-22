using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingSite.API.Migrations
{
    public partial class userexe33335 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotosURL",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotosURL",
                table: "Users",
                nullable: true);
        }
    }
}
