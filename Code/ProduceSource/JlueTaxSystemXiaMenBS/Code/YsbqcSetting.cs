﻿using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Xml;
using JlueTaxSystemXiaMenBS.Models;
using JlueTaxSystemXiaMenBS.Controllers;
using System.Web.Mvc;
using System.Web.SessionState;
using System.Text.RegularExpressions;
using Formatting = Newtonsoft.Json.Formatting;
using System.Reflection;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class YsbqcSetting
    {
        HttpRequest request { get { return System.Web.HttpContext.Current.Request; } }

        static HttpSessionState session { get { return System.Web.HttpContext.Current.Session; } }

        string fileName { get; set; }

        string reqPath { get { return AppDomain.CurrentDomain.BaseDirectory + request.Path; } }

        DirectoryInfo Dir { get; set; }

        string JsonStr { get; set; }

        JToken retJtok { get; set; }

        JObject retJobj { get; set; }

        JArray retJarr { get; set; }

        JValue retJval { get; set; }

        string retStr { get; set; }

        ContentResult cr { get; set; }

        XmlDocument xd { get; set; }

        public string ysbzt
        {
            get
            {
                return "已申报";
            }
            set { }
        }
        public string wsbzt
        {
            get { return "未申报"; }
            set { }
        }

        public const string functionNotOpen = "FunctionNotOpen";

        public const string SBJG = "SBJG";

        public GDTXUserYSBQC getUserYSBQC(BDDM BDDM)
        {
            string s = BDDM.ToString();
            return getUserYSBQC(s);
        }

        public GDTXUserYSBQC getUserYSBQC(Type controller)
       {
           string s = controller.Name;
           s = s.Substring(0, s.IndexOf("Controller"));
           GTXResult resultq = GTXMethod.GetUserYSBQC();
           if (resultq.IsSuccess)
           {
               List<GDTXUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXUserYSBQC>>(resultq.Data.ToString());

               ysbqclist = ysbqclist.Where(a => a.BDDM.ToUpper() == s.ToUpper()).ToList();
               return ysbqclist[0];
           }
           else
           {
               //return new GDTXBeiJingUserYSBQC();
               return null;
           }
       }

        public GDTXUserYSBQC getUserYSBQC(string dm)
       {
           string s = dm.ToUpper();
           switch (s)
           {
               case "YBNSRZZSXBSZ":
                   s = "YBNSRZZS";
                   break;
           }
           GTXResult resultq = GTXMethod.GetUserYSBQC();
           if (resultq.IsSuccess)
           {
               List<GDTXUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXUserYSBQC>>(resultq.Data.ToString());

               ysbqclist = ysbqclist.Where(a => a.BDDM.ToUpper() == s).ToList();
               return ysbqclist[0];
           }
           else
           {
               return null;
           }
       }

        public List<GDTXUserYSBQC> getYsbUserYSBQC()
       {
           GTXResult resultq = GTXMethod.GetUserYSBQC();
           if (resultq.IsSuccess)
           {
               List<GDTXUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXUserYSBQC>>(resultq.Data.ToString());

               ysbqclist = ysbqclist.Where(a => a.SBZT == "已申报").ToList();
               return ysbqclist;
           }
           else
           {
               return null;
           }
       }

        public List<GDTXUserYSBQC> getWsbUserYSBQC()
        {
            GTXResult resultq = GTXMethod.GetUserYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXUserYSBQC>>(resultq.Data.ToString());

                ysbqclist = ysbqclist.Where(a => a.SBZT == "未申报").ToList();
                return ysbqclist;
            }
            else
            {
                return null;
            }
        }

        public GTXResult saveUserYSBQCReportData(ModelMainServlet ms, string userYsbqcId, string reportCode, string dataKey = "data")
        {
            List<GTXNameValue> nameList = new List<GTXNameValue>();
            GTXNameValue nv = new GTXNameValue();
            nv.key = dataKey;
            byte[] bytes = Encoding.Default.GetBytes(JsonConvert.SerializeObject(ms, Newtonsoft.Json.Formatting.None));
            string _result = HttpUtility.UrlEncode(Convert.ToBase64String(bytes));
            nv.value = _result;
            nameList.Add(nv);
            GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), userYsbqcId, reportCode);
            return saveresult;
        }

        public GTXResult saveUserYSBQCReportData(JToken json, string userYsbqcId, string reportCode, string dataKey = "data")
       {
           List<GTXNameValue> nameList = new List<GTXNameValue>();
           GTXNameValue nv = new GTXNameValue();
           nv.key = dataKey;
           byte[] bytes = Encoding.Default.GetBytes(JsonConvert.SerializeObject(json, Newtonsoft.Json.Formatting.None));
           string _result = HttpUtility.UrlEncode(Convert.ToBase64String(bytes));
           nv.value = _result;
           nameList.Add(nv);
           GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), userYsbqcId, reportCode);
           return saveresult;
       }

       public JToken getUserYSBQCReportData(int id, string reportCode, string dataKey = "data")
       {
           GTXResult gr = GTXMethod.GetUserReportData(id.ToString(), reportCode);
           if (gr.IsSuccess)
           {
               List<GDTXUserYSBQCReportData> dataList = JsonConvert.DeserializeObject<List<GDTXUserYSBQCReportData>>(gr.Data.ToString());
               if (dataList.Count > 0)
               {
                   GDTXUserYSBQCReportData data = dataList.Where(a => a.DataKey == dataKey).FirstOrDefault();
                   byte[] outputb = Convert.FromBase64String(data.DataValue);
                   string dataValue = Encoding.Default.GetString(outputb);
                   JToken re_json = JsonConvert.DeserializeObject<JToken>(dataValue);
                   return re_json;
               }
           }
           return JToken.FromObject(new object());
       }

       public Nsrxx getNsrxx()
       {
           Nsrxx X = new Nsrxx();
           GTXResult gr1 = GTXMethod.GetCompany();
           if (gr1.IsSuccess)
           {
               JObject jo = new JObject();
               jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
               if (jo.HasValues)
               {
                   JObject data_jo = jo;
                   X.NSRMC = data_jo["NSRMC"].ToString();
                   X.NSRSBH = data_jo["NSRSBH"].ToString();
                   X.DJZCLX = data_jo["DJZCLX"].ToString();
                   X.ZCDZ = data_jo["ZCDZ"].ToString();
                   X.SCJYDZ = data_jo["SCJYDZ"].ToString();
                   X.LXDH = data_jo["LXDH"].ToString();
                   X.GBHY = data_jo["GBHY"].ToString();
                   X.ZGDSSWJFJMC = data_jo["ZGDSSWJFJMC"].ToString();
               }
           }

           GTXResult gr2 = GTXMethod.GetCompanyPerson();
           if (gr2.IsSuccess)
           {
               JArray ja = new JArray();
               ja = JsonConvert.DeserializeObject<JArray>(gr2.Data.ToString());
               if (ja.Count > 0)
               {
                   JObject data_jo = (JObject)ja[0];
                   X.Name = data_jo["Name"].ToString();
                   X.IDCardNum = data_jo["IDCardNum"].ToString();
               }
           }
           return X;
       }

       public void getYbnsrzzsBnlj(ref JObject in_jo, string dm)
       {
           string Name = HttpContext.Current.Session["Name"].ToString();
           XmlDocument doc = new XmlDocument();
           doc.LoadXml(File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "industry.xml"));
           JToken industry = JsonConvert.DeserializeObject<JToken>(JsonConvert.SerializeXmlNode(doc));
           industry = industry.SelectToken("root.industry").Where(a => a["name"].ToString() == Name).ToList()[0];

           XmlDocument xml_bnlj = new XmlDocument();
           xml_bnlj.LoadXml(File.ReadAllText(HttpContext.Current.Server.MapPath(dm + "." + industry["value"] + ".xml")));
           JToken bnlj = JsonConvert.DeserializeObject<JToken>(JsonConvert.SerializeXmlNode(xml_bnlj));
           bnlj = bnlj.SelectToken("root." + dm);
           in_jo.Merge(bnlj, new JsonMergeSettings { MergeArrayHandling = MergeArrayHandling.Union });
       }

       public JObject getYbnsrzzsDataConfig(object in_obj, string dm)
       {
           string Name = HttpContext.Current.Session["Name"].ToString();
           XmlDocument doc = new XmlDocument();
           doc.LoadXml(File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "industry.xml"));
           JToken industry = JsonConvert.DeserializeObject<JToken>(JsonConvert.SerializeXmlNode(doc));
           industry = industry.SelectToken("root.industry").Where(a => a["name"].ToString() == Name).ToList()[0];

           JObject in_jo = JsonConvert.DeserializeObject<JObject>(JsonConvert.SerializeObject(in_obj));

           XmlDocument xml_config = new XmlDocument();
           xml_config.LoadXml(File.ReadAllText(HttpContext.Current.Server.MapPath(dm + "." + industry["value"] + ".xml")));
           JToken config = JsonConvert.DeserializeObject<JToken>(JsonConvert.SerializeXmlNode(xml_config));
           config = config.SelectToken("root." + dm);
           in_jo.Merge(config, new JsonMergeSettings { MergeArrayHandling = MergeArrayHandling.Union });
           return in_jo;
       }

       public GDTXDate getGDTXDate(Type type)
       {
           GDTXDate gd = new GDTXDate();
           GDTXUserYSBQC qc = getUserYSBQC(type);
           gd.sbrqq = qc.HappenDate.Substring(0, 8) + "01";
           gd.sbrqz = qc.SBQX;
           gd.sbNd = qc.HappenDate.Substring(0, 4);
           gd.sbYf = qc.HappenDate.Substring(5, 2);
           gd.skssq = qc.SKSSQQ.Substring(0, 7);
           gd.skssqq = qc.SKSSQQ;
           gd.skssqz = qc.SKSSQZ;
           gd.tbrq = qc.HappenDate;
           return gd;
       }

       public GDTXDate getGDTXDate(string dm)
       {
           GDTXDate gd = new GDTXDate();
           GDTXUserYSBQC qc = getUserYSBQC(dm);
           gd.sbrqq = qc.HappenDate.Substring(0, 8) + "01";
           gd.sbrqz = qc.SBQX;
           gd.sbNd = qc.HappenDate.Substring(0, 4);
           gd.sbYf = qc.HappenDate.Substring(5, 2);
           gd.skssq = qc.SKSSQQ.Substring(0, 7);
           gd.skssqq = qc.SKSSQQ;
           gd.skssqz = qc.SKSSQZ;
           gd.tbrq = qc.HappenDate;
           gd.skssNd = qc.SKSSQQ.Substring(0, 4);
           gd.skssYf = qc.SKSSQQ.Substring(5, 2);
           return gd;
       }

       public JArray getYhsZspmSl()
       {
           JArray ja = new JArray();

           JObject jo1 = new JObject();
           jo1.Add("dm", "101110101");
           jo1.Add("text", "购销合同");
           jo1.Add("sl", "0.0003");
           ja.Add(jo1);

           JObject jo2 = new JObject();
           jo2.Add("dm", "101110102");
           jo2.Add("text", "加工承揽合同");
           jo2.Add("sl", "0.0005");
           ja.Add(jo2);

           JObject jo3 = new JObject();
           jo3.Add("dm", "101110103");
           jo3.Add("text", "建设工程勘察设计合同");
           jo3.Add("sl", "0.0005");
           ja.Add(jo3);

           JObject jo4 = new JObject();
           jo4.Add("dm", "101110104");
           jo4.Add("text", "建筑安装工程承包合同");
           jo4.Add("sl", "0.0003");
           ja.Add(jo4);

           JObject jo5 = new JObject();
           jo5.Add("dm", "101110105");
           jo5.Add("text", "财产租赁合同");
           jo5.Add("sl", "0.001");
           ja.Add(jo5);

           JObject jo6 = new JObject();
           jo6.Add("dm", "101110106");
           jo6.Add("text", "货物运输合同(按运输费用万分之五贴花)");
           jo6.Add("sl", "0.0005");
           ja.Add(jo6);

           JObject jo7 = new JObject();
           jo7.Add("dm", "101110107");
           jo7.Add("text", "仓储保管合同");
           jo7.Add("sl", "0.001");
           ja.Add(jo7);

           JObject jo8 = new JObject();
           jo8.Add("dm", "101110108");
           jo8.Add("text", "借款合同");
           jo8.Add("sl", "0.00005");
           ja.Add(jo8);

           JObject jo9 = new JObject();
           jo9.Add("dm", "101110109");
           jo9.Add("text", "财产保险合同");
           jo9.Add("sl", "0.001");
           ja.Add(jo9);

           JObject jo10 = new JObject();
           jo10.Add("dm", "101110110");
           jo10.Add("text", "技术合同");
           jo10.Add("sl", "0.0003");
           ja.Add(jo10);

           JObject jo11 = new JObject();
           jo11.Add("dm", "101110200");
           jo11.Add("text", "产权转移书据");
           jo11.Add("sl", "0.0005");
           ja.Add(jo11);

           JObject jo12 = new JObject();
           jo12.Add("dm", "101110400");
           jo12.Add("text", "权利、许可证照");
           jo12.Add("sl", "5");
           ja.Add(jo12);

           JObject jo13 = new JObject();
           jo13.Add("dm", "101110501");
           jo13.Add("text", "资金账簿");
           jo13.Add("sl", "0.0005");
           ja.Add(jo13);

           JObject jo14 = new JObject();
           jo14.Add("dm", "101110599");
           jo14.Add("text", "其他营业账簿");
           jo14.Add("sl", "5");
           ja.Add(jo14);

           JObject jo15 = new JObject();
           jo15.Add("dm", "101119800");
           jo15.Add("text", "其他凭证");
           jo15.Add("sl", "0.1");
           ja.Add(jo15);

           return ja;
       }

       public void deleteYhsData(int id, string reportCode, string xh)
       {
           JArray data_ja = (JArray)getUserYSBQCReportData(id, reportCode);
           data_ja.Where(a => a["guid"].ToString() == xh).FirstOrDefault().Remove();
           saveUserYSBQCReportData(data_ja, id.ToString(), reportCode);
       }

       public string getBDDMFromTABLE_NAME(string TABLE_NAME)
       {
           JObject jo = JsonConvert.DeserializeObject<JObject>(File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "wssb/TABLE_NAME.json"));
           foreach (JProperty jp in jo.Properties())
           {
               int count = jp.Value.Where(a => a.ToString() == TABLE_NAME).Count();
               if (count > 0)
               {
                   return jp.Name;
               }
           }
           return "";
       }

       public Message getMessage(string TABLE_NAME, string TABLE_ACTION)
       {
           Message m = new Message();
           XmlDocument xml = new XmlDocument();
           xml.Load(AppDomain.CurrentDomain.BaseDirectory + "wssb/Message.xml");
           JObject Message = JsonConvert.DeserializeObject<JObject>(JsonConvert.SerializeXmlNode(xml));
           JToken tn = Message.SelectToken("root").SelectToken(TABLE_NAME);
           if (tn == null)
           {
               return m;
           }
           JToken ta = tn.SelectToken(TABLE_ACTION);
           if (ta == null)
           {
               return m;
           }
           JToken showNextButton = ta.SelectToken("showNextButton");
           if (showNextButton == null)
           {
               m.showNextButton = false;
           }
           else
           {
               m.showNextButton = bool.Parse(showNextButton.Value<string>());
           }
           m.msg = ta.SelectToken("msg").Value<string>();

           return m;
       }

       public JObject GetJsonObject(List<string> param)
       {
           lock (this)
           {
               fileName = "";
               foreach (string p in param)
               {
                   fileName += p + ".";
               }
               fileName += "json";
               Dir = Directory.GetParent(reqPath);
               JsonStr = System.IO.File.ReadAllText(Dir.GetFiles(fileName)[0].FullName);
               retJobj = JsonConvert.DeserializeObject<JObject>(JsonStr);
               return retJobj;
           }
       }

       public JArray GetJsonArray(List<string> param)
       {
           lock (this)
           {
               fileName = "";
               foreach (string p in param)
               {
                   fileName += p + ".";
               }
               fileName += "json";
               Dir = Directory.GetParent(reqPath);
               JsonStr = System.IO.File.ReadAllText(Dir.GetFiles(fileName)[0].FullName);
               retJarr = JsonConvert.DeserializeObject<JArray>(JsonStr);
               return retJarr;
           }
       }

       public JToken GetJsonValue(List<string> param)
       {
           lock (this)
           {
               fileName = "";
               foreach (string p in param)
               {
                   fileName += p + ".";
               }
               fileName += "json";
               Dir = Directory.GetParent(reqPath);
               JsonStr = System.IO.File.ReadAllText(Dir.GetFiles(fileName)[0].FullName);
               string val = JsonConvert.DeserializeObject<JValue>(JsonStr).Value<string>();
               bool bl = Regex.IsMatch(val, @"\A[\[\{]");
               if (!bl)
               {
                   retJtok = new JValue(val);
               }
               else
               {
                   retJtok = JsonConvert.DeserializeObject<JToken>(val);
                   //retJval = new JValue(JsonConvert.SerializeObject(retJtok));
               }
               return retJtok;
           }
       }

       public string GetJsonString(List<string> param)
       {
           lock (this)
           {
               fileName = "";
               foreach (string p in param)
               {
                   if (!string.IsNullOrEmpty(p))
                   {
                       fileName += p + ".";
                   }
               }
               fileName += "json";
               Dir = Directory.GetParent(reqPath);
               JsonStr = System.IO.File.ReadAllText(Dir.GetFiles(fileName)[0].FullName);
               JsonTextReader reader = new JsonTextReader(new StringReader(JsonStr));
               if (reader.TokenType == JsonToken.None)
               {
                   retStr = JsonStr;
               }
               else
               {
                   retJtok = JsonConvert.DeserializeObject<JToken>(JsonStr);
                   retStr = JsonConvert.SerializeObject(retJtok, Formatting.None);
               }
               return retStr;
           }
       }

       public ContentResult GetHtml(List<string> param, string fileExtension = "html")
       {
           lock (this)
           {
               fileName = "";
               foreach (string p in param)
               {
                   fileName += p + ".";
               }
               fileName += fileExtension;
               Dir = Directory.GetParent(reqPath);
               JsonStr = System.IO.File.ReadAllText(Dir.GetFiles(fileName)[0].FullName);
               cr = new ContentResult();
               cr.Content = JsonStr;
               cr.ContentEncoding = Encoding.UTF8;
               cr.ContentType = "text/html";
               return cr;
           }
       }

       public JValue GetXmlValue(List<string> param)
       {
           lock (this)
           {
               fileName = "";
               foreach (string p in param)
               {
                   fileName += p + ".";
               }
               fileName += "xml";
               Dir = Directory.GetParent(reqPath);
               JsonStr = System.IO.File.ReadAllText(Dir.GetFiles(fileName)[0].FullName);
               xd = new XmlDocument();
               xd.LoadXml(JsonConvert.DeserializeObject<JValue>(JsonStr).Value.ToString());
               retJval = new JValue(xd.InnerXml);
               return retJval;
           }
       }

       public static SessionModel getSession()
       {
           if (session.Count == 0)
           {
               //return null;
               throw new Exception("session为空，请重新进入模拟报税系统！");
           }
           SessionModel sm = new SessionModel();
           foreach (PropertyInfo pi in sm.GetType().GetProperties())
           {
               pi.SetValue(sm, session[pi.Name]);
           }
           return sm;
       }

       public JObject getInputStream()
       {
           StreamReader sr = new StreamReader(System.Web.HttpContext.Current.Request.InputStream);
           JObject jo = JsonConvert.DeserializeObject<JObject>(sr.ReadToEnd());
           return jo;
       }

       public ContentResult JsonResult(JToken input)
       {
           ContentResult cr = new ContentResult();
           cr.Content = JsonConvert.SerializeObject(input);
           cr.ContentEncoding = Encoding.UTF8;
           cr.ContentType = "application/json";
           return cr;
       }

    }
}