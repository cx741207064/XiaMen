using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Async;

namespace JlueTaxSystemXiaMenBS.Code
{
    public class MyReflectedAsyncControllerDescriptor : ReflectedAsyncControllerDescriptor
    {
        public MyReflectedAsyncControllerDescriptor(Type controllerType)
            : base(controllerType)
        {

        }

    }
}