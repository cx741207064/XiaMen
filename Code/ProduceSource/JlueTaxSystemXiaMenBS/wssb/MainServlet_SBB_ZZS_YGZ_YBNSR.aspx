﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MainServlet_SBB_ZZS_YGZ_YBNSR.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.wssb.MainServlet_SBB_ZZS_YGZ_YBNSR" %>


<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gbk">
    <title>《增值税申报表（一般纳税人适用）》</title>
    <script language="javascript" src="/wssb/wssb/public/js/jquery-1.7.2.min.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/pub.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/commonNew.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/text.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/wssbCommon.js"></script>
    <script language="javascript" src="/wssb/wssb/zzsybnsr_ygz/SBB_ZZS_YGZ_YBNSR.js?t=20180604"></script>
    <script type="text/javascript" src="/js/initinfo.js"></script>
    <link rel="stylesheet" href="/wssb/wssb/public/style/link.css" type="text/css">
    <script language="javascript">

        //  alert("特别提醒您：您企业核定为汇总企业，暂时不能进行网上申报，请您及时到大厅柜台申报，若是核定有误请联系专管员，具体网上申报日程请阅览厦门国税局通知，谢谢您的配合！");
        //
        //alert("特别提醒您： 如果您需要申报财务报表（附表五、六），请在征期内和主表一起申报，暂时不能单独网上申报财务报表，如果您征期内遗漏申报财务报表，请您及时到大厅柜台申报财务报表，详细通知请阅览厦门国税网站，谢谢您的配合！");

    </script>

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

