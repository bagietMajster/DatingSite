﻿// <auto-generated />
using System;
using DatingSite.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DatingSite.API.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("DatingSite.API.Models.PhotoModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("Description");

                    b.Property<bool>("IsMain");

                    b.Property<string>("Url");

                    b.Property<int>("UserId");

                    b.Property<string>("public_id");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("DatingSite.API.Models.UserModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Children");

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<DateTime>("Created");

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("Description");

                    b.Property<string>("Education");

                    b.Property<string>("EyeColor");

                    b.Property<string>("FreeTime");

                    b.Property<string>("FriendeWouldDescribeMe");

                    b.Property<string>("Gender");

                    b.Property<string>("Growth");

                    b.Property<string>("HairColor");

                    b.Property<string>("ILike");

                    b.Property<string>("IdoNotLike");

                    b.Property<string>("Interests");

                    b.Property<string>("ItFeelsBestIn");

                    b.Property<string>("Languages");

                    b.Property<DateTime>("LastActive");

                    b.Property<string>("LookingFor");

                    b.Property<string>("MakesMeLaugh");

                    b.Property<string>("MartialStatus");

                    b.Property<string>("Motto");

                    b.Property<string>("Movies");

                    b.Property<string>("Music");

                    b.Property<byte[]>("PassowrdHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Personality");

                    b.Property<string>("Profession");

                    b.Property<string>("Sport");

                    b.Property<string>("UserName");

                    b.Property<string>("ZodiacSign");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DatingSite.API.Models.ValueModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("DatingSite.API.Models.PhotoModel", b =>
                {
                    b.HasOne("DatingSite.API.Models.UserModel", "User")
                        .WithMany("Photos")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
