using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.Models
{
    public class Message
    {
        public string TABLE_NAME { get; set; }

        public string TABLE_ACTION { get; set; }

        public string msg { get; set; }

        public bool showNextButton { get; set; }

    }
}