<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="querySblsxx.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.bsfw.nsrgl.querySblsxx" %>









<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <title>申报信息查询</title>
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

    <script type="text/javascript" >
        var result =<%=return_json%>
       
    </script>

    <script type="text/javascript" src="QueryAppend.js" ></script>

    <script language="javascript" type="text/javascript">
        function check() {
            layer.load(0, { shade: [0.8, '#8e8efe'], time: 60000 });
            document.getElementById("sblsxx").action = "/bsfw/nsrgl/querySblsxx.aspx";
            document.getElementById("sblsxx").submit();
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

        <select id="YhsZspm" style="display:none" >
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

    <div class="xf-container">
        <div xf-view=''>


            <div class="tableRightList">
                <ul>
                    <li style="margin-top: 15px;">
                        <img
                            src="/res/images/bsfwhall/bsfw_arrow_black.png" />申报信息查询</li>
                    <div class="searchResult">
                        <form name="sblsxx" id="sblsxx" action="" method="post">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td colspan="6" class="reaultTdTitle">查询条件</td>
                                </tr>
                                <tr>
                                    <td colspan="6" class="reaultTd">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                            <tr>
                                                <td width="50%" height="42">
                                                    <div align="right">查询起始时间：</div>
                                                </td>
                                                <td width="50%">
                                                    <input id="nsrxxVO['SRQQ']" name="nsrxxVO['SRRQQ']" value="" style="height: 24px; line-height: 24px;" xf-format="yyyy-MM-dd" class="xf-datetime" type="text" />
                                                    <font color="red" size="3">*</font>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div align="right">查询结束时间：</div>
                                                </td>
                                                <td width="50">
                                                    <input id="nsrxxVO['SRQZ']" name="nsrxxVO['SRRQZ']" value="" style="height: 24px; line-height: 24px;" xf-format="yyyy-MM-dd" class="xf-datetime" type="text" />
                                                    <font color="red" size="3">*</font>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colspan="2" align="center">
                                                    <input type="button" name="查询" value="查询" onclick="check()" class="subbtn" />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </form>
                        <div style="overflow-x: auto; overflow-y: auto; height: 480px;">
                            <table id="ShowSearchResult" width="100%" border="0" cellspacing="0" cellpadding="0" class="searchResult2">
                                <tr>
                                    <td colspan="7" class="reaultTdTitle">查询结果</td>
                                </tr>
                                <tr style="background: #efefef;">
                                    <td width="30">
                                        <div align="center">序号</div>
                                    </td>
                                    <td width="100">
                                        <div align="center">所属时期</div>
                                    </td>
                                    <td width="70">
                                        <div align="center">税 种</div>
                                    </td>
                                    <td width="60">
                                        <div align="center">征收品目</div>
                                        <td width="60">
                                            <div align="center">应税项收入总额</div>
                                        </td>
                                        <td width="60">
                                            <div align="center">应纳税额</div>
                                        </td>
                                        <td width="60">
                                            <div align="center">应补（退）税额</div>

                                        </td>
                                </tr>


                                <tr>
                                    <td align="center">1
                                    </td>

                                    <td align="center">2018-07-01
			               		至
			               








2018-07-31
                                    </td>
                                    <td align="center">增值税
                                    </td>
                                    <td align="center">其他现代服务
                                    </td>
                                    <td align="center">0.0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">2
                                    </td>

                                    <td align="center">2018-07-01
			               		至
			               








2018-07-31
                                    </td>
                                    <td align="center">增值税
                                    </td>
                                    <td align="center">商业(17%、16%)
                                    </td>
                                    <td align="center">17012.2
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">3
                                    </td>

                                    <td align="center">2018-04-01
			               		至
			               








2018-06-30
                                    </td>
                                    <td align="center">企业所得税
                                    </td>
                                    <td align="center">应纳税所得额
                                    </td>
                                    <td align="center">252600.16
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">4
                                    </td>

                                    <td align="center">2018-06-01
			               		至
			               








2018-06-30
                                    </td>
                                    <td align="center">增值税
                                    </td>
                                    <td align="center">其他现代服务
                                    </td>
                                    <td align="center">0.0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">5
                                    </td>

                                    <td align="center">2018-06-01
			               		至
			               








2018-06-30
                                    </td>
                                    <td align="center">增值税
                                    </td>
                                    <td align="center">商业(17%、16%)
                                    </td>
                                    <td align="center">0.0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">6
                                    </td>

                                    <td align="center">2018-05-01
			               		至
			               








2018-05-31
                                    </td>
                                    <td align="center">增值税
                                    </td>
                                    <td align="center">其他现代服务
                                    </td>
                                    <td align="center">0.0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">7
                                    </td>

                                    <td align="center">2018-05-01
			               		至
			               








2018-05-31
                                    </td>
                                    <td align="center">增值税
                                    </td>
                                    <td align="center">商业(17%、16%)
                                    </td>
                                    <td align="center">7760.34
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">8
                                    </td>

                                    <td align="center">2018-04-01
			               		至
			               








2018-04-30
                                    </td>
                                    <td align="center">增值税
                                    </td>
                                    <td align="center">其他现代服务
                                    </td>
                                    <td align="center">0.0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">9
                                    </td>

                                    <td align="center">2018-04-01
			               		至
			               








2018-04-30
                                    </td>
                                    <td align="center">增值税
                                    </td>
                                    <td align="center">商业(17%、16%)
                                    </td>
                                    <td align="center">95806.84
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">10
                                    </td>

                                    <td align="center">2018-07-01
			               		至
			               








2018-07-31
                                    </td>
                                    <td align="center">地方教育附加
                                    </td>
                                    <td align="center">增值税地方教育附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">11
                                    </td>

                                    <td align="center">2018-07-01
			               		至
			               








2018-07-31
                                    </td>
                                    <td align="center">教育费附加
                                    </td>
                                    <td align="center">增值税教育费附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">12
                                    </td>

                                    <td align="center">2018-07-01
			               		至
			               








2018-07-31
                                    </td>
                                    <td align="center">城市维护建设税
                                    </td>
                                    <td align="center">市区（增值税附征）
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">13
                                    </td>

                                    <td align="center">2017-01-01
			               		至
			               








2017-12-31
                                    </td>
                                    <td align="center">残疾人就业保障金
                                    </td>
                                    <td align="center">残疾人就业保障金
                                    </td>
                                    <td align="center">211.28
                                    </td>
                                    <td align="center">211.28
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">14
                                    </td>

                                    <td align="center">2018-07-01
			               		至
			               








2018-07-31
                                    </td>
                                    <td align="center">其他收入
                                    </td>
                                    <td align="center">工会筹备金
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">15
                                    </td>

                                    <td align="center">2018-07-01
			               		至
			               








2018-07-31
                                    </td>
                                    <td align="center">印花税
                                    </td>
                                    <td align="center">购销合同
                                    </td>
                                    <td align="center">19734.16
                                    </td>
                                    <td align="center">5.92
                                    </td>
                                    <td align="center">5.9
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">16
                                    </td>

                                    <td align="center">2018-06-01
			               		至
			               








2018-06-30
                                    </td>
                                    <td align="center">印花税
                                    </td>
                                    <td align="center">购销合同
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">17
                                    </td>

                                    <td align="center">2018-06-01
			               		至
			               








2018-06-30
                                    </td>
                                    <td align="center">教育费附加
                                    </td>
                                    <td align="center">增值税教育费附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">18
                                    </td>

                                    <td align="center">2018-06-01
			               		至
			               








2018-06-30
                                    </td>
                                    <td align="center">地方教育附加
                                    </td>
                                    <td align="center">增值税地方教育附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">19
                                    </td>

                                    <td align="center">2018-06-01
			               		至
			               








2018-06-30
                                    </td>
                                    <td align="center">城市维护建设税
                                    </td>
                                    <td align="center">市区（增值税附征）
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">20
                                    </td>

                                    <td align="center">2018-06-01
			               		至
			               








2018-06-30
                                    </td>
                                    <td align="center">其他收入
                                    </td>
                                    <td align="center">工会筹备金
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">21
                                    </td>

                                    <td align="center">2018-05-01
			               		至
			               








2018-05-31
                                    </td>
                                    <td align="center">地方教育附加
                                    </td>
                                    <td align="center">增值税地方教育附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">22
                                    </td>

                                    <td align="center">2018-05-01
			               		至
			               








2018-05-31
                                    </td>
                                    <td align="center">城市维护建设税
                                    </td>
                                    <td align="center">市区（增值税附征）
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">23
                                    </td>

                                    <td align="center">2018-05-01
			               		至
			               








2018-05-31
                                    </td>
                                    <td align="center">教育费附加
                                    </td>
                                    <td align="center">增值税教育费附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">24
                                    </td>

                                    <td align="center">2018-05-01
			               		至
			               








2018-05-31
                                    </td>
                                    <td align="center">印花税
                                    </td>
                                    <td align="center">购销合同
                                    </td>
                                    <td align="center">7760.34
                                    </td>
                                    <td align="center">2.33
                                    </td>
                                    <td align="center">2.3
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">25
                                    </td>

                                    <td align="center">2018-05-01
			               		至
			               








2018-05-31
                                    </td>
                                    <td align="center">其他收入
                                    </td>
                                    <td align="center">工会筹备金
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">26
                                    </td>

                                    <td align="center">2018-04-01
			               		至
			               








2018-04-30
                                    </td>
                                    <td align="center">印花税
                                    </td>
                                    <td align="center">购销合同
                                    </td>
                                    <td align="center">112094
                                    </td>
                                    <td align="center">33.63
                                    </td>
                                    <td align="center">33.6
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">27
                                    </td>

                                    <td align="center">2018-04-01
			               		至
			               








2018-04-30
                                    </td>
                                    <td align="center">其他收入
                                    </td>
                                    <td align="center">工会筹备金
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">28
                                    </td>

                                    <td align="center">2018-04-01
			               		至
			               








2018-04-30
                                    </td>
                                    <td align="center">地方教育附加
                                    </td>
                                    <td align="center">增值税地方教育附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">29
                                    </td>

                                    <td align="center">2018-04-01
			               		至
			               








2018-04-30
                                    </td>
                                    <td align="center">教育费附加
                                    </td>
                                    <td align="center">增值税教育费附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">30
                                    </td>

                                    <td align="center">2018-04-01
			               		至
			               








2018-04-30
                                    </td>
                                    <td align="center">城市维护建设税
                                    </td>
                                    <td align="center">市区（增值税附征）
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">31
                                    </td>

                                    <td align="center">2018-03-01
			               		至
			               








2018-03-31
                                    </td>
                                    <td align="center">印花税
                                    </td>
                                    <td align="center">购销合同
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">32
                                    </td>

                                    <td align="center">2018-03-01
			               		至
			               








2018-03-31
                                    </td>
                                    <td align="center">其他收入
                                    </td>
                                    <td align="center">工会筹备金
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">33
                                    </td>

                                    <td align="center">2018-01-01
			               		至
			               








2018-03-31
                                    </td>
                                    <td align="center">教育费附加
                                    </td>
                                    <td align="center">增值税教育费附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">34
                                    </td>

                                    <td align="center">2018-01-01
			               		至
			               








2018-03-31
                                    </td>
                                    <td align="center">城市维护建设税
                                    </td>
                                    <td align="center">市区（增值税附征）
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>

                                <tr>
                                    <td align="center">35
                                    </td>

                                    <td align="center">2018-01-01
			               		至
			               








2018-03-31
                                    </td>
                                    <td align="center">地方教育附加
                                    </td>
                                    <td align="center">增值税地方教育附加
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>
                                    <td align="center">0
                                    </td>

                                </tr>





                            </table>
                        </div>
                    </div>
                </ul>
            </div>






        </div>
    </div>
</div>
<!-- app -->


</html>
