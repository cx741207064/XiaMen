using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JlueTaxSystemXiaMenBS.jsdzsb.yhssb
{
    public partial class tjsbjl : System.Web.UI.Page
    {
        public string temp_data = "";
        public string tmp_count = "";

        public string DateFrom = "";
        public string DateTo = "";
        public string tbrq = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            temp_data = Request["temp_data"];
            Session["temp_data"] = temp_data;

            tmp_count = Request["tmp_count"];
            Session["tmp_count"] = tmp_count;

            DateFrom = Session["DateFrom"].ToString();
            DateTo = Session["DateTo"].ToString();
            tbrq = Session["tbrq"].ToString();

        }
    }
}