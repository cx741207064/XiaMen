<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MainServlet_SBB_ZZS_YGZ_YBNSR_FB3.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.wssb.MainServlet_SBB_ZZS_YGZ_YBNSR_FB3" %>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gbk">
    <!-- xuyb 删除自动刷新
		<meta content="600; " http-equiv=refresh content='1'>
		-->
    <title>《增值税纳税申报表》附列资料（三）</title>
    <script language="javascript" src="/wssb/wssb/public/js/jquery-1.7.2.min.js"></script>
    <script language="javascript" src="/wssb/wssb/zzsybnsr_ygz/SBB_ZZS_YGZ_YBNSR_FB3.js?t=20170926"></script>
    <script language="javascript" src="/wssb/wssb/public/js/pub.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/commonNew.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/text.js"></script>
    <script language="javascript" src="/wssb/wssb/public/js/wssbCommon.js"></script>
    <script type="text/javascript" src="/js/initinfo.js"></script>

    <script src="/wssb/wssb/public/js/vue.js"></script>
    <script src="public_zzs.js" type="text/javascript" ></script>

    <script language="javascript">
        function checkDisplay() {

        }

        var TABLE_ACTION = "<%=TABLE_ACTION %>";

        function showDateFB3() {
            var obj = result
            var el=obj

                var arr = Object.keys(el)
                arr.forEach(function (key) {
                    if (key == "SSSQ_Q") {
                        var span = $("span#SSRQQ")
                        span.html(el[key].split(',')[0])
                    }
                    if (key == "SSSQ_Z") {
                        var span = $("span#SSRQZ")
                        span.html(el[key].split(',')[0])
                    }

                })

        }

        $(function () {
            showTableActionDisplay()
            showDateFB3()
        })
    </script>
