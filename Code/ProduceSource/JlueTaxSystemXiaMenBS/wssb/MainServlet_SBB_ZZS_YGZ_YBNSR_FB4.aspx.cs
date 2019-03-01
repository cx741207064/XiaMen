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
    public partial class MainServlet_SBB_ZZS_YGZ_YBNSR_FB4 : System.Web.UI.Page
    {
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

            return_json = GTXMethod.getZzsData("SBB_ZZS_YGZ_YBNSR_FB4");
        }
    }
}