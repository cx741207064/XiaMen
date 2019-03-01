<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="lb_java.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.jsdzsb.yhssb.lb_java" %>

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

		<title>厦门税务
		</title>

		<script src="/res/dwfw/js/jquery-1.10.2.js" type="text/javascript"></script>
	 
		<script src="/res/js/common.js" type="text/javascript"></script>
		<script src="/res/otp4/js/lib/layer/layer.js" type="text/javascript"></script>
		<script type="text/javascript" language="JavaScript" src="/res/js/common/components/inputCtrl.js?v1"></script>
  
		
 <meta charset="UTF-8">
    <meta name="decorator" content="blank"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	 
<c:set var="resV" value="v1" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
   
   <link href="/res/otp4/js/lib/ztree/css/zTreeStyle/zTreeStyle.css" rel="stylesheet" type="text/css" />
   <link href="/res/otp4/css/otp4-base.css?" rel="stylesheet"/>
   <link href="/res/otp4/css/otp4-form.css?" rel="stylesheet" type="text/css" />
   <link href="/res/otp4/css/otp4-panel.css?" rel="stylesheet" type="text/css" />
    
    <link href="/res/otp4/css/otp4-page.css?" rel="stylesheet" type="text/css" />
    <link href="/res/otp4/css/otp4-menu.css?" rel="stylesheet" type="text/css" />
    <link href="/res/otp4/css/themes/otp4-menu.css?" rel="stylesheet" type="text/css" />
    <link href="/res/otp4/css/themes/otp4-form.css?" rel="stylesheet" type="text/css" />
    <link href="/res/otp4/css/themes/otp4-panel.css?" rel="stylesheet" type="text/css" />
    <link href="/res/otp4/css/themes/otp4-table.css?" rel="stylesheet" type="text/css" />
    
    <!-- 
    <script src="/res/otp4/js/lib/shiv/html5shiv.min.js" type="text/javascript"></script>
    <script src="/res/otp4/js/lib/shiv/respond.min.js" type="text/javascript"></script>
     -->
    <script src="/res/otp4/js/lib/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="/res/otp4/js/lib/jquery.fix.clone.js" type="text/javascript"></script>
    <script src="/res/otp4/js/lib/jquery.json.js" type="text/javascript"></script>
    <script src="/res/otp4/js/lib/layer/layer.js" type="text/javascript"></script>
    <script src="/res/otp4/js/lib/ztree/jquery.ztree.all-3.5.js" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-base.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-utils.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-core.js?" type="text/javascript" ></script>
    <script src="/res/otp4/js/otp4-route.js?" type="text/javascript"></script>
    
    <script src="/res/otp4/js/lib/avalon.js?" type="text/javascript"></script>
    <!--  script src="/res/otp4/js/lib/avalon.shim.js" type="text/javascript"></script-->
    <script src="/res/otp4/js/otp4-iehack.js?" type="text/javascript"></script>
    
    <script src="/res/otp4/js/otp4-selmodel.js?" type="text/javascript"></script>
    
    <script src="/res/otp4/js/lib/My97DatePicker/WdatePicker.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-expression.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-controls.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-upload.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-validate.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-validate-ext.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-idcode.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-froute.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-filters.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-menu.js?" type="text/javascript"></script>
    <script src="/res/otp4/js/otp4-menu-ie6.js?" type="text/javascript"></script>
    <script src="/res/js/otp4-app-config.js?" type="text/javascript"></script>
    <script src="/res/js/otp4-input-ext.js?" type="text/javascript"></script>
    
    <script src="/res/wsbs/js/bsfwzxmenu.js" type="text/javascript"></script>
    
    <link href="/res/wsbs/css/step.css" type="text/css" rel="stylesheet" >
    <link href="/res/wsbs/css/global.css?" type="text/css" rel="stylesheet" id="mycss">
    <link href="/res/wsbs/css/xmdswz.css" type="text/css" rel="stylesheet" >
    <link href="/res/wsbs/css/xmdswz_print.css" type="text/css" rel="stylesheet" >
    <link href="/res/wsbs/css/swdj_style.css" type="text/css" rel="stylesheet" >
    
    <script type="text/javascript" language="JavaScript" src="/res/js/common/core.js?"></script>
    <script type="text/javascript" language="JavaScript" src="/res/js/common/collections.js?"></script>
    <script type="text/javascript" language="JavaScript" src="/res/js/common/system.js?"></script>
    <script type="text/javascript" language="JavaScript" src="/res/js/common/ajaxrequest.js?"></script>
    <script type="text/javascript" language="JavaScript" src="/res/js/common/components/Behaviour.js?"></script>
    <script type="text/javascript" language="JavaScript" src="/res/js/common/components/floatlayer.js?"></script>
   
    <script type="text/javascript" language="JavaScript" src="/res/js/common/components/inputCtrl.js?"></script>
    <script language="javascript" type="text/javascript" src="/res/js/wssb/wssb_common.js?v=3"></script>
	<script language="javascript" type="text/javascript" src="/res/js/wssb/wssb_nssb.js?"></script>
	<script language="javascript" type="text/javascript" src="/res/js/wssb/wssb_qysds.js"></script>
	<script language="javascript" type="text/javascript" src="/res/js/wssb/wssb_grsds.js"></script>
	<link href="/res/jsdzsb/css.css" rel="stylesheet" type="text/css" />
	<script src="/res/jsdzsb/jsdzsb_common.js" type="text/javascript"></script> 
	<link href="/res/css/css.css" rel="stylesheet" type="text/css" />
	<script src="/res/js/jquery-1.10.2.js" type="text/javascript"></script>
	<script src="/res/js/common.js" type="text/javascript"></script>
	<link href="/res/jsdzsb/css.css" rel="stylesheet" type="text/css" />
	 
<script type="text/javascript" charset="UTF-8">
 
    /**
    $(document).ready(function() {
    
        $(document).ajaxError(function(){ function(e,xhr,opt){
                alert("登录超时,请重新登录！");  
                window.top.location.href="<c:url value="/login/index.do" />";}
        );
    
    });
    **/

</script>

	</head>

	<body>
	
	
  
  

		
<script type="text/javascript"><!--
    function getObj(objName) {
        var obj = document.getElementById(objName);
        if(obj == null || obj == undefined)
            obj = document.getElementsByName(objName)[0];
        return obj;
    }
	
	
    $(function(){
        var divs=["yhssblb","yhstjsbjl","yhstxsbb",]; 
        var tzlx="yhssblb";
        for(var i=0;i<divs.length;i++){
		 
            if(divs[i]==tzlx){
                $("#"+divs[i]).show();
            }else{
                $("#"+divs[i]).hide();
            }	 
        }
        if(tzlx=="yhssblb"){
            var sjyzeNo = 0;
            var sjyze = 0.00;
            if (getObj("tmp_count")) {
                sjyzeNo = getObj("tmp_count").value;
            }
            for (var i = 0 ; i < sjyzeNo ; i ++) {
                sjyze = sjyze + parseFloat(getoff_Qfw(getObj("sbbList[" + i + "]['SJYZE']").value));
            }
		   
            if(sjyze=='0'){
                $("#_skhj").text("0");
            }else{
                $("#_skhj").text(add_Qfw(toFixedNum(sjyze,2)));  
            }
        }  
        if(tzlx=='yhstxsbb'){
		 
		 
            //szChange();
            var hdlx="1";
            //getObj("sbbVo['hdzshdde']").value="";
            if(hdlx=='1'){
                getObj("sbbVo['hdzshdbl']").readOnly = true;
                getObj("sbbVo['hdzshdbl']").style.backgroundColor="#D0D0D0";
                getObj("sbbVo['hdzshdde']").readOnly = true;
                getObj("sbbVo['hdzshdde']").style.backgroundColor="#D0D0D0";
            }else 
                /*
                 if(hdlx=='2'){
                getObj("sbbVo['hdzshdbl']").readOnly = true;
                getObj("sbbVo['hdzshdbl']").style.backgroundColor="#D0D0D0";
                getObj("sbbVo['jsje']").readOnly = true;
                getObj("sbbVo['jsje']").style.backgroundColor="#D0D0D0";
                getObj("sbbVo['hdzshdde']").readOnly = true;
            }else 
                */
           
            {
                getObj("sbbVo['jsje']").readOnly = true;
                getObj("sbbVo['jsje']").style.backgroundColor="#D0D0D0";
                getObj("sbbVo['hdzshdde']").readOnly = false;
                getObj("sbbVo['hdzshdde']").style.backgroundColor="";
     	 
     	 
            }
            window.setTimeout(ys,0);
        }
	 
    });
   
    function ys(){
        var skssqq="2018-10-01";
        var zspmdm="101110599";
        if(skssqq>="2018-05-01"&&zspmdm=="101110599")
            alert("自2018年5月1日起，对按件贴花五元的其他账簿免征印花税。请符合条件的纳税人选择减免性质——其他账簿免征印花税");
        if(skssqq>="2018-05-01"&&zspmdm=="101110501")
            alert("自2018年5月1日起，对按万分之五税率贴花的资金账簿减半征收印花税。请符合条件的纳税人选择减免性质——资金账簿减半征收印花税");
    }
   
    function tjsbjl(){
	  
        $("#myForm1").attr("action","/jsdzsb/yhssb/tjsbjl.do");  
        $("#myForm1").submit();
    }
    function tjsbb(){
		  
        $("#myForm1").attr("action","/jsdzsb/yhssb/tjsblb.do");  
        $("#myForm1").submit();
    }
    function tjsbbsb(){
        var sfzhm=getObj("sbbVo['sfzhm']").value;
        /*if(sfzhm=='' || sfzhm==null){
            alert("身份证号码必须填写！");
            return false;
        }*/
        var _confMsg = "请确认是否提交申报。提交申报后，可通过“申报记录查询或作废”菜单项查询申报结果。";
        var xgbz=document.getElementById("xgbz").value;
        if (confirm(_confMsg)) {
            if(xgbz=="yes"){
                $("#myForm1").attr("action","/jsdzsb/yhssb/xgtjsblbsb.do"); 
            }
            else
                $("#myForm1").attr("action","/jsdzsb/yhssb/tjsblbsb.do");  
            $("#myForm1").submit();
        }
    }
    function qxbcsb(){
        var xgbz=document.getElementById("xgbz").value;
        if(confirm("是否确定取消本次申报？")){
            if(xgbz=='yes')
                location.href="/jsdzsb/yhssb/index.do?xgbz=yes";
            if(xgbz=='no')   
                location.href="/jsdzsb/yhssb/index.do";
        }
    }
    function txsbb(){
        var sfzhm=getObj("sbbVo['zspmdm']").value;
	   
        if(sfzhm=='' || sfzhm==null){
            alert("应征凭证名称必须填写！");
            return false;
        } 
        var zsxmdm=getObj("sbbVo['zsxmdm']").value;
        var skssqq=getObj("sbbVo['skssqq']").value;
        var skssqz=getObj("sbbVo['skssqz']").value;
        // if(!JsYsqbChecker(skssqq,skssqz,zsxmdm,sfzhm,'','')){
        //     return false;
        //  }
        var xgbz=document.getElementById("xgbz").value;
        if(xgbz=="yes"){
            $.ajax({
                url:"/jsdzsb/yhssb/pd.do",
                data:$("#myForm2").serialize(), 
                method:"POST",
                async : false,
                success:function(data) {
                    if(data.res=="false"){
                        alert(data.message);
                    }
                    if(data.res=="true"){
                        $("#myForm2").attr("action","/jsdzsb/yhssb/xgsbb.do");
                        $("#myForm2").submit();
                    }
                }
            });
        }
        else{
            $("#myForm2").attr("action","/jsdzsb/yhssb/txsbb.do"); 
            $("#myForm2").submit();
        }
    }
    //增加记录时检测是否为空
    var notNullObj = new Array("sbbVo['bqynse']", "sbbVo['bqybtse']");
    var notNullObjName = new Array("本期应纳税额","本期应补（退）税额");
    function qrtj(flag){
	   
	   
	   
        for(ii=0; ii<notNullObj.length; ii++) {
            var obj = getObj(notNullObj[ii]);
            if(isEmpty(obj.value)) {
                alert(notNullObjName[ii] + "必须输入！");
                obj.focus();
                return false;
            }
        }
        var smObj = $("#zspmdm")[0];
        var hdlx='1';
        if(hdlx=='1' ){
            var jsjeObj = getObj("sbbVo['jsje']");
            var JSJE = getoff_Qfw(jsjeObj.value);
            if(isEmpty(JSJE)) {
                reject(jsjeObj, "计税金额或件数必须输入！");
                return false;
            }
        }else {
            var hdzshddeObj = getObj("sbbVo['hdzshdde']");
            var hdzshdde = getoff_Qfw(hdzshddeObj.value);
            if(isEmpty(hdzshdde)) {
                reject(hdzshddeObj, "核定依据必须输入！");
                return false;
            }
        }
        if(!(smObj.value =="101110400" || smObj.value == "101110599" || smObj.value == "101119800") ) {
            var obj = getObj("sbbVo['hdzshdde']");
            if(false&&isEmpty(obj.value)) {
                alert("核定依据必须输入！");
                obj.focus();
                return false;
            }
        }
        /*
        
        if((smObj.value == "101110400") || (smObj.value == "101110599") || (smObj.value == "101119800")) {
            var jsjeObj = getObj("sbbVo['jsje']");
              var JSJE = getoff_Qfw(jsjeObj.value);
              if(isEmpty(JSJE)) {
                reject(jsjeObj, "计税金额或件数必须输入！");
                return false;
              }
        } else {
          var yyeObj = getObj("sbbVo['hdzshdde']");
          var YYE = getoff_Qfw(yyeObj.value);
          if(false&&isEmpty(YYE)) {
            reject(yyeObj, "核定依据必须输入！");
            return false;
          }
          var yyeNum = new Number(YYE);
          if(yyeNum.lessThan(0)) {
            alert("核定依据不能为负数！");
            yyeObj.focus();
            return false;
          }
          
          var hdblObj = getObj("sbbVo['hdzshdbl']");
          if(false&&isEmpty(hdblObj.value)) {
            reject(hdblObj, "核定比例必须输入！");
            return false;
          }
          var jsjeObj = getObj("sbbVo['jsje']");
          var JSJE = getoff_Qfw(jsjeObj.value);
          if(isEmpty(JSJE)) {
            reject(jsjeObj, "计税金额或件数必须输入！");
            return false;
          }
          

        }
        */
		  


        var ynseObj = getObj("sbbVo['bqynse']");
        var YNSE = getoff_Qfw(ynseObj.value);
        var ynseNum = new Number(YNSE);
        if(ynseNum.lessThan(0)) {
            alert("应纳税（费）额不能为负数！");
            ynseObj.focus();
            return false;
        }

		   

        //检测减免额是否大于应纳税额
        var ynseVal = toFloat(getoff_Qfw(getObj("sbbVo['bqynse']").value));
        var dkeVal = toFloat(getoff_Qfw(getObj("sbbVo['bqyjse1']").value));
        var jmse = toFloat(getoff_Qfw(getObj("sbbVo['jmse']").value));
        if(ynseVal < dkeVal+jmse) {
            alert("(本期减免税额+本期已缴税额)不能大于应纳税额。")
            getObj("sbbVo['jmse']").focus();
            getObj("sbbVo['jmse']").style.backgroundColor="red";
		 
            return false;
        }
        //  return true;
        /**逾期申报检测*/
        //  var ret = checkYqsb();
        //  return !ret;    
		  
        var ssjmxzdm=getObj("sbbVo['ssjmxzdm']").value;
        var ynse=getObj("sbbVo['bqynse']").value;
        var sfjm=getObj("sbbVo['sfjm']").value;
        var jme=getObj("sbbVo['jmse']").value;
        if(ssjmxzdm!='' ){
            if(jme=='' ||jme =='0'){
                alert("您已选择减免性质，请输入减免额！");
                return false;
            }
        }else{
            sfjm="N";
        }
       
        if(sfjm=="N" && ssjmxzdm!=''){
            if(confirm("选择的减免性质未做备案或审批,是否继续？")){
                if(flag=='modify'){
                    $("#myForm3").attr("action","/jsdzsb/yhssb/lb.do?modifysave=ture");  
                    $("#myForm3").submit();
                }else{
                    $("#myForm3").attr("action","/jsdzsb/yhssb/submitSbb.do");  
                    $("#myForm3").submit();

                }
        	  
            }
        }else{
            if(flag=='modify'){
                $("#myForm3").attr("action","/jsdzsb/yhssb/lb.do?modifysave=ture");  
                $("#myForm3").submit();
            }else{
                $("#myForm3").attr("action","/jsdzsb/yhssb/submitSbb.do");  
                $("#myForm3").submit();

            }
        }
	   
    

    }
    --></script>

<div id='yhssblb'>
<form action="/jsdzsb/yhssb/lb.do"  method="post"  id="myForm1">
<input type="hidden" id="xgbz" value="no" name="xgbz">
<input type="hidden" name="errAction" value="/jsdzsb/yhssb/lb.do" />
<table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="left" class="liucheng_01"> </td>
        <td align="left"><table width="650" border="0" align="left" cellpadding="0" cellspacing="0">
          
          <tr>
	    <td>&nbsp;</td>
        <td align="center" class="liucheng_02 h1_14w ">初始化</td>
        <td align="center"><img src="/res/jsdzsb/bsdt/images/over_arrow.png" width="7" height="12" /></td>
        <td align="center" class="liucheng_02 h1_14w">填写申报表</td>
        
         
         
         <td align="center"><img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="7" height="12" /></td>
        <td align="center" class="liucheng_03 h1_14b">确认申报</td>
         
        
        
        <td align="center"><img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="7" height="12" /></td>
        <td align="center" class="liucheng_03 h1_14b">查看回执</td>
      </tr>
        </table></td>
        </tr>
    </table></td>
  </tr>
  <tr>
    <td class="gray3_bg_color"> </td>
  </tr>
  <tr>
    <td><table width="1200" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:30px;">
      <tr>
        <td align="center" class="h16_bold"><strong>印花税纳税申报(报告)表</strong></td>
      </tr>
      <td><table id="frm_dfsf_head" width="100%"  border="1" cellpadding="0" cellspacing="0" bordercolorlight="#000000" bordercolordark="#FFFFFF">
        <tr >
          <td height="21" width="15%" nowrap="nowrap">税款所属期限：</td>
          <td>2018-10-01至2018-10-31 
          <input  type="hidden" name="sbbVo['skssqq']" value="2018-10-01"/>
          <input  type="hidden" name="sbbVo['skssqz']" value="2018-10-31"/>
          <input  type="hidden" name="sbbVo['zsxmdm']" value="10111"/>
          </td>
          <td width="15%" nowrap="nowrap">填表日期：</td>
          <td > 
             2018-10-10
             <input  type="hidden" name="sbbVo['tbrq']" value="2018-10-10"/>
          </td>
          <td >金额单位：元至角分</td>
        </tr>
        <tr >
          <td>纳税人识别号</td>
          <td colspan="4">91350200MA2Y10EC4K</td>
        </tr>
      </table>
        <table id="Table1" width="100%"  border="1" cellpadding="0" cellspacing="0" bordercolorlight="#000000" bordercolordark="#FFFFFF">
        <tr >
          <td height="21" width="15%" nowrap="nowrap">名称</td>
          <td width="35%">威纳仕（厦门）酒业有限公司</td>
          <td nowrap="nowrap" colspan="2">
          <input type="checkbox" name="sbbVo['nsrlx']" value="1" checked="checked" />
                           单位
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="checkbox" name="sbbVo['nsrlx']" value="2" disabled="disabled" />
                         个人 </td>
        </tr>
        <tr >
          <td nowrap="nowrap">登记注册类型</td>
          <td nowrap="nowrap">
          












 


其他有限责任公司
          &nbsp;</td>
          <td nowrap="nowrap">所属行业</td>
          <td nowrap="nowrap"> 
          












 


酒、饮料及茶叶批发
          &nbsp;</td>
        </tr>
        <tr >
          <td nowrap="nowrap">联系方式</td>
          <td  nowrap="nowrap">18559796088&nbsp;</td>
          <td nowrap="nowrap">身份证号码</td>
          <td nowrap="nowrap" ><input type="text" name="sbbVo['sfzhm']"  size="32" maxlength="32" onerrclear="false" required="false" requiredmsg="该项目必须填写" value="" class="line" title="身份证号码" />
          </td>
        </tr>
      </table></td>
    </tr>
	<tr>
    <div align="left">
      <td><table id="frm_dfsf" width="100%"  border="1" cellpadding="0" cellspacing="0" bordercolorlight="#000000" bordercolordark="#FFFFFF">
        <tr class="head">
          <td nowrap="nowrap">操作</td>
          <td nowrap="nowrap">税（费）种 </td>
          <td nowrap="nowrap" width="100">应税项目</td>
          <td nowrap="nowrap" width="80">税（费）<br />
            所属期始</td>
          <td nowrap="nowrap" width="80">税（费）<br />
            所属期止</td>
          <td nowrap="nowrap" style="color:Maroon">应入库税（费）额 </td>
          <td nowrap="nowrap">计税依据 </td>
          <td nowrap="nowrap">核定比例</td>
          <td nowrap="nowrap">计税金额</td>
          <td nowrap="nowrap">税（费）率</td>
          <td nowrap="nowrap">应纳<br />
            税（费）额</td>
          <td nowrap="nowrap">备案减免税（费）额</td>
          <td nowrap="nowrap">备案事项名称</td>
          <td nowrap="nowrap">本期已缴税额</td>
        </tr>
        <tbody>
        
         
           
                <tr>
                  <td align="center" nowrap>
                    <a href="#" onclick="modify('06000002000000000000000132344095')">修改</a>&nbsp;&nbsp; 
                    
                    <a href="#" onclick="del('06000002000000000000000132344095')">删除</a>&nbsp;&nbsp;
                    
                  </td>
                  <td align="center" nowrap> 
                   












 


印花税&nbsp;
                  </td>
                  <td align="center" nowrap> 
                   












 


印花税-












 


购销合同&nbsp;
                  </td>
                  <td align="center" nowrap> 
                   2018-10-01&nbsp;
                  </td>
                  <td align="center" nowrap> 
                   2018-10-31&nbsp;
                  </td >
                  <td align="center" nowrap  style="color:Maroon">
                   3.7&nbsp;
                   <input type="hidden" name="sbbList[0]['SJYZE']"  value="3.7"/>
                  </td>
                  <td align="center" nowrap>
                   &nbsp;
                  </td>
                  <td align="center" nowrap>
                   &nbsp;
                  </td>
                  <td align="center" nowrap>
                   12,345&nbsp;
                  </td>
                   <td align="center" nowrap>
                   0.0003&nbsp;
                  </td>
                   <td align="center" nowrap>
                   3.7&nbsp;
                  </td>
                   <td align="center" nowrap>
                   0&nbsp;
                  </td>
                   <td align="center" nowrap>
                     












 


&nbsp;
                   </td>
                   <td align="center" nowrap>
                   &nbsp;
                  </td>
                  </tr>
                   
           
                <tr>
                  <td align="center" nowrap>
                    <a href="#" onclick="modify('06000002000000000000000132344120')">修改</a>&nbsp;&nbsp; 
                    
                    <a href="#" onclick="del('06000002000000000000000132344120')">删除</a>&nbsp;&nbsp;
                    
                  </td>
                  <td align="center" nowrap> 
                   












 


印花税&nbsp;
                  </td>
                  <td align="center" nowrap> 
                   












 


印花税-












 


财产租赁合同&nbsp;
                  </td>
                  <td align="center" nowrap> 
                   2018-10-01&nbsp;
                  </td>
                  <td align="center" nowrap> 
                   2018-10-31&nbsp;
                  </td >
                  <td align="center" nowrap  style="color:Maroon">
                   2.4&nbsp;
                   <input type="hidden" name="sbbList[1]['SJYZE']"  value="2.4"/>
                  </td>
                  <td align="center" nowrap>
                   &nbsp;
                  </td>
                  <td align="center" nowrap>
                   &nbsp;
                  </td>
                  <td align="center" nowrap>
                   2,345&nbsp;
                  </td>
                   <td align="center" nowrap>
                   0.001&nbsp;
                  </td>
                   <td align="center" nowrap>
                   2.35&nbsp;
                  </td>
                   <td align="center" nowrap>
                   0&nbsp;
                  </td>
                   <td align="center" nowrap>
                     












 


&nbsp;
                   </td>
                   <td align="center" nowrap>
                   &nbsp;
                  </td>
                  </tr>
                   
           
         
          <input type="hidden" name="tmp_count" value="2" />
        </tbody>
      </table>
        <table width="100%" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td>应入库税（费）额合计：<span style="color:red;" id="_skhj">0.00</span></td>
          </tr>
        </table>
	    <p align="left">
	      
	    <div align="center">
      <span style="line-height:1.5;color:red" >
      
      
        <input   type="button" onclick="tjsbjl()" value="添加申报记录" />
      
      
       
       
        <input type="button" value="确认提交" id="submitList" onclick="tjsbb()"
	      	 />
       
      
      
      <input type="button" onClick="qxbcsb()" value="取消本次申报" align="right" >
      </span> </div>
	  </p>
          </td>
    <p>&nbsp;</p>
    </div>
    
	</tr>
	</table>
	<table width="1200" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:30px;">
    <tr>
      <td valign="top" style="line-height:1.5;color:red"><p><font>说明：如有多笔印花税需要申报的，请逐条添加申报记录后再一起提交申报。</font><br/>
          
		  <br/>
          </p></td>
    </tr>
    </table>
    </td>
  </tr>
</table>
</form>
</div>
<div id="yhstjsbjl">
<form action="/jsdzsb/yhssb/lb.do"  method="post"  id="myForm2">
<input type="hidden" name="errAction" value="/jsdzsb/yhssb/tjsbjl.do" />
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td class="gray_bg_color"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:8px; margin-top:8px;">
      <tr>
        <td align="left" class="liucheng_01"> </td>
        <td align="left"><table width="650" border="0" align="left" cellpadding="0" cellspacing="0">
          <tr>
        <td align="center" class="liucheng_02 h1_14w ">初始化</td>
        <td align="center"><img src="/res/jsdzsb/bsdt/images/over_arrow.png" width="9" height="16" /></td>
        <td align="center" class="liucheng_02 h1_14w">填写申报表</td>
        <td align="center"><img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="9" height="16" /></td>
        <td align="center" class="liucheng_03 h1_14b">确认申报</td>
        <td align="center"><img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="9" height="16" /></td>
        <td align="center" class="liucheng_03 h1_14b">查看回执</td>
          </tr>
        </table></td>
        </tr>
    </table></td>
  </tr>
  <tr>
    <td class="gray3_bg_color"> </td>
  </tr>
  <tr>
	<td><table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:30px;">
      <tr>
        <td align="left" class="STYLE2">
          <strong>请添加申报记录：</strong></td>
      </tr>
      <td><table width="100%" border="0" class="border h12_b" style="margin-top:10px;">
		  <tr>
			<td width="183" class="hintText"><div align="right"><span class="STYLE1 STYLE4">*</span>税款所属期起：</div></td>
			<td width="28">&nbsp;</td>
			<td width="412">2018-10-01</td>
			<input type="hidden" name="sbbVo['skssqq']" value="2018-10-01"  />
			<td width="357">&nbsp;</td>
		  </tr>
		  <tr>
			<td class="hintText"><div align="right"><span class="STYLE1 STYLE4">*</span>税款所属期止：</div></td>
			<td>&nbsp;</td>
			<td>2018-10-31</td>
			<input type="hidden" name="sbbVo['skssqz']" value="2018-10-31"  />
			<td>&nbsp;</td>
		  </tr>
	  </table></td>
	  <tr></tr>
	  <td><table width="100%" border="0" class="border h12_b" style="margin-top:10px;">
		  <tr>
			<td width="19%"><div align="right" class="hintText">
			  <div align="right"><span class="STYLE1 STYLE4">*</span>征收项目：</div>
			</div></td>
			<td width="3%">&nbsp;</td>
			<td width="42%"><label>
             












 


印花税
            </label>
			<input type="hidden" name="sbbVo['zsxmdm']" value="10111" id="sbbVo['zsxmdm']" />
			 
			</td>
			<td width="36%">&nbsp;</td>
		  </tr>
		  <tr>
			<td class="hintText"><div align="right"><span class="STYLE1 STYLE4">*</span>应征凭证名称：</div></td>
			<td>&nbsp;</td>
			<td><label>
			













 










<SCRIPT language=javascript type=text/javascript>
<!--
    Array.prototype.remove=function(param){
        var index=0;

        if(isNaN(param)){
            index=this.indexOf(param);
        }
        else {
            index=param;
        }
        var buffer = this;

        if(index>=0 && index<this.length){
            for(var i=index;i<this.length-1;i++)
                buffer[i]=buffer[i+1];
            this.length-=1;
            return true;
        }
        else {
            return false;
        }
    }

    function relationSelect() {
        this.$ = function(id) {
            return document.getElementById(id);
        }

        this.$$ = function(id, idx) {
            var objs = document.getElementsByName(id);
            if(objs[idx])
                return objs[idx];
            else
                throw new Error("$$("+id+","+idx+"): 对象不存在或下标超出范围");
        }

        //给列表增加一个空选项
        this.addOptionItem = function (obj, itemVal, itemText, selected) {
            var no = new Option();
            no.value = itemVal ;
            no.text =  itemText ;
            if($(obj).attr("showdefaulttittle"))	no.title =  itemText ;
            obj.options[obj.options.length] = no;
            if(selected)
                obj.options[obj.options.length - 1].selected = true;
        }

        //删除指定Select控件的所有下拉选项的JS
        this.clearSelectObj = function ( obj ) {
            for(var i=0; i<obj.options.length; i++);
            obj.options[i] == null;
            obj.options.length = 0;
        }

        //生成下拉列表
        this.renderSelectObj = function (obj, parentValue) {
            if(obj.getAttribute("blankOption")) {
                var bOpts = obj.getAttribute("blankOption").split(",");
                if(bOpts.length>1)
                    this.addOptionItem( obj, bOpts[0],  bOpts[1]);
            }
            var parentObjID = obj.getAttribute("parentObjID");
            if(parentObjID==null) parentObjID = "";
            if(parentObjID!="")
                var parentObj = this.$(parentObjID);

            var defaultValue = obj.getAttribute("defaultID");

            var dataArray = new Array();
            if(obj.getAttribute("dataArray")) dataArray = this.cleanDataArray(obj);
            if(parentValue==null) parentValue = "";

            var datalen = dataArray.length;

            for(var ii=0; ii<datalen; ii++) {
                //如果数组中的父代码不等于要显示的父代码，则跳过
                if(parentObj && dataArray[ii][2] != parentValue) continue;
                if ( dataArray[ii][0]==defaultValue)
                    this.addOptionItem( obj, dataArray[ii][0], dataArray[ii][1], true);
                else
                    this.addOptionItem( obj, dataArray[ii][0], dataArray[ii][1]);
            }
        }

        //取得代码数组并根据显示或隐藏列表进行清理
        this.cleanDataArray = function(obj) {
            var dataArray = new Array();
            if(obj.getAttribute("dataArray")) dataArray = eval(obj.getAttribute("dataArray"));

            if(obj.getAttribute("showList")) {
                var showVals = obj.getAttribute("showList").split(",");
                for(ii=0; ii<dataArray.length; ii++) {
                    var bFound = false;
                    for(jj=0; jj<showVals.length; jj++) {
                        if(showVals[jj]==dataArray[ii][0]) {
                            bFound = true;
                            break;
                        }
                    }
                    if(!bFound) {
                        dataArray.remove(ii--);
                    }
                }
            }else if(obj.getAttribute("hiddenList")) {
                var hiddenVals = obj.getAttribute("hiddenList").split(",");
                for(ii=0; ii<dataArray.length; ii++) {
                    for(jj=0; jj<hiddenVals.length; jj++) {
                        if(hiddenVals[jj]==dataArray[ii][0]) {
                            dataArray.remove(ii--);
                            break;
                        }
                    }
                }
            }
            return dataArray;
        }

        //父对象OnChange事件处理JS函数
        this.selectChanged = function ( obj ) {
            var childObjID = obj.getAttribute("childObjID");
            var childObj = this.$(childObjID);
            if(childObj) {
                this.clearSelectObj(childObj, obj.value);
                this.renderSelectObj(childObj, obj.value);
                //触发子控件的onChange事件
                this.selectChanged(childObj);
            }
        }
    }

    var relSelect = new relationSelect();
    //-->

</SCRIPT>

