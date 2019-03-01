<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="submitSbb.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.jsdzsb.fjssb.submitSbb" %>

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
    <meta name="decorator" content="blank" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


    <c:set var="resV" value="v1" />
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

    <link href="/res/otp4/js/lib/ztree/css/zTreeStyle/zTreeStyle.css" rel="stylesheet" type="text/css" />
    <link href="/res/otp4/css/otp4-base.css?" rel="stylesheet" />
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
    <script src="/res/otp4/js/otp4-core.js?" type="text/javascript"></script>
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

    <link href="/res/wsbs/css/step.css" type="text/css" rel="stylesheet">
    <link href="/res/wsbs/css/global.css?" type="text/css" rel="stylesheet" id="mycss">
    <link href="/res/wsbs/css/xmdswz.css" type="text/css" rel="stylesheet">
    <link href="/res/wsbs/css/xmdswz_print.css" type="text/css" rel="stylesheet">
    <link href="/res/wsbs/css/swdj_style.css" type="text/css" rel="stylesheet">

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

    <script type="text/javascript" src="../../js/initinfo.js"></script>

</head>

<body>






    <script type="text/javascript">
        function getObj(objName) {
            var obj = document.getElementById(objName);
            if(obj == null || obj == undefined)
                obj = document.getElementsByName(objName)[0];
            return obj;
        }
	
        $(function(){
            function changeHiddenInputName() {
                var obj = $("#ZZSXSELX_DM");
                if(obj !== null || obj !== undefined)
                {
                    obj.prop("name","sbbVo['zzsxselx_dm']")
                }

                var obj = $("#sbbVo_xshjs");
                if(obj !== null || obj !== undefined)
                {
                    obj.prop("name","sbbVo['xshjs']")
                }

            }

            changeHiddenInputName()

        })
	
        /* $(function(){
	   

	   
	   
            var divs=["yhssblb","yhstjsbjl","yhstxsbb"]; 
            var tzlx="yhssblb";
            for(var i=0;i<divs.length;i++){
		 
                if(divs[i]==tzlx){
                    $("#"+divs[i]).show();
                }else{
                    $("#"+divs[i]).hide();
                }	 
            }
	 
            var sjyzeNo = 0;
            var totalybzzs = 0.00;
            var totalzzsmdse = 0.00;
            var totalxfs = 0.00;
            var totalyys = 0.00;
            var totalhj = 0.00;
            var totalynse = 0.00;
            var totaljme = 0.00;
            var totalyjse = 0.00;
            var totalybtse = 0.00;
            if (getObj("tmp_count")) {
                sjyzeNo = getObj("tmp_count").value;
            }
            for (var i = 0 ; i < sjyzeNo ; i ++) {
                totalybzzs = totalybzzs + parseFloat(getObj("sbbList[" + i + "]['ybzzs']").value);
                totalzzsmdse = totalzzsmdse + parseFloat(getObj("sbbList[" + i + "]['zzsmdse']").value);
                totalxfs = totalxfs + parseFloat(getObj("sbbList[" + i + "]['xfs']").value);
                totalyys = totalyys + parseFloat(getObj("sbbList[" + i + "]['yys']").value);
                totalhj = totalhj + parseFloat(getObj("sbbList[" + i + "]['hj']").value);
                totalynse = totalynse + parseFloat(getObj("sbbList[" + i + "]['bqynse']").value);
                totaljme = totaljme + parseFloat(getObj("sbbList[" + i + "]['jme']").value);
                totalyjse = totalyjse + parseFloat(getObj("sbbList[" + i + "]['bqyjse']").value);
                totalybtse = totalybtse + parseFloat(getObj("sbbList[" + i + "]['bqybtse']").value);
            }
            if(totalybzzs=='0' || !totalybzzs){
                $("#_ybzzs").text("0") ;
            }else{
                $("#_ybzzs").text(add_Qfw(toFixedNum(totalybzzs,2)));  
            } 
            if(totalzzsmdse=='0' || !totalzzsmdse){
                $("#_zzsmdse").text("0") ;
            }else{
                $("#_zzsmdse").text(add_Qfw(toFixedNum(totalzzsmdse,2)));  
            }
            if(totalxfs=='0' || !totalxfs){
                $("#_xfs").text("0") ;
            }else{
                $("#_xfs").text(add_Qfw(toFixedNum(totalxfs,2)) );  
            }

            if(totalyys=='0' || !totalyys){
                $("#_yys").text("0") ;
            }else{
                $("#_yys").text(add_Qfw(toFixedNum(totalyys,2)) );  
            }
            if(totalhj=='0' || !totalhj){
                $("#_hj").text("0") ;
            }else{
                $("#_hj").text(add_Qfw(toFixedNum(totalhj,2)) );  
            } 
            if(totalynse=='0' || !totalynse){
                $("#_bqynse").text("0") ;
            }else{
                $("#_bqynse").text(add_Qfw(toFixedNum(totalynse,2)));  
            }
            if(totaljme=='0' || !totaljme){
                $("#_jme").text("0") ;
            }else{
                $("#_jme").text(add_Qfw(toFixedNum(totaljme,2)));  
            }
            if(totalyjse=='0' || !totalyjse){
                $("#_bqyjse").text("0") ;
            }else{
                $("#_bqyjse").text(add_Qfw(toFixedNum(totalyjse,2)));  
            }
            if(totalybtse=='0' || !totalybtse){
                $("#_bqybtse").text("0") ;
            }else{
                $("#_bqybtse").text(add_Qfw(toFixedNum(totalybtse,2)));  
            }
            szChange();
        });
        */
   
        function tjsbjl(){
            /*
            var sfzhm=getObj("sbbVo['sfzhm']").value;
            if(sfzhm=='' || sfzhm==null){
                alert("身份证号码必须填写！");
                return false;
            }
            */
     
	 
            $("#myForm1").attr("action","/jsdzsb/fjssb/tjsbjl.aspx");  
            $("#myForm1").submit();
        }
        function tjsbb(){
            $("#myForm1").attr("action","/jsdzsb/fjssb/tjsblb.ashx");
            $("#myForm1").submit();
        }
        function tjsbbsb(){
            /*
         var sfzhm=getObj("sbbVo['sfzhm']").value;
         if(sfzhm=='' || sfzhm==null){
          alert("身份证号码必须填写！");
          return false;
         }
          */
            var _confMsg = "请确认是否提交申报。提交申报后，可通过“申报记录查询或作废”菜单项查询申报结果。";
            var xgbz=document.getElementById("xgbz").value;
            if (confirm(_confMsg)) {
                if(xgbz=='yes')
                    $("#myForm1").attr("action","/jsdzsb/fjssb/tjfjs.do");
                else
                    $("#myForm1").attr("action","/jsdzsb/fjssb/tjsblbsb.do");
                $("#myForm1").submit();
            }
        }
        function qxbcsb(){
            var xgbz=document.getElementById("xgbz");
            if(confirm("是否确定取消本次申报？")){
                if(xgbz=='no')
                    location.href="/jsdzsb/fjssb/index.aspx";
                else
                    location.href="/jsdzsb/fjssb/index.aspx?xgbz=yes";
            }
        }
        function txsbb(){
            /*
                  if( xshjsChange() ){
                    
                    }else{
                    return false;
                    }
            */   
  
            var xgbz="no";
            var zspmdm=getObj("sbbVo['zspmDm']").value;
            var xshjs=getObj("sbbVo['zzsxselx_dm']").value;
            if(xshjs==null || xshjs==''){
                alert("请选择销售合计数！");
                return;
            }
            getObj("sbbVo['sffjjm']").value="Y";

            var zsxmdm=getObj("sbbVo['zsxmDm']").value;
            if(zsxmdm=='' || zsxmdm==null){
                if(xgbz!="yes"){
                    alert("征收项目必须选择！");
                    return false;
                }
            }
		  
            if(zspmdm=='' || zspmdm==null){
                if(xgbz!="yes"){
                    alert("征收品目必须选择！");
                    return false;
                }
            } 
		  
		 
            var nsqxdm="";
            var sbqxdm="";
			 
			 
			  
            if('10109'==zsxmdm && '101090101'==zspmdm ){
                nsqxdm='06';
                sbqxdm="04";
            }
		    
		   
			  
            if('30203'==zsxmdm && '302030100'==zspmdm ){
                nsqxdm='06';
                sbqxdm="04";
            }
		    
		   
			  
            if('30216'==zsxmdm && '302160100'==zspmdm ){
                nsqxdm='06';
                sbqxdm="04";
            }
		    
		   
            var skssqq=getObj("sbbVo['skssqq']").value; 
            var skssqz=getObj("sbbVo['skssqz']").value;
            if(xgbz!="yes")
                if(!JsYsqbChecker(skssqq,skssqz,zsxmdm,zspmdm,nsqxdm,sbqxdm)){
                    return false;
                }
            var xgbz="no";
            if(xgbz=="yes")
                $("#myForm2").attr("action","/jsdzsb/fjssb/xgmap.do");
            else
                $("#myForm2").attr("action","/jsdzsb/fjssb/txsbb.do");
            $("#myForm2").submit();
            /*
             var _confMsg = "请确认是否提交？";
          if (confirm(_confMsg)) {
          $("#myForm1").attr("action","/jsdzsb/fjssb/tjsblbsb.do");  
          $("#myForm1").submit();
          }
          $("#myForm2").attr("action","/jsdzsb/fjssb/txsbb.do");  
          $("#myForm2").submit(); 
              */ 
        }
 
   
        function qrtj(flag){
	   
	   
	   
            var  hj=getObj("sbbVo['hj']").value;
            var  zzsxselx_dm  ='<%=ZzsXseDm %>';
            if(hj==""  ){
                alert("合计不能为空，请填写对应的税额！");
                return false;
            }
            var jsjeObj = getObj("sbbVo['hj']");
       
            var JSJE = getoff_Qfw(jsjeObj.value);
       
            var jsjeNum = new Number(JSJE);

            if(jsjeNum.lessThan(0)) {
                alert("计税金额不能为负数！");
                jsjeObj.focus();
                return false;
            }

       
            var ynseObj = getObj("sbbVo['bqynse']");
       
            var YNSE = getoff_Qfw(ynseObj.value);
       
            var ynseNum = new Number(YNSE);
            if(ynseNum.lessThan(0)) {
                alert("应纳税（费）额不能为负数！");
                ynseObj.focus();
                return false;
            }
            
            var ssjmxzdm=getObj("sbbVo['jmxzDm']").value;
            var ynse=getObj("sbbVo['bqynse']").value;
       
            // 本期应纳税额
            var __bqynse = getObj("sbbVo['bqynse']").value;
            __bqynse = getoff_Qfw(__bqynse);
            // 减免额
            var __jme = getObj("sbbVo['jme']").value;
            __jme = getoff_Qfw(__jme);
            __jme = __jme == "" ? "0.0" : __jme;
            // 本期已缴税（费）额
            var __yje=getObj("sbbVo['bqyjse']").value;
            __yje = getoff_Qfw(__yje);
            if (parseFloat(__yje) + parseFloat(__jme) > parseFloat(__bqynse)) {
                alert("本期已缴税（费）额+ 本期减免税（费）额不能大于 本期应纳税（费）额" );
                return false;
            }
            if(zzsxselx_dm=='13' || zzsxselx_dm=='23'){
                if(__yje>0){
                    var jyffjyjse=getObj("sbbVo['jyffjyjse']").value;
                    jyffjyjse = getoff_Qfw(jyffjyjse);
                    var dfjyffjyjse=getObj("sbbVo['dffjjyjse']").value;
                    dfjyffjyjse = getoff_Qfw(dfjyffjyjse);
                    if(jyffjyjse=='' || dfjyffjyjse==''){
                        alert("城建税本期已缴税（费）额大于0，教育费附加、地方教育附加本期已缴不能为空。");
                        return false;
                    }
                }
            }
            var sfjm=getObj("sbbVo['sfjm']").value;
            var jme=getObj("sbbVo['jme']").value;
            if(ssjmxzdm!='' &&  parseFloat(YNSE)>0){
                if(jme=='' ||jme =='0' ){
                    alert("您已选择减免性质，请输入减免额！");
                    return false;
                }
            }else{
                sfjm="N";
            }
            var xgbz=document.getElementById("xgbz").value;
            if(sfjm=="N" && ssjmxzdm!='' && ssjmxzdm!='0099042801'){
                if(confirm("您选择的减免性质尚未到主管税务机关备案，请申报后尽快完成备案!")){
                    if(flag=='modify'){
                        if(xgbz=='yes')
                            $("#myForm3").attr("action","/jsdzsb/fjssb/xgbb.do");
                        else
                            $("#myForm3").attr("action","/jsdzsb/fjssb/modifySave.do");  
                        $("#myForm3").submit();
                    }else{
                        $("#myForm3").attr("action","/jsdzsb/fjssb/submitSbb.aspx");  
                        $("#myForm3").submit();

                    }
        	  
                }
            }else{
                if(flag=='modify'){
                    if(xgbz=='yes')
                        $("#myForm3").attr("action","/jsdzsb/fjssb/xgbb.do");
                    else
                        $("#myForm3").attr("action","/jsdzsb/fjssb/modifySave.do");  
                    $("#myForm3").submit();
                }else{
                    $("#myForm3").attr("action","/jsdzsb/fjssb/submitSbb.aspx");  
                    $("#myForm3").submit();

                }
            }
	   
        }

    </script>

    <div id='yhssblb'>
        <form action="/jsdzsb/yhssb/lb.do" method="post" id="myForm1">
            <input type="hidden" name="errAction" value="/jsdzsb/fjssb/lb.do" />
            <input type="hidden" name="nsqx_dm" value="06" />
            <input type="hidden" name="xms" value="10109" />
            <input type="hidden" name="xgbz" id="xgbz" value="no">
            <input type="hidden" name="tmp_count" value="3" />
            <input type="hidden" name="sbbVo['zspmDm']" value="101090101" />
            <input type="hidden" id="form_guid" name="form_guid" value="13BDA04105BBF3976BD13F5B0F923B39" runat="server" />
            <input runat="server" name="sbbVo['zzsxselx_dm']" id="ZZSXSELX_DM" type="hidden" value="13">
                                            <input runat="server" id="sbbVo_xshjs" name="sbbVo['xshjs']" type="hidden" value="100000.1">
                                            <input runat="server" id="xshjs" name="xshjs" type="hidden" value="100000.1">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="left" class="liucheng_01"></td>
                    <td align="left">
                        <table width="650" border="0" align="left" cellpadding="0" cellspacing="0">
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td align="center" class="liucheng_02 h1_14w ">初始化</td>
                    <td align="center">
                        <img src="/res/jsdzsb/bsdt/images/over_arrow.png" width="7" height="12" /></td>
                    <td align="center" class="liucheng_02 h1_14w">填写申报表</td>



                    <td align="center">
                        <img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="7" height="12" /></td>
                    <td align="center" class="liucheng_03 h1_14b">确认申报</td>



                    <td align="center">
                        <img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="7" height="12" /></td>
                    <td align="center" class="liucheng_03 h1_14b">查看回执</td>
                </tr>
            </table>
            
    <table>
  
  <tr>
      <td class="gray3_bg_color"></td>
  </tr>
            <tr>
                <td>
                    <table width="1200" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                        <tr>
                            <td align="center" class="h16_bold">
                                <p>城建税、教育费附加、地方教育附加税（费）申报表</p>
                            </td>
                        </tr>
                        <tr>
                    <td>
                        <table id="sbbSubmit" runat="server" border="1" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td colspan="3">
                                    <p align="left">纳税人识别号 </p>
                                </td>
                                <td colspan="2">
                                    <p align="left" id="NSRSBH"></p>
                                </td>
                                <td colspan="7">
                                    <p align="left">税款所属期起 </p>
                                </td>
                                <td colspan="4">
                                    <p align="left"><%=DateFrom %></p>
                                    <input type="hidden" name="sbbVo['skssqq']" value="<%=DateFrom %>" />
                                </td>
                                <td colspan="4">
                                    <p align="left">税款所属期止 </p>
                                </td>
                                <td colspan="2">
                                    <p align="left"><%=DateTo %></p>
                                    <input type="hidden" name="sbbVo['skssqz']" value="<%=DateTo %>" />
                                    <input type="hidden" name="sbbVo['tbrq']" value="<%=tbrq %>" />
                                <input type="hidden" name="sbbVo['slrq']" value="2018-09-06" />
                                </td>
                                
                            </tr>
                            <tr>
                                <td colspan="3" rowspan="3" valign="top">
                                    <p>纳税人信息 </p>
                                </td>
                                <td colspan="2" valign="top">
                                    <p>名称 </p>
                                </td>
                                <td colspan="11" valign="top">
                                    <p id="NSRMC"></p>
                                </td>
                                <td colspan="4" valign="top">
                                    <p>登记类型 </p>
                                </td>
                                <td colspan="2" valign="top">
                                    <input name="checkbox" type="checkbox" value="checkbox" checked="checked" />
                                    单位
                <input type="checkbox" name="checkbox" value="checkbox" disabled="disabled" />
                                    个人
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" valign="top">
                                    <p>登记注册类型 </p>
                                </td>
                                <td colspan="4" valign="top">
                                    <p id="DJZCLX">
                                    </p>
                                </td>
                                <td colspan="4" valign="top">
                                    <p>所属行业 </p>
                                </td>
                                <td colspan="2" valign="top">
                                    <p>
                                    </p>
                                </td>
                                <td colspan="3" valign="top">
                                    <p>身份证件类型 </p>
                                </td>
                                <td colspan="4" valign="top">
                                    <p>
                                        居民身份证&nbsp;
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" valign="top">
                                    <p>身份证件号码 </p>
                                </td>
                                <td colspan="9" valign="top">
                                    <p></p>
                                </td>
                                <td colspan="2" valign="top">
                                    <p>联系方式 </p>
                                </td>
                                <td colspan="6" valign="top">
                                    <p id="LXDH"></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="68" rowspan="3" valign="top">
                                    <div align="center">操作</div>
                                </td>
                                <td width="55" rowspan="3" valign="top">征收项目</td>
                                <td width="69" rowspan="3" valign="top">征收品目</td>
                                <td colspan="8" valign="top">
                                    <p align="center">计税（费）依据 </p>
                                </td>
                                <td colspan="3" rowspan="3" valign="top">
                                    <p align="center">税率（征收率） </p>
                                </td>
                                <td colspan="2" rowspan="3" valign="top">
                                    <p align="center">本期应纳税（费）额 </p>
                                </td>
                                <td colspan="3" rowspan="2" valign="top">
                                    <p align="center">本期减免税（费）额 </p>
                                </td>
                                <td colspan="2" rowspan="3" valign="top">
                                    <p align="center">本期已缴税（费）额 </p>
                                </td>
                                <td width="154" rowspan="3" valign="top" style="color: Maroon">
                                    <p align="center">本期应补（退）税（费）额 </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" valign="top">
                                    <p align="center">增值税 </p>
                                </td>
                                <td colspan="2" rowspan="2" valign="top">
                                    <p>消费税 </p>
                                </td>
                                <td colspan="2" rowspan="2" valign="top">
                                    <p>营业税 </p>
                                </td>
                                <td width="105" rowspan="2" valign="top">
                                    <p>合计 </p>
                                </td>
                            </tr>
                            <tr>
                                <td width="104" valign="top">
                                    <p>一般增值税 </p>
                                </td>
                                <td colspan="2" valign="top">
                                    <p>免抵税额 </p>
                                </td>
                                <td width="105" valign="top">
                                    <p align="center">减免性质代码 </p>
                                </td>
                                <td colspan="2" valign="top">
                                    <p align="center">减免额 </p>
                                </td>
                            </tr>



                            <tr>
                                <td valign="top">


                                    <a href="#" onclick="modify('4bba51ee49594aa990302b12ddb287f7')">修改</a>&nbsp;&nbsp;
              
              
              <a href="#" onclick="del('4bba51ee49594aa990302b12ddb287f7')">删除</a>

                                    &nbsp;&nbsp;</td>
                                
                                <td nowrap>城市维护建设税</td>
                                <td valign="top">城市维护建设税-
              












 