</head>
<body marginwidth="0.00" marginheight="0.00" topmargin="0.00" leftmargin="0">
    <table id="inputTable" width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <!--菜单列-->
            <!--<td width="161" height="100%">
    
    </td>-->
            <!--内容列-->
            <td valign="top" align="center" height="100%">
                <br>
                <br>
                <br>

                <script language="javascript">
                    function uploadCheck() {
                        if (uploadform.LXSBB.value == "") {
                            alert("请选择要导入的文件！");
                            return false;
                        }
                        return true;
                    }
                </script>

                <br />

                <table width="900" align="center">
                    <tr>
                        <td>
                            <table width="100%" border="0" align="center">
                                <tr>
                                    <td align="center">
                                        <strong>
                                            <font size="3">《增值税申报表（一般纳税人适用）》</font>
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
                                                <td width="40%">所属时期：<span id="SSRQQ">20180801</span>至<span id="SSRQZ">20180831</span></td>
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
                                <table border="1" lens="1" cellspacing="0" cellpadding="0" class="SBB" bordercolor='#C4C6C4' bordercolordark='#ffffff' bordercolorlight="#999999">
                                    <input type="hidden" name="TABLE_NAME" value="SBB_ZZS_YGZ_YBNSR">
                                    <input type="hidden" name="TABLE_ACTION" value="display">
                                    <input type="hidden" name="NSRSBH" value="91350200MA2Y10EC4K">

                                    <input type="hidden" value="0" name="ISWSSB">
                                    <!--该纳税人当期是否进行过申报-->
                                    <input type="hidden" value="20180801" name="SSSQ_Q">
                                    <input type="hidden" value="20180831" name="SSSQ_Z">
                                    <!--2005-11-11 zhaohba add-->
                                    <input type="hidden" value="display" name="table_action">
                                    <input type="hidden" value="initial" name="ta">
                                    <input type="hidden" name="YBTSE" size="24" value="0.00">
                                    <!--2005-11-22 xuyb add 防伪税控数据-->
                                    <input type="hidden" name="FWSK_CBJE" size="24" value="0.00" />
                                    <input type="hidden" name="FWSK_CBSE" size="24" value="0.00" />
                                    <input type="hidden" name="FWSK_RZJE" size="24" value="0.00" />
                                    <input type="hidden" name="FWSK_RZSE" size="24" value="0.00" />
                                    <!--沈阳改动 20060428 begin-->
                                    <!--CTAIS系统带出的分次预缴税额-->
                                    <input type="hidden" id="ybbys" name="JCSJ_YBBYS_28" size="24" value="0.0" />
                                    <!--CTAIS系统带出的出口开具专用缴款书预缴税额-->
                                    <input type="hidden" id="Hidden1" name="JCSJ_YBBYS_29" size="24" value="0.00" />
                                    <!--沈阳改动 20060428 end -->
                                    <!-- 附表1中的值 用于第五栏值得校验  -->
                                    <input type="hidden" name="V051" size="24" value="0.0" />
                                    <input type="hidden" name="V053" size="24" value="0.0" />
                                    <input type="hidden" name="V182" size="24" value="0.0" />
                                    <input type="hidden" name="ygzxgzqy" size="24" value="false" />
                                    <input type="hidden" name="isChange" size="24" value="false" />

                                    <input type="hidden" name="isFdqQY" size="24" value="false" />

                                    <input type="hidden" class="money" name="vv0" size="24" value="<%=vv0 %>" id="vv0" />
                                    <input type="hidden" class="money" name="vv1" size="24" value="<%=vv1 %>" id="vv1" />
                                    <input type="hidden" class="money" name="vv2" size="24" value="<%=vv2 %>" id="vv2" />
                                    <input type="hidden" class="money" name="vv3" size="24" value="<%=vv3 %>" id="vv3" />
                                    <input type="hidden" class="money" name="vv4" size="24" value="<%=vv4 %>" id="vv4" />

                                    <!-- 附件4 中的合计  -->
                                    <input type="hidden" class="money" name="FJ4_HJ" size="24" value="<%=FJ4_HJ %>" />
                                    <input type="hidden" class="money" name="FB1_10" size="24" value="<%=FB1_10 %>" />
                                    <input type="hidden" class="money" name="FB1_9b_XXE" size="24" value="<%=FB1_9b_XXE %>" />

                                    <input type="hidden" name="newxgzqy" size="24" value="false" />

                                    <!-- 附表4，第4列第3，4，5行合计值 -->
                                    <input type="hidden" name="FB4_COL4_Hj" size="24" value="0.0" />

                                    <!--沈阳改动 20060428 begin-->
                                    <!--CTAIS系统带出的分次预缴税额
                <input type="hidden" id="ybbys" name="JCSJ_YBBYS_28" size="24" value=""/>
               -->
                                    <!--CTAIS系统带出的出口开具专用缴款书预缴税额
                <input type="hidden" id="ybbys" name="JCSJ_YBBYS_29" size="24" value=""/>
                 -->
                                    <!--沈阳改动 20060428 end -->
                                    <tr>
                                        <td colspan="2" class="td_idx" width="30%" rowspan="2" align="center">项&nbsp;&nbsp;&nbsp;目</td>
                                        <td rowspan="2" class="td_idx" width="12%" align="center">栏&nbsp;&nbsp;&nbsp;次</td>
                                        <td colspan="2" class="td_idx" width="28%" align="center">一般项目</td>
                                        <td colspan="2" class="td_idx" width="28%" align="center">即征即退项目</td>
                                    </tr>
                                    <tr>
                                        <td class="td_idx" width="14%">
                                            <div align="center">本月数</div>
                                        </td>
                                        <td class="td_idx" width="14%">
                                            <div align="center">本年累计</div>
                                        </td>
                                        <td class="td_idx" width="14%">
                                            <div align="center">本月数</div>
                                        </td>
                                        <td class="td_idx" width="14%">
                                            <div align="center">本年累计</div>
                                        </td>
                                    </tr>
                                    <tbody>
                                        <tr>
                                            <td class="td_idx" align="center" rowspan="10" width="3%">销<br />
                                                售<br />
                                                额</td>
                                            <td class="td_idx" width="228">（一）按适用税率计税销售额</td>
                                            <td class="td_idx">1</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly="readonly" name="YBBYS_1" id="YBBYS_1" value="<%=vv0 %>" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBNLJ_1" id="YBBNLJ_1" value="0.00" readonly originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_1" id="JZJTBYS_1" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBNLJ_1" id="JZJTBNLJ_1" value="0.00" readonly originvalue="0.00">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">&nbsp;&nbsp;&nbsp;&nbsp;其中：应税货物销售额</td>
                                            <td class="td_idx">2</td>
                                            <td>
                                                <input type="text" class="money" name="YBBYS_2" id="YBBYS_2" onchange="changeValue_YBBY();" value="<%=vv0 %>" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBNLJ_2" id="YBBNLJ_2" onchange="changeValue_YB();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_2" id="JZJTBYS_2" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBNLJ_2" id="JZJTBNLJ_2" onchange="changeValue_JZJT();" value="0.00" originvalue="0.00" readonly>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应税劳务销售额</td>
                                            <td class="td_idx">3</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_3" onchange="changeValue_YBBY();" name="YBBYS_3" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_3" id="YBBNLJ_3" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_3" id="JZJTBYS_3" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBNLJ_3" id="JZJTBNLJ_3" onchange="changeValue_JZJT();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;纳税检查调整的销售额</td>
                                            <td class="td_idx">4</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBYS_4" id="YBBYS_4" onchange="changeValue_YBBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBNLJ_4" id="YBBNLJ_4" onchange="changeValue_YB();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_4" id="JZJTBYS_4" onchange="changeValue_JZJTBY();" value="0.00" readonly="readonly" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBNLJ_4" id="JZJTBNLJ_4" onchange="changeValue_JZJT();" value="0.00" originvalue="0.00" readonly>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">（二）按简易办法计税销售额</td>
                                            <td class="td_idx">5</td>
                                            <td>
                                                <input type="text" class="money" name="YBBYS_5" id="YBBYS_5" onchange="changeValue_YBBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBNLJ_5" id="YBBNLJ_5" onchange="changeValue_YB();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_5" id="JZJTBYS_5" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBNLJ_5" id="JZJTBNLJ_5" onchange="changeValue_JZJT();" value="0.00" originvalue="0.00" readonly>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">&nbsp;&nbsp;&nbsp;&nbsp;其中：纳税检查调整的销售额</td>
                                            <td class="td_idx">6</td>
                                            <td>
                                                <input type="text" class="money" name="YBBYS_6" id="YBBYS_6" onchange="changeValue_YBBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_6" id="YBBNLJ_6" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_6" id="JZJTBYS_6" onchange="changeValue_JZJTBY();" value="0.00" readonly truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBNLJ_6" id="JZJTBNLJ_6" onchange="changeValue_JZJT();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">（三）免、抵、退办法出口销售额</td>
                                            <td class="td_idx">7</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBYS_7" id="YBBYS_7" onchange="changeValue_YBBY();" value="<%=KJQTFP_XSE15 %>" readonly truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBNLJ_7" id="YBBNLJ_7" onchange="changeValue_YB();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">（四）免税销售额</td>
                                            <td class="td_idx">8</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBYS_8" id="YBBYS_8" onchange="changeValue_YBBY();" value="<%=KJQTFP_XSE17 %>" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBNLJ_8" id="YBBNLJ_8" onchange="changeValue_YB();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">&nbsp;&nbsp;&nbsp;&nbsp;其中：免税货物销售额</td>
                                            <td class="td_idx">9</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_9" onchange="changeValue_YBBY();" name="YBBYS_9" value="<%=KJQTFP_XSE17 %>" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_9" id="YBBNLJ_9" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免税劳务销售额</td>
                                            <td class="td_idx">10</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_10" onchange="changeValue_YBBY();" name="YBBYS_10" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_10" id="YBBNLJ_10" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="LEFT" align="middle" width="3%" rowspan="14">税<br />
                                                款<br />
                                                计<br />
                                                算</td>
                                            <td class="td_idx" width="228">销项税额</td>
                                            <td class="td_idx">11</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBYS_11" id="YBBYS_11" onchange="changeValue_YBBY();" value="<%=YBBYS_11 %>" readonly truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_11" id="YBBNLJ_11" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_11" id="JZJTBYS_11" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBNLJ_11" id="JZJTBNLJ_11" onchange="changeValue_JZJT();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">进项税额</td>
                                            <td class="td_idx">12</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_12" onchange="changeValue_YBBY();" name="YBBYS_12" value="<%=SBDK_SE_12 %>" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_12" id="YBBNLJ_12" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_12" id="JZJTBYS_12" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_12" id="JZJTBNLJ_12" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">上期留抵税额</td>
                                            <td class="td_idx">13</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly id="YBBYS_13" onchange="changeValue_YBBY();" name="YBBYS_13" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_13" id="YBBNLJ_13" onchange="changeValue_YB();" value="0.0" originvalue="0.0">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="JZJTBYS_13" id="JZJTBYS_13" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" value="0.0" originvalue="0.0" name="JZJTBNLJ_13" id="JZJTBNLJ_13" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">进项税额转出</td>
                                            <td class="td_idx">14</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_14" onchange="changeValue_YBBY();" name="YBBYS_14" value="<%=JXZC_SE_13 %>" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_14" id="YBBNLJ_14" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_14" id="JZJTBYS_14" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_14" id="JZJTBNLJ_14" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">免、抵、退应退税额</td>
                                            <td class="td_idx">15</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly="readonly" id="YBBYS_15" onchange="changeValue_YBBY();" name="YBBYS_15" value="0.0" truevalue="0.0">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_15" id="YBBNLJ_15" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" name="JZJTBYS_15" id="JZJTBYS_15" onchange="changeValue_JZJTBY();" value="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly value="0.00" name="JZJTBNLJ_15" id="JZJTBNLJ_15" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">按适用税率计算的纳税检查应补缴税额</td>
                                            <td class="td_idx">16</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_16" onchange="changeValue_YBBY();" name="YBBYS_16" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_16" id="YBBNLJ_16" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" name="JZJTBYS_16" id="JZJTBYS_16" onchange="changeValue_JZJTBY();" value="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly value="0.00" name="JZJTBNLJ_16" id="JZJTBNLJ_16" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">应抵扣税额合计</td>
                                            <td class="td_idx">17=12+13-14-15+16</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_17" onchange="changeValue_YBBY();" name="YBBYS_17" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly name="YBBNLJ_17" id="YBBNLJ_17" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_17" id="JZJTBYS_17" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_17" id="JZJTBNLJ_17" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">实际抵扣税额</td>
                                            <td class="td_idx">18（如17<11,则为17,否则为11）
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_18" onchange="changeValue_YBBY();" name="YBBYS_18" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_18" id="YBBNLJ_18" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_18" id="JZJTBYS_18" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_18" id="JZJTBNLJ_18" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">应纳税额</td>
                                            <td class="td_idx">19=11-18</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_19" onchange="changeValue_YBBY();" name="YBBYS_19" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_19" id="YBBNLJ_19" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_19" id="JZJTBYS_19" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_19" id="JZJTBNLJ_19" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">期末留抵税额</td>
                                            <td class="td_idx">20=17-18</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_20" onchange="changeValue_YBBY();" name="YBBYS_20" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBNLJ_20" onchange="changeValue_YB();" name="YBBNLJ_20" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_20" id="JZJTBYS_20" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly value="0.0" originvalue="0.0" name="JZJTBNLJ_20" id="JZJTBNLJ_20" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">简易计税办法计算的应纳税额</td>
                                            <td class="td_idx">21</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBYS_21" id="YBBYS_21" onchange="changeValue_YBBY();" value="0.00" readonly truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBNLJ_21" id="YBBNLJ_21" onchange="changeValue_YB();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_21" id="JZJTBYS_21" onchange="changeValue_JZJTBY();" value="0.00" readonly truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBNLJ_21" id="JZJTBNLJ_21" onchange="changeValue_JZJT();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">按简易计税办法计算的纳税检查应补缴税额</td>
                                            <td class="td_idx">22</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_22" onchange="changeValue_YBBY();" name="YBBYS_22" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_22" id="YBBNLJ_22" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">应纳税额减征额</td>
                                            <td class="td_idx">23</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_23" onchange="changeValue_YBBY();" name="YBBYS_23" value="<%=FJ4_HJ %>" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="YBBNLJ_23" id="YBBNLJ_23" onchange="changeValue_YB();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_23" id="JZJTBYS_23" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBNLJ_23" id="JZJTBNLJ_23" onchange="changeValue_JZJT();" value="0.00" readonly originvalue="0.00">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">应纳税额合计</td>
                                            <td class="td_idx">24=19+21-23</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_24" onchange="changeValue_YBBY();" name="YBBYS_24" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_24" id="YBBNLJ_24" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_24" id="JZJTBYS_24" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_24" id="JZJTBNLJ_24" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="LEFT" align="middle" width="3%" rowspan="14">税<br />
                                                款<br />
                                                缴<br />
                                                纳</td>
                                            <td class="td_idx" width="228">期初未缴税额（多缴为负数）</td>
                                            <td class="td_idx">25</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_25" onchange="changeValue_YBBY();" name="YBBYS_25" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_25" id="YBBNLJ_25" onchange="changeValue_YB();" value="0" originvalue="0">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_25" id="JZJTBYS_25" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0" originvalue="0" name="JZJTBNLJ_25" id="JZJTBNLJ_25" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">实收出口开具专用缴款书退税额</td>
                                            <td class="td_idx">26</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_26" onchange="changeValue_YBBY();" name="YBBYS_26" value="0.00" readonly truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_26" id="YBBNLJ_26" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" name="JZJTBYS_26" id="JZJTBYS_26" onchange="changeValue_JZJTBY();" value="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_26" id="JZJTBNLJ_26" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">本期已缴税额</td>
                                            <td class="td_idx">27=28+29+30+31</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_27" onchange="changeValue_YBBY();" name="YBBYS_27" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_27" id="YBBNLJ_27" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_27" id="JZJTBYS_27" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_27" id="JZJTBNLJ_27" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">①分次预缴税额</td>
                                            <td class="td_idx">28</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_28" onchange="changeValue_YBBY();changeLine28();" name="YBBYS_28" value="<%=YBBYS_28 %>" truevalue="0.0">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly name="YBBNLJ_28" id="YBBNLJ_28" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_28" id="JZJTBYS_28" onchange="changeValue_JZJTBY();changeLine28();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_28" id="JZJTBNLJ_28" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">②出口开具专用缴款书预缴税额</td>
                                            <td class="td_idx">29</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_29" onchange="changeValue_YBBY();" name="YBBYS_29" value="0.00" readonly="readonly" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly name="YBBNLJ_29" id="YBBNLJ_29" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" name="JZJTBYS_29" id="JZJTBYS_29" onchange="changeValue_JZJTBY();" value="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_29" id="JZJTBNLJ_29" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">③本期缴纳上期应纳税额</td>
                                            <td class="td_idx">30</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_30" onchange="changeValue_YBBY();" name="YBBYS_30" value="0.0" truevalue="0.0">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_30" id="YBBNLJ_30" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_30" id="JZJTBYS_30" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_30" id="JZJTBNLJ_30" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">④本期缴纳欠缴税额</td>
                                            <td class="td_idx">31</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_31" onchange="changeValue_YBBY();" name="YBBYS_31" value="0.0" truevalue="0.0">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_31" id="YBBNLJ_31" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_31" id="JZJTBYS_31" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_31" id="JZJTBNLJ_31" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">期末未缴税额（多缴为负数）</td>
                                            <td class="td_idx">32=24+25+26-27</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_32" onchange="changeValue_YBBY();" name="YBBYS_32" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_32" id="YBBNLJ_32" onchange="changeValue_YB();" value="0.00" originvalue="0">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_32" id="JZJTBYS_32" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0" name="JZJTBNLJ_32" id="JZJTBNLJ_32" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">其中：欠缴税额（≥0）</td>
                                            <td class="td_idx">33=25+26-27</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_33" onchange="changeValue_YBBY();" name="YBBYS_33" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly name="YBBNLJ_33" id="YBBNLJ_33" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_33" id="JZJTBYS_33" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_33" id="JZJTBNLJ_33" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">本期应补(退)税额</td>
                                            <td class="td_idx">34=24-28-29</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_34" onchange="changeValue_YBBY();" name="YBBYS_34" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly name="YBBNLJ_34" id="YBBNLJ_34" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" name="JZJTBYS_34" id="JZJTBYS_34" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_34" id="JZJTBNLJ_34" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">即征即退实际退税额</td>
                                            <td class="td_idx">35</td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" name="YBBYS_35" id="YBBYS_35" onchange="changeValue_YBBY();" value="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                                <input type="hidden" class="money" name="YBBNLJ_35" id="YBBNLJ_35" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly='readonly' name="JZJTBYS_35" id="JZJTBYS_35" onchange="changeValue_JZJTBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly value="0.00" originvalue="0.00" name="JZJTBNLJ_35" id="JZJTBNLJ_35" onchange="changeValue_JZJT();">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">期初未缴查补税额</td>
                                            <td class="td_idx">36</td>
                                            <td>
                                                <input type="text" class="money" name="YBBYS_36" id="YBBYS_36" onchange="changeValue_YBBY();" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="money" name="YBBNLJ_36" id="YBBNLJ_36" onchange="changeValue_YB();" value="0.0" originvalue="0.0">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">本期入库查补税额</td>
                                            <td class="td_idx">37</td>
                                            <td>
                                                <input type="text" class="money" id="YBBYS_37" onchange="changeValue_YBBY();" name="YBBYS_37" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="money" name="YBBNLJ_37" id="YBBNLJ_37" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx" width="228">期末未缴查补税额</td>
                                            <td class="td_idx">38=16+22+36-37</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="YBBYS_38" onchange="changeValue_YBBY();" name="YBBYS_38" value="0.00" truevalue="0.00">
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" readonly name="YBBNLJ_38" id="YBBNLJ_38" onchange="changeValue_YB();" value="0.00" originvalue="0.00">
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                            <td>
                                                <div align="center">------</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" width="100%" align="center" cellspacing="0" cellpadding="0" class="SBB" bordercolor='#C4C6C4' bordercolordark='#ffffff' bordercolorlight="#999999">
                                    <tr style="height: 40px; background-color: #DFE4E8">
                                        <td colspan="2">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <table border="1" width="100%" align="center" cellspacing="0" cellpadding="0" class="SBB" bordercolor='#C4C6C4' bordercolordark='#ffffff' bordercolorlight="#999999">

                                                <tr>
                                                    <td align="left" class="HEAD" style="height: 40px; color: red; font-size: 16px" colspan="6">
                                                        <span style="display: inline">在增值税正式申报时，附加税数据将一并申报。烦请清卡前，进行数据确认。<br />
                                                        </span>
                                                        <span style="display: none">在消费税正式申报时，附加税数据将一并申报。烦请申报前，进行数据确认。<br />
                                                        </span>
                                                        <span>注：“以下一体化申报信息，纳税人如涉及税收优惠减免，系统仅针对小微企业税收优惠减免进行自动计算。
	 	若您可以享受其他税收优惠减免，请勿使用该一体化申报功能，另行到厦门市税务局网站附加税费专项申报页面进行自主申报。
	 	上文小微企业税收优惠指：1、月销售额3万以下的小规模纳税人，免征增值税，相应附加费随之免征；
	 	2、按月纳税的月销售额或营业额不超过10万元（按季度纳税的季度销售额或营业额不超过30万元）的缴纳义务人，免征教育费附加、地方教育附加。）”</span></td>
                                                </tr>
                                                <tr>
                                                    <td class="HEAD" style="width:25%;height:40px" >是否采用“主附税一体化申报缴税功能”</td>
 			<td class="HEAD" align="left" colspan="5">
 			&nbsp;&nbsp;是<input	  type="radio" disabled  style="width:15"  name="GDSYTHJS_FALG" id="GDSYTHJS_FALG1"  size="12" value="1" onclick="changBtn();" />
 			&nbsp;&nbsp;否<input type="radio" disabled 	 style="width:15"  name="GDSYTHJS_FALG" id="GDSYTHJS_FALG2" size="12" value="0" onclick="changBtn();" checked/>
 		   </td>
                                                </tr>
                                                <tr style="height: 50px">
                                                    <td width="20%" align="center" class="HEAD" nowrap="true">税费附加</td>
                                                    <td width="15%" align="center" class="HEAD" nowrap="true">计征依据</td>
                                                    <td width="15%" align="center" class="HEAD" nowrap="true">税率（征收率）</td>
                                                    <td width="15%" align="center" class="HEAD" nowrap="true">应纳税费</td>
                                                    <td width="15%" align="center" class="HEAD" nowrap="true">减免税费</td>
                                                    <td width="20%" align="center" class="HEAD" nowrap="true">应缴税费</td>
                                                </tr>
                                                <tr>
                                                    <td align="center" class="HEAD" nowrap="true">城市维护建设税</td>
                                                    <td>
                                                        <input type="text" name="YSLF_CJS_JSYJ" id="YSLF_CJS_JSYJ" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_CJS_SL" id="YSLF_CJS_SL" class="sl_readonly" readonly="readonly" style="text-align: right" value="0.07" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_CJS_YNSF" id="YSLF_CJS_YNSF" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_CJS_JMSF" id="YSLF_CJS_JMSF" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_CJS_YJSF" id="YSLF_CJS_YJSF" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="center" class="HEAD" nowrap="true">教育费附加</td>
                                                    <td>
                                                        <input type="text" name="YSLF_JYF_JSYJ" id="YSLF_JYF_JSYJ" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_JYF_SL" id="YSLF_JYF_SL" class="sl_readonly" readonly="readonly" style="text-align: right" value="0.03" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_JYF_YNSF" id="YSLF_JYF_YNSF" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_JYF_JMSF" id="YSLF_JYF_JMSF" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_JYF_YJSF" id="YSLF_JYF_YJSF" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                </tr>
                                                <tr>
                                                    <td align="center" class="HEAD" nowrap="true">地方教育附加</td>
                                                    <td>
                                                        <input type="text" name="YSLF_DFJY_JSYJ" id="YSLF_DFJY_JSYJ" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_DFJY_SL" id="YSLF_DFJY_SL" class="sl_readonly" readonly="readonly" style="text-align: right" value="0.02" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_DFJY_YNSF" id="YSLF_DFJY_YNSF" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_DFJY_JMSF" id="YSLF_DFJY_JMSF" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                    <td>
                                                        <input type="text" name="YSLF_DFJY_YJSF" id="YSLF_DFJY_YJSF" class="input_money_readonly" readonly="readonly" style="text-align: right" value="0.00" /></td>
                                                </tr>
                                                <input type="hidden" name="ZS_ZSXM_DM" value="10101">
                                                <input type="hidden" name="ZS_ZSPM_DM" value="101016703,101017490,101014001">
                                                <input type="hidden" name="ZS_YZPZZL_DM" value="BDA0610606">
                                                <!-- 附加税对应的征收项目和征收品目 -->
                                                <input type="hidden" name="FJSCJF_ZSXM_DM" value="">
                                                <input type="hidden" name="FJSCJF_ZSPM_DM" value="">
                                                <input type="hidden" name="FJSJY_ZSXM_DM" value="">
                                                <input type="hidden" name="FJSJY_ZSPM_DM" value="">
                                                <input type="hidden" name="FJSDFJY_ZSXM_DM" value="">
                                                <input type="hidden" name="FJSDFJY_ZSPM_DM" value="">
                                                <input type="hidden" name="SFCSHSJYC" id="SFCSHSJYC" value="N">
                                                <input type="hidden" name="KKFS" id="KKFS" value="">
                                            </table>
                                            <script type="text/javascript">

                                                function unformatAllYslf() {
                                                    var inputTd = $("#inputTable input");
                                                    $.each(inputTd, function (i, val) {
                                                        unformatFieldYslf(inputTd[i]);
                                                    });
                                                }


                                                function formatAllYslf() {
                                                    var inputTd = $("#inputTable input");
                                                    $.each(inputTd, function (i, val) {
                                                        formatFieldYslf(inputTd[i]);
                                                    });
                                                }


                                                function formatFieldYslf(o) {
                                                    if (o.className == "money" || o.className == "input_money_readonly") {
                                                        formatCurrency(o);
                                                        o.value = formatNumberType(o.value, 0, 2);
                                                    }
                                                    else if (o.className == "sl" || o.className == "sl_readonly") {
                                                        transSl(o);
                                                    }
                                                }

                                                function unformatFieldYslf(o) {
                                                    if (o.className == "money" || o.className == "input_money_readonly") {
                                                        unformatCurrency(o);
                                                    }
                                                    else if (o.className == "sl" || o.className == "sl_readonly") {
                                                        formatSl(o);
                                                    }
                                                }

                                                /**
                                                 * 保存时校验
                                                 */
                                                function checkfjs() {
                                                    unformatAllYslf();
                                                    var sfcshsjyc = $("#SFCSHSJYC").val();
                                                    var gdsythjs_falg = $("input[name='GDSYTHJS_FALG']:checked").val();
                                                    if (gdsythjs_falg != "1" && gdsythjs_falg != "0") {
                                                        alert("是否采用“主附税一体化申报缴税功能”必须勾选“是”或者“否”！");
                                                        formatAllYslf();
                                                        return false;
                                                    }

                                                    if (gdsythjs_falg == "1") {
                                                        if ($("input[name='TABLE_NAME']").val() == "SBB_ZZS_YGZ_XGMNSR_2005") {
                                                            if ((parseFloat($("#BQYSHWJLW_SKJS_14").val()) + parseFloat($("#BQYSFW_SKJS_14").val())) == 0) {
                                                                alert("小规模纳税人的附加税零申报信息由系统自动同步，无需进行网上一体化申报！");
                                                                $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                formatAllYslf();
                                                                return;
                                                            }
                                                        }
                                                    }

                                                    formatAllYslf();
                                                    return true;
                                                }

                                                /**
                                                 * 改变按钮时触发
                                                 */
                                                function changBtn() {
                                                    unformatAllYslf();
                                                    var sfcshsjyc = $("#SFCSHSJYC").val();
                                                    var gdsythjs_falg = $("input[name='GDSYTHJS_FALG']:checked").val();
                                                    if (gdsythjs_falg == "1") {
                                                        if (sfcshsjyc == "Y") {
                                                            alert("附加税初始化数据异常，若需申报附加税，请到主管税务机关申报！");
                                                            $("#GDSYTHJS_FALG1").prop('checked', false);
                                                            $("#GDSYTHJS_FALG2").prop('checked', true);
                                                            formatAllYslf();
                                                            return;
                                                        } else if (sfcshsjyc == "Y1") {
                                                            alert("无有效的附加税费税种认定信息，请及时与主管税务机关联系。");
                                                            $("#GDSYTHJS_FALG1").prop('checked', false);
                                                            $("#GDSYTHJS_FALG2").prop('checked', true);
                                                            formatAllYslf();
                                                            return;
                                                        } else if (sfcshsjyc == "Y2") {
                                                            alert("无符合条件的附加税费税种认定信息，请及时与主管税务机关联系。");
                                                            $("#GDSYTHJS_FALG1").prop('checked', false);
                                                            $("#GDSYTHJS_FALG2").prop('checked', true);
                                                            formatAllYslf();
                                                            return;
                                                        } else if (sfcshsjyc == "Y3") {
                                                            alert("当前纳税人申报属期内不存在有符合条件的附加税税（费）种认定信息，若需申报附加税，请到主管税务机关申报！");
                                                            $("#GDSYTHJS_FALG1").prop('checked', false);
                                                            $("#GDSYTHJS_FALG2").prop('checked', true);
                                                            formatAllYslf();
                                                            return;
                                                        } else {
                                                            if ($("#KKFS").val() == "N") {
                                                                alert("“暂不扣款”无法一体化申报缴税，如需一体化申报缴税请至扣款方式维护，将扣款方式维护成“实时扣款”");
                                                                $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                formatAllYslf();
                                                                return;
                                                            }

                                                            if ($("input[name='TABLE_NAME']").val() != "SBB_ZZS_YGZ_YBNSR" && $("input[name='TABLE_NAME']").val() != "SBB_ZZS_YGZ_XGMNSR_2005") {
                                                                if ($("input[name='ZZS_BZ']").val() == "N") {
                                                                    alert("属期内，无有效的增值税销售额申报数据，无法准确进行附加税申报，请先完成相关税种申报。");
                                                                    $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                    $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                    formatAllYslf();
                                                                    return;
                                                                }
                                                            }

                                                            var cjfsl = parseFloat($("#YSLF_CJS_SL").val());
                                                            var jyfsl = parseFloat($("#YSLF_JYF_SL").val());
                                                            var dfjyfsl = parseFloat($("#YSLF_DFJY_SL").val());
                                                            if (cjfsl != 0.05 && cjfsl != 0.07) {
                                                                alert("附加税部分“城市维护建设税”行的税率不符合要求，若需申报附加税，请到主管税务机关申报！");
                                                                $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                formatAllYslf();
                                                                return;
                                                            } else {
                                                                if (jyfsl != 0.03) {
                                                                    alert("附加税部分“教育费附加”行的税率不符合要求，若需申报附加税，请到主管税务机关申报！");
                                                                    $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                    $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                    formatAllYslf();
                                                                    return;
                                                                } else {
                                                                    if (dfjyfsl != 0.02) {
                                                                        alert("附加税部分“地方教育附加”行的税率不符合要求，若需申报附加税，请到主管税务机关申报！");
                                                                        $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                        $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                        formatAllYslf();
                                                                        return;
                                                                    }
                                                                }
                                                            }

                                                            if ($("input[name='TABLE_NAME']").val() == "SBB_ZZS_YGZ_YBNSR") {
                                                                if (parseFloat($("input[name='YBBYS_28']").val()) > 0 || parseFloat($("input[name='YBBYS_29']").val()) > 0) {
                                                                    alert("增值税申报表（一般纳税人适用）第28行或第29行“一般项目本月数”大于0时，请前往主管税务机关申报附加税！");
                                                                    $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                    $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                    formatAllYslf();
                                                                    return;
                                                                }

                                                                if (parseFloat($("input[name='JZJTBYS_28']").val()) > 0) {
                                                                    alert("增值税申报表（一般纳税人适用）第28行“即征即退项目本月数”大于0时，请前往主管税务机关申报附加税！");
                                                                    $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                    $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                    formatAllYslf();
                                                                    return;
                                                                }
                                                            }

                                                            if ($("input[name='TABLE_NAME']").val() == "SBB_ZZS_YGZ_XGMNSR_2005") {
                                                                if (parseFloat($("input[name='BQYSHWJLW_SKJS_13']").val()) > 0) {
                                                                    alert("增值税纳税申报表（适用小规模纳税人）第21行“货物及劳务本月数”大于0时，请前往主管税务机关申报附加税！");
                                                                    $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                    $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                    formatAllYslf();
                                                                    return;
                                                                }

                                                                if (parseFloat($("input[name='BQYSFW_SKJS_13']").val()) > 0) {
                                                                    alert("增值税纳税申报表（适用小规模纳税人）第21行“服务、不动产和无形资产本月数”大于0时，请前往主管税务机关申报附加税！");
                                                                    $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                    $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                    formatAllYslf();
                                                                    return;
                                                                }

                                                                if ((parseFloat($("#BQYSHWJLW_SKJS_14").val()) + parseFloat($("#BQYSFW_SKJS_14").val())) == 0) {
                                                                    alert("小规模纳税人的附加税零申报信息由系统自动同步，无需进行网上一体化申报！");
                                                                    $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                    $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                    formatAllYslf();
                                                                    return;
                                                                }
                                                            }

                                                            var tableNeme = new Array("SBB_XFS_2018_CPY_CPYXFSNSSBB", "SBB_XFS_2015_DC_DCXFSNSSBB", "SBB_XFS_2015_JL",
                                                                    "SBB_XFS_2015_JY", "SBB_XFS_2015_QT", "SBB_XFS_2015_TL_TLXFSNSSBB",
                                                                    "SBB_XFS_2015_QC_XQCXFSNSSBB", "SBB_XFS_2015_YL_YSXFPXFSNSSBB");

                                                            var tableNemeZw = new Array("成品油消费税纳税申报表", "电池消费税纳税申报表", "酒类应税消费品消费税纳税申报表",
                                                                    "卷烟消费税纳税申报表（批发）", "其他应税消费品消费税纳税申报表", "涂料消费税纳税申报表",
                                                                    "小汽车消费税纳税申报表", "烟类应税消费品消费税纳税申报表");
                                                            for (var i = 0; i < tableNeme.length; i++) {
                                                                if ($("input[name='TABLE_NAME']").val() == tableNeme[i]) {
                                                                    var bqyjse = 0.00;
                                                                    //"卷烟消费税纳税申报表（批发）", "其他应税消费品消费税纳税申报表"中存在多个name为BQYJSE，故这边单独处理改成直接取id
                                                                    if (i == 4 || i == 5) {
                                                                        bqyjse = parseFloat($("#BQYJSE").val())
                                                                    } else {
                                                                        bqyjse = parseFloat($("input[name='BQYJSE']").val())
                                                                    }
                                                                    if (parseFloat($("input[name='BQYJSE']").val()) > 0) {
                                                                        alert(tableNemeZw[i] + "“本期预缴税额”大于0时，请前往主管税务机关申报附加税！");
                                                                        $("#GDSYTHJS_FALG1").prop('checked', false);
                                                                        $("#GDSYTHJS_FALG2").prop('checked', true);
                                                                        formatAllYslf();
                                                                        return;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    formatAllYslf();
                                                }

                                                /**
                                                 * 计算地税附加税
                                                 */
                                                function DsCalculate(xse, ynse, jmse, bz) {
                                                    //计税依据 为主表“本期应缴纳税额”
                                                    ynse = formatPoint(ynse, 2);
                                                    jmse = formatPoint(jmse, 2);
                                                    xse = formatPoint(xse, 2);
                                                    $("#YSLF_CJS_JSYJ").val(ynse);
                                                    $("#YSLF_JYF_JSYJ").val(ynse);
                                                    $("#YSLF_DFJY_JSYJ").val(ynse);

                                                    $("#YSLF_CJS_YNSF").val(formatPoint(parseFloat($("#YSLF_CJS_JSYJ").val()) * parseFloat($("#YSLF_CJS_SL").val()), 2));
                                                    $("#YSLF_JYF_YNSF").val(formatPoint(parseFloat($("#YSLF_JYF_JSYJ").val()) * parseFloat($("#YSLF_JYF_SL").val()), 2));
                                                    $("#YSLF_DFJY_YNSF").val(formatPoint(parseFloat($("#YSLF_DFJY_JSYJ").val()) * parseFloat($("#YSLF_DFJY_SL").val()), 2));

                                                    if (bz == 1) {
                                                        if (xse <= 100000) {
                                                            $("#YSLF_JYF_JMSF").val($("#YSLF_JYF_YNSF").val());
                                                            $("#YSLF_DFJY_JMSF").val($("#YSLF_DFJY_YNSF").val());
                                                        } else {
                                                            $("#YSLF_JYF_JMSF").val(0);
                                                            $("#YSLF_DFJY_JMSF").val(0);
                                                        }
                                                    } else if (bz == 3) {
                                                        if (xse <= 300000) {
                                                            $("#YSLF_JYF_JMSF").val($("#YSLF_JYF_YNSF").val());
                                                            $("#YSLF_DFJY_JMSF").val($("#YSLF_DFJY_YNSF").val());
                                                        } else {
                                                            $("#YSLF_JYF_JMSF").val(0);
                                                            $("#YSLF_DFJY_JMSF").val(0);
                                                        }
                                                    }

                                                    if ($("input[name='TABLE_NAME']").val() != "SBB_ZZS_YGZ_YBNSR" && $("input[name='TABLE_NAME']").val() != "SBB_ZZS_YGZ_XGMNSR_2005") {
                                                        if ($("input[name='ZZS_BZ']").val() == "N") {
                                                            $("#YSLF_JYF_JMSF").val(0);
                                                            $("#YSLF_DFJY_JMSF").val(0);
                                                        }
                                                    }

                                                    //减免税费
                                                    $("#YSLF_CJS_JMSF").val(0);   //已经修改为0
                                                    //	$("#YSLF_JYF_JMSF").val(jmse);
                                                    //	$("#YSLF_DFJY_JMSF").val(jmse);

                                                    //应缴税费=应纳税费-减免税费(教育费附加和地方教育费附加)
                                                    $("#YSLF_JYF_YJSF").val(formatPoint(parseFloat($("#YSLF_JYF_YNSF").val()) - parseFloat($("#YSLF_JYF_JMSF").val()), 2));
                                                    $("#YSLF_DFJY_YJSF").val(formatPoint(parseFloat($("#YSLF_DFJY_YNSF").val()) - parseFloat($("#YSLF_DFJY_JMSF").val()), 2));

                                                    //应缴税费=应纳税费(城市维护建设税)
                                                    $("#YSLF_CJS_YJSF").val(parseFloat($("#YSLF_CJS_YNSF").val()));


                                                }
                                            </script>


                                        </td>
                                    </tr>
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
    <script language="javascript">
        //初始化text.js文件
        var yqBz = "";
        var sssq_q = "20180801";
        var sssq_z = "20180831";
        $(function () {

            contentready();
            contentreadyOne();
            yqBz = "N";
        });

        function contentreadyOne() {
            changeValuefun();

        }


        function resetTrueValue() {

        }
        resetTrueValue();
    </script>
</body>
</html>
