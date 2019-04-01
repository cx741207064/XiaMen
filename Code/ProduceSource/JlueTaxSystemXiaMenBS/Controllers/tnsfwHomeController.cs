using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("tnsfwHome")]
    public class tnsfwHomeController : Controller
    {
        [Route("nologin/getTzgg.do")]
        public string getTzgg()
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("getTzgg.json"));
            Response.ContentType = "application/json;charset=UTF-8";
            return str;
        }

        [Route("queryCurLocal.do")]
        public string queryCurLocal(string memu_item_id)
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("queryCurLocal." + memu_item_id + ".json"));
            Response.ContentType = "application/json;charset=UTF-8";
            return str;
        }

        [Route("index.do")]
        public string index(string menuid, string menu_item_id)
        {
            string str = "";
            try
            {
                str = System.IO.File.ReadAllText(Server.MapPath("index." + menuid + "." + menu_item_id + ".html"));
            }
            catch (Exception ex)
            {
                if (ex.GetType().Name == "FileNotFoundException")
                {
                    str = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "Views/Shared/FunctionNotOpen.cshtml");
                    Response.ContentType = "text/html;charset=UTF-8";
                    return str;
                }
            }
            Response.ContentType = "text/html;charset=UTF-8";
            return str;
        }

    }
}