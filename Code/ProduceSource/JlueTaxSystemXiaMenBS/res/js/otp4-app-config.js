(function($) {
	
	otp4.IE = function() {
		return !!window.createPopup;
	};
	
	/**
	 * 判断IE678
	 */
	otp4.IE678 = function() {
		return !-[-1,];
	};
	
	/**
	 * 判断IE8
	 */
	otp4.IE8 = function() {
		return  !!(window.toStaticHTML);
       
	};
	
	/**
	 * ie9判断
	 */
	otp4.IE9 = function() { 
		return !!(window.msPerformance);
	};


	/***
	 * 配置应用根路径
	 * 默认是根目录
	 */
	otp4.config({
		contextPath : "/res/otp4"
	});

	/**
	 * 配置AJAX:
	 * - timeout:默认为0;
	 * - msgTime:默认为300，action信息框消失时间
	 * 
	 */
	//otp4.DiFactory.config({timeout:3000});
	//otp4.DiFactory.config({msgTime:300});

	/**
	 * 配置Select Model Action URL:
	 * 入参:name,args
	 * 返回JSON数组，格式如下：
	 * 		[{val:'',txt:'',parent:''}....] ，其中：parent可选，树形是可以设置
	 * 参考:mload.jsp
	 */
	otp4.MFactory.config({
		url : "/common/codelist.do"
	});

	/**省份证号码相关校验*/
	otp4.checkIdcard = function(idcard) {
		var Errors = new Array("验证通过!", "身份证号码位数不对!", "身份证号码出生日期超出范围或含有非法字符!",	"身份证号码校验错误!", "身份证地区非法!");
		var area = {
			11 : "北京",
			12 : "天津",
			13 : "河北",
			14 : "山西",
			15 : "内蒙古",
			21 : "辽宁",
			22 : "吉林",
			23 : "黑龙江",
			31 : "上海",
			32 : "江苏",
			33 : "浙江",
			34 : "安徽",
			35 : "福建",
			36 : "江西",
			37 : "山东",
			41 : "河南",
			42 : "湖北",
			43 : "湖南",
			44 : "广东",
			45 : "广西",
			46 : "海南",
			50 : "重庆",
			51 : "四川",
			52 : "贵州",
			53 : "云南",
			54 : "西藏",
			61 : "陕西",
			62 : "甘肃",
			63 : "青海",
			64 : "宁夏",
			65 : "新疆",
			71 : "台湾",
			81 : "香港",
			82 : "澳门",
			91 : "国外"
		}
		var idcard, Y, JYM;
		var S, M;
		var idcard_array = new Array();
		idcard_array = idcard.split("");
		if (area[parseInt(idcard.substr(0, 2))] == null)
			return {code:4,msg:Errors[4]};
		switch (idcard.length) {
		case 15:
			if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0
					|| ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
				ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性   
			} else {
				ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性   
			}
			if (ereg.test(idcard))
				return {code:0,msg:Errors[0]};
			else
				return {code:2,msg:Errors[2]};
			break;
		case 18:
			if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
				ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9xX]$/;//闰年出生日期的合法性正则表达式   
			} else {
				ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9xX]$/;//平年出生日期的合法性正则表达式   
			}
			if (ereg.test(idcard)) {
				S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10]))
						* 7
						+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11]))
						* 9
						+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12]))
						* 10
						+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13]))
						* 5
						+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14]))
						* 8
						+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15]))
						* 4
						+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16]))
						* 2 + parseInt(idcard_array[7]) * 1
						+ parseInt(idcard_array[8]) * 6
						+ parseInt(idcard_array[9]) * 3;
				Y = S % 11;
				y = S % 11;
				M = "F";
				m = "f";
				JYM = "10X98765432";
				jym = "10x98765432";
				M = JYM.substr(Y, 1);
				m = jym.substr(y, 1);
				if (M == idcard_array[17] || m == idcard_array[17])
					return {code:0,msg:Errors[0]};
				else {
					//alert("M" + M + "=m" + m + "idcard_array[17]"+ idcard_array[17]);					
					return {code:3,msg:Errors[3]};
				}
			} else
				return {code:2,msg:Errors[2]};			
			break;
		default:
			return {code:1,msg:Errors[1]}
			break;
		}
	}

	/**省份证号码相关校验 end*/

	/**
	 * 加载静态代码:可以在模块中调用，如下：
	 */
	otp4.MFactory.regModel("mod1", [ {
		val : '010',
		txt : '北京s'
	}, {
		val : '020',
		txt : '上海'
	}, {
		val : '030',
		txt : '广东'
	} ]);
	
	

	/**
	 * 注册校验函数：
	 * 不返回表示成功
	 * 返回String 表示提示信息。
	 */
	var expPhoneNo = /^(\d+)(-\d+)?$/;
	otp4.regValidator("phoneNo", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!expPhoneNo.test(val))
				return "格式:nnn-nnnnnnn";
		}
	});
	
	
	/**
	 * number 类型
	 */
	otp4.regValidator("number", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!(/^[-\+]?\d+$/.test(val) || /^[-\+]?\d+(\.\d+)?$/.test(val)))
				return "输入格式有误,只能为数值类型";
		}
	});
	
	/**小数位数1位限定*/
	otp4.regValidator("number1", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!(/^[-\+]?\d+$/.test(val) || /^[-\+]?\d+(\.\d{1})?$/.test(val)))
				return "输入格式有误,小数位不能超过一位";
		}
	});
		
	/**小数位数2位限定*/
	otp4.regValidator("number2", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!(/^[-\+]?\d+$/.test(val) || /^[-\+]?\d+(\.\d{1,2})?$/.test(val)))
				return "输入格式有误,小数位不能超过两位";
		}
	});
	
	/**小数位数3位限定*/
	otp4.regValidator("number3", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!(/^[-\+]?\d+$/.test(val) || /^[-\+]?\d+(\.\d{1,3})?$/.test(val)))
				return "输入格式有误,小数位不能超过三位";
		}
	});
	
	/**小数位数4位限定*/
	otp4.regValidator("number4", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!(/^[-\+]?\d+$/.test(val) || /^[-\+]?\d+(\.\d{1,4})?$/.test(val)))
				return "输入格式有误,小数位不能超过四位";
		}
	});
	
	/**小数位数5位限定*/
	otp4.regValidator("number5", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!(/^[-\+]?\d+$/.test(val) || /^[-\+]?\d+(\.\d{1,5})?$/.test(val)))
				return "输入格式有误,小数位不能超过五位";
		}
	});
	
	/**率 大于0 小于一 最多五小数*/
	otp4.regValidator("rate", function(val) {
		if (!xf.utils.isEmpty(val)) {
			var reg = /^\d+(\.\d{1,5})?$/;			
			if (reg.test(val)){
				var value = parseFloat(val);  
				if(value > 1) {
					return "输入有误,数值不能大于1";
				}
			} else {
				return "输入格式有误,小数位不能超过五位";				
			}
		}
	});
		
	/**
	 * 邮政编码校验
	 */
	var zipReg = /^[1-9]\d{5}$/;
	otp4.regValidator("zip", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!zipReg.test(val))
				return "邮政编码格式有误";
		}
	});

	var telReg = /^((0[1-9]{3})?(0[12][0-9])?[-])?\d{6,8}$/;
	otp4.regValidator("tel", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!telReg.test(val))
				return "固定电话格式有误";
		}
	});

	var mobileReg = /(^0?[1][34587][0-9]{9}$)/;
	otp4.regValidator("mobile", function(val) {
		if (!xf.utils.isEmpty(val)) {
			if (!mobileReg.test(val))
				return "手机号码格式有误";
		}
	});
	
	otp4.regValidator("idcard", function(val) {
		if (!xf.utils.isEmpty(val)) {
			var rst = otp4.checkIdcard(val);
			if(rst.code != 0) {
				return rst.msg;
			}
		}
	});
	
	/**
	 * 验证文件大小
	 * 默认为1024KB
	 * el 被校验的元素选择器 如:"#file1"
	 * maxSize 文件大小,默认1024KB
	 */
	otp4.checkFileSize = function(elId,maxSize) {		
		var size = 0;
		//默认10kb
		var maxSize = maxSize || 1024;
		elId = elId || '';
		if(xf.utils.isEmpty(elId)) {
			otp4.showWarn("未指定需要校验大小的文件");
			return false;
		}	
		
		 try {		 
			if (otp4.IE()) {//ie旧版浏览器
				var filePath = $(elId).val();		
				var fileMgr = new ActiveXObject("Scripting.FileSystemObject");
		        var fileObj = fileMgr.getFile(filePath);
		        size = fileObj.size; //byte
		        size = size / 1024;//kb
		        //size = size / 1024;//mb
		    } else {//其它浏览器
		        size = $(elId)[0].files[0].size;//byte
		        size = size / 1024;//kb
		        //size = size / 1024;//mb
		    }		
		} catch (e) {
			alert(e + "IE“工具”菜单栏中的“选项”一栏，单击“安全”栏中的“自定义级别”选项卡，将第三项“对没有标记为安全的activex控件进行初始化和脚本运行”设置成“启用”即可。");
			return true;		 
		}
		
		if (size > maxSize) {
			return false;
		} else {
			return true;
		}
	};
		
	//icon: 1(打勾成功) 2(失败 打岔) 3(确认框) 4(锁定) 5哭脸 6 笑脸(成功 )
	    
    /**
     * 成功提示框
     */
	var successOpts={
    		title:'提示',
    		time:2000,
    		//skin: 'layer-success',
    		icon:1
    };
	
    var showSuccess = function(msg,title,func){
    	if(xf.utils.isEmpty(title)) {
    		layer.msg(msg, {time:2000,icon: 1});    		
    	} else {
    		successOpts.title = title;
    		layer.alert(msg,successOpts,func);
    	}
    }    
    otp4.showSuccess = showSuccess;
    

    /**
     * 警告提示框
     */
    var warnOpts={
    		title:'警告',
    		time: 0,
    		//skin: 'layer-fail',
    		icon:0
    };
    
    var showWarn = function(msg,title,func) {
    	if(!xf.utils.isEmpty(title)) {
    		warnOpts.title = title;
    	}
    	layer.alert(msg,warnOpts,func);
    }
    otp4.showWarn = showWarn;
    
    /**
     * 错误提示框
     */
    var errOpts={
    		title:'错误',
    		time:0,
    		//skin: 'layer-error',    	
    		icon:2
    };
    var showError = function(msg,title,func) {
    	if(!xf.utils.isEmpty(title)) {
    		errOpts.title = title;
    	}
    	layer.alert(msg,errOpts,func);
    }
    otp4.showError = showError;
    
    /**
     * 确认提示框
     */
    var confOpt =  {
	    		icon: 3, 
	    		title:'信息'
    };
    
    var showConfirm = function(msg,title,func1,func2) {    	
    	if(!xf.utils.isEmpty(title)) {
    		errOpts.title = title;
    	}
    	
    	layer.confirm(msg,confOpt,func1,func2);
    };
    
    otp4.showConfirm = showConfirm;    
    
})(jQuery);


/**
 * 部分扩展功能，临时放一块
 */
$(function(){
	/**
	 * 绑定所有输入框，去除前后空格
	 */
	$('input[type=text]:not(:disabled)').each(function(){
		$(this).on("focusout",function() {
			try {
			$(this).val($.trim($(this).val()));
			} catch(e){}
		});
	});
	
});