<select onchange="if(relSelect) {relSelect.selectChanged(this);}"  id="sbbVo['zspmdm']" name="sbbVo['zspmdm']" parentObjID="sbbVo['zsxmdm']" dataArray="JS_ZSPM_DM" defaultID="101110101">
<script type="text/javascript" language="javascript">
    //字段名： DM, DMZW_MC, SJDM, DM_MC
    var JS_ZSPM_DM = new Array( 
    new Array("101016606", "不动产经营租赁（11%、10%、5%）", "10101", "101016606"),
    new Array("101017714", "建筑物（11%、10%、5%）-二手房", "10101", "101017714"),
    new Array("101017724", "构筑物（11%、10%、5%）-二手房", "10101", "101017724"),
    new Array("101030101", "陆路运输", "10103", "101030101"),
    new Array("101030102", "水路运输", "10103", "101030102"),
    new Array("101030103", "航空运输", "10103", "101030103"),
    new Array("101030104", "管道运输", "10103", "101030104"),
    new Array("101030105", "装卸搬运", "10103", "101030105"),
    new Array("101030201", "建筑", "10103", "101030201"),
    new Array("101030202", "安装", "10103", "101030202"),
    new Array("101030203", "修缮", "10103", "101030203"),
    new Array("101030204", "装饰", "10103", "101030204"),
    new Array("101030299", "其他工程作业", "10103", "101030299"),
    new Array("101030301", "金融", "10103", "101030301"),
    new Array("101030302", "保险", "10103", "101030302"),
    new Array("101030303", "证券", "10103", "101030303"),
    new Array("101030401", "邮政", "10103", "101030401"),
    new Array("101030402", "电信", "10103", "101030402"),
    new Array("101030501", "文化业", "10103", "101030501"),
    new Array("101030502", "体育业", "10103", "101030502"),
    new Array("101030601", "音乐茶座", "10103", "101030601"),
    new Array("101030602", "台球", "10103", "101030602"),
    new Array("101030603", "高尔夫球", "10103", "101030603"),
    new Array("101030604", "保龄球", "10103", "101030604"),
    new Array("101030605", "游艺厅", "10103", "101030605"),
    new Array("101030606", "网吧", "10103", "101030606"),
    new Array("101030607", "舞厅", "10103", "101030607"),
    new Array("101030608", "歌厅", "10103", "101030608"),
    new Array("101030609", "卡拉OK舞厅", "10103", "101030609"),
    new Array("101030699", "其他娱乐业", "10103", "101030699"),
    new Array("101030701", "代理业", "10103", "101030701"),
    new Array("101030702", "旅店业", "10103", "101030702"),
    new Array("101030703", "饮食业", "10103", "101030703"),
    new Array("101030704", "旅游业", "10103", "101030704"),
    new Array("101030705", "仓储业", "10103", "101030705"),
    new Array("101030706", "租赁业", "10103", "101030706"),
    new Array("101030707", "房屋租赁", "10103", "101030707"),
    new Array("101030708", "广告业", "10103", "101030708"),
    new Array("101030799", "其他服务业", "10103", "101030799"),
    new Array("101030801", "转让土地使用权", "10103", "101030801"),
    new Array("101030802", "转让商标权", "10103", "101030802"),
    new Array("101030803", "转让专利权", "10103", "101030803"),
    new Array("101030804", "转让非专利权", "10103", "101030804"),
    new Array("101030805", "转让著作权", "10103", "101030805"),
    new Array("101030806", "转让商誉", "10103", "101030806"),
    new Array("101030807", "转让动漫版权", "10103", "101030807"),
    new Array("101030808", "转让自然资源使用权", "10103", "101030808"),
    new Array("101030899", "其他转让无形资产", "10103", "101030899"),
    new Array("101030901", "销售建筑物或构筑物", "10103", "101030901"),
    new Array("101030902", "销售其他土地附着物", "10103", "101030902"),
    new Array("101030999", "其他销售不动产", "10103", "101030999"),
    new Array("101039901", "滞纳金", "10103", "101039901"),
    new Array("101039902", "罚款", "10103", "101039902"),
    new Array("101040001", "应纳税所得额", "10104", "101040001"),
    new Array("101049901", "滞纳金", "10104", "101049901"),
    new Array("101049902", "罚款", "10104", "101049902"),
    new Array("101049903", "利息收入", "10104", "101049903"),
    new Array("101050000", "企业所得税退税", "10105", "101050000"),
    new Array("101060100", "工资薪金所得", "10106", "101060100"),
    new Array("101060200", "个体户生产经营所得", "10106", "101060200"),
    new Array("101060300", "企事业承包承租经营所得", "10106", "101060300"),
    new Array("101060400", "劳务报酬所得", "10106", "101060400"),
    new Array("101060500", "稿酬所得", "10106", "101060500"),
    new Array("101060600", "特许权使用费所得", "10106", "101060600"),
    new Array("101060799", "其他利息、股息、红利所得", "10106", "101060799"),
    new Array("101060801", "个人房屋出租", "10106", "101060801"),
    new Array("101060899", "其他财产租赁所得", "10106", "101060899"),
    new Array("101060901", "限售股转让所得", "10106", "101060901"),
    new Array("101060902", "房屋转让所得", "10106", "101060902"),
    new Array("101060903", "财产拍卖所得及回流文物拍卖所得", "10106", "101060903"),
    new Array("101060999", "其他转让所得", "10106", "101060999"),
    new Array("101061000", "偶然所得", "10106", "101061000"),
    new Array("101061100", "其他所得", "10106", "101061100"),
    new Array("101069901", "滞纳金", "10106", "101069901"),
    new Array("101069902", "罚款", "10106", "101069902"),
    new Array("101070423", "高岭土（瓷土）", "10107", "101070423"),
    new Array("101070439", "石灰石", "10107", "101070439"),
    new Array("101070499", "其他未列名非金属矿原矿", "10107", "101070499"),
    new Array("101071201", "地热", "10107", "101071201"),
    new Array("101073103", "高岭土", "10107", "101073103"),
    new Array("101073105", "石灰石", "10107", "101073105"),
    new Array("101073110", "粘土", "10107", "101073110"),
    new Array("101073111", "砂石", "10107", "101073111"),
    new Array("101073114", "海盐", "10107", "101073114"),
    new Array("101073201", "矿泉水", "10107", "101073201"),
    new Array("101073202", "大理岩", "10107", "101073202"),
    new Array("101073203", "花岗岩", "10107", "101073203"),
    new Array("101073299", "其他未列名非金属矿", "10107", "101073299"),
    new Array("101079901", "滞纳金", "10107", "101079901"),
    new Array("101079902", "罚款", "10107", "101079902"),
    new Array("101090101", "市区（增值税附征）", "10109", "101090101"),
    new Array("101090102", "市区（营业税附征）", "10109", "101090102"),
    new Array("101090103", "市区（消费税附征）", "10109", "101090103"),
    new Array("101090201", "县城、镇（增值税附征）", "10109", "101090201"),
    new Array("101090202", "县城、镇（营业税附征）", "10109", "101090202"),
    new Array("101090203", "县城、镇（消费税附征）", "10109", "101090203"),
    new Array("101090301", "非市区、县城、镇（增值税附征）", "10109", "101090301"),
    new Array("101090302", "非市区、县城、镇（营业税附征）", "10109", "101090302"),
    new Array("101090303", "非市区、县城、镇（消费税附征）", "10109", "101090303"),
    new Array("101099901", "滞纳金", "10109", "101099901"),
    new Array("101099902", "罚款", "10109", "101099902"),
    new Array("101100700", "从价计征", "10110", "101100700"),
    new Array("101100800", "从租计征", "10110", "101100800"),
    new Array("101100900", "个人出租住房", "10110", "101100900"),
    new Array("101109901", "滞纳金", "10110", "101109901"),
    new Array("101109902", "罚款", "10110", "101109902"),
    new Array("101110101", "购销合同", "10111", "101110101"),
    new Array("101110102", "加工承揽合同", "10111", "101110102"),
    new Array("101110103", "建设工程勘察设计合同", "10111", "101110103"),
    new Array("101110104", "建筑安装工程承包合同", "10111", "101110104"),
    new Array("101110105", "财产租赁合同", "10111", "101110105"),
    new Array("101110106", "货物运输合同(按运输费用万分之五贴花)", "10111", "101110106"),
    new Array("101110107", "仓储保管合同", "10111", "101110107"),
    new Array("101110108", "借款合同", "10111", "101110108"),
    new Array("101110109", "财产保险合同", "10111", "101110109"),
    new Array("101110110", "技术合同", "10111", "101110110"),
    new Array("101110200", "产权转移书据", "10111", "101110200"),
    new Array("101110400", "权利、许可证照", "10111", "101110400"),
    new Array("101110501", "资金账簿", "10111", "101110501"),
    new Array("101110599", "其他营业账簿", "10111", "101110599"),
    new Array("101119800", "其他凭证", "10111", "101119800"),
    new Array("101120101", "城市土地使用税等级1", "10112", "101120101"),
    new Array("101120102", "城市土地使用税等级2", "10112", "101120102"),
    new Array("101120103", "城市土地使用税等级3", "10112", "101120103"),
    new Array("101120104", "城市土地使用税等级4", "10112", "101120104"),
    new Array("101120105", "城市土地使用税等级5", "10112", "101120105"),
    new Array("101120110", "城市土地使用税等级10", "10112", "101120110"),
    new Array("101120111", "城市土地使用税等级11", "10112", "101120111"),
    new Array("101120112", "城市土地使用税等级12", "10112", "101120112"),
    new Array("101120113", "城市土地使用税等级13", "10112", "101120113"),
    new Array("101120114", "城市土地使用税等级14", "10112", "101120114"),
    new Array("101120115", "城市土地使用税等级15", "10112", "101120115"),
    new Array("101129901", "滞纳金", "10112", "101129901"),
    new Array("101129902", "罚款", "10112", "101129902"),
    new Array("101130501", "普通住宅（预征）", "10113", "101130501"),
    new Array("101130502", "非普通住宅（预征）", "10113", "101130502"),
    new Array("101130503", "其他类型房地产（预征）", "10113", "101130503"),
    new Array("101130601", "普通住宅（清算）", "10113", "101130601"),
    new Array("101130602", "非普通住宅（清算）", "10113", "101130602"),
    new Array("101130603", "其他类型房地产（清算）", "10113", "101130603"),
    new Array("101130700", "旧房转让（非核定方式）", "10113", "101130700"),
    new Array("101130801", "普通住宅（尾盘）", "10113", "101130801"),
    new Array("101130802", "非普通住宅（尾盘）", "10113", "101130802"),
    new Array("101130803", "其他类型房地产（尾盘）", "10113", "101130803"),
    new Array("101130901", "普通住宅（核定）", "10113", "101130901"),
    new Array("101130902", "非普通住宅（核定）", "10113", "101130902"),
    new Array("101130903", "其他类型房地产（核定）", "10113", "101130903"),
    new Array("101131000", "整体转让在建工程", "10113", "101131000"),
    new Array("101131100", "旧房转让（核定方式）", "10113", "101131100"),
    new Array("101139901", "滞纳金", "10113", "101139901"),
    new Array("101139902", "罚款", "10113", "101139902"),
    new Array("101140101", "1.0升（含）以下的乘用车", "10114", "101140101"),
    new Array("101140102", "1.0升以上至1.6升(含)的乘用车", "10114", "101140102"),
    new Array("101140103", "1.6升以上至2.0升(含)的乘用车", "10114", "101140103"),
    new Array("101140104", "2.0升以上至2.5升(含)的乘用车", "10114", "101140104"),
    new Array("101140105", "2.5升以上至3.0升(含)的乘用车", "10114", "101140105"),
    new Array("101140106", "3.0升以上至4.0升(含)的乘用车", "10114", "101140106"),
    new Array("101140107", "4.0升以上的乘用车", "10114", "101140107"),
    new Array("101140211", "核定载客人数20人以下客车", "10114", "101140211"),
    new Array("101140212", "核定载客人数20人（含）以上客车", "10114", "101140212"),
    new Array("101140220", "货车", "10114", "101140220"),
    new Array("101140300", "挂车", "10114", "101140300"),
    new Array("101140400", "摩托车", "10114", "101140400"),
    new Array("101140501", "专用作业车", "10114", "101140501"),
    new Array("101140502", "轮式专用机械车", "10114", "101140502"),
    new Array("101140610", "机动船舶", "10114", "101140610"),
    new Array("101140611", "净吨位小于或者等于200吨的机动船舶", "10114", "101140611"),
    new Array("101140612", "净吨位201吨至2000吨的机动船舶", "10114", "101140612"),
    new Array("101140613", "净吨位2001吨至10000吨的机动船舶", "10114", "101140613"),
    new Array("101140614", "净吨位10001吨及以上的机动船舶", "10114", "101140614"),
    new Array("101140620", "拖船、非机动驳船", "10114", "101140620"),
    new Array("101140621", "净吨位不超过200吨的拖船、非机动驳船", "10114", "101140621"),
    new Array("101140622", "净吨位超过200吨但不超过2000吨的拖船、非机动驳船", "10114", "101140622"),
    new Array("101140623", "净吨位超过2000吨但不超过10000吨的拖船、非机动驳船", "10114", "101140623"),
    new Array("101140624", "净吨位超过10000吨的拖船、非机动驳船", "10114", "101140624"),
    new Array("101140630", "游艇", "10114", "101140630"),
    new Array("101140631", "艇身长度不超过10米的游艇", "10114", "101140631"),
    new Array("101140632", "艇身长度超过10米但不超过18米的游艇", "10114", "101140632"),
    new Array("101140633", "艇身长度超过18米但不超过30米的游艇", "10114", "101140633"),
    new Array("101140634", "艇身长度超过30米的游艇", "10114", "101140634"),
    new Array("101140635", "辅助动力帆艇", "10114", "101140635"),
    new Array("101149901", "滞纳金", "10114", "101149901"),
    new Array("101149902", "罚款", "10114", "101149902"),
    new Array("101180101", "耕地（基本农田）", "10118", "101180101"),
    new Array("101180102", "耕地（非基本农田）", "10118", "101180102"),
    new Array("101180200", "林地", "10118", "101180200"),
    new Array("101180300", "牧草地", "10118", "101180300"),
    new Array("101180400", "农田水利用地", "10118", "101180400"),
    new Array("101180600", "园地", "10118", "101180600"),
    new Array("101189800", "其他农业用地", "10118", "101189800"),
    new Array("101189901", "滞纳金", "10118", "101189901"),
    new Array("101189902", "罚款", "10118", "101189902"),
    new Array("101190102", "居住用地", "10119", "101190102"),
    new Array("101190103", "商业用地", "10119", "101190103"),
    new Array("101190104", "工业用地", "10119", "101190104"),
    new Array("101190105", "综合用地", "10119", "101190105"),
    new Array("101190190", "其他用地", "10119", "101190190"),
    new Array("101190211", "土地使用权出售（居住用地）", "10119", "101190211"),
    new Array("101190212", "土地使用权出售（商业用地）", "10119", "101190212"),
    new Array("101190213", "土地使用权出售（工业用地）", "10119", "101190213"),
    new Array("101190214", "土地使用权出售（综合用地）", "10119", "101190214"),
    new Array("101190219", "土地使用权出售（其他用地）", "10119", "101190219"),
    new Array("101190221", "土地使用权赠与（居住用地）", "10119", "101190221"),
    new Array("101190222", "土地使用权赠与（商业用地）", "10119", "101190222"),
    new Array("101190223", "土地使用权赠与（工业用地）", "10119", "101190223"),
    new Array("101190224", "土地使用权赠与（综合用地）", "10119", "101190224"),
    new Array("101190229", "土地使用权赠与（其他用地）", "10119", "101190229"),
    new Array("101190231", "土地使用权交换（居住用地）", "10119", "101190231"),
    new Array("101190232", "土地使用权交换（商业用地）", "10119", "101190232"),
    new Array("101190233", "土地使用权交换（工业用地）", "10119", "101190233"),
    new Array("101190234", "土地使用权交换（综合用地）", "10119", "101190234"),
    new Array("101190239", "土地使用权交换（其他用地）", "10119", "101190239"),
    new Array("101190241", "土地使用权作价投资、入股（居住用地）", "10119", "101190241"),
    new Array("101190242", "土地使用权作价投资、入股（商业用地）", "10119", "101190242"),
    new Array("101190243", "土地使用权作价投资、入股（工业用地）", "10119", "101190243"),
    new Array("101190244", "土地使用权作价投资、入股（综合用地）", "10119", "101190244"),
    new Array("101190249", "土地使用权作价投资、入股（其他用地）", "10119", "101190249"),
    new Array("101191111", "增量房（商品住房买卖）", "10119", "101191111"),
    new Array("101191112", "增量房（保障性住房买卖）", "10119", "101191112"),
    new Array("101191119", "增量房（其他住房买卖）", "10119", "101191119"),
    new Array("101191121", "增量房非住房买卖（商业）", "10119", "101191121"),
    new Array("101191122", "增量房非住房买卖（办公）", "10119", "101191122"),
    new Array("101191123", "增量房非住房买卖（商住）", "10119", "101191123"),
    new Array("101191124", "增量房非住房买卖（附属建筑）", "10119", "101191124"),
    new Array("101191125", "增量房非住房买卖（工业）", "10119", "101191125"),
    new Array("101191129", "增量房非住房买卖（其他）", "10119", "101191129"),
    new Array("101191211", "存量房（商品住房买卖）", "10119", "101191211"),
    new Array("101191212", "存量房（保障性住房买卖）", "10119", "101191212"),
    new Array("101191219", "存量房（其他住房买卖）", "10119", "101191219"),
    new Array("101191221", "存量房非住房买卖（商业）", "10119", "101191221"),
    new Array("101191222", "存量房非住房买卖（办公）", "10119", "101191222"),
    new Array("101191223", "存量房非住房买卖（商住）", "10119", "101191223"),
    new Array("101191224", "存量房非住房买卖（附属建筑）", "10119", "101191224"),
    new Array("101191225", "存量房非住房买卖（工业）", "10119", "101191225"),
    new Array("101191229", "存量房非住房买卖（其他）", "10119", "101191229"),
    new Array("101192111", "增量房（商品住房赠与）", "10119", "101192111"),
    new Array("101192112", "增量房（保障性住房赠与）", "10119", "101192112"),
    new Array("101192119", "增量房（其他住房赠与）", "10119", "101192119"),
    new Array("101192121", "增量房非住房赠与（商业）", "10119", "101192121"),
    new Array("101192122", "增量房非住房赠与（办公）", "10119", "101192122"),
    new Array("101192123", "增量房非住房赠与（商住）", "10119", "101192123"),
    new Array("101192124", "增量房非住房赠与（附属建筑）", "10119", "101192124"),
    new Array("101192125", "增量房非住房赠与（工业）", "10119", "101192125"),
    new Array("101192129", "增量房非住房赠与（其他）", "10119", "101192129"),
    new Array("101192211", "存量房（商品住房赠与）", "10119", "101192211"),
    new Array("101192212", "存量房（保障性住房赠与）", "10119", "101192212"),
    new Array("101192219", "存量房（其他住房赠与）", "10119", "101192219"),
    new Array("101192221", "存量房非住房赠与（商业）", "10119", "101192221"),
    new Array("101192222", "存量房非住房赠与（办公）", "10119", "101192222"),
    new Array("101192223", "存量房非住房赠与（商住）", "10119", "101192223"),
    new Array("101192224", "存量房非住房赠与（附属建筑）", "10119", "101192224"),
    new Array("101192225", "存量房非住房赠与（工业）", "10119", "101192225"),
    new Array("101192229", "存量房非住房赠与（其他）", "10119", "101192229"),
    new Array("101193000", "房屋交换", "10119", "101193000"),
    new Array("101194100", "住房作价入股", "10119", "101194100"),
    new Array("101194201", "非住房作价入股（商业）", "10119", "101194201"),
    new Array("101194202", "非住房作价入股（办公）", "10119", "101194202"),
    new Array("101194203", "非住房作价入股（商住）", "10119", "101194203"),
    new Array("101194204", "非住房作价入股（附属建筑）", "10119", "101194204"),
    new Array("101194205", "非住房作价入股（工业）", "10119", "101194205"),
    new Array("101194290", "非住房作价入股（其他）", "10119", "101194290"),
    new Array("101195000", "房屋其他权属转移方式", "10119", "101195000"),
    new Array("101199901", "滞纳金", "10119", "101199901"),
    new Array("101199902", "罚款", "10119", "101199902"),
    new Array("101200100", "晾晒烟叶", "10120", "101200100"),
    new Array("101200200", "烤烟叶", "10120", "101200200"),
    new Array("101209901", "滞纳金", "10120", "101209901"),
    new Array("101209902", "罚款", "10120", "101209902"),
    new Array("101999901", "滞纳金", "10199", "101999901"),
    new Array("101999902", "罚款", "10199", "101999902"),
    new Array("102019901", "养老保险职业年金", "10201", "102019901"),
    new Array("102019971", "其他养老保险", "10201", "102019971"),
    new Array("102019973", "其他养老保险利息", "10201", "102019973"),
    new Array("102019975", "其他养老保险滞纳金", "10201", "102019975"),
    new Array("102019977", "其他养老保险罚款", "10201", "102019977"),
    new Array("102029971", "其他失业保险", "10202", "102029971"),
    new Array("102029973", "其他失业保险利息", "10202", "102029973"),
    new Array("102029975", "其他失业保险滞纳金", "10202", "102029975"),
    new Array("102029977", "其他失业保险罚款", "10202", "102029977"),
    new Array("102039901", "公务员医疗补助", "10203", "102039901"),
    new Array("102039903", "公务员医疗补助利息", "10203", "102039903"),
    new Array("102039904", "其他医疗保险滞纳金", "10203", "102039904"),
    new Array("102039905", "公务员医疗补助滞纳金", "10203", "102039905"),
    new Array("102039907", "公务员医疗补助罚款", "10203", "102039907"),
    new Array("102039971", "其他医疗保险", "10203", "102039971"),
    new Array("102039973", "其他医疗保险利息", "10203", "102039973"),
    new Array("102039977", "其他医疗保险罚款", "10203", "102039977"),
    new Array("102040101", "工伤保险", "10204", "102040101"),
    new Array("102040102", "工伤保险利息", "10204", "102040102"),
    new Array("102040103", "工伤保险滞纳金", "10204", "102040103"),
    new Array("102040104", "工伤保险罚款", "10204", "102040104"),
    new Array("102050101", "生育保险", "10205", "102050101"),
    new Array("102050102", "生育保险利息", "10205", "102050102"),
    new Array("102050103", "生育保险滞纳金", "10205", "102050103"),
    new Array("102050104", "生育保险罚款", "10205", "102050104"),
    new Array("301998102", "价格调节基金（营业税附征）", "30199", "301998102"),
    new Array("302030100", "增值税教育费附加", "30203", "302030100"),
    new Array("302030200", "营业税教育费附加", "30203", "302030200"),
    new Array("302030300", "消费税教育费附加", "30203", "302030300"),
    new Array("302039901", "滞纳金", "30203", "302039901"),
    new Array("302039902", "罚款", "30203", "302039902"),
    new Array("302160100", "增值税地方教育附加", "30216", "302160100"),
    new Array("302160200", "营业税地方教育附加", "30216", "302160200"),
    new Array("302160300", "消费税地方教育附加", "30216", "302160300"),
    new Array("302169901", "滞纳金", "30216", "302169901"),
    new Array("302169902", "罚款", "30216", "302169902"),
    new Array("302170100", "娱乐业文化事业建设费", "30217", "302170100"),
    new Array("302170200", "广告业文化事业建设费", "30217", "302170200"),
    new Array("302179901", "滞纳金", "30217", "302179901"),
    new Array("302179902", "罚款", "30217", "302179902"),
    new Array("302180100", "残疾人就业保障金", "30218", "302180100"),
    new Array("302189800", "残疾人就业保障金滞纳金", "30218", "302189800"),
    new Array("304080200", "普通发票工本费收入", "30408", "304080200"),
    new Array("304080300", "税务登记证工本费收入", "30408", "304080300"),
    new Array("305010100", "罚款", "30501", "305010100"),
    new Array("305010200", "加处罚款", "30501", "305010200"),
    new Array("305010300", "没收违法所得", "30501", "305010300"),
    new Array("305010400", "没收非法财物的拍卖款", "30501", "305010400"),
    new Array("399001010", "工会经费", "39900", "399001010"),
    new Array("399001020", "工会筹备金", "39900", "399001020")
    ); 
</script>
  <option value="101110101" selected>购销合同</option>
  <option value="101110102" >加工承揽合同</option>
  <option value="101110103" >建设工程勘察设计合同</option>
  <option value="101110104" >建筑安装工程承包合同</option>
  <option value="101110105" >财产租赁合同</option>
  <option value="101110106" >货物运输合同(按运输费用万分之五贴花)</option>
  <option value="101110107" >仓储保管合同</option>
  <option value="101110108" >借款合同</option>
  <option value="101110109" >财产保险合同</option>
  <option value="101110110" >技术合同</option>
  <option value="101110200" >产权转移书据</option>
  <option value="101110400" >权利、许可证照</option>
  <option value="101110501" >资金账簿</option>
  <option value="101110599" >其他营业账簿</option>
  <option value="101119800" >其他凭证</option>

</select>


 
            </label></td>
			<td>&nbsp;</td>
		  </tr>
		  
    	</table>
			<div align="center">
      		<input   type="button" onClick="txsbb()" value="下一步">
		      <input   type="button" onClick="location.href='/jsdzsb/yhssb/lb.do'" value="取消添加">
			</div>
		</td>
	</table></td>
  </tr>
</table>

</form>
</div>

 
<div id="yhstxsbb">
<form action="/jsdzsb/yhssb/lb.do"  method="post"  id="myForm3">
<input type="hidden" name="errAction" value="/jsdzsb/yhssb/txsbb.do" />
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td class="gray_bg_color"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:8px; margin-top:8px;">
      <tr>
        <td align="left" class="liucheng_01"> </td>
        <td align="left"><table width="650" border="0" align="left" cellpadding="0" cellspacing="0">
          <tr>
        <td align="center" class="liucheng_02 h1_14w ">初始化</td>
        <td align="center"><img src="/res/jsdzsb/bsdt/images/over_arrow.png" width="9" height="16" /></td>
        <td align="center" class="liucheng_02 h1_14w">填写申报表</td>
        <td align="center"><img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="9" height="16" /></td>
        <td align="center" class="liucheng_03 h1_14b">确认申报</td>
        <td align="center"><img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="9" height="16" /></td>
        <td align="center" class="liucheng_03 h1_14b">查看回执</td>
          </tr>
        </table></td>
        </tr>
    </table></td>
  </tr>
  <tr>
    <td class="gray3_bg_color"> </td>
  </tr>
  <tr>
	<td><table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:30px;">
      <tr>
        <td align="left" class="STYLE2">
          <strong>请填写申报记录：</strong></td>
      </tr>
      <td><table width="100%" border="0" class="border h12_b" style="margin-top:10px;">
		  <tr>
			<td width="234" class="hintText"><div align="right"><span class="STYLE1 STYLE4">*</span>税款所属期起：</div></td>
			<td width="16">&nbsp;</td>
			<td width="375">2018-10-01
			 <input type="hidden" name="sbbVo['skssqq']" value="2018-10-01"/>
			 <input  type="hidden" name="sbbVo['tbrq']" value="2018-10-10"/>
			 <input  type="hidden" name="xh" value=""/>
			</td>
			<td width="355">&nbsp;</td>
		  </tr>
		  <tr>
			<td class="hintText"><div align="right"><span class="STYLE1 STYLE4">*</span>税款所属期止：</div></td>
			<td>&nbsp;</td>
			<td>2018-10-31
			 <input type="hidden" name="sbbVo['skssqz']" value="2018-10-31"/>
			</td>
			<td>&nbsp;</td>
		  </tr>
	  </table></td>
	  <tr></tr>
	  <td><table width="100%" border="0" class="border h12_b" style="margin-top:10px;">
		  <tr>
			<td width="24%"><div align="right" class="hintText">
			  <div align="right"><span class="STYLE1 STYLE4">*</span>征收项目：</div>
			</div></td>
			<td width="2%">&nbsp;</td>
			<td width="38%">印花税
              <input type="hidden" name="sbbVo['zsxmdm']" value="10111"/>
			 
			</td>
			<td width="36%"><label></label></td>
		  </tr>
		  <tr>
			<td class="hintText"><div align="right"><span class="STYLE1 STYLE4">*</span>应征凭证名称：</div></td>
			<td>&nbsp;</td>
			<td>
                                     印花税-












 


其他营业账簿
              <input type="hidden" name="sbbVo['zspmdm']" id="zspmdm" value="101110599"/>
           </td>
			<td><label></label></td>
		  </tr>
		  
	  </table></td>
	  <tr></tr>
	  <td><table width="100%" border="0" class="border h12_b" style="margin-top:10px;">
		<tr><td width="24%"><div align="right" class="hintText">
			  <div align="right">计税金额或件数：</div>
			</div></td>
			<td width="2%">&nbsp;</td>
			<td width="38%"><label>
			  <input name="sbbVo['jsje']" type="text" value="3,331" onblur="return jsjeChange();">
			</label></td>
			<td width="36%">&nbsp;</td>
		  </tr>
		  <tr>
			<td><div id="lbl_yye" align="right">核定依据：</div></td>
			<td>&nbsp;</td>
			<td><label>
			   <input name="sbbVo['hdzshdde']" type="text" value="" onblur="jsjeChange()" >
			</label></td>
			<td ><span class="STYLE3">采用核定征收的请填录此项&nbsp;</span></td>
		  </tr>
		  <tr>
			<td><div id="lbl_hdbl" align="right">核定比例：</div></td>
			<td>&nbsp;</td>
			<td>
			 
			  <input name="sbbVo['hdzshdbl']" type="text" value="">
			
			  
			 
			</td>
			<td><span class="STYLE3">示例：核定比例65%，填写为0.65</span></td>
		  </tr>
		  
		  <tr>
			<td><div align="right">
			  <p align="right"><span class="STYLE1 STYLE4">*</span>适用税率：</p>
			  </div></td>
			<td>&nbsp;</td>
			<td>5
        <input name="sbbVo['sysl']" type="hidden" value="5">
         </td>
			<td>&nbsp;</td>
		  </tr>
		   <tr>
			<td><div align="right"><span class="hintText"><span class="STYLE1 STYLE4">*</span>本期应纳税额</span>：</div></td>
			
			<td>&nbsp;</td>
			<td><input name="sbbVo['bqynse']" type="text" value="16,655" onchange="return ynseChange();" readonly="readonly" >
           </td>
			<td><span class="STYLE3"><!--=计税金额或件数×适用税率+核定依据×核定比例×适用税率  --></span></td>
		  </tr>
		   
	  </table></td>
	  <tr></tr>
	  <td><table width="100%" border="0" class="border h12_b" style="margin-top:10px;">
		  <tr>
			<td width="24%"><div align="right">本期减免税额：</div></td>
			<td width="2%">&nbsp;</td>
			<td width="38%"> <input name="sbbVo['jmse']" type="text" value="0"  onchange="jmeChange()"> </td>
			<td width="36%">&nbsp;</td>
		  </tr>
		  <tr>
			<td><div align="right">减免性质：</div></td>
			<td>&nbsp;</td>
			<td colspan="2"> 
			  




















<select id="ssjmxzdm" name="sbbVo['ssjmxzdm']" 
	onchange="changeSsjmxzDm()"
	
	style="overflow:hidden;width: 550px;" 
	
