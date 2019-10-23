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
//用于一表集成需求的初始化计算
function initCal(){
	if("initial" == action)
	{
		changevalue1();
		changevalue2();
		changevalue3();
		changevalue23();
		changevalue4();
		changevalue5();
		changevalue9();
		changevalue22();
		changevalue11();
		changevalue12();
		changevalue15();
		changevalue16();
		changevalue17();
		changevalue18();
	}
}


/*************************************************************************************/
/*页面加载完执行的方法，主要用于初始化，导入的数据*/
/**
 * 关于调整增值税一般纳税人网上申报需求的报告2018年5月版:
 * （一）修改附表一表样：
 * 第1栏、第2栏、第4a栏、第4b栏项目名称分别调整为“16%税率的货物及加工修理修配劳务”“16%税率的服务、
 * 不动产和无形资产”“10%税率的货物及加工修理修配劳务”“10%税率的服务、不动产和无形资产”。
 * 
 * 第1栏：税额均为自动计算，计算时按16%。
 * 第2栏：税额均为自动计算，计算时按16%。
 * 第3栏“13%税率”：该栏关闭，全部划“—”。
 * 第4a栏：税额均为自动计算，计算时按10%。
 * 第4b栏：税额均为自动计算，计算时按10%。
 * 20180510 BY YHQ
 */
function init(){
	changevalue1();
	changevalue2();
	changevalue3();
	changevalue4();
	changevalue5();
	//changevalue6();
	//changevalue7();
	changevalue7ForInit();
	changevalue8();
	changevalue9();
	changevalue10();
	changevalue11();
	changevalue12();
	//changevalue13();
	//changevalue14();
	changevalue14ForInit();
	changevalue15();
	changevalue16();
	changevalue17();
	changevalue18();
	changevalue22();
	changevalue19();
	changevalue20();
	changevalue21();
	changevalue23();    //增加的第4a栏“11%税率的货物及加工修理修配劳务”的计算方法    by  wxf   20170705
}
 
/* 
 * 行1的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue1(){

	unformatValue_SBB();

	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("input[name='KJZZSFP_XSE1']").val()) != parseFloat($("input[name='KJZZSFP_XSE1']").attr("originValue"))){
			var sum1 =parseFloat($("input[name='KJZZSFP_XSE1']").val()) * 13 / 100;
			$("input[name='KJZZSFP_XXSE1']").val(sum1.toFixed(2));
			$("input[name='KJZZSFP_XSE1']").attr("originValue",$("input[name='KJZZSFP_XSE1']").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("input[name='KJQTFP_XSE1']").val()) != parseFloat($("input[name='KJQTFP_XSE1']").attr("originValue"))){
			var sum3 =parseFloat($("input[name='KJQTFP_XSE1']").val()) * 13 / 100;
			$("input[name='KJQTFP_XXSE1']").val(sum3.toFixed(2));
			$("input[name='KJQTFP_XSE1']").attr("originValue",$("input[name='KJQTFP_XSE1']").val());
		}
	}
	//第6列赋值
	if (parseFloat($("input[name='WKJFP_XSE1']").val()) != parseFloat($("input[name='WKJFP_XSE1']").attr("originValue"))){
		var sum5 =parseFloat($("input[name='WKJFP_XSE1']").val()) * 13 / 100;
		$("input[name='WKJFP_XXSE1']").val(sum5.toFixed(2));
		$("input[name='WKJFP_XSE1']").attr("originValue",$("input[name='WKJFP_XSE1']").val());
	}
	//第8列赋值
	if (parseFloat($("input[name='NSJCTZ_XSE1']").val()) != parseFloat($("input[name='NSJCTZ_XSE1']").attr("originValue"))){
		var sum7 =parseFloat($("input[name='NSJCTZ_XSE1']").val()) * 13 / 100;
		$("input[name='NSJCTZ_XXSE1']").val(sum7.toFixed(2));
		$("input[name='NSJCTZ_XSE1']").attr("originValue",$("input[name='NSJCTZ_XSE1']").val());
	}

	//计算第1行第9列的值
	var sum9 =parseFloat($("input[name='KJZZSFP_XSE1']").val()) + parseFloat($("input[name='KJQTFP_XSE1']").val())
						+ parseFloat($("input[name='WKJFP_XSE1']").val()) + parseFloat($("input[name='NSJCTZ_XSE1']").val());
	$("input[name='HJ_XSE1']").val(sum9.toFixed(2));
	//计算第1行第10列的值
	var sum10 = parseFloat($("input[name='KJZZSFP_XXSE1']").val()) + parseFloat($("input[name='KJQTFP_XXSE1']").val())
						+ parseFloat($("input[name='WKJFP_XXSE1']").val()) + parseFloat($("input[name='NSJCTZ_XXSE1']").val());
	$("input[name='HJ_XXSE1']").val(sum10.toFixed(2));
	
	//var sum11 = sum9 + sum10;
	//xform.HJ_JSHJ1.value = sum11;
	
	//var sum13 =sum11 - parseFloat(xform.YNSFWKCXMBQSJKCJE1.value) 
	//xform.KCH_XSE1.value = sum13;
	
	//var sum14 = sum13/(100%)*;
	//xform.KCH_XXSE1.value = sum14;
	formatValue_SBB();

}

/* 
 * 行2的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue2(){

	unformatValue_SBB();

	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("#KJZZSFP_XSE2").val()) != parseFloat($("#KJZZSFP_XSE2").attr("originValue"))){
			var sum1 =parseFloat($("#KJZZSFP_XSE2").val()) * 13 / 100;
			$("#KJZZSFP_XXSE2").val(sum1.toFixed(2));
			$("#KJZZSFP_XSE2").attr("originValue",$("#KJZZSFP_XSE2").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("input[name='KJQTFP_XSE2']").val()) != parseFloat($("input[name='KJQTFP_XSE2']").attr("originValue"))){
			var sum3 =parseFloat($("input[name='KJQTFP_XSE2']").val()) * 13 / 100;
			$("input[name='KJQTFP_XXSE2']").val(sum3.toFixed(2));
			$("input[name='KJQTFP_XSE2']").attr("originValue",$("input[name='KJQTFP_XSE2']").val());
		}
	}
	//第6列赋值
	if (parseFloat($("input[name='WKJFP_XSE2']").val()) != parseFloat($("input[name='WKJFP_XSE2']").attr("originValue"))){
		var sum5 =parseFloat($("input[name='WKJFP_XSE2']").val()) * 13 / 100;
		$("input[name='WKJFP_XXSE2']").val(sum5.toFixed(2));
		$("input[name='WKJFP_XSE2']").attr("originValue",$("input[name='WKJFP_XSE2']").val());
	}
	//第8列赋值
	if (parseFloat($("input[name='NSJCTZ_XSE2']").val()) != parseFloat($("input[name='NSJCTZ_XSE2']").attr("originValue"))){
		var sum7 =parseFloat($("input[name='NSJCTZ_XSE2']").val()) * 13 / 100;
		$("input[name='NSJCTZ_XXSE2']").val(sum7.toFixed(2));
		$("input[name='NSJCTZ_XSE2']").attr("originValue",$("input[name='NSJCTZ_XSE2']").val());
	}
	//计算第2行第9列的值
	var sum9 =parseFloat($("#KJZZSFP_XSE2").val()) + parseFloat($("#KJQTFP_XSE2").val())
						+ parseFloat($("#WKJFP_XSE2").val()) + parseFloat($("#NSJCTZ_XSE2").val());
	$("#HJ_XSE2").val(sum9.toFixed(2));
	//计算第2行第10列的值
	var sum10 = parseFloat($("#KJZZSFP_XXSE2").val()) + parseFloat($("#KJQTFP_XXSE2").val())
						+ parseFloat($("#WKJFP_XXSE2").val()) + parseFloat($("#NSJCTZ_XXSE2").val());
	$("#HJ_XXSE2").val(sum10.toFixed(2));
	
	var sum11 = sum9 + sum10;
	
	$("#HJ_JSHJ2").val(sum11.toFixed(2));
	//计算第2行第13列的值
	var sum13 = sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE2").val()); 
	$("#KCH_XSE2").val(sum13.toFixed(2));
	//计算第2行第14列的值
	var sum14 = parseFloat(sum13.toFixed(2)) / 113 * 13;
	
	//《2018年5月版第2次修改》，小曾要求，当第12列为0时，14列等于10列，否则14列按照之前的计算   by   wxf    20180524
	var sum12 = parseFloat($("#YNSFWKCXMBQSJKCJE2").val()); 
	if(sum12 == 0){
		$("#KCH_XXSE2").val(sum10.toFixed(2));
	}else{
		$("#KCH_XXSE2").val(sum14.toFixed(2));
	}
	
	formatValue_SBB();
	
}

/* 
 * 行3的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue3(){

	unformatValue_SBB();

	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("#KJZZSFP_XSE3").val()) != parseFloat($("#KJZZSFP_XSE3").attr("originValue"))){
			var sum1 =parseFloat($("#KJZZSFP_XSE3").val()) * 9 / 100;
			$("#KJZZSFP_XXSE3").val(sum1.toFixed(2));
			$("#KJZZSFP_XSE3").attr("originValue",$("#KJZZSFP_XSE3").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("input[name='KJQTFP_XSE3']").val()) != parseFloat($("input[name='KJQTFP_XSE3']").attr("originValue"))){
			var sum3 =parseFloat($("input[name='KJQTFP_XSE3']").val()) * 9 / 100;
			$("input[name='KJQTFP_XXSE3']").val(sum3.toFixed(2));
			$("input[name='KJQTFP_XSE3']").attr("originValue",$("input[name='KJQTFP_XSE3']").val());
		}
	}
	//第6列赋值
	if (parseFloat($("input[name='WKJFP_XSE3']").val()) != parseFloat($("input[name='WKJFP_XSE3']").attr("originValue"))){
		var sum5 =parseFloat($("input[name='WKJFP_XSE3']").val()) * 9 / 100;
		$("input[name='WKJFP_XXSE3']").val(sum5.toFixed(2));
		$("input[name='WKJFP_XSE3']").attr("originValue",$("input[name='WKJFP_XSE3']").val());
	}
	//第8列赋值
	if (parseFloat($("input[name='NSJCTZ_XSE3']").val()) != parseFloat($("input[name='NSJCTZ_XSE3']").attr("originValue"))){
		var sum7 =parseFloat($("input[name='NSJCTZ_XSE3']").val()) * 9 / 100;
		$("input[name='NSJCTZ_XXSE3']").val(sum7.toFixed(2));
		$("input[name='NSJCTZ_XSE3']").attr("originValue",$("input[name='NSJCTZ_XSE3']").val());
	}
	//计算第3行第9列的值
	var sum9 =parseFloat($("#KJZZSFP_XSE3").val()) + parseFloat($("#KJQTFP_XSE3").val())
						+ parseFloat($("#WKJFP_XSE3").val()) + parseFloat($("#NSJCTZ_XSE3").val());
	$("#HJ_XSE3").val(sum9.toFixed(2));
	//计算第3行第10列的值
	var sum10 = parseFloat($("#KJZZSFP_XXSE3").val()) + parseFloat($("#KJQTFP_XXSE3").val())
						+ parseFloat($("#WKJFP_XXSE3").val()) + parseFloat($("#NSJCTZ_XXSE3").val());
	$("#HJ_XXSE3").val(sum10.toFixed(2));
	
	formatValue_SBB();
	
}

/* 
 * 行4a的内容发生改变时调用的方法（新规则没有说明此行的9列和10列的合计值计算，先按其他行次的计算加进去）  by   wxf     20170705
 * 
 */
