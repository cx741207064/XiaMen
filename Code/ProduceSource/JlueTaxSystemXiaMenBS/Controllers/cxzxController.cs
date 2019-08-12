using JlueTaxSystemXiaMenBS.Code;
using JlueTaxSystemXiaMenBS.Models;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("cxzx/sbxxcx")]
    public class cxzxController : Controller
    {
        YsbqcSetting set;
        public cxzxController(YsbqcSetting _is)
        {
            this.set = _is;
        }

        [Route("manager")]
        public System.Web.Mvc.ActionResult manager()
        {
            GDTXDate gd = set.getGDTXDate("YHSSB");
            return View(gd);
        }

        [Route("query")]
        public string query()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("query.json"));

            JArray rows = new JArray();
            int i = 0;
            JObject re_json = JsonConvert.DeserializeObject<JObject>(str);
            List<GDTXXiaMenUserYSBQC> listqc = set.getYsbUserYSBQC();
            string zsxm = Request.Form["query.zsxm"];
            if (zsxm != "")
            {
                listqc = listqc.Where(a => a.zsxmDm == zsxm).ToList();
            }
            List<GDTXXiaMenUserYSBQC> liqc = listqc.Where(a => a.BDDM == "YHSSB").ToList();
            if (liqc.Count > 0)
            {
                GDTXXiaMenUserYSBQC item = liqc[0];
                JArray data_json = (JArray)set.getUserYSBQCReportData(item.Id, item.BDDM);
                foreach (JObject data_jo in data_json)
                {
                    JObject jo = new JObject();
                    YhsData yd = JsonConvert.DeserializeObject<YhsData>(JsonConvert.SerializeObject(data_jo));
                    jo.Add("zspmmc", yd.zspmMc);
                    jo.Add("skssqz", item.SKSSQZ);
                    jo.Add("ybtse", yd.yrksfe);
                    jo.Add("rn", i.ToString());
                    jo.Add("row_id", i.ToString());
                    jo.Add("skssqq", item.SKSSQQ);
                    jo.Add("zsxmmc", item.ZSXM);
                    jo.Add("ysx", yd.jsje);
                    jo.Add("ynse", yd.ynsfe);
                    rows.Add(jo);
                    i++;
                }
            }

            liqc = listqc.Where(a => a.BDDM == "FJSSB").ToList();
            if (liqc.Count > 0)
            {
                GDTXXiaMenUserYSBQC item = liqc[0];
                JObject jo = new JObject();
                JObject data_json = (JObject)set.getUserYSBQCReportData(item.Id, item.BDDM);
                FjsData fd = JsonConvert.DeserializeObject<FjsData>(JsonConvert.SerializeObject(data_json));

                jo.Add("zspmmc", "市区（增值税附征）");
                jo.Add("skssqz", item.SKSSQZ);
                jo.Add("ybtse", fd.bqybtse);
                jo.Add("rn", i.ToString());
                jo.Add("row_id", i.ToString());
                jo.Add("skssqq", item.SKSSQQ);
                jo.Add("zsxmmc", item.ZSXM);
                jo.Add("ysx", fd.hj);
                jo.Add("ynse", fd.bqynse);
                rows.Add(jo);
                i++;

                JObject jo1 = new JObject(jo);
                jo1["zspmmc"] = "增值税教育费附加";
                jo1["ynse"] = fd.bqynse1;
                jo1["ybtse"] = fd.bqybtse1;
                rows.Add(jo1);
                i++;

                JObject jo2 = new JObject(jo);
                jo2["zspmmc"] = "增值税地方教育附加";
                jo2["ynse"] = fd.bqynse2;
                jo2["ybtse"] = fd.bqybtse2;
                rows.Add(jo2);
                i++;
            }

            liqc = listqc.Where(a => a.BDDM == "SBB_ZZS_YGZ_YBNSR").ToList();
            if (liqc.Count > 0)
            {
                GDTXXiaMenUserYSBQC item = liqc[0];
                JObject jo = new JObject();
                JObject data_json = (JObject)set.getUserYSBQCReportData(item.Id, item.BDDM, item.BDDM);
                ZzsYgzYbnsrPublic zp = JsonConvert.DeserializeObject<ZzsYgzYbnsrPublic>(JsonConvert.SerializeObject(data_json));
                ZzsYgzYbnsrZBData d = zp.ZBData;

                jo.Add("zspmmc", "商业(17%、16%)");
                jo.Add("skssqz", item.SKSSQZ);
                jo.Add("ybtse", d.YBBYS_34);
                jo.Add("rn", i.ToString());
                jo.Add("row_id", i.ToString());
                jo.Add("skssqq", item.SKSSQQ);
                jo.Add("zsxmmc", item.ZSXM);
                jo.Add("ysx", d.YBBYS_1);
                jo.Add("ynse", d.YBBYS_19);
                rows.Add(jo);
                i++;

                JObject jo2 = new JObject(jo);
                jo2["zspmmc"] = "其他现代服务";
                jo2["ybtse"] = "0";
                jo2["ysx"] = "0";
                jo2["ynse"] = "0";

                rows.Add(jo2);
                i++;
            }

            re_json["rows"] = rows;
            re_json["total"] = i;

            Response.ContentType = "application/json;charset=UTF-8";
            return JsonConvert.SerializeObject(re_json);
        }

    }
}