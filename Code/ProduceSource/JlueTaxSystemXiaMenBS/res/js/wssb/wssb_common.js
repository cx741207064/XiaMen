/***************************************
 *            厦门地税网站改造
 * 网上申报通用JavaScript函数*
 *
 **************************************/

/**
 * 计算应纳税额，计算规则是：
 * 地方税：		应纳税额＝计税金额×税率
 * 个人所得税： 应纳税额＝应纳税所得额×税率－速算扣除数
 * 企业所得税： 应纳税额＝应纳税所得额×税率
 * 参数：
 *   jsje：计税金额，对于所得税来说，是应纳税所得额
 *   sl：税率
 *   sskcs：速算扣除数，对于地方税，赋0
 *   type：税的类型，地方税--1；个人所得税--2；企业所得税--3；车船税--4
 *   ccs_yf：车船税申报的月份数
 *返回值：
 *   应纳税额值
 */
function getYnse(jsje, sl, sskcs, type ,ccs_yf) {
  if(!isNumeric(jsje) || !isNumeric(sl)) return 0;
  if(!isNumeric(sskcs)) sskcs = 0;  sskcs = parseFloat(sskcs);
  var ynse = parseFloat(jsje) * Math.abs(parseFloat(sl));
  if(type == 2) ynse = ynse - sskcs;    //如果是个人所得税，则减去速算扣除数
  ynse = toFixedNum(ynse, 2);
  if (type == 4) {
    ynse = toFixedNum(ynse / 12 * ccs_yf , 2);
  }
  //如果计算出的应纳税额为负数，则自动置为0
  if(ynse<0) ynse = 0;
  return ynse;
}

/**
 * 计算实际缴纳额，计算规则是：
 * 地方税：		实际缴纳额＝应纳税额－抵扣额（减免额）
 * 个人所得税： 实际缴纳额＝应纳税额－抵扣额（减免额）
 * 企业所得税： 不用该公式计算
 * 计算出的实际缴纳额小于0时，取0值
 * 参数：
 *   ynse：应纳税额
 *   dke：抵扣额或减免额
 *   jme：减免额
 *   wwsjme：无文书减免额
 *返回值：
 *   实际缴纳额
 */
function getSjjne(ynse, dke, jme, wwsjme) {
  if(!isNumeric(ynse)) ynse = 0;
  if(!isNumeric(dke)) dke = 0;
  if(!isNumeric(jme)) jme = 0;
  if(!isNumeric(wwsjme)) wwsjme = 0;

  var sjjne = parseFloat(ynse) - parseFloat(dke) - parseFloat(jme) - parseFloat(wwsjme);
  sjjne = toFixedNum(sjjne, 2);;
  if(sjjne<0) sjjne = 0;
  return sjjne;
}

/**
 * 计算减免抵扣合计
 * 不定参数，但至少有一个
 */
function getJmDkTotal() {
  var num = arguments.length;
  if(num < 1) return 0;
  var total = 0.0;
  for(ii=0; ii<num; ii++) {
    if(!isNumeric(arguments[ii])) continue;
    total += parseFloat(arguments[ii]);
  }
  return total;
}

/**
 * 检测是否是内资企业。
 * 前提是必须根据Session中的内容在页面上写上djzclx_dm标志
 */
function checkNzqy() {
  var wz = new Array("200", "210", "220", "230", "240", "250", "251", "252", "253", "254", "259", "300", "310", "320", "330", "340", "350", "351", "352", "353", "354", "359");
  var ifNz = true;
  if(isEmpty(djzclx_dm)) djzclx_dm = "100";
  if (wz.indexOf(djzclx_dm) > -1) {
	  ifNz = false;
  }
  //return ifNz;
  //外资同内资修改
  return true;
}

/**
 * 检测是否是内资企业。
 * 前提是必须根据Session中的内容在页面上写上djzclx_dm标志
 */
function checkNzqyTMP() {
  var wz = new Array("200", "210", "220", "230", "240", "250", "251", "252", "253", "254", "259", "300", "310", "320", "330", "340", "350", "351", "352", "353", "354", "359");
  var ifNz = true;
  if(isEmpty(djzclx_dm)) djzclx_dm = "100";
  if (wz.indexOf(djzclx_dm) > -1) {
	  ifNz = false;
  }
  return ifNz;
}


/******************************************/
//打开税种税目输入框
function callDialog(obj){
  showModalDialog("/wssb/szsm.html",obj,"status:false;dialogWidth:400px;dialogHeight:180px;status:no;center:yes;resizable:yes;scroll:no");
}

//根据税种代码取税种代码记录
function getSzRecord(sz_id, szList) {
  var ret;
  for(var ii=0; ii<szList.length; ii++) {
    if(szList[ii][0] == sz_id) {
      ret = szList[ii];
      break;
    }
  }
  return ret;
}

//根据税目代码取税目代码记录
function getSmRecord(sm_id, smList) {
  var ret;
  for(var ii=0; ii<smList.length; ii++) {
    if(smList[ii][0] == sm_id) {
      ret = smList[ii];
      break;
    }
  }
  return ret;
}

/**
 * 根据税种税目设置税款所属期默认值
 * szObj 税种代码框
 * smObj 税目代码框
 * ssqsObj 税款所属期始输入框
 * ssqzObj 税款所属期止输入框
 * sblx 申报类型（可选）
 */
