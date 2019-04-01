/**
core.js
Classes:
  Object
  String
  Number
  Date
  Array
version 1.0
author  ShengYoufu
since   2006-5-29
*/
/****************
* Object
****************/





/****************
* Array
****************/
//取最大值
//var x = new Array(1, 2, 3, 4, 5, 6);
//var y = x.max( );
//alert(y) //返回6
Array.prototype.max =function( ){
  var i, max = this[0];
  for (i = 1; i < this.length; i++)
    if (max < this[i]) max = this[i];

  return max;
}

//取最小值
Array.prototype.min =function( ){
  var i, min = this[0];
  for (i = 1; i < this.length; i++)
    if (min > this[i]) min = this[i];

  return min;
}

//检测指定元素在数组中的位置
Array.prototype.indexOf=function(val) {
  for(ii=0; ii<this.length; ii++)
    if(this[ii]==val) return ii;

  return -1;
}
//取左边指定个数的元素
Array.prototype.left=function(length){
  return this.slice(0,length);
}
//取中间指定个数的元素
Array.prototype.mid=function(start,length){
  return this.slice(start,start+length);
}
//取右边指定个数的元素
Array.prototype.right=function(length){
  if(length>=this.length)return this;
  return this.slice(this.length-length,this.length);
}


//入栈操作
//Array.prototype.push=function(){
//var j;
//  if(arguments.length>0)
//    for(var i=0;j=arguments[i]!=null;i++)
//      this[this.length]=j;
//  return this.length;
//}
////出栈操作
//Array.prototype.pop=function(){
//  var returnval="undefined";
//  if(this.length!=0)
//    returnval=this[this.length-1],this.length--;
//  return returnval;
//}
/** @private To make up for the lack of Array.push() on IE5.0 */
if (typeof Array.prototype.push === 'undefined') {
  Array.prototype.push = function() {
    var sub = this.length;
    for (var i = 0; i < push.arguments.length; ++i) {
      this[sub] = push.arguments[i];
      sub++;
    }
  }
}

/** @private To make up for the lack of Array.pop() on IE5.0 */
if (typeof Array.prototype.pop === 'undefined') {
  Array.prototype.pop = function() {
    var lastElement = this[this.length - 1];
    this.length--;
    return lastElement;
  }
}

//移除数组元素，如果参数不是数字，则
Array.prototype.remove=function(index){
  if(isNaN(index)){
    return;
  }
  var buffer = this;

  if(index>=0 && index<this.length){
    for(var i=index;i<this.length-1;i++)
      buffer[i]=buffer[i+1];
    this.length-=1;
    return true;
  }
  else {
    return false;
  }
}

//右移
Array.prototype.unshift=function(){
  var len=arguments.length;
  this.reverse();
  while(len>0)
    this[this.length]=arguments[--len];
  return this.reverse();
}
//左移
Array.prototype._shift=function(){
  var fistArray=this[0],i=0;
  while(i<this.length)
    this[i]=this[i++];
  this.length--;
  return fistArray;
}
//数组拼接
Array.prototype.splice=function(){
  var len=arguments.length,tarray=[],i=arguments[0]+arguments[1];
  if(len>1){
    while(i<this.length)
      tarray[tarray.length]=this[i++];
    this.length=arguments[0];
    if(len>2)
      for(var i=2;i<len;i++)
        this[this.length]=arguments[i];
    var tlen=tarray.length,i=0;
    while(i<tlen)
      this[this.length]=tarray[i++];
  }
  return this;
}


