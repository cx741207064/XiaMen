using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JlueTaxSystemXiaMenBS.Code;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemXiaMenBS.wssb
{
    public partial class MainServlet_SBB_ZZS_YGZ_YBNSR : System.Web.UI.Page
    {
         public string vv0 = "";
         public string vv1 = "";
         public string vv2 = "";
         public string vv3 = "";
         public string vv4 = "";

         public string KJQTFP_XSE15 = "";
         public string KJQTFP_XSE17 = "";
         public string YBBYS_11 = "";
         public string YBBYS_28 = "";

         public string SBDK_SE_12 = "";
         public string JXZC_SE_13 = "";

         public string FJ4_HJ = "";
         public string FB1_10 = "";
         public string FB1_9b_XXE = "";

         public string return_json = "{}";
         public string TABLE_ACTION = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            string Zsxm = "增值税";
            string Sbzt = "";
            GTXResult resultq = GTXMethod.GetXiaMenYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXXiaMenUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXXiaMenUserYSBQC item in ysbqclist)
                    {
                        if (item.ZSXM == Zsxm)
                        {
                            Sbzt = item.SBZT;
                        }
                    }
                }
            }

            if (Sbzt.Equals("已申报"))
            {
                TABLE_ACTION = "display";
            }

            getFB1Data();
            getFB2Data();
            getFB4Data();

            return_json = GTXMethod.getZzsData("SBB_ZZS_YGZ_YBNSR");

        }

        public void getFB1Data()
        {
            JObject jo = new JObject();
            jo = JsonConvert.DeserializeObject<JObject>(GTXMethod.getZzsData("SBB_ZZS_YGZ_YBNSR_FB1"));

            if (jo.ToString().Equals("{}"))
            {
                return;
            }

            vv0 = myConvert(decimal.Parse(jo["HJ_XSE1"].ToString()) + decimal.Parse(jo["HJ_XSE3"].ToString()) + decimal.Parse(jo["HJ_XSE23"].ToString()) - decimal.Parse(jo["HJ_XSE6"].ToString()));

            vv1 = myConvert(jo["HJ_XSE6"]);

            vv2 = myConvert(decimal.Parse(jo["HJ_XSE8"].ToString()) + decimal.Parse(jo["HJ_XSE9"].ToString()) + decimal.Parse(jo["HJ_XSE22"].ToString()) + decimal.Parse(jo["HJ_XSE10"].ToString()) + decimal.Parse(jo["HJ_XSE11"].ToString()) + decimal.Parse(jo["HJ_XSE12"].ToString()) + decimal.Parse(jo["HJ_XSE19"].ToString()) + decimal.Parse(jo["HJ_XSE20"].ToString()) + decimal.Parse(jo["HJ_XSE21"].ToString()) - decimal.Parse(jo["HJ_XSE13"].ToString()) - decimal.Parse(jo["HJ_XSE14"].ToString()));

            vv3 = myConvert(decimal.Parse(jo["HJ_XSE13"].ToString()) + decimal.Parse(jo["HJ_XSE14"].ToString()));

            vv4 = myConvert(decimal.Parse(jo["NSJCTZ_XSE1"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE2"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE3"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE23"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE4"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE5"].ToString()));

            FB1_9b_XXE = myConvert(jo["HJ_XSE22"]);
            FB1_10 = myConvert(jo["HJ_XSE11"]);

            KJQTFP_XSE15 = myConvert(jo["KJQTFP_XSE15"]);
            KJQTFP_XSE17 = myConvert(jo["KJQTFP_XSE17"]);
            YBBYS_11 = myConvert(decimal.Parse(jo["HJ_XXSE1"].ToString()) + decimal.Parse(jo["HJ_XXSE23"].ToString()));

        }

        public void getFB2Data()
        {
            JObject jo = new JObject();
            jo = JsonConvert.DeserializeObject<JObject>(GTXMethod.getZzsData("SBB_ZZS_YGZ_YBNSR_FB2"));
            if (jo.ToString().Equals("{}"))
            {
                return;
            }

            SBDK_SE_12 = myConvert(jo["SBDK_SE_12"]);
            JXZC_SE_13 = myConvert(jo["JXZC_SE_13"]);

        }

        public void getFB4Data()
        {
            JObject jo = new JObject();
            jo = JsonConvert.DeserializeObject<JObject>(GTXMethod.getZzsData("SBB_ZZS_YGZ_YBNSR_FB4"));

            if (jo.ToString().Equals("{}"))
            {
                return;
            }

            FJ4_HJ =myConvert( jo["BQSJDJSE_1"]);

            YBBYS_28 = myConvert(decimal.Parse(jo["BQSJDJSE_2"].ToString()) + decimal.Parse(jo["BQSJDJSE_3"].ToString()) + decimal.Parse(jo["BQSJDJSE_4"].ToString()) + decimal.Parse(jo["BQSJDJSE_5"].ToString()));

        }

        public string myConvert(object str)
        {
            string ReturnStr;
            if (str == null || str.ToString() == "")
            {
                str = "0";
            }
            ReturnStr = String.Format("{0:N1}", double.Parse(str.ToString()));
            return ReturnStr;
        }

    }

}