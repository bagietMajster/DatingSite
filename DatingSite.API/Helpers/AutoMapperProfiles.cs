using AutoMapper;
using DatingSite.API.Dtos;
using DatingSite.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingSite.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<UserModel, UserForListDTO>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt =>
                {
                    opt.ResolveUsing(src => src.DateOfBirth.CalculateAge());
                });
            CreateMap<UserModel, UserForDetailedDTO>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt =>
                {
                    opt.ResolveUsing(src => src.DateOfBirth.CalculateAge());
                }); 
            CreateMap<PhotoModel, PhotosForDetailedDTO>();
            CreateMap<UserForUpdateDTO, UserModel>();
            CreateMap<PhotoModel, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDTO, PhotoModel>();
            CreateMap<UserForRegisterDTO, UserModel>();
            CreateMap<MessageForCreationDto, MessagesModel>().ReverseMap();
        }
    }
}
