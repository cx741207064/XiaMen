$(document).ready(function(){
    
	
});

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

function formatValue_SBB()
{
	var inputTd=$("#inputTable input");
	
	$.each(inputTd,function(i,val){
		
		formatAll(inputTd[i]);
	});
}

/**
 * 根据传入的参数计算合计值(下标首尾包含)
 */
function getHjValueByIndex(keyPrefix, startIndex, endIndex)
{
	var tempHj = 0;
	for(var i = startIndex; i <= endIndex; i++)
	{
		var tempKey = keyPrefix + i;
		tempHj += parseFloat($("#inputTable input[name='"+ tempKey +"']")[0].value);
	}
	
	return tempHj;
}

/**
 * 期末余额自动计算（参照金三）
 * 第15行= 第1-9行的合计数 + 第14行
 * 第20行= 第18行 - 第19行
 * 第29行= 第16行 + 第17行 + 第20-28行的合计数
 * 第30行= 第15行 + 第29行
 * 第41行= 第31-40行的合计数
 * 第46行= 第42-45行的合计数
 * 第47行= 第41行 + 第46行
 * 第52行= 第48-51行的合计数
 * 第53行= 第47行 + 第52行
 * @return 
 */
function changeValue_qmye()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	//第15行= 第1-9行的合计数 + 第14行
	var qmye_15 = getHjValueByIndex("QMYE_", 1, 9) + parseFloat($("#inputTable input[name='QMYE_14']")[0].value);
	
	$("#inputTable input[name='QMYE_15']")[0].value = qmye_15;
	
	//第20行= 第18行 - 第19行
	var qmye_20 = parseFloat($("#inputTable input[name='QMYE_18']")[0].value) - parseFloat($("#inputTable input[name='QMYE_19']")[0].value);

	$("#inputTable input[name='QMYE_20']")[0].value = qmye_20;	
	
	//第29行= 第16行 + 第17行 + 第20-28行的合计数
	var qmye_29 = getHjValueByIndex("QMYE_", 16, 17) + getHjValueByIndex("QMYE_", 20, 28);
	
	$("#inputTable input[name='QMYE_29']")[0].value = qmye_29;	
	
	//第30行= 第15行 + 第29行
	var qmye_30 = qmye_15 + qmye_29;

	$("#inputTable input[name='QMYE_30']")[0].value = qmye_30;	

	//第41行= 第31-40行的合计数
	var qmye_41 = getHjValueByIndex("QMYE_", 31, 40);

	$("#inputTable input[name='QMYE_41']")[0].value = qmye_41;

	//第46行= 第42-45行的合计数
	var qmye_46 = getHjValueByIndex("QMYE_", 42, 45);

	$("#inputTable input[name='QMYE_46']")[0].value = qmye_46;

	//第47行= 第41行 + 第46行
	var qmye_47 = qmye_41 + qmye_46;

	$("#inputTable input[name='QMYE_47']")[0].value = qmye_47;	
	
	//第52行= 第48-51行的合计数
	var qmye_52 = getHjValueByIndex("QMYE_", 48, 51);
	
	$("#inputTable input[name='QMYE_52']")[0].value = qmye_52;	
	
	//第53行= 第47行 + 第52行
	var qmye_53 = qmye_47 + qmye_52;

	$("#inputTable input[name='QMYE_53']")[0].value = qmye_53;
	
	/////////////////////////////////////////////////
	formatValue_SBB();	
}

/**
 * 年初余额自动计算（参照金三）
 * 第15行= 第1-9行的合计数 + 第14行
 * 第20行= 第18行 - 第19行
 * 第29行= 第16行 + 第17行 + 第20-28行的合计数
 * 第30行= 第15行 + 第29行
 * 第41行= 第31-40行的合计数
 * 第46行= 第42-45行的合计数
 * 第47行= 第41行 + 第46行
 * 第52行= 第48-51行的合计数
 * 第53行= 第47行 + 第52行
 * @return
 */
