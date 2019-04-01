﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="QuestionMain.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.QuestionMain" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <title></title>
    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/H-ui.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
    <script type="text/javascript" src="js/database.js"></script>
    <script type="text/javascript" src="js/json2.js"></script>
    <script type="text/javascript" src="js/dump_src.js"></script>

    <link href="css/ksindex.css" rel="stylesheet" />
    <link href="css/QMstyle.css" rel="stylesheet" />

    <script src="/VideoManage/js/mask.js"></script>
    <link href="/VideoManage/css/QuestionMain.css" rel="stylesheet" />
    <style type="text/css">
        .fulltable {
            width: 100%;
            text-align: center;
        }

            .fulltable tr th {
                font-size: 18px;
                text-align: center;
            }

            .fulltable tr td {
                font-size: 16px;
            }

        .td1 {
            width: 10%;
            text-align: center;
        }

        .td2 {
            width: 15%;
            text-align: center;
        }

        .td3 {
            width: 35%;
            text-align: center;
        }


        .td5 {
            width: 20%;
            text-align: center;
        }

        .td6 {
            width: 20%;
            text-align: center;
        }

        .td5 a {
            margin: 0 5px;
        }

        .td6 a {
            margin: 0 5px;
        }

        .ksmc-dt {
            padding: 3px 10px;
        }

        .tk_title_area, .ksmc-tabc {
            min-width: 840px;
        }

        td span {
            text-align: center;
            width: 100%;
        }

        .oper_area span {
            float: right;
            margin-right: 20%;
        }
    </style>
    <script>

        var json;
        var userId = getQueryString("userid");
        var username = getQueryString("username");
        var ClassId = getQueryString("classid");
        var courseid = '<%=System.Web.Configuration.WebConfigurationManager.AppSettings["CourseId"]%>';
        var sortid = getQueryString("sortid");
        $(document).ready(function () {
            $.ajax({
                url: "/VideoManage/GetVideo.ashx?CourseId=" + courseid,
                type: "GET",
                dataType: "text",
                async: false,
                success: function (result) {
                    json = JSON.parse(JSON.parse(result).Data);
                    $.each(json, function (i, v) {
                        if (v.VideoID != null && v.VideoID != "") {
                            $("#videoa").show();
                        }
                        else {
                        }
                    });
                }
            })
        });
        var dfdsa = '<%=questionstr%>';
        var questionarrary = dfdsa.split(',');

        $(document).ready(function () {
            $.ajax({
                url: '<%=System.Web.Configuration.WebConfigurationManager.AppSettings["tikupath"]%>' + GetTaxList,
                type: "post",
                dataType: "jsonp",
                data: {
                    CourseId: courseid,
                    classid: ClassId,
                    userid: userId,
                    sortid: sortid
                },
                async: false,
                success: function (result) {
                    if (typeof (result.Data) == "string") {

                        var json = JSON.parse(result.Data);
                        $.each(json, function (i, v) {
                            var a = $.inArray(String(v.QuestionId), questionarrary);
                            var downpath = '<%=System.Web.Configuration.WebConfigurationManager.AppSettings["Practicepath"]%>';
                            var QuestionTypeName;
                            if (v.QuestionType == 2) {
                                QuestionTypeName = "申报类";
                            }
                            var Gtxpath = "tnsfwHome/index.aspx?userid=" + userId + "&username=" + username + "&classid=" + ClassId + "&courseid=" + courseid + "&sortid=" + sortid + "&questionId=" + v.QuestionId + "&userquestionId=" + v.Id + "&CompanyId=" + v.CompanyId + "&rand=" + new Date().getTime();
                            var Dtxpath = '<%=System.Web.Configuration.WebConfigurationManager.AppSettings["Dtxpath"]%>' + "/MainAction.php?sessionId=" + v.NSRSBH + ";timestamp&questionid=" + v.QuestionId + "&happenddate=" + v.HappenDate + "&userid=" + userId + "&classid=" + ClassId + "&CompanyId=" + v.CompanyId;
                            debugger;
                            var FPpath = "GotoFP.ashx?sessionId=" + v.NSRSBH + ";timestamp&questionId=" + v.QuestionId + "&happenDate=" + v.HappenDate + "&userId=" + userId + "&classId=" + ClassId + "&companyId=" + v.CompanyId + "&sortid=" + sortid;
                            debugger;
                            var str = '<li class="ksmc-sj5"><div class="ksmc-sj1-title">';
                            str += '<table class="fulltable">';
                            str += '<tbody>';
                            str += '<tr>';
                            str += '<td class="td1">' + v.Name + '</td>';
                            str += '<td class="td2">' + QuestionTypeName + '</td>';
                            str += '<td class="td3">' + v.Description + '</td>';
                            var Gtxvideopath = "Video/Video.aspx?Id=" + v.QuestionId + "&CourseId=" + v.CourseId + "&VideoID=" + v.VideoID + "&ClassId=" + ClassId + "&userId=" + userId + "&model=0";
                            var Dtxvideopath = "Video/Video.aspx?Id=" + v.QuestionId + "&CourseId=" + v.CourseId + "&VideoID=" + v.VideoID + "&ClassId=" + ClassId + "&userId=" + userId + "&model=1";
                            str += '<th class="td5"><a target="_blank" onclick="checkvideo(\'' + Gtxvideopath + '\',\'' + v.VideoID + '\',\'国\')" style="display:none">国税</a><a target="_blank" onclick="checkvideo(\'' + Dtxvideopath + '\',\'' + v.VideoID + '\',\'地\')" style="display:none">地税</a></th>';
                            str += '<th class="td6"><a onclick="togglearea(\'oper' + v.QuestionId + '\',this)">开始练习</a></th>';
                            str += '</tr>';
                            str += '</tbody>';
                            str += '</table>';
                            str += '</div>';
                            if (v.VideoID) {
                                str += '<div id="oper' + v.QuestionId + '" style="display: none" class="oper_area"><a class="radius box-shadow ksmc-sj1-tanchuti"  onclick="checkpath(\'' + downpath + '\',\'' + v.FilePath + '\')" target="_blank" style="display:none">下载材料</a><a class="radius box-shadow ksmc-sj1-tanchuti" href="' + Gtxpath + '" target="_blank" onclick="closeareaGTX(' + v.QuestionId + ');">纳税申报</a>';
                                if (a >= 0) {
                                    str += '<a class="radius box-shadow ksmc-sj1-tanchuti" href="' + FPpath + '" target="_blank" onclick="closeareaGTX(' + v.QuestionId + ');">发票勾选平台</a>';
                                }
                                str += '<a target="_blank" class="radius box-shadow ksmc-sj1-tanchuti" onclick="checkvideo(\'' + Gtxvideopath + '\',\'' + v.VideoID + '\',\'国\')" >国税视频</a><a class="radius box-shadow ksmc-sj1-tanchuti" target="_blank" onclick="checkvideo(\'' + Dtxvideopath + '\',\'' + v.VideoID + '\',\'地\')">地税视频</a></div>';
                            }
                            else {
                                str += '<div id="oper' + v.QuestionId + '" style="display: none" class="oper_area"><a class="radius box-shadow ksmc-sj1-tanchuti"  onclick="checkpath(\'' + downpath + '\',\'' + v.FilePath + '\')" target="_blank" style="display:none">下载材料</a><a class="radius box-shadow ksmc-sj1-tanchuti" href="' + Gtxpath + '" target="_blank" onclick="closeareaGTX(' + v.QuestionId + ');">纳税申报</a>';
                                if (a >= 0) {
                                    str += '<a class="radius box-shadow ksmc-sj1-tanchuti" href="' + FPpath + '" target="_blank" onclick="closeareaGTX(' + v.QuestionId + ');">发票勾选平台</a>';
                                }
                                str += '</div>';

                            }
                            str += '</li>'
                            $("#ulTax").append(str);
                        });
                    }
                    else {
                        $.ajax({
                            url: "ChuShiHua.ashx?Method=Clear&ClassId=" + ClassId + "&userId=" + userId + "&sortid=" + sortid + "&t=" + Math.random(),
                            type: "GET",
                            dataType: "text",
                            async: false,
                            success: function (result) {
                                debugger;
                                var na = JSON.parse(result);
                                if (na.IsSuccess) {
                                    location.reload();
                                }
                                else {

                                }
                            }
                        });
                    }
                }
            });
        });

        function checkvideo(path, videopath, name) {
            var v = videopath.split(",").length;
            if (name == '国') {
                if (videopath[0]) {
                    window.open(path);
                }
                else {
                    alert('暂无视频');
                }
            }
            else {
                if (v == 2 && videopath[1]) {
                    window.open(path);
                }
                else {
                    alert('暂无视频');
                }
            }
        }

        function checkpath(downpath, filepath) {
            if (filepath) {
                window.open(downpath + filepath);
            }
            else {
                alert('暂无材料');
            }
        }

        //获取国地税做题状态
        function togglearea(id, obj) {
            var show = $('#' + id).is(':hidden');
            if (show) {
                $('#' + id).slideDown('slow');
            }
            else {
                $('#' + id).slideUp('slow');
            }
        }

        //重做所有题目
        function DeleteAllTax() {
            $.ajax({
                url: "ChuShiHua.ashx?Method=Clear&ClassId=" + ClassId + "&userId=" + userId + "&SortId=" + sortid + "&t=" + Math.random(),
                type: "GET",
                dataType: "text",
                async: false,
                success: function (result) {
                    debugger
                    var na = JSON.parse(result);
                    if (na.IsSuccess) {
                        debugger;
                        alert("初始化成功");
                        location.reload();
                    }
                    else {
                        alert("初始化失败");
                    }
                }
            })
        }

        //关闭显示部分
        function closeareaGTX(Id) {
            $('#oper' + Id).slideUp('slow');
        }
        function closeareaDTX() {
            $('#oper' + Id).slideUp('slow');
        }

        function showRight(id) {
            showOverlay();
            $('#rights').html('<div class="close" style="position:static"><a href="javascript:void(0);" onclick="closerights()">关闭</a></div><iframe src="/VideoManage/VideoManage.aspx" width="100%" height="100%" frameborder="0"></iframe>');
            adjust("#rights");
            $('#rights').show();
        }
        function closerights() {
            $('#rights').hide();
            hideOverlay();
        }

    </script>
