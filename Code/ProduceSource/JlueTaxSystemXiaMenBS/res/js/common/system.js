/****************
 * 函数增强扩展
 ****************/
isObject=function(o){
	return typeof(o)=="object";
}
GetQueryString=function(str){
	var rs=new RegExp("(^|)"+str+"=([^\&]*)(\&|$)","gi").exec(String(window.location.href)),tmp;
	if(tmp=rs)return tmp[2];
	return null;
}

/****************
 * 常用函数
 ****************/
//判断输入的字符串只能是半角英文、字符等，不能是汉字或全角字符
function checkWord(un){
	for(i=0;i<un.length;i++){
		word=un.substring(i,i+1);
		c=word.charCodeAt(0);
		if(c >= 256){
			alert("不能包含全角'－'、汉字等非法字符！");
			return false;
		}
	}
	return true;
}
//检测指定控件内的值是否是数字且在指定范围内
function checkNumber(obj, min, max){
	if(!obj) return false;
	var val = obj.value;
	if(isNaN(val)) return false;
	var floatVal = parseFloat(val);
	if(floatVal>max || floatVal< min)
		return false;
	return true;
}

//列表的全选全清——将列表框的对象传过来
function SelectAll(box){
	for(var i=0; i<box.options.length; i++)	{
		box.options[i].selected = true;
	}
}
function CancelSelect(box){
	for(var i=0; i<box.options.length; i++)	{
		box.options[i].selected = false;
	}
}
//选择框的选择取消，单个选择框的选择消取——将复选框的对象传过来
function CheckAll(obj){
	document.all(obj.name).checked = true;
}
function CancleCheckAll(obj){
	document.all(obj.name).checked = false;
}

//获取文件框的文件名——将文件框的值传过来
function getfilename(myString){
	var startat=0;
	var index = myString.indexOf("\\");

	if(index==-1) return "";
	while (index != -1){
		index = myString.indexOf("\\", (index + 1));
		if(index!=-1) startat=index;
	}
	return myString.substring(startat+1, myString.length);
}

//数字输入掩码
function numberMask()
{
  chars= "0123456789+-.";
  e = window.event;
    eChar = String.fromCharCode(e.keyCode);
  if(chars.indexOf(eChar)==-1) window.event.keyCode=0;
  if(eChar=="+" || eChar=="-" || eChar==".") {
    if((eChar=="+" || eChar==".") && srcVal.length<1) window.event.keyCode=0;  //如果小数点前面没有任何字符，则不允许输入小数点
    if(srcVal.indexOf(eChar)>=0) window.event.keyCode=0;
  }
    if((window.event.srcElement.value+eChar).length>1)
        if(isNaN(window.event.srcElement.value+eChar))
            window.event.keyCode=0;
}
//指定小数位数的数字掩码
function numberMaskD( ws ){
	chars= "0123456789+-.";
	e = window.event;
    eChar = String.fromCharCode(e.keyCode);
	if(chars.indexOf(eChar)==-1) window.event.keyCode=0;
	var srcVal = window.event.srcElement.value;
	if(eChar=="+" || eChar=="-" || eChar==".") {
	  if((eChar=="+" || eChar==".") && srcVal.length<1) window.event.keyCode=0;
	  if(srcVal.indexOf(eChar)>=0) window.event.keyCode=0;
	}
	if((window.event.srcElement.value + eChar).length>1) {
		if(ws == 0 && eChar==".") window.event.keyCode=0;
		else {
			var val_1 = window.event.srcElement.value + eChar;
			var val_2 = val_1.split(".");
			if(val_2[1] && val_2[1].length > ws)
			window.event.keyCode=0;
		}
  }
}

