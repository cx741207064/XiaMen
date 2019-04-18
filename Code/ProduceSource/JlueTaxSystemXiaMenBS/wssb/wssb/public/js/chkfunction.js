ERR_NUMBER = "非法的数值！";
ERR_BIG_NUMBER = "数额太大，系统无法接受！";
ERR_STRING_LONG = "输入超长。最大长度为";
ERR_YEAR = "非法的年份！";
ERR_MONTH = "非法的月份！";
ERR_QHMONTH = "非法的期！";
ERR_DAY = "非法的日期！";
ERR_EMAIL = "非法的Email地址！";
ERR_NUMBER_NULL = "必须输入数值";
ERR_INT_NULL = "必须输入数值";
ERR_STRING_NULL = "必须输入";
ERR_SELECT_NULL = "必须选择";

ERR_NUMBER2 = "Invalid number";
ERR_BIG_NUMBER2 = "Number too big to be accepted by system";
ERR_STRING_LONG2 = "Input too long. Maximal length is ";
ERR_YEAR2 = "Invalid year";
ERR_MONTH2 = "Invalid month";
ERR_QHMONTH2 = "Invalid month";
ERR_DAY2 = "Invalid date";
ERR_EMAIL2 = "Invalid e-mail address";
ERR_NUMBER_NULL2 = "Must input";
ERR_INT_NULL2 = "Must input";
ERR_STRING_NULL2 = "Must input";
ERR_SELECT_NULL = " Must select";

msgLang=1;

function trim(val)
{
	var str = val+"";
	if (str.length == 0) return str;
	var re = /^\s*/;
	str = str.replace(re,'');
	re = /\s*$/;
	return str.replace(re,'');
}

function checknumber(data,lbl){
	var tmp ;
	if (data == "") {
                       alert(lbl+":"+ERR_NUMBER_NULL);
                       return false;
                  }
	var re = /^[\-\+]?([1-9]\d*|0|[1-9]\d{0,2}(,\d{3})*)(\.\d+)?([Ee][\-\+]?\d+)?$/;
	if (re.test(data)){
		gar = data + '.';
		tmp = gar.split('.');
		if (tmp[0].length > 15) {
			if (msgLang==2)
				alert(lbl+":"+ERR_BIG_NUMBER2);
			else
				alert(lbl+":"+ERR_BIG_NUMBER);
			return false;
		}
		return true;
	}
	if (msgLang==2)
		alert(lbl+":"+ERR_NUMBER2);
	else
		alert(lbl+":"+ERR_NUMBER);
	return false;
}

function checknumber_null(data,lbl){
	if (trim(data)==""){
		if (msgLang==2)
			alert(lbl+":"+ERR_NUMBER_NULL2);
		else
			alert(lbl+":"+ERR_NUMBER_NULL);
		return false;
	}
	return true;
}

function checkint_null(data,lbl){
	if (trim(data)==""){
		if (msgLang==2)
			alert(lbl+":"+ERR_INT_NULL2);
		else
			alert(lbl+":"+ERR_INT_NULL);
		return false;
	}
	return true;
}

function checkstring_null(data,lbl)
{
	if (trim(data)==""){
		if (msgLang==2)
			alert(lbl+":"+ERR_STRING_NULL2);
		else
			alert(lbl+":"+ERR_STRING_NULL);
		return false;
	}
	return true;
}

function checkint(data,lbl)
{
	if (data == "") return true;
	var re = /^[\-\+]?([0-9]\d*|0|[1-9]\d{0,2}(,\d{3})*)$/;
	if (re.test(data)) 
		return true;
	if (msgLang==2)
		alert(lbl+":"+ERR_NUMBER2);
	else
		alert(lbl+":"+ERR_NUMBER);
	return false;
}

function testint(data)
{
	if (data == "") return true;
	var re = /^[\-\+]?([0-9]\d*|0|[1-9]\d{0,2}(,\d{3})*)$/;
	if (re.test(data)) 
		return true;
   else
   	return false;
}

function checkstring(str,maxlen,lbl)
{
	if (str.length > maxlen){
		if (msgLang==2)
			alert(lbl+":"+ERR_STRING_LONG2+maxlen);
		else
			alert(lbl+":"+ERR_STRING_LONG+maxlen);
		return false;
	}
	return true;
}

function checkyear(year,lbl) //只允许为1900-2150之间的数字
{
	if (year.length ==4)
   {
      var temp = parseInt(year);
      if (!isNaN(temp))
      {
         //if (year == 0) return true;
         low = 1900;
         high = 2150;
         if ((year >= low) && (year <=high)) return true;
      }
	}
	errorYear(lbl);
	return false;
}

function testyear(year,lbl) //允许为空或为1900-2150之间的数字
{
   if(trim(year)=="") return true;

   return checkyear(year,lbl);
}

function checkmonth(month,low,high,lbl)
{
	var temp = parseInt(month,10);
   if (!isNaN(temp))
	{
		var tmp = parseInt(low);
		if (isNaN(tmp)) low = 1;
		tmp = parseInt(high);
		if (isNaN(tmp)) high = 12;
		if ((temp >= low) && (temp <= high))
		{
			return true;
		}
	}
	errorMonth(lbl);
	return false;
}

