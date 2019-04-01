//初始化text.js文件
$(function(){contentready();});
function formatValue_SBB(){
	var inputTd=$("#inputTable input");
	$.each(inputTd,function(i,val){
		formatAll(inputTd[i]);
	});
}
function formatAll(o)
{
	if(o.className=="money" || o.className=="input_money_readonly")
	{
		formatCurrency(o);
		o.value=formatNumberType(o.value,0,2);
	}
	else if(o.className=="sl" || o.className=="sl_readonly")
	{
		transSl(o);
	}
}

function unformatValue_SBB()
{
	var inputTd=$("#inputTable input");
	
	$.each(inputTd,function(i,val){
		
		if($.trim($(this).attr("class"))=='sl' || $.trim($(this).attr("class"))=='sl_readonly'){
			
			formatSl(inputTd[i]);
		}
		if($.trim($(this).attr("class"))=='money'||$.trim($(this).attr("class"))=='input_money_readonly'){
			unformatCurrency(inputTd[i]);
		}
	});
}
/*************************************************************************************/
function onChange_3(t){
	
	unformatValue_SBB();
	var QCYE = document.getElementsByName("QCYE_" + t)[0].value;
	var BQFSE = document.getElementsByName("BQFSE_" + t)[0].value;
	
	if(null == BQFSE || "" == BQFSE){
		BQFSE = "0.00";
	}
	
	var BQYDJSE = parseFloat(QCYE) + parseFloat(BQFSE);
	
	var BQSJDJSE = document.getElementsByName("BQSJDJSE_" + t)[0].value;
	
	if(parseFloat(BQSJDJSE) > parseFloat(BQYDJSE)){
		document.getElementsByName("BQSJDJSE_" + t)[0].value = BQYDJSE;
		document.getElementsByName("QMYE_" + t)[0].value = "0.00";
	}else{
		document.getElementsByName("QMYE_" + t)[0].value = parseFloat(BQYDJSE) - parseFloat(BQSJDJSE);
	}
	
	document.getElementsByName("BQYDJSE_" + t)[0].value = BQYDJSE;
	
	formatValue_SBB();
}

function onChange_4(t){
	unformatValue_SBB();
	
	var BQYDJSE = document.getElementsByName("BQYDJSE_" + t)[0].value;
	var BQSJDJSE = document.getElementsByName("BQSJDJSE_" + t)[0].value;
	
	if(null == BQSJDJSE || "" == BQSJDJSE){
		BQSJDJSE = "0.00";
	}
	
	if(parseFloat(BQSJDJSE) > parseFloat(BQYDJSE)){
		alert("第"+ t +"行'本期实际抵减税额'要小于等于'本期应抵减税额'");
		document.getElementsByName("BQSJDJSE_" + t)[0].value = BQYDJSE;
		BQSJDJSE = BQYDJSE;
		document.getElementsByName("BQSJDJSE_" + t)[0].focus();
	}

	document.getElementsByName("QMYE_" + t)[0].value = parseFloat(BQYDJSE) - parseFloat(BQSJDJSE);
	
	formatValue_SBB();
}

function check_save1()
{
	var flag = true;
	unformatValue_SBB();
	
    var BQSJDJSE_1 = document.getElementsByName("BQSJDJSE_1")[0].value;
    /*小曾提出，当附表4第1栏第4列的值大于等于3000时，不允许填报，并提示纳税人“本表第1栏第4列的数值异常，请您核实，如属实，请至我局柜台申报！”,
       且让我们自己测试，没问题就直接上正式库      by    wxf     20171201*/
	if(parseFloat(BQSJDJSE_1) >= 3000){
		alert("本表第1栏第4列的数值异常，请您核实，如属实，请至我局柜台申报！");
		formatValue_SBB();
		return false;
	}
	
	formatValue_SBB();
	return true;
}


function formatAll(o){
	formatCurrency(o);
	o.value=formatNumberType(o.value,0,2);
}

function js(){
	for(var i = 1; i < 6; i++){
		onChange_3(i);
		onChange_4(i);
	}
}

/*************************************************************************************/
function frmupdate(){
	var flag=check_save1();
	if(flag)
	{
		unformatValue_SBB();
	    document.getElementsByName("xform")[0].TABLE_ACTION.value = "update";
	    document.getElementsByName("xform")[0].action = "./MainServlet";
	    document.getElementsByName("xform")[0].submit();
	    return true;
	}
}

function frminsert(){
	var flag=check_save1();
	if(flag)
	{
		unformatValue_SBB();
	    document.getElementsByName("xform")[0].TABLE_ACTION.value="insert";
	    document.getElementsByName("xform")[0].action="./MainServlet";
	    document.getElementsByName("xform")[0].submit();
	    return true;
	}
}

function frmprint()
{
    document.getElementsByName("xform")[0].TABLE_ACTION.value = "display";
    document.getElementsByName("xform")[0].action="./MainServlet";
    document.getElementsByName("xform")[0].submit();
    return true;
}

function frmdelete()
{
    document.getElementsByName("xform")[0].TABLE_ACTION.value = "delete";
    document.getElementsByName("xform")[0].action="./MainServlet";
    document.getElementsByName("xform")[0].submit();
    return true;
}

function frmzc()
{
	document.getElementsByName("xform")[0].TABLE_ACTION.value = "zc";
	document.getElementsByName("xform")[0].action="./MainServlet";
	document.getElementsByName("xform")[0].submit();
	return true;
}

function frmzcupdate()
{
	document.getElementsByName("xform")[0].TABLE_ACTION.value = "zcupdate";
	document.getElementsByName("xform")[0].action="./MainServlet";
	document.getElementsByName("xform")[0].submit();
	return true;
}