function changevalue23(){
	
	unformatValue_SBB();

	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("#KJZZSFP_XSE23").val()) != parseFloat($("#KJZZSFP_XSE23").attr("originValue"))){
			var sum1 =parseFloat($("#KJZZSFP_XSE23").val()) * 9 / 100;
			$("#KJZZSFP_XXSE23").val(sum1.toFixed(2));
			$("#KJZZSFP_XSE23").attr("originValue",$("#KJZZSFP_XSE23").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("input[name='KJQTFP_XSE23']").val()) != parseFloat($("input[name='KJQTFP_XSE23']").attr("originValue"))){
			var sum3 =parseFloat($("input[name='KJQTFP_XSE23']").val()) * 9 / 100;
			$("input[name='KJQTFP_XXSE23']").val(sum3.toFixed(2));
			$("input[name='KJQTFP_XSE23']").attr("originValue",$("input[name='KJQTFP_XSE23']").val());
		}
	}
	//第6列赋值
	if (parseFloat($("input[name='WKJFP_XSE23']").val()) != parseFloat($("input[name='WKJFP_XSE23']").attr("originValue"))){
		var sum5 =parseFloat($("input[name='WKJFP_XSE23']").val()) * 9 / 100;
		$("input[name='WKJFP_XXSE23']").val(sum5.toFixed(2));
		$("input[name='WKJFP_XSE23']").attr("originValue",$("input[name='WKJFP_XSE23']").val());
	}
	//第8列赋值
	if (parseFloat($("input[name='NSJCTZ_XSE23']").val()) != parseFloat($("input[name='NSJCTZ_XSE23']").attr("originValue"))){
		var sum7 =parseFloat($("input[name='NSJCTZ_XSE23']").val()) * 9 / 100;
		$("input[name='NSJCTZ_XXSE23']").val(sum7.toFixed(2));
		$("input[name='NSJCTZ_XSE23']").attr("originValue",$("input[name='NSJCTZ_XSE23']").val());
	}
	//计算第4a行第9列的值
	var sum9 =parseFloat($("#KJZZSFP_XSE23").val()) + parseFloat($("#KJQTFP_XSE23").val())
						+ parseFloat($("#WKJFP_XSE23").val()) + parseFloat($("#NSJCTZ_XSE23").val());
	$("#HJ_XSE23").val(sum9.toFixed(2));
	//计算第4a行第10列的值
	var sum10 = parseFloat($("#KJZZSFP_XXSE23").val()) + parseFloat($("#KJQTFP_XXSE23").val())
						+ parseFloat($("#WKJFP_XXSE23").val()) + parseFloat($("#NSJCTZ_XXSE23").val());
	$("#HJ_XXSE23").val(sum10.toFixed(2));
	
	formatValue_SBB();
}

/* 
 * 行4b的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue4(){

	unformatValue_SBB();

	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("#KJZZSFP_XSE4").val()) != parseFloat($("#KJZZSFP_XSE4").attr("originValue"))){
			var sum1 =parseFloat($("#KJZZSFP_XSE4").val()) * 9 / 100;
			$("#KJZZSFP_XXSE4").val(sum1.toFixed(2));
			$("#KJZZSFP_XSE4").attr("originValue",$("#KJZZSFP_XSE4").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("input[name='KJQTFP_XSE4']").val()) != parseFloat($("input[name='KJQTFP_XSE4']").attr("originValue"))){
			var sum3 =parseFloat($("input[name='KJQTFP_XSE4']").val()) * 9 / 100;
			$("input[name='KJQTFP_XXSE4']").val(sum3.toFixed(2));
			$("input[name='KJQTFP_XSE4']").attr("originValue",$("input[name='KJQTFP_XSE4']").val());
		}
	}
	//第6列赋值
	if (parseFloat($("input[name='WKJFP_XSE4']").val()) != parseFloat($("input[name='WKJFP_XSE4']").attr("originValue"))){
		var sum5 =parseFloat($("input[name='WKJFP_XSE4']").val()) * 9 / 100;
		$("input[name='WKJFP_XXSE4']").val(sum5.toFixed(2));
		$("input[name='WKJFP_XSE4']").attr("originValue",$("input[name='WKJFP_XSE4']").val());
	}
	//第8列赋值
	if (parseFloat($("input[name='NSJCTZ_XSE4']").val()) != parseFloat($("input[name='NSJCTZ_XSE4']").attr("originValue"))){
		var sum7 =parseFloat($("input[name='NSJCTZ_XSE4']").val()) * 9 / 100;
		$("input[name='NSJCTZ_XXSE4']").val(sum7.toFixed(2));
		$("input[name='NSJCTZ_XSE4']").attr("originValue",$("input[name='NSJCTZ_XSE4']").val());
	}
	//计算第4b行第9列的值
	var sum9 =parseFloat($("#KJZZSFP_XSE4").val()) + parseFloat($("#KJQTFP_XSE4").val())
						+ parseFloat($("#WKJFP_XSE4").val()) + parseFloat($("#NSJCTZ_XSE4").val());
	$("#HJ_XSE4").val(sum9.toFixed(2));
	//计算第4b行第10列的值
	var sum10 = parseFloat($("#KJZZSFP_XXSE4").val()) + parseFloat($("#KJQTFP_XXSE4").val())
						+ parseFloat($("#WKJFP_XXSE4").val()) + parseFloat($("#NSJCTZ_XXSE4").val());
	$("#HJ_XXSE4").val(sum10.toFixed(2));

	var sum11 = sum9 + sum10;
	$("#HJ_JSHJ4").val(sum11.toFixed(2));
	
	//计算第4b行第13列的值
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE4").val());
	$("#KCH_XSE4").val(sum13.toFixed(2));
	//计算第4b行第14列的值
	var sum14 = parseFloat(sum13.toFixed(2)) / 109 * 9;
	
	//《2018年5月版第2次修改》，小曾要求，当第12列为0时，14列等于10列，否则14列按照之前的计算   by   wxf    20180524
	var sum12 = parseFloat($("#YNSFWKCXMBQSJKCJE4").val()); 
	if(sum12 == 0){
		$("#KCH_XXSE4").val(sum10.toFixed(2));
	}else{
		$("#KCH_XXSE4").val(sum14.toFixed(2));
	}
	
	formatValue_SBB();
}

/* 
 * 行5的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue5(){
	
	unformatValue_SBB();

	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("#KJZZSFP_XSE5").val()) != parseFloat($("#KJZZSFP_XSE5").attr("originValue"))){
			var sum1 =parseFloat($("#KJZZSFP_XSE5").val()) * 6 / 100;
			$("#KJZZSFP_XXSE5").val(sum1.toFixed(2));
			$("#KJZZSFP_XSE5").attr("originValue",$("#KJZZSFP_XSE5").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("input[name='KJQTFP_XSE5']").val()) != parseFloat($("input[name='KJQTFP_XSE5']").attr("originValue"))){
			var sum3 =parseFloat($("input[name='KJQTFP_XSE5']").val()) * 6 / 100;
			$("input[name='KJQTFP_XXSE5']").val(sum3.toFixed(2));
			$("input[name='KJQTFP_XSE5']").attr("originValue",$("input[name='KJQTFP_XSE5']").val());
		}
	}
	//第6列赋值
	if (parseFloat($("input[name='WKJFP_XSE5']").val()) != parseFloat($("input[name='WKJFP_XSE5']").attr("originValue"))){
		var sum5 =parseFloat($("input[name='WKJFP_XSE5']").val()) * 6 / 100;
		$("input[name='WKJFP_XXSE5']").val(sum5.toFixed(2));
		$("input[name='WKJFP_XSE5']").attr("originValue",$("input[name='WKJFP_XSE5']").val());
	}
	//第8列赋值
	if (parseFloat($("input[name='NSJCTZ_XSE5']").val()) != parseFloat($("input[name='NSJCTZ_XSE5']").attr("originValue"))){
		var sum7 =parseFloat($("input[name='NSJCTZ_XSE5']").val()) * 6 / 100;
		$("input[name='NSJCTZ_XXSE5']").val(sum7.toFixed(2));
		$("input[name='NSJCTZ_XSE5']").attr("originValue",$("input[name='NSJCTZ_XSE5']").val());
	}
	//计算第5行第9列的值
	var sum9 =parseFloat($("#KJZZSFP_XSE5").val()) + parseFloat($("#KJQTFP_XSE5").val())
						+ parseFloat($("#WKJFP_XSE5").val()) + parseFloat($("#NSJCTZ_XSE5").val());
	$("#HJ_XSE5").val(sum9.toFixed(2));
	//计算第5行第10列的值
	var sum10 = parseFloat($("#KJZZSFP_XXSE5").val()) + parseFloat($("#KJQTFP_XXSE5").val())
						+ parseFloat($("#WKJFP_XXSE5").val()) + parseFloat($("#NSJCTZ_XXSE5").val());
	$("#HJ_XXSE5").val(sum10.toFixed(2));

	var  sum11 = sum9 + sum10;
	$("#HJ_JSHJ5").val(sum11.toFixed(2));
	
	//计算第5行第13列的值
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE5").val());
	$("#KCH_XSE5").val(sum13.toFixed(2));
	//计算第5行第14列的值
	var sum14 = parseFloat(sum13.toFixed(2)) / 106 * 6;
	
	//《2018年5月版第2次修改》，小曾要求，当第12列为0时，14列等于10列，否则14列按照之前的计算   by   wxf    20180524
	var sum12 = parseFloat($("#YNSFWKCXMBQSJKCJE5").val()); 
	if(sum12 == 0){
		$("#KCH_XXSE5").val(sum10.toFixed(2));
	}else{
		$("#KCH_XXSE5").val(sum14.toFixed(2));
	}
	
	formatValue_SBB();
}
/* 行6的内容发生改变时调用的方法*/
function changevalue6(){

	/*for(var i=0;i<xform.all.item("row6").length;i++)
	{
		unformatCurrency(xform.all.item("row6")[i]);
		checkinputdata(xform.all.item("row6")[i]);
	}*/
	
	/*var sum1 =parseFloat(xform.HJ_XSE1.value) + parseFloat(xform.HJ_XSE3.value);
	var sum9 = parseFloat(xform.HJ_XSE6.value);
	if (sum9 > sum1){
		xform.HJ_XSE6.value = parseFloat("0");
		alert("第6行第9列的值要小于第9列1行、3行之和的值！");
	}
		
	var sum2 = parseFloat(xform.HJ_XXSE1.value) + parseFloat(xform.HJ_XXSE3.value);
	var sum10 = parseFloat(xform.HJ_XXSE6.value);
	if (sum10 > sum2){
		xform.HJ_XXSE6.value = parseFloat("0");
		alert("第6行第10列的值要小于第10列1行、3行之和的值！");
	}*/
	
	/*for(var i=0;i<xform.all.item("row6").length;i++)
	{
		formatAll(xform.all.item("row6")[i]);
	}*/
}
/* 行7的内容发生改变时调用的方法*/
function changevalue7(){

	unformatValue_SBB();
	
	/*var sum1 =parseFloat(xform.HJ_XSE2.value) + parseFloat(xform.HJ_XSE4.value) + parseFloat(xform.HJ_XSE5.value);
	var sum9 = parseFloat(xform.HJ_XSE7.value);
	if (sum9 > sum1){
		xform.HJ_XSE7.value = parseFloat("0");
		alert("第7行第9列的值要小于第9列2行、4行、5行之和的值！");
	}
		
	var sum2 = parseFloat(xform.HJ_XXSE2.value) + parseFloat(xform.HJ_XXSE4.value) + parseFloat(xform.HJ_XXSE5.value);
	var sum10 = parseFloat(xform.HJ_XXSE7.value);
	if (sum10 > sum2){
		xform.HJ_XXSE7.value = parseFloat("0");
		alert("第7行第10列的值要小于第10列2行、4行、5行之和的值！");
	}*/
	//计算第7行第11列的值
	var sum11 = parseFloat($("#HJ_XSE7").val()) +  parseFloat($("#HJ_XXSE7").val());
	$("#HJ_JSHJ7").val(sum11.toFixed(2));
	//计算第7行第13列的值
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE7").val());
	$("#KCH_XSE7").val(sum13.toFixed(2));
	
	/*var sum15 = parseFloat(xform.KCH_XXSE2.value)+parseFloat(xform.KCH_XXSE4.value)+parseFloat(xform.KCH_XXSE5.value);
	var sum14 = parseFloat(xform.KCH_XXSE7.value);
	if (sum14 > sum15){
		xform.KCH_XXSE7.value = parseFloat("0");
		alert("第7行第14列的值要小于第14列2行、4行、5行之和的值！");
	}*/
	var m13 = Math.abs(parseFloat($("#KCH_XSE7").val()));
	var m14 = Math.abs(parseFloat($("#KCH_XXSE7").val()));
	if (m13 < m14){
		alert("第7栏中的【扣除后】的【销项(应纳)税额】的值 不能大于【扣除后】的【含税(免税)销售额】的值");
		$("#KCH_XXSE7").val("0");
	}
	formatValue_SBB();
}
/* 页面初始化时，计算第七行数据*/
function changevalue7ForInit(){

	unformatValue_SBB();
	
	var sum11 = parseFloat($("#HJ_XSE7").val()) +  parseFloat($("#HJ_XXSE7").val());
	$("#HJ_JSHJ7").val(sum11.toFixed(2));
	
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE7").val());
	$("#KCH_XSE7").val(sum13.toFixed(2));

	var m13 = Math.abs(parseFloat($("#KCH_XSE7").val()));
	var m14 = Math.abs(parseFloat($("#KCH_XXSE7").val()));
	if (m13 < m14){
		alert("第7栏中的【扣除后】的【销项(应纳)税额】的值 不能大于【扣除后】的【含税(免税)销售额】的值");
		$("#KCH_XXSE7").val("0");
	}
	
	formatValue_SBB();
}

