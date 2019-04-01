function initJmssbPage()
{
	//初始化的时候，进行减税部分不可删除的数据行的自动计算
	if(action == 'initial')
	{
		changeValue_js_bksc();
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

//减税自动计算
//不可删除的行
function changeValue_js_bksc()
{
	unformatValue_SBB();
	
	//自动计算
	for (var i = 0; i < SB_FLZL4_JS_MX_BKSC.rows.length; i++)
	{	
		//3=1+2
		$("#SB_FLZL4_JS_MX_BKSC input[name='COL3']")[i].value = parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL1']")[i].value)
														 + parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL2']")[i].value);
		//5=3-4
		$("#SB_FLZL4_JS_MX_BKSC input[name='COL5']")[i].value = parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL3']")[i].value) 
														 - parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL4']")[i].value);
	}
	
	calcateHjForJs();
	
	formatValue_SBB();
}

function changeValue_js()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	for (var i = 0; i < SB_FLZL4_JS_MX.rows.length; i++)
	{	
		//3=1+2
		$("#SB_FLZL4_JS_MX input[name='COL3']")[i].value = parseFloat($("#SB_FLZL4_JS_MX input[name='COL1']")[i].value)
														 + parseFloat($("#SB_FLZL4_JS_MX input[name='COL2']")[i].value);
		//5=3-4
		$("#SB_FLZL4_JS_MX input[name='COL5']")[i].value = parseFloat($("#SB_FLZL4_JS_MX input[name='COL3']")[i].value) 
														 - parseFloat($("#SB_FLZL4_JS_MX input[name='COL4']")[i].value);
	}
	
	calcateHjForJs();
	
	/////////////////////////////////////////////////
	formatValue_SBB();
}

/*
 * 减税合计行计算
 */
function calcateHjForJs()
{
	var hj1 = 0;
	var hj2 = 0;
	var hj3 = 0;
	var hj4 = 0;
	var hj5 = 0;
	
	//不可删除和可以删除的都进行累加
	for (var i = 0; i < SB_FLZL4_JS_MX_BKSC.rows.length; i++)
	{
		hj1 += parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL1']")[i].value);
		hj2 += parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL2']")[i].value);
		hj3 += parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL3']")[i].value);
		hj4 += parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL4']")[i].value);
		hj5 += parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL5']")[i].value);
	}
	for (var i = 0; i < SB_FLZL4_JS_MX.rows.length; i++)
	{
		hj1 += parseFloat($("#SB_FLZL4_JS_MX input[name='COL1']")[i].value);
		hj2 += parseFloat($("#SB_FLZL4_JS_MX input[name='COL2']")[i].value);
		hj3 += parseFloat($("#SB_FLZL4_JS_MX input[name='COL3']")[i].value);
		hj4 += parseFloat($("#SB_FLZL4_JS_MX input[name='COL4']")[i].value);
		hj5 += parseFloat($("#SB_FLZL4_JS_MX input[name='COL5']")[i].value);
	}
	
	//合计栏
	$("#inputTable input[name='COL1']")[0].value = hj1;
	$("#inputTable input[name='COL2']")[0].value = hj2;
	$("#inputTable input[name='COL3']")[0].value = hj3;
	$("#inputTable input[name='COL4']")[0].value = hj4;
	$("#inputTable input[name='COL5']")[0].value = hj5;
}

//获取减税项目的个数（包括合计栏）
function getJsxmcount()
{
	var count = 0;
	var xmlxTd = $("#inputTable input[name='XMLX']");
	
	$.each(xmlxTd, function(i, val){
		
		 //减税项目dm为1
		 if($(xmlxTd[i]).val() == '1')
		 {
			 count++;
		 }
	});
	
	return count;
}

//免税自动计算
function changeValue_ms()
{	
	unformatValue_SBB();
	/////////////////////////////////////////////////
	
	var hjIndex = getJsxmcount();
	
	//出口免税
	//小曾确认合计行按照金三逻辑进行修改；金三升级10155的补丁包，免税项目合计行的第三列的数值直接等于该列各栏次的数值，即不满足3=1-2的计算公式(跟以前ctais的逻辑一样) modify by zhiweiHuang 20170106
	var hj1 = parseFloat($("#inputTable input[name='COL1']")[hjIndex + 1].value);
	var hj2 = parseFloat($("#inputTable input[name='COL2']")[hjIndex + 1].value);
	var hj3 = parseFloat($("#inputTable input[name='COL3']")[hjIndex + 1].value);
	var hj4 = parseFloat($("#inputTable input[name='COL4']")[hjIndex + 1].value);
	var hj5 = parseFloat($("#inputTable input[name='COL5']")[hjIndex + 1].value);
	for (var i = 0; i < SB_FLZL4_MS_MX.rows.length; i++)
	{	
		//3=1-2, 即 扣除后免税销售额 等于 免征增值税项目销售额 - 免税销售额扣除项目本期实际扣除金额
		$("#SB_FLZL4_MS_MX input[name='COL3']")[i].value = parseFloat($("#SB_FLZL4_MS_MX input[name='COL1']")[i].value)
														 - parseFloat($("#SB_FLZL4_MS_MX input[name='COL2']")[i].value);
		
		//第五行的自动计算涉及到税率。
		//一般纳税人公式：第5列“免税额”=第3列“扣除后免税销售额”×适用税率-第4列“免税销售额对应的进项税额”。
		//小规模纳税人公式：第5列“免税额”=第3列“扣除后免税销售额”×征收率。
		//第5列“免税额”=第3列“扣除后免税销售额”×适用税率-第4列“免税销售额对应的进项税额”。
		//问总局未提供使用税率怎么取，Ctais里面是手工录入，这边先不自动计算
		/*
		$("#SB_FLZL4_MS_MX input[name='COL5']")[i].value = parseFloat($("#SB_FLZL4_MS_MX input[name='COL3']")[i].value) * sl
														 - parseFloat($("#SB_FLZL4_MS_MX input[name='COL4']")[i].value);
		*/
		
		hj1 += parseFloat($("#SB_FLZL4_MS_MX input[name='COL1']")[i].value);
		hj2 += parseFloat($("#SB_FLZL4_MS_MX input[name='COL2']")[i].value);
		hj3 += parseFloat($("#SB_FLZL4_MS_MX input[name='COL3']")[i].value);
		hj4 += parseFloat($("#SB_FLZL4_MS_MX input[name='COL4']")[i].value);
		hj5 += parseFloat($("#SB_FLZL4_MS_MX input[name='COL5']")[i].value);
	}
	
	//合计栏
	$("#inputTable input[name='COL1']")[hjIndex].value = hj1;
	$("#inputTable input[name='COL2']")[hjIndex].value = hj2;
	$("#inputTable input[name='COL3']")[hjIndex].value = hj3;
	$("#inputTable input[name='COL4']")[hjIndex].value = hj4;
	$("#inputTable input[name='COL5']")[hjIndex].value = hj5;
	
	/////////////////////////////////////////////////
	formatValue_SBB();
}

function setHcForInput()
{
	var hcArr = $("#inputTable input[name='HC']");
	$.each(hcArr, function(i,val){
		
		$(hcArr[i]).val(i + 1);
	});
}

//重写ctrl+Delete删除行的操作，删除后再重新计算值
function keyDownInsert_calculate(type)
{
	var event=window.event||arguments.callee.caller.arguments[0];
	if(event.ctrlKey)
	{
		//CTRL+INSERT:增行
		if(event.keyCode == 45)
		{		
			addRowWithoutCheckBrowserV();
			//操作行的时候HC要重新赋值
			setHcForInput();
		}
		//CTRL+DELETE:删行
		else if(event.keyCode == 46)
		{	
			delRowWithoutCheckBrowserV();
			//操作行的时候HC要重新赋值
			setHcForInput();
			
			if(type == 'js')
				changeValue_js();
			else if(type == 'ms')
				changeValue_ms();
		}
	}
}

///////////////////////////////////////////////////////////////
/*
    操作功能
*/
function checkinput()
{
	var flag = true;
	unformatValue_SBB();
	
	//减税项目
	//不可删除的数据行
	for (var i = 0; i < SB_FLZL4_JS_MX_BKSC.rows.length; i++)
	{
		//用于行次提示
		var hc = $("#SB_FLZL4_JS_MX_BKSC input[name='HC']")[i].value;

		//参照减免核算文档，新增第4列，“本期实际抵减税额”必须大于等于零的校验规则 add by zhiweiHuang 20161214
		var tempCol4_v = parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL4']")[i].value);
		if(tempCol4_v < 0)
		{
			alert("第" + hc + "栏次：第4列的值必须大于等于0!");
			flag = false;
			
			break;
		}
		
		// 4≤3
		if(parseFloat($("#SB_FLZL4_JS_MX_BKSC input[name='COL3']")[i].value) < tempCol4_v)
		{
			alert("第" + hc + "栏次：第4列的值不能大于第3列的值!");
			flag = false;
			
			break;
		}
	}

	//校验失败之后就不往下走了
	if(!flag)
	{
		formatValue_SBB();
		return flag;
	}
	
	//新增减免性质代码唯一性校验 add by zhiweiHuang 20160203 start
	var jmxzdmStr = "";
	//不可删除的部分
	for (var i = 0; i < SB_FLZL4_JS_MX_BKSC.rows.length; i++)
	{
		//用于行次提示
		var hc = $("#SB_FLZL4_JS_MX_BKSC input[name='HC']")[i].value;
		//七列数据，取第一个就是性质代码及名称的列(这一列不在放置其他的input或者select)
		var firstCell = SB_FLZL4_JS_MX_BKSC.rows[i].cells[0];
		var firstInputObj = $(firstCell).find("input");
		var firstSelectObj = $(firstCell).find("select");
		//根据对象的length来判断对象是否存在，不能根据null或者undefined来判断
		var firstValue = $(firstInputObj).length != 0 ? firstInputObj.val() : firstSelectObj.val();
		
		if(firstValue == '')
		{
			continue;
		}
		
		if(jmxzdmStr.indexOf("," + firstValue + ",") > -1)
		{
			alert("第" + hc + "栏次：减税性质代码及名称不能重复选择!");
			flag = false;
			
			break;
		}
		
		jmxzdmStr += "," + firstValue + ",";	
	}

	//校验失败之后就不往下走了
	if(!flag)
	{
		formatValue_SBB();
		return flag;
	}
	
	for (var i = 0; i < SB_FLZL4_JS_MX.rows.length; i++)
	{
		//用于行次提示
		var hc = $("#SB_FLZL4_JS_MX input[name='HC']")[i].value;
		//七列数据，取第一个就是性质代码及名称的列(这一列不在放置其他的input或者select)
		var firstCell = SB_FLZL4_JS_MX.rows[i].cells[0];
		var firstInputObj = $(firstCell).find("input");
		var firstSelectObj = $(firstCell).find("select");
		//根据对象的length来判断对象是否存在，不能根据null或者undefined来判断
		var firstValue = $(firstInputObj).length != 0 ? firstInputObj.val() : firstSelectObj.val();
		
		if(firstValue == '')
		{
			continue;
		}
		
		//下拉框取数修改，值存放的是减免性质代码和减免项目代码，需要处理下保存重复校验 modify by zhiweiHuang 20160616 start
		var firstVArr = firstValue.split("|");
		firstValue = firstVArr[0];
		//下拉框取数修改，值存放的是减免性质代码和减免项目代码，需要处理下保存重复校验 modify by zhiweiHuang 20160616 end
		
		if(jmxzdmStr.indexOf("," + firstValue + ",") > -1)
		{
			alert("第" + hc + "栏次：减税性质代码及名称不能重复选择!");
			flag = false;
			
			break;
		}
		
		jmxzdmStr += "," + firstValue + ",";	
	}
	
	//校验失败之后就不往下走了
	if(!flag)
	{
		formatValue_SBB();
		return flag;
	}
	
	//end
	
	for (var i = 0; i < SB_FLZL4_JS_MX.rows.length; i++)
	{	
		//当数据有效的时候进行判断，到时业务部门确认行是否进行增行或自动带出之后再进行变化
		if(parseFloat($("#SB_FLZL4_JS_MX input[name='COL1']")[i].value) != 0 
			|| parseFloat($("#SB_FLZL4_JS_MX input[name='COL2']")[i].value) != 0
			|| parseFloat($("#SB_FLZL4_JS_MX input[name='COL3']")[i].value) != 0
			|| parseFloat($("#SB_FLZL4_JS_MX input[name='COL4']")[i].value) != 0
			|| parseFloat($("#SB_FLZL4_JS_MX input[name='COL5']")[i].value) != 0)
		{
			//用于行次提示
			var hc = $("#SB_FLZL4_JS_MX input[name='HC']")[i].value;
			
			//七列数据，取第一个就是性质代码及名称的列(这一列不在放置其他的input或者select)
			var firstCell = SB_FLZL4_JS_MX.rows[i].cells[0];
			var firstInputObj = $(firstCell).find("input");
			var firstSelectObj = $(firstCell).find("select");
			//根据对象的length来判断对象是否存在，不能根据null或者undefined来判断
			var firstValue = $(firstInputObj).length != 0 ? firstInputObj.val() : firstSelectObj.val();
			
			// 减免项目不能为空
			if(firstValue == '')
			{
				alert("第" + hc + "栏次：减税性质代码及名称不能为空!");
				flag = false;
				
				break;
			}
			
			//参照减免核算文档，新增第4列，“本期实际抵减税额”必须大于等于零的校验规则 add by zhiweiHuang 20161214
			var tempCol4_v = parseFloat($("#SB_FLZL4_JS_MX input[name='COL4']")[i].value);
			if(tempCol4_v < 0)
			{
				alert("第" + hc + "栏次：第4列的值必须大于等于0!");
				flag = false;
				
				break;
			}
			
			// 4≤3
			if(parseFloat($("#SB_FLZL4_JS_MX input[name='COL3']")[i].value) < tempCol4_v)
			{
				alert("第" + hc + "栏次：第4列的值不能大于第3列的值!");
				flag = false;
				
				break;
			}
		}
	}
	
	//校验失败之后就不往下走了
	if(!flag)
	{
		formatValue_SBB();
		return flag;
	}
	
	//免税项目
	
	//营改增新需求：接口说明中，指出其中：跨境服务 数值不能大于 出口免税栏的数值 add by zhiweiHuang 20160504 start
	//出口免税的下标为减税项目的表格长度加上免税合计栏
	var index_ckms = SB_FLZL4_JS_MX_BKSC.rows.length + SB_FLZL4_JS_MX.rows.length + 2;
	var msxm_xse_ckms = parseFloat($("#inputTable input[name='COL1']")[index_ckms].value);
	var msxm_xse_qzkjfw = parseFloat($("#inputTable input[name='COL1']")[index_ckms + 1].value);
	
	/*  2017.10.11，小曾提出取消该校验   by    wxf     20171011    start*/
//	if(msxm_xse_qzkjfw > msxm_xse_ckms)
//	{
//		alert("免税项目中，“其中：跨境服务”栏次第1列的值不能大于“出口免税”栏次第1列的值，请核实!");
//		flag = false;
//	}
	/*  2017.10.11，小曾提出取消该校验   by    wxf     20171011    end*/
	
	
	//校验失败之后就不往下走了
	if(!flag)
	{
		formatValue_SBB();
		return flag;
	}
	//营改增新需求：接口说明中，指出其中：跨境服务 数值不能大于 出口免税栏的数值 add by zhiweiHuang 20160504 end
	
	//新增减免性质代码唯一性校验 add by zhiweiHuang 20160203 start
	jmxzdmStr = "";
	for (var i = 0; i < SB_FLZL4_MS_MX.rows.length; i++)
	{
		//用于行次提示
		var hc = $("#SB_FLZL4_MS_MX input[name='HC']")[i].value;
		//七列数据，取第一个就是性质代码及名称的列(这一列不在放置其他的input或者select)
		var firstCell = SB_FLZL4_MS_MX.rows[i].cells[0];
		var firstInputObj = $(firstCell).find("input");
		var firstSelectObj = $(firstCell).find("select");
		//根据对象的length来判断对象是否存在，不能根据null或者undefined来判断
		var firstValue = $(firstInputObj).length != 0 ? firstInputObj.val() : firstSelectObj.val();
		
		if(firstValue == '')
		{
			continue;
		}
		
		//下拉框取数修改，值存放的是减免性质代码和减免项目代码，需要处理下保存重复校验 modify by zhiweiHuang 20160616 start
		var firstVArr = firstValue.split("|");
		firstValue = firstVArr[0];
		//下拉框取数修改，值存放的是减免性质代码和减免项目代码，需要处理下保存重复校验 modify by zhiweiHuang 20160616 end
		
		if(jmxzdmStr.indexOf("," + firstValue + ",") > -1)
		{
			alert("第" + hc + "栏次：免税性质代码及名称不能重复选择!");
			flag = false;
			
			break;
		}
		
		jmxzdmStr += "," + firstValue + ",";	
	}

	//校验失败之后就不往下走了
	if(!flag)
	{
		formatValue_SBB();
		return flag;
	}
	//end
	
	for (var i = 0; i < SB_FLZL4_MS_MX.rows.length; i++)
	{	
		//当数据有效的时候进行判断，到时业务部门确认行是否进行增行或自动带出之后再进行变化
		if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL1']")[i].value) != 0 
			|| parseFloat($("#SB_FLZL4_MS_MX input[name='COL2']")[i].value) != 0
			|| parseFloat($("#SB_FLZL4_MS_MX input[name='COL3']")[i].value) != 0
			|| parseFloat($("#SB_FLZL4_MS_MX input[name='COL4']")[i].value) != 0
			|| parseFloat($("#SB_FLZL4_MS_MX input[name='COL5']")[i].value) != 0)
		{
			//用于行次提示
			var hc = $("#SB_FLZL4_MS_MX input[name='HC']")[i].value;

			//七列数据，取第一个就是性质代码及名称的列(这一列不在放置其他的input或者select)
			var firstCell = SB_FLZL4_MS_MX.rows[i].cells[0];
			var firstInputObj = $(firstCell).find("input");
			var firstSelectObj = $(firstCell).find("select");
			//根据对象的length来判断对象是否存在，不能根据null或者undefined来判断
			var firstValue = $(firstInputObj).length != 0 ? firstInputObj.val() : firstSelectObj.val();
			if(firstValue == '')
			{
				alert("第" + hc + "栏次：免税性质代码及名称不能为空!");
				flag = false;
				
				break;
			}
			
//			//2017.10.11，小曾提出，把之前3、4列的校验增加修改为：当第3列为大于等于0时，校验第4列的值不能大于第3列的值；当第3列小于0时，第4列只能为0    by    wxf      20171011
//			if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL3']")[i].value)>=0){
//				//参照减免核算文档，新增：第4列，“免税销售额对应的进项税额”必须小于等于"扣除后免税销售额"  add by zhiweiHuang 20161214
//				if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL3']")[i].value) < parseFloat($("#SB_FLZL4_MS_MX input[name='COL4']")[i].value))
//				{
//					alert("第" + hc + "栏次：第4列的值不能大于第3列的值！");
//					flag = false;
//					
//					break;
//				}
//			}else{
//				if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL4']")[i].value)!= 0){
//					alert("第" + hc + "栏次：当第3列小于0时，第4列的值必须等于0！");
//					flag = false;
//					
//					break;
//				}
//			}
			/*20180910 小曾提出，取消以前免税3、4列的校验，增加为以下校验：
			 * 当第3列大于0时，第4列“免税额”应大于等于0，且小于等于同栏的第3列“扣除后免税销售额”×增值税一般人最大税率（16%）；
			 * 当第3列小于等于0时，第4列等于0。
			 * by   wxf    20180910  */
			if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL3']")[i].value) > 0){
				if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL4']")[i].value) < 0 || 
						parseFloat($("#SB_FLZL4_MS_MX input[name='COL4']")[i].value) > formatPoint((parseFloat($("#SB_FLZL4_MS_MX input[name='COL3']")[i].value) * 16 / 100), 2)){
					alert("第" + hc + "栏次：当第3列大于0时，第4列的值应大于等于0，且要小于等于同行第3列乘16%的乘积！");
					flag = false;
					
					break;
				}
			}else{
				if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL4']")[i].value) != 0){
					alert("第" + hc + "栏次：当第3列小于等于0时，第4列的值必须为0！");
					flag = false;
					
					break;
				}
			}
			
			/*  -----2017.10.10明芳提出取消第5列的该校验    by   wxf    20171010  -----
			//第5列“免税额”：本列各行数应大于或等于0。
			if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL5']")[i].value) < 0)
			{
				alert("第" + hc + "栏次：第5列的值应大于或等于0!");
				flag = false;
				
				break;
			}
			*/ 
			//2017.10.10明芳提出增加校验：免税部分的第1列小于0时，第2列必须等于0      by   wxf     20171010
			if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL1']")[i].value) < 0){
				if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL2']")[i].value) != 0){
					alert("第" + hc + "栏次：第1列的值小于0时，第2列必须等于0！");
					flag = false;
					
					break;
				}
			}
			
			/*2018.09.10，小曾提出，增加校验：第3列大于0时，第5列“免税额”应大于等于0，且小于等于同栏的第3列“扣除后免税销售额”×增值税一般人最大税率（16%）-第4列“免税销售额对应的进项税额； 
			                                                   第3列小于等于0时，第5列“免税额”应等于0。     by    wxf    20180910*/
			if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL3']")[i].value) > 0){
				if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL5']")[i].value) < 0 || 
						parseFloat($("#SB_FLZL4_MS_MX input[name='COL5']")[i].value) > 
				        formatPoint((parseFloat($("#SB_FLZL4_MS_MX input[name='COL3']")[i].value) * 16 / 100 - parseFloat($("#SB_FLZL4_MS_MX input[name='COL4']")[i].value)), 2)){
					alert("第" + hc + "栏次：当第3列大于0时，第5列的值应大于等于0，且要小于等于同行第3列乘16%再减同行第4列的差！");
					flag = false;
					
					break;				
				}
			}else{
				if(parseFloat($("#SB_FLZL4_MS_MX input[name='COL5']")[i].value) != 0){
					alert("第" + hc + "栏次：当第3列小于等于0时，第5列的值必须为0！");
					flag = false;
					
					break;
				}
			}
			
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