//判断整数位和小数位的长度
function numDigitTest(item, intVal, decVal){
	var a = item.value.toString().split(".");

	if(a.length>0)	{
		if(a[0].length>intVal)	{
			alert("您输入的数值太大，整数部分不能超过"+intVal+"位！");
			item.value="";
			item.focus();
			return false;
		}
	}
	if(a.length>1){
		if(a[1].length>decVal)		{
			alert("您输入的数值不合适，小数部分不能超过"+decVal+"位！");
			item.value="";
			item.focus();
			return false;
		}
	}
	return true;
}

//把小数圆整到指定位小数
function toFixedNum(val1, val2) {
  if(isNaN(val1)) return 0;
  if(isNaN(val2)) return val1;
  var num = new Number(val1);
  return num.toFixed(val2);
}

//过滤掉字符串中传入的参数
function filterChar(src,c){
	var len = src.length;
	var rl="";
	var rr="";
	for(var i=0; i<(len+1)/2; i++){
		var t = src.charAt(i);
		if(t!=c)
			rl += t;
		if(i<(len/2))	{
			t = src.charAt(len-i);
			if(t!=c)
				rr = t + rr;
		}
	}
	src = rl+rr;
	return s;
}

//判断pValue每个字符是否都在target字符串中
function isContain(target,pValue){
	var str = new String(pValue);
	for(var i=0;i<str.length;i++){
		if(target.indexOf(str.charAt(i))<0){
					return false;
		}
	}
	return true;
}


//聚焦
function focusOn(pName){
	eval("document.all." + pName + ".focus()");
}
//文本框全选
function selectOn(pName){
	eval("document.all." + pName + ".select()");
}
//判断传入的radio是否有选中
function isSelectRadio(pName){
	var com = eval("document.all('" + pName + "')");
	if(com){
		if(com.length){
			for(var i=0;i<com.length;i++){
				if(com[i].checked){
						return true;
				}
			}
			return false;
		}else{
			if(com.checked){
				return true;
			}else{
				return false;
			}
		}
	}else{
		return false;
	}
}

//从radio中取出选中的值
function getSelFromRadio(pName){
	var com = eval("document.all('" + pName + "')");
	var selVar;
	if(com){
		if(com.length){
			for(var i=0;i<com.length;i++){
				if(com[i].checked){
					selVar = com[i].value;
					break;
				}
			}
		}else{
			if(com.checked){
				selVar = com.value;
			}
		}
	}
	return selVar;
}
//输入日期时自动加上"-"
function dateMask(){
	var obj = event.srcElement;
	var chr = String.fromCharCode(event.keyCode);
	if(obj.value.length>9){
		window.event.keyCode=0;
	}
	if(event.keyCode<48 || event.keyCode>57)	{
		window.event.keyCode=0;
	}

	if((event.keyCode!=8) && (obj.value.length==4 || obj.value.length==7)){
		obj.value = obj.value + "-";
	}
}
//输入的年月自动加上"-"
function dateMonthMask(){
	var obj = event.srcElement;
	var chr = String.fromCharCode(event.keyCode);
	if(obj.value.length>6){
		window.event.keyCode=0;
	}
	if(event.keyCode<48 || event.keyCode>57)	{
		window.event.keyCode=0;
	}
	if((event.keyCode!=8) && (obj.value.length==4)){
		obj.value = obj.value + "-";
	}
}

//根据年月取得日（主要是是否闰年问题）
function getDay(M, Y){
Months= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
Leap = false;
if((Y % 4 == 0) && ((Y % 100 != 0) || (Y %400 == 0)))
Leap = true;
D = Months[M-1];
if(!(Leap) && (M == 2) && (D > 28))
D=28;
if((Leap) && (M == 2) && (D > 29))
D=29;
return D;
}
//根据年月返回年月日（主要是是否闰年问题）
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

//年输入检测
function dateYearCheck(str){
  if(str.length<1) return true;
  var reg = /^(\d{4})$/;
  var arr = reg.exec(str);
  if(arr==null) return false;
  var d = new Date(RegExp.$1, 1, 1);
  if(d == null) return false;
  if(d.getFullYear()!= RegExp.$1)return false;
  return true;
}