/****************
* String
****************/
//不区分大小写匹配检测
String.prototype.equalsIgnoreCase=function (str){
  if(str.getClass()!="String")return false;
  return this.toUpperCase()===str.toUpperCase();
}
//类型比较
String.prototype.compareTo=function (str){
  /*if(!this.typeMatches(str))throw new Error("类型不匹配!");*/
  var s1=this.toString ();
  var s2=str.toString ();
  if(s1===s2)return 0;
  else if(s1>s2)return 1;
  else return -1;
}
//不区分大小写类型比较
String.prototype.compareToIgnoreCase=function (str){
  /*if(!this.typeMatches(str)) throw new Error("类型不匹配!");*/
  var s1=this.toUpperCase();
  var s2=str.toUpperCase();
  if(s1===s2)return 0;
  else if(s1>s2)return 1;
  else return -1;
}
//检查是否以传入参数prefix开头
String.prototype.startWith=function (prefix){
  return this.substring(0,prefix.length)==prefix;
}
//检查是否以传入参数suffix结尾
String.prototype.endWith=function (suffix){
  return this.substring(this.length-suffix.length)==suffix;
}
//字符串连接
String.prototype.concat=function (str){
  return new String(this.toString ()+str);
}
//取得字符串的字符数组
String.prototype.toCharArray=function (){
  var charArr=new Array();
  for(var i=0;i<this.length;i++)charArr[i]=this.charAt(i);
  return charArr;
}
//过滤字符串前后的空格
String.prototype.trim = function() {
  return this.replace(/(^\s*)|(\s*$)/g, "");
}
//过滤字符串左侧的空格
String.prototype.ltrim = function() {
  return this.replace(/(^\s*)/g, "");
}
//过滤字符串右侧的空格
String.prototype.rtrim = function() {
  return this.replace(/(\s*$)/g, "");
}
//计算字符串的字节长度(一个汉字作为两个字节)
String.prototype.lenAsByte=function(){
  return this.replace(/[^\x00-\xff]/g,"**").length;
}
//测字符串实际长度
String.prototype.actLength = function(){
	var arr=this.match(/[^\x00-\xff]/ig);
	return this.length+(arr==null?0:arr.length);
}
//测试字符串长度－－是否要用？
//String.prototype.length=function(){
	//var arr=this.match(/[^\x00-\x80]/g);
	//return this.length+(!arr?0:arr.length);
//}
//取字符串左边指定字数的子串
//参数mode true: 若是半个双字节字则跳过(不取这个字), false: 若是半个双字节字则取整个双字节字
String.prototype.left = function(num,mode){
	if(!/\d+/.test(num)) return(this);
	var str = this.substr(0,num);
	if(!mode) return str;
  var n = str.lenAsByte() - str.length;
	num = num - parseInt(n/2);
	return this.substr(0,num);
}
//取字符串右边指定字数的子串
//参数mode true: 若是半个双字节字则跳过(不取这个字), false: 若是半个双字节字则取整个双字节字
String.prototype.right = function(num,mode){
	if(!/\d+/.test(num))return(this);
	var str = this.substr(this.length-num);
	if(!mode) return str;
	var n = str.lenAsByte() - str.length;
	num = num - parseInt(n/2);
	return this.substr(this.length-num);
}
//检测字符串中包含指定字符串的个数
//alert("张三李四王五赵六张三丰".getCount("张"));   //返回2
String.prototype.getCount = function(str,mode){
  var ss = eval("this.match(/("+str+")/g"+(mode?"i":"")+")");
  if(ss) return ss.length;
  else return 0;
}
//移除字符串的空格
String.prototype.removeBlank = function() {
  return this.replace(/\s*/g,"");
}
//检测字符串长度是否符合指定长度
String.prototype.checkLength = function (len) {
	var str = this;
	if(str.length!=len)
			return false;
	return true;
}
//判断是否为空
String.prototype.isEmpty=function() {
  return (!this || this=="");
}
//验证是否为数字
//alert("12345".isNumber());
//alert("12345.6".isNumber());
//alert("12345.6x".isNumber());
String.prototype.isNumber=function(){
  if(!this)return false;
  return !isNaN(this)
  /*
  var strP=/^\d+(\.\d+)?$/;
  if(!strP.test(this))return false;
  try{
    if(parseFloat(this)!=this)return false;
  }catch(ex){
    return false;
  }
  return true;
  */
}
//将字符串转换成数字
String.prototype.toNumber=function (){
  try{
    var tmp = new Number(this);
    return tmp;
  }catch(e){
    alert(e.description);
    return null;
  }
}

//将字符串转换成日期格式
String.prototype.toDate = function() {
  if(this.length<1) return true;
  var reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
  var arr = reg.exec(this);
  if(arr==null) return null;
  var d = new Date(RegExp.$1, (RegExp.$2 - 1), RegExp.$3);
  return d;
}

