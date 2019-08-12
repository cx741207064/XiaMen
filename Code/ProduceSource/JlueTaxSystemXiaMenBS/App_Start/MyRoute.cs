using JlueTaxSystemXiaMenBS.Code;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Mvc.Routing;

namespace JlueTaxSystemXiaMenBS
{
    public class MyRoute : Route
    {
        public MyRoute()
            : base("", new MvcRouteHandler())
        {
        }

        // 摘要: 
        //     当在派生类中重写时，会返回有关请求的路由信息。
        //
        // 参数: 
        //   httpContext:
        //     一个对象，封装有关 HTTP 请求的信息。
        //
        // 返回结果: 
        //     一个对象，包含路由定义的值（如果该路由与当前请求匹配）或 null（如果该路由与请求不匹配）。
        public override RouteData GetRouteData(HttpContextBase httpContext)
        {
            if (Regex.IsMatch(httpContext.Request.Url.PathAndQuery, "cxzx/sbxxcx/query"))
            {
                var listdata = new List<RouteData>();
                var data = new RouteData(this, new MvcRouteHandler());
                data.Values.Add("controller", "cxzx");
                data.Values.Add("action", "query");
                //data.DataTokens.Add("MS_DirectRouteActions", new object());
                //data.DataTokens.Add("MS_DirectRoutePrecedence", 1.1);
                //data.DataTokens.Add("MS_DirectRouteTargetIsAction", true);
                listdata.Add(data);
                data.Values.Add("MS_DirectRouteMatches", listdata);
                var data2 = base.GetRouteData(httpContext);
                return null;
            }
            return null;
        }

        //
        // 摘要: 
        //     当在派生类中重写时，会检查路由是否与指定值匹配，如果匹配，则生成一个 URL，然后检索有关该路由的信息。
        //
        // 参数: 
        //   requestContext:
        //     一个对象，封装有关所请求的路由的信息。
        //
        //   values:
        //     一个包含路由参数的对象。
        //
        // 返回结果: 
        //     一个对象（包含生成的 URL 和有关路由的信息）或 null（如果路由与 values 不匹配）。
        public override VirtualPathData GetVirtualPath(RequestContext requestContext, RouteValueDictionary values)
        {
            return null;
        }

    }
}