/*
	判断输入的日期始小于日期止
	且，输入的日期始止在范围内
  参数：
  类型:  8位时间字符串
  start: 测试区间始
  end：  测试区间止
  min：  范围区间始
  max：  范围区间止
  返回值 code
*/
function compareDate(start,end,min,max){
   var code=0;
   if(start>end){
      code = 1;
   }
   if(start<min.substring(0,7)){
      code = 2;
   }
   if(end>max.substring(0,7)){
      code = 3;
   }
   return code;
}

//根据名称取得对象，如果同名对象有多个，则只返回第一个
function getObj(objName) {
  var obj = document.getElementsByName(objName)[0];
  return obj;
}

//打开一个全屏的窗口
function openMap(url){
  var str = "left=0,screenX=0,top=0,screenY=0,scrollbars";

	if (window.screen){
		var ah = screen.availHeight - 30;
		var aw = screen.availWidth - 10;
		str += ",height=" + ah;
		str += ",innerHeight=" + ah;
		str += ",width=" + aw;
		str += ",innerWidth=" + aw;
	}
	else{
		var aw = window.innerWidth;
		var ah = window.innerHeight;
		str += ",height=" + ah;
		str += ",innerHeight=" + ah;
		str += ",width=" + aw;
		str += ",innerWidth=" + aw;
		str += ",resizable"; // so the user can resize the window manually
	}
	var mapwin=window.open(url,"mapWin",str);
}
//判断输入的值是否大小或小于值
function isLarger(obj, con){
	if(parseFloat(obj.value)>parseFloat(con)){
		alert('你输入的数值太大，请重新输入小于或等于'+con+'的值！');
		obj.value="";
		obj.focus();
		return true;
	}
	return false;
}
function isLesser(obj, con){
	if(parseFloat(obj.value)<parseFloat(con)){
		alert('你输入的数值太小，请重新输入大于或等于'+con+'的值！');
		obj.value="";
		obj.focus();
		return true;
	}
	return false;
}

// 把数值转换为含有两为小数的字符串
function formatDate(date){
	var len=0;
	var index=0;
	var result="";
	date=date.toString();
    index=date.indexOf(".");
	if(index==-1){//没有小数点
      len=date.length;
	  if(len<=0){
		  result="0.00";
	  }
	  else{
		  result=date.substring(0,len)+".00";
	  }
	}
	else{//有小数点
	  len=date.length;
	  if(len>=index+2){//小数点后有两位
	    result=date.substring(0,index+2);
	  }
	  else{//小数点后不足两位
	    result=date.substring(0,index);
		var temp="";
		for(var i=0;i<(index+2-len);i++){
			temp=temp+"0";
		}
		result=result+temp;
	   }
	}
	return result;
}
//屏蔽输入的全角半角逗号
function noComma(){
  var iekey = event.keyCode;
  var KeyCode = String.fromCharCode(iekey)
  if(KeyCode=="," || KeyCode=="，" ) return false;
}
//取得地址栏参数数组
function getUrlParameter(){
	var url_p = location.search;
	var url = url_p.split("&");
	return url;
}


/**
 * 检测指定控件的值是否在指定范围内
 */

