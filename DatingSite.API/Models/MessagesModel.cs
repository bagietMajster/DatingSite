using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingSite.API.Models
{
    public class MessagesModel
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public UserModel Sender { get; set; }
        public int RecipientId { get; set; }
        public UserModel Recipient { get; set; }
        public string Content { get; set; }
        public bool IsRead { get; set; }
        public DateTime? DataRead { get; set; }
        public DateTime DateSent { get; set; }
        public bool SenderDeleted { get; set; }
        public bool RecipientDeleted { get; set; }
    }
}
