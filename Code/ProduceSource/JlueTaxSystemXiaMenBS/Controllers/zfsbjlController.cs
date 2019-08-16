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
        YsbqcSetting set { get; set; }

        Service service { get; set; }

        public zfsbjlController(YsbqcSetting _is, Service _ser)
        {
            this.set = _is;
            service = _ser;
        }

        [Route("start.do")]
        public ActionResult start()
        {
            Nsrxx xx = set.getNsrxx();
            GDTXDate gd = set.getGDTXDate(BDDM.QYSDS.ToString());
            SBZFModel m = new SBZFModel();
            m.Nsrxx = xx;
            m.GDTXDate = gd;
            m.qclist = set.getYsbUserYSBQC();
            return View(m);
        }

        [Route("tj.do")]
        public ActionResult tj()
        {
            string sbuuid = Request.Form["queryVo['sbuuid']"];
            service.SBZF(int.Parse(sbuuid));
            var m = new { success = true };
            return Json(m, JsonRequestBehavior.AllowGet);
        }

    }
}