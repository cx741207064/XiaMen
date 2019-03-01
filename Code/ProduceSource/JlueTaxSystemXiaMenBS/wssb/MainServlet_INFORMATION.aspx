<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MainServlet_INFORMATION.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.wssb.MainServlet_INFORMATION" %>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gbk">
    <title>纳税人信息</title>
    <link rel="stylesheet" href="/wssb/wssb/public/style/link.css" type="text/css">
    <script language="javascript" src="/wssb/wssb/public/js/jquery-1.7.2.min.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/commonNew.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/text.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/lhgdialog.min.js"></script>
    <script type="text/javascript" src="/js/initinfo.js"></script>

    <style type="text/css">
        #tstitle {
            background: #5dace0;
            height: 30px;
            border: 1px solid #7e94d2;
            text-align: left;
        }
    </style>
</head>
<script type="text/javascript">
    /*
           根据业务部门《关于调整小规模纳税人增值税申报需求的报告（20180502）.docx》文档需求：
           纳税人登陆网上申报界面时，对纳税人进行提示“尊敬的纳税人：由于系统问题，请小规模纳税人在网报成功后，携带税控设备到主管税务机关柜台进行解锁。
           若系统问题解决，将另行通知。不便之处，敬请谅解！”
            明芳要求以弹窗的形式展示，并且纳税人为小规模纳税人
    add by zwx20180502
    */
    var yqwrdnsr = 'N';
    var yxZzsXgmnsrSzxx = 'N';
    function showPagetips() {
        if ("Y" == yqwrdnsr) {
            showWxtxTips1();
        } else {
            if ("Y" == yxZzsXgmnsrSzxx) {
                //showWxtxTips2();
            }
        }
    }

    function showWxtxTips1() {

        divid = $.dialog({
            lock: true,
            title: false,
            esc: false,
            cancel: false,
            id: 'tipsWxtxForWrdYbnsr',
            content: "<div id=\"tstitle\" style=\" text-align: center;\"><span style=\"font-size: 16pt; font-family: 仿宋_GB2312; font-weight:bold;\"><font color=\"white\">温馨提示</font></span></b></div>" +
            "<div style=\" border-radius: 5px; border: 1px solid #eee; background: #fff; repeat; margin: 0px; \">" +
            "<table width=\"100%\" align=\"center\"><tr align=\"center\">" +
            "<td colspan=\"2\"> <br /><br />" +
            "<div align=\"left\">" +
            "<p><span style=\"font-size: 13pt; font-family: 仿宋_GB2312;font-color: red;\">&nbsp;&nbsp;&nbsp;&nbsp;<font color=\"red\">您逾期仍未办理一般纳税人登记，应按销售额依照增值税税率计算应纳税额，不得抵扣进项税额，也不得使用增值税专用发票。因此，您增值税申报应使用一般纳税人申报表！</font><br /></span>" +
            "<p >&nbsp;</p></div>" +
            " </td>" +
            "</tr> <tr><td align=\"center\">" +
            "<input style=\"width: 160px;\" type=\"button\" value=\"确定\" onclick=\"javascript:closeWxtxTips1Div();\" class=\"cnmBtn\"/>	</td></tr>  </table></td> </tr></table></div>",
            width: '640px',
            height: '170px'
        });
    }

    function showWxtxTips2() {

        divid1 = $.dialog({
            lock: true,
            title: false,
            esc: false,
            cancel: false,
            id: 'tipsWxtxForXgmnsr',
            content: "<div id=\"tstitle\" style=\" text-align: center;\"><span style=\"font-size: 16pt; font-family: 仿宋_GB2312; font-weight:bold;\"><font color=\"white\">温馨提示</font></span></b></div>" +
            "<div style=\" border-radius: 5px; border: 1px solid #eee; background: #fff; repeat; margin: 0px; \">" +
            "<table width=\"100%\" align=\"center\"><tr align=\"center\">" +
            "<td colspan=\"2\"> <br /><br />" +
            "<div align=\"left\">" +
            "<p><span style=\"font-size: 13pt; font-family: 仿宋_GB2312;font-color: red;\">&nbsp;&nbsp;&nbsp;&nbsp;<font color=\"red\">尊敬的纳税人：由于系统问题，请小规模纳税人在网报成功后，携带税控设备到主管税务机关柜台进行解锁。若系统问题解决，将另行通知。不便之处，敬请谅解！</font><br /></span>" +
            "<p >&nbsp;</p></div>" +
            " </td>" +
            "</tr> <tr><td align=\"center\">" +
            "<input style=\"width: 160px;\" type=\"button\" value=\"确定\" onclick=\"javascript:closeWxtxTips1Div1();\" class=\"cnmBtn\"/>	</td></tr>  </table></td> </tr></table></div>",
            width: '640px',
            height: '170px'
        });
    }

    function closeWxtxTips1Div() {
        divid.close();
        if ("Y" == yxZzsXgmnsrSzxx) {
            //showWxtxTips2();
        }
    }

    function closeWxtxTips1Div1() {
        divid1.close();
    }
