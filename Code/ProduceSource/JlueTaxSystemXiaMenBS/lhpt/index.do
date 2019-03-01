







<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">   
<title>厦门税务</title>
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
 
 



<script type="text/javascript">
/**
**切换一级菜单
**/
function fMenuChanage(menu, yjcd_id){
	//校验，如果有任何定制菜单开启的标志的时候，取消掉
	if(!($("#img_subtract_0").is(':hidden')&&$("#img_add_0").is(':hidden'))){
		//遍历查出当前未添加的菜单
		for(var i = 0; i < 16; i++){
			$(".ejcd_id_" + i).hide();
			$("#img_add_" + i).hide();
			$("#img_subtract_" + i).hide();
			$("#dzcd_pic_"+i).unbind("click");
		}
		$("#dzcd_save").hide();
	}
	
	
	$("#yjcd_id").val(yjcd_id);
	var msrc = $(menu).attr('msrc');
	$('#mainFrame').attr('src', msrc);
	
	$("#bsfwMenuUl li").each(function(){
		$(this).removeClass();
	});
	$(menu).addClass("bsfwMenuUlActive");

	var index = $(menu).attr('index');
	if(index != undefined){
		//$("#bsfwManagerMsg").css("display", "none");
	}else{
		//$("#bsfwManagerMsg").css("display", "block");
	}
	reLoadCustomMenu(yjcd_id);
}
function logout(){
	window.location.href = "/bsfw/login/logout.do";
}

function gotoMail(){
	var url = "/bsfw/mail/nsrLogin.do";
	window.open(url);
}

function pad(str,n){
	var len = str.toString().length;
	while(len < n){
		str = "0" + str;
		len++;
	}
	return str;
}

function LocalTime(){
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var day = d.getDay();
	var hour = pad(d.getHours(),2);
	var minutes = pad(d.getMinutes(),2);
	var second = pad(d.getSeconds(),2);
	
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	
	var time = year+"年"+month+"月"+date+"日 "+week[day]+" "+hour+":"+minutes+":"+second;
	
	document.getElementById("localtime").innerHTML = time;
}

window.onload = function(){
	var t = setInterval("LocalTime()",300);
}

function adminInfoMouseover(){
	$("#adminInfo").removeClass("hide");	
}

function adminInfoMouseout(){
	$("#adminInfo").addClass("hide");
}

function gotoDswz(){
	//var url = "https://www.xm-l-tax.gov.cn/login/loginFromOut.do";
	var url = "/lhpt/start.do";
	window.open(url);
}

function gotoWssb(){
	var url = "http://wssb.xm-n-tax.gov.cn:7001/wssb/wssb/public/jsp/wssb.jsp";
	window.open(url);
}

function gotoJmsdcb(){
	var menu = $("#ssbl_li");
	$('#mainFrame').attr('src', "/views/system/ssbl_jmsdcb_index.jsp");
	
	$("#bsfwMenuUl li").each(function(){
		$(this).removeClass();
	});
	$(menu).addClass("bsfwMenuUlActive");
}

function openhdpt(){
	var  nw_flag_str  = 0;
	var nsrsbh = "91350200MA2Y10EC4K";
	var chkPassword = "368805972C4CA67F06C2B28C11835A5C";
	var url = '';
 	if(nw_flag_str == "1"){
 			url = 'http://81.24.17.101:9001/front/dispatch/checkAndLoginByNsrsbh.do?nsrsbh='+nsrsbh+'&yhmm='+chkPassword;
		}else{
			url = 'http://http://localhost:9001/front/dispatch/checkAndLoginByNsrsbh.do?nsrsbh='+nsrsbh+'&yhmm='+chkPassword;
		}
 	window.open(url);
}

