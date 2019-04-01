/**
 * 表单校验扩展类
 * Created by Administrator on 2016/12/7.
 */


//以下为修改jQuery Validation插件兼容Bootstrap的方法，没有直接写在插件中是为了便于插件升级
$.validator.setDefaults({
    errorClass : "error",
    unhighlight: function (element, errorClass, validClass) { //验证通过
        $(element).tooltip('destroy').removeClass(errorClass);
    },

    errorPlacement : function (label, element) {
    	if ($(element).next("div").hasClass("tooltip")) {
        	$(element).attr("data-original-title", $(label).text()).tooltip("show");
	     } else {
	        $(element).attr("title",     
	        $(label).text()).tooltip('fixTitle').tooltip("show");
	    }
    },
    submitHandler: function (form) {
        form.submit();
    }
});
//给所有的form开启验证方法
$('div form').validate({
	onfocusout: function(element) { 
	      $(element).valid();
	    }
});
/**
 * 自定义校验后台数据
 * lugeng
 * 2016/11/15
 */
jQuery.validator.addMethod("cv_checkUnique", function(value, element,param) {
    var deferred = $.Deferred();//创建一个延迟对象
    var urls=$("script").eq(1).attr("src");
    urls=urls.substr(0,urls.lastIndexOf("/resources"));
    var url = urls + "/usercontroller.do?vailLoginName&loginname="+value;
    $.ajax({
        url:url,
        async:false,//要指定不能异步,必须等待后台服务校验完成再执行后续代码
        dataType:"json",
        success:function(data) {
            if(data.success){
                deferred.reject();
            }else{
                deferred.resolve();
            }
        }
    });
    //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
    return deferred.state() == "rejected" ? true : false;
}, "账号已存在");

jQuery.validator.addMethod("cv_checkUserNameUnique", function(value, element,param) {
    var deferred = $.Deferred();//创建一个延迟对象
    var urls=$("script").eq(1).attr("src");
    urls=urls.substr(0,urls.lastIndexOf("/resources"));
    var params = param.split(",");
    var qh_id = $(params[0].replace(".","\\.")).val();
    var user_id = $(params[1].replace(".","\\.")).val(); 
    var url = urls + "/usercontroller.do?vailLoginName&loginname="+value+"&qh_id="+qh_id+"&id="+user_id;
    $.ajax({
        url:url,
        async:false,//要指定不能异步,必须等待后台服务校验完成再执行后续代码
        dataType:"json",
        success:function(data) {
            if(data.success){
                deferred.reject();
            }else{
                deferred.resolve();
            }
        }
    });
    //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
    return deferred.state() == "rejected" ? true : false;
}, "账号已存在");


jQuery.validator.addMethod("cv_remotes", function(value, element, param) {
    var deferred = $.Deferred();//创建一个延迟对象
    var url = param+"&oldPwd="+value;
    $.ajax({
        url:url,
        async:false,//要指定不能异步,必须等待后台服务校验完成再执行后续代码
        dataType:"json",
        success:function(data) {
            if(data.success){
                deferred.reject();
            }else{
                deferred.resolve();
            }
        }
    });
    //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
    return deferred.state() == "resolved" ? true : false;
}, "输入的不匹配");


/**
 * 自定义校验方法
 * liugeng
 * 2016/11/15
 */

//验证两次密码
//此方法使用时引用其他文本框数据。写法：eqPassword="#user.password"
$.validator.addMethod("cv_eqPassword", function(value, element, param) {
    var id = param;
    if(!$(id)[0]){
        if(id.indexOf(".")>=0){
            id = id.replace(".","\\.");
        }
    }
    var passwordStr=$(id).val();
    return this.optional(element) || value == passwordStr;
}, $.validator.messages.cv_eqPassword);

//验证密码格式
$.validator.addMethod("cv_password2", function(value, element) {
	if(/\s/.test(value)){
		return false;	
	}
    return this.optional(element) || /^[\u0000-\u00FF]{6,64}$/i.test(value);
}, $.validator.messages.cv_password2);
//密码验证正则表达式
$.validator.addMethod("regexPassword", function(value, element) {
 return this.optional(element) || /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[;:=*@])[0-9A-Za-z;:=*@)]{6,}$/.test(value);
}, "密码至少包含一个大写字母,至少一个小写字母,至少一个数字,至少6位");
//密码验证正则表达式
$.validator.addMethod("regexPassword2", function(value, element) {
 return this.optional(element) || /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/.test(value);
}, "密码至少包含一个字母和一个数字，至少8位");
//验证半角状态输入
$.validator.addMethod("cv_singleType", function(value, element) {
    return this.optional(element) || /^[\u0000-\u00FF]*$/.test(value);
}, $.validator.messages.cv_singleType);

