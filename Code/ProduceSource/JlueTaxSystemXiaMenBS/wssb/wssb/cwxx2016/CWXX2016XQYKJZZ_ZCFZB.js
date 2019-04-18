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

/**
 * ��ĩ����Զ����㣨���ս�����
 * ��15��= ��1-9�еĺϼ��� + ��14��
 * ��20��= ��18�� - ��19��
 * ��29��= ��16�� + ��17�� + ��20-28�еĺϼ���
 * ��30��= ��15�� + ��29��
 * ��41��= ��31-40�еĺϼ���
 * ��46��= ��42-45�еĺϼ���
 * ��47��= ��41�� + ��46��
 * ��52��= ��48-51�еĺϼ���
 * ��53��= ��47�� + ��52��
 * @return 
 */
function changeValue_qmye()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	//��15��= ��1-9�еĺϼ��� + ��14��
	var qmye_15 = getHjValueByIndex("QMYE_", 1, 9) + parseFloat($("#inputTable input[name='QMYE_14']")[0].value);
	
	$("#inputTable input[name='QMYE_15']")[0].value = qmye_15;
	
	//��20��= ��18�� - ��19��
	var qmye_20 = parseFloat($("#inputTable input[name='QMYE_18']")[0].value) - parseFloat($("#inputTable input[name='QMYE_19']")[0].value);

	$("#inputTable input[name='QMYE_20']")[0].value = qmye_20;	
	
	//��29��= ��16�� + ��17�� + ��20-28�еĺϼ���
	var qmye_29 = getHjValueByIndex("QMYE_", 16, 17) + getHjValueByIndex("QMYE_", 20, 28);
	
	$("#inputTable input[name='QMYE_29']")[0].value = qmye_29;	
	
	//��30��= ��15�� + ��29��
	var qmye_30 = qmye_15 + qmye_29;

	$("#inputTable input[name='QMYE_30']")[0].value = qmye_30;	

	//��41��= ��31-40�еĺϼ���
	var qmye_41 = getHjValueByIndex("QMYE_", 31, 40);

	$("#inputTable input[name='QMYE_41']")[0].value = qmye_41;

	//��46��= ��42-45�еĺϼ���
	var qmye_46 = getHjValueByIndex("QMYE_", 42, 45);

	$("#inputTable input[name='QMYE_46']")[0].value = qmye_46;

	//��47��= ��41�� + ��46��
	var qmye_47 = qmye_41 + qmye_46;

	$("#inputTable input[name='QMYE_47']")[0].value = qmye_47;	
	
	//��52��= ��48-51�еĺϼ���
	var qmye_52 = getHjValueByIndex("QMYE_", 48, 51);
	
	$("#inputTable input[name='QMYE_52']")[0].value = qmye_52;	
	
	//��53��= ��47�� + ��52��
	var qmye_53 = qmye_47 + qmye_52;

	$("#inputTable input[name='QMYE_53']")[0].value = qmye_53;
	
	/////////////////////////////////////////////////
	formatValue_SBB();	
}

/**
 * �������Զ����㣨���ս�����
 * ��15��= ��1-9�еĺϼ��� + ��14��
 * ��20��= ��18�� - ��19��
 * ��29��= ��16�� + ��17�� + ��20-28�еĺϼ���
 * ��30��= ��15�� + ��29��
 * ��41��= ��31-40�еĺϼ���
 * ��46��= ��42-45�еĺϼ���
 * ��47��= ��41�� + ��46��
 * ��52��= ��48-51�еĺϼ���
 * ��53��= ��47�� + ��52��
 * @return
 */
