







<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">   
<title>厦门税务办税服务大厅</title>
<style type="text/css" media="print">
	.noprint{
		display:none
	}
</style>
<link href="/res/otp4/css/otp4-page.css" rel="stylesheet" type="text/css" />
<script src="/res/otp4/js/lib/jquery-1.9.1.js" type="text/javascript"></script>
<script src="/res/otp4/js/lib/jquery.fix.clone.js" type="text/javascript"></script>
<script src="/res/otp4/js/lib/jquery.json.js" type="text/javascript"></script>
<script src="/res/otp4/js/lib/layer/layer.js" type="text/javascript"></script>
<script src="/res/otp4/js/lib/ztree/jquery.ztree.all-3.5.js" type="text/javascript"></script>

<script src="/res/otp4/js/otp4-base.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-utils.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-core.js" type="text/javascript" ></script>
<script src="/res/otp4/js/otp4-route.js" type="text/javascript"></script>

<script src="/res/otp4/js/lib/avalon.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-iehack.js" type="text/javascript"></script>

<script src="/res/otp4/js/otp4-selmodel.js" type="text/javascript"></script>
<script src="/res/otp4/js/lib/My97DatePicker/WdatePicker.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-expression.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-controls.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-upload.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-validate.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-validate-ext.js?v2" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-idcode.js?v2" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-froute.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-filters.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-menu.js" type="text/javascript"></script>
<script src="/res/otp4/js/otp4-menu-ie6.js" type="text/javascript"></script>
<script src="/res/js/otp4-app-config.js" type="text/javascript"></script>

<!-- <script type='text/javascript' src='http://static.gridsumdissector.com/js/Clients/GWD-803239-EBD555/gs.js'></script>	 -->


		
<meta name="decorator" content="blank-layout" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="/res/css/onlineTax.css"/>
<style type="text/css">
	#bsfwTd ul li:hover{
		cursor:pointer;
		color:#1693f0;
		font-weight:bold;
		border-bottom:2px solid #1693F0;
	}
	#dzcdwz{
	    margin-right: 50px;
	}
	.active{
		color:#1693f0;
		font-weight:bold;
		border-bottom:2px solid;		
	}
	
	.normal{
		color:black;
		font-weight:normal;
		border-bottom:0px;
	}
	.navspan {
	    display: list-item;
	    font-family: "微软雅黑";
	}
	.dzcd_li_btn {
	    cursor: pointer;
	}
	.dzcddiv a:hover{
		color: blue;	
	}
	.dzcddiv span:hover{
		color: blue;	
	}
</style>

<script type="text/javascript" src="/res/js/compatibility.js"></script>





<script type="text/javascript">
	// 网上申报系统
	var wssbxt_url = "http://wssb.xm-n-tax.gov.cn:7001/wssb/wssb/public/jsp/wssb.jsp";
	// 发票网上申领
	var fpwssl_url = "http://59.57.253.214:7001/wssl_nsrd/?id=91350200MA2Y10EC4K&timestamp=153E6541177313";
	// 三方协议签订
	var sfxyqd_url = "http://znhd.xm-n-tax.gov.cn:7001/gswzglpt/jsp/sfxy/sfxy_gnlb.jsp?nsrsbh=91350200MA2Y10EC4K&timestamp=153E6541177313";
	// 车辆购置税查询 
	var clgzscx_url = "http://znhd.xm-n-tax.gov.cn:7001/gswzglpt/jsp/cgs/cgscx.jsp";

	//网络发票查询
	var wlfpcx_url = "http://218.5.84.66:7001/fpgl/jsp/wlfp/kpxxcx/nsr_kpxxcx_index.jsp?nsrsbh=91350200MA2Y10EC4K&timestamp=153E6541177313";

	//无纸化办公
	var wzhbg_url = "http://222.76.203.38:9558/adp/xmsatProcessNoLogin?wsbq=wsbs"
	// 代开发票
	var dkfp_url = "http://222.76.203.38:9558/adp/xmsatProcessNoLogin?wsbq=dkfp";
	// 证明开具
	var zmkj_url = "http://222.76.203.38:9558/adp/xmsatProcessNoLogin?wsbq=zmkj";
	
	// 在线预约
	var zxyy_url = "http://222.76.203.36:7001/bstgl/jsp/xmntax/reserve/reserveSummary.jsp";

	var zxyy_data_url = "http://www.xm-n-tax.gov.cn/banshuifuwu/index/bsyyindex.html";
	
	var nszx_url = "http://12366ww.xm-n-tax.gov.cn:8091/xmgsww/WslyBLH_index.do?bz=2";
	
	var sswsspcx_url = "http://www.xm-n-tax.gov.cn/nsfw/wshshpjg/shshwshchx/";

	var fpzwcx_url = "http://fpcx.xmtax.gov.cn:7002/fpcx/index.do?nsrsbh=91350200MA2Y10EC4K&timestamp=153E6541177313";
	
