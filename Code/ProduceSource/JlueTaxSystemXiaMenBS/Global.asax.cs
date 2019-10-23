using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.SessionState;
using System.Web.Http;
using JlueTaxSystemXiaMenBS.Models;
using JlueTaxSystemXiaMenBS.Code;
using System.Web.Http.Controllers;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemXiaMenBS
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            // 在应用程序启动时运行的代码
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            AutofacMVCConfig.Run();
            AutofacWebApiConfig.Run();

            ModelBinders.Binders.Add(typeof(YhsData), new MyCustomModelBinder());
            ModelBinders.Binders.Add(typeof(FjsData), new MyCustomModelBinder());
            ModelBinders.Binders.Add(typeof(QysdsCommit), new MyModelBinder());
            ModelBinders.Binders.Add(typeof(QysdsZb), new MyModelBinder());

            RegisterView();//注册视图访问规则

            GlobalFilters.Filters.Add(new MVCActionFilter());
            GlobalFilters.Filters.Add(new ExceptionFilter());

            GlobalConfiguration.Configuration.Filters.Add(new APIActionFilter());
            GlobalConfiguration.Configuration.Services.Replace(typeof(IHttpActionSelector), new ExtentedApiControllerActionSelector());
            GlobalConfiguration.Configuration.Services.Replace(typeof(IHttpActionInvoker), new ExtendedApiControllerActionInvoker());

            ControllerBuilder.Current.SetControllerFactory(new MyControllerFactory());
        }

        public override void Init()
        {
            this.PostAuthenticateRequest += (sender, e) => HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Required);
            base.Init();
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            if (Regex.IsMatch(Request.Url.PathAndQuery, "/cxzx/sbxxcx/query"))
            {
                Context.RewritePath("/cxzx/sbxxcx/query");
            }
        }

        void Application_AcquireRequestState(object sender, EventArgs e)
        {
        }

        protected void Application_EndRequest(object sender, EventArgs e)
        {

        }

        protected void RegisterView()
        {
            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new MyViewEngine());
        }

    }
}