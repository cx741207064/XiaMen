(function ($) {
	
	
	var avalonAttr = "ms-controller"; //必须在前检查，否则可能找到父controller
	var avalonAttr2 = "avalonctrl";
    var config={
    	contextPath:"/"	
    }
    otp4 = {
    	config:function(cfg){
    		if(xf.utils.isEmpty(cfg))
    			return config;
    		else
    			$.extend(config,cfg);
    	},
    	env:function(vm){
    		return vm.$actions.$env||{};
    	},
        inctrl: function ($view) {
            var $ctrl=$("[" + avalonAttr + "]", $view);
            if($ctrl.length==0)
            	$ctrl=$("[" + avalonAttr2 + "]", $view);
            return $ctrl;
        },
        ctrl: function (el) {
            var $ctrl = $(el).closest("[" + avalonAttr + "]");
            if ($ctrl.size() == 0)
                $ctrl = $(el).closest("[" + avalonAttr2 + "]");
            return $ctrl;
        },
        nctrl:function($ctrl){
        	var n=$ctrl.attr(avalonAttr);
        	if(xf.utils.isEmpty(n)) 
        		n=$ctrl.attr(avalonAttr2);
        	return n;
        },
        vm: function (el) {

            return avalon.vmodels[this.nctrl(this.ctrl(el))];
        },
        invm:function(view){
        	var $ctrl=this.inctrl(view);
        	var n=this.nctrl($ctrl);
            return avalon.vmodels[n];
        },
        vmget: function (vm, exp) {
            var ss = exp.split(".");
            var obj = vm;
            var i = 0;
            for (; obj != null && i < ss.length; i++) {
                obj = obj[ss[i]];
            }
            return obj;
        },
        vmset: function (vm, exp, val) {
            var ss = exp.split(".");
            var obj = vm;
            var i = 0;
            for (; obj != null && i < ss.length - 1; i++) {
                obj = obj[ss[i]];
            }
            obj[ss[i]] = val;
        }
    };
    otp4.AvalonAttr = avalonAttr;
    otp4.AvalonAttr2 = avalonAttr2;
    var options={
    	timeout:0,
    	msgTime:500,
    	successIcon:1,
    	failIcon:0,
    	errorIcon:2
    }

    /**
     * 目前只支持2层
     */
    var setVM=function(vm,n,data){
    	if($.isArray(data)){
    		vm[n]=data;
    	}else if(typeof data =='object'){
    		try{
    			var k;
	    		var target=vm[n].$model;
	    		for(k in target){
    				vm[n][k]=data[k];
	    		}
			}catch(e){
				xf.error("---------setVM异常:"+n+","+k+","+e);
			}
    	}else{
    		vm[n]=data;
    	}
    }
    
    //初始化时自动加载所用模型数据
    var msgSuccessOpts={
    		skin: 'layer-success'
    };
    var msgFailOpts={
    		skin: 'layer-fail'
    };
    var msgErrorOpts={
    		skin: 'layer-error'
    };    
    var $locker=null;
    var successFn=function (data, status, jqxhr) {
    	var act=this.action;
    	var vm=this.vm;    	
    	//$locker.hide();
        layer.closeAll('loading');
    	
        if (!xf.utils.isEmpty(data)) {
        	try{
        		var s1=typeof data;
        		if((typeof data) =='string'){
        			data=eval("("+data+")");
        			//放置返回的json外加引号
        			if((typeof data) =='string')
        				data=eval("("+data+")");
        		}
        	
        		
        	}catch(e){
        		alert(e+":"+status+":"+data);
        	}
        	
            var old;
            var msg = data.msg||"失败";
            if(data.success){
            	if(otp4._ActionContext.fromTrigger){
            		var act=otp4._ActionContext.action;
            		msgSuccessOpts.icon=options.successIcon;
            		if(!xf.utils.isEmpty(act.bHint)){
            			if(act.bHint)
            				layer.msg(data.msg,msgSuccessOpts);
            		}else
            			layer.msg(data.msg,msgSuccessOpts);
            		
            		xf.info("time:"+msgSuccessOpts.time);
            	}
            	for(var n in data){
            		if(n=="success"||n=="msg"){
            				continue;
            		}
            		try{
            			/**
            			var p={};
            			p[n]=data[n];
            			//avalon.mix(vm,p);
            			*/
            			setVM(vm,n,data[n]);
            		}catch(e){
            			xf.error(e+"-->vm["+n+"]");
            		}
            	}
            	if(!xf.utils.isEmpty(act.success)){
            		DiFactory.doAction(act.success, vm);
            	}
            }else{
            	msgFailOpts.icon=options.failIcon;
            	layer.alert(msg,msgFailOpts);
            }
        }else{
        	//todo
        }
        otp4._ActionContext={};
    };
    
    var errorFn=function (xhr,status,error) {
    	var act=this.action;
    	var vm=this.vm;
    	//$locker.hide();
        layer.closeAll('loading');
        xf.error("errMsg:"+xhr.responseText);
        msgErrorOpts.icon=options.errorIcon;
        
        if(xf.utils.isEmpty(xhr.msg)){
        	if(xhr.status=="403")
        	layer.alert("请求带有非法字符",msgErrorOpts);
            else	
        	layer.alert("系统异常",msgErrorOpts);
        
        }else
        	layer.alert(xhr.msg,msgErrorOpts);
        otp4._ActionContext={};
    };
    
    var vmdata=function(vm,n){
    	 
    	var arr=[45];
    	if(vm[n]&&vm[n].$model){
    		var obj=vm[n].$model;
    		for(var k in obj){
    			try{
	    			if(vm[n][k].$model){
	    				vm[n][k].$model=ToDBC(vm[n][k].$model,arr);
	    				obj[k]=vm[n][k].$model;
	    			}else{
	    				vm[n][k]=ToDBC(vm[n][k],arr);
	    				obj[k]=vm[n][k];
	    			}
    			}catch(e){
    				//alert("$model null:"+n+","+k);
    			}
    		}
    		return obj;
    	}else{
    		try{
    		vm[n]=ToDBC(vm[n],arr);
    		}catch(e){
				//alert("$model null:"+n+","+k);
			}
    		return vm[n];
    	}
    };
    
    var DiFactory = {
        _dis: [],
        _advices:[],
        config:function(cfg){
    		$.extend(options,cfg);
    	},
        regAdvice:function (selector, fn) {
    		this._advices.push({selector: selector, fn: fn});
    	},
        actContains:function(args,el){
    		var name=$(el).attr("name");
        	if(xf.utils.isEmpty(name))
        		return false;
            for(var i=0;i<args.length;i++){
            	if(name.indexOf(".")>0){
            		if(name.indexOf(args[i]+".")==0)
            			return true;
            	}else{
            		if(name==args[i])
            			return true;
            	}
            }
            return false;
        	
        },    	
    	doAdvice:function(el,vm){
    		var advices=this._advices;
    		vm.$actions.$bInvalid=false;
    		var act=otp4._ActionContext.action;
            var args = act.args||"";
            var ss=[];
            if(args.length>0)
            	ss = args.split(',');
                		
    		for(var i=0;i<advices.length;i++){
    			var a = advices[i];
    			$(a.selector,$(el).closest("form")).each(function(){
    				var aRef=a;
    				if(DiFactory.actContains(ss,this))
    					aRef.fn(this,vm);
    			});
    		}
    	},
        reg: function (selector, fn) {
            this._dis.push({selector: selector, fn: fn});
        },
        ready: function ($view,subVM) {
            var dis = this._dis;
            //xf.info("DiFactory.ready:"+$view+",");+subVM);
	        for (var i = 0; i < dis.length; i++) {
	          var s = dis[i];
	          $(s.selector, $view).each(function () {
	                  var sRef = s;
	                  if($(this).closest('[ms-repeat]').length>0)
	                  	return;
	                  var vm = subVM;
	                  if(xf.utils.isEmpty(subVM)){
	                  	vm=otp4.vm(this);
	                  }
	                 	sRef.fn(this, vm);
	           });
	          }
            
	          //TODO 版本差异：厦门使用以下代码会出现请求重复
//            for (var i = 1; i < dis.length; i++) {
//                var s = dis[i];
//                $(s.selector, $view).each(function () {
//                        var sRef = s;
//                        if($(this).closest('[ms-repeat]').length>0)
//                        	return;
//                        var vm = subVM;
//                        if(xf.utils.isEmpty(subVM)){
//                        	vm=otp4.vm(this);
//                        }
//                       	sRef.fn(this, vm);
//                 });
//            }
//            
//            //trigger后执行 
//            for (var i = 0;i<1;i++) {
//                var s = dis[i];
//                $(s.selector, $view).each(function () {
//                        var sRef = s;
//                        if($(this).closest('[ms-repeat]').length>0)
//                        	return;
//                        var vm = subVM;
//                        if(xf.utils.isEmpty(subVM)){
//                        	vm=otp4.vm(this);
//                        }
//                       	sRef.fn(this, vm);
//                 });
//            }        
            
            
        },
        //for avalon ms-repeat
        ready3:function(nodes,$subVM){
        	for(var i=0;i<nodes.length;i++){
            	var node=nodes[i];
            	if(!xf.utils.isEmpty(node.innerHTML)){
            		otp4.DiFactory.ready($(node),$subVM);
            	}
        	}
        },
        /*
        ready2:function(frag,$subVM){
            for(var i=0;i<frag.childNodes.length;i++){
            	var node=frag.childNodes[i];
            	if(!xf.utils.isEmpty(node.innerHTML)){
            		otp4.DiFactory.ready($(node),$subVM);
            	}
            }
        },
        */
        doAction: function (action, vm,$form) {
        	if ($.isFunction(action)){
        		return action();
        	}
        	msgSuccessOpts.time=options.msgTime;
        	//msgFailOpts.time=options.msgTime*1.2;
        	
        	var act = vm.$actions[action];
            if (xf.utils.isEmpty(act)) {
            	if($.isFunction(vm[action])){
            		return vm[action]();
            	}
            	layer.alert("Action没定义："+action,msgFailOpts);
                return ;
            }

            //
            //执行前置函数before
            //
            if (!xf.utils.isEmpty(act.before)) {
            	if(!DiFactory.doAction(act.before, vm)){
            		return;
            	}
            }
            otp4._ActionContext.action=act;
            //
            //执行系统拦截器
            //
            DiFactory.doAdvice(otp4._ActionContext.el,vm);
            
            //
            //执行远程Action：
            //
            if(vm.$actions.$bInvalid){
            	layer.alert("数据输入有误，请修正!",msgFailOpts);
            	return;
            }
            if (xf.utils.isEmpty(act.url)) {
            	layer.alert("URL 为空",msgErrorOpts);
                return;
            }

            //解析参数，重vm里面获取数据
            var postData = {};
            var args = act.args||"";
            args = args.split(',');
            for (var i = 0; i < args.length; i++) {
            	if(xf.utils.isEmpty(args[i]))
            		continue;
            	
            	postData[args[i]]=vmdata(vm,args[i]);
            }
            
            var callCtx={
            	action:act,
            	vm:vm	
            };

            var timeout=options.timeout;
            if(act.timeout)
            	timeout=act.timeout;
            
            var $files;
            if(!xf.utils.isEmpty($form))
            	$files=$("input[type='file']",$form);
            else
            	$files=$("notesdll");
            var fExclude=0;
            $files.each(function(){
            	var bFind=false;
            	if(DiFactory.actContains(args,this))
            		bFind=true;
            	if(!bFind)
            		fExclude++;
            });
            /*
			if(!$locker){
				$locker=$("<div/>");
				$locker.addClass("xf-acall-lock");
				$("body").append($locker);
			}
			$locker.height(Math.max($(window).height(),document.body.scrollHeight));
			//$locker.show();
            */
            
			//
			//load(type) ,默认type=0
			//
			layer.load(1,{shade:[0.4 , '#000000' , true]});
            if(($files.size()-fExclude)>0){//带文件上传
        		var s = {
        				url:act.url,
        				data:postData,
        				scope:$form[0],
        				timeout : timeout,
        				success : successFn.callback(callCtx),
        				error : errorFn.callback(callCtx)
        			};
        		otp4.fileUpload(s);
            }else{//普通调用
	            $.ajax({
	            	type: 'post',
	            	url: act.url,
	                data: $.toJSON(postData),
	                cache: false,
	                dataType:'json',
	                contentType:'application/json;charset=UTF-8',
	                success: successFn.callback(callCtx),
	                error: errorFn.callback(callCtx),
	                timeout:timeout
	            });
            }
        }
    };
    DiFactory.options=options;
    otp4.DiFactory = DiFactory;
    
    //同步提交数据校验
    otp4.doValidate=function(el,vm){
    	var $form=$(el).closest("form");
    	var $val=$("[xf-validate]",$form);
    	vm.$actions.$bInvalid=false;
    	$val.each(function(){
    		otp4.ValFactory.$beforeFn(this,vm);
    	});
		if(vm.$actions.$bInvalid){
			msgFailOpts.icon=options.failIcon;
        	layer.alert("数据输入有误，请修正!",
        			msgFailOpts);
        	return false;
        }
		return true;
    }
    
   
    var bReadyOver=false;
    otp4.docReady=function(){
    	
    	xf.info("docReady");
    	if(!bReadyOver)
    		DiFactory.ready();
    	bReadyOver=true;
    }


    otp4.getEl=function(vm,action){
    	var $ctrl=$("["+avalonAttr2+"='"+vm.$id+"']");
    	var $ss=$("[xf-trigger]",$ctrl);
    	if($ss.length==0)
    		$ss=$("[xf-route]",$ctrl);
    	if($ss.length==0)
    		$ss=$("input",$ctrl);
    	if($ss.length==0)
    		$ss=$("button",$ctrl);
    	if($ss.length==0)
    		$ss=$("a",$ctrl);
    	if($ss.length==0)
    		return $ctrl.first()[0];
    	else
    		return $ss[0];
    }
    
    otp4.doAction=function(action,vm,b){
    	var fromTrigger=false;
    	if(!xf.utils.isEmpty(b))
    		fromTrigger=b;
    	var el=otp4.getEl(vm);
    	var $form=null;
    	if(el!=null){
    		$form=$(el).closest("form");
    	}
    	if($form==null ||$form.length==0){
    		var $ctrl=$("["+avalonAttr2+"='"+vm.$id+"']");
    		$form=$("form",$ctrl);
	    		
    		//使用controller作为form
    		if($form.length==0)
    			$form=$ctrl;
    	}
    	
    	otp4._ActionContext={
    		el:el,
    		$form:$form,
    		vm:vm,
    		fromTrigger:fromTrigger
    	};
        DiFactory.doAction(action,vm,$form);        	
    }
    
    
    otp4.ActionContext=function(name,val){
    	otp4._ActionContext=otp4._ActionContext||{};
    	var ctx=otp4._ActionContext;
    	if(typeof val !='undefined'){
    		ctx[name]=val;
    	}else{
    		return ctx[name];
    	}
    }

    /**
     * xf-trigger 指令 
     */
    var triggerFN = function (el, vm) {
    	var eventName;
    	var bfn=null;
    	var bDeferr=false;
    	if($(el).is("input[type='text']")){
    		eventName="keydown";
    		bfn=function(e){
    			 return(e.keyCode == 13);
    		}
    	}
    	else if ($(el).is("select")){
    		eventName="change";
    		bDeferr=true;
    	}
    	else{
    		eventName="click";
    	}
    	
        $(el).on(eventName, function (event) {
        	if($(el).is("[disabled]"))
        		return false;
        	
        	if(bfn!=null){
        		if(!bfn(event)){
        			return true;
        		}
        	}
        	var fn=function(){
	        	var action = $(el).attr('xf-trigger');
	        	var $form=$(el).closest("form");
	        	otp4._ActionContext={
	        			el:el,
	        			$form:$form,
	        			vm:vm,
	        			fromTrigger:true
	        	};
	            DiFactory.doAction(action,vm,$form);
	        };
	        
        	if(bDeferr)
        		setTimeout(fn);
        	else
        		fn();
        		
            event.preventDefault();
            return false;
        });
    };
    
    DiFactory.reg("[xf-trigger]", triggerFN);
    

	var layerOpen=function(timeout){
		layer.load(1,{shade:[0.4 , '#000000' , true]});
		timeout=timeout||otp4.DiFactory.options.timeout;
		if(timeout>0){
			setTimeout(function(){
			    layer.closeAll('loading');
			}, timeout);
		}		
	}
	otp4.layerOpen=layerOpen;
	
	//指定符号半角转全角
	var ToDBC =function(txtstring,arr){
		var tmp = "";
		var sfstr=typeof txtstring=='string';
		if(!sfstr){
			 return txtstring
		}
	    txtstring=txtstring+"";
	    var paraAttr=["--"];
	    var resultArr=["－－"];
	    var flag=false;
	    for(var i=0;i<paraAttr.length;i++){
	    	while (txtstring.indexOf(paraAttr[i]) >= 0){
	    		txtstring = txtstring.replace(paraAttr[i],resultArr[i]);
             }
	    }
	     return txtstring;
		
	} 
})(jQuery);

