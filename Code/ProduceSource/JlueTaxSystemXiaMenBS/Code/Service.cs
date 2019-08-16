using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using JlueTaxSystemXiaMenBS.Models;
using System.Xml;
using System.IO;
using System.Web.SessionState;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class Service :Controller
    {
        YsbqcSetting set { get; set; }

        Repository repos { get; set; }

        GDTXUserYSBQC qc { get; set; }

        GDTXDate gd { get; set; }

        Nsrxx xx { get; set; }

        public Service( YsbqcSetting _set,  Repository _rep)
        {
            set = _set;
            repos = _rep;
        }

        public void CalcQysds(JObject input)
        {
            JsonSerializerSettings jss = new JsonSerializerSettings();
            jss.NullValueHandling = NullValueHandling.Ignore;
            string str = JsonConvert.SerializeObject(input);
            QysdsZb m = JsonConvert.DeserializeObject<QysdsZb>(str, jss);
            m.LJ_LRZE = m.LJ_LRZE_TZQ + m.LJ_TDYWJSYNSSDE - m.LJ_BZSSR - m.LJ_MSSRJSSRSDJMDYHJE - m.LJ_GDZCJSZJTJE - m.LJ_NBYQNDKS;
            m.LJ_LRZE = m.LJ_LRZE < 0 ? 0 : m.LJ_LRZE;
            m.LJ_YNSDSE = m.LJ_LRZE * m.LJ_SYSL;
            if (m.LJ_LRZE <= 1000000)
            {
                m.SFXWQY_BZ = "Y";
                m.LJ_JMSDSE = m.LJ_YNSDSE * .8M;
            }
            else if (m.LJ_LRZE <= 3000000)
            {
                m.SFXWQY_BZ = "Y";
                m.LJ_JMSDSE = m.LJ_LRZE * .15M + 50000;
            }
            else
            {
                m.SFXWQY_BZ = "N";
                m.LJ_JMSDSE = 0;
            }
            m.LJ_YBTSDSE_TZQ = m.LJ_YNSDSE - m.LJ_JMSDSE - m.LJ_SJYJNSDSE - m.LJ_TDYWYJSDSE;

            JObject jo = JObject.Parse(JsonConvert.SerializeObject(m));
            input.Merge(jo);
            input["success"] = true;
        }

        public void UpdateYsbqcSBSE(int userYSBQCId, JToken input_jo, string ywbm)
        {
            string sbse = "";
            string s = ywbm;
            switch (s)
            {
                case "ybnsrzzs":
                    sbse = input_jo["zzsybsbSbbdxxVO"]["zzssyyybnsr_zb"]["zbGrid"]["zbGridlbVO"][0]["bqybtse"].ToString();
                    break;
                case "lhfjssb":
                    sbse = input_jo.SelectToken("fjsSbbdxxVO.fjssbb.sbxxGrid.bqybtsehj").ToString();
                    break;
                case "qysds_a_18yjd":
                    sbse = input_jo.SelectToken("ht.qysdsczzsyjdSbbdxxVO.A200000Ywbd.sbbxxForm.ybtsdseLj").ToString();
                    break;
                case "xgmzzs":
                    sbse = input_jo.SelectToken("zzssyyxgmnsrySbSbbdxxVO.zzssyyxgmnsr.zzsxgmGrid.zzsxgmGridlb[0].bqybtse").ToString();
                    break;
            }
            repos.UpdateSBSE(userYSBQCId, sbse);
        }

        public Model getModel(string dm)
        {
            qc = repos.getUserYSBQC(dm);
            gd = repos.getGDTXDate(dm);
            xx = repos.getNsrxx();
            Model m = new Model { qc = qc, GDTXDate = gd, Nsrxx = xx };
            return m;
        }

        public Model getModel(int id)
        {
            qc = repos.getUserYSBQC(id);
            gd = repos.getGDTXDate(id);
            xx = repos.getNsrxx();
            Model m = new Model { qc = qc, GDTXDate = gd, Nsrxx = xx };
            return m;
        }

        public void SBZF(int id)
        {
            repos.SBZF(id);
        }

        public void UpdateSBZT(int id, string sbzt)
        {
            repos.UpdateSBZT(id, sbzt);
        }

        public void DeleteQysdsTable(string tabid)
        {
            qc = set.getUserYSBQC(BDDM.QYSDS);
            GTXMethod.DeleteUserReportData(qc.Id.ToString(), tabid);
        }

    }
}
