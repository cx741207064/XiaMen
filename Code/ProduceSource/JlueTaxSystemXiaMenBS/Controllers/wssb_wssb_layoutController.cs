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
        YsbqcSetting set;
        public wssb_wssb_layoutController(YsbqcSetting _is)
        {
            this.set = _is;
        }

        [Route("left.jsp")]
        public System.Web.Mvc.ActionResult left()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("left.nodeDatas.json"));
            JArray re_json = JsonConvert.DeserializeObject<JArray>(str);

            JToken item_ZZS = re_json.Where(a => a["name"].ToString().IndexOf("增值税") > -1).FirstOrDefault();
            createNodeDatas("SBB_ZZS_YGZ_YBNSR", ref item_ZZS);

            JToken item_XQYKJZZ = re_json.Where(a => a["name"].ToString().IndexOf("小企业会计准则") > -1).FirstOrDefault();
            createNodeDatas("CWXX2016XQYKJZZ", ref item_XQYKJZZ);

            ViewBag.nodeDatas = JsonConvert.SerializeObject(re_json, Formatting.Indented);
            return View();
        }

        void createNodeDatas(string dm, ref JToken item)
        {
            JArray children_ja = (JArray)item.SelectToken("children");
            GDTXUserYSBQC qc = set.getUserYSBQC(dm);
            foreach (JObject children_jo in children_ja)
            {
                JObject attributes = (JObject)children_jo["attributes"];
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
                        attributes["table_url"] = "MainServlet?TABLE_NAME=" + dm + "&TABLE_ACTION=submit";
                    }
                }
                else
                {
                    JToken jt = set.getUserYSBQCReportData(qc.Id, attributes["table_name"].ToString(), dm);
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
        }

	}
}