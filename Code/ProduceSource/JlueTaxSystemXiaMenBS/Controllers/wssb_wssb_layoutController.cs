using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JlueTaxSystemXiaMenBS.Code;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("wssb/wssb/layout")]
    public class wssb_wssb_layoutController : Controller
    {
        IYsbqcSetting set;
        public wssb_wssb_layoutController(IYsbqcSetting _is)
        {
            this.set = _is;
        }

        [Route("left.jsp")]
        public System.Web.Mvc.ActionResult left()
        {
            string zzsdm = "SBB_ZZS_YGZ_YBNSR";
            string str = System.IO.File.ReadAllText(Server.MapPath("left.nodeDatas.json"));
            JArray re_json = JsonConvert.DeserializeObject<JArray>(str);
            JArray zzs_ja = (JArray)re_json.Where(a => a["name"].ToString() == "增值税").FirstOrDefault().SelectToken("children");
            GDTXXiaMenUserYSBQC qc = set.getUserYSBQC(zzsdm);
            foreach (JObject zzs_jo in zzs_ja)
            {
                JObject attributes = (JObject)zzs_jo["attributes"];
                if (attributes["zssb_btn"].ToString() == "Y")
                {
                    if (qc.SBZT == set.ysbzt)
                    {
                        attributes["group_issb"] = "Y";
                        attributes["table_isfill"] = "Y";
                        attributes["table_url"] = "";
                    }
                    else if (qc.SBZT == set.wsbzt)
                    {
                        attributes["group_issb"] = "N";
                        attributes["table_isfill"] = "N";
                        attributes["table_url"] = "MainServlet?TABLE_NAME=SBB_ZZS_YGZ_YBNSR&TABLE_ACTION=submit";
                    }
                }
                else
                {
                    JToken jt = set.getUserYSBQCReportData(qc.Id, attributes["table_name"].ToString(), zzsdm);
                    if (qc.SBZT == set.ysbzt && jt.HasValues)
                    {
                        attributes["group_issb"] = "Y";
                        attributes["table_isfill"] = "Y";
                        attributes["table_url"] = "MainServlet?TABLE_NAME=" + attributes["table_name"] + "&TABLE_ACTION=display";
                    }
                    else if (qc.SBZT == set.ysbzt && !jt.HasValues)
                    {
                        attributes["group_issb"] = "Y";
                        attributes["table_isfill"] = "N";
                        attributes["table_url"] = "";
                    }
                    else if (qc.SBZT == set.wsbzt && jt.HasValues)
                    {
                        attributes["group_issb"] = "N";
                        attributes["table_isfill"] = "Y";
                        attributes["table_url"] = "MainServlet?TABLE_NAME=" + attributes["table_name"] + "&TABLE_ACTION=edit";
                    }
                    else if (qc.SBZT == set.wsbzt && !jt.HasValues)
                    {
                        attributes["group_issb"] = "N";
                        attributes["table_isfill"] = "N";
                        attributes["table_url"] = "MainServlet?TABLE_NAME=" + attributes["table_name"] + "&TABLE_ACTION=initial";
                    }
                }
            }
            ViewBag.nodeDatas = JsonConvert.SerializeObject(re_json, Formatting.Indented);
            return View();
        }
	}
}