/*******************************************************************************
 * 功能：除去字符串的前后空格
 ******************************************************************************/
var WHITE_SPACE = " \t\r\n";
var validatemessages = "";
function trim(s) {
	if (s == null || s == "")
		return s;

	// j, first non-whitespace char
	var j = -1;

	for (var i = 0; i < s.length; i++) {
		if (WHITE_SPACE.indexOf(s.charAt(i)) == -1) {
			j = i;
			break;
		}
	}

	if (j == -1)
		return "";

	// //
	// Must have non-whitespace chars
	// //

	// k, last non-whitespace char
	var k = j;

	for (var i = s.length - 1; i > j; i--) {
		if (WHITE_SPACE.indexOf(s.charAt(i)) == -1) {
			k = i;
			break;
		}
	}

	return s.substring(j, k + 1);
}

/*******************************************************************************
 * 功能： e1.innerHTML <-> e2.innerHTML
 ******************************************************************************/
function swapContent(id_1, id_2) {
	var e1 = document.getElementById(id_1);
	var e2 = document.getElementById(id_2);
	var s = e2.innerHTML;

	e2.innerHTML = e1.innerHTML;
	e1.innerHTML = s;
}

/*******************************************************************************
 * 功能： 设置 DISPLAY 属性
 ******************************************************************************/
function setDisplay(id, display) {
	var element = document.getElementById(id);

	if (element && element.style)
		element.style.display = display;
}

/*******************************************************************************
 * 功能： 转换 DISPLAY 属性( block, none )
 ******************************************************************************/
function toggleDisplay(id) {
	var tmp = document.getElementById(id);

	if (!tmp)
		return;

	tmp = tmp.style;

	if (!tmp.display || tmp.display == "block")
		tmp.display = "none";
	else
		tmp.display = "block";
}

function toggleImage(img) {
	var i = img.src.lastIndexOf(".");

	img.src = img.src.substring(0, i - 1) + (img.src.charAt(i - 1) % 2 + 1) + img.src.substring(i, img.src.length);
}

/*******************************************************************************
 * 功能： 设置 innerHTML 属性
 ******************************************************************************/
function setContent(id, content) {
	document.getElementById(id).innerHTML = content;
}

/*******************************************************************************
 * 功能： TRIM 所有表单元素
 ******************************************************************************/
function trimAll() {
	var form;

	for (var i = 0; i < document.forms.length; i++) {
		form = document.forms[i];

		for (var j = 0; j < form.elements.length; j++) {
			if (form.elements[j].value)
				form.elements[j].value = trim(form.elements[j].value);
		}
	}
}

/*******************************************************************************
 * 功能： 替换URL中的 # 为 escape('#')
 ******************************************************************************/
function escapeURL(s) {
	return s.replace(/#/g, escape('#'));
}

/*******************************************************************************
 * 功能： 检查array是否包含s - s 字符串 - array 字符串数组
 ******************************************************************************/
function inArray(s, array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] == s)
			return true;
	}
	return false;
}

function setErrorStyle(e) {
	e.style.backgroundColor = 'red';
}

function setNormalStyle(e) {
	e.style.backgroundColor = '';
}

function validateNotNull(e) {
	var val;
	val = trim(e.value);
	if ((e.type == "select-one" && val == "00") || val.length == 0 || isNotSelected(e)) {
		e.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	setNormalStyle(e);
	e.title = "";
	return true;
}

///**
// * 日期不大于当前今天
// */
//function dateNotGreaterThanToday(e) {
//    var val = trim(e.value);
//    var date = new Date();
//    var yyyy = date.getFullYear();
//    var MM = date.getMonth() + 1;
//    if (MM < 0xa)
//        MM = "0" + MM;
//    var dd = date.getDate();
//    // 今天日期
//    var today = yyyy + "-" + MM + "-" + dd;
//    if (val > today) {
//        e.title = "日期不能大于当前日期!";
//        setErrorStyle(e);
//        validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
//    }
//    setNormalStyle(e);
//    e.title = "";
//    return val <= today;
//}


function isNotSelected(com) {
	if (com.type != "radio") {
		return false;
	}
	var comname = com.name;
	var radiocom = eval("document.all('" + comname + "')");

	var rt = true;
	if (radiocom.length) {
		for (var i = 0; i < radiocom.length; i++) {
			if (radiocom[i].checked == true) {
				rt = false;
				break;
			}
		}
	} else {
		if (radiocom.checked == true) {
			rt = false;
		}
	}
	return rt;
}

function validateNumberInRange(e, lvalue, hvalue, scale, precision, requried, codeset) {
	var val, result;
	val = trim(e.value);
	result = true;
	if (val.length == 0 && requried) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (isNaN(val)) {
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]为非正确的数值类型！</p>";
		result = false;
	} else {
		val = parseFloat(val);
		if (val < lvalue || hvalue < val) {
			validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]不在[" + lvalue + "--" + hvalue + "]之内！</p>";
			result = false;
		}
	}
	if (result == false) {
		this.title = "该输入项取值范围为[" + lvalue + "--" + hvalue + "]!";
		setErrorStyle(e);
	} else {
		this.title = "";
		setNormalStyle(e);
	}
	return result;
}

function validateNumberMMIN(e, lvalue, hvalue, scale, precision, requried, codeset) {
	var val, result, dotindex, intlen, declen, aa;
	val = trim(e.value);
	aa = parseFloat(val);
	result = true;

	if (val.length == 0 && requried) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (isNaN(val)) {
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]为非正确的数值类型！</p>";
		result = false;
	} else {
		dotindex = val.indexOf(".");
		if (dotindex == -1) {
			intlen = val.length;
			declen = 0;
		} else {
			intlen = dotindex;
			declen = val.length - intlen - 1;
		}
		if (intlen > scale || declen > precision) {
			validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]不在[整数位为:" + scale + "--小数位为:" + precision + "]之内！</p>";
			result = false;
		}

		if (aa > hvalue || aa < lvalue) {
			validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]不在[数值:" + lvalue + "--与:" + hvalue + "]之内！</p>";
			result = false;
		}

	}
	if (result == false) {
		this.title = "该输入项取值范围为[整数位:" + scale + "--小数位:" + precision + "]!";
		setErrorStyle(e);
	} else {
		this.title = "";
		setNormalStyle(e);
	}
	return result;
}

function validateNumberAboveMin(e, lvalue, hvalue, scale, precision, requried, codeset) {
	var val, result;
	val = trim(e.value);
	result = true;
	if (val.length == 0 && requried) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (isNaN(val)) {
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]为非正确的数值类型！</p>";
		result = false;
	} else {
		val = parseFloat(val);
		if (val < lvalue) {
			validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]小于[" + lvalue + "]</p>";
			result = false;
		}
	}
	if (result == false) {
		this.title = "该输入项取值范围应大于等于[" + lvalue + "]!";
		setErrorStyle(e);
	} else {
		this.title = "";
		setNormalStyle(e);
	}
	return result;
}

function validateNumberBelowMax(e, lvalue, hvalue, scale, precision, requried, codeset) {
	var val, result;
	val = trim(e.value);
	result = true;
	if (val.length == 0 && requried) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (isNaN(val)) {
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]为非正确的数值类型！</p>";
		result = false;
	} else {
		val = parseFloat(val);
		if (val > hvalue) {
			validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]大于[" + hvalue + "]</p>";
			result = false;
		}
	}
	if (result == false) {
		this.title = "该输入项取值范围应小于等于[" + hvalue + "]!";
		setErrorStyle(e);
	} else {
		this.title = "";
		setNormalStyle(e);
	}
	return result;
}

function validateNumberInScale(e, lvalue, hvalue, scale, precision, requried, codeset) {
	var val, result, dotindex, intlen, declen;
	val = trim(e.value);
	result = true;
	if (val.length == 0 && requried) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (isNaN(val)) {
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]为非正确的数值类型！</p>";
		result = false;
	} else {
		dotindex = val.indexOf(".");
		if (dotindex == -1) {
			intlen = val.length;
			declen = 0;
		} else {
			intlen = dotindex;
			declen = val.length - intlen - 1;
		}
		if (intlen > scale || declen > precision) {
			validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]不在[整数位为:" + scale + "--小数位为:" + precision + "]之内！</p>";
			result = false;
		}
	}
	if (result == false) {
		this.title = "该输入项取值范围为[整数位:" + scale + "--小数位:" + precision + "]!";
		setErrorStyle(e);
	} else {
		this.title = "";
		setNormalStyle(e);
	}
	return result;
}

// 验证房产土地证号为4-12位整数
function validateNumberFCTDZH(e, lvalue, hvalue, scale, precision, requried, codeset) {
	var val, result, dotindex, intlen, declen;
	val = trim(e.value);
	result = true;

	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (isNaN(val)) {
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]为非正确的数值类型！</p>";
		result = false;
	} else {
		dotindex = val.indexOf(".");
		if (dotindex == -1) {
			intlen = val.length;
			declen = 0;
		} else {
			intlen = dotindex;
			declen = val.length - intlen - 1;
		}
		if (intlen < 4 || intlen > scale || declen > precision) {
			validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]不在[整数位为:4--" + scale + "]位之内！</p>";
			result = false;
		}
	}
	if (result == false) {
		this.title = "该输入项取值范围为[整数位:" + scale + "--小数位:" + precision + "]!";
		setErrorStyle(e);
	} else {
		this.title = "";
		setNormalStyle(e);
	}
	return result;
}
/**
 * 非居民WZGJ0001勾稽关系
 * 
 */
function Expression(value){
    if(value){
        value = round(value, 2);
    }else{
        value = 0;
    }
    return value;
}

function ynse(){

    var ynsde=document.getElementsByName("tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBGB$YNSDE)")[0].value;
    var sl=document.getElementsByName("tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBGB$SL)")[0].value;
    if(ynsde==null ||ynsde==""){
    	return false;
    }
    if(sl==null ||sl==""){
    	return false;
    }
    document.getElementsByName("tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBGB$YNSE)")[0].value=Expression(ynsde*sl*0.01);
}
function jmse(){
	var ynsde=document.getElementsByName("tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBGB$YNSDE)")[0].value;
    var sl=document.getElementsByName("tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBGB$SL)")[0].value;
   var xdsl=document.getElementsByName("tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBGB$XDSL)")[0].value;
    if(ynsde==null ||ynsde==""){
    	return false;
    }
    if(sl==null ||sl==""){
    	return false;
    }
    if(xdsl==null ||xdsl==""){
    	return false;
    }
document.getElementsByName("tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBGB$JMSE)")[0].value=Expression(ynsde*(sl-xdsl)*0.01);
}

function validateCharInRange(e, minlen, maxlen, scale, precision, requried, codeset) {
	var val, result;
	result = true;
	val = trim(e.value);
	if (val.length == 0 && requried) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (val.length < minlen || val.length > maxlen) {
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的长度应在[" + minlen + "--" + maxlen + "]之内！</p>";
		result = false;
	}
	if (result == false) {
		this.title = "该输入项字符长度应为[" + minlen + "--" + maxlen + "]之间!";
		setErrorStyle(e);
	} else {
		this.title = "";
		setNormalStyle(e);
	}
	return result;
}

/* 检查日期是否合法 */
function checkDate(str) {
	var reg = /^(\d{1,4})-(\d{1,2})-(\d{1,2})$/; // 创建正则表达式校验时间对象
	var r = str.match(reg);
	if (r == null) {
		return false;
	} else {
		var d = new Date(r[1], --r[2], r[3]);
		if (d.getFullYear() != r[1])
			return false;
		if (d.getMonth() != r[2])
			return false;
		if (d.getDate() != r[3])
			return false;
	}
	return true;
}

/* YYYY-MM-DD */
function validateDateFormat(e, minlen, maxlen, scale, precision, requried, codeset) {
	var val, month, year, day, sep1, sep2, yearnum, monthnum, daynum, result;
	val = trim(e.value);
	result = true;
	if (val.length == 0 && requried) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (val.length != 10) {

		var patt1 = /^\d{4}$/;
		if(val.length== 4 && patt1.test(val)){
			return true;
		}

		this.title = "该输入项的日期格式为YYYY-MM-DD!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
		return false;
	}
	year = val.substr(0, 4);
	sep1 = val.substr(4, 1);
	month = val.substr(5, 2);
	sep2 = val.substr(7, 1);
	day = val.substr(8, 2);

	if (isNaN(year) || isNaN(month) || isNaN(day) || sep1 != "-" || sep2 != "-") {
		this.title = "该输入项的日期格式为YYYY-MM-DD!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
		return false;
	}

	yearnum = parseFloat(year);
	monthnum = parseFloat(month);
	daynum = parseFloat(day);

	if (monthnum > 12 || monthnum < 1 || daynum > 31 || daynum < 1 || yearnum < 1) {
		this.title = "该输入项的日期格式为YYYY-MM-DD!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
		return false;
	}

	// 检查日期是否合法
	result = checkDate(yearnum + "-" + monthnum + "-" + daynum);
	if (result) {
		setNormalStyle(e);
		this.title = "";
	} else {
		this.title = "该输入项的日期格式为YYYY-MM-DD!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
	}
	return result;
}

/* YYYY-MM */
function validateYYYYMMFormat(e, minlen, maxlen, scale, precision, requried, codeset) {
	var val, month, year, sep1, monthnum, yearnum, result;
	val = trim(e.value);
	result = true;
	if (val.length == 0 && requried) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (val.length != 7) {
		this.title = "该输入项的日期格式为YYYY-MM!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
		return false;
	}
	year = val.substr(0, 4);
	sep1 = val.substr(4, 1);
	month = val.substr(5, 2);

	if (isNaN(year) || isNaN(month) || sep1 != "-") {
		result = false;
	}
	yearnum = parseFloat(year);
	monthnum = parseFloat(month);
	if (monthnum > 12 || monthnum < 1 || yearnum < 1) {
		result = false;
	}
	if (result) {
		setNormalStyle(e);
		this.title = "";
	} else {
		this.title = "该输入项的日期格式为YYYY-MM!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
	}
	return result;
}

