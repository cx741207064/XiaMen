






<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<!--允许搜索机器人搜索站内所有链接-->
		<meta content="all" name="robots">
		<meta name="Copyright" content="厦门税务版权所有 ">
		<meta name="Description" content="厦门税务网上报税系统">
		<meta name="Keywords" content="税务,厦门税务,网上报税系统">

		<title>
		</title>
		<script src="/res/js/jquery-1.10.2.js"></script>		
        <script src="/res/otp4/js/lib/layer/layer.js" type="text/javascript"></script>
        <link type="text/css" rel="styleSheet"  href="/res/css/layerV2.css" /> 
		<script src="/res/js/common.js" type="text/javascript"></script>
		<script type="text/javascript" language="JavaScript" src="/res/js/common/components/inputCtrl.js?v1"></script>
		<link href="/res/css/v2.css" rel="stylesheet" type="text/css" />
  
		
  	<meta charset="UTF-8">
    <meta name="decorator" content="blank"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    
    <link href="/res/jsdzsb/dzsbsy/dzsbsy.css" rel="stylesheet" type="text/css" />
    <link href="/res/css/v2.css" rel="stylesheet" type="text/css" />

	</head>

	<body>
	
	
  
  

		
	<table width="90%" border="0" class="tbboder v2table" align="center" cellpadding="0" cellspacing="0" style="margin:30px;">
		
          <tr class="tit">
            <td align="left" bgcolor="#CCCCCC"><div align="center"><strong>业务功能</strong></div></td>
            <td align="left" bgcolor="#CCCCCC"  class="h12_gray"  style="padding-left:20px;" ><div align="center" class="STYLE2">功能说明</div></td>
          </tr>
          <tr>
            <td align="left"><input name="plsbwjclqicx" type="radio" id="plsbwjclqicx" onclick="openTb_url('/cxzx/sbxxcx/manager')" value="grsdsmx" class="tbpadding"/>
              <label id="lbl_plsbwjclqicx" for="plsbwjclqicx">网上申报数据查询</label></td>
            <td width="464" align="left"  class="h12_gray STYLE1"  style="padding-left:20px;" ><p><span class="STYLE1 hintColor">查询网上申报记录（不含个税扣缴软件申报记录）</span></p></td>
          </tr>
          <tr>
            <td width="321" align="left"><input id="nzgr" type="radio" name="sbzl" value="nzgr" onclick="showPageNew4('/jsdzsb/zfsbjl/start.do','申报记录查询或作废（社保费除外）')" class="tbpadding"/>
              <label id="lbl_grsds_nzgr" for="nzgr">申报记录作废（社保费除外）</label></td>
            <td width="464" align="left"  class="h12_gray STYLE1"  style="padding-left:20px;" ><p><span class="STYLE1 hintColor">作废网上申报记录（仅限作废当期内尚未缴款的申报记录，不含增值税、消费税、社保费及个税扣缴软件申报记录）</span></p></td>
          </tr>
          <tr>
            <td align="left"><input name="sbfsbjlzf" type="radio" id="sbfsbjlzf" onclick="showPageNew4('/dzsb/sbfsb/sbf_sbzf.do','社保费申报记录查询或作废')" value="sbfsbjlzf" class="tbpadding"/>
              <label id="lbl_sbfsbjlzf" for="sbfsbjlzf">社保费申报记录作废</label></td>
            <td width="464" align="left"  class="h12_gray STYLE1"  style="padding-left:20px;" ><p><span class="STYLE1 hintColor">作废社保费申报记录（（仅限作废当期内尚未缴款的申报记录）</span></p></td>
          </tr>
        </table>

		

<div id="_loadIfmContent" style="display:none;"></div>
<SCRIPT LANGUAGE="JavaScript">
$(function(){  
	endIe8Load();
}); 

function endIe8Load() {
	try{
		var _loadIfm = ' <iframe id="_loadIfm" src="" width="1" height="1" style="border: 0px; display:none" frameborder="0" ></iframe>';
		if (!$("#_loadIfm")[0]) {
			$("#_loadIfmContent").append(_loadIfm);
		}
		$("#_loadIfmContent", window.document).attr("src", "#");
	}catch(e){}
}
</SCRIPT>

	</body>
     

</html>