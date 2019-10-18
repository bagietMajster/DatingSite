using DatingSite.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingSite.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<ValueModel> Values { get; set; }
        public DbSet<UserModel> Users { get; set; }
        public DbSet<PhotoModel> Photos { get; set; }
        public DbSet<LikesModel> Likes { get; set; }
        public DbSet<MessagesModel> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<LikesModel>().HasKey(k => new { k.UserLikesId, k.UserIsLikedId });

            builder.Entity<LikesModel>()
                   .HasOne(u => u.UserIsLiked)
                   .WithMany(u => u.UserLikes)
                   .HasForeignKey(u => u.UserIsLikedId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<LikesModel>()
                   .HasOne(u => u.UserLikes)
                   .WithMany(u => u.UserIsLiked)
                   .HasForeignKey(u => u.UserLikesId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<MessagesModel>().HasOne(u => u.Sender)
                   .WithMany(m => m.MessagesSend)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<MessagesModel>().HasOne(u => u.Recipient)
                   .WithMany(m => m.MessagesRecived)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