/* YYYY-MM-DD HH:MM:SS */
function validateDateTimeFormat(e, minlen, maxlen, scale, precision, requried, codeset) {
	var val, month, year, day, hour, minute, second, result;
	var sep1, sep2, sep3, sep4, sep5, yearnum, monthnum, daynum, hhnum, mmnum, ssnum;
	val = trim(e.value);
	result = true;
	if (val.length == 0 && requried) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (val.length != 19) {
		this.title = "该输入项的日期格式为YYYY-MM-DD HH:MM:SS!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
		return false;
	}
	year = val.substr(0, 4);
	sep1 = val.substr(4, 1);
	month = val.substr(5, 2);
	sep2 = val.substr(7, 1);
	day = val.substr(8, 2);
	sep3 = val.substr(10, 1);
	hour = val.substr(11, 2);
	sep4 = val.substr(13, 1);
	minute = val.substr(14, 2);
	sep5 = val.substr(16, 1);
	second = val.substr(17, 2);

	if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hour) || isNaN(minute) || isNaN(second) || sep1 != "-" || sep2 != "-" || sep3 != " " || sep4 != ":"
			|| sep5 != ":") {
		result = false;
	}
	yearnum = parseFloat(year);
	monthnum = parseFloat(month);
	daynum = parseFloat(day);
	hhnum = parseFloat(hour);
	mmnum = parseFloat(minute);
	ssnum = parseFloat(second);
	if (yearnum < 1 || monthnum > 12 || monthnum < 1 || daynum > 31 || daynum < 1 || hhnum > 23 || hhnum < 0 || mmnum > 59 || mmnum < 0 || ssnum > 59
			|| ssnum < 0) {
		result = false;
	}
	// 检查日期是否合法
	result = checkDate(yearnum + "-" + monthnum + "-" + daynum);
	if (result) {
		setNormalStyle(e);
		this.title = "";
	} else {
		this.title = "该输入项的日期格式为YYYY-MM-DD HH:MM:SS!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
	}
	return result;

}
/* HH:MM:SS */
function validateTimeFormat(e, minlen, maxlen, scale, precision, required, codeset) {
	var val, hour, minute, second, sep1, sep2, hhnum, mmnum, ssnum, result;
	val = trim(e.value);
	result = true;
	if (val.length == 0 && required) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (val.length != 8) {
		this.title = "该输入项的时间格式为HH:MM:SS!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
		return false;
	}
	hour = val.substr(0, 2);
	sep1 = val.substr(2, 1);
	minute = val.substr(3, 2);
	sep2 = val.substr(5, 1);
	second = val.substr(6, 2);

	if (isNaN(hour) || isNaN(minute) || isNaN(second) || sep1 != ":" || sep2 != ":") {
		result = false;
	}
	hhnum = parseFloat(hour);
	mmnum = parseFloat(minute);
	ssnum = parseFloat(second);
	if (hhnum > 23 || hhnum < 0 || mmnum > 59 || mmnum < 0 || ssnum > 59 || ssnum < 0) {
		result = false;
	}
	if (result) {
		setNormalStyle(e);
		this.title = "";
	} else {
		this.title = "该输入项的时间格式为HH:MM:SS!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
	}
	return result;
}

/* HH:MM */
function validateHHMMFormat(e, minlen, maxlen, scale, precision, required, codeset) {
	var val, hour, minute, sep1, hhnum, mmnum, result;
	val = trim(e.value);
	result = true;
	if (val.length == 0 && required) {
		this.title = "该输入项不能为空!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	if (val.length != 5) {
		this.title = "该输入项的时间格式为HH:MM!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
		return false;
	}
	hour = val.substr(0, 2);
	sep1 = val.substr(2, 1);
	minute = val.substr(3, 2);

	if (isNaN(hour) || isNaN(minute) || sep1 != ":") {
		result = false;
	}
	hhnum = parseFloat(hour);
	mmnum = parseFloat(minute);
	if (hhnum > 23 || hhnum < 0 || mmnum > 59 || mmnum < 0) {
		result = false;
	}
	if (result) {
		setNormalStyle(e);
		this.title = "";
	} else {
		this.title = "该输入项的时间格式为HH:MM!";
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
	}
	return result;
}

function validateEmailFormat(e, minlen, maxlen, scale, precision, required, codeset) {
	var val, p;
	val = trim(e.value);
	if (val.length == 0 && required) {
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		this.title = "该输入项不能为空!";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	p = val.indexOf('@');
	if (p < 1 || p == (val.length - 1)) {
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]格式不正确!" + "</p>";
		this.title = "该输入项的格式为xxxx@xxx.com.cn!";
		return false;
	}
	setNormalStyle(e);
	this.title = "";
	return true;
}

function validateCodeInSet(e, minlen, maxlen, scale, precision, required, codeset) {
	var val, p;
	val = trim(e.value);
	var result;
	if ((val == "00" && required)) {
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		this.title = "该输入项不能为空!";
		return false;
	}
	this.title = "";
	return true;
}

function validateExcelFile(e, minlen, maxlen, scale, precision, required, codeset) {
	var val, p, startindex;
	val = trim(e.value);
	var result = true;
	ext = ".xls";
	if (val.length == 0 && required) {
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		this.title = "该输入项不能为空!";
		return false;
	}
	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	startindex = val.lastIndexOf(".xls");
	if (startindex == -1)
		startindex = val.lastIndexOf(".XLS");
	if (startindex == -1)
		startindex = val.lastIndexOf(".xlw");
	if (startindex == -1)
		startindex = val.lastIndexOf(".XLW");
	if (startindex == -1 || val.length - startindex != 4)
		result = false;
	if (!result) {
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]不是正确的EXCEL文件名!" + "</p>";
		this.title = "该输入项的格式为规定集合中的代码!";
		return false;
	}
	setNormalStyle(e);
	this.title = "";
	return true;
}

function validateDir(e, minlen, maxlen, scale, precision, required, codeset) {
	var val, p;
	val = trim(e.value);
	var result = true;
	var mask = "/";

	if (val.length == 0 && required) {
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "不能为空!" + "</p>";
		this.title = "该输入项不能为空!";
		return false;
	}

	if (val.length == 0) {
		this.title = "";
		setNormalStyle(e);
		return true;
	}
	var l = val.substr(val.length - 1, 1);
	var f = val.substr(0, 1);

	if (l == mask) {
		var idx = val.indexOf("//");
		if (idx > -1) {
			result = false;
		}
	} else {
		result = false;
	}

	if (!result) {
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "的输入值[" + val + "]不是正确的目录格式!" + "</p>";
		this.title = "该输入项的格式不正确!";
		return false;
	}
	setNormalStyle(e);
	this.title = "";
	return true;
}

function reentryCheck(e, id) {
	var val, val1, p, e1;
	val = trim(e.value);
	var result = true;
	e1 = document.getElementById(id);
	val1 = trim(e1.value);

	if (isNaN(val)) {
		if (val != val1) {
			result = false;
		}
	} else {
		if (isNaN(val1))
			result = false;
		else {
			if (val.length == val1.length && val.length == 0)
				result = true;
			else if (val.indexOf(".") == -1 && val1.indexOf(".") == -1) {
				if (val != val1)
					result = false;
			} else if (parseFloat(val1) != parseFloat(val))
				result = false;
		}
	}
	if (!result) {
		setErrorStyle(e);
		validatemessages = validatemessages + "<p>" + e.getAttribute("fieldname") + "重复输入错误!" + "</p>";
		this.title = "重复输入错误!";
	} else {
		setNormalStyle(e);
		this.title = "";
	}
	return result;
}

function setErrorMessages(f) {
  if(!isBbbs()){
		if (validatemessages.length == 0) {
			f.document.getElementById("leostudio.errordisplaywindow").style.display = "none";
		} else {
			f.document.getElementById("leostudio.errordisplaywindow").style.display = "block";
		}
		f.document.getElementById("leostudio.promptmessages").innerHTML = "输入检查出错！";
		f.document.getElementById("leostudio.validatemessages").innerHTML = validatemessages;
		validatemessages = "";
  }
}

function setDuplicateErrorMessage(f) {
  if(!isBbbs()){
		f.document.getElementById("leostudio.errordisplaywindow").style.display = "block";
		f.document.getElementById("leostudio.promptmessages").innerHTML = "已提交业务请求！请稍侯...";
		f.document.getElementById("leostudio.validatemessages").innerHTML = "";
  }
}

function verify(f) {
	validatemessages = "";
	var result = true, first = true;
	if (window.submitted == "true") {
		setDuplicateErrorMessage(f);
		return false;
	}
	for (var i = 0; i < f.length; i++) {
		var e = f.elements[i];
		if ((e.type == "text") || (e.type == "password") || (e.type == "file") || (e.type == "textarea") || (e.type == "select-one") || (e.type == "radio")) {
			if (e.getAttribute("validatefunc") != null && e.getAttribute("validatefunc").length > 0) {
				if (!eval(e.getAttribute("validatefunc"))) {
					result = false;
					// if(first) e.focus();
					first = false;
					continue;
				}
			}
			if (e.getAttribute("reentry") == "true") {
				if (!reentryCheck(e, e.getAttribute("previd"))) {
					result = false;
					// if(first) e.focus();
					first = false;
					continue;
				}
			}
		}
	}
	if (result)
		window.submitted = "true";
	// setErrorMessages(f);
	return result;
}

function verifyTab(f) {
	validatemessages = "";
	var result = true, first = true;
	var isvalid = false;
	/**
	 * 下面是网上审批功能中的明细校验功能，因为表报管理功能不需要， 所以先根据url判断是否是报表功能，如果不是，则不进入判断。
	 * 这种判断方法很笨，但为了先把表报中因validateDetail(f)方法中脚本问题而出现的错误解决掉，暂时先这么处理，下次有时间，可以再完善
	 */
  if(!isBbbs()){
		// 暂时不强制批文中明细为必入判断
		result = validateDetail(f);// 是否有明细校验
	}
	/** ******************************************** */

	if (result == true) {
		for (var i = 0; i < f.length; i++) {
			var e = f.elements[i];
			if ((e.type == "text") || (e.type == "password") || (e.type == "file") || (e.type == "textarea") || (e.type == "select-one") || (e.type == "radio")) {
				if (e.getAttribute("validatefunc") != null && e.getAttribute("validatefunc").length > 0) {
					if (!eval(e.getAttribute("validatefunc"))) {
						result = false;
						// if(first) e.focus();
						first = false;
						if (e.getAttribute("validatefunc") == "validateNotNull(e)") {// 只有是必录项才提示
							isvalid = true;
						}
						continue;
					}
				}
				if (e.getAttribute("reentry") == "true") {
					if (!reentryCheck(e, e.getAttribute("previd"))) {
						result = false;
						// if(first) e.focus();
						first = false;
						continue;
					}
				}
			}
		}

		if (!result && isvalid) {
			alert("带*号的必须选择或输入");
		}

		if (validatemessages != "") {
			validatemessages = validatemessages.replace(/<\/p>/g, "\r");
			validatemessages = validatemessages.replace(/<p>/g, "");
			alert(validatemessages);
		}
	}
	// setErrorMessages(f);
	return result;
}