/* 
 * 行8的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue8(){

	unformatValue_SBB();
	//第2列赋值
	if (parseFloat($("#KJZZSFP_XSE8").val()) != parseFloat($("#KJZZSFP_XSE8").attr("originValue"))){
		var sum1 =parseFloat($("#KJZZSFP_XSE8").val()) * 6 / 100;
		$("#KJZZSFP_XXSE8").val(sum1.toFixed(2));
		$("#KJZZSFP_XSE8").attr("originValue",$("#KJZZSFP_XSE8").val());
	}
	//第4列赋值
	if (parseFloat($("#KJQTFP_XSE8").val()) != parseFloat($("#KJQTFP_XSE8").attr("originValue"))){
		var sum3 =parseFloat($("#KJQTFP_XSE8").val()) * 6 / 100;
		$("#KJQTFP_XXSE8").val(sum3.toFixed(2));
		$("#KJQTFP_XSE8").attr("originValue",$("#KJQTFP_XSE8").val());
	}
	//第6列赋值
	if (parseFloat($("#WKJFP_XSE8").val()) != parseFloat($("#WKJFP_XSE8").attr("originValue"))){
		var sum5 =parseFloat($("#WKJFP_XSE8").val()) * 6 / 100;
		$("#WKJFP_XXSE8").val(sum5.toFixed(2));
		$("#WKJFP_XSE8").attr("originValue",$("#WKJFP_XSE8").val());
	}
	
	//计算第8行第9列的值
	var sum9 =parseFloat($("#KJZZSFP_XSE8").val()) + parseFloat($("#KJQTFP_XSE8").val())
						+ parseFloat($("#WKJFP_XSE8").val()) + parseFloat($("#NSJCTZ_XSE8").val());
	$("#HJ_XSE8").val(sum9.toFixed(2));
	//计算第8行第10列的值
	var sum10 = parseFloat($("#KJZZSFP_XXSE8").val()) + parseFloat($("#KJQTFP_XXSE8").val())
						+ parseFloat($("#WKJFP_XXSE8").val()) + parseFloat($("#NSJCTZ_XXSE8").val());
	$("#HJ_XXSE8").val(sum10.toFixed(2));
	
	formatValue_SBB();
}

/* 
 * 行9的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue9(){

	unformatValue_SBB();

	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("#KJZZSFP_XSE9").val()) != parseFloat($("#KJZZSFP_XSE9").attr("originValue"))){
			var sum1 =parseFloat($("#KJZZSFP_XSE9").val()) * 5 / 100;
			$("#KJZZSFP_XXSE9").val(sum1.toFixed(2));
			$("#KJZZSFP_XSE9").attr("originValue",$("#KJZZSFP_XSE9").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("#KJQTFP_XSE9").val()) != parseFloat($("#KJQTFP_XSE9").attr("originValue"))){
			var sum3 =parseFloat($("#KJQTFP_XSE9").val()) * 5 / 100;
			$("#KJQTFP_XXSE9").val(sum3.toFixed(2));
			$("#KJQTFP_XSE9").attr("originValue",$("#KJQTFP_XSE9").val());
		}
	}
	//第6列赋值
	if (parseFloat($("#WKJFP_XSE9").val()) != parseFloat($("#WKJFP_XSE9").attr("originValue"))){
		var sum5 =parseFloat($("#WKJFP_XSE9").val()) * 5 / 100;
		$("#WKJFP_XXSE9").val(sum5.toFixed(2));
		$("#WKJFP_XSE9").attr("originValue",$("#WKJFP_XSE9").val());
	}
	
	//计算第9行第9列的值
	var sum9 =parseFloat($("#KJZZSFP_XSE9").val()) + parseFloat($("#KJQTFP_XSE9").val())
						+ parseFloat($("#WKJFP_XSE9").val()) + parseFloat($("#NSJCTZ_XSE9").val());
	$("#HJ_XSE9").val(sum9.toFixed(2));
	//计算第9行第10列的值
	var sum10 = parseFloat($("#KJZZSFP_XXSE9").val()) + parseFloat($("#KJQTFP_XXSE9").val())
						+ parseFloat($("#WKJFP_XXSE9").val()) + parseFloat($("#NSJCTZ_XXSE9").val());
	$("#HJ_XXSE9").val(sum10.toFixed(2));
	
	formatValue_SBB();
}

/* 
 * 行10的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue10(){

	unformatValue_SBB();
	//第2列赋值
	if (parseFloat($("#KJZZSFP_XSE10").val()) != parseFloat($("#KJZZSFP_XSE10").attr("originValue"))){
		var sum1 =parseFloat($("#KJZZSFP_XSE10").val()) * 4 / 100;
		$("#KJZZSFP_XXSE10").val(sum1.toFixed(2));
		$("#KJZZSFP_XSE10").attr("originValue",$("#KJZZSFP_XSE10").val());
	}
	//第4列赋值
	if (parseFloat($("#KJQTFP_XSE10").val()) != parseFloat($("#KJQTFP_XSE10").attr("originValue"))){
		var sum3 =parseFloat($("#KJQTFP_XSE10").val()) * 4 / 100;
		$("#KJQTFP_XXSE10").val(sum3.toFixed(2));
		$("#KJQTFP_XSE10").attr("originValue",$("#KJQTFP_XSE10").val());
	}
	//第6列赋值
	if (parseFloat($("#WKJFP_XSE10").val()) != parseFloat($("#WKJFP_XSE10").attr("originValue"))){
		var sum5 =parseFloat($("#WKJFP_XSE10").val()) * 4 / 100;
		$("#WKJFP_XXSE10").val(sum5.toFixed(2));
		$("#WKJFP_XSE10").attr("originValue",$("#WKJFP_XSE10").val());
	}
	
	//计算第10行第9列的值
	var sum9 =parseFloat($("#KJZZSFP_XSE10").val()) + parseFloat($("#KJQTFP_XSE10").val())
						+ parseFloat($("#WKJFP_XSE10").val()) + parseFloat($("#NSJCTZ_XSE10").val());
	$("#HJ_XSE10").val(sum9.toFixed(2));
	//计算第10行第10列的值
	var sum10 = parseFloat($("#KJZZSFP_XXSE10").val()) + parseFloat($("#KJQTFP_XXSE10").val())
						+ parseFloat($("#WKJFP_XXSE10").val()) + parseFloat($("#NSJCTZ_XXSE10").val());
	$("#HJ_XXSE10").val(sum10.toFixed(2));
		
	formatValue_SBB();
}

/* 
 * 行11的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue11(){

	unformatValue_SBB();
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("#KJZZSFP_XSE11").val()) != parseFloat($("#KJZZSFP_XSE11").attr("originValue"))){
			var sum1 =parseFloat($("#KJZZSFP_XSE11").val()) * 3 / 100;
			$("#KJZZSFP_XXSE11").val(sum1.toFixed(2));
			$("#KJZZSFP_XSE11").attr("originValue",$("#KJZZSFP_XSE11").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("#KJQTFP_XSE11").val()) != parseFloat($("#KJQTFP_XSE11").attr("originValue"))){
			var sum3 =parseFloat($("#KJQTFP_XSE11").val()) * 3 / 100;
			$("#KJQTFP_XXSE11").val(sum3.toFixed(2));
			$("#KJQTFP_XSE11").attr("originValue",$("#KJQTFP_XSE11").val());
		}
	}
	//第6列赋值
	if (parseFloat($("#WKJFP_XSE11").val()) != parseFloat($("#WKJFP_XSE11").attr("originValue"))){
		var sum5 =parseFloat($("#WKJFP_XSE11").val()) * 3 / 100;
		$("#WKJFP_XXSE11").val(sum5.toFixed(2));
		$("#WKJFP_XSE11").attr("originValue",$("#WKJFP_XSE11").val());
	}
	var sum9 =parseFloat($("#KJZZSFP_XSE11").val()) + parseFloat($("#KJQTFP_XSE11").val())
						+ parseFloat($("#WKJFP_XSE11").val()) + parseFloat($("#NSJCTZ_XSE11").val());
	$("#HJ_XSE11").val(sum9.toFixed(2));
	
	var sum11 = parseFloat($("#KJZZSFP_XXSE11").val()) + parseFloat($("#KJQTFP_XXSE11").val())
						+ parseFloat($("#WKJFP_XXSE11").val()) + parseFloat($("#NSJCTZ_XXSE11").val());
	$("#HJ_XXSE11").val(sum11.toFixed(2));
	
	formatValue_SBB();
}

/* 
 * 行12的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue12(){

	unformatValue_SBB();
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("#KJZZSFP_XSE12").val()) != parseFloat($("#KJZZSFP_XSE12").attr("originValue"))){
			var sum1 =parseFloat($("#KJZZSFP_XSE12").val()) * 3 / 100;
			$("#KJZZSFP_XXSE12").val(sum1.toFixed(2));
			$("#KJZZSFP_XSE12").attr("originValue",$("#KJZZSFP_XSE12").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("#KJQTFP_XSE12").val()) != parseFloat($("#KJQTFP_XSE12").attr("originValue"))){
			var sum3 =parseFloat($("#KJQTFP_XSE12").val()) * 3 / 100;
			$("#KJQTFP_XXSE12").val(sum3.toFixed(2));
			$("#KJQTFP_XSE12").attr("originValue",$("#KJQTFP_XSE12").val());
		}
	}
	//第6列赋值
	if (parseFloat($("#WKJFP_XSE12").val()) != parseFloat($("#WKJFP_XSE12").attr("originValue"))){
		var sum5 =parseFloat($("#WKJFP_XSE12").val()) * 3 / 100;
		$("#WKJFP_XXSE12").val(sum5.toFixed(2));
		$("#WKJFP_XSE12").attr("originValue",$("#WKJFP_XSE12").val());
	}
	var sum9 =parseFloat($("#KJZZSFP_XSE12").val()) + parseFloat($("#KJQTFP_XSE12").val())
						+ parseFloat($("#WKJFP_XSE12").val()) + parseFloat($("#NSJCTZ_XSE12").val());
	$("#HJ_XSE12").val(sum9.toFixed(2));
	
	var sum10 = parseFloat($("#KJZZSFP_XXSE12").val()) + parseFloat($("#KJQTFP_XXSE12").val())
						+ parseFloat($("#WKJFP_XXSE12").val()) + parseFloat($("#NSJCTZ_XXSE12").val());
	$("#HJ_XXSE12").val(sum10.toFixed(2));

	var sum11 = sum9 + sum10;
	$("#HJ_JSHJ12").val(sum11.toFixed(2));
	
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE12").val());
	$("#KCH_XSE12").val(sum13.toFixed(2));
	
	var sum14 = parseFloat(sum13.toFixed(2)) / 103 * 3;
	
	//《2018年5月版第2次修改》，小曾要求，当第12列为0时，14列等于10列，否则14列按照之前的计算   by   wxf    20180524
	var sum12 = parseFloat($("#YNSFWKCXMBQSJKCJE12").val()); 
	if(sum12 == 0){
		$("#KCH_XXSE12").val(sum10.toFixed(2));
	}else{
		$("#KCH_XXSE12").val(sum14.toFixed(2));
	}
	
	formatValue_SBB();
}
/* 行14的内容发生改变时调用的方法*/
function changevalue13(){

	unformatValue_SBB();
	
	/*var sum1 =parseFloat(xform.HJ_XSE8.value) + parseFloat(xform.HJ_XSE9.value) + parseFloat(xform.HJ_XSE10.value);
	var sum9 = parseFloat(xform.HJ_XSE13.value);
	if (sum9 > sum1){
		xform.HJ_XSE13.value = parseFloat("0");
		alert("第13行第9列的值要小于第9列8行、9行、10行之和的值！");
	}
		
	var sum2 = parseFloat(xform.HJ_XXSE8.value) + parseFloat(xform.HJ_XXSE9.value) + parseFloat(xform.HJ_XXSE10.value);
	var sum10 = parseFloat(xform.HJ_XXSE13.value);
	if (sum10 > sum2){
		xform.HJ_XXSE13.value = parseFloat("0");
		alert("第13行第10列的值要小于第10列8行、9行、10行之和的值！");
	}*/
	
	formatValue_SBB();
}
/* 行15的内容发生改变时调用的方法*/
function changevalue14(){
	
	unformatValue_SBB();
	
	/*var sum1 =parseFloat(xform.HJ_XSE12.value);
	var sum9 = parseFloat(xform.HJ_XSE14.value);
	if (sum9 > sum1){
		xform.HJ_XSE14.value = parseFloat("0");
		alert("第14行第9列的值要小于第9列12行的值！");
	}
		
	var sum2 = parseFloat(xform.HJ_XXSE12.value) ;
	var sum10 = parseFloat(xform.HJ_XXSE14.value);
	if (sum10 > sum2){
		xform.HJ_XXSE14.value = parseFloat("0");
		alert("第14行第10列的值要小于第10列12行的值！");
	}*/
	
	var sum11 = parseFloat($("#HJ_XSE14").val()) + parseFloat($("#HJ_XXSE14").val());
	$("#HJ_JSHJ14").val(sum11.toFixed(2));
	
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE14").val());
	$("#KCH_XSE14").val(sum13.toFixed(2));
	
	/*var sum12 = parseFloat(xform.KCH_XXSE12.value)
	var sum14 = parseFloat(xform.KCH_XXSE14.value);	
	if (sum14 > sum12){
		xform.KCH_XXSE14.value = parseFloat("0");
		alert("第14行第14列的值要小于第14列12行的值！");
	}*/

	var m13 = Math.abs(parseFloat($("#KCH_XSE14").val()));
	var m14 = Math.abs(parseFloat($("#KCH_XXSE14").val()));
	if (m13 < m14){
		alert("第15栏中的【扣除后】的【销项(应纳)税额】的值 不能大于【扣除后】的【含税(免税)销售额】的值");
		$("#KCH_XXSE14").val("0");
	}
	
	formatValue_SBB();
}
/* 页面初始化时，计算第15行数据*/
function changevalue14ForInit(){
	
	
	unformatValue_SBB();
	
	
	var sum11 = parseFloat($("#HJ_XSE14").val()) + parseFloat($("#HJ_XXSE14").val());
	$("#HJ_JSHJ14").val(sum11);
	
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE14").val());
	$("#KCH_XSE14").val(sum13);

	var m13 = Math.abs(parseFloat($("#KCH_XSE14").val()));
	var m14 = Math.abs(parseFloat($("#KCH_XXSE14").val()));
	if (m13 < m14){
		alert("第15栏中的【扣除后】的【销项(应纳)税额】的值 不能大于【扣除后】的【含税(免税)销售额】的值");
		$("#KCH_XXSE14").val("0");
	}
	
	formatValue_SBB();
	
}
/* 行15的内容发生改变时调用的方法*/
function changevalue15(){

	unformatValue_SBB();
	
	var sum9 =parseFloat($("#KJZZSFP_XSE15").val()) + parseFloat($("#KJQTFP_XSE15").val())
						+ parseFloat($("#WKJFP_XSE15").val()) + parseFloat($("#NSJCTZ_XSE15").val());
	$("#HJ_XSE15").val(sum9.toFixed(2));
	
	formatValue_SBB();
}
/* 行16的内容发生改变时调用的方法*/
function changevalue16(){

	unformatValue_SBB();
	
	var sum9 =parseFloat($("#KJZZSFP_XSE16").val()) + parseFloat($("#KJQTFP_XSE16").val())
						+ parseFloat($("#WKJFP_XSE16").val()) + parseFloat($("#NSJCTZ_XSE16").val());
	$("#HJ_XSE16").val(sum9.toFixed(2));

	var sum11 = sum9 ;
	$("#HJ_JSHJ16").val(sum11.toFixed(2));
	
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE16").val());
	$("#KCH_XSE16").val(sum13.toFixed(2));
	
	formatValue_SBB();
}
/* 行17的内容发生改变时调用的方法*/
function changevalue17(){

	unformatValue_SBB();
	
	var sum9 =parseFloat($("#KJZZSFP_XSE17").val()) + parseFloat($("#KJQTFP_XSE17").val())
						+ parseFloat($("#WKJFP_XSE17").val()) + parseFloat($("#NSJCTZ_XSE17").val());
	$("#HJ_XSE17").val(sum9.toFixed(2));
	
	formatValue_SBB();
}
/* 行18的内容发生改变时调用的方法*/
function changevalue18(){

	unformatValue_SBB();
	
	var sum9 =parseFloat($("#KJZZSFP_XSE18").val()) + parseFloat($("#KJQTFP_XSE18").val())
						+ parseFloat($("#WKJFP_XSE18").val()) + parseFloat($("#NSJCTZ_XSE18").val());
	$("#HJ_XSE18").val(sum9.toFixed(2));

	var sum11 = sum9 ;
	$("#HJ_JSHJ18").val(sum11.toFixed(2));
	
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE18").val());
	$("#KCH_XSE18").val(sum13.toFixed(2));
	
	formatValue_SBB();
	
}