//调试函数，会在页面最下方打印出调信息
function debug(msg) {
  document.body.insertAdjacentHTML('beforeEnd',msg);
}
function debugln(msg) {
  msg += "<br>";
  debug(msg);
}
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
//截除掉触发事件的控件的值前后空格
function trimObjValue() {
  var obj = event.srcElement;
  if(obj) {
  if(obj.value) obj.value = obj.value.trim();
  }
}
//YYYY-MM日期判断
function validateYYYYMM(pValue){
    var str = new String(pValue);
    if(str.length>7){
        return false;
    }
    var index = str.indexOf("-");
    if(index != 4){
        return false;
    }else{
        if(!isDigit(str.substring(0,4))){
            return false;
        }
        var month = str.substring(5,7);
        if(!isDigit(month)){
            return false;
        }else{
            var i_month = new Number(month);
            if(i_month<=0 || i_month>12){
                return false;
            }
        }
    }
    return true;
}
//YYYY-MM-DD日期判断
function validateYYYYMMDD(pValue){
	var temp = new String(pValue);

	var stryyyy = temp.substring(0,4);
	var strmm = temp.substring(5,7);
	var strdd = temp.substring(8,10);

	var yyyy = getInt(stryyyy);
	var mm = getInt(strmm);
	var dd = getInt(strdd);

	if(temp.charAt(4)!="-" || temp.charAt(7)!="-"){//连接符出错
			return false;
	}
	if(yyyy==-1){    //年份出错
		return false;
	}
	if(mm==-1){      //月份出错
		return false;
	}
	if(dd==-1){      //日期出错
		return false;
	}
	if(mm>12 || mm<1){//月份界限
		arg.focus();
	}
	if( (yyyy%4==0 && yyyy%100!=0) || yyyy%400==0 ){//润年
		if((mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12) && (dd<1 || dd>31)){
			return false;
		}
		if((mm==4 || mm==6 || mm==9 || mm==11) && (dd<1 || dd>30)){
			return false;
		}
		if(mm==2 && dd>29){
			return false;
		}
	}else{//非润年
		if((mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12) && (dd<1 || dd>31)){
			return false;
		}
		if((mm==4 || mm==6 || mm==9 || mm==11)&&(dd<1 || dd>30)){
			return false;
		}
		if(mm==2 && dd>28){
			return false;
		}
	}
	return true;
}

/*
 * 捕捉Enter键下事件并转换为Tab键事件
 * 如果控件有自定义onkeydown事件，则不转换，例如：
 * <input type="text" name='aa4' onkeydown="return true;">
 */
function keyHandler(e) {
  var srcKeyHandler = null;
  if (event.keyCode==116) {//禁用F5
    event.keyCode = 0;
    event.cancelBubble = true;   
    return false;
  }
  if(event.srcElement.onkeydown) srcKeyHandler = event.srcElement.onkeydown;
  if(srcKeyHandler) {
    srcKeyHandler();
    return true;
  }
  var _flag = true;
  try {
	  if (event.srcElement.type.toUpperCase() == "TEXTAREA") {
	  	_flag = false;
	  }
  } catch(e){
  	_flag = true;
  }
	if (event.keyCode==13 && _flag)
		event.keyCode=9;
	return true;
}
document.onkeydown=keyHandler;


//增加对有千分位分隔的货币输入框清理千分位分隔符的功能
//Added by syf at 2009.12.02
function clearCurrency(num){
  if(Currency && Currency.clearCurrency) return Currency.clearCurrency(num);

  var re = /[^0-9\.\-]/g;
  return num.replace(re,"");
}
function getCurrencyValue(item){
  var num = item.value;
  if(num) return clearCurrency(num);
  else return num;
}
///////////////////////////////////////////////////



//弹出一个500(h)750(w)的新窗口
var newWnd;
function open600_900newWnd(pUrl){
  if(newWnd){
    newWnd.close();
  }
  var style = "top=20,left=20,height=550,width=750,status=yes,scrollbars=yes,resizable=no,z-lock=yes";
  newWnd = window.open(pUrl,"",style);
}

//设置获得焦点控件背景色
//var allInputObjs;
//var highlight = "#00C3FF";
//window.onload = afterload;
//
//function afterload() {
//	if (document.getElementsByTagName)
//		allInputObjs = document.getElementsByTagName('INPUT');
//	else if (document.all)
//		allInputObjs = document.all.tags('INPUT');
//	else return;
//
//	for (var i=0;i<allInputObjs.length;i++)
//		allInputObjs[i].onfocus = doOnFocusChangeBGColor;
//}
//
//function doOnFocusChangeBGColor() {
//  for(var ii=0; ii<allInputObjs.length; ii++) allInputObjs[ii].style.backgroundColor="";
//  if(event != null) {
//	  var obj = event.srcElement;
//	  if(obj != null) {
//		obj.style.backgroundColor=highlight;
//		return true;
//	  }
//  }
//}

