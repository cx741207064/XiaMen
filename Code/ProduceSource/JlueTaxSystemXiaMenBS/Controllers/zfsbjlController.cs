using JlueTaxSystemXiaMenBS.Code;
using JlueTaxSystemXiaMenBS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Controllers
{
    [RoutePrefix("jsdzsb/zfsbjl")]
    public class zfsbjlController : Controller
    {
        YsbqcSetting set;
        public zfsbjlController(YsbqcSetting _is)
        {
            this.set = _is;
        }

        [Route("start.do")]
        public System.Web.Mvc.ActionResult start()
        {
            Nsrxx xx = set.getNsrxx();
            return View(xx);
        }
    }
}