using DatingSite.API.Helpers;
using DatingSite.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DatingSite.API.Data
{
    public interface IUserRepository : IGenericRepository
    {
        Task<PagedList<UserModel>> GetUsers(UserParams userParams);
        Task<UserModel> GetUser(int id);
        Task<PhotoModel> GetPhoto(int id);
        Task<PhotoModel> GetMainPhotoForUser(int userId);
        Task<LikesModel> GetLike(int userId, int recipientId);
    }
}
