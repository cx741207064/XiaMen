//using JlueMakeBill.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;

namespace JlueTaxSystemXiaMenBS.Code
{
    /// <summary>
    /// 
    /// </summary>
    public class CommonMethod
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="reportCode"></param>
        /// <param name="ysbqcId"></param>
        /// <param name="useYSBQCId"></param>
        /// <returns></returns>
        public static List<GDTXXiaMenUserYSBQCReportData> GetReportData(string reportCode, string ysbqcId, string useYSBQCId)
        {
            GTXResult reportDataConfig = GTXMethod.GetAHReportDataConfig(reportCode);
            string dzjsonName = JsonConvert.SerializeObject(new JArray());
            string gsjsonName = JsonConvert.SerializeObject(new JArray());
            string lsjsonName = JsonConvert.SerializeObject(new JArray());
            string dzjsonName_use = JsonConvert.SerializeObject(new JArray());

            List<GDTXXiaMenReportDataConfig> configData = new List<GDTXXiaMenReportDataConfig>();//需要排除的name(包括等值匹配、公式匹配)
            List<GDTXXiaMenReportDataConfig> dzConfigData = new List<GDTXXiaMenReportDataConfig>();//等值匹配
            List<GDTXXiaMenReportDataConfig> gsConfigData = new List<GDTXXiaMenReportDataConfig>();//公式匹配
            List<GDTXXiaMenUserYSBQCReportData> dzReportData = new List<GDTXXiaMenUserYSBQCReportData>();
            List<GDTXXiaMenUserYSBQCReportData> gsReportData = new List<GDTXXiaMenUserYSBQCReportData>();
            List<GDTXXiaMenUserYSBQCReportData> currentReportData = new List<GDTXXiaMenUserYSBQCReportData>();//学员当前报表匹配好的数据集合
            #region 获取期初累计的数据集合
            //List<GDTXAHReportQiChu> qichuReportData = new List<GDTXAHReportQiChu>();//报表期初累计数据
            //GTXResult qichuList = GTXMethod.LoadDLReportQiChu("", ysbqcId, reportCode);
            //if (qichuList.IsSuccess)
            //{
            //    qichuReportData = JsonConvert.DeserializeObject<List<GDTXAHReportQiChu>>(qichuList.Data.ToString());
            //    foreach (GDTXAHReportQiChu item in qichuReportData)
            //    {
            //        GDTXAHUserYSBQCReportData newData = new GDTXAHUserYSBQCReportData();
            //        newData.ReportCode = reportCode;
            //        newData.UserId = CurrentUser.GetInstance().GetCurrentUserId;
            //        newData.UserYSBQCId = int.Parse(useYSBQCId);
            //        newData.DataKey = item.Name;
            //        newData.DataValue = item.Value;
            //        currentReportData.Add(newData);
            //    }
            //}
            #endregion
            #region 获取等值匹配和公式匹配的数据集合
            if (reportDataConfig.IsSuccess)
            {
                configData = JsonConvert.DeserializeObject<List<GDTXXiaMenReportDataConfig>>(reportDataConfig.Data.ToString());
                dzConfigData = configData.Where(o => o.ConfigType.Equals(1)).ToList();
                gsConfigData = configData.Where(o => o.ConfigType.Equals(2)).ToList();
                #region 获取等值匹配数据集合
                var dzobj_use = from n in dzConfigData
                                select new
                                {
                                    reportCode = n.FromReportCode,
                                    name = "data"
                                };
                dzjsonName_use = JsonConvert.SerializeObject(dzobj_use);
                GTXResult dzloadData = GTXMethod.LoadAHReportData(dzjsonName_use, useYSBQCId);
                if (dzloadData.IsSuccess)
                {
                    dzReportData = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQCReportData>>(dzloadData.Data.ToString());
                    if (dzReportData.Count > 0)
                    {
                        foreach (GDTXXiaMenReportDataConfig item in dzConfigData)
                        {
                            foreach (GDTXXiaMenUserYSBQCReportData data in dzReportData)
                            {
                                if (data.ReportCode == item.FromReportCode)
                                {
                                    byte[] outputb = Convert.FromBase64String(data.DataValue);
                                    string orgStr = System.Web.HttpUtility.UrlDecode(Encoding.Default.GetString(outputb));
                                    string[] datavalue = orgStr.Split('&');
                                    string _key;
                                    string _value = "";
                                    for (int i = 0; i < datavalue.Length - 1; i++)
                                    {
                                        _key = datavalue[i].Split('=')[0];
                                        _value = datavalue[i].Replace(datavalue[i].Split('=')[0] + "=", "");
                                        if (item.FromReportName == _key)
                                        {
                                            GDTXXiaMenUserYSBQCReportData newData = new GDTXXiaMenUserYSBQCReportData();
                                            newData.ReportCode = reportCode;
                                            newData.UserId = CurrentUser.GetInstance().GetCurrentUserId;
                                            newData.DataKey = item.ToReportName;
                                            newData.DataValue = _value;
                                            currentReportData.Add(newData);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                #endregion
                #region 获取公式匹配数据集合
                foreach (GDTXXiaMenReportDataConfig item in gsConfigData)
                {
                    string value = "0";
                    string[] name = item.Parameter.Split('#');
                    JArray ja = new JArray();
                    JObject jo = new JObject();
                    jo.Add("reportCode", item.FromReportCode);
                    jo.Add("name", "data");
                    ja.Add(jo);
                    gsjsonName = JsonConvert.SerializeObject(ja);
                    GTXResult gsloadData = GTXMethod.LoadAHReportData(gsjsonName, useYSBQCId);
                    if (gsloadData.IsSuccess)
                    {
                        gsReportData = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQCReportData>>(gsloadData.Data.ToString());
                    }
                    if (gsReportData.Count != 0)
                    {
                        foreach (string key in name)
                        {
                            foreach (GDTXXiaMenUserYSBQCReportData oitem in gsReportData)
                            {
                                byte[] outputb = Convert.FromBase64String(oitem.DataValue);
                                string orgStr = System.Web.HttpUtility.UrlDecode(Encoding.Default.GetString(outputb));
                                if (orgStr.Contains(key + "="))
                                {
                                    string[] datavalue = orgStr.Split('&');
                                    string _key;
                                    string _value = "";
                                    for (int i = 0; i < datavalue.Length - 1; i++)
                                    {
                                        _key = datavalue[i].Split('=')[0];
                                        _value = datavalue[i].Replace(datavalue[i].Split('=')[0] + "=", "");
                                        if (key == _key)
                                        {
                                            item.FromReportName = item.FromReportName.Replace(key, _value);
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    item.FromReportName = item.FromReportName.Replace(key, "0");
                                }
                            }
                        }
                        value = new DataTable().Compute(item.FromReportName, "").ToString();
                    }
                    GDTXXiaMenUserYSBQCReportData newData = new GDTXXiaMenUserYSBQCReportData();
                    newData.ReportCode = reportCode;
                    newData.UserId = CurrentUser.GetInstance().GetCurrentUserId;
                    newData.DataKey = item.ToReportName;
                    newData.DataValue = value;
                    currentReportData.Add(newData);
                }
                #endregion
            }
            #endregion
            return currentReportData;
        }
    }
}