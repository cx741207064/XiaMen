/**
 * 公共工具类
 * Created by huangzongji on 2016/11/8.
 */

Common = {
    /**
     * 获得项目根路径
     *
     * 使用方法：Common.basePath();
     */
    basePath: function () {
    	var curWwwPath = window.document.location.href;
    	//获取主机地址之后的目录，如： proj/share/meun.jsp
		var pathName = window.document.location.pathname;
		var pos = curWwwPath.indexOf(pathName);
		//获取主机地址，如： http://localhost:8080
		var localhostPaht = curWwwPath.substring(0, pos);
		//获取带"/"的项目名，如：/proj
		var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
		return (localhostPaht + projectName);
    },
	/**
	 * 获得uuid
	 * @author linweijian
	 * 使用方法：Common.getuuid();
	 * @date  2016/12/22
	 */
    getuuid:function(){
	    var s = [];
	    var hexDigits = "0123456789abcdef";
	    for (var i = 0; i < 36; i++) {
	        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	    }
	    s[14] = "4"; 
	    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); 
	    s[8] = s[13] = s[18] = s[23] = "-";
	
	    var uuid = s.join("").replace(/-/g,"");
	    return uuid;
	},
	/**
	 * map  形式的键值对
	 * @author linweijian
	 * 使用方法：Common.getMap();
	 * @date  2016/12/26
	 */
	getMap:function(){//初始化map_,给map_对象增加方法，使map_像Map    
	    var map_ = new Object();    
	    map_.put = function(key, value) {    
	        map_[key+'_'] = value;    
	    };    
	    map_.get = function(key) {    
	        return map_[key+'_'];    
	    };    
	    map_.remove = function(key) {    
	        delete map_[key+'_'];    
	    };    
	    map_.keyset = function() {    
	        var ret = "";    
	        for(var p in map_) {    
	            if(typeof p == 'string' && p.substring(p.length-1) == "_") {    
	                ret += ",";    
	                ret += p.substring(0,p.length-1);    
	            }    
	        }    
	        if(ret == "") {    
	            return ret.split(",");    
	        } else {    
	            return ret.substring(1).split(",");    
	        }    
	    };    
	    return map_;    
	},
	/**
	 * 获取当前时间
	 * @author linweijian
	 * 使用方法：Common.getNowFormatDate();
	 * @date  2016/12/28
	 */
	getNowFormatDate:function (){
	    var date = new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	            + " " + date.getHours() + seperator2 + date.getMinutes()
	            + seperator2 + date.getSeconds();
	    return currentdate;
	},
	
	/**
	 * 获取当前时间
	 * @author zengjingui
	 * @param format  eg:format="yyyy-MM-dd hh:mm:ss";
	 * 使用方法：Common.getNowDateTime("yyyy-MM-dd hh:mm:ss");
	 * @returns
	 */
	getNowDateTime : function(format) {
		var date = new Date();

		var o = {
			"M+" : date.getMonth() + 1, // month
			"d+" : date.getDate(), // day
			"h+" : date.getHours(), // hour
			"m+" : date.getMinutes(), // minute
			"s+" : date.getSeconds(), // second
			"q+" : Math.floor((date.getMonth() + 3) / 3), // quarter
			"S" : date.getMilliseconds()
			// millisecond
		};

		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (date.getFullYear() + "")
							.substr(4 - RegExp.$1.length));
		}

		for (var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1
								? o[k]
								: ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return format;
	}
	
	
};

/**
 * 防止按backspace键退出系统
 * liugeng 2017/4/7
 */
$(document).keydown(
		function(e) {
			var doPrevent;
			if (e.keyCode == 8 || e.keyCode == 13) { // 注：8为Backspace键，13为Enter键
				var d = e.srcElement || e.target;
				if (d.tagName.toUpperCase() == 'INPUT'
						|| d.tagName.toUpperCase() == 'TEXTAREA') {
					doPrevent = d.readOnly || d.disabled;
				} else
					doPrevent = true;
			} else {
				doPrevent = false;
			}
			if (doPrevent) {
				e.preventDefault();
			}
		});

function number_formatter(value, row, index) {
	return index + 1;
}

/**
 * 日期格式化
 * zengjingui 2017/1/4
 */
function date_formatter(value, row, index) {
	if(value) {
		var returnDate;
		var tmpLength = value.length;
		if (tmpLength == 8) {
			returnDate = value.substr(0, 4) + "-" + value.substr(4, 2) + "-" + value.substr(6, 2);
		} else if (tmpLength > 8) {
			returnDate = value.substr(0, 4) + "-" + value.substr(4, 2) + "-"
						+ value.substr(6, 2) + " " + value.substr(8, 2) + ":"
						+ value.substr(10, 2) + ":" + value.substr(12, 2);
		}
		return returnDate;
	}
	return value;
}

//格式化结束标志
function endsign_formatter(value, row, index) {
	for(var i = 0;i < top.codeinfos.endsign.length;i++) {
		if(value == top.codeinfos.endsign[i].id) {
			return top.codeinfos.endsign[i].text;
		}
	}
	return value;
}

