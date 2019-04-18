using JlueTaxSystemXiaMenBS.Models;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class MainServlet : Controller
    {
        public ViewResult CWXX2016XQYKJZZ_ZCFZB(string TABLE_NAME, string TABLE_ACTION, NameValueCollection form)
        {
            ViewResult vr = new ViewResult();
            vr = createViewResult(TABLE_NAME, TABLE_ACTION);
            return vr;
        }

        public ViewResult CWXX2016XQYKJZZ_LRB(string TABLE_NAME, string TABLE_ACTION, NameValueCollection form)
        {
            ViewResult vr = new ViewResult();
            vr = createViewResult(TABLE_NAME, TABLE_ACTION);
            return vr;
        }

        public ViewResult CWXX2016XQYKJZZ_CX(string TABLE_NAME, string TABLE_ACTION, NameValueCollection form)
        {
            ViewResult vr = new ViewResult();
            vr.ViewName = "FunctionNotOpen";
            return vr;
        }

        ViewResult createViewResult(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            Message re_zd = new Message();

            switch (TABLE_ACTION)
            {
                case "zc":
                case "insert":
                case "update":
                case "zcupdate":
                    re_zd = new Message();
                    re_zd.TABLE_ACTION = TABLE_ACTION;
                    re_zd.msg = getMessageString(TABLE_NAME, TABLE_ACTION);
                    vr.ViewName = "Message";
                    vr = View(vr.ViewName, re_zd);
                    break;
                case "delete":
                    re_zd = new Message();
                    re_zd.TABLE_ACTION = TABLE_ACTION;
                    re_zd.msg = getMessageString(TABLE_NAME, TABLE_ACTION);
                    vr.ViewName = "Message";
                    vr = View(vr.ViewName, re_zd);
                    break;
                case "initial":
                    vr.ViewName = TABLE_NAME;
                    break;
                case "edit":
                    vr.ViewName = TABLE_NAME;
                    break;
                case "submit":
                    vr.ViewName = TABLE_NAME + "_" + TABLE_ACTION;
                    break;
                case "display":
                    vr.ViewName = TABLE_NAME;
                    break;
            }
            return vr;
        }

        string getMessageString(string TABLE_NAME, string TABLE_ACTION)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(AppDomain.CurrentDomain.BaseDirectory + "wssb/Message.xml");
            string msg = "";
            JObject Message = JsonConvert.DeserializeObject<JObject>(JsonConvert.SerializeXmlNode(xml));
            JToken tn = Message.SelectToken("root").SelectToken(TABLE_NAME);
            if (tn == null)
            {
                return msg;
            }
            JToken ta = tn.SelectToken(TABLE_ACTION);
            if (ta == null)
            {
                return msg;
            }
            msg = ta.SelectToken("msg").Value<string>();
            return msg;
        }

    }
}