function testmonth(month,low,high,lbl) //允许为空
{
   if(trim(month)=="") return true;

   return checkmonth(month,low,high,lbl);
}

function checkqhmonth(qhmonth,low,high,lbl)
{
	var temp = parseInt(qhmonth);
    if (!isNaN(temp))
	{
		var tmp = parseInt(low);
		if (isNaN(tmp)) low =1;
		tmp = parseInt(high);
		if (isNaN(tmp)) high =24;
		if ((temp >= low) && (temp <= high))
		{
			return true;
		}
	}
	errorQHMonth(lbl);
	return false;
}

function errorYear(lbl)
{
	if (msgLang==2)
		alert(lbl+":"+ERR_YEAR2);
	else
		alert(lbl+":"+ERR_YEAR);
}
function errorMonth(lbl)
{
	if (msgLang==2)
		alert(lbl+":"+ERR_MONTH2);
	else
		alert(lbl+":"+ERR_MONTH);
}

function errorQHMonth(lbl)
{
	if (msgLang==2)
		alert(lbl+":"+ERR_QHMONTH2);
	else
		alert(lbl+":"+ERR_QHMONTH);
}

function errorDay(lbl)
{
	if (msgLang==2)
		alert(lbl+":"+ERR_DAY2);
	else
		alert(lbl+":"+ERR_DAY);
}

function checkday(day,year,month,lbl)
{
	err = false;

	if (!testint(year) || (year < 1900)) {
		errorYear(lbl);
		return false;
	}
	if (!testint(month) || (month < 1) || (month > 12)){
		errorMonth(lbl);
		return false;
	}
	if (!testint(day) || (day < 1) || (day > 31)){
		errorDay(lbl);
		return false;
	}
	
	switch (parseInt(month,10)){
		case 2:
			high =28;
			if ((year % 4 == 0) && (year % 100 != 0))
				{high =29;}
			else if (year % 400 == 0) {high=29;}
			break;
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			high =31;
			break;
		default:
			high =30;
	}
	if ((day < 1) || (day > high)){
		errorDay(lbl);
		return false;
	}
	return true;
}

function testday(day,year,month,lbl) //允许为空
{
   if(trim(day)=="") return true;

   return checkday(day,year,month,lbl);
}