</script>
<body topmargin="0" leftmargin="0" onload="showPagetips();">

    <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <!--菜单列-->
            <!--<td width="161" height="100%"><--%@ include file="/wssb/public/jsp/menu.jsp" --%>
    </td>-->

            <!--内容列-->
            <td valign="top" align="center">
                <br>
                <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                    <tr>
                        <td colspan="2">
                            <img height="1" src="/wssb/wssb/public/images/spacer.gif" width="100%"></td>
                    </tr>
                    <tr>
                        <td width="5">&nbsp;&nbsp;</td>
                        <td align="center">
                            <table height="5" cellspacing="0" cellpadding="0" width="380" border="0">
                                <tbody>
                                    <tr>
                                        <td height="5">
                                            <img height="1" src="/wssb/wssb/public/images/spacer.gif" width="1"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table height="17" cellspacing="0" cellpadding="0" width="600" border="0">
                                <tbody>
                                    <tr>
                                        <td width="400" class="title">
                                            <p style="width: 120px; background: url(/wssb/wssb/layout/images/icon1.png) center left no-repeat">纳税人信息</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table height="17" cellspacing="0" cellpadding="0" width="600" border="0">
                                <tbody>
                                    <tr>
                                        <td align="center">

                                            <table height="200" cellspacing="0" cellpadding="10px" width="100%" border="0" style="background-color: #FFFFFF;">
                                                <tbody>
                                                    <tr>
                                                        <td rowspan="2">
                                                            <table cellspacing="0" cellpadding="3" border="0px" width="100%" bordercolor='#ffffff' bordercolordark='#ffffff' bordercolorlight="#cccccc" style="line-height: 20px;">
                                                                <tr>
                                                                    <td width="100">纳税人识别号：</td>
                                                                    <td colspan="5"><span id="NSRSBH"></span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>纳税人名 &nbsp;称：</td>
                                                                    <td colspan="5"><span id="NSRMC"></span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>法 人 代 &nbsp;表：</td>
                                                                    <td colspan="5"><span id="FDDB"></span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>主管税务机关：</td>
                                                                    <td colspan="5"><span id="ZGDSSWJFJMC"></span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>登记注册类型：</td>
                                                                    <td colspan="5"><span id="DJZCLX"></span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>地　　　　址：</td>
                                                                    <td colspan="5"><span id="SCJYDZ"></span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>电　　　　话：</td>
                                                                    <td colspan="5"><span id="LXDH"></span></td>
                                                                </tr>

                                                                <tr>
                                                                    <td>税务服务热线：</td>
                                                                    <td colspan="5">12366</td>
                                                                </tr>
                                                            </table>
                                                            <table cellspacing="0" cellpadding="0" width="600" border="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
    <script language="javascript">
        //落实税总发[2015]35号业务需求 add by zhiweiHuang 20150324 start
        function alertNoticeMsg() {

        }
        //落实税总发[2015]35号业务需求 add by zhiweiHuang 20150324 end

        //初始化text.js文件
        $(function () { contentready(); });
    </script>
</body>
</html>

