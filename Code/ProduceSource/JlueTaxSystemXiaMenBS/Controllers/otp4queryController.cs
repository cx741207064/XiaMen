using JlueTaxSystemXiaMenBS.Code;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.IO;
using JlueTaxSystemXiaMenBS.Models;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("otp4query")]
    public class otp4queryController : Controller
    {
        IYsbqcSetting set;
        public otp4queryController(IYsbqcSetting _is)
        {
            this.set = _is;
        }

        [Route("List.do")]
        public System.Web.Mvc.ActionResult List()
        {
            GDTXDate gd = set.getGDTXDate("FJSSB");
            return View(gd);
        }

        [Route("query.do")]
        public string query()
        {
            return query_public();
        }

        [Route("pageSize.do")]
        public string pageSize()
        {
            return query_public();
        }
        [Route("first.do")]
        public string first()
        {
            return query_public();
        }

        [Route("last.do")]
        public string last()
        {
            return query_public();
        }

        [Route("prev.do")]
        public string prev()
        {
            return query_public();
        }

        [Route("next.do")]
        public string next()
        {
            return query_public();
        }

        [Route("go.do")]
        public string go()
        {
            return query_public();
        }

        [Route("downloadExcel.do")]
        public System.Web.Mvc.ActionResult downloadExcel()
        {
            return View("FunctionNotOpen");
        }

        public string query_public()
        {
            StreamReader sr = new StreamReader(Request.InputStream);
            JObject in_jo = JsonConvert.DeserializeObject<JObject>(sr.ReadToEnd());
            string zsxmdm = in_jo["cond"]["zsxmdm"].ToString();
            string pageSize = in_jo["pagination"]["pageSize"].ToString();

            JArray result = new JArray();
            int i = 1;
            string str = System.IO.File.ReadAllText(Server.MapPath("query.json"));
            JObject re_json = JsonConvert.DeserializeObject<JObject>(str);
            List<GDTXXiaMenUserYSBQC> listqc = set.getYsbUserYSBQC();
            if (zsxmdm != "")
            {
                listqc = listqc.Where(a => a.zsxmDm == zsxmdm).ToList();
            }
            List<GDTXXiaMenUserYSBQC> liqc = listqc.Where(a => a.BDDM == "YHSSB").ToList();
            if (liqc.Count > 0)
            {
                GDTXXiaMenUserYSBQC item = liqc[0];
                JArray data_json = (JArray)set.getUserYSBQCReportData(item.Id, item.BDDM);
                data_json = data_json == null ? new JArray() : data_json;
                foreach (JObject data_jo in data_json)
                {
                    JObject jo = new JObject();
                    jo.Add("skssqq", item.SKSSQQ);
                    jo.Add("djxh", 10113502010000054370);
                    jo.Add("rn", i);
                    jo.Add("pzxh", "");
                    jo.Add("zsxmdm", item.zsxmDm);
                    jo.Add("yzpzzldm", "BDA0610794");
                    jo.Add("sbrq", item.HappenDate);
                    jo.Add("ybtse", data_jo["yrksfe"]);
                    jo.Add("sbfsdm", "32");
                    jo.Add("skssqz", item.SKSSQZ);
                    jo.Add("sbuuid", null);
                    jo.Add("zspmdm", data_jo["zspm"]);
                    result.Add(jo);
                    i++;
                }
            }

            liqc = listqc.Where(a => a.BDDM == "FJSSB").ToList();
            if (liqc.Count > 0)
            {
                GDTXXiaMenUserYSBQC item = liqc[0];
                JObject jo = new JObject();
                JObject data_json = (JObject)set.getUserYSBQCReportData(item.Id, item.BDDM);
                jo["skssqq"] = item.SKSSQQ;
                jo["djxh"] = 10113502010000054370;
                jo["rn"] = i;
                jo["pzxh"] = "";
                jo["zsxmdm"] = item.zsxmDm;
                jo["yzpzzldm"] = "BDA0610678";
                jo["sbrq"] = item.HappenDate;
                jo["ybtse"] = data_json["bqybtse"];
                jo["sbfsdm"] = "32";
                jo["skssqz"] = item.SKSSQZ;
                jo["sbuuid"] = null;
                jo["zspmdm"] = "101090101";
                result.Add(jo);
            }

            re_json["result"] = result;
            re_json["pagination"]["totalCount"] = i;
            re_json["pagination"]["pageSize"] = pageSize;

            Response.ContentType = "application/json;charset=UTF-8";
            return JsonConvert.SerializeObject(re_json);
        }

    }
}