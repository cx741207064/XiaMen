(function($) {
	var expEmail = /^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,4}$/;
	var expIP = /(\d+)\.(\d+)\.(\d+)\.(\d+)/;
	var expInt = /^(-)?\d+$/;
	var expFloat = /^((-)?\d+)(\.\d+)?$/;
	var expMoney = /^((-)?\d+)(\.(\d){0,2})?$/;
	var valMessages={
			okMessage:"成功",
			required:"不允许为空",
			mail:"格式:name@xxx.xx",
			IP:"格式:nnn.nnn.nnn.nnn",
			int:"只允许输入数字",
			float:"只允许输入数字",
			money:"金额只允许数字，最多2位小数",
			datetime:"日期(时间)格式不正确"
	};
	
	var ValFactory = {
		required : function(val,msg) {
			if (xf.utils.isEmpty(val))
				return msg||valMessages.required;
		},
		mail : function(val,msg) {
			if (xf.utils.isEmpty(val))
				return;
			if (!expEmail.test(val)) {
				return msg||valMessages.mail;
			}
		},
		IP : function(val,msg) {
			if (xf.utils.isEmpty(val))
				return;
			if (!expIP.test(val)) {
				return msg||valMessages.IP;
			}
		},
		int : function(val,msg) {
			if (xf.utils.isEmpty(val))
				return;
			if (!expInt.test(val)) {
				return msg||valMessages.int;
			}
		},
		float : function(val,msg) {
			if (xf.utils.isEmpty(val))
				return;
			if (!expFloat.test(val)) {
				return msg||valMessages.float;
			}
		},
		money : function(val,msg) {
			if (xf.utils.isEmpty(val))
				return;
			if (!expMoney.test(val)) {
				return msg||valMessages.money;
			}
		},
		datetime:function(val,fmt){
			if (xf.utils.isEmpty(val))
				return;
			var fmt=fmt||"yyyy-MM-dd";
			var sExp=fmt.replace("yyyy","\\d{4}");
			sExp=sExp.replace("MM","\\d{2}");
			sExp=sExp.replace("dd","\\d{2}");
			sExp=sExp.replace("HH","\\d{2}");
			sExp=sExp.replace("mm","\\d{2}");
			sExp=sExp.replace("ss","\\d{2}");
			//xf.info(sExp);
			var rExp=new RegExp(sExp,"ig");
			if(rExp.test(val)){
				var pu=new PatternUtils(fmt);
				var sy=pu.field(val,"yyyy");
				var sM=pu.field(val,"MM");
				var sd=pu.field(val,"dd");
				var sh=pu.field(val,"hh");
				var sm=pu.field(val,"mm");
				var ss=pu.field(val,"ss");
				var time=new Date();
				if(sy.length>0){
					var y=parseInt(sy,10);
					time.setFullYear(y);
					//console.info(y+"---->"+time.getFullYear()+"-"+time.getMonth()+"-"+time.getDate());
					if(y!=time.getFullYear())
						return valMessages.datetime;
						//return "年份输入不正确";
				}
				if(sM.length>0){
					var m=parseInt(sM,10);
					m=m-1;
					time.setMonth(m);
					if(m!=time.getMonth())
						return valMessages.datetime;
						//return "月份输入不正确";
				}
				if(sd.length>0){
					var d=parseInt(sd,10);
					time.setDate(d);
					if(d!=time.getDate())
						return valMessages.datetime;
						//return "日期输入不正确";
				}
				if(sh.length>0){
					var h=parseInt(sh,10);
					time.setHours(h);
					if(h!=time.getHours())
						return valMessages.datetime;
						//return "小时输入不正确";
				}
				if(sm.length>0){
					var m=parseInt(sm,10);
					time.setMinutes (m);
					if(m!=time.getMinutes())
						return valMessages.datetime;
						//return "分钟输入不正确";
				}
				if(ss.length>0){
					var s=parseInt(ss,10);
					time.setSeconds(s);
					if(s!=time.getSeconds())
						return valMessages.datetime;
						//return "秒输入不正确";
				}				
			}else{
				return valMessages.datetime;
			}
		}
	};
	
	var PatternUtils=function(fmt){
		this.fmt=fmt;
		
	}
	xf.extend(PatternUtils,{
		field:function(val,field){
			var pos=this.fmt.indexOf(field);
			var len=field.length;
			if(pos>=0){
				return val.substring(pos,pos+len);
			}else{
				return "";
			}
		}
	});
	
	
	var doValidate = function(el, vm) {
		var s = $(el).attr("xf-validate");
		s=$.trim(s);
		if(s.length==0)
			return;
		var ss2=s.split("|");
		
		s=$.trim(ss2[0]);
		var ss = s.split(";")
		var $parent = $(el).parent();
		var b = true;
		var val = $(el).val();
		var msg = "";
		for ( var i = 0; i < ss.length; i++) {
			var f=ss[i];
			var arg1;
			var arg2;
			var arg3;
			var pos=ss[i].indexOf("(");
			if(pos>0)
			{
				var ePos=ss[i].indexOf(")");
				f=ss[i].substring(0,pos);
				var sArgs=ss[i].substring(pos+1,ePos);
				//xf.info("["+f+"]----------["+sArgs+"]"+ePos+"["+ss[i]+"]");
				sArgs=$.trim(sArgs);
				if(sArgs.length>0){
					var sas=sArgs.split(",");
					try{
						arg1=sas[0];
						if(arg1.indexOf("$")==0){
							var p=arg1.substring(1);
							arg1=xf.utils.property(vm,arg1.substring(1));
						}
						arg2=sas[1];
						arg3=sas[2];
					}catch(ex){
					}
				}
			}
			var r = ValFactory[f](val,arg1,arg2,arg3);
			if (r) {
				msg += r;
				b = false;
				break;
			}
		}
		
		
		if (b) {
			$parent.addClass("xf-has-success");
			$parent.removeClass("xf-has-error");
			$(el).attr("title", valMessages.okMessage);
			//$(el).attr("title", "");
		} else {
			$parent.addClass("xf-has-error");
			$parent.removeClass("xf-has-success");
			$(el).attr("title", msg);
			if(vm.$id.indexOf("$proxy")==0){
				//ms-repeat中的子vm
				var pvm=otp4.vm(el);
				pvm.$actions.$bInvalid = true;
			}else{
				vm.$actions.$bInvalid = true;
			}
		}
	}
	var validateFn = function(el, vm) {
		$(el).on("focusout", function() {
			doValidate(el, vm);
			var s = $(el).attr("xf-validate");
			var ss2=s.split("|");

			var $parent = $(el).parent();
			if ($parent.hasClass("xf-has-error")) {
				// alert($(el).attr("title"));
				if(ss2.length>1){
					var t=$.trim(ss2[1]);
					$(t).html($(el).attr("title"));
				}else{
					layer.msg($(el).attr("title"), {
						icon : otp4.DiFactory.options.failIcon,
						skin : 'layer-fail'
					});
				}
			}else{
				if(ss2.length>1){
					var t=$.trim(ss2[1]);
					$(t).html($(el).attr("title"));
				}else{
					//layer.closeAll();
				}
			}
		});
	}

	var beforeFn = function(el, vm) {
		doValidate(el, vm);
	}
	otp4.ValFactory = ValFactory;
	otp4.regValidator = function(n, fn) {
		ValFactory[n] = fn;
	}
	
	otp4.valMessages=valMessages;
	otp4.configValidator=function(cfg){
		$.extend(valMessages,cfg);
	}
	otp4.ValFactory.$beforeFn = beforeFn;
	otp4.DiFactory.reg("[xf-validate]", validateFn);
	otp4.DiFactory.regAdvice("[xf-validate]", beforeFn);
})(jQuery);