//验证给定的日期是否合法,参数格式要求：yyyy-mm-dd[ hh:mi:ss] 可以根据情况更改正则表达式
//alert("2004-12-12 23:34:23".isDate());
//alert("2004-12-12".isDate());
//alert("2004-13-12".isDate());
//alert("2004-12-32".isDate());
String.prototype.isDate=function (){
  //对日期格式进行验证 要求为1900-2099年  格式为 yyyy-mm-dd[ hh:mi:ss]  并且可以正常转换成正确的日期
  var pat_hd=/^((19|20)\d{2}-((0[1-9]{1})|(1[0-2]{1}))-((0[1-9]{1})|([1-2]{1}[0-9]{1})|(3[0-1]{1}))){1}(\s\d{2}:\d{2}:\d{2})?$/;
  try{
    if(!pat_hd.test(this)) throw new Error("日期格式错误！");
    var arr_dt=this.split(" ");
    if(arr_dt[0]=='') throw new Error("日期格式错误！");
    var oDate=arr_dt[0];
    var arr_hd=oDate.split("-");
    var dateTmp=new Date(arr_hd[0],parseFloat(arr_hd[1])-1,parseFloat(arr_hd[2]));
    if(dateTmp.getFullYear()!=parseFloat(arr_hd[0])||dateTmp.getMonth()!=parseFloat(arr_hd[1])-1||dateTmp.getDate()!=parseFloat(arr_hd

[2]))
      throw new Error("日期格式错误！");
    if(arr_dt[1]&&arr_dt[1]!=''){
      var oTime=arr_dt[1];
      var arr_ht=oTime.split(":");
      dateTmp.setHours(arr_ht[0],arr_ht[1],arr_ht[2]);
      if(dateTmp.getHours()!=parseFloat(arr_ht[0])||dateTmp.getMinutes()!=parseFloat(arr_ht[1])||dateTmp.getSeconds()!=parseFloat

(arr_ht[2]))
        throw new Error("日期格式错误！");
    }
  }catch(ex){
    if(ex.description){
      //alert(ex.description);
    }
    return false;
  }
  return true;
}
//判断字符串是否是有效年份
String.prototype.isMonth=function (){
  return (this+"-01").isDate();
}
//判断是否是有效的电子邮件地址
String.prototype.isEmail=function() {
  return(new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(this));
}
//判断是否是有效的身份证号
String.prototype.isIdCardNo=function() {
  if (isNaN(num)) {
    throw new Error("输入的不是数字！");
    return false;
  }
  var len = num.length, re;
  if (len == 15)
    re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/);
  else if (len == 18)
    re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\d)$/);
  else {
    throw new Error("输入的数字位数不对！");
    return false;
  }
  var a = num.match(re);
  if (a != null) {
    if (len==15) {
      var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]);
      var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5];
    } else {
      var D = new Date(a[3]+"/"+a[4]+"/"+a[5]);
      var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5];
    }
    if (!B) {
      throw new Error("输入的身份证号 "+ a[0] +" 里出生日期不对！");
      return false;
    }
  }
  return true;
}
//取得一个文件路径名中的文件扩展名
String.prototype.getFileExt=function() {
  return this.match(/^(.*)(\.)(.{1,8})$/)[3];
}
//取得一个文件路径名字串中的文件名
String.prototype.getFileName=function() {
  var fileName = this.replace(/(.*\/){0,}([^\.]+).*/ig,"$2");
  return fileName;
}
//判断输入的字符串只能是半角英文、字符等，不能是汉字或全角字符
String.prototype.checkCJKWord = function(){
  //按字节检测字符串长度，如果与按常规取得的长度不一致，则表明字符串中有全角字符或远东字符
  var actLen = this.actLength();
  if(actLen != this.length) return false;
	return true;
}
//检测指定控件内的值是否是数字且在指定范围内
String.prototype.checkNumberRange = function(min, max){
	if(isNaN(this)) return false;
  var num = new Number(this);
  if(num.lessThan(min) || num.largeThan(max)) return false;
	return true;
}

/****************
* Number
****************/
Number.prototype.hashCode=function (){
  //just for int,not for double
  return (this);
}
Number.prototype.equals=function (obj){
  /*if(!this.typeMatches(obj))return false;*/
  return this.toString ()==obj.toString ();
}
Number.prototype.compareTo=function (obj){
  /*if(!this.typeMatches(obj))return false;*/
  return this-obj;
}
Number.toHexString=function (i){
  return i.toString (16);
}
Number.toBinaryString=function (i){
  return i.toString (2);
}
//将当前的数字转换成16进制
Number.prototype.toHex=function(){
  var hexStr = "0123456789ABCDEF";
  var low = this % 16;
  var high = (this - low)/16;
  hex = "" + hexStr.charAt(high) + hexStr.charAt(low);
  return hex;
}
//判断是否整型
Number.prototype.isNumeric = function () {
  var val = this.valueOf();
  if(parseInt(val) == parseFloat(val)) return true;
  return false;
}

