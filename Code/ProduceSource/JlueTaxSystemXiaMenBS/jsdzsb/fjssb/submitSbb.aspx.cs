using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.IO;


namespace JlueTaxSystemXiaMenBS.jsdzsb.fjssb
{
    public partial class submitSbb : System.Web.UI.Page
    {
        public string DateFrom = "";
        public string DateTo = "";
        public string tbrq = "";
        public string ZzsXseDm = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            DateFrom = Session["DateFrom"].ToString();
            DateTo = Session["DateTo"].ToString();
            tbrq = Session["tbrq"].ToString();
            ZzsXseDm = Session["zzsxselx_dm"].ToString();

            setZzsXseDm();

            string guid = "";

            if (!IsPostBack)
            {
                guid = Guid.NewGuid().ToString();
                Session["guid"] = guid;
                form_guid.Value = guid;
            }

            string ybzzs = myConvert(Request["sbbVo['ybzzs']"]);
            string zzsmdse = myConvert(Request["sbbVo['zzsmdse']"]);
            string xfs = myConvert(Request["sbbVo['xfs']"]);
            string yys = myConvert(Request["sbbVo['yys']"]);
            string hj = myConvert(Request["sbbVo['hj']"]);
            string bqynse = myConvert(Request["sbbVo['bqynse']"]);
            string jme = myConvert(Request["sbbVo['jme']"]);
            string bqyjse = myConvert(Request["sbbVo['bqyjse']"]);
            string bqybtse = myConvert(Request["sbbVo['bqybtse']"]);
            string jyffjyjse = myConvert(Request["sbbVo['jyffjyjse']"]);
            string dffjjyjse = myConvert(Request["sbbVo['dffjjyjse']"]);

            string zzsxselx_dm = Request["sbbVo['zzsxselx_dm']"];
            string jmxzDm = Request["sbbVo['jmxzDm']"];

            string jmxzContent = getJmxzContent(jmxzDm);

            string bqybtse2 = bqybtse;
            string bqybtse3= bqybtse;

            string bqybtse_hj = "";

            double sl1 = 0.07;
            double sl2 = 0.03;
            double sl3 = 0.02;


