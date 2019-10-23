using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Async;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class MyAsyncControllerActionInvoker : AsyncControllerActionInvoker
    {
        //
        // 摘要: 
        //     返回控制器描述符。
        //
        // 参数: 
        //   controllerContext:
        //     控制器上下文。
        //
        // 返回结果: 
        //     控制器描述符。
        protected override ControllerDescriptor GetControllerDescriptor(ControllerContext controllerContext)
        {
            ControllerDescriptor controllerDescriptor = base.GetControllerDescriptor(controllerContext);
            MyReflectedAsyncControllerDescriptor myReflectedAsyncControllerDescriptor = new MyReflectedAsyncControllerDescriptor(controllerDescriptor.ControllerType);
            return myReflectedAsyncControllerDescriptor;
        }

        //
        // 摘要: 
        //     查找有关操作方法的信息。
        //
        // 参数: 
        //   controllerContext:
        //     控制器上下文。
        //
        //   controllerDescriptor:
        //     控制器描述符。
        //
        //   actionName:
        //     操作的名称。
        //
        // 返回结果: 
        //     有关操作方法的信息。
        protected override ActionDescriptor FindAction(ControllerContext controllerContext, ControllerDescriptor controllerDescriptor, string actionName)
        {
            //actionName = null;
            //controllerContext.RouteData.Values["action"] = "manager";
            //controllerContext.RouteData.Values["MS_DirectRouteMatches"] = null;
            ActionDescriptor actionDescriptor = base.FindAction(controllerContext, controllerDescriptor, actionName);
            ReflectedActionDescriptor reflectedActionDescriptor = actionDescriptor as ReflectedActionDescriptor;
            MyReflectedActionDescriptor myReflectedActionDescriptor = new MyReflectedActionDescriptor(reflectedActionDescriptor.MethodInfo, actionDescriptor.ActionName, controllerDescriptor);
            return myReflectedActionDescriptor;
        }

        //
        // 摘要: 
        //     使用指定的参数和控制器上下文来调用指定的操作方法。
        //
        // 参数: 
        //   controllerContext:
        //     控制器上下文。
        //
        //   actionDescriptor:
        //     操作描述符。
        //
        //   parameters:
        //     参数。
        //
        // 返回结果: 
        //     执行操作方法的结果。
        protected override ActionResult InvokeActionMethod(ControllerContext controllerContext, ActionDescriptor actionDescriptor, IDictionary<string, object> parameters)
        {
            ActionResult actionResult = base.InvokeActionMethod(controllerContext, actionDescriptor, parameters);
            return actionResult;
        }

        // 摘要: 
        //     创建操作结果。
        //
        // 参数: 
        //   controllerContext:
        //     控制器上下文。
        //
        //   actionDescriptor:
        //     操作描述符。
        //
        //   actionReturnValue:
        //     操作返回值。
        //
        // 返回结果: 
        //     操作结果对象。
        protected override ActionResult CreateActionResult(ControllerContext controllerContext, ActionDescriptor actionDescriptor, object actionReturnValue)
        {
            var AcceptTypes = controllerContext.HttpContext.Request.AcceptTypes;
            if (AcceptTypes[0] == "text/html")
            {
                YsbqcSetting.getSession();
            }
            return base.CreateActionResult(controllerContext, actionDescriptor, actionReturnValue);
        }

        //
        // 摘要: 
        //     使用指定的控制器上下文来调用指定的操作结果。
        //
        // 参数: 
        //   controllerContext:
        //     控制器上下文。
        //
        //   actionResult:
        //     操作结果。
        protected override void InvokeActionResult(ControllerContext controllerContext, ActionResult actionResult)
        {
            base.InvokeActionResult(controllerContext, actionResult);
        }

        //
        // 摘要: 
        //     使用指定的控制器上下文来调用指定操作。
        //
        // 参数: 
        //   controllerContext:
        //     控制器上下文。
        //
        //   actionName:
        //     要调用的操作的名称。
        //
        // 返回结果: 
        //     执行操作的结果。
        //
        // 异常: 
        //   System.ArgumentNullException:
        //     controllerContext 参数为 null。
        //
        //   System.ArgumentException:
        //     actionName 参数为 null 或为空。
        //
        //   System.Threading.ThreadAbortException:
        //     线程在此操作的调用期间已中止。
        //
        //   System.Exception:
        //     在此操作的调用期间出现未指定的错误。
        public override bool InvokeAction(ControllerContext controllerContext, string actionName)
        {
            return base.InvokeAction(controllerContext, actionName);
        }

    }
}