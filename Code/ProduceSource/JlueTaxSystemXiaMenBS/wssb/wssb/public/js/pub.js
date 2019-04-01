/**公共函数模块
 * @copyright digitalChina 2002
 * @author xiaojf
 * @date 2002-12-14
 */

/**在本模块的checkDate函数中可识别并格式化的数据类型可包括
 * s 字符串类型	(不分大小写,必须为组件'label'的第二个字符)
 * n 整型		(不分大小写,必须为组件'label'的第二个字符)
 * c 货币型		(不分大小写,必须为组件'label'的第二个字符)
 * d 日期型		(不分大小写,必须为组件'label'的第二个字符)
 * p 百分率类型	(不分大小写,必须为组件'label'的第二个字符)
 * 对于输入框,规定字符 'Y' 为必须填项 'N' 为可空项 (不分大小写,必须为组件'label'的第一个字符)
 */

/**锁定指定表单中的所有组件
 * @param fName 表单的名称
 */
function lockAll(fName)
{
	for(var i=0;i<fName.elements.length;i++)
		{
			var obj=fName.elements[i];
			obj.disabled=true;
		}
}

/**设置指定表单中的所有组件为可用
 * @ fName 表单的名称
 */
function free(fName)
{
	for(var i=0;i<fName.elements.length;i++)
		{
			var obj=fName.elements[i];
			obj.disabled=false;
		}
}

/**置指定表单中所有的文本框为初始值
 * @ fName 表单的名称
 */
function clear(fName)
{

	for(var i=0;i<fName.elements.length;i++)
		{
		    var obj=fName.elements[i];
			if(typeof(obj.label)!="string")
			{
				continue;
			}
			if(obj.label=="")
			{
			   continue;
			}
			var tempStr=obj.label.charAt(1);
			if((tempStr=="N")||(tempStr=="n"))
			{
				obj.value="0";
			}
			if((tempStr=="C")||(tempStr=="c"))
			{
				obj.value="0.00"
			}
			if((tempStr=="D")||(tempStr=="d"))
			{
				obj.value=""
			}
		}
}

/**验证必填项是否填写,验证数据是否合法
 * @ fName 表单的名称
 */
function checkDate(fName)
{

	for(var i=0;i<fName.elements.length;i++)
	{
		var obj=fName.elements[i];

		if(typeof(obj.label)!="string")
		{
				continue;
		}
		if(obj.label=="")
		{
			   continue;
		}
		if((obj.label.charAt(0)!="Y")&&(obj.label.charAt(0)!="y")&&
		(obj.label.charAt(0)!="N")&&(obj.label.charAt(0)!="n")){alert("元素的'label'格式错误!");return false;}

		//通过第一个字符验证是否为必填项 'Y'或'y'为必填,'N'或'n'为可空
		var str1=obj.label.charAt(0);
		//通过验证第二个字符来判断类型
		var str2=obj.label.charAt(1);
		var str3=obj.label.substring(2,obj.label.length);
		if((str1=='Y')||(str1=='y'))
		{
			if(obj.value=="")
			{alert(str3+"不能为空!");obj.focus();return false;}

			if((str2=="N")||(str2=="n"))
						{
							if(isNaN(parseInt(obj.value)))
							{
								alert(str3+"必须为数字!");
								obj.value="";
								obj.focus();
								return false;
							}
						}
			if((str2=="D") ||(str2=="d"))
						{
							isdate(obj);

						}
			if((str2=="C") ||(str2=="c") ||(str2=="P") ||(str2=="p"))
			{
				var tmpV=obj.value;
				if(obj.value.charAt(0)=="-")
				{
					tmpV=obj.value.substring(1,obj.value.length)
				}
				if(isNaN(parseInt(tmpV) || tmpV==NaN || tmpV==""))
				{
					if(str2=="P"||str2=="p")
					{alert(str3+"为非法百分率格式!");obj.value="0.00";return false;}
					if(str2=="C"||str2=="c")
					{alert(str3+"为非法货币格式!");obj.value="0.00";return false;}
				}

				if(tmpV.indexOf(".")==-1)
				{
					if(parseInt(tmpV)==0)
					{obj.value="0.00";}
					if(parseInt(tmpV)!=0)
					//alert("在checkdate里");
					{obj.value=obj.value+".00"}
				}


			}

			if((str2=="S") ||(str2=="s"))
			{
			}
		}
	}
	return true;
}

