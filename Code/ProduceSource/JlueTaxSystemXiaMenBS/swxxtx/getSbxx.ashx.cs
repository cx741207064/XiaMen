using JlueTaxSystemXiaMenBS.Code;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace JlueTaxSystemXiaMenBS.swxxtx
{
    /// <summary>
    /// getSbxx 的摘要说明
    /// </summary>
    public class getSbxx : IHttpHandler, IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            JObject jo = new JObject();

            GTXResult getlist = GTXMethod.GetXiaMenYSBQC();
            List<GDTXXiaMenUserYSBQC> qclist = new List<GDTXXiaMenUserYSBQC>();
            if (getlist.IsSuccess)
            {
                qclist = JsonConvert.DeserializeObject<List<GDTXXiaMenUserYSBQC>>(getlist.Data.ToString());
            }

            jo.Add("ds_WSBZSXMGRID", "[]");
            jo.Add("ds_YSBZSXMGRID", "[]");

            List<GDTXXiaMenUserYSBQC> WSBlist = qclist.Where(i => i.SBZT == "未申报" || i.SBZT == "已保存").ToList();
            string gs_WSBZSXMGRID = JsonConvert.SerializeObject(WSBlist);

            List<GDTXXiaMenUserYSBQC> YSBlist = qclist.Where(i => i.SBZT == "已申报").ToList();
            string gs_YSBZSXMGRID = JsonConvert.SerializeObject(YSBlist);

            jo.Add("gs_WSBZSXMGRID", gs_WSBZSXMGRID);
            jo.Add("gs_YSBZSXMGRID", gs_YSBZSXMGRID);

            string ResponseStr = JsonConvert.SerializeObject(jo);

            context.Response.ContentType = "application/json;charset=UTF-8";
            context.Response.Write(ResponseStr);

            //context.Response.Write(File.ReadAllText(context.Server.MapPath("/swxxtx/getSbxx.do")).Replace("@@gs_WSBZSXMGRID", JsonConvert.SerializeObject(qclist).Replace("\"", "\\\"")));

        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}