function changeValue_ncye()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	//��15��= ��1-9�еĺϼ��� + ��14��
	var ncye_15 = getHjValueByIndex("NCYE_", 1, 9) + parseFloat($("#inputTable input[name='NCYE_14']")[0].value);
	
	$("#inputTable input[name='NCYE_15']")[0].value = ncye_15;
	
	//��20��= ��18�� - ��19��
	var ncye_20 = parseFloat($("#inputTable input[name='NCYE_18']")[0].value) - parseFloat($("#inputTable input[name='NCYE_19']")[0].value);

	$("#inputTable input[name='NCYE_20']")[0].value = ncye_20;	
	
	//��29��= ��16�� + ��17�� + ��20-28�еĺϼ���
	var ncye_29 = getHjValueByIndex("NCYE_", 16, 17) + getHjValueByIndex("NCYE_", 20, 28);
	
	$("#inputTable input[name='NCYE_29']")[0].value = ncye_29;	
	
	//��30��= ��15�� + ��29��
	var ncye_30 = ncye_15 + ncye_29;

	$("#inputTable input[name='NCYE_30']")[0].value = ncye_30;	

	//��41��= ��31-40�еĺϼ���
	var ncye_41 = getHjValueByIndex("NCYE_", 31, 40);

	$("#inputTable input[name='NCYE_41']")[0].value = ncye_41;

	//��46��= ��42-45�еĺϼ���
	var ncye_46 = getHjValueByIndex("NCYE_", 42, 45);

	$("#inputTable input[name='NCYE_46']")[0].value = ncye_46;

	//��47��= ��41�� + ��46��
	var ncye_47 = ncye_41 + ncye_46;

	$("#inputTable input[name='NCYE_47']")[0].value = ncye_47;	
	
	//��52��= ��48-51�еĺϼ���
	var ncye_52 = getHjValueByIndex("NCYE_", 48, 51);
	
	$("#inputTable input[name='NCYE_52']")[0].value = ncye_52;	
	
	//��53��= ��47�� + ��52��
	var ncye_53 = ncye_47 + ncye_52;

	$("#inputTable input[name='NCYE_53']")[0].value = ncye_53;
	
	/////////////////////////////////////////////////
	formatValue_SBB();
}

///////////////////////////////////////////////////////////////
/**
 * ��������(���ս���)
 */
function checkinput()
{
	var result = true;
	unformatValue_SBB();
	
	//��9�д��ڵ��ڵ�10��+��11��+��12��+��13�� start
	var line_9_qmye = parseFloat($("#inputTable input[name='QMYE_9']")[0].value);
	var tempHj = parseFloat((parseFloat($("#inputTable input[name='QMYE_10']")[0].value) + parseFloat($("#inputTable input[name='QMYE_11']")[0].value) 
	 		   + parseFloat($("#inputTable input[name='QMYE_12']")[0].value) + parseFloat($("#inputTable input[name='QMYE_13']")[0].value)).toFixed(2));
	
	if(tempHj > line_9_qmye)
	{
		alert("��9����������ġ���ĩ������ڵ��ڵ�10��+��11��+��12��+��13�еġ���ĩ���ĺϼ�ֵ,���ʵ!");
		
		formatValue_SBB();
		return false;
	}
	
	var line_9_ncye = parseFloat($("#inputTable input[name='NCYE_9']")[0].value);
	tempHj = parseFloat((parseFloat($("#inputTable input[name='NCYE_10']")[0].value) + parseFloat($("#inputTable input[name='NCYE_11']")[0].value) 
		   + parseFloat($("#inputTable input[name='NCYE_12']")[0].value) + parseFloat($("#inputTable input[name='NCYE_13']")[0].value)).toFixed(2));
	
	if(tempHj > line_9_ncye)
	{
		alert("��9����������ġ����������ڵ��ڵ�10��+��11��+��12��+��13�еġ�������ĺϼ�ֵ,���ʵ!");
		
		formatValue_SBB();
		return false;
	}
	//��9�д��ڵ��ڵ�10��+��11��+��12��+��13�� end
	
	//'�ʲ��ܼ�'������'��ծ��������Ȩ��(��ɶ�Ȩ��)�ܼ�'���,���ܱ���!����ĩ����������ֱ����ȣ�
	if(parseFloat($("#inputTable input[name='QMYE_30']")[0].value) != parseFloat($("#inputTable input[name='QMYE_53']")[0].value))
	{
		alert("��30�����ʲ��ϼơ��ġ���ĩ������ڵ�53������ծ��������Ȩ��(��ɶ�Ȩ��)�ܼơ��ġ���ĩ��,���ʵ!");
		
		formatValue_SBB();
		return false;
	}

	if(parseFloat($("#inputTable input[name='NCYE_30']")[0].value) != parseFloat($("#inputTable input[name='NCYE_53']")[0].value))
	{
		alert("��30�����ʲ��ϼơ��ġ����������ڵ�53������ծ��������Ȩ��(��ɶ�Ȩ��)�ܼơ��ġ������,���ʵ!");
		
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
