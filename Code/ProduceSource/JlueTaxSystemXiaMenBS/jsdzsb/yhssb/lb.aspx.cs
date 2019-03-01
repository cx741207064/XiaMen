using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JlueTaxSystemXiaMenBS.jsdzsb.yhssb
{
    public partial class lb : System.Web.UI.Page
    {
        public string skssqq = "";
        public string DateFrom = "";
        public string DateTo = "";
        public string tbrq = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            //skssqq = Request["skssqq"];
            skssqq = "2018-08";

            if (skssqq == null)
            {
                DateFrom = Session["DateFrom"].ToString();
                DateTo = Session["DateTo"].ToString();
                tbrq = Session["tbrq"].ToString();
            }
            else
            {
                DateFrom = DateTime.Parse(skssqq + "-01").ToShortDateString();
                DateTo = DateTime.Parse(skssqq + "-01").AddMonths(1).AddMilliseconds(-1).ToShortDateString();
                tbrq = DateTime.Parse("2018-09-05").ToShortDateString();

                Session["DateFrom"] = DateFrom;
                Session["DateTo"] = DateTo;
                Session["tbrq"] = tbrq;
            }

        }
    }
}