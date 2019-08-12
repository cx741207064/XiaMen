using JlueTaxSystemXiaMenBS.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Routing;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class ExtentedApiControllerActionSelector : ApiControllerActionSelector
    {
        //
        // 摘要: 
        //     为 System.Web.Http.Controllers.ApiControllerActionSelector 选择操作。
        //
        // 参数: 
        //   controllerContext:
        //     控制器上下文。
        //
        // 返回结果: 
        //     选定的操作。
        public override HttpActionDescriptor SelectAction(HttpControllerContext controllerContext)
        {
            ExtendedReflectedHttpActionDescriptor had;
            ReflectedHttpActionDescriptor actionDescriptor = (ReflectedHttpActionDescriptor)base.SelectAction(controllerContext);
            had = new ExtendedReflectedHttpActionDescriptor(actionDescriptor);
            return had;
        }

    }
}
