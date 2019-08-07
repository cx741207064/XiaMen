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
 * 将本期金额设置到本年累计金额
 * @param index
 * @return
 */
function setValueToBnljje(index)
{
	var byjeObj = $("#inputTable input[name='BYJE_"+ index +"']")[0];
	var bnljjeObj = $("#inputTable input[name='BNLJJE_"+ index +"']")[0];
	
	unformatCurrency(byjeObj);
	
	bnljjeObj.value = parseFloat($(bnljjeObj).attr("originValue")) - parseFloat($(byjeObj).attr("originValue")) + parseFloat(byjeObj.value);

	formatAll(byjeObj);
	
	changeValue_bnljje();
}

/**
 * 本年累计金额自动计算（参照金三）
 * 第21行= 第1行 - 第2行 - 第3行 - 第11行 - 第14行 - 第18行 + 第20行
 * 第30行= 第21行 + 第22行 - 第24行
 * 第32行= 第30行 - 第31行
 * @return
 */
function changeValue_bnljje()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	//第21行= 第1行 - 第2行 - 第3行 - 第11行 - 第14行 - 第18行 + 第20行
	var bnljje_21 = parseFloat($("#inputTable input[name='BNLJJE_1']")[0].value) - parseFloat($("#inputTable input[name='BNLJJE_2']")[0].value) 
			  - parseFloat($("#inputTable input[name='BNLJJE_3']")[0].value) - parseFloat($("#inputTable input[name='BNLJJE_11']")[0].value)
			  - parseFloat($("#inputTable input[name='BNLJJE_14']")[0].value) - parseFloat($("#inputTable input[name='BNLJJE_18']")[0].value)
			  + parseFloat($("#inputTable input[name='BNLJJE_20']")[0].value);
	
	$("#inputTable input[name='BNLJJE_21']")[0].value = bnljje_21;
	
	//第30行= 第21行 + 第22行 - 第24行
	var bnljje_30 = bnljje_21 + parseFloat($("#inputTable input[name='BNLJJE_22']")[0].value) - parseFloat($("#inputTable input[name='BNLJJE_24']")[0].value);

	$("#inputTable input[name='BNLJJE_30']")[0].value = bnljje_30;	
	
	//第32行= 第30行 - 第31行
	var bnljje_32 = bnljje_30 - parseFloat($("#inputTable input[name='BNLJJE_31']")[0].value);
	
	$("#inputTable input[name='BNLJJE_32']")[0].value = bnljje_32;	
	
	/////////////////////////////////////////////////
	formatValue_SBB();	
}

/**
 * 本期金额自动计算（参照金三）
 * 第21行= 第1行 - 第2行 - 第3行 - 第11行 - 第14行 - 第18行 + 第20行
 * 第30行= 第21行 + 第22行 - 第24行
 * 第32行= 第30行 - 第31行
 * @return
 */
function changeValue_byje()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	//第21行= 第1行 - 第2行 - 第3行 - 第11行 - 第14行 - 第18行 + 第20行
	var byje_21 = parseFloat($("#inputTable input[name='BYJE_1']")[0].value) - parseFloat($("#inputTable input[name='BYJE_2']")[0].value) 
			  - parseFloat($("#inputTable input[name='BYJE_3']")[0].value) - parseFloat($("#inputTable input[name='BYJE_11']")[0].value)
			  - parseFloat($("#inputTable input[name='BYJE_14']")[0].value) - parseFloat($("#inputTable input[name='BYJE_18']")[0].value)
			  + parseFloat($("#inputTable input[name='BYJE_20']")[0].value);
	
	$("#inputTable input[name='BYJE_21']")[0].value = byje_21;
	
	//第30行= 第21行 + 第22行 - 第24行
	var byje_30 = byje_21 + parseFloat($("#inputTable input[name='BYJE_22']")[0].value) - parseFloat($("#inputTable input[name='BYJE_24']")[0].value);

	$("#inputTable input[name='BYJE_30']")[0].value = byje_30;	
	
	//第32行= 第30行 - 第31行
	var byje_32 = byje_30 - parseFloat($("#inputTable input[name='BYJE_31']")[0].value);
	
	$("#inputTable input[name='BYJE_32']")[0].value = byje_32;	
	
	/////////////////////////////////////////////////
	formatValue_SBB();
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

///////////////////////////////////////////////////////////////
/**
 * 操作功能(参照金三)
 */