function validateDetail(f) {
	var result = true;

		var table = f['tabid'];
		if (table.value == 'WZTS0001') {
			// 一个足够大的明细条数
			for(var i = 0; i < 0x800; i++) {
				var ytse = document.getElementsByName("tabForm.table.detail1["+i+"].double(WZ_TS_TSSPB_MX$YTSE)")[0];
				if (typeof(ytse) == 'object') {
					if (ytse.value == null || ytse.value == '') {
						alert('请检查第' + (i + 1) + '条记录没填写退税额！');
					    return false;
					}
				} else {
					// 结束
					break;
				}
			}
		}

		if (table.value == 'WZDZ0009') {
			if (!document.getElementsByName("tabForm.table.detail1[0].string(WZ_DZ_SXFSPB_MX$SM_DM_MC)")[0]) {
				alert("您至少必须输入一条明细");
				return false;
			}
		}

			if(f['tabid'].value == 'WZGJ0007'){
				 var sfdsfw = document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$SF_DSFW)'].value;
				 var sfws = document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$DS_SFWS)'].value;
				 var sfms = document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$DS_SFMZS)'].value;
				 var fwyy = document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$FSDSFWYY)'].value;
				 var hl = document.all['tabForm.table.tableValue.double(WZ_GJ_DWZF_SWQKBGB$HL)'].value;
				 var bcsjs = document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$BCFHSSRQS)'].value;
				 var bcsjz = document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$BCFHSSRQZ)'].value;
				 if(sfdsfw=='N'&&fwyy==''){
					 alert('当不涉及地税管征范围时,请填写本次付汇不属于地税管征范围的原因');
					 return false;
				 }
				 if(sfdsfw=='N'&&sfws=='Y'){
					 alert('当不涉及地税管征范围时,是否完税请择否');
					 return false;
				 }
				 if(sfdsfw=='N'&&sfms=='Y'){
					 alert('当不涉及地税管征范围时,是否免税请择否');
					 return false;
				 }
				 if(sfdsfw=='Y'){
					 if(sfws=='N'&&sfms=='N'){
						 alert('当涉及地税管征范围时,是否完税或是否免税不能为空');
						 return false;
					 }
				 }

				 if(sfws=='N'){
					 if (typeof(f['tabForm.table.detail1[0].isChecked']) == "object") {
							alert("当是否完税为否时，请删除完税明细");
							return false;
						}
				 }
				 if(sfws=='Y'){
					 if (typeof(f['tabForm.table.detail1[0].isChecked']) != "object") {
							alert("当是否完税为是时，完税明细不能为空");
							return false;
						}
				 }

				 if(sfms=='N'){
					 if (typeof(f['tabForm.table.detail2[0].isChecked']) == "object") {
							alert("当是否免税为否时，请删除完税明细");
							return false;
						}
				 }
				 if(sfms=='Y'){
					 if (typeof(f['tabForm.table.detail2[0].isChecked']) != "object") {
							alert("当是否免税为否时，免税明细不能为空");
							return false;
						}
				 }
				 if(bcsjs==''){
					 alert("本次付汇金额所属时间起不能为空");
					 document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$BCFHSSRQS)'].style.backgroundColor = 'red';
					 return false;
				 }
				 if(bcsjz==''){
					 alert("本次付汇金额所属时间止不能为空");
					 document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$BCFHSSRQZ)'].style.backgroundColor = 'red';
					 return false;
				 }
				 if(bcsjs>bcsjz){
					 document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$BCFHSSRQS)'].style.backgroundColor = 'red';
					 document.all['tabForm.table.tableValue.string(WZ_GJ_DWZF_SWQKBGB$BCFHSSRQZ)'].style.backgroundColor = 'red';
					 alert("本次付汇金额所属时间始不能大于本次付汇金额所属时间止");
					 return false;
				 }
				 if(hl==''){
					 	 alert("汇率不能为空");
					 	 document.all['tabForm.table.tableValue.double(WZ_GJ_DWZF_SWQKBGB$HL)'].style.backgroundColor = 'red';
						 return false;
				 }



			}

          if (f['tabid'].value == 'WZGJ0001') {
				showPage(1);
				if (typeof(f['tabForm.table.detail1[0].isChecked']) != "object") {
					alert("税种名称(9至11)必须输一条,若无数据请填‘无’或者‘0’");
					 return false;
				}
				if (typeof(f['tabForm.table.detail2[0].isChecked']) != "object") {
					alert("股东名称(12至14)必须输一条,若无数据请填‘无’或者‘0’");
					 return false;
				}
				if (typeof(f['tabForm.table.detail3[0].isChecked']) != "object") {
					alert("关联交易(18至21)必须输一条,若无数据请填‘无’或者‘0’");
					 return false;
				}
				showPage(2);
				 var dlrsm = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_MC)'].value;
			     var sfbswts = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_SFBSWTS)'].value;
			     var sfzm = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$SF_JMSFZM)'].value;
			     var certification1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$SQR_MC)'].value;
			     var certification2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DYGDY_MC)'].value;
			     var certification3 = document.all['tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYSPB$GDH)'].value;
			     var certification4 = document.all['tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYSPB$FLH)'].value;
			     var certification5 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$SQDB)'].value;
			     var certification6 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$ZM_RQ)'].value;
			     var taxpayer1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$NSRSM_MC)'].value;
			     var taxpayer2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$NSRSM_DM)'].value;
			     var taxpayer3 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$NSRSM_RQ)'].value;
			     var attorney1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_MC)'].value;
			     var attorney2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_DM)'].value;
			     var attorney3 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_RQ)'].value;
			      if(taxpayer1==""||taxpayer2==""||taxpayer3==""){
			    	  if(attorney1==""||attorney2==""||attorney3==""){
			    		  alert("26声明处纳税人印章或签字或者代理人印章或签字必填一项");
			    		  return false;
			    	  }
			      }
			      if(sfzm=="01"){
			    	  if(certification1==""||certification2==""||certification3==""||certification4==""||certification5==""||certification6==""){
			    		  alert("27纳税人居民身份证明选择由纳税人为其居民的缔约对方税务主管当局或其授权代表在本栏填写时Certification部分所有选项必填");
			    		  return false;
			    	  }

			      }
			      if(dlrsm!=""&&sfbswts!="Y"){
			    	  alert("如果是代理人，是否报送书面授权委托书必须为“是”");
			    	  return false;
			    	  }
			      if (typeof(f['tabForm.table.detail5[0].isChecked']) != "object") {
						alert("申请附报资料清单(22)必须输一条,若无数据请填‘无’或者‘0’");
						 return false;
					}
					if (typeof(f['tabForm.table.detail6[0].isChecked']) != "object") {
						alert("申请享受税收协定待遇有关但以前提交的资料清单(23)必须输一条,若无数据请填‘无’或者‘0’");
						 return false;
					}

			      return true;
			}
			// 非居民协定审批个人
			if (f['tabid'].value == 'WZGJ0002') {
				showPage();
				 var DSFNSYW = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$SF_DSFNSYW)'].value;
			     var DSFCQJS = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$SF_DSFCQJS)'].value;
			     var DSFCQJLQ = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$SF_DSFCQJLQ)'].value;
			     var DSFTZECGDYF = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$SF_DSFTZECGDYF)'].value;
			     var DSFLJTSCG180 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$SF_DSFLJTSCG180)'].value;
			     var DSFGJ = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$SF_DSFGJ)'].value;
			     var DSFNSYW18 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$DSF_MC18)'].value;
			     var DSFCQJS19 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$DSF_MC19)'].value;
			     var DSFCQJLQ20 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$DSF_MC20)'].value;
			     var DSFTZECGDYF21 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$DSF_MC21)'].value;
			     var DSFLJTSCG18022 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$DSF_MC22)'].value;
			     var DSFGJ23 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSFXX_GR$DSF_MC23)'].value;


			     if(DSFNSYW=="Y"&&DSFNSYW18==""){
			    	  alert("如果在第三方负有居民纳税义务，则第三方名称必须录入");
			    	  return false;
			      }
			     if(DSFCQJS=="Y"&&DSFCQJS19==""){
			    	  alert("如果在第三方保有长期居所，则第三方名称必须录入");
			    	  return false;
			      }
			     if(DSFCQJLQ=="Y"&&DSFCQJLQ20==""){
			    	  alert("如果在第三方取得长期居留权，则第三方名称必须录入");
			    	  return false;
			      }
			     if(DSFTZECGDYF=="Y"&&DSFTZECGDYF21==""){
			    	  alert("如果在第三方保有的投资额超过缔约对方投资额，则第三方名称必须录入");
			    	  return false;
			      }
			     if(DSFLJTSCG180=="Y"&&DSFLJTSCG18022==""){
			    	  alert("最近连续12个月内如有在第三方连续或累计超过180天，则第三方名称必须录入");
			    	  return false;
			      }
			     if(DSFGJ=="Y"&&DSFGJ23==""){
			    	  alert("如果保有第三方国籍，则第三方名称必须录入");
			    	  return false;
			      }
			     if (typeof(f['tabForm.table.detail1[0].isChecked']) != "object") {
						alert("家庭成员(4至7)必须输一条,若无数据请填‘无’或者‘0’");
						 return false;
					}
			     if (typeof(f['tabForm.table.detail2[0].isChecked']) != "object") {
						alert("税种名称(15至17)必须输一条,若无数据请填‘无’或者‘0’");
						 return false;
					}

				showPage(1);
			     var dlrsm = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_MC)'].value;
			     var sfbswts = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_SFBSWTS)'].value;
			     var sfzm = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$SF_JMSFZM)'].value;
			     var certification1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$SQR_MC)'].value;
			     var certification2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DYGDY_MC)'].value;
			     var certification3 = document.all['tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYSPB$GDH)'].value;
			     var certification4 = document.all['tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYSPB$FLH)'].value;
			     var certification5 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$SQDB)'].value;
			     var certification6 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$ZM_RQ)'].value;
			     var taxpayer1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$NSRSM_MC)'].value;
			     var taxpayer2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$NSRSM_DM)'].value;
			     var taxpayer3 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$NSRSM_RQ)'].value;
			     var attorney1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_MC)'].value;
			     var attorney2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_DM)'].value;
			     var attorney3 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$DLRSM_RQ)'].value;

			      if(taxpayer1==""||taxpayer2==""||taxpayer3==""){
			    	  if(attorney1==""||attorney2==""||attorney3==""){
			    		  alert("24声明处纳税人印章或签字或者代理人印章或签字必填一项");
			    		  return false;
			    	  }
			      }
			      if(sfzm=="01"){
			    	  if(certification1==""||certification2==""||certification3==""||certification4==""||certification5==""||certification6==""){
			    		  alert("25纳税人居民身份证明选择由纳税人为其居民的缔约对方税务主管当局或其授权代表在本栏填写时Certification部分所有选项必填");
			    		  return false;
			    	  }

			      }
			      if(dlrsm!=""&&sfbswts!="Y"){
			    	  alert("如果是代理人，是否报送书面授权委托书必须为“是”");
			    	  return false;
			    	  }

			      if (typeof(f['tabForm.table.detail4[0].isChecked']) != "object") {
						alert("申请附报资料清单(22)必须输一条,若无数据请填‘无’或者‘0’");
						 return false;
					}
					if (typeof(f['tabForm.table.detail5[0].isChecked']) != "object") {
						alert("申请享受税收协定待遇有关但以前提交的资料清单(23)必须输一条,若无数据请填‘无’或者‘0’");
						 return false;
					}

			      return true;
			}

			if (f['tabid'].value == 'WZGJ0003') {
				 var dlrsm = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_MC)'].value;
			     var sfbswts = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_SFBSWTS)'].value;
			     var sfzm = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$SF_JMSFZM)'].value;
			     var certification1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$SQR_MC)'].value;
			     var certification2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DYGDY_MC)'].value;
			     var certification3 = document.all['tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBAB$GDH)'].value;
			     var certification4 = document.all['tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBAB$FLH)'].value;
			     var certification5 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$SQDB)'].value;
			     var certification6 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$ZM_RQ)'].value;
			     var taxpayer1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$NSRSM_MC)'].value;
			     var taxpayer2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$NSRSM_DM)'].value;
			     var taxpayer3 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$NSRSM_RQ)'].value;
			     var attorney1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_MC)'].value;
			     var attorney2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_DM)'].value;
			     var attorney3 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_RQ)'].value;

			     var dsf = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$SF_DSFJM)'].value;
			     var dsfmc = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DSF_MC)'].value;

			     if(dsf=="Y"&&dsfmc==""){
			    	  alert("纳税人构成任何第三方税收居民，则第三方名称必须录入");
			    	  return false;
			      }
			      if(taxpayer1==""||taxpayer2==""||taxpayer3==""){
			    	  if(attorney1==""||attorney2==""||attorney3==""){
			    		  alert("26声明处纳税人印章或签字或者代理人印章或签字必填一项");
			    		  return false;
			    	  }
			      }
			      if(sfzm=="01"){
			    	  if(certification1==""||certification2==""||certification3==""||certification4==""||certification5==""||certification6==""){
			    		  alert("27纳税人居民身份证明选择由纳税人为其居民的缔约对方税务主管当局或其授权代表在本栏填写时Certification部分所有选项必填");
			    		  return false;
			    	  }

			      }
			      if(dlrsm!=""&&sfbswts!="Y"){
			    	  alert("如果是代理人，是否报送书面授权委托书必须为“是”");
			    	  return false;
			    	  }
			      return true;
			}
			// 非居民协定备案个人
			if (f['tabid'].value == 'WZGJ0004') {
  		         var dlrsm = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_MC)'].value;
			     var sfbswts = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_SFBSWTS)'].value;
			     var sfzm = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$SF_JMSFZM)'].value;
			     var certification1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$SQR_MC)'].value;
			     var certification2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DYGDY_MC)'].value;
			     var certification3 = document.all['tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBAB$GDH)'].value;
			     var certification4 = document.all['tabForm.table.tableValue.double(WZ_GJ_FJM_XSXDDYBAB$FLH)'].value;
			     var certification5 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$SQDB)'].value;
			     var certification6 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$ZM_RQ)'].value;
			     var taxpayer1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$NSRSM_MC)'].value;
			     var taxpayer2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$NSRSM_DM)'].value;
			     var taxpayer3 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$NSRSM_RQ)'].value;
			     var attorney1 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_MC)'].value;
			     var attorney2 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_DM)'].value;
			     var attorney3 = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DLRSM_RQ)'].value;

			     var dsf = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$SF_DSFJM)'].value;
			     var dsfmc = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$DSF_MC)'].value;
			     if(dsf=="Y"&&dsfmc==""){
			    	  alert("纳税人构成任何第三方税收居民，则第三方名称必须录入");
			    	  return false;
			      }

			      if(taxpayer1==""||taxpayer2==""||taxpayer3==""){
			    	  if(attorney1==""||attorney2==""||attorney3==""){
			    		  alert("26声明处纳税人印章或签字或者代理人印章或签字必填一项");
			    		  return false;
			    	  }
			      }
			      if(sfzm=="01"){
			    	  if(certification1==""||certification2==""||certification3==""||certification4==""||certification5==""||certification6==""){
			    		  alert("27纳税人居民身份证明选择由纳税人为其居民的缔约对方税务主管当局或其授权代表在本栏填写时Certification部分所有选项必填");
			    		  return false;
			    	  }

			      }
			     if(dlrsm!=""&&sfbswts!="Y"){
			    	  alert("如果是代理人，是否报送书面授权委托书必须为“是”");
			    	  return false;
			    	  }
			      return true;
			}
			// 非居民执行情况 WZ_GJ_FJM_XSXDDYZXQKB$SKSSQS WZ_GJ_FJM_XSXDDYZXQKB$SKSSQZ
			if (f['tabid'].value == 'WZGJ0006') {
			     var sqssqs = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYZXQKB$SKSSQS)'].value;
			     var sqssqz = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYZXQKB$SKSSQZ)'].value;
			     var xsrqs = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYZXQKB$XSRQS)'].value;
			     var xsrqz = document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYZXQKB$XSRQZ)'].value;
		         var msg1="税款所属期始必须大于等于待遇享受时间始";
		         var msg2="税款所属期止必须小于等于待遇享受时间止";
		         if(sqssqs < xsrqs){
		        	 alert(msg1);
		        	 return false;
		         }
		         if(xsrqz!=null&&xsrqz!=""){
		         if(sqssqz > xsrqz){
		        	 alert(msg2);
		        	 return false;
		         }
		         }
		         // 2、 税款所属期始必须大于等于待遇享受时间始，税款所属期止必须小于等于待遇享受时间止
		       // compareDate(sqssqs,xsrqs,msg1);
		       // compareDate(sqssqz,xsrqz,msg2);
			     return true;
			}

			if (f['tabid'].value == 'WZSP2512') {
				var jt=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_JT)'].value;
				var jz=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_JZ)'].value;
				var bd=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_BD)'].value;
				var bx=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_BX)'].value;
				var fw=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_FW)'].value;
				var wt=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_WT)'].value;
				var wx=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_WX)'].value;
				var yd=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_YD)'].value;
				var qt=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_QT)'].value;
				if(jt==""&&jz==""&&bd==""&&bx==""&&fw==""&&wt==""&&wx==""&&yd==""&&qt=="")
				{
					alert("经营项目必须填写，可多选");
					return false;
				}

			}


			if (f['tabid'].value == 'WZSP2501') {
				var jt=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_JT)'].value;
				var jz=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_JZ)'].value;
				var bd=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_BD)'].value;
				var bx=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_BX)'].value;
				var fw=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_FW)'].value;
				var wt=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_WT)'].value;
				var wx=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_WX)'].value;
				var yd=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_YD)'].value;
				var qt=document.all['tabForm.table.detail2[0].string(WZ_FP_SQSP_QYLGFP_HY$HYML_QT)'].value;
				if(jt==""&&jz==""&&bd==""&&bx==""&&fw==""&&wt==""&&wx==""&&yd==""&&qt=="")
				{
					alert("经营项目必须填写，可多选");
					return false;
				}

			}

			if (f['tabid'].value == 'WZPW0020') {

				/*
				 * if (typeof(f['tabForm.table.detail3[0].isChecked']) ==
				 * "object") { var
				 * skssqs=document.all['tabForm.table.tableValue.string(WZ_PW_B_JMSPB$SKSSQS)'].value;
				 * var
				 * skssqz=document.all['tabForm.table.tableValue.string(WZ_PW_B_JMSPB$SKSSQZ)'].value;
				 * if(skssqs==""||skssqz==""){ alert("存在再就业减免明细时，税款所期必录");
				 * return false; } } if
				 * (typeof(f['tabForm.table.detail3[0].isChecked']) !=
				 * "object"&&typeof(f['tabForm.table.detail2[0].isChecked']) !=
				 * "object") { alert("您必须输入一条“减免税（费）明细信息”或者“促进就业减免税”的明细");
				 * return false; }
				 */
				if (typeof(f['tabForm.table.detail1[0].isChecked']) != "object") {
					alert("您必须输入一条“减免税（费）明细信息");
					return false;
				}



			}

			if (f['tabid'].value == 'WZPW0030') {
				var sjjmsse=document.all['tabForm.table.tableValue.double(CJJY_NDZCHCJJYJMSQKB$SJJMQYSDSJE)'].value;
				var swxsjmsse=document.all['tabForm.table.tableValue.double(CJJY_NDZCHCJJYJMSQKB$SWXSJMSZE)'].value;
				if(swxsjmsse<sjjmsse){
					alert("实际减免企业所得税金额  必须小于  尙末享受减免税总额");
					return false;
					}
			}



	// 付汇证明的较验
	if (f['tabid'].value == 'WZZM0007') {

		  if (typeof(f['tabForm.table.detail4[0].isChecked']) != "object") {
					alert("您至少必须输入一条付境外收款方明细！");
					return false;
				}

		// 是否涉及地税管理范围 较验
		var sfgsfw = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$SF_GSFW)'].value;// 是否涉及国税管理范围
                // alert(sfgsfw);
		var sfdsfw = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$SF_DSFW)'].value;// 是否涉及地税管理范围

		var htzje = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$HTZJE)'].value;// 合同总金额
		var htzfbz = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$HTZFBZ)'].value;// 合同支付标准

		if (htzje == "" && htzfbz == "") {
			alert("'合同支付标准' 与  '合同总金额' 两项必输一项");
			return false;
		}


		if (sfgsfw != "Y" && sfdsfw != "Y") {
			alert("请选择涉税范围！");
			return false;
		}

		if (sfdsfw == "Y") {
			var ds_sfws = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$DS_SFWS)'].value;// 地税_是否完税
			var ds_sfmzs = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$DS_SFMZS)'].value;// 地税_是否免征税
			var ds_sfbzs = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$DS_SFBZS)'].value;// 地税_是否不征税

			if (ds_sfws != "Y" && ds_sfmzs != "Y" && ds_sfbzs != "Y") {
				alert("涉及地税管理范围,应录入的行即:是否完税、是否免税、不予征税");
				return false;
			}

			// var ds_jsyjxj =
			// document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$DS_JSYJXJ)'].value;//地税_计税依据小计
			// var ds_sexj =
			// document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$DS_SEXJ)'].value;//地税_税额小计
			// var ds_bcfhsexj =
			// document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$DS_BCFHSEXJ)'].value;//地税_本次付汇涉及税额小计
			var ds_sfhs = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$DS_SFHS)'].value;// 地税_是否含税
			var ds_yysjsyjjsgs = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$DS_YYSJSYJJSGS)'].value;// 地税_营业税计税依据计算公式

			var ds_ywsfhje = document.all['tabForm.table.tableValue.double(WZ_ZM_FHZM_SPB$DS_YWSFHJE)'].value;// 地税_已完税的本次付汇金额
			var ds_mzsfhe = document.all['tabForm.table.tableValue.double(WZ_ZM_FHZM_SPB$DS_MZSFHE)'].value;// 地税_免征税付汇额
			var ds_bzsfhe = document.all['tabForm.table.tableValue.double(WZ_ZM_FHZM_SPB$DS_BZSFHE)'].value;// 地税_不征税付汇额

			var bczhrmbje = document.all['tabForm.table.tableValue.double(WZ_ZM_FHZM_SPB$BCZHRMBJE)'].value;// 本次付汇折合人民币金额

			if (ds_sfhs == "" || ds_sfhs == null) {
				alert("请选择是否含税!");
			}

			if (ds_sfws == "Y") {

				if (ds_sfhs == "N") {
					if (ds_yysjsyjjsgs == null || ds_yysjsyjjsgs == "") {
						alert("请输入营业税计税依据计算公式");
						return false;
					}
				}

				if (typeof(f['tabForm.table.detail1[0].isChecked']) != "object") {
					alert("涉及地税管理范围 完税,请完整填写所有项目！");
					return false;
				}

				if (ds_ywsfhje == null || ds_ywsfhje == "") {
					alert("请输入已完税的本次付汇金额");
					return false;
				}

			}

			if (ds_sfmzs == "Y") {
				if (typeof(f['tabForm.table.detail2[0].isChecked']) != "object" || ds_mzsfhe == null || ds_mzsfhe == "") {
					alert("涉及地税管理范围 免征税,请完整填写所有项目!");
					return false;
				}
			}
			// 如果免征税有录入数据，免征税付汇额，免征税税原因都要填写
			if (typeof(f['tabForm.table.detail2[0].isChecked']) == "object") {
				if (ds_mzsfhe == null || ds_mzsfhe == "") {
					alert("请录入依据或原因付汇额！");
				}
			}

			if (ds_sfbzs == "Y") {
				if (typeof(f['tabForm.table.detail3[0].isChecked']) != "object" || ds_bzsfhe == null || ds_bzsfhe == "") {
					alert("涉及地税管理范围 不征税,请完整填写所有项目！");
					return false;
				}
			}
			// 如果不于征税有录入数据，不于征税额，不于征税原因都要填写
			if (typeof(f['tabForm.table.detail3[0].isChecked']) == "object") {
				if (ds_bzsfhe == null || ds_bzsfhe == "") {
					alert("请录入不予征税付汇额！");
				}
			}

			if (ds_ywsfhje == "" || ds_ywsfhje == null)
				ds_ywsfhje = 0;
			if (ds_mzsfhe == "" || ds_mzsfhe == null)
				ds_mzsfhe = 0;
			if (ds_bzsfhe == "" || ds_bzsfhe == null)
				ds_bzsfhe = 0;

     /*
		 * 2010-01-22 取消控制 var fhje = parseFloat(ds_ywsfhje) +
		 * parseFloat(ds_mzsfhe) + parseFloat(ds_bzsfhe); if (fhje >
		 * parseFloat(bczhrmbje)) {
		 * alert("已完税的本次付汇金额+免予征税付汇额+不予征税付汇额的合计数不得超过:本次付汇折合人民币金额"); return
		 * false; }
		 */

		}

		if (sfgsfw == "Y") {
// alert("1");
			var yjnqysds = document.all['tabForm.table.tableValue.double(WZ_ZM_FHZM_SPB$GS_YJNQYSDS)'].value;// 已缴纳企业所得税
// alert(yjnqysds+"---yjnqysds");
			var ynssde = document.all['tabForm.table.tableValue.double(WZ_ZM_FHZM_SPB$GS_YNSSDE)'].value;// 应纳税所得额
// alert(ynssde+"---ynssde");
			var sfmzs = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$GS_SFMZS)'].value;// 免予征税
