using Autofac;
using Autofac.Integration.WebApi;
using JlueTaxSystemXiaMenBS.Code;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;

namespace JlueTaxSystemXiaMenBS
{
    public class AutofacWebApiConfig
    {
        public static void Run()
        {
            ContainerBuilder builder = new ContainerBuilder();
            HttpConfiguration config = GlobalConfiguration.Configuration;

            //builder.RegisterApiControllers(Assembly.GetExecutingAssembly()).PropertiesAutowired();

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterType<YsbqcSetting>().As<YsbqcSetting>().InstancePerRequest();

            var container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }

    }
}