function changeValue_ncye()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	//第15行= 第1-9行的合计数 + 第14行
	var ncye_15 = getHjValueByIndex("NCYE_", 1, 9) + parseFloat($("#inputTable input[name='NCYE_14']")[0].value);
	
	$("#inputTable input[name='NCYE_15']")[0].value = ncye_15;
	
	//第20行= 第18行 - 第19行
	var ncye_20 = parseFloat($("#inputTable input[name='NCYE_18']")[0].value) - parseFloat($("#inputTable input[name='NCYE_19']")[0].value);

	$("#inputTable input[name='NCYE_20']")[0].value = ncye_20;	
	
	//第29行= 第16行 + 第17行 + 第20-28行的合计数
	var ncye_29 = getHjValueByIndex("NCYE_", 16, 17) + getHjValueByIndex("NCYE_", 20, 28);
	
	$("#inputTable input[name='NCYE_29']")[0].value = ncye_29;	
	
	//第30行= 第15行 + 第29行
	var ncye_30 = ncye_15 + ncye_29;

	$("#inputTable input[name='NCYE_30']")[0].value = ncye_30;	

	//第41行= 第31-40行的合计数
	var ncye_41 = getHjValueByIndex("NCYE_", 31, 40);

	$("#inputTable input[name='NCYE_41']")[0].value = ncye_41;

	//第46行= 第42-45行的合计数
	var ncye_46 = getHjValueByIndex("NCYE_", 42, 45);

	$("#inputTable input[name='NCYE_46']")[0].value = ncye_46;

	//第47行= 第41行 + 第46行
	var ncye_47 = ncye_41 + ncye_46;

	$("#inputTable input[name='NCYE_47']")[0].value = ncye_47;	
	
	//第52行= 第48-51行的合计数
	var ncye_52 = getHjValueByIndex("NCYE_", 48, 51);
	
	$("#inputTable input[name='NCYE_52']")[0].value = ncye_52;	
	
	//第53行= 第47行 + 第52行
	var ncye_53 = ncye_47 + ncye_52;

	$("#inputTable input[name='NCYE_53']")[0].value = ncye_53;
	
	/////////////////////////////////////////////////
	formatValue_SBB();
}

///////////////////////////////////////////////////////////////
/**
 * 操作功能(参照金三)
 */
function checkinput()
{
	var result = true;
	unformatValue_SBB();
	
	//第9行大于等于第10行+第11行+第12行+第13行 start
	var line_9_qmye = parseFloat($("#inputTable input[name='QMYE_9']")[0].value);
	var tempHj = parseFloat((parseFloat($("#inputTable input[name='QMYE_10']")[0].value) + parseFloat($("#inputTable input[name='QMYE_11']")[0].value) 
	 		   + parseFloat($("#inputTable input[name='QMYE_12']")[0].value) + parseFloat($("#inputTable input[name='QMYE_13']")[0].value)).toFixed(2));
	
	if(tempHj > line_9_qmye)
	{
		alert("第9栏“存货”的“期末余额”需大于等于第10行+第11行+第12行+第13行的“期末余额”的合计值,请核实!");
		
		formatValue_SBB();
		return false;
	}
	
	var line_9_ncye = parseFloat($("#inputTable input[name='NCYE_9']")[0].value);
	tempHj = parseFloat((parseFloat($("#inputTable input[name='NCYE_10']")[0].value) + parseFloat($("#inputTable input[name='NCYE_11']")[0].value) 
		   + parseFloat($("#inputTable input[name='NCYE_12']")[0].value) + parseFloat($("#inputTable input[name='NCYE_13']")[0].value)).toFixed(2));
	
	if(tempHj > line_9_ncye)
	{
		alert("第9栏“存货”的“年初余额”需大于等于第10行+第11行+第12行+第13行的“年初余额”的合计值,请核实!");
		
		formatValue_SBB();
		return false;
	}
	//第9行大于等于第10行+第11行+第12行+第13行 end
	
	//'资产总计'金额不等于'负债和所有者权益(或股东权益)总计'金额,不能保存!（期末余额和年初余额分别得相等）
	if(parseFloat($("#inputTable input[name='QMYE_30']")[0].value) != parseFloat($("#inputTable input[name='QMYE_53']")[0].value))
	{
		alert("第30栏“资产合计”的“期末余额”需等于第53栏“负债和所有者权益(或股东权益)总计”的“期末余额”,请核实!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='NCYE_30']")[0].value) != parseFloat($("#inputTable input[name='NCYE_53']")[0].value))
	{
		alert("第30栏“资产合计”的“年初余额”需等于第53栏“负债和所有者权益(或股东权益)总计”的“年初余额”,请核实!");
		
		formatValue_SBB();
		return false;
	}
	
	formatValue_SBB();
	
    return result;
}

///////////////////////////////////////////////////////////////
function frmupdate()
{
	if(!checkinput()) return false;
	
	unformatValue_SBB();
	
	document.getElementsByName("xform")[0].TABLE_ACTION.value = "update";
	document.getElementsByName("xform")[0].action = "./MainServlet";
	document.getElementsByName("xform")[0].submit();
	return true;
}

function frminsert()
{
	if(!checkinput()) return false;
	
	unformatValue_SBB();
	
	document.getElementsByName("xform")[0].TABLE_ACTION.value="insert";
	document.getElementsByName("xform")[0].action="./MainServlet";
	document.getElementsByName("xform")[0].submit();
return true;
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
///////////////////////////////////////////////////////////////
