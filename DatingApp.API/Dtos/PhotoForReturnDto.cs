using System;

namespace DatingApp.API.Dtos
{
    public class PhotoForReturnDto
    {
        public int Id { get; set; }        
        public string Url { get; set; }
        public string Description { get; set; } 
        public DateTime DateAdded { get; set; }
        public string IsMain { get; set; }
        public string PublicId { get; set; }

    }
}