function checkinput()
{
	var result = true;
	unformatValue_SBB();
	
	//第3行大于等于第4-10行的合计值 
	if(parseFloat($("#inputTable input[name='BNLJJE_3']")[0].value) < parseFloat(getHjValueByIndex("BNLJJE_", 4, 10).toFixed(2)))
	{
		alert("第3栏“营业税金及附加”的“本年累计金额”需大于等于第4栏至第10栏“本年累计金额”的合计数,请核实!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_3']")[0].value) < parseFloat(getHjValueByIndex("BYJE_", 4, 10).toFixed(2)))
	{
		alert("第3栏“营业税金及附加”的“本期金额”需大于等于第4栏至第10栏“本期金额”的合计数,请核实!");
		
		formatValue_SBB();
		return false;
	}
	
	//第11行大于等于第12行 + 第13行
	if(parseFloat($("#inputTable input[name='BNLJJE_11']")[0].value) < parseFloat(getHjValueByIndex("BNLJJE_", 12, 13).toFixed(2)))
	{
		alert("第11栏“销售费用”的“本年累计金额”需大于等于第12栏至第13栏“本年累计金额”的合计数,请核实!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_11']")[0].value) < parseFloat(getHjValueByIndex("BYJE_", 12, 13).toFixed(2)))
	{
		alert("第11栏“销售费用”的“本期金额”需大于等于第12栏至第13栏“本期金额”的合计数,请核实!");
		
		formatValue_SBB();
		return false;
	}
	
	//第14行大于等于第15行 + 第16行 + 第17行
	if(parseFloat($("#inputTable input[name='BNLJJE_14']")[0].value) < parseFloat(getHjValueByIndex("BNLJJE_", 15, 17).toFixed(2)))
	{
		alert("第14栏“管理费用”的“本年累计金额”需大于等于第15栏至第17栏“本年累计金额”的合计数,请核实!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_14']")[0].value) < parseFloat(getHjValueByIndex("BYJE_", 15, 17).toFixed(2)))
	{
		alert("第14栏“管理费用”的“本期金额”需大于等于第15栏至第17栏“本期金额”的合计数,请核实!");
		
		formatValue_SBB();
		return false;
	}
	
	//金三中有17、18栏的校验关系，但由于17、18栏没有逻辑关系，跟陈若需确认网报不添加此校验20160826
	//20160825上线后，参照金三18、19栏没有数据校验关系，跟陈若需确认关闭此校验20160826
	//第18行大于等于第19行
//	if(parseFloat($("#inputTable input[name='BNLJJE_18']")[0].value) < parseFloat($("#inputTable input[name='BNLJJE_19']")[0].value))
//	{
//		alert("第18栏“财务费用”的“本年累计金额”需大于等于第19栏“其中:利息费用(收入以–填列)”的“本年累计金额”,请核实!");
//		
//		formatValue_SBB();
//		return false;
//	}

//	if(parseFloat($("#inputTable input[name='BYJE_18']")[0].value) < parseFloat($("#inputTable input[name='BYJE_19']")[0].value))
//	{
//		alert("第18栏“财务费用”的“本期金额”需大于等于第19栏“其中:利息费用(收入以–填列)”的“本期金额”,请核实!");
//		
//		formatValue_SBB();
//		return false;
//	}	
	
	//第22行大于等于第23行
	if(parseFloat($("#inputTable input[name='BNLJJE_22']")[0].value) < parseFloat($("#inputTable input[name='BNLJJE_23']")[0].value))
	{
		alert("第22栏“加:营业外收入”的“本年累计金额”需大于等于第23栏“其中:政府补助”的“本年累计金额”,请核实!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_22']")[0].value) < parseFloat($("#inputTable input[name='BYJE_23']")[0].value))
	{
		alert("第22栏“加:营业外收入”的“本期金额”需大于等于第23栏“其中:政府补助”的“本期金额”,请核实!");
		
		formatValue_SBB();
		return false;
	}
	
	//第24行大于等于第25到29行的合计值
	if(parseFloat($("#inputTable input[name='BNLJJE_24']")[0].value) < parseFloat(getHjValueByIndex("BNLJJE_", 25, 29).toFixed(2)))
	{
		alert("第24栏“减:营业外支出”的“本年累计金额”需大于等于第25栏至第29栏“本年累计金额”的合计数,请核实!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_24']")[0].value) < parseFloat(getHjValueByIndex("BYJE_", 25, 29).toFixed(2)))
	{
		alert("第24栏“减:营业外支出”的“本期金额”需大于等于第25栏至第29栏“本期金额”的合计数,请核实!");
		
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