>
	
		<option value="" >--请选择--</option>
			
	    		
		<option value="0001010503" >0001010503|鲜活肉蛋产品免征增值税优惠|《财政部 国家税务总局关于免征部分鲜活肉蛋产品流通环节增值税政策的通知》 财税〔2012〕75号</option>
	    		
		<option value="0001010504" >0001010504|蔬菜免征增值税优惠|《财政部 国家税务总局关于免征蔬菜流通环节增值税有关问题的通知》 财税〔2011〕137号</option>
	    		
		<option value="0001011602" >0001011602|抗震救灾和灾后恢复重建增值税优惠|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号第四、五条</option>
	    		
		<option value="0001011603" >0001011603|抗震救灾和灾后恢复重建增值税优惠|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第四、五条</option>
	    		
		<option value="0001011604" >0001011604|抗震救灾和灾后恢复重建增值税优惠|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第四、五条</option>
	    		
		<option value="0001011605" >0001011605|抗震救灾和灾后恢复重建增值税优惠|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第四条第1项、第五条第1、2项</option>
	    		
		<option value="0001011606" >0001011606|救灾救济粮免征增值税优惠|《财政部 国家税务总局关于粮食企业增值税征免问题的通知》 财税字〔1999〕198号第二条第（二）项</option>
	    		
		<option value="0001011701" >0001011701|个人销售自建自用住房免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十五）款</option>
	    		
		<option value="0001011702" >0001011702|为了配合国家住房制度改革，企业、行政事业单位按房改成本价、标准价出售住房取得的收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十四）款</option>
	    		
		<option value="0001011703" >0001011703|个人将购买2年以上（含2年）的住房对外销售免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第五条</option>
	    		
		<option value="0001011704" >0001011704|公共租赁住房经营管理单位出租公共租赁住房免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十六）款</option>
	    		
		<option value="0001011705" >0001011705|个人出租住房应按照5%的征收率减按1.5%计算应纳增值税|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件2第一条第（九）款第6项</option>
	    		
		<option value="0001011801" >0001011801|失业人员就业免征增值税优惠|《财政部 国家税务总局关于在全国开展交通运输业和部分现代服务业营业税改征增值税试点税收政策的通知》 财税〔2013〕37号过渡政策规定第一条第（十二）、（十三）项</option>
	    		
		<option value="0001011802" >0001011802|随军家属就业免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十）款</option>
	    		
		<option value="0001011803" >0001011803|军转干部就业免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十一）款</option>
	    		
		<option value="0001011804" >0001011804|城镇退役士兵就业免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十二）款</option>
	    		
		<option value="0001011805" >0001011805|退役士兵从事个体经营扣减地方教育附加优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（一）款第1项</option>
	    		
		<option value="0001011805" >0001011805|退役士兵从事个体经营扣减城市维护建设税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（一）款第1项</option>
	    		
		<option value="0001011805" >0001011805|退役士兵从事个体经营扣减增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（一）款第1项</option>
	    		
		<option value="0001011805" >0001011805|退役士兵从事个体经营扣减教育费附加优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（一）款第1项</option>
	    		
		<option value="0001011806" >0001011806|随军家属从事个体经营免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十九）款第2项</option>
	    		
		<option value="0001011807" >0001011807|军转干部从事个体经营免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（四十）款第1项</option>
	    		
		<option value="0001011808" >0001011808|企业招用退役士兵扣减地方教育附加优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（一）款第2项</option>
	    		
		<option value="0001011808" >0001011808|企业招用退役士兵扣减城市维护建设税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（一）款第2项</option>
	    		
		<option value="0001011808" >0001011808|企业招用退役士兵扣减增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（一）款第2项</option>
	    		
		<option value="0001011808" >0001011808|企业招用退役士兵扣减教育费附加优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（一）款第2项</option>
	    		
		<option value="0001011809" >0001011809|企业安置随军家属免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十九）款第1项</option>
	    		
		<option value="0001011810" >0001011810|企业安置军转干部免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（四十）款第2项</option>
	    		
		<option value="0001011811" >0001011811|退役士兵从事个体经营扣减地方教育附加优惠|《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第一条</option>
	    		
		<option value="0001011811" >0001011811|退役士兵从事个体经营扣减城市维护建设税优惠|《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第一条</option>
	    		
		<option value="0001011811" >0001011811|退役士兵从事个体经营扣减增值税优惠|《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第一条</option>
	    		
		<option value="0001011811" >0001011811|退役士兵从事个体经营扣减教育费附加优惠|《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第一条</option>
	    		
		<option value="0001011812" >0001011812|企业招用退役士兵扣减地方教育附加优惠|《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第二条</option>
	    		
		<option value="0001011812" >0001011812|企业招用退役士兵扣减城市维护建设税优惠|《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第二条</option>
	    		
		<option value="0001011812" >0001011812|企业招用退役士兵扣减增值税优惠|《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第二条</option>
	    		
		<option value="0001011812" >0001011812|企业招用退役士兵扣减教育费附加优惠|《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第二条</option>
	    		
		<option value="0001012701" >0001012701|安置残疾人就业增值税即征即退|《财政部 国家税务总局关于促进残疾人就业税收优惠政策的通知》 财税〔2007〕92号第一、三条</option>
	    		
		<option value="0001012705" >0001012705|安置残疾人就业增值税即征即退|《财政部 国家税务总局关于在全国开展交通运输业和部分现代服务业营业税改征增值税试点税收政策的通知》 财税〔2013〕37号过渡政策规定第一条第（二）项、第二条第（二）项</option>
	    		
		<option value="0001012706" >0001012706|安置残疾人就业增值税即征即退|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第二条第（二）款</option>
	    		
		<option value="0001012707" >0001012707|残疾人专用物品免征增值税优惠|《中华人民共和国增值税暂行条例》 中华人民共和国国务院令第538号第十五条第（六）项</option>
	    		
		<option value="0001012708" >0001012708|托儿所、幼儿园提供的保育和教育服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（一）款</option>
	    		
		<option value="0001012709" >0001012709|养老机构提供的养老服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二）款</option>
	    		
		<option value="0001012710" >0001012710|残疾人福利机构提供的育养服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三）款</option>
	    		
		<option value="0001012711" >0001012711|婚姻介绍服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（四）款</option>
	    		
		<option value="0001012712" >0001012712|殡葬服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（五）款</option>
	    		
		<option value="0001012713" >0001012713|住房公积金管理中心用住房公积金在指定的委托银行发放的个人住房贷款取得的利息收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第5项</option>
	    		
		<option value="0001012714" >0001012714|家政服务企业由员工制家政服务员提供家政服务取得的收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十一）款</option>
	    		
		<option value="0001012715" >0001012715|残疾人员本人为社会提供的服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（六）款</option>
	    		
		<option value="0001012716" >0001012716|安置残疾人就业增值税即征即退|《财政部 国家税务总局关于促进残疾人就业增值税政策的通知》 财税〔2016〕52号第一、三条</option>
	    		
		<option value="0001012717" >0001012717|残疾人个人提供劳务免征增值税优惠|《财政部 国家税务总局关于促进残疾人就业增值税政策的通知》 财税〔2016〕52号第八条</option>
	    		
		<option value="0001013601" >0001013601|失业人员就业免征增值税优惠|《财政部 国家税务总局关于在全国开展交通运输业和部分现代服务业营业税改征增值税试点税收政策的通知》 财税〔2013〕37号过渡政策规定第一条第（十一）、（十四）项</option>
	    		
		<option value="0001013602" >0001013602|失业人员从事个体经营增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十三）款第1项</option>
	    		
		<option value="0001013603" >0001013603|高校毕业生从事个体经营增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十三）款第1项</option>
	    		
		<option value="0001013604" >0001013604|失业人员再就业增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十三）款第2项</option>
	    		
		<option value="0001013605" >0001013605|重点群体从事个体经营扣减地方教育附加优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第1项</option>
	    		
		<option value="0001013605" >0001013605|重点群体从事个体经营扣减城市维护建设税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第1项</option>
	    		
		<option value="0001013605" >0001013605|重点群体从事个体经营扣减增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第1项</option>
	    		
		<option value="0001013605" >0001013605|重点群体从事个体经营扣减教育费附加优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第1项</option>
	    		
		<option value="0001013605" >0001013605|除高校毕业生以外的失业人员从事个体经营，扣减教育费附加|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第1项</option>
	    		
		<option value="0001013605" >0001013605|高校毕业生从事个体经营，扣减教育费附加|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第1项</option>
	    		
		<option value="0001013607" >0001013607|招录重点群体就业扣减地方教育附加优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第2项</option>
	    		
		<option value="0001013607" >0001013607|招录重点群体就业扣减城市维护建设税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第2项</option>
	    		
		<option value="0001013607" >0001013607|招录重点群体就业扣减增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第2项</option>
	    		
		<option value="0001013607" >0001013607|招录重点群体就业扣减教育费附加优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第三条第（二）款第2项</option>
	    		
		<option value="0001013608" >0001013608|重点群体从事个体经营扣减地方教育附加优惠|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0001013608" >0001013608|重点群体从事个体经营扣减城市维护建设税优惠|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0001013608" >0001013608|重点群体从事个体经营扣减增值税优惠|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0001013608" >0001013608|重点群体从事个体经营扣减教育费附加优惠|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0001013608" >0001013608|除高校毕业生以外的失业人员从事个体经营，扣减教育费附加|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0001013608" >0001013608|高校毕业生从事个体经营，扣减教育费附加|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0001013608" >0001013608|高校毕业生从事个体经营，扣减教育费附加|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0001013609" >0001013609|招录重点群体就业扣减地方教育附加优惠|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第二条</option>
	    		
		<option value="0001013609" >0001013609|招录重点群体就业扣减城市维护建设税优惠|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第二条</option>
	    		
		<option value="0001013609" >0001013609|招录重点群体就业扣减增值税优惠|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第二条</option>
	    		
		<option value="0001013609" >0001013609|招录重点群体就业扣减教育费附加优惠|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第二条</option>
	    		
		<option value="0001019901" >0001019901|边销茶免征增值税优惠|《财政部 国家税务总局关于继续执行边销茶增值税政策的通知》 财税〔2011〕89号第一条</option>
	    		
		<option value="0001019902" >0001019902|粮食免征增值税优惠|《财政部 国家税务总局关于粮食企业增值税征免问题的通知》 财税字〔1999〕198号第一、五条</option>
	    		
		<option value="0001019904" >0001019904|世界银行贷款粮食流通项目免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十五）款</option>
	    		
		<option value="0001019905" >0001019905|储备大豆免征增值税优惠|《财政部 国家税务总局关于免征储备大豆增值税政策的通知》 财税〔2014〕38号</option>
	    		
		<option value="0001019906" >0001019906|政府储备食用植物油免征增值税优惠|《财政部 国家税务总局关于粮食企业增值税征免问题的通知》 财税字〔1999〕198号第五条</option>
	    		
		<option value="0001019907" >0001019907|福利彩票、体育彩票的发行收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十二）款</option>
	    		
		<option value="0001019908" >0001019908|涉及家庭财产分割的个人无偿转让不动产、土地使用权免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十六）款</option>
	    		
		<option value="0001019909" >0001019909|边销茶免征增值税优惠|《财政部 国家税务总局关于延长边销茶增值税政策执行期限的通知》 财税〔2016〕73号</option>
	    		
		<option value="0001021201" >0001021201|技术转让、技术开发免征增值税优惠|《财政部 国家税务总局关于在全国开展交通运输业和部分现代服务业营业税改征增值税试点税收政策的通知》 财税〔2013〕37号过渡政策规定第一条第（四）项</option>
	    		
		<option value="0001021202" >0001021202|技术转让、技术开发免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（四）款</option>
	    		
		<option value="0001021203" >0001021203|技术转让、技术开发免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十六）款</option>
	    		
		<option value="0001021902" >0001021902|光伏发电增值税即征即退|《财政部 国家税务总局关于光伏发电增值税政策的通知》 财税〔2013〕66号</option>
	    		
		<option value="0001021903" >0001021903|光伏发电增值税即征即退|《财政部 国家税务总局关于继续执行光伏发电增值税政策的通知》 财税〔2016〕81号</option>
	    		
		<option value="0001021904" >0001021904|国家大学科技园收入免征增值税|《财政部 国家税务总局关于国家大学科技园税收政策的通知》 财税〔2016〕98号第一条</option>
	    		
		<option value="0001021905" >0001021905|科技企业孵化器收入免征增值税|《财政部 国家税务总局关于科技企业孵化器税收政策的通知》 财税〔2016〕89号第一条</option>
	    		
		<option value="0001023001" >0001023001|离岸服务外包业务免征增值税优惠|《财政部 国家税务总局关于在全国开展交通运输业和部分现代服务业营业税改征增值税试点税收政策的通知》 财税〔2013〕37号过渡政策规定第一条第（六）项</option>
	    		
		<option value="0001023002" >0001023002|离岸服务外包业务免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（六）款</option>
	    		
		<option value="0001024103" >0001024103|软件产品增值税即征即退|《财政部 国家税务总局关于软件产品增值税政策的通知》 财税〔2011〕100号</option>
	    		
		<option value="0001030301" >0001030301|部分保税港区提供特定增值税劳务即征即退|《财政部 国家税务总局关于在全国开展交通运输业和部分现代服务业营业税改征增值税试点税收政策的通知》 财税〔2013〕37号过渡政策规定第二条第（一）项</option>
	    		
		<option value="0001030302" >0001030302|部分保税港区提供特定增值税劳务即征即退|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第二条第（一）款</option>
	    		
		<option value="0001032101" >0001032101|台湾航运公司、航空公司从事海峡两岸海上直航、空中直航业务在大陆取得的运输收入免征增值税优惠|《财政部 国家税务总局关于在全国开展交通运输业和部分现代服务业营业税改征增值税试点税收政策的通知》 财税〔2013〕37号过渡政策规定第一条第（七）、（八）项</option>
	    		
		<option value="0001032102" >0001032102|台湾航运公司、航空公司从事海峡两岸海上直航、空中直航业务在大陆取得的运输收入免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（七）、（八）款</option>
	    		
		<option value="0001032102" >0001032102|台湾航运公司从事海峡两岸海上直航、空中直航业务免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（七）、（八）款</option>
	    		
		<option value="0001032103" >0001032103|台湾航运公司、航空公司从事海峡两岸海上直航、空中直航业务在大陆取得的运输收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十七）款</option>
	    		
		<option value="0001033301" >0001033301|青藏铁路提供铁路运输服务免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十八）款</option>
	    		
		<option value="0001033302" >0001033302|从事与新疆国际大巴扎项目有关的营业税应税业务免征增值税|《财政部 国家税务总局关于部分营业税和增值税政策到期延续问题的通知》 财税〔2016〕83号第四条</option>
	    		
		<option value="0001033303" >0001033303|从事与新疆国际大巴扎项目有关的营改增应税业务免征增值税|《财政部 国家税务总局关于继续执行新疆国际大巴扎项目增值税政策的通知》 财税〔2017〕36号</option>
	    		
		<option value="0001039901" >0001039901|横琴、平潭企业销售货物免征增值税优惠|《财政部 海关总署 国家税务总局关于横琴 平潭开发有关增值税和消费税政策的通知》 财税〔2014〕51号第二条</option>
	    		
		<option value="0001041501" >0001041501|符合条件的担保机构从事中小企业信用担保或者再担保业务取得的收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十四）款</option>
	    		
		<option value="0001041502" >0001041502|小微企业等小额贷款利息免征增值税优惠|《财政部 税务总局关于支持小微企业融资有关税收政策的通知》 财税〔2017〕77号第一条</option>
	    		
		<option value="0001041503" >0001041503|小微企业等融资担保、再担保免征增值税优惠|《财政部 税务总局关于租入固定资产进项税额抵扣等增值税政策的通知》 财税〔2017〕90号第六条</option>
	    		
		<option value="0001041504" >0001041504|小微企业、个体工商户小额贷款利息免征增值税优惠|《财政部 税务总局关于金融机构小微企业贷款利息收入免征增值税政策的通知》 财税〔2018〕91号第一条</option>
	    		
		<option value="0001045301" >0001045301|小微企业免征增值税优惠（货物及劳务）|《财政部 国家税务总局关于暂免征收部分小微企业增值税和营业税的通知》 财税〔2013〕52号</option>
	    		
		<option value="0001045303" >0001045303|小微企业免征增值税优惠（货物及劳务）|《财政部 国家税务总局关于继续执行小微企业增值税和营业税政策的通知》 财税〔2015〕96号</option>
	    		
		<option value="0001045304" >0001045304|小微企业免征增值税优惠（服务、不动产和无形资产）|《财政部 国家税务总局关于继续执行小微企业增值税和营业税政策的通知》 财税〔2015〕96号</option>
	    		
		<option value="0001045305" >0001045305|小微企业免征增值税优惠（服务、不动产和无形资产）|《财政部 国家税务总局关于暂免征收部分小微企业增值税和营业税的通知》 财税〔2013〕52号</option>
	    		
		<option value="0001045306" >0001045306|小微企业免征增值税优惠（货物及劳务）|《财政部 税务总局关于延续小微企业增值税政策的通知》 财税〔2017〕76号</option>
	    		
		<option value="0001045307" >0001045307|小微企业免征增值税优惠（服务和无形资产）|《财政部 税务总局关于延续小微企业增值税政策的通知》 财税〔2017〕76号</option>
	    		
		<option value="0001052401" >0001052401|债转股企业免征增值税|《财政部 国家税务总局关于债转股企业有关税收政策的通知》 财税〔2005〕29号</option>
	    		
		<option value="0001052402" >0001052402|资产重组免征增值税优惠|《财政部 国家税务总局关于中国邮政集团公司邮政速递物流业务重组改制有关税收问题的通知》 财税〔2011〕116号第一条</option>
	    		
		<option value="0001052403" >0001052403|资产重组免征增值税优惠|《财政部 国家税务总局关于中国邮政储蓄银行改制上市有关税收政策的通知》 财税〔2013〕53号第三条</option>
	    		
		<option value="0001059901" >0001059901|资产重组免征增值税优惠|《财政部 国家税务总局关于中国联合网络通信集团有限公司转让CDMA网及其用户资产企业合并资产整合过程中涉及的增值税营业税印花税和土地增值税政策问题的通知》 财税〔2011〕13号第一、二条</option>
	    		
		<option value="0001061002" >0001061002|合同能源管理项目免征增值税优惠|《财政部 国家税务总局关于在全国开展交通运输业和部分现代服务业营业税改征增值税试点税收政策的通知》 财税〔2013〕37号过渡政策规定第一条第（五）项</option>
	    		
		<option value="0001064001" >0001064001|合同能源管理项目免征增值税优惠|《财政部 国家税务总局关于促进节能服务产业发展增值税营业税和企业所得税政策问题的通知》 财税〔2010〕110号第一条第（二）项</option>
	    		
		<option value="0001064002" >0001064002|资源综合利用产品及劳务免征增值税优惠|《财政部 国家税务总局关于调整完善资源综合利用产品及劳务增值税政策的通知》 财税〔2011〕115号第一、二条</option>
	    		
		<option value="0001064003" >0001064003|核电企业免征增值税优惠|《财政部 国家税务总局关于核电行业税收政策有关问题的通知》 财税〔2008〕38号</option>
	    		
		<option value="0001064004" >0001064004|供热企业免征增值税优惠|《财政部 国家税务总局关于继续执行供热企业增值税 房产税 城镇土地使用税优惠政策的通知》 财税〔2009〕11号第一条</option>
	    		
		<option value="0001064005" >0001064005|供热企业免征增值税优惠|《财政部 国家税务总局关于继续执行供热企业增值税 房产税 城镇土地使用税优惠政策的通知》 财税〔2011〕118号第一条</option>
	    		
		<option value="0001064007" >0001064007|污水处理费免征增值税优惠|《财政部 国家税务总局关于污水处理费有关增值税政策的通知》 财税〔2001〕97号</option>
	    		
		<option value="0001064009" >0001064009|资源综合利用产品及劳务免征增值税优惠|《财政部 国家税务总局关于资源综合利用及其他产品增值税政策的补充的通知》 财税〔2009〕163号</option>
	    		
		<option value="0001064010" >0001064010|资源综合利用产品及劳务免征增值税优惠|《财政部 国家税务总局关于资源综合利用及其他产品增值税政策的通知》 财税〔2008〕156号第一、二条</option>
	    		
		<option value="0001064015" >0001064015|资源综合利用产品及劳务增值税即征即退|《财政部 国家税务总局关于资源综合利用及其他产品增值税政策的通知》 财税〔2008〕156号第三、四、五条</option>
	    		
		<option value="0001064016" >0001064016|资源综合利用产品及劳务增值税即征即退|《财政部 国家税务总局关于调整完善资源综合利用产品及劳务增值税政策的通知》 财税〔2011〕115号第三、四、五条</option>
	    		
		<option value="0001064017" >0001064017|新型墙体材料增值税即征即退|《财政部 国家税务总局关于新型墙体材料增值税政策的通知》 财税〔2015〕73号</option>
	    		
		<option value="0001064018" >0001064018|风力发电增值税即征即退|《财政部 国家税务总局关于风力发电增值税政策的通知》 财税〔2015〕74号</option>
	    		
		<option value="0001064019" >0001064019|资源综合利用产品及劳务增值税即征即退|《财政部 国家税务总局关于印发<资源综合利用产品和劳务增值税优惠目录>的通知》 财税〔2015〕78号</option>
	    		
		<option value="0001064020" >0001064020|供热企业免征增值税优惠|《财政部 国家税务总局关于供热企业增值税 房产税 城镇土地使用税优惠政策的通知》 财税〔2016〕94号第一条</option>
	    		
		<option value="0001064201" >0001064201|水力发电增值税即征即退|《财政部 国家税务总局关于葛洲坝电站电力产品增值税政策问题的通知》 财税〔2002〕168号</option>
	    		
		<option value="0001064202" >0001064202|水力发电增值税即征即退|《财政部 国家税务总局关于三峡电站电力产品增值税税收政策问题的通知》 财税〔2002〕24号</option>
	    		
		<option value="0001064203" >0001064203|水力发电增值税即征即退|《国家税务总局关于黄河上游水电开发有限责任公司电力产品增值税税收政策问题的通知》 国税发〔2004〕52号</option>
	    		
		<option value="0001064204" >0001064204|水力发电增值税即征即退|《财政部 国家税务总局关于大型水电企业增值税政策的通知》 财税〔2014〕10号</option>
	    		
		<option value="0001069901" >0001069901|合同能源管理项目免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（五）款</option>
	    		
		<option value="0001069902" >0001069902|合同能源管理项目免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十七）款</option>
	    		
		<option value="0001081501" >0001081501|被撤销金融机构转让财产免征增值税优惠|《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第4款</option>
	    		
		<option value="0001081502" >0001081502|黄金期货交易免征增值税优惠|《财政部 国家税务总局关于黄金期货交易有关税收政策的通知》 财税〔2008〕5号</option>
	    		
		<option value="0001081503" >0001081503|上海期货保税交割免征增值税优惠|《财政部 国家税务总局关于上海期货交易所开展期货保税交割业务有关增值税问题的通知》 财税〔2010〕108号</option>
	    		
		<option value="0001081505" >0001081505|钻石交易免征增值税优惠|《财政部 海关总署 国家税务总局关于调整钻石及上海钻石交易所有关税收政策的通知》 财税〔2006〕65号</option>
	    		
		<option value="0001081506" >0001081506|原油和铁矿石期货保税交割业务增值税政策|《财政部 国家税务总局关于原油和铁矿石期货保税交割业务增值税政策的通知》 财税〔2015〕35号</option>
	    		
		<option value="0001081507" >0001081507|国债、地方政府债利息收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第3项</option>
	    		
		<option value="0001081508" >0001081508|外汇管理部门在从事国家外汇储备经营过程中,委托金融机构发放的外汇贷款取得的利息收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第6项</option>
	    		
		<option value="0001081509" >0001081509|统借统还业务取得的利息收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第7项</option>
	    		
		<option value="0001081510" >0001081510|被撤销金融机构以货物、不动产、无形资产、有价证券、票据等财产清偿债务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十）款</option>
	    		
		<option value="0001081511" >0001081511|香港市场投资者（包括单位和个人）通过沪港通买卖上海证券交易所上市A股取得的收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第2项</option>
	    		
		<option value="0001081512" >0001081512|香港市场投资者（包括单位和个人）通过基金互认买卖内地基金份额取得的收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第3项</option>
	    		
		<option value="0001081513" >0001081513|证券投资基金（封闭式证券投资基金，开放式证券投资基金）管理人运用基金买卖股票、债券取得的收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第4项</option>
	    		
		<option value="0001081515" >0001081515|适用财税〔2016〕36号文件规定的金融同业往来利息收入（不含财税〔2016〕46号、财税〔2016〕70号文件规定的免税收入）增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十三）款</option>
	    		
		<option value="0001081515" >0001081515|金融同业往来利息收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十三）款</option>
	    		
		<option value="0001081517" >0001081517|合格境外投资者（简称QFII）委托境内公司在我国从事证券买卖业务取得的收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第1项</option>
	    		
		<option value="0001081518" >0001081518|个人从事金融商品转让业务取得的收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第5项</option>
	    		
		<option value="0001081519" >0001081519|人民银行对金融机构的贷款的利息收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第4项</option>
	    		
		<option value="0001081520" >0001081520|黄金期货交易增值税即征即退|《财政部 国家税务总局关于黄金期货交易有关税收政策的通知》 财税〔2008〕5号</option>
	    		
		<option value="0001081521" >0001081521|适用财税〔2016〕46号文件规定的金融同业往来利息收入增值税优惠|《财政部 国家税务总局关于进一步明确全面推开营改增试点金融业有关政策的通知》 财税〔2016〕46号第一条</option>
	    		
		<option value="0001081522" >0001081522|适用财税〔2016〕70号文件规定的金融同业往来利息收入增值税优惠|《财政部 国家税务总局关于金融机构同业往来等增值税政策的补充通知》 财税〔2016〕70号第一、二、三条</option>
	    		
		<option value="0001081523" >0001081523|邮政代理金融收入免征增值税优惠|《财政部 国家税务总局关于部分营业税和增值税政策到期延续问题的通知》 财税〔2016〕83号第三条</option>
	    		
		<option value="0001083901" >0001083901|金融资产管理公司免征增值税优惠|《财政部 国家税务总局关于4家资产管理公司接收资本金项下的资产在办理过户时有关税收政策问题的通知》 财税〔2003〕21号第二条</option>
	    		
		<option value="0001083903" >0001083903|金融资产管理公司免征增值税优惠|《财政部 国家税务总局关于中国信达等4家金融资产管理公司税收政策问题的通知》 财税〔2001〕10号</option>
	    		
		<option value="0001083904" >0001083904|金融资产管理公司免征增值税优惠|《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号第二条第4项、第三条第4项、第四条第4项</option>
	    		
		<option value="0001083907" >0001083907|熊猫普制金币免征增值税优惠|《财政部 国家税务总局关于熊猫普制金币免征增值税政策的通知》 财税〔2012〕97号</option>
	    		
		<option value="0001083910" >0001083910|有形动产融资租赁服务增值税即征即退|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第二条第（四）款</option>
	    		
		<option value="0001083911" >0001083911|金融资产管理公司免征增值税优惠|《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号</option>
	    		
		<option value="0001083913" >0001083913|保险公司开办的一年期以上人身保险产品取得的保费收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十一）款</option>
	    		
		<option value="0001083916" >0001083916|有形动产融资租赁服务增值税即征即退|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第二条第（二）款</option>
	    		
		<option value="0001091501" >0001091501|金融机构农户小额贷款取得的利息收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第1项</option>
	    		
		<option value="0001091502" >0001091502|金融机构农户小额贷款取得的利息收入免征增值税优惠|《财政部 税务总局关于延续支持农村金融发展有关税收政策的通知》 财税〔2017〕44号第一条</option>
	    		
		<option value="0001091503" >0001091503|小额贷款公司取得的农户小额贷款利息收入免征增值税优惠|《财政部 税务总局关于小额贷款公司有关税收政策的通知》 财税〔2017〕48号第一条</option>
	    		
		<option value="0001092202" >0001092202|饲料产品免征增值税优惠|《财政部 国家税务总局关于饲料产品免征增值税问题的通知》 财税〔2001〕121号</option>
	    		
		<option value="0001092203" >0001092203|有机肥免征增值税优惠|《财政部 国家税务总局关于有机肥产品免征增值税的通知》 财税〔2008〕56号</option>
	    		
		<option value="0001092204" >0001092204|化肥免征增值税优惠|《财政部 国家税务总局关于暂免征收尿素产品增值税的通知》 财税〔2005〕87号</option>
	    		
		<option value="0001092210" >0001092210|化肥免征增值税优惠|《财政部 国家税务总局关于免征磷酸二铵增值税的通知》 财税〔2007〕171号</option>
	    		
		<option value="0001092212" >0001092212|饲料产品免征增值税优惠|《财政部 国家税务总局关于豆粕等粕类产品征免增值税政策的通知》 财税〔2001〕30号</option>
	    		
		<option value="0001092301" >0001092301|农业生产资料免征增值税优惠|《财政部 国家税务总局关于不带动力的手扶拖拉机和三轮农用运输车增值税政策的通知》 财税〔2002〕89号</option>
	    		
		<option value="0001092303" >0001092303|农村电网维护费免征增值税优惠|《财政部 国家税务总局关于免征农村电网维护费增值税问题的通知》 财税字〔1998〕47号</option>
	    		
		<option value="0001092304" >0001092304|化肥免征增值税优惠|《财政部 国家税务总局关于农业生产资料征免增值税政策的通知》 财税〔2001〕113号</option>
	    		
		<option value="0001092309" >0001092309|农村饮水安全工程免征增值税优惠|《财政部 国家税务总局关于支持农村饮水安全工程建设运营税收政策的通知》 财税〔2012〕30号第四条</option>
	    		
		<option value="0001092310" >0001092310|航空公司提供飞机播洒农药服务免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（三）款</option>
	    		
		<option value="0001092311" >0001092311|农民专业合作社免征增值税优惠|《财政部 国家税务总局关于农民专业合作社有关税收政策的通知》 财税〔2008〕81号第一、二、三条</option>
	    		
		<option value="0001092312" >0001092312|农业生产资料免征增值税优惠|《财政部 国家税务总局关于农业生产资料征免增值税政策的通知》 财税〔2001〕113号</option>
	    		
		<option value="0001092313" >0001092313|农业机耕、排灌、病虫害防治、植物保护、农牧保险以及相关技术培训业务，家禽、牲畜、水生动物的配种和疾病防治免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十）款</option>
	    		
		<option value="0001092314" >0001092314|农村饮水安全工程免征增值税优惠|《财政部 国家税务总局关于继续实行农村饮水安全工程建设运营税收优惠政策的通知》 财税〔2016〕19号第四条</option>
	    		
		<option value="0001092315" >0001092315|承包地流转给农业生产者用于农业生产免征增值税优惠|《财政部 税务总局关于租入固定资产进项税额抵扣等增值税政策的通知》 财税〔2017〕90号第四条</option>
	    		
		<option value="0001092316" >0001092316|承包地流转给农业生产者用于农业生产免征增值税优惠|《财政部 税务总局关于建筑服务等营改增试点政策的通知》 财税〔2017〕58号第四条</option>
	    		
		<option value="0001099901" >0001099901|滴灌带和滴灌管产品免征增值税优惠|《财政部 国家税务总局关于免征滴灌带和滴灌管产品增值税的通知》 财税〔2007〕83号</option>
	    		
		<option value="0001099903" >0001099903|将土地使用权转让给农业生产者用于农业生产免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十五）款</option>
	    		
		<option value="0001101401" >0001101401|特殊教育校办企业增值税优惠|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第一条第7项</option>
	    		
		<option value="0001101402" >0001101402|从事学历教育的学校提供的教育服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（八）款</option>
	    		
		<option value="0001101403" >0001101403|学生勤工俭学提供的服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（九）款</option>
	    		
		<option value="0001101404" >0001101404|国家助学贷款取得的利息收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第2项</option>
	    		
		<option value="0001101405" >0001101405|政府举办的从事学历教育的高等、中等和初等学校（不含下属单位），举办进修班、培训班取得的全部归该学校所有的收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十九）款</option>
	    		
		<option value="0001101406" >0001101406|政府举办的职业学校设立的企业从事“现代服务”、“生活服务”业务活动取得的收入免征增值税免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十）款</option>
	    		
		<option value="0001101407" >0001101407|高校学生食堂餐饮服务收入免征增值税；高校学生公寓住宿费收入免征增值税|《财政部 国家税务总局关于继续执行高校学生公寓和食堂有关税收政策的通知》 财税〔2016〕82号第二、三条</option>
	    		
		<option value="0001102902" >0001102902|对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的分成收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（一）款</option>
	    		
		<option value="0001102903" >0001102903|对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的赞助收入、特许权收入、销售门票收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（二）款</option>
	    		
		<option value="0001102904" >0001102904|对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的发行纪念邮票、纪念币收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（三）款</option>
	    		
		<option value="0001102905" >0001102905|对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的媒体收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（四）款</option>
	    		
		<option value="0001102906" >0001102906|对北京冬奥组委、北京冬奥会测试赛赛事组委会向分支机构划拨所获赞助物资免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（八）款</option>
	    		
		<option value="0001102907" >0001102907|对北京冬奥组委、北京冬奥会测试赛赛事组委会赛后再销售物品和出让资产收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（八）款</option>
	    		
		<option value="0001102908" >0001102908|对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的餐饮服务、住宿、租赁、介绍服务和收费卡收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（十四）款</option>
	    		
		<option value="0001102909" >0001102909|对国际奥委会取得的收入免征增值税（除转播权收入）|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（一）款</option>
	    		
		<option value="0001102910" >0001102910|对国际奥委会取得的转播权收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（三）款</option>
	    		
		<option value="0001102911" >0001102911|对中国奥委会取得的由北京冬奥组委支付的收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（四）款</option>
	    		
		<option value="0001102912" >0001102912|对国际残奥委会取得的与北京2022年冬残奥会有关的收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（五）款</option>
	    		
		<option value="0001102913" >0001102913|对中国残奥委会取得的由北京冬奥组委分期支付的收入免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（六）款</option>
	    		
		<option value="0001102914" >0001102914|企业根据赞助协议向北京冬奥组委免费提供的服务免征增值税（免税清单由北京冬奥组委报财政部、税务总局确定）|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（二）款</option>
	    		
		<option value="0001102915" >0001102915|免征参与者向北京冬奥组委无偿提供服务和无偿转让无形资产的增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（九）款</option>
	    		
		<option value="0001102916" >0001102916|对外籍技术官员取得的由北京冬奥组委、测试赛赛事组委会支付的劳务报酬免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（五）款</option>
	    		
		<option value="0001102917" >0001102917|对中方技术官员取得的由北京冬奥组委、测试赛赛事组委会支付的劳务报酬免征增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（六）款</option>
	    		
		<option value="0001103201" >0001103201|世博会免征增值税优惠|《财政部 国家税务总局关于2010年上海世博会有关税收政策问题的通知》 财税〔2005〕180号第一条第（一）、（二）款</option>
	    		
		<option value="0001103203" >0001103203|进口图书、报刊资料免征增值税优惠|《财政部 国家税务总局关于北京中科进出口公司销售给高等学校科研单位和北京图书馆的进口图书报刊资料免征增值税问题的通知》 财税字〔1998〕69号</option>
	    		
		<option value="0001103205" >0001103205|转制文化企业免征增值税优惠|《财政部 国家税务总局关于文化体制改革中经营性文化事业单位转制为企业的若干税收优惠政策的通知》 财税〔2009〕34号</option>
	    		
		<option value="0001103206" >0001103206|电影产业免征增值税优惠|《财政部 海关总署 国家税务总局关于支持文化企业发展若干税收政策问题的通知》 财税〔2009〕31号第一条</option>
	    		
		<option value="0001103207" >0001103207|进口图书、报刊资料免征增值税优惠|《财政部 国家税务总局关于中国国际图书贸易总公司销售给高等学校教育科研单位和北京图书馆的进口图书报刊资料免征增值税问题的通知》 财税字〔1998〕68号</option>
	    		
		<option value="0001103208" >0001103208|进口图书、报刊资料免征增值税优惠|《财政部 国家税务总局关于中国教育图书进出口公司销售给高等学校教育科研单位和北京图书馆的进口图书报刊资料免征增值税问题的通知》 财税字〔1998〕67号</option>
	    		
		<option value="0001103209" >0001103209|进口图书、报刊资料免征增值税优惠|《财政部 国家税务总局关于中国经济图书进出口公司中国出版对外贸易总公司销售给大专院校和科研单位的进口书刊资料免征增值税的通知》 财税字〔1999〕255号</option>
	    		
		<option value="0001103210" >0001103210|进口图书、报刊资料免征增值税优惠|《财政部 国家税务总局关于中国科技资料进出口总公司销售进口图书享受免征国内销售环节增值税政策的通知》 财税〔2004〕69号</option>
	    		
		<option value="0001103211" >0001103211|进口图书、报刊资料免征增值税优惠|《财政部 国家税务总局关于中国图书进出口总公司销售给科研教学单位的进口书刊资料免征增值税问题的通知》 财税字〔1997〕66号</option>
	    		
		<option value="0001103212" >0001103212|转制文化企业免征增值税优惠|《财政部 国家税务总局 中宣部关于转制文化企业名单及认定问题的通知》 财税〔2009〕105号</option>
	    		
		<option value="0001103215" >0001103215|文化事业单位转制免征增值税优惠|《财政部 国家税务总局 中宣部关于下发红旗出版社有限责任公司等中央所属转制文化企业名单的通知》 财税〔2011〕3号</option>
	    		
		<option value="0001103216" >0001103216|文化事业单位转制免征增值税优惠|《财政部 国家税务总局 中宣部关于下发人民网股份有限公司等81家中央所属转制文化企业名单的通知》 财税〔2011〕27号</option>
	    		
		<option value="0001103217" >0001103217|文化事业单位转制免征增值税优惠|《财政部 国家税务总局 中宣部关于下发世界知识出版社等35家中央所属转制文化企业名单的通知》 财税〔2011〕120号</option>
	    		
		<option value="0001103219" >0001103219|电影产业免征增值税优惠|《财政部 国家税务总局关于交通运输业和部分现代服务业营业税改征增值税试点应税服务范围等若干税收政策的补充通知》 财税〔2012〕86号第四条</option>
	    		
		<option value="0001103220" >0001103220|图书批发、零售环节免征增值税优惠|《财政部 国家税务总局关于延续宣传文化增值税和营业税优惠政策的通知》 财税〔2013〕87号第二条</option>
	    		
		<option value="0001103222" >0001103222|动漫企业增值税即征即退|《财政部 国家税务总局关于动漫产业增值税和营业税政策的通知》 财税〔2013〕98号第一条</option>
	    		
		<option value="0001103224" >0001103224|电影产业免征增值税优惠|《财政部 海关总署 国家税务总局关于继续实施支持文化企业发展若干税收政策的通知》 财税〔2014〕85号第一条</option>
	    		
		<option value="0001103225" >0001103225|转制文化企业免征增值税优惠|《财政部 国家税务总局 中宣部关于继续实施文化体制改革中经营性文化事业单位转制为企业若干税收政策的通知》 财税〔2014〕84号第一条第（三）（四）项</option>
	    		
		<option value="0001103226" >0001103226|有线电视基本收视费免征增值税优惠|《财政部 海关总署 国家税务总局关于继续实施支持文化企业发展若干税收政策的通知》 财税〔2014〕85号第二条</option>
	    		
		<option value="0001103227" >0001103227|纪念馆、博物馆、文化馆、文物保护单位管理机构、美术馆、展览馆、书画院、图书馆在自己的场所提供文化体育服务取得的第一道门票收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十一）款</option>
	    		
		<option value="0001103228" >0001103228|寺院、宫观、清真寺和教堂举办文化、宗教活动的门票收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十二）款</option>
	    		
		<option value="0001103229" >0001103229|对科普单位的门票收入，以及县级及以上党政部门和科协开展科普活动的门票收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十八）款</option>
	    		
		<option value="0001103230" >0001103230|个人转让著作权免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十四）款</option>
	    		
		<option value="0001103231" >0001103231|有线电视基本收视费免征增值税优惠|《财政部 国家税务总局关于继续执行有线电视收视费增值税政策的通知》 财税〔2017〕35号</option>
	    		
		<option value="0001103232" >0001103232|图书批发、零售环节免征增值税优惠|《财政部 税务总局关于延续宣传文化增值税优惠政策的通知》 财税〔2018〕53号第二条</option>
	    		
		<option value="0001103233" >0001103233|对科普单位的门票收入，以及县级及以上党政部门和科协开展科普活动的门票收入免征增值税优惠|《财政部 税务总局关于延续宣传文化增值税优惠政策的通知》 财税〔2018〕53号第三条</option>
	    		
		<option value="0001103234" >0001103234|动漫企业增值税即征即退|《财政部 税务总局关于延续动漫产业增值税政策的通知》 财税〔2018〕38号第一条</option>
	    		
		<option value="0001103235" >0001103235|动漫企业增值税即征即退|《财政部 税务总局关于延续动漫产业增值税政策的通知》 财税〔2018〕38号第二条</option>
	    		
		<option value="0001120401" >0001120401|飞机维修劳务增值税即征即退|《财政部 国家税务总局关于飞机维修增值税问题的通知》 财税〔2000〕102号</option>
	    		
		<option value="0001120402" >0001120402|生产销售支线飞机免征增值税优惠|《财政部 国家税务总局关于国产支线飞机免征增值税的通知》 财税〔2000〕51号</option>
	    		
		<option value="0001120403" >0001120403|生产销售支线飞机免征增值税优惠|《财政部 国家税务总局关于农五飞机适用国产支线飞机免征增值税政策的通知》 财税〔2002〕97号</option>
	    		
		<option value="0001120404" >0001120404|生产销售新支线飞机减按5%征收增值税|《财政部 国家税务总局关于大型客机和新支线飞机增值税政策的通知》财税〔2016〕141号第二条</option>
	    		
		<option value="0001120706" >0001120706|军队空余房产租赁收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十三）款</option>
	    		
		<option value="0001121301" >0001121301|铁路货车修理免征增值税优惠|《财政部 国家税务总局关于铁路货车修理免征增值税的通知》 财税〔2001〕54号</option>
	    		
		<option value="0001121304" >0001121304|保税航空燃油免征增值税优惠|《财政部 国家税务总局关于民航国际航班使用保税航空燃油有关税收事宜的通知》 财税〔2004〕218号</option>
	    		
		<option value="0001121306" >0001121306|国际货物运输代理服务免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十四）款</option>
	    		
		<option value="0001121309" >0001121309|管道运输服务增值税即征即退|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第二条第（三）款</option>
	    		
		<option value="0001121310" >0001121310|国际货物运输代理服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十八）款</option>
	    		
		<option value="0001121311" >0001121311|管道运输服务增值税即征即退|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第二条第（一）款</option>
	    		
		<option value="0001122601" >0001122601|国家商品储备管理单位及其直属企业承担商品储备任务，从中央或者地方财政取得的利息补贴收入和价差补贴收入免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十五）款</option>
	    		
		<option value="0001123401" >0001123401|抗艾滋病药品免征增值税优惠|《财政部 国家税务总局关于继续免征国产抗艾滋病病毒药品增值税的通知》 财税〔2011〕128号</option>
	    		
		<option value="0001123406" >0001123406|医疗机构提供的医疗服务免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（七）款</option>
	    		
		<option value="0001123407" >0001123407|抗艾滋病药品免征增值税优惠|《财政部 国家税务总局关于延续免征国产抗艾滋病病毒药品增值税政策的通知》 财税〔2016〕97号</option>
	    		
		<option value="0001124302" >0001124302|无偿援助项目免征增值税优惠|《财政部 国家税务总局外经贸部关于外国政府和国际组织无偿援助项目在华采购物资免征增值税问题的通知》 财税〔2002〕2号</option>
	    		
		<option value="0001129901" >0001129901|铂金增值税即征即退|《财政部 国家税务总局关于铂金及其制品税收政策的通知》 财税〔2003〕86号第一、二、四条</option>
	    		
		<option value="0001129902" >0001129902|已使用固定资产减征增值税|《财政部 国家税务总局关于部分货物适用增值税低税率和简易办法征收增值税政策的通知》 财税〔2009〕9号第二条（一）、（二）项</option>
	    		
		<option value="0001129907" >0001129907|黄金交易免征增值税优惠|《财政部 国家税务总局关于黄金税收政策问题的通知》 财税〔2002〕142号第一、二条</option>
	    		
		<option value="0001129908" >0001129908|试点地区纳税人提供应税服务适用简易计税方法的免征增值税|《财政部 国家税务总局关于应税服务适用增值税零税率和免税政策的通知》 财税〔2011〕131号</option>
	    		
		<option value="0001129911" >0001129911|拍卖货物免征增值税优惠|《国家税务总局关于拍卖行取得的拍卖收入征收增值税、营业税有关问题的通知》 国税发〔1999〕40号第一条</option>
	    		
		<option value="0001129914" >0001129914|购置增值税税控系统专用设备抵减增值税|《财政部 国家税务总局关于增值税税控系统专用设备和技术维护费用抵减增值税税额有关政策的通知》 财税〔2012〕15号</option>
	    		
		<option value="0001129916" >0001129916|黄金交易免征增值税优惠|《财政部 国家税务总局 中国人民银行关于配售出口黄金有关税收规定的通知》 财税〔2000〕3号第二条</option>
	    		
		<option value="0001129917" >0001129917|购置增值税税控系统专用设备抵减增值税|《财政部 国家税务总局关于推广税控收款机有关税收政策的通知》 财税〔2004〕167号</option>
	    		
		<option value="0001129919" >0001129919|保税航空燃油免征增值税优惠|《财政部 国家税务总局关于成都双流等3个机场民航国际航班使用保税航空燃油有关税收政策的通知》 财税〔2013〕1号</option>
	    		
		<option value="0001129920" >0001129920|美国ABS船级社免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（九）款</option>
	    		
		<option value="0001129922" >0001129922|电信业服务免征增值税优惠|《财政部 国家税务总局关于将电信业纳入营业税改征增值税试点的通知》 财税〔2014〕43号第六条</option>
	    		
		<option value="0001129924" >0001129924|已使用固定资产减征增值税|《财政部 国家税务总局关于简并增值税征收率政策的通知》 财税〔2014〕57号第一条</option>
	    		
		<option value="0001129926" >0001129926|邮政服务免征增值税优惠|《财政部 国家税务总局关于将铁路运输和邮政业纳入营业税改征增值税试点的通知》 财税〔2013〕106号《附件3.营业税改征增值税试点过渡政策的规定》第一条第（十六）、（十七）款</option>
	    		
		<option value="0001129927" >0001129927|土地所有者出让土地使用权和土地使用者将土地使用权归还给土地所有者免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十七）款</option>
	    		
		<option value="0001129928" >0001129928|县级以上地方人民政府或自然资源行政主管部门出让、转让或收回自然资源使用权（不含土地使用权）免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十八）款</option>
	    		
		<option value="0001129931" >0001129931|行政单位之外的其他单位收取的符合条件的政府性基金和行政事业性收费免征增值税优惠|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十三）款</option>
	    		
		<option value="0001129932" >0001129932|公路经营企业中的一般纳税人选择适用简易计税方法减按3%计算应纳增值税|《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件2第一条第（九）款第2项</option>
	    		
		<option value="0001129933" >0001129933|社会团体会费免征增值税优惠|《财政部 税务总局关于租入固定资产进项税额抵扣等增值税政策的通知》 财税〔2017〕90号第八条</option>
	    		
		<option value="0001129999" >0001129999|个人转让著作权免征增值税优惠|其他</option>
	    		
		<option value="0001129999" >0001129999|公安、司法免征增值税优惠|其他</option>
	    		
		<option value="0001129999" >0001129999|其他|其他</option>
	    		
		<option value="0001129999" >0001129999|军队、军工系统部分货物免征增值税优惠|其他</option>
	    		
		<option value="0001129999" >0001129999|军队用粮免征增值税优惠|其他</option>
	    		
		<option value="0001129999" >0001129999|医疗卫生机构免征增值税优惠|其他</option>
	    		
		<option value="0001129999" >0001129999|古旧图书免征增值税优惠|其他</option>
	    		
		<option value="0001129999" >0001129999|残疾人员本人为社会提供的服务免征增值税优惠|其他</option>
	    		
		<option value="0001129999" >0001129999|管道运输服务增值税即征即退|其他</option>
	    		
		<option value="0001129999" >0001129999|自产农产品免征增值税优惠|其他</option>
	    		
		<option value="0001129999" >0001129999|血站免征增值税优惠|其他</option>
	    		
		<option value="0001129999" >0001129999|避孕药品和用具免征增值税优惠|其他</option>
	    		
		<option value="0002039901" >0002039901|横琴、平潭区内企业销售货物免征消费税|《财政部 海关总署 国家税务总局关于横琴 平潭开发有关增值税和消费税政策的通知》 财税〔2014〕51号第二条</option>
	    		
		<option value="0002061001" >0002061001|子午线轮胎免征消费税|《财政部 国家税务总局关于调整和完善消费税政策的通知》 财税〔2006〕33号第十条</option>
	    		
		<option value="0002061003" >0002061003|节能环保电池免税|《财政部　国家税务总局关于对电池 涂料征收消费税的通知》 财税〔2015〕16号第二条第一款</option>
	    		
		<option value="0002061004" >0002061004|节能环保涂料免税|《财政部　国家税务总局关于对电池 涂料征收消费税的通知》 财税〔2015〕16号第二条第三款</option>
	    		
		<option value="0002064001" >0002064001|废动植物油生产纯生物柴油免税|《财政部 国家税务总局关于对利用废弃的动植物油生产纯生物柴油免征消费税的通知》 财税〔2010〕118号第一条</option>
	    		
		<option value="0002064002" >0002064002|以粮食为原料生产用于调配车用乙醇汽油的变性燃料乙醇减征消费税|《财政部 国家税务总局关于调整变性燃料乙醇定点生产企业有关税收政策的通知》 财税〔2011〕102号第二条</option>
	    		
		<option value="0002064003" >0002064003|用废矿物油生产的工业油料免税|《财政部 国家税务总局关于对废矿物油再生油品免征消费税的通知》 财税〔2013〕105号第一条</option>
	    		
		<option value="0002064004" >0002064004|以非粮作物为原料生产的燃料乙醇免税|《财政部 国家税务总局关于安徽中粮和山东龙力公司非粮燃料乙醇税收政策的通知》 财税〔2014〕8号第一条</option>
	    		
		<option value="0002102901" >0002102901|对北京冬奥组委、北京冬奥会测试赛赛事组委会赛后再销售物品和出让资产收入免征消费税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（八）款</option>
	    		
		<option value="0002102902" >0002102902|对北京冬奥组委、北京冬奥会测试赛赛事组委会委托加工生产的高档化妆品免征消费税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（十二）款</option>
	    		
		<option value="0002102903" >0002102903|对国际奥委会取得的与北京2022年冬奥会有关的收入免征消费税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（一）款</option>
	    		
		<option value="0002102904" >0002102904|对中国奥委会取得的由北京冬奥组委支付的收入免征消费税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（四）款</option>
	    		
		<option value="0002102905" >0002102905|对国际残奥委会取得的与北京2022年冬残奥会有关的收入免征消费税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（五）款</option>
	    		
		<option value="0002102906" >0002102906|对中国残奥委会取得的由北京冬奥组委分期支付的收入免征消费税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（六）款</option>
	    		
		<option value="0002103201" >0002103201|上海世博会免征消费税|《财政部 国家税务总局关于2010年上海世博会有关税收政策问题的通知》 财税〔2005〕180号</option>
	    		
		<option value="0002121301" >0002121301|保税航空燃油免征消费税|《财政部 国家税务总局关于重庆江北等5家机场民航国际航班使用进口保税航空燃油有关税收政策的通知》 财税〔2011〕123号</option>
	    		
		<option value="0002125201" >0002125201|进口石脑油和国产的用作乙烯、芳烃类产品原料的石脑油免征消费税|《财政部 国家税务总局关于调整部分成品油消费税政策的通知》 财税〔2008〕19号</option>
	    		
		<option value="0002125204" >0002125204|生产成品油过程中消耗的自产成品油部分免税|《财政部 国家税务总局关于对成品油生产企业生产自用油免征消费税的通知》 财税〔2010〕98号第一条</option>
	    		
		<option value="0002125205" >0002125205|自产石脑油、燃料油生产乙烯、芳烃产品免税|《财政部 国家税务总局关于延续执行部分石脑油燃料油消费税政策的通知》 财税〔2011〕87号第二条</option>
	    		
		<option value="0002125207" >0002125207|用已税汽油生产的乙醇汽油免税|《财政部 国家税务总局关于提高成品油消费税税率后相关成品油消费税政策的通知》 财税〔2008〕168号第四条</option>
	    		
		<option value="0002129999" >0002129999|其他|其他</option>
	    		
		<option value="0003011602" >0003011602|受灾地区促进就业企业限额减免营业税|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号第五条</option>
	    		
		<option value="0003011603" >0003011603|受灾地区个体经营限额减免营业税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第五条</option>
	    		
		<option value="0003011604" >0003011604|受灾地区个体经营限额减免营业税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第五条第2项</option>
	    		
		<option value="0003011605" >0003011605|受灾地区个体经营限额减免营业税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第五条第2项</option>
	    		
		<option value="0003011606" >0003011606|受灾地区促进就业企业限额减免营业税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第五条第1项</option>
	    		
		<option value="0003011607" >0003011607|受灾地区促进就业企业限额减免营业税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第五条第1项</option>
	    		
		<option value="0003011701" >0003011701|个人销售普通住宅营业税减免|《财政部 国家税务总局关于调整个人住房转让营业税政策的通知》 财税〔2011〕12号第一条</option>
	    		
		<option value="0003011702" >0003011702|按政府规定价格出租公有住房和廉租住房免征营业税|《财政部 国家税务总局关于调整住房租赁市场税收政策的通知》 财税〔2000〕125号第一条</option>
	    		
		<option value="0003011705" >0003011705|经营公租房所取得的租金收入免征营业税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第一款</option>
	    		
		<option value="0003011706" >0003011706|经营公租房所取得的租金收入免征营业税|《财政部 国家税务总局关于支持公共租赁住房建设和运营有关税收优惠政策的通知》 财税〔2010〕88号第六条</option>
	    		
		<option value="0003011707" >0003011707|住房公积金管理中心委托银行发放个人住房贷款收入免征营业税|《财政部 国家税务总局关于住房公积金管理中心有关税收政策的通知》 财税〔2000〕94号第一条</option>
	    		
		<option value="0003011708" >0003011708|经批准改制的铁路房建生活单位为铁道部所属铁路局及国有铁路运输控股公司提供营业税应税劳务取得的收入免征营业税|《财政部 国家税务总局关于铁路房建生活单位营业税政策的通知》 财税〔2012〕94号第一条</option>
	    		
		<option value="0003011711" >0003011711|个人自建自用住房，销售时免征营业税|《财政部 国家税务总局关于职业教育等营业税若干政策问题的通知》 财税〔2013〕62号第二条</option>
	    		
		<option value="0003011712" >0003011712|经营公租房所取得的租金收入免征营业税|《财政部 国家税务总局关于促进公共租赁住房发展有关税收优惠政策的通知》 财税〔2014〕52号第七条</option>
	    		
		<option value="0003011713" >0003011713|个人无偿赠与不动产、土地使用权符合特定条件的暂免征收营业税|《财政部 国家税务总局关于个人金融商品买卖等营业税若干免税政策的通知》 财税〔2009〕111号第二条</option>
	    		
		<option value="0003011714" >0003011714|企业、行政事业单位按房改成本价、标准价出售住房的收入暂免征收营业税|《财政部 国家税务总局关于职业教育等营业税若干政策问题的通知》 财税〔2013〕62号第二条</option>
	    		
		<option value="0003011715" >0003011715|个人销售普通住宅营业税减免|《财政部 国家税务总局关于调整个人住房转让营业税政策的通知》 财税〔2015〕39号第一条</option>
	    		
		<option value="0003011716" >0003011716|经营公租房所取得的租金收入免征营业税|《财政部 国家税务总局关于公共租赁住房税收优惠政策的通知》 财税〔2015〕139号第七条</option>
	    		
		<option value="0003011717" >0003011717|个人将购买2年以上（含2年）的住房对外销售的免征营业税|《财政部 国家税务总局 住房城乡建设部关于调整房地产交易环节契税 营业税优惠政策的通知》 财税〔2016〕23号第二条</option>
	    		
		<option value="0003011801" >0003011801|安置退役士兵就业新办企业免征营业税|《财政部 国家税务总局关于扶持城镇退役士兵自谋职业有关税收优惠政策的通知》 财税〔2004〕93号第一条</option>
	    		
		<option value="0003011803" >0003011803|安置随军家属就业新办企业免征营业税|《财政部 国家税务总局关于随军家属就业有关税收政策的通知》 财税〔2000〕84号第一条</option>
	    		
		<option value="0003011804" >0003011804|自主择业军队转业干部从事个体经营免征营业税|《财政部 国家税务总局关于自主择业的军队转业干部有关税收政策问题的通知》 财税〔2003〕26号第一条</option>
	    		
		<option value="0003011805" >0003011805|退役士兵从事个体经营限额减征营业税|《财政部 国家税务总局 民政部关于调整完善扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2014〕42号第一条</option>
	    		
		<option value="0003011806" >0003011806|随军家属从事个体经营免征营业税|《财政部 国家税务总局关于随军家属就业有关税收政策的通知》 财税〔2000〕84号第二条</option>
	    		
		<option value="0003011807" >0003011807|安置自主择业军转干部新办企业免征营业税|《财政部 国家税务总局关于自主择业的军队转业干部有关税收政策问题的通知》 财税〔2003〕26号第二条</option>
	    		
		<option value="0003011808" >0003011808|新办企业招用退役士兵限额减征营业税|《财政部 国家税务总局 民政部关于调整完善扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2014〕42号第二条</option>
	    		
		<option value="0003012701" >0003012701|安置残疾人就业企业减征营业税|《财政部 国家税务总局关于促进残疾人就业税收优惠政策的通知》 财税〔2007〕92号第一条第一款 </option>
	    		
		<option value="0003012702" >0003012702|家政服务企业由员工制家政服务员提供的家政服务取得的收入免征营业税|《财政部 国家税务总局关于员工制家政服务免征营业税的通知》 财税〔2011〕51号第一条</option>
	    		
		<option value="0003012704" >0003012704|托儿所、幼儿园、养老院、残疾人福利机构提供的育养服务免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第八条第（一）项</option>
	    		
		<option value="0003012705" >0003012705|养老机构提供的养老服务免征营业税|《财政部 国家税务总局关于支持文化服务出口等营业税政策的通知》 财税〔2014〕118号第二条</option>
	    		
		<option value="0003012705" >0003012705|托儿所、幼儿园、养老院、残疾人福利机构提供的育养服务免征营业税|《财政部 国家税务总局关于支持文化服务出口等营业税政策的通知》 财税〔2014〕118号第二条</option>
	    		
		<option value="0003012706" >0003012706|残疾人个人提供劳务免征营业税|《财政部 国家税务总局关于促进残疾人就业税收优惠政策的通知》 财税〔2007〕92号第三条第一款</option>
	    		
		<option value="0003012707" >0003012707|婚姻介绍免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第八条第（一）项</option>
	    		
		<option value="0003012708" >0003012708|殡葬服务免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第八条第（一）项</option>
	    		
		<option value="0003012709" >0003012709|家政服务企业由员工制家政服务员提供的家政服务取得的收入免征营业税|《财政部 国家税务总局关于员工制家政服务营业税政策的通知》 财税〔2016〕9号</option>
	    		
		<option value="0003013604" >0003013604|外派海员劳务免征营业税|《财政部 国家税务总局关于外派海员等劳务免征营业税的通知》 财税〔2012〕54号第一条第二款</option>
	    		
		<option value="0003013605" >0003013605|除高校毕业生以外的失业人员从事个体经营扣减营业税|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第一条</option>
	    		
		<option value="0003013606" >0003013606|高校毕业生从事个体经营扣减营业税|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第一条</option>
	    		
		<option value="0003013607" >0003013607|安置失业人员就业企业扣减营业税|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第二条</option>
	    		
		<option value="0003013608" >0003013608|低保及零就业家庭从事个体经营，限额扣减营业税|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第一条</option>
	    		
		<option value="0003019901" >0003019901|世行贷款粮食流通项目免征营业税|《财政部 国家税务总局关于世行贷款粮食流通项目建筑安装工程和服务收入免征营业税的通知》 财税字〔1998〕87号第一条</option>
	    		
		<option value="0003021905" >0003021905|科技企业孵化器收入免征营业税|《财政部 国家税务总局关于科技企业孵化器税收政策的通知》 财税〔2013〕117号第一条</option>
	    		
		<option value="0003021906" >0003021906|国家大学科技园收入免征营业税|《财政部 国家税务总局关于国家大学科技园税收政策的通知》 财税〔2013〕118号第一条</option>
	    		
		<option value="0003023002" >0003023002|离岸服务外包业务取得的收入免征营业税|《财政部 国家税务总局 商务部关于示范城市离岸外包服务业务免征营业税的通知》 财税〔2010〕64号第一条</option>
	    		
		<option value="0003030301" >0003030301|注册在上海的保险企业从事国际航运保险业务取得的收入免征营业税|《财政部 国家税务总局关于上海建设国际金融和国际航运中心营业税政策的通知》 财税〔2009〕91号第三条</option>
	    		
		<option value="0003030302" >0003030302|对注册在深圳市的保险企业向注册在前海深港现代服务业合作区的企业提供国际航运保险业务取得的收入免征营业税|《财政部 国家税务总局关于深圳前海国际航运保险业务营业税免税政策的通知》 财税〔2010〕115号第一条</option>
	    		
		<option value="0003030303" >0003030303|注册在天津的保险企业从事国际航运保险业务收入免征营业税|《财政部 国家税务总局关于天津北方国际航运中心核心功能区营业税政策的通知》 财税〔2011〕68号第三条 </option>
	    		
		<option value="0003032104" >0003032104|注册在平潭的保险企业向注册在平潭的企业提供国际航运保险服务取得的收入免征营业税|《财政部 国家税务总局关于福建省平潭综合实验区营业税政策的通知》 财税〔2012〕60号第二条 </option>
	    		
		<option value="0003033302" >0003033302|从事与新疆国际大巴扎项目有关的营业税应税业务免征营业税|《财政部 国家税务总局关于免征新疆国际大巴扎项目营业税的通知》 财税〔2013〕77号第一条</option>
	    		
		<option value="0003041501" >0003041501|中小企业信用担保机构免征营业税|《工业和信息化部 国家税务总局关于中小企业信用担保机构免征营业税有关问题的通知》工信部联企业〔2009〕114号第一条</option>
	    		
		<option value="0003041502" >0003041502|中小企业信用担保机构免征营业税|《工业和信息化部 国家税务总局关于中小企业信用担保机构免征营业税审批事项取消后有关问题的通知》 工信部联企业〔2015〕286号第一条</option>
	    		
		<option value="0003042801" >0003042801|未达起征点免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第十条</option>
	    		
		<option value="0003042802" >0003042802|未达起征点免征营业税|《财政部 国家税务总局关于修改<中华人民共和国增值税暂行条例实施细则>和<中华人民共和国营业税暂行条例实施细则>的决定 》 中华人民共和国财政部令第65号第二条</option>
	    		
		<option value="0003045301" >0003045301|营业额不超过2万元的企业或非企业性单位暂免征收营业税|《财政部 国家税务总局关于暂免征收部分小微企业增值税和营业税的通知》 财税〔2013〕52号第一条</option>
	    		
		<option value="0003045302" >0003045302|月营业额2万元至3万元的营业税纳税人（非个体、个人）免征营业税|《财政部 国家税务总局关于进一步支持小微企业增值税和营业税政策的通知》 财税〔2014〕71号第一条</option>
	    		
		<option value="0003045303" >0003045303|月营业额2万元至3万元的营业税纳税人（个体、个人）免征营业税|《财政部 国家税务总局关于进一步支持小微企业增值税和营业税政策的通知》 财税〔2014〕71号第一条</option>
	    		
		<option value="0003052401" >0003052401|中国邮政转制公司之间进行资产置换免征营业税|《财政部 国家税务总局关于中国邮政储蓄银行改制上市有关税收政策的通知》 财税〔2013〕53号第三条</option>
	    		
		<option value="0003052501" >0003052501|中国邮政集团公司邮政速递物流业务重组改制邮政公司向各省邮政速递物流有限公司转移资产免征营业税|《财政部 国家税务总局关于中国邮政集团公司邮政速递物流业务重组改制有关税收问题的通知》 财税〔2011〕116号第一条</option>
	    		
		<option value="0003081502" >0003081502|个人投资分红保险业务免征营业税|《财政部 国家税务总局关于对保险公司开办个人投资分红保险业务取得的保费收入免征营业税的通知》 财税字〔1996〕102号第一条</option>
	    		
		<option value="0003081503" >0003081503|外汇管理部门委托金融机构发放的外汇贷款利息收入免征营业税|《财政部 国家税务总局关于对外汇管理部门委托贷款利息收入免征营业税的通知》 财税〔2000〕78号第一条</option>
	    		
		<option value="0003081505" >0003081505|专项国债转贷取得的利息收入免征营业税|《财政部 国家税务总局关于国债转贷利息收入免征营业税的通知》 财税字〔1999〕220号第一条</option>
	    		
		<option value="0003081514" >0003081514|邮政普遍服务和特殊服务免征营业税|《财政部 国家税务总局关于邮政普遍服务和特殊服务免征营业税的通知》 财税〔2006〕47号第一条</option>
	    		
		<option value="0003081516" >0003081516|期货保障基金公司的部分运营收入暂免征收营业税|《财政部 国家税务总局关于期货投资者保障基金有关税收政策继续执行的通知》 财税〔2013〕80号第三条</option>
	    		
		<option value="0003081517" >0003081517|对中国保险保障基金有限责任公司的部分所得免征营业税|《财政部 国家税务总局关于保险保障基金有关税收政策继续执行的通知》 财税〔2013〕81号第二条</option>
	    		
		<option value="0003081519" >0003081519|被撤销金融机构清偿债务免征营业税|《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第4项</option>
	    		
		<option value="0003081520" >0003081520|国有独资商业银行、国家开发银行购买金融资产管理公司发行的专项债券利息收入免征营业税|《财政部 国家税务总局关于国有独资商业银行国家开发银行承购金融资产管理公司发行的专项债券利息收入免征税收问题的通知》 财税〔2001〕152号第一条</option>
	    		
		<option value="0003081521" >0003081521|内地个人投资者通过沪港通买卖香港联交所上市股票取得的差价收入，免征收营业税|《财政部 国家税务总局 证监会关于沪港股票市场交易互联互通机制试点有关税收政策的通知》 财税〔2014〕81号第三条第2项</option>
	    		
		<option value="0003083901" >0003083901|国有商业银行划转给金融资产管理公司的资产免征营业税|《财政部 国家税务总局关于4家资产管理公司接收资本金项下的资产在办理过户时有关税收政策问题的通知》 财税〔2003〕21号第二条</option>
	    		
		<option value="0003083902" >0003083902|个人从事外汇、有价证券、非货物期货和其他金融商品买卖业务取得的收入暂免征收营业税|《财政部 国家税务总局关于个人金融商品买卖等营业税若干免税政策的通知》 财税〔2009〕111号第一条</option>
	    		
		<option value="0003083904" >0003083904|合格境外机构投资者证券买卖业务差价收入免征营业税|《财政部 国家税务总局关于合格境外机构投资者营业税政策的通知》 财税〔2005〕155号第一条</option>
	    		
		<option value="0003083907" >0003083907|全国社会保障基金有关收入免征营业税|《财政部 国家税务总局关于全国社会保障基金有关税收政策问题的通知》 财税〔2002〕75号第一条</option>
	    		
		<option value="0003083908" >0003083908|证券投资基金管理人运用基金买卖股票、债券的差价收入免征营业税|《财政部 国家税务总局关于证券投资基金税收政策的通知》 财税〔2004〕78号第一条</option>
	    		
		<option value="0003083910" >0003083910|金融资产管理公司收购、承接、处置不良资产免征营业税|《财政部 国家税务总局关于中国信达等4家金融资产管理公司税收政策问题的通知》 财税〔2001〕10号</option>
	    		
		<option value="0003083913" >0003083913|金融资产管理公司收购、承接、处置不良资产免征营业税|《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号第二条第4项</option>
	    		
		<option value="0003083914" >0003083914|境内保险机构为出口货物提供的保险产品免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第八条第（七）项</option>
	    		
		<option value="0003083915" >0003083915|一年期以上返还性人身保险免征营业税|《财政部 国家税务总局关于对若干项目免征营业税的通知》 财税字〔1994〕2号第一条</option>
	    		
		<option value="0003083916" >0003083916|金融资产管理公司收购、承接、处置不良资产免征营业税|《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号第一、二条</option>
	    		
		<option value="0003083917" >0003083917|资产公司接受相关国有银行的不良债权，免征转让该不动产和利用该不动产从事融资租赁业务应缴纳的营业税|《财政部关于金融资产管理公司接受以物抵债资产过户税费问题的通知》 财金〔2001〕189号第一条</option>
	    		
		<option value="0003083918" >0003083918|一年期以上返还性人身保险免征营业税|《财政部 国家税务总局关于一年期以上返还性人身保险产品营业税免税政策的通知》 财税〔2015〕86号第一条</option>
	    		
		<option value="0003091501" >0003091501|对金融机构农户小额贷款的利息收入免征营业税|《财政部 国家税务总局关于农村金融有关税收政策的通知》 财税〔2010〕4号第一条</option>
	    		
		<option value="0003091502" >0003091502|农村金融机构减征营业税|《财政部 国家税务总局关于延长农村金融机构营业税政策执行期限的通知》 财税〔2011〕101号第一条</option>
	    		
		<option value="0003091503" >0003091503|对金融机构农户小额贷款的利息收入免征营业税|《财政部 国家税务总局关于中国扶贫基金会小额信贷试点项目税收政策的通知》 财税〔2010〕35号第一条</option>
	    		
		<option value="0003091504" >0003091504|对金融机构农户小额贷款的利息收入免征营业税|《财政部 国家税务总局关于中国扶贫基金会所属小额贷款公司享受有关税收优惠政策的通知》 财税〔2012〕33号第一条</option>
	    		
		<option value="0003091506" >0003091506|国际农发基金贷款利息收入免征营业税|《财政部 国家税务总局关于对国际农发基金贷款回收利息税收问题的批复》 财税字〔1995〕108号第一条</option>
	    		
		<option value="0003091507" >0003091507|金融机构农户小额贷款的利息收入免征营业税|《财政部 国家税务总局关于延续并完善支持农村金融发展有关税收政策的通知》 财税〔2014〕102号第一条</option>
	    		
		<option value="0003091508" >0003091508|对金融机构农户小额贷款的利息收入免征营业税|《财政部 国家税务总局关于中国扶贫基金会小额信贷试点项目继续参照执行农村金融有关税收政策的通知》 财税〔2015〕12号第一条</option>
	    		
		<option value="0003091508" >0003091508|金融机构农户小额贷款的利息收入免征营业税|《财政部 国家税务总局关于中国扶贫基金会小额信贷试点项目继续参照执行农村金融有关税收政策的通知》 财税〔2015〕12号第一条</option>
	    		
		<option value="0003092303" >0003092303|地方商业银行转贷用于清偿农村合作基金会债务的专项贷款利息收入免征营业税|《财政部 国家税务总局关于对农村合作基金会专项贷款利息收入免征营业税的通知》 财税字〔1999〕303号第一条</option>
	    		
		<option value="0003092304" >0003092304|农业机耕、排灌、病虫害防治、植物保护、农牧保险以及相关技术培训业务，家禽、牲畜、水生动物的配种和疾病防治免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第八条第（五）项</option>
	    		
		<option value="0003092305" >0003092305|中国农业银行三农事业部涉农贷款减征营业税|《财政部 国家税务总局关于中国农业银行三农事业部涉农贷款营业税优惠政策的通知》 财税〔2014〕5号第一、三条</option>
	    		
		<option value="0003092306" >0003092306|中国农业银行三农事业部涉农贷款减征营业税|《财政部 国家税务总局关于中国农业银行三农金融事业部涉农贷款营业税优惠政策的通知》 财税〔2015〕67号第一、三条</option>
	    		
		<option value="0003092307" >0003092307|提供涉农贷款取得的利息收入减按3%的税率征收营业税|《财政部 国家税务总局关于中国农业发展银行涉农贷款营业税优惠政策的通知》 财税〔2016〕3号第一条</option>
	    		
		<option value="0003099903" >0003099903|土地使用权转让给农业生产者免征营业税|《财政部 国家税务总局关于对若干项目免征营业税的通知》 财税字〔1994〕2号第三条</option>
	    		
		<option value="0003101402" >0003101402|从事学历教育的学校提供教育劳务免征营业税|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第一条</option>
	    		
		<option value="0003101404" >0003101404|国家助学贷款利息收入免征营业税|《中国人民银行 财政部 教育部 国家税务总局关于进一步推进国家助学贷款业务发展的通知》 银发〔2001〕245号第三条</option>
	    		
		<option value="0003101405" >0003101405|高校学生食堂餐饮服务收入免征营业税 高校学生公寓住宿费收入免征营业税|《财政部 国家税务总局关于经营高校学生公寓和食堂有关税收政策的通知》 财税〔2013〕83号第三、四条</option>
	    		
		<option value="0003101406" >0003101406|进修班、培训班取得收入免征营业税|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第一条</option>
	    		
		<option value="0003101407" >0003101407|职业学校设立企业从事服务免征营业税|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第一条</option>
	    		
		<option value="0003102901" >0003102901|第三届亚洲沙滩运动会营业税优惠政策|《财政部 海关总署 国家税务总局关于第三届亚洲沙滩运动会税收政策的通知》 财税〔2011〕11号第一条1-5项</option>
	    		
		<option value="0003102903" >0003102903|第16届亚洲运动会等三项国际综合运动会营业税优惠政策|《财政部 海关总署 国家税务总局关于第16届亚洲运动会等三项国际综合运动会税收政策的通知》 财税〔2009〕94号第一条1-6项</option>
	    		
		<option value="0003102904" >0003102904|第二届夏季青年奥林匹克运动会等三项国际综合运动会营业税优惠政策|《财政部 海关总署 国家税务总局关于第二届夏季青年奥林匹克运动会等三项国际综合运动会税收政策的通知》 财税〔2013〕11号第一条1-6项</option>
	    		
		<option value="0003103201" >0003103201|2010年上海世博会营业税优惠政策|《财政部 国家税务总局关于2010年上海世博会有关税收政策问题的通知》 财税〔2005〕180号第一条1-2项</option>
	    		
		<option value="0003103207" >0003103207|转制文化企业免征营业税|《财政部 国家税务总局关于文化体制改革中经营性文化事业单位转制为企业的若干税收优惠政策的通知》 财税〔2009〕34号第四条</option>
	    		
		<option value="0003103208" >0003103208|转制文化企业免征营业税|《财政部 国家税务总局 中宣部关于转制文化企业名单及认定问题的通知》 财税〔2009〕105号</option>
	    		
		<option value="0003103209" >0003103209|转制文化企业免征营业税|《财政部 海关总署 国家税务总局关于支持文化企业发展若干税收政策问题的通知》 财税〔2009〕31号第一、二、四条</option>
	    		
		<option value="0003103211" >0003103211|宗教场所举办文化、宗教活动的门票收入免征营业税,纪念馆、博物馆、文化馆、文物保护单位管理机构、美术馆、展览馆、书画院、图书馆举办文化活动的门票收入免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第八条第（六）项</option>
	    		
		<option value="0003103212" >0003103212|学校和其他教育机构提供的教育劳务免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第八条第（四）项</option>
	    		
		<option value="0003103213" >0003103213|转制文化企业免征营业税|《财政部 国家税务总局 中宣部关于下发红旗出版社有限责任公司等中央所属转制文化企业名单的通知》 财税〔2011〕3号第一、二条</option>
	    		
		<option value="0003103214" >0003103214|转制文化企业免征营业税|《财政部 国家税务总局 中宣部关于下发人民网股份有限公司等81家中央所属转制文化企业名单的通知》 财税〔2011〕27号第一条</option>
	    		
		<option value="0003103215" >0003103215|转制文化企业免征营业税|《财政部 国家税务总局 中宣部关于下发世界知识出版社等35家中央所属转制文化企业名单的通知》 财税〔2011〕120号第一条</option>
	    		
		<option value="0003103218" >0003103218|转制文化企业免征营业税|《财政部 国家税务总局 中宣部关于下发13家名称变更后继续享受税收优惠政策的转制文化企业名单的通知》 财税〔2013〕17号第一条</option>
	    		
		<option value="0003103219" >0003103219|个人转让著作权免征营业税|《财政部 国家税务总局关于对若干项目免征营业税的通知》 财税字〔1994〕2号第二条</option>
	    		
		<option value="0003103220" >0003103220|科普活动门票收入及境外单位向境内科普单位转让科普影视作品播映权收入免征营业税|《财政部 国家税务总局关于延续宣传文化增值税和营业税优惠政策的通知》 财税〔2013〕87号第三条</option>
	    		
		<option value="0003103221" >0003103221|动漫企业减征营业税|《财政部 国家税务总局关于动漫产业增值税和营业税政策的通知》 财税〔2013〕98号第二条</option>
	    		
		<option value="0003103222" >0003103222|经营性文化事业单位转制为企业免征营业税|《财政部 国家税务总局 中宣部关于继续实施文化体制改革中经营性文化事业单位转制为企业若干税收政策的通知》 财税〔2014〕84号第一条第（四）项</option>
	    		
		<option value="0003103223" >0003103223|纳税人为境外单位或个人在境外提供文物、遗址等的修复保护服务，免征营业税|《财政部 国家税务总局关于支持文化服务出口等营业税政策的通知》 财税〔2014〕118号第一条</option>
	    		
		<option value="0003103224" >0003103224|纳税人为境外单位或个人在境外提供的纳入国家级非物质文化遗产名录的传统医药诊疗保健服务免征营业税|《财政部 国家税务总局关于支持文化服务出口等营业税政策的通知》 财税〔2014〕118号第一条</option>
	    		
		<option value="0003103225" >0003103225|学生勤工俭学提供的劳务免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第八条第（四）项</option>
	    		
		<option value="0003120701" >0003120701|部队空余房产租赁免征营业税|《财政部 国家税务总局关于暂免征收军队空余房产租赁收入营业税房产税的通知》 财税〔2004〕123号第一条</option>
	    		
		<option value="0003120702" >0003120702|军队系统各单位为军队内部服务及军队系统的建筑安装工程所取得的收入，免征营业税|《财政部 国家税务总局关于军队军工系统所属单位征收流转税资源税问题的通知》 财税字〔1994〕11号第三条</option>
	    		
		<option value="0003121301" >0003121301|公路经营企业收取的高速公路车辆通行费收入减按3%的税率征收营业税|《财政部 国家税务总局关于公路经营企业车辆通行费收入营业税政策的通知》 财税〔2005〕77号第一条</option>
	    		
		<option value="0003122601" >0003122601|免征国家石油储备基地第一期项目建设过程中涉及的营业税|《财政部 国家税务总局关于国家石油储备基地建设有关税收政策的通知》 财税〔2005〕23号第一条</option>
	    		
		<option value="0003123401" >0003123401|医院、诊所和其他医疗机构提供的医疗服务免征营业税|《中华人民共和国营业税暂行条例》 中华人民共和国国务院令第540号第八条第（三）项</option>
	    		
		<option value="0003129907" >0003129907|营业税纳税人购进税控收款机抵免营业税|《财政部 国家税务总局关于推广税控收款机有关税收政策的通知》 财税〔2004〕167号第二条</option>
	    		
		<option value="0003129908" >0003129908|对个人出租住房，不区分用途，在3％税率的基础上减半征收营业税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第二条</option>
	    		
		<option value="0003129909" >0003129909|邮政企业代办金融业务免征营业税|《财政部 国家税务总局关于邮政企业代办金融和速递物流业务继续免征营业税的通知》 财税〔2013〕82号第一条</option>
	    		
		<option value="0003129910" >0003129910|境外提供建筑业、文化体育业劳务暂免征收营业税|《财政部 国家税务总局关于个人金融商品买卖等营业税若干免税政策的通知》 财税〔2009〕111号第三条</option>
	    		
		<option value="0003129911" >0003129911|符合条件的行政事业性收费和政府性基金暂免征收营业税|《财政部 国家税务总局关于个人金融商品买卖等营业税若干免税政策的通知》 财税〔2009〕111号第五条</option>
	    		
		<option value="0003129999" >0003129999|其他|其他</option>
	    		
		<option value="0003129999" >0003129999|对符合条件的节能服务公司实施合同能源管理项目收入暂免征收营业税|其他</option>
	    		
		<option value="0003129999" >0003129999|福利彩票机构发行销售福利彩票取得的收入不征收营业税|其他</option>
	    		
		<option value="0003129999" >0003129999|转制文化企业免征营业税|其他</option>
	    		
		<option value="0004010101" >0004010101|福利彩票机构发行销售福利彩票取得的收入，暂免征收企业所得税|《财政部 国家税务总局关于发行福利彩票有关税收问题的通知》 财税〔2002〕59号</option>
	    		
		<option value="0004011601" >0004011601|受灾地区损失严重企业免征企业所得税（汶川）|《财政部 国家税务总局关于汶川地震灾区农村信用社企业所得税有关问题的通知》 财税〔2010〕3号</option>
	    		
		<option value="0004011603" >0004011603|受灾地区农村信用社免征企业所得税（玉树）|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号第一条第3项</option>
	    		
		<option value="0004011604" >0004011604|受灾地区农村信用社免征企业所得税（舟曲）|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第一条第3项</option>
	    		
		<option value="0004011605" >0004011605|受灾地区损失严重企业免征企业所得税（芦山）|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第一条第1项</option>
	    		
		<option value="0004011608" >0004011608|受灾地区损失严重企业免征企业所得税（鲁甸）|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第一条第1项</option>
	    		
		<option value="0004011609" >0004011609|受灾地区企业取得的救灾和灾后恢复重建款项等收入免征企业所得税（芦山）|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第一条第2项</option>
	    		
		<option value="0004011610" >0004011610|受灾地区农村信用社免征企业所得税（芦山）|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第一条第3项</option>
	    		
		<option value="0004011611" >0004011611|受灾地区的促进就业企业限额减征企业所得税（芦山）|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第五条第1项</option>
	    		
		<option value="0004011612" >0004011612|受灾地区企业取得的救灾和灾后恢复重建款项等收入免征企业所得税（鲁甸）|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第一条第2项</option>
	    		
		<option value="0004011613" >0004011613|受灾地区农村信用社免征企业所得税（鲁甸）|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第一条第3项</option>
	    		
		<option value="0004011614" >0004011614|受灾地区的促进就业企业限额减征企业所得税（鲁甸）|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第五条第1项</option>
	    		
		<option value="0004011703" >0004011703|住房公积金管理中心用住房公积金购买国债、在指定的委托银行发放个人住房贷款取得的利息收入，免征企业所得税|《财政部 国家税务总局关于住房公积金管理中心有关税收政策的通知》 财税〔2000〕94号</option>
	    		
		<option value="0004011801" >0004011801|扶持自主就业退役士兵创业就业企业限额减征企业所得税|《财政部 国家税务总局 民政部关于调整完善扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2014〕42号第二条</option>
	    		
		<option value="0004011802" >0004011802|促进就业企业限额减征企业所得税|《财政部 税务总局 民政部 关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第二条</option>
	    		
		<option value="0004011802" >0004011802|扶持自主就业退役士兵创业就业企业限额减征企业所得税|《财政部 税务总局 民政部 关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第二条</option>
	    		
		<option value="0004012703" >0004012703|符合条件的生产和装配伤残人员专门用品企业免征企业所得税|《财政部 国家税务总局 民政部关于生产和装配伤残人员专门用品企业免征企业所得税的通知》 财税〔2011〕81号第一条</option>
	    		
		<option value="0004012704" >0004012704|安置残疾人员所支付的工资加计扣除|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第三十条第二款</option>
	    		
		<option value="0004012705" >0004012705|符合条件的生产和装配伤残人员专门用品企业免征企业所得税|《财政部 国家税务总局 民政部关于生产和装配伤残人员专门用品企业免征企业所得税的通知》 财税〔2016〕111号第一条</option>
	    		
		<option value="0004013603" >0004013603|促进就业企业限额减征企业所得税|《财政部 国家税务总局关于支持和促进就业有关税收政策的通知》 财税〔2010〕84号第二条</option>
	    		
		<option value="0004013607" >0004013607|促进就业企业限额减征企业所得税|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第二条</option>
	    		
		<option value="0004013607" >0004013607|支持和促进重点群体创业就业企业限额减征企业所得税（下岗失业人员再就业）|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第二条</option>
	    		
		<option value="0004013608" >0004013608|支持和促进重点群体创业就业企业限额减征企业所得税（高校毕业生就业）|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第二条</option>
	    		
		<option value="0004013609" >0004013609|支持和促进重点群体创业就业企业限额减征企业所得税（下岗失业人员再就业）|《财政部 税务总局 人力资源社会保障部 关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第二条</option>
	    		
		<option value="0004013610" >0004013610|支持和促进重点群体创业就业企业限额减征企业所得税（高校毕业生就业）|《财政部 税务总局 人力资源社会保障部 关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第二条</option>
	    		
		<option value="0004021201" >0004021201|符合条件的技术转让所得减免征收企业所得税|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十七条第四款</option>
	    		
		<option value="0004021202" >0004021202|中关村国家自主创新示范区内企业符合条件的技术转让所得减免征收企业所得税|《财政部 国家税务总局关于中关村国家自主创新示范区技术转让企业所得税试点政策的通知》 财税〔2013〕72号</option>
	    		
		<option value="0004021203" >0004021203|投资于未上市的中小高新技术企业的有限合伙制创业投资企业法人合伙人按投资额的一定比例抵扣应纳税所得额|《财政部 国家税务总局关于将国家自主创新示范区有关税收试点政策推广到全国范围实施的通知》 财税〔2015〕116号第一条</option>
	    		
		<option value="0004021901" >0004021901|非营利性科研机构从事技术开发、技术咨询、技术服务所得的收入，免征企业所得税|《财政部 国家税务总局关于非营利性科研机构税收政策的通知》 财税〔2001〕5号</option>
	    		
		<option value="0004021904" >0004021904|科技企业孵化器收入免征企业所得税,国家大学科技园收入免征企业所得税|《财政部 国家税务总局关于延长国家大学科技园和科技企业孵化器税收政策执行期限的通知》 财税〔2011〕59号</option>
	    		
		<option value="0004021907" >0004021907|线宽小于0.8微米（含）的集成电路生产企业减免企业所得税|《财政部 国家税务总局关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》 财税〔2012〕27号第一条</option>
	    		
		<option value="0004021908" >0004021908|集成电路生产企业减免征收企业所得税|《财政部 国家税务总局关于企业所得税若干优惠政策的通知》 财税〔2008〕1号第一条第二、三、六、八、九款</option>
	    		
		<option value="0004021913" >0004021913|线宽小于0.25微米的集成电路生产企业减按15%税率征收企业所得税|《财政部 国家税务总局关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》 财税〔2012〕27号第二条</option>
	    		
		<option value="0004021914" >0004021914|新办集成电路设计企业减免企业所得税|《财政部 国家税务总局关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》 财税〔2012〕27号第三条</option>
	    		
		<option value="0004021915" >0004021915|国家规划布局内重点软件企业可减按10%的税率征收企业所得税|《财政部 国家税务总局关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》 财税〔2012〕27号第四条</option>
	    		
		<option value="0004021916" >0004021916|投资额超过80亿元的集成电路生产企业减按15%税率征收企业所得税|《财政部 国家税务总局关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》 财税〔2012〕27号第二条</option>
	    		
		<option value="0004021917" >0004021917|线宽小于0.25微米的集成电路生产企业减免企业所得税|《财政部 国家税务总局关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》 财税〔2012〕27号第二条</option>
	    		
		<option value="0004021918" >0004021918|投资额超过80亿元的集成电路生产企业减免企业所得税|《财政部 国家税务总局关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》 财税〔2012〕27号第二条</option>
	    		
		<option value="0004021919" >0004021919|符合条件的软件企业减免企业所得税|《财政部 国家税务总局关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》 财税〔2012〕27号第三条</option>
	    		
		<option value="0004021920" >0004021920|国家规划布局内集成电路设计企业可减按10%的税率征收企业所得税|《财政部 国家税务总局关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》 财税〔2012〕27号第四条</option>
	    		
		<option value="0004021921" >0004021921|符合条件的集成电路封装、测试企业定期减免企业所得税|《财政部 国家税务总局 发展改革委 工业和信息化部关于进一步鼓励集成电路产业发展企业所得税政策的通知》 财税〔2015〕6 号第一条</option>
	    		
		<option value="0004021922" >0004021922|符合条件的集成电路关键专用材料生产企业、集成电路专用设备生产企业定期减免企业所得税|《财政部 国家税务总局 发展改革委 工业和信息化部关于进一步鼓励集成电路产业发展企业所得税政策的通知》 财税〔2015〕6 号第一条</option>
	    		
		<option value="0004021923" >0004021923|科技型中小企业开发新技术、新产品、新工艺发生的研究开发费用加计扣除|《财政部 税务总局 科技部关于提高科技型中小企业研究开发费用税前加计扣除比例的通知》 财税〔2017〕34号第一条</option>
	    		
		<option value="0004021924" >0004021924|符合条件的非营利组织（科技企业孵化器）的收入免征企业所得税|《财政部 国家税务总局关于科技企业孵化器税收政策的通知》 财税〔2016〕89号第二条</option>
	    		
		<option value="0004021925" >0004021925|符合条件的非营利组织（国家大学科技园）的收入免征企业所得税|《财政部 国家税务总局关于国家大学科技园税收政策的通知》 财税〔2016〕98号第二条</option>
	    		
		<option value="0004021926" >0004021926|企业为获得创新性、创意性、突破性的产品进行创意设计活动发生的相关费用加计扣除|《财政部 税务总局 科技部关于完善研究开发费用税前加计扣除政策的通知》 财税〔2015〕119号第二条第四款</option>
	    		
		<option value="0004021927" >0004021927|线宽小于130纳米的集成电路生产企业减免企业所得税|《财政部 税务总局 国家发展改革委 工业和信息化部关于集成电路生产企业有关企业所得税政策问题的通知》 财税〔2018〕27号第一条</option>
	    		
		<option value="0004021928" >0004021928|线宽小于65纳米或投资额超过150亿元的集成电路生产企业减免企业所得税|《财政部 税务总局 国家发展改革委 工业和信息化部关于集成电路生产企业有关企业所得税政策问题的通知》 财税〔2018〕27号第二条</option>
	    		
		<option value="0004021929" >0004021929|线宽小于130纳米的集成电路生产项目的所得减免企业所得税|《财政部 税务总局 国家发展改革委 工业和信息化部关于集成电路生产企业有关企业所得税政策问题的通知》 财税〔2018〕27号第一条</option>
	    		
		<option value="0004021930" >0004021930|线宽小于65纳米或投资额超过150亿元的集成电路生产项目的所得减免企业所得税|《财政部 税务总局 国家发展改革委 工业和信息化部关于集成电路生产企业有关企业所得税政策问题的通知》 财税〔2018〕27号第二条</option>
	    		
		<option value="0004022001" >0004022001|其他|《财政部 国家税务总局关于延长转制科研机构有关税收政策执行期限的通知》 财税〔2005〕14号</option>
	    		
		<option value="0004023001" >0004023001|技术先进型服务企业减按15%的税率征收企业所得税|《财政部 国家税务总局关于技术先进型服务企业有关企业所得税政策问题的通知》 财税〔2010〕65号第一条第一款</option>
	    		
		<option value="0004023004" >0004023004|服务贸易创新发展试点地区符合条件的技术先进型服务企业减按15%的税率征收企业所得税|《财政部 国家税务总局 商务部 科技部 国家发展改革委关于在服务贸易创新发展试点地区推广技术先进型服务企业所得税优惠政策的通知》 财税〔2016〕122号全文</option>
	    		
		<option value="0004023005" >0004023005|技术先进型服务企业减按15%的税率征收企业所得税|《财政部 税务总局 商务部 科技部 国家发展改革委关于将技术先进型服务企业所得税政策推广至全国实施的通知》 财税〔2017〕79号第一条第1项</option>
	    		
		<option value="0004023006" >0004023006|服务贸易类技术先进型服务企业减按15%的税率征收企业所得税|《财政部 税务总局 商务部 科技部 国家发展改革委关于将服务贸易创新发展试点地区技术先进型服务企业所得税政策推广至全国实施的通知》 财税〔2018〕44号</option>
	    		
		<option value="0004024401" >0004024401|开发新技术、新产品、新工艺发生的研究开发费用加计扣除|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第三十条第一款</option>
	    		
		<option value="0004024404" >0004024404|经济特区和上海浦东新区新设立的高新技术企业在区内取得的所得定期减免征收企业所得税|《国务院关于经济特区和上海浦东新区新设立高新技术企业实行过渡性税收优惠的通知》 国发〔2007〕40号第二条</option>
	    		
		<option value="0004024501" >0004024501|国家需要重点扶持的高新技术企业减按15％的税率征收企业所得税|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十八条第二款</option>
	    		
		<option value="0004024502" >0004024502|苏州工业园区有限合伙制创业投资企业法人合伙人按投资额的一定比例抵扣应纳税所得额|《财政部 国家税务总局关于苏州工业园区有限合伙制创业投资企业法人合伙人企业所得税试点政策的通知》 财税〔2012〕67号第一条</option>
	    		
		<option value="0004024508" >0004024508|中关村国家自主创新示范区有限合伙制创业投资企业法人合伙人按投资额的一定比例抵扣应纳税所得额|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第三十一条</option>
	    		
		<option value="0004024508" >0004024508|投资于未上市的中小高新技术企业的创业投资企业按投资额的一定比例抵扣应纳税所得额|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第三十一条</option>
	    		
		<option value="0004024509" >0004024509|投资于未上市的中小高新技术企业的创业投资企业按投资额的一定比例抵扣应纳税所得额|《财政部 税务总局关于创业投资企业和天使投资个人有关税收试点政策的通知》 财税〔2017〕38号第一条第(一)款</option>
	    		
		<option value="0004024509" >0004024509|投资于种子期、初创期科技型企业的创业投资企业按投资额的一定比例抵扣应纳税所得额|《财政部 税务总局关于创业投资企业和天使投资个人有关税收试点政策的通知》 财税〔2017〕38号第一条第(一)款</option>
	    		
		<option value="0004024510" >0004024510|投资于种子期、初创期科技型企业的有限合伙制创业投资企业法人合伙人按投资额的一定比例抵扣应纳税所得额|《财政部 税务总局关于创业投资企业和天使投资个人有关税收试点政策的通知》 财税〔2017〕38号第一条第(二)款第1项</option>
	    		
		<option value="0004024511" >0004024511|投资于种子期、初创期科技型企业的创业投资企业按投资额的一定比例抵扣应纳税所得额|《财政部 税务总局关于创业投资企业和天使投资个人有关税收政策的通知》 财税〔2018〕55号第一条第(一)款</option>
	    		
		<option value="0004024512" >0004024512|投资于种子期、初创期科技型企业的有限合伙制创业投资企业法人合伙人按投资额的一定比例抵扣应纳税所得额|《财政部 税务总局关于创业投资企业和天使投资个人有关税收政策的通知》 财税〔2018〕55号第一条第(二)款第1项</option>
	    		
		<option value="0004032101" >0004032101|海峡两岸海上直航免征企业所得税|《财政部 国家税务总局关于海峡两岸海上直航营业税和企业所得税政策的通知》 财税〔2009〕4号第二条</option>
	    		
		<option value="0004032102" >0004032102|海峡两岸空中直航免征企业所得税|《财政部 国家税务总局关于海峡两岸空中直航营业税和企业所得税政策的通知》 财税〔2010〕63号第二条</option>
	    		
		<option value="0004032103" >0004032103|从事福建沿海与金门、马祖、澎湖海上直航业务取得的运输收入免征企业所得税|《财政部 国家税务总局关于福建沿海与金门、马祖、澎湖海上直航业务有关税收政策的通知》 财税〔2007〕91号</option>
	    		
		<option value="0004033302" >0004033302|设在西部地区的鼓励类产业企业减按15%的税率征收企业所得税|《财政部 海关总署 国家税务总局关于深入实施西部大开发战略有关税收政策问题的通知》 财税〔2011〕58号第二条</option>
	    		
		<option value="0004033303" >0004033303|新疆喀什、霍尔果斯特殊经济开发区新办企业定期免征企业所得税|《财政部 国家税务总局关于新疆喀什霍尔果斯两个特殊经济开发区企业所得税优惠政策的通知》 财税〔2011〕112号第一条</option>
	    		
		<option value="0004033304" >0004033304|新疆困难地区新办企业定期减免企业所得税|《财政部 国家税务总局关于新疆困难地区新办企业所得税优惠政策的通知》 财税〔2011〕53号第一条</option>
	    		
		<option value="0004033305" >0004033305|民族自治地方的自治机关对本民族自治地方的企业应缴纳的企业所得税中属于地方分享的部分减征或免征|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十九条</option>
	    		
		<option value="0004039901" >0004039901|广东横琴、福建平潭、深圳前海等地区的鼓励类产业企业减按15%税率征收企业所得税|《财政部 国家税务总局关于广东横琴新区福建平潭综合实验区 深圳前海深港现代化服务业合作区企业所得税优惠政策及优惠目录的通知》 财税〔2014〕26号第一条</option>
	    		
		<option value="0004049904" >0004049904|符合条件的小型微利企业减按20%的税率征收企业所得税（减低税率）|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十八条第一款</option>
	    		
		<option value="0004049907" >0004049907|符合条件的小型微利企业减免企业所得税（20万元及以下）|《财政部 国家税务总局关于小型微利企业所得税优惠政策的通知》 财税〔2015〕34号第一条</option>
	    		
		<option value="0004049908" >0004049908|符合条件的小型微利企业减免企业所得税（20万元至30万元）|《财政部 国家税务总局关于进一步扩大小型微利企业所得税优惠政策范围的通知》 财税〔2015〕99号第一条</option>
	    		
		<option value="0004049909" >0004049909|符合条件的小型微利企业减半征收企业所得税（20万元及以下）|《财政部 国家税务总局关于扩大小型微利企业所得税优惠政策范围的通知》 财税〔2017〕43号</option>
	    		
		<option value="0004049910" >0004049910|符合条件的小型微利企业减半征收企业所得税（20万元至30万元）|《财政部 国家税务总局关于扩大小型微利企业所得税优惠政策范围的通知》 财税〔2017〕43号</option>
	    		
		<option value="0004049911" >0004049911|符合条件的小型微利企业减半征收企业所得税（30万元至50万元）|《财政部 国家税务总局关于扩大小型微利企业所得税优惠政策范围的通知》 财税〔2017〕43号</option>
	    		
		<option value="0004049912" >0004049912|符合条件的小型微利企业减免企业所得税（20万元及以下）|《财政部 税务总局关于进一步扩大小型微利企业所得税优惠政策范围的通知》 财税〔2018〕77号</option>
	    		
		<option value="0004049913" >0004049913|符合条件的小型微利企业减免企业所得税（20万元至30万元）|《财政部 税务总局关于进一步扩大小型微利企业所得税优惠政策范围的通知》 财税〔2018〕77号</option>
	    		
		<option value="0004049914" >0004049914|符合条件的小型微利企业减免企业所得税（30万元至50万元）|《财政部 税务总局关于进一步扩大小型微利企业所得税优惠政策范围的通知》 财税〔2018〕77号</option>
	    		
		<option value="0004049915" >0004049915|符合条件的小型微利企业减免企业所得税（50万元至100万元）|《财政部 税务总局关于进一步扩大小型微利企业所得税优惠政策范围的通知》 财税〔2018〕77号</option>
	    		
		<option value="0004061002" >0004061002|中国清洁发展机制基金取得的收入免征企业所得税|《财政部 国家税务总局关于中国清洁发展机制基金及清洁发展机制项目实施企业有关企业所得税政策问题的通知》 财税〔2009〕30号第一条</option>
	    		
		<option value="0004061004" >0004061004|从事符合条件的环境保护、节能节水项目的所得定期减免企业所得税|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十七条第三款</option>
	    		
		<option value="0004061008" >0004061008|实施清洁发展机制项目的所得定期减免企业所得税|《财政部 国家税务总局关于中国清洁发展机制基金及清洁发展机制项目实施企业有关企业所得税政策问题的通知》 财税〔2009〕30号第二条第二款</option>
	    		
		<option value="0004061009" >0004061009|购置用于环境保护、节能节水、安全生产等专用设备的投资额按一定比例实行税额抵免|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第三十四条</option>
	    		
		<option value="0004064001" >0004064001|符合条件的节能服务公司实施合同能源管理项目的所得定期减免企业所得税|《财政部 国家税务总局关于促进节能服务产业发展增值税营业税和企业所得税政策问题的通知》 财税〔2010〕110号第二条第（一）项</option>
	    		
		<option value="0004064005" >0004064005|综合利用资源生产产品取得的收入在计算应纳税所得额时减计收入|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第三十三条</option>
	    		
		<option value="0004081501" >0004081501|中国保险保障基金有限责任公司取得的保险保障基金等收入免征企业所得税|《财政部 国家税务总局关于保险保障基金有关税收问题的通知》 财税〔2010〕77号</option>
	    		
		<option value="0004081502" >0004081502|其他|《财政部 国家税务总局关于股权分置试点改革有关税收政策问题的通知》 财税〔2005〕103号</option>
	    		
		<option value="0004081503" >0004081503|中国期货保证金监控中心有限责任公司取得的银行存款利息等收入暂免征收企业所得税|《财政部 国家税务总局关于期货投资者保障基金有关税收问题的通知》 财税〔2009〕68号</option>
	    		
		<option value="0004081504" >0004081504|中国期货保证金监控中心有限责任公司取得的银行存款利息等收入暂免征收企业所得税|《财政部 国家税务总局关于期货投资者保障基金有关税收优惠政策继续执行的通知》 财税〔2011〕69号</option>
	    		
		<option value="0004081507" >0004081507|取得的地方政府债券利息收入免征企业所得税|《财政部 国家税务总局关于地方政府债券利息免征所得税问题的通知》 财税〔2013〕5号第一条</option>
	    		
		<option value="0004081508" >0004081508|非居民企业减按10%税率征收企业所得税|《中华人民共和国企业所得税法实施条例》 中华人民共和国国务院令 第512号第九十一条第一款</option>
	    		
		<option value="0004081509" >0004081509|中国期货保证金监控中心有限责任公司取得的银行存款利息等收入暂免征收企业所得税|《财政部 国家税务总局关于期货投资者保障基金有关税收政策继续执行的通知》 财税〔2013〕80号第二条</option>
	    		
		<option value="0004081510" >0004081510|中国保险保障基金有限责任公司取得的保险保障基金等收入免征企业所得税|《财政部 国家税务总局关于保险保障基金有关税收政策继续执行的通知》 财税〔2013〕81号第一条</option>
	    		
		<option value="0004081511" >0004081511|外国政府利息免征企业所得税|《中华人民共和国企业所得税法实施条例》 中华人民共和国国务院令 第512号第九十一条第二款第（一）项</option>
	    		
		<option value="0004081512" >0004081512|国际金融组织利息免征企业所得税|《中华人民共和国企业所得税法实施条例》 中华人民共和国国务院令 第512号第九十一条第二款第（二）项</option>
	    		
		<option value="0004081513" >0004081513|QFII和RQFII股票转让免征企业所得税|《财政部 国家税务总局 证监会关于QFII和RQFII取得中国境内的股票等权益性投资资产转让所得暂免征收企业所得税问题的通知》 财税〔2014〕79号</option>
	    		
		<option value="0004081514" >0004081514|沪港通A股转让免征企业所得税|《财政部 国家税务总局 证监会关于沪港股票市场交易互联互通机制试点有关税收政策的通知》 财税〔2014〕81号第二条第1项</option>
	    		
		<option value="0004081516" >0004081516|投资者从证券投资基金分配中取得的收入暂不征收企业所得税|《财政部 国家税务总局关于企业所得税若干优惠政策的通知》 财税〔2008〕1号第二条第二款</option>
	    		
		<option value="0004081518" >0004081518|内地居民企业通过沪港通投资且连续持有H股满12个月取得的股息红利所得免征企业所得税|《财政部 国家税务总局 证监会关于沪港股票市场交易互联互通机制试点有关税收政策的通知》 财税〔2014〕81号第一条第四项</option>
	    		
		<option value="0004081519" >0004081519|中国保险保障基金有限责任公司取得的保险保障基金等收入免征企业所得税|《财政部 国家税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2016〕10号第一条</option>
	    		
		<option value="0004081520" >0004081520|内地居民企业通过沪港通投资且连续持有H股满12个月取得的股息红利所得免征企业所得税|《财政部 国家税务总局 证监会关于深港股票市场交易互联互通机制试点有关税收政策的通知》 财税〔2016〕127号第一条第四项</option>
	    		
		<option value="0004081521" >0004081521|境外投资者以分配利润直接投资暂不征收预提所得税|《财政部 税务总局 国家发展改革委 商务部关于境外投资者以分配利润直接投资暂不征收预提所得税政策问题的通知》 财税〔2017〕88号第一条</option>
	    		
		<option value="0004081522" >0004081522|香港市场投资者（包括企业和个人）通过深港通投资深交所上市A股取得的转让差价所得，暂免征企业所得税|《财政部 国家税务总局 证监会关于深港股票市场交易互联互通机制试点有关税收政策的通知》 财税〔2016〕127号第二条第一款</option>
	    		
		<option value="0004081523" >0004081523|中国保险保障基金有限责任公司取得的保险保障基金等收入免征企业所得税|《财政部 税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2018〕41号第一条</option>
	    		
		<option value="0004083904" >0004083904|国债利息收入免征企业所得税|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十六条第（一）项</option>
	    		
		<option value="0004083906" >0004083906|设立机构、场所的非居民企业从居民企业取得与该机构、场所有实际联系的股息、红利免税|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十六条第(三)项</option>
	    		
		<option value="0004083907" >0004083907|符合条件的居民企业之间的股息、红利等权益性投资收益免征企业所得税|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十六条第二款</option>
	    		
		<option value="0004091501" >0004091501|金融、保险等机构取得的涉农贷款利息收入、保费收入在计算应纳税所得额时减计收入|《财政部 国家税务总局关于农村金融有关税收政策的通知》 财税〔2010〕4号第四条</option>
	    		
		<option value="0004091503" >0004091503|金融、保险等机构取得的涉农贷款利息收入、保费收入在计算应纳税所得额时减计收入|《财政部 国家税务总局关于中国扶贫基金会所属小额贷款公司享受有关税收优惠政策的通知》 财税〔2012〕33号</option>
	    		
		<option value="0004091505" >0004091505|金融、保险等机构取得的涉农贷款利息收入、保费收入在计算应纳税所得额时减计收入|《财政部 国家税务总局关于延续并完善支持农村金融发展有关税收政策的通知》 财税〔2014〕102号第二、三条</option>
	    		
		<option value="0004091507" >0004091507|金融、保险等机构取得的涉农贷款利息收入、保费收入在计算应纳税所得额时减计收入|《财政部 税务总局关于延续支持农村金融发展有关税收政策的通知》 财税〔2017〕44号第二条</option>
	    		
		<option value="0004091508" >0004091508|小额贷款公司取得的农户小额贷款利息收入在计算应纳税所得额时减计收入|《财政部 税务总局关于小额贷款公司有关税收政策的通知》 财税〔2017〕48号第二条</option>
	    		
		<option value="0004091509" >0004091509|保险机构取得的涉农保费收入在计算应纳税所得额时减计收入|《财政部 税务总局关于延续支持农村金融发展有关税收政策的通知》 财税〔2017〕44号第三条</option>
	    		
		<option value="0004099905" >0004099905|从事农、林、牧、渔业项目的所得减免征收企业所得税|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十七条第（一）项</option>
	    		
		<option value="0004102905" >0004102905|北京冬奥组委、北京冬奥会测试赛赛事组委会免征企业所得税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（十一）款</option>
	    		
		<option value="0004102906" >0004102906|对国际奥委会取得的与北京2022年冬奥会有关的收入免征企业所得税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（一）款</option>
	    		
		<option value="0004102907" >0004102907|中国奥委会取得的由北京冬奥组委支付的收入免征企业所得税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（四）款</option>
	    		
		<option value="0004102908" >0004102908|对国际残奥委会取得的与北京2022年冬残奥会有关的收入免征企业所得税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（五）款</option>
	    		
		<option value="0004102909" >0004102909|中国残奥委会取得的由北京冬奥组委分期支付的收入免征企业所得税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（六）款</option>
	    		
		<option value="0004103201" >0004103201|其他|《财政部 国家税务总局关于2010年上海世博会有关税收政策问题的通知》 财税〔2005〕180号第一条第四款</option>
	    		
		<option value="0004103204" >0004103204|新办文化企业免征企业所得税|《财政部 海关总署 国家税务总局关于支持文化企业发展若干税收政策问题的通知》 财税〔2009〕31号</option>
	    		
		<option value="0004103206" >0004103206|动漫企业自主开发、生产动漫产品定期减免征收企业所得税|《财政部 国家税务总局关于扶持动漫产业发展有关税收政策问题的通知》 财税〔2009〕65号第二条</option>
	    		
		<option value="0004103214" >0004103214|经营性文化事业单位转制为企业的免征企业所得税|《财政部 国家税务总局 中宣部关于继续实施文化体制改革中经营性文化事业单位转制为企业若干税收政策的通知》 财税〔2014〕84号第一条第（一）（四）项</option>
	    		
		<option value="0004120601" >0004120601|符合条件的非营利组织的收入免征企业所得税|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十六条第（四）项</option>
	    		
		<option value="0004121101" >0004121101|从事国家重点扶持的公共基础设施项目投资经营的所得定期减免企业所得税|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号第二十七条第二款</option>
	    		
		<option value="0004121302" >0004121302|取得的中国铁路建设债券利息收入减半征收企业所得税|《财政部 国家税务总局关于2014 2015年铁路建设债券利息收入企业所得税政策的通知》 财税〔2014〕2号第一条</option>
	    		
		<option value="0004121302" >0004121302|取得铁路债券利息收入减半征收企业所得税|《财政部 国家税务总局关于2014 2015年铁路建设债券利息收入企业所得税政策的通知》 财税〔2014〕2号第一条</option>
	    		
		<option value="0004129906" >0004129906|其他|《财政部 国家税务总局关于中非发展基金有限公司有关企业所得税政策问题的通知》 财税〔2009〕36号</option>
	    		
		<option value="0004129910" >0004129910|其他|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号</option>
	    		
		<option value="0004129913" >0004129913|美国ABS船级社，其在中国境内提供船检服务取得的收入免征企业所得税|《财政部 国家税务总局关于美国船级社继续享受免税待遇的通知》 财税字〔1998〕35号</option>
	    		
		<option value="0004129920" >0004129920|固定资产或购入软件等可以加速折旧或摊销|《中华人民共和国企业所得税法》 中华人民共和国主席令第63号</option>
	    		
		<option value="0004129921" >0004129921|固定资产加速折旧或一次性扣除(2014年新政）|《财政部 国家税务总局关于完善固定资产加速折旧企业所得税政策的通知》 财税〔2014〕75号第一、二、三条</option>
	    		
		<option value="0004129922" >0004129922|分配08年以前股息红利免征企业所得税|《财政部 国家税务总局关于企业所得税若干优惠政策的通知》 财税〔2008〕1号第四条</option>
	    		
		<option value="0004129923" >0004129923|固定资产加速折旧或一次性扣除(2015年新政）|《财政部 国家税务总局关于进一步完善固定资产加速折旧企业所得税政策的通知》 财税〔2015〕106号第一、二条</option>
	    		
		<option value="0004129924" >0004129924|享受过渡期税收优惠定期减免企业所得税|《国务院关于实施企业所得税过渡优惠政策的通知》 国发〔2007〕39号</option>
	    		
		<option value="0004129925" >0004129925|中央电视台的广告费和有线电视费收入免征企业所得税|《财政部 国家税务总局关于中央电视台广告费和有线电视费收入企业所得税政策问题的通知》 财税〔2016〕80号</option>
	    		
		<option value="0004129926" >0004129926|固定资产加速折旧或一次性扣除|《财政部 税务总局 国家发展改革委 工业和信息化部关于设备 器具扣除有关企业所得税政策》 财税〔2018〕54号</option>
	    		
		<option value="0004129999" >0004129999|其他|其他</option>
	    		
		<option value="0004129999" >0004129999|科技企业孵化器收入免征企业所得税,国家大学科技园收入免征企业所得税|其他</option>
	    		
		<option value="0004129999" >0004129999|证券投资基金从证券市场中取得的收入暂不征收企业所得税|其他</option>
	    		
		<option value="0004129999" >0004129999|证券投资基金管理人运用基金买卖股票、债券的差价收入暂不征收企业所得税|其他</option>
	    		
		<option value="0004139901" >0004139901|税收协定和其他类协定等减免其他各类所得企业所得税|我国对外签订的避免双重征税协定及内地对香港和澳门签订的避免双重征税安排，含税收条款的国际运输协定等其他类协定、免税协议、换函等税收协定中常设机构和营业利润、海运、空运和陆运、其他所得条款，国际运输协定的税收条款等</option>
	    		
		<option value="0005011601" >0005011601|其他地区地震受灾减免个人所得税|《财政部 国家税务总局关于认真落实抗震救灾及灾后重建税收政策问题的通知》 财税〔2008〕62号第二条</option>
	    		
		<option value="0005011603" >0005011603|玉树地震受灾减免个人所得税|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号第二条、第四条第2项、第五条第2项</option>
	    		
		<option value="0005011604" >0005011604|玉树地震受灾减免个人所得税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第二条</option>
	    		
		<option value="0005011604" >0005011604|舟曲地震受灾减免个人所得税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第二条</option>
	    		
		<option value="0005011605" >0005011605|其他自然灾害受灾减免个人所得税|《中华人民共和国个人所得税法》 中华人民共和国主席令第48号第五条第二项</option>
	    		
		<option value="0005011606" >0005011606|芦山地震受灾减免个人所得税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第五条第2项</option>
	    		
		<option value="0005011607" >0005011607|鲁甸地震受灾减免个人所得税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第二条、第五条第2项</option>
	    		
		<option value="0005011709" >0005011709|个人转让5年以上唯一住房免征个人所得税|《财政部 国家税务总局关于个人所得税若干政策问题的通知》 财税字〔1994〕20号第二条第（六）项</option>
	    		
		<option value="0005011801" >0005011801|随军家属从事个体经营免征个人所得税|《财政部 国家税务总局关于随军家属就业有关税收政策的通知》 财税〔2000〕84号第二条</option>
	    		
		<option value="0005011802" >0005011802|军转干部从事个体经营免征个人所得税|《财政部 国家税务总局关于自主择业的军队转业干部有关税收政策问题的通知》 财税〔2003〕26号第一条</option>
	    		
		<option value="0005011803" >0005011803|退役士兵从事个体经营减免个人所得税|《财政部 国家税务总局 民政部关于调整完善扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2014〕42号第一条</option>
	    		
		<option value="0005011804" >0005011804|退役士兵从事个体经营减免个人所得税|《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第一条</option>
	    		
		<option value="0005012710" >0005012710|残疾、孤老、烈属减征个人所得税|《中华人民共和国个人所得税法》 中华人民共和国主席令第48号第五条第一项</option>
	    		
		<option value="0005013606" >0005013606|失业人员从事个体经营减免个人所得税|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第一条</option>
	    		
		<option value="0005013608" >0005013608|高校毕业生从事个体经营减免个人所得税|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第一条</option>
	    		
		<option value="0005013609" >0005013609|低保及零就业家庭从事个体经营减免个人所得税|《财政部 国家税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2014〕39号第一条</option>
	    		
		<option value="0005013610" >0005013610|失业人员从事个体经营减免个人所得税|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0005013611" >0005013611|低保及零就业家庭从事个体经营减免个人所得税|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0005013612" >0005013612|高校毕业生从事个体经营减免个人所得税|《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条</option>
	    		
		<option value="0005099901" >0005099901|取消农业税从事四业所得暂免征收个人所得税|《财政部 国家税务总局关于农村税费改革试点地区有关个人所得税问题的通知》 财税〔2004〕30号第一条</option>
	    		
		<option value="0005129908" >0005129908|符合条件的房屋赠与免征个人所得税|《财政部 国家税务总局关于个人无偿受赠房屋有关个人所得税问题的通知》 财税〔2009〕78号</option>
	    		
		<option value="0005129999" >0005129999|三板市场股息红利差别化征税|其他</option>
	    		
		<option value="0005129999" >0005129999|上市公司股息红利差别化征税|其他</option>
	    		
		<option value="0005129999" >0005129999|个人出租房屋减征个人所得税|其他</option>
	    		
		<option value="0005129999" >0005129999|举报、协查违法犯罪奖金免税|其他</option>
	    		
		<option value="0005129999" >0005129999|低保家庭领取住房租赁补贴免税|其他</option>
	    		
		<option value="0005129999" >0005129999|住房公积金、医疗保险金、基本养老保险金、失业保险基金个人账户存款利息所得免征个人所得税|其他</option>
	    		
		<option value="0005129999" >0005129999|体彩中奖1万元以下免税|其他</option>
	    		
		<option value="0005129999" >0005129999|保险赔款免税|其他</option>
	    		
		<option value="0005129999" >0005129999|储蓄存款利息免税|其他</option>
	    		
		<option value="0005129999" >0005129999|其他|其他</option>
	    		
		<option value="0005129999" >0005129999|内地个人投资者通过沪港通投资香港联交所上市股票取得的转让差价所得，免征收个人所得税|其他</option>
	    		
		<option value="0005129999" >0005129999|发票中奖暂免征收个人所得税|其他</option>
	    		
		<option value="0005129999" >0005129999|地方政府债券利息免税|其他</option>
	    		
		<option value="0005129999" >0005129999|外籍个人出差补贴免税|其他</option>
	    		
		<option value="0005129999" >0005129999|外籍个人取得外商投资企业股息红利免征个人所得税|其他</option>
	    		
		<option value="0005129999" >0005129999|外籍个人探亲费、语言训练费、子女教育费免税|其他</option>
	    		
		<option value="0005129999" >0005129999|外籍个人生活费用免税|其他</option>
	    		
		<option value="0005129999" >0005129999|奖学金免税|其他</option>
	    		
		<option value="0005129999" >0005129999|安家费、退职费、退休工资、离休工资、离休生活补助费免税|其他</option>
	    		
		<option value="0005129999" >0005129999|工伤保险免税|其他</option>
	    		
		<option value="0005129999" >0005129999|平潭台湾居民免税|其他</option>
	    		
		<option value="0005129999" >0005129999|拆迁补偿款免税|其他</option>
	    		
		<option value="0005129999" >0005129999|横琴、香港、澳门居民免税|其他</option>
	    		
		<option value="0005129999" >0005129999|生育津贴和生育医疗费免税|其他</option>
	    		
		<option value="0005129999" >0005129999|省级、部委、军级奖金免征个人所得税|其他</option>
	    		
		<option value="0005129999" >0005129999|社会福利有奖募捐奖券中奖所得免税|其他</option>
	    		
		<option value="0005129999" >0005129999|符合条件的外交人员免征个人所得税|其他</option>
	    		
		<option value="0005129999" >0005129999|符合条件的外籍专家工薪免征个人所得税|其他</option>
	    		
		<option value="0005129999" >0005129999|符合条件的津补贴免征个人所得税|其他</option>
	    		
		<option value="0005129999" >0005129999|股权分置改革非流通股股东向流通股股东支付对价免税|其他</option>
	    		
		<option value="0005129999" >0005129999|见义勇为奖金免税|其他</option>
	    		
		<option value="0005129999" >0005129999|解除劳动合同当地工资3倍以内免税|其他</option>
	    		
		<option value="0005129999" >0005129999|证券资金利息免税|其他</option>
	    		
		<option value="0005129999" >0005129999|转让上市公司股票免税|其他</option>
	    		
		<option value="0005129999" >0005129999|高级专家延长离退休期间工薪免征个人所得税|其他</option>
	    		
		<option value="0005139901" >0005139901|税收协定和其他类协定等减免其他各类所得个人所得税|我国对外签订的避免双重征税协定及内地对香港和澳门签订的避免双重征税安排，含税收条款的其他类协定等税收协定中常设机构和营业利润、独立个人劳务、受雇所得（非独立个人劳务）、演艺人员和运动员、退休金、政府服务、教师和研究人员、学生、其他所得等条款，其他类协定的税收条款等</option>
	    		
		<option value="0006011601" >0006011601|地震灾害减免资源税|《财政部 国家税务总局关于认真落实抗震救灾及灾后重建税收政策问题的通知》 财税〔2008〕62号第五条</option>
	    		
		<option value="0006033301" >0006033301|青藏铁路自采自用砂石等免征资源税|《财政部 国家税务总局关于青藏铁路公司运营期间有关税收等政策问题的通知》 财税〔2007〕11号第三条</option>
	    		
		<option value="0006033302" >0006033302|油田范围内运输稠油过程中用于加热的原油、天然气免征资源税|《财政部 国家税务总局关于印发新疆原油天然气资源税改革若干问题的规定的通知》 财税〔2010〕54号</option>
	    		
		<option value="0006033303" >0006033303|油田范围内运输稠油过程中用于加热的原油、天然气免征资源税|《财政部 国家税务总局关于西部地区原油天然气资源税改革若干问题的规定的通知》 财税〔2010〕112号</option>
	    		
		<option value="0006064001" >0006064001|冶金矿山铁矿石资源税减征|《财政部 国家税务总局关于调整钼矿石等品目资源税政策的通知》 财税〔2005〕168号第二条</option>
	    		
		<option value="0006064005" >0006064005|铁矿石减征资源税|《财政部 国家税务总局关于调整锡矿石等资源税适用税率标准的通知》 财税〔2012〕2号第五条</option>
	    		
		<option value="0006064006" >0006064006|衰竭期煤矿减征资源税|《财政部 国家税务总局关于实施煤炭资源税改革的通知》 财税〔2014〕72号第四条第（一）款</option>
	    		
		<option value="0006064007" >0006064007|充填开采煤炭减征资源税|《财政部 国家税务总局关于实施煤炭资源税改革的通知》 财税〔2014〕72号第四条第（二）款</option>
	    		
		<option value="0006064008" >0006064008|铁矿石资源税由减按规定税额标准的80%征收调整为减按规定税额标准的40%征收|《财政部 国家税务总局关于调整铁矿石资源税征收比例的通知》 财税〔2015〕46号第一条</option>
	    		
		<option value="0006064009" >0006064009|充填开采“三下”矿产减征资源税|《财政部 国家税务总局关于资源税改革具体政策问题的通知》 财税〔2016〕54号第三条第（一）款</option>
	    		
		<option value="0006064010" >0006064010|符合条件的衰竭期矿山减征资源税|《财政部 国家税务总局关于资源税改革具体政策问题的通知》 财税〔2016〕54号第三条第（二）款</option>
	    		
		<option value="0006102901" >0006102901|对用于北京2022年冬奥会场馆的水资源免征水资源税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（八）款</option>
	    		
		<option value="0006129901" >0006129901|油田范围内运输稠油过程中用于加热的原油、天然气免征资源税|《财政部 国家税务总局关于原油天然气资源税改革有关问题的通知》 财税〔2011〕114号</option>
	    		
		<option value="0006129902" >0006129902|事故灾害等原因减免资源税|《国务院关于修改<中华人民共和国资源税暂行条例>的决定》 中华人民共和国国务院令第605号第七条第（二）款、第七条第（三）款</option>
	    		
		<option value="0006129903" >0006129903|意外事故或者自然灾害等原因遭受重大损失减免资源税|《中华人民共和国资源税暂行条例》 中华人民共和国国务院令第139号</option>
	    		
		<option value="0006129904" >0006129904|用于运输稠油加热的油气免征资源税|《财政部 国家税务总局关于调整原油、天然气资源税有关政策的通知》 财税〔2014〕73号第二条第（一）款</option>
	    		
		<option value="0006129905" >0006129905|加热修井用油免征资源税|《国务院关于修改<中华人民共和国资源税暂行条例>的决定》 中华人民共和国国务院令第605号第七条第（一）款</option>
	    		
		<option value="0006129906" >0006129906|陆上油气田资源税综合性减征|《财政部 国家税务总局关于调整原油、天然气资源税有关政策的通知》 财税〔2014〕73号第二条第（二）、（三）款，以及第二条第（四）款第一部分</option>
	    		
		<option value="0006129909" >0006129909|深水油气田资源税减征|《财政部 国家税务总局关于调整原油、天然气资源税有关政策的通知》 财税〔2014〕73号第二条第（五）款</option>
	    		
		<option value="0006129911" >0006129911|海上低丰度油气田资源税减征|《财政部 国家税务总局关于调整原油、天然气资源税有关政策的通知》 财税〔2014〕73号第二条第（四）款第二部分</option>
	    		
		<option value="0006129912" >0006129912|页岩气减征30%资源税|《财政部 税务总局关于对页岩气减征资源税的通知》 财税〔2018〕26号</option>
	    		
		<option value="0006129999" >0006129999|其他|其他</option>
	    		
		<option value="0006129999" >0006129999|塘沽盐场减征资源税|其他</option>
	    		
		<option value="0007011602" >0007011602|受灾地区促进就业企业限额减免城市维护建设税|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号</option>
	    		
		<option value="0007011603" >0007011603|受灾地区促进就业企业限额减免城市维护建设税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号</option>
	    		
		<option value="0007013601" >0007013601|扶持失业人员减免城市维护建设税|《财政部 国家税务总局关于下岗失业人员再就业有关税收政策问题的通知》 财税〔2005〕186号</option>
	    		
		<option value="0007013603" >0007013603|扶持就业人员从事个体经营限额减免城市维护建设税|《财政部 国家税务总局关于支持和促进就业有关税收政策的通知》 财税〔2010〕84号</option>
	    		
		<option value="0007064001" >0007064001|广东核电投资有限公司销售给广东电网公司的电力免征城市维护建设税|《财政部 国家税务总局关于核电行业税收政策有关问题的通知》 财税〔2008〕38号第三条第2项</option>
	    		
		<option value="0007064002" >0007064002|国家重大水利工程建设基金免征城市维护建设税|《财政部 国家税务总局关于免征国家重大水利工程建设基金的城市维护建设税和教育费附加的通知》 财税〔2010〕44号</option>
	    		
		<option value="0007092301" >0007092301|增值税一般纳税人的家禽加工企业和冷藏冷冻企业加工销售禽肉产品免征城市维护建设税|《财政部 国家税务总局关于延长家禽行业有关税收优惠政策的通知》 财税〔2006〕113号</option>
	    		
		<option value="0007103201" >0007103201|经营性文化事业单位转制为企业免征城市维护建设税|《财政部 国家税务总局关于文化体制改革中经营性文化事业单位转制为企业的若干税收优惠政策的通知》 财税〔2009〕34号</option>
	    		
		<option value="0007103202" >0007103202|转制文化企业免征城市维护建设税|《财政部 国家税务总局 中宣部关于转制文化企业名单及认定问题的通知》 财税〔2009〕105号</option>
	    		
		<option value="0007103203" >0007103203|中央所属的转制文化企业，享受税收优惠|《财政部 国家税务总局 中宣部关于下发红旗出版社有限责任公司等中央所属转制文化企业名单的通知》 财税〔2011〕3号</option>
	    		
		<option value="0007103204" >0007103204|中央所属的转制文化企业，享受税收优惠|《财政部 国家税务总局 中宣部关于下发人民网股份有限公司等81家中央所属转制文化企业名单的通知》 财税〔2011〕27号</option>
	    		
		<option value="0007103205" >0007103205|中央所属的转制文化企业，享受税收优惠|《财政部 国家税务总局 中宣部关于下发世界知识出版社等35家中央所属转制文化企业名单的通知》 财税〔2011〕120号</option>
	    		
		<option value="0007129999" >0007129999|上海期货交易所会员和客户通过上海期货交易所销售标准黄金,发生实物交割并已出库的，免征城市维护建设税|其他</option>
	    		
		<option value="0007129999" >0007129999|促进就业企业限额减免城市维护建设税|其他</option>
	    		
		<option value="0007129999" >0007129999|其他|其他</option>
	    		
		<option value="0007129999" >0007129999|受灾地区促进就业企业限额减免城市维护建设税|其他</option>
	    		
		<option value="0007129999" >0007129999|对国家石油储备基地第一期项目建设过程中涉及的城市维护建设税，予以免征|其他</option>
	    		
		<option value="0007129999" >0007129999|文化单位转制为企业时的城市维护建设税优惠|其他</option>
	    		
		<option value="0007129999" >0007129999|被撤销金融机构财产用来清偿债务免征城市维护建设税|其他</option>
	    		
		<option value="0007129999" >0007129999|金融资产管理公司收购、承接、处置不良资产免征城市维护建设税|其他</option>
	    		
		<option value="0007129999" >0007129999|黄金交易所会员单位免征城市维护建设税|其他</option>
	    		
		<option value="0008011601" >0008011601|地震毁损不堪和危险房屋免房产税|《财政部 国家税务总局关于认真落实抗震救灾及灾后重建税收政策问题的通知》 财税〔2008〕62号第三条</option>
	    		
		<option value="0008011603" >0008011603|受灾地区因自然灾害损毁的房产免征房产税|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号第三条第5项</option>
	    		
		<option value="0008011604" >0008011604|受灾地区因自然灾害损毁的房产免征房产税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第三条第5项</option>
	    		
		<option value="0008011605" >0008011605|芦山因灾损毁的房产免征房产税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第三条第5项</option>
	    		
		<option value="0008011606" >0008011606|鲁甸因灾损毁的房产免征房产税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第三条第5项</option>
	    		
		<option value="0008011701" >0008011701|按政府规定价格出租的公有住房和廉租住房免征房产税|《财政部 国家税务总局关于调整住房租赁市场税收政策的通知》 财税〔2000〕125号第一条</option>
	    		
		<option value="0008011702" >0008011702|廉租住房租金收入免征房产税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第一项</option>
	    		
		<option value="0008011703" >0008011703|对经营公租房所取得的租金收入免征房产税|《财政部 国家税务总局关于支持公共租赁住房建设和运营有关税收优惠政策的通知》 财税〔2010〕88号第六条</option>
	    		
		<option value="0008011704" >0008011704|公共租赁住房免征房产税|《财政部 国家税务总局关于促进公共租赁住房发展有关税收优惠政策的通知》 财税〔2014〕52号第七条</option>
	    		
		<option value="0008011705" >0008011705|公共租赁住房免征房产税|《财政部 国家税务总局关于公共租赁住房税收优惠政策的通知》 财税〔2015〕139号第七条</option>
	    		
		<option value="0008012701" >0008012701|非营利性老年服务机构自用房产免征房产税|《财政部 国家税务总局关于对老年服务机构有关税收政策问题的通知》 财税〔2000〕97号第一条</option>
	    		
		<option value="0008019901" >0008019901|农产品批发市场农贸市场房产免征房产税|《财政部 国家税务总局关于农产品批发市场 农贸市场房产税 城镇土地使用税政策的通知》 财税〔2012〕68号第一条</option>
	    		
		<option value="0008019902" >0008019902|企业纳税困难减免房产税|《中华人民共和国房产税暂行条例》 国发〔1986〕90号第六条</option>
	    		
		<option value="0008019903" >0008019903|农产品批发市场农贸市场房产免征房产税|《财政部 国家税务总局关于继续实行农产品批发市场 农贸市场房产税 城镇土地使用税优惠政策的通知》 财税〔2016〕1号第一条</option>
	    		
		<option value="0008021903" >0008021903|国家大学科技园免征房产税|《财政部 国家税务总局关于延长国家大学科技园和科技企业孵化器税收政策执行期限的通知》 财税〔2011〕59号</option>
	    		
		<option value="0008021903" >0008021903|孵化器自用及提供孵化企业使用房产免征房产税|《财政部 国家税务总局关于延长国家大学科技园和科技企业孵化器税收政策执行期限的通知》 财税〔2011〕59号</option>
	    		
		<option value="0008021904" >0008021904|孵化器自用及提供孵化企业使用房产免征房产税|《财政部 国家税务总局关于科技企业孵化器税收政策的通知》 财税〔2013〕117号第一条</option>
	    		
		<option value="0008021905" >0008021905|科技园自用及提供孵化企业使用房产免征房产税|《财政部 国家税务总局关于国家大学科技园税收政策的通知》 财税〔2013〕118号第一条</option>
	    		
		<option value="0008021906" >0008021906|非营利性科研机构自用的房产免征房产税|《财政部 国家税务总局关于非营利性科研机构税收政策的通知》 财税〔2001〕5号第二条第三项</option>
	    		
		<option value="0008021907" >0008021907|科技园自用及提供孵化企业使用房产免征房产税|《财政部 国家税务总局关于国家大学科技园税收政策的通知》 财税〔2016〕98号第一条</option>
	    		
		<option value="0008021908" >0008021908|孵化器自用及提供孵化企业使用房产免征房产税|《财政部 国家税务总局关于科技企业孵化器税收政策的通知》 财税〔2016〕89号第一条</option>
	    		
		<option value="0008021909" >0008021909|大型客机和大型客机发动机整机设计制造企业免征房产税|《财政部 国家税务总局关于大型客机和大型客机发动机整机设计制造企业房产税 城镇土地使用税政策的通知》 财税〔2016〕133号 </option>
	    		
		<option value="0008022001" >0008022001|转制科研机构的科研开发用房免征房产税|《财政部 国家税务总局关于延长转制科研机构有关税收政策执行期限的通知》 财税〔2005〕14号第一条</option>
	    		
		<option value="0008033301" >0008033301|青藏铁路公司及所属单位自用房产免征房产税|《财政部 国家税务总局关于青藏铁路公司运营期间有关税收等政策问题的通知》 财税〔2007〕11号第五条</option>
	    		
		<option value="0008052401" >0008052401|大秦公司完全按市场化运作前其自用房产免征房产税|《财政部 国家税务总局关于大秦铁路改制上市有关税收问题的通知》 财税〔2006〕32号第四条</option>
	    		
		<option value="0008061001" >0008061001|天然林保护工程实施企业免征房产税|《财政部 国家税务总局关于天然林保护工程实施企业和单位有关税收政策的通知》 财税〔2004〕37号第一、二条</option>
	    		
		<option value="0008061002" >0008061002|天然林二期工程的专用房产免征房产税|《财政部 国家税务总局关于天然林保护工程（二期）实施企业和单位房产税、城镇土地使用税政策的通知》 财税〔2011〕90号第一条</option>
	    		
		<option value="0008061003" >0008061003|天然林二期工程森工企业闲置房产免征房产税|《财政部 国家税务总局关于天然林保护工程（二期）实施企业和单位房产税、城镇土地使用税政策的通知》 财税〔2011〕90号第二条</option>
	    		
		<option value="0008064001" >0008064001|为居民供热所使用的厂房免征房产税|《财政部 国家税务总局关于继续执行供热企业增值税 房产税 城镇土地使用税优惠政策的通知》 财税〔2011〕118号第二条</option>
	    		
		<option value="0008064002" >0008064002|为居民供热所使用的厂房免征房产税|《财政部 国家税务总局关于供热企业增值税 房产税 城镇土地使用税优惠政策的通知》 财税〔2016〕94号第二条</option>
	    		
		<option value="0008081501" >0008081501|被撤销金融机构清算期间房地产免征房产税|《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第二项</option>
	    		
		<option value="0008083902" >0008083902|东方资产管理公司接收港澳国际（集团）有限公司的房地产免征房产税|《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号第三条</option>
	    		
		<option value="0008083904" >0008083904|四家金融资产管理公司及分支机构处置不良资产免征房产税|《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号第一条</option>
	    		
		<option value="0008092301" >0008092301|农村饮水工程运营管理单位房产免征房产税|《财政部 国家税务总局关于支持农村饮水安全工程建设运营税收政策的通知》 财税〔2012〕30号第三条</option>
	    		
		<option value="0008092302" >0008092302|农村饮水工程运营管理单位房产免征房产税|《财政部 国家税务总局关于继续实行农村饮水安全工程建设运营税收优惠政策的通知》 财税〔2016〕19号第三条</option>
	    		
		<option value="0008101401" >0008101401|学校、托儿所、幼儿园自用的房产免征房产税|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第二条</option>
	    		
		<option value="0008101402" >0008101402|高校学生公寓免征房产税|《财政部 国家税务总局关于经营高校学生公寓和食堂有关税收政策的通知》 财税〔2011〕78号第一条</option>
	    		
		<option value="0008101404" >0008101404|高校学生公寓免征房产税|《财政部 国家税务总局关于经营高校学生公寓和食堂有关税收政策的通知》 财税〔2013〕83号第一条</option>
	    		
		<option value="0008101406" >0008101406|高校学生公寓免征房产税|《财政部 国家税务总局关于继续执行高校学生公寓和食堂有关税收政策的通知》 财税〔2016〕82号第一条</option>
	    		
		<option value="0008102901" >0008102901|符合条件的体育场馆减免房产税|《财政部 国家税务总局关于体育场馆房产税和城镇土地使用税政策的通知》 财税〔2015〕130号</option>
	    		
		<option value="0008103202" >0008103202|转制文化企业自用房产免征房产税|《财政部 国家税务总局关于文化体制改革中经营性文化事业单位转制为企业的若干税收优惠政策的通知》 财税〔2009〕34号第二条</option>
	    		
		<option value="0008103203" >0008103203|转制文化企业自用房产免征房产税|《财政部 国家税务总局 中宣部关于转制文化企业名单及认定问题的通知》 财税〔2009〕105号第一条</option>
	    		
		<option value="0008103204" >0008103204|转制文化企业自用房产免征房产税|《财政部 国家税务总局 中宣部关于下发红旗出版社有限责任公司等中央所属转制文化企业名单的通知》 财税〔2011〕3号第一条</option>
	    		
		<option value="0008103205" >0008103205|转制文化企业自用房产免征房产税|《财政部 国家税务总局 中宣部关于下发人民网股份有限公司等81家中央所属转制文化企业名单的通知》 财税〔2011〕27号</option>
	    		
		<option value="0008103206" >0008103206|转制文化企业自用房产免征房产税|《财政部 国家税务总局 中宣部关于下发世界知识出版社等35家中央所属转制文化企业名单的通知》 财税〔2011〕120号</option>
	    		
		<option value="0008103207" >0008103207|转制文化企业自用房产免征房产税|《财政部 国家税务总局 中宣部关于继续实施文化体制改革中经营性文化事业单位转制为企业若干税收政策的通知》 财税〔2014〕84号第一条第（二）项</option>
	    		
		<option value="0008121302" >0008121302|铁路运输企业免征房产税|《财政部 国家税务总局关于明确免征房产税城镇土地使用税的铁路运输企业范围的补充通知》 财税〔2006〕17号第一条</option>
	    		
		<option value="0008121303" >0008121303|地方铁路运输企业免征房产税|《财政部 国家税务总局关于明确免征房产税城镇土地使用税的铁路运输企业范围及有关问题的通知》 财税〔2004〕36号第二条</option>
	    		
		<option value="0008121304" >0008121304|股改铁路运输企业及合资铁路运输公司自用房产免征房产税|《财政部 国家税务总局关于股改及合资铁路运输企业房产税、城镇土地使用税有关政策的通知》 财税〔2009〕132号</option>
	    		
		<option value="0008122602" >0008122602|商品储备业务自用房产免征房产税|《财政部 国家税务总局关于部分国家储备商品有关税收政策的通知》 财税〔2013〕59号第二条</option>
	    		
		<option value="0008122603" >0008122603|商品储备业务自用房产免征房产税|《财政部 国家税务总局关于部分国家储备商品有关税收政策的通知》 财税〔2016〕28号第二条</option>
	    		
		<option value="0008123401" >0008123401|血站自用的房产免征房产税|《财政部 国家税务总局关于血站有关税收问题的通知》 财税字〔1999〕264号第一条</option>
	    		
		<option value="0008123402" >0008123402|非营利性医疗机构、疾病控制机构和妇幼保健机构等卫生机构自用的房产免征房产税|《财政部 国家税务总局关于医疗卫生机构有关税收政策的通知》 财税〔2000〕42号第一条第（五）项</option>
	    		
		<option value="0008123404" >0008123404|营利性医疗机构自用的房产，免征三年房产税|《财政部 国家税务总局关于医疗卫生机构有关税收政策的通知》 财税〔2000〕42号第二条第（一）项、第三条第（二）项</option>
	    		
		<option value="0008125001" >0008125001|劳教单位的自用房产免征房产税|《财政部税务总局关于对司法部所属的劳改劳教单位征免房产税问题的补充通知》 （87）财税地字第029号第一、二条</option>
	    		
		<option value="0008125002" >0008125002|司法部门所属监狱等房产免征房产税|《财政部税务总局关于对司法部所属的劳改劳教单位征免房产税问题的通知》 （87）财税地字第021号第一、二、三条</option>
	    		
		<option value="0008129903" >0008129903|毁损房屋和危险房屋免征房产税|《财政部税务总局关于房产税若干具体问题的解释和暂行规定》 （86）财税地字第008号第十六条</option>
	    		
		<option value="0008129906" >0008129906|工商行政管理部门的集贸市场用房免征房产税|《财政部税务总局关于房产税和车船使用税几个业务问题的解释与规定》 （87）财税地字第003号第三条</option>
	    		
		<option value="0008129907" >0008129907|房管部门经租非营业用房免征房产税|《财政部税务总局关于对房管部门经租的居民住房暂缓征收房产税的通知》 （87）财税地字第030号</option>
	    		
		<option value="0008129908" >0008129908|煤炭工业部所属防排水抢救站用房免征房产税|《财政部 税务总局关于对煤炭工业部所属防排水抢救站征免房产税、财产使用税的通知》 财税地字〔1987〕7号第一条</option>
	    		
		<option value="0008129913" >0008129913|地下建筑减征房产税|《财政部 国家税务总局关于具备房屋功能的地下建筑征收房产税的通知》 财税〔2005〕181号第二条</option>
	    		
		<option value="0008129915" >0008129915|基建工地临时性房屋免征房产税|《财政部税务总局关于房产税若干具体问题的解释和暂行规定》 （86）财税地字第008号第二十一条</option>
	    		
		<option value="0008129916" >0008129916|大修停用的房产免征房产税|《财政部税务总局关于房产税若干具体问题的解释和暂行规定》 （86）财税地字第008号第二十四条</option>
	    		
		<option value="0008129917" >0008129917|企事业单位向个人出租住房房产税减按4%税率征收|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第二条第（四）项</option>
	    		
		<option value="0008129999" >0008129999|专为武警内部人员及其家属服务的房产免征房产税|其他</option>
	    		
		<option value="0008129999" >0008129999|个人出租住房房产税暂减按4%的税率征收|其他</option>
	    		
		<option value="0008129999" >0008129999|中国人民银行总行（含国家外汇管理局）所属分支机构自用的房产免征房产税|其他</option>
	    		
		<option value="0008129999" >0008129999|企业办的各类医院的自用房产免征房产税|其他</option>
	    		
		<option value="0008129999" >0008129999|公共事业用房产免征房产税|其他</option>
	    		
		<option value="0008129999" >0008129999|其他|其他</option>
	    		
		<option value="0008129999" >0008129999|军队房产免征房产税|其他</option>
	    		
		<option value="0008129999" >0008129999|将职工住宅全部产权出售给本单位职工的房产免征房产税|其他</option>
	    		
		<option value="0008129999" >0008129999|水电站坝后式厂房减征房产税|其他</option>
	    		
		<option value="0009011602" >0009011602|受灾地区建设安居房所签订的建筑工程勘察设计合同等免征印花税|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号</option>
	    		
		<option value="0009011603" >0009011603|受灾地区建设安居房所签订的建筑工程勘察设计合同等免征印花税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号</option>
	    		
		<option value="0009011604" >0009011604|受灾地区建设安居房所签订的建筑工程勘察设计合同等免征印花税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第三条第3项</option>
	    		
		<option value="0009011605" >0009011605|财产所有人向受灾地区捐赠所立书据免征印花税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第四条第3项</option>
	    		
		<option value="0009011606" >0009011606|受灾地区建设安居房所签订的建筑工程勘察设计合同等免征印花税,对财产所有人捐赠给受灾地区或受灾居民所书立的产权转移书据，免征印花税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第三条第3项</option>
	    		
		<option value="0009011606" >0009011606|受灾地区建设安居房所签订的建筑工程勘察设计合同等免征印花税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第三条第3项</option>
	    		
		<option value="0009011607" >0009011607|对财产所有人捐赠给受灾地区或受灾居民所书立的产权转移书据，免征印花税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第四条第3项</option>
	    		
		<option value="0009011701" >0009011701|对个人销售或购买住房暂免征收印花税|《财政部 国家税务总局关于调整房地产交易环节税收政策的通知》 财税〔2008〕137号第二条</option>
	    		
		<option value="0009011702" >0009011702|对廉租住房、经济适用住房经营管理单位与廉租住房、经济适用住房相关的印花税以及廉租住房承租人、经济适用住房购买人涉及的印花税予以免征|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第（四）项</option>
	    		
		<option value="0009011703" >0009011703|对公租房经营管理单位建造公租房、购买住房作为公租房免征印花税|《财政部 国家税务总局关于支持公共租赁住房建设和运营有关税收优惠政策的通知》 财税〔2010〕88号</option>
	    		
		<option value="0009011704" >0009011704|保障性住房免征印花税|《财政部 国家税务总局关于棚户区改造有关税收政策的通知》 财税〔2013〕101号第一条</option>
	    		
		<option value="0009011705" >0009011705|对公租房经营管理单位建造、管理公租房、购买住房作为公租房免征印花税|《财政部 国家税务总局关于促进公共租赁住房发展有关税收优惠政策的通知》 财税〔2014〕52号第二条</option>
	    		
		<option value="0009011706" >0009011706|对开发商建造廉租房和经济适用住房有关印花税予以免征|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第（四）项</option>
	    		
		<option value="0009011707" >0009011707|免征个人出租承租住房签订的租赁合同印花税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第二条第（二）项</option>
	    		
		<option value="0009011708" >0009011708|对公共租赁住房双方免征租赁协议印花税|《财政部 国家税务总局关于促进公共租赁住房发展有关税收优惠政策的通知》 财税〔2014〕52号第三条</option>
	    		
		<option value="0009011709" >0009011709|对公租房经营管理单位建造、管理公租房、购买住房作为公租房免征印花税|《财政部 国家税务总局关于公共租赁住房税收优惠政策的通知》 财税〔2015〕139号第二条</option>
	    		
		<option value="0009011710" >0009011710|对公共租赁住房双方免征租赁协议印花税|《财政部 国家税务总局关于公共租赁住房税收优惠政策的通知》 财税〔2015〕139号第三条</option>
	    		
		<option value="0009012701" >0009012701|房地产管理部门与个人订立的租房合同免征印花税|《国家税务局关于印花税若干具体问题的规定》 （88）国税地字第025号第三条</option>
	    		
		<option value="0009012702" >0009012702|铁路、公路、航运、水路承运快件行李、包裹开具的托运单据免征印花税|《国家税务局关于印花税若干具体问题的规定》 （88）国税地字第025号第六条</option>
	    		
		<option value="0009033301" >0009033301|青藏铁路公司及其所属单位营业账簿免征印花税|《财政部 国家税务总局关于青藏铁路公司运营期间有关税收等政策问题的通知》 财税〔2007〕11号第二条</option>
	    		
		<option value="0009041501" >0009041501|对金融机构与小型企业、微型企业签订的借款合同免征印花税|《财政部 国家税务总局关于金融机构与小型微型企业签订借款合同免征印花税的通知》 财税〔2011〕105号第一条</option>
	    		
		<option value="0009041502" >0009041502|对金融机构与小型企业、微型企业签订的借款合同免征印花税|《财政部 国家税务总局关于金融机构与小型微型企业签订借款合同免征印花税的通知》 财税〔2014〕78号第一条</option>
	    		
		<option value="0009041503" >0009041503|对金融机构与小型企业、微型企业签订的借款合同免征印花税|《财政部 税务总局关于支持小微企业融资有关税收政策的通知》 财税〔2017〕77号第二条</option>
	    		
		<option value="0009052401" >0009052401|企业改制、重组过程中印花税予以免征|《财政部 国家税务总局关于中国邮政储蓄银行改制上市有关税收政策的通知》 财税〔2013〕53号第五条</option>
	    		
		<option value="0009052501" >0009052501|对中国铁路总公司改革过程中涉及的印花税进行减免|《财政部 国家税务总局关于组建中国铁路总公司有关印花税政策的通知》 财税〔2015〕57号</option>
	    		
		<option value="0009059901" >0009059901|企业改制、重组过程中印花税予以免征|《财政部 国家税务总局关于明确中国邮政集团公司邮政速递物流业务重组改制过程中有关契税和印花税政策的通知》 财税〔2010〕92号第二、三、四条</option>
	    		
		<option value="0009059902" >0009059902|企业改制、重组过程中印花税予以免征|《财政部 国家税务总局关于企业改制过程中有关印花税政策的通知》 财税〔2003〕183号</option>
	    		
		<option value="0009059903" >0009059903|对企业改制、资产整合过程中涉及的所有产权转移书据及股权转让协议印花税予以免征|《财政部 国家税务总局关于中国联合网络通信集团有限公司转让CDMA网及其用户资产企业合并资产整合过程中涉及的增值税营业税印花税和土地增值税政策问题的通知》 财税〔2011〕13号第五、六、七条</option>
	    		
		<option value="0009059904" >0009059904|对联通新时空移动通信有限公司接受中国联合网络通信集团固定通信资产增加资本金涉及的印花税予以免征|《财政部 国家税务总局关于中国联合网络通信集团有限公司转让CDMA网及其用户资产企业合并资产整合过程中涉及的增值税营业税印花税和土地增值税政策问题的通知》 财税〔2011〕13号第八条</option>
	    		
		<option value="0009059905" >0009059905|对2011年中国移动增加的资本公积、股权调整协议、盈余公积转增实收资本印花税予以免征|《财政部 国家税务总局关于中国移动集团股权结构调整及盈余公积转增实收资本有关印花税政策的通知》 财税〔2012〕62号第一、二条</option>
	    		
		<option value="0009081501" >0009081501|保险保障基金公司资金账簿印花税、产权转移合同印花税、再贷款合同印花税、财产保险合同印花税免征|《财政部 国家税务总局关于保险保障基金有关税收问题的通知》 财税〔2010〕77号</option>
	    		
		<option value="0009081502" >0009081502|买卖封闭式证券投资基金免征印花税|《财政部 国家税务总局关于对买卖封闭式证券投资基金继续予以免征印花税的通知》 财税〔2004〕173号</option>
	    		
		<option value="0009081503" >0009081503|股权分置改革过程中发生的股权转让免征印花税|《财政部 国家税务总局关于股权分置试点改革有关税收政策问题的通知》 财税〔2005〕103号第一条</option>
	    		
		<option value="0009081504" >0009081504|贴息贷款合同免征印花税|《财政部 国家税务总局关于国家开发银行缴纳印花税问题的复函 》 财税字〔1995〕47号第一条</option>
	    		
		<option value="0009081505" >0009081505|国有股东向全国社会保障基金理事会转持国有股免征证券（股票）交易印花税|《财政部 国家税务总局关于境内证券市场转持部分国有股充实全国社会保障基金有关证券（股票）交易印花税政策的通知》 财税〔2009〕103号</option>
	    		
		<option value="0009081506" >0009081506|期货保障基金公司免征印花税|《财政部 国家税务总局关于期货投资者保障基金有关税收问题的通知》 财税〔2009〕68号</option>
	    		
		<option value="0009081507" >0009081507|期货保障基金公司免征印花税|《财政部 国家税务总局关于期货投资者保障基金有关税收优惠政策继续执行的通知》 财税〔2011〕69号</option>
	    		
		<option value="0009081509" >0009081509|企业改制、重组过程中印花税予以免征|《财政部 国家税务总局关于外国银行分行改制为外商独资银行有关税收问题的通知》 财税〔2007〕45号第三条</option>
	    		
		<option value="0009081510" >0009081510|信贷资产证券化免征印花税|《财政部 国家税务总局关于信贷资产证券化有关税收政策问题的通知》 财税〔2006〕5号第一条</option>
	    		
		<option value="0009081512" >0009081512|证券投资者保护基金免征印花税|《财政部 国家税务总局关于证券投资者保护基金有关印花税政策的通知》 财税〔2006〕104号</option>
	    		
		<option value="0009081514" >0009081514|保险保障基金公司资金账簿印花税、产权转移合同印花税、再贷款合同印花税、财产保险合同印花税免征|《财政部 国家税务总局关于保险保障基金有关税收政策继续执行的通知》 财税〔2013〕81号第三条</option>
	    		
		<option value="0009081515" >0009081515|无息、贴息贷款合同免征印花税|《中华人民共和国印花税暂行条例实施细则》 财税字〔1988〕255号第十三条第（二）项</option>
	    		
		<option value="0009081516" >0009081516|被撤销金融机构接收债权、清偿债务签订的产权转移书据免征印花税|《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第1项</option>
	    		
		<option value="0009081517" >0009081517|外国政府或者国际金融组织向我国政府及国家金融机构提供优惠贷款所书立的合同免征印花税|《中华人民共和国印花税暂行条例实施细则》 财税字〔1988〕255号第十三条第（三）项</option>
	    		
		<option value="0009081518" >0009081518|新设立的资金账簿免征印花税|《财政部 税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2018〕41号第二条第一款</option>
	    		
		<option value="0009081519" >0009081519|对保险公司进行风险处置和破产救助过程中签订的产权转移书据免征印花税|《财政部 税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2018〕41号第二条第二款</option>
	    		
		<option value="0009081520" >0009081520|对保险公司进行风险处置过程中与中国人民银行签订的再贷款合同免征印花税|《财政部 税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2018〕41号第二条第三款</option>
	    		
		<option value="0009081521" >0009081521|以保险保障基金自有财产和接收的受偿资产与保险公司签订的财产保险合同免征印花税|《财政部 税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2018〕41号第二条第四款</option>
	    		
		<option value="0009083901" >0009083901|国有商业银行划转给金融资产管理公司的资产免征印花税|《财政部 国家税务总局关于4家资产管理公司接收资本金项下的资产在办理过户时有关税收政策问题的通知》 财税〔2003〕21号</option>
	    		
		<option value="0009083902" >0009083902|证券投资基金免征印花税|《财政部 国家税务总局关于开放式证券投资基金有关税收问题的通知》 财税〔2002〕128号第三条</option>
	    		
		<option value="0009083903" >0009083903|金融资产管理公司收购、承接、处置不良资产免征印花税|《财政部 国家税务总局关于中国信达等4家金融资产管理公司税收政策问题的通知》 财税〔2001〕10号</option>
	    		
		<option value="0009083904" >0009083904|农村信用社接受农村合作基金会财产产权转移书免征印花税|《中国人民银行 农业部 国家发展计划委员会 财政部 国家税务总局关于免缴农村信用社接收农村合作基金会财产产权过户税费的通知》 银发〔2000〕21号</option>
	    		
		<option value="0009083905" >0009083905|金融资产管理公司收购、承接、处置不良资产免征印花税|《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号</option>
	    		
		<option value="0009083906" >0009083906|对中国信达资产管理股份有限公司、中国华融资产管理股份有限公司及其分支机构处置剩余政策性剥离不良资产以及出让上市公司股权免征印花税|《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号第一条</option>
	    		
		<option value="0009092301" >0009092301|对农民专业合作社与本社成员签订的农业产品和农业生产资料购销合同，免征印花税|《财政部 国家税务总局关于农民专业合作社有关税收政策的通知》 财税〔2008〕81号第四条</option>
	    		
		<option value="0009092302" >0009092302|饮水工程运营管理单位为建设饮水工程取得土地使用权签订的产权转移书据，以及与施工单位签订的建设工程承包合同免征印花税|《财政部 国家税务总局关于支持农村饮水安全工程建设运营税收政策的通知》 财税〔2012〕30号第二条</option>
	    		
		<option value="0009092305" >0009092305|饮水工程运营管理单位为建设饮水工程取得土地使用权签订的产权转移书据，以及与施工单位签订的建设工程承包合同免征印花税|《财政部 国家税务总局关于继续实行农村饮水安全工程建设运营税收优惠政策的通知》 财税〔2016〕19号第二条</option>
	    		
		<option value="0009092306" >0009092306|农村集体经济组织清产核资免征印花税|《财政部 税务总局关于支持农村集体产权制度改革有关税收政策的通知》 财税〔2017〕55号第二条第二款</option>
	    		
		<option value="0009101401" >0009101401|对财产所有人将财产赠给学校所书立的书据免征印花税|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第二条</option>
	    		
		<option value="0009101401" >0009101401|财产所有人将财产赠给政府、社会福利单位、学校所立的书据|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第二条</option>
	    		
		<option value="0009101402" >0009101402|高校学生公寓租赁合同免征印花税|《财政部 国家税务总局关于经营高校学生公寓和食堂有关税收政策的通知》 财税〔2011〕78号</option>
	    		
		<option value="0009101403" >0009101403|与高校学生签订的学生公寓租赁合同，免征印花税|《财政部 国家税务总局关于经营高校学生公寓及高校后勤社会化改革有关税收政策的通知》 财税〔2006〕100号</option>
	    		
		<option value="0009101403" >0009101403|高校学生公寓租赁合同免征印花税|《财政部 国家税务总局关于经营高校学生公寓及高校后勤社会化改革有关税收政策的通知》 财税〔2006〕100号</option>
	    		
		<option value="0009101404" >0009101404|高校学生公寓租赁合同免征印花税|《财政部 国家税务总局关于经营高校学生公寓和食堂有关税收政策的通知》 财税〔2013〕83号第二条</option>
	    		
		<option value="0009101405" >0009101405|高校学生公寓租赁合同免征印花税|《财政部 国家税务总局关于继续执行高校学生公寓和食堂有关税收政策的通知》 财税〔2016〕82号第一条</option>
	    		
		<option value="0009102901" >0009102901|组委会使用的营业账簿和签订的各类合同等应税凭证免征印花税|《财政部 海关总署 国家税务总局关于第三届亚洲沙滩运动会税收政策的通知》 财税〔2011〕11号第一条第6点、第二条第3点</option>
	    		
		<option value="0009102902" >0009102902|组委会使用的营业账簿和签订的各类合同等应税凭证免征印花税|《财政部 国家税务总局 海关总署关于第29届奥运会税收政策问题的通知》 财税〔2003〕10号</option>
	    		
		<option value="0009102903" >0009102903|组委会使用的营业账簿和签订的各类合同等应税凭证免征印花税|《财政部 海关总署 国家税务总局关于第16届亚洲运动会等三项国际综合运动会税收政策的通知》 财税〔2009〕94号第一条第7点、第二条第3点</option>
	    		
		<option value="0009102904" >0009102904|组委会使用的营业账簿和签订的各类合同等应税凭证免征印花税|《财政部 海关总署 国家税务总局关于第二届夏季青年奥林匹克运动会等三项国际综合运动会税收政策的通知》 财税〔2013〕11号第一条第7点、第二条第3点</option>
	    		
		<option value="0009102905" >0009102905|对北京冬奥组委、北京冬奥会测试赛赛事组委会使用的营业账簿和签订的各类合同免征印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（九）款</option>
	    		
		<option value="0009102906" >0009102906|对国际奥委会签订的与北京2022年冬奥会有关的各类合同，免征国际奥委会的印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（二）款</option>
	    		
		<option value="0009102907" >0009102907|对中国奥委会签订的与北京2022年冬奥会有关的各类合同，免征中国奥委会的印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（二）款</option>
	    		
		<option value="0009102908" >0009102908|对国际残奥委会取得的与北京2022年冬残奥会有关的收入免征印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（五）款</option>
	    		
		<option value="0009102909" >0009102909|对中国残奥委会取得的由北京冬奥组委分期支付的收入免征印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（六）款</option>
	    		
		<option value="0009102910" >0009102910|对财产所有人将财产捐赠给北京冬奥组委所书立的产权转移书据免征印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（四）款</option>
	    		
		<option value="0009103201" >0009103201|发行单位之间，发行单位与订阅单位或个人之间书立的征订凭证，暂免征印花税|《国家税务局关于图书、报刊等征订凭证征免印花税问题的通知》 （89）国税地字第142号第二条</option>
	    		
		<option value="0009103202" >0009103202|上海世博局使用的营业账簿和签订的各类合同等应税凭证，免征上海世博局应缴纳的印花税|《财政部 国家税务总局关于2010年上海世博会有关税收政策问题的通知》 财税〔2005〕180号第一条第（五）项、第二条第（六）项</option>
	    		
		<option value="0009103203" >0009103203|文化单位转制为企业时的印花税优惠|《财政部 国家税务总局 中宣部关于继续实施文化体制改革中经营性文化事业单位转制为企业若干税收政策的通知》 财税〔2014〕84号第一条第（四）项</option>
	    		
		<option value="0009120601" >0009120601|财产所有人将财产赠给政府、社会福利单位、学校所立的书据|《中华人民共和国印花税暂行条例》 中华人民共和国国务院令第11号第四条第2项</option>
	    		
		<option value="0009121301" >0009121301|特殊货运凭证免征印花税|《国家税务总局关于货运凭证征收印花税几个具体问题的通知》 国税发〔1990〕173号</option>
	    		
		<option value="0009121302" >0009121302|免征飞机租赁企业购机环节购销合同印花税|《财政部 国家税务总局关于飞机租赁企业有关印花税政策的通知》 财税〔2014〕18号</option>
	    		
		<option value="0009122601" >0009122601|储备公司资金账簿和购销合同印花税减免|《财政部 国家税务总局关于部分国家储备商品有关税收政策的通知》 财税〔2011〕94号</option>
	    		
		<option value="0009122602" >0009122602|对国家石油储备基地第一期项目建设过程中涉及的印花税，予以免征|《财政部 国家税务总局关于国家石油储备基地建设有关税收政策的通知》 财税〔2005〕23号第一条</option>
	    		
		<option value="0009122603" >0009122603|储备公司资金账簿和购销合同印花税减免|《财政部 国家税务总局关于部分国家储备商品有关税收政策的通知》 财税〔2013〕59号第一条</option>
	    		
		<option value="0009122604" >0009122604|对国家石油储备基地第一期项目建设过程中涉及的印花税，予以免征|《财政部 国家税务总局关于国家石油储备基地有关税收政策的通知》 财税〔2011〕80号</option>
	    		
		<option value="0009122604" >0009122604|对国家石油储备基地第二期项目建设过程中应缴的印花税，予以免征|《财政部 国家税务总局关于国家石油储备基地有关税收政策的通知》 财税〔2011〕80号</option>
	    		
		<option value="0009122605" >0009122605|储备公司资金账簿和购销合同印花税减免|《财政部 国家税务总局关于部分国家储备商品有关税收政策的通知》 财税〔2016〕28号第一条</option>
	    		
		<option value="0009129904" >0009129904|其他|《中华人民共和国印花税暂行条例》 中华人民共和国国务院令第11号第四条第1项</option>
	    		
		<option value="0009129904" >0009129904|已缴纳印花税的凭证的副本或者抄本免纳印花税|《中华人民共和国印花税暂行条例》 中华人民共和国国务院令第11号第四条第1项</option>
	    		
		<option value="0009129906" >0009129906|资金账簿减半征收印花税|《财政部 税务总局关于对营业账簿减免印花税的通知》 财税〔2018〕50号</option>
	    		
		<option value="0009129907" >0009129907|其他账簿免征印花税|《财政部 税务总局关于对营业账簿减免印花税的通知》 财税〔2018〕50号</option>
	    		
		<option value="0009129999" >0009129999|其他|其他</option>
	    		
		<option value="0010011602" >0010011602|受灾地区安居房建设用地免征城镇土地使用税、受灾地区损毁土地免征城镇土地使用税|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号第三条第（五）款</option>
	    		
		<option value="0010011603" >0010011603|受灾地区安居房建设用地免征城镇土地使用税、受灾地区损毁土地免征城镇土地使用税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第三条第（五）款</option>
	    		
		<option value="0010011604" >0010011604|芦山地震安居房用地及损毁的土地免土地税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第三条第（五）款</option>
	    		
		<option value="0010011605" >0010011605|地震造成纳税困难免土地税|《财政部 国家税务总局关于认真落实抗震救灾及灾后重建税收政策问题的通知》 财税〔2008〕62号第六条</option>
	    		
		<option value="0010011606" >0010011606|鲁甸地震安居房用地以及损毁土地免土地税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第三条第（五）款</option>
	    		
		<option value="0010011703" >0010011703|对公租房建设期间用地及公租房建成后占地免征城镇土地使用税|《财政部 国家税务总局关于支持公共租赁住房建设和运营有关税收优惠政策的通知》 财税〔2010〕88号第一条</option>
	    		
		<option value="0010011704" >0010011704|改造安置住房建设用地免征城镇土地使用税|《财政部 国家税务总局关于城市和国有工矿棚户区改造项目有关税收优惠政策的通知》 财税〔2010〕42号</option>
	    		
		<option value="0010011705" >0010011705|棚户区改造安置住房建设用地免土地税|《财政部 国家税务总局关于棚户区改造有关税收政策的通知》 财税〔2013〕101号第一条</option>
	    		
		<option value="0010011706" >0010011706|公共租赁住房用地免土地税|《财政部 国家税务总局关于促进公共租赁住房发展有关税收优惠政策的通知》 财税〔2014〕52号第一条</option>
	    		
		<option value="0010011707" >0010011707|公共租赁住房用地免土地税|《财政部 国家税务总局关于公共租赁住房税收优惠政策的通知》 财税〔2015〕139号第一条</option>
	    		
		<option value="0010012701" >0010012701|安置残疾人就业单位用地减免土地税|《财政部 国家税务总局关于安置残疾人就业单位城镇土地使用税等政策的通知》 财税〔2010〕121号第一条</option>
	    		
		<option value="0010012702" >0010012702|福利性非营利性老年服务机构土地免土地税|《财政部 国家税务总局关于对老年服务机构有关税收政策问题的通知》 财税〔2000〕97号第一条</option>
	    		
		<option value="0010019901" >0010019901|农产品批发市场、农贸市场用地免土地税|《财政部 国家税务总局关于农产品批发市场 农贸市场房产税 城镇土地使用税政策的通知》 财税〔2012〕68号第一条</option>
	    		
		<option value="0010019902" >0010019902|农贸市场（集贸市场）用地免土地税|《国家税务局关于印发<关于土地使用税若干具体问题的补充规定>的通知》 （89）国税地字第140号第五条</option>
	    		
		<option value="0010019903" >0010019903|落实私房政策后的房屋用地减免土地税|《国家税务局关于印发<关于土地使用税若干具体问题的补充规定>的通知》 （89）国税地字第140号第七条</option>
	    		
		<option value="0010019904" >0010019904|大宗商品仓储设施用地城镇土地使用税优惠|《财政部 国家税务总局关于继续实施物流企业大宗商品仓储设施用地城镇土地使用税优惠政策的通知》财税﹝2015﹞98号第一条</option>
	    		
		<option value="0010019905" >0010019905|农产品批发市场、农贸市场用地免土地税|《财政部 国家税务总局关于继续实行农产品批发市场 农贸市场房产税 城镇土地使用税优惠政策的通知》 财税〔2016〕1号第一条</option>
	    		
		<option value="0010019906" >0010019906|大宗商品仓储设施用地城镇土地使用税优惠|《财政部 国家税务总局关于继续实施物流企业大宗商品仓储设施用地城镇土地使用税优惠政策的通知》  财税﹝2017﹞33号第一条</option>
	    		
		<option value="0010019907" >0010019907|承租大宗商品仓储设施用地城镇土地使用税优惠|《财政部 税务总局关于物流企业承租的用于大宗商品仓储设施的土地城镇土地使用税优惠政策的通知》 财税〔2018〕62号</option>
	    		
		<option value="0010021901" >0010021901|非营利性科研机构自用土地免土地税|《财政部 国家税务总局关于非营利性科研机构税收政策的通知》 财税〔2001〕5号第二条第（三）款</option>
	    		
		<option value="0010021904" >0010021904|国家大学科技园和科技企业孵化器免征城镇土地使用税|《财政部 国家税务总局关于延长国家大学科技园和科技企业孵化器税收政策执行期限的通知》 财税〔2011〕59号</option>
	    		
		<option value="0010021905" >0010021905|孵化器自用及提供孵化企业使用土地免土地税|《财政部 国家税务总局关于科技企业孵化器税收政策的通知》 财税〔2013〕117号第一条</option>
	    		
		<option value="0010021906" >0010021906|科技园自用及提供孵化企业使用土地免土地税|《财政部 国家税务总局关于国家大学科技园税收政策的通知》 财税〔2013〕118号第一条</option>
	    		
		<option value="0010021907" >0010021907|科技园自用及提供孵化企业使用土地免土地税|《财政部 国家税务总局关于国家大学科技园税收政策的通知》 财税〔2016〕98号第一条</option>
	    		
		<option value="0010021908" >0010021908|孵化器自用及提供孵化企业使用土地免土地税|《财政部 国家税务总局关于科技企业孵化器税收政策的通知》 财税〔2016〕89号第一条</option>
	    		
		<option value="0010021909" >0010021909|大型客机和大型客机发动机整机设计制造企业免征城镇土地使用税|《财政部 国家税务总局关于大型客机和大型客机发动机整机设计制造企业房产税 城镇土地使用税政策的通知》 财税〔2016〕133号 </option>
	    		
		<option value="0010022001" >0010022001|转制科研机构的科研开发自用土地免土地税|《财政部 国家税务总局关于延长转制科研机构有关税收政策执行期限的通知》 财税〔2005〕14号第一条、第三条</option>
	    		
		<option value="0010022002" >0010022002|转制科研机构的科研开发自用土地免土地税|《财政部 国家税务总局关于转制科研机构有关税收政策问题的通知》 财税〔2003〕137号第一条</option>
	    		
		<option value="0010033301" >0010033301|青藏铁路公司及其所属单位自用土地免土地税|《财政部 国家税务总局关于青藏铁路公司运营期间有关税收等政策问题的通知》 财税〔2007〕11号第五条</option>
	    		
		<option value="0010052401" >0010052401|大秦公司市场化运作前其自用土地免土地税|《财政部 国家税务总局关于大秦铁路改制上市有关税收问题的通知》 财税〔2006〕32号第四条</option>
	    		
		<option value="0010052402" >0010052402|广深公司承租广铁集团铁路运输用地免土地税|《财政部 国家税务总局关于广深铁路股份有限公司改制上市和资产收购有关税收问题的通知》 财税〔2008〕12号第四条</option>
	    		
		<option value="0010052403" >0010052403|企业搬迁原场地不使用的免土地税|《国家税务局关于印发<关于土地使用税若干具体问题的补充规定>的通知》 （89）国税地字第140号第十条</option>
	    		
		<option value="0010061001" >0010061001|企业厂区以外的公共绿化用地免土地税|《国家税务局关于印发<关于土地使用税若干具体问题的补充规定>的通知》 （89）国税地字第140号第十三条</option>
	    		
		<option value="0010061002" >0010061002|天然林二期工程专用土地免土地税|《财政部 国家税务总局关于天然林保护工程（二期）实施企业和单位房产税、城镇土地使用税政策的通知》 财税〔2011〕90号第一条</option>
	    		
		<option value="0010061003" >0010061003|天然林二期工程森工企业闲置土地免土地税|《财政部 国家税务总局关于天然林保护工程（二期）实施企业和单位房产税、城镇土地使用税政策的通知》 财税〔2011〕90号第二条</option>
	    		
		<option value="0010064002" >0010064002|居民供热使用土地免土地税|《财政部 国家税务总局关于继续执行供热企业增值税 房产税 城镇土地使用税优惠政策的通知》 财税〔2011〕118号第二条</option>
	    		
		<option value="0010064003" >0010064003|居民供热使用土地免土地税|《财政部 国家税务总局关于供热企业增值税 房产税 城镇土地使用税优惠政策的通知》 财税〔2016〕94号第二条</option>
	    		
		<option value="0010064201" >0010064201|电力行业部分用地免土地税|《国家税务局关于电力行业征免土地使用税问题的规定》 （89）国税地字第013号第一、二、三条</option>
	    		
		<option value="0010064202" >0010064202|核工业总公司所属企业部分用地免土地税|《国家税务局关于对核工业总公司所属企业征免土地使用税问题的若干规定》 （89）国税地字第007号第一条</option>
	    		
		<option value="0010064203" >0010064203|核电站部分用地减免土地税|《财政部 国家税务总局关于核电站用地征免城镇土地使用税的通知》 财税〔2007〕124号</option>
	    		
		<option value="0010083901" >0010083901|4家金融资产公司处置房地产免土地税|《财政部 国家税务总局关于中国信达等4家金融资产管理公司税收政策问题的通知》 财税〔2001〕10号</option>
	    		
		<option value="0010083902" >0010083902|接收港澳国际（集团）有限公司的房产|《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号第二条第（三）款、第三条第（二）款</option>
	    		
		<option value="0010083903" >0010083903|被撤销金融机构清算期间自有的或从债务方接收的房地产|《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第（二）款</option>
	    		
		<option value="0010083905" >0010083905|4家金融资产公司处置房地产免土地税|《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号第一条</option>
	    		
		<option value="0010092301" >0010092301|农村饮水工程运营管理单位自用土地免土地税|《财政部 国家税务总局关于支持农村饮水安全工程建设运营税收政策的通知》 财税〔2012〕30号第三条</option>
	    		
		<option value="0010092302" >0010092302|农村饮水工程运营管理单位自用土地免土地税|《财政部 国家税务总局关于继续实行农村饮水安全工程建设运营税收优惠政策的通知》 财税〔2016〕19号第三条</option>
	    		
		<option value="0010101401" >0010101401|学校、托儿所、幼儿园自用土地免土地税|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第二条</option>
	    		
		<option value="0010102901" >0010102901|符合条件的体育场馆减免城镇土地使用税|《财政部 国家税务总局关于体育场馆房产税和城镇土地使用税政策的通知》 财税〔2015〕130号</option>
	    		
		<option value="0010120702" >0010120702|航空航天公司专属用地免土地税|《财政部 国家税务总局关于对中国航空、航天、船舶工业总公司所属军工企业免征土地使用税的若干规定的通知》 财税〔1995〕27号第一、二条</option>
	    		
		<option value="0010121301" >0010121301|铁道部所属铁路运输企业自用土地免土地税|《财政部 国家税务总局关于调整铁路系统房产税城镇土地使用税政策的通知》 财税〔2003〕149号第一条</option>
	    		
		<option value="0010121303" >0010121303|地方铁路运输企业自用土地免土地税|《财政部 国家税务总局关于明确免征房产税城镇土地使用税的铁路运输企业范围及有关问题的通知》 财税〔2004〕36号第二条</option>
	    		
		<option value="0010121304" >0010121304|港口的码头用地免土地税|《国家税务局关于对交通部门的港口用地征免土地使用税问题的规定 》 （89）国税地字第123号第一条</option>
	    		
		<option value="0010121305" >0010121305|民航机场规定用地免土地税|《国家税务局关于对民航机场用地征免土地使用税问题的规定 》 （89）国税地字第032号第一、二条</option>
	    		
		<option value="0010121306" >0010121306|股改铁路运输企业及合资铁路运输公司自用的房产免土地税|《财政部 国家税务总局关于股改及合资铁路运输企业房产税、城镇土地使用税有关政策的通知》 财税〔2009〕132号</option>
	    		
		<option value="0010121307" >0010121307|城市公交站场、道路客运站场的运营用地免土地税|《财政部 国家税务总局关于对城市公交站场道路客运站场免征城镇土地使用税的通知》 财税〔2013〕20号第一条</option>
	    		
		<option value="0010121308" >0010121308|厂区外未加隔离的企业铁路专用线用地免土地税|《国家税务局关于印发<关于土地使用税若干具体问题的补充规定>的通知》 （89）国税地字第140号第十一条</option>
	    		
		<option value="0010121309" >0010121309|城市公交站场、道路客运站场的运营用地免土地税|《财政部 国家税务总局关于对城市公交站场道路客运站场免征城镇土地使用税的通知》 财税〔2016〕16号第一条</option>
	    		
		<option value="0010122602" >0010122602|国家石油储备基地第一期项目用地免土地税|《财政部 国家税务总局关于国家石油储备基地建设有关税收政策的通知》 财税〔2005〕23号第一条</option>
	    		
		<option value="0010122603" >0010122603|商品储备管理公司及其直属库储备业务自用土地免土地税|《财政部 国家税务总局关于部分国家储备商品有关税收政策的通知》 财税〔2013〕59号第二条</option>
	    		
		<option value="0010122604" >0010122604|国家石油储备基地第二期项目用地免土地税|《财政部 国家税务总局关于国家石油储备基地有关税收政策的通知》 财税〔2011〕80号</option>
	    		
		<option value="0010122605" >0010122605|商品储备管理公司及其直属库储备业务自用土地免土地税|《财政部 国家税务总局关于部分国家储备商品有关税收政策的通知》 财税〔2016〕28号第二条</option>
	    		
		<option value="0010123401" >0010123401|血站自用的土地免土地税|《财政部 国家税务总局关于血站有关税收问题的通知》 财税字〔1999〕264号第一条</option>
	    		
		<option value="0010123402" >0010123402|非营利性医疗，疾病控制，妇幼保健机构自用的土地免土地税|《财政部 国家税务总局关于医疗卫生机构有关税收政策的通知》 财税〔2000〕42号第一条第（五）项、第三条第（二）项</option>
	    		
		<option value="0010123403" >0010123403|营利性医疗机构自用的土地3年内免土地税|《财政部 国家税务总局关于医疗卫生机构有关税收政策的通知》 财税〔2000〕42号第二条第（一）项</option>
	    		
		<option value="0010125002" >0010125002|免税单位无偿使用的土地免土地税|《国家税务局关于印发<关于土地使用税若干具体问题的补充规定>的通知》 （89）国税地字第140号第一条</option>
	    		
		<option value="0010125003" >0010125003|劳改劳教单位相关用地免土地税|《国家税务局关于对司法部所属的劳改劳教单位征免土地使用税问题的规定》 （89）国税地字第119号第一、二、三条</option>
	    		
		<option value="0010129901" >0010129901|地下建筑用地暂按50%征收免土地税|《财政部 国家税务总局关于房产税城镇土地使用税有关问题的通知》 财税〔2009〕128号第四条</option>
	    		
		<option value="0010129902" >0010129902|采摘观光的种植养殖土地免土地税|《财政部 国家税务总局关于房产税城镇土地使用税有关政策的通知》 财税〔2006〕186号第三条</option>
	    		
		<option value="0010129906" >0010129906|水利设施及其管护用地免土地税|《国家税务局关于水利设施用地征免土地使用税问题的规定》 （89）国税地字第014号第一、二条</option>
	    		
		<option value="0010129907" >0010129907|防火防爆防毒等安全用地免土地税|《国家税务局关于印发<关于土地使用税若干具体问题的补充规定>的通知》 （89）国税地字第140号第八条</option>
	    		
		<option value="0010129908" >0010129908|物流企业大宗商品仓储设施用地减征城镇土地使用税|《财政部 国家税务总局关于物流企业大宗商品仓储设施用地城镇土地使用税政策的通知》 财税〔2012〕13号第一条</option>
	    		
		<option value="0010129909" >0010129909|矿山企业生产专用地免土地税|《国家税务局关于对矿山企业征免土地使用税问题的通知》 （89）国税地字第122号第一、二条</option>
	    		
		<option value="0010129910" >0010129910|煤炭企业规定用地免土地税|《国家税务局关于对煤炭企业用地征免土地使用税问题的规定 》 （89）国税地字第089号第一条</option>
	    		
		<option value="0010129911" >0010129911|盐场的盐滩盐矿的矿井用地免土地税|《国家税务局关于对盐场、盐矿征免城镇土地使用税问题的通知》 （89）国税地字第141号第二条</option>
	    		
		<option value="0010129912" >0010129912|中国石油天然气总公司所属企业用地免土地税|《国家税务局关于对中国石油天然气总公司所属单位用地征免土地使用税问题的规定》 （89）国税地字第88号第一、二条</option>
	    		
		<option value="0010129913" >0010129913|林业系统相关用地免土地税|《国家税务局关于林业系统征免土地使用税问题的通知》 国税函发〔1991〕1404号第一条</option>
	    		
		<option value="0010129914" >0010129914|中海油总公司及其所属公司用地免土地税|《国家税务局关于对中国海洋石油总公司及其所属公司用地征免土地使用税问题的规定》 国税油发〔1990〕3号第一条</option>
	    		
		<option value="0010129917" >0010129917|纳税人困难性减免土地税|《国务院关于修改<中华人民共和国城镇土地使用税暂行条例>的决定》 中华人民共和国国务院令第483号第七条</option>
	    		
		<option value="0010129918" >0010129918|开山填海整治土地和改造废弃土地免土地税|《国务院关于修改<中华人民共和国城镇土地使用税暂行条例>的决定》 中华人民共和国国务院令第483号第六条</option>
	    		
		<option value="0010129919" >0010129919|企业已售房改房占地免土地税|《财政部 国家税务总局关于房改房用地未办理土地使用权过户期间城镇土地使用税政策的通知》 财税〔2013〕44号</option>
	    		
		<option value="0010129920" >0010129920|廉租房用地免土地税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第二款</option>
	    		
		<option value="0010129921" >0010129921|企业的荒山、林地、湖泊等占地减半征收土地税|《财政部 国家税务总局关于企业范围内荒山 林地 湖泊等占地城镇土地使用税有关政策的通知》 财税〔2014〕1号</option>
	    		
		<option value="0010129924" >0010129924|石油天然气生产企业部分用地免土地税|《财政部 国家税务总局关于石油天然气生产企业城镇土地使用税政策的通知》 财税〔2015〕76号　</option>
	    		
		<option value="0010129999" >0010129999|中国人民银行总行所属分支机构用地|其他</option>
	    		
		<option value="0010129999" >0010129999|其他|其他</option>
	    		
		<option value="0010129999" >0010129999|军队系统自用土地免土地税|其他</option>
	    		
		<option value="0010129999" >0010129999|办理了土地使用权过户手续房改房用地免土地税|其他</option>
	    		
		<option value="0010129999" >0010129999|建材企业的采石场、排土场等用地免征土地使用税|其他</option>
	    		
		<option value="0010129999" >0010129999|武警部队用地免土地税|其他</option>
	    		
		<option value="0010129999" >0010129999|经济适用住房建设用地及占地免土地税|其他</option>
	    		
		<option value="0010129999" >0010129999|集体和个人办的医院用地免土地税|其他</option>
	    		
		<option value="0011011602" >0011011602|受灾地区安居房建设用地转让免征土地增值税|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号第三条第1项</option>
	    		
		<option value="0011011603" >0011011603|受灾地区安居房建设用地转让免征土地增值税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第三条第1项</option>
	    		
		<option value="0011011604" >0011011604|受灾居民安居房建设用地转让免征土地增值税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第三条第1项</option>
	    		
		<option value="0011011605" >0011011605|受灾居民安居房建设用地转让免征土地增值税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第三条第1项</option>
	    		
		<option value="0011011701" >0011011701|对个人销售住房暂免征收土地增值税|《财政部 国家税务总局关于调整房地产交易环节税收政策的通知》 财税〔2008〕137号第三条</option>
	    		
		<option value="0011011702" >0011011702|转让旧房作为保障性住房且增值额未超过扣除项目金额20%的免征土地增值税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第（三）项</option>
	    		
		<option value="0011011703" >0011011703|企事业单位、社会团体以及其他组织转让旧房作为公租房房源，且增值额未超过扣除项目金额20%的免征土地增值税|《财政部 国家税务总局关于支持公共租赁住房建设和运营有关税收优惠政策的通知》 财税〔2010〕88号第四条</option>
	    		
		<option value="0011011703" >0011011703|转让旧房作为公共租赁住房房源、且增值额未超过扣除项目金额20%的免征土地增值税|《财政部 国家税务总局关于支持公共租赁住房建设和运营有关税收优惠政策的通知》 财税〔2010〕88号第四条</option>
	    		
		<option value="0011011704" >0011011704|普通标准住宅增值率不超过20%的土地增值税减免|《中华人民共和国土地增值税暂行条例》 中华人民共和国国务院令第138号第八条第（一）项</option>
	    		
		<option value="0011011706" >0011011706|企事业单位、社会团体以及其他组织转让旧房作为公租房房源，且增值额未超过扣除项目金额20%的免征土地增值税|《财政部 国家税务总局关于城市和国有工矿棚户区改造项目有关税收优惠政策的通知》 财税〔2010〕42号</option>
	    		
		<option value="0011011707" >0011011707|转让旧房作为保障性住房且增值额未超过扣除项目金额20%的免征土地增值税|《财政部 国家税务总局关于棚户区改造有关税收政策的通知》 财税〔2013〕101号第二条</option>
	    		
		<option value="0011011708" >0011011708|转让旧房作为公共租赁住房房源、且增值额未超过扣除项目金额20%的免征土地增值税|《财政部 国家税务总局关于促进公共租赁住房发展有关税收优惠政策的通知》 财税〔2014〕52号第四条</option>
	    		
		<option value="0011011709" >0011011709|转让旧房作为公共租赁住房房源、且增值额未超过扣除项目金额20%的免征土地增值税|《财政部 国家税务总局关于公共租赁住房税收优惠政策的通知》 财税〔2015〕139号第四条</option>
	    		
		<option value="0011052401" >0011052401|对企业改制、资产整合过程中涉及的土地增值税予以免征|《财政部 国家税务总局关于中国邮政储蓄银行改制上市有关税收政策的通知》 财税〔2013〕53号第四条</option>
	    		
		<option value="0011052501" >0011052501|对企业改制、资产整合过程中涉及的土地增值税予以免征|《财政部 国家税务总局关于中国邮政集团公司邮政速递物流业务重组改制有关税收问题的通知》 财税〔2011〕116号第二条</option>
	    		
		<option value="0011059901" >0011059901|对企业改制、资产整合过程中涉及的土地增值税予以免征|《财政部 国家税务总局关于中国中信集团公司重组改制过程中土地增值税等政策的通知》 财税〔2013〕3号第一条</option>
	    		
		<option value="0011059902" >0011059902|对企业改制、资产整合过程中涉及的土地增值税予以免征|《财政部 国家税务总局关于中国联合网络通信集团有限公司转让CDMA网及其用户资产企业合并资产整合过程中涉及的增值税营业税印花税和土地增值税政策问题的通知》 财税〔2011〕13号第九、十、十一条</option>
	    		
		<option value="0011083901" >0011083901|对企业改制、资产整合过程中涉及的土地增值税予以免征|《财政部 国家税务总局关于中国信达等4家金融资产管理公司税收政策问题的通知》 财税〔2001〕10号</option>
	    		
		<option value="0011083902" >0011083902|对企业改制、资产整合过程中涉及的土地增值税予以免征|《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号第二条第4项、第三条第4项、第四条第4项</option>
	    		
		<option value="0011083903" >0011083903|对企业改制、资产整合过程中涉及的土地增值税予以免征|《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号第一条</option>
	    		
		<option value="0011102901" >0011102901|组委会赛后出让资产取得的收入免征土地增值税|《财政部 国家税务总局 海关总署关于第29届奥运会税收政策问题的通知》 财税〔2003〕10号</option>
	    		
		<option value="0011102902" >0011102902|亚运会组委会赛后出让资产取得的收入免征土地增值税|《财政部 海关总署 国家税务总局关于第16届亚洲运动会等三项国际综合运动会税收政策的通知》 财税〔2009〕94号第一条第6项</option>
	    		
		<option value="0011102902" >0011102902|组委会赛后出让资产取得的收入免征土地增值税|《财政部 海关总署 国家税务总局关于第16届亚洲运动会等三项国际综合运动会税收政策的通知》 财税〔2009〕94号第一条第6项</option>
	    		
		<option value="0011102903" >0011102903|对北京冬奥组委、北京冬奥会测试赛赛事组委会赛后再销售物品和出让资产免征土地增值税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（八）款</option>
	    		
		<option value="0011103201" >0011103201|上海世博会出让资产免征土地增值税|《财政部 国家税务总局关于2010年上海世博会有关税收政策问题的通知》 财税〔2005〕180号第一条第（二）项</option>
	    		
		<option value="0011129901" >0011129901|被撤销金融机构清偿债务免征土地增值税|《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第4项</option>
	    		
		<option value="0011129902" >0011129902|因城市实施规划、国家建设需要而搬迁，纳税人自行转让房地产免征土地增值税|《财政部 国家税务总局关于土地增值税若干问题的通知》 财税〔2006〕21号第一、四条</option>
	    		
		<option value="0011129903" >0011129903|以房地产进行投资联营的土地增值税减免,企业兼并转让房地产的土地增值税减免,合作建房自用的土地增值税减免|《财政部 国家税务总局关于土地增值税一些具体问题规定的通知》 财税字〔1995〕48号第二条</option>
	    		
		<option value="0011129905" >0011129905|因国家建设需要依法征用、收回的房地产土地增值税减免|《中华人民共和国土地增值税暂行条例》 中华人民共和国国务院令第138号第八条第（二）项</option>
	    		
		<option value="0011129906" >0011129906|转让旧房作为保障性住房且增值额未超过扣除项目金额20%的免征土地增值税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第（三）项</option>
	    		
		<option value="0011129999" >0011129999|其他|其他</option>
	    		
		<option value="0011129999" >0011129999|对企业改制、资产整合过程中涉及的土地增值税予以免征|其他</option>
	    		
		<option value="0012011601" >0012011601|对受严重自然灾害影响纳税困难的，减免车船税|《中华人民共和国车船税法》 中华人民共和国主席令第43号第四条</option>
	    		
		<option value="0012011602" >0012011602|对受严重自然灾害影响纳税困难的，减免车船税|《财政部 国家税务总局关于认真落实抗震救灾及灾后重建税收政策问题的通知》 财税〔2008〕62号第七条</option>
	    		
		<option value="0012061001" >0012061001|节约能源、使用新能源的车船减免车船税|《中华人民共和国车船税法》 中华人民共和国主席令第43号第四条</option>
	    		
		<option value="0012081501" >0012081501|被撤销金融机构免征车船使用税|《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第2项</option>
	    		
		<option value="0012099901" >0012099901|捕捞、养殖渔船免征车船税|《中华人民共和国车船税法》 中华人民共和国主席令第43号第三条第（一）项</option>
	    		
		<option value="0012102901" >0012102901|组委会免征车船税|《财政部 海关总署 国家税务总局关于第三届亚洲沙滩运动会税收政策的通知》 财税〔2011〕11号第一条第7点</option>
	    		
		<option value="0012102902" >0012102902|组委会免征车船税|《财政部 海关总署 国家税务总局关于第16届亚洲运动会等三项国际综合运动会税收政策的通知》 财税〔2009〕94号第一条第8点</option>
	    		
		<option value="0012102903" >0012102903|组委会免征车船税|《财政部 海关总署 国家税务总局关于第二届夏季青年奥林匹克运动会等三项国际综合运动会税收政策的通知》 财税〔2013〕11号第一条第8点</option>
	    		
		<option value="0012102904" >0012102904|对北京冬奥组委、北京冬奥会测试赛赛事组委会免征车船税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（十）款</option>
	    		
		<option value="0012120701" >0012120701|军队、武警专用车船免征车船税|《中华人民共和国车船税法》 中华人民共和国主席令第43号第三条第（二）项</option>
	    		
		<option value="0012121302" >0012121302|对公共交通车船，农村居民拥有并主要在农村地区使用的摩托车、三轮汽车和低速载货汽车定期减征或者免征车船税|《中华人民共和国车船税法》 中华人民共和国主席令第43号第五条</option>
	    		
		<option value="0012123101" >0012123101|外国驻华使领馆、国际组织驻华代表机构及其有关人员的车船免征车船税|《中华人民共和国车船税法》 中华人民共和国主席令第43号第三条第（四）项</option>
	    		
		<option value="0012129999" >0012129999|其他特殊原因减免车船税|《中华人民共和国车船税法》 中华人民共和国主席令第43号第四条</option>
	    		
		<option value="0012129999" >0012129999|外国驻华使领馆、国际组织驻华代表机构及其有关人员的车船免征车船税|《中华人民共和国车船税法》 中华人民共和国主席令第43号第四条</option>
	    		
		<option value="0012129999" >0012129999|警用车船免征车船税|《中华人民共和国车船税法》 中华人民共和国主席令第43号第四条</option>
	    		
		<option value="0013011602" >0013011602|用于抢险救灾新购特种车辆，免征车辆购置税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号</option>
	    		
		<option value="0013011603" >0013011603|防汛车辆|《财政部 国家税务总局关于防汛专用等车辆免征车辆购置税的通知》 财税〔2001〕39号第一条</option>
	    		
		<option value="0013011606" >0013011606|芦山地震灾后恢复重建|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第四条第4项</option>
	    		
		<option value="0013011607" >0013011607|鲁甸地震灾后恢复重建|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第四条第4项</option>
	    		
		<option value="0013061001" >0013061001|城市公交企业购置公共汽电车辆|《财政部 国家税务总局关于城市公交企业购置公共汽电车辆免征车辆购置税的通知》 财税〔2012〕51号</option>
	    		
		<option value="0013061002" >0013061002|新能源汽车|《中华人民共和国财政部 国家税务总局 中华人民共和国工业和信息化部关于免征新能源汽车车辆购置税的公告》 中华人民共和国财政部 国家税务总局 中华人民共和国工业和信息化部公告2014年第53号</option>
	    		
		<option value="0013061003" >0013061003|城市公交企业购置公共汽电车辆|《财政部 国家税务总局关于城市公交企业购置公共汽电车免征车辆购置税的通知》 财税〔2016〕84号</option>
	    		
		<option value="0013061004" >0013061004|新能源汽车|《财政部 税务总局 工业和信息化部 科技部关于免征新能源汽车车辆购置税的公告》 2017年第172号第一条</option>
	    		
		<option value="0013099901" >0013099901|农用三轮运输车|《财政部 国家税务总局关于农用三轮车免征车辆购置税的通知》 财税〔2004〕66号</option>
	    		
		<option value="0013102901" >0013102901|对北京冬奥组委、北京冬奥会测试赛赛事组委会免征新购车辆的车辆购置税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（十）款</option>
	    		
		<option value="0013120601" >0013120601|“母亲健康快车”项目专用车辆|《财政部 国家税务总局关于'母亲健康快车'项目专用车辆免征车辆购置税的通知》 财税〔2006〕176号</option>
	    		
		<option value="0013120603" >0013120603|“母亲健康快车”项目专用车辆|《财政部 国家税务总局关于2012年母亲健康快车项目流动医疗车免征车辆购置税的通知》 财税〔2012〕8号</option>
	    		
		<option value="0013120604" >0013120604|“母亲健康快车”项目专用车辆|《财政部 国家税务总局关于2007年母亲健康快车项目流动医疗车免征车辆购置税的通知》 财税〔2007〕140号</option>
	    		
		<option value="0013120701" >0013120701|中国人民解放军和中国人民武装警察部队列入军队武器装备订货计划的车辆|《中华人民共和国车辆购置税暂行条例》 中华人民共和国国务院令第294号第九条第（二）项</option>
	    		
		<option value="0013121301" >0013121301|减半征收挂车车辆购置税|《财政部 税务总局 工业和信息化部关于对挂车减征车辆购置税的公告》 财政部 税务总局 工业和信息化部公告2018年69号</option>
	    		
		<option value="0013125002" >0013125002|森林消防车辆|《财政部 国家税务总局关于防汛专用等车辆免征车辆购置税的通知》 财税〔2001〕39号第一条</option>
	    		
		<option value="0013129903" >0013129903|计划生育流动服务车|《财政部 国家税务总局关于免征计划生育流动服务车车辆购置税的通知》 财税〔2010〕78号</option>
	    		
		<option value="0013129904" >0013129904|外国驻华使馆、领事馆和国际组织驻华机构的车辆|《中华人民共和国车辆购置税暂行条例》 中华人民共和国国务院令第294号第九条第（一）项</option>
	    		
		<option value="0013129908" >0013129908|1.6升以下排量的乘用车减半征收|《财政部 国家税务总局关于减征1.6升及以下排量乘用车车辆购置税的通知》 财税〔2015〕104号</option>
	    		
		<option value="0013129909" >0013129909|来华专家购置车辆|《财政部 国家税务总局关于防汛专用等车辆免征车辆购置税的通知》 财税〔2001〕39号第三条</option>
	    		
		<option value="0013129910" >0013129910|外交人员自用车辆|《中华人民共和国车辆购置税暂行条例》 中华人民共和国国务院令第294号第九条第（一）项</option>
	    		
		<option value="0013129911" >0013129911|设有固定装置的非运输车辆（列入免税图册车辆）|《中华人民共和国车辆购置税暂行条例》 中华人民共和国国务院令第294号第九条第（三）项</option>
	    		
		<option value="0013129912" >0013129912|留学人员购买车辆|《财政部 国家税务总局关于防汛专用等车辆免征车辆购置税的通知》 财税〔2001〕39号第二条</option>
	    		
		<option value="0013129913" >0013129913|1.6升及以下排量乘用车减按75%征收|《财政部 国家税务总局关于减征1.6升及以下排量乘用车车辆购置税的通知》（财税〔2016〕136号）第一条</option>
	    		
		<option value="0013129999" >0013129999|其他|其他</option>
	    		
		<option value="0014011602" >0014011602|震后重建住房在规定标准内的部分免征耕地占用税|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号第三条第2项</option>
	    		
		<option value="0014011603" >0014011603|灾后重建住房在规定标准内的部分免征耕地占用税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第三条第2项</option>
	    		
		<option value="0014011604" >0014011604|震后重建住房在规定标准内的部分免征耕地占用税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第三条第2项</option>
	    		
		<option value="0014011605" >0014011605|震后重建住房在规定标准内的部分免征耕地占用税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第三条第2项</option>
	    		
		<option value="0014019901" >0014019901|耕地占用税困难性减免|《中华人民共和国耕地占用税暂行条例》 中华人民共和国国务院令第511号第十条第（二）项</option>
	    		
		<option value="0014092301" >0014092301|农村宅基地减征耕地占用税|《中华人民共和国耕地占用税暂行条例》 中华人民共和国国务院令第511号第十条</option>
	    		
		<option value="0014101401" >0014101401|学校、幼儿园、养老院、医院占用耕地免征耕地占用税|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第三条第1项</option>
	    		
		<option value="0014101402" >0014101402|学校、幼儿园、养老院、医院占用耕地免征耕地占用税|《中华人民共和国耕地占用税暂行条例》 中华人民共和国国务院令第511号第八条第（二）项</option>
	    		
		<option value="0014102901" >0014102901|对北京2022年冬奥会场馆及其配套设施建设占用耕地免征耕地占用税（同时适用于北京冬奥组委、北京冬奥会测试赛赛事组委会）|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（十五）款</option>
	    		
		<option value="0014120701" >0014120701|军事设施占用耕地免征耕地占用税|《中华人民共和国耕地占用税暂行条例》 中华人民共和国国务院令第511号第八条第（一）项</option>
	    		
		<option value="0014121301" >0014121301|交通运输设施占用耕地减征耕地占用税|《中华人民共和国耕地占用税暂行条例》 中华人民共和国国务院令第511号第九条</option>
	    		
		<option value="0014122601" >0014122601|石油储备基地第一期项目免征耕地占用税|《财政部 国家税务总局关于国家石油储备基地建设有关税收政策的通知》 财税〔2005〕23号第一条</option>
	    		
		<option value="0014122602" >0014122602|石油储备基地第二期项目免征耕地占用税|《财政部 国家税务总局关于国家石油储备基地有关税收政策的通知》 财税〔2011〕80号第一条</option>
	    		
		<option value="0014123401" >0014123401|学校、幼儿园、养老院、医院占用耕地免征耕地占用税|《中华人民共和国耕地占用税暂行条例》 中华人民共和国国务院令第511号第八条第（二）项</option>
	    		
		<option value="0014129999" >0014129999|其他|其他</option>
	    		
		<option value="0015011602" >0015011602|对受灾居民购买安居房免征契税|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号第三条第4项</option>
	    		
		<option value="0015011603" >0015011603|对受灾居民购买安居房免征契税|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号第三条第4项</option>
	    		
		<option value="0015011604" >0015011604|芦山地震灾民房屋免征契税|《财政部 海关总署 国家税务总局关于支持芦山地震灾后恢复重建有关税收政策问题的通知》 财税〔2013〕58号第三条第（四）款</option>
	    		
		<option value="0015011606" >0015011606|鲁甸地震灾民房屋免征契税|《财政部 海关总署 国家税务总局关于支持鲁甸地震灾后恢复重建有关税收政策问题的通知》 财税〔2015〕27号第三条第（四）款</option>
	    		
		<option value="0015011701" >0015011701|个人购买90平米及以下家庭唯一普通住房减按1%征收|《财政部 国家税务总局关于调整房地产交易环节税收政策的通知》 财税〔2008〕137号第一条</option>
	    		
		<option value="0015011702" >0015011702|个人购买自用普通住宅及销售积压空置的商品住房，免征契税|《财政部 国家税务总局关于调整房地产市场若干税收政策的通知》 财税字〔1999〕210号第一条</option>
	    		
		<option value="0015011704" >0015011704|已购公有住房补缴土地出让金和其他出让费用免征契税|《财政部 国家税务总局关于国有土地使用权出让等有关契税问题的通知》 财税〔2004〕134号第三条</option>
	    		
		<option value="0015011705" >0015011705|经营管理单位回购经适房继续用于经适房房源免征契税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第（五）项</option>
	    		
		<option value="0015011706" >0015011706|军建离退休干部住房及附属用房移交地方政府管理的免征契税|《财政部 国家税务总局关于免征军建离退休干部住房移交地方政府管理所涉及契税的通知》 财税字〔2000〕176号</option>
	    		
		<option value="0015011707" >0015011707|公共租赁住房经营管理单位购买住房作为公共租赁住房免征契税|《财政部 国家税务总局关于支持公共租赁住房建设和运营有关税收优惠政策的通知》 财税〔2010〕88号第三条</option>
	    		
		<option value="0015011707" >0015011707|经租房经营管理单位购买住房作为公租房的免征契税|《财政部 国家税务总局关于支持公共租赁住房建设和运营有关税收优惠政策的通知》 财税〔2010〕88号第三条</option>
	    		
		<option value="0015011709" >0015011709|个人购买家庭唯一普通住房减半征收契税|《财政部 国家税务总局 住房和城乡建设部关于调整房地产交易环节契税个人所得税优惠政策的通知》 财税〔2010〕94号第一条第（一）项</option>
	    		
		<option value="0015011710" >0015011710|城镇职工第一次购买公有住房|《中华人民共和国契税暂行条例》 中华人民共和国国务院令第224号第六条第（二）款</option>
	    		
		<option value="0015011711" >0015011711|支持改造安置房源的，免征契税|《财政部 国家税务总局关于城市和国有工矿棚户区改造项目有关税收优惠政策的通知》 财税〔2010〕42号第三、四、五条</option>
	    		
		<option value="0015011711" >0015011711|棚户区个人首次购买90平方米以下改造安置住房减按1%征收契税|《财政部 国家税务总局关于城市和国有工矿棚户区改造项目有关税收优惠政策的通知》 财税〔2010〕42号第三、四、五条</option>
	    		
		<option value="0015011711" >0015011711|棚户区被征收房屋取得货币补偿用于购买安置住房免征契税|《财政部 国家税务总局关于城市和国有工矿棚户区改造项目有关税收优惠政策的通知》 财税〔2010〕42号第三、四、五条</option>
	    		
		<option value="0015011711" >0015011711|棚户区购买符合普通住房标准的改造安置住房减半征收契税|《财政部 国家税务总局关于城市和国有工矿棚户区改造项目有关税收优惠政策的通知》 财税〔2010〕42号第三、四、五条</option>
	    		
		<option value="0015011711" >0015011711|经营管理单位回购改造安置住房仍为安置房免征契税|《财政部 国家税务总局关于城市和国有工矿棚户区改造项目有关税收优惠政策的通知》 财税〔2010〕42号第三、四、五条</option>
	    		
		<option value="0015011712" >0015011712|经营管理单位回购改造安置住房仍为安置房免征契税|《财政部 国家税务总局关于棚户区改造有关税收政策的通知》 财税〔2013〕101号第三条</option>
	    		
		<option value="0015011713" >0015011713|夫妻之间变更房屋、土地权属或共有份额免征契税|《财政部 国家税务总局关于夫妻之间房屋土地权属变更有关契税政策的通知》 财税〔2014〕4号</option>
	    		
		<option value="0015011714" >0015011714|土地使用权、房屋交换价格相等的免征，不相等的差额征收|《中华人民共和国契税暂行条例细则》 财法字〔1997〕52号第十条</option>
	    		
		<option value="0015011715" >0015011715|公共租赁住房经营管理单位购买住房作为公共租赁住房免征契税|《财政部 国家税务总局关于促进公共租赁住房发展有关税收优惠政策的通知》 财税〔2014〕52号第三条</option>
	    		
		<option value="0015011716" >0015011716|土地、房屋被县级以上政府征用、占用后重新承受土地、房屋权属减免契税|《中华人民共和国契税暂行条例细则》 财法字〔1997〕52号第十五条第（一）款</option>
	    		
		<option value="0015011717" >0015011717|因不可抗力灭失住房而重新购买住房减征或免征契税|《中华人民共和国契税暂行条例》 中华人民共和国国务院令第224号第六条第（三）款</option>
	    		
		<option value="0015011718" >0015011718|个人购买90平米及以下家庭唯一普通住房减按1%征收|《财政部 国家税务总局 住房和城乡建设部关于调整房地产交易环节契税个人所得税优惠政策的通知》 财税〔2010〕94号第一条第（一）项</option>
	    		
		<option value="0015011719" >0015011719|棚户区个人首次购买90平方米以下改造安置住房减按1%征收契税|《财政部 国家税务总局关于棚户区改造有关税收政策的通知》 财税〔2013〕101号第四条</option>
	    		
		<option value="0015011720" >0015011720|棚户区购买符合普通住房标准的改造安置住房减半征收契税|《财政部 国家税务总局关于棚户区改造有关税收政策的通知》 财税〔2013〕101号第四条</option>
	    		
		<option value="0015011721" >0015011721|棚户区被征收房屋取得货币补偿用于购买安置住房免征契税|《财政部 国家税务总局关于棚户区改造有关税收政策的通知》 财税〔2013〕101号第五条</option>
	    		
		<option value="0015011722" >0015011722|棚户区用改造房屋换取安置住房免征契税|《财政部 国家税务总局关于棚户区改造有关税收政策的通知》 财税〔2013〕101号第五条</option>
	    		
		<option value="0015011723" >0015011723|公共租赁住房经营管理单位购买住房作为公共租赁住房免征契税|《财政部 国家税务总局关于公共租赁住房税收优惠政策的通知》 财税〔2015〕139号第三条</option>
	    		
		<option value="0015011724" >0015011724|个人购买家庭唯一住房90平米及以下减按1%征收契税|《财政部 国家税务总局 住房城乡建设部关于调整房地产交易环节契税 营业税优惠政策的通知》 财税〔2016〕23号第一条第（一）项</option>
	    		
		<option value="0015011725" >0015011725|个人购买家庭唯一住房90平米以上减按1.5%征收契税|《财政部 国家税务总局 住房城乡建设部关于调整房地产交易环节契税 营业税优惠政策的通知》 财税〔2016〕23号第一条第（一）项</option>
	    		
		<option value="0015011726" >0015011726|个人购买家庭第二套改善性住房90平米及以下减按1%征收契税|《财政部 国家税务总局 住房城乡建设部关于调整房地产交易环节契税 营业税优惠政策的通知》 财税〔2016〕23号第一条第（二）项</option>
	    		
		<option value="0015011727" >0015011727|个人购买家庭第二套住房90平米以上减按2%征收契税|《财政部 国家税务总局 住房城乡建设部关于调整房地产交易环节契税 营业税优惠政策的通知》 财税〔2016〕23号第一条第（二）项</option>
	    		
		<option value="0015033301" >0015033301|青藏铁路公司承受土地、房屋权属用于办公及运输主业免征契税|《财政部 国家税务总局关于青藏铁路公司运营期间有关税收等政策问题的通知》 财税〔2007〕11号第四条</option>
	    		
		<option value="0015052401" >0015052401|企业改制契税优惠|《财政部 国家税务总局关于中国邮政储蓄银行改制上市有关税收政策的通知》 财税〔2013〕53号第五条</option>
	    		
		<option value="0015052505" >0015052505|事业单位改制企业承受原单位土地、房屋权属免征契税|《财政部 国家税务总局关于企业事业单位改制重组契税政策的通知》 财税〔2012〕4号第一条</option>
	    		
		<option value="0015052506" >0015052506|企业改制后公司承受原企业土地、房屋权属免征契税|《财政部 国家税务总局关于进一步支持企业事业单位改制重组有关契税政策的通知》 财税〔2015〕37号第一条</option>
	    		
		<option value="0015052507" >0015052507|事业单位改制企业承受原单位土地、房屋权属免征契税|《财政部 国家税务总局关于进一步支持企业事业单位改制重组有关契税政策的通知》 财税〔2015〕37号第二条</option>
	    		
		<option value="0015052508" >0015052508|公司合并后承受原公司土地、房屋权属免征契税|《财政部 国家税务总局关于进一步支持企业事业单位改制重组有关契税政策的通知》 财税〔2015〕37号第三条</option>
	    		
		<option value="0015052509" >0015052509|公司分立后承受原公司土地、房屋权属免征契税|《财政部 国家税务总局关于进一步支持企业事业单位改制重组有关契税政策的通知》 财税〔2015〕37号第四条</option>
	    		
		<option value="0015052510" >0015052510|企业破产承受破产企业抵偿债务的土地、房屋权属减征或免征契税|《财政部 国家税务总局关于进一步支持企业事业单位改制重组有关契税政策的通知》 财税〔2015〕37号第五条</option>
	    		
		<option value="0015052511" >0015052511|承受行政性调整、划转土地、房屋权属免征契税|《财政部 国家税务总局关于进一步支持企业事业单位改制重组有关契税政策的通知》 财税〔2015〕37号第六条第（一）款</option>
	    		
		<option value="0015052512" >0015052512|承受同一投资主体内部划转土地、房屋权属免征契税|《财政部 国家税务总局关于进一步支持企业事业单位改制重组有关契税政策的通知》 财税〔2015〕37号第六条第（二）款</option>
	    		
		<option value="0015052513" >0015052513|债权转股权后新设公司承受原企业的土地、房屋权属免征契税|《财政部 国家税务总局关于进一步支持企业事业单位改制重组有关契税政策的通知》 财税〔2015〕37号第七条</option>
	    		
		<option value="0015052514" >0015052514|中国电信收购CDMA免征契税|《财政部 国家税务总局关于中国电信集团公司和中国电信股份有限公司收购CDMA网络资产和业务有关契税政策的通知》 财税〔2009〕42号</option>
	    		
		<option value="0015052515" >0015052515|企业改制后公司承受原企业土地、房屋权属免征契税|《财政部 税务总局关于继续支持企业 事业单位改制重组有关契税政策的通知》 财税〔2018〕17号第一条</option>
	    		
		<option value="0015052516" >0015052516|事业单位改制企业承受原单位土地、房屋权属免征契税|《财政部 税务总局关于继续支持企业 事业单位改制重组有关契税政策的通知》 财税〔2018〕17号第二条</option>
	    		
		<option value="0015052517" >0015052517|公司合并后承受原公司土地、房屋权属免征契税|《财政部 税务总局关于继续支持企业 事业单位改制重组有关契税政策的通知》 财税〔2018〕17号第三条</option>
	    		
		<option value="0015052518" >0015052518|公司分立后承受原公司土地、房屋权属免征契税|《财政部 税务总局关于继续支持企业 事业单位改制重组有关契税政策的通知》 财税〔2018〕17号第四条</option>
	    		
		<option value="0015052519" >0015052519|企业破产承受破产企业抵偿债务的土地、房屋权属减征或免征契税|《财政部 税务总局关于继续支持企业 事业单位改制重组有关契税政策的通知》 财税〔2018〕17号第五条</option>
	    		
		<option value="0015052520" >0015052520|承受行政性调整、划转土地、房屋权属免征契税|《财政部 税务总局关于继续支持企业 事业单位改制重组有关契税政策的通知》 财税〔2018〕17号第六条第一款</option>
	    		
		<option value="0015052521" >0015052521|承受同一投资主体内部划转土地、房屋权属免征契税|《财政部 税务总局关于继续支持企业 事业单位改制重组有关契税政策的通知》 财税〔2018〕17号第六条第二款</option>
	    		
		<option value="0015052522" >0015052522|子公司承受母公司增资土地、房屋权属免征契税|《财政部 税务总局关于继续支持企业 事业单位改制重组有关契税政策的通知》 财税〔2018〕17号第六条第三款</option>
	    		
		<option value="0015052523" >0015052523|债权转股权后新设公司承受原企业的土地、房屋权属免征契税|《财政部 税务总局关于继续支持企业 事业单位改制重组有关契税政策的通知》 财税〔2018〕17号第七条</option>
	    		
		<option value="0015059901" >0015059901|债权转股权后新设公司承受原企业的土地、房屋权属免征契税|《财政部 国家税务总局关于企业改制重组若干契税政策的通知》 财税〔2008〕175号第七条</option>
	    		
		<option value="0015059901" >0015059901|对债权转股权后新设立的公司承受原企业的土地房屋权属免征契税|《财政部 国家税务总局关于企业改制重组若干契税政策的通知》 财税〔2008〕175号第七条</option>
	    		
		<option value="0015081502" >0015081502|被撤销金融机构接收债务方土地使用权、房屋所有权免征契税|《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第（三）款</option>
	    		
		<option value="0015083903" >0015083903|农村信用社接收农村合作基金会的房屋、土地使用权免征契税|《中国人民银行 农业部 国家发展计划委员会 财政部 国家税务总局关于免缴农村信用社接收农村合作基金会财产产权过户税费的通知》 银发〔2000〕21号</option>
	    		
		<option value="0015083904" >0015083904|中国东方资产管理公司处置港澳国际（集团）有限公司过程中规定的免征契税|《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号第二条第2款，第三条第3款、第四条第3款</option>
	    		
		<option value="0015083905" >0015083905|4家金融资产公司接受相关国有银行的不良债权，借款方以土地使用权、房屋所有权抵充贷款本息的免征契税|《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号第一、二条</option>
	    		
		<option value="0015092301" >0015092301|农村饮水工程承受土地使用权免征契税|《财政部 国家税务总局关于支持农村饮水安全工程建设运营税收政策的通知》 财税〔2012〕30号第一条</option>
	    		
		<option value="0015092302" >0015092302|农村饮水工程承受土地使用权免征契税|《财政部 国家税务总局关于继续实行农村饮水安全工程建设运营税收优惠政策的通知》 财税〔2016〕19号第一条</option>
	    		
		<option value="0015092303" >0015092303|农村集体经济组织股份制改革免征契税|《财政部 税务总局关于支持农村集体产权制度改革有关税收政策的通知》 财税〔2017〕55号第一条</option>
	    		
		<option value="0015092304" >0015092304|农村集体经济组织清产核资免征契税|《财政部 税务总局关于支持农村集体产权制度改革有关税收政策的通知》 财税〔2017〕55号第二条第一款</option>
	    		
		<option value="0015099901" >0015099901|承受荒山等土地使用权用于农、林、牧、渔业生产免征契税|《中华人民共和国契税暂行条例细则》 财法字〔1997〕52号第十五条第（二）款</option>
	    		
		<option value="0015101402" >0015101402|社会力量办学、用于教学承受的土地、房屋免征契税|《财政部 国家税务总局关于社会力量办学契税政策问题的通知》 财税〔2001〕156号</option>
	    		
		<option value="0015122601" >0015122601|国家石油储备基地第一期项目免征契税|《财政部 国家税务总局关于国家石油储备基地建设有关税收政策的通知》 财税〔2005〕23号第一条</option>
	    		
		<option value="0015122602" >0015122602|国家石油储备基地第二期项目免征契税|《财政部 国家税务总局关于国家石油储备基地有关税收政策的通知》 财税〔2011〕80号</option>
	    		
		<option value="0015129901" >0015129901|夫妻之间变更房屋、土地权属或共有份额免征契税|《财政部 国家税务总局关于房屋土地权属由夫妻一方所有变更为夫妻双方共有契税政策的通知》 财税〔2011〕82号</option>
	    		
		<option value="0015129901" >0015129901|婚姻关系存续期间，房屋、土地权属原归夫妻一方所有，变更为夫妻双方共有的，免征契税|《财政部 国家税务总局关于房屋土地权属由夫妻一方所有变更为夫妻双方共有契税政策的通知》 财税〔2011〕82号</option>
	    		
		<option value="0015129902" >0015129902|售后回租期满，承租人回购原房屋、土地权属免征契税|《财政部 国家税务总局关于企业以售后回租方式进行融资等有关契税政策的通知》 财税〔2012〕82号第一条</option>
	    		
		<option value="0015129903" >0015129903|国家机关、事业单位、社会团体、军事单位公共单位用于教学、科研承受土地、房屋免征契税|《中华人民共和国契税暂行条例》 中华人民共和国国务院令第224号第六条第（一）款</option>
	    		
		<option value="0015129904" >0015129904|个人购买经济适用住房减半征收契税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第（六）款</option>
	    		
		<option value="0015129905" >0015129905|个人房屋被征收用补偿款新购房屋免征契税|《财政部 国家税务总局关于企业以售后回租方式进行融资等有关契税政策的通知》 财税〔2012〕82号第三条</option>
	    		
		<option value="0015129906" >0015129906|个人房屋征收房屋调换免征契税|《财政部 国家税务总局关于企业以售后回租方式进行融资等有关契税政策的通知》 财税〔2012〕82号第三条</option>
	    		
		<option value="0015129999" >0015129999|企业改制契税优惠|其他</option>
	    		
		<option value="0015129999" >0015129999|其他|其他</option>
	    		
		<option value="0015129999" >0015129999|外交部确认的外交人员承受土地、房屋权属免征契税|其他</option>
	    		
		<option value="0016064001" >0016064001|农业生产（不包括规模化养殖）排放应税污染物的暂予免征环境保护税|《中华人民共和国环境保护税法》 中华人民共和国主席令第61号第十二条第（一）款</option>
	    		
		<option value="0016064002" >0016064002|机动车、铁路机车、非道路移动机械、船舶和航空器等流动污染源排放应税污染物的暂予免征环境保护税|《中华人民共和国环境保护税法》 中华人民共和国主席令第61号第十二条第（二）款</option>
	    		
		<option value="0016064003" >0016064003|依法设立的城乡污水集中处理、生活垃圾集中处理场所排放相应应税污染物，不超过国家和地方规定的排放标准的暂予免征环境保护税|《中华人民共和国环境保护税法》 中华人民共和国主席令第61号第十二条第（三）款</option>
	    		
		<option value="0016064004" >0016064004|纳税人综合利用的固体废物，符合国家和地方环境保护标准的暂予免征环境保护税|《中华人民共和国环境保护税法》 中华人民共和国主席令第61号第十二条第（四）款</option>
	    		
		<option value="0016064005" >0016064005|国务院批准免税的其他情形暂予免征环境保护税|《中华人民共和国环境保护税法》 中华人民共和国主席令第61号第十二条第（五）款</option>
	    		
		<option value="0016064006" >0016064006|纳税人排放应税大气污染物或者水污染物的浓度值低于国家和地方规定的污染物排放标准百分之三十的减征环境保护税|《中华人民共和国环境保护税法》 中华人民共和国主席令第61号第十三条</option>
	    		
		<option value="0016064007" >0016064007|纳税人排放应税大气污染物或者水污染物的浓度值低于国家和地方规定的污染物排放标准百分之五十的减征环境保护税|《中华人民共和国环境保护税法》 中华人民共和国主席令第61号第十三条</option>
	    		
		<option value="0061011601" >0061011601|单位和个体经营者将货物捐赠给受灾地区的免征教育费附加|《财政部 海关总署 国家税务总局关于支持玉树地震灾后恢复重建有关税收政策问题的通知》 财税〔2010〕59号</option>
	    		
		<option value="0061011602" >0061011602|单位和个体经营者将货物捐赠给受灾地区的免征教育费附加|《财政部 海关总署 国家税务总局关于支持舟曲灾后恢复重建有关税收政策问题的通知》 财税〔2010〕107号</option>
	    		
		<option value="0061011801" >0061011801|安置自谋职业的城镇退役士兵企业免征教育费附加|《财政部 国家税务总局关于扶持城镇退役士兵自谋职业有关税收优惠政策的通知》 财税〔2004〕93号</option>
	    		
		<option value="0061042801" >0061042801|小微企业免征教育费附加|《财政部 国家税务总局关于对小微企业免征有关政府性基金的通知》 财税〔2014〕122号第一条</option>
	    		
		<option value="0061042802" >0061042802|按月纳税的月销售额或营业额不超过10万元缴纳义务人免征教育费附加|《财政部 国家税务总局关于扩大有关政府性基金免征范围的通知》 财税〔2016〕12号第一条</option>
	    		
		<option value="0061064001" >0061064001|广东核电投资有限公司销售给广东电网公司的电力免征教育费附加|《财政部 国家税务总局关于核电行业税收政策有关问题的通知》 财税〔2008〕38号第三条第2项</option>
	    		
		<option value="0061064002" >0061064002|国家重大水利工程建设基金免征教育费附加|《财政部 国家税务总局关于免征国家重大水利工程建设基金的城市维护建设税和教育费附加的通知》 财税〔2010〕44号</option>
	    		
		<option value="0061083901" >0061083901|金融资产管理公司收购、承接、处置不良资产免征教育费附加|《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号</option>
	    		
		<option value="0061129999" >0061129999|上海期货交易所会员和客户通过上海期货交易所销售标准黄金,发生实物交割并已出库的，免征教育费附加|其他</option>
	    		
		<option value="0061129999" >0061129999|其他|其他</option>
	    		
		<option value="0061129999" >0061129999|安置自谋职业的城镇退役士兵企业免征教育费附加|其他</option>
	    		
		<option value="0061129999" >0061129999|被撤销金融机构清偿债务免征教育费附加|其他</option>
	    		
		<option value="0061129999" >0061129999|除高校毕业生以外的失业人员从事个体经营，扣减教育费附加|其他</option>
	    		
		<option value="0061129999" >0061129999|高校毕业生从事个体经营，扣减教育费附加|其他</option>
	    		
		<option value="0062042801" >0062042801|小微企业免征文化事业建设费优惠|《财政部 国家税务总局关于营业税改征增值税试点有关文化事业建设费征收管理问题的通知》 财综〔2013〕88号第七条</option>
	    		
		<option value="0062042802" >0062042802|其他|《财政部 国家税务总局关于对部分营业税纳税人免征文化事业建设费的通知》 财综〔2013〕102号</option>
	    		
		<option value="0062042803" >0062042803|小微企业免征文化事业建设费优惠|《财政部 国家税务总局关于对小微企业免征有关政府性基金的通知》　财税〔2014〕122号第一条</option>
	    		
		<option value="0062129999" >0062129999|其他|其他</option>
	    		
		<option value="0099021901" >0099021901|光伏发电免征政府性基金|《财政部关于对分布式光伏发电自发自用电量免征政府性基金有关问题的通知》 财综〔2013〕103号</option>
	    		
		<option value="0099021901" >0099021901|光伏发电免征政府性基金|《财政部关于对分布式光伏发电自发自用电量免征政府性基金有关问题的通知》 财综〔2013〕103号</option>
	    		
		<option value="0099021901" >0099021901|光伏发电免征政府性基金|《财政部关于对分布式光伏发电自发自用电量免征政府性基金有关问题的通知》 财综〔2013〕103号</option>
	    		
		<option value="0099021901" >0099021901|光伏发电免征政府性基金|《财政部关于对分布式光伏发电自发自用电量免征政府性基金有关问题的通知》 财综〔2013〕103号</option>
	    		
		<option value="0099021901" >0099021901|光伏发电免征政府性基金|《财政部关于对分布式光伏发电自发自用电量免征政府性基金有关问题的通知》 财综〔2013〕103号</option>
	    		
		<option value="0099021901" >0099021901|光伏发电免征政府性基金|《财政部关于对分布式光伏发电自发自用电量免征政府性基金有关问题的通知》 财综〔2013〕103号</option>
	    		
		<option value="0099021901" >0099021901|光伏发电免征政府性基金|《财政部关于对分布式光伏发电自发自用电量免征政府性基金有关问题的通知》 财综〔2013〕103号</option>
	    		
		<option value="0099021901" >0099021901|光伏发电免征政府性基金|《财政部关于对分布式光伏发电自发自用电量免征政府性基金有关问题的通知》 财综〔2013〕103号</option>
	    		
		<option value="0099129999" >0099129999|其他|其他</option>
	    		
		<option value="0099129999" >0099129999|其他|其他</option>
	    		
		<option value="0099129999" >0099129999|其他|其他</option>
	    		
		<option value="0099129999" >0099129999|小微企业免征地方教育附加|其他</option>
	
</select>

			</td>
		  </tr>
		  <tr>
			<td><div align="right">本期已缴税额：</div></td>
			<td>&nbsp;</td>
			<td><input name="sbbVo['bqyjse1']" type="text" value="" onblur="yjeChange()"></td>
			<td>&nbsp;</td>
		  </tr>
		  
		  <tr>
			<td><div align="right">
			  <DIV title="本期应补（退）税（费）额(10=7-8-9)"><span style="color:#990000">*本期应补（退）税额：</span></DIV>
			</div></td>
			<td>&nbsp;</td>
			<td><input name="sbbVo['bqybtse']" type="text"  readonly="readonly" value="16,655"></td>
			<td><span class="STYLE3">=本期应纳税额-本期减免税额-本期已缴税额</span></td>
		  </tr>
		  <input type="hidden" name="sbbVo['sfzhm']" value=""/>
		  <input type="hidden" name="sbbVo['kjmse']" value=""/>
		  <input type="hidden" name="sbbVo['kyjse']" value="0.0"/>
		  <input type="hidden" name="sbbVo['sfjm']" value="N"/>
		  <input type="hidden" name="sbbVo['sfyj']" value=""/>
		  <input type="hidden" name="sbbVo['qzdje']" value=""/>
		   <input type="hidden" name="sbbVo['hdlx']" value="1"/>
		    <input type="hidden" name="sbbVo['hdlx2']" value=""/>
		  <input type="hidden" name="sbbVo['rdpzuuid']" value=""/>
		  <input type="hidden" name="sbbVo['yhpzuuid']"  />
		   <input type="hidden" name="yjskuuid" value=""  />
		  <input type="hidden" name="sbbVo['yjskuuid']"  />
		  <input type="hidden" name="sbbVo['yyqzdje']"  />
		  
      </table>
			<div align="center">
			   
           
         
         <input  type="button" onClick="qrtj('tj')" value="确认添加" >
         <input  type="button" onClick="location.href='/jsdzsb/yhssb/tjsbjl.do'" value="上一步">
        
       
      		
		   
			<input  type="button" onClick="location.href='/jsdzsb/yhssb/lb.do'" value="取消添加" >
			</div>
		</td>
	</table>
     <table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:30px;">
    <tr>
      <td valign="top" bgcolor="#EFF4FC" style="line-height:1.5"><p><font style=";color:red">说明：</font>根据《中华人民共和国印花税暂行条例》，应纳税额不足一角的，免纳印花税。应纳税额在一角以上的，其税额尾数不满五分的不计，满五分的按一角计算缴纳。财产租赁合同的应纳税额在一角以上但不满一元的，按一元计算缴纳。<br/>
          
		  <br/>
          </p></td>
    </tr>
    </table>
    <p>&nbsp;</p></td>
  </tr>
</table>

</form>
</div>

<script type="text/javascript">

    //印花税税目与核定核定比例对照
    var smArray = new Array("101110101","101110102","101110103","101110104","101110105","101110106","101110107","101110108","101110109","101110110","101110200","101110501");
    //数组第一个是税目名称，第二个是下限，第三个是上限
    var hdblArray = new Array(
    new Array("购销合同", 40, 100),new Array("加工承揽合同",40, 90),new Array("建设工程勘察设计合同", 80, 100),new Array("建筑安装工程承包合同", 80, 100),
    new Array("财产租赁合同",100, 100),new Array("货物运输合同",70, 100),new Array("仓储保管合同", 80, 100),new Array("借款合同",100, 100),
    new Array("财产保险合同",100, 100),new Array("技术合同",100, 100),new Array("产权转移书据",100, 100),new Array("资金帐簿",100, 100)
    );
    //税种变更时同步更新税目（营业税要更新输入项）

    function szChange() {
        var szObj = getObj("sbbVo['zsxmdm']");
        var smObj = $("#zspmdm")[0];
  
        var sz_id = szObj.value;
        var sm_id = smObj.value;
 
        //var jsslObj = getObj("sbbVo['JSSL']");
        var yyeObj = getObj("sbbVo['hdzshdde']");
        var hdblObj = getObj("sbbVo['hdzshdbl']");
        var jsjeObj = getObj("sbbVo['jsje']");

        //var lblJsslObj = document.getElementById("lbl_jssl");
        var lblYyeObj = document.getElementById("lbl_yye");
        var lblHdblObj = document.getElementById("lbl_hdbl");
        //var lblJsjeObj = document.getElementById("lbl_jsje");

        //税目为权利许可证照、其他营业帐簿、经财政部确定的其它凭证时，计税数量为必填项目，计税数额置空；且核定计税收入额(营业额)和核定比例等字段置空不可填。
        //税目为权利许可证照、其他营业帐簿、经财政部确定的其它凭证以外的其他项目时，计税数额为必填，计税数量为空。
        if(smObj.value =="101110400" || smObj.value == "101110599" || smObj.value == "101119800" ) {
            hdblObj.value = "";
            yyeObj.value = "";
            jsjeObj.value = "";
 
            lblYyeObj.style.color = "Gray";
            lblHdblObj.style.color = "Gray";
  
            hdblObj.readOnly = true;
            yyeObj.readOnly = true;
   
        } else {
            //hdblObj.value = 100;
            lblYyeObj.style.color = "black";
            lblHdblObj.style.color = "black";
            hdblObj.readOnly = false;
            yyeObj.readOnly = false;
            jsjeObj.readOnly = false;
        }
        return true;
    }

    //计算计税金额
    function calcJsje() {
        var smObj = $("#zspmdm")[0];
        var yyeVal = getObj("sbbVo['hdzshdde']").value;
        //var jsslVal = getObj("sbbVo['JSSL']").value;
        var jsjeObj = getObj("sbbVo['jsje']");
        var hdblVal = getObj("sbbVo['hdzshdbl']").value;
  
        yyeVal = getoff_Qfw(yyeVal);

        if(isEmpty(yyeVal)) yyeVal = 0;
        if(hdblVal==null || hdblVal=="0") hdblVal = 1;
        hdblVal = toFixedNum(hdblVal / 100, 2);
        //税目为权利许可证照、其他营业帐簿、经财政部确定的其它凭证时，计税数量为必填项目，计税金额和置空；应纳税额＝计税数量×税率
        //税目为权利许可证照、其他营业帐簿、经财政部确定的其它凭证以外的其他项目时，计税数额为必填，计税数量为空。且营业额和核定比例等字段设为可填。计税金额＝营业额×核定比率
        if((smObj.value != "101110400") && (smObj.value != "101110599") && (smObj.value != "101119800")) {
            //jsjeObj.value = toFixedNum( yyeVal * hdblVal, 2);
        }
        change_amt(jsjeObj);
    }

    //计算应纳税额
    function calcYhse() {
        var hdlx='1';
        var smObj = $("#zspmdm")[0];
        var jsjeVal = getObj("sbbVo['jsje']").value;
        //var jsslVal = getObj("sbbVo['JSSL']").value;
        var slVal = getObj("sbbVo['sysl']").value;

        jsjeVal = getoff_Qfw(jsjeVal);

        if(isEmpty(jsjeVal)) jsjeVal = 0;
        if(isEmpty(slVal)) slVal = 0;
        var yyeVal = getObj("sbbVo['hdzshdde']").value;//核定依据
        var hdblVal = getObj("sbbVo['hdzshdbl']").value;//核定依据
        if(isEmpty(yyeVal)) yyeVal = 0;
        else yyeVal =getoff_Qfw(yyeVal);
        if(isEmpty(hdblVal)) hdblVal = 0;
        // hdblVal = toFixedNum(hdblVal / 100, 4);

        var ynseObj = getObj("sbbVo['bqynse']");
        ynseObj.value  = getoff_Qfw(ynseObj.value);
        //“本期应纳税额”是按照“计税金额或件数”*“适用税率”+“核定依据”*“核定比例”20150701QJ
        //税目为权利许可证照、其他营业帐簿、经财政部确定的其它凭证时，计税数量为必填项目，计税金额和置空；应纳税额＝计税数量×税率
        //税目为权利许可证照、其他营业帐簿、经财政部确定的其它凭证以外的其他项目时，计税数额为必填，计税数量为空。且营业额和核定比例等字段设为可填。计税金额＝营业额×核定比率，应纳税额=计税金额×比例税率
        var sjjyse='0';
        var roundYnse='0';
        if(hdlx=='1'){
            // sjjyse= toFixedNum(jsjeVal * Math.abs(slVal));
            roundYnse = toFixedNum(jsjeVal * Math.abs(slVal)*100, 0)/100;
        }else if(hdlx=='2'){
            //sjjyse= toFixedNum(yyeVal *hdblVal);
            roundYnse = toFixedNum(yyeVal *hdblVal*100, 0)/100;
        }else{
            if(hdblVal==0){
                //   sjjyse= toFixedNum(yyeVal * Math.abs(slVal));
                roundYnse = toFixedNum(yyeVal * Math.abs(slVal)*100, 0)/100;
            }else{
                //sjjyse = toFixedNum(yyeVal * hdblVal * Math.abs(slVal));
                roundYnse = toFixedNum(yyeVal * hdblVal * Math.abs(slVal)*100, 0)/100;
            }
		   
        }
        /*
	  if(sjjyse<0.1){
		  ynseObj.value=0;
       }else{
    	   ynseObj.value=roundYnse;
        }
      */
        ynseObj.value=roundYnse;
        change_amt(ynseObj);
    }
    //根据税种税目校验核定比例范围
    function hdblChange() {
  
        var hdblObj = getObj("sbbVo['hdzshdbl']");
        var hdzshdde = getoff_Qfw(getObj("sbbVo['hdzshdde']").value);
        if(hdzshdde=="")hdzshdde=='0';
        /*
         if(idx > -1) {
          var hdbl = hdblArray[idx];
          if(hdblObj.value < hdbl[1]) {
            alert("当税目是“"+hdbl[0]+"”时核定比例不能小于“"+hdbl[1]+"”");
            hdblObj.value = hdbl[1];
            return false;
          }
        }
        */
        /*
        if(hdblObj.value > 1) {
          alert("核定比例不能大于1！");
          hdblObj.value ='';
          return false;
        }*/
        var flag='N';
        var hdbls="";
   
  
 
        if(hdbls!=""){
            hdbls=hdbls.substring(1,hdbls.length);
        }else{
            alert("没有可以填写的核定比例，请确认！");
            hdblObj.value ='';
            return false;
        }
        if(flag=='N'){
            alert("核定比例填写不正确，您可以填写的核定比例为："+hdbls+"!");
            hdblObj.value ='';
            return false;
        }else{
            if(hdblObj.value>1){
                alert("印花税核定比例大于1，核定信息可能有误，请联系主管税务机关或税管员补正。");
                hdblObj.value ='';
                return false;
            }
        }
        jsjeChange();

        return true;
    }
    //计算实际缴纳额
    function calcSjjne() {
        var ynseVal = getObj("sbbVo['bqynse']").value;
        var jmeVal = getObj("sbbVo['jmse']").value;
        var yjVal = getObj("sbbVo['bqyjse1']").value;
        ynseVal = getoff_Qfw(ynseVal);
        jmeVal = getoff_Qfw(jmeVal);
        yjVal = getoff_Qfw(yjVal);
        if(!isNumeric(yjVal)) yjVal = 0;
        yjVal = parseFloat(yjVal);
  
        var ybVal= toFixedNum(ynseVal-yjVal-jmeVal,4);
  
        if(parseFloat(ybVal)<0.1){
            getObj("sbbVo['bqybtse']").value =0;
        }else{
            getObj("sbbVo['bqybtse']").value =toFixedNum(ybVal,1);
        }
        var smObj = $("#zspmdm")[0];
        //财产合同不足1按1元算
        if(ybVal>=0.1 && ybVal<1 && smObj.value=='101110105'){
            getObj("sbbVo['bqybtse']").value=1;
        }else if(ybVal>0 && ybVal<0.1 && smObj.value=='101110105'){
            getObj("sbbVo['bqybtse']").value=0;
        }
        change_amt(getObj("sbbVo['bqybtse']"));
  
    }

    function jsjeChange() {
        changeSsjmxzDm();
        calcJsje();
	  
        calcYhse();
	 
        calcSjjne();
        return true;
    }
 

    function ynseChange() {
        calcSjjne();
        return true;
    }

 

    function yjeChange() {
        var kyjse=getObj("sbbVo['kyjse']").value;
        kyjse = getoff_Qfw(kyjse);
        var yje=getObj("sbbVo['bqyjse1']").value;
        yje = getoff_Qfw(yje);
        if(parseFloat(yje)>parseFloat(kyjse)){
            alert("查询到纳税人的已缴税额信息为"+kyjse+",本期已缴税额不能超过!");
            getObj("sbbVo['bqyjse1']").value="";
        };
        var kobj=getObj("sbbVo['bqyjse1']");
        if(kobj.value=="")
            kobj.value="0";
        calcSjjne();
        return true;	
    }

    function jmeChange() {
        var ssjmxzDm=getObj("sbbVo['ssjmxzdm']").value;
        var jme=getObj("sbbVo['jmse']").value;
        var qzdje=getObj("sbbVo['qzdje']").value;
        var ynse=getObj("sbbVo['bqynse']").value;
        if(ssjmxzDm==""){
            getObj("sbbVo['jmse']").value="";
            getObj("sbbVo['yhpzuuid']").value="";
            return false;
        };
        jme=getoff_Qfw(jme);	
        ynse=getoff_Qfw(ynse);
        qzdje=getoff_Qfw(qzdje);
        if(jme==""){
            return false;
        };
        if(parseFloat(jme)>parseFloat(ynse)){
            alert("减免额不能大于本期应纳税额！");
            getObj("sbbVo['jmse']").value="";
            return false;
        } 
        getObj("sbbVo['sfjm']").value='N';
        if(parseFloat(jme)<parseFloat(qzdje)){
            alert("减免额小于起征点金额，默认减免!");
            getObj("sbbVo['ssjmxzdm']").value="";
            getObj("sbbVo['yyqzdje']").value=jme;
            return false;
        }
        var flag='N';
        var jzed="";
      
        jzed=getoff_Qfw(jzed);	
        if(flag=='Y'){
            getObj("sbbVo['kjmse']").value=jzed;
            if(parseFloat(jme)>parseFloat(jzed)){
                alert("本期减免税（费）额不能大于可减免金额,可减免金额为"+jzed);
                getObj("sbbVo['jmse']").value="";
                return false;
            }else{
                getObj("sbbVo['sfjm']").value='Y';
            }
        }else{
            alert("您选择的减免性质尚未到主管税务机关备案，请申报后尽快完成备案!");
            getObj("sbbVo['yhpzuuid']").value="";
        }
        calcSjjne();
        return true;
    }
	 

    function changeSsjmxzDm(){
        var slVal = getObj("sbbVo['sysl']").value;
        var ssjmxzdm=getObj("sbbVo['ssjmxzdm']").value;
        var jmeObj= getObj("sbbVo['jmse']");
        var je=getObj("sbbVo['jsje']").value;
        je=je.replace(/,/g,'');
        jmeObj.value="0";
        if(ssjmxzdm==""){
            jmeObj.readOnly=true;
            getObj("sbbVo['sfjm']").value="N";
        }
        else if(ssjmxzdm=='0009129906'){
            var num=new Number(je*slVal*0.5);
            getObj("sbbVo['jmse']").value=num.toFixed(2);
        }
        else if(ssjmxzdm=="0009129907"){
            var num=new Number(je*slVal);
            getObj("sbbVo['jmse']").value=num.toFixed(2);
        }
        else{
            jmeObj.readOnly=false;
        }
        calcSjjne();
    }

    function modify(xh){
        if(confirm("是否修改 ？")){
            location.href="/jsdzsb/yhssb/lb.do?modify=ture&xh="+xh;
        }
    }
    function del(xh){
        if(confirm("是否删除 ？")){
            location.href="/jsdzsb/yhssb/lb.do?delete=ture&xh="+xh;
        
        }
    }
    window.onload = function() {
        var os = document.getElementById("ssjmxzdm").options;
        for(var i=0; i<os.length; i++) os[i].title = os[i].innerHTML.substring(0,os[i].innerHTML.length);
    }

    function openJmMx(){
		
		 
        layer.open({
            type: 2,
            title: '印花税核定信息',
            area: ['500px', '330px'],
            fix: false, //不固定
            maxmin: true,
           
            move : ['印花税核定信息' , false],
          
            content: '/views/jsdzsb/yhssb/yhssb_view.jsp'
        });
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