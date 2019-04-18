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
 * �����ڽ�����õ������ۼƽ��
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
 * �����ۼƽ���Զ����㣨���ս�����
 * ��21��= ��1�� - ��2�� - ��3�� - ��11�� - ��14�� - ��18�� + ��20��
 * ��30��= ��21�� + ��22�� - ��24��
 * ��32��= ��30�� - ��31��
 * @return
 */
function changeValue_bnljje()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	//��21��= ��1�� - ��2�� - ��3�� - ��11�� - ��14�� - ��18�� + ��20��
	var bnljje_21 = parseFloat($("#inputTable input[name='BNLJJE_1']")[0].value) - parseFloat($("#inputTable input[name='BNLJJE_2']")[0].value) 
			  - parseFloat($("#inputTable input[name='BNLJJE_3']")[0].value) - parseFloat($("#inputTable input[name='BNLJJE_11']")[0].value)
			  - parseFloat($("#inputTable input[name='BNLJJE_14']")[0].value) - parseFloat($("#inputTable input[name='BNLJJE_18']")[0].value)
			  + parseFloat($("#inputTable input[name='BNLJJE_20']")[0].value);
	
	$("#inputTable input[name='BNLJJE_21']")[0].value = bnljje_21;
	
	//��30��= ��21�� + ��22�� - ��24��
	var bnljje_30 = bnljje_21 + parseFloat($("#inputTable input[name='BNLJJE_22']")[0].value) - parseFloat($("#inputTable input[name='BNLJJE_24']")[0].value);

	$("#inputTable input[name='BNLJJE_30']")[0].value = bnljje_30;	
	
	//��32��= ��30�� - ��31��
	var bnljje_32 = bnljje_30 - parseFloat($("#inputTable input[name='BNLJJE_31']")[0].value);
	
	$("#inputTable input[name='BNLJJE_32']")[0].value = bnljje_32;	
	
	/////////////////////////////////////////////////
	formatValue_SBB();	
}

/**
 * ���ڽ���Զ����㣨���ս�����
 * ��21��= ��1�� - ��2�� - ��3�� - ��11�� - ��14�� - ��18�� + ��20��
 * ��30��= ��21�� + ��22�� - ��24��
 * ��32��= ��30�� - ��31��
 * @return
 */
function changeValue_byje()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	//��21��= ��1�� - ��2�� - ��3�� - ��11�� - ��14�� - ��18�� + ��20��
	var byje_21 = parseFloat($("#inputTable input[name='BYJE_1']")[0].value) - parseFloat($("#inputTable input[name='BYJE_2']")[0].value) 
			  - parseFloat($("#inputTable input[name='BYJE_3']")[0].value) - parseFloat($("#inputTable input[name='BYJE_11']")[0].value)
			  - parseFloat($("#inputTable input[name='BYJE_14']")[0].value) - parseFloat($("#inputTable input[name='BYJE_18']")[0].value)
			  + parseFloat($("#inputTable input[name='BYJE_20']")[0].value);
	
	$("#inputTable input[name='BYJE_21']")[0].value = byje_21;
	
	//��30��= ��21�� + ��22�� - ��24��
	var byje_30 = byje_21 + parseFloat($("#inputTable input[name='BYJE_22']")[0].value) - parseFloat($("#inputTable input[name='BYJE_24']")[0].value);

	$("#inputTable input[name='BYJE_30']")[0].value = byje_30;	
	
	//��32��= ��30�� - ��31��
	var byje_32 = byje_30 - parseFloat($("#inputTable input[name='BYJE_31']")[0].value);
	
	$("#inputTable input[name='BYJE_32']")[0].value = byje_32;	
	
	/////////////////////////////////////////////////
	formatValue_SBB();
}

/**
 * ���ݴ���Ĳ�������ϼ�ֵ(�±���β����)
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
 * ��������(���ս���)
 */