function setSkssq(szObj, smObj, ssqsObj, ssqzObj, sblx) {
/*
  if(szObj.value == "04") {    //企业所得税
    var sblx = getObj("sblx").value;
    if (sblx == "jd"){
      ssqsObj.value=beginDay_qy_year;
      ssqzObj.value=endDay_qy_quarter;
    }else if (sblx == "nd"){
      ssqsObj.value = lastYear;
    }else if (sblx == "yf"){
      ssqsObj.value=beginDay_other;
      ssqzObj.value=endDay_other;
    }
  } else if(szObj.value == "07" || szObj.value == "31") {  //房产税(内资适用)或城市房产税（外资适用）
    if(smObj.value =="070500" || smObj.value == "070501" || smObj.value =="310500" || smObj.value == "310501") {  //出租
      ssqsObj.value=beginDay_fc_cz;
      ssqzObj.value=endDay_fc_cz;
    } else {  //原值
      ssqsObj.value=beginDay_fc_yz;
      ssqzObj.value=endDay_fc_yz;
    }
  } else if(szObj.value == "14") {  //土地使用税
    ssqsObj.value=beginDay_td;
    ssqzObj.value=endDay_td;
  } else if(szObj.value == "02" && smObj.value == "020304") {  //营业税-其他金融
    ssqsObj.value=beginDay_jr;
    ssqzObj.value=endDay_jr;
  } else {
    ssqsObj.value=beginDay_other;
    ssqzObj.value=endDay_other;
  }
  */
  var _SZ_DM = szObj.value;
  var _SM_DM = smObj.value;
  var sblxObj = getObj("sblx");
  var _SBLX = "";
  if(sblxObj) _SBLX = sblxObj.value;
  if(sblx) _SBLX = sblx;
  var defaultSkssq = getDefaultSkssq(_SZ_DM, _SM_DM, _SBLX);
  ssqsObj.value = defaultSkssq["SKSSQS"];
  ssqzObj.value = defaultSkssq["SKSSQZ"];
  return defaultSkssq;
}

/**
 * 根据税种、税目、税款所属期和申报类型取得默认的税款所属期
 * @param SZ_DM
 * @param SZ_DM
 * @param SBLX
 */
function getDefaultSkssq(SZ_DM, SM_DM, SBLX) {
  var defaultSkssq = new Array();
  //alert("SZ_DM: "+SZ_DM+", SM_DM: "+SM_DM + ", SBLX: "+SBLX);
  if(SZ_DM == "04") {
    //企业所得税
    if (SBLX.toLowerCase() == "jd"){
      //季度申报
      //defaultSkssq["SKSSQS"] = beginDay_qy_year;
      defaultSkssq["SKSSQS"] = QYSDS_JB_YEAR;
      defaultSkssq["SKSSQZ"] = endDay_qy_quarter;
    }else if (SBLX.toLowerCase() == "nd"){
      //年度申报
      defaultSkssq["LAST_YEAR"] = lastYear;
      //defaultSkssq["SKSSQS"] = lastYear + "-01-01";
      //defaultSkssq["SKSSQZ"] = lastYear + "-12-31";
      defaultSkssq["SKSSQS"] = lastYear;
      defaultSkssq["SKSSQZ"] = lastYear;
    }else if (SBLX.toLowerCase() == "yf"){
      //月份申报
      defaultSkssq["SKSSQS"] = beginDay_other;
      defaultSkssq["SKSSQZ"] = endDay_other;
    }
  } else if(SZ_DM == "07" || SZ_DM == "31") {
    //房产税(内资适用)或城市房产税（外资适用）
    if(SM_DM =="070500" || SM_DM == "070501" || SM_DM =="310500" || SM_DM == "310501") {
      //出租
      defaultSkssq["SKSSQS"] = beginDay_fc_cz;
      defaultSkssq["SKSSQZ"] = endDay_fc_cz;
    } else {
      //原值
      defaultSkssq["SKSSQS"] = beginDay_fc_yz;
      defaultSkssq["SKSSQZ"] = endDay_fc_yz;
    }
  } else if(SZ_DM == "14") {
    //土地使用税
    defaultSkssq["SKSSQS"] = beginDay_td;
    defaultSkssq["SKSSQZ"] = endDay_td;
  //} else if(SM_DM == "020304" || SM_DM == "020301" || SM_DM == "020391") {
  } else if(SBLX=="JB") {
	    //营业税-其他金融，营业税-银行，营业税-金融保险业(试点信用社)
	    defaultSkssq["SKSSQS"] = beginDay_jr;
	    defaultSkssq["SKSSQZ"] = endDay_jr;
  }else if(SM_DM == "020301" || SM_DM == "020391") {
    //营业税-其他金融，营业税-银行，营业税-金融保险业(试点信用社)
    defaultSkssq["SKSSQS"] = beginDay_jr;
    defaultSkssq["SKSSQZ"] = endDay_jr;
  } else if(SZ_DM == "06" && (SM_DM == "060200" || SM_DM == "060300")){
    //个体户生产经营所得、企事业单位承租承包经营所得年度申报
    if(typeof(sfndsbObj)!="undefined" && sfndsbObj!=null && sfndsbObj.checked){
      defaultSkssq["SKSSQS"] = GRSDS_SCJYCZCB_ND_SKSSQS;
      defaultSkssq["SKSSQZ"] = GRSDS_SCJYCZCB_ND_SKSSQZ;
    }else{
      defaultSkssq["SKSSQS"] = beginDay_other;
      defaultSkssq["SKSSQZ"] = endDay_other;
    }
  } else if(SZ_DM == "08"){ //车船税按年申报
    defaultSkssq["SKSSQS"] = thisYear + "-01-01";
    defaultSkssq["SKSSQZ"] = thisYear + "-12-31";
  } else if (SBLX.toUpperCase() == "JA_ZCSB"){
    defaultSkssq["SKSSQS"] = JA_ZCSB_SKSSQS;
    defaultSkssq["SKSSQZ"] = JA_ZCSB_SKSSQZ;
  } else if (SBLX.toUpperCase() == "JA_DKDJSB"){
    defaultSkssq["SKSSQS"] = JA_DKDJSB_SKSSQS;
    defaultSkssq["SKSSQZ"] = JA_DKDJSB_SKSSQZ;
  } else if (SBLX.toUpperCase() == "JA_YHSSB"){
    defaultSkssq["SKSSQS"] = JA_YHS_SKSSQS;
    defaultSkssq["SKSSQZ"] = JA_YHS_SKSSQZ;
  } else if (SBLX.toUpperCase() == "JA_FJSFSB"){
    defaultSkssq["SKSSQS"] = JA_FJSF_SKSSQS;
    defaultSkssq["SKSSQZ"] = JA_FJSF_SKSSQZ;
  } else if (SBLX.toUpperCase() == "JA_SDSSB"){
    defaultSkssq["SKSSQS"] = JA_SDS_SKSSQS;
    defaultSkssq["SKSSQZ"] = JA_SDS_SKSSQZ;
  } else {
    defaultSkssq["SKSSQS"] = beginDay_other;
    defaultSkssq["SKSSQZ"] = endDay_other;
  }
  return defaultSkssq;
}


