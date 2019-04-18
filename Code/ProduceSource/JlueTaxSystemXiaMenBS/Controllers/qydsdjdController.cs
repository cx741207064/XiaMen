using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("jsdzsb/qydsdjd")]
    public class qydsdjdController : Controller
    {
        [Route("czzsIndex.do")]
        public string czzsIndex()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("czzsIndex.html"));
            Response.ContentType = "text/html;charset=UTF-8";
            return str;
        }

        [Route("czzsInCheck.do")]
        public string czzsInCheck()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("czzsInCheck.html"));
            Response.ContentType = "text/html;charset=UTF-8";
            return str;
        }

        [Route("jdservice.do")]
        public string jdservice(string isCommit, string b_delete, string tabid)
        {
            isCommit = isCommit == null ? "false" : isCommit;
            b_delete = b_delete == null ? "false" : b_delete;

            string str = "";
            if (bool.Parse(isCommit))
            {
                str = System.IO.File.ReadAllText(Server.MapPath("jdservice." + tabid + ".isCommit.html"));
            }
            else if (bool.Parse(b_delete))
            {
                Response.StatusCode = 303;
                Response.RedirectLocation = "czzsFfzIndex.do";
            }
            else
            {
                string tabId = Request.QueryString["context.tabId"];
                str = System.IO.File.ReadAllText(Server.MapPath("jdservice." + tabId + ".html"));
            }
            Response.ContentType = "text/html;charset=UTF-8";
            return str;
        }

        [Route("czzsFfzIndex.do")]
        public string czzsFfzIndex()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("czzsFfzIndex.html"));
            Response.ContentType = "text/html;charset=UTF-8";
            return str;
        }

        [Route("czzsYbnsrZb.do")]
        public string czzsYbnsrZb()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("czzsYbnsrZb.html"));
            Response.ContentType = "text/html;charset=UTF-8";
            return str;
        }

        [Route("czzsYbnsrCalc.do")]
        public string czzsYbnsrCalc()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("czzsYbnsrCalc.json"));
            Response.ContentType = "application/json;charset=UTF-8";
            return str;
        }

        [Route("czzsYbnsrSub.do")]
        public void czzsYbnsrSub()
        {
            HttpResponseMessage rm = new HttpResponseMessage();
            rm.StatusCode = HttpStatusCode.SeeOther;
            string Scheme = Request.Url.Scheme;
            string Host = Request.Url.Host;
            int Port = Request.Url.Port;
            rm.Headers.Location = new Uri(Scheme + "://" + Host + ":" + Port + "/jsdzsb/qydsdjd/czzsFfzIndex.do");

            Response.StatusCode = 303;
            Response.RedirectLocation = Scheme + "://" + Host + ":" + Port + "/jsdzsb/qydsdjd/czzsFfzIndex.do";
        }

        [Route("czzsYbnsrCheck.do")]
        public string czzsYbnsrCheck()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("czzsYbnsrCheck.json"));
            Response.ContentType = "application/json;charset=UTF-8";
            return str;
        }

        [Route("czzsFfzZgDel.do")]
        public string czzsFfzZgDel()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("czzsFfzZgDel.json"));
            Response.ContentType = "application/json;charset=UTF-8";
            return str;
        }

    }
}