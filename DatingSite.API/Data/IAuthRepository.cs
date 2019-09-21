using DatingSite.API.Models;
using System.Threading.Tasks;

namespace DatingSite.API.Data
{
    public interface IAuthRepository
    {
        Task<UserModel> Login(string username, string password);
        Task<UserModel> Register(UserModel user, string password);
        Task<bool> UserExists(string username);
    }
}
