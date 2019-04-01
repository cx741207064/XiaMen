

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title></title>
		<meta name="description" content=""/>
		<meta name="keywords" content=""/>
		<meta name="author" content=""/>
		<meta name="Copyright" Content=""/>
		<link rel="stylesheet" type="text/css" href="/wssb/wssb/layout/css/overlay.css" />
		<script language="javascript" src="/wssb/wssb/public/js/jquery-1.7.2.min.js"></script>
		<script language="javascript"  src="/wssb/wssb/public/js/lhgdialog.js"></script>
		<script language="javascript" src="/wssb/wssb/layout/js/overlay.js"></script>
<style>
* {margin:0; padding:0;}
p img{display:block;margin:0 auto;}
a {text-decoration:none;}
#ts {background:rgba(0,0,0,0.3);}
#ts h1 {font-size:16px; line-height:40px;}
#ts p {font-size:14px; line-height:22px; padding:2px 10px; text-indent:2em; text-align:left;}
#btn {margin:20px;}
#btn a {display:block; display: inline; display:inline-block; padding:3px 30px; color:#fff; background:#5dace0; border:1px solid #7e94d2; font-size:14px; margin:0 20px;} 
#tstitle {background:#5dace0; height:30px; border:1px solid #7e94d2; text-align:left;}
#inputbox {overflow:hidden; clear:both; margin:10px 20px;}
#inputbox li{float:left; list-style:none; margin-right:10px;}
 </style>
<script>
var div1 = "";
var path = '/wssb';

function kklc(nUrlVal){
	var tjkk = "";
	var dxk = $("input:radio:checked").val();
	if(typeof(dxk) == "undefined" ){
		alert("请选择扣款方式.");
	}else{
		$("#kkval").val(dxk);
		if(dxk == "y"){
			//勾选立即扣款置为Y
			tjkk = "&TJKK=Y";
		}else{
			tjkk = "&TJKK=N";
		}
		tjcc(nUrlVal,tjkk);
		$.dialog({id:'tips1'}).close();
	}
}

//暂不扣款窗口
function opendia(nUrlVal){
	
	//$.dialog({id:'tips1'}).close();
	var tjkk = "&TJKK=N";
	div1 = $.dialog({
		lock:true,
		id:'tips2',
		content:
			"<div id=\"ts\"><div style=\"width:550px; margin:auto; height:430px;text-align:center; border-radius: 5px;\">"+
		  "<div id=\"tstitle\"></div>  <div style=\" border: 1px solid #eee; border-top:none; background: #fff;  \">"+
		   "<p>尊敬的纳税人:因您选择暂不扣款，请务必于申报期之前再次登录我的办税厅执行扣款操作。具体操作：选择网上申报系统菜单中 “税费缴纳（网上申报）”项目（申报期限内开放），纳税人可查询出未扣款的申报记录，勾选需要扣款的行次，点击“扣款”按钮进行税费款扣缴。若逾期缴纳请您到税务机关柜台办理，税务机关将依据《中华人民共和国税收征收管理法》规定从滞纳税款之日起，按日加收滞纳税款万分之五的滞纳金。。</p>"+
		   "<p>您可通过扫描下方微信二维码关注“厦门税务”微信服务号并绑定纳税人，获取扣款提醒信息（未扣款微信提醒推送时间：1.有关注微信公众号纳税人提交申报后立即推送；2.申报期限截止之日上午08：00推送给有关注微信公众号纳税人；3.税控纳税人“清卡”正式申报后立即推送）。</p>"+
		   "<p><img style=\"width:120px;height:120px;\" src = \"images/wxfwh.jpg\" ></img></p>"+
		   "  <div id=\"btn\"><a href=\"javascript:zbkktjcc('"+nUrlVal+"','"+tjkk+"');\">确定</a>"+
		   "<a href=\"javascript:gbck2('"+nUrlVal+"');\">取消</a></div>  </div>  </div></div> ",
		width:'550px',
		height:'430px',
		esc: false,  
		title:false,
		cancel:false,
		parent:$.dialog({id:'tips1'})
     });
    //设置隐藏域的值
	$("#kkval").val("n");
}
function zbkktjcc(nUrlVal,tjkk){
	document.getElementById("workspace").src = path + "/" + nUrlVal+tjkk;
	showOverlay();
	$.dialog({id:'tips1'}).close();
	div1.close();
}

function gbck(){
	$.dialog({id:'tips1'}).close();
}

function gbck2(){
	
	div1.close();
	$.dialog({id:'tips1'}).ShowDialog();
}
//提交操作
function tjcc(nUrlVal,tjkk){
	document.getElementById("workspace").src = path + "/" + nUrlVal+tjkk;
	showOverlay();
}

function loadLeft() {
	$("#leftFrame").height($(window).height());
}
function loadRight() {
	$("#workspace").height($(window).height());
}
function resizeWindow() {
	$("#leftFrame").height($(window).height());
	$("#workspace").height($(window).height());
}
function hideLeft() {
	$("#leftFrame").toggle("fast");
	if($("#hideId").attr("src")=="./images/yinbt.jpg"){
		$("#hideId").attr({src:"./images/yinbtb.jpg"});
	}else{
		$("#hideId").attr({src:"./images/yinbt.jpg"});
	}
}


$(window).on("resize",function(){
	resizeWindow();
})

</script>
	</head>
	<body style="overflow: hidden;padding: 0;margin: 0">
		<table style="height: 100%;" cellspacing="0" cellpadding="0">
			<tr>
				<td width="320" id="frmTitle" name="fmTitle" align="center"
					valign="top">
					<table height="100%" border="0" cellpadding="0" cellspacing="0">
						<tr>
							<td>
								<iframe name="I1" width="320"
									src="/wssb/wssb/layout/left.jsp?NSRSBH=91350200MA2Y10EC4K&TABLE_ACTION=display&sblx=ZZS_YBNSR&isdyyq=1&isqs=null"
									border="0" frameborder="0" scrolling="auto" id="leftFrame"
									onload="loadLeft();">
									浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。
								</iframe>
							</td>
						</tr>
					</table>
				</td>
				<td class="hideLeft" style="cursor: pointer;background: url(/wssb/wssb/layout/images/yin.jpg) repeat-y;padding:0;">
					<p class="" onclick="hideLeft();">
						<img src="./images/yinbtb.jpg" id="hideId" alt="隐藏"/>
					</p>
				</td>
				<td width="100%" align="center" valign="top" style="padding:0;"> 
					<!-- <iframe name="I2"  id="workspace" width="100%" border="0" frameborder="0" src="/wssb/wssb/layout/right.jsp" onload="loadRight();">浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe> -->
					<iframe name="I2" id="workspace" width="100%" border="0"
						frameborder="0"
						src="/wssb/MainServlet?NSRSBH=91350200MA2Y10EC4K&TABLE_NAME=INFORMATION&TABLE_ACTION=display&sblx=ZZS_YBNSR&isdyyq=1&isqs=null"
						onload="loadRight();">
						浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。
					</iframe>
				</td>
			</tr>
		</table>
		<div id="overlay"></div>
		<div id="tipDialog">
			<p class="title">提示</p>
			<span class="content">正在处理中，请稍等...</span>
		</div>
		<input type="hidden" id="kkval" value=""/>
	</body>
</html>

