using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JlueTaxSystemXiaMenBS.Code;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Text;

namespace JlueTaxSystemXiaMenBS.bsfw.nsrgl
{
    public partial class querySblsxx : System.Web.UI.Page
    {
        public string return_json = "";
        public JArray return_ja = new JArray();

        protected void Page_Load(object sender, EventArgs e)
        {
            JObject jobj1 = new JObject();
            JObject jobj2 = new JObject();
            JObject jobj3 = new JObject();

            JArray ja = new JArray();

            GTXResult resultq = GTXMethod.GetXiaMenYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXXiaMenUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXXiaMenUserYSBQC item in ysbqclist)
                    {
                        if (item.ZSXM == "增值税")
                        {
                            jobj1.Add("id", item.Id.ToString());
                            jobj1.Add("value", "SBB_ZZS_YGZ_YBNSR");
                        }
                        if (item.ZSXM == "附加税")
                        {
                            jobj2.Add("id", item.Id.ToString());
                            jobj2.Add("value", "10109");
                        }
                        if (item.ZSXM == "印花税")
                        {
                            jobj3.Add("id", item.Id.ToString());
                            jobj3.Add("value", "10111");
                        }
                    }
                    ja.Add(jobj1);
                    ja.Add(jobj2);
                    ja.Add(jobj3);
                }
            }

            for (int i = 0; i < ja.Count;i++ )
            {
                GTXResult gr = GTXMethod.GetUserReportData(ja[i]["id"].ToString(), ja[i]["value"].ToString());
                if (gr.IsSuccess == true)
                {
                    JArray jarr = new JArray();
                    jarr = JsonConvert.DeserializeObject<JArray>(gr.Data.ToString());

                    if (jarr.Count == 0)
                    {
                        continue;
                    }
                    byte[] bytes = Convert.FromBase64String(jarr[0]["dataValue"].ToString());
                    string dataValue = Encoding.Default.GetString(bytes);
                    JObject jo = new JObject();
                    jo = JsonConvert.DeserializeObject<JObject>(dataValue);

                    return_ja.Add(jo);
                }
            }

            return_json = return_ja.ToString();
        }
    }
}