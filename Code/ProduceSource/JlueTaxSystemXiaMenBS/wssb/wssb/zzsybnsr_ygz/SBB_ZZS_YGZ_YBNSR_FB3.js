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
function showMsgForFCensr(){
	
	if(isCeNsrStr == 'false' && pageAction != 'display')
	{
		alert("您非差额征税纳税人，请直接保存此表!");
	}
}
 
//根据稽核关系计算
function caculation(){
	
	unformatValue_SBB();
	
	//第 1 行赋值
	var vr1c4 = parseFloat($("#QCYE_17YXDCZLFW").val()) + parseFloat($("#BQFSE_17YXDCZLFW").val());
	$("#BQYKCJE_17YXDCZLFW").val(vr1c4);
	var vr1c5  = parseFloat("0.00");
	var v_1_1 = parseFloat($("#BQYSFWJSHJ_17YXDCZLFW").val());
	var vck15 = parseFloat($("#BQSJKCJE_17YXDCZLFW").val());
	if (vr1c4 > parseFloat($("#BQYSFWJSHJ_17YXDCZLFW").val()) ){
		vr1c5 = parseFloat($("#BQYSFWJSHJ_17YXDCZLFW").val());
	}else{
		vr1c5 = vr1c4;
	}
	if(v_1_1<0){
		if(vck15!=0){
			//当第1列<0时，第5列=0     by   wxf    20170926
			alert("第1栏中第1列的值小于0时，第5列必须要等于0！");
			$("#BQSJKCJE_17YXDCZLFW").val(0);
		}
	}else{
		if (vr1c5 < vck15){
			alert("第1栏中【服务、不动产和无形资产扣除项目】的【本期实际扣除金额】的值不能大于该栏 第1列 与 第4列的最小值");
			$("#BQSJKCJE_17YXDCZLFW").val(vr1c5);
		}
	} 
	$("#QMYE_17YXDCZLFW").val(vr1c4 - $("#BQSJKCJE_17YXDCZLFW").val());
	
	//2行
	var vr2c4 = parseFloat($("#QCYE_11YSFW").val()) + parseFloat($("#BQFSE_11YSFW").val());
	var vr2c5 = parseFloat("0.00");
	var v_2_1 = parseFloat($("#BQYSFWJSHJ_11YSFW").val());
	var vck25 = parseFloat($("#BQSJKCJE_11YSFW").val());
	$("#BQYKCJE_11YSFW").val(vr2c4);
	if (vr2c4 > parseFloat($("#BQYSFWJSHJ_11YSFW").val()) ){
		vr2c5 = parseFloat($("#BQYSFWJSHJ_11YSFW").val());
	}else{
		vr2c5 = vr2c4;
	}
	if(v_2_1<0){
		if(vck25!=0){
			//当第1列<0时，第5列=0     by   wxf    20170926
			alert("第2栏中第1列的值小于0时，第5列必须要等于0！");
			$("#BQSJKCJE_11YSFW").val(0);
		}
	}else{
		if (vr2c5 < vck25){
			alert("第2栏中【服务、不动产和无形资产扣除项目】的【本期实际扣除金额】的值不能大于该栏 第1列 与 第4列的最小值");
			$("#BQSJKCJE_11YSFW").val(vr2c5);
		}
	}
	$("#QMYE_11YSFW").val(vr2c4 - $("#BQSJKCJE_11YSFW").val());

	//3行
	var vr3c4 = parseFloat($("#QCYE_6YSFW").val()) + parseFloat($("#BQFSE_6YSFW").val());
	var vr3c5 = parseFloat("0.00");
	var v_3_1 = parseFloat($("#BQYSFWJSHJ_6YSFW").val());
	var vck35 = parseFloat($("#BQSJKCJE_6YSFW").val());
	$("#BQYKCJE_6YSFW").val(vr3c4);
	if (vr3c4 > parseFloat($("#BQYSFWJSHJ_6YSFW").val()) ){
		vr3c5 = parseFloat($("#BQYSFWJSHJ_6YSFW").val());
	}else{
		vr3c5 = vr3c4;
	}
	if(v_3_1<0){
		if(vck35!=0){
			//当第1列<0时，第5列=0     by   wxf    20170926
			alert("第3栏中第1列的值小于0时，第5列必须要等于0！");
			$("#BQSJKCJE_6YSFW").val(0);
		}
	}else{
		if (vr3c5 < vck35){
			alert("第3栏中【服务、不动产和无形资产扣除项目】的【本期实际扣除金额】的值不能大于该栏 第1列 与 第4列的最小值");
			$("#BQSJKCJE_6YSFW").val(vr3c5);
		}
	}
	$("#QMYE_6YSFW").val(vr3c4 - $("#BQSJKCJE_6YSFW").val());
	
	//4行
	var vr4c4 = parseFloat($("#QCYE_6YSFW_JR").val()) + parseFloat($("#BQFSE_6YSFW_JR").val());
	var vr4c5 = parseFloat("0.00");
	var v_4_1 = parseFloat($("#BQYSFWJSHJ_6YSFW_JR").val());
	var vck45 = parseFloat($("#BQSJKCJE_6YSFW_JR").val());
	$("#BQYKCJE_6YSFW_JR").val(vr4c4);
	if (vr4c4 > parseFloat($("#BQYSFWJSHJ_6YSFW_JR").val()) ){
		vr4c5 = parseFloat($("#BQYSFWJSHJ_6YSFW_JR").val());
	}else{
		vr4c5 = vr4c4;
	}
	if(v_4_1<0){
		if(vck45!=0){
			//当第1列<0时，第5列=0     by   wxf    20170926
			alert("第4栏中第1列的值小于0时，第5列必须要等于0！");
			$("#BQSJKCJE_6YSFW_JR").val(0);
		}
	}else{
		if (vr4c5 < vck45){
			alert("第4栏中【服务、不动产和无形资产扣除项目】的【本期实际扣除金额】的值不能大于该栏 第1列 与 第4列的最小值");
			$("#BQSJKCJE_6YSFW_JR").val(vr4c5);
		}
	}
	$("#QMYE_6YSFW_JR").val(vr4c4 - $("#BQSJKCJE_6YSFW_JR").val());
	
	//5行
	var vr5c4 = parseFloat($("#QCYE_5YSFW").val()) + parseFloat($("#BQFSE_5YSFW").val());
	var vr5c5 = parseFloat("0.00");
	var v_5_1 = parseFloat($("#BQYSFWJSHJ_5YSFW").val());
	var vck55 = parseFloat($("#BQSJKCJE_5YSFW").val());
	$("#BQYKCJE_5YSFW").val(vr5c4);
	if (vr5c4 > parseFloat($("#BQYSFWJSHJ_5YSFW").val()) ){
		vr5c5 = parseFloat($("#BQYSFWJSHJ_5YSFW").val());
	}else{
		vr5c5 = vr5c4;
	}
	if(v_5_1<0){
		if(vck55!=0){
			//当第1列<0时，第5列=0     by   wxf    20170926
			alert("第5栏中第1列的值小于0时，第5列必须要等于0！");
			$("#BQSJKCJE_5YSFW").val(0);
		}
	}else{
		if (vr5c5 < vck55){
			alert("第5栏中【服务、不动产和无形资产扣除项目】的【本期实际扣除金额】的值不能大于该栏 第1列 与 第4列的最小值");
			$("#BQSJKCJE_5YSFW").val(vr5c5);
		}
	}
	$("#QMYE_5YSFW").val(vr5c4 - $("#BQSJKCJE_5YSFW").val());

	//6行
	var vr6c4 = parseFloat($("#QCYE_3YSFW").val()) + parseFloat($("#BQFSE_3YSFW").val());
	var vr6c5 = parseFloat("0.00");
	var v_6_1 = parseFloat($("#BQYSFWJSHJ_3YSFW").val());
	var vck65 = parseFloat($("#BQSJKCJE_3YSFW").val());
	$("#BQYKCJE_3YSFW").val(vr6c4);
	if (vr6c4 > parseFloat($("#BQYSFWJSHJ_3YSFW").val()) ){
		vr6c5 = parseFloat($("#BQYSFWJSHJ_3YSFW").val());
	}else{
		vr6c5 = vr6c4;
	}
	if(v_6_1<0){
		if(vck65!=0){
			//当第1列<0时，第5列=0     by   wxf    20170926
			alert("第6栏中第1列的值小于0时，第5列必须要等于0！");
			$("#BQSJKCJE_3YSFW").val(0);
		}
	}else{
		if (vr6c5 < vck65){
			alert("第6栏中【服务、不动产和无形资产扣除项目】的【本期实际扣除金额】的值不能大于该栏 第1列 与 第4列的最小值");
			$("#BQSJKCJE_3YSFW").val(vr6c5);
		}
	}
	$("#QMYE_3YSFW").val(vr6c4 - $("#BQSJKCJE_3YSFW").val());

	//7行
	var vr7c4 = parseFloat($("#QCYE_MDTYSFW").val()) + parseFloat($("#BQFSE_MDTYSFW").val());
	var vr7c5 = parseFloat("0.00");
	var v_7_1 = parseFloat($("#BQYSFWJSHJ_MDTYSFW").val());
	var vck75 = parseFloat($("#BQSJKCJE_MDTYSFW").val());
	$("#BQYKCJE_MDTYSFW").val(vr7c4);
	if (vr7c4 > parseFloat($("#BQYSFWJSHJ_MDTYSFW").val()) ){
		vr7c5 = parseFloat($("#BQYSFWJSHJ_MDTYSFW").val());
	}else{
		vr7c5 = vr7c4;
	}
	if(v_7_1<0){
		if(vck75!=0){
			//当第1列<0时，第5列=0     by   wxf    20170926
			alert("第7栏中第1列的值小于0时，第5列必须要等于0！");
			$("#BQSJKCJE_MDTYSFW").val(0);
		}
	}else{
		if (vr7c5 < vck75){
			alert("第7栏中【服务、不动产和无形资产扣除项目】的【本期实际扣除金额】的值不能大于该栏 第1列 与 第4列的最小值");
			$("#BQSJKCJE_MDTYSFW").val(vr7c5);
		}
	}
	$("#QMYE_MDTYSFW").val(vr7c4 - $("#BQSJKCJE_MDTYSFW").val());

	//8行
	var vr8c4 = parseFloat($("#QCYE_MSYSFW").val()) + parseFloat($("#BQFSE_MSYSFW").val());
	var vr8c5 = parseFloat("0.00");
	var v_8_1 = parseFloat($("#BQYSFWJSHJ_MSYSFW").val());
	var vck85 = parseFloat($("#BQSJKCJE_MSYSFW").val());
	$("#BQYKCJE_MSYSFW").val(vr8c4);
	if (vr8c4 > parseFloat($("#BQYSFWJSHJ_MSYSFW").val()) ){
		vr8c5 = parseFloat($("#BQYSFWJSHJ_MSYSFW").val());
	}else{
		vr8c5 = vr8c4;
	}
	if(v_8_1<0){
		if(vck85!=0){
			//当第1列<0时，第5列=0     by   wxf    20170926
			alert("第8栏中第1列的值小于0时，第5列必须要等于0！");
			$("#BQSJKCJE_MSYSFW").val(0);
		}
	}else{
		if (vr8c5 < vck85){
			alert("第8栏中【服务、不动产和无形资产扣除项目】的【本期实际扣除金额】的值不能大于该栏 第1列 与 第4列的最小值");
			$("#BQSJKCJE_MSYSFW").val(vr8c5);
		}
	}
	$("#QMYE_MSYSFW").val(vr8c4 - $("#BQSJKCJE_MSYSFW").val());
	
	formatValue_SBB();
}

