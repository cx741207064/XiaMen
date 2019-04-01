$(document).ready(function(){
	window.parent.hideOverlay();//隐藏遮罩层
	var SUCCESSCODE = "10";
	var SUCCESSCODE1 = "000";
	var SUCCESSCODE2 = "99";
	var INSERT = "insert",
		UPDATE = "update",
		DELETE = "delete",
		SUBMIT = "submit",
		ZCUPDATE = "zcupdate",
		ZC = "zc";
	var click_node_input_id = parent.$("#leftFrame")[0].contentWindow.$("#click_input_id").val();//left菜单节点点击的菜单ID
	var table_url_input = "";//菜单路径
	
	//table_action = "submit";//测试，可删除
	/**
	 * 更新左边菜单的保存状态与节点地址的action
	 * 保存状态：已保存、已申报
	 * 节点地址的action状态：initial、edit、display
	 **/
	if (click_node_input_id != "undefined" && click_node_input_id != ""&&click_node_input_id != "null"){
		var save_status = parent.$("#leftFrame")[0].contentWindow.$("#"+click_node_input_id+"_SAVE_SPAN");
		var table_url_input = parent.$("#leftFrame")[0].contentWindow.$("#"+click_node_input_id);
		
		if((INSERT == table_action||UPDATE == table_action)&&(rtnCgbz == SUCCESSCODE||rtnCgbz == SUCCESSCODE1)){
			save_status.html("(已保存)");
			save_status.attr({state:"save"});
			table_url_input.val(table_url_input.val().replace("initial","edit"));
		}else if(DELETE == table_action&&(rtnCgbz == SUCCESSCODE||rtnCgbz == SUCCESSCODE1)){
			save_status.html("");
			/**
			 * 因在测试过程发现，选填的申报表先保存再删除再点击申报时，先填表没填也会出现“已申报”的状态，
			 * 经发现是因为删除报表后没有修改菜单的state属性的值，故在此对state进行重新赋值
			 * add by zwx20180816
			 * */
			save_status.attr({state:""});
			table_url_input.val(table_url_input.val().replace("edit","initial"));
		}else if((ZC == table_action || ZCUPDATE == table_action)&&rtnCgbz == SUCCESSCODE){//申报状态是11的情况
			save_status.html("(已暂存)");
			save_status.attr({state:"zc"});
			table_url_input.val(table_url_input.val().replace("initial","edit"));
		}else if(SUBMIT == table_action&&rtnCgbz == SUCCESSCODE2){//申报状态是99的情况
			var leftFrameWin = parent.$("#leftFrame")[0].contentWindow;
			changeMenu99(click_node_input_id,leftFrameWin);
		}else if(SUBMIT == table_action&&(rtnCgbz == SUCCESSCODE||rtnCgbz == SUCCESSCODE1)){
			var leftFrameWin = parent.$("#leftFrame")[0].contentWindow;
			var menuType = "";//菜单类型.  1：可重复申报   2：利息所得税   d
			var cfsbTable = new Array("CWXX_SBB_FJMKJBGB_2015","SBB_ZZS_YJSKB_2016");//可重复申报表名
			for(var i=0;i<cfsbTable.length;i++){
				if(click_node_input_id.indexOf(cfsbTable[i])>-1){
					menuType = "1";
					break;
				}
			}
			
			if(click_node_input_id.indexOf("LXSDS")>-1){
				menuType = "2";
			}
			
			switch(menuType){
				case "1":
					changeMenu1(click_node_input_id,cfsbTable,leftFrameWin);
					break;
				case "2":
					changeMenu2(click_node_input_id,leftFrameWin);
					break;
				default:
					changeMenuDefault(click_node_input_id,leftFrameWin);
					break;
			}
		}
	}
	//年报菜单重新加载
	if(click_node_input_id.indexOf("SBB_NDSDS_2014_A_TBBD") > -1 || click_node_input_id.indexOf("SBB_NDSDS_2016_A_TBBD")> -1 ||
		click_node_input_id.indexOf("SBB_NDGLWLBGB_2016_TBBD") > -1 || click_node_input_id.indexOf("SBB_NDSDS_2017_A_TBBD")> -1){
		//start 增加一个填报表单的ID，用于存放当前点击的填报表单刷新时重新展开菜单  20170414
		if($("#tbbdId",parent.document).length>0){
			$("#tbbdId",parent.document).val(click_node_input_id);
		}else{
			$(parent.document.body).append($("<input id='tbbdId' value='"+click_node_input_id+"'/>"));
		}
		//end
		
		var leftWin = parent.$("#leftFrame")[0].contentWindow;
		leftWin.location.href = leftWin.location.href;
	}
	
	//点击正式申报,关闭风险扫描服务菜单
	if(click_node_input_id.indexOf("ZSSB_SBB_NDSDS_2014_A_NSSBB") > -1){
		if(rtnCgbz == SUCCESSCODE1){
			//获取菜单ID
			var tzsm = parent.$("#leftFrame")[0].contentWindow.$("input[id^='SBB_NDSDS_2014_A_TZSM']");
			//获取菜单对应class
			tzsm.closest(".navtow-text").remove();
		}
	}
	else if(click_node_input_id.indexOf("ZSSB_SBB_NDSDS_2017_A_NSSBB") > -1){
		if(rtnCgbz == SUCCESSCODE1){
			//获取菜单ID
			var tzsm = parent.$("#leftFrame")[0].contentWindow.$("input[id^='SBB_NDSDS_2017_A_TZSM']");
			//获取菜单对应class
			tzsm.closest(".navtow-text").remove();
		}
	}
});