//把小数圆整到指定位小数
function toFixedNum(val1, val2) {
  if(!isNumeric(val1)) return 0;
  if(!isNumeric(val2)) return val1;
  //2005-12-14更改
  var num = new Number(val1);
  return num.toFixed(val2);
}

/*********************************/
//函数增强扩展
isDate=function(d){
  return d.constructor==Date;
}
isEmpty=function(val) {
  val = new String(val);
  if(val == null || (val.trim()) == "") return true;
  return false;
}
isNull=function(n){
  return n==null;
}
isNumeric=function(i){
  if(isEmpty(i)) return false;
  return !isNaN(i);
}
isObject=function(o){
  return typeof(o)=="object";
}
GetQueryString=function(str){
  var rs=new RegExp("(^|)"+str+"=([^\&]*)(\&|$)","gi").exec(String(window.location.href)),tmp;
  if(tmp=rs)return tmp[2];
  return null;
}
toFloat=function(str) {
  if(isNaN(str)) return 0.00;
  if(str==null) return 0.00;
  var ret = str * 1.00;
  return ret;
}
/*******************************************/


/**************************************************/
//通用函数
//年月日输入掩码
function dateMask(){
  var obj = event.srcElement;
  var chr = String.fromCharCode(event.keyCode);
  if(chr<'0' || chr>'9')
    if(!(event.keyCode==8 || event.keyCode==37 || event.keyCode==39 || event.keyCode==46))
      return false;

  if(obj.value.length>=10) return false;
  if((event.keyCode!=8) && (obj.value.length==4 || obj.value.length==7))	obj.value = obj.value + "-";
}
//年月日检测
function dateCheck(str){
  if(str.length<1) return true;
  var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
  var arr = reg.exec(str);
  if( ! reg.test(str)) return false;
  var d = null;
  d = new Date(RegExp.$1, (RegExp.$2 - 1), RegExp.$3);
  if(d == null) return false;
  if(d.getFullYear()!= RegExp.$1) return false;
  if(d.getMonth()!= (RegExp.$2 - 1)) return false;
  if(d.getDate()!= RegExp.$3)  return false;
  return true;
}
//年月输入检测
function dateMonthCheck(str){
  //alert(str);
  if(str.length<1) return true;
  var reg = /^(\d{4})-(\d{2})$/;
  var arr = reg.exec(str);
  if( ! reg.test(str)) return false;
  var d = new Date(RegExp.$1, (RegExp.$2 - 1), 1);
  if(d == null) return false;
  if(d.getFullYear()!= RegExp.$1)return false;
  if(d.getMonth()!= (RegExp.$2 - 1))return false;
  return true;
}
//年月输入掩码
function dateMonthMask() {
  var obj = event.srcElement;
  //不是数字
  var chr = String.fromCharCode(event.keyCode);
  //if(chr<'0' || chr>'9') {
  if(event.keyCode<48 || event.keyCode>57) {
    alert(event.keyCode);
    if(!(event.keyCode==8 || event.keyCode==37 || event.keyCode==39 || event.keyCode==46))
      return false;
  }
  if(obj.value.length>6)	return false;
  if((event.keyCode!=8) && (obj.value.length==4))	obj.value = obj.value + "-";
}

function getEndDayOfMonth(str) {
  if(str.length<7) return;
  var year = str.substr(0,4);
  var month = str.substr(5,2);
  month = month - 1;
  var day = "";
  switch(month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      day = "31";
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      day = "30";
      break;
    case 1:
      var d = new Date(year, month, 29);
      day = "29";
      if(d.getMonth() != month) day = "28";
      break;
  }
  if(month<9)
    return year + "-0" + (month + 1) + "-" + day;
  else
    return year + "-" + (month + 1) + "-" + day;
}

//数字输入掩码
function numberMask() {
  chars= "0123456789+-.";
  e = window.event;
    eChar = String.fromCharCode(e.keyCode);
  if(chars.indexOf(eChar)==-1) window.event.keyCode=0;
  if(eChar=="+" || eChar=="-" || eChar==".") {
    if(srcVal.length<1) window.event.keyCode=0;  //如果小数点前面没有任何字符，则不允许输入小数点
    if(srcVal.indexOf(eChar)>=0) window.event.keyCode=0;
  }
    if((window.event.srcElement.value+eChar).length>1)
        if(isNaN(window.event.srcElement.value+eChar))
            window.event.keyCode=0;
};

//指定小数位数的数字掩码
function numberMaskD( ws ) {
  chars= "0123456789+-.";
  e = window.event;
  eChar = String.fromCharCode(e.keyCode);
  if(chars.indexOf(eChar)==-1) window.event.keyCode=0;
  var srcVal = window.event.srcElement.value;
  if(eChar=="+" || eChar=="-" || eChar==".") {
    if((eChar=="+" ||  eChar==".") && srcVal.length<1) window.event.keyCode=0;
    if(srcVal.indexOf(eChar)>=0) window.event.keyCode=0;
  }
  if((window.event.srcElement.value + eChar).length>1) {
    if(ws == 0 && eChar==".") window.event.keyCode=0;
    else {
      if(eChar != "-") {
        var val_1 = window.event.srcElement.value + eChar;
        var val_2 = val_1.split(".");
        if(val_2[1] && val_2[1].length > ws)
          window.event.keyCode=0;
      }
    }
  }
}