            HtmlTable ht = sbbSubmit;
            int a = 0;
            int order = 0;
            for (a = 7; a < 11; a++)
            {
                if(a==7||a==8||a==9){
                   
                }
                if (a == 7)
                {
                    order = 0;
                    HtmlTableRow htr = sbbSubmit.Rows[a];


                    htr.Cells[0].InnerHtml = "<a href='#' onclick=\"modify(\'" + guid + "\')\">修改</a>&nbsp;&nbsp;<a href='#' onclick=\"del(\'" + guid + "\')\">删除</a>";

                    htr.Cells[3].InnerHtml = "<div align=\"right\">" + ybzzs + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['ybzzs']\" value=\"" + ybzzs + "\" />";

                    htr.Cells[4].InnerHtml = "<div align=\"right\">" + zzsmdse + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['zzsmdse']\" value=\"" + zzsmdse + "\" />";

                    htr.Cells[5].InnerHtml = "<div align=\"right\">" + xfs + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['xfs']\" value=\"" + xfs + "\" />";

                    htr.Cells[6].InnerHtml = "<div align=\"right\">" + yys + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['yys']\" value=\"" + yys + "\" />";

                    htr.Cells[7].InnerHtml = "<div align=\"right\">" + hj + "</div><input type=\"hidden\" name=\"sbbList["+order+"]['hj']\" value=\"" + hj + "\" />";

                    htr.Cells[9].InnerHtml = "<div align=\"right\">" + bqynse + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['bqynse']\" value=\"" + bqynse + "\" />";

                    htr.Cells[10].InnerHtml = "<div align=\"right\">" + jmxzContent + "</div>";

                    htr.Cells[11].InnerHtml = "<div align=\"right\">" + jme + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['jme']\" value=\"" + jme + "\" />";

                    htr.Cells[12].InnerHtml = "<div align=\"right\">" + bqyjse + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['bqyjse']\" value=\"" + bqyjse + "\" />";

                    htr.Cells[13].InnerHtml = "<div align=\"right\">" + bqybtse + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['bqybtse']\" value=\"" + bqybtse + "\" />";

                }

                if (a == 8)
                {
                    order = 1;

                    double bqynse2 = 0;
                    string jme2 = jme;
                    HtmlTableRow htr = sbbSubmit.Rows[a];


                    htr.Cells[0].InnerHtml = "<a href='#' onclick=\"del(\'" + guid + "\')\">删除</a>";

                    htr.Cells[3].InnerHtml = "<div align=\"right\">" + ybzzs + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['ybzzs']\" value=\"" + ybzzs + "\" />";

                    htr.Cells[4].InnerHtml = "<div align=\"right\">" + zzsmdse + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['zzsmdse']\" value=\"" + zzsmdse + "\" />";

                    htr.Cells[5].InnerHtml = "<div align=\"right\">" + xfs + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['xfs']\" value=\"" + xfs + "\" />";

                    htr.Cells[6].InnerHtml = "<div align=\"right\">" + yys + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['yys']\" value=\"" + yys + "\" />";

                    htr.Cells[7].InnerHtml = "<div align=\"right\">" + hj + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['hj']\" value=\"" + hj + "\" />";

                    bqynse2 =double.Parse( hj) * sl2;
                    htr.Cells[9].InnerHtml = "<div align=\"right\">" + myConvert(bqynse2) + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['bqynse']\" value=\"" + myConvert(bqynse2) + "\" />";

                    if (zzsxselx_dm == "12")
                    {
                        jmxzContent = "0061042802|按月纳税的月销售额或营业额不超过10万元缴纳义务人免征教育费附加|《财政部 国家税务总局关于扩大有关政府性基金免征范围的通知》 财税〔2016〕12号第一条";
                        jme2 = myConvert(bqynse2);
                    }

                    htr.Cells[10].InnerHtml = "<div align=\"right\">" + jmxzContent + "</div>";

                    htr.Cells[11].InnerHtml = "<div align=\"right\">" + jme2 + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['jme']\" value=\"" + jme2 + "\" />";

                    htr.Cells[12].InnerHtml = "<div align=\"right\">" + jyffjyjse + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['bqyjse']\" value=\"" + jyffjyjse + "\" />";

                    bqybtse2 = myConvert(bqynse2 - double.Parse(jme2) - double.Parse(jyffjyjse));
                    htr.Cells[13].InnerHtml = "<div align=\"right\">" + bqybtse2 + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['bqybtse']\" value=\"" + bqybtse2 + "\" />";

                }

                if (a == 9)
                {
                    order = 2;
                    double bqynse3 = 0;
                    string jme3 = jme;

                    HtmlTableRow htr = sbbSubmit.Rows[a];


                    htr.Cells[0].InnerHtml = "<a href='#' onclick=\"del(\'" + guid + "\')\">删除</a>";

                    htr.Cells[3].InnerHtml = "<div align=\"right\">" + ybzzs + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['ybzzs']\" value=\"" + ybzzs + "\" />";

                    htr.Cells[4].InnerHtml = "<div align=\"right\">" + zzsmdse + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['zzsmdse']\" value=\"" + zzsmdse + "\" />";

                    htr.Cells[5].InnerHtml = "<div align=\"right\">" + xfs + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['xfs']\" value=\"" + xfs + "\" />";

                    htr.Cells[6].InnerHtml = "<div align=\"right\">" + yys + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['yys']\" value=\"" + yys + "\" />";

                    htr.Cells[7].InnerHtml = "<div align=\"right\">" + hj + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['hj']\" value=\"" + hj + "\" />";

                    bqynse3 = double.Parse(hj)* sl3;
                    htr.Cells[9].InnerHtml = "<div align=\"right\">" + myConvert(bqynse3) + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['bqynse']\" value=\"" + myConvert(bqynse3) + "\" />";

                    if (zzsxselx_dm == "12")
                    {
                        jmxzContent = "0061042802|按月纳税的月销售额或营业额不超过10万元缴纳义务人免征教育费附加|《财政部 国家税务总局关于扩大有关政府性基金免征范围的通知》 财税〔2016〕12号第一条";
                        jme3 = myConvert(bqynse3);
                    }

                    htr.Cells[10].InnerHtml = "<div align=\"right\">" + jmxzContent + "</div>";

                    htr.Cells[11].InnerHtml = "<div align=\"right\">" + jme3 + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['jme']\" value=\"" + jme3 + "\" />";

                    htr.Cells[12].InnerHtml = "<div align=\"right\">" + dffjjyjse + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['bqyjse']\" value=\"" + dffjjyjse + "\" />";

                    bqybtse3 = myConvert(bqynse3 - double.Parse(jme3) - double.Parse(dffjjyjse));
                    htr.Cells[13].InnerHtml = "<div align=\"right\">" + bqybtse3 + "</div><input type=\"hidden\" name=\"sbbList[" + order + "]['bqybtse']\" value=\"" + bqybtse3 + "\" />";

                }

                if (a == 10)
                {
                    HtmlTableRow htr = sbbSubmit.Rows[a];
                    string bqynse_hj = "";
                    string jme_hj = "";
                    string bqyjse_hj = "";

                    htr.Cells[1].InnerHtml = "<div align=\"right\" id=\"_ybzzs\">" + myConvert(double.Parse(ybzzs) * 3) + "</div>";

                    htr.Cells[2].InnerHtml = "<div align=\"right\" id=\"_zzsmdse\">" + myConvert(double.Parse(zzsmdse) * 3) + "</div>";

                    htr.Cells[3].InnerHtml = "<div align=\"right\" id=\"_xfs\">" + myConvert(double.Parse(xfs) * 3) + "</div>";

                    htr.Cells[4].InnerHtml = "<div align=\"right\" id=\"_xfs\">" + myConvert(double.Parse(yys) * 3) + "</div>";

                    htr.Cells[5].InnerHtml = "<div align=\"right\" id=\"_hj\">" + myConvert(double.Parse(hj) * 3) + "</div>";

                    bqynse_hj = myConvert(double.Parse(hj) * (sl1 + sl2 + sl3));
                    htr.Cells[7].InnerHtml = "<div align=\"right\" id=\"_bqynse\">" + bqynse_hj + "</div><input type=hidden name=\"_bqynse\" value=\""+ bqynse_hj +"\" />";

                    jme_hj = myConvert(double.Parse(jme) * 3);
                    if (zzsxselx_dm == "12")
                    {
                        jme_hj = myConvert(double.Parse(ybzzs) * (sl2 + sl3) + double.Parse(jme));
                    }

                    htr.Cells[9].InnerHtml = "<div align=\"right\" id=\"_jme\">" + jme_hj + "</div><input type=hidden name=\"_jme\" value=\"" + jme_hj + "\" />";

                    bqyjse_hj = myConvert(double.Parse(bqyjse) + double.Parse(jyffjyjse) + double.Parse(dffjjyjse));
                    htr.Cells[10].InnerHtml = "<div align=\"right\" id=\"_bqyjse\">" + bqyjse_hj + "</div><input type=hidden name=\"_bqyjse\" value=\"" + bqyjse_hj + "\" />";

                    bqybtse_hj = myConvert(double.Parse(bqybtse) + double.Parse(bqybtse2) + double.Parse(bqybtse3));
                    htr.Cells[11].InnerHtml = "<div align=\"right\" id=\"_bqybtse\" style=\"color: red;\">" + bqybtse_hj + "</div><input type=hidden name=\"_bqybtse\" value=\"" + bqybtse_hj + "\" />";

                }


            }


        }

