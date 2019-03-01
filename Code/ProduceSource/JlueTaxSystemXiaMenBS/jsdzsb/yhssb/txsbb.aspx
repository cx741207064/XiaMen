<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="txsbb.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.jsdzsb.yhssb.txsbb" %>

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
        var tzlx="yhstxsbb";
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
        var skssqq="2018-08-01";
        var zspmdm="101110102";
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
        var sfzhm=getObj("zspmdm").value;
	   
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
                    $("#myForm3").attr("action","/jsdzsb/yhssb/submitSbb.aspx");  
                    $("#myForm3").submit();

                }
        	  
            }
        }else{
            if(flag=='modify'){
                $("#myForm3").attr("action","/jsdzsb/yhssb/lb.do?modifysave=ture");  
                $("#myForm3").submit();
            }else{
                $("#myForm3").attr("action","/jsdzsb/yhssb/submitSbb.aspx");  
                $("#myForm3").submit();

            }
        }
	   
    

    }
    </script>

    <div id='yhssblb'>
        <form action="/jsdzsb/yhssb/lb.do" method="post" id="myForm1">
            <input type="hidden" id="xgbz" value="no" name="xgbz">
            <input type="hidden" name="errAction" value="/jsdzsb/yhssb/lb.do" />
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="left" class="liucheng_01"></td>
                    <td align="left">
                        <table width="650" border="0" align="left" cellpadding="0" cellspacing="0">

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
                    </td>
                </tr>
            </table>
            </td>
  </tr>
  <tr>
      <td class="gray3_bg_color"></td>
  </tr>
            <tr>
                <td>
                    <table width="1200" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                        <tr>
                            <td align="center" class="h16_bold"><strong>印花税纳税申报(报告)表</strong></td>
                        </tr>
                    <td>
                        <table id="frm_dfsf_head" width="100%" border="1" cellpadding="0" cellspacing="0" bordercolorlight="#000000" bordercolordark="#FFFFFF">
                            <tr>
                                <td height="21" width="15%" nowrap="nowrap">税款所属期限：</td>
                                <td>2018-08-01至2018-08-31 
          <input type="hidden" name="sbbVo['skssqq']" value="2018-08-01" />
                                    <input type="hidden" name="sbbVo['skssqz']" value="2018-08-31" />
                                    <input type="hidden" name="sbbVo['zsxmdm']" value="10111" />
                                </td>
                                <td width="15%" nowrap="nowrap">填表日期：</td>
                                <td>2018-09-06
             <input type="hidden" name="sbbVo['tbrq']" value="2018-09-06" />
                                </td>
                                <td>金额单位：元至角分</td>
                            </tr>
                            <tr>
                                <td>纳税人识别号</td>
                                <td colspan="4">91350200MA2Y10EC4K</td>
                            </tr>
                        </table>
                        <table id="Table1" width="100%" border="1" cellpadding="0" cellspacing="0" bordercolorlight="#000000" bordercolordark="#FFFFFF">
                            <tr>
                                <td height="21" width="15%" nowrap="nowrap">名称</td>
                                <td width="35%">威纳仕（厦门）酒业有限公司</td>
                                <td nowrap="nowrap" colspan="2">
                                    <input type="checkbox" name="sbbVo['nsrlx']" value="1" checked="checked" />
                                    单位
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="checkbox" name="sbbVo['nsrlx']" value="2" disabled="disabled" />
                                    个人 </td>
                            </tr>
                            <tr>
                                <td nowrap="nowrap">登记注册类型</td>
                                <td nowrap="nowrap">其他有限责任公司
          &nbsp;</td>
                                <td nowrap="nowrap">所属行业</td>
                                <td nowrap="nowrap">酒、饮料及茶叶批发
          &nbsp;</td>
                            </tr>
                            <tr>
                                <td nowrap="nowrap">联系方式</td>
                                <td nowrap="nowrap">18559796088&nbsp;</td>
                                <td nowrap="nowrap">身份证号码</td>
                                <td nowrap="nowrap">
                                    <input type="text" name="sbbVo['sfzhm']" size="32" maxlength="32" onerrclear="false" required="false" requiredmsg="该项目必须填写" value="" class="line" title="身份证号码" />
                                </td>
                            </tr>
                        </table>
                    </td>
            </tr>
            <tr>
                <div align="left">
                    <td>
                        <table id="frm_dfsf" width="100%" border="1" cellpadding="0" cellspacing="0" bordercolorlight="#000000" bordercolordark="#FFFFFF">
                            <tr class="head">
                                <td nowrap="nowrap">操作</td>
                                <td nowrap="nowrap">税（费）种 </td>
                                <td nowrap="nowrap" width="100">应税项目</td>
                                <td nowrap="nowrap" width="80">税（费）<br />
                                    所属期始</td>
                                <td nowrap="nowrap" width="80">税（费）<br />
                                    所属期止</td>
                                <td nowrap="nowrap" style="color: Maroon">应入库税（费）额 </td>
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


                                <input type="hidden" name="tmp_count" value="0" />
                            </tbody>
                        </table>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td>应入库税（费）额合计：<span style="color: red;" id="_skhj">0.00</span></td>
                            </tr>
                        </table>
                        <p align="left">

                            <div align="center">
                                <span style="line-height: 1.5; color: red">


                                    <input type="button" onclick="tjsbjl()" value="添加申报记录" />




                                    <input type="button" value="确认提交" id="submitList" onclick="tjsbb()"
                                        disabled="disabled" />



                                    <input type="button" onclick="qxbcsb()" value="取消本次申报" align="right">
                                </span>
                            </div>
                        </p>
                    </td>
                    <p>&nbsp;</p>
                </div>

            </tr>
            </table>
	<table width="1200" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
        <tr>
            <td valign="top" style="line-height: 1.5; color: red">
                <p>
                    <font>说明：如有多笔印花税需要申报的，请逐条添加申报记录后再一起提交申报。</font>
                    <br />

                    <br />
                </p>
            </td>
        </tr>
    </table>
            </td>
  </tr>