市区（增值税附征）</td>
                                <td valign="top">
                                    <div align="right">12.00</div>
                                    <input type="hidden" name="sbbList[0]['ybzzs']" value="12.00" />
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[0]['zzsmdse']" value="0.00" />
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[0]['xfs']" value="0.00" />
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[0]['yys']" value="0.00" />
                                </td>
                                <td valign="top">
                                    <div align="right">12.00</div>
                                    <input type="hidden" name="sbbList[0]['hj']" value="12.00" />
                                </td>
                                <td colspan="3" valign="top">
                                    <div align="right">0.07</div>
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.84</div>
                                    <input type="hidden" name="sbbList[0]['bqynse']" value="0.84" />
                                </td>
                                <td valign="top">
                                    <div align="right">
                                    </div>
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[0]['jme']" value="0.00" /></td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[0]['bqyjse']" value="0.00" /></td>
                                <td valign="top" class="blue">
                                    <div align="right">0.84</div>
                                    <input type="hidden" name="sbbList[0]['bqybtse']" value="0.84" /></td>
                            </tr>


                            <tr>
                                <td valign="top">



                                    <a href="#" onclick="del('4bba51ee49594aa990302b12ddb287f7')">删除</a>
                                    <input type="hidden" value="379E793F39CDE4C50670E0F9733A5FFE" />

                                    &nbsp;&nbsp;</td>
                                
                                <td nowrap>教育费附加</td>
                                <td valign="top">教育费附加-
              












 


