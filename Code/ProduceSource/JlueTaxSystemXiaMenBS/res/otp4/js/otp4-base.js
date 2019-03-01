var ufc={
		version:"1.0"
};
var xf=ufc;
(function($) {
	var extError=function(s){
		try{
			var $Console=window.console;
			if(typeof $Console =='object' && typeof $Console.error =='function'){
				$Console.error(s);
			}
		}catch(e){
		}
	}
	var extInfo=function(s){
		try{
			var $Console=window.console;
			if(typeof $Console =='object' && typeof $Console.info =='function'){
				$Console.info(s);
			}	
		}catch(e){
		}
	}
	
	var	level=2;
	xf.setLogAppend=function(a){
		xf.logAppend=a;
	};
	
	xf.error=function(s){
		if(xf.logAppend){
			var log=xf.logAppend;
			log.value+="[error]"+s+"\n";
		}
		extError(s);
	};
	var msgCache="";
	xf.info=function(s){
		if(xf.logAppend&&level>=2){
			var log=xf.logAppend;
			log.value+="[info]"+s+"\n";
		}else{
			msgCache+="[info]"+s+"\n";
		}
		extInfo(s);
	};
	
	xf.initLog=function(show){
		if(xf.logAppend) return;
		var $panel=$("<div></div>");
		$panel.addClass("xf-log-panel");
		var $log=$("<textarea></textarea>");
		$log.addClass("xf-logger");
		$panel.append($log);
		$("body").append($panel);
		
		$(document).on("scroll",function(event){
			var pos=25-$(document).scrollTop();
			pos+="px";
			$panel.css({bottom:pos});
		});
		
		xf.setLogAppend($log[0]);
		
		$btn=$("<button/>");
		$btn.html("clear");
		$panel.append($btn);
		$btn.on("click",function(e){
			$log.val("");
		});
		$(document).on("keydown",function(e){
			if(e.ctrlKey&&e.keyCode==123){
				if($panel.is(":hidden"))
					$panel.show();
				else
					$panel.hide();
			}
		});
		//xf.info(msgCache);
		xf.logAppend.value=msgCache;
		msgCache="";
		if(show)$panel.show();
	};
	
	xf.define=function(){
		var s=arguments;
		var f = function(config){
			$.extend(this,config);
		};
		
		var proto=f.prototype;
		for(var i=0;i<s.length;i++){
			if(typeof s[i]=='function'){
				$.extend(proto,s[i].prototype);
				$.extend(f,s[i]);
			}else{
				$.extend(proto,s[i]);
			}
		}
		return f;
	};

	xf.extend=function(f){
		var s=arguments;
		for(var i=1;i<s.length;i++){
			if(typeof s[i]=='function'){
				$.extend(f.prototype,s[i].prototype);
				$.extend(f,s[i]);
			}else{
				$.extend(f.prototype,s[i]);
			}
		}
		return f;
	};
	xf.isFunction=function(n){
		return (typeof n=='function');
	};
	xf.isArray=function(n){
		return (n instanceof Array);
	};
	xf.isNumber=function(n){
		return typeof n =='number';
	};
	xf.trim=function(s){
		return $.trim(s);
	};
	
	xf.hover=function($el,cls){
		$el.mouseover(function(){
			$el.addClass(cls);
		});
		$el.mouseout(function(){$el.removeClass(cls);});		
	};

	
	$.extend(Function.prototype,{
		callback : function(obj,args) {
			var method = this;
			if (!obj)
				obj = window;
			return function() {
				return method.apply(obj,arguments);
			};
		}
	});
	
	$.extend(Array.prototype, {
			contains : function(obj) {
				return this.indexOf(obj) != -1;
			},
			insertAt : function(i, obj) {
				this.splice(i, 0, obj);
			},
			removeAt : function(i) {
				return this.splice(i, 1);
			},
			remove : function(obj) {
				var i = this.indexOf(obj);
				if (i != -1) {
					return this.splice(i, 1);
				}
			},
			removeAll:function(){
				var cnt=this.length;
				this.splice(0,cnt);
			},
			first:function(){
				var cnt=this.length;
				if(cnt>0){
					return this[0];
				}else{
					return null;
				}
			},
			last:function(){
				var cnt=this.length;
				if(cnt>0){
					return this[cnt-1];
				}else{
					return null;
				}
			}
	});
	
	if(!Array.prototype.indexOf){
		Array.prototype.indexOf=function(obj){
			for(var i = 0;i<this.length;i++){  
				if(this[i] == obj){  
					return i;  
				}  
			}  
			return -1;  
		};
	}
})(jQuery);