//根据名称取得对象，如果同名对象有多个，则只返回第一个
function getObj(objName) {
  var obj = document.getElementById(objName);
  if(obj == null || obj == undefined)
	  obj = document.getElementsByName(objName)[0];
  return obj;
}


/******************************/
//控件输入值检测
function isDateIn(obj) {
  if(!dateCheck(obj.value)) {
    alert('您输入的日期不正确。\n必须按“yyyy-mm-dd”（年－月－日）的格式输入，例如“2005-01-01”。\n请重新输入！');
    obj.value='';
    obj.focus();
    return false;
  }
  return true;
}

function isDateMonthIn(obj){
  if(!dateMonthCheck(obj.value)) {
    alert('您输入的年月不正确。\n必须按“yyyy-mm”（年－月）的格式输入，例如“2005-01”。\n请重新输入！');
    obj.value='';
    obj.focus();
    return false;
  }
  return true;
}

function isNumberIn(obj) {
  if(isNaN(obj.value)) {
    alert('必须输入数字，请重新输入！');
    obj.value='';
    obj.focus();
    return false;
  }
  return true;
}

function isLessNumberIn(obj, comp) {
  var num = new Number(obj.value);
  if(!isNumeric(comp)) return true;
  if(num.isLarge(comp)) {
    alert('输入的值不能大于 '+comp+'，请重新输入！');
    obj.value='';
    obj.focus();
    return false;
  }
  return true;
}

/**
 * 检测指定控件的值是否在指定范围内
 */
function checkNumRange(obj, minVal, maxVal) {
  if(!isNumberIn(obj)) {
    alert('输入的值不是数字，请重新输入！');
    obj.value='';
    obj.focus();
    return false;
  }
  var num = new Number(obj.value);
  if(isNumeric(minVal) && num.isLarge(minVal)) {
    alert('输入的值不能大于 '+minVal+'，请重新输入！');
    obj.value='';
    obj.focus();
    return false;
  }
  if(isNumeric(maxVal) && num.isLess(maxVal)) {
    alert('输入的值不能大于 '+maxVal+'，请重新输入！');
    obj.value='';
    obj.focus();
    return false;
  }
  return true;
}
/*************************************************/
//调试函数，会在页面最下方打印出调信息
function debug(msg) {
  msg = "<span style=\"font-size: 9pt;\">"+msg+"</span>"
  document.body.insertAdjacentHTML('beforeEnd',msg);
}
function debugln(msg) {
  msg += "<br>";
  debug(msg);
}


/************************************************/
//网上申报检测函数

//输入框重置函数，第一个参数是要重置的控件，第二个参数可选，是提示信息
function reject() {
  var params = arguments;
  if(params.length < 1) return;
  if(params[1]) alert(params[1]);
  if(params[0]) {
  params[0].value = "";
  params[0].focus();
  }
}

/******************************************/
//设置获得焦点控件背景色
var allInputObjs;
var highlight = "#00C3FF";
var oldOnload_wssb_common = null;
if(window.onload) oldOnload_wssb_common = window.onload;
window.onload = function() {
  if(oldOnload_wssb_common) {
    oldOnload_wssb_common();
  }
  if (document.getElementsByTagName)
    allInputObjs = document.getElementsByTagName('INPUT');
  else if (document.all)
    allInputObjs = document.all.tags('INPUT');
}

/*
function doOnFocusChangeBGColor() {
  for(var ii=0; ii<allInputObjs.length; ii++) allInputObjs[ii].style.backgroundColor="";
  if(event != null) {
    var obj = event.srcElement;
    if(obj != null) {
    obj.style.backgroundColor=highlight;
    return true;
    }
  }
}
*/
function doOnFocusBGColor() {
  if(event != null) {
    var obj = event.srcElement;
    if(obj != null) {
    obj.style.backgroundColor=highlight;
    //return true;
    obj.onfocus();
    }
  }
}

function doOnBlurBGColor() {
  if(event != null) {
    var obj = event.srcElement;
    if(obj != null) {
    obj.style.backgroundColor="";
//    return true;
    obj.onblur();
    }
  }
}


//截除掉触发事件的控件的值前后空格
function trimObjValue() {
  var obj = event.srcElement;
  if(obj) {
  if(obj.value) obj.value = obj.value.trim();
  }
}

//2006-01-12新增
function showTip(msg, width, height, style) {
  var tipWidth=200;
  if(width != null) tipWidth = width;
  var tipHeight=50;
  if(height != null) tipHeight= height;
  var doc_width=document.body.clientWidth;
  var doc_height=document.body.clientHeight;
  var left = (doc_width - tipWidth) / 2;
  var top = (doc_height - tipHeight) / 2;
  var fontStyle="color: #FF0000; fint-size: 14pt; font-weight: bold";
  if(style != null) fontStyle = style;
  var inHTML = "<font style='"+fontStyle +"'><br>"+msg+"</p>";
  tipBox = document.createElement("<div id=tipLayer style='position: absolute; left: "+left+"; top: "+top+"; width: "+tipWidth+"; height: "+tipHeight+"; z-index: 100'>");
  tipBox.innerHTML = inHTML;
  tipBox.style.textAlign 	  = "center";
  tipBox.style.verticalAlign  = "middle";
  tipBox.style.position 	   = "absolute";
  tipBox.style.border 	   = "1 solid black";
  tipBox.style.backgroundColor = "#EEEEEE";
  tipBox.style.display 	    = "inline";
  tipBox.style.zIndex 	   = "999";
  document.body.insertBefore(tipBox);
}


