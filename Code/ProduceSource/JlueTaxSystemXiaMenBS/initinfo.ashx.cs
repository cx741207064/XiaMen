using JlueTaxSystemXiaMenBS.Code;
using JlueTaxSystemXiaMenBS.Code.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace JlueTaxSystemXiaMenBS
{
    /// <summary>
    /// initinfo 的摘要说明
    /// </summary>
    public class initinfo : IHttpHandler,IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            Company co = GTXMethod.getCompanyinfo();
            context.Response.ContentType = "application/json";
            context.Response.Write(JsonConvert.SerializeObject(co));
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