/**该函数在日期型的文本框失去焦点(onchange)时触发,用来格式化日期
 * @ obj 需要检验的文本框对象
 */
function isdate(obj)
 {
	//if(b!="1"){return};
	var str1=obj.label.charAt(0);
	var str2=obj.label.charAt(1);
	var str3=obj.value;
	var str4=obj.label.substring(2,obj.label.length);
	if((str1=="Y")||(str1=="y"))
	{
		if((str3.length!=10) && (str3.length!=8))
		{
			alert("'"+str4+"'日期格式错误!");
			obj.value="";
			obj.focus();
			return;
		}
		if(str3.length==10)
		{
			if(str3.indexOf(".")!=-1)
			{
				if(str3.indexOf(".")!=4 || str3.lastIndexOf(".")!=7)
				{
					alert("'"+str4+"'日期格式错误!");
					obj.value="";
					obj.focus();
					return;
				}
			}	
			if(str3.indexOf("-")!=-1)
			{
				if(str3.indexOf("-")!=4 || str3.lastIndexOf("-")!=7)
				{
					alert("'"+str4+"'日期格式错误!");
					obj.value="";
					obj.focus();
					return;
				}
			}
		}
		if(str3.length==10)
		{
			str3=str3.substring(0,4)+str3.substring(5,7)+str3.substring(8,10);
		}	
		var yVal=str3.substring(0,4);
		var mVal=str3.substring(4,6);
		var dVal=str3.substring(6,8);
		//日期大于1900－01－01，小于2072－12－31
		if((parseInt(yVal)<1900) || (parseInt(yVal)>2072)|| yVal==0000)
		{
			alert(str4+"日期必须在'1900年01月01号'和'2072年12月31号'之间.");
			obj.focus();
			return;
		}
		
		if(mVal.charAt(0)=="0")
		{
			var mValTmp=mVal.charAt(1);
			if(parseInt(mValTmp)==0 ||parseInt(mValTmp)>12)
			{
				alert("'"+str4+"'日期错误!");
				obj.value="";
				obj.focus();
				return;
			}
		}
		if(dVal.charAt(0)=="0")
		{
			var dValTmp=dVal.charAt(1);
			if(parseInt(dValTmp)==0 ||parseInt(dValTmp)>31)
			{
				alert("'"+str4+"'日期错误!");
				obj.value="";
				obj.focus();
				return;
			}
		}
		obj.value=str3.substring(0,4)+"-"+str3.substring(4,6)+"-"+str3.substring(6,8);
	}	
 }
function ValDate(M, D, Y)
{
	Months= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	Leap = false;
	if((Y % 4 == 0) && ((Y % 100 != 0) || (Y %400 == 0)))
		Leap = true;
	if((D < 1) || (D > 31) || (M < 1) || (M > 12) || (Y < 0))
		return(false);
	if((D > Months[M-1]) && !((M == 2) && (D > 28)))
		return(false);
	if(!(Leap) && (M == 2) && (D > 28))
		return(false); 
	if((Leap) && (M == 2) && (D > 29))
		return(false); 
}
/**格式化货币类型的数据该函数在文本框的onchange事件中调用
 * @ param obj 需要格式化组件
 */
function iscurrency111(obj)
{
	if(obj.value==""){obj.value="0.00";}
	var f=obj.value;
	var fb=false;
	if(obj.value.charAt(0)=="-")
	{
		f=obj.value.substring(1,obj.value.length)
		fb=true;
	}
	if(isNaN(parseFloat(f)) || obj.value.charAt(0)==".")
	{
		var strs=obj.label.substring(2,obj.label.length);
		alert(strs+"为非法货币格式1!");
		obj.value="0.00"
		fb=false;
		return;
	}
	var iB=Math.pow(10,2);//pow幂
	obj.value= Math.round(parseFloat(f)*iB)/iB;
	if(obj.value.indexOf(".")==-1)
	{
		obj.value=obj.value+".00";
		fb=false;
		return;
	}
	var tempstr1=obj.value;
	if(tempstr1.indexOf(".")!=-1){
		if(tempstr1.substring(tempstr1.indexOf("."),tempstr1.length).lenght==1)
		{
			obj.value=obj.value+"0";
			if((fb==true) && (obj.value.charAt("0")!="-")){obj.value="-"+obj.value}
			fb=false;
			return;
		}
		if(tempstr1.substring(tempstr1.indexOf("."),tempstr1.length).lenght==0)
		{

			obj.value=obj.value+"00";
			if((fb==true) && (obj.value.charAt("0")!="-")){obj.value="-"+obj.value}
			fb=false;
			return;
		}
	}
}

