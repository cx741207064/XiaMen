using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("common")]
    public class commonController : ApiController
    {
        [Route("checktjts.do")]
        [AcceptVerbs("post", "get")]
        public HttpResponseMessage checktjts()
        {
            string str = File.ReadAllText(HttpContext.Current.Server.MapPath("checktjts.json"));

            return new HttpResponseMessage()
            {
                Content = new StringContent(str, Encoding.UTF8, "application/json")
            };
        }

        [Route("commonAjaxStart.do")]
        [AcceptVerbs("post", "get")]
        public HttpResponseMessage commonAjaxStart()
        {
            string str = File.ReadAllText(HttpContext.Current.Server.MapPath("commonAjaxStart.json"));

            return new HttpResponseMessage()
            {
                Content = new StringContent(str, Encoding.UTF8, "application/json")
            };
        }

        [Route("jyrq.do")]
        [HttpGet]
        public HttpResponseMessage jyrq()
        {
            string str = File.ReadAllText(HttpContext.Current.Server.MapPath("jyrq.json"));

            return new HttpResponseMessage()
            {
                Content = new StringContent(str, Encoding.UTF8, "application/json")
            };
        }

        [Route("codelist.do")]
        public HttpResponseMessage codelist([FromBody]string name)
        {
            name = HttpContext.Current.Request.Form["name"];
            string str = File.ReadAllText(HttpContext.Current.Server.MapPath("codelist." + name + ".json"));

            return new HttpResponseMessage()
            {
                Content = new StringContent(str, Encoding.UTF8)
            };
        }

    }
}
