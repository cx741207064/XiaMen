using JlueTaxSystemXiaMenBS.Controllers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class ExtendedReflectedHttpActionDescriptor : ReflectedHttpActionDescriptor
    {
        public ExtendedReflectedHttpActionDescriptor(ReflectedHttpActionDescriptor actionDescriptor)
            : base(actionDescriptor.ControllerDescriptor, actionDescriptor.MethodInfo)
        {
        }


        // 摘要: 
        //     执行所描述的操作并返回 System.Threading.Tasks.Task<TResult>，后者在完成后将包含该操作的返回值。
        //
        // 参数: 
        //   controllerContext:
        //     控制器上下文。
        //
        //   arguments:
        //     参数列表。
        //
        //   cancellationToken:
        //     取消标记。
        //
        // 返回结果: 
        //     System.Threading.Tasks.Task<TResult>，完成后将包含操作的返回值。
        public override Task<object> ExecuteAsync(HttpControllerContext controllerContext, IDictionary<string, object> arguments, CancellationToken cancellationToken)
        {
            if (Regex.IsMatch(controllerContext.Request.RequestUri.PathAndQuery, "/common/checktjts.do"))
            {
                //ControllerDescriptor = new HttpControllerDescriptor(Configuration, "commonController", typeof(commonController));
                MethodInfo = typeof(commonController).GetMethod("checktjts");
                //controllerContext.ControllerDescriptor = ControllerDescriptor;
                var con = new commonController();
                con.RequestContext = controllerContext.RequestContext;
                con.Request = controllerContext.Request;
                controllerContext.Controller = con;
                Uri u = controllerContext.Request.RequestUri;
                Uri uu = new Uri("http://" + u.Authority + "/common/checktjts.do");
                controllerContext.Request.RequestUri = uu;
                HttpContextWrapper hcw = (HttpContextWrapper)controllerContext.Request.Properties["MS_HttpContext"];
                HttpRequestWrapper hrw = (HttpRequestWrapper)hcw.Request;
                HttpContext hc = new HttpContext(new HttpRequest("checktjts.do", uu.AbsoluteUri, ""), new HttpResponse(null));
                HttpContext.Current = hc;
            }
            Task<object> obj = base.ExecuteAsync(controllerContext, arguments, cancellationToken);
            return obj;
        }

    }
}