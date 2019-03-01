using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.Web.SessionState;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using JlueTaxSystemXiaMenBS.Code;

namespace JlueTaxSystemXiaMenBS.jsdzsb.yhssb
{
    /// <summary>
    /// tjsblb 的摘要说明
    /// </summary>
    public class tjsblb : IHttpHandler, IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            string ZsxmDm = context.Request["sbbVo['zsxmdm']"];
            string Zsxm = "印花税";
            string json = "";
            if (!ZsxmDm.Equals("10111"))
            {
                return;
            }
            JObject jo = new JObject();
            for (int i = 0; i < context.Request.Form.Count; i++)
            {
                string key = context.Request.Form.AllKeys[i];
                if (!key.Equals("temp_data"))
                {
                    string value = context.Request.Form[key];
                    jo.Add(key, value);
                }
            }

            json = JsonConvert.SerializeObject(jo);

            string id = "";
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
                            id = item.Id.ToString();
                        }
                    }
                }
            }
            if (ZsxmDm == "10111")
            {
                List<GTXNameValue> nameList = new List<GTXNameValue>();
                GTXNameValue nv = new GTXNameValue();
                nv.key = "data";
                byte[] bytes = Encoding.Default.GetBytes(json);
                string _result = Convert.ToBase64String(bytes);
                nv.value = _result;
                nameList.Add(nv);
                GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), id, ZsxmDm);
                if (saveresult.IsSuccess)
                {
                    GTXResult upresult = GTXMethod.UpdateYSBQC(id, "已申报");
                    string url = "../ShowResult.html?Msg=true";
                    context.Response.Redirect(url);
                }
                else
                {
                    string url = "../ShowResult.html?Msg=";
                    context.Response.Redirect(url);
                }
            }

            //context.Response.ContentType = "text/plain";
            //context.Response.ContentEncoding = Encoding.UTF8;
            //context.Response.Write("Hello World");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}