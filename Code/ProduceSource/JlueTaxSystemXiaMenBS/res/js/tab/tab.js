
//金三延期缴纳税款申请
function queryJsyqjnsksq(){
	layer.open({
	    type: 2,
	    title: false,
	    shadeClose: false,
	    offset: '50',
	    area: ['600px', '400px'],
	    closeBtn: 1,
	    content: "/pw/getJsYqjnsksq.do" 
	}); 
}

//金三银行账号
function queryJsyhzh(){
	layer.open({
	    type: 2,
	    title: false,
	    shadeClose: false,
	    offset: '50',
	    area: ['600px', '400px'],
	    closeBtn: 1,
	    content: "/pw/getJsYhzh.do" 
	}); 
}

//定义当前对象的坐标
var curObjx=0;
var curObjy=0;
function setCruObjXY(obj){
	var oRect=obj.getBoundingClientRect();   
	//curObjx=oRect.left +document.documentElement.scrollLeft;
	//curObjy=oRect.bottom +document.documentElement.scrollTop;
	var scrolly=document.body.scrollTop;
	if(scrolly==0){scrolly=document.documentElement.scrollTop;}
	
	var scrollx=document.body.scrollLeft;
	if(scrollx==0){scrollx=document.documentElement.scrollLeft;}
	curObjx=oRect.left +scrollx;
	curObjy=oRect.bottom +scrolly;
}

var ie=document.all?true:false;
var searchiframe='altobj';
var iframe_width=198;
var iframe_height=24;
var V_left=135;
function AltObject()
{
	this.isshow=true;
	this.divobj=null;
	this.selectobj=null;
	this.frameobj=null;
	var obj=null;
	this.body=document.getElementsByTagName("body");
	this.getFrame=function ()
	{
		try
		{
			obj=document.getElementById(searchiframe+'iframe');
			if(eval(obj)==undefined)
			{
				var o=document.createElement('iframe');
				o.id=searchiframe+'iframe';
				o.name=searchiframe+'iframe';
				o.style.display='';
				o.style.border=0;
				this.body[0].appendChild(o);
				this.frameobj=o;
			}else
			this.frameobj=obj;
		}catch(e)
		{
		}
	}
	this.getDivObj=function()
	{
		var o=null;
		try
		{
			o=document.getElementById(searchiframe+'div');
			if(eval(o)==undefined)
			{
				o=document.createElement('div');
				o.id=searchiframe+'div';
				o.className='hintsB';
				this.body[0].appendChild(o);
			}

		}catch(e)
		{
		}
		this.divobj=o;
	}
	this.getFrame();
	this.getDivObj();
	this.frameobj.style.width=iframe_width-4;
	this.frameobj.style.position='absolute';
	this.divobj.style.width=iframe_width;
	this.divobj.style.position='absolute';
	this.divobj.style.display='';
	this.hidden=function()
	{
		this.divobj.style.display='none';
		this.frameobj.style.display='none';
	}
	this.setShow=function(left,top,title)
	{
		this.frameobj.style.left=left+4+'px';
		this.frameobj.style.border='0px';
		this.frameobj.style.top=top+'px';
		this.frameobj.style.position='absolute';
		this.divobj.style.left=left+'px';
		this.divobj.style.top=top+'px';
		this.divobj.style.position='absolute';
		this.frameobj.style.display='';
		this.divobj.style.display='';
		this.divobj.innerHTML="<div>"+title+"</div>";	
		var setheight=this.divobj.offsetHeight;
		this.frameobj.style.height=setheight+'px';
	}
}
var altobj=null;
function getAlt()
{
if(altobj!=null)
return altobj;
else
altobj=new AltObject();
return altobj;
}
function AltShowByWidth(thisobj,title,width){
	this.V_left=width;
	AltShow(thisobj,title);
}
function AltShow(thisobj,title){
	//var title=thisobj.title;
	if(title==''||title=='undefined')
		return;
	if(thisobj==null)
		return;
	this.alt=getAlt();

	var objsize=parseInt(thisobj.style.width)/6.4;
	var rows=parseInt(thisobj.rows);
	if(isNaN(rows)){
		rows=0;
	}
	objsize=eval(objsize);
	setCruObjXY(thisobj);
	
	if(objsize>=10)
	{
		this.setleft=curObjx+V_left/20*objsize-objsize/20;
	}else if(objsize<20){
		this.setleft=curObjx+(V_left+20)/20*objsize+20/objsize;
	}else{
    	this.setleft=curObjx+200;
  }
	if(!ie)
		this.setleft-=6;
	if(ie)
		this.settop=curObjy-20-(rows*10);
	else
		this.settop=curObjy-15;
	alt.setShow(this.setleft,this.settop,title);
}
function AltHidden(thisobj,title)
{
	//var title=thisobj.title;
	if(title==''||title=='undefined')
		return;
	var alt=getAlt();
	this.alt.hidden();
}