function changeMenu1(click_node_input_id,cfsbTable,leftFrameWin){
	for(var i=0;i<cfsbTable.length;i++){
		if(click_node_input_id.indexOf(cfsbTable[i])>-1){
			var saveDiv = leftFrameWin.$("#"+click_node_input_id+"").closest("div.nav-tow");
			$(saveDiv.find(".savestate")).each(function(){
				var table_url_submit = $(this).prev("input");
				if($(this).attr("state") == "save"||$(this).attr("zssb") == "Y"){
					$(this).html("");
					$(this).attr({state:""});
					table_url_submit.val(table_url_submit.val().replace("edit","initial"));
				}
			});
		}
	}
	
}

function changeMenu2(click_node_input_id,leftFrameWin){
	var prev_node = leftFrameWin.$("#"+click_node_input_id+"").closest("ul").prev("p");
	var save_status = leftFrameWin.$("#"+click_node_input_id+"_SAVE_SPAN");
	var table_url_input = leftFrameWin.$("#"+click_node_input_id+"");
	
	$("a span.savestate",prev_node).html("(已申报)");
	$("a input",prev_node).val($("a input",prev_node).val().replace("edit","display"));
	
	save_status.html("(已申报)");
	table_url_input.val("");
	
}

function changeMenuDefault(click_node_input_id,leftFrameWin){
	var saveDiv = leftFrameWin.$("#"+click_node_input_id+"").closest("div.nav-tow");
	$(saveDiv.find(".savestate")).each(function(){
		var table_url_submit = $(this).prev("input");
		var idStr = $(this).attr("id");
		if($(this).attr("zssb") == "Y"){
			$(this).html("(已申报)");
			$(this).attr({state:"submit"});
			table_url_submit.val("");
		}
		if($(this).attr("state") == "save"){
			$(this).html("(已申报)");
			$(this).attr({state:"submit"});
			table_url_submit.val(table_url_submit.val().replace("edit","display"));
		}
		/**
		 * 处理第一次申报成功后，在未重新加载页面时，未保存的表的url去除掉防止还可以继续点击申报 add by zwx20180814
		 * */
		else{
			//剔除财务报表申报查询菜单
			if(idStr.indexOf("_CX_") == -1){
				table_url_submit.val("");
			}
		}
	});
}

function changeMenu99(click_node_input_id,leftFrameWin){
	var saveDiv = leftFrameWin.$("#"+click_node_input_id+"").closest("div.nav-tow");
	$(saveDiv.find(".savestate")).each(function(){
		var table_url_submit = $(this).prev("input");
		if($(this).attr("zssb") == "Y"){
			$(this).html("(已提交)");
			$(this).attr({state:"submit"});
			table_url_submit.val("");
		}
		if($(this).attr("state") == "save"){
			$(this).html("(已提交)");
			$(this).attr({state:"submit"});
			table_url_submit.val(table_url_submit.val().replace("edit","display"));
		}
		
	});
}


