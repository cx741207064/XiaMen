//初始化text.js文件
$(function(){contentready();});
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

function changeValue()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	//6=1+2-3+4-5
	var hcArr = $("#inputTable input[name='HC']");
	for(var i = 0; i < hcArr.length; i++)
	{
		$("#inputTable input[name='COL_6']")[i].value = parseFloat($("#inputTable input[name='COL_1']")[i].value)
													  + parseFloat($("#inputTable input[name='COL_2']")[i].value)
													  - parseFloat($("#inputTable input[name='COL_3']")[i].value)
													  + parseFloat($("#inputTable input[name='COL_4']")[i].value)
													  - parseFloat($("#inputTable input[name='COL_5']")[i].value);
	}
	
	/////////////////////////////////////////////////
	formatValue_SBB();
}

/*
    操作功能
*/
function checkinput()
{
	var flag = true;
	unformatValue_SBB();
	
	var hcArr = $("#inputTable input[name='HC']");
	for(var i = 0; i < hcArr.length; i++)
	{
		//1+4
		var data1And4 = parseFloat($("#inputTable input[name='COL_1']")[i].value) + parseFloat($("#inputTable input[name='COL_4']")[i].value);
		
		//3≤1+2+4
		var data1And2And4 = data1And4 + parseFloat($("#inputTable input[name='COL_2']")[i].value);
		if(parseFloat($("#inputTable input[name='COL_3']")[i].value) > data1And2And4)
		{
			flag = false;
			alert("第3列“本期可抵扣不动产进项税额”的值不能大于 第1列“期初待抵扣不动产进项税额”、第2列“本期不动产进项税额增加额” 和 第4列“本期转入的待抵扣不动产进项税额”的合计值，请核实!");
			
			break;
		}
		
		//5≤1+4
		if(parseFloat($("#inputTable input[name='COL_5']")[i].value) > data1And4)
		{
			flag = false;
			alert("第5列“本期转出的待抵扣不动产进项税额”的值不能大于 第1列“期初待抵扣不动产进项税额” 和 第4列“本期转入的待抵扣不动产进项税额”的合计值，请核实!");
			
			break;
		}
	}
	
	formatValue_SBB();
	
    return flag;
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