增值税教育费附加</td>
                                <td valign="top">
                                    <div align="right">12.00</div>
                                    <input type="hidden" name="sbbList[1]['ybzzs']" value="12.00" />
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[1]['zzsmdse']" value="0.00" />
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[1]['xfs']" value="0.00" />
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[1]['yys']" value="0.00" />
                                </td>
                                <td valign="top">
                                    <div align="right">12.00</div>
                                    <input type="hidden" name="sbbList[1]['hj']" value="12.00" />
                                </td>
                                <td colspan="3" valign="top">
                                    <div align="right">0.03</div>
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.36</div>
                                    <input type="hidden" name="sbbList[1]['bqynse']" value="0.36" />
                                </td>
                                <td valign="top">
                                    <div align="right">
                                    </div>
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[1]['jme']" value="0.00" /></td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[1]['bqyjse']" value="0.00" /></td>
                                <td valign="top" class="blue">
                                    <div align="right">0.36</div>
                                    <input type="hidden" name="sbbList[1]['bqybtse']" value="0.36" /></td>
                            </tr>


                            <tr>
                                <td valign="top">



                                    <a href="#" onclick="del('4bba51ee49594aa990302b12ddb287f7')">删除</a>
                                    <input type="hidden" value="F951FF8625B892E4E22326AD84770B8A" />

                                    &nbsp;&nbsp;</td>
                                
                                <td nowrap>地方教育附加</td>
                                <td valign="top">地方教育附加-
              












 