function checkinput()
{
	var result = true;
	unformatValue_SBB();
	
	//��3�д��ڵ��ڵ�4-10�еĺϼ�ֵ 
	if(parseFloat($("#inputTable input[name='BNLJJE_3']")[0].value) < parseFloat(getHjValueByIndex("BNLJJE_", 4, 10).toFixed(2)))
	{
		alert("��3����Ӫҵ˰�𼰸��ӡ��ġ������ۼƽ�����ڵ��ڵ�4������10���������ۼƽ��ĺϼ���,���ʵ!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_3']")[0].value) < parseFloat(getHjValueByIndex("BYJE_", 4, 10).toFixed(2)))
	{
		alert("��3����Ӫҵ˰�𼰸��ӡ��ġ����ڽ�����ڵ��ڵ�4������10�������ڽ��ĺϼ���,���ʵ!");
		
		formatValue_SBB();
		return false;
	}
	
	//��11�д��ڵ��ڵ�12�� + ��13��
	if(parseFloat($("#inputTable input[name='BNLJJE_11']")[0].value) < parseFloat(getHjValueByIndex("BNLJJE_", 12, 13).toFixed(2)))
	{
		alert("��11�������۷��á��ġ������ۼƽ�����ڵ��ڵ�12������13���������ۼƽ��ĺϼ���,���ʵ!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_11']")[0].value) < parseFloat(getHjValueByIndex("BYJE_", 12, 13).toFixed(2)))
	{
		alert("��11�������۷��á��ġ����ڽ�����ڵ��ڵ�12������13�������ڽ��ĺϼ���,���ʵ!");
		
		formatValue_SBB();
		return false;
	}
	
	//��14�д��ڵ��ڵ�15�� + ��16�� + ��17��
	if(parseFloat($("#inputTable input[name='BNLJJE_14']")[0].value) < parseFloat(getHjValueByIndex("BNLJJE_", 15, 17).toFixed(2)))
	{
		alert("��14����������á��ġ������ۼƽ�����ڵ��ڵ�15������17���������ۼƽ��ĺϼ���,���ʵ!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_14']")[0].value) < parseFloat(getHjValueByIndex("BYJE_", 15, 17).toFixed(2)))
	{
		alert("��14����������á��ġ����ڽ�����ڵ��ڵ�15������17�������ڽ��ĺϼ���,���ʵ!");
		
		formatValue_SBB();
		return false;
	}
	
	//��������17��18����У���ϵ��������17��18��û���߼���ϵ����������ȷ����������Ӵ�У��20160826
	//20160825���ߺ󣬲��ս���18��19��û������У���ϵ����������ȷ�Ϲرմ�У��20160826
	//��18�д��ڵ��ڵ�19��
//	if(parseFloat($("#inputTable input[name='BNLJJE_18']")[0].value) < parseFloat($("#inputTable input[name='BNLJJE_19']")[0].value))
//	{
//		alert("��18����������á��ġ������ۼƽ�����ڵ��ڵ�19��������:��Ϣ����(�����ԨC����)���ġ������ۼƽ�,���ʵ!");
//		
//		formatValue_SBB();
//		return false;
//	}

//	if(parseFloat($("#inputTable input[name='BYJE_18']")[0].value) < parseFloat($("#inputTable input[name='BYJE_19']")[0].value))
//	{
//		alert("��18����������á��ġ����ڽ�����ڵ��ڵ�19��������:��Ϣ����(�����ԨC����)���ġ����ڽ�,���ʵ!");
//		
//		formatValue_SBB();
//		return false;
//	}	
	
	//��22�д��ڵ��ڵ�23��
	if(parseFloat($("#inputTable input[name='BNLJJE_22']")[0].value) < parseFloat($("#inputTable input[name='BNLJJE_23']")[0].value))
	{
		alert("��22������:Ӫҵ�����롱�ġ������ۼƽ�����ڵ��ڵ�23��������:�����������ġ������ۼƽ�,���ʵ!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_22']")[0].value) < parseFloat($("#inputTable input[name='BYJE_23']")[0].value))
	{
		alert("��22������:Ӫҵ�����롱�ġ����ڽ�����ڵ��ڵ�23��������:�����������ġ����ڽ�,���ʵ!");
		
		formatValue_SBB();
		return false;
	}
	
	//��24�д��ڵ��ڵ�25��29�еĺϼ�ֵ
	if(parseFloat($("#inputTable input[name='BNLJJE_24']")[0].value) < parseFloat(getHjValueByIndex("BNLJJE_", 25, 29).toFixed(2)))
	{
		alert("��24������:Ӫҵ��֧�����ġ������ۼƽ�����ڵ��ڵ�25������29���������ۼƽ��ĺϼ���,���ʵ!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='BYJE_24']")[0].value) < parseFloat(getHjValueByIndex("BYJE_", 25, 29).toFixed(2)))
	{
		alert("��24������:Ӫҵ��֧�����ġ����ڽ�����ڵ��ڵ�25������29�������ڽ��ĺϼ���,���ʵ!");
		
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