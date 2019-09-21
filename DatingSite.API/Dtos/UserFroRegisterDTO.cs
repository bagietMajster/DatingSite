using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DatingSite.API.Dtos
{
    public class UserForRegisterDTO
    {
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Password is required")]
        [StringLength(12,MinimumLength =6, ErrorMessage = "Password must consist of 6-12 characters")]
        public string Password { get; set; }
    }
}