增值税地方教育附加</td>
                                <td valign="top">
                                    <div align="right">12.00</div>
                                    <input type="hidden" name="sbbList[2]['ybzzs']" value="12.00" />
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[2]['zzsmdse']" value="0.00" />
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[2]['xfs']" value="0.00" />
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[2]['yys']" value="0.00" />
                                </td>
                                <td valign="top">
                                    <div align="right">12.00</div>
                                    <input type="hidden" name="sbbList[2]['hj']" value="12.00" />
                                </td>
                                <td colspan="3" valign="top">
                                    <div align="right">0.02</div>
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.24</div>
                                    <input type="hidden" name="sbbList[2]['bqynse']" value="0.24" />
                                </td>
                                <td valign="top">
                                    <div align="right">
                                    </div>
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[2]['jme']" value="0.00" /></td>
                                <td colspan="2" valign="top">
                                    <div align="right">0.00</div>
                                    <input type="hidden" name="sbbList[2]['bqyjse']" value="0.00" /></td>
                                <td valign="top" class="blue">
                                    <div align="right">0.24</div>
                                    <input type="hidden" name="sbbList[2]['bqybtse']" value="0.24" /></td>
                            </tr>



                            
                            <tr>
                                <td colspan="3" valign="top">合计</td>
                                <td valign="top">
                                    <div align="right" id="_ybzzs"></div>
                                    &nbsp; </td>
                                <td colspan="2" valign="top">
                                    <div align="right" id="_zzsmdse"></div>
                                    &nbsp;</td>
                                <td colspan="2" valign="top">
                                    <div align="right" id="_xfs"></div>
                                </td>
                                <td colspan="2" valign="top">
                                    <div align="right" id="_yys"></div>
                                    &nbsp;</td>
                                <td valign="top">
                                    <div align="right" id="_hj"></div>
                                </td>
                                <td colspan="3" valign="top">— </td>
                                <td colspan="2" valign="top">
                                    <div align="right" id="_bqynse"></div>
                                </td>
                                <td valign="top">— </td>
                                <td colspan="2" valign="top">
                                    <div align="right" id="_jme"></div>
                                    &nbsp;</td>
                                <td colspan="2" valign="top">
                                    <div align="right" id="_bqyjse"></div>
                                    &nbsp;</td>
                                <td valign="top">
                                    <div align="right" id="_bqybtse" style="color: red;"></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" valign="top">
                                    <p>代理人 </p>
                                </td>
                                <td colspan="8" valign="top">
                                    <p id="FDDB"></p>
                                </td>
                                <td colspan="5" valign="top">
                                    <p>代理人身份证号 </p>
                                </td>
                                <td colspan="6" valign="top">
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" valign="top">
                                    <p>受理人</p>
                                </td>
                                <td colspan="4" valign="top">
                                    <p id="CWFZR"></p>
                                </td>
                                <td colspan="4" valign="top">
                                    <p>受理日期 </p>
                                </td>
                                <td colspan="5" valign="top">
                                    <p><%=tbrq %></p>
                                </td>
                                <td colspan="3" valign="top">
                                    <p>受理税务机关 </p>
                                </td>
                                <td colspan="3" valign="top">
                                    <p id="ZGDSSWJFJMC">
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
            </tr>
            <tr>
                <div align="center">
                    <td>

                        <p align="left">

                            <div align="center">

                                <input type="button" onclick="tjsbjl()" value="添加申报记录" />&nbsp;&nbsp;&nbsp;&nbsp;
					     
						      <span style="line-height: 1.5; color: red">



                                  <input type="button" value="确认提交" id="submitList" onclick="tjsbb()" />



                                  &nbsp;&nbsp;&nbsp;&nbsp;<input type="button" onclick="qxbcsb()" value="取消本次申报" align="right">
                              </span>
                            </div>
                        </p>
                    </td>
                    <p>&nbsp;</p>
                </div>
            </tr>
            </table>
    </td>
  </tr>
