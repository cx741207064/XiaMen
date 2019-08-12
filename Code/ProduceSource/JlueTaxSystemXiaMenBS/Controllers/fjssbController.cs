using JlueTaxSystemXiaMenBS.Code;
using JlueTaxSystemXiaMenBS.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("jsdzsb/fjssb")]
    public class fjssbController : Controller
    {
        YsbqcSetting set;
        GDTXXiaMenUserYSBQC qc;
        FjsData DBData;
        public fjssbController(YsbqcSetting _is)
        {
            this.set = _is;
            qc = set.getUserYSBQC(this.GetType());
            DBData = getDBData();
        }

        [Route("index.do")]
        public System.Web.Mvc.ActionResult index()
        {
            if (qc.SBZT == set.ysbzt)
            {
                return View("CFSB");
            }
            else if (qc.SBZT == set.wsbzt && DBData != null)
            {
                deleteFjsData(qc.Id, qc.BDDM);
            }
            Nsrxx x = set.getNsrxx();
            GDTXDate gd = set.getGDTXDate(this.GetType());
            x.GDTXDate = gd;
            return View(x);
        }

        [Route("lb.do")]
        public System.Web.Mvc.ActionResult lb(string init)
        {
            if (init == "true" || DBData == null)
            {
                ViewBag.init = true;
            }
            else
            {
            }
            return View("submitSbb");
        }

        [Route("tjsbjl.do")]
        public System.Web.Mvc.ActionResult tjsbjl(string errorMsg)
        {
            if (errorMsg != null)
            {
                ViewBag.errorMsg = errorMsg;
            }
            else
            {
            }
            return View();
        }

        [Route("txsbb.do")]
        public System.Web.Mvc.ActionResult txsbb(FjsData fd)
        {
            string zspmDm = Request["sbbVo['zspmDm']"];
            string zzsxselx_dm = Request["sbbVo['zzsxselx_dm']"];
            JObject data_json = (JObject)set.getUserYSBQCReportData(qc.Id, qc.BDDM);
            if (data_json.HasValues)
            {
                Response.StatusCode = 303;
                Response.RedirectLocation = "/jsdzsb/fjssb/tjsbjl.do?errorMsg=%E5%90%8C%E4%B8%80%E4%B8%AA%E7%94%B3%E6%8A%A5%E8%A1%A8%E4%B8%AD%E4%B8%8D%E5%85%81%E8%AE%B8%E6%9C%89%E9%87%8D%E5%A4%8D%E7%9A%84%E7%94%B3%E6%8A%A5%E8%AE%B0%E5%BD%95";
            }
            else
            {
                ViewBag.zzsxselx_dm = zzsxselx_dm;
            }
            return View(fd);
        }

        [Route("submitSbb.do")]
        public System.Web.Mvc.ActionResult submitSbb(FjsData fd)
        {
            string zspmDm = Request["sbbVo['zspmDm']"];
            string zzsxselx_dm = Request["sbbVo['zzsxselx_dm']"];

            JObject in_jo = JObject.Parse(JsonConvert.SerializeObject(fd));
            set.saveUserYSBQCReportData(in_jo, qc.Id.ToString(), qc.BDDM);

            return View();
        }

        [Route("delete.do")]
        public System.Web.Mvc.ActionResult delete()
        {
            deleteFjsData(qc.Id, qc.BDDM);
            ViewBag.init = true;
            return View("submitSbb");
        }

        [Route("modify.do")]
        public System.Web.Mvc.ActionResult modify(FjsData fd)
        {
            JObject data_json = (JObject)set.getUserYSBQCReportData(qc.Id, qc.BDDM);
            fd = JsonConvert.DeserializeObject<FjsData>(JsonConvert.SerializeObject(data_json));
            ViewBag.zzsxselx_dm = fd.zzsxselx_dm;
            return View("txsbb");
        }

        [Route("modifySave.do")]
        public System.Web.Mvc.ActionResult modifySave(FjsData fd)
        {
            JObject in_jo = JObject.Parse(JsonConvert.SerializeObject(fd));
            set.saveUserYSBQCReportData(in_jo, qc.Id.ToString(), qc.BDDM);
            return View("submitSbb");
        }

        [Route("tjsblb.do")]
        public System.Web.Mvc.ActionResult tjsblb(FjsData fd)
        {
            GTXMethod.UpdateYSBQC(qc.Id.ToString(), set.ysbzt);
            return View();
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult tjsbjl_Partial(FjsData fd)
        {
            if (fd.OP == OP.Modify)
            {
                JObject data_json = (JObject)set.getUserYSBQCReportData(qc.Id, qc.BDDM);
                fd = JsonConvert.DeserializeObject<FjsData>(JsonConvert.SerializeObject(data_json));
            }
            GDTXDate gd = set.getGDTXDate(this.GetType());
            fd.GDTXDate = gd;
            return PartialView(fd);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult txsbb_Partial(FjsData fd)
        {
            if (fd.OP == OP.Modify)
            {
                JObject data_json = (JObject)set.getUserYSBQCReportData(qc.Id, qc.BDDM);
                fd = JsonConvert.DeserializeObject<FjsData>(JsonConvert.SerializeObject(data_json));
                fd.OP = OP.Modify;
            }

            GDTXDate gd = set.getGDTXDate(this.GetType());
            fd.skssqq = gd.skssqq;
            fd.skssqz = gd.skssqz;
            string zzsxselx_dm = fd.zzsxselx_dm;
            if (zzsxselx_dm == "11")
            {
                fd.xshjs = "0";
                fd.zzsxselx_mc = "增值税入库税款为0（月报）";
            }
            else if (zzsxselx_dm == "12")
            {
                fd.xshjs = "100000.0";
                fd.zzsxselx_mc = "月销售额合计10万（含）以下";
            }
            else if (zzsxselx_dm == "13")
            {
                fd.xshjs = "100000.1";
                fd.zzsxselx_mc = "月销售额合计数为10万以上";
            }

            return PartialView(fd);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult showData_Partial(bool init = false)
        {
            ViewBag.init = init;
            if (DBData == null)
            {
                ViewBag.init = true;
            }
            Nsrxx nsrxx = set.getNsrxx();
            GDTXDate gdate = set.getGDTXDate(this.GetType());
            return PartialView(Tuple.Create(DBData, nsrxx, gdate));
        }

        private FjsData getDBData()
        {
            FjsData fd = null;
            JObject data_json = (JObject)set.getUserYSBQCReportData(qc.Id, qc.BDDM);
            if (data_json.HasValues)
            {
                fd = JsonConvert.DeserializeObject<FjsData>(JsonConvert.SerializeObject(data_json));
            }
            return fd;
        }

        private void deleteFjsData(int id, string reportCode)
        {
            GTXMethod.DeleteUserReportData(id.ToString(), reportCode);
        }

    }
}