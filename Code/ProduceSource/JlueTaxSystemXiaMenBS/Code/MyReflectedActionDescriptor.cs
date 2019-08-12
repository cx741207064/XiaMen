using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class MyReflectedActionDescriptor : ReflectedActionDescriptor
    {
        // 摘要: 
        //     初始化 System.Web.Mvc.ReflectedActionDescriptor 类的新实例。
        //
        // 参数: 
        //   methodInfo:
        //     操作方法信息。
        //
        //   actionName:
        //     操作的名称。
        //
        //   controllerDescriptor:
        //     控制器描述符。
        //
        // 异常: 
        //   System.ArgumentNullException:
        //     methodInfo 或 controllerDescriptor 参数为 null。
        //
        //   System.ArgumentException:
        //     actionName 参数为 null 或为空。
        public MyReflectedActionDescriptor(MethodInfo methodInfo, string actionName, ControllerDescriptor controllerDescriptor)
            : base(methodInfo, actionName, controllerDescriptor)
        {

        }

        // 摘要: 
        //     使用指定的操作方法参数来执行指定的控制器上下文。
        //
        // 参数: 
        //   controllerContext:
        //     控制器上下文。
        //
        //   parameters:
        //     参数。
        //
        // 返回结果: 
        //     操作返回值。
        //
        // 异常: 
        //   System.ArgumentNullException:
        //     parameters 或 controllerContext 参数为 null。
        public override object Execute(ControllerContext controllerContext, IDictionary<string, object> parameters)
        {
            return base.Execute(controllerContext, parameters);
        }

    }
}