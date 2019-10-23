using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Filters;
using System.Web.Http.Controllers;
using System.Threading;
using System.Web.Http;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class APIActionFilter : ActionFilterAttribute
    {
        //
        // 摘要: 
        //     在调用操作方法之前发生。
        //
        // 参数: 
        //   actionContext:
        //     操作上下文。
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            ServicesContainer sc = GlobalConfiguration.Configuration.Services;
            ServicesContainer sc1 = actionContext.ControllerContext.Configuration.Services;
        }

        // 摘要: 
        //     在调用操作方法之后发生。
        //
        // 参数: 
        //   actionExecutedContext:
        //     操作执行的上下文。
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {

        }

    }
}