/* 切换 */
function page_switch(flag){
  var com=event.srcElement;
  if(flag=="down"){
    com.className="page_down";
  }else {
    com.className="page_up";
    var tr_tabs=document.getElementById("tr_page");
    var com_index=0;
    //页面索引
    if(tr_tabs){
      for(var i=0;i<tr_tabs.cells.length;i++){
        if(tr_tabs.cells[i]==com){
          tr_tabs.cells[i].className="page_up";
          com_index=i;
        }
      }
    }
    var div_contents=document.getElementsByName("div_content");
    if(div_contents){
      for(var j=0;j<div_contents.length;j++){
        if(j==com_index){
          div_contents[j].style.display="block";
        }else {
          div_contents[j].style.display="none";
        }
      }
    }
    //记录页面的索引值
    var pageIndexHidden=document.all("tabForm.table.pageIndex");
    if(pageIndexHidden){
      pageIndexHidden.value=com_index;
    }
  }
}
/* 按页索引显示第几页 */
function showPage(pageIndex){
  if(!pageIndex||pageIndex==null||pageIndex==""){
    pageIndex=0;
  }
  var div_contents=document.getElementsByName("div_content");
  if(div_contents){
    for(var j=0;j<div_contents.length;j++){
      if(j==pageIndex){
        div_contents[j].style.display="block";
      }else {
        div_contents[j].style.display="none";
      }
    }
  }
}
/* 弹出表单打印页面 */
var tabPrintWnd;
function openTabPrintWnd(){
  /*
	if(tabPrintWnd){
    tabPrintWnd.close();
  }
  */
  var wndurl="/views/tab/printReport.jsp";
  var wndnme="tabprintwnd";
  //var wndstyle="toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizeable=1,top=5,left=5,width=750,height=520";
  //tabPrintWnd=window.open(wndurl,wndnme,wndstyle);
  var wndstyle="dialogWidth:975px;dialogHeight:500px;center:yes;status:0;help:0;edge:sunken;scroll:auto";  
  //window.open(wndurl); 
  
  tabPrintWnd=window.showModalDialog(wndurl,wndnme,wndstyle);
}
function openTabPrintWndT(){
	  /*
		if(tabPrintWnd){
	    tabPrintWnd.close();
	  }
	  */
	  var wndurl="/views/tab/printTzs.jsp";
	  var wndnme="tabprintwnd";
	  //var wndstyle="toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizeable=1,top=5,left=5,width=750,height=520";
	  //tabPrintWnd=window.open(wndurl,wndnme,wndstyle);
	  var wndstyle="dialogWidth:975px;dialogHeight:500px;center:yes;status:0;help:0;edge:sunken;scroll:auto";  
	//  window.open(wndurl); 
	  
	  tabPrintWnd=window.showModalDialog(wndurl,wndnme,wndstyle);
	}