</script>
<script type="text/javascript">


function chagneNav(nav,index,rsrc){
	$("#leftTd").css("display", "block");
	$("#bsfwTdUl li").each(function(index,e){
		$(e).addClass("normal");
	});
	
	$(nav).removeClass();
	$(nav).addClass("active");
	
	
	if(index==5 || index == 4){//稽核查询特殊操作
	    $("#rFrame").attr("src", rsrc+"?"+Math.random());
		$("#tr1").hide();
		$("#tr2").show();
		
		return ;
	}else{
		$("#tr2").hide();
		$("#tr1").show();
	}
	
	$("#bsfwTdLeft ul").each(function(idx){
		if(idx + 1 == index){
			$(this).css("display", "block");
			var navLi = $(this).find("li")[0];
			chagneTableRight(navLi);
		}else{
			$(this).css("display", "none");
		}
	});
	//parentAutoHeight();
}

function wlfpcxAction(nav,url){

	$("#leftTd").css("display", "block");
	$("#bsfwTdUl li").each(function(index,e){
		$(e).addClass("normal");
	});
	
	$(nav).removeClass();
	$(nav).addClass("active");

	 $("#rFrame").attr("src", url + "&" + Math.random());
	 $("#rFrame").height(500);
	 $("#tr1").hide();
	 $("#tr2").show();
}

function chagneTableRight(navLi){
	if(!navLi){
		$("#rightFrame").attr("src", "#");
		return;
	}
	$(navLi).parent().find("li").each(function(idx){
		this.className = "tableLeftLi";
	});

	$(navLi).parent().find("img").each(function(idx){
		this.src = "/res/images/bsfwhall/bsfw_arrow_black.png";
	});

	navLi.className = "tableLeftLi_on";
	$(navLi).find("img").each(function(idx){
		this.src = "/res/images/bsfwhall/bsfw_arrow_white.png";
	});
	
	//改变rightFrame src
	var rsrc = $(navLi).attr("rsrc");
	if(rsrc){
		$("#rightFrame").attr("src", rsrc);
	}
}

function parentAutoHeight(){
	var mf = parent.document.getElementById("mainFrame");
	mf.height = document.body.clientHeight;
}

function setRightFrameWidth(){
	var width = $("#rightTd").width();
	width = width < 850 ? 850 : width;
	$("#rightFrame_div").width(width);
	$("#rightFrame").width(width - 10);
}
/*
 定制菜单
*/

