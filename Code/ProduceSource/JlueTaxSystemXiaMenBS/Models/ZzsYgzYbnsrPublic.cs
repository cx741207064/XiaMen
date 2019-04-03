using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.Models
{
    public class ZzsYgzYbnsrPublic
    {
        public string TABLE_NAME { get; set; }

        public string TABLE_ACTION { get; set; }

        public string json { get; set; }

        public string msg { get; set; }

        public Nsrxx Nsrxx { get; set; }

        public GDTXDate GDTXDate { get; set; }

        public ZzsYgzYbnsrZBData ZBData { get; set; }

        public ZzsYgzYbnsrFB1Data FB1Data { get; set; }

        public ZzsYgzYbnsrFB2Data FB2Data { get; set; }

    }
}