// alert(sfmzs+"---sfmzs");
			var qysdssl = document.all['tabForm.table.tableValue.double(WZ_ZM_FHZM_SPB$GS_QYSDSSL)'].value;// 企业所得税税率
// alert(qysdssl+"---qysdssl");
			var yssdl = document.all['tabForm.table.tableValue.double(WZ_ZM_FHZM_SPB$GS_YSSDL)'].value;// 应税所得率
// alert(yssdl+"---yssdl");
			var sfbzs = document.all['tabForm.table.tableValue.string(WZ_ZM_FHZM_SPB$GS_SFBZS)'].value;// 不予征税
// alert(sfbzs+"--sfbzs");
			if ((sfmzs != "Y" && sfbzs != "Y") && (yjnqysds == null || yjnqysds == "" || yjnqysds==0)) {
				alert("涉及国税管理范围,免税 或 不予征税 请选择：是!或者请填写 已缴纳企业所得税");
				return false;
			}
		}

		return true;
	}


	if (f['tabid'].value == 'WZJA0003') {
		var i=0;
		while(true){
			if(typeof(f['tabForm.table.detail1['+i+'].isChecked']) == "object"){
				var YSLW=document.all['tabForm.table.detail1['+i+'].string(WZ_JA_WGZ_JX_LWXX_XM$YSLW)'].value;
				var YYE=document.all['tabForm.table.detail1['+i+'].double(WZ_JA_WGZ_JX_LWXX_XM$YYE)'].value;
				var JNSK=document.all['tabForm.table.detail1['+i+'].double(WZ_JA_WGZ_JX_LWXX_XM$JNSK)'].value;
				var FPMC=document.all['tabForm.table.detail1['+i+'].string(WZ_JA_WGZ_JX_LWXX_XM$FPMC)'].value;
				var FPFS=document.all['tabForm.table.detail1['+i+'].double(WZ_JA_WGZ_JX_LWXX_XM$FPFS)'].value;
				var FPHM=document.all['tabForm.table.detail1['+i+'].string(WZ_JA_WGZ_JX_LWXX_XM$FPHM)'].value;

				if(YSLW==""&&YYE==""&& JNSK==""&& FPMC==""&& FPFS==""&& FPHM==""){
					alert("增加明细时不能全部为空[明细1]");
					return false;
				}

			}else{

			break;

			}
			i++;
		}

		var j=0;
		while(true){
			if(typeof(f['tabForm.table.detail2['+j+'].isChecked']) == "object"){
				var HWMC=document.all['tabForm.table.detail2['+j+'].string(WZ_JA_WGZ_JX_HWXX_MX$HWMC)'].value;
				var XSSL=document.all['tabForm.table.detail2['+j+'].double(WZ_JA_WGZ_JX_HWXX_MX$XSSL)'].value;
				var SSE=document.all['tabForm.table.detail2['+j+'].double(WZ_JA_WGZ_JX_HWXX_MX$SSE)'].value;
				var JNSK=document.all['tabForm.table.detail2['+j+'].double(WZ_JA_WGZ_JX_HWXX_MX$JNSK)'].value;
				var FPMC=document.all['tabForm.table.detail2['+j+'].string(WZ_JA_WGZ_JX_HWXX_MX$FPMC)'].value;
				var FPFS=document.all['tabForm.table.detail2['+j+'].double(WZ_JA_WGZ_JX_HWXX_MX$FPFS)'].value;
				var FPHM=document.all['tabForm.table.detail2['+j+'].string(WZ_JA_WGZ_JX_HWXX_MX$FPHM)'].value;

				if(HWMC==""&&XSSL==""&&SSE==""&& JNSK==""&& FPMC==""&& FPFS==""&& FPHM==""){
					alert("增加明细时不能全部为空[明细2]");
					return false;
				}

			}else{

			break;

			}
			j++;
		}

		return true;
	}
	if (f['tabid'].value == 'WZZS2011') {

		if (typeof(f['tabForm.table.detail1[0].isChecked']) != "object") {
					alert("您至少必须输入一条备案事项明细！");
					return false;
				}

		for(var i=0;i<20;i++){
		if(typeof(f['tabForm.table.detail1['+i+'].isChecked'])=="object"){
		var skssqs = document.getElementsByName("tabForm.table.detail1["+i+"].string(WZ_ZS_QYSDS_JMBA_CB$SKSSQS)")[0].value;
		var skssqz = document.getElementsByName("tabForm.table.detail1["+i+"].string(WZ_ZS_QYSDS_JMBA_CB$SKSSQZ)")[0].value;
		if(skssqs > skssqz){
			var j = i+1;
		       	alert("第 "+j+" 个申请备案项的税款所属期始大于所属期止，请修改!");
		       	return false;
	    	}
	    }
	  }
		return true;
	}



	if (f['tabid'].value == 'WZPW0001') {

		 if (typeof (f['tabForm.table.detail1[0].isChecked']) != "object") {
            alert("您至少必须输入一条申请明细！");
            return false;
        }

        for (var i = 0; i < 200; i++) {
            if (typeof (f['tabForm.table.detail1[' + i + '].isChecked']) == "object") {
                // 改域字段的名称为 tabForm.table.detail1[" + i +
				// "].string(WZ_PW_B_HZYQJNSKSPB_MX$YNSE)
                var ynse = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_PW_B_HZYQJNSKSPB_MX$YNSE)")[0].value;
                // 改域字段的名称为 tabForm.table.detail1[" + i +
				// "].string(WZ_PW_B_HZYQJNSKSPB_MX$YQJNSK)
                var yqjnsk = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_PW_B_HZYQJNSKSPB_MX$YQJNSK)")[0].value;
                var sqyqjnqx = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_PW_B_HZYQJNSKSPB_MX$SQYQJNQX)")[0].value;
                var jkqx = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_PW_B_HZYQJNSKSPB_MX$HZYQJNQX)")[0].value;
                if ((yqjnsk * 1) > (ynse * 1)) {
                    var j = i + 1;
                    alert("第 " + j + " 个明细的延期缴纳税额大于应纳税额，请修改!");
                    return false;
                }
                if (sqyqjnqx != null && sqyqjnqx != "") {
                	var jkqxDate = new Date(jkqx.replace(/-/g,"\/"));
        			var jkqxMax = jkqxDate.setMonth(jkqxDate.getMonth()+3);
        			var sqyqjnqxDate = new Date(sqyqjnqx.replace(/-/g,"\/"));
        			// 获取当前日期
    				var curDate = new Date();
    				var year = curDate.getFullYear();
    				var month = curDate.getMonth()+1;
    				var day = curDate.getDate();
    				month=month<10?"0"+month:month;
    				day=day<10?"0"+day:day;
    				var myDate=year+"-"+month+"-"+day; 
                    if (jkqx > sqyqjnqx) {
                        var j = i + 1;
                        alert("第 " + j + " 个明细的限缴期限大于延期缴纳期限，请修改!");
                        return false;
                    }
                    if (sqyqjnqxDate > jkqxMax) {
                        var j = i + 1;
                        alert("第 " + j + " 个明细的延期缴纳期限只能延期三个月，请修改!");
                        return false;
                    }
                    if (myDate > jkqx) {
                        var j = i + 1;
                        alert("第 " + j + " 个明细的延期缴纳税款应在税款缴款期限之前申请!");
                        return false;
                    }
                }
            }
        }
        return true;
     }

	 if (f['tabid'].value == 'WZPW0081') {
        if (typeof(f['tabForm.table.detail1[0].isChecked']) != "object") {
            alert("您至少必须输入一条申请明细！");
            return false;
        }

        for (var i = 0; i < 0x200; i++) {
            if (typeof(f['tabForm.table.detail1[' + i + '].isChecked']) == "object") {
				// 缴款期限
				var jkqx = document.getElementsByName("tabForm.table.detail1["+i+"].string(WZ_PW_B_HZYQSBSPB_MX$GDSBQX)")[0].value;
				var jkqxDate = new Date(jkqx.replace(/-/g,"\/"));
				// 申请延期报缴期限
				var sqyqjnqx = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_PW_B_HZYQSBSPB_MX$SQYQBJQX)")[0].value;
				var sqyqjnqxDate = new Date(sqyqjnqx.replace(/-/g,"\/"));
				// 系统申报期限
				var hdbjqx = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_PW_B_HZYQSBSPB_MX$HDBJQX)")[0].value;
				var hdbjqxDate = new Date(hdbjqx.replace(/-/g,"\/"));
				var hdbjqxMax = hdbjqxDate.setMonth(hdbjqxDate.getMonth() + 3);
				// 获取当前日期
				var curDate = new Date();
				var year = curDate.getFullYear();
				var month = curDate.getMonth()+1;
				var day = curDate.getDate();
				month=month<10?"0"+month:month;
				day=day<10?"0"+day:day;
				var myDate=year+"-"+month+"-"+day; 
				
				if (sqyqjnqxDate != null && sqyqjnqxDate != "") {
					if(jkqxDate )
					if(jkqxDate > sqyqjnqxDate){
						var j = i + 1;
						alert("第 " + j + " 个明细的申请延期申报期限必须大于延期申报申请日期");
						return false;
					}
				}
				if(hdbjqx != null ||　hdbjqx　!=""){
					if(myDate > hdbjqx){
						var j = i + 1;
						alert("第 " + j + " 个明细的延期申报应在申报期限之前申请!");
						return false;
					}
				}
            }
        }

        return true;
    }

    if (f['tabid'].value == 'WZDS0030') {
        if (typeof (f['tabForm.table.detail2[0].isChecked']) != "object") {
            alert("您至少必须输入一条申请明细！");
            return false;
        }

        // // 足够大的数字
        // for (var i = 0; i < 0x400; i++) {
        // if (typeof(f['tabForm.table.detail2[' + i + '].isChecked']) ==
		// "object") {
        // var ynse = document.getElementsByName("tabForm.table.detail2[" + i +
		// "].string(WZ_PW_B_HZYQJNSKSPB_MX$YNSE)")[0].value;
        // var yqjnsk = document.getElementsByName("tabForm.table.detail2[" + i
		// + "].string(WZ_PW_B_HZYQJNSKSPB_MX$YQJNSK)")[0].value;
        // var sqyqjnqx = document.getElementsByName("tabForm.table.detail2[" +
		// i + "].string(WZ_PW_B_HZYQJNSKSPB_MX$SQYQJNQX)")[0].value;
        // var jkqx = document.getElementsByName("tabForm.table.detail2[" + i +
		// "].string(WZ_PW_B_HZYQJNSKSPB_MX$HZYQJNQX)")[0].value;
        // }
        // }

        // return true;
    }

	if (f['tabid'].value == 'WZCCS001') {
		var i;
		var notContainDetail1 = typeof (f['tabForm.table.detail1[0].isChecked']) != "object";
		var notContainDetail2 = typeof (f['tabForm.table.detail2[0].isChecked']) != "object";
		if (notContainDetail1 && notContainDetail2) {
			alert("您至少必须输入一条申请明细！");
			return false;
		}
		// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		// 减免增类型
		var jmzlx = document.getElementsByName("tabForm.table.tableValue.string(WZ_SSJMYH_CCS$JMZLX)")[0];		
		var jmlx = document.getElementsByName("tabForm.table.tableValue.string(WZ_SSJMYH_CCS$JMLX)")[0];
		var jzed, jzfd, jzsl;
		
		// 一个足够大的明细条数
		for(i = 0; i < 0x800; i++) {
 			jzed = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_CCS_MX1$JZED)")[0];
			jzfd = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_CCS_MX1$JZFD)")[0];
			jzsl = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_CCS_MX1$JZSL)")[0];
			if (typeof(jzed) == 'object') {
				// 01 减征，02 免征
				if (jmzlx.value == "02") {
					if (trim(jzsl.value).length != 0 || trim(jzed.value).length != 0 || trim(jzfd.value).length != 0) {
						alert("减免征类型为“免征”，无需录入“减征税率”、“减征幅度”、“减征额度”");
						return false;
					}
				} else if (jmzlx.value == "01") {
					// 税率式减免应该录入减征税率
					if (jmlx.value == 1) {
						if (trim(jzsl.value).length == 0) {
							alert("税率式减免应该录入减征税率");
							return false;
						}
					}
					// 税额、税基式减免应该录入减征幅度或减征额度
					if (jmlx.value == 2 || jmlx.value == 3) {
						if (trim(jzed.value).length == 0 && trim(jzfd.value).length == 0) {
							alert("税额、税基式减免应该录入减征幅度或减征额度");
							return false;
						}
					}
				}				
			} else {
				// 结束
				break;
			}
		}

		// 一个足够大的明细条数
		for(i = 0; i < 0x800; i++) {
			jzed = document.getElementsByName("tabForm.table.detail2[" + i + "].string(WZ_SSJMYH_CCS_MX2$JZED)")[0];
		    jzfd = document.getElementsByName("tabForm.table.detail2[" + i + "].string(WZ_SSJMYH_CCS_MX2$JZFD)")[0];
		    jzsl = document.getElementsByName("tabForm.table.detail2[" + i + "].string(WZ_SSJMYH_CCS_MX2$JZSL)")[0];
		    if (typeof(jzed) == 'object') {
		 	   // 01 减征，02 免征
		 	   if (jmzlx.value == "02") {
		 		   if (trim(jzsl.value).length != 0 || trim(jzed.value).length != 0 || trim(jzfd.value).length != 0) {
		 			   alert("减免征类型为“免征”，无需录入“减征税率”、“减征幅度”、“减征额度”");
		 			   return false;
		 		   }
		 	   } else if (jmzlx.value == "01") {
		 		   // 税率式减免应该录入减征税率
		 		   if (jmlx.value == 1) {
		 			   if (trim(jzsl.value).length == 0) {
		 				   alert("税率式减免应该录入减征税率");
		 				   return false;
		 			   }
		 		   }
		 		   // 税额、税基式减免应该录入减征幅度或减征额度
		 		   if (jmlx.value == 2 || jmlx.value == 3) {
		 			   if (trim(jzed.value).length == 0 && trim(jzfd.value).length == 0) {
		 				   alert("税额、税基式减免应该录入减征幅度或减征额度");
		 				   return false;
		 			   }
		 		   }
		 	   }				
		    } else {
		 	   // 结束
		 	   break;
		    }
	    } 
		var yxqq = document.getElementsByName("tabForm.table.tableValue.string(WZ_SSJMYH_CCS$JMXZYXQS)")[0];
		var yxqz = document.getElementsByName("tabForm.table.tableValue.string(WZ_SSJMYH_CCS$JMXZYXQZ)")[0];
		var detailYxqq, detailYxqz;		
		// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		for(i = 0; i < 0x800; i++) {
			detailYxqq = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_CCS_MX1$JMQXQ)")[0];
			detailYxqz = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_CCS_MX1$JMQXZ)")[0];
		   	if (typeof(detailYxqq) == 'object') {
				if (yxqq.value > detailYxqq.value || yxqz.value < detailYxqz.value) {
					alert("车辆明细：有效期起止必须在减免性质有效期起与减免性质有效期止之间");
					return false;
				}
		    } else {
		 	   // 结束
		 	   break;
		    }
		}
		for(i = 0; i < 0x800; i++) {
			detailYxqq = document.getElementsByName("tabForm.table.detail2[" + i + "].string(WZ_SSJMYH_CCS_MX2$JMQXQ)")[0];
			detailYxqz = document.getElementsByName("tabForm.table.detail2[" + i + "].string(WZ_SSJMYH_CCS_MX2$JMQXZ)")[0];
		   	if (typeof(detailYxqq) == 'object') {
				if (yxqq.value > detailYxqq.value || yxqz.value < detailYxqz.value) {
					alert("船舶明细：有效期起止必须在减免性质有效期起与减免性质有效期止之间");
					return false;
				}
		    } else {
		 	   // 结束
		 	   break;
		    }
	    }
		// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		return true;
	}

	if (f['tabid'].value == 'WZQS0001') {
		var i;
	 
		if (typeof (f['tabForm.table.detail1[0].isChecked']) != "object") {
			alert("您至少必须输入一条申请明细！");
			return false;
		}
		// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		// 减免增类型
		var jmzlx = document.getElementsByName("tabForm.table.tableValue.string(WZ_SSJMYH_QS$JMZLX)")[0];		
		var jmlx = document.getElementsByName("tabForm.table.tableValue.string(WZ_SSJMYH_QS$JMLX)")[0];
		var jzed, jzfd, jzsl;
		
		// 一个足够大的明细条数
		for(i = 0; i < 0x800; i++) {
 			jzed = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_QS_MX1$JZED)")[0];
			jzfd = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_QS_MX1$JZFD)")[0];
			jzsl = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_QS_MX1$JZSL)")[0];
			if (typeof(jzed) == 'object') {
				// 01 减征，02 免征
				if (jmzlx.value == "02") {
					if (trim(jzsl.value).length != 0 || trim(jzed.value).length != 0 || trim(jzfd.value).length != 0) {
						alert("减免征类型为“免征”，无需录入“减征税率”、“减征幅度”、“减征额度”");
						return false;
					}
				} else if (jmzlx.value == "01") {
					// 税率式减免应该录入减征税率
					if (jmlx.value == 1) {
						if (trim(jzsl.value).length == 0) {
							alert("税率式减免应该录入减征税率");
							return false;
						}
					}
					// 税额、税基式减免应该录入减征幅度或减征额度
					if (jmlx.value == 2 || jmlx.value == 3) {
						if (trim(jzed.value).length == 0 && trim(jzfd.value).length == 0) {
							alert("税额、税基式减免应该录入减征幅度或减征额度");
							return false;
						}
					}
				}				
			} else {
				// 结束
				break;
			}
		}

		for(i = 0; i < 0x800; i++) {
			jzed = document.getElementsByName("tabForm.table.detail2[" + i + "].string(WZ_SSJMYH_QS_MX2$JZED)")[0];
		    jzfd = document.getElementsByName("tabForm.table.detail2[" + i + "].string(WZ_SSJMYH_QS_MX2$JZFD)")[0];
		    jzsl = document.getElementsByName("tabForm.table.detail2[" + i + "].string(WZ_SSJMYH_QS_MX2$JZSL)")[0];
		    if (typeof(jzed) == 'object') {
				// 01 减征，02 免征
		 	   if (jmzlx.value == "02") {
		 		   if (trim(jzsl.value).length != 0 || trim(jzed.value).length != 0 || trim(jzfd.value).length != 0) {
		 			   alert("减免征类型为“免征”，无需录入“减征税率”、“减征幅度”、“减征额度”");
		 			   return false;
		 		   }
		 	   } else if (jmzlx.value == "01") {
		 		   // 税率式减免应该录入减征税率
		 		   if (jmlx.value == 1) {
		 			   if (trim(jzsl.value).length == 0) {
		 				   alert("税率式减免应该录入减征税率");
		 				   return false;
		 			   }
		 		   }
		 		   // 税额、税基式减免应该录入减征幅度或减征额度
		 		   if (jmlx.value == 2 || jmlx.value == 3) {
		 			   if (trim(jzed.value).length == 0 && trim(jzfd.value).length == 0) {
		 				   alert("税额、税基式减免应该录入减征幅度或减征额度");
		 				   return false;
		 			   }
		 		   }
		 	   }				
		    } else {
		 	   // 结束
		 	   break;
		    }
	    } 
		var yxqq = document.getElementsByName("tabForm.table.tableValue.string(WZ_SSJMYH_CCS$JMXZYXQS)")[0];
		var yxqz = document.getElementsByName("tabForm.table.tableValue.string(WZ_SSJMYH_CCS$JMXZYXQZ)")[0];
		var detailYxqq, detailYxqz;		
		// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		for(i = 0; i < 0x800; i++) {
			detailYxqq = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_CCS_MX1$JMQXQ)")[0];
			detailYxqz = document.getElementsByName("tabForm.table.detail1[" + i + "].string(WZ_SSJMYH_CCS_MX1$JMQXZ)")[0];
		   	if (typeof(detailYxqq) == 'object') {
				if (yxqq.value > detailYxqq.value || yxqz.value < detailYxqz.value) {
					alert("有效期起止必须在减免性质有效期起与减免性质有效期止之间");
					return false;
				}
		    } else {
		 	   // 结束
		 	   break;
		    }
		}
		// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		return true;
	}

	if (f['tabid'].value == 'WZDKFP01') {
		var value  = $('input[name="tabForm.table.tableValue.string(WZ_DKFP$BLYWLX)"]:checked').val();
		if (typeof (f['tabForm.table.detail1[0].isChecked']) != "object" && value=="0") {
            alert("您至少必须输入一条申请明细！");
            return false;
		}
		if (typeof (f['tabForm.table.detail3[0].isChecked']) != "object" && value=="1") {
            alert("您至少必须输入一条申请明细！");
            return false;
		}
		if (typeof (f['tabForm.table.detail2[0].string(WZ_DKFP_MX2$ZSXM)']) != "object") {
            alert("您至少完税信息一览表！");
            return false;
		}

		// ///////////////////////////////////
		// 专票必填
		var fplxValue = $("input[name='tabForm.table.tableValue.string(WZ_DKFP$FPLX)']:checked").val();
		var gmfLxdz = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$GMF_LXDZ)")[0];
		var gmfKhyh = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$GMF_KHYH)")[0];
		var gmfYhzh = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$GMF_YHZH)")[0];

		if (fplxValue === "SX0500") {
			if (trim(gmfLxdz.value) === "" || trim(gmfKhyh.value) === "" || trim(gmfYhzh.value) === "") {
				alert("选择增值税专用发票：购买方信息地址、开户银行、电话、银行账户必填");
				return false;
			}
		}
		// ///////////////////////////////////
		// 不动产必填
		var blywlxValue = $("input[name='tabForm.table.tableValue.string(WZ_DKFP$BLYWLX)']:checked").val();
		var bdcxz = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$BDCXZ)");
		var pzyfq = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$PZYFQ)")[0];
		var pzyfz = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$PZYFZ)")[0];
		var fwzldz = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$FWZLDZ)")[0];

		if (blywlxValue === "0") {
			if ((bdcxz[0].checked === false && bdcxz[1].checked === false) ||
				trim(pzyfq.value) === "" ||
				trim(pzyfz.value) === "" ||
				trim(fwzldz.value) === "") {
				alert("选择出租不动产：不动产性质、租赁月份起、租赁月份止、房屋坐落地址 必填");
				return false;
			}
			var tab = document.getElementById("czbdcxxTab");
			var rowNum = tab.rows.length-4;
			for(i=0; i<rowNum; i++) {
				var sl = Expression(document.getElementsByName("tabForm.table.detail1["+i+"].string(WZ_DKFP_MX1$SL)")[0].value);
				var dj = Expression(document.getElementsByName("tabForm.table.detail1["+i+"].string(WZ_DKFP_MX1$DJ)")[0].value);
				if(sl <= 0 || dj <=0 ){
					alert("出租不动产信息第 " + (i+1) + "个明细的单价和数量应大于0");
					return false;
				}
			}
		}
		// ////////// 销售存量房 ///////////////////////
		if (blywlxValue === "1") {
			var clfdz = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$CLFDZ)")[0];
			var cqzbh = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$CQZBH)")[0];
			var htzj = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$HTZJ)")[0];
			var pgzj= document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$PGZJ)")[0];
			if (trim(clfdz.value)  === ""|| trim(cqzbh.value) ==="" ||
					trim(htzj.value) === "" ||
					trim(pgzj.value) === "") {
					alert("选择销售存量房：存量房地址、产权证编号、合同总价、评估总价均为必填");
					return false;
			}
			
			var tab = document.getElementById("xsclfxxTab");
			var rowNum = tab.rows.length-4;
			for(i=0; i<rowNum; i++){
				var sl = Expression(document.getElementsByName("tabForm.table.detail3["+i+"].string(WZ_DKFP_MX3$SL)")[0].value);
				var dj = Expression(document.getElementsByName("tabForm.table.detail3["+i+"].string(WZ_DKFP_MX3$DJ)")[0].value);
				if(sl <= 0 || dj <=0 ){
					alert("销售存量房信息第 " + (i+1) + "个明细的单价和数量应大于0");
					return false;
				}
			}
		}


		// ///////////////////////////////////
		// 快递必填
		var fplqfsValue = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$FPLQFS)")[0];
		var kdsjdz = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$KDSJDZ)")[0];
		var kdsjr = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$KDSJR)")[0];
		var kddh = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$KDDH)")[0];
		var kdgs = document.getElementsByName("tabForm.table.tableValue.string(WZ_DKFP$KDGS)");

		if (fplqfsValue.value === "1") {
			if (trim(kdsjdz.value) === "" ||
				trim(kdsjr.value) === "" ||
				trim(kddh.value) === "" ||
				(kdgs[0].checked === false && kdgs[1].checked === false)) {
				alert("选择快递到付：快递收件地址、快递收件人、快递电话、快递公司必填!");
				return false;
			}
		}

		return true;
	}



	if (f['tabid'].value == 'WZPW0029') {
		// alert("WZPW0029")
		for(var i=0;i<2000;i++){
			var objectP = document.getElementById("tabForm.table.detail1["+i+"].string(WZ_CJJY_QYSJNDGZSJB_MX$JSYF)");
		if(objectP=="[object]"){
			var jsyf = 1;
			jsyf = document.getElementById("tabForm.table.detail1["+i+"].string(WZ_CJJY_QYSJNDGZSJB_MX$JSYF)").value;
			var ksyf = 1;
			ksyf = document.getElementById("tabForm.table.detail1["+i+"].string(WZ_CJJY_QYSJNDGZSJB_MX$KSYF)").value;


			var jsyfOld = document.getElementById("tabForm.table.detail1["+i+"].string(WZ_CJJY_QYSJNDGZSJB_MX$JSYFOLD)").value;

			var jsyfp = new Number(jsyf);
			var ksyfp = new Number(ksyf);
			var jsyfOldp = new Number(jsyfOld);

			if(jsyfp < ksyfp){
			    var j = i+1;
		       	alert("第 "+j+" 条记录的实际_结束月份不能小于开始月份!");
		       	return false;
	    	}

			if(jsyfp > jsyfOldp){
			    var j = i+1;
		       	alert("第 "+j+" 条记录的实际_结束月份不能比预计_结束月份大!");
		       	return false;
	    	}

	    }
	  }
		return true;
	}




	for (var i = 1; i <= 6; i++) {
		if (typeof(f['del_detail' + i]) == "object") {

			 // alert(f['tabid'].value);
			// 开具外出经营税收管理证明申请表的明细2不要校验
			if (i == 2 && f['tabid'].value == 'WZDJ0011') {
				continue;
			}
			// 企业关联业务的明细不进行校验 modify by linzhifeng
			if ( (f['tabid'].value).substring(0,6) == 'WZGLYW') {
				continue;
			}
			if ( f['tabid'].value == 'WZPW0020') {
				continue;
			}
			if ( f['tabid'].value == 'WZGJ0007') {
				continue;
			}if ( f['tabid'].value == 'WZZS5152') {
				continue;
			}
			if ( f['tabid'].value == 'SSZYFW1002') {
				continue;
			}

			if(f['tabid'].value == 'WZZS5101'){
				if (typeof(f['tabForm.table.detail1[0].isChecked']) != "object") {
					alert("301企业主要股东至少录入一条明细");
					result = false;
					break;
				}
			}
			else if (f['tabid'].value == 'WZZS5120'){
				result = true;
				break;
			}else if(f['tabid'].value == 'WZZS7101'){
				if(document.getElementsByName("tabForm.table.detail1[10].string(WZ_SB_QYSDSND_CB$N1)")[0]){
					alert("企业主要股东及分红情况最多不能超过10条明细！");
					result = false;
					break;
				}else{
					continue;
				}
			}else if(f['tabid'].value == 'WZZS7130'){
				continue;
			}		
			else if(f['tabid'].value == 'WZGSBA01'){
				if(typeof(f['tabForm.table.detail1[0].isChecked']) != "object"){
					alert("您至少必须输入一条明细");
					result = false;
					break;
				}
			}
			else if ((f['tabid'].value == 'WZZS7149') && (document.getElementsByName("tabForm.table.tableValue.string(WZ_SB_QYSDSND_ZB$N7)")[0].value == "1")){
				if((typeof(f['tabForm.table.detail2[0].isChecked']) != "object") ||
						(typeof(f['tabForm.table.detail3[0].isChecked']) != "object") ||
						(typeof(f['tabForm.table.detail4[0].isChecked']) != "object") ||
						(typeof(f['tabForm.table.detail5[0].isChecked']) != "object")){
					alert("您至少必须输入一条明细");
					result = false;
					break;
				}
			}else if(f['tabid'].value == 'WZZS7144'){
				var deatailTable =document.getElementById("detail17");
				var detailRows = deatailTable.rows.length / 2;
				for(var j=0;j<detailRows;j++){
					if(j==0){
						var detail1="";
						var detail2=2;
						var xh1 = 1;
						var xh2 = 2;
					}else{
						var detail1=2*j+1;
						var detail2=detail1+1;
						var xh1 = detail1;
						var xh2 = detail2;
					}

					if((document.getElementsByName("tabForm.table.detail17["+j+"].string(WZ_SB_QYSDSND_CB17$N1)")[0])&&
							(document.getElementsByName("tabForm.table.detail17["+j+"].string(WZ_SB_QYSDSND_CB17$N1)")[0].value != "")&&
						   ((!document.getElementsByName("tabForm.table.detail"+xh1+"[0].string(WZ_SB_QYSDSND_CB"+detail1+"$N1)")[0])||
						   (!document.getElementsByName("tabForm.table.detail"+xh2+"[0].string(WZ_SB_QYSDSND_CB"+detail2+"$N1)")[0]))){
							alert("您至少必须输入一条明细");
							return false;
							break;
					}
				}
				if(!document.getElementsByName("tabForm.table.detail16[0].string(WZ_SB_QYSDSND_CB16$N1)")[0]){
					alert("您至少必须输入一条明细");
					return false;
					break;
				}
			}else if(f['tabid'].value == 'WZZS7145'){
				if(!document.getElementsByName("tabForm.table.detail1[0].string(WZ_SB_QYSDSND_CB$N1)")[0]||
						!document.getElementsByName("tabForm.table.detail2[0].string(WZ_SB_QYSDSND_CB2$N1)")[0]||
						!document.getElementsByName("tabForm.table.detail4[0].string(WZ_SB_QYSDSND_CB4$N1)")[0]){
					alert("您至少必须输入一条明细");
					return false;
					break;
				}
			}
			else if(f['tabid'].value == 'SSZYFW1001'){
				var n2 = $("input:radio[name='tabForm.table.tableValue.string(WZ_SSZYFW_ZB$N2)']:checked").val();
				if (n2 == "01"){
					if(!document.getElementsByName("tabForm.table.detail1[0].string(WZ_SSZYFW_CB$N2)")){
						alert("请至少录入一条从事涉税服务人员基本信息");
						result = false;
						break;					
					}
				}
			}
			else if (typeof(f['tabForm.table.detail' + i + '[0].isChecked']) != "object") {

				alert("您至少必须输入一条明细");
				result = false;
				break;
			}
		}
	}

	// 减免税备案
	if (f['tabid'].value == 'WZPWBA01' || f['tabid'].value == 'WZPWBA02' || f['tabid'].value == 'WZPWBA03' || f['tabid'].value == 'WZPWBA04') {
		// 税务事项代码
		var swsx = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$SWSX_DM)')[0];
		var jmyxqs = trim(document.all['tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JMYXQS)'].value);
		var jmyxqz = trim(document.all['tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JMYXQZ)'].value);
		if (jmyxqs == "") {
			alert("减免有效期始不能为空！");
			document.all['tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JMYXQS)'].focus();
			return false;
		}
		if (jmyxqz == "") {
			alert("减免有效期止不能为空！");
			document.all['tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JMYXQZ)'].focus();
			return false;
		}
		// ========================== 减征额度、减征幅度、减征税率三选一
		// =================================== //
		var jmzlx = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JMZLX)')[0];
		// 减免类型
		var jmlx = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$BAJMKZLX_DM)')[0];
		var jzed = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JZED)')[0];
		var jzfd = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JZFD)')[0];
		var jzsl = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JZSL)')[0];
		// 01 减征，02 免征
		if (jmzlx.value == '02') {
			if (trim(jzsl.value).length != 0 || trim(jzed.value).length != 0 || trim(jzfd.value).length != 0) {
				alert("减免征类型为“免征”，无需录入“减征税率”、“减征幅度”、“减征额度”");
				return false;
			}
		} else {
			// 税率式减免应该录入减征税率
			if (jmlx.value == 1) {
				if (trim(jzsl.value).length == 0) {
					alert("税率式减免应该录入减征税率");
					return false;
				}
			}
			// 税额、税基式减免应该录入减征幅度或减征额度
			if (jmlx.value == 2 || jmlx == 3) {
				if (trim(jzed.value).length == 0 && trim(jzfd.value).length == 0) {
					alert("税额、税基式减免应该录入减征幅度或减征额度");
					return false;
				}
			}
		}
		// ========================== 减征额度、减征幅度、减征税率三选一
		// =================================== //

		// ========================== "金融机构与小微企业签订的借款合同免征印花税"填写
		// =================================== //

		var htbh = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$HTBH)')[0];
		var htmc = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$HTMC)')[0];
		if (swsx.value == 'SXA031900255') {
			if (trim(htbh.value) == '' || trim(htmc.value) == '') {
				alert("合同编号、合同名称");
				return false;
			}
		}
		// ========================== "金融机构与小微企业签订的借款合同免征印花税"填写
		// =================================== //
		// ========================== "促进重点群体创业就业税收优惠、退役士兵就业税收优惠" 时间控制
		// =================================== //
		var jmyxqxq = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JMYXQS)')[0];
		var jmyxqxz = document.getElementsByName('tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$JMYXQZ)')[0];
		if (swsx.value === 'SXA031900603') {
			if (Math.floor((Date.parse(jmyxqxz.value) - Date.parse(jmyxqxq.value)) / (24 * 3600 * 1000)) > 365) {
				alert("促进重点群体创业就业税收优惠、退役士兵就业税收优惠跨期不得超过三年");
				return false;
			}
		}
		// ========================== "促进重点群体创业就业税收优惠、退役士兵就业税收优惠" 时间控制
		// =================================== //
		return true;

	  }

	return result;
}

