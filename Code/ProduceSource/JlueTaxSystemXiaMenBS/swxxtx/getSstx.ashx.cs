using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.swxxtx
{
    /// <summary>
    /// getSstx 的摘要说明
    /// </summary>
    public class getSstx : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/json;charset=UTF-8";
            context.Response.Write(File.ReadAllText(context.Server.MapPath("/swxxtx/getSstx.do")));
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