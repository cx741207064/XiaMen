using JlueTaxSystemXiaMenBS.Code;
using JlueTaxSystemXiaMenBS.Models;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Collections.Specialized;
using System.Xml;
using System.Reflection;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("wssb")]
    public class wssbController : Controller
    {
        IYsbqcSetting set;
        GDTXXiaMenUserYSBQC qc;
        ZzsYgzYbnsrPublic DBData;
        string BDDM = "SBB_ZZS_YGZ_YBNSR";
        public wssbController(IYsbqcSetting _is)
        {
            this.set = _is;
            qc = set.getUserYSBQC(BDDM);
        }

        [Route("ImportServlet")]
        public System.Web.Mvc.ActionResult ImportServlet()
        {
            return View("FunctionNotOpen");
        }

        [Route("pdfservlet")]
        public System.Web.Mvc.ActionResult pdfservlet()
        {
            return View("FunctionNotOpen");
        }

        //[Route("MainServlet")]
        public System.Web.Mvc.ActionResult MainServlet(string TABLE_NAME, string TABLE_ACTION)
        {

            TABLE_ACTION = TABLE_ACTION.ToLower();

            ZzsYgzYbnsrPublic re_zd = new ZzsYgzYbnsrPublic();

            re_zd.Nsrxx = set.getNsrxx();
            re_zd.TABLE_ACTION = TABLE_ACTION;

            re_zd.msg = getMessageString(TABLE_NAME, TABLE_ACTION);

            switch (TABLE_ACTION)
            {
                case "zc":
                case "insert":
                case "update":
                case "zcupdate":
                    savePublic(Request.Form);
                    return View("MainServlet_SBB_ZZS_YGZ_YBNSR_Message", re_zd);
                case "delete":
                    GTXMethod.DeleteUserReportData(qc.Id.ToString(), TABLE_NAME);
                    return View("MainServlet_SBB_ZZS_YGZ_YBNSR_Message", re_zd);
                case "initial":
                    return MainServlet_initial(TABLE_NAME, re_zd);
                case "edit":
                    return MainServlet_edit(TABLE_NAME, re_zd);
                case "submit":
                    GTXMethod.UpdateYSBQC(qc.Id.ToString(), set.ysbzt);
                    return View("MainServlet_" + TABLE_NAME + "_" + TABLE_ACTION);
                case "display":
                    if (TABLE_NAME == "DZBS_QUERY" )
                    {
                        DZBS_QUERY re_dq = new DZBS_QUERY();
                        re_dq.GDTXDate = set.getGDTXDate(this.BDDM);
                        return View("MainServlet_" + TABLE_NAME, re_dq);
                    }
                    else if (TABLE_NAME == "DZBS_SBCX")
                    {
                        DZBS_SBCX re_dq = new DZBS_SBCX();
                        if (qc.SBZT == set.wsbzt)
                        {
                            return View("MainServlet_SBB_ZZS_YGZ_YBNSR_Message", new ZzsYgzYbnsrPublic { msg = "无符合要求的数据。", TABLE_ACTION = "dispaly" });
                        }
                        re_dq.GDTXDate = set.getGDTXDate(this.BDDM);
                        re_dq.Nsrxx = set.getNsrxx();
                        JObject data_jo = (JObject)set.getUserYSBQCReportData(qc.Id, qc.BDDM, qc.BDDM);
                        if (data_jo.HasValues)
                        {
                            DBData = JsonConvert.DeserializeObject<ZzsYgzYbnsrPublic>(JsonConvert.SerializeObject(data_jo));
                            JObject data_json = JsonConvert.DeserializeObject<JObject>(JsonConvert.DeserializeObject<JValue>(DBData.json).Value<string>());
                            re_dq.XSE = data_json["YBBYS_1"].ToString();
                            re_dq.YNSE = data_json["YBBYS_24"].ToString();
                            re_dq.YBTSE = data_json["YBBYS_34"].ToString();
                        }
                        return View("MainServlet_" + TABLE_NAME, re_dq);
                    }
                    re_zd.ZBData = new ZzsYgzYbnsrZBData();
                    break;
                default:
                    break;
            }
            return View("MainServlet_" + TABLE_NAME, re_zd);
        }

        [Route("wssb/public/jsp/clearNsrSession.jsp")]
        public string clearNsrSession()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("clearNsrSession.html"));
            Response.ContentType = "text/html;charset=UTF-8";
            return str;
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult MainServlet_SBB_ZZS_YGZ_YBNSR_Partial(string TABLE_NAME, string TABLE_ACTION)
        {
            DBData = new ZzsYgzYbnsrPublic();
            if (TABLE_ACTION == "edit" || TABLE_ACTION == "display")
            {
                JObject data_jo = (JObject)set.getUserYSBQCReportData(qc.Id, TABLE_NAME, qc.BDDM);
                DBData = JsonConvert.DeserializeObject<ZzsYgzYbnsrPublic>(JsonConvert.SerializeObject(data_jo));
            }
            DBData.TABLE_ACTION = TABLE_ACTION;
            DBData.TABLE_NAME = TABLE_NAME;
            return PartialView(DBData);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult MainServlet_SBB_ZZS_YGZ_YBNSR_HeadPartial()
        {
            ZzsYgzYbnsrPublic zd = new ZzsYgzYbnsrPublic();
            zd.Nsrxx = set.getNsrxx();
            zd.GDTXDate = set.getGDTXDate(this.BDDM);
            return PartialView(zd);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult MainServlet_SBB_ZZS_YGZ_YBNSR_ButtonPartial(string TABLE_ACTION)
        {
            ModelMainServlet ms = new ModelMainServlet();
            ms.ta = (TABLE_ACTION)Enum.Parse(typeof(TABLE_ACTION), TABLE_ACTION);
            return PartialView(ms);
        }

        void savePublic(NameValueCollection form)
        {
            JObject in_jo = new JObject();
            ZzsYgzYbnsrPublic in_zd = new ZzsYgzYbnsrPublic();
            ZzsYgzYbnsrZBData zbd = new ZzsYgzYbnsrZBData();
            JObject saveData = new JObject();
            string TABLE_NAME = form["TABLE_NAME"];
            string TABLE_ACTION = form["TABLE_ACTION"].ToLower();

            for (int i = 0; i < form.Count; i++)
            {
                string key = form.AllKeys[i];
                string value = form[key];
                in_jo.Add(key, value);
            }

            if (TABLE_NAME == this.BDDM)
            {
                zbd.YBBYS_1 = in_jo["YBBYS_1"].ToString();
                zbd.YBBYS_19 = in_jo["YBBYS_19"].ToString();
                zbd.YBBYS_34 = in_jo["YBBYS_34"].ToString();
            }
            in_zd.ZBData = zbd;
            in_zd.json = JsonConvert.SerializeObject(new JValue(JsonConvert.SerializeObject(in_jo)));
            in_zd.TABLE_ACTION = TABLE_ACTION;
            saveData = JsonConvert.DeserializeObject<JObject>(JsonConvert.SerializeObject(in_zd));

            set.saveUserYSBQCReportData(saveData, qc.Id.ToString(), TABLE_NAME, this.BDDM);
        }

        string getMessageString(string TABLE_NAME, string TABLE_ACTION)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(Server.MapPath("SBB_ZZS_YGZ_YBNSR.Message.xml"));
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

        System.Web.Mvc.ActionResult SBB_ZZS_YGZ_YBNSR_Load(ZzsYgzYbnsrPublic re_zd)
        {
            ZzsYgzYbnsrZBData ZBData = new ZzsYgzYbnsrZBData();
            JToken jt1 = set.getUserYSBQCReportData(qc.Id, "SBB_ZZS_YGZ_YBNSR_FB1", this.BDDM);
            if (jt1.HasValues)
            {
                ZzsYgzYbnsrPublic zd = JsonConvert.DeserializeObject<ZzsYgzYbnsrPublic>(JsonConvert.SerializeObject(jt1));
                JObject jo = JsonConvert.DeserializeObject<JObject>(JsonConvert.DeserializeObject<JValue>(zd.json).Value<string>());

                decimal vv0 = decimal.Parse(jo["HJ_XSE1"].ToString()) + decimal.Parse(jo["HJ_XSE3"].ToString()) + decimal.Parse(jo["HJ_XSE23"].ToString()) - decimal.Parse(jo["HJ_XSE6"].ToString());

                string vv1 = jo["HJ_XSE6"].ToString();

                decimal vv2 = decimal.Parse(jo["HJ_XSE8"].ToString()) + decimal.Parse(jo["HJ_XSE9"].ToString()) + decimal.Parse(jo["HJ_XSE22"].ToString()) + decimal.Parse(jo["HJ_XSE10"].ToString()) + decimal.Parse(jo["HJ_XSE11"].ToString()) + decimal.Parse(jo["HJ_XSE12"].ToString()) + decimal.Parse(jo["HJ_XSE19"].ToString()) + decimal.Parse(jo["HJ_XSE20"].ToString()) + decimal.Parse(jo["HJ_XSE21"].ToString()) - decimal.Parse(jo["HJ_XSE13"].ToString()) - decimal.Parse(jo["HJ_XSE14"].ToString());

                decimal vv3 = decimal.Parse(jo["HJ_XSE13"].ToString()) + decimal.Parse(jo["HJ_XSE14"].ToString());

                decimal vv4 = decimal.Parse(jo["NSJCTZ_XSE1"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE2"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE3"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE23"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE4"].ToString()) + decimal.Parse(jo["NSJCTZ_XSE5"].ToString());

                string FB1_9b_XXE = jo["HJ_XSE22"].ToString();
                string FB1_10 = jo["HJ_XSE11"].ToString();

                string YBBYS_7 = jo["KJQTFP_XSE15"].ToString();
                string YBBYS_8 = jo["KJQTFP_XSE17"].ToString();
                decimal YBBYS_11 = decimal.Parse(jo["HJ_XXSE1"].ToString()) + decimal.Parse(jo["HJ_XXSE23"].ToString());

                ZBData.vv0 = vv0.ToString();
                ZBData.vv1 = vv1;
                ZBData.vv2 = vv2.ToString();
                ZBData.vv3 = vv3.ToString();
                ZBData.vv4 = vv4.ToString();
                ZBData.FB1_9b_XXE = FB1_9b_XXE;
                ZBData.FB1_10 = FB1_10;
                ZBData.YBBYS_7 = YBBYS_7;
                ZBData.YBBYS_8 = YBBYS_8;
                ZBData.YBBYS_11 = YBBYS_11.ToString();
            }
            else
            {
                re_zd.msg = "填写“《增值税申报表（一般纳税人适用）》”前，要先填写“《增值税纳税申报表》附列资料（一）”，请确认“《增值税纳税申报表》附列资料（一）”已经填写并保存";
                return View("MainServlet_SBB_ZZS_YGZ_YBNSR_Message", re_zd);
            }

            JToken jt2 = set.getUserYSBQCReportData(qc.Id, "SBB_ZZS_YGZ_YBNSR_FB2", this.BDDM);
            if (jt2.HasValues)
            {
                ZzsYgzYbnsrPublic zd = JsonConvert.DeserializeObject<ZzsYgzYbnsrPublic>(JsonConvert.SerializeObject(jt2));
                JObject jo = JsonConvert.DeserializeObject<JObject>(JsonConvert.DeserializeObject<JValue>(zd.json).Value<string>());

                string YBBYS_12 = jo["SBDK_SE_12"].ToString();
                string YBBYS_14 = jo["JXZC_SE_13"].ToString();
                ZBData.YBBYS_12 = YBBYS_12;
                ZBData.YBBYS_14 = YBBYS_14;
            }

            JToken jt4 = set.getUserYSBQCReportData(qc.Id, "SBB_ZZS_YGZ_YBNSR_FB4", this.BDDM);
            if (jt4.HasValues)
            {
                ZzsYgzYbnsrPublic zd = JsonConvert.DeserializeObject<ZzsYgzYbnsrPublic>(JsonConvert.SerializeObject(jt4));
                JObject jo = JsonConvert.DeserializeObject<JObject>(JsonConvert.DeserializeObject<JValue>(zd.json).Value<string>());

                decimal YBBYS_28 = decimal.Parse(jo["BQSJDJSE_2"].ToString()) + decimal.Parse(jo["BQSJDJSE_3"].ToString()) + decimal.Parse(jo["BQSJDJSE_4"].ToString()) + decimal.Parse(jo["BQSJDJSE_5"].ToString());
                ZBData.FJ4_HJ = jo["BQSJDJSE_1"].ToString();
                ZBData.YBBYS_28 = YBBYS_28.ToString();
            }
            else
            {
                re_zd.msg = "填写“《增值税申报表（一般纳税人适用）》”前，要先填写“《增值税纳税申报表》附列资料（四）”，请确认“《增值税纳税申报表》附列资料（四）”已经填写并保存";
                return View("MainServlet_SBB_ZZS_YGZ_YBNSR_Message", re_zd);
            }

            getSBB_ZZS_YGZ_YBNSR_Bnlj(ref ZBData);
            re_zd.ZBData = ZBData;
            return View("MainServlet_SBB_ZZS_YGZ_YBNSR", re_zd);
        }

        void getSBB_ZZS_YGZ_YBNSR_Bnlj(ref ZzsYgzYbnsrZBData ZBData)
        {
            JObject jo_zb = JsonConvert.DeserializeObject<JObject>(JsonConvert.SerializeObject(ZBData));
            set.getYbnsrzzsBnlj(ref jo_zb, this.BDDM);
            ZBData = JsonConvert.DeserializeObject<ZzsYgzYbnsrZBData>(JsonConvert.SerializeObject(jo_zb));
        }

        System.Web.Mvc.ActionResult MainServlet_initial(string TABLE_NAME, ZzsYgzYbnsrPublic re_zd)
        {
            JObject dataConfig = new JObject();
            switch (TABLE_NAME)
            {
                case "SBB_ZZS_YGZ_YBNSR":
                    return SBB_ZZS_YGZ_YBNSR_Load(re_zd);
                case "SBB_ZZS_YGZ_YBNSR_FB1":
                    ZzsYgzYbnsrFB1Data fb1d = new ZzsYgzYbnsrFB1Data();
                    dataConfig = set.getYbnsrzzsDataConfig(fb1d, TABLE_NAME);
                    fb1d = JsonConvert.DeserializeObject<ZzsYgzYbnsrFB1Data>(JsonConvert.SerializeObject(dataConfig));
                    re_zd.FB1Data = fb1d;
                    break;
                case "SBB_ZZS_YGZ_YBNSR_FB2":
                    ZzsYgzYbnsrFB2Data fb2d = new ZzsYgzYbnsrFB2Data();
                    dataConfig = set.getYbnsrzzsDataConfig(fb2d, TABLE_NAME);
                    fb2d = JsonConvert.DeserializeObject<ZzsYgzYbnsrFB2Data>(JsonConvert.SerializeObject(dataConfig));
                    re_zd.FB2Data = fb2d;
                    break;
            }
            return View("MainServlet_" + TABLE_NAME, re_zd);
        }

        System.Web.Mvc.ActionResult MainServlet_edit(string TABLE_NAME, ZzsYgzYbnsrPublic re_zd)
        {
            switch (TABLE_NAME)
            {
                case "SBB_ZZS_YGZ_YBNSR":
                    return SBB_ZZS_YGZ_YBNSR_Load(re_zd);
                case "SBB_ZZS_YGZ_YBNSR_FB1":
                    ZzsYgzYbnsrFB1Data fb1d = new ZzsYgzYbnsrFB1Data();
                    re_zd.FB1Data = fb1d;
                    break;
                case "SBB_ZZS_YGZ_YBNSR_FB2":
                    ZzsYgzYbnsrFB2Data fb2d = new ZzsYgzYbnsrFB2Data();
                    re_zd.FB2Data = fb2d;
                    break;
            }
            return View("MainServlet_" + TABLE_NAME, re_zd);
        }

    }
}