/* 弹出通用查询页面 */
var tabQryWnd;
function openTabQryWnd(comName,paraObj){
  if(tabQryWnd){
    tabQryWnd.close();
  }
  var prefix=event.srcElement.getAttribute("prefix");
  var comFullName=prefix+".string("+paraObj+")";
  var comValue=eval("document.all('"+comFullName+"').value");
  var wndurl="/tab/tab_query.jsp?prefix="+prefix+"&qryInputName="+comName+"&qryInputValue="+comValue;
  var wndnme="tabQryWnd";
  var wndstyle="toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizeable=1,top=5,left=5,width=600,height=400";
  tabQryWnd=window.open(wndurl,wndnme,wndstyle);
}
/* 弹出人员选择页面 */
var tabRyxzWnd;
function openTabRyxzWnd(ryName,ryDm,ryDldm){
  if(tabRyxzWnd){
    tabRyxzWnd.close();
  }
  var prefix=event.srcElement.prefix;
  var xm=prefix+".string("+ryName+")";
  var dm=prefix+".string("+ryDm+")";
  var dldm=prefix+".string("+ryDldm+")";
  var xmvalue=eval("document.all('"+xm+"').value");
  var dmvalue=eval("document.all('"+dm+"').value");
  var dldmvalue=eval("document.all('"+dldm+"').value");
  var wndurl="/tab/tab_ryxz_frame.jsp?prefix="+prefix+"&xm="+xm+"&xmvalue="+xmvalue+"&dm="+dm+"&dmvalue="+dmvalue+"&dldm="+dldm+"&dldmvalue="+dldmvalue;
  var wndnme="tabRyxzWnd";
  var wndstyle="toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,top=5,left=5,width=600,height=400";
  tabRyxzWnd=window.open(wndurl,wndnme,wndstyle);
}
/* 弹出通用查询页面 */
function openTabNsrQryWnd(){
  if(tabQryWnd){
    tabQryWnd.close();
  }
  var nsrcom=event.srcElement.name;
  nsrcom=nsrcom.substring(0,nsrcom.length-4);
  var wndurl="/tab/tab_nsrquery.jsp?nsrcom="+nsrcom;
  var wndnme="tabQryWnd";
  var wndstyle="toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizeable=1,top=5,left=5,width=600,height=400";
  tabQryWnd=window.open(wndurl,wndnme,wndstyle);
}
/* 纳税人查询确定 */
function nsrQryOk(){
  var nsrcom=event.srcElement.name;
  nsrcom=nsrcom.substring(0,nsrcom.length-6);
  var nsr=eval("document.all('tabForm.table.tableValue.string("+nsrcom+")')");
  var nsrVal=nsr.value;
  if(nsrVal){
    form1("leostudio.request.serviceID").value="tab_nsr_qry";
    form1.submit();
  }
}
var textareaEditWnd;
/* 弹出文本编辑窗口  */
function openTextareaEditWnd(){
  if(textareaEditWnd){
    textareaEditWnd.close();
  }
  var thisObj=event.srcElement.name;
  var thisTxt=event.srcElement.value;
  var wndurl="/tab/tab_textareaedit.jsp?parentObj="+thisObj;
  var wndnme="txtEditWnd";
  var wndstyle="toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizeable=1,top=5,left=5,width=800,height=600";
  textareaEditWnd=window.open(wndurl,wndnme,wndstyle);
}
/* 分页选择 */
function tab_fieldChecked(){
  var thisCom=event.srcElement;
  var checkComName=new String(thisCom.name);
  var hiddenComName=checkComName.substring(0,checkComName.length-2);
  var hiddenCom=eval("document.all('"+hiddenComName+"')");
  //var checkComs=eval("document.all('"+checkComName+"')");
   var checkComs = eval("document.getElementsByName('"+checkComName+"')"); 
  var checkedVal="";
  for(var i=0;i<checkComs.length;i++){
    if(checkComs[i].checked==true){
      checkedVal=checkedVal+checkComs[i].value+";";
    }
  }
  checkedVal=checkedVal.substring(0,checkedVal.length-1);
  hiddenCom.value=checkedVal;
}
function pf_ChangeFocus(){
  key=window.event.keyCode;
  /*
   if ( key==0xD ) {
   window.event.keyCode=9;
   }
   */
}
/**
 下列框连动
 */
