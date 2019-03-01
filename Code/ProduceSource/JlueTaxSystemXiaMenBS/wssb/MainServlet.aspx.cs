using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using JlueTaxSystemXiaMenBS.Code;
using System.Text;

namespace JlueTaxSystemXiaMenBS.wssb
{
    public partial class MainServlet1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string fb1 = "提    示：  《增值税纳税申报表》附列资料（一）更新成功！请重新保存《增值税纳税申报表》附列资料（三）。在未正式申报之前可以修改、删除该申报表。";
            string fb4 = "提    示：  营改增增值税一般纳税人附列资料（四）更新成功！请重新保存《增值税一般纳税人申报主表》。在未正式申报之前可以修改、删除该申报表。";

            string TABLE_NAME= Request["TABLE_NAME"];

            if (TABLE_NAME.Equals("SBB_ZZS_YGZ_YBNSR"))
            {
                save(TABLE_NAME);
            }

            if (TABLE_NAME.Equals("SBB_ZZS_YGZ_YBNSR_FB1"))
            {
                save(TABLE_NAME);
            }

            if (TABLE_NAME.Equals("SBB_ZZS_YGZ_YBNSR_FB2"))
            {
                save(TABLE_NAME);
            }

            if (TABLE_NAME.Equals("SBB_ZZS_YGZ_YBNSR_FB3"))
            {
                save(TABLE_NAME);
            }

            if (TABLE_NAME.Equals("SBB_ZZS_YGZ_YBNSR_FB4"))
            {
                save(TABLE_NAME);
            }

            if (TABLE_NAME.Equals("SBB_ZZS_YGZ_YBNSR_FLZL5"))
            {
                save(TABLE_NAME);
            }

            if (TABLE_NAME.Equals("SBB_ZZS_YGZ_YBNSR_JMSSBMXB"))
            {
                save(TABLE_NAME);
            }


        }

        public void save(string table_name){

            string Zsxm = "增值税";

            JObject jo = new JObject();
            for (int i = 0; i < Request.Form.Count; i++)
            {
                string key = Request.Form.AllKeys[i];
                string value = Request.Form[key];
                jo.Add(key, value);
            }
            string json = JsonConvert.SerializeObject(jo);

            string id = "";
            string TBQK = "";
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
                            TBQK = item.TBQK;
                        }
                    }
                }
            }

                List<GTXNameValue> nameList = new List<GTXNameValue>();
                GTXNameValue nv = new GTXNameValue();
                nv.key = "data";
                byte[] bytes = Encoding.UTF8.GetBytes(json);
                string _result = Convert.ToBase64String(bytes);
                nv.value = _result;
                nameList.Add(nv);
                GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), id, table_name);
                if (saveresult.IsSuccess)
                {
                    GTXResult upresult = GTXMethod.UpdateYSBQC(id, "已保存");
                    if (TBQK != null)
                    {
                        List<string> str = new List<string>(TBQK.Split(','));
                        foreach (string s in str)
                        {
                            if (s.Equals(table_name))
                            {
                                return;
                            }
                        }
                        GTXMethod.UpdateTBQK(id, TBQK + "," + table_name);
                    }
                    else
                    {
                        GTXMethod.UpdateTBQK(id, table_name);
                    }
                }
                else
                {
                }

        }
    }
}