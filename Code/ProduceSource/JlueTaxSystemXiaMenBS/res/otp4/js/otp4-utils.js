(function($) {
	var seq = 10000;
	var exp=/(MSIE[\s]\d.\d)/;
	xf.utils = {
		isIE6: function(){
			if (exp.test(window.navigator.userAgent)) {
				var browser = RegExp.$1 + "";
				if (/6.0/.test(browser))
					return true;
			}
			return false;
		},			
		isIE67 : function() {
			if (exp.test(window.navigator.userAgent)) {
				var browser = RegExp.$1 + "";
				if (/6.0/.test(browser) || /7.0/.test(browser))
					return true;
			}
			return false;
		},
		isIE9b : function() {
			/*
			 * alert(navigator.userAgent.toLowerCase());
			 * 
			 * if(/msie/.test(navigator.userAgent.toLowerCase())){ var
			 * ver=navigator.userAgent;
			 * if(/msie\s6.0/.test(ver)||/msie\s7.0/.test(ver)||/msie\s8.0/.test(ver))
			 * return true; } return false;
			 * 
			 */
			var nn=(!$.support.leadingWhitespace);
			return nn;
		},
		cancelEvent : function(e) {
			e.stopPropagation();
			e.preventDefault();
		},
		center : function($obj) {
			var screenWidth = $(window).width(), screenHeight = $(window)
					.height();
			var scrolltop = $(document).scrollTop();
			var objLeft = (screenWidth - $obj.width()) / 2;
			var objTop = (screenHeight - $obj.height()) / 2 + scrolltop;
			$obj.css( {
				left : objLeft + 'px',
				top : objTop + 'px' // ,
			// 'display' : 'block'
					});
		},
		isEmpty : function(obj) {
			if (typeof obj == "undefined")
				return true;
			else if (typeof obj == "string" && obj.length == 0)
				return true;
			if (obj == null)
				return true;
			return false;
		},
		property : function(data, name, val) {
			var ss = name.split(".");
			var i = 0;
			var obj = data;
			if (typeof val != "undefined") {
				for (; obj != null && i < ss.length - 1; i++) {
					obj = obj[ss[i]];
				}
				obj[ss[i]] = val;
			} else {
				for (; obj != null && i < ss.length; i++) {
					obj = obj[ss[i]];
				}
				if (obj == null)
					obj = "";
				return obj;
			}
		},
		copyVMData:function(target,vm){
			for(var k in vm){
				if(k.indexOf("$")==0){
					continue;
				}
				if(typeof vm[k]=='object'){
					target[k]=target[k]||{};
					xf.utils.copyVMData(target[k],vm[k]);
				}else
					target[k]=vm[k];
			}
			return target;
		},
		contains : function(array, item) {
			for ( var i = 0; i < array.length; i++) {
				if (array[i] == item)
					return true;
			}
			return false;
		},
		uuid : function(prefix) {
			prefix = prefix || "uuid";
			return prefix + "-" + seq++;
		},
		getOffet:function($el){
			$parent=$el.parent();
			var pos=$parent.css("position");
			if(pos=='static')
				return {top:0,left:0};
			else
				return $el.offset();
		}
	};
})(jQuery);
