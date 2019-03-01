<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="queryNsrjbxx.aspx.cs" Inherits="JlueTaxSystemXiaMenBS.bsfw.nsrgl.queryNsrjbxx" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <title>纳税人基本信息查询</title>
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" type="text/css" href="/res/css/onlineTax.css" />

    <script src="../../js/initinfo.js" ></script>

    <script type="text/javascript">
        window.onload = function () {
            layer.load(0, { shade: [0.8, '#8e8efe'], time: 1000 });
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
                        <img src="/res/images/bsfwhall/bsfw_arrow_black.png" />纳税人基本信息查询</li>
                    <div class="searchResult">

                        <div style="overflow-x: auto; overflow-y: auto; height: 630px; width: 100%;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="170" class="tdLeft">
                                        <div align="right">纳税人识别号：</div>
                                    </td>
                                    <td width="482" class="tdRight" id="NSRSBH"></td>
                                </tr>
                                <tr>
                                    <td class="tdLeft">
                                        <div align="right">社会信用代码：</div>
                                    </td>
                                    <td class="tdRight">913205829787989</td>
                                </tr>
                                <tr>
                                    <td class="tdLeft">
                                        <div align="right">纳税人名称：</div>
                                    </td>
                                    <td class="tdRight" id="NSRMC"></td>
                                </tr>
                                <td class="tdButtomLeft">
                                    <div align="right">纳税人状态：</div>
                                </td>
                                <td class="tdButtomRight">正常&nbsp;</td>
                                </tr>
			  <tr>
                  <td class="tdLeft">
                      <div align="right">法人代表名称：</div>
                  </td>
                  <td class="tdRight" id="FDDB"></td>
              </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">登记注册类型：</div>
                                    </td>
                                    <td class="tdButtomRight" id="DJZCLX"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">注册地址：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">注册地址邮编：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">注册地联系电话：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>


                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">生产经营地址：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">生产经营地址邮编：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">生产经营地联系电话：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>


                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">注册资本：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">注册资本币种：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">行业：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">生产经营范围（主营）：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">隶属关系：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">主管税务机关：</div>
                                    </td>
                                    <td class="tdButtomRight">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">工商机关名称：</div>
                                    </td>
                                    <td class="tdButtomRight">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">营业执照名称：</div>
                                    </td>
                                    <td class="tdButtomRight">营业执照&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">会计报表种类：</div>
                                    </td>
                                    <td class="tdButtomRight">小企业会计准则&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">从业人数：</div>
                                    </td>
                                    <td class="tdButtomRight">1&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">外籍人数：</div>
                                    </td>
                                    <td class="tdButtomRight">0&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">开业日期：</div>
                                    </td>
                                    <td class="tdButtomRight">2017-02-23&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">生产经营期限起：</div>
                                    </td>
                                    <td class="tdButtomRight">2017-02-23&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">生产经营期限止：</div>
                                    </td>
                                    <td class="tdButtomRight">2067-02-22&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">社保参保日期：</div>
                                    </td>
                                    <td class="tdButtomRight">2017-03-14&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">核准税务登记日期：</div>
                                    </td>
                                    <td class="tdButtomRight">2017-03-14&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdLeft">
                                        <div align="right">法人：</div>
                                    </td>
                                    <td class="tdRight">陈法人</td>
                                </tr>
                                <tr>
                                    <td class="tdLeft">
                                        <div align="right">法人证件名称：</div>
                                    </td>
                                    <td class="tdRight">居民身份证&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdLeft">
                                        <div align="right">法人证件号码：</div>
                                    </td>
                                    <td class="tdRight" id="FDID"></td>
                                </tr>

                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">法定代表人固定电话：</div>
                                    </td>
                                    <td class="tdButtomRight"></td>
                                </tr>

                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">法定代表人移动电话：</div>
                                    </td>
                                    <td class="tdButtomRight" id="FDSJ"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">财务负责人：</div>
                                    </td>
                                    <td class="tdButtomRight" id="CWFZR"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">财务负责人固定电话：</div>
                                    </td>
                                    <td class="tdButtomRight">&nbsp;</td>
                                </tr>

                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">财务负责人移动电话：</div>
                                    </td>
                                    <td class="tdButtomRight" id="CWFZSJ"></td>
                                </tr>

                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">财务负责人电子信箱：</div>
                                    </td>
                                    <td class="tdButtomRight">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">办税人员：</div>
                                    </td>
                                    <td class="tdButtomRight" id="BSR"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">办税人证件名称：</div>
                                    </td>
                                    <td class="tdButtomRight">居民身份证&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">办税人证件号码：</div>
                                    </td>
                                    <td class="tdButtomRight" id="BSID"></td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">办税人固定电话：</div>
                                    </td>
                                    <td class="tdButtomRight">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">办税人移动电话：</div>
                                    </td>
                                    <td class="tdButtomRight" id="BSSJ"></td>
                                </tr>

                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">办税人电子信箱：</div>
                                    </td>
                                    <td class="tdButtomRight">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">税务代理人：</div>
                                    </td>
                                    <td class="tdButtomRight">&nbsp;</td>
                                </tr>

                                <tr>
                                    <td class="tdButtomLeft">
                                        <div align="right">税务代理人联系电话：</div>
                                    </td>
                                    <td class="tdButtomRight">&nbsp;
                                    </td>
                                </tr>

                            </table>


                            <div id="zcznxx">


                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td colspan="6" class="ds_TableHeard">投资者情况</td>
                                    </tr>

  
				

				
				</table>
				
				
		   </div>
		   
		   
		   
		   <table id="yhxx" width="100%" border="0" cellspacing="0" cellpadding="0">
               <tr class="ds_TableHeard">
                   <td colspan="9" class="ds_TableHeard">开户银行情况</td>
               </tr>
           </table>









                        </div>
		   
		   
		 </div>
	</ul>
  </div>           


  
  


</div>
</div>
</div><!-- app -->
</html>