function loadCustomMenu(){
	var sysUserMenu = "";
	var num = 0;
	var menus = sysUserMenu.split(",");
	var yjcd_id = $("#yjcd_id").val();
	//alert("当前一级菜单为"+yjcd_id);
	for(var i = 0; i < 16; i++){
		$(".ejcd_id_" + i).show();
		$(".ejcd_id_" + i).removeAttr("yhsc");
	}
	for(var i = 0; i < menus.length; i++){
		if(menus[i].split("_")[0] == yjcd_id){
			var ejcd_id = menus[i].split("_")[1];
			$(".ejcd_id_" + ejcd_id).hide();
			$(".ejcd_id_" + ejcd_id).attr("yhsc","yhsc");//用户删除
			num++;
		}
	}
	//alert("91350200MA2Y10EC4K");
	if(16-num>8){
		opengd();
		opensq();
	}else{
		$("#dzcdgd").hide();
		$("#dzcdsq").hide();
	
	}
	
}


function reLoadCustomMenu(yjcd_idre){
/* 	var num=0;
	$.post("/bsfw/login/freshMenuSession.do",
	  {
	    nsrsbh:"91350200MA2Y10EC4K"
	  },
	  function(data,status){
		    var sysUserMenu = data;
			var menus = sysUserMenu.split(",");
			var yjcd_id = $("#yjcd_id").val();
			//alert("当前一级菜单为"+yjcd_id);
			for(var i = 0; i < 16; i++){
				$(".ejcd_id_" + i).show();
				$(".ejcd_id_" + i).removeAttr("yhsc");
			}
			
			for(var i = 0; i < menus.length; i++){
				if(menus[i].split("_")[0] == yjcd_id){
					var ejcd_id = menus[i].split("_")[1];
					$(".ejcd_id_" + ejcd_id).hide();
					$(".ejcd_id_" + ejcd_id).attr("yhsc","yhsc");//用户删除
					num++;
				}
			}
			if('2'==yjcd_id){
				for(var i = 0; i < 7; i++){
					$(".ejcd_id_" + i).hide();
					$(".ejcd_id_" + i).attr("yhsc","yhsc");
				}
				$(".ejcd_id_15").hide();
				$(".ejcd_id_15").attr("yhsc","yhsc");
				$("#dzcdgd").hide();
				$("#dzcdsq").hide();
			}else if('1'==yjcd_id){
				for(var i = 7; i < 15; i++){
					$(".ejcd_id_" + i).hide();
					$(".ejcd_id_" + i).attr("yhsc","yhsc");
					}
					$("#dzcdgd").hide();
					$("#dzcdsq").hide();
			}else{
				$("#dzcdgd").show();
			}
			if(16-num>8){
				num = 0;
				$("#icNavUl").find("li").each(function(){
					if(!$(this).is(':hidden')){
						num++;
						if(num>8){
							$(this).hide();
						}
					}
					
				});
				
					$("#icNavBg").css("min-height","150px");
					$("#icNav").css("background","url('/res/images/cddz/bg1.png')");
					$("#icNav").css("background-repeat","no-repeat");
					$("#icNav").css("height","150px");
					$("#dzcdwz").css("float","right");
					//$("#dzcd_save").css("float","right");
					if(num>8){
						$("#dzcdgd").show();
						$("#dzcdsq").hide();
					}
			}
			
			
	  }); */
	
	
	//alert("91350200MA2Y10EC4K");
}




function openCustom(dzcd){
	var current_yjcd_id = $("#yjcd_id").val();
	opengd2(current_yjcd_id,dzcd);
	//遍历查出当前未添加的菜单
	for(var i = 0; i < 16; i++){
		//var pic = document.getElementById("dzcd_pic_"+i).setAttribute("href","javascript:void(0);");
		$("#dzcd_pic_"+i).bind("click",function(){
			return false;
		});
		if($(".ejcd_id_" + i).is(':hidden')){
			$(".ejcd_id_" + i).fadeIn(1000);
			$("#img_add_" + i).fadeIn(1000);
		}else{
			if($("#img_add_" + i).is(':hidden')){
				$("#img_subtract_" + i).fadeIn(1000);
			}
		}
	}
	if('2'==current_yjcd_id){
		for(var i = 0; i < 7; i++){
			$(".ejcd_id_" + i).hide();
			$(".ejcd_id_" + i).attr("yhsc","yhsc");
		}
		$(".ejcd_id_15").hide();
		$(".ejcd_id_15").attr("yhsc","yhsc");
		$("#dzcdgd").hide();
		$("#dzcdsq").hide();
		$("#icNavBg").css("min-height","150px");
		$("#icNav").css("background","url('/res/images/cddz/bg1.png')");
		$("#icNav").css("background-repeat","no-repeat");
		$("#icNav").css("height","150px");
	}else if('1'==current_yjcd_id){
		for(var i = 7; i < 15; i++){
			$(".ejcd_id_" + i).hide();
			$(".ejcd_id_" + i).attr("yhsc","yhsc");
			}
			$("#dzcdgd").hide();
			$("#dzcdsq").hide();
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
			$(".ejcd_id_"+ejcd_id).attr("yhsc","yhsc");
			
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
			$(".ejcd_id_"+ejcd_id).removeAttr("yhsc");
		}
	});
}

