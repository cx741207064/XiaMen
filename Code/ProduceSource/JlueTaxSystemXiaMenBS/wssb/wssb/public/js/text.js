var repeat;
var left;
var selectrows;
function contentready()
{
	var input_item=$("input");
	for(i = 0; i < input_item.length; i++)
	{
		var o=input_item[i];
		switch(o.type)
		{
			case "text":
				input_action(o);
				break;
			case "checkbox":
				if(o.className=="checkbox")
				{
					checkItem(o);
				}
				checkbox_action(o);
				break;
		}
	}
	var select_item=$("select");
	for(i = 0; i < select_item.length; i++)
	{
		o=select_item[i];
		
		if(o.className=="select")
		{
			selectedItem(o);
		}
		select_action(o);
	}
	//document.onkeydown=Insert;
	check_backspace();//屏蔽backspace键
}
/**
 * 屏蔽backspace键,阻止浏览器退回到上个页面
 * @return {TypeName} 
 */
function check_backspace(){
  	if(typeof window.event != 'undefined'){
		document.onkeydown = function(){
			var type = event.srcElement.type;
			var code = event.keyCode;
			var flag = ((code != 8)
						|| ((type == 'text' || type == 'password') && !(code == 8 && event.srcElement.readOnly))
						|| (type == 'textarea' && !(code == 8 && event.srcElement.readOnly)));
			if(!flag) event.returnValue = false;
			return;
  		}
  	}else{
  		document.onkeypress = function(e){
		 	var type = e.target.localName.toLowerCase();
			var code = e.keyCode;
			var flag = ((code != 8)
						|| ((type == 'input' || type == 'password') && !(code == 8 && e.target.readOnly))
						|| (type == 'textarea' && !(code == 8 && e.target.readOnly)));
			if(!flag) {
				e.preventDefault();
			}
			return;
  		}
  	}
}

