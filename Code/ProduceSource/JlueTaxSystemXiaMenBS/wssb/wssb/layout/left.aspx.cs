using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using JlueTaxSystemXiaMenBS.Code;


namespace JlueTaxSystemXiaMenBS.wssb.wssb.layout
{
    public partial class left : System.Web.UI.Page
    {
        public string return_json = "{}";
        string Zsxm = "增值税";
        string TABLE_ACTION = "initial";

        string table_isfill = "N";
        string group_issb = "N";
        string fwsk = "";
        string cgbz = "";
        string children = "";

        List<string> ListId = new List<string>();
        List<string> ListName = new List<string>();
        List<string> ListTableName = new List<string>();
        List<string> ListTableUrl = new List<string>();
        List<string> ListZssbBtn = new List<string>();
        List<string> ListTableIsFill = new List<string>();
        string[] ListTableIsFillYN = { "N", "N", "N", "N", "N", "N", "N", "N" };

        protected void Page_Load(object sender, EventArgs e)
        {
            string SBZT = "";
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
                            SBZT = item.SBZT.ToString();
                            if (item.TBQK!=null)
                            {
                                ListTableIsFill = new List<string>(item.TBQK.Split(','));
                            }
                        }
                    }
                }
            }


            if (SBZT.Equals("已申报"))
            {
                group_issb = "Y";
                ListTableIsFillYN[7] = "Y";
                TABLE_ACTION = "display";
            }

            initListId();
            initListName();
            initListTableName();
            initListTableUrl();
            initListZssbBtn();

            if (SBZT.Equals("已申报"))
            {
                ListTableUrl[7] = "";
            }

            foreach (string str in ListTableIsFill)
            {
                for (int i = 0; i < ListTableName.Count;i++ )
                {
                    if (str.Equals(ListTableName[i]))
                    {
                        ListTableIsFillYN[i] = "Y";
                        break;
                    }
                }
            }


            JObject jo = new JObject();
            JArray ja = new JArray();
            jo.Add("id", "0");
            jo.Add("parentId", "");
            jo.Add("name", "增值税");
            jo.Add("state", "open");
            jo.Add("attributes", "");
            jo.Add("checked", "false");
            jo.Add("iconCls", "");
            jo.Add("children", ja);

            for (int i = 0; i < 8; i++)
            {
                JObject jobj = new JObject();
                JObject jo_attr = new JObject();

                jo_attr.Add("zssb_btn", ListZssbBtn[i]);
                jo_attr.Add("group_issb", group_issb);
                jo_attr.Add("table_name", ListTableName[i]);
                jo_attr.Add("table_isfill", ListTableIsFillYN[i]);
                jo_attr.Add("cgbz", "");
                jo_attr.Add("table_url", ListTableUrl[i]);


                jobj.Add("id", ListId[i]);
                jobj.Add("parentId", "");
                jobj.Add("name", ListName[i]);
                jobj.Add("state", "open");
                jobj.Add("attributes", jo_attr);
                jobj.Add("checked", "false");
                jobj.Add("iconCls", "");
                jobj.Add("children", "");

                ja.Add(jobj);

            }
            return_json = jo.ToString();
        }

        public void initListId()
        {
            ListId.Add("SBB_ZZS_YGZ_YBNSR_1");
            ListId.Add("SBB_ZZS_YGZ_YBNSR_FB1_2");
            ListId.Add("SBB_ZZS_YGZ_YBNSR_FB2_3");
            ListId.Add("SBB_ZZS_YGZ_YBNSR_FB3_4");
            ListId.Add("SBB_ZZS_YGZ_YBNSR_FB4_5");
            ListId.Add("SBB_ZZS_YGZ_YBNSR_FLZL5_6");
            ListId.Add("SBB_ZZS_YGZ_YBNSR_JMSSBMXB_7");
            ListId.Add("ZSSB_SBB_ZZS_YGZ_YBNSR_15");
        }
        public void initListName()
        {
            ListName.Add("《增值税申报表（一般纳税人适用）》");
            ListName.Add("《增值税纳税申报表》附列资料（一）");
            ListName.Add("《增值税纳税申报表》附列资料（二）");
            ListName.Add("《增值税纳税申报表》附列资料（三）");
            ListName.Add("《增值税纳税申报表》附列资料（四）");
            ListName.Add("《增值税纳税申报表》附列资料（五）");
            ListName.Add("《增值税减免税申报明细表》");
            ListName.Add("正式申报");
        }
        public void initListTableName()
        {
            ListTableName.Add("SBB_ZZS_YGZ_YBNSR");
            ListTableName.Add("SBB_ZZS_YGZ_YBNSR_FB1");
            ListTableName.Add("SBB_ZZS_YGZ_YBNSR_FB2");
            ListTableName.Add("SBB_ZZS_YGZ_YBNSR_FB3");
            ListTableName.Add("SBB_ZZS_YGZ_YBNSR_FB4");
            ListTableName.Add("SBB_ZZS_YGZ_YBNSR_FLZL5");
            ListTableName.Add("SBB_ZZS_YGZ_YBNSR_JMSSBMXB");
            ListTableName.Add("");
        }
        public void initListTableUrl()
        {
            ListTableUrl.Add("MainServlet_" + ListTableName[0] + ".aspx?TABLE_ACTION=" + TABLE_ACTION + "&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831");
            ListTableUrl.Add("MainServlet_" + ListTableName[1] + ".aspx?TABLE_ACTION=" + TABLE_ACTION + "&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831");
            ListTableUrl.Add("MainServlet_" + ListTableName[2] + ".aspx?TABLE_ACTION=" + TABLE_ACTION + "&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831");
            ListTableUrl.Add("MainServlet_" + ListTableName[3] + ".aspx?TABLE_ACTION=" + TABLE_ACTION + "&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831");
            ListTableUrl.Add("MainServlet_" + ListTableName[4] + ".aspx?TABLE_ACTION=" + TABLE_ACTION + "&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831");
            ListTableUrl.Add("MainServlet_" + ListTableName[5] + ".aspx?TABLE_ACTION=" + TABLE_ACTION + "&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831");
            ListTableUrl.Add("MainServlet_" + ListTableName[6] + ".aspx?TABLE_ACTION=" + TABLE_ACTION + "&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831");
            ListTableUrl.Add("MainServlet.ashx?TABLE_ACTION=submit&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831");
        }

        public void initListZssbBtn()
        {
            ListZssbBtn.Add("N");
            ListZssbBtn.Add("N");
            ListZssbBtn.Add("N");
            ListZssbBtn.Add("N");
            ListZssbBtn.Add("N");
            ListZssbBtn.Add("N");
            ListZssbBtn.Add("N");
            ListZssbBtn.Add("Y");
        }

    }
}