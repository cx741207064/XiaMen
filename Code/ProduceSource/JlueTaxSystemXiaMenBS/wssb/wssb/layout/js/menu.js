$(document).ready(function(){
	var datas = nodeDatas;
	var menuDiv = $("#nav");
	bulidMenu(datas,menuDiv);
	
	if(sblx != null && sblx != "" && sblx != "null"){
		getTablename(datas);
	}
	
	nodeClick(menuDiv,{
		onclick:function(nUrlObj){
			var click_input_id = nUrlObj.attr("id");
			$("#click_input_id").val(click_input_id);//左边菜单赋值（全局）
			//if(click_input_id.indexOf("CWXX")==0){//测试
			/*if(click_input_id.indexOf("ZSSB_SBB_NDSDS_2016_A_NSSBB")==0){
				parent.document.getElementById("workspace").src = path + "/" + nUrlObj.val();
			}else */
			if(click_input_id.indexOf("ZSSB_")==0){//显示遮罩层
				if(confirm("请确认是否正式申报?")){
					parent.document.getElementById("workspace").src = path + "/" + nUrlObj.val();
					window.parent.showOverlay();
				}
			}else{
				parent.document.getElementById("workspace").src = path + "/" + nUrlObj.val();
			}
			
		}
	});
	
	//当用户保存填报表单的时候重新加载树，并打开该填报表单对应的模块   20170414
	var tbbdObj = parent.$("#tbbdId");//填报表单保存时动态增加的一个元素在
	if(tbbdObj.val() != undefined){
		var tbbd = parent.$("#leftFrame")[0].contentWindow.$("input[id^='"+tbbdObj.val()+"']");
		var tbbdMenu = tbbd.closest(".nav-tow").prev(".navone-text");
		tbbdMenu.click();
	}
	
});