//验证最小长度
$.validator.addMethod("cv_minLength", function(value, element, param) {
	var len=value.replace(/[^\x00-\xff]/g, 'x').length;
    return this.optional(element) || len >= param;
}, $.validator.messages.cv_minLength);

//验证内容介于{0}和{1}之间
//此方法暂无法使用，可使用官方的方法，写法：rangelength="[2,5]"
$.validator.addMethod("cv_length", function(value, element, param) {
    var len = $.trim(value).length;
    return this.optional(element) || len>=param[ 0 ]&&len<=params[ 1 ];
}, $.validator.messages.cv_length);

//验证{0}-{1}位小数位
//此方法暂无法使用，可使用官方的方法，写法：range="[0,100]"
$.validator.addMethod("cv_scalefromTo", function(value, element, param) {
    if(value.indexOf('.')==-1){
        return true;
    }
    var after = $.trim(value.substring(value.indexOf('.')+1,value.length));
    return this.optional(element) || after.length>=param[0]&&after.length<=param[1];
}, $.validator.messages.cv_scalefromTo);


//验证内容不能超过{0}个字符
$.validator.addMethod("cv_bytesLength", function(value, element, param) {
    var len=value.replace(/[^\x00-\xff]/g, 'xx').length;
    return this.optional(element) || len<=param;
}, $.validator.messages.cv_bytesLength);

//验证电话号码
//  ^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$
$.validator.addMethod("cv_phone", function(value, element) {
    return this.optional(element) || /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
}, $.validator.messages.cv_phone);

//验证手机号码
$.validator.addMethod("cv_mobile", function(value, element) {
    return this.optional(element) || /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/i.test(value);
}, $.validator.messages.cv_mobile);

//验证手机或电话
$.validator.addMethod("cv_phoneOrMobile", function(value, element) {
    return this.optional(element) || /^(13|15|18)\d{9}$/i.test(value) || /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
}, $.validator.messages.cv_phoneOrMobile);

//验证长度为11位数字
$.validator.addMethod("cv_11num", function(value, element) {
    return this.optional(element) || /^\d{11}$/i.test(value);
}, $.validator.messages.cv_11num);

//验证身份证号
$.validator.addMethod("cv_idcard", function(value, element) {
    return this.optional(element) || /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/i.test(value);
}, $.validator.messages.cv_idcard);

//验证是否为小数或整数
$.validator.addMethod("cv_floatOrInt", function(value, element) {
    return this.optional(element) || !isNaN(value) || /^(\d{1,3}(,\d\d\d)*(\.\d{1,3}(,\d\d\d)*)?|\d+(\.\d+))?$/i.test(value);
}, $.validator.messages.cv_floatOrInt);

//验证货币
$.validator.addMethod("cv_currency", function(value, element) {
    return this.optional(element) || /^d{0,}(\.\d+)?$/i.test(value);
}, $.validator.messages.cv_currency);

//验证QQ,从10000开始
$.validator.addMethod("cv_qq", function(value, element) {
    return this.optional(element) || /^[1-9]\d{4,9}$/i.test(value);
}, $.validator.messages.cv_qq);

//验证整数
$.validator.addMethod("cv_integer", function(value, element) {
    return this.optional(element) || /^[+]?[0-9]+\d*$/i.test(value);
}, $.validator.messages.cv_integer);

//验证英文和数字
$.validator.addMethod("cv_englishOrNum", function(value, element) {
    return this.optional(element) || /^.[A-Za-z0-9]+$/i.test(value);
}, $.validator.messages.cv_englishOrNum);

//验证最大数值
$.validator.addMethod("cv_maxValue", function(value, element, param) {
    return this.optional(element) || value <= param;
}, $.validator.messages.cv_maxValue);

//验证最小数值
$.validator.addMethod("cv_minValue", function(value, element, param) {
    return this.optional(element) || parseFloat(value) >= parseFloat(param);
}, $.validator.messages.cv_minValue);

//验证必须大于
$.validator.addMethod("cv_lagerThan", function(value, element, param) {
    return this.optional(element) || value>param;
}, $.validator.messages.cv_lagerThan);

//验证小数位
$.validator.addMethod("cv_scale", function(value, element, param) {
    var before = $.trim(value.substring(0,value.indexOf('.')));
    var after = $.trim(value.substring(value.indexOf('.')+1,value.length));
    return this.optional(element) || before.length>0&&/^[+]?[0-9]+\d*$/i.test(before+after)&&param==after.length;
}, $.validator.messages.cv_scale);

