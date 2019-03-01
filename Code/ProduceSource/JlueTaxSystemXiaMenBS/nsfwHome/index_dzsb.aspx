<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index_dzsb.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.nsfwHome.index_dzsb" %>

<!DOCTYPE html>
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
    <meta name="decorator" content="blank" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript" language="javascript" src="/res/js/opener.js"></script>
    <link href="/res/css/css.css" rel="stylesheet" type="text/css" />
    <script src="/res/menu/js/jquery-1.10.2.js"></script>
    <script src="/res/otp4/js/lib/layer/layer.js" type="text/javascript"></script>
</head>
<body>
    <input type="hidden" id="wsbs-home_hidden_login_id" value="91350200MA2Y10EC4K" />
    <input type="hidden" id="wsbs-home_hidden_djxh" value="10123502010000057149" />
    <!-- 二级菜单  -->
    <table width="99%" cellspacing="0" cellpadding="0">
        <tr>
            <td width="4" rowspan="3" valign="top" bgcolor="#e3ecf4" id="menu_snd_td_left"></td>
            <td width="185" rowspan="3" valign="top" bgcolor="white"
                id="menu_snd_td">
                <table width="185" cellspacing="0" cellpadding="0"
                    class="menu_sec" id="menu_sec_dzsb">
                    <tr>
                        <td align="center" bgcolor="#e3ecf4" style="padding-top: 6px;">
                            <img id="menu_sec_top_img"
                                src="/res/images/caidan_dzsb.png" width="185" height="30" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table id="Table1" width="100%"
                                align="center" cellpadding="0" cellspacing="5">
                                <tr>
                                    <!-- 有效 -->
                                    <!-- 叶子节点才有可能有三级菜单 -->
                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/jsdzsb/fjssb/index.aspx','城建税及附加税费申报')">城建税及附加税费申报
                                    </td>
                                </tr>
                                <tr>
                                    <!-- 有效 -->
                                    <!-- 叶子节点才有可能有三级菜单 -->
                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/jsdzsb/yhssb/index.aspx','印花税申报')">印花税申报
                                    </td>
                                </tr>
                            </table>
                            <script type="text/javascript">
                                //为一级菜单绑定二级菜单
                                $("#dzsb").click(function () {
                                    $("#menu_snd_td_left").show();
                                    $("#menu_snd_td").show();
                                    $(".menu_sec").hide();
                                    $("#menu_sec_dzsb").show();
                                });
                            </script>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>




                <table width="185" cellspacing="0" cellpadding="0" style="display: none;"
                    class="menu_sec" id="menu_sec_bbbs">



                    <tr>
                        <td align="center" bgcolor="#e3ecf4" style="padding-top: 6px;">
                            <img id="Img1"
                                src="/res/images/caidan_bbbs.png" width="185" height="30" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table id="Table2" width="100%"
                                align="center" cellpadding="0" cellspacing="5">




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/bbgj/table_bs/list_next.do','表报报送')">表报报送
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/bbbs/qgjmstjdcNsr_login.do','减免税调查')">减免税调查
                                    </td>












                                </tr>

                            </table>
                            <script type="text/javascript">
                                //为一级菜单绑定二级菜单
                                $("#bbbs").click(function () {
                                    $("#menu_snd_td_left").show();
                                    $("#menu_snd_td").show();
                                    $(".menu_sec").hide();
                                    $("#menu_sec_bbbs").show();
                                });
                            </script>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>




                <table width="185" cellspacing="0" cellpadding="0" style="display: none;"
                    class="menu_sec" id="menu_sec_sbyw">



                    <tr>
                        <td align="center" bgcolor="#e3ecf4" style="padding-top: 6px;">
                            <img id="Img2"
                                src="/res/images/caidan_sbyw.png" width="185" height="30" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table id="Table3" width="100%"
                                align="center" cellpadding="0" cellspacing="5">




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->


                                    <tr>
                                        <td align="left" class="caidan_05">单位社保
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">
                                            <table width="162" align="right" cellpadding="0" cellspacing="3">

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/dzsb/sbfsb/sbf_index.do','社保费申报','单位社保')">社保费申报
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/sbjlcxhzf.jsp','社保费申报记录查询和作废','单位社保')">社保费申报记录查询和作废
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/jsdzsb/dzsbsy/skjn.jsp','税费缴纳','单位社保')">税费缴纳
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/zysb.jsp','单位人员增员申报','单位社保')">单位人员增员申报
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/jysb.jsp','单位人员减员申报','单位社保')">单位人员减员申报
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/jfjs.jsp','年度缴费基数申报','单位社保')">年度缴费基数申报
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/xxbg.jsp','参保人员信息变更','单位社保')">参保人员信息变更
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/jfjsbg.jsp','社保缴费基数变更 ','单位社保')">社保缴费基数变更 
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/zmcl.jsp','社保账目处理','单位社保')">社保账目处理
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/sbf/dzdcx/index.do','社保费对账单查询','单位社保')">社保费对账单查询
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/sbzmcl.jsp','社保证明查询打印','单位社保')">社保证明查询打印
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/zjxz.jsp','增加参保险种','单位社保')">增加参保险种
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                                <tr>

                                                    <!-- 有效 -->



                                                    <td align="left" style="padding-left: 10px;" class="caidan_h12 caidan_h12_blue" onclick="showPage3('/views/sbf/sbfsy/dwsb/xxcx.jsp','社保信息查询','单位社保')">社保信息查询
																								
																							
																						
																						
																						
																					
                                                    </td>
                                                </tr>

                                            </table>
                                        </td>
                                    </tr>









                                </tr>

                            </table>
                            <script type="text/javascript">
                                //为一级菜单绑定二级菜单
                                $("#sbyw").click(function () {
                                    $("#menu_snd_td_left").show();
                                    $("#menu_snd_td").show();
                                    $(".menu_sec").hide();
                                    $("#menu_sec_sbyw").show();
                                });
                            </script>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>




                <table width="185" cellspacing="0" cellpadding="0" style="display: none;"
                    class="menu_sec" id="menu_sec_sydj">



                    <tr>
                        <td align="center" bgcolor="#e3ecf4" style="padding-top: 6px;">
                            <img id="Img3"
                                src="/res/images/caidan_sydj.png" width="185" height="30" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table id="Table4" width="100%"
                                align="center" cellpadding="0" cellspacing="5">




                                <tr>

                                    <!-- 有效 -->

                                    <!-- 是否叶子节点，叶子节点左侧收缩，非叶子节点左侧不收缩 -->



                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage2('/views/jsdzsb/sydjsy/tdsy.jsp','土地税源管理')">土地税源管理
                                    </td>









                                </tr>




                                <tr>

                                    <!-- 有效 -->

                                    <!-- 是否叶子节点，叶子节点左侧收缩，非叶子节点左侧不收缩 -->



                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage2('/views/jsdzsb/sydjsy/bdcxmgl.jsp','不动产项目管理')">不动产项目管理
                                    </td>









                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/views/jsdzsb/sydjsy/zlfsygl.jsp','增量房税源管理')">增量房税源管理
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->

                                    <!-- 是否叶子节点，叶子节点左侧收缩，非叶子节点左侧不收缩 -->



                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage2('/views/jsdzsb/sydjsy/fcsygl.jsp','房产税源管理')">房产税源管理
                                    </td>









                                </tr>




                                <tr>

                                    <!-- 有效 -->

                                    <!-- 是否叶子节点，叶子节点左侧收缩，非叶子节点左侧不收缩 -->



                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage2('/views/jsdzsb/sydjsy/syxxcx.jsp','税源信息查询（历史数据）')">税源信息查询（历史数据）
                                    </td>









                                </tr>

                            </table>
                            <script type="text/javascript">
                                //为一级菜单绑定二级菜单
                                $("#sydj").click(function () {
                                    $("#menu_snd_td_left").show();
                                    $("#menu_snd_td").show();
                                    $(".menu_sec").hide();
                                    $("#menu_sec_sydj").show();
                                });
                            </script>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>




                <table width="185" cellspacing="0" cellpadding="0" style="display: none;"
                    class="menu_sec" id="menu_sec_sssq">



                    <tr>
                        <td align="center" bgcolor="#e3ecf4" style="padding-top: 6px;">
                            <img id="Img4"
                                src="/res/images/caidan_sssq.png" width="185" height="30" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table id="Table5" width="100%"
                                align="center" cellpadding="0" cellspacing="5">




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/syxy.do?forward=WZPW0081','行政许可申请-延期申报')">行政许可申请-延期申报
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/syxy.do?forward=WZPW0001','行政许可申请-延期缴纳税款')">行政许可申请-延期缴纳税款
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/syxy.do?forward=WZDS0030','行政许可申请-变更纳税定额')">行政许可申请-变更纳税定额
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/syxy.do?forward=WZDJ0048','行政许可申请-企业所得税预缴方式认定')">行政许可申请-企业所得税预缴方式认定
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/otp4query/List.do?id=0307','备案事项享受减免明细查询')">备案事项享受减免明细查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->

                                    <!-- 是否叶子节点，叶子节点左侧收缩，非叶子节点左侧不收缩 -->



                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage2('/views/pw/ssyhsq.jsp','税收优惠申请')">税收优惠申请
                                    </td>









                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/syxy.do?forward=WZTS0001','误缴退税申请')">误缴退税申请
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/dzyx/dzqzcy.do','电子签章查询')">电子签章查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/syxy.do?forward=WZSB0001','社保退费申请')">社保退费申请
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/dzyx/dzyxquery.do','电子影像查询')">电子影像查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/newPw.do?forward=WZDZ0009','个税代扣代缴手续费申请')">个税代扣代缴手续费申请
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->

                                    <!-- 是否叶子节点，叶子节点左侧收缩，非叶子节点左侧不收缩 -->



                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage2('/sssq/swdjxxwh/swdjtmcx.do','税务登记信息维护和条码打印')">税务登记信息维护和条码打印
                                    </td>









                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/sssq/swdjxxwh/swdjxxview.do','税务登记信息查询')">税务登记信息查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/pwlr.do','涉税申请办理情况查询')">涉税申请办理情况查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/pwsyxy.do','数字证书使用协议查询')">数字证书使用协议查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/swdj/bgswdj.do','变更税务登记')">变更税务登记
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/pw/syxy.do?forward=WZDKFP01','代开增值税发票申报单')">代开增值税发票申报单
                                    </td>












                                </tr>

                            </table>
                            <script type="text/javascript">
                                //为一级菜单绑定二级菜单
                                $("#sssq").click(function () {
                                    $("#menu_snd_td_left").show();
                                    $("#menu_snd_td").show();
                                    $(".menu_sec").hide();
                                    $("#menu_sec_sssq").show();
                                });
                            </script>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>




                <table width="185" cellspacing="0" cellpadding="0" style="display: none;"
                    class="menu_sec" id="menu_sec_dzyj">



                    <tr>
                        <td align="center" bgcolor="#e3ecf4" style="padding-top: 6px;">
                            <img id="Img5"
                                src="/res/images/caidan_dzyj.png" width="185" height="30" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table id="Table6" width="100%"
                                align="center" cellpadding="0" cellspacing="5">


                                <input type="hidden" id="dzyj0101" value="dzyj0101" />



                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/mail/index.do','电子邮件')">电子邮件
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/mail/hisindex.do','历史电子邮件')">历史电子邮件
                                    </td>












                                </tr>

                            </table>
                            <script type="text/javascript">
                                //为一级菜单绑定二级菜单
                                $("#dzyj").click(function () {
                                    $("#menu_snd_td_left").show();
                                    $("#menu_snd_td").show();
                                    $(".menu_sec").hide();
                                    $("#menu_sec_dzyj").show();
                                });
                            </script>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>




                <table width="185" cellspacing="0" cellpadding="0" style="display: none;"
                    class="menu_sec" id="menu_sec_zhcx">



                    <tr>
                        <td align="center" bgcolor="#e3ecf4" style="padding-top: 6px;">
                            <img id="Img6"
                                src="/res/images/caidan_zhcx.png" width="185" height="30" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table id="Table7" width="100%"
                                align="center" cellpadding="0" cellspacing="5">




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/otp4query/List.do?id=0302','税费种认定查询')">税费种认定查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/otp4query/List.do?id=0306','银行帐号登记情况查询')">银行帐号登记情况查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/dzsb/skjn/skjn_rk_index.do','税款缴纳入库情况查询')">税款缴纳入库情况查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/dzsb/jasbrkqx/jasbrkqx_index.do','建安项目入库情况查询')">建安项目入库情况查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/dzsb/skjn/dzjkprint_query.do',' 打印电子缴款凭证查询')">打印电子缴款凭证查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/otp4query/List.do?id=0303','申报记录查询')">申报记录查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/otp4query/List.do?id=0399','个税明细申报历史数据查询')">个税明细申报历史数据查询
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->

                                    <!-- 是否叶子节点，叶子节点左侧收缩，非叶子节点左侧不收缩 -->



                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage2('/views/jsdzsb/dzsbsy/lssjcx.jsp','历史数据查询')">历史数据查询
                                    </td>









                                </tr>




                                <tr>

                                    <!-- 有效 -->

                                    <!-- 是否叶子节点，叶子节点左侧收缩，非叶子节点左侧不收缩 -->



                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage2('/views/jsdzsb/dzsbsy/qysdscx.jsp','企业所得税申报查询')">企业所得税申报查询
                                    </td>









                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/ybwszm/print/wszm.do','一般完税证明查询打印')">一般完税证明查询打印
                                    </td>












                                </tr>

                            </table>
                            <script type="text/javascript">
                                //为一级菜单绑定二级菜单
                                $("#zhcx").click(function () {
                                    $("#menu_snd_td_left").show();
                                    $("#menu_snd_td").show();
                                    $(".menu_sec").hide();
                                    $("#menu_sec_zhcx").show();
                                });
                            </script>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>




                <table width="185" cellspacing="0" cellpadding="0" style="display: none;"
                    class="menu_sec" id="menu_sec_qtgn">



                    <tr>
                        <td align="center" bgcolor="#e3ecf4" style="padding-top: 6px;">
                            <img id="Img7"
                                src="/res/images/caidan_qtgn.png" width="185" height="30" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table id="Table8" width="100%"
                                align="center" cellpadding="0" cellspacing="5">




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/views/login/xgmm_fqz.jsp','修改密码')">修改密码
                                    </td>












                                </tr>




                                <tr>

                                    <!-- 有效 -->


                                    <!-- 叶子节点才有可能有三级菜单 -->









                                    <td align="left" class="caidan_01 caidan_h12_blue" onclick="showPage('/nsrxx/qy/nsrxxgl.do','纳税人学堂')">纳税人学堂
                                    </td>












                                </tr>

                            </table>
                            <script type="text/javascript">
                                //为一级菜单绑定二级菜单
                                $("#qtgn").click(function () {
                                    $("#menu_snd_td_left").show();
                                    $("#menu_snd_td").show();
                                    $(".menu_sec").hide();
                                    $("#menu_sec_qtgn").show();
                                });
                            </script>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>




                <table width="185" cellspacing="0" cellpadding="0" style="display: none;"
                    class="menu_sec" id="menu_sec_home">



                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>




                <table width="185" cellspacing="0" cellpadding="0" style="display: none;"
                    class="menu_sec" id="menu_sec_guoshui">



                    <tr>
                        <td align="center" style="padding-top: 5px;"></td>
                    </tr>
                </table>

            </td>

            <td width="4" rowspan="3" valign="top" bgcolor="#e3ecf4" id="menu_snd_td_right"></td>
            <td width="5" rowspan="3" class="up_blue_bg_color" style="display: none;">
                <a href="#" onclick="toggle('menu_snd_td');toggle('menu_snd_td_left');toggle('menu_snd_td_right');changeArrow();">
                    <img src="/res/images/left.jpg" width="5" height="149" border="0" id="Image35" />
                </a>
            </td>
            <td class="gray_bg_color" valign="top">
                <img src="/res/images/position.jpg" style="margin-left: 10px;" />
                当前位置：
		
			<a id="firstMenuName" style="text-decoration: none">电子申报
            </a>

                <a id="senMenuName" href="#" style="text-decoration: none;" target="main" onclick="clear34();"></a>
                <a id="thirdMenuName" href="#" style="text-decoration: none;" target="main" onclick="clear4()"></a>
                <a id="fouthMenuName" href="#" style="text-decoration: none;" target="main"></a>
                <br>
                <div style="width: 100%; height: 100%; margin-left: 10px;">
                    <div class="content">
                        <div style="height: 450px;">
                            <div class="loading" id="loading"></div>
                            <iframe frameborder="0" style="min-height: 450px; max-height: 450px; width: 100%; height: 450px;" name="main" id="main" src=""></iframe>
                        </div>
                    </div>
                </div>

                <br>
            </td>
        </tr>
    </table>





    <script type="text/javascript">
        var main = document.getElementById("main");
        var loading = document.getElementById("loading");
        //加载页面
        function showPage(url, menu_name) {
            loading.style.width = "100%";
            loading.style.display = "";
            $("#senMenuName").attr("href", url);
            $("#senMenuName").html("->" + menu_name);
            $("#thirdMenuName").html("");
            //加载页面
            if (menu_name == '纳税人学堂') {
                window.open('http://81.24.21.213:7001/nsktadmin/index.jsp');
            } else {
                $("#main").prop("src", url);
            }
            $(".caidan_01").removeClass("caidan_02");
            $(".caidan_01").removeClass("caidan_h12_w");
            try {
                var event = $.event.fix(event || window.event);
                //更改样式
                var target = event.target;
                target = $(target);
                while (target.prop("tagName") && target.prop("tagName") != "TD") {
                    target = target.parent();
                }
                target.addClass("caidan_02");
                target.addClass("caidan_h12_w");
            } catch (e) { }
            toggle('menu_snd_td');
            toggle('menu_snd_td_left');
            toggle('menu_snd_td_right');
            changeArrow();

            setTimeout("cancelLoad()", 3000);
        }
        //加载界面不收缩
        function showPage2(url, menu_name) {
            if (menu_name == '财务报表接口授权申请') {
                window.open(url);
                return;
            }

            loading.style.width = "80%";
            loading.style.display = "";
            $("#senMenuName").html("->" + menu_name);
            $("#senMenuName").attr("href", url);
            $("#thirdMenuName").html("");
            try {
                var event = $.event.fix(event || window.event);
                //加载页面
                $("#main").prop("src", url);
                //更改样式
                $(".caidan_01").removeClass("caidan_02");
                $(".caidan_01").removeClass("caidan_h12_w");
                var target = event.target;
                target = $(target);
                while (target.prop("tagName") && target.prop("tagName") != "TD") {
                    target = target.parent();
                }
                target.addClass("caidan_02");
                target.addClass("caidan_h12_w");
            } catch (e) { }
            setTimeout("cancelLoad()", 3000);
        }
        //三级菜单点击收缩
        function showPage3(url, menu_name, senMenuName) {
            clear34();
            loading.style.width = "100%";
            loading.style.display = "";
            $("#senMenuName").html("->" + senMenuName);
            $("#senMenuName").attr("href", url);

            $("#thirdMenuName").html("->" + menu_name);
            $("#thirdMenuName").attr("href", url);
            try {
                //加载页面
                $("#main").prop("src", url);
                var target = event.target;
                target = $(target);
                //更改样式
                while (target.prop("tagName") && target.prop("tagName") != "TD") {
                    target = target.parent();
                }
            } catch (e) { }
            toggle('menu_snd_td');
            toggle('menu_snd_td_left');
            toggle('menu_snd_td_right');

            setTimeout("cancelLoad()", 3000);
        }
        //子页面点击收缩
        function showPage4(url, menu_name) {
            clear34();
            loading.style.width = "995px";
            loading.style.display = "";
            $("#thirdMenuName").attr("href", url);
            $("#thirdMenuName").html("->" + menu_name);
            try {
                //加载页面
                $("#main").prop("src", url);
                toggle('menu_snd_td');
                toggle('menu_snd_td_left');
                toggle('menu_snd_td_right')
                changeArrow();
            } catch (e) { }
            setTimeout("cancelLoad()", 3000);
        }
        //三级菜单子页面点击收缩
        function showPage5(url, menu_name) {
            clear4();
            loading.style.width = "100%";
            loading.style.display = "";
            $("#fouthMenuName").attr("href", url);
            $("#fouthMenuName").html("->" + menu_name);
            try {
                //加载页面
                $("#main").prop("src", url);
                toggle('menu_snd_td');
                toggle('menu_snd_td_left');
                toggle('menu_snd_td_right')
                changeArrow();
            } catch (e) { }
            setTimeout("cancelLoad()", 3000);
        }
        function clear34() {
            $("#thirdMenuName").html("");
            $("#fouthMenuName").html("");
        }
        function clear4() {
            $("#fouthMenuName").html("");
        }
        function cancelLoad() {
            loading.style.display = "none";
        }
        /*自动宽度*/
        function frameLoad() {
            var mainheight = $(this).contents().find("body").height() + 30;
            $(this).height(mainheight);

            loading.style.display = "none";
        };
        /*改变箭头方向*/
        function changeArrow() {
            var display = $("#menu_snd_td").css('display');
            if ($("#menu_snd_td").is(":hidden")) {
                $("#Image35").attr("src", "/res/images/right.jpg");
            } else {
                $("#Image35").attr("src", "/res/images/left.jpg");
            }
        };
        //onload
        $(function () {

            $("#main").on("load", frameLoad);
            //去除不必要跳转
            //if (true) {
            //    $("#main").prop("src", "/views/menusm/dzsb.jsp");
            //} else {
            //    $("#main").prop("src", "");
            //}


            if (false) {
                var mailid = '';
                var dzyjObj = $('#dzyj0101');
                var dzyjObjVal = "";
                if (dzyjObj) {
                    dzyjObjVal = dzyjObj.val();
                }
                if (mailid != '') {
                    showPage('/mail/showmail.do?folder_id=1&mail_id=', '电子邮件', '电子邮件');
                } else if (dzyjObjVal) {
                    showPage('/mail/index.do', '电子邮件');
                }

            }
            if (false) {
                showPage('/dzsb/nspgyctx/nspgyctx.do?b_query=true', '纳税评估异常提醒');
            }
            if (false) {
                showPage('/jsdzsb/nspgyctx/nspgyctx.do?b_query=true', '新纳税评估异常提醒');
            }
            if (false) {
                showPage3('/dzsb/sbfsb/sbf_index.do', '社保费申报', '单位社保');
            }
            if (false) {

            }
            if (false) {
                window.parent.showPage4('/jsdzsb/wsskjn/wsskjn_index.do', '银联缴税，银行端缴税');
            }
            var nsr_id_p = $("#wsbs-home_hidden_login_id").val();

            if (false) {
                layer.load(3, { shade: [0.5, '#8e8efe', true] });
                alert("检测到您的账号未进行激活，请您进行激活！");
                closeOpener();
                window.open('/login/activate.do', '_self', 'height=100, width=400, top=0,left=0, toolbar=no, menubar=no, scrollbars=no, resizable=1,location=no, status=no, titlebar=0', fullscreen = 3);
            }
            if (false) {

                $("#main").prop("src", "/pw/swdj/smbsryxxcj.do");
                closeOpener();

            }
            //加载页面
            $(".caidan_05").click(function () {
                $(".caidan_03").parent().next('tr').slideUp();
                $(".caidan_03").attr("class", "caidan_05");
                var $tr = $(this).parent().next('tr');
                if ($tr.is(':visible')) {
                    $tr.slideUp();
                    $(this).attr("class", "caidan_05");
                } else {
                    $tr.slideDown();
                    $(this).attr("class", "caidan_03");;
                }
            });
            if ("" == 'main') {
                showPage('/otp4query/List.do?id=0301', '税费种认定申报情况查询');
            }

            var menu_item_id = getQueryString("menu_item_id");

            var lhpturl = '/jsdzsb/fjssb/index.aspx';

            var lhptMenuName = '城建税及附加税费申报';

            if (menu_item_id == "dzsb_0106") {
                lhpturl = '/jsdzsb/yhssb/index.aspx';
                lhptMenuName = '印花税申报';
            }

            if (lhpturl != '' && lhpturl != 'null') {
                showPage(lhpturl, lhptMenuName);
            }
        });

        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }

        //
        function toggle(xx) { }
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