        public string myConvert(object str)
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

        public string getJmxzContent(string jmxzDm)
        {
            string Content = "";
            string fp = Server.MapPath("\\jsdzsb\\fjssb\\城建税附加税减免.json");

            JArray ja = new JArray();
            ja = JArray.Parse(File.ReadAllText(fp));
            for (int j = 0; j < ja.Count; j++)
            {
                JObject jo = new JObject();
                jo = (JObject)ja[j];
                if (jo["no"].ToString() == jmxzDm)
                {
                    Content = jo["content"].ToString();
                    break;
                }
            }
            return Content;
        }

        public void setZzsXseDm()
        {
            string zzsxselx_dm = Request["sbbVo['zzsxselx_dm']"];

            HtmlInputHidden xse_dm = (HtmlInputHidden)Page.FindControl("ZZSXSELX_DM");
            HtmlInputHidden xshjs = (HtmlInputHidden)Page.FindControl("xshjs");
            HtmlInputHidden sbbVo_xshjs = (HtmlInputHidden)Page.FindControl("sbbVo_xshjs");

            xse_dm.Value = zzsxselx_dm;
            if (zzsxselx_dm == "11")
            {
                xshjs.Value = "0";
                sbbVo_xshjs.Value = "0";
            }
            else if (zzsxselx_dm == "12")
            {
                xshjs.Value = "100000.0";
                sbbVo_xshjs.Value = "100000.0";
            }
            else if (zzsxselx_dm == "13")
            {
                xshjs.Value = "100000.1";
                sbbVo_xshjs.Value = "100000.1";
            }

        }
    }
}