function fillTabSub(subName,parentCode,subCodeType){
  if(document.getElementById('tabid')){
	  if(document.getElementById('tabid').value == 'WZZS6002'){
			  changeHy(false);
	  }
  }
  var prefix=event.srcElement.prefix;
  var comName='';
  if(prefix==null || prefix==undefined){
	  comName=(event.srcElement.name).substr(0,24)+".string("+subName+")";
  }else{
	  comName=prefix+".string("+subName+")";
  }
  var subSelect=document.all(comName);
  for(i=subSelect.options.length;i>=0;i--){
    //清空选项
    subSelect.options[i]=null;
  }
  if(subCodeType==null){
    return ;
  }
  var option1=document.createElement("OPTION");
 // option1.text="99-\u5168\u90e8";
  option1.text="\u8bf7\u9009\u62e9...";
  option1.value="";
  subSelect.options.add(option1);
  for(i=0;i<subCodeType.length;i++){
    if(subCodeType[i][2]!=parentCode){
      continue ;
    }
    var option=document.createElement("OPTION");
    //option.text = subCodeType[i][0] + "-" + subCodeType[i][1];
    option.text=subCodeType[i][1];
    option.value=subCodeType[i][0];
    subSelect.options.add(option);
  }
}
/*日期转换*/
function dateConvert(obj){
  var f=window.event.keyCode;
  //处理删除时避免自动加"-"
  var v=obj.value;
  var keyChr=String.fromCharCode(window.event.keyCode);
  if(!v){
    return true;
  }
  if((v.length<4||(v.length>5&v.length<7)||(v.length>7))&&isNaN(this.keyChr)){
    return false;
  }
  if((v.length==4||v.length==7)&&this.keyChr!="-"&&f!="8"){
    obj.value=obj.value+"-";
    if(v.length==4&&this.keyChr*1>1){
      return false;
    }
    if(v.length==7&&this.keyChr*1>3){
      return false;
    }
  }
  if(v.length>9){
    return false;
  }
  if(v.length<1&&((this.keyChr*1)<1||(this.keyChr*1)>2)){
    return false;
  }
  if(v.length==5&&(this.keyChr*1)>1){
    return false;
  }
  if(v.length==6&&(v.substring(5,6)*1)>0&&(this.keyChr*1)>2){
    return false;
  }
  if(v.length==8&&(this.keyChr*1)>3){
    return false;
  }
  if(v.length==9&&(v.substring(8,9)*1)>2&&(this.keyChr*1)>1){
    return false;
  }
  return true;
}
//控件输入值检测
function isDateIn(obj){
  if(!dateCheck(obj.value)){
    alert("您输入的日期不正确。\n必须按“yyyy-mm-dd”（年－月－日）的格式输入，例如“2005-01-01”。\n请重新输入！");
    obj.value="";
    obj.focus();
    return false;
  }
  return true;
}


/**
 * 日期不大于当前今天
 */
function dateNotGreaterThanToday(obj) {
  if (!isDateIn(obj)) {
    return false;
  }
	var val = trim(obj.value);
	var date = new Date();
	var yyyy = date.getFullYear();
	var MM = date.getMonth() + 1;
	if (MM < 0xa)
		MM = "0" + MM;
	var dd = date.getDate();
	// 今天日期
	var today = yyyy + "-" + MM + "-" + dd;
	if (val > today) {
		alert("日期不能大于当前日期!");
    obj.value="";
    obj.focus();
    return false;
	}
	return true;
}


//年月日检测
function dateCheck(str){
  if(str.length<1){
    return true;
  }
  var reg=/^(\d{4})-(\d{2})-(\d{2})$/;
  var arr=reg.exec(str);
  if(!reg.test(str)){
    return false;
  }
  var d=null;
  d=new Date(RegExp.$1,(RegExp.$2-1),RegExp.$3);
  if(d==null){
    return false;
  }
  if(d.getFullYear()!=RegExp.$1){
    return false;
  }
  if(d.getMonth()!=(RegExp.$2-1)){
    return false;
  }
  if(d.getDate()!=RegExp.$3){
    return false;
  }
  return true;
}
/**
 分组计算
 计算与当前控件相同分组名称的和控件表达式
 该函数是根据控件计算符号和当前控件项目分组名称相同控件汇总值
 2008-12-18企业所得税动态表单新增列计算
 **/