</head>
<body>
    <input type="hidden" id="inuse" value="" />

    <div id='overlay'></div>
    <div id='rights'>
        <div class="close" style="position: static">
            <a href="javascript:void(0);" onclick="closerights()">关闭</a>
        </div>
    </div>

    <div class="tiyan_area">
        <div class="tk_title_area">
            <div class="tk_title tk_title_active" id="h_bills" onclick="gotobill()">
                涉税业务
            </div>
        </div>
        <div class="ksmc-tabc" style="" id="bills">
            <div style="margin: 5px 65px 5px; padding: 5px; float: right;"><a id="a_ins" class="ksmc-dt radius box-shadow" target="_blank" style="margin-right: 10px;" href="/Instruction.html">使用说明</a><a id="videoa" class="ksmc-dt radius box-shadow" style="margin-right: 10px; display: none" href="#" onclick="showRight();return false;">税种视频</a><a class="ksmc-dt radius box-shadow" onclick="DeleteAllTax()">重做所有题目</a></div>
            <div style="clear: both"></div>
            <ul class="ksmc-zjlx" style="display: block" id="ulTax">
                <li>
                    <div class="ksmc-sj1-title">
                        <table class="fulltable">
                            <tbody>
                                <tr>
                                    <th class="td1">题目名称</th>
                                    <th class="td2">题目类型</th>
                                    <th class="td3">题目描述</th>
                                    <th class="td5"><span style="display: none">视频</span></th>
                                    <th class="td6">练习</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <%--<li class="ksmc-sj5">
                    <div class="ksmc-sj1-title">
                        <table class="fulltable">
                            <tbody>
                                <tr>
                                    <td class="td1">业务一</td>
                                    <td class="td2">申报类</td>
                                    <td class="td3">苏州超容电子客户有限公司3月份的增值税申报</td>
                                    <th class="td5"><a>国税</a><a>地税</a></th>
                                    <th class="td6"><a onclick="togglearea('oper1',this)">国税</a><a onclick="togglearea('oper1',this)">地税</a></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="oper1" style="display: none" class="oper_area"><a class="radius box-shadow ksmc-sj1-tanchuti">下载材料</a><a class="radius box-shadow ksmc-sj1-tanchuti" href="portal/index.aspx?userid=FFF7ECC98F6B40E396B6E330301B5D2C&username=测试人员&classid=9&courseid=3&sortid=5&questionId=158" target="_blank" onclick="closearea('1');">开始练习</a><span id="st1" class="ksmc-cssecond">未做</span></div>
                </li>--%>
            </ul>
        </div>
    </div>
    <input id="hidi" runat="server" type="hidden" />
    <input id="hids" runat="server" type="hidden" />
    <input id="hidt" runat="server" type="hidden" />
    <div id="clean" style="width: 1px; height: 1px; position: absolute; top: 1px; left: 1px; z-index: -1; background: none; overflow: hidden"></div>
    <a href="javascript:void(0)" class="Hui-iconfont toTop" title="返回顶部" alt="返回顶部" style="display: none"></a><a href="javascript:void(0)" class="Hui-iconfont toTop" title="返回顶部" alt="返回顶部" style="display: none"></a>
</body>
</html>