function checkbox_action(o)
{
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
	o.attachEvent("onfocus",Focus);
	o.attachEvent("onkeydown",KeyDown);}
	else{
		o.addEventListener("focus",Focus);
		o.addEventListener("keydown",KeyDown);
	}
}
function select_action(o)
{
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
	o.attachEvent("onfocus",Focus);
	}
	else{
		o.addEventListener("focus",Focus);
	}
}
function input_action(o)
{
	o.insert=false;
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
		o.attachEvent("onfocus",Focus);
		o.attachEvent("onclick",Click);
	        o.attachEvent("ondblclick",Dblclick);
		o.attachEvent("onchange",Change);
		o.attachEvent("onkeyup",KeyUp);
		o.attachEvent("onkeydown",KeyDown);
		o.attachEvent("onblur",Blur);
	}else{
		o.addEventListener("focus",Focus,false);
		o.addEventListener("click",Click,false);
	    o.addEventListener("dblclick",Dblclick,false);
		o.addEventListener("change",Change,false);
		o.addEventListener("keyup",KeyUp,false);
		o.addEventListener("keydown",KeyDown,false);
		o.addEventListener("blur",Blur,false);
	}

	checkinputdata(o);
	var leftflag="right";
	
	if(o.left=="true")
	{
		leftflag="left";
	}

	switch(o.className)
	{
		case "money":
			o.style.textAlign	=leftflag;
			o.style.imeMode		="disabled";
			o.maxLength			=24;
			o.setAttribute("label","InputData");
			formatCurrency(o);
			o.value=formatNumberType(o.value,0,2);
			break;
		case "money_4":
			o.style.textAlign	=leftflag;
			o.style.imeMode		="disabled";
			o.maxLength			=24;
			o.setAttribute("label","InputData");
			formatCurrency_4(o);
			o.value=formatNumberType(o.value,0,4);
			break;
		case "money_6":
			o.style.textAlign	=leftflag;
			o.style.imeMode		="disabled";
			o.maxLength			=24;
			o.setAttribute("label","InputData");
			formatCurrency_6(o);
			o.value=formatNumberType(o.value,0,6);
			break;
		case "integer":
			o.style.textAlign	= leftflag;
			o.style.imeMode		= "disabled";
			if(o.lengths)
			{
				o.maxLength		= o.lengths;
			}else{
				o.maxLength		= 10;
			}
			break;
		case "date_year":
			o.style.width = 40;
			o.style.imeMode		= "disabled";
			o.style.textAlign	="center";
			o.maxLength = 4;
			break;
		case "date_month":
			o.style.width		= 25;
			o.style.imeMode		= "disabled";
			o.style.textAlign	="center";
			o.maxLength = 2;
			break;
		case "date_rq":
			o.style.textAlign	=leftflag;
			o.maxLength			=10;
			initdate(o);
			break;
		case "input_money_readonly":
			o.readOnly				=true;
			o.style.textAlign		=leftflag;
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";		
			//edit by zhonggc,20060602,只读的金额也需要格式化
			formatCurrency(o);	
			o.value=formatNumberType(o.value,0,2);
			break;
		case "input_money_4_readonly":
			o.readOnly				=true;
			o.style.textAlign		=leftflag;
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";		
			formatCurrency_4(o);	
			o.value=formatNumberType(o.value,0,4);
			break;	
		case "input_money_6_readonly":
			o.readOnly				=true;
			o.style.textAlign		=leftflag;
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";		
			//edit by zhonggc,20060602,只读的金额也需要格式化
			formatCurrency_6(o);	
			o.value=formatNumberType(o.value,0,6);
			break;
		case "input_integer_readonly":
			o.readOnly				=true;
			o.style.textAlign		=leftflag;
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";
			break;
		case "sl":
			o.style.textAlign	=leftflag;
			o.style.imeMode		="disabled";
			o.maxLength			=14;
			o.setAttribute("label","InputData");
			transSl(o);
			break;
		case "sl_readonly":
			o.readOnly				=true;
			o.style.textAlign		=leftflag;
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";
			transSl(o);
			break;
		case "sl4":
			o.style.textAlign	=leftflag;
			o.style.imeMode		="disabled";
			o.maxLength			=14;
			o.setAttribute("label","InputData");
			transSl_4(o);
			break;
		case "sl4_readonly":
			o.readOnly				=true;
			o.style.textAlign		=leftflag;
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";
			transSl_4(o);
			break;
		case "sl6":
			o.style.textAlign	=leftflag;
			o.style.imeMode		="disabled";
			o.maxLength			=14;
			o.setAttribute("label","InputData");
			transSl_6(o);
			break;
		case "sl6_readonly":
			o.readOnly				=true;
			o.style.textAlign		=leftflag;
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";
			transSl_6(o);
			break;
		case "sl8":
			o.style.textAlign	=leftflag;
			o.style.imeMode		="disabled";
			o.maxLength			=14;
			o.setAttribute("label","InputData");
			transSl_8(o);
			break;
		case "sl8_readonly":
			o.readOnly				=true;
			o.style.textAlign		=leftflag;
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";
			transSl_8(o);
			break;
		case "sl10":
			o.style.textAlign	=leftflag;
			o.style.imeMode		="disabled";
			o.maxLength			=14;
			o.setAttribute("label","InputData");
			transSl_10(o);
			break;
		case "sl10_readonly":
			o.readOnly				=true;
			o.style.textAlign		=leftflag;
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";
			transSl_10(o);
			break;				
		case "string":
			if(o.lengths)
			{
				o.maxLength		= o.lengths;
			}
			o.style.textAlign		="left";
			//edit by zhonggc,能输入汉字，20060416
			//o.style.imeMode			= "disabled";
			break;
		//add by zhsu, 20080306, start
		case "string_readonly":
			o.readOnly				=true;
			o.style.textAlign		="left";
			o.style.backgroundColor ="#E8ECE8";
			o.style.borderTop		="thin none #E8ECE8";
			o.style.borderRight		="thin none #E8ECE8";
			o.style.borderBottom	="thin none #E8ECE8";
			o.style.borderLeft		="thin none #E8ECE8";
			break;
		//add by zhsu, end
		case "yzbm":
			o.style.textAlign		=leftflag;
			o.maxLength				=6;
			break;
		case "nsrsbh":
			o.maxLength				=20;
			o.style.textAlign		=leftflag;
			o.style.imeMode			="disabled";
			break;
		/**
		 * 该样式适用于select输入搜索框的样式
		 * 这边对值进行处理，避免出现由于未使用系统常规的样式而被赋予0.00的值
		 * 当前引用的页面有：
		 * 	1、非居民扣缴报告表的被扣缴人select输入搜索框
		 * 
		 * add by zhiweiHuang 20170313
		 */
		case "selectInputClass":
			o.value = o.value == "0.00" ? "" : o.value;;
			break;
	}
}
function Click(event)
{
	
	var o;
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
	o=event.srcElement;}
	else{
		o=event.target;
	}

	if(o.className=="money" || o.className=="money_4" || o.className=="integer" || o.className=="sl" || o.className=="sl4" || o.className=="sl6" || o.className=="sl8"
		|| o.className=="date_rq" || o.className=="date_year"|| o.className=="date_month" || o.className=="string" || o.className=="nsrsbh"
		|| o.className=="yzbm"){
		o.focus();
		//不允许鼠标选择文本框字体的位置
  	    //o.select();
	}
}
function Dblclick(event)
{
	
	var o;
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
	o=event.srcElement;}
	else{
		o=event.target;
	}
	if(o.className=="money" || o.className=="integer" || o.className=="sl" || o.className=="date_year"
		|| o.className=="date_month" || o.className=="string" || o.className=="nsrsbh"
		|| o.className=="yzbm"){
		o.focus();
		//不允许鼠标选择文本框字体的位置
  	    //o.select();
	}
}
function Focus(event)
{
	
	var o;
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
	o=event.srcElement;}
	else{
		o=event.target;
	}
	if(o.selectrows=="false"){}
	else{
		if(o.className=="money" || o.className=="money_4" || o.className=="integer" || o.className=="sl" || o.className=="sl4" || o.className=="sl6" || o.className=="sl8"
		|| o.className=="date_rq" || o.className=="date_year" || o.className=="date_month" || o.className=="string" || o.className=="nsrsbh"
		|| o.className=="yzbm" || o.className=="select" || o.className=="checkbox"){
			getObjPoint(o);
			selectRow();
		}
	}
}
function Change(event)
{
	var o;
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
	o=event.srcElement;}
	else{
		o=event.target;
	}
	switch(o.className)
	{
		case "money":
			showErrorBlur('TYPE_NUMBER',o,'*',2);
			removeNoUseZero(o);
			checkinputdata(o);
			break;
		case "input_money_readonly":
			showErrorBlur('TYPE_NUMBER',o,'*',2);
			removeNoUseZero(o);
			checkinputdata(o);
			break;
		case "money_4":
			showErrorBlur('TYPE_NUMBER',o,'*',4);
			removeNoUseZero(o);
			checkinputdata(o);
			break;
		case "input_money_4_readonly":
			showErrorBlur('TYPE_NUMBER',o,'*',4);
			removeNoUseZero(o);
			checkinputdata(o);
			break;
		case "integer":
			showErrorBlur('PURE_NUMBER',o,10,0);
			checkinputdata(o);
			break;
		case "date_year":
			verifyYearDigit(o);
			break;
		case "sl":
			transSl(o);
			break;
		case "sl_readonly":
			transSl(o);
			break;
		case "sl4":
			transSl_4(o);
			break;
		case "sl4_readonly":
			transSl_4(o);
			break;			
		case "sl6":
			transSl_6(o);
			break;
		case "sl6_readonly":
			transSl_6(o);
			break;			
		case "sl8":
			transSl_8(o);
			break;
		case "sl8_readonly":
			transSl_8(o);
			break;			
		case "date_month":
			fillMonthDigit(o);
			verifyMonth(o);
			break;
	}
}
function KeyUp(event)
{
	var o;
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
	o=event.srcElement;}
	else{
		o=event.target;
	}
	switch(o.className)
	{
		case "money":
			setFormatUp('TYPE_NUMBER',o,event);
			break;
		case "date_rq":
			setFormatUp('TYPE_DATE',o,event);
			break;
	}
}
function KeyDown(event)
{
    
	var o;
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
	o=event.srcElement;}
	else{
		o=event.target;
	}
	switch(o.className)
	{
		case "money":
			doOnKeyDown(event);
			setFormatDown('TYPE_NUMBER',o,event);
			break;
		case "money_4":
			doOnKeyDown(event);
			setFormatDown('TYPE_NUMBER',o,event);
			break;
		case "sl":
			doOnKeyDown(event);
			setFormatDown('TYPE_NUMBER',o,event);
			break;
		case "sl4":
			doOnKeyDown(event);
			setFormatDown('TYPE_NUMBER',o,event);
			break;
		case "sl6":
			doOnKeyDown(event);
			setFormatDown('TYPE_NUMBER',o,event);
			break;
		case "sl8":
			doOnKeyDown(event);
			setFormatDown('TYPE_NUMBER',o,event);
			break;
		case "yzbm":
			doOnKeyDown(event);
			setFormatDown('TYPE_NUMBER',o,event);
			break;
		case "integer":
			doOnKeyDown(event);
			setFormatDown('PURE_NUMBER',o,event);
			break;
		case "date_year":
			doOnKeyDown(event);
			setFormatDown('PURE_NUMBER',o,event);
			break;
		case "date_month":
			doOnKeyDown(event);
			setFormatDown('PURE_NUMBER',o,event);
			break;
		case "date_rq":
			doOnKeyDown(event);
			setFormatDown('TYPE_DATE',o,event);
			break;
		case "string":
			doOnKeyDown(event);
			break;
		case "checkbox":
			doOnKeyDown(event);
			break;
	}
}
function Blur(event)
{
	
	var o;
	if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
	o=event.srcElement;}
	else{
		o=event.target;
	}
	switch(o.className){
		case "integer":
			showErrorBlur('PURE_NUMBER',o,10,0);
			limitInput(o,o.lengths);
			break;
		case "date_year":
			showErrorBlur('PURE_NUMBER',o,4,0);
			break;
		case "date_month":
			showErrorBlur('PURE_NUMBER',o,2,0);
			break;
		case "date_rq":
			showErrorBlur('TYPE_DATE',o);
			break;
		case "string":
			limitInput(o,o.lengths);
			break;
		case "yzbm":
			checkYzbm(o);
			break;
		case "nsrsbh":
			checkNsrsbh(o);
			break;
	}
}
function Insert()
{
		var input_item=$("INPUT");
		for(i = 0; i < input_item.length; i++)
		{
			var o=input_item[i];
			if(o.insert)
			{
				input_action(o);
			}
		}
	
}