//-------------------------按钮提交，保存，修改时校验-------------------------------------------//
function checkValue(){
	//alert(document.getElementById("TABLE_ACTION").value);
	caculation();
	var result = true;
	
	unformatValue_SBB();
		                                                             
	var c1 = new Array();                                        
	var c4 = new Array();                                        
	var c5 = new Array();                                        
    //4                                                          
	c4[0] = parseFloat($("#BQYKCJE_17YXDCZLFW").val());          
	c4[1] = parseFloat($("#BQYKCJE_11YSFW").val());         	   
	c4[2] = parseFloat($("#BQYKCJE_6YSFW").val());               
	c4[3] = parseFloat($("#BQYKCJE_3YSFW").val());               
	c4[4] = parseFloat($("#BQYKCJE_MDTYSFW").val());             
	c4[5] = parseFloat($("#BQYKCJE_MSYSFW").val());              
	                                                             
	//5                                                          
	c5[0] = parseFloat($("#BQSJKCJE_17YXDCZLFW").val());
	c5[1] = parseFloat($("#BQSJKCJE_11YSFW").val());   
	c5[2] = parseFloat($("#BQSJKCJE_6YSFW").val());              
	c5[3] = parseFloat($("#BQSJKCJE_3YSFW").val());              
	c5[4] = parseFloat($("#BQSJKCJE_MDTYSFW").val());            
	c5[5] = parseFloat($("#BQSJKCJE_MSYSFW").val());             
	                                                             
	//1                                                          
	c1[0] = parseFloat($("#BQYSFWJSHJ_17YXDCZLFW").val());       
  	c1[1] = parseFloat($("#BQYSFWJSHJ_11YSFW").val());      
  	c1[2] = parseFloat($("#BQYSFWJSHJ_6YSFW").val());            
	c1[3] = parseFloat($("#BQYSFWJSHJ_3YSFW").val());            
	c1[4] = parseFloat($("#BQYSFWJSHJ_MDTYSFW").val());          
	c1[5] = parseFloat($("#BQYSFWJSHJ_MSYSFW").val());           


	for(var k=0;k<5;k++){
		if(c1[k] < 0){
			if(c5[k] !=0){
				//当第1列<0时，第5列=0     by   wxf    20170926
				result = false;
				alert("本表中，第1列小于0时，第5列必须等于0！请返回修改第"+(k+1)+"第行5列的值。");
				return result;
			}
		}else{
			if(c5[k] > c4[k]){
				result = false;
				alert("'本期实际扣除金额'不能大于'不能大于'本期应扣除金额'，请返回修改第"+(k+1)+"行第5列的值。");
				return result;
			}
			if(c5[k] > c1[k]){
				result = false;
				alert("'本期实际扣除金额'不能大于'本期服务、不动产和无形资产价税合计额（免税销售额）'，请返回修改第"+(k+1)+"行第5列的值。");
				return result;
			}
		}
	}
	if ($("#isYbnsr").val() == "N" ){
		var sa = parseFloat($("#QCYE_17YXDCZLFW").val()) + parseFloat($("#QCYE_11YSFW").val())  + parseFloat($("#QCYE_6YSFW").val()) 
		 + parseFloat($("#QCYE_3YSFW").val())  + parseFloat($("#QCYE_MDTYSFW").val())  + parseFloat($("#QCYE_MSYSFW").val());
		var cv = parseFloat($("#sqqmye").val());
		if (sa != cv ){
			alert("列【期初余额】的各项合计值应为您上期 增值税纳税申报表（适用于增值税小规模纳税人）附表一的第4栏“期末余额”数据【"+cv+"】");
			result = false;
		}
	}
	
	formatValue_SBB();
	return result;
}