/***********************标签页切换函数*************************/
function switchCell(n, hash){
  nc=document.getElementsByName("navcell");
  if(nc) {
    var objLen = nc.length;
    tab = document.getElementsByName("tb")
    if(tab.length<objLen)
      objLen = tab.length;
    for(i=0;i<tab.length;i++) {
      nc.item(i).className="tab-off";
      tab.item(i).className="hide-table";
    }
    if(tab.item(n-1)) {
      nc.item(n-1).className="tab-on";
      tab.item(n-1).className="tab-content show-table";
    }
  } else if(navcell) {
    for(i=0;i<navcell.length;i++){
      navcell[i].className="tab-off";
      tb[i].className="hide-table";
    }
    navcell[n-1].className="tab-on";
    tb[n-1].className="tab-content show-table";
  }
  if(hash){
    document.location="#"+hash;
  }
}

//取得某一个控件所在的Tab页号
function getPageNum(obj){
  var pageNum = 0;
  var tabs = document.getElementsByName("tb");
  var thisPage = obj.parentElement.parentElement.parentElement.parentElement;
  for(ii=0; ii<tabs.length; ii++) {
    if(tabs[ii]==thisPage)
      pageNum = ii + 1;
  }
  if(pageNum==null || isNaN(pageNum))
    pageNum = 0;
  return pageNum;
}

var type = "0";
function changeIt(p1,p2,p3,p4,p5){
  if (p1.style.display=="none") {
    p1.style.display="block";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
    p5.style.display="none";
    //mytd.title="点击可隐藏其它表格";
  } else {
    p1.style.display="block";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
    p5.style.display="none";
  }
}
function dispAll(p1,p2,p3,p4,p5){
  p1.style.display="block";
  p2.style.display="block";
  p3.style.display="block";
  p4.style.display="block";
  p5.style.display="block";
}

