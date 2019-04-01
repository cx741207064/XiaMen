using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("dzsb/sbfsb")]
    public class dzsbController : Controller
    {
        [Route("sbf_sbzf.do")]
        public ActionResult sbf_sbzf()
        {
            return View("FunctionNotOpen");
        }
    }
}