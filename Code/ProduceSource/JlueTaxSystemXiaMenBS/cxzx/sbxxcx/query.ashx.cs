using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace JlueTaxSystemXiaMenBS.cxzx.sbxxcx
{
    /// <summary>
    /// query 的摘要说明
    /// </summary>
    public class query : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "application/json";
            context.Response.Write(File.ReadAllText(context.Server.MapPath("query.json")));
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