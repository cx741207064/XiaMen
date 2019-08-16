using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemXiaMenBS.Models
{
    public class MyModelBinder : DefaultModelBinder
    {
        public override object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            string ModelName = bindingContext.ModelName;
            NameValueCollection nvc = CreateNameValueCollection(controllerContext, bindingContext);
            NameValueCollectionValueProvider nvcvp = new NameValueCollectionValueProvider(nvc, CultureInfo.CurrentCulture);
            ((ValueProviderCollection)bindingContext.ValueProvider).Add(nvcvp);
            object obj = base.BindModel(controllerContext, bindingContext);
            return obj;
        }

        NameValueCollection CreateNameValueCollection(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            string action = controllerContext.RouteData.Values["action"].ToString();
            NameValueCollection Form = controllerContext.HttpContext.Request.Form;
            NameValueCollection nvc = new NameValueCollection();
            switch (action)
            {
                case "jdservice":
                    foreach (string key in Form.AllKeys)
                    {
                        bool bl = Regex.IsMatch(key, "tabForm.table.tableValue.double");
                        if (!bl) continue;
                        string k = Regex.Match(key, @"N\d+").Value;
                        nvc.Add(k, Form[key]);
                    }
                    break;
                case "czzsYbnsrSub":
                    foreach (string key in Form.AllKeys)
                    {
                        string k = Regex.Match(Regex.Match(key, @"\W+\w+").Value, @"\w+").Value;
                        nvc.Add(k, Form[key]);
                    }
                    break;
            }
            return nvc;
        }

    }
}