/* 
 * 行9b的内容发生改变时调用的方法
 * 关于小数的计算，都采用先乘100再除以100的方式，避免出现xxx.xxx99999的情况 modify by zhiweiHuang 20170106
 */
function changevalue22(){
	
	unformatValue_SBB();
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第2列赋值
	if(isZpComReadOnly != "true"){
		if (parseFloat($("#KJZZSFP_XSE22").val()) != parseFloat($("#KJZZSFP_XSE22").attr("originValue"))){
			var sum1 =parseFloat($("#KJZZSFP_XSE22").val()) * 5 / 100;
			$("#KJZZSFP_XXSE22").val(sum1.toFixed(2));
			$("#KJZZSFP_XSE22").attr("originValue",$("#KJZZSFP_XSE22").val());
		}
	}
	
	/**
	 * 一表集成需求，如果是自动带值就不在重新计算
	 * 
	 * modify by zhiweiHuang 20170929
	 */
	//第4列赋值
	if(isPtComReadOnly != "true"){
		if (parseFloat($("#KJQTFP_XSE22").val()) != parseFloat($("#KJQTFP_XSE22").attr("originValue"))){
			var sum3 =parseFloat($("#KJQTFP_XSE22").val()) * 5 / 100;
			$("#KJQTFP_XXSE22").val(sum3.toFixed(2));
			$("#KJQTFP_XSE22").attr("originValue",$("#KJQTFP_XSE22").val());
		}
	}
	//第6列赋值
	if (parseFloat($("#WKJFP_XSE22").val()) != parseFloat($("#WKJFP_XSE22").attr("originValue"))){
		var sum5 =parseFloat($("#WKJFP_XSE22").val()) * 5 / 100;
		$("#WKJFP_XXSE22").val(sum5.toFixed(2));
		$("#WKJFP_XSE22").attr("originValue",$("#WKJFP_XSE22").val());
	}
	//计算第22行第22列的值
	var sum22 =parseFloat($("#KJZZSFP_XSE22").val()) + parseFloat($("#KJQTFP_XSE22").val())
						+ parseFloat($("#WKJFP_XSE22").val()) + parseFloat($("#NSJCTZ_XSE22").val());
	$("#HJ_XSE22").val(sum22.toFixed(2));
	//计算第22行第10列的值
	var sum10 = parseFloat($("#KJZZSFP_XXSE22").val()) + parseFloat($("#KJQTFP_XXSE22").val())
						+ parseFloat($("#WKJFP_XXSE22").val()) + parseFloat($("#NSJCTZ_XXSE22").val());
	$("#HJ_XXSE22").val(sum10.toFixed(2));
	
	
	var sum11 = sum22 + sum10;
	
	$("#HJ_JSHJ22").val(sum11.toFixed(2));
	//计算第22行第13列的值
	var sum13 =sum11 - parseFloat($("#YNSFWKCXMBQSJKCJE22").val()); 
	$("#KCH_XSE22").val(sum13.toFixed(2));
	//计算第22行第14列的值
	var sum14 = parseFloat(sum13.toFixed(2)) / 105 * 5;
	
	//《2018年5月版第2次修改》，小曾要求，当第12列为0时，14列等于10列，否则14列按照之前的计算   by   wxf    20180524
	var sum12 = parseFloat($("#YNSFWKCXMBQSJKCJE22").val()); 
	if(sum12 == 0){
		$("#KCH_XXSE22").val(sum10.toFixed(2));
	}else{
		$("#KCH_XXSE22").val(sum14.toFixed(2));
	}
	
	formatValue_SBB();	
}

/* 行13A的内容发生改变时调用的方法*/
function changevalue19(){
	formatValue_SBB();
}

/* 行13B的内容发生改变时调用的方法*/
function changevalue20(){
	formatValue_SBB();	
}

