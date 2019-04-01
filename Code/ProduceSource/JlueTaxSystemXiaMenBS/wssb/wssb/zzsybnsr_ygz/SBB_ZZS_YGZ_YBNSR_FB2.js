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
		if($.trim($(this).attr("class"))=='input_integer_readonly'||$.trim($(this).attr("class"))=='integer'||$.trim($(this).attr("class"))=='money'||$.trim($(this).attr("class"))=='input_money_readonly'){
			unformatCurrency(inputTd[i]);
			checkinputdata(inputTd[i]);
		}
	});
}
/*************************************************************************************/
//加载页面的时候
function onloadValue (){
	
	unformatValue_SBB();
	
	//其他扣税凭证 --份数    1=2+3  
	 $("#SBDK_FS_1").val(parseFloat($("#SBDK_FS_2").val()) + parseFloat($("#SBDK_FS_3").val()));
	//其他扣税凭证 --份数    1=2+3  
	 $("#SBDK_JE_1").val(parseFloat($("#SBDK_JE_2").val()) + parseFloat($("#SBDK_JE_3").val()));
	//其他扣税凭证 --份数    1=2+3  
	 $("#SBDK_SE_1").val(parseFloat($("#SBDK_SE_2").val()) + parseFloat($("#SBDK_SE_3").val()));
	//其他扣税凭证 --份数    4=5+6+7+8b  
	 $("#SBDK_FS_4").val(parseFloat($("#SBDK_FS_5").val()) + parseFloat($("#SBDK_FS_6").val())+ parseFloat($("#SBDK_FS_7").val())+ parseFloat($("#SBDK_FS_8").val()));
	//其他扣税凭证 --金额 4=5+6+7+8b
    $("#SBDK_JE_4").val(parseFloat($("#SBDK_JE_5").val()) + parseFloat($("#SBDK_JE_6").val())+ parseFloat($("#SBDK_JE_7").val())+ parseFloat($("#SBDK_JE_8").val()));
	//其他扣税凭证 -- 税额 4=5+6+7+8a+8b     第4栏“（二）其他扣税凭证”：其计算公式调整为4=5+6+7+8a+8b    by    wxf     20170705
    $("#SBDK_SE_4").val(parseFloat($("#SBDK_SE_5").val()) + parseFloat($("#SBDK_SE_6").val())+ parseFloat($("#SBDK_SE_7").val()) + parseFloat($("#SBDK_SE_37").val()) + parseFloat($("#SBDK_SE_8").val()));
	//当期申报抵扣进项税额合计 ---份数   12=1+4-9
    $("#SBDK_FS_12").val(parseFloat($("#SBDK_FS_1").val()) + parseFloat($("#SBDK_FS_4").val()) - parseFloat($("#SBDK_FS_9").val()));
	//当期申报抵扣进项税额合计 ---金额   12=1+4-9
    $("#SBDK_JE_12").val(parseFloat($("#SBDK_JE_1").val()) + parseFloat($("#SBDK_JE_4").val()) - parseFloat($("#SBDK_JE_9").val())); 	
	//当期申报抵扣进项税额合计 ---税额   12=1+4-9+10+11
    $("#SBDK_SE_12").val(parseFloat($("#SBDK_SE_1").val()) + parseFloat($("#SBDK_SE_4").val()) - parseFloat($("#SBDK_SE_9").val()) + parseFloat($("#SBDK_SE_10").val())  + parseFloat($("#SBDK_SE_11").val()));
		
	//本期进项税转出额-- 税额  13=14至23之和
    $("#JXZC_SE_13").val(parseFloat($("#JXZC_SE_14").val()) + parseFloat($("#JXZC_SE_15").val())+ 
												 parseFloat($("#JXZC_SE_16").val()) + parseFloat($("#JXZC_SE_17").val())+
												 parseFloat($("#JXZC_SE_18").val()) + parseFloat($("#JXZC_SE_19").val())+ 
												 parseFloat($("#JXZC_SE_20").val()) + parseFloat($("#JXZC_SE_21").val())+ 
												 parseFloat($("#JXZC_SE_22").val()) + parseFloat($("#JXZC_SE_23").val()))
	   // 本期认证相符且本期未申报抵扣	--	份数    26=35-2 								 
		$("#DDKJ_FS_26").val(parseFloat($("#QT_FS_35").val()) - parseFloat($("#SBDK_FS_2").val()));
	   // 本期认证相符且本期未申报抵扣	--	金额    26=35-2 								 
		$("#DDKJ_JE_26").val(parseFloat($("#QT_JE_35").val()) - parseFloat($("#SBDK_JE_2").val()));
		// 本期认证相符且本期未申报抵扣	--	税额    26=35-2 								 
		$("#DDKJ_SE_26").val(parseFloat($("#QT_SE_35").val()) - parseFloat($("#SBDK_SE_2").val()));
		
		
//原需求公式错误，对照旧申报表，公式应为：25+26-3
		// 期末已认证相符但未申报抵扣  --	份数   27=25+26-3 		
		$("#DDKJ_FS_27").val(parseFloat($("#DDKJ_FS_25").val()) + parseFloat($("#DDKJ_FS_26").val()) - parseFloat($("#SBDK_FS_3").val()));
		// 期末已认证相符但未申报抵扣  --	金额  27=25+26-1 
		$("#DDKJ_JE_27").val(parseFloat($("#DDKJ_JE_25").val()) + parseFloat($("#DDKJ_JE_26").val()) - parseFloat($("#SBDK_JE_3").val()));
		// 期末已认证相符但未申报抵扣  --	税额   27=25+26-1 		
		$("#DDKJ_SE_27").val(parseFloat($("#DDKJ_SE_25").val()) + parseFloat($("#DDKJ_SE_26").val()) - parseFloat($("#SBDK_SE_3").val()));
		//其他扣税凭证-- 份数  29=30至33之和   
		$("#DDKJ_FS_29").val(parseFloat($("#DDKJ_FS_30").val()) + parseFloat($("#DDKJ_FS_31").val()) + parseFloat($("#DDKJ_FS_32").val())+ parseFloat($("#DDKJ_FS_33").val()));
		//其他扣税凭证-- 金额  29=30至33之和   
		$("#DDKJ_JE_29").val(parseFloat($("#DDKJ_JE_30").val()) + parseFloat($("#DDKJ_JE_31").val()) + parseFloat($("#DDKJ_JE_32").val())+ parseFloat($("#DDKJ_JE_33").val()));
		//其他扣税凭证-- 税额  29=30至33之和   
		$("#DDKJ_SE_29").val(parseFloat($("#DDKJ_SE_30").val()) + parseFloat($("#DDKJ_SE_31").val()) + parseFloat($("#DDKJ_SE_32").val())+ parseFloat($("#DDKJ_SE_33").val()));
		
		if(parseFloat($("#DDKJ_FS_26").val()) < 0)
			$("#DDKJ_FS_26").val(0);
		if(parseFloat($("#DDKJ_JE_26").val()) < 0)
			$("#DDKJ_JE_26").val(0.00) ;
		if(parseFloat($("#DDKJ_SE_26").val()) < 0)
			$("#DDKJ_SE_26").val(0.00);
			
		if(parseFloat($("#DDKJ_FS_27").val()) < 0)
			$("#DDKJ_FS_27").val(0);
		if(parseFloat($("#DDKJ_JE_27").val()) < 0)
			$("#DDKJ_JE_27").val(0.00);
		if(parseFloat($("#DDKJ_SE_27").val()) < 0)
			$("#DDKJ_SE_27").val(0.00);

		// 本期认证相符且本期申报抵扣	--	份数    2=35-26   --20160309 								 
		$("#SBDK_FS_2").val(parseFloat($("#QT_FS_35").val()) - parseFloat($("#DDKJ_FS_26").val()));
	   // 本期认证相符且本期未申报抵扣	--	金额    26=35-2 								 
		$("#SBDK_JE_2").val(parseFloat($("#QT_JE_35").val()) - parseFloat($("#DDKJ_JE_26").val()));
		// 本期认证相符且本期未申报抵扣	--	税额    26=35-2 								 
		$("#SBDK_SE_2").val(parseFloat($("#QT_SE_35").val()) - parseFloat($("#DDKJ_SE_26").val()));
		formatValue_SBB();
}
function changeValue(obj,par){
	
	unformatValue_SBB();
	// 本期认证相符且本期申报抵扣	--	份数    2=35-26   --20160309 								 
	$("#SBDK_FS_2").val(parseFloat($("#QT_FS_35").val()) - parseFloat($("#DDKJ_FS_26").val()));
   // 本期认证相符且本期未申报抵扣	--	金额    26=35-2 								 
	$("#SBDK_JE_2").val(parseFloat($("#QT_JE_35").val()) - parseFloat($("#DDKJ_JE_26").val()));
	// 本期认证相符且本期未申报抵扣	--	税额    26=35-2 								 
	$("#SBDK_SE_2").val(parseFloat($("#QT_SE_35").val()) - parseFloat($("#DDKJ_SE_26").val()));

	//认证相符的税控增值税专用发票 --份数 1=2+3  
	//if(par=="SBDK_FS_2"||par=="SBDK_FS_3"){
		
		$("#SBDK_FS_1").val(parseFloat($("#SBDK_FS_2").val()) + parseFloat($("#SBDK_FS_3").val()));
		//当期申报抵扣进项税额合计 ---份数   12=1+4-9+10+11	
		$("#SBDK_FS_12").val(parseFloat($("#SBDK_FS_1").val()) + parseFloat($("#SBDK_FS_4").val())-parseFloat($("#SBDK_FS_9").val()));
		//  本期认证相符且本期未申报抵扣    26=35-2
		$("#DDKJ_FS_26").val(parseFloat($("#QT_FS_35").val()) - parseFloat($("#SBDK_FS_2").val()));


//		// 期末已认证相符但未申报抵扣  --	份数   27=25+26-3 		
		$("#DDKJ_FS_27").val(parseFloat($("#DDKJ_FS_25").val()) + parseFloat($("#DDKJ_FS_26").val()) - parseFloat($("#SBDK_FS_3").val()));

		if(parseFloat($("#DDKJ_FS_26").val()) < 0)
			$("#DDKJ_FS_26").val(0);
		if(parseFloat($("#DDKJ_FS_27").val()) < 0)
			$("#DDKJ_FS_27").val(0);
			
	//}
	//认证相符的税控增值税专用发票 -- 金额1=2+3    
	//if(par.indexOf("SBDK_JE_2")>=0 ||par.indexOf("SBDK_JE_3")>=0){
		
		$("#SBDK_JE_1").val(parseFloat($("#SBDK_JE_2").val()) + parseFloat($("#SBDK_JE_3").val()));
		//当期申报抵扣进项税额合计 ---金额   12=1+4-9+10+11	
		$("#SBDK_JE_12").val(parseFloat($("#SBDK_JE_1").val()) + parseFloat($("#SBDK_JE_4").val()) - parseFloat($("#SBDK_JE_9").val()));	
	//  本期认证相符且本期未申报抵扣    26=35-2
		$("#DDKJ_JE_26").val(parseFloat($("#QT_JE_35").val()) - parseFloat($("#SBDK_JE_2").val()));


//			// 期末已认证相符但未申报抵扣  --	金额  27=25+26-3 		
			$("#DDKJ_JE_27").val(parseFloat($("#DDKJ_JE_25").val()) + parseFloat($("#DDKJ_JE_26").val()) - parseFloat($("#SBDK_JE_3").val()));

		if(parseFloat($("#DDKJ_JE_26").val()) < 0)
			$("#DDKJ_JE_26").val(0.00);
		if(parseFloat($("#DDKJ_JE_27").val()) < 0)
			$("#DDKJ_JE_27").val(0.00);
	//}
	//认证相符的税控增值税专用发票 -- 税额 1=2+3  
	//if(par.indexOf("SBDK_SE_2")>=0 ||par.indexOf("SBDK_SE_3")>=0){
		$("#SBDK_SE_1").val(parseFloat($("#SBDK_SE_2").val()) + parseFloat($("#SBDK_SE_3").val()));
		//当期申报抵扣进项税额合计 ---税额   12=1+4-9+10+11	
		$("#SBDK_SE_12").val(parseFloat($("#SBDK_SE_1").val()) + parseFloat($("#SBDK_SE_4").val()) -parseFloat($("#SBDK_SE_9").val())+parseFloat($("#SBDK_SE_10").val())+ parseFloat($("#SBDK_SE_11").val()));
	//  本期认证相符且本期未申报抵扣    26=35-2
		$("#DDKJ_SE_26").val(parseFloat($("#QT_SE_35").val()) - parseFloat($("#SBDK_SE_2").val()));


//			// 期末已认证相符但未申报抵扣  --税额   27=25+26-1 		
		$("#DDKJ_SE_27").val(parseFloat($("#DDKJ_SE_25").val()) + parseFloat($("#DDKJ_SE_26").val()) - parseFloat($("#SBDK_SE_3").val()));

		if(parseFloat($("#DDKJ_SE_26").val()) < 0)
			$("#DDKJ_SE_26").val(0.00);
		if(parseFloat($("#DDKJ_SE_27").val()) < 0)
			$("#DDKJ_SE_27").val(0.00);
	//}
	//其他扣税凭证--份数 4=5+6+7+8b  
	if(par=="SBDK_FS_5" ||par=="SBDK_FS_6" ||par=="SBDK_FS_7" ||par=="SBDK_FS_8"){
		$("#SBDK_FS_4").val(parseFloat($("#SBDK_FS_5").val()) + parseFloat($("#SBDK_FS_6").val()) + parseFloat($("#SBDK_FS_7").val())+ parseFloat($("#SBDK_FS_8").val()));
		//当期申报抵扣进项税额合计 ---份数   12=1+4-9+10+11	
		$("#SBDK_FS_12").val( parseFloat($("#SBDK_FS_1").val()) + parseFloat($("#SBDK_FS_4").val())-parseFloat($("#SBDK_FS_9").val()));
	}
	//其他扣税凭证--金额   4=5+6+7+8b     
	if(par=="SBDK_JE_5"||par=="SBDK_JE_6" ||par=="SBDK_JE_7" ||par=="SBDK_JE_8"){
		$("#SBDK_JE_4").val( parseFloat($("#SBDK_JE_5").val()) + parseFloat($("#SBDK_JE_6").val()) + parseFloat($("#SBDK_JE_7").val())+ parseFloat($("#SBDK_JE_8").val()));
		//当期申报抵扣进项税额合计 ---金额   12=1+4-9+10+11	
		$("#SBDK_JE_12").val( parseFloat($("#SBDK_JE_1").val()) + parseFloat($("#SBDK_JE_4").val())-parseFloat($("#SBDK_JE_9").val()));	
	}
	//其他扣税凭证-- 税额   4=5+6+7+8a+8b     第4栏“（二）其他扣税凭证”：其计算公式调整为4=5+6+7+8a+8b    by    wxf     20170705
	if(par=="SBDK_SE_5" ||par=="SBDK_SE_6" ||par=="SBDK_SE_7" ||par=="SBDK_SE_8" ||par=="SBDK_SE_37"){
		$("#SBDK_SE_4").val( parseFloat($("#SBDK_SE_5").val()) + parseFloat($("#SBDK_SE_6").val()) + parseFloat($("#SBDK_SE_7").val()) + parseFloat($("#SBDK_SE_37").val()) + parseFloat($("#SBDK_SE_8").val()));
		//当期申报抵扣进项税额合计 ---税额   12=1+4-9+10+11	
		$("#SBDK_SE_12").val( parseFloat($("#SBDK_SE_1").val()) + parseFloat($("#SBDK_SE_4").val()) - parseFloat($("#SBDK_SE_9").val()) + parseFloat($("#SBDK_SE_10").val())+ parseFloat($("#SBDK_SE_11").val()));		
	}
	/////////////////////////////add by zwx 20160518///////////////////////////////////////
    //if(par.indexOf("SBDK_FS_9")>=0){
		
		//当期申报抵扣进项税额合计 ---金额   12=1+4-9+10+11	
		$("#SBDK_FS_12").val( parseFloat($("#SBDK_FS_1").val()) + parseFloat($("#SBDK_FS_4").val()) - parseFloat($("#SBDK_FS_9").val()));	
	//}
	//if(par.indexOf("SBDK_JE_9")>=0){
			
			//当期申报抵扣进项税额合计 ---金额   12=1+4-9+10+11	
			$("#SBDK_JE_12").val( parseFloat($("#SBDK_JE_1").val()) + parseFloat($("#SBDK_JE_4").val()) - parseFloat($("#SBDK_JE_9").val()));	
	//}
	//if(par.indexOf("SBDK_SE_9")>=0){
		
		//当期申报抵扣进项税额合计 ---金额   12=1+4-9+10+11	
		$("#SBDK_SE_12").val(parseFloat($("#SBDK_SE_1").val()) + parseFloat($("#SBDK_SE_4").val()) - parseFloat($("#SBDK_SE_9").val()) + parseFloat($("#SBDK_SE_10").val())+ parseFloat($("#SBDK_SE_11").val()));
	//}
	//if(par.indexOf("SBDK_SE_10")>=0){
			
			//当期申报抵扣进项税额合计 ---金额   12=1+4-9+10+11	
			$("#SBDK_SE_12").val( parseFloat($("#SBDK_SE_1").val()) + parseFloat($("#SBDK_SE_4").val()) - parseFloat($("#SBDK_SE_9").val()) + parseFloat($("#SBDK_SE_10").val())+ parseFloat($("#SBDK_SE_11").val()));
	//	}
	//if(par.indexOf("SBDK_SE_11")>=0){
		
		//当期申报抵扣进项税额合计 ---金额   12=1+4-9+10+11	
		$("#SBDK_SE_12").val( parseFloat($("#SBDK_SE_1").val()) + parseFloat($("#SBDK_SE_4").val()) - parseFloat($("#SBDK_SE_9").val()) + parseFloat($("#SBDK_SE_10").val())+ parseFloat($("#SBDK_SE_11").val()));
	//}
	////////////////////////////////////end//////////////////////////////////////
	 
	
	//本期进项税转出额-- 税额  13=14至23之和
	if(par=="JXZC_SE_14" ||par=="JXZC_SE_15" ||par=="JXZC_SE_16" ||par=="JXZC_SE_17"
	   ||par=="JXZC_SE_18" ||par=="JXZC_SE_19" ||par=="JXZC_SE_20" ||par=="JXZC_SE_21"
	   ||par=="JXZC_SE_22" ||par=="JXZC_SE_23") {
		$("#JXZC_SE_13").val(parseFloat($("#JXZC_SE_14").val()) + parseFloat($("#JXZC_SE_15").val())+ 
											 parseFloat($("#JXZC_SE_16").val()) + parseFloat($("#JXZC_SE_17").val())+
											 parseFloat($("#JXZC_SE_18").val()) + parseFloat($("#JXZC_SE_19").val())+ 
											 parseFloat($("#JXZC_SE_20").val()) + parseFloat($("#JXZC_SE_21").val())+ 
											 parseFloat($("#JXZC_SE_22").val()) + parseFloat($("#JXZC_SE_23").val()));
	}
	//其他扣税凭证-- 份数  29=30至33之和   
	if(par=="DDKJ_FS_30" ||par=="DDKJ_FS_31" ||par=="DDKJ_FS_32" ||par=="DDKJ_FS_33"){
		$("#DDKJ_FS_29").val(parseFloat($("#DDKJ_FS_30").val()) + parseFloat($("#DDKJ_FS_31").val()) + parseFloat($("#DDKJ_FS_32").val())+ parseFloat($("#DDKJ_FS_33").val()));
	}
	//其他扣税凭证-- 金额  29=30至33之和   
	if(par=="DDKJ_JE_30" ||par=="DDKJ_JE_31" ||par=="DDKJ_JE_32" ||par=="DDKJ_JE_33"){
		$("#DDKJ_JE_29").val(parseFloat($("#DDKJ_JE_30").val()) + parseFloat($("#DDKJ_JE_31").val()) + parseFloat($("#DDKJ_JE_32").val())+ parseFloat($("#DDKJ_JE_33").val()));
	}
	//其他扣税凭证-- 税额  29=30至33之和   
	if(par=="DDKJ_SE_30" ||par=="DDKJ_SE_31" ||par=="DDKJ_SE_32" ||par=="DDKJ_SE_33"){
		$("#DDKJ_SE_29").val( parseFloat($("#DDKJ_SE_30").val()) + parseFloat($("#DDKJ_SE_31").val()) + parseFloat($("#DDKJ_SE_32").val())+ parseFloat($("#DDKJ_SE_33").val()));
	}


	 // 期末已认证相符但未申报抵扣  --	份数   27=25+26-3 		
		if(par=="DDKJ_FS_26"){
			$("#DDKJ_FS_27").val(parseFloat($("#DDKJ_FS_25").val()) + parseFloat($("#DDKJ_FS_26").val()) - parseFloat($("#SBDK_FS_3").val()));
			if(parseFloat($("#DDKJ_FS_27").val()) < 0)
				$("#DDKJ_FS_27").val(0.00);
		}
		 // 期末已认证相符但未申报抵扣  --	金额  27=25+26-1 		
		if(par=="DDKJ_JE_26"){
			$("#DDKJ_JE_27").val(parseFloat($("#DDKJ_JE_25").val()) + parseFloat($("#DDKJ_JE_26").val()) - parseFloat($("#SBDK_JE_3").val()));
			if(parseFloat($("#DDKJ_JE_27").val()) < 0)
				$("#DDKJ_JE_27").val(0.00);
		}
		 // 期末已认证相符但未申报抵扣  --税额   27=25+26-1 		
		if(par=="DDKJ_SE_26"){
			$("#DDKJ_SE_27").val( parseFloat($("#DDKJ_SE_25").val()) + parseFloat($("#DDKJ_SE_26").val()) - parseFloat($("#SBDK_SE_3").val()));
			if(parseFloat($("#DDKJ_SE_27").val()) < 0)
				$("#DDKJ_SE_27").val(0.00);
		}
		
		formatValue_SBB();
	
}

