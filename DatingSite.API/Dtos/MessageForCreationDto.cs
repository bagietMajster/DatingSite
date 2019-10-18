using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingSite.API.Dtos
{
    public class MessageForCreationDto
    {
        public int SenderId { get; set; }
        public int RecipientId { get; set; }
        public DateTime DateSend { get; set; }
        public string Content { get; set; }

        public MessageForCreationDto()
        {
            DateSend = DateTime.Now;
        }
    }
}