//年月输入检测
function dateMonthCheck(str) {
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



/*下面是一些自定义类对象*/
/**
 * 图片控制对象
 * 主要用于页面上一些图片效果的控制
 */
var ImageControl = function() {
  this._preLoadImages = new Array();  //预装入的图片
  this._swapImgObj;  //图片切换时暂时保存图片的容器

  /**取得预装入的图片对象*/
  this.getPreLoadImages = function() {
    return this._preLoadImages;
  }

  /**根据对象名称查找页面对象*/
  this._findObj = function(n, d) { //v4.01
    if(!n) return n;
    if(typeof(n) == "object") return n;
    var p,i,obj, doc, x;
    if(!doc) doc=document;
    if((p=n.indexOf("?"))>0 && parent.frames.length) {
      doc=parent.frames[n.substring(p+1)].document;
      n=n.substring(0,p);
    }
    if(!(obj=doc[n])&&doc.all) obj=doc.all[n];
    for (i=0;!x&&i<doc.forms.length;i++)
      obj=doc.forms[i][n];
    for(i=0;!obj&&doc.layers&&i<doc.layers.length;i++)
      obj=_findObj(n,doc.layers[i].document);
    if(!obj && doc.getElementById) obj=doc.getElementById(n);
    return obj;
  }

  /**把图片预载到内存*/
  this.preloadImgs = function() {
    this._preLoadImages = new Array();
    if(document.images){
      if(!this._preLoadImages) this._preLoadImages = new Array();
      var i, j=this._preLoadImages.length, args = this.preloadImgs.arguments;
      for(i=0; i<args.length; i++){
        if (args[i].indexOf("#")!=0){
          this._preLoadImages[j]=new Image();
          this._preLoadImages[j++].src=args[i];
        }
      }
    }
  }

  /**切换图片,一般用在鼠标移上时动态换成另一图片*/
  this.swapImage = function() {
    var _imgObj, args = this.swapImage.arguments;
    this._swapImgObj=new Image();
    _imgObj = this._findObj(args[0]);
    if (_imgObj != null && typeof(_imgObj)=="object"){
      this._swapImgObj.src = _imgObj.src;
      _imgObj.src = args[1];
    }
  }

  /**图片恢复成先前图片，一般用于鼠标移开时把图片恢复成先前图片*/
  this.swapImgRestore = function() { //v3.0
    var i,x,a = this._swapImgObj;
    var args = this.swapImgRestore.arguments;
    var _imgObj = this._findObj(args[0])
    if(this._swapImgObj && _imgObj && this._swapImgObj.src) {
      _imgObj.src = this._swapImgObj.src;
      this._swapImgObj = null;
    }
  }
}

/**
 * 图片切换类
 * 使用例子：
 * <img id="img" src="http://localhost/images/mainpage/shuizhongjianjie-2.gif"
 * style="filter:revealTrans(duration=2,transition=20); cursor: hand" alt=""/>
 * ＜script language="JavaScript"＞
 * ＜!--
 * var imgCtrl = new ImageControl();
 * imgCtrl.preloadImgs(
 *   "http://localhost/images/mainpage/shuizhongjianjie-2.gif",
 *   "http://localhost/images/mainpage/shuifatiaowen-2.gif",
 *   "http://localhost/images/mainpage/shenheshixiang-2.gif",
 *   "http://localhost/images/mainpage/wenmingchuangjian-2.gif",
 *   "http://localhost/images/mainpage/baobiaoxiazai-2.gif"
 * );
 * var imgLinks = new Array("ccc","ddd","eee","fff","ggg");
 * var swapImageCtrl1 = new ImageTransition();
 * swapImageCtrl1.setImageList(imgCtrl1.getPreLoadImages());
 * swapImageCtrl1.setImageObject(document.all.img1);
 * swapImageCtrl1.setImageLinkList(imgLinks1);
 * swapImageCtrl1.setSwapInterval(2);
 * swapImageCtrl1.play("swapImageCtrl1");
 * ／／--＞
 * ＜/script＞
 *
 * 使用方法也可以参看首页的图片新闻切换功能
 */
var ImageTransition = function() {
  this._imageObject;   //要切换的图片控件对象
  this._imageList;     //要切换的图片
  this._imglinkList;
  this._swapInterval = 5;   //图片切换间隔
  this._currentPos=0;       //当前图片序号
  this._timer;

  /**切换样式选择，总共有23种切换样式，这里面随机选取一种*/
  this.setTransition = function() {
    if (document.all && this._imageObject){
      this._imageObject.filters.revealTrans.Transition=Math.floor(Math.random()*23);
      this._imageObject.filters.revealTrans.apply();
    }
  }

  /**应用切换模式*/
  this.playTransition = function(){
    if (document.all && this._imageObject)
      this._imageObject.filters.revealTrans.play()
  }

  /**
  * 开始播放
  * 参数： name: 是指当前的类实例名称
  */
  this.play = function(name){
    if(this._imageList) {
      if(this._currentPos >= this._imageList.length) this._currentPos=0;
      this.setTransition();
      this._imageObject.src = this._imageList[this._currentPos++].src;
      this.playTransition();
    }
    this._timer = setTimeout(name+".play('"+name+"');", this._swapInterval * 1000);
  }

  /**如果指定了链接，则跳转到指定地址*/
  this.jump2url = function(){
    if(this._imglinkList) {
      if(!this._imglinkList[this._currentPos]) return;
      jumpUrl = this._imglinkList[this._currentPos];
      jumpTarget='';
      if (jumpUrl != ''){
        if (jumpTarget != '') window.open(jumpUrl,jumpTarget);
        else location.href=jumpUrl;
      }
    }
  }

  /**在状态栏显示顶部图片的链接*/
  this.displayStatusMsg = function() {
    if(this._imglinkList[this._currentPos])
      status=this._imglinkList[this._currentPos];
    document.returnValue = true;
  }

  this.setImageList = function(imgList) {
    this._imageList = imgList;
  }
  this.setImageObject = function(imgObject) {
    this._imageObject = imgObject;
  }
  this.setImageLinkList = function(imgLinkList) {
    this._imglinkList = imgLinkList;
  }
  this.setSwapInterval = function(swapInterval) {
    this._swapInterval = swapInterval;
  }
}

/**调试函数，在页面最下方插入提示信息*/
if(!debugShow) {
  function debugShow(msg){
    document.body.insertAdjacentHTML('beforeEnd',msg+"<br>");
  }
}



/**
 * 在页面中央显示一个提示信息层的类.
 * 用法：　
 *   ＜script type="text/javascript"＞var tip = new Tip();＜/script＞
 *
 *   ＜input type="button" name="btnShow" value="显示" onClick="tip.showTip(this.name+':'+this.value, 'myTip')"/＞
 *   ＜input type="button" name="btnHidden" value="隐藏" onClick="tip.hiddenTip('myTip')"/＞
 */
function TipBox() {
  this.tipWidth=200;
  this.tipHeight=50;
  this.tipID = "tipLayer";

  this.bgColor = "#EEEEEE";
  this.color = "#ff0000";
  this.fontFamily = "新宋体";
  this.fontSize = "12px";
  this.fontWeight = "bold";
  this.textAlign = "center";

  /**创建提示框*/
  this.createTip = function(id) {
    var left = (document.body.clientWidth - this.tipWidth) / 2;
    var top = (document.body.clientHeight - this.tipHeight) / 2;
    var tipBox = document.createElement("<div id="+id+" style='position: absolute; left: "+left+"; top: "+top+"; width: "+this.tipWidth+"; height: "+this.tipHeight+"; z-index: 100'>");
    document.body.insertBefore(tipBox);
  }
  /**显示提示框*/
  this.showTip = function(msg, id) {
    if(id) this.tipID = id;
    var left = (document.body.clientWidth - this.tipWidth) / 2;
    var top = (document.body.clientHeight - this.tipHeight) / 2;
    var tipBox = document.getElementById(this.tipID);
    if(!tipBox) {
      this.createTip(this.tipID);
      tipBox = document.getElementById(this.tipID);
    }
    if(tipBox) {
      tipBox.innerHTML = "<br>"+msg;
      tipBox.style.verticalAlign = "middle";
      tipBox.style.position   = "absolute";
      tipBox.style.border   = "1 solid black";
      tipBox.style.backgroundColor  = this.bgColor;
      tipBox.style.color  = this.color;
      tipBox.style.fontFamily  = this.fontFamily;
      tipBox.style.fontSize  = this.fontSize;
      tipBox.style.fontWeight  = this.fontWeight;
      tipBox.style.textAlign  = this.textAlign;
      tipBox.style.display  = "inline";
      tipBox.style.zIndex   = "999";
      tipWidth = tipBox.style.pixelWidth;
      tipHeight = tipBox.style.pixelHeight;
      tipBox.style.left = eval(document.body.clientWidth - tipWidth) / 2;
      tipBox.style.top = eval(document.body.clientHeight - tipHeight) / 2;
    }
  }
  /**隐藏提示框*/
  this.hideTip = function(id) {
    if(id) this.tipID = id;
    var tipBox = document.getElementById(this.tipID);
    if(tipBox) tipBox.style.display = "none";
  }
}
if(!tip)
  var tip = new TipBox();

/**DreamWaver生成的函数*/
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
/******************/
//禁止右键弹出菜单
//function document.oncontextmenu(){return false;}