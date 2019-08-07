﻿using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.Models
{
    public class ModelMainServlet
    {
        public string TABLE_NAME { get; set; }

        public TABLE_ACTION ta { get; set; }

        public JObject json { get; set; }

        public Nsrxx Nsrxx { get; set; }

        public GDTXDate GDTXDate { get; set; }

    }
}