function getTablename(datas){
	
	var isExit = false;
	var str = "";
	var count = 0;          
	
	$.each(datas, function(i, item) {

		if (typeof item.children != 'undefined' && count == 0) {
			for ( var j = 0; j < item.children.length; j++) {
				
				if (typeof item.children[j].attributes != 'undefined') {
//					alert(item.children[j].id);
//					alert(item.children[j].attributes.table_url);
//					alert(item.children[j].attributes.zssb_btn);
					if (item.children[j].attributes.zssb_btn == 'N') {
						var tablename = item.children[j].id;
						var url = item.children[j].attributes.table_url;
						
						if(sblx=="QYSDS"){
							str="企业所得税";
							if(tablename.indexOf("SBB_JDSDS_2018_A")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("SBB_JDSDS_2018_B")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}
						else if(sblx=="ZZS_YBNSR"){
							str="增值税一般纳税人";
							if(tablename.indexOf("SBB_ZZS_YGZ_YBNSR")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}
						else if(sblx=="ZZS_XGM"){
							str="增值税小规模";							
							if(tablename.indexOf("SBB_ZZS_YGZ_XGMNSR_2005")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="XFS"){
							str="消费税";							
							if(tablename.indexOf("SBB_XFS_2015_YL_YSXFPXFSNSSBB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("SBB_XFS_2015_JY")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("SBB_XFS_2015_DC_DCXFSNSSBB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("SBB_XFS_2015_QC_XQCXFSNSSBB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("SBB_XFS_2015_TL_TLXFSNSSBB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("SBB_XFS_2015_QT")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("SBB_XFS_2015_JL")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("SBB_XFS_2018_CPY_CPYXFSNSSBB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="WHSYJSF"){
							str="文化事业建设费";							
							if(tablename.indexOf("SBB_WHSYJSF")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="FQDQDZCP"){
							str="废弃电器电子产品基金";							
							if(tablename.indexOf("SBB_FQDZCPCL_2015")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="CWBB_ZHJK"){
							isExit = true;
							count = 1;
							parent.document.getElementById("workspace").src = path + "/" + "MainServlet?TABLE_NAME=DZBS_QYJKSQ&TABLE_ACTION=display&NSRSBH="+nsrsbh+"&SSSQ_Q=20050301&SSSQ_Q=20050331";
						}else if(sblx=="KQY"){
							isExit = true;
							count = 1;
							parent.document.getElementById("workspace").src = path + "/" + "wssb/kqyss/entrance.jsp";
						}else if(sblx=="SSKK"){
							isExit = true;
							count = 1;
							parent.document.getElementById("workspace").src = path + "/" + "MainServlet?TABLE_NAME=DZBS_SFJN&TABLE_ACTION=display&NSRSBH="+nsrsbh+"&SSSQ_Q=20050301&SSSQ_Q=20050331";
						}else if(sblx=="GZSB_XGM"){
							isExit = true;
							count = 1;
							parent.document.getElementById("workspace").src = path + "/" + "MainServlet?TABLE_NAME=DZBS_SBGZ&TABLE_ACTION=display&NSRSBH="+nsrsbh+"&SSSQ_Q=20050301&SSSQ_Q=20050331";
						}else if(sblx=="CWBB_QYKJZZ"){
							str="财务报表（企业会计准则）";							
							if(tablename.indexOf("CWXX2016QYKJZZYBQY_ZCFZB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("CWXX2013ZQ_ZCFZB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("CWXX2016QYKJZZSYYH_ZCFZB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}else if(tablename.indexOf("CWXX2016QYKJZZBX_ZCFZB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="CWBB_XQYKJZZ"){
							str="财务报表（小企业会计准则）";							
							if(tablename.indexOf("CWXX2016XQYKJZZ_ZCFZB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="CWBB_QYKJZD"){
							str="财务报表（企业会计制度）";							
							if(tablename.indexOf("CWXX2016QYKJZD_ZCFZB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="CWBB_SYDWKJZD"){
							str="财务报表（事业单位会计制度）";							
							if(tablename.indexOf("CWXX2016SYDW_ZCFZB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="CWBB_MJFYLZZ"){
							str="财务报表（民间非营利组织）";							
							if(tablename.indexOf("CWXX2016MJFYLZZ_ZCFZB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="CWBB_HBBB"){
							str="财务报表（合并报表）";							
							if(tablename.indexOf("CWXX2016HBBB_HBZCFZB_NB")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}else if(sblx=="SBCX"){
							isExit = true;
							count = 1;
							parent.document.getElementById("workspace").src = path + "/" + "MainServlet?TABLE_NAME=DZBS_QUERY&TABLE_ACTION=display&NSRSBH="+nsrsbh+"&SSSQ_Q=20050301&SSSQ_Q=20050331";
						}else if(sblx=="SSSRYBB"){
							str="税收收入预报";
							if(tablename.indexOf("CWXX_YBB_ZDSY")>-1){
								isExit = true;
								count = 1;
								parent.document.getElementById("workspace").src = path + "/" + url;
								break;
							}
						}

					}

				}
			}
		}
});
	if(!isExit){
		alert("您当前不需要申报"+str+"申报表，或未被授权网上申报！");
	}
}


var bulidMenu = function(datas, obj) {
	var saveState = "";
	var ybc_label = "(已保存)";
	var ytj_label = "(已提交)";
	var ysb_label = "(已申报)";
	var yzc_label = "(已暂存)";
	$.each(datas, function(i, item) {
		//菜单主项
		var div1 = $("<div class='nav-one'/>");
		var p1 = $("<p class='navone-text'>");
		var a1 = $("<a><span title='" + item.name + "'>" + item.name+ "</span></a>");
		if (typeof item.attributes.table_url != 'undefined') {
			a1.append($("<input type='hidden' id='" + item.id + "' value='"+ item.attributes.table_url + "'/>)"));
		}
		p1.appendTo(div1).append(a1);
		
		//具体菜单项
		var div2 = $("<div class='nav-tow'/>");
		if (i == 0) {
			p1.addClass("n1t");
		} else {
			div2.addClass("displaynone");
		}

		if (typeof item.children != 'undefined') {
			for ( var j = 0; j < item.children.length; j++) {
				if (typeof item.children[j].attributes != 'undefined') {
					if (item.children[j].attributes.zssb_btn == 'Y') {
						var ul = $("<ul/>");
						var li = $("<li/>");
						var a  = $("<a/>");
						var span = $("<span>"+item.children[j].name+"</span>");
						var input = $("<input type='hidden' id='"+item.children[j].id+"' value='"+ item.children[j].attributes.table_url+"'/>");
						var saveSpan = $("<span class='savestate' id='"+item.children[j].id+"_SAVE_SPAN'></span>");
						if(item.children[j].attributes.fwsk == true){
							input.attr({sffwsk:"Y"});
						}
						a.append(span).append(input).appendTo(li);
						li.appendTo(ul);
						
						//显示（保存/提交状态）
						if(item.children[j].attributes.table_isfill =='Y'&&item.children[j].attributes.group_issb == 'Y'&&item.children[j].attributes.cgbz == '99'){
							saveState = ytj_label;
							saveSpan.attr({state:"submit"});
						}else if(item.children[j].attributes.table_isfill =='Y'&&item.children[j].attributes.group_issb == 'Y'){
							saveState = ysb_label;
							saveSpan.attr({state:"submit"});
						}else{
							saveSpan.attr({state:""});
							saveState = "";
						}
						saveSpan.attr({zssb:"Y"});
						saveSpan.html(saveState);
						a.append(saveSpan);
						div2.append(ul);
					} else {
						var p = $("<p class='navtow-text'/>");
						var a = $("<a/>")
						var span = $("<span title='"+item.children[j].name+"'>"+item.children[j].name+"</span>");
						var input = $("<input type='hidden' id='"+item.children[j].id+"' value='"+item.children[j].attributes.table_url+"'/>");
						var saveSpan = $("<span class='savestate' id='"+item.children[j].id+"_SAVE_SPAN'></span>");
						a.append(span).append(input).appendTo(p);
						//显示（保存/提交状态）
						if(item.children[j].attributes.table_isfill =='Y'&&item.children[j].attributes.group_issb == 'Y'&&item.children[j].attributes.cgbz == '99'){
							saveState = ytj_label;
							saveSpan.attr({state:"submit"});
						}else if(item.children[j].attributes.table_isfill =='Y'&&item.children[j].attributes.group_issb == 'Y'){
							saveState = ysb_label;
							saveSpan.attr({state:"submit"});
						}else if(item.children[j].attributes.table_isfill =='Y'&&item.children[j].attributes.group_issb == 'N'&&item.children[j].attributes.cgbz == '11'){
							saveState = yzc_label;
							saveSpan.attr({state:"save"});
						}else if(item.children[j].attributes.table_isfill =='Y'&&item.children[j].attributes.group_issb == 'N'){
							saveState = ybc_label;
							saveSpan.attr({state:"save"});
						}else{
							saveSpan.attr({state:""});
							saveState = "";
						}
						saveSpan.html(saveState);
						
						//有二层子节点的时候改变样式
						var second = item.children[j].children;
						if(second!= 'undefined'&&second.length >0){
							a.addClass("secondChild");
						}
						
						a.append(saveSpan);
						div2.append(p);
					}

					//二层子节点的情况
					var secondChild = item.children[j].children;
					for ( var k = 0; k < secondChild.length; k++) {
						if (secondChild[k].attributes.zssb_btn == 'Y') {
							var ul = $("<ul/>");
							var li = $("<li/>");
							var a  = $("<a/>");
							var span = $("<span>"+secondChild[k].name+"</span>");
							var input = $("<input type='hidden' id='"+secondChild[k].id+"' value='"+ secondChild[k].attributes.table_url+"'/>");
							var saveSpan = $("<span class='savestate' id='"+secondChild[k].id+"_SAVE_SPAN'></span>");
							a.append(span).append(input).appendTo(li);
							li.appendTo(ul);
							
							//显示（保存/提交状态）
							if(secondChild[k].attributes.table_isfill =='Y'&&secondChild[k].attributes.group_issb == 'Y'&&secondChild[k].attributes.cgbz == '99'){
								saveState = ytj_label;
								saveSpan.attr({state:"submit"});
							}
							if(secondChild[k].attributes.table_isfill =='Y'&&secondChild[k].attributes.group_issb == 'Y'){
								saveState = ysb_label;
								saveSpan.attr({state:"submit"});
							}else{
								saveState = "";
								saveSpan.attr({state:""});
							}
							saveSpan.attr({zssb:"Y"});
							saveSpan.html(saveState);
							a.append(saveSpan);
							div2.append(ul);
						} else {
							var p = $("<p class='navthree-text'/>");
							var a = $("<a/>")
							var span = $("<span title='"+secondChild[k].name+"'>"+secondChild[k].name+"</span>");
							var input = $("<input type='hidden' id='"+secondChild[k].id+"' value='"+secondChild[k].attributes.table_url+"'/>");
							var saveSpan = $("<span class='savestate' id='"+secondChild[k].id+"_SAVE_SPAN'>"+saveState+"</span>");
							a.append(span).append(input).appendTo(p);
							//显示（保存/提交状态）
							if(secondChild[k].attributes.table_isfill =='Y'&&secondChild[k].attributes.group_issb == 'Y'&&secondChild[k].attributes.cgbz == '99'){
								saveState = ytj_label;
								saveSpan.attr({state:"submit"});
							}else if(secondChild[k].attributes.table_isfill =='Y'&&secondChild[k].attributes.group_issb == 'Y'){
								saveState = ysb_label;
								saveSpan.attr({state:"submit"});
							}else if(secondChild[k].attributes.table_isfill =='Y'&&secondChild[k].attributes.group_issb == 'N'&&secondChild[k].attributes.cgbz == '11'){
								saveState = yzc_label;
								saveSpan.attr({state:"save"});
							}else if(secondChild[k].attributes.table_isfill =='Y'&&secondChild[k].attributes.group_issb == 'N'){
								saveState = ybc_label;
								saveSpan.attr({state:"save"});
							}else{
								saveState = "";
								saveSpan.attr({state:""});
							}
							saveSpan.html(saveState);
							a.append(saveSpan);
							div2.append(p);
						}
					}
				}
			}
		}
		div1.append(div2).appendTo($(obj));
});
};

//菜单点击
var nodeClick = function(obj,paramCallback){
		obj.each(function(){
			var $this = $(this);
			var menuNodes = {
				init : function(){
					menuNodes.click();
				},
				click : function(){
					$(".nav-one>.navone-text",$this).on("click",function(){
						$(this).addClass("n1t");
						$(this).next("div").slideToggle("fast").end().parent("div").siblings().find(".nav-tow").hide("fast");
						if($(this).parent("div").siblings().find(".navone-text").hasClass("n1t")){
							$(this).parent("div").siblings().find(".navone-text").removeClass("n1t");
						}
						
						var nUrlObj = $("a>input",this);
						if(typeof nUrlObj.val() != 'undefined'&&nUrlObj.val()!="undefined"&&nUrlObj.val()!=""){
							if(paramCallback.onclick){
								paramCallback.onclick(nUrlObj);
							}
						}
					});
					
					$(".nav-one>.nav-tow>p",$this).on("click",function(){
						var nUrlObj = $("a>input",this);
						if(typeof nUrlObj.val() != 'undefined'&&nUrlObj.val()!="undefined"&&nUrlObj.val()!=""){
							if(paramCallback.onclick){
								paramCallback.onclick(nUrlObj);
							}
						}
					});
					
					$(".nav-one>.nav-tow>ul>li",$this).on("click",function(){
						var nUrlObj = $("a>input",this);
						if(typeof nUrlObj.val() != 'undefined'&&nUrlObj.val()!="undefined"&&nUrlObj.val()!=""){
							if(paramCallback.onclick){
								paramCallback.onclick(nUrlObj);
							}
						}
					});
				}
			};
			menuNodes.init();
			
		});
};