/**
 * 申报的税款所属期有效性校验
 * @param SKSSQArray 税款所属期始止的数组
 * @param SBBLX “YB”：月报，“JB”：季报，“NB”：年报
 * 测试数据如下：
var testdata = new Array(
{"SKSSQS":"2005-01-01", "SKSSQZ":"2005-01-31", "SBBLX":"YB"},
{"SKSSQS":"2005-01-01", "SKSSQZ":"2005-01-20", "SBBLX":"YB"},
{"SKSSQS":"2005-01-01", "SKSSQZ":"2005-03-31", "SBBLX":"JB"},
{"SKSSQS":"2005-01-01", "SKSSQZ":"2005-02-20", "SBBLX":"JB"},
{"SKSSQS":"2005-01-01", "SKSSQZ":"2005-12-31", "SBBLX":"NB"},
{"SKSSQS":"2005-01-01", "SKSSQZ":"2005-06-20", "SBBLX":"NB"}
);
for(ii=0; ii<testdata.length; ii++){
  var ret = SKSSQValidate(testdata[ii], testdata[ii]["SBBLX"]);
  alert("New : " + testdata[ii]["SKSSQS"]+", "+testdata[ii]["SKSSQZ"]);
}
 */
function SKSSQValidate(SKSSQArray, SBBLX) {
  if(typeof(SBBLX)=="undefined" || SBBLX==null) SBBLX = "YB";
  SBBLX = SBBLX.toUpperCase();
  var dSKSSQS = SKSSQArray["SKSSQS"].toDate();
  var dSKSSQZ = SKSSQArray["SKSSQZ"].toDate();
  var SZ_DM = SKSSQArray["SZ_DM"];
  var SM_DM = SKSSQArray["SM_DM"];
  //alert("dSKSSQS.compareTo(dSKSSQZ): "+dSKSSQS.compareTo(dSKSSQZ));
  if(dSKSSQS > dSKSSQZ) {
    alert("税款所属期始不能晚于税款所属期止！");
    return false;
  }
//  alert("dSKSSQS : "+dSKSSQS.format("yyyy-MM-dd")+",  dSKSSQZ : "+dSKSSQZ.format("yyyy-MM-dd"));
  switch(SBBLX){
    case "YB":  //月报
      var _lastDay = dSKSSQZ.getLastDayOfMonth();
      if(dSKSSQS.getDate() != 1 || dSKSSQZ.getDate() != _lastDay.getDate() || dSKSSQS.getYear() != dSKSSQZ.getYear()
        || dSKSSQS.getMonth() != dSKSSQZ.getMonth()){
        alert("月份申报的税款所属期只能是同一个月第一天到最后一天。");
        SKSSQArray["SKSSQS"] = SKSSQArray["SKSSQS"].substr(0, 7)+"-01";
        SKSSQArray["SKSSQZ"] = dSKSSQS.getLastDayOfMonth().format("yyyy-MM-dd");
        return false;
      }
      break;
    case "JB":  //季报
      var _firstDay = dSKSSQS.getFirstDayOfQuarter();
      var _lastDay = dSKSSQZ.getLastDayOfQuarter();
      if(!_firstDay.getTime() == dSKSSQS.getTime()  || !_lastDay.getTime() == dSKSSQZ.getTime()  || dSKSSQS.getYear() != dSKSSQZ.getYear()
        ||dSKSSQS.getQuarter()!=dSKSSQZ.getQuarter()){
        alert("季度申报的税款所属期只能是该季度首月第一天至末月最后一天。");
        SKSSQArray["SKSSQS"] = _firstDay.format("yyyy-MM-dd");
        SKSSQArray["SKSSQZ"] = _firstDay.getLastDayOfQuarter().format("yyyy-MM-dd");
        return false;
      }
      break;
    case "NB":  //年报
      var _firstDay = new Date(dSKSSQS.getYear(), 0, 1);
      var _lastDay = new Date(dSKSSQZ.getYear(), 11, 31);
      if(!_firstDay.getTime() == dSKSSQS.getTime()  || !_lastDay.getTime() == dSKSSQZ.getTime()  || dSKSSQS.getYear() != dSKSSQZ.getYear()){
        alert("年度申报的税款所属期只能是同一年的1月1日到12月31日。");
        SKSSQArray["SKSSQS"] = _firstDay.format("yyyy-MM-dd");
        SKSSQArray["SKSSQZ"] = (new Date(_firstDay.getYear(), 11, 31)).format("yyyy-MM-dd");
        return false;
      }
      break;
    case "YJB":
      var _result = true;
      var _lastDay = dSKSSQZ.getLastDayOfMonth();
      if(dSKSSQS.getDate() != 1 || dSKSSQZ.getDate() != _lastDay.getDate() || dSKSSQS.getYear() != dSKSSQZ.getYear()
        || dSKSSQS.getMonth() != dSKSSQZ.getMonth()){
        //alert("月份申报的税款所属期只能是同一个月第一天到最后一天。");
        //SKSSQArray["SKSSQS"] = SKSSQArray["SKSSQS"].substr(0, 7)+"-01";
        //SKSSQArray["SKSSQZ"] = dSKSSQS.getLastDayOfMonth().format("yyyy-MM-dd");
        _result = false;
      }
      //如果按月检测不通过，则按季检测
      if(!_result){
        var _firstDay = dSKSSQS.getFirstDayOfQuarter();
        _lastDay = dSKSSQZ.getLastDayOfQuarter();
        if(!_firstDay.getTime() == dSKSSQS.getTime()  || !_lastDay.getTime() == dSKSSQZ || dSKSSQS.getYear() != dSKSSQZ.getYear()
          ||dSKSSQS.getQuarter()!=dSKSSQZ.getQuarter()){
          //alert("季度申报的税款所属期只能是同一季度的第一个月第一天到最后一月最后一天。");
          //SKSSQArray["SKSSQS"] = _firstDay.format("yyyy-MM-dd");
          //SKSSQArray["SKSSQZ"] = _firstDay.getLastDayOfQuarter().format("yyyy-MM-dd");
          _result = false;
        }else{
          _result = true;
        }
      }
      if(!_result) {
        var _msg = "对于税目是[营业税-银行]或[营业税-金融保险业(试点信用社)]的，\n"
                 + "如果按月申报，税款所属期必须是同一个月第一天到最后一天；\n"
                 + "如果按季申报，税款所属期必须是同一季度的第一个月第一天到最后一月最后一天。\n"
                 + "对于注册类型是“（港澳台商）外企常驻代表机构”或“外国企业常驻代表机构”的，\n"
                 + "[营业税]必须按季申报，税款所属期必须是同一季度的第一个月第一天到最后一月最后一天。\n";
        alert(_msg);
        return false;
      }
      break;
    default:
      alert("未指定申报类型或者指定的申报类型不存在。");
      return false;
      break;
  }
  return true;
}

