<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="home.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.bsfw.home.home" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <title>厦门税务办税服务大厅--主栏目</title>
    <style type="text/css" media="print">
        .noprint {
            display: none;
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
    <script src="/res/otp4/js/otp4-core.js" type="text/javascript"></script>
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
    <link rel="stylesheet" type="text/css" href="/res/css/onlineTax.css" />
    <style type="text/css">
        #divdbsxTitle {
            width: 40px;
            color: #0577CD;
            font-family: "微软雅黑";
            font-size: 16px;
            padding: 15px 10px 15px 20px;
            border-right: 1px solid #ddd;
            display: inline-block;
            *float: left;
            position: relative;
        }

        .divdbsxContent {
            display: inline-block;
            *float: left;
            position: relative;
            color: #0577CD;
            font-family: "微软雅黑";
            font-size: 16px;
            *padding-top: 15px;
        }

        .divdbsxContentImg {
            padding: 0px 10px;
            *padding-top: 15px;
        }

        .dbsxContentNum {
            text-align: center;
        }

        .divdbsxIcon {
            width: 44px;
            height: 44px;
        }

        .iconWsb {
            background: url("/res/images/bsfwhall/taxDeclarationMsg.png");
            _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="/res/images/bsfwhall/taxDeclarationMsg.png");
            _background: none;
        }

        .iconWdyj {
            background: url("/res/images/bsfwhall/emailMsg.png");
            _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="/res/images/bsfwhall/emailMsg.png");
            _background: none;
        }

        .iconSp {
            background: url("/res/images/bsfwhall/spjg.png");
            _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="/res/images/bsfwhall/spjg.png");
            _background: none;
        }

        #sbxxMsg {
            _margin-left: 15px;
        }

        #tzMsg {
            _margin-left: 15px;
        }

        .msgTitle {
            width: 100%;
            list-style: none;
            border-bottom: #dddddd solid 1px;
        }

            .msgTitle li {
                display: inline;
                width: 50%;
                position: relative;
                padding: 3px;
                bottom: -3px;
                *bottom: -1px;
                _bottom: 2px;
            }

        .msgTitleFirstLi {
            font-size: 14px;
            font-weight: bold;
            margin-right: 2px;
        }

            .msgTitleFirstLi a {
                text-decoration: none;
            }

                .msgTitleFirstLi a:visited {
                    text-decoration: none;
                    color: #1693f0;
                }

        .msgTitleLiActive {
            border-bottom: #1693f0 solid 2px;
            color: #1693f0;
        }

        .msgA {
            text-decoration: none;
            color: #000;
            margin-left: 300px;
        }

        #mycalendar {
        }

        #bsfwDateBtn {
            margin-top: -8px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
        }

        .roll_div {
            height: 30px;
            overflow: hidden;
        }

        .bsfwManagerImg {
            float: none;
        }
    </style>






    <script type="text/javascript">
        // 网上申报系统
        var wssbxt_url = "http://wssb.xm-n-tax.gov.cn:7001/wssb/wssb/public/jsp/wssb.jsp";
        // 发票网上申领
        var fpwssl_url = "http://59.57.253.214:7001/wssl_nsrd/?id=91350200MA2Y10EC4K&timestamp=K1536541724930";
        // 三方协议签订
        var sfxyqd_url = "http://znhd.xm-n-tax.gov.cn:7001/gswzglpt/jsp/sfxy/sfxy_gnlb.jsp?nsrsbh=91350200MA2Y10EC4K&timestamp=K1536541724930";
        // 车辆购置税查询 
        var clgzscx_url = "http://znhd.xm-n-tax.gov.cn:7001/gswzglpt/jsp/cgs/cgscx.jsp";

        //网络发票查询
        var wlfpcx_url = "http://218.5.84.66:7001/fpgl/jsp/wlfp/kpxxcx/nsr_kpxxcx_index.jsp?nsrsbh=91350200MA2Y10EC4K&timestamp=K1536541724930";

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

        var fpzwcx_url = "http://fpcx.xmtax.gov.cn:7002/fpcx/index.do?nsrsbh=91350200MA2Y10EC4K&timestamp=K1536541724930";

    </script>
    <script type="text/javascript">
        /* 加载通知 */


        /* 加载公告 */


        function changeTzTab(v, TzPageMax, o) {
            for (var i = 1; i <= TzPageMax; i++) {
                if (i == v) {
                    $("#tzMenu" + i).addClass("msgTitleLiActive");
                } else {
                    $("#tzMenu" + i).removeClass("msgTitleLiActive");
                }
            }
            if (v == 2) {
                $("#TzPage1").hide();
                $("#TzPage2").show();
                //loadAnnouncement();

            }
            if (v == 1) {
                $("#TzPage2").hide();
                $("#TzPage1").show();
                //loadNotification();
            }
        }


        var curPath = window.document.location.href;
        var pos = curPath.lastIndexOf("/");
        var localhostPath = curPath.substring(0, pos) + "/";
        var date1 = "/res/images/bsfwhall/May.jpg";
        var date2 = "/res/images/bsfwhall/June.jpg";
        var date3 = "/res/images/bsfwhall/July.jpg";
        function update(button) {
            var currentDate = document.getElementById("dateImg").src.replace(localhostPath, "");
            var nowIndex;
            var maxIndex = 3;
            if (currentDate == date1) {
                nowIndex = 1;
            } else if (currentDate == date2) {
                nowIndex = 2;
            } else if (currentDate == date3) {
                nowIndex = 3;
            }
            if (button.id == "dateLeftBtn") {
                if (nowIndex == 1) {
                    nowIndex = maxIndex;
                } else {
                    nowIndex = nowIndex - 1;
                }
            } else if (button.id == "dateRightBtn") {
                if (nowIndex == maxIndex) {
                    nowIndex = 1;
                } else {
                    nowIndex = nowIndex + 1;
                }
            }
            if (nowIndex == 1) {
                document.getElementById("dateImg").src = date1;
            } else if (nowIndex == 2) {
                document.getElementById("dateImg").src = date2;
            } else if (nowIndex == 3) {
                document.getElementById("dateImg").src = date3;
            }
        }

        function gotoZxyy() {
            var url = "http://www.xm-n-tax.gov.cn/banshuifuwu/index/bsyyindex.html";
            window.open(url);
        }

        function goto12366() {
            var url = "http://12366ww.xm-n-tax.gov.cn:8091/xmgsww/WslyBLH_index.do?bz=2";
            window.open(url);
        }

        function gotoMail() {
            var url = "/bsfw/mail/nsrLogin.do";
            window.open(url);
        }

        function gotoWssb() {
            var url = "http://wssb.xm-n-tax.gov.cn:7001/wssb/wssb/public/jsp/wssb.jsp";
            window.open(url);
        }

        function gotoWsspcx() {
            var url = "http://www.xm-n-tax.gov.cn/nsfw/wshshpjg/shshwshchx/";
            window.open(url);
        }

        function yMchangedFunc($dp) {
            var c = $dp.cal;
            var year = c.newdate['y'];
            var month = c.newdate['M'];
            document.getElementById("calYear").innerText = year;
            document.getElementById("calMonth").innerText = month;
        }

        window.onload = function () {
            //setTimeout(initBsrl, 100);
            //setTimeout(setBsyyFrame, 100);
        }

        function initBsrl() {
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            document.getElementById("calYear").innerHTML = year;
            document.getElementById("calMonth").innerHTML = month;
            WdatePicker({
                eCont: 'mycalendar',
                skin: 'myskin',
                highLineWeekDay: false,
                qsEnabled: false,
                startDate: '',
                specialDates: [''],
                ychanged: yMchangedFunc,
                Mchanged: yMchangedFunc
            });
        }

        function setBsyyFrame() {
            $('#bstrll').attr('src', 'http://222.76.203.36:7001/bstgl/jsp/xmntax/reserve/reserveSummary.jsp');
        }

        function alertTipMessage() {
            if ("10113502010000054370" == "00000000000000000") {
                alert("检测到您可能使用的是旧税号登录，只能进行历史数据查询，如需办理涉税业务，请使用三证合一后税号登录！");
            }
        }

        function openPwdNotice() {
            var width = $(window).width();
            if (width > 1100) {
                width = 1100;
            }
            var height = $(window).height();
            width = width - 100;
            height = height - 100;
            /*
            var src = "/views/nsryhgl/notice.jsp";
            window.showModalDialog (src,"","location:No;status:No;help:No;dialogWidth:"+width+";dialogHeight:"+height+";scroll:yes;"); 
            */
        }

        function loadWssp() {
            $("#wssp_btn_tr").hide();
            $.ajax({
                url: "/bsfw/home/loadWssp.do",
                type: "post",
                data: { "nsrsbh": "91350200MA2Y10EC4K" },
                dataType: "json",
                success: function (result) {
                    var wsspxxList = result.wsspxxList;
                    var appendContent = "<tr>";
                    for (var i = 0; i < wsspxxList.length; i++) {
                        if (i > 0) {
                            appendContent += "</tr>";
                        }
                        appendContent += "<td>" + wsspxxList[i].lcswsxmc + "</td><td>" + wsspxxList[i].slrq + "</td><td>" + wsspxxList[i].lcztmc + "</td>";
                    }
                    $("#wssp_table").append(appendContent + "</tr>");
                }
            });
        }

        //旧账号提醒
        $(function () {
            //setTimeout(alertTipMessage, 1000);
            //setTimeout(loadNotification, 1000);
            var xttz = '';
            if (xttz != null && xttz != '') {
                roll($('.roll_ul'));
            } else {
                $("#xttz_li").remove();
            }
        });


        function roll(ul) {
            var li = ul.find('li').eq(0).html();
            ul.append('<li class="bsfwManagerImg">' + li + '</li>');
            var num = 0;
            setInterval(function () {
                num++;
                if (num == ul.find('li').length) {
                    num = 1;
                    ul.css({
                        marginTop: 0
                    });
                }
                $('.roll_ul').animate({
                    marginTop: -21 * num
                }, 400);
            }, 5000);
        }


    </script>