//4=2+3
function formulaSum(obj,par1,par2){
	obj.value = "";
	var value1 = document.getElementById(par1).value;
	var value2 = document.getElementById(par2).value;
	var newValue = parseFloat(value1) + parseFloat(value2);
	obj.value = formatDotpart(newValue,2);
}

//比对5和1,5和4
function compareNum(obj,par1,par2){
	//解除格式化
	unformatValue_SBB();
	
	//获取当前比较值
	var value = obj.value;
	var value1 = document.getElementById(par1).value;
	var value2 = document.getElementById(par2).value;
	
	
	try{
		if(parseFloat(value) > parseFloat(value1)){
			alert("'本期实际扣除金额'不能大于'本期服务、不动产和无形资产价税合计额（免税销售额）'");
			//obj.value = "0.00";
			obj.focus();
			return;
		}
		if(parseFloat(value) > parseFloat(value2)){
			alert("'本期实际扣除金额'不能大于'不能大于'本期应扣除金额'");
			//obj.value = "0.00";
			obj.focus();
			return;
		}
	}catch(e){
		alert("列4列5比对错误！");		
	}finally{
		formatValue_SBB();
	}
}

function reduceNum(par,par1,obj){
	document.getElementById(par).value = "";
	var value1 = document.getElementById(par1).value;
	var value2 = obj.value;
	var newValue = parseFloat(value1) - parseFloat(value2);
	document.getElementById(par).value = formatDotpart(newValue,2);
}
/*************************************************************************************/
function frmupdate(){
	if(!checkValue()){return;}
    unformatValue_SBB();
    document.getElementsByName("xform")[0].TABLE_ACTION.value = "update";
    document.getElementsByName("xform")[0].action = "./MainServlet";
    document.getElementsByName("xform")[0].submit();
    return true;
}

function frminsert(){
	if(!checkValue()){return;}
	unformatValue_SBB();

    document.getElementsByName("xform")[0].TABLE_ACTION.value="insert";
    document.getElementsByName("xform")[0].action="./MainServlet";
    document.getElementsByName("xform")[0].submit();
    return true;
}

function checkdata_commit3()
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