using JlueTaxSystemXiaMenBS.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class ExtendedApiControllerActionInvoker : ApiControllerActionInvoker
    {
        // 摘要: 
        //     使用指定的控制器上下文来异步调用指定操作。
        //
        // 参数: 
        //   actionContext:
        //     控制器上下文。
        //
        //   cancellationToken:
        //     取消标记。
        //
        // 返回结果: 
        //     已调用的操作。
        public override Task<System.Net.Http.HttpResponseMessage> InvokeActionAsync(HttpActionContext actionContext, CancellationToken cancellationToken)
        {
            //actionContext.ControllerContext.ControllerDescriptor.ControllerName = "commonController";
            //actionContext.ControllerContext.ControllerDescriptor.ControllerType = typeof(commonController);

            Task<System.Net.Http.HttpResponseMessage> hrm = base.InvokeActionAsync(actionContext, cancellationToken);
            return hrm;
        }

    }
}