function saveCustom(){
	var num = 0;
	//遍历查出当前未添加的菜单
	for(var i = 0; i < 16; i++){
		$("#dzcd_pic_"+i).unbind("click");
		if($("#img_subtract_" + i).is(':hidden')){
			var yhsc = $(".ejcd_id_" + i).attr("yhsc");
			if(yhsc){
				$(".ejcd_id_" + i).fadeOut(1000);
			}
			$("#img_add_" + i).fadeOut(1000);
			//$(".ejcd_id_" + i).attr("yhsc","yhsc");//表示用户删除
			
		}else{
			$("#img_subtract_" + i).fadeOut(1000);
			num++;
			if(num>8){
				$(".ejcd_id_" + i).fadeOut(1000);
			}
		}
	}
	$("#dzcd_save").fadeOut(500);	
	if(num<=8){		
		$("#dzcdgd").hide();
	}else{
		$("#dzcdgd").show();
	}
	$("#icNavBg").css("min-height","150px");
	$("#icNav").css("background","url('/res/images/cddz/bg1.png')");
	$("#icNav").css("background-repeat","no-repeat");
	$("#icNav").css("height","150px");
}



/**
 * 隐藏定制菜单的加减号按钮
 */
function hideCustom(){
	
}

function getNsrmyddc(){
	$.ajax({
		type:"post",
		url:"/third/nsrmyddc/getDczt.do?rd=" + new Date().getTime(),
		data:{
			//checkUrl: "http://kt.xm-n-tax.gov.cn:7001/gswzglpt/servlet/SsfwdcServlet?nsrsbh="
			//checkUrl: "http://81.24.17.131:9001/gswzglpt/servlet/SsfwdcServlet?nsrsbh="
			checkUrl: "http://81.24.19.199:9001/gswzglpt/servlet/SsfwdcServlet?nsrsbh="
		},
		dateType:"json",
		success:function(data){
			var obj = $.parseJSON(data) || {};
			/*if(!obj.returnCode || obj.returnCode != 2){
				return false;
			}
			var zt = obj.returnObj;
			if(zt == 'true'){
				$('#nsrmyddcLink').removeClass('bsfwpic8').addClass('bsfwpic9');	
			}
			$('#nsrmyddcContianer').css('display', 'block');
			*/
			if(obj.returnCode != 1){
				return false;
			}
			//var url = "http://kt.xm-n-tax.gov.cn:7001/gswzglpt/ssfwdc.do?init";
			//var url = "http://kt.xm-n-tax.gov.cn:7001/gswzglpt/ssfwdc.do?init";
			var url = "http://weixin.xm-n-tax.gov.cn/wxgzfwpt/myddc.do?init";
			//window.open(url);
			var zt = obj.returnCode;
			if(zt == '0'){
				$('#nsrmyddcLink').removeClass('bsfwpic8').addClass('bsfwpic9');	
			}
			$('#nsrmyddcContianer').css('display', 'block');
		}
	});
}

