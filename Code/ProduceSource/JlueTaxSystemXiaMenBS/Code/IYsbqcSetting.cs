using JlueTaxSystemXiaMenBS.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JlueTaxSystemXiaMenBS.Code
{
    public interface IYsbqcSetting
    {
        /// <summary>
        /// 已申报状态
        /// </summary>
        string ysbzt { get; set; }

        /// <summary>
        /// 未申报状态
        /// </summary>
        string wsbzt { get; set; }

        GDTXXiaMenUserYSBQC getUserYSBQC(Type controller);

        GDTXXiaMenUserYSBQC getUserYSBQC(string dm);

        /// <summary>
        /// 获取已申报的清册
        /// </summary>
        /// <returns></returns>
        List<GDTXXiaMenUserYSBQC> getYsbUserYSBQC();

        /// <summary>
        /// 获取未申报的清册
        /// </summary>
        /// <returns></returns>
        List<GDTXXiaMenUserYSBQC> getWsbUserYSBQC();

        GTXResult saveUserYSBQCReportData(ModelMainServlet ms, string userYsbqcId, string reportCode, string dataKey = "data");

        GTXResult saveUserYSBQCReportData(JToken json, string userYsbqcId, string reportCode, string dataKey = "data");

        GTXResult saveUserYSBQCReportData(string strJson, string userYsbqcId, string reportCode, string dataKey = "data");

        string getUserYSBQCReportData_String(int id, string reportCode, string dataKey = "data");

        JToken getUserYSBQCReportData(int id, string reportCode, string dataKey = "data");

        Nsrxx getNsrxx();

        void getYbnsrzzsBnlj(ref JObject in_jo, string dm);

        JObject getYbnsrzzsDataConfig(object in_obj, string dm);

        GDTXDate getGDTXDate(Type type);

        GDTXDate getGDTXDate(string dm);

        JArray getYhsZspmSl();

        void deleteYhsData(int id, string reportCode, string xh);

        string getBDDMFromTABLE_NAME(string TABLE_NAME);

        Message getMessage(string TABLE_NAME, string TABLE_ACTION);

    }
}
