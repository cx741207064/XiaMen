//进入申报表时如果该纳税人有预缴或减免额，则进行提示
function showJmYjPrompt(yjse,jmse,jmzl_dm,nsrsbh){
	if(parseFloat(yjse) > 0){
		alert("纳税人识别号：" + nsrsbh + "\n本期预缴税额:" + yjse + "元");
	}
	if(parseFloat(jmse) > 0){
		if(jmzl_dm == "01"){
			alert("纳税人识别号：" + nsrsbh + "\n本期减免幅度为:" + parseFloat(jmse)*100 + "%");
		}
		if(jmzl_dm == "02"){
			alert("纳税人识别号：" + nsrsbh + "\n本期减免税额为:" + jmse + "元");
		}
	}
}

//初始化时调用，用来格式化金额数据，比如10000，格式化后为10,000.00
function formatNumberValue(ObjName){
	eval("var coll = document." + ObjName + ".tags('input');");
	for(var i=0;i<coll.length;i++){
		coll[i].value = formatNumberType(coll[i].value,0,2);
		formatCurrency(coll[i]);
	}
}

//正式申报时调用
function doSubmit(strUrl)
{
	if(confirm("是否确认提交申报表？"))
	{
		//var a = event.srcElement;
		//document.xform.modify.disabled = true;
        //document.xform.exit.disabled = true;
        //document.xform.zssb.disabled = true;
		//alert(a.name);
		window.location=strUrl;
	}
}

function addTab(strUrl){
	window.location = strUrl;
}  

function checkdata(){
	for(var i=0;i<document.xform.elements.length;i++)
	{
		var obj=document.xform.elements[i];
		//wanglei 2004-09-23 增加对NaN%的判断
		//if(obj.value==null || String(obj.value)=="undefined" || String(obj.value)=="" || String(obj.value)=="NaN")
		if(obj.value==null || String(obj.value)=="undefined" || String(obj.value)=="" || String(obj.value)=="NaN" || String(obj.value)=="NaN%")
		{
			obj.value="0.00";
		}
	}
}

function exitthis(strUrl)
{
   window.location = strUrl;
}

function insertdisabled()
{
	document.xform.save.disabled = true;
    //document.xform.exit.disabled = true;
  
}
function updatedisabled()
{
	//document.xform.modify.disabled = true;
    //document.xform.exit.disabled = true;
    //document.xform.delet.disabled = true;
}