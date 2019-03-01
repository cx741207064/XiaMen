<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="getsblsxxInitDate.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.bsfw.nsrgl.getsblsxxInitDate" %>

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
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="searchResult2">
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
