(function($) {
	var resetEnv=function(env){
		env.$triggerEl=null;
		env.$vm=null;
		env.$routeCfg=null;		
	}
	var route={
		back:function(vm,succ){
			var el=otp4.getEl(vm);
			var env;
			try{
				env=vm.$actions.$env;
			}catch(e){
				layer.alert("系统异常");
				xf.error("路由返回失败(route.back)."+e);				
			}
			var $pop=$(el).closest(".xf-pop-view");
			setTimeout(function() {
				try {
					$pop.fadeOut();
					$pop.remove();
					if(succ&&env.$routeCfg.backAction){
						otp4.doAction(env.$routeCfg.backAction,env.$vm);
					}
				} catch (e) {
					layer.alert("系统异常");
					xf.error("路由返回失败(route.back)."+e);	
				}
				//
				//解决路由页面高度问题
				//
				env.$ctrl.show();
				resetEnv(env);
			}, otp4.DiFactory.options.msgTime);				
		},
		forward:function(vm,rName,args){
			otp4._ActionContext={};
			var el=otp4.getEl(vm);
			route.forward1(el,rName,vm,args);
		},
		forward1:function(el,rName,vm,args){
			//去掉父VM的事件
			var $ctrl=otp4.ctrl(el);
			var $view=$ctrl.closest("[xf-view]");
			var cfg=vm.$routes[rName];
			if(!cfg){
				layer.alert("没有配置路由:"+rName);
				return;
			}
			if(!$view){
				layer.alert("页面没有view");
				return;
			}
			var env={};
			$.extend(env,cfg.args);
			$.extend(env,args);
			env.$triggerEl=el;
			env.$vm=vm;
			env.$ctrl=$ctrl;
			env.$routeCfg=cfg;
			$.ajax( {
				type : "get",
				url : cfg.url,
				async : false,
				success: function(data) {
					var $pop=$("<div class='xf-pop-view'/>");
					
					/*
					var offset=$view.offset();
					$ctrl.append($pop);
					$pop.offset(offset);
					$pop.width($view.width());
					$pop.height($view.height());
					*/
					$pop.empty();
					try{
						$pop.append($(data));
					}catch(ee){
						layer.alert("系统异常");
						xf.error("路由失败(forward1)."+ee);
					}
					
					//
					//解决路由页面高度问题,
					//
					
					try{
						$view.append($pop);
						//$pop.width($view.width());
						//$pop.height($view.height());
						$ctrl.hide();
						$pop.fadeIn();
						var invm=otp4.invm($pop);
						invm.$actions.$env=env;
						if(invm.oninit){
							invm.oninit();
						}
					}catch(ee){
						layer.alert("VM需要定义$actions对象.");
						xf.error("路由失败(forward1)."+ee);
					}
					
					try{
						otp4.DiFactory.ready($pop);
					}catch(ee){
						layer.alert("系统异常");
						xf.error("路由失败(forward1)."+ee);
					}
					
					try{
						avalon.scan($pop[0]);
					}catch(ee){
						layer.alert("系统异常");
						xf.error("路由失败(forward1)."+ee);
					}
				}
			});		
		}
	};

	var routeFn=function(el,vm){
		if(!vm.$routes)
			return;
		var rName=$(el).attr("xf-route");
		$(el).on("click",function(){
			route.forward1(el,rName,vm);
			return false;
		});
	}
	
	otp4.fRoute=route;
	
	otp4.DiFactory.reg("[xf-route]",routeFn);
})(jQuery);