</head>

<div ms-controller="app" class='xf-controller'>
    <script>
        !function () {
            var vm = avalon.define({
                $id: "app",
                user: {

                }
            });
        }();

    </script>
    <div class="xf-container">
        <div xf-view=''>


            <!--一级栏目切换页-->
            <div class="bsfwContent" id="content1">
                <table cellpadding="0" cellspacing="0" style="display: none;">
                    <tr>
                        <td valign="top">
                            <div id="indexLeftMenu">
                                <div id="bsfwDate">
                                    <div id="bsfwDateBtn">
                                        <span id="calYear"></span>年<span id="calMonth"></span>月
                                    </div>
                                    <!--纳税申报日期切换-->

                                    <div id="mycalendar"></div>
                                </div>
                                <div id="bsfwDateTip">
                                    <ul>
                                        <!--
                     <li><span class="bsfwDateTipDot"><img src="/res/images/bsfwhall/bsfw_dot.jpg" /></span>本月增值税申报截止日是<span class="bsfwDateTipDay">16</span>日</li>
                     <li><span class="bsfwDateTipDot"><img src="/res/images/bsfwhall/bsfw_dot.jpg" /></span>本月增值税申报截止日是<span class="bsfwDateTipDay">16</span>日</li>
                   -->
                                    </ul>
                                </div>
                                <!--办税预约-->
                                <div class="bsyyTitle">
                                    <img src="/res/images/bsfwhall/bsfw_book.png" style="cursor: pointer;" onclick="gotoZxyy();" /></div>
                                <div class="bsyyContent">
                                    <table width="170" height="52" border="0" cellpadding="0" cellspacing="0" style="color: #000000;">
                                        <tr>
                                            <td>
                                                <iframe id="bstrll" src="#" width="200" height="74" frameborder="0" scrolling="no"></iframe>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="nszxTitle">
                                    <img src="/res/images/bsfwhall/bsfw_nszx.jpg" onclick="goto12366();" style="cursor: pointer;" />
                                </div>
                            </div>
                        </td>
                        <td valign="top">
                            <div id="indexRightContent" style="display: none;">
                                <div id="indexManagerMsg" style="overflow: hidden; height: 27px;" class="roll_div">
                                    <ul id="bsfwManagerMsg" class="roll_ul">
                                        <li class="bsfwManagerImg">
                                            <img src="/res/images/bsfwhall/bsfw_icon.png" />
                                            您的主管税务人员：原厦门市湖里区国家税务局江头税务分局->黄若翎（联系电话:5690850）
                                        </li>
                                        <li class="bsfwManagerImg" id="xttz_li">系统通知：<a href="http://www.xm-n-tax.gov.cn" target="_blank" style="text-decoration: none; color: #000">&nbsp;()</a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="indexDeclarationMsg">
                                    <div id="divdbsxTitle">
                                        待办事项
                                    </div>
                                    <a href="#" style="text-decoration: none;" onclick="gotoWssb()">
                                        <div class="divdbsxContent divdbsxContentImg">
                                            <div class="divdbsxIcon iconWsb">
                                            </div>
                                        </div>
                                        <div class="divdbsxContent">
                                            <div class="dbsxContentNum" style="color: red"></div>
                                            <div class="dbsxContentNum">未申报</div>
                                        </div>
                                    </a>
                                    <a href="#" style="text-decoration: none;" onclick="gotoMail()">
                                        <div class="divdbsxContent divdbsxContentImg">
                                            <div class="divdbsxIcon iconWdyj">
                                            </div>
                                        </div>
                                        <div class="divdbsxContent">
                                            <div class="dbsxContentNum" style="color: red"></div>
                                            <div class="dbsxContentNum">未读邮件</div>
                                        </div>
                                    </a>
                                    <a href="#" style="text-decoration: none;" onclick="gotoWsspcx()">
                                        <div class="divdbsxContent divdbsxContentImg">
                                            <div class="divdbsxIcon iconSp" style="height: 42px; width: 42px;">
                                            </div>
                                        </div>
                                        <div class="divdbsxContent">
                                            <div class="dbsxContentNum" style="color: red"></div>
                                            <div class="dbsxContentNum">未审批文书</div>
                                        </div>
                                    </a>
                                </div>
                                <!--纳税申报提示信息栏结束-->
                                <!---->
                                <div id="indexNews">
                                    <!--申报信息-->

                                    <div id="sbxxMsg" class="sbxxMsg">
                                        <ul class="msgTitle">
                                            <li class="msgTitleFirstLi msgTitleLiActive">申报信息
                                            </li>
                                            <li>
                                                <a href="#" class="msgA" onclick="gotoWssb()">更多</a><img src="/res/images/bsfwhall/bsfw_arrow_black.png" />
                                            </li>
                                        </ul>
                                        <ul>
                                            <!--列表第一行数据库字段-->
                                            <li>
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 12px; line-height: 30px;">
                                                    <tr>
                                                        <td width="65%">申报税种
                                                        </td>
                                                        <td width="20%"></td>
                                                        <td width="15%">状态
                                                        </td>
                                                    </tr>


                                                </table>
                                            </li>
                                        </ul>
                                    </div>
                                    <!--审批结果-->
                                    <div id="spjgMsg">
                                        <ul class="msgTitle">
                                            <li class="msgTitleFirstLi msgTitleLiActive">审批结果
                                            </li>
                                        </ul>

                                        <ul>
                                            <!--列表第一行数据库字段-->
                                            <li>
                                                <table id="wssp_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 12px; line-height: 30px;">
                                                    <tr>
                                                        <td width="70%">文书名称
                                                        </td>
                                                        <td width="15%">申请日期
                                                        </td>
                                                        <td width="15%">状态
                                                        </td>
                                                    </tr>
                                                    <tr id="wssp_btn_tr">
                                                        <td style="color: #1693f0;">
                                                            <input type="button" class="sbBtn" value="点击查看" onclick="loadWssp();" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </li>
                                        </ul>
                                    </div>
                                    <!--通知公告-->
                                    <div id="tzMsg" class="sbxxMsg">
                                        <ul class="msgTitle">
                                            <li class="msgTitleFirstLi msgTitleLiActive" id="tzMenu1">
                                                <a onclick="changeTzTab(1,2,this)" style="color: #1693f0;" href="javascript:void(0);">通知</a>
                                            </li>
                                            <li class="msgTitleFirstLi" id="tzMenu2">
                                                <a onclick="changeTzTab(2,2,this)" style="color: #1693f0;" href="javascript:void(0);">公告</a>
                                            </li>
                                            <li>
                                                <a id="TzGgGd" target="_blank" href="" class="msgA" style="margin-left: 290px;">更多</a><img src="/res/images/bsfwhall/bsfw_arrow_black.png" />
                                            </li>
                                        </ul>

                                        <!--通知切换页-->
                                        <ul>
                                            <li id="TzPage1">

                                                <table id="tab" cellpadding="0" cellspacing="0" width="100%" style="font-size: 12px; line-height: 30px;">
                                                    <tr>
                                                        <td width="85%">标题
                                                        </td>
                                                        <td width="15%">发布时间
                                                        </td>
                                                    </tr>


                                                </table>
                                            </li>
                                        </ul>
                                        <!--公告切换页-->
                                        <ul>
                                            <li id="TzPage2" style="display: none;">
                                                <table id="tabgg" cellpadding="0" cellspacing="0" width="100%" style="font-size: 12px; line-height: 30px;">
                                                    <tr>
                                                        <td width="85%">标题
                                                        </td>
                                                        <td width="15%">发布时间
                                                        </td>
                                                    </tr>


                                                </table>


                                            </li>
                                        </ul>
                                    </div>
                                    <!--未读邮件-->
                                    <div id="wdyjMsg">
                                        <ul class="msgTitle">
                                            <li class="msgTitleFirstLi msgTitleLiActive">未读邮件
                                            </li>
                                            <li>
                                                <a href="#" class="msgA" onclick="gotoMail()">更多</a><img src="/res/images/bsfwhall/bsfw_arrow_black.png" />
                                            </li>
                                        </ul>

                                        <ul>
                                            <li>
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 12px; line-height: 30px;">
                                                    <tr>
                                                        <td width="85%">邮件主题
                                                        </td>
                                                        <td width="15%">发送时间
                                                        </td>
                                                    </tr>

                                                </table>
                                            </li>
                                        </ul>
                                    </div>
                                    <!--未读邮件结束-->
                                </div>
                                <!--消息提醒内容页结束-->

                            </div>
                            <!--办税服务厅首页右列表结束-->
                        </td>
                    </tr>
                </table>
            </div>
            <!--办税服务首页结束-->




            <!--底部-->
            <footer>