//验证金额符号
$.validator.addMethod("cv_money", function(value, element, param) {
    var first = value.charAt(0);
    return this.optional(element) || first==param;
}, $.validator.messages.cv_money);

//验证千分位格式
$.validator.addMethod("cv_thou", function(value, element) {
    var idx=value.indexOf(',');
    if(idx>3||idx==-1)
        return false;
    var newIdx=value.indexOf(',',idx+1);
    while(newIdx>0){
        if(newIdx-idx!=4)
            return false;
        else{
            idx=newIdx;
            newIdx=value.indexOf(',',newIdx+1);
        }
    }
    return this.optional(element) || value.length-idx-1==3?true:false;
}, $.validator.messages.cv_thou);

//验证中文
$.validator.addMethod("cv_chinese", function(value, element) {
    return this.optional(element) || /^[\u0391-\uFFE5]+$/i.test(value);
}, $.validator.messages.cv_chinese);

//验证英语
$.validator.addMethod("cv_english", function(value, element) {
    return this.optional(element) || /^[A-Za-z]+$/i.test(value);
}, $.validator.messages.cv_english);

//验证长度为9位数字或者长度为8位数字以X/x结尾的字符
$.validator.addMethod("cv_integerOrx", function(value, element) {
    return this.optional(element) || /(^\d{9}$)|(^\d{8}(\d|X|x)$)/i.test(value);
}, $.validator.messages.cv_integerOrx);

