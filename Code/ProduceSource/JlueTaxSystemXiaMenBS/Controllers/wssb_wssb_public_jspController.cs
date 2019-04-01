using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("wssb/wssb/public/jsp")]
    public class wssb_wssb_public_jspController : Controller
    {
        [Route("wssb.jsp")]
        public ActionResult wssb(string sblx)
        {
            if (sblx == "ZZS_XGM")
            {
                return View("FunctionNotOpen");
            }
            return View();
        }
    }
}