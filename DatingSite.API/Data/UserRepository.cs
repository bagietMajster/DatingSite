using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingSite.API.Helpers;
using DatingSite.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingSite.API.Data
{
    public class UserRepository : GenericRepository, IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public async Task<PhotoModel> GetMainPhotoForUser(int userId)
        {
            return await _context.Photos.Where(u => u.UserId == userId).FirstOrDefaultAsync(p => p.IsMain);
        }

        public async Task<PhotoModel> GetPhoto(int id)
        {
            var photo = await _context.Photos.FirstOrDefaultAsync(p => p.Id == id);
            return photo;
        }

        public async Task<UserModel> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<PagedList<UserModel>> GetUsers(UserParams userParams)
        {
            var users = _context.Users.Include(p => p.Photos);

            return await PagedList<UserModel>.CreateListAsync(users, userParams.PageNumber, userParams.PageSize);
        }
    }
}
