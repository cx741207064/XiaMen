using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.tnsfwHome
{
    /// <summary>
    /// queryCurLocal 的摘要说明
    /// </summary>
    public class queryCurLocal : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string re_str = "";
            string parent_id = context.Request["parent_id"];
            string memu_item_id = context.Request["memu_item_id"];

            re_str = File.ReadAllText(context.Server.MapPath("queryCurLocal." + memu_item_id + ".json"));

            context.Response.ContentType = "text/json";
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