function addHiddenField(divid, name, value1) {
	var e = document.getElementById(divid);
	e.innerHTML = "<input name=\"" + name + "\" type=\"hidden\" " + "value=\"" + value1 + "\">";
}

function clearHiddenField(divid) {
	var e = document.getElementById(divid);
	e.innerHTML = "";
}

function checkFields(f, sectionid, checked) {
	for (var i = 0; i < f.length; i++) {
		var e = f.elements[i];
		if ((e.type == "checkbox") && (e.id.indexOf(sectionid + ".") == 0) && (e.disabled != true)) {
			e.checked = checked;
			e.onclick();
		}
	}

}

function printHtml(header, footer, portrait) {
	printfactory.printing.header = header;
	printfactory.printing.footer = footer;
	printfactory.printing.portrait = portrait;
	printfactory.printing.Print(false, printFrame);
}

// jinzhongliang 增加 开始

// 输入特定数字的控制
var dFilterStep

function dFilterStrip(dFilterTemp, dFilterMask) {
	dFilterMask = replace(dFilterMask, '#', '');
	for (dFilterStep = 0; dFilterStep < dFilterMask.length++; dFilterStep++) {
		dFilterTemp = replace(dFilterTemp, dFilterMask.substring(dFilterStep, dFilterStep + 1), '');
	}
	return dFilterTemp;
}

