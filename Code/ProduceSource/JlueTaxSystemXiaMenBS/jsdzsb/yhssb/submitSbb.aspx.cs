using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;

namespace JlueTaxSystemXiaMenBS.jsdzsb.yhssb
{
    public partial class submitSbb : System.Web.UI.Page
    {
        public string div = "";
        public string op = "add";
        public string DateFrom = "";
        public string DateTo = "";
        public string tbrq = "";

        public string guid = "";
        public string zsxmdm = "";
        public string zspmdm = "";
        public string skssqq = "";
        public string skssqz = "";
        public string bqybtse = "";
        public string hdzshdde = "";
        public string hdzshdbl = "";
        public string jsje = "";
        public string sysl = "";
        public string bqynse = "";
        public string jmse = "";
        public string ssjmxzdm = "";
        public string bqyjse = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            DateFrom = Session["DateFrom"].ToString();
            DateTo = Session["DateTo"].ToString();
            tbrq = Session["tbrq"].ToString();

            div = "yhssblb";

            HtmlInputHidden TempData = (HtmlInputHidden)FindControl("temp_data");
            if (Session["temp_data"] != null && TempData != null)
            {
                TempData.Value = Session["temp_data"].ToString();
            }

            if (Session["tmp_count"] == null)
            {
                Session["tmp_count"] = 0;
            }
            tmp_count.Value= Session["tmp_count"].ToString() ;

            guid = Guid.NewGuid().ToString();
            Session["guid"] = guid;

            zsxmdm = Request["sbbVo['zsxmdm']"];
            zspmdm = Request["zspmdm"];
            skssqq = Request["sbbVo['skssqq']"];
            skssqz = Request["sbbVo['skssqz']"];
            bqybtse = Request["sbbVo['bqybtse']"];
            hdzshdde = Request["sbbVo['hdzshdde']"];
            hdzshdbl = Request["sbbVo['hdzshdbl']"];
            jsje = Request["sbbVo['jsje']"];
            sysl = Request["sysl"];
            bqynse = Request["sbbVo['bqynse']"];
            jmse = Request["sbbVo['jmse']"];
            ssjmxzdm = Request["sbbVo['ssjmxzdm']"];
            bqyjse = Request["sbbVo['bqyjse1']"];

        }

        public void modify()
        {

        }

    }
}