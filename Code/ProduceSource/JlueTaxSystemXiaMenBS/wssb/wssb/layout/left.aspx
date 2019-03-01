<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="left.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.wssb.wssb.layout.left" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>网上申报</title>
    <link rel="stylesheet" type="text/css" href="/wssb/wssb/layout/css/css.css" />
    <script language="javascript" src="/wssb/wssb/public/js/jquery-1.7.2.min.js"></script>
    <script language="javascript" src="/wssb/wssb/layout/js/menu.js"></script>
    <script type="text/javascript">
        var nodeDatas = [{ "id": "0", "parentId": "", "name": "增值税", "state": "open", "children": [{ "id": "SBB_ZZS_YGZ_YBNSR_1", "parentId": "", "name": "《增值税申报表（一般纳税人适用）》", "state": "open", "children": [], "attributes": { "zssb_btn": "N", "group_issb": "N", "table_name": "SBB_ZZS_YGZ_YBNSR", "table_isfill": "N", "cgbz": "", "table_url": "MainServlet_SBB_ZZS_YGZ_YBNSR.aspx?TABLE_ACTION=initial&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831" }, "checked": false, "iconCls": "" }, { "id": "SBB_ZZS_YGZ_YBNSR_FB1_2", "parentId": "", "name": "《增值税纳税申报表》附列资料（一）", "state": "open", "children": [], "attributes": { "zssb_btn": "N", "group_issb": "N", "table_name": "SBB_ZZS_YGZ_YBNSR_FB1", "table_isfill": "N", "cgbz": "", "table_url": "MainServlet_SBB_ZZS_YGZ_YBNSR_FB1.aspx?TABLE_ACTION=initial&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831" }, "checked": false, "iconCls": "" }, { "id": "SBB_ZZS_YGZ_YBNSR_FB2_3", "parentId": "", "name": "《增值税纳税申报表》附列资料（二）", "state": "open", "children": [], "attributes": { "zssb_btn": "N", "group_issb": "N", "table_name": "SBB_ZZS_YGZ_YBNSR_FB2", "table_isfill": "N", "cgbz": "", "table_url": "MainServlet_SBB_ZZS_YGZ_YBNSR_FB2.aspx?TABLE_ACTION=initial&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831" }, "checked": false, "iconCls": "" }, { "id": "SBB_ZZS_YGZ_YBNSR_FB3_4", "parentId": "", "name": "《增值税纳税申报表》附列资料（三）", "state": "open", "children": [], "attributes": { "zssb_btn": "N", "group_issb": "N", "table_name": "SBB_ZZS_YGZ_YBNSR_FB3", "table_isfill": "N", "cgbz": "", "table_url": "MainServlet_SBB_ZZS_YGZ_YBNSR_FB3.aspx?TABLE_ACTION=initial&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831" }, "checked": false, "iconCls": "" }, { "id": "SBB_ZZS_YGZ_YBNSR_FB4_5", "parentId": "", "name": "《增值税纳税申报表》附列资料（四）", "state": "open", "children": [], "attributes": { "zssb_btn": "N", "group_issb": "N", "table_name": "SBB_ZZS_YGZ_YBNSR_FB4", "table_isfill": "N", "cgbz": "", "table_url": "MainServlet_SBB_ZZS_YGZ_YBNSR_FB4.aspx?TABLE_ACTION=initial&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831" }, "checked": false, "iconCls": "" }, { "id": "SBB_ZZS_YGZ_YBNSR_FLZL5_6", "parentId": "", "name": "《增值税纳税申报表》附列资料（五）", "state": "open", "children": [], "attributes": { "zssb_btn": "N", "group_issb": "N", "table_name": "SBB_ZZS_YGZ_YBNSR_FLZL5", "table_isfill": "N", "cgbz": "", "table_url": "MainServlet_SBB_ZZS_YGZ_YBNSR_FLZL5.aspx?TABLE_ACTION=initial&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831" }, "checked": false, "iconCls": "" }, { "id": "SBB_ZZS_YGZ_YBNSR_JMSSBMXB_7", "parentId": "", "name": "《增值税减免税申报明细表》", "state": "open", "children": [], "attributes": { "zssb_btn": "N", "group_issb": "N", "table_name": "SBB_ZZS_YGZ_YBNSR_JMSSBMXB", "table_isfill": "N", "cgbz": "", "table_url": "MainServlet_SBB_ZZS_YGZ_YBNSR_JMSSBMXB.aspx?TABLE_ACTION=initial&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831" }, "checked": false, "iconCls": "" }, { "id": "ZSSB_SBB_ZZS_YGZ_YBNSR_15", "parentId": "", "name": "正式申报", "state": "open", "children": [], "attributes": { "zssb_btn": "Y", "group_issb": "N", "fwsk": true, "table_isfill": "N", "cgbz": "", "table_url": "MainServlet.ashx?TABLE_ACTION=submit&NSRSBH=91350200MA2Y10EC4K&SSSQ_Q=20180801&SSSQ_Z=20180831" }, "checked": false, "iconCls": "" }], "attributes": {}, "checked": false, "iconCls": "" }];
        var path = "/wssb";

        var nodeDatas = [<%=return_json%>]

        $(function () {
            //屏蔽backspace键
            if (typeof window.event != 'undefined') {
                document.onkeydown = function () {
                    if (event.keyCode == 8) {
                        event.returnValue = false;
                    }
                }
            } else {
                document.onkeypress = function (e) {
                    if (e.keyCode == 8) {
                        e.preventDefault();
                    }
                }
            }

        });
    </script>
</head>
<body>
    <div id="nav">
    </div>
    <input type="hidden" id="click_input_id" value=""></input>
</body>
</html>
