using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("dwfw")]
    public class dwfwController : Controller
    {
        [Route("commonAjaxTjxz.do")]
        public string commonAjaxTjxz()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("commonAjaxTjxz.json"));
            Response.ContentType = "application/json;charset=UTF-8";
            return str;
        }
    }
}