function dFilterMax(dFilterMask) {
	dFilterTemp = dFilterMask;
	for (dFilterStep = 0; dFilterStep < (dFilterMask.length + 1); dFilterStep++) {
		if (dFilterMask.charAt(dFilterStep) != '#') {
			dFilterTemp = replace(dFilterTemp, dFilterMask.charAt(dFilterStep), '');
		}
	}
	return dFilterTemp.length;
}

function dFilter(key, textbox, dFilterMask) {
	dFilterNum = dFilterStrip(textbox.value, dFilterMask);

	if (key == 9) {
		return true;
	} else if (key == 8 && dFilterNum.length != 0) {
		// dFilterNum = dFilterNum.substring(0,dFilterNum.length-1);
		textbox.value = '';
		return;
	} else if ((key > 47 && key < 58) && dFilterNum.length < dFilterMax(dFilterMask)) {
		dFilterNum = dFilterNum + String.fromCharCode(key);
	} else if ((key > 95 && key < 106) && dFilterNum.length < dFilterMax(dFilterMask)) {
		dFilterNum = dFilterNum + String.fromCharCode(key - 48);
	}

	var dFilterFinal = '';
	for (dFilterStep = 0; dFilterStep < dFilterMask.length; dFilterStep++) {
		if (dFilterMask.charAt(dFilterStep) == '#') {
			if (dFilterNum.length != 0) {
				dFilterFinal = dFilterFinal + dFilterNum.charAt(0);
				dFilterNum = dFilterNum.substring(1, dFilterNum.length);
			} else {
				dFilterFinal = dFilterFinal + "";
			}
		} else if (dFilterMask.charAt(dFilterStep) != '#') {
			dFilterFinal = dFilterFinal + dFilterMask.charAt(dFilterStep);
		}
		// dFilterTemp =
		// replace(dFilterTemp,dFilterMask.substring(dFilterStep,dFilterStep+1),'');
	}

	textbox.value = dFilterFinal;
	return false;
}

function replace(fullString, text, by) {
	// Replaces text with by in string
	var strLength = fullString.length, txtLength = text.length;
	if ((strLength == 0) || (txtLength == 0))
		return fullString;

	var i = fullString.indexOf(text);
	if ((!i) && (text != fullString.substring(0, txtLength)))
		return fullString;
	if (i == -1)
		return fullString;

	var newstr = fullString.substring(0, i) + by;

	if (i + txtLength < strLength)
		newstr += replace(fullString.substring(i + txtLength, strLength), text, by);

	return newstr;
}

// calendar

// 有效的时间范围
var date_start, date_end, g_object
var today = new Date();
var separator = "-";
var inover = false;

// mode :时间变换的类型0-年 1-月 2-直接选择月
function change_date(temp, mode) {
	var t_month, t_year
	if (mode) {
		if (mode == 1)
			t_month = parseInt(cele_date_month.value, 10) + parseInt(temp, 10);
		else
			t_month = parseInt(temp)
		if (t_month < cele_date_month.options(0).text) {
			cele_date_month.value = cele_date_month.options(cele_date_month.length - 1).text;
			change_date(parseInt(cele_date_year.value, 10) - 1, 0);
		} else {
			if (t_month > cele_date_month.options(cele_date_month.length - 1).text) {
				cele_date_month.value = cele_date_month.options(0).text;
				change_date(parseInt(cele_date_year.value, 10) + 1, 0);
			} else {
				cele_date_month.value = t_month;
				set_cele_date(cele_date_year.value, cele_date_month.value);
			}
		}
	} else {
		t_year = parseInt(temp, 10);

		if (t_year < cele_date_year.options(0).text) {
			cele_date_year.value = cele_date_year.options(0).text;
			set_cele_date(cele_date_year.value, 1);
		} else {
			if (parseInt(t_year, 10) > parseInt(cele_date_year.options(cele_date_year.length - 1).text, 10)) {
				cele_date_year.value = cele_date_year.options(cele_date_year.length - 1).text;
				set_cele_date(cele_date_year.value, 12);
			} else {
				cele_date_year.value = t_year;
				set_cele_date(cele_date_year.value, cele_date_month.value);
			}
		}
	}
	/** *******2002-02-01 MODIFY BY WING ************* */
	window.cele_date.focus();
	/** **************MODIFY END********************** */
}