//判断一个值是否是Number
Number.prototype.isNumber=function(val){
  if(val==null) return false;
  //如果对象类型是number，则一定是数字
  if(typeof(val)=="number") return true;
  //如果对象类型既不是number也不是string，也不是object，则认为不是有效数字
  if(typeof(val)!="string" && typeof(val)!="object") return false;
  if(val.length<1) return true;
  try {
    var tmp = new Number(val);
  }catch(ex) {
    return false;
  }
  return true;
}
//判断是否整型
Number.prototype.isInt = function () {
  var val = this.valueOf();
  if(parseInt(val) == parseFloat(val)) return true;
  return false;
}
//判断是否浮点型
Number.prototype.isFloat = function() {
//  if(!this.isInt((this.valueOf()))) return true;
//  return false;
  return true;
}
//比较是否大于传入参数
Number.prototype.largeThan = function(val) {
  if(!this.isNumber(val)) return false;
  if((this.valueOf()) > parseFloat(val)) return true;
  return false;
}
//比较是否小于传入参数
Number.prototype.lessThan = function (val) {
  if(!this.isNumber(val)) return false;
  if((this.valueOf()) < parseFloat(val)) return true;
  return false;
}
//取整返回
Number.prototype.intValue = function() {
  return parseInt(this);
}
//取浮点返回
Number.prototype.floatValue = function() {
  return parseFloat(this);
}
//加上
Number.prototype.add = function(val) {
  if(isNaN(val)) throw new Error( "加数不是数字!");
  this.value = new Number(this.floatValue() + parseFloat(val));
}
//减去
Number.prototype.subtract  = function(val) {
  if(isNaN(val)) throw new Error( "减数不是数字!");
  this.value = new Number(this - parseFloat(val));
}
//乘上
Number.prototype.multiply = function(val) {
  if(isNaN(val)) throw new Error( "乘数不是数字!");
  this.value = new Number(this * parseFloat(val));
}
//除去
Number.prototype.mivide = function(val) {
  if(isNaN(val)) throw new Error( "除数不是数字!");
  if(parseFloat(val2) == 0.0) throw new Error( "被0除!");
  this.value = new Number(this * parseFloat(val));
}
/**
 * 说明：用这种方法进行四舍五入，对一些特殊的计算结果会存在误差，例如：
 * 5046.5 * 0.03　，手工计算并取两位小数应该是：151.40，则如果用这种方法取只圆整一次的话，会得到结果：151.39
 * 所以方法中圆整了两次
 *
 * 不定参数形式，第一个参数指定小数位数
 */
Number.prototype.toFixed=function(){
  //var num=arguments[0]==null?0:arguments[0];
  //为了保证精度，先对小数位后第五位进行四舍五入（对于税款申报征收，一般取两位小数，精度应该能满足要求）
  //with(Math) this.NO = floor( this.valueOf() * pow(10, 5) + 0.5 ) / pow(10, 5);
  //再按指定小数位四舍五入
  //with(Math) this.NO = floor( this.NO * pow(10,num) + 0.5 ) / pow(10,num);
  //return parseFloat(String(/\./g.exec(this.NO)?this.NO:this.NO+(num==0?"":".")+String(Math.pow(10,num)).substr(1,num)));
	// 2010-07-15 原方法四舍五入出现问题,修改成Math.round linzf
	var ws=arguments[0]==null?2:arguments[0];// 如果传入参数：位数为空，那么默认为2位
	var t = new Number(this.valueOf());
	var ws_five ='5';
	/*
	var b = "1";
	for (var i = 0; i < ws; i++) {
		b = b + "0";
	} 
	t = accMul(t ,parseInt(b));alert('1|'+t);
	t = Math.round(t);
	t = t / parseInt(b); alert('2|'+t);
	*/
	t = fixNum(t,ws_five); // 对结果如1.57000001 & 1.56999997 先进行小数位后第五位进行四舍五入
	t = fixNum(t,ws);
	return t;
}
function fixNum(t,ws){
	var b = "1";
	for (var i = 0; i < ws; i++) {
		b = b + "0";
	} 
	t = accMul(t ,parseInt(b)); 
	t = Math.round(t);
	t = t / parseInt(b);  
	return t;
}
/* 精确的乘法算法，不使用JS的（*）运算规则符   */ 
function accMul(arg1,arg2)
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}



/****************
* Date
****************/
Date.prototype.hashCode=function (){
  var l=this.getTime();
  var s=Number.toHexString(l);
  var high=0;
  if(s.length>8)high=parseInt(s.substring(0,s.length-8),16);
  var low=l&0xffffffff;
  return low^high;
}
 