function statistics(currObject){
  var form;
  var objectTem;
  var value;
  var valeuTem;
  var parentObject;
  var parentObjects=[];
  var parentObject;
  var parentObjectSize=0;
  form=document.forms[0];
  value=0;
  for(var j=0;j<form.elements.length;j++){
    objectTem=form.elements[j];
    if(objectTem.computeGroup==currObject.computeGroup){
      valeuTem=parseFloat(objectTem.value);
      if(isNaN(valeuTem)){
        valeuTem=0;
      }else {
        ////+plus -minus *multiplication /division  operator
        if(objectTem.operator=="plus"){
          value=value+valeuTem;
        }else {
          if(objectTem.operator=="minus"){
            //alert(objectTem.name+" "+objectTem.operator+" "+ value+" "+valeuTem);
            value=value-valeuTem;
          }else {
            if(objectTem.operator=="multiplication"){
              value=value*valeuTem;
            }else {
              if(objectTem.operator=="division"){
                value=value/(valeuTem==0)?1:valeuTem;
              }
            }
          }
        }
      }
    }
    if(objectTem.objectName!=null&&objectTem.objectName==currObject.parentObject){
      parentObjects[parentObjectSize++]=form.elements[j];
    }
  }
  for(var j=0;j<parentObjects.length;j++){
    parentObject=parentObjects[j];
    parentObject.value=value;
    if(parentObject.onchange!=null){
      parentObject.onchange();
    }
  }
}


//对datatype=currency类型的输入框进行掩码处理，使之自动对金额字段按千分位进行分隔
//Added by ShengYF at 2009.11.20
function Currency(){
	this.currencyFormat = function(num) {
		var re = /\d{1,3}(?=(\d{3})+$)/g;
		var n1 = num.replace(/^(-?\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
		return n1;
	}
	this.currencyFormat4Input = function(){
		var e = window.event;
		//alert(e.keyCode);
		//下面四个keyCode分别对应： “<--” “-->” “Del”“.”“Tab键”
		if(e.keyCode==37 || e.keyCode==38 || e.keyCode==46 || e.keyCode==190 || e.keyCode==9) return true;
		var obj = e.srcElement;
		var num = obj.value;
		num = Currency.clearCurrency(num);
		num = this.currencyFormat(num);
		obj.value = num;
	}
	this.currencyFormatAddXsd = function() {
		var e = window.event;
		var obj = e.srcElement;
		var num = obj.value;
		if (num.length > 0) {
			if (num.split(".").length < 2) {
				num = num + ".00";
			} else {
				if (num.split(".")[1].length < 2) {
					num = num + "0";
				}
			}
		}
		obj.value = num;
	}
}
Currency.clearCurrency = function(num){
  if(!num) return num;
	var re = /[^0-9\.\-]/g;
	return num.replace(re,"");
}
Currency.getTabformValue = function(itemId){
  return Currency.clearCurrency(num);
}
Currency.addCurrencyFormatByValue = function(cash){
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
		cashTmp = "" + (Math.abs(cashTmp));
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
    	//return cash;
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
	if (xsdStr == "") {
		xsdStr = ".00"
	} else if (xsdStr.length < 3) {
		xsdStr = xsdStr + "0"
	}
    return (fsFlag + cashNew + xsdStr).trim();
}
Currency.addCurrencyFormat = function (){
	var c = new Currency();
  var objs = document.getElementsByTagName("INPUT");
  for(var ii=0; ii<objs.length; ii++){
		var obj = objs[ii];
    if(obj.type=="text" && obj.datatype=="currency"){
			var oldKeyUp = obj.onkeyup;
			if(oldKeyUp){
				obj.onkeyup = "";
				obj.attachEvent("onkeyup", oldKeyUp);
				obj.attachEvent("onkeyup", function(){ c.currencyFormat4Input(); });
			}else{
				obj.attachEvent("onkeyup", function(){ c.currencyFormat4Input(); });
			}
			//obj.style.textAlign="right";
			var oldFocusOut = obj.onfocusout;
			if (oldFocusOut) {
				obj.onfocusout = "";
				obj.attachEvent("onfocusout",function() {c.currencyFormatAddXsd();});
				obj.attachEvent("onfocusout",oldFocusOut);
			} else {
				obj.attachEvent("onfocusout",function() {c.currencyFormatAddXsd();});
			}
    }
  }
}

//window.attachEvent("onload", Currency.addCurrencyFormat);

//this.toString=function(){
//    return ''+this.value;
//  }
//Object.prototype.getClass=function (){
//	  //just work for system class
//	  var s=constructor.toString();
//	  return s.match(/function (\w+)\(.+/)[1];
//	}

//Object.prototype.equals=function (obj){
//	  if(!this.typeMatches(obj))return false;
//	  return this.toString ()===obj.toString ();
//	}

$(document).ready(function(){
	Currency.addCurrencyFormat();
});