using Newtonsoft.Json;
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

namespace JlueTaxSystemXiaMenBS.Code
{
    public class YsbqcSetting : IYsbqcSetting
    {
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

        public GDTXXiaMenUserYSBQC getUserYSBQC(Type controller)
       {
           string s = controller.Name;
           s = s.Substring(0, s.IndexOf("Controller"));
           GTXResult resultq = GTXMethod.GetXiaMenYSBQC();
           if (resultq.IsSuccess)
           {
               List<GDTXXiaMenUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQC>>(resultq.Data.ToString());

               ysbqclist = ysbqclist.Where(a => a.BDDM.ToUpper() == s.ToUpper()).ToList();
               return ysbqclist[0];
           }
           else
           {
               //return new GDTXBeiJingUserYSBQC();
               return null;
           }
       }

        public GDTXXiaMenUserYSBQC getUserYSBQC(string dm)
       {
           string s = dm.ToUpper();
           switch (s)
           {
               case "YBNSRZZSXBSZ":
                   s = "YBNSRZZS";
                   break;
           }
           GTXResult resultq = GTXMethod.GetXiaMenYSBQC();
           if (resultq.IsSuccess)
           {
               List<GDTXXiaMenUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQC>>(resultq.Data.ToString());

               ysbqclist = ysbqclist.Where(a => a.BDDM.ToUpper() == s).ToList();
               return ysbqclist[0];
           }
           else
           {
               return null;
           }
       }

        public List<GDTXXiaMenUserYSBQC> getYsbUserYSBQC()
       {
           GTXResult resultq = GTXMethod.GetXiaMenYSBQC();
           if (resultq.IsSuccess)
           {
               List<GDTXXiaMenUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQC>>(resultq.Data.ToString());

               ysbqclist = ysbqclist.Where(a => a.SBZT == "已申报").ToList();
               return ysbqclist;
           }
           else
           {
               return null;
           }
       }

        public List<GDTXXiaMenUserYSBQC> getWsbUserYSBQC()
        {
            GTXResult resultq = GTXMethod.GetXiaMenYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXXiaMenUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQC>>(resultq.Data.ToString());

                ysbqclist = ysbqclist.Where(a => a.SBZT == "未申报").ToList();
                return ysbqclist;
            }
            else
            {
                return null;
            }
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

