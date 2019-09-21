using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingSite.API.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PassowrdHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