/**
 * 逾期申报检测类
 */
function YsqbChecker() {
  this._yqsbMsg = "对不起，现在不是您所申报的税种税目的正常申报时期，请确认税款所属期填写是否有误。凡非申报期内要进行纳税申报的，请您到税务部门办税服务中心进行申报。";
  this._tqsbMsg = "提醒：您录入的税款所属期大于当期，请确认税款所属期填写是否有误。如确认要提前进行申报的，点“确定”后可继续进行申报。";
  this._ajaxobj = new AJAXRequest();        //创建AJAX对象

  this.SZ_DM = "";          //税种代码
  this.SM_DM = "";          //税目代码
  this.SKSSQS = "";         //税款所属期始
  this.SKSSQZ = "";         //税款所属期止
  this.SWJG_QJ_DM = "";     //税务机关代码
  this.SBBLX_DM = "";       //申报表类型
  this.SBLB_DM = "";        //申报类别代码
  this.SBFS_DM = "";        //申报方式代码
  this.GSMXBBLX_DM = "";    //个税明细报表类型
  this.SF_BSSB = "";        //是否补税申报
  this.DELAY_DAYS = 0;      //对于一个特殊功能，业务要求限缴日期可以延后几天，延后天数就设置到此变量
  var XJRQ = false;         //限缴日期
  var DQSJ = "";			//当前时间
  var SFNDSBTS = false;     //是否特殊年度申报（逾期控制判断不同）

  /**
   * 根据指定年份和季度取得季度的第一天和最后一天日期
   */
  this._getQuarterDate = function(year, quarter) {
    var result = new Array();
    switch(quarter){
      case 1:
        result["RQS"] = year + "-01-01";
        result["RQZ"] = year + "-03-31";
        break;
      case 2:
        result["RQS"] = year + "-04-01";
        result["RQZ"] = year + "-06-30";
        break;
      case 3:
        result["RQS"] = year + "-07-01";
        result["RQZ"] = year + "-09-30";
        break;
      case 4:
        result["RQS"] = year + "-10-01";
        result["RQZ"] = year + "-12-31";
        break;
      default:
        result["RQS"] = year + "-01-01";
        result["RQZ"] = year + "-03-31";
    }
    return result;
  }

  /**
   * 校验税款所属期是否是是当期
   * @param SZ_DM 税种代码
   * @param SM_DM 税目代码
   * @param SBLX 申报类型
   * @param SKSSQS 税款所属期始
   * @param SKSSQZ 税款所属期始
   * @returm int -1:比默认所属期更早;0：与默认所属期相等;1：比默认所属期更早
   */
  this._checkSkssq = function() {
    //alert("in _checkSkssq...");
    var defaultSkssq = getDefaultSkssq(this.SZ_DM, this.SM_DM, this.SBLB_DM);
    if(this.SKSSQZ && defaultSkssq && defaultSkssq["SKSSQZ"]){
      if(this.SZ_DM == "10103") {
        //企业所得税申报的税款所属期不是标准是“yyyy-mm-dd”，所以不能转换成Date型值来比较
        if (this.SBLB_DM.toLowerCase() == "jd"){
          //季度申报
          if((this.SKSSQS+this.SKSSQZ) < (defaultSkssq["SKSSQS"]+defaultSkssq["SKSSQZ"]) ) return -1;
          if((this.SKSSQS+this.SKSSQZ) > (defaultSkssq["SKSSQS"]+defaultSkssq["SKSSQZ"]) ) return 1;
          var _year = this.SKSSQS;
          var _quarter = this.SKSSQZ;
          var _quarterDate = this._getQuarterDate(_year, _quarter * 1);
          this.SKSSQS = _quarterDate["RQS"];
          this.SKSSQZ = _quarterDate["RQZ"];
        }else if (this.SBLB_DM.toLowerCase() == "nd"){
          //年度申报
          if((this.SKSSQS) < (defaultSkssq["SKSSQS"]) ) return -1;
          if((this.SKSSQS) > (defaultSkssq["SKSSQS"]) ) return 1;

          this.SKSSQS = this.SKSSQS + "-01-01";
          this.SKSSQZ = this.SKSSQZ + "-12-31";
        }else if (this.SBLB_DM.toLowerCase() == "yf"){
          //月份申报，不用转换
          if(this.SKSSQZ.toDate() < defaultSkssq["SKSSQZ"].toDate()) return -1;
          if(this.SKSSQZ.toDate() > defaultSkssq["SKSSQZ"].toDate()) return 1;
        }
//        alert("QYSDS_SKSSQ: "+this.SKSSQS+", "+this.SKSSQZ);
        return 0;
      }else if(this.SBLB_DM.toUpperCase()=="YJB"){
        //对于营业税-银行，营业税-金融保险业(试点信用社)的代扣代缴申报，即既允许季度申报也允许月份申报，所属期按月份申报控制即可满足这两种情况
        var defaultSkssq = getDefaultSkssq("", "", "YB");
        //alert(defaultSkssq.length);
        if(this.SKSSQZ.toDate() < defaultSkssq["SKSSQZ"].toDate()) return -1;
        if(this.SKSSQZ.toDate() > defaultSkssq["SKSSQZ"].toDate()) return 1;
      }else{
      	if (this.SFNDSBTS) {
      		//判断月首、月末。参照其他的
      		return 0;
      	} else  {
          if(this.SKSSQZ.toDate() < defaultSkssq["SKSSQZ"].toDate()) return -1;
          if(this.SKSSQZ.toDate() > defaultSkssq["SKSSQZ"].toDate()) return 1;
      	}
      }
    }
    return 0;
  }

  /*
   * Ajax回调函数，输出响应内容
   */
  this._ajaxCallback=function(xmlObj) {
  	XJRQ = xmlObj.responseText;
  	XJRQ = eval("("+XJRQ+")");
    if(XJRQ!=null) {
	    XJRQ = XJRQ.split("#")[0].trim();
	    if (xmlObj.responseText.split("#").length > 1) {
    		DQSJ = xmlObj.responseText.split("#")[1].trim();
	    }
    }
  }

  /**
   * 检测限缴日期
   */
  this._checkXjrq = function() {
    content = "SZ_DM="+this.SZ_DM
      + "&SM_DM="+this.SM_DM
      + "&SKSSQS="+this.SKSSQS
      + "&SKSSQZ="+this.SKSSQZ
      + "&SWJG_QJ_DM="+this.SWJG_QJ_DM
      + "&SBBLX_DM="+this.SBBLX_DM
      + "&SBLB_DM="+this.SBLB_DM
      + "&SBFS_DM="+this.SBFS_DM
      + "&GSMXBBLX_DM="+this.GSMXBBLX_DM
      + "&SF_BSSB="+this.SF_BSSB  ;
    this._ajaxobj.content=content;
    this._ajaxobj.method="GET";                   //设置请求方式为POST
    this._ajaxobj.url="/common/ajax/check_xjrq.do?"+content;   //URL为"/login/checklogin.do"
    this._ajaxobj.async=false;                    //同步操作，以免检测结果不能改变登录方式
    this._ajaxobj.callback = this._ajaxCallback;
    this._ajaxobj.send();                   //发送请求
  }


  /**
   * 检测是否逾期申报
   * @return boolean true: 逾期申报，不允许提交; false： 当期申报或提交申报
   */
  this.checkIfYqsb = function() {
    //对于2008－05－31之前申报土地增值税的，不作逾期申报检验，并且也不判断是否跨月、跨年
    if(this.SZ_DM=="15" && today<"2008-06-01" ) return false;

    var tipBox = new TipBox();
    //alert("begin checkIfYqsb...");
    try{
      //检测税款所属期
      var ret = this._checkSkssq();
      if(ret==-1) {
        alert(this._yqsbMsg + "\r\n(SZ_DM:" + this.SZ_DM + ", SM_DM:" + this.SM_DM + ",SKSSQS:" + this.SKSSQS + ",SKSSQZ:" + this.SKSSQZ + ",DQSJ:" + DQSJ + ")");
        //alert(this._yqsbMsg);
        return true;
      }
      if(ret==1) {
        var ret1 = confirm(this._tqsbMsg);
        if(!ret1)
          return true;
        else
          return false;
      }
      //检测限缴日期
      //tipBox.showTip("正在校验数据，请稍候...", "checking");
      try{
        this._checkXjrq();
      }catch(exception){
        alert("检测是否在正常申报期时出错，错误信息是："+exception.description+"\r\n请重试。");
        return true;
      }
      this._ajaxobj.destory();
      //tipBox.hideTip("checking");
      //debugln("XJRQ: "+XJRQ);
      if(!XJRQ) {
        alert("检测是否在正常申报期时未取到申报截止日期，请重试");
        return true;
      }
      if(XJRQ.indexOf("ERROR")>=0) {
        alert("检测是否在正常申报期失败, 请重试。\n失败原因：" + XJRQ + "");
        return true;
      }
      XJRQ = XJRQ.toDate();
      var _today = today.toDate();
      if(this.DELAY_DAYS==null) this.DELAY_DAYS = 0;
      XJRQ = XJRQ.addTime(this.DELAY_DAYS, "d");
//      debugln("XJRQ: "+XJRQ+", today: "+_today);
      if( XJRQ < _today ) {
      	alert(this._yqsbMsg + "\r\n(SZ_DM:" + this.SZ_DM + ", SM_DM:" + this.SM_DM + ",SKSSQS:" + this.SKSSQS + ",SKSSQZ:" + this.SKSSQZ + ",DQSJ:" + DQSJ + ")");
        //alert(this._yqsbMsg);
        return true;
      }
    }catch(e) {
      alert("检测是否在正常申报期失败，请重试。\n错误原因："+e.description);
      return true;
    }
    return false;
  }
  /**
   * 环保税季度申报日期验证
   */
  this.checkJidu= function(_skssqs){
	  try{
		  if(_skssqs.length>0){
			  var year = parseInt(_skssqs.substring(0,5));
			  var month = parseInt(_skssqs.substring(5,7));
			  //计算出所属哪个季度
			  var zs = parseInt(month/3);    //当前月份除以3取整 
			  var ys = month%3;              //当前月份除以3取余数
			  var jiduNum = ys==0?zs:zs+1;   //判断是否有余数，有余数的话zs+1
			 
			return  this._getQuarterDate(year, jiduNum);	 
		  }else{
			  return null;
		  }}
	  catch(e){
			 return null;
	  }
  }
}