/* 行13C的内容发生改变时调用的方法*/
function changevalue21(){
	formatValue_SBB();		
}
//fb1没有用到该方法
function changevalue_SYSL()
{
//	unformatValue_SBB();
//	
//	for(var i=1;i<4;i++)
//	{
//		var str="$('#XJFS_"+i+"'.val(parseInt($('#YSHW17FS_"+i+"').value)+parseInt(xform.YSHW13FS_"+i+".value)+parseInt(xform.YSLWFS_"+i+".value)";
//		eval(str);
//	}
//	var str3="xform.YSHW17XSE_7.value=";
//	var str4="xform.YSHW13XSE_7.value=";
//	var str5="xform.YSLWXSE_7.value=";
//	var str6="xform.YSHW17SE_7.value=";
//	var str7="xform.YSHW13SE_7.value=";
//	var str8="xform.YSLWSE_7.value=";
//	var str9="xform.XJXSE_7.value=";
//	var str10="xform.XJSE_7.value=";
//	var str3_1="xform.YSHW17XSE_5.value=";
//	var str4_1="xform.YSHW13XSE_5.value=";
//	var str5_1="xform.YSLWXSE_5.value=";
//	var str6_1="xform.YSHW17SE_5.value=";
//	var str7_1="xform.YSHW13SE_5.value=";
//	var str8_1="xform.YSLWSE_5.value=";
//	var str9_1="xform.XJXSE_5.value=";
//	var str10_1="xform.XJSE_5.value=";
//	for(var i=1;i<7;i++)
//	{
//		var str1="xform.XJXSE_"+i+".value=parseFloat(xform.YSHW17XSE_"+i+".value)+parseFloat(xform.YSHW13XSE_"+i+".value)+parseFloat(xform.YSLWXSE_"+i+".value)";
//		var str2="xform.XJSE_"+i+".value=parseFloat(xform.YSHW17SE_"+i+".value)+parseFloat(xform.YSHW13SE_"+i+".value)+parseFloat(xform.YSLWSE_"+i+".value)";
//		if(i<5)
//		{
//			if(i<4)
//			{
//				str3_1=str3_1+"parseFloat(xform.YSHW17XSE_"+i+".value)+";
//				str4_1=str4_1+"parseFloat(xform.YSHW13XSE_"+i+".value)+";
//				str5_1=str5_1+"parseFloat(xform.YSLWXSE_"+i+".value)+";
//				str6_1=str6_1+"parseFloat(xform.YSHW17SE_"+i+".value)+";
//				str7_1=str7_1+"parseFloat(xform.YSHW13SE_"+i+".value)+";
//				str8_1=str8_1+"parseFloat(xform.YSLWSE_"+i+".value)+";
//				str9_1=str9_1+"parseFloat(xform.XJXSE_"+i+".value)+";
//				str10_1=str10_1+"parseFloat(xform.XJSE_"+i+".value)+";
//			}
//			else
//			{
//				str3_1=str3_1+"parseFloat(xform.YSHW17XSE_"+i+".value)";
//				str4_1=str4_1+"parseFloat(xform.YSHW13XSE_"+i+".value)";
//				str5_1=str5_1+"parseFloat(xform.YSLWXSE_"+i+".value)";
//				str6_1=str6_1+"parseFloat(xform.YSHW17SE_"+i+".value)";
//				str7_1=str7_1+"parseFloat(xform.YSHW13SE_"+i+".value)";
//				str8_1=str8_1+"parseFloat(xform.YSLWSE_"+i+".value)";
//				str9_1=str9_1+"parseFloat(xform.XJXSE_"+i+".value)";
//				str10_1=str10_1+"parseFloat(xform.XJSE_"+i+".value)";
//			}
//		}
//		else
//		{
//			if(i==6)
//			{
//				str3=str3+"parseFloat(xform.YSHW17XSE_"+i+".value)";
//				str4=str4+"parseFloat(xform.YSHW13XSE_"+i+".value)";
//				str5=str5+"parseFloat(xform.YSLWXSE_"+i+".value)";
//				str6=str6+"parseFloat(xform.YSHW17SE_"+i+".value)";
//				str7=str7+"parseFloat(xform.YSHW13SE_"+i+".value)";
//				str8=str8+"parseFloat(xform.YSLWSE_"+i+".value)";
//				str9=str9+"parseFloat(xform.XJXSE_"+i+".value)";
//				str10=str10+"parseFloat(xform.XJSE_"+i+".value)";
//			}
//			else
//			{
//				str3=str3+"parseFloat(xform.YSHW17XSE_"+i+".value)+";
//				str4=str4+"parseFloat(xform.YSHW13XSE_"+i+".value)+";
//				str5=str5+"parseFloat(xform.YSLWXSE_"+i+".value)+";
//				str6=str6+"parseFloat(xform.YSHW17SE_"+i+".value)+";
//				str7=str7+"parseFloat(xform.YSHW13SE_"+i+".value)+";
//				str8=str8+"parseFloat(xform.YSLWSE_"+i+".value)+";
//				str9=str9+"parseFloat(xform.XJXSE_"+i+".value)+";
//				str10=str10+"parseFloat(xform.XJSE_"+i+".value)+";
//			}
//		}
//		eval(str1);
//		eval(str2);
//	}
//	eval(str3_1);
//	eval(str4_1);
//	eval(str5_1);
//	eval(str6_1);
//	eval(str7_1);
//	eval(str8_1);
//	eval(str9_1);
//	eval(str10_1);
//	eval(str3);
//	eval(str4);
//	eval(str5);
//	eval(str6);
//	eval(str7);
//	eval(str8);
//	eval(str9);
//	eval(str10);
//
//	formatValue_SBB();	
}
/* 格式化数据*/
function formatAll(o)
{
	if (o.className == "money") {
		formatCurrency(o);
		o.value = formatNumberType(o.value, 0, 2);
	}
	if (o.className == "input_num_readonly") {
		formatCurrency(o);
		o.value = formatNumberType(o.value, 0, 2);
	}
	if (o.className == "input_money_readonly") {
		formatCurrency(o);
		o.value = formatNumberType(o.value, 0, 2);
	}
}
//fb1没有用到改方法
function changevalue_MSHW()
{
//	unformatValue_SBB();	
//
//	xform.XJFS_15.value=parseInt(xform.MSHWFS_15.value);
//	xform.XJXSE_15.value=parseFloat(xform.MSHWXSE_15.value);
//	xform.XJSE_15.value=parseFloat(xform.MSHWSE_15.value);
//	xform.XJFS_16.value=parseInt(xform.MSHWFS_16.value)+parseInt(xform.MSLWFS_16.value);
//	xform.XJXSE_16.value=parseFloat(xform.MSHWXSE_16.value)+parseFloat(xform.MSLWXSE_16.value);
//	xform.XJXSE_17.value=parseFloat(xform.MSHWXSE_17.value)+parseFloat(xform.MSLWXSE_17.value);
//	xform.MSHWXSE_18.value=parseFloat(xform.MSHWXSE_17.value)+parseFloat(xform.MSHWXSE_16.value)+parseFloat(xform.MSHWXSE_15.value);
//	xform.MSHWSE_18.value=parseFloat(xform.MSHWSE_15.value);
//	xform.MSLWXSE_18.value=parseFloat(xform.MSLWXSE_17.value)+parseFloat(xform.MSLWXSE_16.value);
//	xform.XJXSE_18.value=parseFloat(xform.XJXSE_17.value)+parseFloat(xform.XJXSE_16.value)+parseFloat(xform.XJXSE_15.value);
//	xform.XJSE_18.value=parseFloat(xform.XJSE_15.value);
//
//	formatValue_SBB();	
}

//fb1没有改方法
function check_FS_XSE(valueName,i)
{
//	var flag=true;
//	//zhonggc,20060321,修改原因：厦门的销售额可以单独为0；
//  //var str="if((parseInt(xform."+valueName+"FS_"+i+".value)==0 && parseInt(xform."+valueName+"XSE_"+i+".value)>0.00) || (parseFloat(xform."+valueName+"FS_"+i+".value)>0 && parseFloat(xform."+valueName+"XSE_"+i+".value)==0.00)){flag=false;}";
//  var str="if((parseInt(xform."+valueName+"FS_"+i+".value)==0 && parseInt(xform."+valueName+"XSE_"+i+".value)>0.00)){flag=false;}";
//
//	eval(str);
//	return flag;
}

