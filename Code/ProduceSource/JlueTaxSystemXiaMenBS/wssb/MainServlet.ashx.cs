using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using JlueTaxSystemXiaMenBS.Code;
using System.Web.SessionState;

namespace JlueTaxSystemXiaMenBS.wssb
{
    /// <summary>
    /// MainServlet 的摘要说明
    /// </summary>
    public class MainServlet : IHttpHandler,IRequiresSessionState
    {
        string Zsxm = "增值税";
        public void ProcessRequest(HttpContext context)
        {
            string TABLE_NAME = (context.Request.QueryString["TABLE_NAME"] == null ? "" : context.Request.QueryString["TABLE_NAME"]);
            string TABLE_ACTION = (context.Request.QueryString["TABLE_ACTION"] == null ? "" : context.Request.QueryString["TABLE_ACTION"]);

            string TBQK = "";
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
                            TBQK = item.TBQK;
                        }
                    }
                }
            }

            if (TBQK == null || TBQK.ToString() == "")
            {
                context.Response.Redirect("SubmitResult" + ".html?Msg=没有已保存的数据，无法申报", true);
            }
            else
            {
                GTXResult upresult = GTXMethod.UpdateYSBQC(id, "已申报");
                context.Response.Redirect("SubmitResult" + ".html", true);
            }


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