</head>
<link rel="stylesheet" href="/wssb/wssb/public/style/link.css" type="text/css">
<body marginwidth="0.00" marginheight="0.00" topmargin="0.00" leftmargin="0" onload="showMsgForFCensr();caculation();">
    <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <!--菜单列-->
            <!--<td width="161" height="100%">
					
				</td>-->
            <!--内容列-->
            <td valign="align" align="center" height="100%">
                <br />
                <br />
                <br />

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
                <!-- 导入表格 -->
                <form name="xform" method="POST">
                    <table width="1024" align="center" id="inputTable">
                        <tr>
                            <td>
                                <table width="100%" border="0" align="center">
                                    <tr>
                                        <td align="center">
                                            <strong><font size="3">《增值税纳税申报表》附列资料（三）</font></strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center">
                                            <strong><font size="2">（服务、不动产和无形资产扣除项目明细）</font></strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <br />
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
                                                    <td width="30%">填表日期：<span id="TBRQ">20180905</span></td>
                                                    <td align="right">金额单位：元(列至角分)</td>
                                                </tr>
                                            </table>
                                            <!--表头部分-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table table_action="initial" nsrsbh="91350200MA2Y10EC4K" lens="1" table_name="SBB_ZZS_YGZ_YBNSR_FB3" id="Table1" border="1" cellspacing="0" cellpadding="0" class="SBB" bordercolor='#C4C6C4' bordercolordark='#ffffff' bordercolorlight="#999999">
                                    <input type="hidden" name="SSSQ_Q" value="20180801">
                                    <input type="hidden" name="SSSQQ" value="20180801">
                                    <input type="hidden" name="SSSQ_Z" value="20180831">
                                    <input type="hidden" name="isYbnsr" value="Y">
                                    <input type="hidden" name="sqqmye" value="0">
                                    <tbody style="behavior: url(/wssb/wssb/public/htc/text.htc)">
                                        <tr align="center">
                                            <td class="td_idx" rowspan="3" colspan="2">项目及栏次</td>
                                            <td class="td_idx" rowspan="2" style="width: 12%;">本期服务、不动产和无形资产价税合计额（免税销售额）</td>
                                            <td class="td_idx" colspan="5">服务、不动产和无形资产扣除项目</td>
                                        </tr>
                                        <tr align="center">
                                            <td class="td_idx" style="width: 10%;">期初余额</td>
                                            <td class="td_idx" style="width: 10%;">本期发生额</td>
                                            <td class="td_idx" style="width: 10%;">本期应扣除金额</td>
                                            <td class="td_idx" style="width: 10%;">本期实际扣除金额</td>
                                            <td class="td_idx">期末余额</td>
                                        </tr>
                                        <tr align="center">
                                            <td class="td_idx">1</td>
                                            <td class="td_idx">2</td>
                                            <td class="td_idx">3</td>
                                            <td class="td_idx">4=2+3</td>
                                            <td class="td_idx">5(5<=1且5<=4)</td>
                                            <td class="td_idx">6=4-5</td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx">&nbsp;16%税率的项目</td>
                                            <td class="td_idx" align="center" width="50px">1</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYSFWJSHJ_17YXDCZLFW" value="0.0"
                                                    name="BQYSFWJSHJ_17YXDCZLFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QCYE_17YXDCZLFW" value="0.0"
                                                    name="QCYE_17YXDCZLFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQFSE_17YXDCZLFW" value="0.00"
                                                   v-model="json.BQFSE_17YXDCZLFW" name="BQFSE_17YXDCZLFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYKCJE_17YXDCZLFW" value="0.00" v-model="json.BQYKCJE_17YXDCZLFW"
                                                    name="BQYKCJE_17YXDCZLFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQSJKCJE_17YXDCZLFW" value="0.00"
                                                   v-model="json.BQSJKCJE_17YXDCZLFW" name="BQSJKCJE_17YXDCZLFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QMYE_17YXDCZLFW" value="0.00" v-model="json.QMYE_17YXDCZLFW"
                                                    name="QMYE_17YXDCZLFW" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx">&nbsp;10%税率的项目</td>
                                            <td class="td_idx" align="center">2</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYSFWJSHJ_11YSFW" value="0.0"
                                                    name="BQYSFWJSHJ_11YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QCYE_11YSFW" value="0.0"
                                                    name="QCYE_11YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQFSE_11YSFW" value="0.00"
                                                   v-model="json.BQFSE_11YSFW" name="BQFSE_11YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYKCJE_11YSFW" value="0.00" v-model="json.BQYKCJE_11YSFW"
                                                    name="BQYKCJE_11YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQSJKCJE_11YSFW" value="0.00"
                                                   v-model="json.BQSJKCJE_11YSFW" name="BQSJKCJE_11YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QMYE_11YSFW" value="0.00" v-model="json.QMYE_11YSFW"
                                                    name="QMYE_11YSFW" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx">&nbsp;6%税率的项目（不含金融商品转让）</td>
                                            <td class="td_idx" align="center">3</td>
                                            <td>
                                                <input type="text" class="money" id="BQYSFWJSHJ_6YSFW" v-model="json.BQYSFWJSHJ_6YSFW"
                                                    name="BQYSFWJSHJ_6YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QCYE_6YSFW" value="0.0" v-model="json.QCYE_6YSFW"
                                                    name="QCYE_6YSFW"
                                                    onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQFSE_6YSFW" value="0.00" v-model="json.BQFSE_6YSFW"
                                                    name="BQFSE_6YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYKCJE_6YSFW" value="0.00" v-model="json.BQYKCJE_6YSFW"
                                                    name="BQYKCJE_6YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQSJKCJE_6YSFW" value="0.00" v-model="json.BQSJKCJE_6YSFW"
                                                    name="BQSJKCJE_6YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly"
                                                    id="QMYE_6YSFW" v-model="json.QMYE_6YSFW"
                                                    name="QMYE_6YSFW"
                                                    value="0.00" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx">&nbsp;6%税率的金融商品转让项目</td>
                                            <td class="td_idx" align="center">4</td>
                                            <td>
                                                <input type="text" class="money" id="BQYSFWJSHJ_6YSFW_JR" value="0.00"
                                                  v-model="json.BQYSFWJSHJ_6YSFW_JR"  name="BQYSFWJSHJ_6YSFW_JR" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QCYE_6YSFW_JR" value="0.0" v-model="json.QCYE_6YSFW_JR"
                                                    name="QCYE_6YSFW_JR"
                                                    onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQFSE_6YSFW_JR" value="0.00" v-model="json.BQFSE_6YSFW_JR"
                                                    name="BQFSE_6YSFW_JR" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYKCJE_6YSFW_JR" value="0.00" v-model="json.BQYKCJE_6YSFW_JR"
                                                    name="BQYKCJE_6YSFW_JR" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQSJKCJE_6YSFW_JR" value="0.00" v-model="json.BQSJKCJE_6YSFW_JR"
                                                    name="BQSJKCJE_6YSFW_JR" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QMYE_6YSFW_JR" value="0.00" v-model="json.QMYE_6YSFW_JR"
                                                    name="QMYE_6YSFW_JR" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx">&nbsp;5%征收率的项目</td>
                                            <td class="td_idx" align="center">5</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYSFWJSHJ_5YSFW" value="0.0"
                                                    name="BQYSFWJSHJ_5YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QCYE_5YSFW" value="0.0"
                                                    name="QCYE_5YSFW"
                                                    onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQFSE_5YSFW" value="0.00"
                                                   v-model="json.BQFSE_5YSFW" name="BQFSE_5YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYKCJE_5YSFW" value="0.00" v-model="json.BQYKCJE_5YSFW"
                                                    name="BQYKCJE_5YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQSJKCJE_5YSFW" value="0.00"
                                                   v-model="json.BQSJKCJE_5YSFW" name="BQSJKCJE_5YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QMYE_5YSFW" value="0.00" v-model="json.QMYE_5YSFW"
                                                    name="QMYE_5YSFW" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx">&nbsp;3%征收率的项目</td>
                                            <td class="td_idx" align="center">6</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYSFWJSHJ_3YSFW" value="0.0"
                                                    name="BQYSFWJSHJ_3YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QCYE_3YSFW" value="0.0" name="QCYE_3YSFW"
                                                    onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQFSE_3YSFW" value="0.00"
                                                   v-model="json.BQFSE_3YSFW" name="BQFSE_3YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYKCJE_3YSFW" value="0.00" v-model="json.BQYKCJE_3YSFW"
                                                    name="BQYKCJE_3YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQSJKCJE_3YSFW" value="0.00"
                                                   v-model="json.BQSJKCJE_3YSFW" name="BQSJKCJE_3YSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QMYE_3YSFW" value="0.00" v-model="json.QMYE_3YSFW"
                                                    name="QMYE_3YSFW" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx">&nbsp;免抵退税的项目</td>
                                            <td class="td_idx" align="center">7</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYSFWJSHJ_MDTYSFW" value="0.0"
                                                    name="BQYSFWJSHJ_MDTYSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QCYE_MDTYSFW" value="0.0" name="QCYE_MDTYSFW"
                                                    onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQFSE_MDTYSFW" value="0.00"
                                                   v-model="json.BQFSE_MDTYSFW" name="BQFSE_MDTYSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYKCJE_MDTYSFW" value="0.00" v-model="json.BQYKCJE_MDTYSFW"
                                                    name="BQYKCJE_MDTYSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQSJKCJE_MDTYSFW" value="0.00"
                                                   v-model="json.BQSJKCJE_MDTYSFW" name="BQSJKCJE_MDTYSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QMYE_MDTYSFW" value="0.00" v-model="json.QMYE_MDTYSFW"
                                                    name="QMYE_MDTYSFW" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_idx">&nbsp;免税的项目</td>
                                            <td class="td_idx" align="center">8</td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYSFWJSHJ_MSYSFW" value="0.0"
                                                    name="BQYSFWJSHJ_MSYSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QCYE_MSYSFW" value="0.0" name="QCYE_MSYSFW"
                                                    onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQFSE_MSYSFW" value="0.00"
                                                   v-model="json.BQFSE_MSYSFW" name="BQFSE_MSYSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="BQYKCJE_MSYSFW" value="0.00" v-model="json.BQYKCJE_MSYSFW"
                                                    name="BQYKCJE_MSYSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="money" id="BQSJKCJE_MSYSFW" value="0.00"
                                                   v-model="json.BQSJKCJE_MSYSFW" name="BQSJKCJE_MSYSFW" onchange="caculation();" />
                                            </td>
                                            <td>
                                                <input type="text" class="input_money_readonly" id="QMYE_MSYSFW" value="0.00" v-model="json.QMYE_MSYSFW"
                                                    name="QMYE_MSYSFW">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <!-- 陈明芳提出，由于业务部门要求“当第一列小于零时，对应栏次第五列必须等于零”这个规则会跟表格里面（5《=1且5《=4）会有冲突，建议跟小曾确认在表格底下添加规则提示，跟小曾确认后确定添加 20171102 -->
                                <table width="100%" align="center">
                                    <tr>
                                        <td align="left"><font color="red">温馨提示：当第1列的数值小于0时，对应栏次的第5列必须等于0！</font></td>
                                    </tr>
                                </table>
                                <!-- 基础数据隐藏域 -->
                                <div>

                                    <input type="hidden" value="0" name="ISWSSB">
                                    <!--该纳税人当期是否进行过申报-->
                                    <input type="hidden" name="TABLE_NAME" value="SBB_ZZS_YGZ_YBNSR_FB3">
                                    <input type="hidden" name="TABLE_ACTION" value="initial">
                                    <input type="hidden" name="NSRSBH" value="91350200MA2Y10EC4K">
                                    <input type="hidden" name="SSSQ_Q" value="20180801">
                                    <input type="hidden" name="SSSQ_Z" value="20180831">
                                </div>
                                <br />
                                <!-- 页面按钮 -->
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
                    </table>
                </form>
            </td>
        </tr>
    </table>

    <script type="text/javascript">

        var isCeNsrStr = "true";
        var pageAction = "initial";
    </script>

    <script>
        var result =<%=return_json%>

        //var BQYSFWJSHJ_6YSFW=  result["BQYSFWJSHJ_6YSFW"]
        //delete result["BQYSFWJSHJ_6YSFW"]

        new Vue({
            el: '#Table1',
            data: {
                json:result
            }
        })
</script>
</body>
</html>
