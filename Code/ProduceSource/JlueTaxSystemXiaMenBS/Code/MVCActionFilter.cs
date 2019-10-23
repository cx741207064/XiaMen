using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class MVCActionFilter : Controller
    {
        //
        // 摘要: 
        //     在调用操作方法前调用。
        //
        // 参数: 
        //   filterContext:
        //     有关当前请求和操作的信息。
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {

        }

        //
        // 摘要: 
        //     在调用操作方法后调用。
        //
        // 参数: 
        //   filterContext:
        //     有关当前请求和操作的信息。
        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {

        }

    }
}