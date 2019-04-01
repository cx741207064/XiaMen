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
//2012-09-05 Lan 
//附表1 4  的值变更时 主表初始化提示用户

function changeValuefun(){
	var val =$("input[name='ta']").val();
	if ("display" != val){
		isChange();
		initialData();
		changeValue_YBBY();
		changeValue_JZJTBY();
	}
}
function isChange(){
	var str =$("input[name='isChange']").val();
   if (str != "false"){
   	alert("本表中的部分栏的值和《增值税纳税申报表》附列资料（一）的中值不符，页面加载时自动带入。如值不符请返回《增值税纳税申报表》附列资料（一）修改");
   }
}

function initialData(){
	
	if ($("input[name='ygzxgzqy']").val() =="false" && $("input[name='newxgzqy']").val() =="false" ){
		$("#YBBNLJ_13").val("0");
		$("#YBBNLJ_18").val("0");
		$("#YBBNLJ_20").val("0");
	}
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
/*****************************
计算一般项目 本月数
*****************************/
function changeValue_YBBY(){

	unformatValue_SBB();

  //add by zhsu, 20070427,14栏不可为负数
	$("#YBBYS_14").val(Math.abs(parseFloat($("#YBBYS_14").val())));
    
	var sum17= parseFloat($("#YBBYS_12").val())+ parseFloat($("#YBBYS_13").val())
				- parseFloat($("#YBBYS_14").val()) - parseFloat($("#YBBYS_15").val())
				+ parseFloat($("#YBBYS_16").val());
	$("#YBBYS_17").val(sum17);

	var sum11 = parseFloat($("#YBBYS_11").val());
	var sum18 = sum11;	
	if(sum17 < sum11)
	{
		sum18 = sum17;
	}
	$("#YBBYS_18").val(sum18);
	//第18栏本年累计 值赋值
	if ($("input[name='ygzxgzqy']").val() =="true" || $("input[name='newxgzqy']").val() =="true" ){
		var bnlj13 = parseFloat($("#YBBNLJ_13").val());
		var v18 = 0.00;
		if (parseFloat($("#YBBYS_11").val()) > 0){
			v18 = (parseFloat($("#YBBYS_11").val()) - parseFloat($("#YBBYS_18").val()))
					*(parseFloat($("input[name='V182']").val())/parseFloat($("#YBBYS_11").val()) * parseFloat("1"));
		}
		if (bnlj13 > v18){
			$("#YBBNLJ_18").val(v18);
		} else{
			$("#YBBNLJ_18").val(bnlj13);
		}
		$("#YBBNLJ_20").val(parseFloat($("#YBBNLJ_13").val()) - parseFloat($("#YBBNLJ_18").val()));
	}else{
		$("#YBBNLJ_18").val("0");
	}
    var sum19 =0.0;
    //本栏“一般项目”列“本月数”＝第11栏“销项税额”“一般项目”列“本月数”-第18栏“实际抵扣税额”“一般项目”列“本月数”-第18栏“实际抵扣税额”“一般项目”列“本年累计”
	if ($("input[name='ygzxgzqy']").val() =="true" || $("input[name='newxgzqy']").val() =="true"){
		sum19 = parseFloat($("#YBBYS_11").val()) - parseFloat($("#YBBYS_18").val()) - parseFloat($("#YBBNLJ_18").val()) ;
	}else{
		sum19 = parseFloat($("#YBBYS_11").val()) - parseFloat($("#YBBYS_18").val());
	}//
	if (sum19 < 0){
		sum19 = 0;
	}
	$("#YBBYS_19").val(sum19);
	
	var sum20=parseFloat($("#YBBYS_17").val()) - parseFloat($("#YBBYS_18").val());
	$("#YBBYS_20").val(sum20);
	//属于逾期未认定的一般纳税人20栏必须等于0
	if("Y"==yqBz){
		$("#YBBYS_20").val("0.00");
	}
	
	var sum24=parseFloat($("#YBBYS_19").val()) + parseFloat($("#YBBYS_21").val()) - parseFloat($("#YBBYS_23").val());
	$("#YBBYS_24").val(sum24);
	
	var sum27=parseFloat($("#YBBYS_28").val()) + parseFloat($("#YBBYS_29").val()) 
				+ parseFloat($("#YBBYS_30").val()) + parseFloat($("#YBBYS_31").val()) ;
	$("#YBBYS_27").val(sum27);
	
	var sum32=parseFloat($("#YBBYS_24").val()) + parseFloat($("#YBBYS_25").val()) 
				+ parseFloat($("#YBBYS_26").val()) - parseFloat($("#YBBYS_27").val()) ;
	$("#YBBYS_32").val(sum32);
	
	var sum33=parseFloat($("#YBBYS_25").val()) + parseFloat($("#YBBYS_26").val()) - parseFloat($("#YBBYS_27").val());
	if (sum33 < 0){
		sum33 = 0;
	}
	$("#YBBYS_33").val(sum33);
	
	var sum34=parseFloat($("#YBBYS_24").val()) - parseFloat($("#YBBYS_28").val()) - parseFloat($("#YBBYS_29").val());
	$("#YBBYS_34").val(sum34);
	
	var sum38=parseFloat($("#YBBYS_16").val()) + parseFloat($("#YBBYS_22").val()) 
				+ parseFloat($("#YBBYS_36").val()) - parseFloat($("#YBBYS_37").val()) ;
	$("#YBBYS_38").val(sum38);
	
	$("#YBBNLJ_1").val(parseFloat($("#YBBNLJ_1").attr("originValue")) + parseFloat($("#YBBYS_1").val()));
	$("#YBBNLJ_2").val(parseFloat($("#YBBNLJ_2").attr("originValue")) + parseFloat($("#YBBYS_2").val()));
	$("#YBBNLJ_3").val(parseFloat($("#YBBNLJ_3").attr("originValue")) + parseFloat($("#YBBYS_3").val()));
	$("#YBBNLJ_4").val(parseFloat($("#YBBNLJ_4").attr("originValue")) + parseFloat($("#YBBYS_4").val()));
	$("#YBBNLJ_5").val(parseFloat($("#YBBNLJ_5").attr("originValue")) + parseFloat($("#YBBYS_5").val()));
	$("#YBBNLJ_6").val(parseFloat($("#YBBNLJ_6").attr("originValue")) + parseFloat($("#YBBYS_6").val()));
	$("#YBBNLJ_7").val(parseFloat($("#YBBNLJ_7").attr("originValue")) + parseFloat($("#YBBYS_7").val()));
	$("#YBBNLJ_8").val( parseFloat($("#YBBNLJ_8").attr("originValue")) + parseFloat($("#YBBYS_8").val()));
	$("#YBBNLJ_9").val( parseFloat($("#YBBNLJ_9").attr("originValue")) + parseFloat($("#YBBYS_9").val()));
	$("#YBBNLJ_10").val( parseFloat($("#YBBNLJ_10").attr("originValue")) + parseFloat($("#YBBYS_10").val()));
	$("#YBBNLJ_11").val( parseFloat($("#YBBNLJ_11").attr("originValue")) + parseFloat($("#YBBYS_11").val()));
	$("#YBBNLJ_12").val(parseFloat($("#YBBNLJ_12").attr("originValue")) + parseFloat($("#YBBYS_12").val()));
	if ($("input[name='ygzxgzqy']").val() =="false" && $("input[name='newxgzqy'").val() =="false"){
		$("#YBBNLJ_13").val("0");
	}
	$("#YBBNLJ_14").val(parseFloat($("#YBBNLJ_14").attr("originValue")) + parseFloat($("#YBBYS_14").val()));
	$("#YBBNLJ_15").val(parseFloat($("#YBBNLJ_15").attr("originValue")) + parseFloat($("#YBBYS_15").val()));
	$("#YBBNLJ_16").val(parseFloat($("#YBBNLJ_16").attr("originValue")) + parseFloat($("#YBBYS_16").val()));
	//document.xform.YBBNLJ_17").val() = parseFloat(document.xform.YBBNLJ_17").attr("originValue")) + parseFloat(document.xform.YBBYS_17").val());
	
	//第18栏赋值已经上移

	$("#YBBNLJ_19").val(parseFloat($("#YBBYS_19").val()) + parseFloat($("#YBBNLJ_19").attr("originValue")));
	if ($("input[name='ygzxgzqy']").val() =="false" && $("input[name='newxgzqy']").val() =="false"){
		$("#YBBNLJ_20").val("0");
	}
	
	$("#YBBNLJ_21").val( parseFloat($("#YBBNLJ_21").attr("originValue")) + parseFloat($("#YBBYS_21").val()));
	$("#YBBNLJ_22").val( parseFloat($("#YBBNLJ_22").attr("originValue")) + parseFloat($("#YBBYS_22").val()));
	$("#YBBNLJ_23").val( parseFloat($("#YBBNLJ_23").attr("originValue")) + parseFloat($("#YBBYS_23").val()));
	$("#YBBNLJ_24").val( parseFloat($("#YBBNLJ_24").attr("originValue")) + parseFloat($("#YBBYS_24").val()));
	//$("#YBBNLJ_25").val( parseFloat($("#YBBNLJ_25").attr("originValue")) + parseFloat($("#YBBYS_25").val());
	$("#YBBNLJ_26").val( parseFloat($("#YBBNLJ_26").attr("originValue")) + parseFloat($("#YBBYS_26").val()));
	$("#YBBNLJ_27").val( parseFloat($("#YBBNLJ_27").attr("originValue")) + parseFloat($("#YBBYS_27").val()));
	$("#YBBNLJ_28").val( parseFloat($("#YBBNLJ_28").attr("originValue")) + parseFloat($("#YBBYS_28").val()));
	$("#YBBNLJ_29").val( parseFloat($("#YBBNLJ_29").attr("originValue")) + parseFloat($("#YBBYS_29").val()));
	$("#YBBNLJ_30").val( parseFloat($("#YBBNLJ_30").attr("originValue")) + parseFloat($("#YBBYS_30").val()));
	$("#YBBNLJ_31").val( parseFloat($("#YBBNLJ_31").attr("originValue")) + parseFloat($("#YBBYS_31").val()));
	$("#YBBNLJ_32").val( parseFloat($("#YBBNLJ_32").attr("originValue")) + parseFloat($("#YBBYS_32").val()));
	$("#YBBNLJ_38").val( parseFloat($("#YBBYS_38").val()));
	
	yslfDsCalculate();//地税一税两费的计算
	formatValue_SBB();

}

/*****************************
计算一般项目 	本年累计
*****************************/
function changeValue_YB(){
	
	unformatValue_SBB();
	
	$("#YBBNLJ_1").val( parseFloat($("#YBBNLJ_1").attr("originValue")) + parseFloat($("#YBBYS_1").val()));
	$("#YBBNLJ_2").val( parseFloat($("#YBBNLJ_2").attr("originValue")) + parseFloat($("#YBBYS_2").val()));
	$("#YBBNLJ_3").val( parseFloat($("#YBBNLJ_3").attr("originValue")) + parseFloat($("#YBBYS_3").val()));
	$("#YBBNLJ_4").val( parseFloat($("#YBBNLJ_4").attr("originValue")) + parseFloat($("#YBBYS_4").val()));
	$("#YBBNLJ_5").val( parseFloat($("#YBBNLJ_5").attr("originValue")) + parseFloat($("#YBBYS_5").val()));
	$("#YBBNLJ_6").val( parseFloat($("#YBBNLJ_6").attr("originValue")) + parseFloat($("#YBBYS_6").val()));
	$("#YBBNLJ_7").val( parseFloat($("#YBBNLJ_7").attr("originValue")) + parseFloat($("#YBBYS_7").val()));
	$("#YBBNLJ_8").val( parseFloat($("#YBBNLJ_8").attr("originValue")) + parseFloat($("#YBBYS_8").val()));
	$("#YBBNLJ_9").val( parseFloat($("#YBBNLJ_9").attr("originValue")) + parseFloat($("#YBBYS_9").val()));
	$("#YBBNLJ_10").val( parseFloat($("#YBBNLJ_10").attr("originValue")) + parseFloat($("#YBBYS_10").val()));
	$("#YBBNLJ_11").val( parseFloat($("#YBBNLJ_11").attr("originValue")) + parseFloat($("#YBBYS_11").val()));
	$("#YBBNLJ_12").val( parseFloat($("#YBBNLJ_12").attr("originValue")) + parseFloat($("#YBBYS_12").val()));
	if ($("input[name='ygzxgzqy']").val() =="false" && $("input[name='newxgzqy']").val() =="false"){
		$("#YBBNLJ_13").val("0");
	}
	$("#YBBNLJ_14").val( parseFloat($("#YBBNLJ_14").attr("originValue")) + parseFloat($("#YBBYS_14").val()));
	$("#YBBNLJ_15").val( parseFloat($("#YBBNLJ_15").attr("originValue")) + parseFloat($("#YBBYS_15").val()));
	$("#YBBNLJ_16").val( parseFloat($("#YBBNLJ_16").attr("originValue")) + parseFloat($("#YBBYS_16").val()));
	//document.xform.YBBNLJ_17").val() = parseFloat(document.xform.YBBNLJ_17").attr("originValue")) + parseFloat(document.xform.YBBYS_17").val());
		
	if ($("input[name='ygzxgzqy']").val() =="true" || $("input[name='newxgzqy']").val() =="true"){
		var bnlj13 = $("#YBBNLJ_13").val();
		var bnlj13 = parseFloat($("#YBBNLJ_13").val());
		var v18 = 0.00;
		if (parseFloat($("#YBBYS_11").val()) > 0){
			v18 = (parseFloat($("#YBBYS_11").val()) - parseFloat($("#YBBYS_18").val()))
					*(parseFloat($("input[name='V182']").val())/parseFloat($("#YBBYS_11").val()) * parseFloat("1"));
		}
		if (bnlj13 > v18){
			$("#YBBNLJ_18").val(v18);
		} else{
			$("#YBBNLJ_18").val(bnlj13);
		}
		$("#YBBNLJ_20").val(parseFloat($("#YBBNLJ_13").val()) - parseFloat($("#YBBNLJ_18").val()));
	}else{
		$("#YBBNLJ_18").val("0");
	}
	
	$("#YBBNLJ_19").val( parseFloat($("#YBBYS_19").val()) + parseFloat($("#YBBNLJ_19").attr("originValue")));
	
	if ($("input[name='ygzxgzqy']").val() =="false" && $("input[name='newxgzqy']").val() =="false"){
		$("#YBBNLJ_20").val("0");
	}
	//属于逾期未认定的一般纳税人20栏必须等于0
	if("Y"==yqBz){
		$("#YBBNLJ_20").val("0.00");
	}
	$("#YBBNLJ_21").val( parseFloat($("#YBBNLJ_21").attr("originValue")) + parseFloat($("#YBBYS_21").val()));
	$("#YBBNLJ_22").val( parseFloat($("#YBBNLJ_22").attr("originValue")) + parseFloat($("#YBBYS_22").val()));
	$("#YBBNLJ_23").val( parseFloat($("#YBBNLJ_23").attr("originValue")) + parseFloat($("#YBBYS_23").val()));
	$("#YBBNLJ_24").val( parseFloat($("#YBBNLJ_24").attr("originValue")) + parseFloat($("#YBBYS_24").val()));
	//$("#YBBNLJ_25").val( parseFloat($("#YBBNLJ_25").attr("originValue")) + parseFloat($("#YBBYS_25").val());
	$("#YBBNLJ_26").val( parseFloat($("#YBBNLJ_26").attr("originValue")) + parseFloat($("#YBBYS_26").val()));
	$("#YBBNLJ_27").val( parseFloat($("#YBBNLJ_27").attr("originValue")) + parseFloat($("#YBBYS_27").val()));
	$("#YBBNLJ_28").val( parseFloat($("#YBBNLJ_28").attr("originValue")) + parseFloat($("#YBBYS_28").val()));
	$("#YBBNLJ_29").val( parseFloat($("#YBBNLJ_29").attr("originValue")) + parseFloat($("#YBBYS_29").val()));
	$("#YBBNLJ_30").val( parseFloat($("#YBBNLJ_30").attr("originValue")) + parseFloat($("#YBBYS_30").val()));
	$("#YBBNLJ_31").val( parseFloat($("#YBBNLJ_31").attr("originValue")) + parseFloat($("#YBBYS_31").val()));
	$("#YBBNLJ_32").val( parseFloat($("#YBBNLJ_32").attr("originValue")) + parseFloat($("#YBBYS_32").val()));
	$("#YBBNLJ_38").val( parseFloat($("#YBBYS_38").val()));
	
	formatValue_SBB();

}

/*****************************
计算即征即退项目 本月数
*****************************/
function changeValue_JZJTBY(){

	unformatValue_SBB();

	var sum17=parseFloat($("#JZJTBYS_12").val()) + parseFloat($("#JZJTBYS_13").val())- parseFloat($("#JZJTBYS_14").val())
					- parseFloat($("#JZJTBYS_15").val()) + parseFloat($("#JZJTBYS_16").val());
	$("#JZJTBYS_17").val(sum17);
	
	var sum11 = parseFloat($("#JZJTBYS_11").val());
	var sum18 = sum11;
	if(sum17 < sum11)
	{
		sum18 = sum17;
	}
	$("#JZJTBYS_18").val(sum18);

	var sum19=parseFloat($("#JZJTBYS_11").val())-parseFloat($("#JZJTBYS_18").val());
	$("#JZJTBYS_19").val(sum19);

	var sum20=parseFloat($("#JZJTBYS_17").val())-parseFloat($("#JZJTBYS_18").val());
	$("#JZJTBYS_20").val(sum20);
	//属于逾期未认定的一般纳税人20栏必须等于0
	if("Y"==yqBz){
		$("#JZJTBYS_20").val("0.00");
	}

	var sum24=parseFloat($("#JZJTBYS_19").val())+parseFloat($("#JZJTBYS_21").val()) - parseFloat($("#JZJTBYS_23").val());
	$("#JZJTBYS_24").val(sum24);
	
	var sum27=parseFloat($("#JZJTBYS_28").val()) + parseFloat($("#JZJTBYS_30").val()) + parseFloat($("#JZJTBYS_31").val());
	$("#JZJTBYS_27").val(sum27);
	
	var sum32=parseFloat($("#JZJTBYS_24").val()) + parseFloat($("#JZJTBYS_25").val()) - parseFloat($("#JZJTBYS_27").val());
	$("#JZJTBYS_32").val(sum32);

	var sum33 = parseFloat($("#JZJTBYS_25").val())+parseFloat($("#JZJTBYS_26").val()) - parseFloat($("#JZJTBYS_27").val());
	if (sum33 < 0){
		sum33 = 0;
	}
	$("#JZJTBYS_33").val(sum33);
	
	var sum34 = parseFloat($("#JZJTBYS_24").val())-parseFloat($("#JZJTBYS_28").val()) - parseFloat($("#JZJTBYS_29").val());
	$("#JZJTBYS_34").val(sum34);
	
	$("#JZJTBNLJ_1").val( parseFloat($("#JZJTBNLJ_1").attr("originValue")) + parseFloat($("#JZJTBYS_1").val()));
	$("#JZJTBNLJ_2").val( parseFloat($("#JZJTBNLJ_2").attr("originValue")) + parseFloat($("#JZJTBYS_2").val()));
	$("#JZJTBNLJ_3").val( parseFloat($("#JZJTBNLJ_3").attr("originValue")) + parseFloat($("#JZJTBYS_3").val()));
	$("#JZJTBNLJ_4").val( parseFloat($("#JZJTBNLJ_4").attr("originValue")) + parseFloat($("#JZJTBYS_4").val()));
	$("#JZJTBNLJ_5").val( parseFloat($("#JZJTBNLJ_5").attr("originValue")) + parseFloat($("#JZJTBYS_5").val()));
	$("#JZJTBNLJ_6").val( parseFloat($("#JZJTBNLJ_6").attr("originValue")) + parseFloat($("#JZJTBYS_6").val()));
	$("#JZJTBNLJ_11").val( parseFloat($("#JZJTBNLJ_11").attr("originValue")) + parseFloat($("#JZJTBYS_11").val()));
	$("#JZJTBNLJ_12").val( parseFloat($("#JZJTBNLJ_12").attr("originValue")) + parseFloat($("#JZJTBYS_12").val()));
	$("#JZJTBNLJ_13").val( parseFloat($("#JZJTBNLJ_13").attr("originValue")) + parseFloat($("#JZJTBYS_13").val()));
	$("#JZJTBNLJ_14").val( parseFloat($("#JZJTBNLJ_14").attr("originValue")) + parseFloat($("#JZJTBYS_14").val()));
	if($("#JZJTBNLJ_17").attr("originValue")==""){
		$("#JZJTBNLJ_17").attr("originValue","0.00");
	}
	$("#JZJTBNLJ_17").val( parseFloat($("#JZJTBNLJ_17").attr("originValue")) + parseFloat($("#JZJTBYS_17").val()));
	
	$("#JZJTBNLJ_18").val( parseFloat($("#JZJTBNLJ_18").attr("originValue")) + parseFloat($("#JZJTBYS_18").val()));
	
	$("#JZJTBNLJ_19").val( parseFloat($("#JZJTBNLJ_11").val()) - parseFloat($("#JZJTBNLJ_18").val()));
	
	$("#JZJTBNLJ_20").val( parseFloat($("#JZJTBNLJ_20").attr("originValue")) + parseFloat($("#JZJTBYS_20").val()));
	$("#JZJTBNLJ_21").val( parseFloat($("#JZJTBNLJ_21").attr("originValue")) + parseFloat($("#JZJTBYS_21").val()));
	//$("#JZJTBNLJ_22").val( parseFloat($("#JZJTBNLJ_22").attr("originValue")) + parseFloat($("#JZJTBYS_22").val());
	$("#JZJTBNLJ_23").val( parseFloat($("#JZJTBNLJ_23").attr("originValue")) + parseFloat($("#JZJTBYS_23").val()));
	$("#JZJTBNLJ_24").val( parseFloat($("#JZJTBNLJ_24").attr("originValue")) + parseFloat($("#JZJTBYS_24").val()));
	/**
	 * 25行累计数等于jzjtQmwjse,无需再进行累加
	 * 
	 * modify by zhiweiHuang 20170417
	 */
	//$("#JZJTBNLJ_25").val( parseFloat($("#JZJTBNLJ_25").attr("originValue")) + parseFloat($("#JZJTBYS_25").val()));
	//$("#JZJTBNLJ_26").val( parseFloat($("#JZJTBNLJ_26").attr("originValue")) + parseFloat($("#JZJTBYS_26").val());
	$("#JZJTBNLJ_27").val( parseFloat($("#JZJTBNLJ_27").attr("originValue")) + parseFloat($("#JZJTBYS_27").val()));
	if($("#JZJTBNLJ_28").attr("originValue")==""){
		$("#JZJTBNLJ_28").attr("originValue","0.00");
	}
	$("#JZJTBNLJ_28").val( parseFloat($("#JZJTBNLJ_28").attr("originValue")) + parseFloat($("#JZJTBYS_28").val()));
	
	//$("#JZJTBNLJ_29").val( parseFloat($("#JZJTBNLJ_29").attr("originValue")) + parseFloat($("#JZJTBYS_29").val());
	$("#JZJTBNLJ_30").val( parseFloat($("#JZJTBNLJ_30").attr("originValue")) + parseFloat($("#JZJTBYS_30").val()));
	$("#JZJTBNLJ_31").val( parseFloat($("#JZJTBNLJ_31").attr("originValue")) + parseFloat($("#JZJTBYS_31").val()));
	$("#JZJTBNLJ_32").val( parseFloat($("#JZJTBYS_32").val()));
	
	if($("#JZJTBNLJ_33").attr("originValue")==""){
		$("#JZJTBNLJ_33").attr("originValue","0.00");
	}
	var sumj33 = parseFloat($("#JZJTBNLJ_33").attr("originValue")) + parseFloat($("#JZJTBYS_33").val());
	
	$("#JZJTBNLJ_33").val(sumj33);
    
	if($("#JZJTBNLJ_34").attr("originValue")==""){
		$("#JZJTBNLJ_34").attr("originValue","0.00");
	}
	
	$("#JZJTBNLJ_34").val( parseFloat($("#JZJTBNLJ_34").attr("originValue")) + parseFloat($("#JZJTBYS_34").val()));
	$("#JZJTBNLJ_35").val( parseFloat($("#JZJTBNLJ_35").attr("originValue")) + parseFloat($("#JZJTBYS_35").val()));
	//$("#JZJTBNLJ_36").val( parseFloat(document.xform.JZJTBNLJ_36.originValue) + parseFloat(document.xform.JZJTBYS_36").val());
	//document.xform.JZJTBNLJ_37").val( parseFloat(document.xform.JZJTBNLJ_37.originValue) + parseFloat(document.xform.JZJTBYS_37").val());
	//document.xform.JZJTBNLJ_38").val() = parseFloat(document.xform.JZJTBNLJ_38.originValue) + parseFloat(document.xform.JZJTBYS_38").val());
	
	yslfDsCalculate();//地税一税两费的计算
	formatValue_SBB();
}

/*****************************
计算即征即退项目 本年累计数
*****************************/
function changeValue_JZJT() {
	
	unformatValue_SBB();
	
	$("#JZJTBNLJ_1").val( parseFloat($("#JZJTBNLJ_1").attr("originValue")) + parseFloat($("#JZJTBYS_1").val()));
	$("#JZJTBNLJ_2").val( parseFloat($("#JZJTBNLJ_2").attr("originValue")) + parseFloat($("#JZJTBYS_2").val()));
	$("#JZJTBNLJ_3").val( parseFloat($("#JZJTBNLJ_3").attr("originValue")) + parseFloat($("#JZJTBYS_3").val()));
	$("#JZJTBNLJ_4").val( parseFloat($("#JZJTBNLJ_4").attr("originValue")) + parseFloat($("#JZJTBYS_4").val()));
	$("#JZJTBNLJ_5").val( parseFloat($("#JZJTBNLJ_5").attr("originValue")) + parseFloat($("#JZJTBYS_5").val()));
	$("#JZJTBNLJ_6").val( parseFloat($("#JZJTBNLJ_6").attr("originValue")) + parseFloat($("#JZJTBYS_6").val()));
	//$("#JZJTBNLJ_7").val( parseFloat($("#JZJTBNLJ_7").attr("originValue")) + parseFloat($("#JZJTBYS_7").val());
	//$("#JZJTBNLJ_8").val( parseFloat($("#JZJTBNLJ_8").attr("originValue")) + parseFloat($("#JZJTBYS_8").val());
	//$("#JZJTBNLJ_9").val( parseFloat($("#JZJTBNLJ_9").attr("originValue")) + parseFloat($("#JZJTBYS_9").val());
	//$("#JZJTBNLJ_10").val( parseFloat($("#JZJTBNLJ_10").attr("originValue")) + parseFloat($("#JZJTBYS_10").val());
	$("#JZJTBNLJ_11").val( parseFloat($("#JZJTBNLJ_11").attr("originValue")) + parseFloat($("#JZJTBYS_11").val()));
	$("#JZJTBNLJ_12").val( parseFloat($("#JZJTBNLJ_12").attr("originValue")) + parseFloat($("#JZJTBYS_12").val()));
	$("#JZJTBNLJ_13").val( parseFloat($("#JZJTBNLJ_13").attr("originValue")) + parseFloat($("#JZJTBYS_13").val()));
	$("#JZJTBNLJ_14").val( parseFloat($("#JZJTBNLJ_14").attr("originValue")) + parseFloat($("#JZJTBYS_14").val()));
	//$("#JZJTBNLJ_15").val( parseFloat($("#JZJTBNLJ_15").attr("originValue")) + parseFloat($("#JZJTBYS_15").val());
	//$("#JZJTBNLJ_16").val( parseFloat($("#JZJTBNLJ_16").attr("originValue")) + parseFloat($("#JZJTBYS_16").val());
	if($("#JZJTBNLJ_17").attr("originValue")==""){
		$("#JZJTBNLJ_17").attr("originValue","0.00");
	}
	$("#JZJTBNLJ_17").val( parseFloat($("#JZJTBNLJ_17").attr("originValue")) + parseFloat($("#JZJTBYS_17").val()));
	$("#JZJTBNLJ_18").val( parseFloat($("#JZJTBNLJ_18").attr("originValue")) + parseFloat($("#JZJTBYS_18").val()));
	
	$("#JZJTBNLJ_19").val( parseFloat($("#JZJTBNLJ_11").val()) - parseFloat($("#JZJTBNLJ_18").val()));
	
	$("#JZJTBNLJ_20").val( parseFloat($("#JZJTBNLJ_20").attr("originValue")) + parseFloat($("#JZJTBYS_20").val()));
	$("#JZJTBNLJ_21").val( parseFloat($("#JZJTBNLJ_21").attr("originValue")) + parseFloat($("#JZJTBYS_21").val()));
	//$("#JZJTBNLJ_22").val( parseFloat($("#JZJTBNLJ_22").attr("originValue")) + parseFloat($("#JZJTBYS_22").val());
	$("#JZJTBNLJ_23").val( parseFloat($("#JZJTBNLJ_23").attr("originValue")) + parseFloat($("#JZJTBYS_23").val()));
	$("#JZJTBNLJ_24").val( parseFloat($("#JZJTBNLJ_24").attr("originValue")) + parseFloat($("#JZJTBYS_24").val()));
	/**
	 * 25行累计数等于jzjtQmwjse,无需再进行累加
	 * 
	 * modify by zhiweiHuang 20170417
	 */
	//$("#JZJTBNLJ_25").val( parseFloat($("#JZJTBNLJ_25").attr("originValue")) + parseFloat($("#JZJTBYS_25").val()));
	//$("#JZJTBNLJ_26").val( parseFloat($("#JZJTBNLJ_26").attr("originValue")) + parseFloat($("#JZJTBYS_26").val());
	$("#JZJTBNLJ_27").val( parseFloat($("#JZJTBNLJ_27").attr("originValue")) + parseFloat($("#JZJTBYS_27").val()));
	
	if($("#JZJTBNLJ_28").attr("originValue")==""){
		$("#JZJTBNLJ_28").attr("originValue","0.00");
	}
	$("#JZJTBNLJ_28").val( parseFloat($("#JZJTBNLJ_28").attr("originValue")) + parseFloat($("#JZJTBYS_28").val()));
	
	//$("#JZJTBNLJ_29").val( parseFloat($("#JZJTBNLJ_29").attr("originValue")) + parseFloat($("#JZJTBYS_29").val());
	$("#JZJTBNLJ_30").val( parseFloat($("#JZJTBNLJ_30").attr("originValue")) + parseFloat($("#JZJTBYS_30").val()));
	$("#JZJTBNLJ_31").val( parseFloat($("#JZJTBNLJ_31").attr("originValue")) + parseFloat($("#JZJTBYS_31").val()));
	$("#JZJTBNLJ_32").val( parseFloat($("#JZJTBYS_32").val()));
	if($("#JZJTBNLJ_33").attr("originValue")==""){
		$("#JZJTBNLJ_33").attr("originValue","0.00");
	}
	$("#JZJTBNLJ_33").val( parseFloat($("#JZJTBNLJ_33").attr("originValue")) + parseFloat($("#JZJTBYS_33").val()));
	if($("#JZJTBNLJ_34").attr("originValue")==""){
		$("#JZJTBNLJ_34").attr("originValue","0.00");
	}
	$("#JZJTBNLJ_34").val( parseFloat($("#JZJTBNLJ_34").attr("originValue")) + parseFloat($("#JZJTBYS_34").val()));
	
	$("#JZJTBNLJ_35").val( parseFloat($("#JZJTBNLJ_35").attr("originValue")) + parseFloat($("#JZJTBYS_35").val()));
	//$("#JZJTBNLJ_36").val( parseFloat($("#JZJTBNLJ_36.originValue) + parseFloat($("#JZJTBYS_36").val());
	//$("#JZJTBNLJ_37").val( parseFloat($("#JZJTBNLJ_37.originValue) + parseFloat($("#JZJTBYS_37").val());
	//$("#JZJTBNLJ_38").val( parseFloat($("#JZJTBNLJ_38.originValue) + parseFloat($("#JZJTBYS_38").val());
	
	formatValue_SBB();
}

/*****************************
保存前校验
*****************************/
function check_save()
{
	//强制重新计算，add by Lan, 20120912
	changeValue_YBBY();
	changeValue_YB();
	changeValue_JZJTBY();
	changeValue_JZJT();
	//强制重新计算，end
		
	unformatValue_SBB();

	var flag=true;
	
	//检查25栏,不能大于上期32栏
	if(!checkQcmjse()){
		  flag=false;
		  formatAllItem();
			
		  return flag;
	}
	//20060321王颖 监控分次预缴和出口退税预缴  开始
	
	if(!checkFcyjse() || !checkCkyjse()){
		flag = false;
		formatAllItem();
		
		return flag;
	}
	
	//一般19、21合计
	var yb1921 = parseFloat(parseFloat(parseFloat($("#YBBYS_19").val()) + parseFloat($("#YBBYS_21").val())).toFixed(2));
	var yb23 = parseFloat($("#YBBYS_23").val());
	//小曾提出，因为附表一有可以填写负数，所以这里判断，当19栏与21栏“一般项目”的本月数的合计大于等于0时，提示以前的校验：23栏“一般项目”的本月数不能大于本列的19及21行的合计值
	//当19栏与21栏“一般项目”的本月数的合计小于0时增加校验：当19栏与21栏“一般项目”的本月数的合计小于0时，23栏“一般项目”的本月数必须为0   by    wxf     20170928
    if(yb1921 < 0){
    	if(yb23 != 0){
    		alert("当19栏与21栏“一般项目”的本月数的合计小于0时，23栏“一般项目”的本月数必须为0！");
        	formatAllItem();
            return false;
    	}
    }else{
    	if (yb23> yb1921) {
    		alert("23栏“一般项目”的本月数不能大于本列的19及21行的合计值！");
    		formatAllItem();
    		return false;
    	}
    }
	
	//即征即退19\21合计
	var zjzt1921 = parseFloat(parseFloat(parseFloat($("#JZJTBYS_19").val()) + parseFloat($("#JZJTBYS_21").val())).toFixed(2));
	var jz23 = parseFloat($("#JZJTBYS_23").val());
	//小曾提出，因为附表一有可以填写负数，所以这里判断，当19栏与21栏“即征即退项目”的本月数的合计大于等于0时，提示以前的校验：23栏“即征即退项目”的本月数不能大于本列的19及21行的合计值
	//当19栏与21栏“即征即退项目”的本月数的合计小于0时增加校验：当19栏与21栏“即征即退项目”的本月数的合计小于0时，23栏“即征即退项目”的本月数必须为0   by    wxf     20170928
	if(zjzt1921 < 0){
		if(jz23 != 0){
			alert("当19栏与21栏“即征即退项目”的本月数的合计小于0时，23栏“即征即退项目”的本月数必须为0！");
			formatAllItem();
			return false;
		}
	}else{
		if (jz23> zjzt1921) {
			alert("23栏“即征即退项目”的本月数不能大于本列的19及21行的合计值！");
			formatAllItem();
			return false;
		}
	}
	
	// 第23栏 保存前校验
	var yb23 = parseFloat($("#YBBYS_23").val());
	if (yb23 < 0){
		flag = false;
		alert("第 23 行中“一般项目”的本月数要大于等于0！");
		formatAllItem();
		
		return flag;
	}
	var jz23 = parseFloat($("#JZJTBYS_23").val());
	if (jz23 < 0){
		flag = false;
		alert("第 23 行中“即征即退项目”的本月数要大于等于0！");
		formatAllItem();
		
		return flag;
	}
	
	//营改增新需求，主表23栏校验规则为：“一般项目”本月数+“即征即退”本月数应大于等于附表4的第一行第四列并且小于等于附表一第9栏（9b）第9列销售额合计*0.02 +附表4的第一行第四列+附表1第11栏第9列*0.01。add by zhiweiHuang 20160425
	var z23 = parseFloat((yb23 + jz23).toFixed(2));
	var fj4 = parseFloat($("#FJ4_HJ").val());
	var fb1hj = parseFloat((parseFloat($("#FB1_10").val()) * 0.01 + parseFloat($("#FB1_9b_XXE").val()) * 0.02).toFixed(2));
	var fb1AndFb4Hj = parseFloat((fj4 + fb1hj).toFixed(2));
	if (z23 > fb1AndFb4Hj || z23 < fj4){
		flag = false;
		alert("第23栏“一般项目”本月数和“即征即退”本月数的合计值应大于等于《增值税纳税申报表》附列资料（四）的第一行第四列并且\n小于等于《增值税纳税申报表》附列资料（一）第9栏（9b）第9列销售额合计*0.02 +《增值税纳税申报表》附列资料（四）的第一行第四列+《增值税纳税申报表》附列资料（一）第11栏第9列*0.01的值！");
		formatAllItem();
		
		return flag;
	}
	/*小曾提出取消此校验    by   wxf   20170927
	//判断第一栏的“一般项目”的本月数 是否大于等于 2至4栏对应列之和
	var sum1 = parseFloat($("#YBBYS_1").val());
	var sum2 = parseFloat(parseFloat($("#YBBYS_2").val()) + parseFloat($("#YBBYS_3").val()) +parseFloat($("#YBBYS_4").val())).toFixed(2);
	if (sum1 < sum2){
		flag = false;
		alert("第 1 行中“一般项目”的本月数要大于等于第2至4行之和！");
		formatAllItem();
		
		return flag;
	}*/
	     /*     
	           第5栏已经换成新检验了  ，旧的不用    by  wxf  20170720   start
//	//判断 “一般项目”的“本月数” 中的第5栏 是否>= 《附列资料（一）》第9列第8至12行之和-第9列第13、14行之和
//	var YBBYS5 = parseFloat($("#YBBYS_5").val());
//	var V051 = parseFloat($("input[name='V051']").val());
//	if (YBBYS5 < V051){
//		alert("“一般项目”的“本月数” 中的第5栏 要大于等于 《增值税纳税申报表》附列资料（一）第9列第8至12行之和-第9列第14、15行之和");
//		formatAllItem();
//		
//		flag = false;
//		return flag;
//	}
	
//	//判断 “即征即退项目”的“本月数” 中的第5栏 是否 >=《附列资料（一）》第9列第13、14行之和
//	var JZJTBYS5 = parseFloat($("#JZJTBYS_5").val());
//	var V053 = parseFloat($("input[name='V053']").val());
//	if (JZJTBYS5 < V053){
//		alert("“即征即退项目”的“本月数” 中的第5栏 要大于等于 《增值税纳税申报表》附列资料（一）第9列第14、15行之和");
//		formatAllItem();
//		
//		flag = false;
//		return flag;
//	}             第5栏已经换成新检验了  ，旧的不用    by  wxf  20170720   end
         */ 
	
	//判断 “一般项目”的“本月数” 中的第22栏 是否>= 第6栏 × 3%
	var v016 = formatPoint(parseFloat($("#YBBYS_6").val()) * 0.03, 2);
	var v226 = parseFloat($("#YBBYS_22").val());
	if (v226 < v016){
		alert("“一般项目”的“本月数” 中的第22栏 要大于等于 第6栏 × 3%");
		formatAllItem();
		
		flag = false;
		return flag;
	}
	
	//营改增新需求：28栏次应大于0小于等于24栏“一般项目”和“即征即退”本月数。 add by zhiweiHuang 20160425 start
	var lanHj_28 = parseFloat($("#YBBYS_28").val()) + parseFloat($("#JZJTBYS_28").val());
	if(lanHj_28 < 0)
	{
		alert("第28栏次“一般项目”的“本月数”和“即征即退”的本月数合计值 需大于 0，请核实!");
		formatAllItem();
		
		flag = false;
		return flag;
	}

	//取消一下规则【20170929】【未修改】第28栏次“一般项目”的“本月数”和“即征即退”的本月数合计值 不能大于 第24栏次“一般项目”的“本月数”和“即征即退”的本月数合计值，请核实! 20170929 by YHQ
//	var lanHj_24 = parseFloat($("#YBBYS_24").val()) + parseFloat($("#JZJTBYS_24").val());
//	if(lanHj_28 > lanHj_24)
//	{
//		alert("第28栏次“一般项目”的“本月数”和“即征即退”的本月数合计值 不能大于 第24栏次“一般项目”的“本月数”和“即征即退”的本月数合计值，请核实!");
//		formatAllItem();
//		
//		flag = false;
//		return flag;
//	}
	//营改增新需求：28栏次应大于0小于等于24栏“一般项目”和“即征即退”本月数。 add by zhiweiHuang 20160425 end
	
	//曾艳梅提出新规则 20170929 by  YHQ
	var ybxmbys24 = parseFloat($("#YBBYS_24").val());
	var ybxmbys28 = parseFloat($("#YBBYS_28").val());
	var jzjtbys24 = parseFloat($("#JZJTBYS_24").val());
	var jzjtbys28 = parseFloat($("#JZJTBYS_28").val());
	//（4）当第24栏“一般项目”的“本月数”大于等于0时，第28栏次“一般项目”的“本月数”不能大于 第24栏次“一般项目”的“本月数”。
	//（5）当第24栏“一般项目”的“本月数”小于0时，第28栏次“一般项目”的“本月数”只能为0。
	if (ybxmbys24>=0){
		if(ybxmbys28>ybxmbys24){
			flag = false;
			alert("第24栏次“一般项目”的“本月数”的值大于等于0时， 第28栏次“一般项目”的“本月数”的值不能大于 第24栏次“一般项目”的“本月数”的值，请核实!");
			formatAllItem();
			return flag;
		}
	}else{
		if(ybxmbys28!=0){
			flag = false;
			alert("第24栏次“一般项目”的“本月数”的值小于0时， 第28栏次“一般项目”的“本月数”的值只能为0，请核实!");
			formatAllItem();
			return flag;
		}
	}
	//（6）当第24栏“即征即退”的“本月数”大于等于0时，第28栏次“即征即退”的“本月数”不能大于 第24栏次“即征即退”的“本月数”。
	//（7）当第24栏“即征即退”的“本月数”小于0时，第28栏次“即征即退”的“本月数”只能为0。
	if (jzjtbys24>=0){
		if(jzjtbys28>jzjtbys24){
			flag = false;
			alert("第24栏次“即征即退”的“本月数”的值大于等于0时， 第28栏次“即征即退”的“本月数”的值不能大于 第24栏次“即征即退”的“本月数”的值，请核实!");
			formatAllItem();
			return flag;
		}
	}else{
		if(jzjtbys28!=0){
			flag = false;
			alert("第24栏次“即征即退”的“本月数”的值小于0时， 第28栏次“即征即退”的“本月数”的值只能为0，请核实!");
			formatAllItem();
			return flag;
		}
	}
	
	var vv0 = parseFloat($("input[name='vv0']").val());
	var vv1 = parseFloat($("input[name='vv1']").val());
	var vv2 = parseFloat($("input[name='vv2']").val());
	var vv3 = parseFloat($("input[name='vv3']").val());
	var vv4 = parseFloat($("input[name='vv4']").val());
	var v234 = parseFloat(parseFloat(parseFloat($("#YBBYS_2").val()) + parseFloat($("#YBBYS_3").val()) + parseFloat($("#YBBYS_4").val())).toFixed(2));
	var v23 =parseFloat(parseFloat(parseFloat($("#YBBYS_2").val()) + parseFloat($("#YBBYS_3").val())).toFixed(2));
	var vjzjt23 = parseFloat(parseFloat(parseFloat($("#JZJTBYS_2").val()) + parseFloat($("#JZJTBYS_3").val())).toFixed(2));
	var v56 = parseFloat(parseFloat(parseFloat($("#YBBYS_5").val()) - parseFloat($("#YBBYS_6").val())).toFixed(2));
	var vjzjt56 = parseFloat(parseFloat(parseFloat($("#JZJTBYS_5").val()) - parseFloat($("#JZJTBYS_6").val())).toFixed(2));
	
	var range =0.1; //误差范围

	/*因为经基层局反映，“主表‘一般项目’2、3、4栏与附表一的校验”有问题，经研究，小曾提出，取消之前的这个校验，然后再增加以下2个新校验     by    wxf     20171030     start*/
	/*
	//主表第2、3、4栏“一般项目”“本月数”列合计数=附表一第9列“合计_销售额”列第1+3+4a栏之和-附表一第9列“合计_销售额”列第6行     by     wxf     20170720
	if(Math.abs(formatPoint((v234-vv0),2)) > range){
		alert("主表第2、3、4栏“一般项目”“本月数”列合计数=附表一第9列“合计_销售额”列第1+3+4a栏之和-附表一第9列“合计_销售额”列第6行，请核实!");
		formatAllItem();
		
		flag = false;
		return flag;
	}
	*/
	
	//主表第2、3“一般项目”“本月数”列合计数=附表一第9列“合计_销售额”列第1+3+4a栏之和-附表一第9列“合计_销售额”列第6行     by     wxf     20171030
	if(Math.abs(formatPoint((v23-vv0),2)) > range){
		alert("主表第2、3栏“一般项目”“本月数”列合计数=附表一第9列“合计_销售额”列第1+3+4a栏之和-附表一第9列“合计_销售额”列第6行，请核实!");
		formatAllItem();
		
		flag = false;
		return flag;
	}
	
	//主表第4栏“一般项目”“本月数”列=附表一第7列“纳税检查调整_销售额”列第1+2+3+4a+4b+5栏之和    by     wxf     20171030
	if(parseFloat($("#YBBYS_4").val()) != vv4){
		alert("主表第4栏“一般项目”“本月数”列=附表一第7列“纳税检查调整_销售额”列第1+2+3+4a+4b+5栏之和，请核实!");
		formatAllItem();
		
		flag = false;
		return flag;
	}
	/*因为经基层局反映，“主表‘一般项目’2、3、4栏与附表一的校验”有问题，经研究，小曾提出，取消之前的这个校验，然后再增加以下2个新校验     by    wxf     20171030     end*/
	
	
	//主表第2、3栏 “即征即退项目”“本月数”列合计数=附表一第9列“合计_销售额”列第6行     by     wxf     20170705
	if(Math.abs(formatPoint((vjzjt23-vv1),2)) > range){
		alert("主表第2、3栏 “即征即退项目”“本月数”列合计数=附表一第9列“合计_销售额”列第6行，请核实!");
		formatAllItem();
		
		flag = false;
		return flag;
	}
	//主表第5栏“一般项目”“本月数”列-主表第6栏“一般项目”“本月数”列=附表一第9列“合计_销售额”列第8、9a、9b、10、11、12、13a、13b、13c栏之和-附表一第9列“合计_销售额”列第14+15行       by     wxf     20170720
	if(Math.abs(formatPoint((v56-vv2),2)) > range){
		alert("主表第5栏“一般项目”“本月数”列-主表第6栏“一般项目”“本月数”列=附表一第9列“合计_销售额”列第8、9a、9b、10、11、12、13a、13b、13c栏之和-附表一第9列“合计_销售额”列第14+15行，请核实!");
		formatAllItem();
		
		flag = false;
		return flag;
	}
	
	//主表第5栏“即征即退项目”“本月数”列=附表一第9列“合计_销售额”列第14+15行      by     wxf     20170720
	if(Math.abs(formatPoint((vjzjt56-vv3),2)) > range){
		alert("主表第5栏“即征即退项目”“本月数”列=附表一第9列“合计_销售额”列第14+15行，请核实!");
		formatAllItem();
		
		flag = false;
		return flag;
	}
	//小曾提出新加校验：第6栏“一般项目”“本月数”列不能为负数       by     wxf     20170928
	var yb6 = parseFloat($("#YBBYS_6").val());
	if(yb6<0){
		alert("主表第6栏“一般项目”“本月数”不能为负数！");
		formatAllItem();
		
		flag = false;
		return flag;
	}
	
	return flag;
}

function formatAllItem()
{
	formatValue_SBB();
}

/*****************************
新增
*****************************/
function frminsert(){
	var flag  = check_save()&& checkfjs();
	if (flag){
		
		//xuyb add 4 lines in 20060406 沈阳问题描述：增值税主表中应补退税额(YBTSE)存入数据库时,在存入前没有进行去逗号的处理,所以存入后数据库中YBTSE数是不对的.
		unformatValue_SBB();
	    var sum=parseFloat($("#YBBYS_34").val())+parseFloat($("#JZJTBYS_34").val());
	    $("#YBTSE").val(sum);       
	    $("input[name='TABLE_ACTION']").val("insert");
		$("#xform").attr("action","./MainServlet");
		$("#xform").submit();
        return true;
	}
}
/*****************************
更新
*****************************/
function frmupdate() {
	var flag  = check_save()&& checkfjs();
	if (flag){
		
		//xuyb add 4 lines in 20060406 沈阳问题描述：增值税主表中应补退税额(YBTSE)存入数据库时,在存入前没有进行去逗号的处理,所以存入后数据库中YBTSE数是不对的.
		unformatValue_SBB();
	    var sum=parseFloat($("#YBBYS_34").val())+parseFloat($("#JZJTBYS_34").val());
	    $("#YBTSE").val(sum);
	    $("input[name='TABLE_ACTION']").val("update");
		$("#xform").attr("action","./MainServlet");
		$("#xform").submit();
        return true;
	}
}

/*****************************
删除
*****************************/
function frmdelete()
{
	$("input[name='TABLE_ACTION']").val("delete");
	$("#xform").attr("action","./MainServlet");
	$("#xform").submit();
    return true;
}

//检查25栏,不能大于上期32栏
function  checkQcmjse(){
	
	     var flag=true;
	
		 unformatValue_SBB();
		 if(parseFloat($("#YBBYS_25").val())>parseFloat($("#YBBYS_25").attr("trueValue"))){
		 	alert("25栏一般货物及劳务本月数不能大于上期32栏一般货物及劳务期末未缴税额本月数");
	        flag=false;
		 	}
	
		 if(parseFloat($("#JZJTBYS_25").val())>parseFloat($("#JZJTBYS_25").attr("trueValue"))){
		 	alert("25栏即征即退货物及劳务本月数不能大于上期32栏即征即退货物及劳务期末未缴税额本月数");
		 	 flag=false;
		 	}
		 	
		 formatValue_SBB();
	   
	   return flag;
	}

//检查一般本月数28栏，不能大于CTAIS带出的分次预缴税额
//营改增新需求：第28行表间校验：第28行“一般项目”的“本月数”和“即征即退”的本月数合计值大于等于 附表四第四列第3，4，5行合计数 且 小于等于附表四第四列第3，4，5行合计数 加上CTAIS的分次预缴税额的值 modify by zhiweiHuang 20160524
function checkFcyjse(){
	var flag = true;
	    unformatValue_SBB();
        
        var jc_28=parseFloat($("#JCSJ_YBBYS_28").val());
        
        //分次预缴税额
        var zbfcyjse = parseFloat($("#YBBYS_28").val()) + parseFloat($("#JZJTBYS_28").val());
        
        //附表4第4列第3，4，5行合计值
        var fb4_col4_hj = parseFloat($("#FB4_COL4_Hj").val());

	if(zbfcyjse < fb4_col4_hj || zbfcyjse > (jc_28 + fb4_col4_hj)){
		
		alert("第28行“分次预缴税额”“一般项目”列本月数和“即征即退项目”列本月数合计值 " + zbfcyjse +" 不能小于《增值税纳税申报表》附列资料（四）第4列第3，4，5行合计值 " + fb4_col4_hj + " 且不能大于《增值税纳税申报表》附列资料（四）第4列第3，4，5行合计值与CTAIS的分次预缴税额的总和 " + (jc_28 + fb4_col4_hj) + "，请核实!");
		flag=false;
	}
	
	formatValue_SBB();
    
	return flag;
}

//检查一般本月数29栏，不能大于CTAIS带出的出口开具专用缴款书预缴税额
function checkCkyjse(){
	var flag = true;
	unformatValue_SBB();
    var yb_29=parseFloat($("#YBBYS_29").val());
    var jc_29=parseFloat($("#JCSJ_YBBYS_29").val());
	//formatCurrency(document.xform.YBBYS_29);
	//formatCurrency(document.xform.JCSJ_YBBYS_29);
	if(yb_29>jc_29){
		alert("分次预缴税额"+yb_29+"不能大于CTAIS的出口开具专用缴款书预缴税额" + $("#YBBYS_29").val());
		flag=false;
	}
	return flag;
}

/**
 * 地税一税两费计算
 */
function yslfDsCalculate(){
	//应纳税额
	var ynse = parseFloat($("#YBBYS_34").val())+parseFloat($("#JZJTBYS_34").val());
	if((parseFloat($("input[name='YBBYS_28']").val()) > 0 || parseFloat($("input[name='YBBYS_29']").val()) > 0)){
		var ynse = 0.00;
	}
	var jmse = 0.00;
	var sssqz = sssq_z.substring(4,6);
	var sssqq = sssq_q.substring(4,6);
	var ssnd = parseInt(parseFloat(sssqz)-parseFloat(sssqq));
	var bz = 1;
	if(ssnd == 2){
		bz = 3
	}
	var xse = 0;
	var v_1_yb = parseFloat($("#YBBYS_1").val());
	var v_1_jzjt = parseFloat($("#JZJTBYS_1").val());
	var v_5_yb = parseFloat($("#YBBYS_5").val());
	var v_5_jzjt = parseFloat($("#JZJTBYS_5").val());
	var v_7_yb = parseFloat($("#YBBYS_7").val());
	var v_8_yb = parseFloat($("#YBBYS_8").val());
	
	xse = v_1_yb + v_1_jzjt + v_5_yb + v_5_jzjt + v_7_yb + v_8_yb;
	
	var isxgm = "N";
	DsCalculate(xse,ynse,jmse,bz,isxgm);
}

function changeLine28(){
	unformatValue_SBB();
	var gdsythjs_falg = $("input[name='GDSYTHJS_FALG']:checked").val();
	if((parseFloat($("input[name='YBBYS_28']").val()) > 0 || parseFloat($("input[name='YBBYS_29']").val()) > 0) && gdsythjs_falg == "1"){
		alert("增值税申报表（一般纳税人适用）第28行或第29行“一般项目本月数”大于0时，请前往主管税务机关申报附加税！");
		$("#GDSYTHJS_FALG1").prop('checked', false);
		$("#GDSYTHJS_FALG2").prop('checked', true);
		formatValue_SBB();
		return;
	}

	if(parseFloat($("input[name='JZJTBYS_28']").val()) > 0 && gdsythjs_falg == "1"){
		alert("增值税申报表（一般纳税人适用）第28行“即征即退项目本月数”大于0时，请前往主管税务机关申报附加税！");
		$("#GDSYTHJS_FALG1").prop('checked', false);
		$("#GDSYTHJS_FALG2").prop('checked', true);
		formatValue_SBB();
		return;
	}
	formatValue_SBB();
}

function frmzc()
{
	$("input[name='TABLE_ACTION']").val("zc");
	$("#xform").attr("action","./MainServlet");
	$("#xform").submit();
	return true;
}

function frmzcupdate()
{
	$("input[name='TABLE_ACTION']").val("zcupdate");
	$("#xform").attr("action","./MainServlet");
	$("#xform").submit();
	return true;
}