//格式化
function newFormatAll(){
	formatValue_SBB();
} 

function checkValue(){
	unformatValue_SBB();
	//2<=35
	if(parseFloat($("#SBDK_FS_2").val()) > parseFloat($("#QT_FS_35").val()))
	{
		  alert("第2栏的份数不能大于第35栏的份数");
		  newFormatAll();
		  return false;
	} 
//	//26=35-2   20121201 取消这三栏次的验证
	if((parseFloat($("#QT_FS_35").val()) - parseFloat($("#SBDK_FS_2").val())) != parseFloat($("#DDKJ_FS_26").val()))
	{
	  alert("您输入的数值不符合( 第26栏抵扣份数 = 第35栏 发票份数   - 第2栏抵扣份数 ),请检查这三栏的值!");
	  newFormatAll();
	  return false;
	}
	//2=35-26  如果是辅导期纳税人，则第2栏份数/金额/税额 =35-26，且第2栏必须为0 。20170425  cyueyun
	if ($("#fdqFlag").val() =="1") {
		var tempValue = 0;
		var colName = ["FS","JE","SE"];
		var colZhName = ["份数","金额","税额"];
		for(var i=0;i<colName.length;i++){
			tempValue = parseFloat($("#QT_"+colName[i]+"_35").val()) - parseFloat($("#DDKJ_"+colName[i]+"_26").val());
			if( (tempValue != parseFloat($("#SBDK_"+colName[i]+"_2").val()))||tempValue !=0)
			{
			  alert("您输入的数值不符合(您是辅导期一般纳税人，第2栏"+colZhName[i]+"需要= 第35栏"+colZhName[i]+"-第26栏"+colZhName[i]+"，且第2栏必须为0),请检查这三栏的值!");
			  newFormatAll();
			  return false;
			}
		}
	}
	
	//如果是辅导期企业则验证此规则，否则要验证35栏=第2栏
	//27=25+26-3
	if ($("#fdqFlag").val() =="0") {
		if ( parseFloat($("#DDKJ_FS_27").val()) >0) { 
			if(((parseFloat($("#DDKJ_FS_25").val()) + parseFloat($("#DDKJ_FS_26").val()) -parseFloat($("#SBDK_FS_3").val())).toFixed(2)) != parseFloat($("#DDKJ_FS_27").val()).toFixed(2))
			{
				alert("您输入的数值不符合(第27栏 抵扣份数 = 第25栏份数 + 第26栏份数 - 第3栏份数) ,请检查这四栏的值");
				newFormatAll();
			  return false;
			} 
		}
	}
//	//28≤27
	if(parseFloat($("#DDKJ_FS_28").val()) > parseFloat($("#DDKJ_FS_27").val()))
	{
	  alert("您输入的数值不符合( 第28栏  按照税法规定不允许抵扣份数   应小于 或者 等于   第27栏期末已认证相符但未申报抵扣份数,请检查这两栏的值!");
	  newFormatAll();
	  return false;
	} 
	//-----------------------------
	//2<=35
	if(parseFloat($("#SBDK_JE_2").val()) > parseFloat($("#QT_JE_35").val()))
	{
		  alert("第2栏的金额不能大于第35栏的金额");
		  newFormatAll();
		  return false;
	} 
	
//	//26=35-2  	取消这三栏次的验证
	if((parseFloat($("#QT_JE_35").val()) - parseFloat($("#SBDK_JE_2").val())).toFixed(2) != parseFloat($("#DDKJ_JE_26").val()).toFixed(2))
	{
	  alert("您输入的数值不符合(第26栏抵扣金额 = 第35栏发票金额   - 第2栏抵扣金额 ),请检查这三栏的值!");
	  newFormatAll();
	  return false;
	} 
//	//如果是辅导期企业，则验证这个
//	//27=25+26-3
	if ($("#fdqFlag").val() =="0") {
		if (parseFloat($("#DDKJ_JE_27").val()) >0) { 
			if(((parseFloat($("#DDKJ_JE_25").val()) + parseFloat($("#DDKJ_JE_26").val()) -parseFloat($("#SBDK_JE_3").val())).toFixed(2)) != parseFloat($("#DDKJ_JE_27").val()).toFixed(2))
			{
				alert("您输入的数值不符合( 第27栏 报抵扣金额 = 第25栏 抵扣金额   + 第26栏抵扣金额 - 第3栏发票金额),请检查这四栏的值");
				newFormatAll();
			  return false;
			} 
		}
	}
//	//28≤27
	if(parseFloat($("#DDKJ_JE_28").val()) > parseFloat($("#DDKJ_JE_27").val()))
	{
	  alert("您输入的数值不符合( 第28栏  按照税法规定不允许抵扣金额  应 小于 或者 等于   第27栏期末已认证相符但未申报抵扣金额),请检查这两栏的值!");
	  newFormatAll();
	  return false;
	} 
	//-----------------------------
	//2<=35
	if(parseFloat($("#SBDK_SE_2").val()) > parseFloat($("#QT_SE_35").val()))
	{
		  alert("第2栏的税额不能大于第35栏的税额");
		  newFormatAll();
		  return false;
	} 
	
//	//26=35-2
	if((parseFloat($("#QT_SE_35").val()) - parseFloat($("#SBDK_SE_2").val())).toFixed(2) != parseFloat($("#DDKJ_SE_26").val()).toFixed(2))
	{
	  alert("您输入的数值不符合(第26栏抵扣税额 = 第35栏发票税额  - 第2栏抵扣税额),请检查这三栏的值!");
	  newFormatAll();
	  return false;
	} 
	
	if ($("#fdqFlag").val() =="0") {
//	//27=25+26-1
		if (parseFloat($("#DDKJ_SE_27").val()) >0) { 
			if(((parseFloat($("#DDKJ_SE_25").val()) + parseFloat($("#DDKJ_SE_26").val()) -parseFloat($("#SBDK_SE_3").val())).toFixed(2)) != parseFloat($("#DDKJ_SE_27").val()).toFixed(2))
			{
				alert("您输入的数值不符合(第27栏 抵扣税额 = 第25栏  抵扣税额    + 第26栏抵扣税额   - 第3栏发票税额 )请检查这四栏的值");
				newFormatAll();
			  return false;
			} 
		}
	}
//	//28≤27
	if(parseFloat($("#DDKJ_SE_28").val()) > parseFloat($("#DDKJ_SE_27").val()))
	{
	  alert("您输入的数值不符合( 第28栏  按照税法规定不允许抵扣税额   应小于 或者 等于   第27栏期末已认证相符但未申报抵扣税额),请检查这两栏的值!");
	  newFormatAll();
	  return false;
	}
	
	//13不能小于0
	if(parseFloat($("#JXZC_SE_13").val())< 0)
	{
	  alert("本期进项税转出额 不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	
	//14不能小于0
	if(parseFloat($("#JXZC_SE_14").val())< 0)
	{
	  alert("第14栏  其中：免税项目用不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//15不能小于0
	if(parseFloat($("#JXZC_SE_15").val())< 0)
	{
	  alert("第15栏  非应税项目用、集体福利、个人消费  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//16不能小于0
	if(parseFloat($("#JXZC_SE_16").val())< 0)
	{
	  alert("第16栏    非正常损失  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//17不能小于0
	if(parseFloat($("#JXZC_SE_17").val())< 0)
	{
	  alert("第17栏  简易计税方法征税项目用  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//18不能小于0
	if(parseFloat($("#JXZC_SE_18").val())< 0)
	{
	  alert("第18栏  免抵退税办法不得抵扣的进项税额   不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//19不能小于0
	if(parseFloat($("#JXZC_SE_19").val())< 0)
	{
	  alert("第19栏   纳税检查调减进项税额  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//20不能小于0
	if(parseFloat($("#JXZC_SE_20").val())< 0)
	{
	  alert("第20栏     红字专用发票通知单注明的进项税额  不允许小于0!");
	  newFormatAll();
	  return false;
	}  
	//21不能小于0
	if(parseFloat($("#JXZC_SE_21").val())< 0)
	{
	  alert("第21栏     上期留抵税额抵减欠税  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//22不能小于0
	if(parseFloat($("#JXZC_SE_22").val())< 0)
	{
	  alert("第22栏  上期留抵税额退税  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//23不能小于0
	if(parseFloat($("#JXZC_SE_23").val())< 0)
	{
	  alert("第23栏    其他应作进项税额转出的情形  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//26不能小于0
	if(parseFloat($("#DDKJ_FS_26").val())< 0)
	{
	  alert("第26栏   期末已认证相符但未申报抵扣份数 不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	
	//27不能小于0
	if(parseFloat($("#DDKJ_FS_27").val())< 0)
	{
	  alert("第27栏   期末已认证相符但未申报抵扣份数  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//26不能小于0
	if(parseFloat($("#DDKJ_JE_26").val())< 0)
	{
	  alert("第26栏   期末已认证相符但未申报抵扣金额 不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	
	//27不能小于0
	if(parseFloat($("#DDKJ_JE_27").val())< 0)
	{
	  alert("第27栏   期末已认证相符但未申报抵扣金额  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//26不能小于0
	if(parseFloat($("#DDKJ_SE_26").val())< 0)
	{
	  alert("第26栏   期末已认证相符但未申报抵扣税额 不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	
	//27不能小于0
	if(parseFloat($("#DDKJ_SE_27").val())< 0)
	{
	  alert("第27栏   期末已认证相符但未申报抵扣税额  不允许小于0!");
	  newFormatAll();
	  return false;
	} 
	//0≤本栏“金额” ≤第1栏+第4栏“金额”    by  wxf  20170705
	var je9=parseFloat($("#SBDK_JE_9").val());
	
	var je1and4=parseFloat($("#SBDK_JE_1").val())+parseFloat($("#SBDK_JE_4").val());
	if(je9< 0||je9>je1and4)
	{
	  alert("第9栏    本期用于购建不动产的扣税凭证  金额不允许小于0 且 必须小于等于第1栏  认证相符的增值税专用发票和第4栏   其他扣税凭证金额之和!");
	  newFormatAll();
	  return false;
	}
	//0≤本栏“税额” ≤第1栏+第4栏“税额”    by  wxf  20170705
	var se9=parseFloat($("#SBDK_SE_9").val());
	var se1and4=parseFloat($("#SBDK_SE_1").val())+parseFloat($("#SBDK_SE_4").val());
	if(se9< 0||se9>je1and4)
	{
	  alert("第9栏    本期用于购建不动产的扣税凭证  税额不允许小于0 且 必须小于等于第1栏  认证相符的增值税专用发票  和第4栏  其他扣税凭证税额之和!");
	  newFormatAll();
	  return false;
	}
	//增加验证0≤第9栏本栏“份数” <第1栏+第4栏“份数”   20170428 cyueyun
	var je9=parseFloat($("#SBDK_FS_9").val());
	var je1and4=parseFloat($("#SBDK_FS_1").val())+parseFloat($("#SBDK_FS_4").val());
	if(je9< 0||je9>je1and4)
	{
	  alert("第9栏    本期用于购建不动产的扣税凭证  份数不允许小于0 且 必须小于等于第1栏  认证相符的增值税专用发票和第4栏  其他扣税凭证份数之和!");
	  newFormatAll();
	  return false;
	}
	
	
	var se7=parseFloat($("#SBDK_SE_7").val());
	
	var se36=parseFloat($("#QT_SE_36").val());
	if(se7<0||se7>se36){
		alert("第7栏    代扣代缴税收缴款凭证  税额不允许小于0 且 必须小于第36栏  代扣代缴税额  税额!");
		newFormatAll();
		  return false;
	}
	
	//取消下面的此校验（当纳税人为非农产品核定扣除企业时，该栏为纳税人填写，校验关系为该栏“税额”列数值≦附表二第6栏“税额”列/0.11*0.02）    by     wxf     20170720
	var je6=parseFloat($("#SBDK_JE_6").val());
	var se6=parseFloat($("#SBDK_SE_6").val());
	var je8=parseFloat($("#SBDK_JE_8").val());
	var se8=parseFloat($("#SBDK_SE_8").val());
	var se37=parseFloat($("#SBDK_SE_37").val());
	
	var fs5 = parseFloat($("#SBDK_FS_5").val());
	var je5 = parseFloat($("#SBDK_JE_5").val());
	var se5 = parseFloat($("#SBDK_SE_5").val());
	var se1 = parseFloat($("#SBDK_SE_1").val());
	var je1 = parseFloat($("#SBDK_JE_1").val());
	
	//纳税人为非农产品核定扣除企业时，附表二第8a栏“税额”列数值要≥0并且≦附表二第1，5，6栏“税额”列的合计/0.11*0.02   by   wxf   20170925
	/**
	 * 关于调整增值税一般纳税人网上申报需求的报告2018年5月版 20180510 by YHQ:
	 * 第8a栏“加计扣除农产品进项税额”：
	 * （1）当纳税人为农产品核定扣除企业时，该栏关闭，不可填写。
	 * （2）当纳税人为非农产品核定扣除企业时，该栏为纳税人填写。
	 * 修改表内校验关系：该栏税额列的值必须大于等于0且小于等于第1、5、6栏的金额列的合计乘0.02。
	 */
	if ($("#NcpFlag").val() =="0") {
		//if(se37>formatPoint(((((se1+se5+se6)*100/11)*2/100)+0.1),2) || se37<0){
		if(se37>formatPoint((((je1+je5+je6)*2/100)+0.1),2) || se37<0){
			alert("您为“非农产品核定扣除企业”，第8a栏“加计扣除农产品进项税额”的税额必须大于等于0且小于等于第1、5、6栏的金额列的合计乘0.02！");
			newFormatAll();
			  return false;
		}
	}
	
	//“第8b栏’税额’列数值≦该栏’金额’列*0.11”   by     wxf      20170705
	if(se8>formatPoint((je8*11/100),2)){
		alert("第8b栏“其他”的税额必须小于等于该栏金额乘0.11！");
		newFormatAll();
		  return false;
	}
	
	//第6栏的税额要等于其金额乘0.11   by     wxf      20170719
	/**
	 * 关于调整增值税一般纳税人网上申报需求的报告2018年5月版 20180510 by YHQ:
	 *  第6栏“农产品收购发票或者销售发票”：
	 * （1）当纳税人为农产品核定扣除企业时，保持原有方式及校验。
	 * （2）当纳税人为非农产品核定扣除企业时，该栏为纳税人填写。
	 *  该栏“税额”列，修改该栏的校验关系：将原有“该栏数值=该栏’金额’列*0.11”调整为“该栏’金额’列*0.10≤该栏数值≤该栏’金额’列*0.11。”
	 */
	if($("#NcpFlag").val() =="0"){//非农产品核定企业
		if(se6<formatPoint((je6*10/100-0.1),2)||se6>formatPoint((je6*11/100+0.1),2)){
			alert("第6栏“农产品收购发票或者销售发票”的税额必须大于等于该栏金额乘0.1并且小于等于该栏金额乘0.11！");
			newFormatAll();
			  return false;
		}
	}
	
	if(se5 != 0){
		//第5栏的税额有值时，份数不允许为0    by   wxf    20170918
		if(fs5 == 0){
			alert("第5栏“海关进口增值税专用缴款书”的税额有值时，其份数不允许为0！");
			newFormatAll();
			  return false;
		}
		//第5栏的税额有值时，金额需要填在最大值【税额/0.06】和最小值【税额/0.17】的区间内（误差10块钱；最大值加十块钱，最小值减十块钱）   by   wxf   20170918
		if(je5 > formatPoint((se5*100/6)+10,2) || je5 < formatPoint((se5*100/17)-10,2)){
			alert("第5栏“海关进口增值税专用缴款书”的金额要小于等于其税额除以0.06后加10的值并且大于其税额除以0.17后减10的值！");
			newFormatAll();
			  return false;
		}
	}

	newFormatAll();
	return true;
}

/*小曾提出：当增值税一般纳税人申报表附表二“三、待抵扣进项税额”栏次填写非零数据时，
  增加提示：“此部分数据主要反映：1.辅导期一般纳税人或其他需稽核比对项目的数据；2.出口外贸企业待退税的数据。请认真核实填写，以免造成损失！”
  by    wxf     20171108*/
var countArr = new Array(0,0,0,0,0,0,0,0,0,0);
function checkValue2(obj){

	var count = countArr[obj - 25];
	if(parseFloat($("#DDKJ_SE_"+i).val()) != 0){
		if(count == 0){
			alert("此部分数据主要反映：1.辅导期一般纳税人或其他需稽核比对项目的数据；2.出口外贸企业待退税的数据。请认真核实填写，以免造成损失！");
			countArr[obj - 25]++;
		}
	}
}

/*************************************************************************************/
function frmupdate(){
	
	if(checkValue()){
	    unformatValue_SBB();

	    document.getElementsByName("xform")[0].TABLE_ACTION.value = "update";
	    document.getElementsByName("xform")[0].action = "./MainServlet";
	    document.getElementsByName("xform")[0].submit();
	    return true;
	}
}

function frminsert(){
	
	if(checkValue()){
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