/**格式化货币类型的数据该函数在文本框的onchange事件中调用
 * @ param obj 需要格式化组件
 */
function iscurrency(obj)
{
	if(obj.value==""){obj.value="0.00";}
	var f=obj.value;
	var fb=false;
	if(obj.value.charAt(0)=="-")
	{

		f=obj.value.substring(1,obj.value.length);
		fb=true;
	}
//	if(isNaN(parseFloat(f)) || obj.value.charAt(0)==".")
	if(isNaN(parseFloat(f)))              //1113 updated	
	{
		var strs=obj.label.substring(2,obj.label.length);
		//alert(strs+"为非法货币格式!");
		obj.value="0.00"
		fb=false;
		return;
	}
	var iB=Math.pow(10,2);//pow幂
	obj.value= Math.round(parseFloat(f)*iB)/iB;

	if(obj.value.indexOf(".")==-1)
	{
		if(fb==true)
		{obj.value="-"+obj.value+".00";}
		else
		{obj.value=obj.value+".00";}
		return;
	}
	var ff=obj.value;
	if(ff.indexOf(".")!=-1){
		if(ff.substring(ff.indexOf("."),ff.length).length==1)
		{
			obj.value=obj.value+"0";
			if(fb==true){obj.value="-"+obj.value}

			return;
		}
		if(f.substring(f.indexOf("."),f.length).length==0)
		{

			obj.value=obj.value+"00";
			if(fb==true)
				{obj.value="-"+obj.value}

			return;
		}
		if(fb==true){obj.value="-"+obj.value;}
	}
}


/**格式化百分率类型的数据,该函数在文本框的onchange事件中调用
 *
 */
function ispercent(obj){
	if(obj.value.indexOf("%")==-1)
	{
		obj.value=obj.value+"%"
	}
}

/**在onkeyup事件里触发,按类型约束输入的字符
 * @ param obj 输入框对象
 */
