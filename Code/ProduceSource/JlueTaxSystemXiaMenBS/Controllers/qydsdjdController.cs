using JlueTaxSystemXiaMenBS.Code;
using JlueTaxSystemXiaMenBS.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("jsdzsb/qydsdjd")]
    public class qydsdjdController : Controller
    {
        YsbqcSetting set { get; set; }

        Service service { get; set; }

        GDTXUserYSBQC qc { get { return set.getUserYSBQC(bddm); } }

        BDDM bddm { get { return BDDM.QYSDS; } }

        ContentResult cr { get; set; }

        List<string> param { get; set; }

        public qydsdjdController(YsbqcSetting _is, Service _ser)
        {
            this.set = _is;
            service = _ser;
            param = new List<string>();
            //qc = set.getUserYSBQC(this.GetType());
        }

        [Route("czzsIndex.do")]
        public ActionResult czzsIndex()
        {
            Model m = service.getModel(bddm.ToString());
            return View(m);
        }

        [Route("czzsInCheck.do")]
        public ActionResult czzsInCheck()
        {
            return RedirectToAction("czzsFfzIndex");
        }

        [Route("jdservice.do")]
        public ActionResult jdservice(bool view, QysdsCommit input, bool b_delete = false, bool isCommit = false, bool b_service = false)
        {
            string tabid = Request.QueryString["context.tabId"] ?? Request.Form["tabid"];
            tabid = Regex.Replace(tabid, "WZ", "");
            string viewName = "", json = "";
            JToken data;
            QysdsModel m = new QysdsModel();
            if (isCommit && b_service)
            {
                viewName = "jdservice." + tabid + ".view";
                json = JsonConvert.SerializeObject(input);
                JObject jo = JObject.Parse(JsonConvert.SerializeObject(input));
                set.saveUserYSBQCReportData(jo, qc.Id.ToString(), tabid);
            }
            else if (b_delete)
            {
                service.DeleteQysdsTable(tabid);
                RedirectResult rr = new RedirectResult("czzsFfzIndex.do");
                return rr;
            }
            else if (!isCommit && b_service)
            {
                viewName = "jdservice." + tabid;
                if (tabid == QysdsTable.ZS6003.ToString())
                {
                    data = set.getUserYSBQCReportData(qc.Id, bddm.ToString());
                    m.QysdsZb = JsonConvert.DeserializeObject<QysdsZb>(JsonConvert.SerializeObject(data));
                }
                else
                {
                    data = set.getUserYSBQCReportData(qc.Id, tabid);
                    json = JsonConvert.SerializeObject(data);
                }
            }
            m.json = json;
            m.tabId = tabid;
            m.view = view.ToString().ToLower();
            return View(viewName, m);
        }

        [Route("czzsFfzIndex.do")]
        public ActionResult czzsFfzIndex()
        {
            JObject jo = new JObject();
            QysdsModel m = new QysdsModel();
            foreach (QysdsTable tab in Enum.GetValues(typeof(QysdsTable)))
            {
                string table = tab.ToString();
                jo[table] = new JObject();
                JToken jt = set.getUserYSBQCReportData(qc.Id, table);
                if (jt.HasValues)
                {
                    jo[table]["HasValues"] = true;
                }
                else
                {
                    jo[table]["HasValues"] = false;
                }
            }
            m.tableState = jo;
            m.Nsrxx = service.getModel(bddm.ToString()).Nsrxx;
            m.GDTXDate = service.getModel(bddm.ToString()).GDTXDate;
            return View(m);
        }

        [Route("czzsYbnsrZb.do")]
        public ActionResult czzsYbnsrZb()
        {
            JToken data = set.getUserYSBQCReportData(qc.Id, qc.BDDM);
            QysdsZb zb = JsonConvert.DeserializeObject<QysdsZb>(JsonConvert.SerializeObject(data));
            JToken ZS6001 = set.getUserYSBQCReportData(qc.Id, QysdsTable.ZS6001.ToString());
            QysdsCommit commit1 = JsonConvert.DeserializeObject<QysdsCommit>(JsonConvert.SerializeObject(ZS6001));
            JToken ZS6002 = set.getUserYSBQCReportData(qc.Id, QysdsTable.ZS6002.ToString());
            QysdsCommit commit2 = JsonConvert.DeserializeObject<QysdsCommit>(JsonConvert.SerializeObject(ZS6002));
            zb.LJ_MSSRJSSRSDJMDYHJE = commit1.N41;
            zb.LJ_GDZCJSZJTJE = commit2.N29;
            QysdsModel m = new QysdsModel() { json = JsonConvert.SerializeObject(zb), tabId = bddm.ToString(), view = "false" };
            m.Nsrxx = service.getModel(bddm.ToString()).Nsrxx;
            m.GDTXDate = service.getModel(bddm.ToString()).GDTXDate;
            return View(m);
        }

        [Route("czzsYbnsrCalc.do")]
        public ActionResult czzsYbnsrCalc()
        {
            JObject input = set.getInputStream();
            string str = System.IO.File.ReadAllText(Server.MapPath("czzsYbnsrCalc.json"));
            service.CalcQysds(input["sbbVO"] as JObject);
            cr = set.JsonResult(input["sbbVO"]);
            return cr;
        }

        [Route("czzsYbnsrSub.do")]
        public void czzsYbnsrSub(QysdsZb input)
        {
            JObject jo = JObject.Parse(JsonConvert.SerializeObject(input));
            set.saveUserYSBQCReportData(jo, qc.Id.ToString(), qc.BDDM);

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
        public ActionResult czzsYbnsrCheck()
        {
            param.Add("czzsYbnsrCheck");
            JObject jo = set.GetJsonObject(param);
            JToken QYSDS = set.getUserYSBQCReportData(qc.Id, bddm.ToString());
            if (QYSDS.HasValues)
            {
                jo["success"] = true;
            }
            cr = set.JsonResult(jo);
            return cr;
        }

        [Route("czzsFfzZgDel.do")]
        public string czzsFfzZgDel()
        {
            service.DeleteQysdsTable(bddm.ToString());
            string str = System.IO.File.ReadAllText(Server.MapPath("czzsFfzZgDel.json"));
            Response.ContentType = "application/json;charset=UTF-8";
            return str;
        }

        [Route("czzsFfzDeclare.do")]
        public ActionResult czzsFfzDeclare()
        {
            service.UpdateSBZT(qc.Id, SBZT.YSB);
            Model m = new Model() { msg = "申报成功" };
            return View(YsbqcSetting.SBJG, m);
        }

        [Route("czzsJysbInCheck.do")]
        public ActionResult czzsJysbInCheck()
        {
            return View(YsbqcSetting.functionNotOpen);
        }

        [Route("czzsYjlsbInCheck.do")]
        public ActionResult czzsYjlsbInCheck()
        {
            return View(YsbqcSetting.functionNotOpen);
        }

        [Route("czzsGzsbInCheck.do")]
        public ActionResult czzsGzsbInCheck()
        {
            return View(YsbqcSetting.functionNotOpen);
        }

    }
}