/**
 * 邮件重发JS弹窗_以及其他弹窗
 */
function wssbMailResend(openUrls) {
	var wssbMrilResendWin = window.showModalDialog(openUrls,window,'dialogWidth:975px;dialogHeight:500px;center:yes;status:0;help:0;edge:sunken;scroll:auto');
	return wssbMrilResendWin;
}

//加上","
function add_Qfw(cash) {
	if(cash){
	if (!(cash.length == 1 && cash == "-") && isNaN(parseFloat(cash))) {
		if (cash == "-"){
		} else {
		  return "";
		}
	}
	cash = "" + cash;
    var len=cash.length;
	var cashTmp = cash;
	var fsFlag = "";
	var xsdStr = "";
    var cashNew="";//加上","的字符串
    var tt=0;//计数器，每加一个"," tt 加 1 
    var t=0;//添加","的个数

	if (cashTmp.indexOf("-") >= 0) {
		cashTmp = "" + cashTmp.substring(1,cashTmp.length);//(Math.abs(cashTmp));
		len = cashTmp.length;
		fsFlag = "-";
	} else {
		if (cashTmp.length > 0) {
			if (cashTmp.charAt(0) == "0") {
				cashTmp = "" + (Math.abs(cashTmp));
			}
		}
	}

	var dot=cashTmp.indexOf(".");
	if (dot<0) {
		dot=cashTmp.length;
	} else {
		len=(cashTmp.substring(0,dot)).length;
		xsdStr = (cashTmp.substring(dot,cashTmp.length))
	}
	if(len>3) {
    	t=(len-len%3)/3;
    } else {
    	return cash;
    }

    if(len%3 !=0)  {//个数部分长度不是3的倍数
	    for (var ii=0;ii<len;ii++)   {
				cashNew=cashNew+cashTmp.charAt(ii);
		    if (ii== (len%3+3*tt-1) &&  tt<t) {
					tt=tt+1;
		      cashNew=cashNew+",";
		    }
			}
		}	else	{//个数部分长度是3的倍数
			tt=tt+1;
	    for (var ii=0;ii<len;ii++)  {
				cashNew=cashNew+cashTmp.charAt(ii);
		    if (ii== (3*tt-1) &&  tt<t) {
					tt=tt+1;
		      cashNew=cashNew+",";
		    }
	    }		
	}
	if (cashNew.indexOf(",") == (cashNew.length - 1)) {
		cashNew = cashNew.substring(0,cashNew.length - 1);
	}
    return (fsFlag + cashNew + xsdStr).trim();
	}else{
		if (cash != null) {
		  return cash * 1;
		}
	}
  }