function openCustom(){
	var current_yjcd_id = $("#yjcd_id").val();
	//遍历查出当前未添加的菜单
	for(var i = 0; i < 8; i++){
		$("#dzcd_pic_"+i).bind("click",function(){
			return false;
		});
		if($("#bsfwLi" + i).is(':hidden')){
			$("#bsfwLi" + i).fadeIn(1000);
			$("#img_add_" + i).fadeIn(1000);
		}else{
			if($("#img_add_" + i).is(':hidden')){
				$("#img_subtract_" + i).fadeIn(1000);
			}
		}
	}
	$("#dzcd_save").fadeIn(1000);
}
function addMenu(ejcd_id){
	var yjcd_id = $("#yjcd_id").val();
	$.ajax({
		type: "post",
		url: "/bsfw/login/addMenu.do",
		data:{
			yjcd_id: yjcd_id,
			ejcd_id: ejcd_id
		},
		dataType: "json",
		success: function(data){
			//debugger;
			//location.reload();
			//$(".ejcd_id_" + ejcd_id).show();
			$("#img_subtract_" + ejcd_id).hide();
			$("#img_add_" + ejcd_id).fadeIn(200);
			
		}
	});
}

function deleteMenu(ejcd_id){
	var yjcd_id = $("#yjcd_id").val();
	$.ajax({
		type: "post",
		url: "/bsfw/login/deleteMenu.do",
		data:{
			yjcd_id: yjcd_id,
			ejcd_id: ejcd_id
		},
		dataType: "json",
		success: function(data){
			//debugger;
			//location.reload();
			//$(".ejcd_id_" + ejcd_id).hide();
			$("#img_add_" + ejcd_id).hide();
			$("#img_subtract_" + ejcd_id).fadeIn();
		}
	});
}
function saveCustom(){
	//遍历查出当前未添加的菜单
	for(var i = 0; i < 8; i++){
		$("#dzcd_pic_"+i).unbind("click");
		if($("#img_subtract_" + i).is(':hidden')){
			$("#bsfwLi" + i).fadeOut(1000);
			$("#img_add_" + i).fadeOut(1000);
		}else{
			$("#img_subtract_" + i).fadeOut(1000);
		}
	}
	$("#dzcd_save").fadeOut(1000);
	
}
function loadCustomMenu(){
	var sysUserMenu = "";
	var menus = sysUserMenu.split(",");
	var yjcd_id = $("#yjcd_id").val();
	//alert("当前一级菜单为"+yjcd_id);
	for(var i = 0; i < 8; i++){
		$("#bsfwLi" + i).show();
	}
	for(var i = 0; i < menus.length; i++){
		if(menus[i].split("_")[0] == yjcd_id){
			var id = menus[i].split("_")[1];
			$("#bsfwLi" + id).hide();
		}
	}
}

$(function(){
	setRightFrameWidth();
	var lhpturl='chagneNav(this,1)';
	var lhptMenuName='涉税信息查询';
	var menu_item_id= 'SSCX_001';
	//var menu_item_id=menuMap['menu_item_id'];
	var leftId="leftNav"+menu_item_id.substring(7,12)+"_001";
	var liObj=document.getElementById(leftId);
	var ctx='';
	if(lhpturl!='' && lhpturl!='null'){
		
    	    $.post(
    	     "/lhpt/dz.do",
			{lx:'removeSession'},
			function(data) {
			if(data.success){
				if(menu_item_id.indexOf('SSCX_001')>-1){
					 var ssblObj=document.getElementById("bsfwLi0");
					 chagneNav(ssblObj,1);
					 chagneTableRight(liObj);
			     }else if(menu_item_id.indexOf('SSCX_002')>-1){
			    	 var ssblObj=document.getElementById("bsfwLi1");
					 chagneNav(ssblObj,2);
					 chagneTableRight(liObj);
			     }else if(menu_item_id.indexOf('SSCX_003')>-1){
			    	 var ssblObj=document.getElementById("bsfwLi2");
					 chagneNav(ssblObj,3);
					 chagneTableRight(liObj);
			     }else if(menu_item_id.indexOf('SSCX_004')>-1){
			    	 var ssblObj=document.getElementById("bsfwLi3");
					 chagneNav(ssblObj,4,lhpturl);
					 chagneTableRight(liObj);
			     }else if(menu_item_id.indexOf('SSCX_005')>-1){
			    	 var ssblObj=document.getElementById("bsfwLi4");
					 chagneNav(ssblObj,5,lhpturl);
					 chagneTableRight(liObj);
			     }else if(menu_item_id.indexOf('SSCX_006')>-1){
			    	 var ssblObj=document.getElementById("bsfwLi5");
			    	 wlfpcxAction(ssblObj, 'http://218.5.84.66:7001/fpgl/jsp/wlfp/kpxxcx/nsr_kpxxcx_index.jsp?nsrsbh=91350200MA2Y10EC4K&timestamp=153E6541177313')
					 chagneTableRight(liObj);
			     }else if(menu_item_id.indexOf('SSCX_008')>-1){
			    	 var ssblObj=document.getElementById("bsfwLi6");
					 chagneNav(ssblObj,8);
					 chagneTableRight(liObj);
			     }else if(menu_item_id.indexOf('SSCX_009')>-1){
			    	 var ssblObj=document.getElementById("bsfwLi7");
					 chagneNav(ssblObj,9);
					 chagneTableRight(liObj);
			     } 
				}
			
      });
    }
   loadCustomMenu();
    ckdjdx();    
});