        public GTXResult saveUserYSBQCReportData(string strJson, string userYsbqcId, string reportCode, string dataKey = "data")
       {
           List<GTXNameValue> nameList = new List<GTXNameValue>();
           GTXNameValue nv = new GTXNameValue();
           nv.key = dataKey;
           byte[] bytes = Encoding.Default.GetBytes(strJson);
           string _result = HttpUtility.UrlEncode(Convert.ToBase64String(bytes));
           nv.value = _result;
           nameList.Add(nv);
           GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), userYsbqcId, reportCode);
           return saveresult;
       }

        public string getUserYSBQCReportData_String(int id, string reportCode, string dataKey = "data")
       {
           string re_str = "";
           GTXResult gr = GTXMethod.GetUserReportData(id.ToString(), reportCode);
           if (gr.IsSuccess)
           {
               List<GDTXXiaMenUserYSBQCReportData> dataList = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQCReportData>>(gr.Data.ToString());
               if (dataList.Count > 0)
               {
                   byte[] outputb = Convert.FromBase64String(dataList[0].DataValue);
                   string dataValue = Encoding.Default.GetString(outputb);
                   re_str = dataValue;
               }
           }
           return re_str;
       }

       public JToken getUserYSBQCReportData(int id, string reportCode, string dataKey = "data")
       {
           GTXResult gr = GTXMethod.GetUserReportData(id.ToString(), reportCode);
           if (gr.IsSuccess)
           {
               List<GDTXXiaMenUserYSBQCReportData> dataList = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQCReportData>>(gr.Data.ToString());
               if (dataList.Count > 0)
               {
                   GDTXXiaMenUserYSBQCReportData data = dataList.Where(a => a.DataKey == dataKey).FirstOrDefault();
                   byte[] outputb = Convert.FromBase64String(data.DataValue);
                   string dataValue = Encoding.Default.GetString(outputb);
                   JToken re_json = JsonConvert.DeserializeObject<JToken>(dataValue);
                   return re_json;
               }
           }
           return JToken.FromObject(new object());
       }

       public void UpdateYsbqcSBSE(string userYSBQCId, JToken input_jo, string ywbm)
       {
           string sbse = "";
           string s = ywbm.ToUpper();
           switch (s)
           {
               case "YBNSRZZS":
                   sbse = input_jo["zzsybsbSbbdxxVO"]["zzssyyybnsr_zb"]["zbGrid"]["zbGridlbVO"][0]["bqybtse"].ToString();
                   break;
               case "LHFJSSB":
                   sbse = input_jo.SelectToken("fjsSbbdxxVO.fjssbb.sbxxGrid.bqybtsehj").ToString();
                   break;
           }
           GTXMethod.UpdateSBSE(userYSBQCId, sbse);
       }

       public JArray getsbzfmx(string sbblxDm)
       {
           JArray out_ja = new JArray();
           JObject data_json = new JObject();
           GDTXXiaMenUserYSBQC item = getUserYSBQC(sbblxDm);

           GTXResult gr = GTXMethod.GetUserReportData(item.Id.ToString(), item.ywbm);
           if (gr.IsSuccess)
           {
               List<GDTXXiaMenUserYSBQCReportData> dataList = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQCReportData>>(gr.Data.ToString());
               if (dataList.Count > 0)
               {
                   byte[] outputb = Convert.FromBase64String(dataList[0].DataValue);
                   string dataValue = Encoding.Default.GetString(outputb);
                   data_json = JsonConvert.DeserializeObject<JObject>(dataValue);
               }
           }

           JObject jo = new JObject();
           JObject jo2 = new JObject();
           JObject jo3 = new JObject();
           switch (item.ywbm.ToLower())
           {
               case "ybnsrzzs":
                   jo.Add("zsxmDm", "10101");
                   jo.Add("skssqq", item.SKSSQQ);
                   jo.Add("gdslxDm", "1");
                   jo.Add("sl1", "0.06");
                   jo.Add("pzxh", "10011119000006167259");
                   jo.Add("pzmxxh", "1");
                   jo.Add("zspmmc", "咨询服务");
                   jo.Add("ybtse", "0");
                   jo.Add("ynse", "");
                   jo.Add("skssqz", item.SKSSQZ);
                   jo.Add("zsxmmc", "增值税");
                   jo.Add("zspmDm", "101016703");
                   out_ja.Add(jo);
                   jo2 = (JObject)jo.DeepClone();
                   jo2["sl1"] = "0.16";
                   jo2["pzmxxh"] = "2";
                   jo2["zspmmc"] = "商业(17%)";
                   jo2["zspmDm"] = "101014001";
                   jo2["ybtse"] = item.SBSE;
                   out_ja.Add(jo2);
                   break;
               case "lhfjssb":
                   JToken sbxxGridlbVO = data_json.SelectToken("fjsSbbdxxVO.fjssbb.sbxxGrid.sbxxGridlbVO");

                   jo.Add("zsxmDm", "10109");
                   jo.Add("skssqq", item.SKSSQQ);
                   jo.Add("gdslxDm", "2");
                   jo.Add("sl1", "0.07");
                   jo.Add("pzxh", "10021119000009000150");
                   jo.Add("pzmxxh", "1");
                   jo.Add("zspmmc", "市区（增值税附征）");
                   jo.Add("skssqz", item.SKSSQZ);
                   jo.Add("zsxmmc", "城市维护建设税");
                   jo.Add("zspmDm", "101090101");
                   JToken bqybtse = sbxxGridlbVO.Where(a => a["zspmDm"].Value<string>() == jo["zspmDm"].Value<string>()).ToList<JToken>()[0]["bqybtse"];
                   JToken bqynsfe = sbxxGridlbVO.Where(a => a["zspmDm"].Value<string>() == jo["zspmDm"].Value<string>()).ToList<JToken>()[0]["bqynsfe"];
                   jo.Add("ybtse", bqybtse.Value<string>());
                   jo.Add("ynse", bqynsfe.Value<string>());
                   out_ja.Add(jo);

                   jo2 = (JObject)jo.DeepClone();
                   jo2["zsxmDm"] = "30203";
                   jo2["sl1"] = "0.03";
                   jo2["pzmxxh"] = "2";
                   jo2["zspmmc"] = "增值税教育费附加";
                   jo2["zsxmmc"] = "教育费附加";
                   jo2["zspmDm"] = "302030100";
                   bqybtse = sbxxGridlbVO.Where(a => a["zspmDm"].Value<string>() == jo2["zspmDm"].Value<string>()).ToList<JToken>()[0]["bqybtse"];
                   bqynsfe = sbxxGridlbVO.Where(a => a["zspmDm"].Value<string>() == jo2["zspmDm"].Value<string>()).ToList<JToken>()[0]["bqynsfe"];
                   jo2["ybtse"] = bqybtse.Value<string>();
                   jo2["ynse"] = bqynsfe.Value<string>();
                   out_ja.Add(jo2);

                   jo3 = (JObject)jo.DeepClone();
                   jo3["zsxmDm"] = "30216";
                   jo3["sl1"] = "0.02";
                   jo3["pzmxxh"] = "3";
                   jo3["zspmmc"] = "增值税地方教育附加";
                   jo3["zsxmmc"] = "地方教育附加";
                   jo3["zspmDm"] = "302160100";
                   bqybtse = sbxxGridlbVO.Where(a => a["zspmDm"].Value<string>() == jo3["zspmDm"].Value<string>()).ToList<JToken>()[0]["bqybtse"];
                   bqynsfe = sbxxGridlbVO.Where(a => a["zspmDm"].Value<string>() == jo3["zspmDm"].Value<string>()).ToList<JToken>()[0]["bqynsfe"];
                   jo3["ybtse"] = bqybtse.Value<string>();
                   jo3["ynse"] = bqynsfe.Value<string>();
                   out_ja.Add(jo3);
                   break;
           }
           return out_ja;
       }

       public void sbZfSubmit(string yzpzzlDm)
       {
           GDTXXiaMenUserYSBQC ysbqc = this.getUserYSBQC(yzpzzlDm);
           GTXMethod.UpdateYSBQC(ysbqc.Id.ToString(), "未申报");
           GTXMethod.UpdateSBSE(ysbqc.Id.ToString(), "");
           GTXMethod.DeleteUserReportData(ysbqc.Id.ToString(), ysbqc.ywbm);
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

       public void getHeadNsrxx(ref JObject in_jo)
       {
           GTXResult gr1 = GTXMethod.GetCompany();
           if (gr1.IsSuccess)
           {
               JObject jo = new JObject();
               jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
               if (jo.HasValues)
               {
                   JObject data_jo = jo;
                   in_jo["yhqymc"] = data_jo["NSRMC"];
                   in_jo["userName"] = data_jo["NSRSBH"];
               }
           }
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

       public JArray aqsb_getSbqcList()
       {
           JArray out_ja = new JArray();
           GTXResult resultq = GTXMethod.GetXiaMenYSBQC();
           if (resultq.IsSuccess)
           {
               List<GDTXXiaMenUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQC>>(resultq.Data.ToString());
               foreach (GDTXXiaMenUserYSBQC item in ysbqclist)
               {
                   JObject jo = new JObject();
                   if (item.SBZT == this.ysbzt)
                   {
                       jo.Add("sbztDm", "210");
                       jo.Add("sbrq", item.HappenDate);
                   }
                   else
                   {
                       jo.Add("sbztDm", "");
                       jo.Add("sbrq", "");
                   }
                   switch (item.ywbm.ToLower())
                   {
                       case "ybnsrzzs":
                           jo.Add("zsxmDm", "10101");
                           jo.Add("jkztDm", "");
                           jo.Add("gdslxDm", "1");
                           jo.Add("nsqxDm", "06");
                           jo.Add("zsxmMc", "增值税(适用于一般纳税)");
                           jo.Add("skssqQ", item.SKSSQQ);
                           jo.Add("yxcfsb", "");
                           jo.Add("url", item.Url);
                           jo.Add("lastzs", "Y");
                           jo.Add("yzpzzlDm", item.yzpzzlDm);
                           jo.Add("sbqx", item.SBQX);
                           jo.Add("skssqZ", item.SKSSQZ);
                           jo.Add("sbywbm", "YBNSRZZS");
                           jo.Add("uuid", "81D580E9A9D4793DE053674A0C845287");
                           jo.Add("zspmMc", "");
                           jo.Add("zspmDm", "101016703");
                           out_ja.Add(jo);
                           break;
                       case "lhfjssb":
                           jo.Add("zsxmDm", "30216");
                           jo.Add("jkztDm", "");
                           jo.Add("gdslxDm", "2");
                           jo.Add("nsqxDm", "06");
                           jo.Add("zsxmMc", "地方教育附加");
                           jo.Add("skssqQ", item.SKSSQQ);
                           jo.Add("yxcfsb", "");
                           jo.Add("url", item.Url);
                           jo.Add("yzpzzlDm", item.yzpzzlDm);
                           jo.Add("sbqx", item.SBQX);
                           jo.Add("skssqZ", item.SKSSQZ);
                           jo.Add("sbywbm", "LHFJSSB");
                           jo.Add("uuid", "81ADAE383B5F7212E053684A0C84486E");
                           jo.Add("zspmMc", "增值税地方教育附加");
                           jo.Add("zspmDm", "302160100");
                           out_ja.Add(jo);
                           JObject jo2 = (JObject)jo.DeepClone();
                           jo2["zsxmDm"] = "30203";
                           jo2["zsxmMc"] = "教育费附加";
                           jo2["zspmMc"] = "增值税教育费附加";
                           jo2["zspmDm"] = "302030100";
                           out_ja.Add(jo2);
                           JObject jo3 = (JObject)jo.DeepClone();
                           jo3["zsxmDm"] = "10109";
                           jo3["zsxmMc"] = "城市维护建设税";
                           jo3["zspmMc"] = "市区（增值税附征）";
                           jo3["zspmDm"] = "101090101";
                           out_ja.Add(jo3);
                           break;
                       default:
                           break;
                   }
               }
           }
           return out_ja;
       }

       public GDTXDate getGDTXDate(Type type)
       {
           GDTXDate gd = new GDTXDate();
           GDTXXiaMenUserYSBQC qc = getUserYSBQC(type);
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
           GDTXXiaMenUserYSBQC qc = getUserYSBQC(dm);
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

       public void formatCd(ref JObject in_jo)
       {
           JToken ja = in_jo.SelectToken("menus.yhGncds[1].yhGncds");
           IEnumerable<JToken> yhGncds = ja.Where(a => a["cdmc"].ToString() != "公众服务");
           //JArray.FromObject();
           foreach (JObject jo in yhGncds)
           {
               JToken ja2 = jo["yhGncds"];
               IEnumerable<JToken> ijt = ja2.Where(a => a["cdmc"].ToString() != "税费申报及缴纳" && a["cdmc"].ToString() != "申报信息查询");
               foreach (JObject jo2 in ijt)
               {
                   JToken jp = jo2.Property("realUrl");
                   if (jp != null)
                   {
                       jp.Remove();
                   }
               }
           }

           JToken jt = ja.Where(a => a["cdmc"].ToString() == "公众服务").First();
           foreach (JObject jo in jt["yhGncds"])
           {
               foreach (JObject jo2 in jo["yhGncds"])
               {
                   JToken jp = jo2.Property("realUrl");
                   if (jp != null)
                   {
                       jp.Remove();
                   }
               }
           }
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

    }
}