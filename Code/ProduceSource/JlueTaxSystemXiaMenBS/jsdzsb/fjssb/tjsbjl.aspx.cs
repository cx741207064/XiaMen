using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JlueTaxSystemXiaMenBS.jsdzsb.fjssb
{
    public partial class tjsbjl : System.Web.UI.Page
    {
        public string DateFrom = "";
        public string DateTo = "";
        public string tbrq = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            DateFrom = Session["DateFrom"].ToString();
            DateTo = Session["DateTo"].ToString();
            tbrq = Session["tbrq"].ToString();

            string form_guid = Request["form_guid"];
            if (form_guid != null && form_guid.Equals(Session["guid"]))
            {

                isErr.Value = "yes";
            }
        }
    }
}