using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingSite.API.Migrations
{
    public partial class userexee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhotoURL",
                table: "Users",
                newName: "PhotosURL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhotosURL",
                table: "Users",
                newName: "PhotoURL");
        }
    }
}