// 初始化日历
function init(d_start, d_end) {
	var temp_str;
	var i = 0
	var j = 0
	date_start = new Date(2000, 7, 1)
	date_end = new Date(2004, 8, 1)

	// 必须要有内容（奇怪）
	/**
	 * ***********************2002-02-01 MODIFY BY WING
	 * ********************************************************************************
	 */
	document
			.writeln("<div name=\"cele_date\" id=\"cele_date\"  style=\"display:none\"    style=\"LEFT: 69px; POSITION: absolute; TOP: 159px;Z-INDEX:99\" onClick=\"event.cancelBubble=true;\" onBlur=\"hilayer()\" onMouseout=\"lostlayerfocus()\">? </div>");
	/**
	 * *****************************************MODIFY
	 * END******************************************************************************
	 */
	window.cele_date.innerHTML = "";
	temp_str = "<table border=\"1\" bgcolor=\"#4682b4\" bordercolor=\"white\"><tr><td colspan=7 onmouseover=\"overcolor(this)\">";
	temp_str += "<input type=\"Button\" value=\"<<\" onclick=\"change_date(-1,1)\" onmouseover=\"getlayerfocus()\" style=\"color: #FFFFFF; background-color: #5d7790; cursor: hand\">?";// 左面的箭头

	/**
	 * ************************2002-02-01 MODIFY BY WING
	 * *******************************************************************************
	 */
	/*
	 * temp_str+="<input type=\"Button\" value=\"<<\"
	 * onclick=\"change_date(-1,1)\" >?";//左面的箭头
	 */
	/** ********************************************************************************************************************************* */

	temp_str += ""// 年
	temp_str += "<select name=\"cele_date_year\" id=\"cele_date_year\" language=\"javascript\" onchange=\"change_date(this.value,0)\" onmouseover=\"getlayerfocus()\" onblur=\"getlayerfocus()\" style=\"font-size: 9pt; border: 1px #666666 outset; background-color: #F4F8FB\">"

	/**
	 * ************************2002-02-01 MODIFY BY WING
	 * *******************************************************************************
	 */
	/*
	 * temp_str+="<select name=\"cele_date_year\" id=\"cele_date_year\"
	 * language=\"javascript\" onchange=\"change_date(this.value,0)\">"
	 */
	/** ********************************************************************************************************************************* */

	for (i = 2000; i <= 2020; i++) {
		temp_str += "<OPTION value=\"" + i.toString() + "\">" + i.toString() + "</OPTION>";
	}
	temp_str += "</select>?";
	temp_str += ""// 月
	temp_str += "<select name=\"cele_date_month\" id=\"cele_date_month\" language=\"javascript\" onchange=\"change_date(this.value,2)\" onmouseover=\"getlayerfocus()\" onblur=\"getlayerfocus()\" style=\"font-size: 9pt; border: 1px #666666 outset; background-color: #F4F8FB\">"

	/**
	 * ************************2002-02-01 MODIFY BY WING
	 * *********************************************************************************
	 */
	/*
	 * temp_str+="<select name=\"cele_date_month\" id=\"cele_date_month\"
	 * language=\"javascript\" onchange=\"change_date(this.value,2)\">"
	 */
	/** *********************************************************************************************************************************** */

	for (i = 1; i <= 12; i++) {
		temp_str += "<OPTION value=\"" + i.toString() + "\">" + i.toString() + "</OPTION>";
	}
	temp_str += "</select>?";
	temp_str += ""// 右箭头
	temp_str += "<input type=\"Button\" value=\">>\" onclick=\"change_date(1,1)\" onmouseover=\"getlayerfocus()\"  style=\"color: #FFFFFF; background-color: #5d7790; cursor: hand\">";

	/**
	 * ************************2002-02-01 MODIFY BY WING
	 * *******************************************************************************
	 */
	/*
	 * temp_str+="<input type=\"Button\" value=\">>\"
	 * onclick=\"change_date(1,1)\">";
	 */
	/** ********************************************************************************************************************************* */

	temp_str += "</td></tr><tr><td onmouseover=\"overcolor(this)\">"
	temp_str += "<font color=red>Su</font></td><td>";
	temp_str += "Mo</td><td>";
	temp_str += "Tu</td><td>";
	temp_str += "We</td><td>"
	temp_str += "Th</td><td>";
	temp_str += "Fr</td><td>";
	temp_str += "Sa</td></tr>";
	for (i = 1; i <= 6; i++) {
		temp_str += "<tr>";
		for (j = 1; j <= 7; j++) {
			temp_str += "<td name=\"c"
					+ i
					+ "_"
					+ j
					+ "\"id=\"c"
					+ i
					+ "_"
					+ j
					+ "\" style=\"CURSOR: hand\" style=\"COLOR:#000000\" language=\"javascript\" onmouseover=\"overcolor(this)\" onmouseout=\"outcolor(this)\" onclick=\"td_click(this)\">?</td>"
		}
		temp_str += "</tr>"
	}
	temp_str += "</td></tr></table>";
	window.cele_date.innerHTML = temp_str;
}
function set_cele_date(year, month) {
	var i, j, p, k
	var nd = new Date(year, month - 1, 1);
	event.cancelBubble = true;
	cele_date_year.value = year;
	cele_date_month.value = month;
	k = nd.getDay() - 1
	var temp;
	for (i = 1; i <= 6; i++)
		for (j = 1; j <= 7; j++) {
			eval("c" + i + "_" + j + ".innerHTML=\"\"");
			eval("c" + i + "_" + j + ".bgColor=\"#4682b4\"");
			eval("c" + i + "_" + j + ".style.cursor=\"hand\"");
		}
	while (month - 1 == nd.getMonth()) {
		j = (nd.getDay() + 1);
		p = parseInt((nd.getDate() + k) / 7) + 1;
		eval("c" + p + "_" + j + ".innerHTML=" + "\"" + nd.getDate() + "\"");
		if ((nd.getDate() == today.getDate()) && (cele_date_month.value == today.getMonth() + 1) && (cele_date_year.value == today.getYear())) {
			eval("c" + p + "_" + j + ".bgColor=\"#EFFB64\"");
		}
		if (nd > date_end || nd < date_start) {
			eval("c" + p + "_" + j + ".bgColor=\"#FF9999\"");
			eval("c" + p + "_" + j + ".style.cursor=\"text\"");
		}
		nd = new Date(nd.valueOf() + 86400000)
	}
}

// s_object：点击的对象；d_start-d_end有效的时间区段；需要存放值的控件；
function show_cele_date(eP, d_start, d_end, t_object) {
	window.cele_date.style.display = "";
	window.cele_date.style.zIndex = 99
	var s, cur_d
	var eT = eP.offsetTop;
	var eH = eP.offsetHeight + eT;
	var dH = window.cele_date.style.pixelHeight;
	var sT = document.body.scrollTop;
	var sL = document.body.scrollLeft;
	event.cancelBubble = true;
	window.cele_date.style.posLeft = event.clientX - event.offsetX + sL - 5;
	window.cele_date.style.posTop = event.clientY - event.offsetY + eH + sT - 5;
	if (window.cele_date.style.posLeft + window.cele_date.clientWidth > document.body.clientWidth)
		window.cele_date.style.posLeft += eP.offsetWidth - window.cele_date.clientWidth;
	// if
	// (window.cele_date.style.posTop+window.cele_date.clientHeight>document.body.clientHeight)
	// window.cele_date.style.posTop-=(eP.offsetHeight+window.cele_date.clientHeight+5);
	if (d_start != "") {
		if (d_start == "today") {
			date_start = new Date(today.getYear(), today.getMonth(), today.getDate());
		} else {
			s = d_start.split(separator);
			date_start = new Date(s[0], s[1] - 1, s[2]);
		}
	} else {
		date_start = new Date(1900, 1, 1);
	}

	if (d_end != "") {
		s = d_end.split(separator);
		date_end = new Date(s[0], s[1] - 1, s[2]);
	} else {
		date_end = new Date(3000, 1, 1);
	}

	g_object = t_object

	cur_d = new Date()
	set_cele_date(cur_d.getYear(), cur_d.getMonth() + 1);
	window.cele_date.style.display = "block";
	/** *************2002-02-01 MODIFY BY WING ********** */
	window.cele_date.focus();
	/** **************MODIFY END************************* */
}
function td_click(t_object) {
	var t_d
	if (parseInt(t_object.innerHTML, 10) >= 1 && parseInt(t_object.innerHTML, 10) <= 31) {
		t_d = new Date(cele_date_year.value, cele_date_month.value - 1, t_object.innerHTML)
		if (t_d <= date_end && t_d >= date_start) {
			var year = cele_date_year.value;
			var month = cele_date_month.value;
			var day = t_object.innerHTML;
			if (parseInt(month) < 10)
				month = "0" + month;
			if (parseInt(day) < 10)
				day = "0" + day;
			if (!document.all(g_object).readOnly) {
				document.all(g_object).value = year + separator + month + separator + day;
			}
			window.cele_date.style.display = "none";
		};
	}

}
function h_cele_date() {
	window.cele_date.style.display = "none";
}

function overcolor(obj) {
	if (obj.style.cursor == "hand")
		obj.style.color = "#FFFFFF";
	/** ********* 2002-02-01 MODIFY BY WING **** */
	inover = true;
	window.cele_date.focus();
	/** *********** MODIFY END ***************** */
}

function outcolor(obj) {
	obj.style.color = "#000000";
	/** ********* 2002-02-01 MODIFY BY WING **** */
	inover = false;
	/** *********** MODIFY END ***************** */
}

function getNow(o) {
	var Stamp = new Date();
	var year = Stamp.getYear();
	var month = Stamp.getMonth() + 1;
	var day = Stamp.getDate();
	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}
	o.value = year + separator + month + separator + day;
}
/**
 * ********* 2002-02-01 MODIFY BY WING **ADD THREE FUNCTION TO CONTROL THE DIV
 * FOCUS**
 */
function hilayer() {
	if (inover == false) {
		var lay = document.all.cele_date;
		lay.style.display = "none";
	}
}
function getlayerfocus() {
	inover = true;
}
function lostlayerfocus() {
	inover = false;
}
// jinzhongliang 增加 结束

// ---------------------------运算表达式的函数开始 冯进------------------------//
function isDigit(c) {
	return ((c >= "0") && (c <= "9"))
}

function isFloat(s) {
	var i;
	var seenDecimalPoint = false;

	if (s == null || s == "")
		return true;

	if (s == ".")
		return false;

	for (i = 0; i < s.length; i++) {
		// Check that current character is number.
		var c = s.charAt(i);

		if ((c == ".") && !seenDecimalPoint)
			seenDecimalPoint = true;
		else if (!isDigit(c))
			return false;
	}

	return true;
}

function isInteger(s) {
	var i;
	if (s == null || s == "")
		return true;

	for (i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if (!isDigit(c))
			return false;
	}

	return true;
}

// 2009年1月14日因为大数值计算出错，对全部的值parseFloat化
function evalExpression(jsgs) {
	var target = ""; // 被赋值的控件项
	var exp = ""; // 解析后的表达式
	var prefix = event.srcElement.prefix;

	var j = 0;
	for (var i = 0; i < jsgs.length; i++) {
		var t = jsgs.substring(i, i + 1);
		var comName = "";// 表达式中控件名称

		if (t == "=") {
			target = getName(j, i, jsgs);
			target = prefix + ".double(" + target + ")";
			j = i + 1;
		} else if (t == "-") {
			comName = getName(j, i, jsgs);
			j = i + 1;
			exp = exp + "parseFloat(" + getValue(prefix, comName) + ")" + "-";
		} else if (t == "+") {
			comName = getName(j, i, jsgs);
			j = i + 1;
			exp = exp + "parseFloat(" + getValue(prefix, comName) + ")" + "+";
		} else if (t == "*") {
			comName = getName(j, i, jsgs);
			j = i + 1;
			exp = exp + "parseFloat(" + getValue(prefix, comName) + ")" + "*";
		} else if (t == "/") {
			comName = getName(j, i, jsgs);
			j = i + 1;
			exp = exp + "parseFloat(" + getValue(prefix, comName) + ")" + "/";
		} else if (t == "(") {
			exp = exp + "(";
			j = i + 1;
		} else if (t == ")") {
			comName = getName(j, i, jsgs);
			j = i + 1;
			exp = exp + "parseFloat(" + getValue(prefix, comName) + ")" + ")";
		}

		if (i == jsgs.length - 1) {
			comName = jsgs.substring(j, i + 1);
			exp = exp + "parseFloat(" + getValue(prefix, comName) + ")";

		}
	}

	var jg = eval(exp); // 运算后的结果

	var num = round(jg, 5); // 四舍五入
	num = round(num, 2);


	try  {
			var arrayInput = document.getElementsByTagName("input");
            if(arrayInput.length>0){
				for(var m=0;m<arrayInput.length;m++){
					var tempInput = arrayInput[m];
					if(target==tempInput.name){
						tempInput.value = num;
					}
				}
			}else{
			  eval("document.getElementsByName('" + target +"')[0].value=" + num);
			}


     }catch(e) {
       alert(e);
	   return false;
     }

}

// 四舍五入函数
function round(num, ws) {
	var t = new Number(num);
	var b = "1";
	for (var i = 0; i < ws; i++) {
		b = b + "0";
	}

	// t = t * parseInt(b);
	t = accMul(t,parseInt(b));
	t = Math.round(t);
	t = t / parseInt(b);
	return t;
}

/* 精确的乘法算法，不使用JS的（*）运算规则符 */
function accMul(arg1,arg2)
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}


// 从公式中取得控件名称,为evalExpression函数服务
function getName(j, i, str) {
	var rt = "";
	if (!(j == i - 1)) {
		rt = str.substring(j, i);
	}
	return rt;
}

function isNumber() {
}

// 根据控件名称，取出控件的值
function getValue(prefix, pName) {
	if (pName == null || pName == "") {
		return "";
	}
	if (isFloat(pName) || isInteger(pName)) {
		return pName;
	}

	pName = prefix + ".double(" + pName + ")";
	var rt = "";
	// 2009年1月4日，发现eval这样执行有时会取不到对象，所以修改
	// var com = eval("document.all('"+pName +"')");
	var com = document.getElementsByName(pName);
	if (com && com[0]) {
		var t = com[0].value;
		if (!t || t == null || t == "") {
			rt = "0";
		} else {
			rt = t;
		}
	}
	return rt;
}
// -----------------------运算表达式的函数结束 冯进----------------------------//
function numInput() {
	var key = event.keyCode;
	var textbox = event.srcElement;
	if (key == 9 || key == 13 || key == 190 || key == 110) {
		return true;
	} else if (key == 8) { // backspace
		return true;
	} else if ((key > 47 && key < 58)) {
		return true;
	} else if ((key > 95 && key < 106)) {
		return true;
	}
	return false;
}