</table>
        </form>
    </div>
    <div id="yhstjsbjl">
        <form action="/jsdzsb/yhssb/lb.do" method="post" id="myForm2">
            <input type="hidden" name="errAction" value="/jsdzsb/yhssb/tjsbjl.do" />
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="gray_bg_color">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 8px; margin-top: 8px;">
                            <tr>
                                <td align="left" class="liucheng_01"></td>
                                <td align="left">
                                    <table width="650" border="0" align="left" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td align="center" class="liucheng_02 h1_14w ">初始化</td>
                                            <td align="center">
                                                <img src="/res/jsdzsb/bsdt/images/over_arrow.png" width="9" height="16" /></td>
                                            <td align="center" class="liucheng_02 h1_14w">填写申报表</td>
                                            <td align="center">
                                                <img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="9" height="16" /></td>
                                            <td align="center" class="liucheng_03 h1_14b">确认申报</td>
                                            <td align="center">
                                                <img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="9" height="16" /></td>
                                            <td align="center" class="liucheng_03 h1_14b">查看回执</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="gray3_bg_color"></td>
                </tr>
                <tr>
                    <td>
                        <table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                            <tr>
                                <td align="left" class="STYLE2">
                                    <strong>请添加申报记录：</strong></td>
                            </tr>
                        <td>
                            <table width="100%" border="0" class="border h12_b" style="margin-top: 10px;">
                                <tr>
                                    <td width="183" class="hintText">
                                        <div align="right"><span class="STYLE1 STYLE4">*</span>税款所属期起：</div>
                                    </td>
                                    <td width="28">&nbsp;</td>
                                    <td width="412">2018-08-01</td>
                                    <input type="hidden" name="sbbVo['skssqq']" value="2018-08-01" />
                                    <td width="357">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="hintText">
                                        <div align="right"><span class="STYLE1 STYLE4">*</span>税款所属期止：</div>
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>2018-08-31</td>
                                    <input type="hidden" name="sbbVo['skssqz']" value="2018-08-31" />
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr></tr>
                <td>
                    <table width="100%" border="0" class="border h12_b" style="margin-top: 10px;">
                        <tr>
                            <td width="19%">
                                <div align="right" class="hintText">
                                    <div align="right"><span class="STYLE1 STYLE4">*</span>征收项目：</div>
                                </div>
                            </td>
                            <td width="3%">&nbsp;</td>
                            <td width="42%">
                                <label>
                                    印花税
                                </label>
                                <input type="hidden" name="sbbVo['zsxmdm']" value="10111" id="sbbVo['zsxmdm']" />

                            </td>
                            <td width="36%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="hintText">
                                <div align="right"><span class="STYLE1 STYLE4">*</span>应征凭证名称：</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <label>

























                                    <script language="javascript" type="text/javascript">
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

                                    </script>

                                    <select onchange="if(relSelect) {relSelect.selectChanged(this);}" id="sbbVo['zspmdm']" name="sbbVo['zspmdm']" parentobjid="sbbVo['zsxmdm']" dataarray="JS_ZSPM_DM" defaultid="101110101">
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
                                        <option value="101110102">加工承揽合同</option>
                                        <option value="101110103">建设工程勘察设计合同</option>
                                        <option value="101110104">建筑安装工程承包合同</option>
                                        <option value="101110105">财产租赁合同</option>
                                        <option value="101110106">货物运输合同(按运输费用万分之五贴花)</option>
                                        <option value="101110107">仓储保管合同</option>
                                        <option value="101110108">借款合同</option>
                                        <option value="101110109">财产保险合同</option>
                                        <option value="101110110">技术合同</option>
                                        <option value="101110200">产权转移书据</option>
                                        <option value="101110400">权利、许可证照</option>
                                        <option value="101110501">资金账簿</option>
                                        <option value="101110599">其他营业账簿</option>
                                        <option value="101119800">其他凭证</option>

                                    </select>



                                </label>
                            </td>
                            <td>&nbsp;</td>
                        </tr>

                    </table>
                    <div align="center">
                        <input type="button" onclick="txsbb()" value="下一步">
                        <input type="button" onclick="location.href='/jsdzsb/yhssb/lb.do'" value="取消添加">
                    </div>
                </td>
            </table>
            </td>
  </tr>