</table>
        </form>
    </div>
    <div id="yhstjsbjl">
        <form action="/jsdzsb/yhssb/lb.do" method="post" id="myForm2">
            <input type="hidden" name="errAction" value="/jsdzsb/fjssb/tjsbjl.do" />
            <input type="hidden" name="nsqx_dm" value="06" />
            <input type="hidden" name="xms" value="10109" />

            


        </form>
    </div>

    <div id="yhstxsbb">
        <form action="/jsdzsb/yhssb/lb.do" method="post" id="myForm3">
            <input type="hidden" name="errAction" value="/jsdzsb/fjssb/txsbb.do" />
            <input type="hidden" name="nsqx_dm" value="06" />
            <input type="hidden" name="xms" value="10109" />
            <input type="hidden" name="tenwjmFlag" value="N" />
            <input type="hidden" name="threewjmFlag" value="N" />
            


        </form>
    </div>
    <script type="text/javascript"><!--
    //税种变更时同步更新税目（营业税要更新输入项）


    function szChange() {
        var szObj = getObj("sbbVo['zsxmDm']");
        var smObj = getObj("sbbVo['zspmDm']");
        var szmcObj = getObj("SZ_MC");
        var sz_id = szObj.value;
        var sm_id = smObj.value;
 

        if( sm_id == "101090101" || sm_id == "101090201" || sm_id == "101090301" || sm_id == "302030100" || sm_id == "302160100"){
            getObj("sbbVo['xfs']").readOnly = true;
            getObj("sbbVo['yys']").readOnly = true;
            getObj("sbbVo['xfs']").value = "";
            getObj("xfs").style.color = "#D0D0D0";
            getObj("sbbVo['xfs']").style.backgroundColor="#D0D0D0";
            getObj("sbbVo['yys']").value = "";
            getObj("yys").style.color = "#D0D0D0";
            getObj("sbbVo['yys']").style.backgroundColor="#D0D0D0";
	    
            getObj("sbbVo['ybzzs']").readOnly = false;
            getObj("sbbVo['zzsmdse']").readOnly = false;
	    
            //  getObj("ybzzs").style.color = "#0000FF";
            getObj("sbbVo['ybzzs']").style.backgroundColor="";
            //  getObj("zzs_mdse").style.color = "#0000FF";
            getObj("sbbVo['zzsmdse']").style.backgroundColor="";
            // getObj("zzs").style.color = "#0000FF";
	    
	    
        }
        //var baztPara =getObj("sbbVo['BAZTBJ']").value;
	
        if( sm_id == "101090102" || sm_id == "101090202" || sm_id == "101090302" || sm_id == "302160200" || sm_id == "302030200"){		
            getObj("sbbVo['xfs']").readOnly = true;
            getObj("sbbVo['ybzzs']").readOnly = true;
            getObj("sbbVo['zzsmdse']").readOnly = true;
            getObj("sbbVo['xfs']").value = "";
            getObj("sbbVo['ybzzs']").value = "";
            getObj("sbbVo['zzsmdse']").value = "";
	    
            getObj("ybzzs").style.color = "#D0D0D0";
            getObj("sbbVo['ybzzs']").style.backgroundColor="#D0D0D0";
            getObj("zzs_mdse").style.color = "#D0D0D0";
            getObj("sbbVo['zzsmdse']").style.backgroundColor="#D0D0D0";
            getObj("xfs").style.color = "#D0D0D0";
            getObj("sbbVo['xfs']").style.backgroundColor="#D0D0D0";
            //  getObj("zzs").style.color = "#D0D0D0";
	     
            // getObj("yys").style.color = "#0000FF";
            getObj("sbbVo['yys']").style.backgroundColor="";
	    
            getObj("sbbVo['yys']").readOnly = false;
        } 
	
        if( sm_id == "101090103" || sm_id == "101090203" || sm_id == "101090303" || sm_id == "302160300" || sm_id == "302030300"){
            getObj("sbbVo['yys']").readOnly = true;
            getObj("sbbVo['ybzzs']").readOnly = true;
            getObj("sbbVo['zzsmdse']").readOnly = true;
            getObj("sbbVo['yys']").value = "";
            getObj("sbbVo['ybzzs']").value = "";
            getObj("sbbVo['zzsmdse']").value = "";
	    
            getObj("ybzzs").style.color = "#D0D0D0";
            getObj("sbbVo['ybzzs']").style.backgroundColor="#D0D0D0";
            getObj("zzs_mdse").style.color = "#D0D0D0";
            getObj("sbbVo['zzsmdse']").style.backgroundColor="#D0D0D0";
	     
	     
            getObj("yys").style.color = "#D0D0D0";
            getObj("sbbVo['yys']").style.backgroundColor="#D0D0D0";
	    
            getObj("sbbVo['xfs']").readOnly = false;
            //  getObj("xfs").style.color = "#0000FF";
            getObj("sbbVo['xfs']").style.backgroundColor="";
        }
 
        return true;
    }

    //计算计税金额
    function calcYnssde() {
        var zzs_ybzzsVal = getObj("sbbVo['ybzzs']").value;
        var zzs_mdseVal = getObj("sbbVo['zzsmdse']").value;
        var xfsVal = getObj("sbbVo['xfs']").value;
        var yysVal = getObj("sbbVo['yys']").value;
        var xsehj = getoff_Qfw(getObj("xshjs").value);
  
        //var ZZSXSELX_DM = getObj("sbbVo['ZZSXSELX_DM']").value;
        var ZZSXSELX_DM = $('#ZZSXSELX_DM').val();
        var nsqx_dm = getoff_Qfw(getObj("nsqx_dm").value);
        zzs_ybzzsVal = getoff_Qfw(zzs_ybzzsVal);
        zzs_mdseVal = getoff_Qfw(zzs_mdseVal);
        xfsVal = getoff_Qfw(xfsVal);
        yysVal = getoff_Qfw(yysVal);
  
        if(isEmpty(zzs_ybzzsVal)) zzs_ybzzsVal = 0;
        if(isEmpty(zzs_mdseVal)) zzs_mdseVal = 0;
        if(isEmpty(xfsVal)) xfsVal = 0;
        if(isEmpty(yysVal)) yysVal = 0;
        var hj=toFixedNum( ( parseFloat(zzs_ybzzsVal) + parseFloat(zzs_mdseVal) + parseFloat(xfsVal) + parseFloat(yysVal)), 2);
        if(ZZSXSELX_DM=='11' || ZZSXSELX_DM=='12' || ZZSXSELX_DM=='21' || ZZSXSELX_DM=='22'){
            if(ZZSXSELX_DM=='11' || ZZSXSELX_DM=='21'){
                xsehj=0;
            }else if(ZZSXSELX_DM=='12' && nsqx_dm=='06'){
                xsehj=17000;
            }else if(ZZSXSELX_DM=='22' && nsqx_dm=='08'){
                xsehj=51000;
            }
            getObj("xshjs").value=xsehj;
            getObj("sbbVo['xshjs']").value=xsehj;
            if(hj>xsehj){
                getObj("sbbVo['ybzzs']").value='';
                getObj("sbbVo['zzsmdse']").value='';
		 
                /* if(ZZSXSELX_DM=='11' && nsqx_dm=='06'){
                 alert("合计不能大于30000!");
                 }else if(ZZSXSELX_DM=='21' && nsqx_dm=='08'){
                 alert("合计不能大于90000!");
                 }else if(ZZSXSELX_DM=='12' && nsqx_dm=='06'){
                 alert("合计不能大于100000!");
                 }else if(ZZSXSELX_DM=='22' && nsqx_dm=='08'){
                 alert("合计不能大于300000!");
                 }
                 */
		  
                alert("增值税额合计数”与“本月（季）销售额合计数”的选项不匹配，请重新选择!"); 
                return false;
            }
        }
        getObj("sbbVo['hj']").value = getoff_Qfw(hj);
        return true;
  
  
    }



    //计算应纳税额
    function calcYhse() {
        var jsjeVal = getObj("sbbVo['hj']").value;
        var slVal = getObj("sbbVo['sl1']").value;
  
        jsjeVal = getoff_Qfw(jsjeVal);
        slVal = getoff_Qfw(slVal);
  
        if(isEmpty(jsjeVal)) jsjeVal = 0;
        if(isEmpty(slVal)) slVal = 0;
 
        getObj("sbbVo['bqynse']").value = getYnse(jsjeVal, slVal, 0, 1);
        change_amt(getObj("sbbVo['bqynse']"));
        calcSjjne();
    }

    //计算实际缴纳额
    function calcSjjne() {
        var ynseVal = getObj("sbbVo['bqynse']").value;
  
        var jmxzDm = getObj("sbbVo['jmxzDm']").value;
        if(jmxzDm=="0099042801"){
            getObj("sbbVo['jme']").value = ynseVal;
        }
  
        var jmeVal = getObj("sbbVo['jme']").value;
        var yjVal = getObj("sbbVo['bqyjse']").value;
  
        ynseVal = getoff_Qfw(ynseVal);
        jmeVal = getoff_Qfw(jmeVal);
        yjVal = getoff_Qfw(yjVal);
        if(!isNumeric(yjVal)) yjVal = 0;
        yjVal = parseFloat(yjVal);
  
  
        getObj("sbbVo['bqybtse']").value = getSjjne(ynseVal, yjVal, jmeVal, 0);
  
        change_amt(getObj("sbbVo['bqybtse']"));
  
    }

    function sdeChange() {
        kkcyyhChange();
	 
        return true;
    }
	
    function xshjsChange() {
        var xshjs=getObj("xshjs").value;
        var nsqx_dm=getObj("nsqx_dm").value;
        xshjs = getoff_Qfw(xshjs);
        var _confMsg = "若您的增值税入库税款为0 ，您可免于零申报";
        if( (xshjs<=30000) && (nsqx_dm=="06") ){
            if (confirm(_confMsg)) {
                return true;
            }else{
                window.location.href="/jsdzsb/fjssb/lb.do";
            }	 
        }else if((xshjs<=90000) && (nsqx_dm=="08")){
            if (confirm(_confMsg)) {
                return true;
            }else{
                window.location.href="/jsdzsb/fjssb/lb.do";
            }	 
        }else{
            return true;
        } 
	  
    }
    function kkcyyhChange() {
        if(!calcYnssde()) calcYnssde();
        jsjeChange();
        return true;
    }

    function jsjeChange() {
        calcYhse();
	  
        calcSjjne();
        return true;
    }
	 

    function yjeChange() {
        var yjskuuid=getObj("yjskuuid").value;
        var kyjse=getObj("sbbVo['kyjse']").value;
        kyjse = getoff_Qfw(kyjse);
        var yje=getObj("sbbVo['bqyjse']").value;
        yje = getoff_Qfw(yje);
        //if(parseFloat(yje)>parseFloat(kyjse)){
        //alert("本期已缴税（费）额不能大于可缴税（费）额，可缴税（费）额为"+kyjse);
        //getObj("sbbVo['bqyjse']").value="";
        //getObj("sbbVo['yjskuuid']").value="";
        //};
        getObj("sbbVo['yjskuuid']").value=yjskuuid;
        calcSjjne();
        return true;
    }

    function jmeChange() {
        //yhpzuuid
        getObj("sbbVo['yhpzuuid']").value="";
        var ssjmxzDm=getObj("sbbVo['jmxzDm']").value;
        var jme=getObj("sbbVo['jme']").value;
        var qzdje=getObj("sbbVo['qzdje']").value;
        var ynse=getObj("sbbVo['bqynse']").value;
        if(ssjmxzDm==""){
            getObj("sbbVo['jme']").value="";
            return false;
        };
        jme=getoff_Qfw(jme);	
        ynse=getoff_Qfw(ynse);
        if(jme==""  ){
            return false;
        };
        if(parseFloat(jme)>parseFloat(ynse)){
            alert("减免额不能大于本期应纳税额！");
            getObj("sbbVo['jme']").value="";
            return false;
        } 
        getObj("sbbVo['sfjm']").value='N';
        if(jme<qzdje){
            alert("减免额小于起征点金额，默认减免!");
            getObj("sbbVo['jmxzDm']").value="";
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
                getObj("sbbVo['jme']").value="";
                return false;
            }else{
                getObj("sbbVo['sfjm']").value='Y';
            }
        } 
        calcSjjne();
        return true;
    }
	 

    function changeSsjmxzDm(){
        var ssjmxzdm=getObj("sbbVo['jmxzDm']").value;
        var jmeObj= getObj("sbbVo['jme']");
        jmeObj.value="";
        if(ssjmxzdm==""){
            jmeObj.readOnly=true;
            getObj("sbbVo['sfjm']").value="N";
        }else{
    	 
            jmeObj.readOnly=false;
            var flag='N';
    	   
    	    
            if(flag=='Y'){
    			 
            }else{
                alert("您选择的减免性质尚未到主管税务机关备案，请申报后尽快完成备案!");
            }
        }
        calcSjjne();
    }

    function modify(xh){
        if(confirm("是否修改 ？")){
            var xgbz=document.getElementById("xgbz").value;
            if(xgbz=='yes'){
                /*  location.href="/jsdzsb/fjssb/xgmap.do?xh="+xh; */
                location.href="/jsdzsb/fjssb/xgjl.do?xh="+xh;
            }else
            {
                $("#myForm1").attr("action","/jsdzsb/fjssb/modify.aspx?xh="+xh);
                $("#myForm1").submit();
                //location.href="/jsdzsb/fjssb/modify.aspx?xh="+xh;
            }
        }
    }
    function del(xh){
        if(confirm("是否删除 ？")){
            location.href="/jsdzsb/fjssb/delete.aspx?xh="+xh;
        }
    }
    
    function jyyjeChange(){
        var hj=getObj("sbbVo['hj']").value;
        var jyffjyjse=getObj("sbbVo['jyffjyjse']").value;
        var sl='0.03';
      
        if(toFixedNum(jyffjyjse, 2) > toFixedNum(parseFloat(hj) * parseFloat(sl), 2)){
            alert("教育费附加已缴税（费）额   加 本期减免税额  不能 大于本期应纳税额 ");
            getObj("sbbVo['jyffjyjse']").value='';
        }
    }
    
    function dfjyyjeChange(){
        var hj=getObj("sbbVo['hj']").value;
        var dffjjyjse=getObj("sbbVo['dffjjyjse']").value;
        var sl='0.02';
       
        if (toFixedNum(dffjjyjse, 2) >  toFixedNum(parseFloat(hj) * parseFloat(sl), 2)){
            alert("地方教育附加已缴税（费）额  加  本期减免税额  不能 大于本期应纳税额 ");
            getObj("sbbVo['dffjjyjse']").value='';
        }
    }
    --></script>




    <div id="_loadIfmContent" style="display: none;"></div>
    <script language="JavaScript">
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
    </script>

</body>


</html>
