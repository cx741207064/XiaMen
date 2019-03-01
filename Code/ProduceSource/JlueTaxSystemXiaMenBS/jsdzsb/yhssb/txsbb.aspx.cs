using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemXiaMenBS.jsdzsb.yhssb
{
    public partial class txsbb : System.Web.UI.Page
    {
        public string DateFrom = "";
        public string DateTo = "";
        public string tbrq = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            DateFrom = Session["DateFrom"].ToString();
            DateTo = Session["DateTo"].ToString();
            tbrq = Session["tbrq"].ToString();

            string strZspmdm = Request["sbbVo['zspmdm']"];
            zspmdm.Value = strZspmdm;

            JArray ja = zspmSl();
            foreach (JObject jo in ja)
            {
                if (jo["dm"].ToString().Equals(strZspmdm))
                {
                    zspmText.Text = "印花税 - " + jo["text"];
                    lblSlText.Text = jo["sl"].ToString();
                    sysl.Value = jo["sl"].ToString();
                }
            }

        }

        public JArray zspmSl()
        {
            JArray ja = new JArray();

            JObject jo1 = new JObject();
            jo1.Add("dm", "101110101");
            jo1.Add("text", "购销合同");
            jo1.Add("sl", "0.0003");
            ja.Add(jo1);

            JObject jo2 = new JObject();
            jo2.Add("dm", "101110102");
            jo2.Add("text", "加工承揽合同");
            jo2.Add("sl", "0.0005");
            ja.Add(jo2);

            JObject jo3 = new JObject();
            jo3.Add("dm", "101110103");
            jo3.Add("text", "建设工程勘察设计合同");
            jo3.Add("sl", "0.0005");
            ja.Add(jo3);

            JObject jo4 = new JObject();
            jo4.Add("dm", "101110104");
            jo4.Add("text", "建筑安装工程承包合同");
            jo4.Add("sl", "0.0003");
            ja.Add(jo4);

            JObject jo5 = new JObject();
            jo5.Add("dm", "101110105");
            jo5.Add("text", "财产租赁合同");
            jo5.Add("sl", "0.001");
            ja.Add(jo5);

            JObject jo6 = new JObject();
            jo6.Add("dm", "101110106");
            jo6.Add("text", "货物运输合同(按运输费用万分之五贴花)");
            jo6.Add("sl", "0.0005");
            ja.Add(jo6);

            JObject jo7 = new JObject();
            jo7.Add("dm", "101110107");
            jo7.Add("text", "仓储保管合同");
            jo7.Add("sl", "0.001");
            ja.Add(jo7);

            JObject jo8 = new JObject();
            jo8.Add("dm", "101110108");
            jo8.Add("text", "借款合同");
            jo8.Add("sl", "0.00005");
            ja.Add(jo8);

            JObject jo9 = new JObject();
            jo9.Add("dm", "101110109");
            jo9.Add("text", "财产保险合同");
            jo9.Add("sl", "0.001");
            ja.Add(jo9);

            JObject jo10 = new JObject();
            jo10.Add("dm", "101110110");
            jo10.Add("text", "技术合同");
            jo10.Add("sl", "0.0003");
            ja.Add(jo10);

            JObject jo11 = new JObject();
            jo11.Add("dm", "101110200");
            jo11.Add("text", "产权转移书据");
            jo11.Add("sl", "0.0005");
            ja.Add(jo11);

            JObject jo12 = new JObject();
            jo12.Add("dm", "101110400");
            jo12.Add("text", "权利、许可证照");
            jo12.Add("sl", "5");
            ja.Add(jo12);

            JObject jo13 = new JObject();
            jo13.Add("dm", "101110501");
            jo13.Add("text", "资金账簿");
            jo13.Add("sl", "0.0005");
            ja.Add(jo13);

            JObject jo14 = new JObject();
            jo14.Add("dm", "101110599");
            jo14.Add("text", "其他营业账簿");
            jo14.Add("sl", "5");
            ja.Add(jo14);

            JObject jo15 = new JObject();
            jo15.Add("dm", "101119800");
            jo15.Add("text", "其他凭证");
            jo15.Add("sl", "0.1");
            ja.Add(jo15);

            return ja;
        }
    }
}