function  ckdjdx(){
	var urlcs = window.location;
	if(urlcs){
		var str = urlcs.search.substr(1);
		$("#"+str).trigger('click');
	}
}


</script>

	</head>

<div ms-controller="app" class='xf-controller' >
<script>
!function(){
	var vm=avalon.define({
		$id: "app",
		user:{
			
		}
	});
}();	

</script>
<div class="xf-container" >
<div xf-view='' >


<div class="bsfwContent" style="display:block;">
 <div id="bsfwTd"><div class="TableTitle">涉税查询</div></div>
 <div id="bsfwTd" style="background: #fbfbfb;height:50px;display:none">
 	<input type="hidden" value="8" name="yjcd_id" id="yjcd_id"/>
   <ul  id="bsfwTdUl">
     <li id="bsfwLi0"onclick="chagneNav(this,1)" class="active" >基本信息
     	<a class="abtn floatLeft bsfwpic1 ahover"  target="_blank" id="dzcd_pic_0">
			<img class="dzcd_img_add" id="img_add_0" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(0);"/>
			<img class="dzcd_img_subtract" id="img_subtract_0" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(0);"/>
		</a>
     </li>
     <li id="bsfwLi1" onclick="chagneNav(this,2)" >出口退税查询
     	<a class="abtn floatLeft bsfwpic1 ahover"  target="_blank" id="dzcd_pic_1">
			<img class="dzcd_img_add" id="img_add_1" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(1);"/>
			<img class="dzcd_img_subtract" id="img_subtract_1" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(1);"/>
		</a>
     </li>
     <li id="bsfwLi2" onclick="chagneNav(this,3)">抄税数据查询
     	<a class="abtn floatLeft bsfwpic1 ahover"  target="_blank" id="dzcd_pic_2">
			<img class="dzcd_img_add" id="img_add_2" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(2);"/>
			<img class="dzcd_img_subtract" id="img_subtract_2" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(2);"/>
		</a>
     </li>
     <li id="bsfwLi3" onclick="chagneNav(this,4,'/third/rzcx/index.do')">认证信息查询
     	<a class="abtn floatLeft bsfwpic1 ahover"  target="_blank" id="dzcd_pic_3">
			<img class="dzcd_img_add" id="img_add_3" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(3);"/>
			<img class="dzcd_img_subtract" id="img_subtract_3" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(3);"/>
		</a>
     </li>
     <li id="bsfwLi4" onclick="chagneNav(this,5,'/third/jhjg/jhjg_index.do')">稽核结果查询
     	<a class="abtn floatLeft bsfwpic1 ahover"  target="_blank" id="dzcd_pic_4">
			<img class="dzcd_img_add" id="img_add_4" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(4);"/>
			<img class="dzcd_img_subtract" id="img_subtract_4" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(4);"/>
		</a>
     </li>
     <li id="bsfwLi5" onclick="wlfpcxAction(this, 'http://218.5.84.66:7001/fpgl/jsp/wlfp/kpxxcx/nsr_kpxxcx_index.jsp?nsrsbh=91350200MA2Y10EC4K&timestamp=153E6541177313')">网络发票查询
     	<a class="abtn floatLeft bsfwpic1 ahover"  target="_blank" id="dzcd_pic_5">
			<img class="dzcd_img_add" id="img_add_5" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(5);"/>
			<img class="dzcd_img_subtract" id="img_subtract_5" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(5);"/>
		</a>
     </li>
     <li id="bsfwLi6" onclick="chagneNav(this,8)">缴款凭证信息
     	<a class="abtn floatLeft bsfwpic1 ahover"  target="_blank" id="dzcd_pic_6">
			<img class="dzcd_img_add" id="img_add_6" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(6);"/>
			<img class="dzcd_img_subtract" id="img_subtract_6" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(6);"/>
		</a>
     </li>
     <li id="bsfwLi7" onclick="chagneNav(this,9)">公共查询
     	<a class="abtn floatLeft bsfwpic1 ahover"  target="_blank" id="dzcd_pic_7">
			<img class="dzcd_img_add" id="img_add_7" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(7);"/>
			<img class="dzcd_img_subtract" id="img_subtract_7" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(7);"/>
		</a>
     </li>
     <!-- <div   class="dzcddiv"; style="float: right">
			<a onclick="openCustom();" class="dzcd_li_btn navspan" id="dzcdwz">定制菜单></a>
			<span id="dzcd_save" class="dzcd_li_btn navspan" onclick="saveCustom();" style="display: none;float: right; margin-right: 50px;"  onmouseover="" >确定></span>
	 </div> -->
   </ul>
 </div>
