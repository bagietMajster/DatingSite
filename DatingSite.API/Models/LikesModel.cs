using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingSite.API.Models
{
    public class LikesModel
    {
        public int UserLikesId { get; set; }
        public int UserIsLikedId { get; set; }

        public UserModel UserLikes { get; set; }
        public UserModel UserIsLiked { get; set; }
    }
}
