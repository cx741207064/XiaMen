






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
            <td align="left" bgcolor="#CCCCCC"><div align="center">税款所属期间</div></td>
            <td align="left" bgcolor="#CCCCCC"><div align="center"><strong>业务功能</strong></div></td>
            <td align="left" bgcolor="#CCCCCC"  class="h12_gray "  style="padding-left:20px;" ><div align="center" class="STYLE2">功能说明</div></td>
          </tr>
          
          <tr>
            <td width="103" align="left"><div align="center">季度申报（查账征收企业 ）</div></td>
            <td width="427" align="left">
            	<input name="czzsJb" type="radio" id="czzsJb" onclick="czzsJb();" value="czzsJb" class="tbpadding"/>
              	<label id="lbl_czzsJb" for="czzsJb" >居民企业（查账征收）企业所得税季度</label>
            </td>
            <td width="464" align="left"  class="h12_gray STYLE1 hintColor"  style="padding-left:20px;" ><p><span class="STYLE1 hintColor">受理居民企业（查账征收）企业所得税季度申报</span></p></td>
          </tr>
        </table>
        
        <div style="padding-left: 280px;font-size: 14pt;display: none">
        	<a href="#"  >关于企业所得税季度申报若干问题的解答</a>
        </div>
        <script type="text/javascript" language="javascript" src="/res/dwfw/js/common.js?v=2" charset="UTF-8"></script>
        <script type="text/javascript"> 
		function czzsJb(){
			if(!JsTjdlXz('QYSDSXZ')){
				return false;
			}
			showPageNew4('/jsdzsb/qydsdjd/czzsIndex.do','居民企业（查账征收）企业所得税季度');
		}
		function czzsYb(){
			if(!JsTjdlXz('QYSDSXZ')){
				return false;
			}
			showPageNew4('/jsdzsb/qydsdjd/czzsYbIndex.do','居民企业（查账征收）企业所得税季度');
		}
		function hdzsJb(){
			if(!JsTjdlXz('QYSDSXZ')){
			    return false;
			}
			showPageNew4('/jsdzsb/qydsdjd/hdzsIndex.do','居民企业（核定征收）企业所得税季度申报');
		}
		</script>

		

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