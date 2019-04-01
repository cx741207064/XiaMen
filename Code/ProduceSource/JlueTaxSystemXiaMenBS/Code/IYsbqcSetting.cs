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

        List<GDTXXiaMenUserYSBQC> getYsbUserYSBQC();

        List<GDTXXiaMenUserYSBQC> getWsbUserYSBQC();

        GTXResult saveUserYSBQCReportData(JToken json, string userYsbqcId, string reportCode, string dataKey = "data");

        GTXResult saveUserYSBQCReportData(string strJson, string userYsbqcId, string reportCode, string dataKey = "data");

        string getUserYSBQCReportData_String(int id, string reportCode, string dataKey = "data");

        JToken getUserYSBQCReportData(int id, string reportCode, string dataKey = "data");

        void UpdateYsbqcSBSE(string userYSBQCId, JToken input_jo, string ywbm);

        JArray getsbzfmx(string sbblxDm);

        void sbZfSubmit(string yzpzzlDm);

        Nsrxx getNsrxx();

        void getHeadNsrxx(ref JObject in_jo);

        void getYbnsrzzsBnlj(ref JObject in_jo, string dm);

        JArray aqsb_getSbqcList();

        GDTXDate getGDTXDate(Type type);

        GDTXDate getGDTXDate(string dm);

        void formatCd(ref JObject in_jo);

        JArray getYhsZspmSl();

        void deleteYhsData(int id, string reportCode, string xh);

    }
}
