using DatingSite.API.Data;
using DatingSite.API.Dtos;
using DatingSite.API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingSite.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repository;

        public AuthController(IAuthRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserFroRegisterDTO userFroRegisterDTO)
        {
            userFroRegisterDTO.Username = userFroRegisterDTO.Username.ToLower();

            if(await _repository.UserExists(userFroRegisterDTO.Username))
            {
                return BadRequest("This username is taken");
            }

            var userToCreate = new UserModel
            {
                UserName = userFroRegisterDTO.Username
            };

            var createdUser = await _repository.Register(userToCreate, userFroRegisterDTO.Password);

            return StatusCode(201);
        }
    }
}