<div class="bsfwButtomLine" style="display:none;">
  <div class="bsfwdt_buttom">
    <div class="bsfwdt_buttom_left">
	    <a href="http://bszs.conac.cn/sitename?method=show&id=05DD00D1E6683B6EE053012819AC8D03" target="_blank" style="cursor: pointer;">
		    <img src="/res/images/bsfwhall/red.png" border="0"/>
	    </a>
    </div>
    <div class="bsfw_address">
    <div><span>版权所有：厦门市国家税务局</span><span style="padding-left:15px;">备案序列号：闽ICP备07054928</span></div>
    <div><span>地址：厦门市思明区鹭江道318号鹭滨大厦</span><span style="padding-left:15px;">邮编：361000</span></div>
    </div>
  </div>
  <div class="bsfwdt_buttom_right">
      <ul class="xmgsCode">
        <li><div><img src="/res/images/bsfwhall/weixin_dy.jpg" /></div><div class="buttomPic">微信订阅号</div></li>
        <li><div><img src="/res/images/bsfwhall/weixin_fw.jpg" /></div><div class="buttomPic">微信服务号</div></li>
        <li><div><img src="/res/images/bsfwhall/weibo.jpg" /></div><div class="buttomPic">新浪微博</div></li>
      </ul>
  </div>
</div>
</footer>






        </div>
    </div>
</div>
<!-- app -->


</html>
