using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.swxxtx
{
    /// <summary>
    /// getBsdtyy 的摘要说明
    /// </summary>
    public class getBsdtyy : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/json;charset=UTF-8";
            context.Response.Write(File.ReadAllText(context.Server.MapPath("/swxxtx/getBsdtyy.do")));
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