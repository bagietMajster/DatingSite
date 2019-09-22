using DatingSite.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DatingSite.API.Data
{
    public interface IUserRepository : IGenericRepository
    {
        Task<IEnumerable<UserModel>> GetUsers();
        Task<UserModel> GetUser(int id);
    }
}
