using JlueTaxSystemXiaMenBS.Code;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
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
    [RoutePrefix("swxxtx")]
    public class swxxtxController : ApiController
    {
        IYsbqcSetting set;
        public swxxtxController(IYsbqcSetting _is)
        {
            this.set = _is;
        }

        [Route("getSyjzpz.do")]
        public HttpResponseMessage getSyjzpz()
        {
            string str = File.ReadAllText(HttpContext.Current.Server.MapPath("getSyjzpz.json"));

            return new HttpResponseMessage()
            {
                Content = new StringContent(str, Encoding.UTF8, "application/json")
            };
        }

        [Route("getWddb.do")]
        public HttpResponseMessage getWddb()
        {
            string str = File.ReadAllText(HttpContext.Current.Server.MapPath("getWddb.json"));
            JObject re_json = JsonConvert.DeserializeObject<JObject>(str);

            List<GDTXXiaMenUserYSBQC> listqc = set.getWsbUserYSBQC();

            JArray gs_WSBZSXMGRID = new JArray();
            JArray ds_WSBZSXMGRID = new JArray();

            foreach (GDTXXiaMenUserYSBQC qc in listqc)
            {
                JObject it = new JObject();
                it["ZSXM_DM"] = "";
                it["NSQX_DM"] = "06";
                it["SKSSQ"] = qc.SBQX;
                it["TITLE"] = "";
                it["CMS_DEST_PATH"] = "";
                it["UPDATE_TIME"] = "";
                it["LRRQ"] = "";
                it["ZWBT"] = "";
                it["PUBDATE"] = "";
                it["WJM"] = "";
                it["FWRQ"] = "";
                it["syncField"] = "";

                switch (qc.BDDM)
                {
                    case "FJSSB":
                        it["ZSXMMC"] = "城市维护建设税";
                        ds_WSBZSXMGRID.Add(it);

                        JObject it2 = new JObject(it);
                        it2["ZSXMMC"] = "教育费附加";
                        ds_WSBZSXMGRID.Add(it2);

                        JObject it3 = new JObject(it);
                        it3["ZSXMMC"] = "地方教育附加";
                        ds_WSBZSXMGRID.Add(it3);
                        break;
                    default:
                        it["ZSXMMC"] = qc.TaskName;
                        gs_WSBZSXMGRID.Add(it);
                        break;
                }
            }
            re_json["gs_WSBZSXMGRID"] = new JValue(JsonConvert.SerializeObject(gs_WSBZSXMGRID));
            re_json["ds_WSBZSXMGRID"] = new JValue(JsonConvert.SerializeObject(ds_WSBZSXMGRID));

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonConvert.SerializeObject(re_json), Encoding.UTF8, "application/json")
            };
        }

        [Route("getFwtx.do")]
        public HttpResponseMessage getFwtx()
        {
            string str = File.ReadAllText(HttpContext.Current.Server.MapPath("getFwtx.json"));

            return new HttpResponseMessage()
            {
                Content = new StringContent(str, Encoding.UTF8, "application/json")
            };
        }

    }
}