Date.prototype.equals=function (obj){
  /*if(!this.typeMatches(obj))return false;*/
  return this.getTime()==obj.getTime();
}
Date.prototype.compareTo=function (obj){
  /*if(!this.typeMatches(obj))return false;*/
  return (this.getTime()-obj.getTime())&0xffffffff;
}


//日期增减
//参数mode  y: 年, M: 月, w: 星期, d: 日, h: 小时, m: 分钟, s: 秒，默认是日
//alert((new Date()).addTime(10,"w"))
//alert((new Date()).addTime(-50,"d"))
Date.prototype.addTime=function (num, mode){
  if(typeof(mode)=="undefined" || mode == null) mode = "d";
  if(!/[\-]?[\d]+/g.test(num)) return this;
  var _result = this;
  var _year = this.getFullYear();
  var _month = this.getMonth();
  var _day = this.getDate();
  var _hour = this.getHours();
  var _minute = this.getMinutes(); //minute
  var _second = this.getSeconds(); //second
  switch(mode){
    case "y":
      result = new Date(_year + num, _month, _day, _hour, _minute, _second);
      break;
    case "m":
      result = new Date(_year, _month + num, _day, _hour, _minute, _second);
      break;
    case "w":
      result = new Date(_year, _month, _day + (7 * num), _hour, _minute, _second);
      break;
    case "d":
      result = new Date(_year, _month, _day + num, _hour, _minute, _second);
      break;
    case "h":
      result = new Date(_year, _month, _day, _hour + num, _minute, _second);
      break;
    case "m":
      result = new Date(_year, _month, _day, _hour, _minute + num, _second);
      break;
    case "s":
      result = new Date(_year, _month, _day, _hour, _minute, _second + num);
      break;
    default:
      result = new Date(_year, _month, _day + num, _hour, _minute, _second);
  }
  return result;
}


//日期差值
//参数mode  y: 年, m: 月, w: 星期, d: 日, 默认是日
//alert((new Date()).dayDiff((new Date(2002,0,1))))
Date.prototype.dayDiff=function (cDate,mode){
  try{
    cDate.getFullYear();
  }catch(e){
    return (0);
  }
  var base=60*60*24*1000;
  var result=Math.abs(this-cDate);
  switch(mode){
    case "y":
      result/=base*365;
      break;
    case "m":
      result/=base*365/12;
      break;
    case "w":
      result/=base*7;
      break;
    case "d":
      result/=base;
      break;
    default:
      result/=base;
      break;
  }
  return (Math.floor(result));
}

//对日期值进行格式化成字符串
//alert(new Date().format("yyyy-MM-dd"));
//alert(new Date().format("yyyy年MM月dd日"));
//alert(new Date().format("MM/dd/yyyy"));
//alert(new Date().format("yyyy-MM-dd hh:mm:ss S"));
Date.prototype.format=function (format) {
  var o={
    "M+":this.getMonth()+1,//month
    "d+":this.getDate(),//day
    "h+":this.getHours(),//hour
    "m+":this.getMinutes(),//minute
    "s+":this.getSeconds(),//second
    "q+":Math.floor((this.getMonth()+3)/3),//quarter
    "S":this.getMilliseconds()//millisecond
  }
  if(/(y+)/.test(format))
    format=format.replace(RegExp.$1, (this.getFullYear()+"").substr(4-RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+k+")").test(format))
      format=format.replace(RegExp.$1, RegExp.$1.length==1?o[k]:("00"+o[k]).substr((""+o[k]).length));
  return format;
};

//日期格式格式化,本例的toString重写了原来的Date对象的toString方法。//特别注意这个例子，它是重写了原有的一个Date对象的方法。
Date.prototype.toString=function(){
  return this.format("yyyy-MM-dd hh:mm:ss S");
}
//返回yyyy-mm-dd格式的当前日期
Date.prototype.toDateString = function() {
//  var year = this.getFullYear();
//  var month = this.getMonth();
//  var day = this.getDate();
//  return year + "-" + (month + 1)+ "-" + day;
  return this.format("yyyy-MM-dd");
}
//返回yyyymmdd格式的当前日期
Date.prototype.toDateStringNoSplash = function() {
//  var year = this.getFullYear();
//  var month = this.getMonth();
//  var day = this.getDate();
//  return year + "" + (month + 1)+ "" + day;
  return this.format("yyyyMMdd");
}