function check_save1()
{
	var flag = true;
	unformatValue_SBB();
/**
 * 根据《关于调整增值税一般纳税人网上申报需求的报2018年5月版第3次修改》，小曾提出，1、2、4a、4b这四行涉及到税额和金额的这里的校验取消
 * by  wxf  20180524
 */
	//=====================第1 2列的值校验
//	if (parseFloat($("#KJZZSFP_XSE1").val()) > 0){
//		if (parseFloat($("#KJZZSFP_XXSE1").val()) <= 0){
//			alert("第1栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
//	if (parseFloat($("#KJZZSFP_XSE2").val()) > 0){
//		if (parseFloat($("#KJZZSFP_XXSE2").val()) <= 0){
//			alert("第2栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
	if (parseFloat($("#KJZZSFP_XSE3").val()) > 0){
		if (parseFloat($("#KJZZSFP_XXSE3").val()) <= 0){
			alert("第3栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
//	//因为表样有变，增加了4a行，表中的其他行次的此列都要大于0，虽然新规则没有写，先加上去     by    wxf     20170705
//	if (parseFloat($("#KJZZSFP_XSE23").val()) > 0){
//		if (parseFloat($("#KJZZSFP_XXSE23").val()) <= 0){
//			alert("第4a栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
//	if (parseFloat($("#KJZZSFP_XSE4").val()) > 0){
//		if (parseFloat($("#KJZZSFP_XXSE4").val()) <= 0){
//			alert("第4b栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
	if (parseFloat($("#KJZZSFP_XSE5").val()) > 0){
		if (parseFloat($("#KJZZSFP_XXSE5").val()) <= 0){
			alert("第5栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJZZSFP_XSE8").val()) > 0){
		if (parseFloat($("#KJZZSFP_XXSE8").val()) <= 0){
			alert("第8栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJZZSFP_XSE9").val()) > 0){
		if (parseFloat($("#KJZZSFP_XXSE9").val()) <= 0){
			alert("第9a栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJZZSFP_XSE22").val()) > 0){
		if (parseFloat($("#KJZZSFP_XXSE22").val()) <= 0){
			alert("第9b栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJZZSFP_XSE10").val()) > 0){
		if (parseFloat($("#KJZZSFP_XXSE10").val()) <= 0){
			alert("第10栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJZZSFP_XSE11").val()) > 0){
		if (parseFloat($("#KJZZSFP_XXSE11").val()) <= 0){
			alert("第11栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJZZSFP_XSE12").val()) > 0){
		if (parseFloat($("#KJZZSFP_XXSE12").val()) <= 0){
			alert("第12栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJZZSFP_XSE17").val()) > 0){
		if (parseFloat($("#KJZZSFP_XXSE17").val()) <= 0){
			alert("第18栏的 “开具税控增值税专用发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}

	//=====================第3 4列的值校验
	/**
	 * 根据《关于调整增值税一般纳税人网上申报需求的报2018年5月版第3次修改》，小曾提出，1、2、4a、4b这四行涉及到税额和金额的这里的校验取消
	 * by  wxf  20180524
	 */
//	if (parseFloat($("#KJQTFP_XSE1").val()) > 0){
//		if (parseFloat($("#KJQTFP_XXSE1").val()) <= 0){
//			alert("第1栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
//	if (parseFloat($("#KJQTFP_XSE2").val()) > 0){
//		if (parseFloat($("#KJQTFP_XXSE2").val()) <= 0){
//			alert("第2栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
	if (parseFloat($("#KJQTFP_XSE3").val()) > 0){
		if (parseFloat($("#KJQTFP_XXSE3").val()) <= 0){
			alert("第3栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
//	//因为表样有变，增加了4a行，表中的其他行次的此列都要大于0，虽然新规则没有写，先加上去     by    wxf     20170705
//	if (parseFloat($("#KJQTFP_XSE23").val()) > 0){
//		if (parseFloat($("#KJQTFP_XXSE23").val()) <= 0){
//			alert("第4a栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
//	if (parseFloat($("#KJQTFP_XSE4").val()) > 0){
//		if (parseFloat($("#KJQTFP_XXSE4").val()) <= 0){
//			alert("第4b栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
	if (parseFloat($("#KJQTFP_XSE5").val()) > 0){
		if (parseFloat($("#KJQTFP_XXSE5").val()) <= 0){
			alert("第5栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJQTFP_XSE8").val()) > 0){
		if (parseFloat($("#KJQTFP_XXSE8").val()) <= 0){
			alert("第8栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJQTFP_XSE9").val()) > 0){
		if (parseFloat($("#KJQTFP_XXSE9").val()) <= 0){
			alert("第9a栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJQTFP_XSE22").val()) > 0){
		if (parseFloat($("#KJQTFP_XXSE22").val()) <= 0){
			alert("第9b栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJQTFP_XSE10").val()) > 0){
		if (parseFloat($("#KJQTFP_XXSE10").val()) <= 0){
			alert("第10栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJQTFP_XSE11").val()) > 0){
		if (parseFloat($("#KJQTFP_XXSE11").val()) <= 0){
			alert("第11栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#KJQTFP_XSE12").val()) > 0){
		if (parseFloat($("#KJQTFP_XXSE12").val()) <= 0){
			alert("第12栏的 “开具其他发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	
	//=====================第5 6列的值校验
	/**
	 * 根据《关于调整增值税一般纳税人网上申报需求的报2018年5月版第3次修改》，小曾提出，1、2、4a、4b这四行涉及到税额和金额的这里的校验取消
	 * by  wxf  20180524
	 */
//	if (parseFloat($("#WKJFP_XSE1").val()) > 0){
//		if (parseFloat($("#WKJFP_XXSE1").val()) <= 0){
//			alert("第1栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
//	if (parseFloat($("#WKJFP_XSE2").val()) > 0){
//		if (parseFloat($("#WKJFP_XXSE2").val()) <= 0){
//			alert("第2栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
	if (parseFloat($("#WKJFP_XSE3").val()) > 0){
		if (parseFloat($("#WKJFP_XXSE3").val()) <= 0){
			alert("第3栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
//	//因为表样有变，增加了4a行，表中的其他行次的此列都要大于0，虽然新规则没有写，先加上去     by    wxf     20170705
//	if (parseFloat($("#WKJFP_XSE23").val()) > 0){
//		if (parseFloat($("#WKJFP_XXSE23").val()) <= 0){
//			alert("第4a栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
//	if (parseFloat($("#WKJFP_XSE4").val()) > 0){
//		if (parseFloat($("#WKJFP_XXSE4").val()) <= 0){
//			alert("第4b栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
	if (parseFloat($("#WKJFP_XSE5").val()) > 0){
		if (parseFloat($("#WKJFP_XXSE5").val()) <= 0){
			alert("第5栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#WKJFP_XSE8").val()) > 0){
		if (parseFloat($("#WKJFP_XXSE8").val()) <= 0){
			alert("第8栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#WKJFP_XSE9").val()) > 0){
		if (parseFloat($("#WKJFP_XXSE9").val()) <= 0){
			alert("第9a栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#WKJFP_XSE22").val()) > 0){
		if (parseFloat($("#WKJFP_XXSE22").val()) <= 0){
			alert("第9b栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#WKJFP_XSE10").val()) > 0){
		if (parseFloat($("#WKJFP_XXSE10").val()) <= 0){
			alert("第10栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#WKJFP_XSE11").val()) > 0){
		if (parseFloat($("#WKJFP_XXSE11").val()) <= 0){
			alert("第11栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if (parseFloat($("#WKJFP_XSE12").val()) > 0){
		if (parseFloat($("#WKJFP_XXSE12").val()) <= 0){
			alert("第12栏的 “未开具发票”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	/**
	 * 根据《关于调整增值税一般纳税人网上申报需求的报2018年5月版第3次修改》，小曾提出，1、2、4a、4b这四行涉及到税额和金额的这里的校验取消
	 * by  wxf  20180524
	 */
	//=====================第7 8列的值校验
//	if (parseFloat($("#NSJCTZ_XSE1").val()) > 0){
//		if (parseFloat($("#NSJCTZ_XXSE1").val()) <= 0){
//			alert("第1栏的 “纳税检查调整”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
//	if (parseFloat($("#NSJCTZ_XSE2").val()) > 0){
//		if (parseFloat($("#NSJCTZ_XXSE2").val()) <= 0){
//			alert("第2栏的 “纳税检查调整”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
	if (parseFloat($("#NSJCTZ_XSE3").val()) > 0){
		if (parseFloat($("#NSJCTZ_XXSE3").val()) <= 0){
			alert("第3栏的 “纳税检查调整”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
//	//因为表样有变，增加了4a行，表中的其他行次的此列都要大于0，虽然新规则没有写，先加上去     by    wxf     20170705
//	if (parseFloat($("#NSJCTZ_XSE23").val()) > 0){
//		if (parseFloat($("#NSJCTZ_XXSE23").val()) <= 0){
//			alert("第4a栏的 “纳税检查调整”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
//	if (parseFloat($("#NSJCTZ_XSE4").val()) > 0){
//		if (parseFloat($("#NSJCTZ_XXSE4").val()) <= 0){
//			alert("第4b栏的 “纳税检查调整”的“销项（应纳）税额”的值要大于 0 ！");
//			formatValue_SBB();
//			return false;
//		}
//	}
	if (parseFloat($("#NSJCTZ_XSE5").val()) > 0){
		if (parseFloat($("#NSJCTZ_XXSE5").val()) <= 0){
			alert("第5栏的 “纳税检查调整”的“销项（应纳）税额”的值要大于 0 ！");
			formatValue_SBB();
			return false;
		}
	}
	if(true){
		//================小曾要求，取消即征即退的这个校验    by     wxf      20170927     start===========================//
//		//因为多了4a行的货物的栏次，所以加上这一行     by   wxf     20170719
//		var sum1 =parseFloat(parseFloat($("#HJ_XSE1").val()) + parseFloat($("#HJ_XSE3").val()) + parseFloat($("#HJ_XSE23").val())).toFixed(2);
//		var sum9 = parseFloat($("#HJ_XSE6").val());
//		if (sum9 > sum1){
//			alert("第6行第9列的值要小于等于第1行、3行、4a行第9列之和的值！");
//			formatValue_SBB();
//			return false;
//		}
//		//因为多了4a行的货物的栏次，所以加上这一行     by   wxf     20170719
//		var sum2 = parseFloat(parseFloat($("#HJ_XXSE1").val()) + parseFloat($("#HJ_XXSE3").val()) + parseFloat($("#HJ_XXSE23").val())).toFixed(2);
//		var sum10 = parseFloat($("#HJ_XXSE6").val());
//		if (sum10 > sum2){
//			alert("第6行第10列的值要小于等于第1行、3行、4a行第10列之和的值！");
//			formatValue_SBB();
//			return false;
//		}
		//================小曾要求，取消即征即退的这个校验    by     wxf      20170927     end===========================//
	}
	
	if(true){
		//================小曾要求，取消即征即退的这个校验    by     wxf      20170927     start===========================//
//		var sum1 =  parseFloat(parseFloat($("#HJ_XSE2").val()) + parseFloat($("#HJ_XSE4").val()) + parseFloat($("#HJ_XSE5").val())).toFixed(2);
//		var sum9 = parseFloat($("#HJ_XSE7").val());
//		if (sum9 > sum1){
//			alert("第7行第9列的值要小于等于第2、4b、5行第9列之和的值！");
//			formatValue_SBB();
//			return false;
//		}
//		
//		var sum2 =  parseFloat(parseFloat($("#HJ_XXSE2").val()) + parseFloat($("#HJ_XXSE4").val()) + parseFloat($("#HJ_XXSE5").val())).toFixed(2);
//		var sum10 = parseFloat($("#HJ_XXSE7").val());
//		if (sum10 > sum2){
//			alert("第7行第10列的值要小于等于第2、4b、5行第10列之和的值！");
//			formatValue_SBB();
//			return false;
//		}
//		
//		var sum15 = parseFloat(parseFloat($("#KCH_XXSE2").val())+parseFloat($("#KCH_XXSE4").val())+parseFloat($("#KCH_XXSE5").val())).toFixed(2);
//		var sum14 = parseFloat($("#KCH_XXSE7").val()) ;
//		if (sum14 > sum15){
//			alert("第7行第14列的值要小于等于第2、4b、5行第14列之和的值！");
//			formatValue_SBB();
//			return false;
//		}
		//================小曾要求，取消即征即退的这个校验    by     wxf      20170927     end===========================//
	}
	
	if(true){
		//================小曾要求，取消即征即退的这个校验    by     wxf      20170927     start===========================//
//		//20170427  曾艳梅新增规则，第14行第9列的值要小于等于第8、9a、10、11行第9列之和的值        cyueyun
//		var sum1 = parseFloat(parseFloat($("#HJ_XSE8").val()) + parseFloat($("#HJ_XSE9").val()) + parseFloat($("#HJ_XSE10").val())+ parseFloat($("#HJ_XSE11").val())).toFixed(2);
//		var sum9 = parseFloat($("#HJ_XSE13").val());
//		if (sum9 > sum1){
//			alert("第14行第9列的值要小于等于第8、9a、10、11行第9列之和的值！");
//			formatValue_SBB();
//			return false;
//		}
//		
//		//20170427  曾艳梅新增规则，第14行第10列的值要小于等于第8、9a、10、11行第10列之和的值    cyueyun
//		var sum2 = parseFloat(parseFloat($("#HJ_XXSE8").val()) + parseFloat($("#HJ_XXSE9").val()) + parseFloat($("#HJ_XXSE10").val())+ parseFloat($("#HJ_XXSE11").val())).toFixed(2);
//		var sum10 = parseFloat($("#HJ_XXSE13").val());
//		if (sum10 > sum2){
//			alert("第14行第10列的值要小于等于第8、9a、10、11行第10列之和的值！");
//			formatValue_SBB();
//			return false;
//		}
		//================小曾要求，取消即征即退的这个校验    by     wxf      20170927     end===========================//
		if(true){
			//================小曾要求，取消即征即退的这个校验    by     wxf      20170927     start===========================//
//			//20170428  曾艳梅新增规则，第15行第9、10、11、12、13、14列的值要小于等于对应第9b+12行第9、10、11、12、13、14列的值   cyueyun
//			var colName = ["HJ_XSE","HJ_XXSE","HJ_JSHJ","YNSFWKCXMBQSJKCJE","KCH_XSE","KCH_XXSE"];
//			var colNum = [9,10,11,12,13,14];
//			for(var i=0;i<colName.length;i++){
//				var sum2 = decimal(parseFloat($("#"+colName[i]+"22").val())+parseFloat($("#"+colName[i]+"12").val()),2) ;
//				var sum9 = parseFloat($("#"+colName[i]+"14").val());
//				if (sum9 > sum2){
//					alert("第15行第"+colNum[i]+"列的值要小于等于第9b、12行第"+colNum[i]+"列的值！");
//					formatValue_SBB();
//					return false;
//				}
//			}
			//================小曾要求，取消即征即退的这个校验    by     wxf      20170927     end===========================//
			
//			var sum9 = parseFloat($("#HJ_XSE14").val());
//			if (sum9 > sum1){
//				alert("第15行第9列的值要小于等于第12行第9列的值！");
//				formatValue_SBB();
//				return false;
//			}
//				
//			var sum2 = parseFloat($("#HJ_XXSE12").val()) ;
//			var sum10 = parseFloat($("#HJ_XXSE14").val());
//			if (sum10 > sum2){
//				alert("第15行第10列的值要小于等于第12行第10列的值！");
//				formatValue_SBB();
//				return false;
//			}
//			
//			var sum12 = parseFloat($("#KCH_XXSE12").val());
//			var sum14 = parseFloat($("#KCH_XXSE14").val());	
//			if (sum14 > sum12){
//				alert("第15行第14列的值要小于第12行第14列的值！");
//				formatValue_SBB();
//				return false;
//			}
		}
	
		if(parseFloat(document.getElementsByName("KCH_XSE7")[0].value)>0){
			if(parseFloat(document.getElementsByName("KCH_XXSE7")[0].value)<=0){
				alert("第7行第13列的值大于零的情况下，第7行第14列的值必须大于零！");
				formatValue_SBB();
				return false;
			}
		}
		
		if(parseFloat(document.getElementsByName("KCH_XSE14")[0].value)>0){
			if(parseFloat(document.getElementsByName("KCH_XXSE14")[0].value)<=0){
				alert("第15行第13列的值大于零的情况下，第15行第14列的值必须大于零！");
				formatValue_SBB();
				return false;
			}
		}
		
		/*---------小曾提出：第7行和第15行中，第13列小于0时，第14列的值不能大于等于0    by   wxf   20171016    start----------*/
		//第7行的第13列小于0时，第14列的值不能大于等于0
		if(parseFloat(document.getElementsByName("KCH_XSE7")[0].value)<0){
			if(parseFloat(document.getElementsByName("KCH_XXSE7")[0].value)>=0){
				alert("第7行的第13列小于0时，第14列的值不能大于等于0！");
				formatValue_SBB();
				return false;
			}
		}
		//第15行的第13列小于0时，第14列的值不能大于等于0
		if(parseFloat(document.getElementsByName("KCH_XSE14")[0].value)<0){
			if(parseFloat(document.getElementsByName("KCH_XXSE14")[0].value)>=0){
				alert("第15行的第13列小于0时，第14列的值不能大于等于0！");
				formatValue_SBB();
				return false;
			}
		}
		/*----------小曾提出：第7行和第15行中，第13列小于0时，第14列的值不能大于等于0    by   wxf   20171016    end-------------*/
		
		var v_7_13 = parseFloat($("#KCH_XSE7").val());
		var v_7_14 = parseFloat($("#KCH_XXSE7").val());
		var v_15_13 = parseFloat($("#KCH_XSE14").val());
		var v_15_14 = parseFloat($("#KCH_XXSE14").val());
		//小曾提出：第7行中：第13列的绝对值/1.17*0.17大于等于第14列的绝对值大于等于第13列的绝对值/1.06*0.06      by   wxf    20171013
		if(Math.abs(v_7_14) > formatPoint((Math.abs(v_7_13)/117*17+0.1),2) || Math.abs(v_7_14) < formatPoint((Math.abs(v_7_13)/106*6-0.1),2)){
			alert("请检查，第7行中，13列和14列的关系要满足：第13列的绝对值/1.17*0.17≥第14列的绝对值≥第13列的绝对值/1.06*0.06！");
			formatValue_SBB();
			return false;
		}
		//小曾提出：第15行中：第13列的绝对值/1.06*0.06大于等于第14列的绝对值大于等于第13列的绝对值/1.03*0.03      by   wxf    20171013
		if(Math.abs(v_15_14) > formatPoint((Math.abs(v_15_13)/106*6+0.1),2) || Math.abs(v_15_14) < formatPoint((Math.abs(v_15_13)/103*3-0.1),2)){
			alert("请检查，第15行中，13列和14列的关系要满足：第13列的绝对值/1.06*0.06≥第14列的绝对值≥第13列的绝对值/1.03*0.03！");
			formatValue_SBB();
			return false;
		}
		
		//小曾提出，所有栏次的第7、8列的值不能为负数    by    wxf     20170928
		var tmpfield1 ="";
		var tmpfield2 ="";
		var arr = new Array(1,2,3,23,4,5);
		for (var y = 0; y < arr.length; y++) {
			var z = arr[y];
			tmpfield1 = parseFloat($("#NSJCTZ_XSE"+z).val());
			tmpfield2 = parseFloat($("#NSJCTZ_XXSE"+z).val());
			if(z == 23){
				z = "4a";
			}
			if(z == 4){
				z = "4b";
			}
			if(tmpfield1 < 0 || tmpfield2 < 0){
				alert("请检查，第"+ z +"行第7列、第8列的值不能为负数！");
				formatValue_SBB();
				return false;
			}
		}
		/**
		 * 关于调整增值税一般纳税人网上申报需求的报告2018年5月版:
		 * 增加条件:当同栏次的12列的值为0零，则该栏次的值等于同栏次的第10栏的值；当同栏次的12列的值不等于0，则该栏次值让按有原有办法计算或填列。
		 * 20180523 BY YHQ
		 */
		var value10 =0.00;
		var value12 =0.00;
		var value14 =0.00;
		var arr = new Array(2,4,5,22,12);
		for (var y = 0; y < arr.length; y++) {
			var z = arr[y];
			value10 = parseFloat($("#HJ_XXSE"+z).val());
			value12 = parseFloat($("#YNSFWKCXMBQSJKCJE"+z).val());
			value14 = parseFloat($("#KCH_XXSE"+z).val());
			if(z == 4){
				z = "4b";
			}
			if(z == 22){
				z = "9b";
			}
			if(value12==0&&value14!=value10){
				alert("第"+ z +"行第12列的值为0时，第"+ z +"行第14列的值要等于10列的值！");
				formatValue_SBB();
				return false;
			}
		}
		
		//为了防止18栏1、2列有数值，加个校验    by   wxf   20180730
		if(parseFloat($("#KJZZSFP_XSE17").val()) != 0 || parseFloat($("#KJZZSFP_XXSE17").val()) != 0){
			alert("第18行第1列和第2列都只能为0！");
			formatValue_SBB();
			return false;
		}
		
	}
	
	/*************************************一表集成需求添加部分 start*************************************/
	/**
	 * 当有出口退免税资格时，值带出到出口退免税栏次，但是允许修改出口退税及免税栏次的值（可以分数据至免税栏次，但是两个栏次的合计值需要等于默认带出来的值），
	 * 如果没有出口免税的值，数据全部带到免税，不允许修改 
	 * */
	if("true" == mdtzgFlag && isPtComReadOnly == "true"){
		var msmdtsHwjlwHj = parseFloat(document.getElementsByName("KJQTFP_XSE15")[0].value) 
				+ parseFloat(document.getElementsByName("KJQTFP_XSE17")[0].value);
		var msmdtsFwHj = parseFloat(document.getElementsByName("KJQTFP_XSE16")[0].value) 
				+ parseFloat(document.getElementsByName("KJQTFP_XSE18")[0].value);
		
		if(formatPoint(parseFloat(mdtsQtHw) + parseFloat(mdtsQtFw), 2) != formatPoint(msmdtsHwjlwHj + msmdtsFwHj, 2)){
			alert("第16至19行第3列“开具其他发票”的销售额的合计值【" + formatPoint(msmdtsHwjlwHj + msmdtsFwHj, 2) + "】应等于税控系统中免税发票的合计值【" +
					formatPoint(parseFloat(mdtsQtHw) + parseFloat(mdtsQtFw), 2) + "】！");
			formatValue_SBB();
			return false;
		}
		
	/*************************************一表集成需求添加部分 end*************************************/
	}
	formatValue_SBB();
	return true;
}

/**
 * 14列值改变
 * 露滨测试新需求20160613：第2，4b，5，9b，12栏次，第14列自动计算，但允许手工修改，误差范围为该列计算公式的1块钱以内;输入控制跟随本栏次原先的输入控制
 * @return
 * 
 * 业务部门“关于调整增值税一般纳税人网上申报需求的报告2018年4月版4次修订_20180426.docx”需求中，要求修改误差值；
 * （三）修改误差值：
 * 		1.将原有误差值为“1”的均调整为“10”，原有“0.01”的保持不变。
 * 		2.增设一窗式比对取数时的误差值。误差值为“10”即表内数值与系统取值误差在“10“以内的数均能通过校验。
 * 
 * 涉及改动的内容如下：
 * 		a>	附表一第10列、第14列跟公式计算的误差值由一块改为十快（提示也需修改）
 * 		b>	附表一跟税负分析的误差值由一块改为十快
 * 		c>	一窗式比对销项发票误差值由一块改为十快
 * 		d>	正式申报时的进项数据比对的误差值由一块改为十快
 */

/**
 * 关于调整增值税一般纳税人网上申报需求的报告2018年5月版:
 * 将原有17%的关系，调整为16%——17%区间范围内
 * 将原有11%的关系，调整为10%——11%区间范围内
 * “13%税率”：该栏关闭
 * 20180514 BY YHQ
 */
function onChangeCol14(index, sl, lc)
{
	//修改了col13Obj和col14Obj的赋值方式     by  wxf   20170719
	var col10Obj = $("input[name='HJ_XXSE"+ index +"']")[0];
	var col12Obj = $("input[name='YNSFWKCXMBQSJKCJE"+ index +"']")[0];
	var col13Obj = $("input[name='KCH_XSE"+ index +"']")[0];
	var col14Obj = $("input[name='KCH_XXSE"+ index +"']")[0];
	
	unformatCurrency(col10Obj);
	unformatCurrency(col12Obj);
	unformatCurrency(col13Obj);
	unformatCurrency(col14Obj);
	
	var col10Value = parseFloat(col10Obj.value);
	var col12Value = parseFloat(col12Obj.value);
	var col13Value = parseFloat(col13Obj.value);
	var col14Value = parseFloat(col14Obj.value);
	
	var sl2 = sl;
	if(parseFloat(sl)==0.16 || parseFloat(sl)==0.1){
		sl2 = sl + 0.01;
	}
	
	//14=13÷（100%+税率或征收率）×税率或征收率
	var col14ValueForCal = parseFloat(col13Value / (1 + parseFloat(sl)) * parseFloat(sl));
	var col14ValueForCal2 = parseFloat(col13Value / (1 + parseFloat(sl2)) * parseFloat(sl2));
	
	var maxValue = 0.00;
	var minValue = 0.00;
	//合计值为负数情况下，最大值和最小值计算反过来
	if(col14ValueForCal>=0){
		maxValue = formatPoint(col14ValueForCal2 + 10,2);
		minValue = formatPoint(col14ValueForCal - 10,2);
	}else{
		maxValue = formatPoint(col14ValueForCal + 10,2);
		minValue = formatPoint(col14ValueForCal2 - 10,2);
	}
	//if(Math.abs(formatPoint(col14Value - col14ValueForCal, 2)) > 10)
	
	/**
	 * 根据《关于调整增值税一般纳税人网上申报需求的报2018年5月版第3次修改》，小曾提出，1、2、4a、4b这四行涉及到税额和金额的这里的校验取消
	 * by  wxf  20180524
	 */
	if(parseFloat(sl)!=0.16 && parseFloat(sl)!=0.1){
		if(col14Value<minValue || col14Value>maxValue)
		{
			alert("第" + lc + "栏第14列“销项（应纳）税额”的值与公式计算的数值误差只能在十块钱以内!");
			
			//《2018年5月版第2次修改》，小曾要求，当第12列为0时，14列等于10列，否则14列按照之前的计算   by   wxf    20180524
			if(col12Value == 0){
				col14Obj.value = col10Value;
			}else{
				col14Obj.value = col14ValueForCal;
			}
		}
	}
	
	
	formatAll(col10Obj);
	formatAll(col12Obj);
	formatAll(col13Obj);
	formatAll(col14Obj);
}

/**
 * 20170720: 小曾要求，销项税额必须校验修改值是否在一块钱以内(校验的是第9列和第10列的数值)
 * 若第9、10列的数据不符合计算公式的误差要求，则把触发的单元格的值按照公式计算结果重置
 * 
 * add by zhiweiHuang 20170720
 * 
 * 业务部门“关于调整增值税一般纳税人网上申报需求的报告2018年4月版4次修订_20180426.docx”需求中，要求修改误差值；
 * （三）修改误差值：
 * 		1.将原有误差值为“1”的均调整为“10”，原有“0.01”的保持不变。
 * 		2.增设一窗式比对取数时的误差值。误差值为“10”即表内数值与系统取值误差在“10“以内的数均能通过校验。
 * 
 * 涉及改动的内容如下：
 * 		a>	附表一第10列、第14列跟公式计算的误差值由一块改为十快（提示也需修改）
 * 		b>	附表一跟税负分析的误差值由一块改为十快
 * 		c>	一窗式比对销项发票误差值由一块改为十快
 * 		d>	正式申报时的进项数据比对的误差值由一块改为十快
 */
function checkXxseIsAvailable(preFixKey, index, hc, lieci, sl)
{
	var xseKey = preFixKey + "XSE" + index;
	var xxseKey = preFixKey + "XXSE" + index;
	
	var xseObj = $("input[name='"+ xseKey +"']")[0];
	var xxseObj = $("input[name='"+ xxseKey +"']")[0];
	var xseHjObj = $("input[name='HJ_XSE"+ index +"']")[0];
	var xxseHjObj = $("input[name='HJ_XXSE"+ index +"']")[0];
	
	unformatCurrency(xseObj);
	unformatCurrency(xxseObj);
	unformatCurrency(xseHjObj);
	unformatCurrency(xxseHjObj);
	
	var xseHjValue = parseFloat(xseHjObj.value);
	var xxseHjValue = parseFloat(xxseHjObj.value);
	
	/**
	 * 标识是否需要重新计算该行的合计
	 */
	var isNeedReCalHj = 0;
	
	var sl2 = sl;
	if(parseFloat(sl)==0.16 || parseFloat(sl)==0.1){
		sl2 = sl + 0.01;
	}
	//销项税额=销售额×税率或征收率
	var xxseHjValueForCal = xseHjValue * (parseFloat(sl) * 100) / 100;
	var xxseHjValueForCal2 = xseHjValue * (parseFloat(sl2) * 100) / 100;
	
	var maxValue = 0.00;
	var minValue = 0.00;
	//合计值为负数情况下，最大值和最小值计算反过来
	if(xxseHjValueForCal>=0){
		maxValue = formatPoint(xxseHjValueForCal2 + 10,2);
		minValue = formatPoint(xxseHjValueForCal - 10,2);
	}else{
		maxValue = formatPoint(xxseHjValueForCal + 10,2);
		minValue = formatPoint(xxseHjValueForCal2 - 10,2);
	}
	//if(Math.abs(formatPoint(xxseHjValue - xxseHjValueForCal, 2)) > 10)
	
	/**
	 * 根据《关于调整增值税一般纳税人网上申报需求的报2018年5月版第3次修改》，小曾提出，1、2、4a、4b这四行涉及到税额和金额的这里的校验取消
	 * by  wxf  20180524
	 */
	if(parseFloat(sl)!=0.16 && parseFloat(sl)!=0.1){
		if(xxseHjValue<minValue || xxseHjValue>maxValue)
		{
			alert("第" + hc + "栏第10列“销项（应纳）税额”的值与公式计算的数值误差只能在十块钱以内!");
			
			var xseValue = formatPoint(parseFloat(xseObj.value), 2);
			xxseObj.value = formatPoint(xseValue * parseFloat(sl), 2);
			
			isNeedReCalHj = 1;
		}
	}
	
	formatAll(xseObj);
	formatAll(xxseObj);
	formatAll(xseHjObj);
	formatAll(xxseHjObj);
	
	if(isNeedReCalHj == 1)
	{
		switch(hc)
		{
			case "1":
				changevalue1();
				break;
			case "2":
				changevalue2();
				break;
			case "3":
				changevalue3();
				break;
			case "4a":
				changevalue23();
				break;
			case "4b":
				changevalue4();
				break;
			case "5":
				changevalue5();
				break;
			case "8":
				changevalue8();
				break;
			case "9a":
				changevalue9();
				break;
			case "9b":
				changevalue22();
				break;
			case "10":
				changevalue10();
				break;
			case "11":
				changevalue11();
				break;
			case "12":
				changevalue12();
				break;
			default:
				break;
		}
	}
}

function removeReadOnlyForDefaultCom(){
	/**
	 * 纳税人是否自己修改数据标志
	 */
	$("#inputTable input[name='ISXIUGAI']")[0].value = "1";
	isZpComReadOnly = "false";
	isPtComReadOnly = "false";
	//根据是否有简易征收资格来判断点“数据修改”按钮是否开放相应简易征收栏次    by   wxf    20171109
	if(jyzs == 'Y'){
		var hwlc = new Array(1,3,23,11,15,17);
		var fwlc = new Array(2,4,5,22,12,16,18);
	}else{
		var hwlc = new Array(1,3,23,15,17);
		var fwlc = new Array(2,4,5,16,18);
	}
	if(szlbdm == '01' || szlbdm == '03'){
		if(jzjt == 'Y'){
			var row_6_obj_1 = $("#HJ_XSE6");
			var row_6_obj_2 = $("#HJ_XXSE6");
			var row_6_obj_3 = $("#YNSFWKCXMBQSJKCJE6");
			var row_13_obj_1 = $("#HJ_XSE13");
			var row_13_obj_2 = $("#HJ_XXSE13");
			var row_13_obj_3 = $("#YNSFWKCXMBQSJKCJE13");
			
			removeReadonlyByObj(row_6_obj_1);
			removeReadonlyByObj(row_6_obj_2);
			removeReadonlyByObj(row_6_obj_3);
			removeReadonlyByObj(row_13_obj_1);
			removeReadonlyByObj(row_13_obj_2);
			removeReadonlyByObj(row_13_obj_3);
		}
		for(var i = 0; i < hwlc.length; i++){
			var col_1_obj = $("#KJZZSFP_XSE"+hwlc[i]);
			var col_2_obj = $("#KJZZSFP_XXSE"+hwlc[i]);  
			var col_3_obj = $("#KJQTFP_XSE"+hwlc[i]);
			var col_4_obj = $("#KJQTFP_XXSE"+hwlc[i]);
			var col_5_obj = $("#WKJFP_XSE"+hwlc[i]);
			var col_6_obj = $("#WKJFP_XXSE"+hwlc[i]);
			var col_7_obj = $("#NSJCTZ_XSE"+hwlc[i]);
			var col_8_obj = $("#NSJCTZ_XXSE"+hwlc[i]);
			var col_12_obj = $("#YNSFWKCXMBQSJKCJE"+hwlc[i]);
			var col_14_obj = $("#KCH_XXSE"+hwlc[i]);
			
			//20180628，小曾提出，增值税一般纳税人附表一的18行第1、2列不开放，关闭。    by   wxf   20180628
			if(hwlc[i] == 17){
				removeReadonlyByObj(col_3_obj);
				removeReadonlyByObj(col_4_obj);
				removeReadonlyByObj(col_5_obj);
				removeReadonlyByObj(col_6_obj);
				removeReadonlyByObj(col_7_obj);
				removeReadonlyByObj(col_8_obj);
				removeReadonlyByObj(col_12_obj);
				removeReadonlyByObj(col_14_obj);
			}else{
			    removeReadonlyByObj(col_1_obj);
			    removeReadonlyByObj(col_2_obj);
			    removeReadonlyByObj(col_3_obj);
			    removeReadonlyByObj(col_4_obj);
			    removeReadonlyByObj(col_5_obj);
			    removeReadonlyByObj(col_6_obj);
			    removeReadonlyByObj(col_7_obj);
			    removeReadonlyByObj(col_8_obj);
			    removeReadonlyByObj(col_12_obj);
			    removeReadonlyByObj(col_14_obj);
			}
		}
	}
	if(szlbdm == '02' || szlbdm == '03'){
		if(jzjt == 'Y'){
			var row_7_obj_1 = $("#HJ_XSE7");
			var row_7_obj_2 = $("#HJ_XXSE7");
			var row_7_obj_3 = $("#YNSFWKCXMBQSJKCJE7");
			var row_7_obj_4 = $("#KCH_XXSE7");
			var row_14_obj_1 = $("#HJ_XSE14");
			var row_14_obj_2 = $("#HJ_XXSE14");
			var row_14_obj_3 = $("#YNSFWKCXMBQSJKCJE14");
			var row_14_obj_4 = $("#KCH_XXSE14");
			
			removeReadonlyByObj(row_7_obj_1);
			removeReadonlyByObj(row_7_obj_2);
			removeReadonlyByObj(row_7_obj_3);
			removeReadonlyByObj(row_7_obj_4);
			removeReadonlyByObj(row_14_obj_1);
			removeReadonlyByObj(row_14_obj_2);
			removeReadonlyByObj(row_14_obj_3);
			removeReadonlyByObj(row_14_obj_4);
		}
		for(var i = 0; i < fwlc.length; i++){
			var col_1_obj = $("#KJZZSFP_XSE"+fwlc[i]);
			var col_2_obj = $("#KJZZSFP_XXSE"+fwlc[i]);  
			var col_3_obj = $("#KJQTFP_XSE"+fwlc[i]);
			var col_4_obj = $("#KJQTFP_XXSE"+fwlc[i]);
			var col_5_obj = $("#WKJFP_XSE"+fwlc[i]);
			var col_6_obj = $("#WKJFP_XXSE"+fwlc[i]);
			var col_7_obj = $("#NSJCTZ_XSE"+fwlc[i]);
			var col_8_obj = $("#NSJCTZ_XXSE"+fwlc[i]);
			var col_12_obj = $("#YNSFWKCXMBQSJKCJE"+fwlc[i]);
			var col_14_obj = $("#KCH_XXSE"+fwlc[i]);
			
			removeReadonlyByObj(col_1_obj);
			removeReadonlyByObj(col_2_obj);
			removeReadonlyByObj(col_3_obj);
			removeReadonlyByObj(col_4_obj);
			removeReadonlyByObj(col_5_obj);
			removeReadonlyByObj(col_6_obj);
			removeReadonlyByObj(col_7_obj);
			removeReadonlyByObj(col_8_obj);
			removeReadonlyByObj(col_12_obj);
			removeReadonlyByObj(col_14_obj);
		}
	}
	
}

function removeReadonlyByObj(tmpObj)
{
	$(tmpObj).removeClass();
	$(tmpObj).addClass("money");
	
	//移除只读
	$(tmpObj).removeAttr("readonly");
	//设置input样式
	$(tmpObj).css({ border: "2px inset #FFFFFF", backgroundColor: "#FFFFFF" });
}

function addReadonlyByObj(tmpObj)
{
	//设置只读
	$(tmpObj).attr("readonly", "readonly");
	
	//设置只读样式
	$(tmpObj).css({ border: 0, backgroundColor: "#E8ECE8" });
}

/********************************end************************************/
/*输入框限制输入字符*/
function checknum(){
	var codeValue = event.keyCode;
	if((codeValue>=96&&codeValue<=105) || (codeValue>=37&&codeValue<=40) || (codeValue>=48 && codeValue<=57) || codeValue==189 || codeValue==190|| codeValue==8 || codeValue==110){
		
	}else{
		event.returnValue = false;
	}
}
/*修改保存时事件*/
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
/*新增时保存按钮事件*/
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
/*删除按钮事件*/
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