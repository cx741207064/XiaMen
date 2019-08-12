using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class MyControllerFactory : DefaultControllerFactory
    {
        //
        // 摘要: 
        //     检索指定名称和请求上下文的控制器类型。
        //
        // 参数: 
        //   requestContext:
        //     HTTP 请求的上下文，其中包括 HTTP 上下文和路由数据。
        //
        //   controllerName:
        //     控制器的名称。
        //
        // 返回结果: 
        //     控制器类型。
        protected override Type GetControllerType(RequestContext requestContext, string controllerName)
        {
            return base.GetControllerType(requestContext, controllerName);
        }

        public override IController CreateController(RequestContext requestContext, string controllerName)
        {
            IController iController = base.CreateController(requestContext, controllerName);
            return iController;
        }

        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {
            IController iController = base.GetControllerInstance(requestContext, controllerType);//如果用到了依赖注入，可从注入容器获取
            if (typeof(Controller).IsAssignableFrom(controllerType))
            {
                Controller controller = iController as Controller;
                if (controller != null)
                    controller.ActionInvoker = new MyAsyncControllerActionInvoker();//同样可以从注入容器获取
                return controller;
            }
            return iController;
        }

    }
}