;$(function(){
	//getNsrmyddc();
	var lhpturl='chagneNav(this,1)';
	var lhptMenuName='涉税信息查询';
	var menu_item_id= 'SSCX_001';
	//var menu_item_id=menuMap['menu_item_id'];
	 
	if(lhpturl!='' && lhpturl!='null'){
		//国税每个链接处理方式都不一样。。。。。。。、
	 if(menu_item_id.indexOf('SSCX')>-1){
		 var ssblObj=document.getElementById("SSCX");
	     fMenuChanage(ssblObj, 1);
	 }else if(menu_item_id.indexOf('SFXYQD')>-1){
        var ssblObj=document.getElementById("ssbl_li");
        fMenuChanage(ssblObj, 2);
      }else{
    	  $.post(
    	  "/lhpt/dz.do",
			{lx:'removeSession'},
			function(data) {
			if(data.success){
				if(menu_item_id.indexOf('FPSL')>-1){
                	location.href="http://59.57.253.214:7001/wssl_nsrd/?id=91350200MA2Y10EC4K&timestamp=153E6541177313";
			    }else if(menu_item_id.indexOf('WLFP')>-1){
			    	location.href="http://218.5.84.66:7001/fpgl/jsp/wlfp/kpxxcx/nsr_kpxxcx_index.jsp?nsrsbh=91350200MA2Y10EC4K&timestamp=153E6541177313";
			    }else {
					location.href=lhpturl;
			    }
			}
       
      });
    }
    	  }
	//定制菜单
	//loadCustomMenu();
	
});

function openwyyy(){
	var  nw_flag_str  = 0;
	var url = '';
 	if(nw_flag_str == "1"){
 			url = 'http://81.24.21.123:9003/banshuifuwu/index/bsyyindex.html';
		}else{
			url = 'http://www.xm-n-tax.gov.cn/banshuifuwu/index/bsyyindex.html';
		}
 	window.open(url);
}

/**
	新增加菜单单击事件
*/
function opengd2(yjcd_id,dzcd){	
	var num = 0;
	var num2=0;
	/*for(var i = 0;i<16;i++){
		if($(".ejcd_id_" + i).is(':hidden')){
			$(".ejcd_id_" + i).fadeIn(1000);
			num2++;
		  }else{
		  	num++;
		  }
	}*/
	var lis = $("#icNavUl").find("li");
	$("#icNavUl").find("li").each(function(){
		if($(this).is(':hidden')){
			var yhsc = $(this).attr("yhsc");
			if(!yhsc){
				$(this).fadeIn(1000);
				num2++;
			}
		  }else{
		  	num++;
		  }
	
	});
	
	//if(num+num2>=8){
		$("#icNav").css("background","url('/res/images/cddz/bg2.png')");
		$("#icNav").css("background-repeat","no-repeat");
		$("#icNav").css("height","240px");
		$("#dzcdwz").css("float","");
		//$("#dzcd_save").css("float","");
		$("#icNavBg").css("min-height","260px");
		
	/*}else{
		$("#icNavBg").css("min-height","150px");
		$("#icNav").css("background","url('/res/images/cddz/bg1.png')");
		$("#icNav").css("background-repeat","no-repeat");
		$("#icNav").css("height","150px");
	}*/
		$("#dzcdsq").hide();
		$("#dzcdgd").hide();
}
function opengd(){	
	var num = 0;
	var num2=0;
	/*for(var i = 0;i<16;i++){
		if($(".ejcd_id_" + i).is(':hidden')){
			$(".ejcd_id_" + i).fadeIn(1000);
			num2++;
		  }else{
		  	num++;
		  }
	}*/
	var lis = $("#icNavUl").find("li");
	$("#icNavUl").find("li").each(function(){
		if($(this).is(':hidden')){
			var yhsc = $(this).attr("yhsc");
			if(!yhsc){
				$(this).fadeIn(1000);
				num2++;
			}
		  }else{
		  	num++;
		  }
	
	});
	if(num+num2>=8){
		$("#icNav").css("background","url('/res/images/cddz/bg2.png')");
		$("#icNav").css("background-repeat","no-repeat");
		$("#icNav").css("height","240px");
		$("#dzcdwz").css("float","");
		//$("#dzcd_save").css("float","");
		$("#icNavBg").css("min-height","260px");
		$("#dzcdsq").fadeIn(1000);
		$("#dzcdgd").hide();
	}else{
		$("#icNavBg").css("min-height","150px");
		$("#icNav").css("background","url('/res/images/cddz/bg1.png')");
		$("#icNav").css("background-repeat","no-repeat");
		$("#icNav").css("height","150px");
		$("#dzcdwz").css("float","right");
		//$("#dzcd_save").css("float","right");
	}
}
//收起按钮
function opensq(){
	//saveCustom();
	
	var num = 0;
	$("#icNavUl").find("li").each(function(){
		if(!$(this).is(':hidden')){
			num++;
			if(num>8){
				$(this).fadeOut(200);
			}
		}
		
	});
	if(num>8){
		$("#icNavBg").css("min-height","150px");
		$("#icNav").css("background","url('/res/images/cddz/bg1.png')");
		$("#icNav").css("background-repeat","no-repeat");
		$("#icNav").css("height","150px");
		$("#dzcdwz").css("float","right");
		//$("#dzcd_save").css("float","right");
		$("#dzcdgd").fadeIn(500);
		$("#dzcdsq").hide();
	}
	
}

