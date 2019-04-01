using JlueTaxSystemXiaMenBS.Code;
using JlueTaxSystemXiaMenBS.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("jsdzsb/yhssb")]
    public class yhssbController : Controller
    {
        IYsbqcSetting set;
        GDTXXiaMenUserYSBQC qc;
        public yhssbController(IYsbqcSetting _is)
        {
            this.set = _is;
            qc = set.getUserYSBQC(this.GetType());
        }

        [Route("index.do")]
        public System.Web.Mvc.ActionResult index()
        {
            Nsrxx x = set.getNsrxx();
            GDTXDate gd = set.getGDTXDate(this.GetType());
            x.GDTXDate = gd;
            return View(x);
        }

        [Route("lb.do")]
        public System.Web.Mvc.ActionResult lb(string delete, string modify, string modifysave, string xh, YhsData yd)
        {
            if (delete == "ture")
            {
                ViewBag.tzlx = "yhssblb";
                set.deleteYhsData(qc.Id, qc.BDDM, xh);
            }
            else if (modify == "ture")
            {
                ViewBag.xh = xh;
                ViewBag.op = "modify";
                return View("modify");
            }
            else if (modifysave == "ture")
            {
                ViewBag.tzlx = "yhssblb";
                if (!ModelState.IsValid)
                {
                    return View();
                }
                JArray yhsZspmSl = set.getYhsZspmSl();
                JToken zspm_jo = yhsZspmSl.Where(a => a["dm"].ToString().Equals(yd.zspm)).First();
                yd.zspmMc = zspm_jo["text"].ToString();

                JObject in_jo = JObject.Parse(JsonConvert.SerializeObject(yd));
                JArray data_json = (JArray)set.getUserYSBQCReportData(qc.Id, qc.BDDM);
                JObject jo = (JObject)data_json.Where(a => a["guid"].ToString() == xh).FirstOrDefault();
                jo.Merge(in_jo, new JsonMergeSettings { MergeArrayHandling = MergeArrayHandling.Union });
                set.saveUserYSBQCReportData(data_json, qc.Id.ToString(), qc.BDDM);
            }
            else
            {
                ViewBag.tzlx = "yhssblb";
                if (set.ysbzt == qc.SBZT)
                {
                    return View("CFSB");
                }
            }
            return View();
        }

        [Route("tjsbjl.do")]
        public System.Web.Mvc.ActionResult tjsbjl()
        {
            ViewBag.tzlx = "yhstjsbjl";
            string str = System.IO.File.ReadAllText(Server.MapPath("tjsbjl.html"));
            Response.ContentType = "text/html;charset=UTF-8";
            return View();
        }

        [Route("txsbb.do")]
        public System.Web.Mvc.ActionResult txsbb()
        {
            ViewBag.zspmDm = Request["sbbVo['zspmdm']"];
            return View();
        }

        [Route("submitSbb.do")]
        public System.Web.Mvc.ActionResult submitSbb(YhsData yd)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            JArray yhsZspmSl = set.getYhsZspmSl();
            JToken zspm_jo = yhsZspmSl.Where(a => a["dm"].ToString().Equals(yd.zspm)).First();
            yd.zspmMc = zspm_jo["text"].ToString();

            JObject in_jo = JObject.Parse(JsonConvert.SerializeObject(yd));
            JToken data_json = set.getUserYSBQCReportData(qc.Id, qc.BDDM);
            JArray data_ja = new JArray();
            if (data_json.HasValues)
            {
                data_ja = (JArray)data_json;
            }
            data_ja.Add(in_jo);
            set.saveUserYSBQCReportData(data_ja, qc.Id.ToString(), qc.BDDM);

            return View();
        }

        [Route("tjsblb.do")]
        public System.Web.Mvc.ActionResult tjsblb()
        {
            ViewBag.gosb_bz = "gosb";
            ViewBag.tzlx = "yhssblb";
            return View("lb");
        }

        [Route("tjsblbsb.do")]
        public System.Web.Mvc.ActionResult tjsblbsb()
        {
            GTXMethod.UpdateYSBQC(qc.Id.ToString(), set.ysbzt);
            return View();
        }

        [Route("import.do")]
        public System.Web.Mvc.ActionResult import()
        {
            return View("FunctionNotOpen");
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult Yhs_Head_Nsrxx_Partial()
        {
            Nsrxx x = set.getNsrxx();
            GDTXDate d = new GDTXDate();
            d.skssqq = qc.SKSSQQ;
            d.skssqz = qc.SKSSQZ;
            d.tbrq = qc.HappenDate;
            x.GDTXDate = d;
            return PartialView(x);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult yhstjsbjl_Partial()
        {
            GDTXDate d = new GDTXDate();
            d.skssqq = qc.SKSSQQ;
            d.skssqz = qc.SKSSQZ;
            return PartialView(d);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult showData_Partial()
        {
            List<YhsData> data = new List<YhsData>();
            JToken data_json = set.getUserYSBQCReportData(qc.Id, qc.BDDM);
            if (data_json.HasValues)
            {
                foreach (JObject j in data_json)
                {
                    YhsData d = JsonConvert.DeserializeObject<YhsData>(JsonConvert.SerializeObject(j));
                    d.index = data.Count();
                    d.skssqq = qc.SKSSQQ;
                    d.skssqz = qc.SKSSQZ;
                    data.Add(d);
                }
            }
            ViewBag.items = data;
            ViewBag.tzlx = "yhssblb";
            ViewBag.count = data.Count();
            return PartialView();
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult txsbb_Partial(string xh, string zspmDm, string op)
        {
            YhsData d = new YhsData();
            if (op == "modify")
            {
                ViewBag.op = op;
                ViewBag.xh = xh;
                JArray data_json = (JArray)set.getUserYSBQCReportData(qc.Id, qc.BDDM);
                JObject j = (JObject)data_json.Where(a => a["guid"].ToString() == xh).FirstOrDefault();
                d = JsonConvert.DeserializeObject<YhsData>(JsonConvert.SerializeObject(j));
            }
            else
            {
                JArray yhsZspmSl = set.getYhsZspmSl();
                JToken jo = yhsZspmSl.Where(a => a["dm"].ToString().Equals(zspmDm)).First();
                d.zspm = jo["dm"].ToString();
                d.zspmMc = jo["text"].ToString();
                d.sfl = jo["sl"].ToString();
            }
            d.skssqq = qc.SKSSQQ;
            d.skssqz = qc.SKSSQZ;
            ViewBag.tzlx = "yhssblb";
            return PartialView(d);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult buttonGroup_Partial()
        {
            JToken data_json =set.getUserYSBQCReportData(qc.Id, qc.BDDM);
            if (data_json != null && data_json.HasValues)
            {
                ViewBag.HasValues = true;
            }
            else
            {
                ViewBag.HasValues = false;
            }
            return PartialView();
        }

    }
}