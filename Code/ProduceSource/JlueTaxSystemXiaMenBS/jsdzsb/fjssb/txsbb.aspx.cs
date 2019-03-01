using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Web.UI.HtmlControls;


namespace JlueTaxSystemXiaMenBS.jsdzsb.fjssb
{
    public partial class txsbb : System.Web.UI.Page
    {
        public string DateFrom = "";
        public string DateTo = "";
        public string tbrq = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            DateFrom = Session["DateFrom"].ToString();
            DateTo = Session["DateTo"].ToString();
            tbrq = Session["tbrq"].ToString();

            string zzsxselx_dm = Request["sbbVo['zzsxselx_dm']"];

            Session["zzsxselx_dm"] = zzsxselx_dm;

            for (int i = 0; i < _combobox_.Items.Count; i++)
            {
                if (_combobox_.Items[i].Value == zzsxselx_dm)
                {
                    _combobox_.Value = zzsxselx_dm;
                    lblxse.Text = _combobox_.Items[i].Text;
                    break;
                }
                
            }

            HtmlInputHidden xse_dm = (HtmlInputHidden)_combobox_.FindControl("ZZSXSELX_DM");
            HtmlInputHidden xshjs = (HtmlInputHidden)_combobox_.FindControl("xshjs");
            HtmlInputHidden sbbVo_xshjs = (HtmlInputHidden)_combobox_.FindControl("sbbVo_xshjs");

            xse_dm.Value = zzsxselx_dm;
            if (zzsxselx_dm == "11")
            {
                xshjs.Value = "0";
                sbbVo_xshjs.Value = "0";
            }
            else if(zzsxselx_dm == "12")
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

        public void createJSONFile(HtmlSelect ssjmxzdm)
        {
            JArray ja = new JArray();
            for (int i = 1; i < ssjmxzdm.Items.Count; i++)
            {
                JObject jo = new JObject();
                //string[] arr = ssjmxzdm.Items[i].Text.Split('|');
                jo.Add("key", i);
                jo.Add("no", ssjmxzdm.Items[i].Value);
                jo.Add("content", ssjmxzdm.Items[i].Text);

                ja.Add(jo);
            }

            // 获取当前程序所在路径，并将要创建的文件命名为info.json 
            string fp = Server.MapPath("\\jsdzsb\\fjssb\\城建税附加税减免.json");
            if (!File.Exists(fp))  // 判断是否已有相同文件
            {
                FileStream fs1 = new FileStream(fp, FileMode.Create, FileAccess.ReadWrite);
                fs1.Close();
            }

            File.WriteAllText(fp, JsonConvert.SerializeObject(ja));

        }
    }
}