//跳转
function openxzcd(minu,minwz,yjcd_id){
	var num ="bsfwLi"+minwz;
	var msrc = $("#"+minu).attr('msrc');
		msrc=msrc+"?"+num
	//$("#"+minu).attr('src', msrc);
	//$("#"+minu).click();
	$("#yjcd_id").val(yjcd_id);
	//var msrc = $(menu).attr('msrc');
	$('#mainFrame').attr('src', msrc);
	$("#bsfwMenuUl li").each(function(){
		$(this).removeClass();
	});
	$("#"+minu).addClass("bsfwMenuUlActive");

	var index = $("#"+minu).attr('index');
	if(index != undefined){
		$("#bsfwManagerMsg").css("display", "none");
	}else{
		$("#bsfwManagerMsg").css("display", "block");
	}
	reLoadCustomMenu(yjcd_id);
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


<!--办税服务大厅顶部-->
<div id="bsfwUserAndTime" style="display:none">
	<div id="bsfwUserAndTime1">
		<div id="bsfwUser">
			您好：<a>威纳仕（厦门）酒业有限公司</a>,
			税号：<a>91350200MA2Y10EC4K</a> 
		</div>
		<div id="bsfwLocalTime">
			<span id="localtime"></span>&nbsp;&nbsp;|&nbsp;&nbsp;<a id="exitUser" href="javascript:void(0);" onclick="logout();">退出</a>
		</div>
	</div>
</div>

<!--head结束--> 
<!--办税服务厅链接导航-->
<div id="bsfwContainer" style="display:none">
	<div id="bsfwBanner">
	</div>
	<div id="bsfwMenu">
		<input type="hidden" value="0" name="yjcd_id" id="yjcd_id"/>
		<ul id="bsfwMenuUl">
	       <li onclick="fMenuChanage(this,0)" index="true" class="bsfwMenuUlActive" msrc="/bsfw/home/home.do">首页</li>
	       <li id="ssbl_li" onclick="fMenuChanage(this,1)" msrc="/bsfw/home/ssbl_index.do">我要办税</li>
	       <li id="SSCX" onclick="fMenuChanage(this,2)" msrc="/bsfw/home/sscx_index.do">我要查询</li>
	       <li onclick="fMenuChanage(this,7)" msrc="/bsfw/home/wdgj_index.do">我的互动</li>
	       <li onclick="fMenuChanage(this,4)" msrc="/bsfw/home/aqsz_index.do">我的设置</li>
	       <li onclick="gotoMail()" msrc="">我的邮箱</li>
	       
		   <li onclick="gotoDswz()" msrc="">联合平台</li>
		   
	     </ul>
	</div>
</div>
<!--图标导航-->
<div id="icNavBg" style="display:none" >
	<div id="icNav">
		<ul id="icNavUl" style="width: 1100px;">
			<li class="ejcd_id_0">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_0"></a>
				<!--<a class="abtn dark_yellow ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_0" style="display: none;"></a>-->
				<a class="abtn  bsfwpic1 ahover" href="http://wssb.xm-n-tax.gov.cn:7001/wssb/wssb/public/jsp/wssb.jsp" target="_blank" id="dzcd_pic_0">
					<img class="dzcd_img_add" id="img_add_0" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(0);"/>
					<img class="dzcd_img_subtract" id="img_subtract_0" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(0);"/>
				</a>
				<span class="navspan">网上申报</span>
			</li>
			<li class="ejcd_id_1">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_1"></a>
				<!-- <a class="abtn dark_green ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_1" style="display: none;"></a> -->
				<a class="abtn  bsfwpic2 ahover" href="http://59.57.253.214:7001/wssl_nsrd/?id=91350200MA2Y10EC4K&timestamp=153E6541177313"  target="_blank" id="dzcd_pic_1">
					<img class="dzcd_img_add" id="img_add_1" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(1);"/>
					<img class="dzcd_img_subtract" id="img_subtract_1" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(1);"/>
				</a>
				<span class="navspan">发票申领</span>
			</li>
			<li class="ejcd_id_2">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_2"></a>
				<!-- <a class="abtn dark_yellow ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_2" style="display: none;"></a> -->
				<a class="abtn  bsfwpic3 ahover" href="http://222.76.203.38:9558/adp/xmsatProcessNoLogin?wsbq=wsbs"  target="_blank" id="dzcd_pic_2">
					<img class="dzcd_img_add" id="img_add_2" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(2);"/>
					<img class="dzcd_img_subtract" id="img_subtract_2" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(2);"/>
				</a>
				<span class="navspan">无纸化办税</span>
			</li>
			<li class="ejcd_id_3">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_3"></a>
				<!-- <a class="abtn dark_blue ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_3" style="display: none;"></a> -->
				<a class="abtn  bsfwpic4 ahover" href="http://222.76.203.38:9558/adp/xmsatProcessNoLogin?wsbq=dkfp"  target="_blank" id="dzcd_pic_3">
					<img class="dzcd_img_add" id="img_add_3" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(3);"/>
					<img class="dzcd_img_subtract" id="img_subtract_3" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(3);"/>
				</a>
				<span class="navspan">代开发票</span>
			</li>
			<li class="ejcd_id_4">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_4"></a>
				<!-- <a class="abtn dark_green ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_4" style="display: none;"></a> -->
				<a class="abtn  bsfwpic5 ahover" href="http://222.76.203.38:9558/adp/xmsatProcessNoLogin?wsbq=zmkj"  target="_blank" id="dzcd_pic_4">
					<img class="dzcd_img_add" id="img_add_4" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(4);"/>
					<img class="dzcd_img_subtract" id="img_subtract_4" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(4);"/>
				</a>
				<span class="navspan">证明开具</span>
			</li>
			<li class="ejcd_id_5">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_5"></a>
				<!-- <a class="abtn dark_blue ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_5" style="display: none;"></a> -->
				<a class="abtn  bsfwpic6 ahover" href="http://www.xm-n-tax.gov.cn/banshuifuwu/index/wsrzindex.html" target="_blank" id="dzcd_pic_5">
					<img class="dzcd_img_add" id="img_add_5" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(5);"/>
					<img class="dzcd_img_subtract" id="img_subtract_5" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(5);"/>
				</a>
				<span class="navspan">网上认证</span>
			</li>
			<li class="ejcd_id_6">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_6"></a>
				<!--<a class="abtn dark_yellow ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_6" style="display: none;"></a>-->
				<a class="abtn  bsfwpic7 ahover" href="http://www.xm-n-tax.gov.cn/banshuifuwu/index/bsyyindex.html"  target="_blank" id="dzcd_pic_6">
					<img class="dzcd_img_add" id="img_add_6" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(6);"/>
					<img class="dzcd_img_subtract" id="img_subtract_6" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(6);"/>
				</a>
				<span class="navspan">我要预约</span>
			</li>
			<li class="ejcd_id_7"  onclick="openxzcd('SSCX','0','2')">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_7" ></a>
				<!--<a class="abtn dark_yellow ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_0" style="display: none;"></a>-->
				<a class="abtn  bsfwpic8 ahover"   target="_blank" id="dzcd_pic_7"  >
					<img class="dzcd_img_add" id="img_add_7" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(7);"/>
					<img class="dzcd_img_subtract" id="img_subtract_7" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(7);"/>
				</a>
				<span class="navspan">基本信息</span>
			</li>
			<li class="ejcd_id_8" style="display: none;"  onclick="openxzcd('SSCX','1','2')" >
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_8"></a>
				<!-- <a class="abtn dark_green ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_1" style="display: none;"></a> -->
				<a class="abtn  bsfwpic9 ahover"  target="_blank" id="dzcd_pic_8">
					<img class="dzcd_img_add" id="img_add_8" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(8);"/>
					<img class="dzcd_img_subtract" id="img_subtract_8" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(8);"/>
				</a>
				<span class="navspan">出口退税查询</span>
			</li>
			<li class="ejcd_id_9" style="display: none;" onclick="openxzcd('SSCX','2','2')" >
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_9" ></a>
				<!-- <a class="abtn dark_yellow ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_2" style="display: none;"></a> -->
				<a class="abtn  bsfwpic10 ahover"   target="_blank" id="dzcd_pic_9">
					<img class="dzcd_img_add" id="img_add_9" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(9);"/>
					<img class="dzcd_img_subtract" id="img_subtract_9" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(9);"/>
				</a>
				<span class="navspan">抄税数据查询</span>
			</li>
			<li class="ejcd_id_10" style="display: none;" onclick="openxzcd('SSCX','3','2')">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_3"></a>
				<!-- <a class="abtn dark_blue ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_3" style="display: none;"></a> -->
				<a class="abtn  bsfwpic11 ahover"   target="_blank" id="dzcd_pic_10">
					<img class="dzcd_img_add" id="img_add_10" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(10);"/>
					<img class="dzcd_img_subtract" id="img_subtract_10" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(10);"/>
				</a>
				<span class="navspan">认证信息查询</span>
			</li>
			<li class="ejcd_id_11" style="display: none;" onclick="openxzcd('SSCX','4','2')">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_11"></a>
				<!-- <a class="abtn dark_green ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_4" style="display: none;"></a> -->
				<a class="abtn  bsfwpic12 ahover"  target="_blank" id="dzcd_pic_11">
					<img class="dzcd_img_add" id="img_add_11" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(11);"/>
					<img class="dzcd_img_subtract" id="img_subtract_11" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(11);"/>
				</a>
				<span class="navspan">稽核结果查询</span>
			</li>
			<li class="ejcd_id_12" style="display: none;" onclick="openxzcd('SSCX','5','2')">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_12"></a>
				<!-- <a class="abtn dark_blue ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_5" style="display: none;"></a> -->
				<a class="abtn  bsfwpic13 ahover"  target="_blank" id="dzcd_pic_12">
					<img class="dzcd_img_add" id="img_add_12" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(12);"/>
					<img class="dzcd_img_subtract" id="img_subtract_12" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(12);"/>
				</a>
				<span class="navspan">网络发票查询</span>
			</li>
			<li class="ejcd_id_13" style="display: none;" onclick="openxzcd('SSCX','6','2')" >
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_13"></a>
				<!--<a class="abtn dark_yellow ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_6" style="display: none;"></a>-->
				<a class="abtn  bsfwpic14 ahover"   target="_blank" id="dzcd_pic_13">
					<img class="dzcd_img_add" id="img_add_13" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(13);"/>
					<img class="dzcd_img_subtract" id="img_subtract_13" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(13);"/>
				</a>
				<span class="navspan">缴款凭证信息</span>
			</li>
			<li class="ejcd_id_14" style="display: none;" onclick="openxzcd('SSCX','7','2')">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_14"></a>
				<!--<a class="abtn dark_yellow ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_6" style="display: none;"></a>-->
				<a class="abtn  bsfwpic15 ahover"    target="_blank" id="dzcd_pic_14">
					<img class="dzcd_img_add" id="img_add_14" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(14);"/>
					<img class="dzcd_img_subtract" id="img_subtract_14" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(14);"/>
				</a>
				<span class="navspan">公共查询</span>
			</li>
			<li class="ejcd_id_15" style="display: none;" onclick="openxzcd('ssbl_li','0','1')">
				<a class="" href="javascript:void(0);" id="dzcd_pic_top_15"></a>
				<!--<a class="abtn dark_yellow ahover" href="javascript:void(0);" id="dzcd_pic_top_dark_6" style="display: none;"></a>-->
				<a class="abtn  bsfwpic16 ahover"   target="_blank" id="dzcd_pic_15">
					<img class="dzcd_img_add" id="img_add_15" src="/res/lhpt/images/add.png" style="display: none;float: left;" onclick="deleteMenu(15);"/>
					<img class="dzcd_img_subtract" id="img_subtract_15" src="/res/lhpt/images/subtract.png" style="display: none;float: left;" onclick="addMenu(15);"/>
				</a>
				<span class="navspan">三方协议签订</span>
			</li>			
			
			
			
			 
			 
		</ul>
			<ul>
				<li id="nsrmyddcContianer" style="display: none;">
				<a class="abtn blue ahover" href="javascript:void(0);"></a>
				<a id="nsrmyddcLink" class="abtn floatLeft bsfwpic18 ahover" href="http://weixin.xm-n-tax.gov.cn/wxgzfwpt/myddc.do?init" target="_blank"></a>
				<!-- <a id="nsrmyddcLink" class="abtn floatLeft bsfwpic8 ahover" href="http://kt.xm-n-tax.gov.cn:7001/gswzglpt/ssfwdc.do?init" target="_blank"></a>
				 <span class="navspan">涉税服务调查</span>-->
				<span class="navspan">满意度调查</span>
				</li>
				<div></div>
				<li class="dzcd_li">
				<a onclick="openCustom('dzcd');"   class="dzcd_li_btn navspan" id="dzcdwz" style=" margin-right: 65px;"  >定制菜单></a>
				<span id="dzcd_save" class="dzcd_li_btn navspan" onclick="saveCustom();" style="display: none; margin-right: 50px;margin-top: 15px;">确定></span>
				</li>
				<li class="dzcd_li" >
					<a onclick="opengd();" id="dzcdgd" style="top:15px; position: relative;" >更多></a>
					<a onclick="opensq();" id="dzcdsq" style="display:none;top:15px; position: relative;"  >收起></a>
				</li>
				
			</ul>
	</div>
</div>

<div class="bsfwManagerMsg" id="bsfwManagerMsg" style="display: none;width: 1200px;" > 
  <ul id="managerMsg">
    <li class="managerImg"><img src="/res/images/bsfwhall/bsfw_icon.png" /></li>
    <li>您的主管税务人员：</li>
    <li>原厦门市湖里区国家税务局江头税务分局</li>
    <li>-></li>
    <li>黄若翎</li>
    <li>（联系电话:</li>
    <li>5690850</li>
    <li>）</li>
  </ul>
</div>
<!--iconNavEnd-->
<iframe id="mainFrame" name="mainFrame" src="/bsfw/home/home.do" frameborder="0" 
	width="100%"  scrolling="no" onLoad="iframeAutoHeight();"></iframe>
<script type="text/javascript" src="/res/js/compatibility.js"></script>
<script type="text/javascript">
	function iframeAutoHeight(){
		var mainFrame = document.getElementById("mainFrame");
		var frame = document.frames ? document.frames["mainFrame"].document : mainFrame.contentDocument;

		if(mainFrame != null && frame != null){
			mainFrame.height = frame.body.scrollHeight;
		}
		
	}

	function openPwdNotice(){
		var width = $(window).width();
		if(width > 1100){
			width = 1100;
		}
		var height = $(window).height();
		width = width - 100;
		height = height - 100;

		var src = "/views/nsryhgl/notice.jsp";
		window.showModalDialog (src,"","location:No;status:No;help:No;dialogWidth:"+width+";dialogHeight:"+height+";scroll:yes;"); 
	}
	
	$(function(){
		checkBrower();
		//openPwdNotice();
	});
</script>

  
  


</div>
</div>
</div><!-- app -->
     

</html>