function onKeyDownT(obj)
{
	var b=obj.label.charAt(1);
	b=b.toLowerCase();
	if(event.keyCode == 8 || event.keyCode == 46){
		/*var rng = window.document.selection.createRange();
		if (rng!=null && rng.parentElement().type == "text")
		{
			if(rng.text.length==rng.parentElement.value.length)
			{
				if(b=="n"){rng.parentElement.value=="0";}
				if(b=="c"|| b=="p"){rng.parentElement.value=="0.00";}
				if(b=="d"|| b=="s"){rng.parentElement.value=="";}
			}
	    }
		else*/ if(obj.value!="")
		{
			obj.value=obj.value.substring(0,obj.value.length-1);
		}
	}
	switch(b){
		case 'n':
			if(event.keyCode == 13){event.keyCode = 9;}
			if((
			(event.keyCode == 9) ||	//"tab" of the left keyboard
			(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board
			(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard
			(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
			)) == false){
			event.returnValue = false;
			}
		     break;
		case 'p':
		case 'c':
		if(event.keyCode == 13){event.keyCode = 9;}
		if((
			(event.keyCode == 9) ||	//"tab" of the left keyboard
			(event.keyCode == 109) || //"-" of the right keyboard
			(event.keyCode == 110) || //"." of the left keyboard
			(event.keyCode == 189) || //"-" of the left keyboard
			(event.keyCode == 190) || //"." of the right keyboard
			(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board
			(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard
			(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
			  )) == false){
			event.returnValue = false;
			}
//		if(event.keyCode == 109 ||event.keyCode == 189){
//			event.returnValue = false;
//		}
		break;
		case 'd':
			if(event.keyCode == 13)
			{
				/*if(obj.value.length!=10)
				{event.returnValue = false;}
				else{event.keyCode = 9;}*/
				event.keyCode = 9;
			}
		if((
			(event.keyCode == 9) ||	//"tab" of the left keyboard
			(event.keyCode == 110) || //"." of the left keyboard
			(event.keyCode == 190) || //"." of the right keyboard
			(event.keyCode == 109) || //"-" of the right keyboard
			(event.keyCode == 189) || //"-" of the left keyboard
			(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board
			(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard
			(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
			 )) == false){
			event.returnValue = false;
			}
		else{
				if(obj.value.length==5)
				{
					if(event.keyCode!=48 && event.keyCode!=49 && event.keyCode!=96 && event.keyCode!=97)
					{event.returnValue=false;}
				}
				if(obj.value.length==8)
				{
					if(obj.value.charAt(5)==0 && obj.value.charAt(6)==2)
					{
						if(event.keyCode!=48 && event.keyCode!=49 && event.keyCode!=50 && event.keyCode!=96 && event.keyCode!=97 && event.keyCode!=98)
						{
							event.returnValue=false;
						}
					}
					if(event.keyCode!=48 && event.keyCode!=49 && event.keyCode!=96 && event.keyCode!=97 && event.keyCode!=98 && event.keyCode!=99 && event.keyCode!=50 && event.keyCode!=51)
					{event.returnValue=false;}
				}
			if(event.keyCode==109 || event.keyCode==189 || event.keyCode==110 ||event.keyCode==190)
			{event.returnValue=false;}

			if(obj.value.length==4)
			{obj.value=obj.value+"-";}
			if(obj.value.length==7)
			{obj.value=obj.value+"-";}
			if(obj.value.length==10)
			{event.returnValue=false;}
		}
	}
}

/**在onkeyup事件里触发,约束输入的字符
 * @ param obj 输入框对象
 */
function onKeyUpT(obj)
{
	var t=obj.label.charAt(1);
	t=t.toLowerCase();
	strError = "";
	switch(t){
		case 'n':
		break;
	//	case n
		break;
		case 'c':
		break;
		case 'p':
		break;
		case 'd':
		if(event.keyCode != 8 && event.keyCode != 46){//denote "backspace" and "del" keys.
			if(obj.value.length == 4 || obj.value.length == 7){
				if(obj.value.indexOf(".") != -1){
					if(charCounter(obj.value,".")<2)
						 obj.value += ".";
				}
				else
					if(charCounter(obj.value,"-")<2)
						 obj.value += "-";
			}
		}
		break;
	}
}
/**限制小数位数
 *
 */
function charCounter(str,c)
{
	strError = "";
	var i = 0;
	var count = 0;
	while(i<str.length){
		if(str.charAt(i) == c) count++;
		i++;
	}
	return count;
}
/**格式化计算后的值
 *@ obj 接收值文本框
 *@ return 格式化后的值
 */
 function chg(obj){
if(isNaN(obj.value) || obj.value==""){obj.value="0.00";return;}
	var iB=Math.pow(10,2);//pow幂
	obj.value= Math.round(parseFloat(obj.value)*iB)/iB;
	var s=obj.value;
	if(s.indexOf(".")==-1)
	{
		if(s=="0"){s="0.00"}
		else{s=s+".00"}
	}
	return s;
 }
//功能：判断是否为显示页面
function display(fName){

	if(document.fName.TABLE_ACTION.value=="display")
	{
		for(var i=0;i<fName.elements.length;i++)
		{
			var obj=fName.elements[i];
			obj.readonly=true;
		}
	}
}




//检查DataWindow中输入数据的是否为数字
function chkNum_dw(myvalue){
  var invalidate1="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var invalidate2="`-=\;',/~!@#$%^&*()_+|:<>?";
  var indexstr="";
  for (var i=0;i<invalidate1.length;i++)
  {
		indexstr=invalidate1.substr(i,1);
		if(myvalue.toString().indexOf(indexstr)!=-1){
		  alert("警告：\n您输入了非数字型数据");
		  return false;
		}
  }

  for (var i=0;i<invalidate2.length;i++)
  {
		indexstr=invalidate2.substr(i,1);
		if(myvalue.toString().indexOf(indexstr)!=-1){
		  alert("警告：\n您输入了非数字型数据");
		  return false;
		}
  }

  if (myvalue.toString().indexOf(".")==0)
  {
	  alert("警告：\n您输入错误");
	  return false;
  }

  return true;
}



/**
 * 验证输入域是否合法，并作相应格式转换
 * @ fName 输入域对象
 */
function chkInput(obj)
{
    if (!chkTxtFldLbl(obj.label)) {
        return false;
    }

    var canNull = (obj.label.charAt(0).toLowerCase() == "n");
    var type = obj.label.charAt(1).toLowerCase();
    var name = obj.label.substring(2, obj.label.length);

    if (obj.value == "") {

        if (type == "n") {
            obj.value = "0";
            return true;
        }

        if (type == "c") {
            obj.value = "0";
            return true;
        }

        if ( (type == "s" || type == "d") && !canNull ) {

            alert("警告：\n"+name + "不能为空，请您填写。");
            return false;
        }

        return true;
    }

    if (type == "n" && isNaN(parseInt(obj.value))) {

        alert("警告：\n"+ name + "应为整数，请您修改。");
        obj.value = "0";
        obj.focus();
        return false;

    } else if (type == "d") {

        if (!chkDate(obj)) {
            return false;
        }

    } else if (type == "c") {

        if (!chkCurrency(obj)) {
            return false;
        }

    } else if ( type == "s") {

    }
}

/**
 * 检测输入域的label格式是否正确
 * @param str 输入域的label
 */
function chkTxtFldLbl(str) {

    if (str == "" || typeof(str) != "string") {
        return false;
    }

    if ((str.charAt(0) != "Y") && (str.charAt(0) != "y") &&
        (str.charAt(0) != "N") && (str.charAt(0) != "n")) {

        alert("警告：\n输入域" + str + "的label格式错误。\n输入域的label应以Y(y)或N(n)开头。");
        return  false;
    }

    return true;
}


function chkCurrency(obj) {

	var f = obj.value;

	if(isNaN(parseFloat(f)) || obj.value.charAt(0) == ".") {
		var strs = obj.label.substring(2, obj.label.length);
		alert("警告：\n"+strs + "应为两位小数，请您修改。");
		obj.value="0.00"
		return;
	}

	var iB = Math.pow(10, 2);// 10的2次幂
	obj.value = Math.round(parseFloat(f)*iB)/iB;

}



function chkDate(obj) {

    var year  = parseInt(rmLeadZero(obj.value.substr(0, 4)));
    var month = parseInt(rmLeadZero(obj.value.substr(4, 2)));
    var day   = parseInt(rmLeadZero(obj.value.substr(6, 2)));

    if (obj.value.length != 8 || isNaN(parseInt(obj.value))) {
        alert("警告：\n日期格式错误。\n请使用8位数字表示日期。\n如：使用20021002代表2002年10月02日。");
        obj.focus();
        return false;
    }

    if ( year  < 1970 || year  > 2020 ||
         month < 1    || month > 12   ||
         day   < 1    || day   > 31) {
        alert("警告：\n日期格式错误。\n请确保您输入的日期格式与范围均正确。");
        obj.focus();
        return false;
    }

    return true;
}



function truncFloat(floatnum)
{
	return Math.round(parseFloat(parseInt((floatnum * 1000).toString()).toString()) / 10) / 100;
  //return parseFloat(parseInt((floatnum * 100).toString()).toString()) / 100;
}

//如果取值为NULL值，则置为""
function nu(fName){
	for(var i=0;i<fName.elements.length;i++)
		{
		    var obj=fName.elements[i];
			if(obj.value==null)
			{
				obj.value="";
			}
		}
}

//四舍五入
function isreal(thestr)
{

if ((thestr=="0.00")||(thestr=="0")||(thestr==''))
{return 0;}
var thestr=String(thestr);
var ttt=thestr.indexOf("-");
var dotlst=thestr.indexOf(".");
var dotend=thestr.length;
if ((dotlst==-1)||(dotend-dotlst<=3)) {return thestr;}
else
{
	var dot2nd=thestr.indexOf(".");

	var intpart=thestr.substring(0,dot2nd);

	var decpart=thestr.substring(dot2nd+3,dot2nd+4);

	var dec=thestr.substring(dot2nd+1,dot2nd+3);

    var thestr1;
	if(parseInt(decpart)>=5)
	{
	  var tmp1="1";

	  if(parseInt(dec)==0)
		{
			var t1=dec.substring(1,2);
			thestr1=parseInt(t1)+parseInt(tmp1);
	    }
      else
		{
		  thestr1=parseInt(dec)+parseInt(tmp1);
		}
	 if(thestr1==100)
	  {
		var tmp2="1";
		if(String(ttt)=="0")
		{
		  tmp2="-1";
		}
		thestr=parseInt(intpart)+parseInt(tmp2);
		thestr=String(thestr)+".00";
	  }
	  else if(thestr1<=9)
	  {
		 thestr=String(intpart)+".0"+String(thestr1);
	  }
	  else
	  {
		thestr=String(intpart)+"."+String(thestr1);
	  }
	 }
	else
	{thestr=String(intpart)+"."+String(dec);}
		return thestr;
	}
  }
//日期校验
//onkeyup="onkeyupDate(this)" onkeydown="onkeyDnDate(this)" onblur="onkeyupDate(this)"



function onkeyupDate( obj )
{
	var KEY_BACKSPACE	= 8;
	var CHARS = "0123456789";

	//获取编辑框内容
	var szValue = obj.value;
	var iKeyCode = event.keyCode;


	//年份必须以1或2开头,当输入第一数字时候
	if( szValue.length >= 1 )
	if( szValue.charAt(0) != "1" && szValue.charAt(0) !="2" )
	{
		alert( "年份必须以1或2开头!\n请重新输入" );
		obj.value = "";
		return ;
	}
	
	if( iKeyCode != KEY_BACKSPACE ) 
	{
	//当首位是1的时候自动添加9，当首位是2的时候自动添加0
		if( szValue == "1"  )
			obj.value = obj.value + "9";
		if( szValue == "2"  )
			obj.value = obj.value + "0";
	}
			
	//当输入满4位或7位数字的时候，则自动在年数字后面加上分隔符号		
	if( iKeyCode != KEY_BACKSPACE )
	{ 	
		if( szValue.length == 4  )
			obj.value = obj.value + "-";
		if( szValue.length == 7  )
			obj.value = obj.value + "-";
	}
	
	var i;

	//检查年份的合法性
	if( szValue.length >= 1)
	for(  i = 0 ; i < 4 ; i ++ )
	{
		if( CHARS.indexOf( szValue.charAt(i) ) == -1 )
		{
			alert( "年份表达式中包括不正确的字符!\n请重新输入。" );
			event.returnValue = false;
			obj.value = "";
			return;
		}
		if( i == szValue.length -1 )
			break;
	}

	//检查年份分隔符的合法性
	if( szValue.length >= 5 )
	if( szValue.charAt(4) != "-" )
	{
		alert( " 年份分隔符表达不正确!\n请重新输入。" );
		event.returnValue = false;
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}
/*
	//注释部分,限制了交互性,对于1-9各月,不要求用户必须先录入0

	//检查月份首位的合法性
	if( szValue.length >= 6  )
	if( szValue.charAt(5) != "1" && szValue.charAt(5) != "0")
	{
		alert( " 月份表达式不正确!\n请重新输入。" );
		event.returnValue = false;
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}
*/

	//检查月份首位的合法性,必须是数字
	if( szValue.length == 6  )
	if( CHARS.indexOf( szValue.charAt(5) ) == -1 )
	{
		alert( "月份表达式中包括不正确的字符!\n请重新输入。" );
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}


	//检查月份首位的合法性,当首位是大于1的数字需要补0
	if( szValue.length == 6  )
	if( szValue.charAt(5) != "1" && szValue.charAt(5) != "0")
	{
		szValue = szValue.substring( 0 , 5 ) + "0" + szValue.charAt(5) + "-";
		obj.value = szValue;
		return;		
	}

	//检查月份首位的合法性,当输入2001-1-是允许的,并进行格式调整
	if( szValue.length == 7  )
	if( szValue.charAt(5) == "1" && szValue.charAt(6) == "-")
	{		
		szValue = szValue.substring( 0 , 5 ) + "0" + szValue.charAt(5) + "-";
		obj.value = szValue;
		return;		
	}

	//检查月份末位的合法性,如果是10月以上,最大是12月
	if( szValue.length >= 7 && szValue.charAt(5) == "1" )
	if( szValue.charAt(6) != "0" &&
		szValue.charAt(6) != "1" &&
		szValue.charAt(6) != "2" )
	{
		alert( "月份表达式不正确!\n请重新输入。" );
		event.returnValue = false;
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}

	//检查月份末位的合法性,必须是数字
	if( szValue.length >= 7  )
	if( CHARS.indexOf( szValue.charAt(6) ) == -1 )
	{
		alert( "月份表达式中包括不正确的字符!\n请重新输入。" );
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;
		
	}
	//检查月份合法性,不能是00
	if( szValue.length == 7  )
	if( CHARS.indexOf( szValue.charAt(5) ) == "0" &&
		CHARS.indexOf( szValue.charAt(6) ) == "0" )
	{
		alert( "月份表达式00不正确!\n请重新输入。" );
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}



	//检查月份分隔符的合法性
	if( szValue.length >=8  )
	if( szValue.charAt(7) != "-" )
	{
		alert( " 月份分隔符表达不正确!\n请重新输入。" );
		event.returnValue = false;
		obj.value = szValue.substring( 0 , 7 ) + "-";
		return;		
	}

	//检查日期首位的合法性,必须是数字
	if( szValue.length >= 9 )
	if( CHARS.indexOf( szValue.charAt(8) ) == -1 )
	{
		alert( "日期表达式中包括不正确的字符!\n请重新输入。" );
		obj.value = szValue.substring( 0 , 7 ) + "-";
		return;		
	}
	
	if( szValue.length == 9 )
	{
		//对2月份的特殊限定
		if( szValue.charAt(5) == "0" &&
			szValue.charAt(6) == "2" &&
			szValue.charAt(8) != "0" &&
			szValue.charAt(8) != "1" &&
			szValue.charAt(8) != "2" )

		{
			obj.value = szValue.substring( 0 , 8 ) + "0" + szValue.charAt(8) ;
			return;
		}
		else
		{
			if(	szValue.charAt(8) != "0" &&
				szValue.charAt(8) != "1" &&
				szValue.charAt(8) != "2" &&
				szValue.charAt(8) != "3" )
			{
				obj.value = szValue.substring( 0 , 8 ) + "0" + szValue.charAt(8) ;
				return;		
			}
		}
	}//if( szValue.length == 9 )


	//检查日期末位的合法性,必须是数字
	if( szValue.length >= 9 )
	if( CHARS.indexOf( szValue.charAt(9) ) == -1 )
	{
		alert( "日期表达式中包括不正确的字符!\n请重新输入。" );
		obj.value = szValue.substring( 0 , 7 ) + "-";
		return;		
	}


	//检查日期合法性,不能是00
	if( szValue.length >= 10  )
	if( CHARS.indexOf( szValue.charAt(8) ) == "0" &&
		CHARS.indexOf( szValue.charAt(9) ) == "0" )
	{
		alert( "日期表达式00不正确!\n请重新输入。" );
		obj.value = szValue.substring( 0 , 7 ) + "-";
		return;		
	}


	//检验粘贴数据的长度
	if( szValue.length > 10 )
	{
		alert( "日期表达不正确!\n请重新输入。" );
		obj.value = "";
		return;		
	}

	var iYear,iMonth,iDay;
	var szCalc,iCalc,iMaxDay;
	//检查完整日期的真实性
	if( szValue.length == 10 )
	{
		//取年
		szCalc = szValue.substring( 0 , 4 );
		iYear = parseInt( szCalc );
		//取月
		szCalc = szValue.substring( 5 , 7 );
		if( szCalc.charAt(0) == "0" )
			szCalc = szCalc.charAt(1);
		iMonth = parseInt( szCalc );
		//取日
		szCalc = szValue.substring( 8 , 10 );
		if( szCalc.charAt(0) == "0" )
			szCalc = szCalc.charAt(1);		
		iDay = parseInt( szCalc );
		
		//取余数，暂时找不到相关函数wxq
		iCalc = iYear - 4 ;
		while( iCalc >4 )
			iCalc -= 4;
	
		//大月份
		if( iMonth == 1 || iMonth == 3 || iMonth ==5 || iMonth ==7 ||
			iMonth == 8 || iMonth == 10 || iMonth == 12 )
			iMaxDay = 31;
		else
			iMaxDay =30;
	
		//2月处理
		if( iMonth == 2 )
		{
			if(iCalc == 4)
				iMaxDay = 29;
			else
				iMaxDay = 28;
		}

		if(iDay > iMaxDay )
		{
			alert( "日期表达式不正确!\n请重新输入。" );
			event.returnValue = false;
			obj.value = szValue.substring( 0 , 8 ) ;
			return;	
		}
	}//if( szValue.length == 10 )
				
}

function onkeyDnDate( obj )
{

	//有效键位数值
	var KEY_ENTER	= 13;
	var KEY_TAB		= 9;
	var KEY_F1		= 112;
	var KEY_F12		= 123;
	var KEY_ALT		= 18;
	var KEY_NUM		= 144;
	var KEY_CAP		= 20;
	var KEY_ESC		= 27;
	var KEY_MICROSOFT1	= 91;
	var KEY_MICROSOFT2	= 92;
	var KEY_POPERTY		= 93;
	var KEY_BACKSPACE	= 8;
	var KEY_INSERT	= 45;
	var KEY_DELETE	= 46;
	var KEY_HOME	= 36;
	var KEY_END	= 35;
	var KEY_PGUP	= 33;
	var KEY_PGDN	= 34;
	
	var KEY_NUM0	= 48;
	var KEY_NUM9	= 57;
	var KEY_NUM0Ex	= 96;
	var KEY_NUM9Ex	= 105;
	
	var KEY_UP	= 38;
	var KEY_DOWN	= 40;
	var KEY_LEFT	= 37;
	var KEY_RIGHT	= 39;
	
	var KEY_SUB1	= 189;
	var KEY_SUB2	= 109;
	
	var CHARS = "0123456789";

	//键入键位数值
	var iKeyCode = event.keyCode;
	
	//alert( iKeyCode );	
	
	//有效的系统响应，同时不需要编辑响应的按键
	if( iKeyCode == KEY_ENTER ||
		iKeyCode == KEY_TAB ||
		iKeyCode == KEY_ALT ||
		iKeyCode == KEY_NUM ||
		iKeyCode == KEY_CAP ||
		iKeyCode == KEY_ESC ||
		iKeyCode == KEY_INSERT	||
		iKeyCode == KEY_DELETE	||
		iKeyCode == KEY_HOME	||
		iKeyCode == KEY_END ||
		iKeyCode == KEY_BACKSPACE	||
		iKeyCode == KEY_MICROSOFT1	||
		iKeyCode == KEY_MICROSOFT2	||
		iKeyCode == KEY_POPERTY		||			
		iKeyCode == KEY_SUB1	||
		iKeyCode == KEY_SUB2	||		
		iKeyCode == KEY_UP		||
		iKeyCode == KEY_DOWN	||
		iKeyCode == KEY_LEFT	||				
		iKeyCode == KEY_RIGHT ) return ;
		
	//有效的系统响应，同时不需要编辑响应的按键
	if( iKeyCode >= KEY_F1 && iKeyCode <= KEY_F12  )
		return;
		
	
	//如果不录入数据，则按键事件无效,非数字检验
	if( iKeyCode < KEY_NUM0 || iKeyCode > KEY_NUM9Ex  )
	{
		event.returnValue = false;
		return ;
	}		
	if( iKeyCode < KEY_NUM0Ex  && iKeyCode > KEY_NUM9 )
	{
		event.returnValue = false;
		return ;
	}
	
}




function change_sl(obj)
{
	if(obj.value>1)
	{alert("税率必须小于1");
	obj.value="0.00";
	return;
	}	
}