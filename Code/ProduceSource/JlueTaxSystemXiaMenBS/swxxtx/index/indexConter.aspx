<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="indexConter.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.swxxtx.index.indexConter" %>








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
    <!--有这个配置的页面返回给客户端是要装饰wsbs-home.jsp模板  -->
    <!-- <meta name="decorator" content="blank-layout"/> -->
    <!-- <meta name="decorator" content="wsbs-home" /> -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="decorator" content="blank" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <style type="text/css"></style>
    <link href="/res/menu/css/indexConter.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="/res/menu/js/jquery-1.12.4.js"></script>
    <script type="text/javascript" src="/js/initinfo.js"></script>
    <!-- script language="javascript" src="index/js/bainianli_1.js?v=1.1" charset="UTF-8"></script>-->
    <!--<script src="index/js/bainianli_1.js" type="text/javascript"></script>-->

</head>

<body>






    <!--最外层div首页主体-->
    <div id="syzt">
        <!--内容左上页面 登录提醒-->
        <div id="dltx">
            <div id="dltx_top">
                <img src="/res/menu/images/people.png">
                <div>您好！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="NSRMC"></span>，税号：<span id="NSRSBH"></span></div>
            </div>
            <div id="dltx_left">
                <div id="dltx_center">
                    <div>
                        <img src="/res/menu/images/ssti.png"><div style="color: #1171d6; font-size: 16px; font-weight: bold;">涉税提醒</div>
                    </div>
                    <div>未申报：<span id="wsb"></span></div>
                    <div>未读邮件：<span class="wdyj">0</span></div>
                    <div>未审批文书：<span id="wsp"></span></div>
                </div>

                <div style="padding-left: 10px; padding-top: 30px">
                    <div id="sstx_neiron1"></div>
                    <div id="sstx_neiron2"></div>
                    <div style="cursor: pointer; text-align: left; width: 380px; font-size: 14px; color: blue;">
                        <div style="padding-left: 10px;">
                            <div id="Div1">
                                <div onclick="window.open('http://www.xmtax.gov.cn/xmswcms/content/S2089.html');">◆我市四家银行账户三方协议签约可“全程网办</div>
                            </div>
                            <div id="Div2">
                                <div onclick="window.open('http://www.xmtax.gov.cn/xmswcms/content/S2235.html');">◆关于统一发票申领监控规则的温馨提示</div>
                            </div>
                            <div style="cursor: pointer; text-align: left; width: 380px; font-size: 14px; color: blue;">
                                <div onclick="window.open('http://www.xmtax.gov.cn/xmswcms/content/S1493.html');">◆厦门市网上税务局用户操作手册</div>
                            </div>
                        </div>
                    </div>

                </div>
                <img src="/res/menu/images/sfgxx.png" id="sfgxx">
                <div id="dltx_right">
                    <div id="dltx_center1" style="width: 100%">
                        <div>
                            <img src="/res/menu/images/zgswjg.png"><div style="color: #1171d6; font-size: 16px; font-weight: bold;">主管税务机关</div>
                        </div>
                    </div>
                    <div id="zhuguanshuiwujiguan" style="padding-left: 10px;">
                        <div id="gszgswjg" style="position: static; margin-top: 40px;"></div>
                        <div id="dszgswjg" style="position: static"></div>
                    </div>

                </div>
            </div>
            <div id="tzxx">
                <table>
                    <tr>
                        <td>
                            <div class="tzxx_title">
                                <div>当期申报信息(不含个人所得税)</div>
                                <hr style="float: left; width: 105px;">
                            </div>
                            <div id="sbxxlb" style="display: none;">
                                <div class="sbxxTitle">
                                    <div id="sbxxTitle1">未申报：</div>
                                    <div class="sbxx" id="wsblb">&nbsp;</div>
                                </div>
                                <div class="sbxxTitle">
                                    <div id="sbxxTitle2">已申报：</div>
                                    <div class="sbxx" id="ysblb">&nbsp;</div>
                                </div>
                            </div>
                            <div id="sbxxlb1">
                                <div style="padding: 5px; cursor: pointer; font-size: 14px; position: absolute; top: 50px; left: 180px; background-color: #1788e2; color: white;" onclick="getSbxx('1');">点击查询</div>
                            </div>
                        </td>
                        <td class="tzgg">
                            <div class="tzxx_title">
                                <div onclick="tzgg();" id="tzxxzt">通知公告</div>
                                <hr style="float: left;">
                            </div>
                            <ul id="tzgglb">
                                <li onclick="window.open('http://www.xmtax.gov.cn/content/S2338.html');">
                                    <div>关于“自然人税收管理系统扣缴客户端...</div>
                                    <div class="tzrq">2018-08-01</div>
                                </li>
                                <li onclick="window.open('http://www.xmtax.gov.cn/content/S2338.html');">
                                    <div>关于部分网上涉税业务暂停服务的通知</div>
                                    <div class="tzrq">2018-07-30</div>
                                </li>
                                <li onclick="window.open('http://www.xmtax.gov.cn/content/S2338.html');">
                                    <div>关于统一发票申领监控规则的温馨提示</div>
                                    <div class="tzrq">2018-07-27</div>
                                </li>
                                <li onclick="window.open('http://www.xmtax.gov.cn/content/S2338.html');">
                                    <div>关于部分网上涉税业务暂停服务的通知</div>
                                    <div class="tzrq">2018-07-26</div>
                                </li>
                                <li onclick="window.open('http://www.xmtax.gov.cn/content/S2338.html');">
                                    <div>关于本周四财税库银（TIPS）系统暂...</div>
                                    <div class="tzrq">2018-07-25</div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td id="spjg">
                            <div class="tzxx_title">
                                <div>审批结果</div>
                                <hr style="float: left;">
                            </div>
                            <div id="spjg_biaotou">
                                <div class="wsmc">&nbsp;&nbsp;&nbsp;文书名称</div>
                                <div class="sprq">申请日期</div>
                                <div class="zt">状态</div>
                            </div>
                            <ul id="spjglb" >
                        <li class="otherli"><div class="wsmc">发票票种核定</div><div class="sprq">2018-08-17</div><div class="zt">已审批</div></li><li class="otherli"><div class="wsmc">发票票种核定</div><div class="sprq">2018-08-17</div><div class="zt">已审批</div></li><li class="otherli"><div class="wsmc">发票票种核定</div><div class="sprq">2018-08-17</div><div class="zt">已审批</div></li>
                            </ul>
                            <div id="spjglb1" style="display: none;">
                                <div style="padding: 5px; cursor: pointer; font-size: 14px; position: absolute; top: 90px; left: 180px; background-color: #1788e2; color: white;" onclick="getSpjg('1');">点击查询</div>
                            </div>
                        </td>
                        <td id="wdyj">
                        <div class="tzxx_title"><div>未读邮件</div><hr style="float:left;"></div>
                        <div id="wdyj_biaotou">
                            <div class="yjbt" style="padding-left:100px;">&nbsp;&nbsp;&nbsp;邮件标题</div>
                            <div class="fssj">发送时间</div>
                        </div>
                        <ul id="wdyjlb">
                            <li class="otherli1" id="mail1"><span><div class="yjbt">10月新政汇编</div><div class="fssj">2018-08-28</div></span></li>
                            <li class="otherli1" id="mail2"><span id="0108736661"><div class="yjbt">关于湖里税务局枋湖、梧桐大厅合...</div><div class="fssj">2018-08-17</div></span></li>
                            <li class="otherli1" id="mail3"><span id="0107881191"><div class="yjbt">致纳税人一封信</div><div class="fssj">2018-08-29</div></span></li>
                         </ul>
                         <div id="wdyjlb1" style="display: none;">
                        	<div style="padding: 5px;cursor: pointer;font-size: 14px;position: absolute;top: 90px;left: 180px;background-color: #1788e2;color: white;" onclick="newgetWdyj('600000','1');">点击查询</div>
                        </div>
                    </td>
                    </tr>
                </table>
            </div>
            <div id="wnl">
                <iframe src="/res/menu/js/bainianli_1.html" scrolling="no" frameborder="0"></iframe>
                <!-- <div id="bsrl">办税日历</div> -->
            </div>


            <div id="bstyy">
                <img id="bsyytop" src="/res/menu/images/bstyy.png" onclick="window.open('http://wsbsfwt2.xmtax.gov.cn:1080/dwfw/wsyy.do');">
                <div id="colee">
                    <ul id="colee1"></ul>
                    <ul id="colee2"></ul>
                </div>

                <img id="bsyytp" src="/res/menu/images/nszx.png" onclick="window.open('http://ai.xm-l-tax.gov.cn/aiconsult/robot/index.do?_pltfm=01&type=02&usertype=QY');">
            </div>
        </div>

        <script type="text/javascript">
            $(function () {
                gspathurl = "http://wsbsfwt1.xmtax.gov.cn:8001";
                dspathurl = "http://wsbsfwt2.xmtax.gov.cn:8001";
                TzgglbURL = "http://www.xmtax.gov.cn";
                /*通知公告  */
                /*-------------------------------------------------------------------------------*/
                /* $.ajax({
                    type : "GET",
                    url : "/swxxtx/getTzgg.do",
                    data : {
                        method: "checkJsGs"
                    },
                    dataType : "json",
                    success : function(data) {
                        /*通知公告  */
                /* if(data['gs_TZGGVO']!=null){
                    var gs_TZGGVO=data['gs_TZGGVO'];
                    var gs_TZGGVOlist=$.parseJSON(gs_TZGGVO);
                    var number=5;
                    if(gs_TZGGVOlist.length<number){
                        number=gs_TZGGVOlistlist.length;
                    }
                    for(var i=0;i<number;i++){
                        var TITLE=gs_TZGGVOlist[i]["TITLE"];
                        var CMS_DEST_PATH=gs_TZGGVOlist[i]["CMS_DEST_PATH"];
                        if(GetLength(TITLE)>30){
                           TITLE=cutstr(TITLE,30);
                        }
                        var UPDATE_TIME=gs_TZGGVOlist[i]["UPDATE_TIME"];
                        var arr = UPDATE_TIME.split(" ");
                        var url=TzgglbURL+CMS_DEST_PATH;
                        $("#tzgglb").append("<li onclick='window.open(\""+url+"\");'><div>"+TITLE+"</div><div class='tzrq'>"+arr[0]+"</div></li>");
                    }  
                }
            }	
        });  */
                //未审批文书个数
                /*-------------------------------------------------------------------------------*/
                $.ajax({
                    type: "GET",
                    url: "/swxxtx/getSstx.ashx",
                    data: {
                        method: "checkJsGs"
                    },
                    dataType: "json",
                    success: function (data) {
                        /*涉税提醒列表 */
                        /* if(data['ds_SSTXGRID']!=null){
                            var SSTXGRID=data['ds_SSTXGRID'];
                            var SSTXGRIDlist=$.parseJSON(SSTXGRID);
                            var number=2;
                            //alert(SSTXGRID.length+"....."+SSTXGRIDlist.length);
                            if(SSTXGRIDlist.length<number){
                                number=SSTXGRIDlist.length;
                            }
                            for(var i=0;i<number;i++){
                                var id=i+1;
                                var XXNR=SSTXGRIDlist[i]["XXNR"];
                                var SM=SSTXGRIDlist[i]["SM"];
                                $("#sstx_neiron"+id).append("<div onclick='window.open(\""+SM+"\");'>◆"+XXNR+"</div>");
                                if(id==2){
                                     break;
                                }
                            }
                        }
                        /*未审批文书个数 */
                        var wsp = 0;
                        if (data['gs_WSPWSSVO'] != null) {
                            var gs_WSPWSSVO = data['gs_WSPWSSVO'];
                            var gs_WSPWSSVO = $.parseJSON(gs_WSPWSSVO);
                            wsp = wsp + gs_WSPWSSVO;
                        }
                        if (data['ds_WSPWSSVO'] != null) {
                            var ds_WSPWSSVO = data['ds_WSPWSSVO'];
                            var ds_WSPWSSVO = $.parseJSON(ds_WSPWSSVO);
                            wsp = wsp + ds_WSPWSSVO;
                        }
                        $("#wsp").append(wsp);
                    }
                });
                //主管税务机关
                /*-------------------------------------------------------------------------------*/
                $.ajax({
                    type: "GET",
                    url: "/swxxtx/getZgswjg.ashx",
                    data: {
                        method: "checkJsGs"
                    },
                    dataType: "json",
                    success: function (data) {
                        /*主管税务机关 */
                        if (data['gs_ZGSWJG'] != null) {
                            var gs_ZGSWJG = data['gs_ZGSWJG'];
                            var gs_SSGLY = data['gs_SSGLY'];
                            var gs_SWZGDH = data['gs_SWZGDH'];
                            if (gs_ZGSWJG != null && gs_ZGSWJG != "") {
                                $("#gszgswjg").append("◆" + gs_ZGSWJG + gs_SSGLY + "（电话：" + gs_SWZGDH + "）");
                            }
                        }
                        if (data['ds_ZGSWJG'] != null) {
                            var ds_ZGSWJG = data['ds_ZGSWJG'];
                            var ds_SSGLY = data['ds_SSGLY'];
                            var ds_SWZGDH = data['ds_SWZGDH'];
                            if (ds_ZGSWJG != null && ds_ZGSWJG != "") {
                                $("#dszgswjg").append("◆" + ds_ZGSWJG + ds_SSGLY + "（电话：" + ds_SWZGDH + "）");
                            }
                        }
                    }
                });

                getSbxx("0");
                //getSpjg("0");
                //getWdyj("0");
                /*-------------------------------------------------------------------------------------------------  */
                $.ajax({
                    type: "GET",
                    url: "/swxxtx/getBsdtyy.ashx",
                    data: {
                        method: "checkJsGs"
                    },
                    dataType: "json",
                    success: function (data) {

                        /*办税大厅预约 */
                        if (data['BsdtyyList'] != null) {
                            var BsdtyyList = data['BsdtyyList'];
                            var BsdtyyList = $.parseJSON(BsdtyyList);
                            for (var i = 0; i < BsdtyyList.length; i++) {
                                var dtmc = BsdtyyList[i]['dtmc'];
                                var blrs = BsdtyyList[i]['blrs'];
                                if (GetLength(dtmc) > 20) {
                                    dtmc = cutstr(dtmc, 20);
                                }
                                if (blrs >= 0) {
                                    $("#colee1").append(" <li><div ><div class='dd'>" + dtmc + "</div><div class='xianchan'>现场：" + blrs + "人</div></div></li>");
                                } else {
                                    $("#colee1").append(" <li><div ><div class='dd'>" + dtmc + "</div><div class='xianchan'>现场：" + 0 + "人</div></div></li>");
                                }
                            }
                            var speed = 30;
                            var colee2 = document.getElementById("colee2");
                            var colee1 = document.getElementById("colee1");
                            var colee = document.getElementById("colee");
                            colee2.innerHTML = colee1.innerHTML; //克隆colee1为colee2
                            function Marquee1() {
                                //当滚动至colee1与colee2交界时
                                if (colee2.offsetTop - colee.scrollTop <= 0) {
                                    colee.scrollTop -= colee1.offsetHeight; //colee跳到最顶端
                                } else {
                                    colee.scrollTop++
                                }
                            }
                            var MyMar1 = setInterval(Marquee1, speed)//设置定时器
                            //鼠标移上时清除定时器达到滚动停止的目的
                            colee.onmouseover = function () { clearInterval(MyMar1) }
                            //鼠标移开时重设定时器
                            colee.onmouseout = function () { MyMar1 = setInterval(Marquee1, speed) }
                        }
                    }
                });
                /*-------------------------------------------------------------------------------------------------  */


            });
            /* 字符串、最长 */
            function cutstr(str, len) {
                var str_length = 0;
                var str_len = 0;
                str_cut = new String();
                str_len = str.length;
                for (var i = 0; i < str_len; i++) {
                    a = str.charAt(i);
                    str_length++;
                    if (escape(a).length > 4) {
                        //中文字符的长度经编码之后大于4  
                        str_length++;
                    }
                    str_cut = str_cut.concat(a);
                    if (str_length >= len) {
                        str_cut = str_cut.concat("...");
                        return str_cut;
                    }
                }
                //如果给定字符串小于指定长度，则返回源字符串；  
                if (str_length < len) {
                    return str;
                }
            }

            var GetLength = function (str) {
                ///<summary>获得字符串实际长度，中文2，英文1</summary>
                ///<param name="str">要获得长度的字符串</param>
                var realLength = 0, len = str.length, charCode = -1;
                for (var i = 0; i < len; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode >= 0 && charCode <= 128) realLength += 1;
                    else realLength += 2;
                }
                return realLength;
            };

            function tzgg() {
                url = "http://www.xmtax.gov.cn/xmswcms/bsfw/bsfw-sstz/pages/index.html";
                window.open(url);
            }

            function dsMail(o) {
                var mail_id = o.id;
                //var url="http://www.xmtaxtest.gov:8001/mail/showmail.do?folder_id=1&mail_id="+mail_id;
                var url = dspathurl + "/mail/showmail.do?folder_id=1&mail_id=" + mail_id;
                window.location.href = url;
            }
            function gsMail() {
                //var url="http://www.xmtaxtest.gov:8003/lhpt/index.do?menu_item_id=GSDZYJ&gdsbz=GS";
                var url = gspathurl + "/lhpt/index.do?menu_item_id=GSDZYJ&gdsbz=GS";
                window.location.href = url;
            }

            function getSbxx(x) {
                if (x == "1") {
                    $("#sbxxlb1").hide();
                    $("#sbxxlb").show();
                }
                //申报信息
                /*-------------------------------------------------------------------------------*/
                $.ajax({
                    type: "GET",
                    url: "/swxxtx/getSbxx.ashx",
                    data: {
                        method: "checkJsGs",
                        r: Date.parse((new Date()))
                    },
                    dataType: "json",
                    success: function (data) {
                        /*申报信息  */
                        //未申报
                        var wsb = 0;
                        var wsblb = ""
                        if (data['ds_WSBZSXMGRID'] != null) {
                            var ds_WSBZSXMGRID = data['ds_WSBZSXMGRID'];
                            var ds_WSBZSXMGRIDlist = $.parseJSON(ds_WSBZSXMGRID);
                            for (var i = 0; i < ds_WSBZSXMGRIDlist.length; i++) {

                                var ZSXMMC = ds_WSBZSXMGRIDlist[i]["TaskName"];
                                if (ZSXMMC != "个人所得税") {
                                    wsb = wsb + 1;
                                    wsblb = wsblb + ZSXMMC + "&nbsp;&nbsp;";
                                }

                            }
                        }
                        if (data['gs_WSBZSXMGRID'] != null) {
                            var gs_WSBZSXMGRID = data['gs_WSBZSXMGRID'];
                            var gs_WSBZSXMGRIDlist = $.parseJSON(gs_WSBZSXMGRID);
                            for (var i = 0; i < gs_WSBZSXMGRIDlist.length; i++) {
                                var ZSXMMC = gs_WSBZSXMGRIDlist[i]["TaskName"];
                                if (ZSXMMC != "个人所得税") {
                                    wsb = wsb + 1;
                                    wsblb = wsblb + ZSXMMC + "&nbsp;&nbsp;";
                                }
                            }
                        }
                        document.getElementById('wsblb').innerHTML = wsblb;
                        //$("#wsblb").html(wsblb);
                        $("#wsb").append(wsb);

                        //已申报
                        var ysblb = ""
                        if (data['ds_YSBZSXMGRID'] != null) {
                            var ds_YSBZSXMGRID = data['ds_YSBZSXMGRID'];
                            var ds_YSBZSXMGRIDlist = $.parseJSON(ds_YSBZSXMGRID);
                            for (var i = 0; i < ds_YSBZSXMGRIDlist.length; i++) {
                                var ZSXMMC = ds_YSBZSXMGRIDlist[i]["TaskName"];
                                if (ZSXMMC != "个人所得税") {
                                    ysblb = ysblb + ZSXMMC + "&nbsp;&nbsp;";
                                }
                            }
                        }
                        if (data['gs_YSBZSXMGRID'] != null) {
                            var gs_YSBZSXMGRID = data['gs_YSBZSXMGRID'];
                            var gs_YSBZSXMGRIDlist = $.parseJSON(gs_YSBZSXMGRID);
                            for (var i = 0; i < gs_YSBZSXMGRIDlist.length; i++) {
                                var ZSXMMC = gs_YSBZSXMGRIDlist[i]["TaskName"];
                                if (ZSXMMC != "个人所得税") {
                                    ysblb = ysblb + ZSXMMC + "&nbsp;&nbsp;";
                                }
                            }
                        }
                        ysblb = ysblb;
                        $("#ysblb").append(ysblb);
                        if (x == "0") {
                            if (data['gs_YSBZSXMGRID'] != null || data['ds_YSBZSXMGRID'] != null || data['gs_WSBZSXMGRID'] != null || data['ds_WSBZSXMGRID'] != null) {
                                $("#sbxxlb1").hide();
                                $("#sbxxlb").show();
                            } else {
                                $("#sbxxlb").hide();
                                $("#sbxxlb1").show();
                            }
                        }

                    }
                });
            }

            function getSpjg(x) {
                if (x == "1") {
                    $("#spjglb1").hide();
                    $("#spjglb").show();
                }
                //审批结果
                /*-------------------------------------------------------------------------------*/
                $.ajax({
                    type: "GET",
                    url: "/swxxtx/getSpjg.ashx",
                    data: {
                        method: "checkJsGs"
                    },
                    dataType: "json",
                    success: function (data) {
                        /*审批结果 */
                        if (data['allSpjg'] != null) {
                            var allSpjglist = data['allSpjg'];
                            var number = 3;
                            if (allSpjglist.length < number) {
                                number = allSpjglist.length;
                            }
                            var html = "";
                            for (var i = 0; i < number; i++) {
                                var LCSWSXMC = allSpjglist[i]['LCSWSXMC'];
                                if (GetLength(LCSWSXMC) > 20) {
                                    LCSWSXMC = cutstr(LCSWSXMC, 20);
                                }
                                var LRRQ = allSpjglist[i]['LRRQ'];
                                var arr = LRRQ.split(" ");
                                var LCZTMC = allSpjglist[i]['LCZTMC'];
                                if (LCZTMC == "审") {
                                    LCZTMC = "审批中";
                                    h = "<li class='otherli' style='color:red'><div class='wsmc'>" + LCSWSXMC + "</div><div class='sprq'>" + arr[0] + "</div><div class='zt'>" + LCZTMC + "</div></li>"
                                } else {
                                    LCZTMC = "已审批";
                                    h = "<li class='otherli'><div class='wsmc'>" + LCSWSXMC + "</div><div class='sprq'>" + arr[0] + "</div><div class='zt'>" + LCZTMC + "</div></li>"
                                }
                                html = html + h;

                            }
                            $("#spjglb").append(html);
                            if (x == "0") {
                                if (html != null && html != "") {
                                    $("#spjglb1").hide();
                                    $("#spjglb").show();
                                } else {
                                    $("#spjglb").hide();
                                    $("#spjglb1").show();
                                }
                            }
                        }
                    }
                });
            }

            function getWdyj(x) {
                if (x == "1") {
                    $("#wdyjlb1").hide();
                    $("#wdyjlb").show();
                }
                //邮件
                /*-------------------------------------------------------------------------------*/
                $.ajax({
                    type: "GET",
                    url: "/swxxtx/getWdyj.ashx",
                    data: {
                        method: "checkJsGs"
                    },
                    dataType: "json",
                    success: function (data) {
                        /*未读邮件*/
                        var mailNumber = 0;
                        if (data['allMail'] != null) {
                            var gs_WDMAILVOlist = data['allMail'];
                            mailNumber = mailNumber + gs_WDMAILVOlist.length;
                            var number = 3;
                            if (gs_WDMAILVOlist.length < number) {
                                number = gs_WDMAILVOlist.length;
                            }
                            for (var i = 0; i < number; i++) {
                                var id = i + 1;
                                var SUBJECT = gs_WDMAILVOlist[i]['SUBJECT'];
                                var SEND_TIME = gs_WDMAILVOlist[i]['SEND_TIME'];
                                if (GetLength(SUBJECT) > 30) {
                                    SUBJECT = cutstr(SUBJECT, 30);
                                }
                                if (gs_WDMAILVOlist[i]['LX'] == "ds") {
                                    var mail_id = gs_WDMAILVOlist[i]['MAIL_ID'];
                                    $("#mail" + id).append("<span id=" + mail_id + " onclick='dsMail(this);'><div class='yjbt'>" + SUBJECT + "</div><div class='fssj'>" + SEND_TIME + "</div></span>");

                                } else {
                                    $("#mail" + id).append("<span onclick='gsMail();'><div class='yjbt'>" + SUBJECT + "</div><div class='fssj'>" + SEND_TIME + "</div></span>");
                                }

                            }
                        }
                        $("#wdyj").html(mailNumber);
                        if (x == "0") {
                            if (mailNumber != 0) {
                                $("#wdyjlb1").hide();
                                $("#wdyjlb").show();
                            } else {
                                $("#wdyjlb").hide();
                                $("#wdyjlb1").show();
                            }
                        }
                    }
                });
            }
        </script>





        <div id="_loadIfmContent" style="display: none;"></div>
        <script language="JavaScript">
            $(function () {
                endIe8Load();
            });

            function endIe8Load() {
                try {
                    var _loadIfm = ' <iframe id="_loadIfm" src="" width="1" height="1" style="border: 0px; display:none" frameborder="0" ></iframe>';
                    if (!$("#_loadIfm")[0]) {
                        $("#_loadIfmContent").append(_loadIfm);
                    }
                    $("#_loadIfmContent", window.document).attr("src", "#");
                } catch (e) { }
            }
        </script>
</body>


</html>
