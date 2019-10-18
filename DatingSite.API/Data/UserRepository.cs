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

        public async Task<LikesModel> GetLike(int userId, int recipientId)
        {
            return await _context.Likes.FirstOrDefaultAsync(u => u.UserLikesId == userId && u.UserIsLikedId == recipientId);
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
        private async Task<IEnumerable<int>> GetUserLikes(int id, bool userLikes)
        {
            var user = await _context.Users.Include(x => x.UserLikes)
                                           .Include(x => x.UserIsLiked)
                                           .FirstOrDefaultAsync(u => u.Id == id);
            if(userLikes)
            {
                return user.UserLikes.Where(u => u.UserIsLikedId == id).Select(i => i.UserLikesId);
            }
            else
            {
                return user.UserIsLiked.Where(u => u.UserLikesId == id).Select(i => i.UserIsLikedId);
            }
        }

        public async Task<PagedList<UserModel>> GetUsers(UserParams userParams)
        {
            var users = _context.Users.Include(p => p.Photos).OrderBy(u => u.LastActive).AsQueryable();

            users = users.Where(u => u.Id != userParams.UserId);
            users = users.Where(u => u.Gender == userParams.Gender);

            if(userParams.UserLikes)
            {
                var userLikes = await GetUserLikes(userParams.UserId, userParams.UserLikes);
                users = users.Where(u => userLikes.Contains(u.Id));
            }

            if (userParams.UserIsLiked)
            {
                var userIsLiked = await GetUserLikes(userParams.UserId, userParams.UserLikes);
                users = users.Where(u => userIsLiked.Contains(u.Id));
            }

            if (userParams.MinAge != 18 || userParams.MaxAge != 100)
            {
                var minDate = DateTime.Today.AddYears(-userParams.MaxAge - 1);
                var maxDate = DateTime.Today.AddYears(-userParams.MinAge);
                users = users.Where(u => u.DateOfBirth >= minDate && u.DateOfBirth <= maxDate); 
            }

            if(userParams.ZodiacSign != "All")
            {
                users = users.Where(u => u.ZodiacSign == userParams.ZodiacSign);
            }

            if(!string.IsNullOrEmpty(userParams.OrderBy))
            {
                switch (userParams.OrderBy)
                {
                    case "created":
                        users = users.OrderByDescending(u => u.Created);
                        break;
                    default:
                        users = users.OrderByDescending(u => u.LastActive);
                        break;
                }
            }

            return await PagedList<UserModel>.CreateListAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        public async Task<MessagesModel> GetMessage(int id)
        {
            return await _context.Messages.FirstOrDefaultAsync(m => m.Id == id);
        }

        public Task<PagedList<MessagesModel>> GetMessagesForUser()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<MessagesModel>> GetMessageThread(int userId, int recipientId)
        {
            throw new NotImplementedException();
        }
    }
}
