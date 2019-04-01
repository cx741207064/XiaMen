using JlueTaxSystemXiaMenBS.Code.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Xml;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class GTXMethod
    {
        /// <summary>
        /// 获取企业联系人
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetCompanyPerson()
        {
            string companyId = CurrentUser.GetInstance().GetCurrentCompanyId;
            string path = System.Configuration.ConfigurationManager.AppSettings["Practicepath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/APIPractice/CompanyPerson.asmx/GetByCompanyId?CompanyId=" + companyId;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取企业信息表记录
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetCompany()
        {
            string companyId = CurrentUser.GetInstance().GetCurrentCompanyId;
            string path = System.Configuration.ConfigurationManager.AppSettings["Practicepath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/APIPractice/Company.asmx/GetByCompanyId?CompanyId=" + companyId;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取学员题目信息
        /// </summary>
        /// <param name="id">用户题目id</param>
        /// <returns></returns>
        public static GTXResult GetUserQuestion(string id)
        {
            string userid = CurrentUser.GetInstance().GetCurrentUserId;
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GTXUserQuestion/GetEnter?userid=" + userid + "&questionid=" + id + "&classid=" + classid;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }


        /// <summary>
        /// 获取厦门国税的的应申报清册记录
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetXiaMenYSBQC()
        {
            string userid = CurrentUser.GetInstance().GetCurrentUserId;
            string questionId = CurrentUser.GetInstance().GetCurrentQuestionId;
            string classid = CurrentUser.GetInstance().GetCurrentClassId;

            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXXiaMenUserYSBQC/GetList?userid=" + userid + "&questionId=" + questionId + "&classid=" + classid;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 厦门国地税通用的保存报表数据
        /// </summary>
        /// <param name="jsonReportData">报表中的name value</param>
        /// <returns></returns>
        public static GTXResult SaveUserReportData(string jsonReportData, string userYsbqcId, string reportCode)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string userId = CurrentUser.GetInstance().GetCurrentUserId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GDTXXiaMenUserYSBQCReportData/Add", string.Format("classid={0}&jsonReportData={1}&userYsbqcId={2}&reportCode={3}&userId={4}"
                , classid, jsonReportData, userYsbqcId, reportCode, userId));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取厦门国税通用的已保存的报表数据
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetUserReportData(string userYsbqcId, string reportCode)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GDTXXiaMenUserYSBQCReportData/Get", string.Format("classid={0}&userYsbqcId={1}&reportCode={2}"
                , classid, userYsbqcId, reportCode));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 更新应申报清册的状态,已申报
        /// </summary>
        public static GTXResult UpdateYSBQC(string userYSBQCId, string SBZT)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXXiaMenUserYSBQC/UpdateSBZT?Id=" + userYSBQCId + "&classid=" + classid + "&SBZT=" + SBZT;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }


        /// <summary>
        /// 更新英申报清册的申报税额
        /// </summary>
        public static GTXResult UpdateSBSE(string userYSBQCId, string SBSE)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXXiaMenUserYSBQC/UpdateSBSE?Id=" + userYSBQCId + "&classid=" + classid + "&SBSE=" + SBSE;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 更新英申报清册的填报情况
        /// </summary>
        public static GTXResult UpdateYSBQCtbzt(string userYSBQCId, string reportCode, string tbzt)
        {
            string nowtbzt = (tbzt + reportCode + ";");
            if (reportCode == "")
            {
                nowtbzt = tbzt;
            }
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GTXXiaMenUserYSBQC/Updatetbzt?Id=" + userYSBQCId + "&classid=" + classid + "&tbzt=" + nowtbzt;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 根据userYSBQCId获取江西国税的的应申报清册记录
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetAHYSBQCByUserYSBQCId(string UserYSBQCId)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;

            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXAHUserYSBQC/GetModel?Id=" + UserYSBQCId + "&classid=" + classid;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 删除用户报表数据
        /// </summary>
        /// <returns></returns>
        public static GTXResult DeleteUserReportData(string userYsbqcId, string reportCode)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string userId = CurrentUser.GetInstance().GetCurrentUserId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GDTXXiaMenUserYSBQCReportData/Delete", string.Format("classid={0}&userYsbqcId={1}&userId={2}&reportCode={3}"
                , classid, userYsbqcId, userId, reportCode));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        //作废
        public static GTXResult InitDataDF(string UserYSBQCId)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string UserQuestionId = CurrentUser.GetInstance().GetCurrentUserQuestionId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXXiaMenUserYSBQC/InitDataDF?classid=" + classid + "&UserYSBQCId=" + UserYSBQCId + "&UserQuestionId=" + UserQuestionId;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取江西的报表数据配置记录
        /// </summary>
        /// <param name="toReportCode"></param>
        /// <returns></returns>
        public static GTXResult GetAHReportDataConfig(string toReportCode)
        {
            string path = System.Configuration.ConfigurationManager.AppSettings["Practicepath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/APIPractice/XiaMen/ReportDataConfigXiaMen.asmx/GetListByToReportCode?toReportCode=" + toReportCode;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取匹配数据
        /// </summary>
        /// <param name="jsonName"></param>
        /// <returns></returns>
        public static GTXResult LoadAHReportData(string jsonName, string useYSBQCId)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GTXXiaMenUserYSBQCReportData/GetListByUserYSBQCIdAndKey"
                , string.Format("classid={0}&UserYSBQCId={1}&jsonnames={2}", classid, useYSBQCId, jsonName));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        public static string getCompanyinfo(string json)
        {
            StringBuilder jsonstr = new StringBuilder(json);
            GTXResult resultCompany = GTXMethod.GetCompany();
            if (resultCompany.IsSuccess)
            {
                JObject company = (JObject)JsonConvert.DeserializeObject(resultCompany.Data.ToString());
                if (company.HasValues)
                {
                    jsonstr.Replace("@@ZCDZ", (company["ZCDZ"] == null ? "" : company["ZCDZ"].ToString()))
                        .Replace("@@JYFW", (company["JYFW"] == null ? "" : company["JYFW"].ToString()))
                        .Replace("@@GBHY", (company["GBHY"] == null ? "" : company["GBHY"].ToString()))
                        .Replace("@@SCJYDZ", (company["SCJYDZ"] == null ? "" : company["SCJYDZ"].ToString()))
                        .Replace("@@ZGDSSWJFJMC", (company["ZGDSSWJFJMC"] == null ? "" : company["ZGDSSWJFJMC"].ToString()))
                        .Replace("@@DJZCLX", (company["DJZCLX"] == null ? "" : company["DJZCLX"].ToString()))
                        .Replace("@@LXDH", (company["LXDH"] == null ? "" : company["LXDH"].ToString()))
                        .Replace("@@NSRSBH", (company["NSRSBH"] == null ? "" : company["NSRSBH"].ToString()))
                        .Replace("@@NSRMC", (company["NSRMC"] == null ? "" : company["NSRMC"].ToString()));
                }
            }

            GTXResult resultCompanyPerson = GTXMethod.GetCompanyPerson();
            if (resultCompanyPerson.IsSuccess)
            {
                JArray jrperson = (JArray)JsonConvert.DeserializeObject(resultCompanyPerson.Data.ToString());
                if (jrperson.Count > 0)
                {
                    for (int i = 0; i < jrperson.Count; i++)
                    {
                        JObject joperson = JObject.Parse(jrperson[i].ToString());
                        if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "0")
                        {
                            jsonstr.Replace("@@FDDB", (joperson["Name"] == null ? "" : joperson["Name"].ToString()))
                                    .Replace("@@FDID", (joperson["IDCardNum"] == null ? "" : joperson["IDCardNum"].ToString()))
                                    .Replace("@@FDSJ", (joperson["MobilePhone"] == null ? "" : joperson["MobilePhone"].ToString()));
                        }
                        if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "2")
                        {
                            jsonstr.Replace("@@BSR", (joperson["Name"] == null ? "" : joperson["Name"].ToString()))
                                    .Replace("@@BSID", (joperson["IDCardNum"] == null ? "" : joperson["IDCardNum"].ToString()))
                                    .Replace("@@BSSJ", (joperson["MobilePhone"] == null ? "" : joperson["MobilePhone"].ToString()));
                        }
                    }
                }
            }
            return jsonstr.ToString();
        }


        public static Company getCompanyinfo()
        {
            GTXResult resultCompany = GTXMethod.GetCompany();
            Company co = new Company();
            if (resultCompany.IsSuccess)
            {
                JObject company = (JObject)JsonConvert.DeserializeObject(resultCompany.Data.ToString());
                if (company.HasValues)
                {
                    co.NSRMC = (company["NSRMC"] == null ? "" : company["NSRMC"].ToString());
                    co.NSRSBH = (company["NSRSBH"] == null ? "" : company["NSRSBH"].ToString());
                    co.LXDH = (company["LXDH"] == null ? "" : company["LXDH"].ToString());
                    co.DJZCLX = (company["DJZCLX"] == null ? "" : company["DJZCLX"].ToString());
                    co.ZGDSSWJFJMC = (company["ZGDSSWJFJMC"] == null ? "" : company["ZGDSSWJFJMC"].ToString());
                    co.SCJYDZ = (company["SCJYDZ"] == null ? "" : company["SCJYDZ"].ToString());
                    co.GBHY = (company["GBHY"] == null ? "" : company["GBHY"].ToString());
                    co.JYFW = (company["JYFW"] == null ? "" : company["JYFW"].ToString());
                    co.ZCDZ = (company["ZCDZ"] == null ? "" : company["ZCDZ"].ToString());
                }
            }

            GTXResult resultCompanyPerson = GTXMethod.GetCompanyPerson();
            if (resultCompanyPerson.IsSuccess)
            {
                JArray jrperson = (JArray)JsonConvert.DeserializeObject(resultCompanyPerson.Data.ToString());
                if (jrperson.Count > 0)
                {
                    for (int i = 0; i < jrperson.Count; i++)
                    {
                        JObject joperson = JObject.Parse(jrperson[i].ToString());
                        if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "0")
                        {
                            co.FDDB = (joperson["Name"] == null ? "" : joperson["Name"].ToString());
                            co.FDID = (joperson["IDCardNum"] == null ? "" : joperson["IDCardNum"].ToString());
                            co.FDSJ = (joperson["MobilePhone"] == null ? "" : joperson["MobilePhone"].ToString());
                        }
                        else if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "1")
                        {
                            co.CWFZR = (joperson["Name"] == null ? "" : joperson["Name"].ToString());
                            co.CWFZID = (joperson["IDCardNum"] == null ? "" : joperson["IDCardNum"].ToString());
                            co.CWFZSJ = (joperson["MobilePhone"] == null ? "" : joperson["MobilePhone"].ToString());
                        }
                        else
                        {
                            co.BSR = (joperson["Name"] == null ? "" : joperson["Name"].ToString());
                            co.BSID = (joperson["IDCardNum"] == null ? "" : joperson["IDCardNum"].ToString());
                            co.BSSJ = (joperson["MobilePhone"] == null ? "" : joperson["MobilePhone"].ToString());
                        }
                    }
                }
            }
            return co;
        }

        public static string myConvert(object str)
        {
            string ReturnStr;
            if (str == null || str.ToString() == "")
            {
                str = "0";
            }
            ReturnStr = String.Format("{0:N2}", double.Parse(str.ToString()));
            //ReturnStr = Math.Round(double.Parse(str.ToString()),2).ToString();
            return ReturnStr;
        }

        public static string getZzsData(string table_name)
        {
            string return_json = "{}";
            string Zsxm = "增值税";
            string id = "";
            GTXResult resultq = GTXMethod.GetXiaMenYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXXiaMenUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXXiaMenUserYSBQC item in ysbqclist)
                    {
                        if (item.ZSXM == Zsxm)
                        {
                            id = item.Id.ToString();
                        }
                    }
                }
            }

            GTXResult gr = GTXMethod.GetUserReportData(id, table_name);
            if (gr.IsSuccess == true)
            {
                JArray jarr = new JArray();
                jarr = JsonConvert.DeserializeObject<JArray>(gr.Data.ToString());

                if (jarr.Count > 0)
                {
                    byte[] bytes = Convert.FromBase64String(jarr[0]["dataValue"].ToString());
                    string dataValue = Encoding.UTF8.GetString(bytes);
                    JObject jo = new JObject();
                    jo = JsonConvert.DeserializeObject<JObject>(dataValue);

                    return_json = jo.ToString();
                }
            }
            return return_json;
        }

        public static GTXResult UpdateTBQK(string Id, string tbqk)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;

            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXXiaMenUserYSBQC/Updatetbqk?Id=" + Id + "&classid=" + classid + "&tbqk=" + tbqk;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }


    }
}