/**
 * 逾期申报检测类
 */
function JsYsqbChecker(skssqq,skssqz,zsxmdm,zspmdm,nsqxdm,sbqxdm) { 
	  var _yqsbMsg = "对不起，现在不是您所申报的税种税目的正常申报时期，请确认税款所属期填写是否有误。凡非申报期内要进行纳税申报的，请您到税务部门办税服务中心进行申报。";
	  var _tqsbMsg = "提醒：您录入的税款所属期大于当期，请确认税款所属期填写是否有误。如确认要提前进行申报的，点“确定”后可继续进行申报。";
	  var flag=false;
	  
	  var date_ = new Date();
	  var year = date_.getFullYear();  
	  var month = date_.getMonth() + 1;
	  
	  if(month <= 9){
		 month = "0"+month;
	  }
	  var day=date_.getDate();
	  if(day <= 9){
		  day = "0"+day;
		  }
      var dqrq=  year + '-' + month + '-' + day; 
     
	  $.ajax({
		    url:"/common/commonAjaxStart.do",
			data:{nsqx_dm:nsqxdm,skssqq:skssqq,skssqz:skssqz,zsxm_dm:zsxmdm,zspm_dm:zspmdm,sbqx_dm:sbqxdm},
    		method:"POST",
    		async : false,
    		success:function(data) {
    			if (data.success) {
    			  var xjrq=data.o.xjrq;
    			  var yqsb=data.o.yqsb;
    			  dqrq=data.o.dqrq;
    			  if((skssqq=='2017-03-01' && skssqz=='2017-03-31')  || (skssqz=='2016-03-31' && zsxmdm=='10106')){
    				  if("2017-04-19"<dqrq){
    				   alert(_yqsbMsg);
    				   flag= false;
    				   return flag;
    				  }else{
    					  flag = true;
    				  }
    			  }else{
    				  if(yqsb){
    					  if(confirm('您当前正在进行逾期申报，将缴纳滞纳金，静确认是否继续？')){
        					  flag = true;
    					  }
    				  }else{
	    				  if(xjrq<dqrq) {
	    				        alert(_yqsbMsg);
	    				        //alert(_yqsbMsg + "\r\n(ZSXM_DM:" + zsxmdm + ", ZSPM_DM:" + zspmdm + ",SKSSQS:" + skssqq + ",SKSSQZ:" +skssqz + ",DQSJ:" +dqrq + ")");
	    				        flag= false;
	    	    				return flag;
	    				      } else {
	    				    	flag = true;
	    				      }
    				  }
    			  }
    			  
    			} else {
    				alert(data.msg);
    			}
    		}
        });
	  return flag;
}

/**
 * 停机
 */
function JsTjdlXz( tjlx) { 
	 var flag=false;
	 $.ajax({
		    url:"/dwfw/commonAjaxTjxz.do",
			data:{tjlx:tjlx},
    		method:"POST",
    		async : false,
    		success:function(data) {
    			if (data.success) {
    			    flag=true;
    			} else {
    				alert(data.msg);
    				flag=false;
    			}
    		}
        });
	  return flag;
}
