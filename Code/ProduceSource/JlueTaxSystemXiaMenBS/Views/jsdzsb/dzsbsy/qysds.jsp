






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
            <td width="103" align="left"><div align="center">月度申报（汇总纳税分支机构）</div></td>
            <td width="427" align="left">
            	<input name="czzsYb" type="radio" id="czzsYb" onclick="czzsYb();" value="czzsYb" class="tbpadding"/>
              	<label id="lbl_czzsYb" for="czzsYb" >居民企业（汇总纳税分支机构 ）企业所得税月度</label>
            </td>
            <td width="464" align="left"  class="h12_gray STYLE1 hintColor"  style="padding-left:20px;" ><p><span class="STYLE1 hintColor">受理汇总纳税分支机构月度申报</span></p></td>
          </tr>
          <tr>
            <td width="103" align="left"><div align="center">季度申报（核定征收企业 ）</div></td>
            <td width="427" align="left">
            	<input name="hdzsJb" type="radio" id="hdzsJb" onclick="hdzsJb();" value="hdzsJb" class="tbpadding"/>
              	<label id="lbl_hdzsJb" for="hdzsJb" >居民企业（核定征收）企业所得税季度申报</label></td>
            <td width="464" align="left"  class="h12_gray STYLE1"  style="padding-left:20px;" ><p><span class="STYLE1 hintColor">受理核定征收企业季度申报 </span></p></td>
          </tr>
          <tr style="display:none">
            <td width="103" align="left"><div align="center">居民企业参股外国企业信息报告表</div></td>
            <td width="427" align="left">
            	<input id="cgwgqy" type="radio" name="cgwgqy" value="cgwgqy" onclick="showPageNew4('/jsdzsb/qysds/index.do','居民企业参股外国企业信息报告表')" class="tbpadding"/>
              	<label id="cgwgqy" for="cgwgqy" >居民企业参股外国企业信息报告表 </label></td>
            <td width="464" align="left"  class="h12_gray STYLE1"  style="padding-left:20px;" ><p><span class="STYLE1 hintColor"> 居民企业参股外国企业信息报告表报送</span></p></td>
          </tr>
          
          <tr>
            <td rowspan="4" align="left"><div align="center">年度申报</div>              <div align="center"></div>              <div align="center"></div></td>
            <td align="left"><input id="radio6" type="radio" name="plsbwjclqicx"  onclick="alert('（告知事项）因小微企业税收政策调整，我局企业所得税季（月）度网上申报系统需升级改造，暂停企业所得税季（月）度网上纳税申报。');" class="tbpadding" value="grsdsmx"/>
              <label id="lbl_plsbwjclqicx" for="radio6"></label>居民企业（查帐征收）企业所得税年度申报
			  <label id="lbl_grsdsmx" for="grsdsmx"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">受理非汇总纳税企业与汇总纳税企业(总机构)企业所得税年度申报</span></td>
          </tr>
          <tr>
            <td align="left"><input name="qysdsndfzjg" type="radio" id="qysdsndfzjg" onclick="alert('（告知事项）因小微企业税收政策调整，我局企业所得税季（月）度网上申报系统需升级改造，暂停企业所得税季（月）度网上纳税申报。');" class="tbpadding" value="qysdsndfzjg"/>
              <label id="lbl_qysdsndfzjg" for="qysdsndfzjg">跨地区经营汇总纳税企业的分支机构年度纳税申报</label>
			</td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">受理纳税企业(分支机构)企业所得税年度申报</span></td>
          </tr>
          <tr>
            <td align="left"><input name="qysdsndhdzs" type="radio" id="qysdsndhdzs" onclick="alert('（告知事项）因小微企业税收政策调整，我局企业所得税季（月）度网上申报系统需升级改造，暂停企业所得税季（月）度网上纳税申报。');" class="tbpadding" value="qysdsndhdzs"/>
              <label id="lbl_qysdsndhdzs" for="qysdsndhdzs">居民企业（核定征收）企业所得税年度申报</label>
			 </td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">受理居民企业（定期定率征收）企业所得税年度申报</span></td>
          </tr>
          <tr>
            <td align="left"><input id="radio7" type="radio" name="plsbwjclqicx" onclick="alert('该模块升级改造中，暂停关联业务往来报告表报送！');" class="tbpadding" value="grsdsmx"/>
              <label id="lbl_plsbwjclqicx" for="radio7"></label>企业年度关联业务往来报告表报送</td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">受理居民企业年度关联业务往来报告表的上报</span></td>
          </tr>
          
          <tr>
            <td align="left"><div align="center">企业清算</div></td>
            <td align="left">
            <input name="plsbwjclqicx" type="radio" id="radio8" onclick="alert('正在开发中');" value="grsdsmx" class="tbpadding"/>居民企业清算企业所得税申报
  			<label id="lbl_grsdsmx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">受理居民企业清算企业所得税</span></td>
          </tr>
            <tr>
            <td rowspan="4" align="left"><div align="center">企业所得税申报数据查询</div></td>
            <td align="left">
            <input name="qysdssjcx" type="radio" id="radio8" onclick="showPageNew4('/ndsbb/jdsbb_start.do','居民企业（查账征收）企业所得税季度申报明细查询');" value="qysdscx" class="tbpadding"/>居民企业（查账征收）企业所得税季度申报明细查询
  			<label id="lbl_qysdscx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">居民企业（查账征收）企业所得税季度申报明细查询</span></td>
          </tr>
		  <tr>
            <td align="left">
            <input name="qysdssjcx" type="radio" id="radio8" onclick="showPageNew4('/ndsbb/ndsbb_hdzsjdsb.do','居民企业（核定征收）企业所得税季度申报明细查询');" value="qysdscx" class="tbpadding"/>居民企业（核定征收）企业所得税季度申报明细查询
  			<label id="lbl_qysdscx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">居民企业（核定征收）企业所得税季度申报明细查询</span></td>
		  </tr>
		  <tr>
            <td align="left">
            <input name="qysdssjcx" type="radio" id="radio8" onclick="showPageNew4('/ndsbb/query_ndsbb.do','居民企业（查账征收）企业所得税年度申报明细查询');" value="qysdscx" class="tbpadding"/>居民企业（查账征收）企业所得税年度申报明细查询
  			<label id="lbl_qysdscx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">居民企业（查账征收）企业所得税年度申报明细查询</span></td>
		  </tr>
		  <tr>
            <td align="left">
            <input name="qysdssjcx" type="radio" id="radio8" onclick="showPageNew4('/ndsbb/ndsbb_hdzsndsb.do','居民企业（核定征收）企业所得税年度申报明细查询');" value="qysdscx" class="tbpadding"/>居民企业（核定征收）企业所得税年度申报明细查询
  			<label id="lbl_qysdscx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">居民企业（核定征收）企业所得税年度申报明细查询</span></td>
		  </tr>
		  <tr>
            <td align="left"><div align="center">扣缴企业所得税</div></td>
            <td align="left">
            <input name="plsbwjclqicx" type="radio" id="radio8" onclick="showPageNew4('/jsdzsb/kjqydsd/index.do','扣缴企业所得税');" value="grsdsmx" class="tbpadding"/>扣缴企业所得税
  			<label id="lbl_grsdsmx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">扣缴企业所得税申报</span></td>
          </tr>
          
          <tr>
            <td rowspan="4" align="left"><div align="center">非居民企业所得税申报</div></td>
            <td align="left">
            <input name="fjmqysdssb" type="radio" id="radio8" onclick="window.open('https://etax.xiamen.chinatax.gov.cn:9012/wssb/wssb/public/jsp/wssb.jsp?sblx=FJMSDS')" value="grsdsmx" class="tbpadding"/>非居民企业（据实申报）季度申报
  			<label id="lbl_grsdsmx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">中华人民共和国非居民企业所得税季度纳税申报表（适用于据实申报企业）</span></td>
          </tr>
          <tr>
            <td align="left">
            <input name="fjmqysdssb" type="radio" id="radio8" onclick="window.open('https://etax.xiamen.chinatax.gov.cn:9012/wssb/wssb/public/jsp/wssb.jsp?sblx=FJMSDS')"  value="qysdscx" class="tbpadding"/>非居民企业(核定征收)企业所得税季度申报
  			<label id="lbl_qysdscx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">中华人民共和国非居民企业所得税季度和年度纳税申报表（适用于核定征收企业)/(不构成常设机构和国际运输免税申报）</span></td>
		  </tr>
          <tr>
            <td align="left">
            <input name="fjmqysdssb" type="radio" id="radio8" onclick="window.open('https://etax.xiamen.chinatax.gov.cn:9012/wssb/wssb/public/jsp/wssb.jsp?sblx=FJMSDS')"  value="qysdscx" class="tbpadding"/>非居民企业(据实申报)企业所得税年度申报
  			<label id="lbl_qysdscx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">中华人民共和国非居民企业所得税年度纳税申报表（适用于据实申报企业）</span></td>
		  </tr>
          <tr>
            <td align="left">
            <input name="fjmqysdssb" type="radio" id="radio8" onclick="window.open('https://etax.xiamen.chinatax.gov.cn:9012/wssb/wssb/public/jsp/wssb.jsp?sblx=FJMSDS')"  value="qysdscx" class="tbpadding"/>非居民企业(核定征收)企业所得税年度申报
  			<label id="lbl_qysdscx" for="radio3"></label></td>
            <td align="left"  style="padding-left:20px;"  class="h12_gray" ><span class="STYLE1 hintColor">中华人民共和国非居民企业所得税季度和年度纳税申报表（适用于核定征收企业)/(不构成常设机构和国际运输免税申报）</span></td>
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