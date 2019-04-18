using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;
using JlueTaxSystemXiaMenBS.Models;
using JlueTaxSystemXiaMenBS.Code;

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

            RegisterView();//注册视图访问规则

        }

        public override void Init()
        {
            this.PostAuthenticateRequest += (sender, e) => HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Required);
            base.Init();
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
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