<!--二级栏目切换-->
<div id="bsfwBigTd1" class="bsfwBigTd">
   <table style="margin-left:25px;margin-top:10px; width: 100%;" cellpadding="0" cellspacing="0" >
	<tr id="tr1">
		<td valign="top" class="leftMenu">
		   <div class="bsfwTdLeft" id="bsfwTdLeft">
			  <ul id="leftNav1" class="leftNav1" style="height:0px;border:#fff solid 0px">
				<li id="leftNav1_001" class="tableLeftLi_on" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/queryNsrjbxx.do">
					<img src="/res/images/bsfwhall/bsfw_arrow_white.png" />纳税人基本信息
				</li>
				<li id="leftNav1_002" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/views/nsrgl/nsrbgxx_query_index.jsp">
					<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人变更信息查询
				</li>
				<li id="leftNav1_003" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/queryNsrzg.do">
					<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人资格查询
				</li>
                <li id="leftNav1_004" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/mask.do?url=/bsfw/nsrgl/queryNsrgpzg.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人购票资格查询
                </li>
                <li id="leftNav1_005" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/queryNsrsz.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人税种登记查询
                </li>
                <li id="leftNav1_006" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/getqsInitDate.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人欠税查询
                </li>
                <li id="leftNav1_007" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/getyjxxInitDate.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人预缴信息查询
                </li>
                <li id="leftNav1_008" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/getgpxxInitDate.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人购票信息查询
                </li>
                <li id="leftNav1_009" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/getyqwsbInitDate.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />逾期未申报查询
                </li>
                <li id="leftNav1_010" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/getsblsxxInitDate.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />申报信息查询
                </li>                           
                <li id="leftNav1_011"class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/queryYsxyxx.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />银税协议信息查询
                </li>                
                <li id="leftNav1_012" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/views/nsrgl/ttsk_query_index.jsp">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />提退税款查询
                </li>
                <li id="leftNav1_013" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/views/nsrgl/yqwjk_query_index.jsp">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />逾期未缴款查询
                </li>
                <li id="leftNav1_014" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/getwfwzswwsInitDate.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />违法违章税务文书查询
                </li>
                <li id="leftNav1_015"class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/getckhwzyjksInitDate.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />出口货物专用缴款书查询
                </li>
			  </ul>
			  <ul id="leftNav2" style="display: none;">
				<li id="leftNav2_001" class="tableLeftLi_on" onclick="chagneTableRight(this)" rsrc="/third/ckts/xgxx_index.do">
					<img src="/res/images/bsfwhall/bsfw_arrow_white.png" />出口退税相关信息查询
				</li>
				<li id="leftNav2_002" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/third/ckts/tsje_shqk_index.do">
					<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />退税金额审核情况查询
				</li>
				  
				
			  </ul>
		  	    <ul id="leftNav3"  style="display: none;">
				<li id="leftNav3_001" class="tableLeftLi_on" onclick="chagneTableRight(this)" rsrc="/views/cssj/query_cssj_zp.jsp">
					<img src="/res/images/bsfwhall/bsfw_arrow_white.png" />专票查询
				</li>
				<li id="leftNav3_002" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/views/cssj/query_cssj_pp.jsp">
					<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />普票查询
				</li>
			  </ul>
		  	  <ul id="leftNav4" style="display: none;">
			  </ul>
		  	  <ul id="leftNav5" style="display: none;">
			  </ul>
		  	  <ul id="leftNav6" style="display: none;">
			  </ul>
		  	  <ul id="leftNav7" style="display: none;">
			  </ul>
			  <ul id="leftNav8"  style="display: none;">
				<li id="leftNav8_001" class="tableLeftLi_on" onclick="chagneTableRight(this)" rsrc="/bsfw/jkpz/query.do">
					<img src="/res/images/bsfwhall/bsfw_arrow_white.png" />纳税人缴款凭证信息查询
				</li>
				<li id="leftNav8_002" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/jkpz/print.do">
					<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人缴款凭证查询打印
				</li>
			  </ul>
		  	  <ul id="leftNav9" style="display: none;">
  	            <li id="leftNav9_001" class="tableLeftLi_on" onclick="chagneTableRight(this)" rsrc="http://fpcx.xmtax.gov.cn:7002/fpcx/index.do?nsrsbh=91350200MA2Y10EC4K&timestamp=153E6541177313">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />发票真伪及流向查询
                </li>
  	            <li id="leftNav9_002" class="tableLeftLi_on" onclick="chagneTableRight(this)" rsrc="/views/nsrgl/nsrzt_query_index.jsp">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人状态
                </li>
                <li id="leftNav9_003" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/views/nsrgl/ybnsrzg_query_index.jsp">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />一般纳税人资格查询
                </li>
                <li id="leftNav9_004" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/queryGthdqde.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />个体户定期定额公示查询
                </li>
                 <li id="leftNav9_005" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="/bsfw/nsrgl/queryYshwsMore.do">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />涉税文书审批结果查询
                </li>
                 <li id="leftNav9_006" class="tableLeftLi" onclick="chagneTableRight(this)" rsrc="http://znhd.xm-n-tax.gov.cn:7001/gswzglpt/jsp/cgs/cgscx.jsp">
                	<img src="/res/images/bsfwhall/bsfw_arrow_black.png" />车辆购置税查询
                </li>
			  </ul>
		   </div>
		</td>
		<td valign="top" id="rightTd">
		   <div id="rightFrame_div" class="tableRightList" style="display:block;">
				<iframe id="rightFrame" name="rightFrame" src="/bsfw/nsrgl/queryNsrjbxx.do" frameborder="0" width="100%" height="1000px"  scrolling="no"></iframe>
		   </div>
     	</td>
	</tr>
	
	 <tr valign="top"  style="display: none;height: 600px;" id="tr2">
    	<td colspan="2">
   			<div>
				<iframe id="rFrame" name="rFrame" src="#" frameborder="0" width="1100"  height="500"></iframe>
		   </div>
    	</td>
   </tr>
  </table>     
 </div>
</div>



  
  


</div>
</div>
</div><!-- app -->
     

</html>