/* 分页标签_页面切换 */
function tab_switchTD() {
	var com = event.srcElement;
	if (com.className == "tabs-on") {
		return;
	} else {
		var td_tabs = document.getElementsByName("td_tab");
		var td_index = 0; // 页面索引
		if (td_tabs) {
			for (var i = 0; i < td_tabs.length; i++) {
				if (td_tabs[i] == com) {
					td_tabs[i].className = "tabs-on";
					td_index = i;
				} else {
					td_tabs[i].className = "tabs-off";
				}
			}
		}

		var div_contents = document.getElementsByName("div_content");
		if (div_contents) {
			for (var j = 0; j < div_contents.length; j++) {
				if (j == td_index) {
					div_contents[j].style.display = "block";
				} else {
					div_contents[j].style.display = "none";
				}
			}
		}

		// 记录页面的索引值
		var colIndexHidden = document.all("colIndex");
		if (colIndexHidden) {
			colIndexHidden.value = td_index;
		}
	}
}

function fillSub(subName, parentCode, subCodeType) {
	var subSelect = document.all(subName);
	for (i = subSelect.options.length; i >= 0; i--) { // 清空选项
		subSelect.options[i] = null;
	}
	if (subCodeType == null)
		return;
	var option1 = document.createElement("OPTION");
	option1.text = "99-全部";
	option1.value = "";
	subSelect.options.add(option1);
	for (i = 0; i < subCodeType.length; i++) {
		if (subCodeType[i][2] != parentCode)
			continue;
		var option = document.createElement("OPTION");
		option.text = subCodeType[i][0] + "-" + subCodeType[i][1];
		option.value = subCodeType[i][0];
		subSelect.options.add(option);
	}
}

/*
 * 套打函数 buttonName：打印按钮名称 rptFormat：报表格式 rptData：报表数据
 */
function toprint(buttonName, rptFormat, rptData) {
	var printContent = "";
	// alert(rptFormat);
	// alert(rptData);
	var pages = rptData.length / rptFormat.length;
	for (j = 0; j < pages; j++) {
		for (i = 0; i < rptFormat.length; i++) {
			if (i == rptFormat.length - 1) {
				printContent += rptFormat[i][0] + "," + rptFormat[i][1] + "," + rptData[rptFormat.length * j + i];
			} else {
				printContent += rptFormat[i][0] + "," + rptFormat[i][1] + "," + rptData[rptFormat.length * j + i] + "`";
			}
		}
	}
	// alert(printContent);
	document.getElementById(buttonName).Start_Print(printContent);
}

function getpage(rptFormat, rptData) {
	var printContent = "";
	for (i = 0; i < rptFormat.length; i++) {
		if (i == rptFormat.length - 1) {
			printContent += rptFormat[i][0] + "," + rptFormat[i][1] + "," + rptData[i];
		} else {
			printContent += rptFormat[i][0] + "," + rptFormat[i][1] + "," + rptData[i] + "`";
		}
	}
	return printContent;
}

/*
 * 套打函数 buttonName：打印按钮名称 formats：报表格式
 */
function batchtoprint(buttonName, formats) {
	var printContent = "";
	for (j = 0; j < formats.length; j++) {
		if (j == formats.length - 1) {
			printContent += getpage(formats[j][0], formats[j][1]);
		} else {
			printContent += getpage(formats[j][0], formats[j][1]) + "#*";
		}
	}
	// alert(printContent);
	document.getElementById(buttonName).Start_Print(printContent);
}

/*
 * 征收页面中POS刷卡
 */
function zs_possk_cardPay() {
	var teller = null;
	var amount = null;
	var sph = null;

	teller = document.all("zs_wsz_pos_skjl_sk_VO.string(CZYBM)").value; // 操作员编号
	amount = document.all("zs_wsz_pos_skjl_sk_VO.string(POSSJJNE)").value; // POS格式的支付金额

	sph = document.all("zs_zsb_ext_VO.string(QYSPH)").value; // 完税证机内税票号

	if (sph == null || sph == "" || sph == "0") {
		return;
	}

	card.cardPay(teller, amount);
	alert("POS机刷卡的帐号是：" + card.cardNo);
	document.all("zs_wsz_pos_skjl_sk_VO.string(ZDH)").value = card.tid; // 终端号
	document.all("zs_wsz_pos_skjl_sk_VO.string(JYLSH)").value = card.sysTrace; // 流水号
	document.all("zs_wsz_pos_skjl_sk_VO.string(KH)").value = card.cardNo; // 银行卡号

	// if(card.errorNo != null && card.errorNo != "" ){
	document.all("zs_wsz_pos_skjl_sk_VO.string(HSFHZ)").value = card.errorNo; // 返回值
	// }

}

/*
 * 征收页面中POS管理
 */
function zs_posgl_cardPay() {
	var teller = null;
	var amount = null;

	teller = document.all("zs_wsz_pos_skjl_gl_VO.string(CZYBM)").value; // 操作员编号
	amount = document.all("zs_wsz_pos_skjl_gl_VO.string(POSSJJNE)").value; // POS格式的支付金额

	card.cardPay(teller, amount);
	document.all("zs_wsz_pos_skjl_gl_VO.string(ZDH)").value = card.tid; // 终端号
	document.all("zs_wsz_pos_skjl_gl_VO.string(JYLSH)").value = card.sysTrace; // 流水号
	document.all("zs_wsz_pos_skjl_gl_VO.string(KH)").value = card.cardNo; // 银行卡号

	// if(card.errorNo != null && card.errorNo != "" ){
	document.all("zs_wsz_pos_skjl_gl_VO.string(HSFHZ)").value = card.errorNo; // 返回值
	// }

	// document.all.("zs_wsz_pos_skjl_gl_VO.string(HSFHZ)").value=card.fhz;
	// //返回值

}

/** *回车键到下一个文本框，如果有多行文本框时有问题*** */
function pf_ChangeFocus() {
	key = window.event.keyCode;
	if (key == 0xD) /* 0xD */
	{
		window.event.keyCode = 9;
	}
	if (key == 0x8) /* 0xD */
	{
		// return false;
	}
}

var href;
function linkConfirm(link, message) {
	if (href == null) {
		href = link.href;
	}
	if (!confirm(message)) {
		link.href = "#";
	} else {
		link.href = href;
	}
}

/* CheckBoxList标签使用 */
function fieldChecked(sign) {
	var thisCom = event.srcElement;
	var checkComName = new String(thisCom.name);
	var hiddenComName = checkComName.substring(0, checkComName.length - 2);

	var hiddenCom = eval("document.all('" + hiddenComName + "')");
	var checkComs = eval("document.all('" + checkComName + "')");

	var checkedVal = "";
	for (var i = 0; i < checkComs.length; i++) {
		if (checkComs[i].checked == true) {
			checkedVal = checkedVal + checkComs[i].value + sign;
		}
	}
	checkedVal = checkedVal.substring(0, checkedVal.length - 1);
	// alert(checkedVal);
	hiddenCom.value = checkedVal;
}

/* 通用查询平台使用函数 开始 */

function fieldCheckGroup(sign) {
	var thisCom = event.srcElement;
	var checkComName = new String(thisCom.name);
	var hiddenComName = checkComName.substring(0, checkComName.length - 2);
	var hiddenCom = eval("document.all('" + hiddenComName + "')");
	var checkComs = eval("document.all('" + checkComName + "')");
	var splits = hiddenCom.value.split(",");
	var checkedVal = "";
	for (var i = 0; i < splits.length; i++) {
		if (checkComs.value != splits[i]) {
			if (checkedVal == "") {
				checkedVal = splits[i];
			} else {
				checkedVal = checkedVal + "," + splits[i];
			}
		}
	}
	if (checkComs.checked == true) {
		if (checkedVal == "") {
			checkedVal = checkComs.value;
		} else {
			checkedVal = checkedVal + "," + checkComs.value;
		}
	}
	hiddenCom.value = checkedVal;
}
/**
 * 上面的函数下一版本将取消
 */
function fieldCheckGroup(sign, hiddenName) {
	var thisCom = event.srcElement;
	var checkComName = new String(thisCom.name);
	var hiddenComName = hiddenName;
	var hiddenCom = eval("document.all('" + hiddenComName + "')");
	var checkComs = thisCom;
	var splits = hiddenCom.value.split(sign);
	var checkedVal = "";
	for (var i = 0; i < splits.length; i++) {
		if (checkComs.value != splits[i]) {
			if (checkedVal == "") {
				checkedVal = splits[i];
			} else {
				checkedVal = checkedVal + sign + splits[i];
			}
		}
	}
	if (checkComs.checked == true) {
		if (checkedVal == "") {
			checkedVal = checkComs.value;
		} else {
			checkedVal = checkedVal + sign + checkComs.value;
		}
	}
	hiddenCom.value = checkedVal;
}

function pageResize() {
	gridBody.style.width = grid.clientWidth;
}

function searching() {
	search.style.display = "";
	input.style.display = "none";
}

function high(obj) {
	obj.style.background = 'rgb(220,232,236)';
	obj.style.border = '1px solid red';
}

function low(obj) {
	if (obj.className == 'odd') {
		obj.style.background = 'white';
	} else if (obj.className == 'even') {
		obj.style.background = 'rgb(237,239,240)';
	}
}

var setexport;
function windowExport(theURL, winName, features) {
	setexport = window.open(theURL, winName, features);
	setexport.focus();
}

var report;
function windowReport(theURL, winName, features) {
	/*
	 * var temp = document.all('openType'); var openType; for(var i=0; i<temp.length;
	 * i++) { if(temp[i].checked == true) { openType = temp[i].value; break; } }
	 * 
	 * //alert(openType); var url; if(openType == "HTML") { url = theURL; } else {
	 * url = theURL + "&outtype=" + openType; }
	 */
	// alert(url);
	report = window.open(theURL, winName, features);
	report.focus();
}

function switchSysBar(flag) {
	if (flag == 3) {
		top.fstMain.cols = "0,*";
	} else {
		top.fstMain.cols = "155,*";
	}
}

function lockCol(tblID) {

	var table = document.getElementById(tblID);
	var button = document.getElementById('toggle');
	var cTR = table.getElementsByTagName('TR'); // collection of rows

	if (table.rows[0].cells[0].className == '') {
		for (i = 0; i < cTR.length; i++) {
			var tr = cTR.item(i);
			tr.cells[0].className = 'locked'
		}
	} else {
		for (i = 0; i < cTR.length; i++) {
			var tr = cTR.item(i);
			tr.cells[0].className = ''
		}
	}
}

/* 通用查询使用函数 结束 */

/* 调用多选按钮 */
function openMultiSearchWin(s, s1, s2) {
	openMultiSearchWin(s, s1, s2, 'true');
}

function openMultiSearchWin(s, s1, s2, multiSelect) {
	if (multiSelect == null) {
		multiSelect = 'true';
	}
	var url = '/commons/MultiSearch.jsp?';
	var dmname = s1;
	url = url + '&dmname=' + dmname;
	var mcname = s2;
	url = url + '&mcname=' + mcname;
	var classname = s;
	url = url + '&classname=' + classname;
	var dm = eval("document.all('" + s1 + "').value");
	url = url + '&dm=' + dm;
	var mc = eval("document.all('" + s2 + "').value");
	url = url + '&mc=' + mc;

	url = url + '&multiSelect=' + multiSelect;

	var windowName = 'MultiSearch';
	var vWidth = 600;
	var vleft = 20;
	var features = 'height=500, width=' + vWidth + ', top=20, left=' + vleft + ', toolbar=no, menubar=no, scrollbars=YES, resizable=YES,location=no, status=yes';
	var child;
	if (child && child.open && !child.closed) { // 窗口已打开
		child.focus();
	} else {
		child = window.open(url, windowName, features);
		child.focus();
	}
}

// ==========================================================
/* 弹出纳税人查询页面 */
var nsrQryWnd;
function openNsrQryWnd() {
	if (nsrQryWnd) {
		nsrQryWnd.close();
	}

	var wndurl = "/commons/NsrInfoSearch.jsp";
	var wndnme = "nsrQryWnd";
	var wndstyle = "toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizeable=1,top=5,left=5,width=600,height=400";
	nsrQryWnd = window.open(wndurl, wndnme, wndstyle);
}
function compareDate(checkStartDate, checkEndDate, msg) {
    if(checkStartDate != null && checkEndDate != null) {
			var d1 = new Date(checkStartDate.replace(/-/g,"/"));  // 把所有的“-”转成“/”
			var d2 = new Date(checkEndDate.replace(/-/g,"/"));
			if(Date.parse(d2) > Date.parse(d1)) {
				alert(msg);
				return false;
			}  else {
				return true;
			}
	}
    return true;
}
/**
 * 只能是数字的录入效验
 */
function checkInputOfNum(obj) {
	var reg=/^[0-9]+$/;
	if(!reg.test(obj.value)){
	    alert("您输入的格式不正确,须全数字的格式。\n请重新输入！");
	    obj.value="";
	    obj.focus();
	    return false;
	  }
	  return true;
}
/**
 * 不能含有<>符号的录入效验
 */
function checkInputOfTag(obj) {
	var reg=/[\<]+|[\>]+/;
	if(reg.test(obj.value)){
	    alert("您输入的格式不正确,不能含有特殊字符。\n请重新输入！");
	    obj.value="";
	    obj.focus();
	    return false;
	  }
	  return true;
}

function checkInputNum() {
	chars= "0123456789+-.";
	e = window.event;
	eChar = String.fromCharCode(e.keyCode);
	if (chars.indexOf(eChar) <= -1) {
		window.event.keyCode=0;
	}
}

function checkInputNumAndChar() {
	chars= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	e = window.event;
	eChar = String.fromCharCode(e.keyCode);
	if (chars.indexOf(eChar) <= -1) {
		window.event.keyCode=0;
	}
}



function compareDate(checkStartDate, checkEndDate, msg) {
    if(checkStartDate != null && checkEndDate != null) {
			var d1 = new Date(checkStartDate.replace(/-/g,"/"));  // 把所有的“-”转成“/”
			var d2 = new Date(checkEndDate.replace(/-/g,"/"));
			if(Date.parse(d2) > Date.parse(d1)) {
				alert(msg);
				return false;
			}  else {
				return true;
			}
	}
    return true;
}
 function validateLength(e,value) {
	 var s=value.split("|");
	 var val = trim(e.value);
	 for(var i=0;i<s.length;i++){
		 if(val.length==s[i]){
		   setNormalStyle(e);
		   e.title = "";
		   return true;
		  }
    }
	e.title = "该输入项输入长度为误";
	 setErrorStyle(e);
	validatemessages = validatemessages + "<p>" + e.fieldname +
	"输入长度为误，应为"+value.replace("|","或").replace("|","或").replace("|","或").replace("|","或")+"位!"
	 + "</p>";
	 return false;

 }
function isBbbs(){
  var url = location.href;
  return (url.indexOf("/bbbs") >= 0);
}