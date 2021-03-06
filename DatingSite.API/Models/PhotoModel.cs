﻿using System;

namespace DatingSite.API.Models
{
    public class PhotoModel
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public string public_id { get; set; }
        public UserModel User { get; set; }
        public int UserId { get; set; }
    }
}