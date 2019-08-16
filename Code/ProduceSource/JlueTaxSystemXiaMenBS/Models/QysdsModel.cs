using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.Models
{
    public class QysdsModel
    {
        public QysdsZb QysdsZb { get; set; }

        public string json { get; set; }

        public string tabId { get; set; }

        public string view { get; set; }

        public JObject tableState { get; set; }

        public GDTXDate GDTXDate { get; set; }

        public Nsrxx Nsrxx { get; set; }

    }
}