//验证是否包含空格和非法字符
$.validator.addMethod("cv_unnormal", function(value, element) {
    return this.optional(element) || /^([\u0391-\uFFE5]|[a-zA-Z0-9-_()（）.\\/*])+$/i.test(value);
}, $.validator.messages.cv_unnormal);

//验证用户名
$.validator.addMethod("cv_username", function(value, element) {
    return this.optional(element) || /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/i.test(value);
}, $.validator.messages.cv_username);

//验证传真
$.validator.addMethod("cv_faxno", function(value, element) {
    return this.optional(element) || /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
}, $.validator.messages.cv_faxno);

//验证邮政编码
$.validator.addMethod("cv_zip", function(value, element) {
    return this.optional(element) || /^[1-9]\d{5}$/i.test(value);
}, $.validator.messages.cv_zip);

//验证IP地址
$.validator.addMethod("cv_ip", function(value, element) {
    return this.optional(element) || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(value);
}, $.validator.messages.cv_ip);

//验证姓名，可以是中文或英文
$.validator.addMethod("cv_allName", function(value, element) {
    return this.optional(element) || /^[\u0391-\uFFE5]+$/i.test(value)|/^\w+[\w\s]+\w+$/i.test(value);
}, $.validator.messages.cv_allName);

//验证车牌号码
$.validator.addMethod("cv_carNo", function(value, element) {
    return this.optional(element) || /^[\u4E00-\u9FA5][\da-zA-Z]{6}$/.test(value);
}, $.validator.messages.cv_carNo);

//验证发动机型号
$.validator.addMethod("cv_carenergin", function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9]{16}$/.test(value);
}, $.validator.messages.cv_carenergin);

//验证邮箱
$.validator.addMethod("cv_email2", function(value, element) {
    return this.optional(element) || /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
}, $.validator.messages.cv_email2);

//验证msn
$.validator.addMethod("cv_msn", function(value, element) {
    return this.optional(element) || /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
}, $.validator.messages.cv_msn);

//验证部门排序号
$.validator.addMethod("cv_department", function(value, element) {
    return this.optional(element) || /^[0-9]*$/.test(value);
}, $.validator.messages.cv_department);

//验证日期必须在今天之前
$.validator.addMethod("cv_isBeforeToday", function(value, element) {
    return this.optional(element) || value<new Date().Format("yyyy-MM-dd");
}, $.validator.messages.cv_isBeforeToday);

//验证日期必须在当前之后
$.validator.addMethod("cv_isAfterToday", function(value, element) {
    return this.optional(element) || value>new Date().Format("yyyy-MM-dd");
}, $.validator.messages.cv_isAfterToday);

//验证日期必须在今天或者今天之后
$.validator.addMethod("cv_isEqualOrAfterToday", function(value, element) {
    var dateB=new Date().Format("yyyy-MM-dd");
    return this.optional(element) || value>=dateB;
}, $.validator.messages.cv_isEqualOrAfterToday);

//验证日期必须在今天或者今天之前
$.validator.addMethod("cv_isEqualOrBeforeToday", function(value, element) {
    var dateB=new Date().Format("yyyy-MM-dd");
    return this.optional(element) || value<=dateB;
}, $.validator.messages.cv_isEqualOrBeforeToday);

//验证时间必须在当前之后
$.validator.addMethod("cv_isAfterNow", function(value, element) {
    var dt=value.split(" ");
    var d=new Date(dt[0]);
    var tt=dt[1].split(":");
    var t=parseInt(tt[0],10)||0;
    var m=parseInt(tt[1],10)||0;
    var s=parseInt(tt[2],10)||0;
    var date = new Date(d.getFullYear(),d.getMonth(),d.getDate(),t,m,s);
    return this.optional(element) || date.getTime()>new Date().getTime();
}, $.validator.messages.cv_isAfterNow);

//验证时间必须在当前之前
$.validator.addMethod("cv_isBeforeNow", function(value, element) {
    var dt=value.split(" ");
    var d=new Date(dt[0]);
    var tt=dt[1].split(":");
    var t=parseInt(tt[0],10)||0;
    var m=parseInt(tt[1],10)||0;
    var s=parseInt(tt[2],10)||0;
    var date = new Date(d.getFullYear(),d.getMonth(),d.getDate(),t,m,s);
    return this.optional(element) || date.getTime()<new Date().getTime();
}, $.validator.messages.cv_isAfterNow);

//验证日期是否在系统时间之前
$.validator.addMethod("cv_isBeforeSysday", function(value, element) {
    var dateB=new Date().Format("yyyy-MM-dd HH:mm:ss");
    return this.optional(element) || value<dateB;
}, $.validator.messages.cv_isBeforeSysday);

//验证结束日期必须大于等于开始日期
//此方法使用时引用其他文本框数据。写法：isdateAfter="#userExtra.birthday"
$.validator.addMethod("cv_isdateAfter", function(value, element, param) {
    value=value.replace(/\D/g,"");
    dateA=value;
    //var dateA = $.fn.datebox.defaults.parser(value);
    var id = param;
    if(!$(id)[0]){
        if(id.indexOf(".")>=0){
            id = id.replace(".","\\.");
        }
    }
    var dateBStr=$(id).val();
    dateB=dateBStr.replace(/\D/g,"");
    return this.optional(element) || dateA>=dateB;
}, $.validator.messages.cv_isdateAfter);

//验证开始年份不得大于结束年份
//此方法使用时引用其他文本框数据。写法：yearMoreThan="#userExtra.birthday"
$.validator.addMethod("cv_yearMoreThan", function(value, element, param) {
    var id = param;
    if(!$(id)[0]){
        if(id.indexOf(".")>=0){
            id = id.replace(".","\\.");
        }
    }
    var beginYear=$(id).val();
    if(beginYear.length>4){
        beginYear = beginYear.substring(0,4);
    }
    if(value.length>4){
        value = value.substring(0,4);
    }
    return this.optional(element) || beginYear<value;
}, $.validator.messages.cv_yearMoreThan);

//验证是否选择一个数据项
$.validator.addMethod("cv_checked", function(value, element) {
    var input = param;
    input.unbind('.cc').bind('click.cc',function(){
        $(this).focus();
    });
    return this.optional(element) || input.is(':checked');
}, $.validator.messages.cv_checked);

//验证是否选择一个数据项
$.validator.addMethod("cv_requireRadio", function(value, element, param) {
    var console = param.replace(".","\\.");
    var input = $(console);
    input.off('.requireRadio').on('click.requireRadio',function(){
        $(this).focus();
    });
    return this.optional(element) || $(console + ':checked').val() != undefined;
}, $.validator.messages.cv_requireRadio);

//验证精確身份証
$.validator.addMethod("cv_idcardDetail", function(value, element) {
    return this.optional(element) || idCardNoUtil.checkIdCardNo(value);
}, $.validator.messages.cv_idcardDetail);

/**
 * 身份证精确校验
 * liugeng
 * 2016/11/17
 */
var idCardNoUtil = {
    provinceAndCitys: {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",
        31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",
        45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",
        65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"},

    powers: ["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],

    parityBit: ["1","0","X","9","8","7","6","5","4","3","2"],

    genders: {male:"男",female:"女"},

    checkAddressCode: function(addressCode){
        var check = /^[1-9]\d{5}$/.test(addressCode);
        if(!check) return false;
        if(idCardNoUtil.provinceAndCitys[parseInt(addressCode.substring(0,2))]){
            return true;
        }else{
            return false;
        }
    },

    checkBirthDayCode: function(birDayCode){
        var check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(birDayCode);
        if(!check) return false;
        var yyyy = parseInt(birDayCode.substring(0,4),10);
        var mm = parseInt(birDayCode.substring(4,6),10);
        var dd = parseInt(birDayCode.substring(6),10);
        var xdata = new Date(yyyy,mm-1,dd);
        if(xdata > new Date()){
            return false;//生日不能大于当前日期
        }else if ( ( xdata.getFullYear() == yyyy ) && ( xdata.getMonth () == mm - 1 ) && ( xdata.getDate() == dd ) ){
            return true;
        }else{
            return false;
        }
    },

    getParityBit: function(idCardNo){
        var id17 = idCardNo.substring(0,17);
        var power = 0;
        for(var i=0;i<17;i++){
            power += parseInt(id17.charAt(i),10) * parseInt(idCardNoUtil.powers[i]);
        }
        var mod = power % 11;
        return idCardNoUtil.parityBit[mod];
    },

    checkParityBit: function(idCardNo){
        var parityBit = idCardNo.charAt(17).toUpperCase();
        if(idCardNoUtil.getParityBit(idCardNo) == parityBit){
            return true;
        }else{
            return false;
        }
    },

    checkIdCardNo: function(idCardNo){
        //15位和18位身份证号码的基本校验
        var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
        if(!check) return false;

        //判断长度为15位或18位
        if(idCardNo.length==15){
            return idCardNoUtil.check15IdCardNo(idCardNo);
        }else if(idCardNo.length==18){
            return idCardNoUtil.check18IdCardNo(idCardNo);
        }else{
            return false;
        }
    },

    //校验15位的身份证号码
    check15IdCardNo: function(idCardNo){
        //15位身份证号码的基本校验
        var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
        if(!check) return false;
        //校验地址码
        var addressCode = idCardNo.substring(0,6);
        check = idCardNoUtil.checkAddressCode(addressCode);
        if(!check) return false;
        var birDayCode = '19' + idCardNo.substring(6,12);
        //校验日期码
        return idCardNoUtil.checkBirthDayCode(birDayCode);
    },

    //校验18位的身份证号码
    check18IdCardNo: function(idCardNo){
        //18位身份证号码的基本格式校验
        var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
        if(!check) return false;

        //校验地址码
        var addressCode = idCardNo.substring(0,6);
        check = idCardNoUtil.checkAddressCode(addressCode);
        if(!check) return false;

        //校验日期码
        var birDayCode = idCardNo.substring(6,14);
        check = idCardNoUtil.checkBirthDayCode(birDayCode);
        if(!check) return false;

        //验证校检码
        return idCardNoUtil.checkParityBit(idCardNo);
    },
    formateDateCN: function(day){
        var yyyy =day.substring(0,4);
        var mm = day.substring(4,6);
        var dd = day.substring(6);
        return yyyy + '-' + mm +'-' + dd;
    },
    //获取信息
    getIdCardInfo: function(idCardNo){
        var idCardInfo = {
            gender:"", //性别
            birthday:"" // 出生日期(yyyy-mm-dd)
        };
        if(idCardNo.length==15){
            var aday = '19' + idCardNo.substring(6,12);

            idCardInfo.birthday=idCardNoUtil.formateDateCN(aday);

            if(parseInt(idCardNo.charAt(14))%2==0){
                idCardInfo.gender=idCardNoUtil.genders.female;
            }else{
                idCardInfo.gender=idCardNoUtil.genders.male;
            }
        }else if(idCardNo.length==18){
            var aday = idCardNo.substring(6,14);

            idCardInfo.birthday = idCardNoUtil.formateDateCN(aday);

            if(parseInt(idCardNo.charAt(16))%2==0){
                idCardInfo.gender = idCardNoUtil.genders.female;
            }else{
                idCardInfo.gender = idCardNoUtil.genders.male;
            }
        }
        return idCardInfo;
    },

    getId15:function(idCardNo){
        if(idCardNo.length==15){
            return idCardNo;
        }else if(idCardNo.length==18){
            return idCardNo.substring(0,6) + idCardNo.substring(8,17);
        }else{
            return null;
        }
    },

    getId18: function(idCardNo){
        if(idCardNo.length==15){
            var id17 = idCardNo.substring(0,6) + '19' + idCardNo.substring(6);
            var parityBit = idCardNoUtil.getParityBit(id17);
            return id17 + parityBit;
        }else if(idCardNo.length==18){
            return idCardNo;
        }else{
            return null;
        }
    }
};

/**
 * 转换日期格式
 * liugeng
 * 2016/11/17
 */
Date.prototype.Format = function(fmt)
{ //author: meizz
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}