function checkemail(umail,lbl)
{
	umail=trim(umail);
	if (umail.length == 0)
    {
		alert(lbl+":"+ERR_EMAIL);
		return false;
    }
	var re=/^[\-!#\$%&'\*\+\\\.\/0-9=\?A-Z\^_`a-z{|}~]+@[\-!#\$%&'\*\+\\\.\/0-9=\?A-Z\^_`a-z{|}~]+(\.[\-!#\$%&'\*\+\\\.\/0-9=\?A-Z\^_`a-z{|}~]+)+$/;
	if (re.test(umail))
		return true;
	if (msgLang==2)
		alert(lbl+":"+ERR_EMAIL2);
	else
		alert(lbl+":"+ERR_EMAIL);
	return false;
}

function checktime(ctime,lbl)
{
	if (ctime.length == 0) return true;

	var re=/^(([0-9]|[01][0-9]|2[0-3])(:([0-9]|[0-5][0-9])){0,2}|(0?[0-9]|1[0-1])(:([0-9]|[0-5][0-9])){0,2}\s?[aApP][mM])?$/;
	return re.test(ctime);
}

function checkdate(bdate)
{
	if (bdate.length == 0)
	{
		alert ("请输入日期！");
	    return false;
	}

	var re = /^([1-2]\d{3})\-(0?[1-9]|11|12|10)\-([1-2]?[0-9]|0[1-9]|30|31)$/;
	return re.test(bdate);
}

function checkdigit(data,lbl)
{
   for(i=0; i<data.length; i++)
   {
      var t=parseInt(data.substring(i,i+1));
      if(isNaN(t))
      {
         alert(lbl+":"+ERR_NUMBER);
         return false;
      }
   }
   return true;
}

function checksfz(t)
{
   var t1=trim(t.value);
   if(t1!="")
   {
      if(t1.length==15)
      {
         if(!checkdigit(t1,"身份证"))
         {
            t.focus();
            return false;
         }
      }
      else if(t1.length==18)
      {
         var t2=t1.substring(0,17);
         if(!checkdigit(t2,"身份证"))
         {
            t.focus();
            return false;
         }

         var t3=t1.substring(17);
         if(isNaN(t3))
         {
            if(t3.toLowerCase()!="x")
            {
               alert("身份证:非法的数值！");
               t.focus();
               return false;
            }
         }
      }
      else
      {
         alert("身份证:非法的数值！");
         t.focus();
         return false;
      }
   }
   return true;
}

function gotopage(totalpage,link)
{
   var t=document.all("gopage");
   var t1=trim(t.value);

   if(t1=="")
   {
      alert("请输入要转到的页码！");
      t.focus();
      return;
   }

   if(!checkdigit(t1,"页码"))
   {
      t.value="";
      t.focus();
      return;
   }

   var t2=parseInt(t1,10);
   if(t2<1)
   {
      alert("请输入要转到的页码！");
      t.value="";
      t.focus();
      return;
   }

   if(t2>totalpage)
      t2=totalpage;

   document.location=link+t2;
}

function checkvaild(t) //检查输入框内容是否有效，不允许输入<%、<script字符
{
   var s=(t.value).toLowerCase();
   if(s.indexOf("<%")!=-1 || s.indexOf("<script")!=-1)
   {
      alert("您输入的内容含有无效字符，请输入正确的内容！");
      t.focus();
      return false;
   }
   return true;
}

function inputPureNumberType() {
	if(( 
		(event.keyCode == 8) || //"backspace" of the left keyboard
		(event.keyCode == 9) ||	//"tab" of the left keyboard
		(event.keyCode == 46) || //del" of the right keyboard
		(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board 
		(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard		
		(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
	  )) == false){
	event.returnValue = false;
	}
}
 function inputPureNumberandLetter() //只允许输入数字和字母
{
    //只接收按键: 数字/"-"/删除/方向/Tab/退格键(注意：此方法不能禁止输入 !@#$%^&*() 这10个字符，需另外在onblur时做检查)
	if((
		(event.keyCode == 8) || //"backspace" of the left keyboard
		(event.keyCode == 9) ||	//"tab" of the left keyboard
		(event.keyCode == 46) || //del" of the right keyboard
		(event.keyCode >= 35 && event.keyCode <= 40) || // direction keys of the right key board
		(event.keyCode >= 48 && event.keyCode <= 57) || //0-9 of the left keyboard
		(event.keyCode >= 96 && event.keyCode <= 105) || //0-9 of the right keyboard
		(event.keyCode >= 65 && event.keyCode <= 90 //a-z of the left keyboard
	  )) == false){
	event.returnValue = false;
	}

}
/**********************************************************
* 判断指定日期是否在当前日期days天之内,若是则返回true,否则返回false
* @param s:指定日期，注意日期的前10个字符必须是 yyyy-MM-dd
* @param days:指定限制的天数
**********************************************************/
function comparedate(s,days)
{
   var y = s.substring(0,4);
   var m = s.substring(5,7);
   var day = s.substring(8,10);

   var d = new Date();
   var now = d.getTime();

   d.setFullYear(y);
   d.setMonth(parseInt(m,10)-1);
   d.setDate(day);
   d.setHours("0");
   d.setMinutes("0");
   d.setSeconds("0");

   var t1 = d.getTime();
   
   var sub = ((now - t1) / 1000) / (24*60*60);
   if(sub < days && sub > (0 - days))
      return true;
   else
      return false;
}

/**********************************************************
* 判断指两个日期间隔days天,若是则返回true,否则返回false
* @param ks:指定开始日期，注意日期的前10个字符必须是 yyyyMMdd
* @param ks:指定结束日期，注意日期的前10个字符必须是 yyyyMMdd
* @param days:指定限制的天数
**********************************************************/
function compareqsdate(ks,js,days)
{
   var ks_y = ks.substring(0,4);
   var ks_m = ks.substring(4,6);
   var ks_day = ks.substring(6,8);

   var js_y = js.substring(0,4);
   var js_m = js.substring(4,6);
   var js_day = js.substring(6,8);

   var d = new Date();



   d.setFullYear(ks_y);
   d.setMonth(parseInt(ks_m,10)-1);

   d.setDate(ks_day);
   d.setHours("0");
   d.setMinutes("0");
   d.setSeconds("0");

   var t1 = d.getTime();

   d.setFullYear(js_y);
   d.setMonth(parseInt(js_m,10)-1);

   d.setDate(js_day);
   d.setHours("0");
   d.setMinutes("0");
   d.setSeconds("0");

   var t2 = d.getTime();

   var sub = ((t2 - t1) / 1000) / (24*60*60);


   if(sub < days && sub > (0 - days))
      return true;
   else
      return false;
}
/**********************************************************
* 判断指日期前一个月的实际天数,
* @param ks:指定日期，注意日期的前10个字符必须是 yyyyMMdd
**********************************************************/
function getdays(js)
{

   var js_y = js.substring(0,4);
   var js_m = js.substring(4,6);
   var js_day = js.substring(6,8);

   var d = new Date();
   d.setFullYear(js_y);
   d.setMonth(parseInt(js_m,10)-2);

   d.setDate(parseInt(js_day)-1);

   d.setHours("0");
   d.setMinutes("0");
   d.setSeconds("0");

   var t1 = d.getTime();


   d.setFullYear(js_y);
   d.setMonth(parseInt(js_m,10)-1);

   d.setDate(js_day);
   d.setHours("0");
   d.setMinutes("0");
   d.setSeconds("0");

   var t2 = d.getTime();

   var sub = ((t2 - t1) / 1000) / (24*60*60);

    return sub;
}