//计算到今天为止经过了多少天
Date.prototype.daysPassed=function(){
  var date=this;
  if(!(date instanceof Date))  throw new Error(-1,"错误的参数类型，参数date必须是Date对象的实例。");
  var min  = 1000*60;
  var hour = min*60;
  var day  = hour*24;
  return Math.round(((new Date())-(date))/day);
}
//按传入的格式返回一日期样式
Date.prototype.parseDate=function(str, format){
  str = str.toString();
  try {
    if(!str.isDate())
      throw new Error(-1,"错误的参数类型，参数不是日期类型的字符串。");
    var year = str.substring(0,4);
    var month = str.substring(5,7);
    var day = str.substring(8,10);
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    var d= new Date(r[1], r[3]-1, r[4]);
    if(!(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]))
      throw new Error(-1,"错误，参数不是有效的日期字符串。");
  }catch(ex) {
    throw ex;
  }
  return d;
}

//取得当前日期所在月份最后一天的日期
Date.prototype.getLastDayOfMonth=function(){
  var days = new Array(31,30,31,30,31,30,31,31,30,31,30,31);
  var year = this.getFullYear();
  days[1] = ((year%4==0)&&(year%100!=0)||(year%400==0))?29:28;
  var month = this.getMonth();
  var date1 = new Date(year, month, days[month]);
  return date1;
}
//取得当前日期所在的季度
Date.prototype.getQuarter=function() {
  return Math.floor((this.getMonth()+3)/3);
}
//取得当前日期所在季度第一天的日期
Date.prototype.getFirstDayOfQuarter=function(){
  var _quarter = this.getQuarter();
  var _months = new Array(0, 3, 6, 9);
  var _year = this.getFullYear();
  var date1 = new Date(_year, _months[_quarter - 1], 1);
  return date1;
}
//取得当前日期所在季度最后一天的日期
Date.prototype.getLastDayOfQuarter=function(){
  var _quarter = this.getQuarter();
  var _months = new Array(2, 5, 8, 11);
  var _days = new Array(31,30,30,31);
  var _year = this.getFullYear();
  var date1 = new Date(_year, _months[_quarter - 1], _days[_quarter - 1]);
  return date1;
}
//取得当前日期所在年度第一天的日期
Date.prototype.getFirstDayOfYear=function(){
  var _year = this.getFullYear();
  var date1 = new Date(_year, 0, 1);
  return date1;
}
//取得当前日期所在年度最后一天的日期
Date.prototype.getLastDayOfYear=function(){
  var _year = this.getFullYear();
  var date1 = new Date(_year, 11, 31);
  return date1;
}

/****************
* Integer
****************/
function testInteger(){
  alert('Integer test begin:');
  try{
    var i=new Integer(12);
    var j=new Integer(14);
    var k=new Integer(12);
    assert(i.intValue()==12);
    assert(i.toString ()=='12');
    assert(i.hashCode()==12);
    assert(i.equals(k));
    assert(i.compareTo(j)<0);
  }
  catch(e){
    alert(e);
  }
  alert('Integer test end');
}
function Integer(num){
  //private:
  this.value=parseInt(num);

  //public:
  this.intValue=function(){
    return this.value;
  }

  this.toString=function(){
    return ''+this.value;
  }

//  this.hashCode=function(){
//    return this.value;
//  }

  this.equals=function(obj){
    return this.intValue()==obj.intValue();
  }

  this.compareTo=function(obj){
    var i=this.value-obj.value;
    return (i==0)?0:(i>0)?1:-1;
  }
}




//把小数圆整到指定位小数
function toFixedNum(val1, val2) {
  var tmp = new Number();
  if(!tmp.isNumber(val1)) return 0;
  if(!tmp.isNumber(val2)) return val1;
  //2005-12-14更改
  var num = new Number(val1);
  var aa = num.toFixed(val2);
  return aa;
}

var MathUtil = function() {
  this.null2zero = function(val) {
    if(!val || val=="") val = 0;
    return val * 1;
  }
  this.add = function(val1, val2) {
    return (this.null2zero(val1) + this.null2zero(val2));
  }
  this.sub = function(val1, val2){
    return (this.null2zero(val1) - this.null2zero(val2));
  }
  this.mul = function(val1, val2) {
    return (this.null2zero(val1) * this.null2zero(val2));
  }
  this.div = function(val1, val2) {
    val1 = this.null2zero(val1);
    val2 = this.null2zero(val2);
    var result = 0;
    if(val2==0) result = 0;
    else result = (val1 / val2);
    var temp = new Number(result);
    return (temp.toFixed(2));
  }
}