</table>

        </form>
    </div>


    <div id="yhstxsbb">
        <form action="/jsdzsb/yhssb/lb.do" method="post" id="myForm3">
            <input type="hidden" name="errAction" value="/jsdzsb/yhssb/txsbb.do" />
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="gray_bg_color">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 8px; margin-top: 8px;">
                            <tr>
                                <td align="left" class="liucheng_01"></td>
                                <td align="left">
                                    <table width="650" border="0" align="left" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td align="center" class="liucheng_02 h1_14w ">初始化</td>
                                            <td align="center">
                                                <img src="/res/jsdzsb/bsdt/images/over_arrow.png" width="9" height="16" /></td>
                                            <td align="center" class="liucheng_02 h1_14w">填写申报表</td>
                                            <td align="center">
                                                <img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="9" height="16" /></td>
                                            <td align="center" class="liucheng_03 h1_14b">确认申报</td>
                                            <td align="center">
                                                <img src="/res/jsdzsb/bsdt/images/off_arrow.png" width="9" height="16" /></td>
                                            <td align="center" class="liucheng_03 h1_14b">查看回执</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="gray3_bg_color"></td>
                </tr>
                <tr>
                    <td>
                        <table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                            <tr>
                                <td align="left" class="STYLE2">
                                    <strong>请填写申报记录：</strong></td>
                            </tr>
                        <td>
                            <table width="100%" border="0" class="border h12_b" style="margin-top: 10px;">
                                <tr>
                                    <td width="234" class="hintText">
                                        <div align="right"><span class="STYLE1 STYLE4">*</span>税款所属期起：</div>
                                    </td>
                                    <td width="16">&nbsp;</td>
                                    <td width="375"><%=DateFrom %>
			 <input type="hidden" name="sbbVo['skssqq']" value="<%=DateFrom %>" />
                                        <input type="hidden" name="sbbVo['tbrq']" value="2018-09-06" />
                                        <input type="hidden" name="xh" value="" />
                                    </td>
                                    <td width="355">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="hintText">
                                        <div align="right"><span class="STYLE1 STYLE4">*</span>税款所属期止：</div>
                                    </td>
                                    <td>&nbsp;</td>
                                    <td><%=DateTo %>
			 <input type="hidden" name="sbbVo['skssqz']" value="<%=DateTo %>" />
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr></tr>
                <td>
                    <table width="100%" border="0" class="border h12_b" style="margin-top: 10px;">
                        <tr>
                            <td width="24%">
                                <div align="right" class="hintText">
                                    <div align="right"><span class="STYLE1 STYLE4">*</span>征收项目：</div>
                                </div>
                            </td>
                            <td width="2%">&nbsp;</td>
                            <td width="38%">印花税
              <input type="hidden" name="sbbVo['zsxmdm']" value="10111" />

                            </td>
                            <td width="36%">
                                <label></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="hintText">
                                <div align="right"><span class="STYLE1 STYLE4">*</span>应征凭证名称：</div>
                            </td>
                            <td>&nbsp;</td>
                            <td><asp:label runat="server" id="zspmText">印花税-加工承揽合同</asp:label>
              <input type="hidden" name="zspmdm" id="zspmdm" value="101110102" runat="server" />
                            </td>
                            <td>
                                <label></label>
                            </td>
                        </tr>

                    </table>
                </td>
                <tr></tr>
                <td>
                    <table width="100%" border="0" class="border h12_b" style="margin-top: 10px;">
                        <tr>
                            <td width="24%">
                                <div align="right" class="hintText">
                                    <div align="right">计税金额或件数：</div>
                                </div>
                            </td>
                            <td width="2%">&nbsp;</td>
                            <td width="38%">
                                <label>
                                    <input name="sbbVo['jsje']" type="text" value="" onblur="return jsjeChange();">
                                </label>
                            </td>
                            <td width="36%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <div id="lbl_yye" align="right">核定依据：</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <label>
                                    <input name="sbbVo['hdzshdde']" type="text" value="" onblur="jsjeChange()">
                                </label>
                            </td>
                            <td><span class="STYLE3">采用核定征收的请填录此项&nbsp;</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div id="lbl_hdbl" align="right">核定比例：</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>

                                <input name="sbbVo['hdzshdbl']" type="text" value="">
                            </td>
                            <td><span class="STYLE3">示例：核定比例65%，填写为0.65</span></td>
                        </tr>

                        <tr>
                            <td>
                                <div align="right">
                                    <p align="right"><span class="STYLE1 STYLE4">*</span>适用税率：</p>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td><asp:label runat="server" id="lblSlText">0.0005</asp:label>
        <input name="sbbVo['sysl']" id="sysl" type="hidden" value="0.0005" runat="server" />
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <div align="right"><span class="hintText"><span class="STYLE1 STYLE4">*</span>本期应纳税额</span>：</div>
                            </td>

                            <td>&nbsp;</td>
                            <td>
                                <input name="sbbVo['bqynse']" type="text" value="" onchange="return ynseChange();" readonly="readonly">
                            </td>
                            <td><span class="STYLE3">
                                <!--=计税金额或件数×适用税率+核定依据×核定比例×适用税率  -->
                            </span></td>
                        </tr>

                    </table>
                </td>
                <tr></tr>
                <td>
                    <table width="100%" border="0" class="border h12_b" style="margin-top: 10px;">
                        <tr>
                            <td width="24%">
                                <div align="right">本期减免税额：</div>
                            </td>
                            <td width="2%">&nbsp;</td>
                            <td width="38%">
                                <input name="sbbVo['jmse']" type="text" value="" onchange="jmeChange()">
                            </td>
                            <td width="36%">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <div align="right">减免性质：</div>
                            </td>
                            <td>&nbsp;</td>
                            <td colspan="2">





















                                <select id="ssjmxzdm" name="sbbVo['ssjmxzdm']"
                                    onchange="changeSsjmxzDm()"
                                    style="overflow: hidden; width: 550px;">

                                    <option value="">--请选择--</option>


                                    <option value="0009011701">0009011701|对个人销售或购买住房暂免征收印花税|《财政部 国家税务总局关于调整房地产交易环节税收政策的通知》 财税〔2008〕137号第二条</option>

                                    <option value="0009011702">0009011702|对廉租住房、经济适用住房经营管理单位与廉租住房、经济适用住房相关的印花税以及廉租住房承租人、经济适用住房购买人涉及的印花税予以免征|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第（四）项</option>

                                    <option value="0009011704">0009011704|保障性住房免征印花税|《财政部 国家税务总局关于棚户区改造有关税收政策的通知》 财税〔2013〕101号第一条</option>

                                    <option value="0009011706">0009011706|对开发商建造廉租房和经济适用住房有关印花税予以免征|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第一条第（四）项</option>

                                    <option value="0009011707">0009011707|免征个人出租承租住房签订的租赁合同印花税|《财政部 国家税务总局关于廉租住房经济适用住房和住房租赁有关税收政策的通知》 财税〔2008〕24号第二条第（二）项</option>

                                    <option value="0009011709">0009011709|对公租房经营管理单位建造、管理公租房、购买住房作为公租房免征印花税|《财政部 国家税务总局关于公共租赁住房税收优惠政策的通知》 财税〔2015〕139号第二条</option>

                                    <option value="0009011710">0009011710|对公共租赁住房双方免征租赁协议印花税|《财政部 国家税务总局关于公共租赁住房税收优惠政策的通知》 财税〔2015〕139号第三条</option>

                                    <option value="0009012701">0009012701|房地产管理部门与个人订立的租房合同免征印花税|《国家税务局关于印花税若干具体问题的规定》 （88）国税地字第025号第三条</option>

                                    <option value="0009012702">0009012702|铁路、公路、航运、水路承运快件行李、包裹开具的托运单据免征印花税|《国家税务局关于印花税若干具体问题的规定》 （88）国税地字第025号第六条</option>

                                    <option value="0009033301">0009033301|青藏铁路公司及其所属单位营业账簿免征印花税|《财政部 国家税务总局关于青藏铁路公司运营期间有关税收等政策问题的通知》 财税〔2007〕11号第二条</option>

                                    <option value="0009041503">0009041503|对金融机构与小型企业、微型企业签订的借款合同免征印花税|《财政部 税务总局关于支持小微企业融资有关税收政策的通知》 财税〔2017〕77号第二条</option>

                                    <option value="0009052401">0009052401|企业改制、重组过程中印花税予以免征|《财政部 国家税务总局关于中国邮政储蓄银行改制上市有关税收政策的通知》 财税〔2013〕53号第五条</option>

                                    <option value="0009052501">0009052501|对中国铁路总公司改革过程中涉及的印花税进行减免|《财政部 国家税务总局关于组建中国铁路总公司有关印花税政策的通知》 财税〔2015〕57号</option>

                                    <option value="0009059901">0009059901|企业改制、重组过程中印花税予以免征|《财政部 国家税务总局关于明确中国邮政集团公司邮政速递物流业务重组改制过程中有关契税和印花税政策的通知》 财税〔2010〕92号第二、三、四条</option>

                                    <option value="0009059902">0009059902|企业改制、重组过程中印花税予以免征|《财政部 国家税务总局关于企业改制过程中有关印花税政策的通知》 财税〔2003〕183号</option>

                                    <option value="0009059903">0009059903|对企业改制、资产整合过程中涉及的所有产权转移书据及股权转让协议印花税予以免征|《财政部 国家税务总局关于中国联合网络通信集团有限公司转让CDMA网及其用户资产企业合并资产整合过程中涉及的增值税营业税印花税和土地增值税政策问题的通知》 财税〔2011〕13号第五、六、七条</option>

                                    <option value="0009059904">0009059904|对联通新时空移动通信有限公司接受中国联合网络通信集团固定通信资产增加资本金涉及的印花税予以免征|《财政部 国家税务总局关于中国联合网络通信集团有限公司转让CDMA网及其用户资产企业合并资产整合过程中涉及的增值税营业税印花税和土地增值税政策问题的通知》 财税〔2011〕13号第八条</option>

                                    <option value="0009059905">0009059905|对2011年中国移动增加的资本公积、股权调整协议、盈余公积转增实收资本印花税予以免征|《财政部 国家税务总局关于中国移动集团股权结构调整及盈余公积转增实收资本有关印花税政策的通知》 财税〔2012〕62号第一、二条</option>

                                    <option value="0009081502">0009081502|买卖封闭式证券投资基金免征印花税|《财政部 国家税务总局关于对买卖封闭式证券投资基金继续予以免征印花税的通知》 财税〔2004〕173号</option>

                                    <option value="0009081503">0009081503|股权分置改革过程中发生的股权转让免征印花税|《财政部 国家税务总局关于股权分置试点改革有关税收政策问题的通知》 财税〔2005〕103号第一条</option>

                                    <option value="0009081504">0009081504|贴息贷款合同免征印花税|《财政部 国家税务总局关于国家开发银行缴纳印花税问题的复函 》 财税字〔1995〕47号第一条</option>

                                    <option value="0009081505">0009081505|国有股东向全国社会保障基金理事会转持国有股免征证券（股票）交易印花税|《财政部 国家税务总局关于境内证券市场转持部分国有股充实全国社会保障基金有关证券（股票）交易印花税政策的通知》 财税〔2009〕103号</option>

                                    <option value="0009081509">0009081509|企业改制、重组过程中印花税予以免征|《财政部 国家税务总局关于外国银行分行改制为外商独资银行有关税收问题的通知》 财税〔2007〕45号第三条</option>

                                    <option value="0009081510">0009081510|信贷资产证券化免征印花税|《财政部 国家税务总局关于信贷资产证券化有关税收政策问题的通知》 财税〔2006〕5号第一条</option>

                                    <option value="0009081512">0009081512|证券投资者保护基金免征印花税|《财政部 国家税务总局关于证券投资者保护基金有关印花税政策的通知》 财税〔2006〕104号</option>

                                    <option value="0009081515">0009081515|无息、贴息贷款合同免征印花税|《中华人民共和国印花税暂行条例实施细则》 财税字〔1988〕255号第十三条第（二）项</option>

                                    <option value="0009081516">0009081516|被撤销金融机构接收债权、清偿债务签订的产权转移书据免征印花税|《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第1项</option>

                                    <option value="0009081517">0009081517|外国政府或者国际金融组织向我国政府及国家金融机构提供优惠贷款所书立的合同免征印花税|《中华人民共和国印花税暂行条例实施细则》 财税字〔1988〕255号第十三条第（三）项</option>

                                    <option value="0009081518">0009081518|新设立的资金账簿免征印花税|《财政部 税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2018〕41号第二条第一款</option>

                                    <option value="0009081519">0009081519|对保险公司进行风险处置和破产救助过程中签订的产权转移书据免征印花税|《财政部 税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2018〕41号第二条第二款</option>

                                    <option value="0009081520">0009081520|对保险公司进行风险处置过程中与中国人民银行签订的再贷款合同免征印花税|《财政部 税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2018〕41号第二条第三款</option>

                                    <option value="0009081521">0009081521|以保险保障基金自有财产和接收的受偿资产与保险公司签订的财产保险合同免征印花税|《财政部 税务总局关于保险保障基金有关税收政策问题的通知》 财税〔2018〕41号第二条第四款</option>

                                    <option value="0009083901">0009083901|国有商业银行划转给金融资产管理公司的资产免征印花税|《财政部 国家税务总局关于4家资产管理公司接收资本金项下的资产在办理过户时有关税收政策问题的通知》 财税〔2003〕21号</option>

                                    <option value="0009083902">0009083902|证券投资基金免征印花税|《财政部 国家税务总局关于开放式证券投资基金有关税收问题的通知》 财税〔2002〕128号第三条</option>

                                    <option value="0009083903">0009083903|金融资产管理公司收购、承接、处置不良资产免征印花税|《财政部 国家税务总局关于中国信达等4家金融资产管理公司税收政策问题的通知》 财税〔2001〕10号</option>

                                    <option value="0009083904">0009083904|农村信用社接受农村合作基金会财产产权转移书免征印花税|《中国人民银行 农业部 国家发展计划委员会 财政部 国家税务总局关于免缴农村信用社接收农村合作基金会财产产权过户税费的通知》 银发〔2000〕21号</option>

                                    <option value="0009083906">0009083906|对中国信达资产管理股份有限公司、中国华融资产管理股份有限公司及其分支机构处置剩余政策性剥离不良资产以及出让上市公司股权免征印花税|《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号第一条</option>

                                    <option value="0009092301">0009092301|对农民专业合作社与本社成员签订的农业产品和农业生产资料购销合同，免征印花税|《财政部 国家税务总局关于农民专业合作社有关税收政策的通知》 财税〔2008〕81号第四条</option>

                                    <option value="0009092305">0009092305|饮水工程运营管理单位为建设饮水工程取得土地使用权签订的产权转移书据，以及与施工单位签订的建设工程承包合同免征印花税|《财政部 国家税务总局关于继续实行农村饮水安全工程建设运营税收优惠政策的通知》 财税〔2016〕19号第二条</option>

                                    <option value="0009092306">0009092306|农村集体经济组织清产核资免征印花税|《财政部 税务总局关于支持农村集体产权制度改革有关税收政策的通知》 财税〔2017〕55号第二条第二款</option>

                                    <option value="0009101401">0009101401|对财产所有人将财产赠给学校所书立的书据免征印花税|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第二条</option>

                                    <option value="0009101401">0009101401|财产所有人将财产赠给政府、社会福利单位、学校所立的书据|《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第二条</option>

                                    <option value="0009101405">0009101405|高校学生公寓租赁合同免征印花税|《财政部 国家税务总局关于继续执行高校学生公寓和食堂有关税收政策的通知》 财税〔2016〕82号第一条</option>

                                    <option value="0009102905">0009102905|对北京冬奥组委、北京冬奥会测试赛赛事组委会使用的营业账簿和签订的各类合同免征印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（九）款</option>

                                    <option value="0009102906">0009102906|对国际奥委会签订的与北京2022年冬奥会有关的各类合同，免征国际奥委会的印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（二）款</option>

                                    <option value="0009102907">0009102907|对中国奥委会签订的与北京2022年冬奥会有关的各类合同，免征中国奥委会的印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（二）款</option>

                                    <option value="0009102908">0009102908|对国际残奥委会取得的与北京2022年冬残奥会有关的收入免征印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（五）款</option>

                                    <option value="0009102909">0009102909|对中国残奥委会取得的由北京冬奥组委分期支付的收入免征印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（六）款</option>

                                    <option value="0009102910">0009102910|对财产所有人将财产捐赠给北京冬奥组委所书立的产权转移书据免征印花税|《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（四）款</option>

                                    <option value="0009103201">0009103201|发行单位之间，发行单位与订阅单位或个人之间书立的征订凭证，暂免征印花税|《国家税务局关于图书、报刊等征订凭证征免印花税问题的通知》 （89）国税地字第142号第二条</option>

                                    <option value="0009103203">0009103203|文化单位转制为企业时的印花税优惠|《财政部 国家税务总局 中宣部关于继续实施文化体制改革中经营性文化事业单位转制为企业若干税收政策的通知》 财税〔2014〕84号第一条第（四）项</option>

                                    <option value="0009120601">0009120601|财产所有人将财产赠给政府、社会福利单位、学校所立的书据|《中华人民共和国印花税暂行条例》 中华人民共和国国务院令第11号第四条第2项</option>

                                    <option value="0009121301">0009121301|特殊货运凭证免征印花税|《国家税务总局关于货运凭证征收印花税几个具体问题的通知》 国税发〔1990〕173号</option>

                                    <option value="0009121302">0009121302|免征飞机租赁企业购机环节购销合同印花税|《财政部 国家税务总局关于飞机租赁企业有关印花税政策的通知》 财税〔2014〕18号</option>

                                    <option value="0009122602">0009122602|对国家石油储备基地第一期项目建设过程中涉及的印花税，予以免征|《财政部 国家税务总局关于国家石油储备基地建设有关税收政策的通知》 财税〔2005〕23号第一条</option>

                                    <option value="0009122604">0009122604|对国家石油储备基地第一期项目建设过程中涉及的印花税，予以免征|《财政部 国家税务总局关于国家石油储备基地有关税收政策的通知》 财税〔2011〕80号</option>

                                    <option value="0009122604">0009122604|对国家石油储备基地第二期项目建设过程中应缴的印花税，予以免征|《财政部 国家税务总局关于国家石油储备基地有关税收政策的通知》 财税〔2011〕80号</option>

                                    <option value="0009122605">0009122605|储备公司资金账簿和购销合同印花税减免|《财政部 国家税务总局关于部分国家储备商品有关税收政策的通知》 财税〔2016〕28号第一条</option>

                                    <option value="0009129904">0009129904|其他|《中华人民共和国印花税暂行条例》 中华人民共和国国务院令第11号第四条第1项</option>

                                    <option value="0009129904">0009129904|已缴纳印花税的凭证的副本或者抄本免纳印花税|《中华人民共和国印花税暂行条例》 中华人民共和国国务院令第11号第四条第1项</option>

                                    <option value="0009129906">0009129906|资金账簿减半征收印花税|《财政部 税务总局关于对营业账簿减免印花税的通知》 财税〔2018〕50号</option>

                                    <option value="0009129907">0009129907|其他账簿免征印花税|《财政部 税务总局关于对营业账簿减免印花税的通知》 财税〔2018〕50号</option>

                                    <option value="0009129999">0009129999|其他|其他</option>

                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div align="right">本期已缴税额：</div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <input name="sbbVo['bqyjse1']" type="text" value="" onblur="yjeChange()"></td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <td>
                                <div align="right">
                                    <div title="本期应补（退）税（费）额(10=7-8-9)"><span style="color: #990000">*本期应补（退）税额：</span></div>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <input name="sbbVo['bqybtse']" type="text" readonly="readonly" value=""></td>
                            <td><span class="STYLE3">=本期应纳税额-本期减免税额-本期已缴税额</span></td>
                        </tr>
                        <input type="hidden" name="sbbVo['sfzhm']" value="" />
                        <input type="hidden" name="sbbVo['kjmse']" value="" />
                        <input type="hidden" name="sbbVo['kyjse']" value="0.0" />
                        <input type="hidden" name="sbbVo['sfjm']" value="" />
                        <input type="hidden" name="sbbVo['sfyj']" value="" />
                        <input type="hidden" name="sbbVo['qzdje']" value="" />
                        <input type="hidden" name="sbbVo['hdlx']" value="1" />
                        <input type="hidden" name="sbbVo['hdlx2']" value="" />
                        <input type="hidden" name="sbbVo['rdpzuuid']" value="" />
                        <input type="hidden" name="sbbVo['yhpzuuid']" />
                        <input type="hidden" name="yjskuuid" value="" />
                        <input type="hidden" name="sbbVo['yjskuuid']" />
                        <input type="hidden" name="sbbVo['yyqzdje']" />

                    </table>
                    <div align="center">



                        <input type="button" onclick="qrtj('tj')" value="确认添加">
                        <input type="button" onclick="location.href='/jsdzsb/yhssb/tjsbjl.aspx'" value="上一步">




                        <input type="button" onclick="location.href='/jsdzsb/yhssb/lb.aspx'" value="取消添加">
                    </div>
                </td>
            </table>
            <table width="1000" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                <tr>
                    <td valign="top" bgcolor="#EFF4FC" style="line-height: 1.5">
                        <p>
                            <font style="color: red">说明：</font>根据《中华人民共和国印花税暂行条例》，应纳税额不足一角的，免纳印花税。应纳税额在一角以上的，其税额尾数不满五分的不计，满五分的按一角计算缴纳。财产租赁合同的应纳税额在一角以上但不满一元的，按一元计算缴纳。<br />

                            <br />
                        </p>
                    </td>
                </tr>
            </table>
            <p>&nbsp;</p>
            </td>
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
            var slVal = getObj("sysl").value;

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
            var slVal = getObj("sysl").value;
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
