using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.IO;
using System.Web.SessionState;

namespace JlueTaxSystemXiaMenBS.tnsfwHome
{
    /// <summary>
    /// index 的摘要说明
    /// </summary>
    public class index : IHttpHandler,IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            string re_str = "";
            string menuid = context.Request["menuid"];
            string menu_item_id = context.Request["menu_item_id"];

            if (menuid == null)
            {
                re_str = File.ReadAllText(context.Server.MapPath("index.aspx"));
            }
            else
            {
                re_str = File.ReadAllText(context.Server.MapPath("index." + menuid + "." + menu_item_id + ".html"));
            }

            context.Response.ContentType = "text/html";
            context.Response.Write(re_str);
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