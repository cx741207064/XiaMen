﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MainServlet_SBB_ZZS_YGZ_YBNSR_FB2.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.wssb.MainServlet_SBB_ZZS_YGZ_YBNSR_FB2" %>


<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gbk">
    <!-- xuyb 删除自动刷新

<META content="600;" http-equiv=Refresh content='1'>
-->
    <title>《增值税纳税申报表》附列资料（二）</title>
    <script language="javascript" src="/wssb/wssb/public/js/jquery-1.7.2.min.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/pub.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/commonNew.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/text.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/wssbCommon.js"></script>
    <link rel="stylesheet" href="/wssb/wssb/public/style/link.css" type="text/css">
    <script language="javascript" src="/wssb/wssb/zzsybnsr_ygz/SBB_ZZS_YGZ_YBNSR_FB2.js?t=20180523"></script>
    <script type="text/javascript" src="/js/initinfo.js"></script>

    <script src="public_zzs.js" type="text/javascript" ></script>
    <script type="text/javascript">
        var result = [<%=return_json %>]
        var TABLE_ACTION = "<%=TABLE_ACTION %>";

        $(function () {
            showTableData(result)
            showTableActionDisplay()
            showDate()
        })
    </script>

    <script type="text/javascript">
        $(function () {

            //当第2行或者第35行数值有变化时，给出相应提示 add by zhiweiHunag 20161201
            var isTC1 = "0";
            var isTC2 = "0";
            if (isTC1 == "1" && isTC2 == "1") {
                alert("该表的第2栏和第35栏的数据有变动，请重新保存该表!");
            }
            else if (isTC1 == "1") {
                alert("该表的第35栏的数据有变动，请重新保存该表!");
            }
            else if (isTC2 == "1") {
                alert("该表的第2栏的数据有变动，请重新保存该表!");
            }
        });
    </script>

    <body marginwidth="0.00" marginheight="0.00" topmargin="0.00" leftmargin="0" onload="onloadValue();">
        <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <!--菜单列-->
                <!--<td width="161" height="100%">
    
    </td>-->
                <!--内容列-->
                <td valign="align" align="center" height="100%">
                    <br>
                    <br>
                    <br>

                    <table width="820" align="center">
                        <tr>
                            <td>
                                <table width="100%" border="0" align="center">
                                    <tr>
                                        <td align="center">
                                            <strong>
                                                <font size="3">《增值税纳税申报表》附列资料（二）</font>
                                                <font size="2">（本期进项税额明细）</font>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center"></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <br>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>

                                            <script language="javascript" src="/wssb/wssb/public/js/configstyle.js"></script>


                                            <table width="100%" border="0" align="center">
                                                <tr>
                                                    <td width="40%">纳税人识别号：<span id="NSRSBH"></span></td>
                                                    <td colspan="2">纳税人名称：<span id="NSRMC"></span></td>
                                                </tr>
                                                <tr>
                                                    <td width="40%">所属时期：<span id="SSRQQ">20180801</span> 至 <span id="SSRQZ">20180831</span></td>
                                                    <td width="30%">填表日期：<span id="TBRQ"></span></td>
                                                    <td align="right">金额单位：元(列至角分)</td>
                                                </tr>
                                            </table>
                                            <!--表头部分-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <form name="xform" method="POST">
                            <tr>
                                <td>
                                    <table id="inputTable" lens="1" border="1" cellspacing="0" cellpadding="0" class="SBB" bordercolor='#C4C6C4' bordercolordark='#ffffff' bordercolorlight="#999999">
                                        <input type="hidden" name="TABLE_NAME" value="SBB_ZZS_YGZ_YBNSR_FB2">
                                        <input type="hidden" name="TABLE_ACTION" value="initial">
                                        <input type="hidden" name="NSRSBH" value="91350200MA2Y10EC4K">
                                        <input type="hidden" value="0" name="ISWSSB">
                                        <!--该纳税人当期是否进行过申报-->
                                        <input type="hidden" value="20180801" name="SSSQ_Q">
                                        <input type="hidden" value="20180831" name="SSSQ_Z">
                                        <input type="hidden" value="0" name="fdqFlag" id="fdqFlag">
                                        <input type="hidden" value="0" name="NcpFlag" id="NcpFlag">
                                        <tr class="HEAD" height="20">
                                            <td align="middle" colspan="5">
                                                <b>一、申报抵扣的进项税额</b>
                                            </td>
                                        </tr>
                                        <tr class="HEAD" height="20">
                                            <td width="52%">
                                                <div align="center">项目</div>
                                            </td>
                                            <td width="6%">
                                                <div align="center">栏次</div>
                                            </td>
                                            <td width="14%">
                                                <div align="center">份数</div>
                                            </td>
                                            <td width="14%">
                                                <div align="center">金额</div>
                                            </td>
                                            <td width="14%">
                                                <div align="center">税额</div>
                                            </td>
                                        </tr>
                                        <tbody>
                                            <tr>
                                                <td class="td_idx" width="52%">（一）认证相符的增值税专用发票</td>
                                                <td class="td_idx">1=2+3</td>
                                                <td>
                                                    <input type="text" class="input_integer_readonly" readonly="readonly" id="SBDK_FS_1" name="SBDK_FS_1" value="0" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="SBDK_JE_1" name="SBDK_JE_1" value="0.00" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="SBDK_SE_1" name="SBDK_SE_1" value="0.00" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;其中：本期认证相符且本期申报抵扣</td>
                                                <td class="td_idx">2</td>
                                                <td>
                                                    <input type="text" class="input_integer_readonly" readonly="readonly" id="SBDK_FS_2" name="SBDK_FS_2" value="0" onchange="changeValue(this,'SBDK_FS_2');" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="SBDK_JE_2" name="SBDK_JE_2" value=".00" onchange="changeValue(this,'SBDK_JE_2');" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="SBDK_SE_2" name="SBDK_SE_2" value=".00" onchange="changeValue(this,'SBDK_SE_2');" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前期认证相符且本期申报抵扣</td>
                                                <td class="td_idx">3</td>
                                                <td>
                                                    <input type="text" class="input_integer_readonly" id="SBDK_FS_3" name="SBDK_FS_3" value="0" onchange="changeValue(this,'SBDK_FS_3');" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" id="SBDK_JE_3" name="SBDK_JE_3" value="0.00" onchange="changeValue(this,'SBDK_JE_3');" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" id="SBDK_SE_3" name="SBDK_SE_3" value="0.00" onchange="changeValue(this,'SBDK_SE_3');" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">（二）其他扣税凭证</td>
                                                <td class="td_idx">4=5+6+7+8a+8b</td>
                                                <td>
                                                    <input type="text" class="input_integer_readonly" readonly="readonly" id="SBDK_FS_4" name="SBDK_FS_4" value="0" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="SBDK_JE_4" name="SBDK_JE_4" value="0.00" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="SBDK_SE_4" name="SBDK_SE_4" value="0.00" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;其中：海关进口增值税专用缴款书</td>
                                                <td class="td_idx">5</td>
                                                <td>
                                                    <input type="text" class="integer" id="SBDK_FS_5" name="SBDK_FS_5" value="0" onchange="changeValue(this,'SBDK_FS_5')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_JE_5" name="SBDK_JE_5" value="0.00"
                                                        onchange="changeValue(this,'SBDK_JE_5')" />
                                                </td>
                                                <td>
                                                    <!-- xuyb 厦门需求 可以修改 且五自动计算。因为海关税率为17％ 13％ 15％ -->
                                                    <input type="text" class="money" id="SBDK_SE_5" name="SBDK_SE_5" value="0.00" onchange="changeValue(this,'SBDK_SE_5')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;农产品收购发票或者销售发票</td>
                                                <td class="td_idx">6</td>
                                                <td>
                                                    <input type="text" class="integer" id="SBDK_FS_6" name="SBDK_FS_6" value="0" onchange="changeValue(this,'SBDK_FS_6')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_JE_6" name="SBDK_JE_6" value="0.00"
                                                        onchange="changeValue(this,'SBDK_JE_6')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_SE_6" name="SBDK_SE_6" value="0.00" onchange="changeValue(this,'SBDK_SE_6')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;代扣代缴税收缴款凭证</td>
                                                <td class="td_idx">7</td>
                                                <td>
                                                    <input type="text" class="integer" id="SBDK_FS_7" name="SBDK_FS_7" value="0" onchange="changeValue(this,'SBDK_FS_7')" />
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                    <input type="hidden" class="money" id="SBDK_JE_7" name="SBDK_JE_7" value="0.00"
                                                        onchange="changeValue(this,'SBDK_JE_7')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_SE_7" name="SBDK_SE_7" value="0.00" onchange="changeValue(this,'SBDK_SE_7')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加计扣除农产品进项税额</td>
                                                <td class="td_idx">8a</td>
                                                <td>
                                                    <div align="center">------</div>
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_SE_37" name="SBDK_SE_37" value="0.00" onchange="changeValue(this,'SBDK_SE_37')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</td>
                                                <td class="td_idx">8b</td>
                                                <td>
                                                    <input type="text" class="integer" id="SBDK_FS_8" name="SBDK_FS_8" value="0" onchange="changeValue(this,'SBDK_FS_8')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_JE_8" name="SBDK_JE_8" value="0.00"
                                                        onchange="changeValue(this,'SBDK_JE_8')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_SE_8" name="SBDK_SE_8" value="0.00" onchange="changeValue(this,'SBDK_SE_8')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">（三）本期用于购建不动产的扣税凭证</td>
                                                <td class="td_idx">9</td>
                                                <td>
                                                    <input type="text" class="integer" id="SBDK_FS_9" name="SBDK_FS_9" value="0" onchange="changeValue(this,'SBDK_FS_9')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_JE_9" name="SBDK_JE_9" value="0.00"
                                                        onchange="changeValue(this,'SBDK_JE_9')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_SE_9" name="SBDK_SE_9" value="0.00" onchange="changeValue(this,'SBDK_SE_9')" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">（四）本期不动产允许抵扣进项税额</td>
                                                <td class="td_idx">10</td>
                                                <td>
                                                    <div align="center">------</div>
                                                    <input type="hidden" class="input_integer_readonly" id="SBDK_FS_10" name="SBDK_FS_10" value="0" />
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                    <input type="hidden" class="input_money_readonly" id="SBDK_JE_10" name="SBDK_JE_10" value="0.00"
                                                        onchange="changevalue_FB2_first('SBDK_JE_10');" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_SE_10" name="SBDK_SE_10" value="0.00" onchange="changeValue(this,'SBDK_SE_10')" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">（五）外贸企业进项税额抵扣证明</td>
                                                <td class="td_idx">11</td>
                                                <td>
                                                    <div align="center">------</div>
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="SBDK_SE_11" name="SBDK_SE_11" value="0" onchange="changeValue(this,'SBDK_SE_11')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">当期申报抵扣进项税额合计</td>
                                                <td class="td_idx">12=1+4-9+10+11</td>
                                                <td>
                                                    <input type="text" class="input_integer_readonly" readonly="readonly" id="SBDK_FS_12" name="SBDK_FS_12" value="0" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="SBDK_JE_12" name="SBDK_JE_12" value="0.00" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="SBDK_SE_12" name="SBDK_SE_12" value="0.00" />
                                                </td>
                                            </tr>
                                            <tr class="HEAD" height="20">
                                                <td align="middle" colspan="5">
                                                    <b>二、进项税额转出额</b>
                                                </td>
                                            </tr>
                                            <tr class="HEAD" height="20">
                                                <td width="52%">
                                                    <div align="center">项目</div>
                                                </td>
                                                <td width="6%">
                                                    <div align="center">栏次</div>
                                                </td>
                                                <td width="42%" colspan="3">
                                                    <div align="center">税额</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">本期进项税额转出额</td>
                                                <td class="td_idx">13=14至23之和</td>
                                                <td colspan="3">
                                                    <input type="text" class="input_money_readonly" id="JXZC_SE_13" name="JXZC_SE_13" value="0.00" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;其中：免税项目用</td>
                                                <td class="td_idx">14</td>
                                                <td colspan="3">
                                                    <input type="text" class="money" id="JXZC_SE_14" name="JXZC_SE_14" value="0.00" onchange="changeValue(this,'JXZC_SE_14')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;集体福利、个人消费</td>
                                                <td class="td_idx">15</td>
                                                <td colspan="3">
                                                    <input type="text" class="money" id="JXZC_SE_15" name="JXZC_SE_15" value="0.00" onchange="changeValue(this,'JXZC_SE_15')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;非正常损失</td>
                                                <td class="td_idx">16</td>
                                                <td colspan="3">
                                                    <input type="text" class="money" id="JXZC_SE_16" name="JXZC_SE_16" value="0.00" onchange="changeValue(this,'JXZC_SE_16')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简易计税方法征税项目用</td>
                                                <td class="td_idx">17</td>
                                                <td colspan="3">
                                                    <input type="text" class="money" id="JXZC_SE_17" name="JXZC_SE_17" value="0.00" onchange="changeValue(this,'JXZC_SE_17')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免抵退税办法不得抵扣的进项税额</td>
                                                <td class="td_idx">18</td>
                                                <td colspan="3">
                                                    <input type="text" class="money" id="JXZC_SE_18" name="JXZC_SE_18" value="0.00" onchange="changeValue(this,'JXZC_SE_18')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;纳税检查调减进项税额</td>
                                                <td class="td_idx">19</td>
                                                <td colspan="3">
                                                    <input type="text" class="money" id="JXZC_SE_19" name="JXZC_SE_19" value="0.00" onchange="changeValue(this,'JXZC_SE_19')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;红字专用发票通知单注明的进项税额</td>
                                                <td class="td_idx">20</td>
                                                <td colspan="3">
                                                    <input type="text" class="money" id="JXZC_SE_20" name="JXZC_SE_20" value=".00" onchange="changeValue(this,'JXZC_SE_20')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上期留抵税额抵减欠税</td>
                                                <td class="td_idx">21</td>
                                                <td colspan="3">
                                                    <input type="text" class="input_money_readonly" id="JXZC_SE_21" name="JXZC_SE_21" value="0.0" onchange="changeValue(this,'JXZC_SE_21')" readonly="readonly" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上期留抵税额退税</td>
                                                <td class="td_idx">22</td>
                                                <td colspan="3">
                                                    <input type="text" class="input_money_readonly" id="JXZC_SE_22" name="JXZC_SE_22" value="0.0" onchange="changeValue(this,'JXZC_SE_22')" readonly="readonly" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他应作进项税额转出的情形</td>
                                                <td class="td_idx">23</td>
                                                <td colspan="3">
                                                    <input type="text" class="money" id="JXZC_SE_23" name="JXZC_SE_23" value="0.00" onchange="changeValue(this,'JXZC_SE_23')" />
                                                </td>
                                            </tr>
                                            <tr class="HEAD" height="20">
                                                <td align="middle" colspan="5">
                                                    <b>三、待抵扣进项税额</b>
                                                </td>
                                            </tr>
                                            <tr class="HEAD" height="20">
                                                <td width="52%">
                                                    <div align="center">项目</div>
                                                </td>
                                                <td width="6%">
                                                    <div align="center">栏次</div>
                                                </td>
                                                <td width="14%">
                                                    <div align="center">份数</div>
                                                </td>
                                                <td width="14%">
                                                    <div align="center">金额</div>
                                                </td>
                                                <td width="14%">
                                                    <div align="center">税额</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">（一）认证相符的增值税专用发票</td>
                                                <td class="td_idx">24</td>
                                                <td>
                                                    <div align="center">------</div>
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;期初已认证相符但未申报抵扣</td>
                                                <td class="td_idx">25</td>
                                                <td>
                                                    <input type="text" class="input_integer_readonly" id="DDKJ_FS_25" name="DDKJ_FS_25" value="0" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" id="DDKJ_JE_25" name="DDKJ_JE_25" value="0" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" id="DDKJ_SE_25" name="DDKJ_SE_25" value="0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;本期认证相符且本期未申报抵扣</td>
                                                <td class="td_idx">26</td>
                                                <td>
                                                    <input type="text" class="integer" id="DDKJ_FS_26" name="DDKJ_FS_26" value="0" onchange="changeValue(this,'DDKJ_FS_26')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_JE_26" name="DDKJ_JE_26" value="0.00" onchange="changeValue(this,'DDKJ_JE_26')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_SE_26" name="DDKJ_SE_26" value="0.00" onchange="changeValue(this,'DDKJ_SE_26')" onchange="checkValue2(26)" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;期末已认证相符但未申报抵扣</td>
                                                <td class="td_idx">27</td>
                                                <td>
                                                    <input type="text" class="integer" id="DDKJ_FS_27" name="DDKJ_FS_27" value="0" onchange="changeValue(this,'DDKJ_FS_27')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_JE_27" name="DDKJ_JE_27" value="0.00" onchange="changeValue(this,'DDKJ_JE_27')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_SE_27" name="DDKJ_SE_27" value="0.00" onchange="changeValue(this,'DDKJ_SE_27')" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;其中：按照税法规定不允许抵扣</td>
                                                <td class="td_idx">28</td>
                                                <td>
                                                    <input type="text" class="integer" id="DDKJ_FS_28" name="DDKJ_FS_28" value="0" onchange="changeValue(this,'DDKJ_FS_28')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_JE_28" name="DDKJ_JE_28" value="0.00" onchange="changeValue(this,'DDKJ_JE_28')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_SE_28" name="DDKJ_SE_28" value="0.00" onchange="changeValue(this,'DDKJ_SE_28')" onchange="checkValue2(28)" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">（二）其他扣税凭证</td>
                                                <td class="td_idx">29=30至33之和</td>
                                                <td>
                                                    <input type="text" class="input_integer_readonly" readonly="readonly" id="DDKJ_FS_29" name="DDKJ_FS_29" value="0" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="DDKJ_JE_29" name="DDKJ_JE_29" value="0.00" />
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" readonly="readonly" id="DDKJ_SE_29" name="DDKJ_SE_29" value="0.00" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;其中：海关进口增值税专用缴款书</td>
                                                <td class="td_idx">30</td>
                                                <td>
                                                    <input type="text" class="integer" id="DDKJ_FS_30" name="DDKJ_FS_30" value="0" onchange="changeValue(this,'DDKJ_FS_30')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_JE_30" name="DDKJ_JE_30" value="0.00"
                                                        onchange="changeValue(this,'DDKJ_JE_30')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_SE_30" name="DDKJ_SE_30" value="0.00" onchange="changeValue(this,'DDKJ_SE_30')" onchange="checkValue2(30)" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;农产品收购发票或者销售发票</td>
                                                <td class="td_idx">31</td>
                                                <td>
                                                    <input type="text" class="integer" id="DDKJ_FS_31" name="DDKJ_FS_31" value="0" onchange="changeValue(this,'DDKJ_FS_31')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_JE_31" name="DDKJ_JE_31" value="0.00"
                                                        onchange="changeValue(this,'DDKJ_JE_31')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_SE_31" name="DDKJ_SE_31" value="0.00" onchange="changeValue(this,'DDKJ_SE_31')" onchange="checkValue2(31)" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;代扣代缴税收缴款凭证</td>
                                                <td class="td_idx">32</td>
                                                <td>
                                                    <input type="text" class="integer" id="DDKJ_FS_32" name="DDKJ_FS_32" value="0" onchange="changeValue(this,'DDKJ_FS_32')" />
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                    <input type="hidden" class="money" id="DDKJ_JE_32" name="DDKJ_JE_32" value="0.00"
                                                        onchange="changeValue(this,'DDKJ_JE_32')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_SE_32" name="DDKJ_SE_32" value="0.00" onchange="changeValue(this,'DDKJ_SE_32')" onchange="checkValue2(32)" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他</td>
                                                <td class="td_idx">33</td>
                                                <td>
                                                    <input type="text" class="integer" id="DDKJ_FS_33" name="DDKJ_FS_33" value="0" onchange="changeValue(this,'DDKJ_FS_33')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_JE_33" name="DDKJ_JE_33" value="0.00"
                                                        onchange="changeValue(this,'DDKJ_JE_33')" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="DDKJ_SE_33" name="DDKJ_SE_33" value="0.00" onchange="changeValue(this,'DDKJ_SE_33')" onchange="checkValue2(33)" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%"></td>
                                                <td class="td_idx">34</td>
                                                <td>
                                                    <div align="center">------</div>
                                                    <input type="hidden" class="input_money_readonly" id="DDKJ_FS_34" name="DDKJ_FS_34" value="0" onchange="changeValue(this,'DDKJ_FS_34')" />
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                    <input type="hidden" class="input_money_readonly" id="DDKJ_JE_34" name="DDKJ_JE_34" value="0.00" onchange="changeValue(this,'DDKJ_JE_34')" />
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                    <input type="hidden" class="input_money_readonly" id="DDKJ_SE_34" name="DDKJ_SE_34" value="0.00" onchange="changeValue(this,'DDKJ_SE_34')" />
                                                </td>
                                            </tr>

                                            <tr class="HEAD" height="20">
                                                <td align="middle" colspan="5"><b>四、其他</b>
                                                </td>
                                            </tr>
                                            <tr class="HEAD" height="20">
                                                <td width="52%">
                                                    <div align="center">项目</div>
                                                </td>
                                                <td width="6%">
                                                    <div align="center">栏次</div>
                                                </td>
                                                <td width="14%">
                                                    <div align="center">份数</div>
                                                </td>
                                                <td width="14%">
                                                    <div align="center">金额</div>
                                                </td>
                                                <td width="14%">
                                                    <div align="center">税额</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">本期认证相符的增值税专用发票</td>
                                                <td class="td_idx">35</td>
                                                <td>
                                                    <input type="text" class="integer" id="QT_FS_35" name="QT_FS_35" value="0" onchange="changeValue(this,'QT_FS_35');" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="QT_JE_35" name="QT_JE_35" value=".00" onchange="changeValue(this,'QT_JE_35');" />
                                                </td>
                                                <td>
                                                    <input type="text" class="money" id="QT_SE_35" name="QT_SE_35" value=".00" onchange="changeValue(this,'QT_SE_35');" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td_idx" width="52%">代扣代缴税额</td>
                                                <td class="td_idx">36</td>
                                                <td>
                                                    <div align="center">------</div>
                                                </td>
                                                <td>
                                                    <div align="center">------</div>
                                                </td>
                                                <td>
                                                    <input type="text" class="input_money_readonly" id="QT_SE_36" name="QT_SE_36" value="0.0" readonly="readonly" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <br>
                                    <div align="center">
                                        <!--修改在离开页面触发isSave,edit by zhonggc,20060531-->
                                        <!--body onbeforeunload="return isSave();" -->


                                        <body>
                                            <input type="hidden" name="isSave" value="yes">
                                            <!--用于控制退出时是否提示 no-提示 yes-不提示-->

                                            <script language="javascript">
                                                document.all("isSave").value = "no"; //设置退出提示
                                            </script>
                                            <a name="save" value="1" onclick="javascript:setSave();setDisable(this,true);if(!frminsert())setDisable(this,false);" style="cursor: pointer;" class="btnclass">保&nbsp;&nbsp;存
                                            </a>&nbsp;&nbsp;
                                            <a href="./MainServlet_INFORMATION.aspx?TABLE_ACTION=display&NSRSBH=91350200MA2Y10EC4K" class="btnclass">退&nbsp;&nbsp;出
                                            </a>
                                            &nbsp;

                                            <script language="javascript">

                                                function deletesbb() {
                                                    if (confirm("是否真的删除申报表？") == true) {
                                                        frmdelete();
                                                    }
                                                    else {
                                                        //如果不删除时则恢复退出提示
                                                        document.all("isSave").value = "no";
                                                    }
                                                }

                                                //在关闭页面前提示用户是否保存
                                                function isSave() {
                                                    var flag = document.all("isSave").value;
                                                    if (flag != "yes") {
                                                        return "请确定在离开页面之前先保存数据！";
                                                    }
                                                    return;
                                                }

                                                function setSave()  //设置退出不提示
                                                {
                                                    document.all("isSave").value = "yes";
                                                }

                                                function setDisable(but, b_true) {
                                                    but.disabled = b_true;
                                                }


                                                function doRollbackSbzt(pzxh) {

                                                    if (confirm("是否确认进行申报更正？")) {
                                                        $.ajax({
                                                            type: "POST",
                                                            async: false,
                                                            url: "/wssb/CommonDataServlet",
                                                            data: "type=4&pzxh=" + pzxh,
                                                            success: function (msg) {

                                                                //执行成功，跳转至主表的编辑页面						
                                                                if ($.trim(msg) == '1') {
                                                                    changeMenuState();
                                                                    location.href = "./null";
                                                                }
                                                                else {
                                                                    alert("执行申报更正出错!");
                                                                }
                                                            }
                                                        });
                                                    }
                                                }
                                                //【更正申报】更新左边的菜单
                                                function changeMenuState() {
                                                    var submitUrl = "null";
                                                    var yqsqq = "null";
                                                    var yqsqz = "null";
                                                    var nsrsbh = "91350200MA2Y10EC4K";
                                                    var leftFrameWin = parent.$("#leftFrame")[0].contentWindow;
                                                    var click_node_input_id = leftFrameWin.$("#click_input_id").val();//left菜单节点点击的菜单ID
                                                    var save_status = leftFrameWin.$("#" + click_node_input_id + "_SAVE_SPAN");
                                                    var table_url_input = leftFrameWin.$("#" + click_node_input_id);
                                                    var saveSpan = leftFrameWin.$("#" + click_node_input_id + "").closest("div.nav-tow");
                                                    var saveState = $(".savestate", saveSpan);
                                                    saveState.each(function (i) {
                                                        var table_url_submit = $(this).prev("input");
                                                        if ("Y" == $(this).attr("zssb")) {
                                                            $(this).html("");
                                                            table_url_submit.val(submitUrl);
                                                        }
                                                        //由于申报更正后并且未重新刷新页面时要给未保存的表重新赋url add by zwx20180815
                                                        if ($(this).attr("state") != "submit") {
                                                            var idStr = $(this).attr("id");
                                                            if (idStr.indexOf("_NB_") > -1 && idStr.indexOf("_NB_CX_") == -1) {
                                                                var tableStr = idStr.substring(0, idStr.indexOf("_NB_"));
                                                                var gzUrl = "MainServlet?TABLE_NAME=" + tableStr + "_NB&TABLE_ACTION=initial&NSRSBH=" + nsrsbh + "&SSSQ_Q=" + yqsqq + "&SSSQ_Z=" + yqsqz;
                                                                table_url_submit.val(gzUrl);
                                                            }
                                                        }
                                                        if ($(this).attr("state") == "submit" && $(this).attr("zssb") != "Y") {
                                                            $(this).html("(已保存)");
                                                            $(this).attr({ state: "save" });
                                                            table_url_submit.val(table_url_submit.val().replace("display", "edit"));
                                                        }
                                                    });
                                                }
                                                function zssbkk() {
                                                    var wssbpath = "../../..//wssb/null";
                                                    var isfwsk = $("#cnmce").val();
                                                    var wssbtableName = $("#wssbtableName").val();
                                                    //Y: 是, N:否
                                                    var nr = "";
                                                    var zckdiv = "";
                                                    if (wssbtableName.indexOf("CWXX2013") == -1 && wssbtableName.indexOf("CWXX2016") == -1) {
                                                        if (isfwsk == true) {
                                                            nr = "<p><input type=\"radio\" value=\"y\" checked=\"checked\" name=\"kk\" id=\"cnm1\" />" +
                                                                    "<b>“立即扣款”</b>：“清卡”正式申报时实时扣款。</p>" +
                                                               "<p><input type=\"radio\" value=\"n\" name=\"kk\" id=\"cnm2\"  onclick=\"opendia('" + wssbpath + "')\"/>" +
                                                               "<b>“暂不扣款”</b>：“清卡”正式申报时不扣款，需在正式申报成功后，操作“税费缴纳（网上申报）” 执行扣款。</p>" +
                                                               "<p><b>说明：税控纳税人柜台“清卡”正式申报，统一为“立即扣款”。</b></p>";
                                                        } else {
                                                            nr = "<p><input type=\"radio\" value=\"y\" checked=\"checked\" name=\"kk\" id=\"cnm1\" />" +
                                                            "<b>“立即扣款”</b>：正式申报并实时扣款。</p>" +
                                                               "<p><input type=\"radio\" value=\"n\" name=\"kk\" id=\"cnm2\"  onclick=\"opendia('" + wssbpath + "')\"/>" +
                                                               "<b>“暂不扣款”</b>：正式申报不扣款，需在正式申报成功后，操作“税费缴纳（网上申报）” 执行扣款。</p>";
                                                        }
                                                        ////财务报表不用执行扣款
                                                        zckdiv = parent.$.dialog({
                                                            lock: true,
                                                            id: 'tips1',
                                                            content: "<script>var kkval = $(\"#kkval\").val();if(kkval == \"y\"){$(\"input[name=kk]:eq(0)\").attr(\"checked\",\"checked\");" +
                                                             "}else if(kkval == \"n\"){$(\"input[name=kk]:eq(1)\").attr(\"checked\",\"checked\");}<\/script>" +
                                                                "<div id=\"ts\"><div style=\"width:450px; margin:auto; height:230px;text-align:center; border-radius: 5px;\">" +
                                                              "<div id=\"tstitle\"></div>  <div style=\" border: 1px solid #eee; border-top:none; background: #fff;  \">" +
                                                              " <h1>确认提交申报表？请选择扣款方式：</h1>" + nr + " <div id=\"btn\"><a href=\"javascript:kklc('" + wssbpath + "');\">确定</a>" +
                                                               "<a href=\"javascript:gbck();\">取消</a></div>  </div>  </div></div> ",
                                                            width: '450px',
                                                            height: '240px',
                                                            esc: false,
                                                            title: false,
                                                            cancel: false
                                                        });
                                                    } else {
                                                        if (confirm("请确认是否正式申报?")) {
                                                            parent.document.getElementById("workspace").src = wssbpath;
                                                            window.parent.showOverlay();
                                                        }
                                                    }
                                                }
                                            </script>
                                        </body>

                                        <!--需要数据：表对象名称tableName-->
                                    </div>
                                </td>
                            </tr>
                        </form>
                    </table>
                </td>
            </tr>
        </table>

        <div id="div_status" style="position: absolute; left: 45%; top: 80%; visibility: hidden; z-index: 2;">
            <table width="280" height="100" border="1" cellspacing="0" cellpadding="0" bgcolor="#CCFFCC">
                <tr>
                    <td align="center">正在处理中，请耐心等待。。。。！<br />
                        <br />
                        <font color="red" size="2"><strong>请不要重复刷新页面，以免出现重复申报或重复扣款！！！</strong></font>
                    </td>
                </tr>

            </table>
        </div>
        <!--提示框：点击“正式申报”，在成功提交前显示“正在处理中，请稍候！”-->
    </body>
</html>