// 格式化流程状态
	function statusflag_formatter(value, row, index) {
		for(var i = 0;i < top.codeinfos.statusflag.length;i++) {
			if(value == top.codeinfos.statusflag[i].id) {
				return top.codeinfos.statusflag[i].text;
			}
		}
		return value;
	}

Array.prototype.where = function(f) {
	var fn = f;
	if(!fn)return;
	// if type of parameter is string         
	if (typeof f == "string")
		// try to make it into a function
		if ((fn = lambda(fn)) == null)
			// if fail, throw exception
			throw "Syntax error in lambda string: " + f;
	// initialize result array
	var res = [];
	var l = this.length;
	// set up parameters for filter function call
	var p = [ 0, 0, res ];
	// append any pass-through parameters to parameter array               
	for ( var i = 1; i < arguments.length; i++)
		p.push(arguments[i]);
	// for each array element, pass to filter function
	for ( var i = 0; i < l; i++) {
		// skip missing elements
		if (typeof this[i] == "undefined")
			continue;
		// param1 = array element             
		p[0] = this[i];
		// param2 = current indeex
		p[1] = i;
		// call filter function. if return true, copy element to results  
		if (!!fn.apply(this, p))
			res.push(this[i]);
	}
	// return filtered result
	return res;
};

function lambda(l) {
	var fn = l.match(/\((.*)\)\s*=>\s*(.*)/);
	var p = [];
	var b = "";
	if (fn.length > 0)
		fn.shift();
	if (fn.length > 0)
		b = fn.pop();
	if (fn.length > 0)
		p = fn.pop().replace(/^\s*|\s(?=\s)|\s*$|,/g, '').split(' ');

	// prepend a return if not already there.
	fn = ((!/\s*return\s+/.test(b)) ? "return " : "") + b;

	p.push(fn);

	try {
		return Function.apply({}, p);
	} catch (e) {
		return null;
	}
}


/**
 * 初始化单个时间空间
 * @param fieldId 标签ID  
 * @param DateType 时间类型 date 日期  time 时间
 * @returns
 */
function InitDatePlug(dateType,fieldId){
	layui.use([ 'laydate'], function(){
	    var $ = layui.$;
	    var laydate = layui.laydate;
	    var nowTime = new Date().valueOf();
	    var max = null;
	    var start = laydate.render({
	        elem: fieldId,
	        type: dateType, 
	        btns: ['clear', 'confirm']
	    });
	});
}

/**
 * 初始化 两个关联空间 
 * @param dateType  时间类型 date 日期  time 时间
 * @param beginFieldId 开始时间 标签ID
 * @param beginValue   开始时间 初始值
 * @param endFileId    结束时间 标签ID  
 * @param endValue	   结束时间 初始值
 * @returns
 */
function InitDatePlugContact(dateType,beginFieldId,beginValue,endFileId,endValue){
	layui.use([ 'laydate'], function(){
	    var $ = layui.$;
	    var laydate = layui.laydate;
	    var nowTime = new Date().valueOf();
	    var max = null;
	    var start = laydate.render({
	        elem: beginFieldId,
	        type: dateType,
	        max: endValue,
	        btns: ['clear', 'confirm'],
	        done: function(value, date){
	            endMax = end.config.max;
	            end.config.min = date;
	            end.config.min.month = date.month -1;
	        }
	    });
	    var end = laydate.render({
	        elem: endFileId,
	        type: dateType,
	        min: beginValue,
	        done: function(value, date){
	            if($.trim(value) == ''){
	                var curDate = new Date();
	                date = {'date': curDate.getDate(), 'month': curDate.getMonth()+1, 'year': curDate.getFullYear()};
	            }
	            start.config.max = date;
	            start.config.max.month = date.month -1;
	        }
	    });
	});
}

/**
 * 禁用表单
 * @param formId 表单ID
 */
function formReadonly(formId) {
	$('#' + formId + ' input,TEXTAREA,select').attr("disabled",true);
	$('#' + formId + ' select,button').attr("disabled",true)
}
/*
 * 查询栏收缩
 * @param formId 表单ID
 */
var sfss = true;//查询栏是否收缩,默认收缩
function telescopic(formId){
	var count = $("#"+formId)[0].length;
	var height = $("#"+formId+" .form-group")[0].scrollHeight;
	if(sfss){
		$("#"+formId).css({
		    'clear':'both',    // 清除背景
		    'overflow':'hidden',
		    'height':''+(height*2+5)
		});
		var nowClass = $("#telescopic_frame").attr("class");
		$("#telescopic_frame").removeClass(nowClass);
		$("#telescopic_frame").addClass("fa fa-caret-square-o-down");
		sfss = false;
	}else{
		$("#"+formId).css({
		    'clear':'both',    // 清除背景
		    'overflow':'visible',
		    'height':'auto'
		});
		var nowClass = $("#telescopic_frame").attr("class");
		$("#telescopic_frame").removeClass(nowClass);
		$("#telescopic_frame").addClass("fa fa-caret-square-o-up");
		sfss = true
	}
}
