using JlueTaxSystemXiaMenBS.Models;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using JlueTaxSystemXiaMenBS.Code;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    public class MainServletController : Controller
    {
        YsbqcSetting set { get; set; }

        string BDDM { get; set; }

        GDTXXiaMenUserYSBQC qc { get; set; }

        HttpRequestBase request { get; set; }

        public MainServletController(YsbqcSetting _is)
        {
            this.set = _is;
        }

        public MainServletController(YsbqcSetting _is, string DM, GDTXXiaMenUserYSBQC qc, HttpRequestBase req)
        {
            this.set = _is;
            this.BDDM = DM;
            this.qc = qc;
            this.request = req;
        }

        [Route("wssb/MainServlet")]
        public ViewResult index(string TABLE_NAME, string TABLE_ACTION)
        {
            this.BDDM = set.getBDDMFromTABLE_NAME(TABLE_NAME);
            if (!string.IsNullOrEmpty(BDDM))
            {
                this.qc = set.getUserYSBQC(BDDM);
            }

            //Type type = Assembly.Load("JlueTaxSystemXiaMenBS").GetType("JlueTaxSystemXiaMenBS.Controllers.MainServletController");
            Type type = this.GetType();
            MethodInfo method = type.GetMethod(TABLE_NAME);
            object obj = Activator.CreateInstance(type, set, BDDM, qc, base.Request);
            object[] parameters;
            switch (TABLE_NAME)
            {
                case "INFORMATION":
                    parameters = new object[] { TABLE_NAME, TABLE_ACTION };
                    break;
                default:
                    parameters = new object[] { TABLE_NAME, TABLE_ACTION };
                    break;
            }
            object result = method.Invoke(obj, parameters);
            ViewResult ar = (ViewResult)result;

            return View(ar.ViewName, ar.Model);
        }

        public ViewResult CWXX2016XQYKJZZ(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            vr = createViewResult(TABLE_NAME, TABLE_ACTION, vr);
            return vr;
        }

        public ViewResult CWXX2016XQYKJZZ_ZCFZB(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            vr = createViewResult(TABLE_NAME, TABLE_ACTION, vr);
            return vr;
        }

        public ViewResult CWXX2016XQYKJZZ_LRB(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            vr = createViewResult(TABLE_NAME, TABLE_ACTION, vr);
            return vr;
        }

        public ViewResult CWXX2016XQYKJZZ_CX(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            vr.ViewName = "FunctionNotOpen";
            return vr;
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult CWXX2016XQYKJZZ_HeadPartial(string TABLE_NAME, string TABLE_ACTION)
        {
            this.BDDM = set.getBDDMFromTABLE_NAME(TABLE_NAME);

            ModelMainServlet ms = new ModelMainServlet();
            ms.Nsrxx = set.getNsrxx();
            ms.GDTXDate = set.getGDTXDate(this.BDDM);
            return PartialView(ms);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult CWXX2016XQYKJZZ_JS_Partial(string TABLE_NAME, string TABLE_ACTION)
        {
            BDDM = set.getBDDMFromTABLE_NAME(TABLE_NAME);
            if (!string.IsNullOrEmpty(BDDM))
            {
                this.qc = set.getUserYSBQC(BDDM);
            }
            ModelMainServlet DBData = new ModelMainServlet();
            if (TABLE_ACTION == "edit" || TABLE_ACTION == "display")
            {
                JObject data_jo = (JObject)set.getUserYSBQCReportData(qc.Id, TABLE_NAME, qc.BDDM);
                DBData = JsonConvert.DeserializeObject<ModelMainServlet>(JsonConvert.SerializeObject(data_jo));
            }
            DBData.ta = (TABLE_ACTION)Enum.Parse(typeof(TABLE_ACTION), TABLE_ACTION);
            DBData.TABLE_NAME = TABLE_NAME;
            return PartialView(DBData);
        }

        public ViewResult INFORMATION(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            ModelMainServlet ms = new ModelMainServlet();
            ms.Nsrxx = set.getNsrxx();
            vr = View(TABLE_NAME, ms);
            return vr;
        }

        public ViewResult SBB_ZZS_YGZ_YBNSR(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            ZzsYgzYbnsrZBData ZBData = new ZzsYgzYbnsrZBData();

            vr = SBB_ZZS_YGZ_YBNSR_Load(ZBData);

            vr = createViewResult(TABLE_NAME, TABLE_ACTION, vr);
            return vr;
        }

        public ViewResult SBB_ZZS_YGZ_YBNSR_FB1(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();

            JObject dataConfig = new JObject();
            ZzsYgzYbnsrFB1Data fb1d = new ZzsYgzYbnsrFB1Data();
            dataConfig = set.getYbnsrzzsDataConfig(fb1d, TABLE_NAME);
            fb1d = JsonConvert.DeserializeObject<ZzsYgzYbnsrFB1Data>(JsonConvert.SerializeObject(dataConfig));
            fb1d.ta = (TABLE_ACTION)Enum.Parse(typeof(TABLE_ACTION), TABLE_ACTION);

            vr = createViewResult(TABLE_NAME, TABLE_ACTION, View("", fb1d));
            return vr;
        }

        public ViewResult SBB_ZZS_YGZ_YBNSR_FB2(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();

            JObject dataConfig = new JObject();
            ZzsYgzYbnsrFB2Data fb2d = new ZzsYgzYbnsrFB2Data();
            dataConfig = set.getYbnsrzzsDataConfig(fb2d, TABLE_NAME);
            fb2d = JsonConvert.DeserializeObject<ZzsYgzYbnsrFB2Data>(JsonConvert.SerializeObject(dataConfig));

            vr = createViewResult(TABLE_NAME, TABLE_ACTION, View("", fb2d));
            return vr;
        }

        public ViewResult SBB_ZZS_YGZ_YBNSR_FB3(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            vr = createViewResult(TABLE_NAME, TABLE_ACTION, vr);
            return vr;
        }

        public ViewResult SBB_ZZS_YGZ_YBNSR_FB4(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            vr = createViewResult(TABLE_NAME, TABLE_ACTION, vr);
            return vr;
        }

        public ViewResult SBB_ZZS_YGZ_YBNSR_FLZL5(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            vr = createViewResult(TABLE_NAME, TABLE_ACTION, vr);
            return vr;
        }

        public ViewResult SBB_ZZS_YGZ_YBNSR_JMSSBMXB(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();
            vr = createViewResult(TABLE_NAME, TABLE_ACTION, vr);
            return vr;
        }

        public ViewResult DZBS_QUERY(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();

            DZBS_QUERY re_dq = new DZBS_QUERY();
            re_dq.GDTXDate = set.getGDTXDate("SBB_ZZS_YGZ_YBNSR");
            vr = View(TABLE_NAME, re_dq);

            return vr;
        }

        public ViewResult DZBS_SBCX(string TABLE_NAME, string TABLE_ACTION)
        {
            ViewResult vr = new ViewResult();

            GDTXXiaMenUserYSBQC qc = set.getUserYSBQC("SBB_ZZS_YGZ_YBNSR");
            DZBS_SBCX re_dq = new DZBS_SBCX();
            if (qc.SBZT == set.wsbzt)
            {
                return View("Message", new Message { msg = "无符合要求的数据。", TABLE_ACTION = "dispaly" });
            }
            re_dq.GDTXDate = set.getGDTXDate("SBB_ZZS_YGZ_YBNSR");
            re_dq.Nsrxx = set.getNsrxx();
            JObject data_jo = (JObject)set.getUserYSBQCReportData(qc.Id, qc.BDDM, qc.BDDM);
            if (data_jo.HasValues)
            {
                ModelMainServlet DBData = JsonConvert.DeserializeObject<ModelMainServlet>(JsonConvert.SerializeObject(data_jo));
                JObject data_json = DBData.json;
                re_dq.XSE = data_json["YBBYS_1"].ToString();
                re_dq.YNSE = data_json["YBBYS_24"].ToString();
                re_dq.YBTSE = data_json["YBBYS_34"].ToString();
            }
            vr = View(TABLE_NAME, re_dq);

            return vr;
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult SBB_ZZS_YGZ_YBNSR_JS_Partial(string TABLE_NAME, string TABLE_ACTION)
        {
            BDDM = set.getBDDMFromTABLE_NAME(TABLE_NAME);
            if (!string.IsNullOrEmpty(BDDM))
            {
                this.qc = set.getUserYSBQC(BDDM);
            }

            ModelMainServlet DBData = new ModelMainServlet();
            if (TABLE_ACTION == "edit" || TABLE_ACTION == "display")
            {
                JObject data_jo = (JObject)set.getUserYSBQCReportData(qc.Id, TABLE_NAME, qc.BDDM);
                DBData = JsonConvert.DeserializeObject<ModelMainServlet>(JsonConvert.SerializeObject(data_jo));
            }
            DBData.ta = (TABLE_ACTION)Enum.Parse(typeof(TABLE_ACTION), TABLE_ACTION);
            DBData.TABLE_NAME = TABLE_NAME;
            return PartialView(DBData);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult SBB_ZZS_YGZ_YBNSR_HeadPartial(string TABLE_NAME, string TABLE_ACTION)
        {
            this.BDDM = set.getBDDMFromTABLE_NAME(TABLE_NAME);

            ModelMainServlet ms = new ModelMainServlet();
            ms.Nsrxx = set.getNsrxx();
            ms.GDTXDate = set.getGDTXDate(this.BDDM);
            return PartialView(ms);
        }

        [ChildActionOnly]
        public System.Web.Mvc.ActionResult Button_Partial(string TABLE_ACTION)
        {
            ModelMainServlet ms = new ModelMainServlet();
            ms.ta = (TABLE_ACTION)Enum.Parse(typeof(TABLE_ACTION), TABLE_ACTION);
            return PartialView(ms);
        }

        ViewResult SBB_ZZS_YGZ_YBNSR_Load(ZzsYgzYbnsrZBData ZBData)
        {
            Message m = new Message();

            JToken jt1 = set.getUserYSBQCReportData(this.qc.Id, "SBB_ZZS_YGZ_YBNSR_FB1", this.BDDM);
            if (jt1.HasValues)
            {
                ModelMainServlet zd = JsonConvert.DeserializeObject<ModelMainServlet>(JsonConvert.SerializeObject(jt1));
                JObject jo = zd.json;

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
                m.msg = "填写“《增值税申报表（一般纳税人适用）》”前，要先填写“《增值税纳税申报表》附列资料（一）”，请确认“《增值税纳税申报表》附列资料（一）”已经填写并保存";
                return View("Message", m);
            }

            JToken jt2 = set.getUserYSBQCReportData(qc.Id, "SBB_ZZS_YGZ_YBNSR_FB2", this.BDDM);
            if (jt2.HasValues)
            {
                ModelMainServlet zd = JsonConvert.DeserializeObject<ModelMainServlet>(JsonConvert.SerializeObject(jt2));
                JObject jo = zd.json;

                string YBBYS_12 = jo["SBDK_SE_12"].ToString();
                string YBBYS_14 = jo["JXZC_SE_13"].ToString();
                ZBData.YBBYS_12 = YBBYS_12;
                ZBData.YBBYS_14 = YBBYS_14;
            }

            JToken jt4 = set.getUserYSBQCReportData(qc.Id, "SBB_ZZS_YGZ_YBNSR_FB4", this.BDDM);
            if (jt4.HasValues)
            {
                ModelMainServlet zd = JsonConvert.DeserializeObject<ModelMainServlet>(JsonConvert.SerializeObject(jt4));
                JObject jo =zd.json;

                decimal YBBYS_28 = decimal.Parse(jo["BQSJDJSE_2"].ToString()) + decimal.Parse(jo["BQSJDJSE_3"].ToString()) + decimal.Parse(jo["BQSJDJSE_4"].ToString()) + decimal.Parse(jo["BQSJDJSE_5"].ToString());
                ZBData.FJ4_HJ = jo["BQSJDJSE_1"].ToString();
                ZBData.YBBYS_28 = YBBYS_28.ToString();
            }
            else
            {
                m.msg = "填写“《增值税申报表（一般纳税人适用）》”前，要先填写“《增值税纳税申报表》附列资料（四）”，请确认“《增值税纳税申报表》附列资料（四）”已经填写并保存";
                return View("Message", m);
            }

            getSBB_ZZS_YGZ_YBNSR_Bnlj(ref ZBData);
            return View("", ZBData);
        }

        void getSBB_ZZS_YGZ_YBNSR_Bnlj(ref ZzsYgzYbnsrZBData ZBData)
        {
            JObject jo_zb = JsonConvert.DeserializeObject<JObject>(JsonConvert.SerializeObject(ZBData));
            set.getYbnsrzzsBnlj(ref jo_zb, this.BDDM);
            ZBData = JsonConvert.DeserializeObject<ZzsYgzYbnsrZBData>(JsonConvert.SerializeObject(jo_zb));
        }

        ViewResult createViewResult(string TABLE_NAME, string TABLE_ACTION, ViewResult vr)
        {
            Message m = new Message();

            switch (TABLE_ACTION)
            {
                case "zc":
                case "insert":
                case "update":
                case "zcupdate":
                    savePublic(request.Form);
                    m = set.getMessage(TABLE_NAME, TABLE_ACTION);
                    m.TABLE_ACTION = TABLE_ACTION;
                    vr.ViewName = "Message";
                    vr = View(vr.ViewName, m);
                    break;
                case "delete":
                    GTXMethod.DeleteUserReportData(qc.Id.ToString(), TABLE_NAME);
                    m = set.getMessage(TABLE_NAME, TABLE_ACTION);
                    m.TABLE_ACTION = TABLE_ACTION;
                    vr.ViewName = "Message";
                    vr = View(vr.ViewName, m);
                    break;
                case "initial":
                    if (vr.ViewName != "Message")
                    {
                        vr.ViewName = TABLE_NAME;
                    }
                    break;
                case "edit":
                    vr.ViewName = TABLE_NAME;
                    break;
                case "submit":
                    qc = set.getUserYSBQC(TABLE_NAME);
                    GTXMethod.UpdateYSBQC(qc.Id.ToString(), set.ysbzt);
                    vr.ViewName = TABLE_NAME + "_" + TABLE_ACTION;
                    break;
                case "display":
                    vr.ViewName = TABLE_NAME;
                    break;
            }
            return vr;
        }

        void savePublic(NameValueCollection form)
        {
            JObject in_jo = new JObject();
            ModelMainServlet in_zd = new ModelMainServlet();
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
            //in_zd.ZBData = zbd;
            in_zd.json =in_jo;
            //in_zd.ta = (TABLE_ACTION)Enum.Parse(typeof(TABLE_ACTION), TABLE_ACTION);
            //saveData = JsonConvert.DeserializeObject<JObject>(JsonConvert.SerializeObject(in_zd));

            set.saveUserYSBQCReportData(in_zd, qc.Id.ToString(), TABLE_NAME, this.BDDM);
        }

    }
}