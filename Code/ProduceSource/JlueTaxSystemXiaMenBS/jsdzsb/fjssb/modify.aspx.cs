using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JlueTaxSystemXiaMenBS.Code;

namespace JlueTaxSystemXiaMenBS.jsdzsb.fjssb
{
    public partial class modify : System.Web.UI.Page
    {
        public string DateFrom = "";
        public string DateTo = "";
        public string tbrq = "";

        public string ZzsXseDm = "";
        public string xshjs = "";
        public string sbbVo_xshjs = "";

        public string ybzzs = "";
        public string zzsmdse = "";
        public string xfs = "";
        public string yys = "";
        public string hj = "";
        public string bqynse = "";
        public string jme = "";
        public string bqyjse = "";
        public string bqybtse = "";
        public string jyffjyjse = "";
        public string dffjjyjse = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            DateFrom = Session["DateFrom"].ToString();
            DateTo = Session["DateTo"].ToString();
            tbrq = Session["tbrq"].ToString();

            ybzzs = GTXMethod.myConvert(Request["sbbList[0]['ybzzs']"]);
            zzsmdse = GTXMethod.myConvert(Request["sbbList[0]['zzsmdse']"]);
            xfs = GTXMethod.myConvert(Request["sbbList[0]['xfs']"]);
            yys = GTXMethod.myConvert(Request["sbbList[0]['yys']"]);
            hj = GTXMethod.myConvert(Request["sbbList[0]['hj']"]);
            bqynse = GTXMethod.myConvert(Request["sbbList[0]['bqynse']"]);
            jme = GTXMethod.myConvert(Request["sbbList[0]['jme']"]);
            bqyjse = GTXMethod.myConvert(Request["sbbList[0]['bqyjse']"]);
            bqybtse = GTXMethod.myConvert(Request["sbbList[0]['bqybtse']"]);
            jyffjyjse = GTXMethod.myConvert(Request["sbbList[1]['bqyjse']"]);
            dffjjyjse = GTXMethod.myConvert(Request["sbbList[2]['bqyjse']"]);

            ZzsXseDm = Request["sbbVo['zzsxselx_dm']"];
            xshjs = Request["xshjs"];
            sbbVo_xshjs = Request["sbbVo['xshjs']"];

            for (int i = 0; i < _combobox_.Items.Count; i++)
            {
                if (_combobox_.Items[i].Value == ZzsXseDm)
                {
                    _combobox_.Value = ZzsXseDm;
                    lblxse.Text = _combobox_.Items[i].Text;
                    break;
                }
            }

        }


    }
}