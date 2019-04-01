










<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>iframe</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

<script src="/res/js/jquery-1.10.2.js"></script>
<script src="/res/otp4/js/lib/layer/layer.js" type="text/javascript"></script>
<script src="/res/js/login_v2/sywbl.js" type="text/javascript"></script>
<script type="text/javascript">	
     var alllist = "";
     var forMenuList = "";
     var yzlist = [{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shenfenxinxiqueren","pxxh":1,"modify_time":"","pinyin":"sfxxqr","parent_id":"bszx_0101","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/sfxxqr.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"身份信息确认","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010101"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010102","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuiren（koujiaoren）shenfenxinxibaogao","pxxh":2,"modify_time":"","pinyin":"nsr（kjr）sfxxbg","parent_id":"bszx_0101","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/nsryhgl/sfxxqr_kkdj.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人（扣缴人）身份信息报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=bszx_01&menu_item_id=bszx_010102&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0102","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zigexinxibaogao","pxxh":2,"modify_time":"","pinyin":"zgxxbg","parent_id":"bszx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/scj/syxxbg.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"资格信息报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_0102"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010201","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishuinashuirenleixingbaogao","pxxh":1,"modify_time":"","pinyin":"zzsnsrlxbg","parent_id":"bszx_0102","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/xgmnsrns.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"增值税纳税人类型报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010201"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010202","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"chukoutui（mian）shuiqiyezigexinxibaogao","pxxh":2,"modify_time":"","pinyin":"ckt（m）sqyzgxxbg","parent_id":"bszx_0102","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"出口退（免）税企业资格信息报告","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010203","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"chukouqiyefangqitui（mian）shuiquanbaogao","pxxh":3,"modify_time":"","pinyin":"ckqyfqt（m）sqbg","parent_id":"bszx_0102","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"出口企业放弃退（免）税权报告","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010204","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"qitachukoutui（mian）shuibeian","pxxh":4,"modify_time":"","pinyin":"qtckt（m）sba","parent_id":"bszx_0102","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"其他出口退（免）税备案","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010302","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"caiwuhuijizhidubeian","pxxh":2,"modify_time":"","pinyin":"cwkjzdba","parent_id":"bszx_0103","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"财务会计制度备案","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/zhxxbg/zdxxbg/cwkjzdba/cwkjzdbaInfo"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010401","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"kuaquyushuiyuanxinxibaogaoyewu","pxxh":1,"modify_time":"","pinyin":"kqysyxxbgyw","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;cross;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"跨区域涉税事项报告","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=KQY"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010402","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"kuaquyusheshuishixiangbaoyan","pxxh":2,"modify_time":"","pinyin":"kqysssxby","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;cross;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"跨区域涉税事项报验","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=KQY"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010403","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"kuaquyusheshuishixiangbaoyanfankui","pxxh":3,"modify_time":"","pinyin":"kqysssxbyfk","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;cross;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"跨区域涉税事项信息反馈","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=KQY"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010404","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"fangchanshuiyuanguanli","pxxh":4,"modify_time":"","pinyin":"fcsygl","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/sydjsy/fcsygl.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"房产税源管理","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010404"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010405","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"tudishuiyuanguanli","pxxh":5,"modify_time":"","pinyin":"tdsygl","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/sydjsy/tdsy.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"土地税源管理","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010405"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010406","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"huanjingbaohushuijichuxinxicaiji","pxxh":6,"modify_time":"","pinyin":"hjbhsjcxxcj","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/hbssb/qynd_hbssb_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"环境保护税基础信息采集","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010406"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010407","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"budongchanxiangmubaogao","pxxh":7,"modify_time":"","pinyin":"bdcxmbg","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/sydjsy/bdcxmgl.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"不动产项目报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010407"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010408","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"caichanyitihuaxinxibaogao","pxxh":8,"modify_time":"","pinyin":"ccythxxbg","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/sydjsy/zlfsygl.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"财产一体化信息报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010408"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010409","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"jianzhuyexiangmubaogao","pxxh":9,"modify_time":"","pinyin":"jzyxmbg","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"建筑业项目报告","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=382663349"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010410","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"","pxxh":10,"modify_time":"","pinyin":"","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/tdsy/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"土地使用税税源登记","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010410"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010411","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"","pxxh":11,"modify_time":"","pinyin":"","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/tdsy/alter_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"土地使用税税源修改和变更","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010411"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010412","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"","pxxh":12,"modify_time":"","pinyin":"","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/dzsb/ccssb/symx.do?sblx=cl","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"车辆信息维护 ","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010412"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010413","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"","pxxh":13,"modify_time":"","pinyin":"","parent_id":"bszx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/dzsb/ccssb/symx.do?sblx=cb","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"船舶信息维护","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010413"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010501","zttsxx":"请下载企业出口退税申报系统!","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"chukoutui（mian）shuibeianbiangengjibeianchehui","pxxh":1,"modify_time":"","pinyin":"ckt（m）sbabgjbach","parent_id":"bszx_0105","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"新","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"出口退（免）税备案变更及备案撤回","target":"","wydkfs_dm":"1","zt_bz":"2","gds_bz":"","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010501"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010502","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zhuxiaodengjishuiwu","pxxh":2,"modify_time":"","pinyin":"zxdjsw","parent_id":"bszx_0105","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrzxssdj/regSwdj.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"注销税务登记","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=bszx_01&menu_item_id=bszx_010502&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010503","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"yizhaoyimahuqingshuishenbao","pxxh":3,"modify_time":"","pinyin":"yzymhqssb","parent_id":"bszx_0105","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/qssbb/getQssbb.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"一照一码户清税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010503"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010504","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"qiyesuodeshuiqingsuanbaobei","pxxh":4,"modify_time":"","pinyin":"qysdsqsbb","parent_id":"bszx_0105","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"企业所得税清算报备","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/zhxxbg/ztxxbg/qysdsqsbb/qysdsqsbbInfo"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010505","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuirenhebingfenlibaogao","pxxh":5,"modify_time":"","pinyin":"nsrhbflbg","parent_id":"bszx_0105","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"纳税人合并分立报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/zhxxbg/ztxxbg/nsrhbflbg/nsrhbflbgInfo"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010601","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shuiwuzhengjianyishisunhuibaogao","pxxh":1,"modify_time":"","pinyin":"swzjysshbg","parent_id":"bszx_0106","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"税务证件遗失损毁报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/swzjysshbg/manager"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010602","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"wenhuashiyejianshefeijiaofeibaogao","pxxh":2,"modify_time":"","pinyin":"whsyjsfjfbg","parent_id":"bszx_0106","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"文化事业建设费缴费报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/whsyjsbg/manager"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010603","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"fapiaoguashi、sunhuibaogao","pxxh":3,"modify_time":"","pinyin":"fpgs、shbg","parent_id":"bszx_0106","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"发票挂失、损毁报告","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=933601102"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_010604","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"geshuidaikoudaijiaoshouxufeishenqing","pxxh":4,"modify_time":"","pinyin":"gsdkdjsxfsq","parent_id":"bszx_0106","xzgz_class":"nsrALL;notsb;notgr;notsbgs;notgs","real_url":"/pw/newPw.do?forward=WZDZ0009","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"个税代扣代缴手续费申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_010604"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0201","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"fapiaopiaozhongheding","pxxh":1,"modify_time":"","pinyin":"fppzhd","parent_id":"bszx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"发票票种核定","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=PZHD"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0202","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"fapiaolingyong","pxxh":2,"modify_time":"","pinyin":"fply","parent_id":"bszx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"Y","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://fpsl.xmtax.gov.cn:7001","dz_bz":"Y","menu_item_name":"发票领用","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssl_nsrd/"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0203","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"fapiaodaikai","pxxh":3,"modify_time":"","pinyin":"fpdk","parent_id":"bszx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"发票代开","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=FPDK"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_020401","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"fapiaoyan（jiao）jiu","pxxh":1,"modify_time":"","pinyin":"fpy（j）j","parent_id":"bszx_0204","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://fpsl.xmtax.gov.cn:7001","dz_bz":"N","menu_item_name":"发票验（交）旧","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssl_nsrd/"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_020402","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"dikoulianshujucaiji","pxxh":2,"modify_time":"","pinyin":"dklsjcj","parent_id":"bszx_0204","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"抵扣联数据采集","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/content/S4507.html"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_020403","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"daikaifapiaoxinxicaiji","pxxh":3,"modify_time":"","pinyin":"dkfpxxcj","parent_id":"bszx_0204","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"代开发票信息采集","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/content/S4507.html"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0205","zttsxx":"该模块建设中！","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zengzhishuishuikongxitongzhuanyongshebeibiangengfaxing","pxxh":5,"modify_time":"","pinyin":"zzsskxtzysbbgfx","parent_id":"bszx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"增值税税控系统专用设备变更发行","target":"","wydkfs_dm":"1","zt_bz":"2","gds_bz":"","menu_item_url":"/views/hszzs/zzsskxtzysbbg.jsp"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0207","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"diushizengzhishuizhuanyongfapiaoyibaoshuizhengming","pxxh":7,"modify_time":"","pinyin":"dszzszyfpybszm","parent_id":"bszx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"丢失增值税专用发票已报税证明","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/dszzszyfpybszm/manager"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_020801","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"fapiaorenzheng","pxxh":1,"modify_time":"","pinyin":"fprz","parent_id":"bszx_0208","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wsrz.xm-n-tax.gov.cn:9008","dz_bz":"N","menu_item_name":"发票认证","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/processNoLogin.do"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishuiyibannashuirenshenbao","pxxh":1,"modify_time":"","pinyin":"zzsybnsrsb","parent_id":"bszx_0301","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"增值税一般纳税人申报","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=ZZS_YBNSR"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030102","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishuixiaoguimonashuirenshenbao","pxxh":2,"modify_time":"","pinyin":"zzsxgmnsrsb","parent_id":"bszx_0301","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"增值税小规模纳税人申报","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=ZZS_XGM"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0302","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"xiaofeishuijifujiashuifeishenbao","pxxh":2,"modify_time":"","pinyin":"xfsjfjsfsb","parent_id":"bszx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"消费税及附加税费申报","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=XFS"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0303","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"qiyesuodeshuishenbao","pxxh":3,"modify_time":"","pinyin":"qysdssb","parent_id":"bszx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/qysds.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"企业所得税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_0303"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030401","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"chegoushuishenbao","pxxh":1,"modify_time":"","pinyin":"cgssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://222.76.203.44:7001","dz_bz":"N","menu_item_name":"车购税申报","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/jdcwsbs/taxclient/cgs/login.html"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030402","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"fangchanshuishenbao","pxxh":2,"modify_time":"","pinyin":"fcssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/sydjsy/fcsygl.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"房产税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030402"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030403","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"tudishiyongshuishenbao","pxxh":3,"modify_time":"","pinyin":"tdsyssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/sydjsy/tdsy.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"土地使用税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030403"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030404","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"tudizengzhishuishenbao","pxxh":4,"modify_time":"","pinyin":"tdzzssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/sydjsy/bdcxmgl.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"土地增值税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030404"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030405","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"yinhuashuishenbao","pxxh":5,"modify_time":"","pinyin":"yhssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/yhssb/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"印花税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030405"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030406","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"chechuanshuishenbao","pxxh":6,"modify_time":"","pinyin":"ccssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/ccs.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"车船税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030406"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030407","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"huanbaoshuishenbao","pxxh":7,"modify_time":"","pinyin":"hbssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/hbssb/qynd_hbssb_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"环保税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030407"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030408","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"gerensuodeshuishenbao","pxxh":8,"modify_time":"","pinyin":"grsdssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notgr","real_url":"/views/jsdzsb/dzsbsy/grsds.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"个人所得税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030408"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030409","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"chengjianshuijifujiashenbao","pxxh":9,"modify_time":"","pinyin":"cjsjfjsb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/fjssb/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"城建税及附加申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030409"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030410","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"ziyuanshuishenbao","pxxh":10,"modify_time":"","pinyin":"zyssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/zyssb/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"资源税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030410"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030411","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"gengdizhanyongshuishenbao","pxxh":11,"modify_time":"","pinyin":"gdzyssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/gdzyssb/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"耕地占用税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030411"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030412","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"qishuishenbao","pxxh":12,"modify_time":"","pinyin":"qssb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/qssb/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"契税申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030412"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030413","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zengliangfangshenbao","pxxh":13,"modify_time":"","pinyin":"zlfsb","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/zlfsb.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"增量房申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030413"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030414","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shenbaojiluchaxunhuozuofei","pxxh":14,"modify_time":"","pinyin":"sbjlcxhzf","parent_id":"bszx_0304","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/sbzf.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"申报记录查询或作废","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030414"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030501","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"gonghuijingfeishenbao","pxxh":1,"modify_time":"","pinyin":"ghjfsb","parent_id":"bszx_0305","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/ghjfsb.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"工会经费申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030501"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030502","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"canjirenjiuyebaozhangjinshenbao","pxxh":2,"modify_time":"","pinyin":"cjrjybzjsb","parent_id":"bszx_0305","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/czjsb/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"残疾人就业保障金申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030502"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030503","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"wenhuashiyejianshefeishenbao","pxxh":3,"modify_time":"","pinyin":"whsyjsfsb","parent_id":"bszx_0305","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"文化事业建设费申报","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=WHSYJSF"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030504","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"feiqidianzijijinshenbao","pxxh":4,"modify_time":"","pinyin":"fqdzjjsb","parent_id":"bszx_0305","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"废弃电器电子产品处理基金申报","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=FQDQDZCP"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_030506","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"gengzhengshenbao","pxxh":11,"modify_time":"","pinyin":"gzsb","parent_id":"bszx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/sssbsy.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"更正申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030506"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0306","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"yuqishenbao","pxxh":6,"modify_time":"","pinyin":"yqsb","parent_id":"bszx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"逾期申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/yqsb/manager"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030701","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"caiwubaogaobaosongyuxinxicaiji（qiyehuijizhunze）","pxxh":1,"modify_time":"","pinyin":"cwbgbsyxxcj（qykjzz）","parent_id":"bszx_0307","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"财务报告报送与信息采集（企业会计准则）","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=CWBB_QYKJZZ"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030702","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"caiwubaogaobaosongyuxinxicaiji（xiaoqiyehuijizhunze）","pxxh":2,"modify_time":"","pinyin":"cwbgbsyxxcj（xqykjzz）","parent_id":"bszx_0307","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"财务报告报送与信息采集（小企业会计准则）","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=CWBB_XQYKJZZ"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030703","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"caiwubaogaobaosongyuxinxicaiji（qiyehuijizhidu）","pxxh":3,"modify_time":"","pinyin":"cwbgbsyxxcj（qykjzd）","parent_id":"bszx_0307","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"财务报告报送与信息采集（企业会计制度）","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=CWBB_QYKJZD"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030704","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"caiwubaogaobaosongyuxinxicaiji（shiyedanweihuijizhidu）","pxxh":4,"modify_time":"","pinyin":"cwbgbsyxxcj（sydwkjzd）","parent_id":"bszx_0307","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"财务报告报送与信息采集（事业单位会计制度）","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=CWBB_SYDWKJZD"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030705","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"caiwubaogaobaosongyuxinxicaiji（minjianfeiyinglizuzhi）","pxxh":5,"modify_time":"","pinyin":"cwbgbsyxxcj（mjfylzz）","parent_id":"bszx_0307","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"财务报告报送与信息采集（民间非营利组织）","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=CWBB_MJFYLZZ"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030706","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"qiyejituanhebingcaiwubaobiaobaosongyuxinxicaiji","pxxh":6,"modify_time":"","pinyin":"qyjthbcwbbbsyxxcj","parent_id":"bszx_0307","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"企业集团合并财务报表报送与信息采集","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=CWBB_HBBB"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030801","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"jingneijigouhegerenfabaogongchengzuoyehuolaowuhetongkuanxiangzhifuqingkuangbeian","pxxh":1,"modify_time":"","pinyin":"jnjghgrfbgczyhlwhtkxzfqkba","parent_id":"bszx_0308","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"境内机构和个人发包工程作业或劳务合同款项支付情况备案","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/jnhgrzfqkba/inJnhgrzfqk"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030802","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"jingneijigouhegerenfabaogongchengzuoyehuolaowuxiangmu","pxxh":1,"modify_time":"","pinyin":"jnjghgrfbgczyhlwxm","parent_id":"bszx_0308","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"境内机构和个人发包工程作业或劳务项目","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/jngrfblwxmba/inJngrfblwxmba"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030803","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"tebienashuidiaozhengxiangguanziliaobaogao","pxxh":1,"modify_time":"","pinyin":"tbnstzxgzlbg","parent_id":"bszx_0308","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/xgzlbg/cx.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"特别纳税调整相关资料报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_030803"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030804","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shuishoutongjidiaocha","pxxh":2,"modify_time":"","pinyin":"sstjdc","parent_id":"bszx_0308","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://zdsy.xmtax.gov.cn:88","dz_bz":"N","menu_item_name":"税收统计调查","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/i/oem/tsklogin.jsp?guid={4E2E2D4F-28DC-41E8-8E36-BF4FDB6391D2}"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030901","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"caiwubaobiaozhuanhuangongju（xiazai）","pxxh":1,"modify_time":"","pinyin":"cwbbzhgj（xz）","parent_id":"bszx_0309","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"财务报表转换工具（下载）","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/xtgl/downloadset/manager"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_030902","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"caiwubaobiaodaorujizhuanhuanjiekou","pxxh":2,"modify_time":"","pinyin":"cwbbdrjzhjk","parent_id":"bszx_0309","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"财务报表导入及转换接口","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=CWBB_ZHJK"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031001","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishui","pxxh":1,"modify_time":"","pinyin":"zzs","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"增值税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=SSKK"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031002","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"xiaofeishui","pxxh":2,"modify_time":"","pinyin":"xfs","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"消费税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=SSKK"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031003","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"qiyesuodeshui","pxxh":3,"modify_time":"","pinyin":"qysds","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"企业所得税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"sfjn","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031003"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031004","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"fangchanshui","pxxh":4,"modify_time":"","pinyin":"fcs","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"房产税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031004"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031005","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"tudishiyongshui","pxxh":5,"modify_time":"","pinyin":"tdsys","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"土地使用税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031005"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031006","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"tudizengzhishui","pxxh":6,"modify_time":"","pinyin":"tdzzs","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"土地增值税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031006"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031007","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"yinhuashui","pxxh":7,"modify_time":"","pinyin":"yhs","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"印花税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031007"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031008","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"chechuanshui","pxxh":8,"modify_time":"","pinyin":"ccs","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"车船税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031008"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031009","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"huanbaoshui","pxxh":9,"modify_time":"","pinyin":"hbs","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"环保税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031009"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031010","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"gerensuodeshui","pxxh":10,"modify_time":"","pinyin":"grsds","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"个人所得税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031010"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031011","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"chengjianshuijifujia","pxxh":11,"modify_time":"","pinyin":"cjsjfj","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"城建税及附加","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031011"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031012","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"ziyuanshui","pxxh":12,"modify_time":"","pinyin":"zys","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"资源税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031012"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031013","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"gengdizhanyongshui","pxxh":13,"modify_time":"","pinyin":"gdzys","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"耕地占用税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031013"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031014","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"qishui","pxxh":14,"modify_time":"","pinyin":"qs","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"契税","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031014"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031015","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"gonghuijingfei","pxxh":15,"modify_time":"","pinyin":"ghjf","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"工会经费","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031015"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031016","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"canjirenjiuyebaozhangjin","pxxh":16,"modify_time":"","pinyin":"cjrjybzj","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"残疾人就业保障金","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031016"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031017","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"wenhuashiyejianshefei","pxxh":17,"modify_time":"","pinyin":"whsyjsf","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"文化事业建设费","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=SSKK"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031018","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"feiqidianzijijin","pxxh":18,"modify_time":"","pinyin":"fqdzjj","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"废弃电器电子产品处理基金","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=SSKK"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_031019","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengliangfangshenbao","pxxh":19,"modify_time":"","pinyin":"zlfsb","parent_id":"bszx_0310","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"增量房申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_03&menu_item_id=bszx_031019"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0312","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shuishoushouruyubao","pxxh":12,"modify_time":"","pinyin":"sssryb","parent_id":"bszx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"税收收入预报","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=SSSRYBB"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0401","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shuishoujianmianbeian","pxxh":1,"modify_time":"","pinyin":"ssjmba","parent_id":"bszx_04","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/tnsfwHome/shuizhonglist.do?params=ssjm","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"税收减免备案","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_04&menu_item_id=bszx_0401"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0402","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shuishoujianmianhezhun","pxxh":2,"modify_time":"","pinyin":"ssjmhz","parent_id":"bszx_04","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/pw/ssyhsq.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"税收减免核准","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_04&menu_item_id=bszx_0402"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0501","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zhongguoshuishoujuminshenfenzhengming","pxxh":1,"modify_time":"","pinyin":"zgssjmsfzm","parent_id":"bszx_05","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/otp4query/List.do?id=zgssjmsfzm_list","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"中国税收居民身份证明","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_05&menu_item_id=bszx_0501"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0502","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zhuankaishuishouwanshuizhengming","pxxh":2,"modify_time":"","pinyin":"zksswszm","parent_id":"bszx_05","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/zksswszm/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"转开税收完税证明","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_05&menu_item_id=bszx_0502"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_050301","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuishouwanshuizhengmingkaiju（yuandishui）","pxxh":4,"modify_time":"","pinyin":"sswszmkj（yds）","parent_id":"bszx_05","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/ybwszm/print/wszm.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"开具税收完税证明（文书式）","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_05&menu_item_id=bszx_050301"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_050303","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"fapiaorenzhengjieguo（hanzengzhishuizhuanpiao、jidongchefapiao、huoyunfapiao）","pxxh":3,"modify_time":"","pinyin":"fprzjg（hzzszp、jdcfp、hyfp）","parent_id":"bszx_0503","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"发票认证结果（含增值税专票、机动车发票、货运发票）","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=FPRZTZ"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_050304","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"haiguanzhuanyongjiaokuanshujihejieguo","pxxh":4,"modify_time":"","pinyin":"hgzyjksjhjg","parent_id":"bszx_0503","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"海关专用缴款书稽核结果","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=HGJKS"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_050305","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"fudaoqiyibannashuirenjihejieguo","pxxh":5,"modify_time":"","pinyin":"fdqybnsrjhjg","parent_id":"bszx_0503","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"辅导期一般纳税人稽核结果","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=FDQJH"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0504","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zhuankaishuishouwanshuizhengming","pxxh":3,"modify_time":"","pinyin":"zksswszm","parent_id":"bszx_05","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"服务贸易等项目对外支付税务备案","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/zmkj/fwmydxmdwzfswba/fwmydxmdwzfswbaInfo"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0505","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"kaijushuishouwanshuizhengming(biaogeshi)","pxxh":4,"modify_time":"","pinyin":"kjsswszm(bgs)","parent_id":"bszx_05","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"开具税收完税证明（表格式）","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/zmkj/wskjsswszm/manager"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0601","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"qiyeyinzhifapiaoshenpi","pxxh":1,"modify_time":"","pinyin":"qyyzfpsp","parent_id":"bszx_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"企业印制发票审批","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=2024140164"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_060201","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishui、xiaofeishuidengyuanguoshuishuizhong","pxxh":1,"modify_time":"","pinyin":"zzs、xfsdygssz","parent_id":"bszx_0602","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"延期缴纳税款申请","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=25053017"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_060202","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"gerensuodeshui、fangchanshuidengyuandishuishuizhong","pxxh":2,"modify_time":"","pinyin":"grsds、fcsdydssz","parent_id":"bszx_0602","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"","dz_bz":"N","menu_item_name":"个人所得税、房产税等其他税种","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"go","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=tsyw_03"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_060203","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"qiyesuodeshui","pxxh":3,"modify_time":"","pinyin":"qysds","parent_id":"bszx_0602","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/qysds.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"企业所得税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"wzh","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_06&menu_item_id=bszx_060203"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_060301","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishui、xiaofeishuidengyuanguoshuishuizhong","pxxh":1,"modify_time":"","pinyin":"zzs、xfsdygssz","parent_id":"bszx_0603","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"对纳税人延期申报的核准","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=1532604827"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_060302","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"gerensuodeshui、fangchanshuidengyuandishuishuizhong","pxxh":2,"modify_time":"","pinyin":"grsds、fcsdydssz","parent_id":"bszx_0603","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"","dz_bz":"N","menu_item_name":"个人所得税、房产税等其他税种","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"go","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=tsyw_03"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_060303","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"qiyesuodeshui","pxxh":3,"modify_time":"","pinyin":"qysds","parent_id":"bszx_0603","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/qysds.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"企业所得税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"wzh","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_06&menu_item_id=bszx_060301"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0604","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"duinashuirenbiangengnashuidingedehezhun","pxxh":4,"modify_time":"","pinyin":"dnsrbgnsdedhz","parent_id":"bszx_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"对纳税人变更纳税定额的核准","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=1254810658"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0605","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishuizhuanyongfapiaozuigaokaipiaoxianeshenpi","pxxh":5,"modify_time":"","pinyin":"zzszyfpzgkpxesp","parent_id":"bszx_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"增值税专用发票最高开票限额审批","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=990963453"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0606","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"duicaiqushijiliruneyujiaoyiwaideqitaqiyesuodeshuiyujiaofangshideheding","pxxh":6,"modify_time":"","pinyin":"dcqsjlreyjywdqtqysdsyjfsdhd","parent_id":"bszx_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/qysds.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"对采取实际利润额预缴以外的其他企业所得税预缴方式的核定","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"wzh","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_06&menu_item_id=bszx_0606"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0607","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"feijuminqiyexuanzeyouqizhuyaojigouchangsuohuizongjiaonaqiyesuodeshuideshenpi","pxxh":7,"modify_time":"","pinyin":"fjmqyxzyqzyjgcshzjnqysdsdsp","parent_id":"bszx_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"非居民企业选择由其主要机构场所汇总缴纳企业所得税的审批","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=1796452031"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0701","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"dingqidingehushenqinghedingjidiaozhengdinge","pxxh":1,"modify_time":"","pinyin":"dqdehsqhdjtzde","parent_id":"bszx_07","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"定期定额户申请核定及调整定额","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=DQDEHSQ"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0702","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zengzhishuijinxiangshuiekouchubiaozhunhedingshenqing","pxxh":2,"modify_time":"","pinyin":"zzsjxsekcbzhdsq","parent_id":"bszx_07","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"增值税进项税额扣除标准核定申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/zzshdsq/manager"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0801","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"wushouduojiaotuidishui","pxxh":1,"modify_time":"","pinyin":"wsdjtds","parent_id":"bszx_08","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"误收多缴退抵税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=1983306275"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0802","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"rukujianmiantuidishui","pxxh":2,"modify_time":"","pinyin":"rkjmtds","parent_id":"bszx_08","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"入库减免退抵税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=1031797343"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0803","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"huisuanqingjiaojiesuanduojiaotuidishui","pxxh":3,"modify_time":"","pinyin":"hsqjjsdjtds","parent_id":"bszx_08","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/qysds.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"汇算清缴结算多缴退抵税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=1755618144"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0804","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"huisuanqingjiaojiesuanduojiaotuidishui","pxxh":7,"modify_time":"","pinyin":"hsqjjsdjtds","parent_id":"bszx_08","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/qysds.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"其他退税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=1058252674"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0805","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"huisuanqingjiaojiesuanduojiaotuidishui","pxxh":4,"modify_time":"","pinyin":"hsqjjsdjtds","parent_id":"bszx_08","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/jsdzsb/dzsbsy/qysds.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"福利企业退税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=1223"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0806","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"huisuanqingjiaojiesuanduojiaotuidishui","pxxh":5,"modify_time":"","pinyin":"hsqjjsdjtds","parent_id":"bszx_08","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/pw/syxy.do?forward=WZSB0001","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"社保退费申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_08&menu_item_id=bszx_0806"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_0807","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"huisuanqingjiaojiesuanduojiaotuidishui","pxxh":6,"modify_time":"","pinyin":"hsqjjsdjtds","parent_id":"bszx_08","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/pw/syxy.do?forward=WZTS0001","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"稽查退税申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_08&menu_item_id=bszx_0807"},{"menu_id":"SEC","startDate":"","menu_item_id":"bszx_09","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/cktsgl.png","jianpin":"chukoutuishuiguanli","pxxh":9,"modify_time":"","pinyin":"cktsgl","parent_id":"bszx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/scj/syxxbg.do?params=ckts","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"出口退税管理","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_09&menu_item_id=bszx_09&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_1001","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"yuqizengzhishuidikoupingzhengdikouguanli","pxxh":1,"modify_time":"","pinyin":"yqzzsdkpzdkgl","parent_id":"bszx_10","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"逾期增值税抵扣凭证抵扣管理","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/zzsdk/yqzzsdkmanager"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_1002","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"weianqishenbaodikouzengzhishuikoushuipingzhengdikouguanli","pxxh":2,"modify_time":"","pinyin":"waqsbdkzzskspzdkgl","parent_id":"bszx_10","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"未按期申报抵扣增值税扣税凭证抵扣管理","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/zzsdk/waqdksqmanager"},{"menu_id":"SEC","startDate":"","menu_item_id":"bszx_11","zttsxx":"该模块建设中","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/swdbgzjqsq.png","jianpin":"shuiwudaibaoguanzijinshouqu","pxxh":11,"modify_time":"","pinyin":"swdbgzjsq","parent_id":"bszx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"暂时设置菜单，提示该模块建设中","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"税务代保管资金收取","target":"","wydkfs_dm":"1","zt_bz":"2","gds_bz":"","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_11&menu_item_id=bszx_11"},{"menu_id":"SEC","startDate":"","menu_item_id":"bszx_12","zttsxx":"该模块建设中","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/yuyuedingjia.png","jianpin":"yuyuedingjiaanpai","pxxh":12,"modify_time":"","pinyin":"yydjap","parent_id":"bszx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/xgzlbg/cx.do?zl_bz=yydj","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"预约定价安排","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_12&menu_item_id=bszx_12"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_1301","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuixinyongbupingshenqing","pxxh":1,"modify_time":"","pinyin":"nsxybpsq","parent_id":"bszx_13","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"纳税信用补评申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/nsxy/nsxybpsq/nsxybpsqManager"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_1302","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuixinyongfupingshenqing","pxxh":2,"modify_time":"","pinyin":"nsxyfpsq","parent_id":"bszx_13","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"纳税信用复评申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/nsxy/nsxyfpsq/nsxyfpsqManager"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_1401","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuipingguyichangtixing","pxxh":1,"modify_time":"","pinyin":"nspgyctx","parent_id":"bszx_14","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/jsdzsb/nspgyctx/nspgyctx.do?b_query=true","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税评估异常提醒","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_14&menu_item_id=bszx_1401"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_150101","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuiwushishiwusuoxingzhengdengji","pxxh":1,"modify_time":"","pinyin":"swsswsxzdj","parent_id":"bszx_1501","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"税务师事务所行政登记","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/sszyfwjggl/swsswsxzdj/manager"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_150102","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuiwushishiwusuobiangengdengji","pxxh":2,"modify_time":"","pinyin":"swsswsbgdj","parent_id":"bszx_1501","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"税务师事务所变更登记","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/swsswsbgdj/manager"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_150103","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuiwushishiwusuoxingzhengdengjizhongzhi","pxxh":3,"modify_time":"","pinyin":"swsswsxzdjzz","parent_id":"bszx_1501","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"税务师事务所行政登记终止","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/sszyfwjggl/swsswsdjzz/manager"},{"menu_id":"THR","startDate":"","menu_item_id":"bszx_1502","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"qitasheshuizhuanyefuwujigouguanli","pxxh":2,"modify_time":"","pinyin":"qtsszyfwjggl","parent_id":"bszx_15","xzgz_class":"nsrALL;notsb;notsbgs;notgs;sszyfw;notgr;sszyfw","real_url":"/sszyfw/index_new.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"其他涉税专业服务机构管理","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_15&menu_item_id=bszx_1502"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_160101","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"yuqishenbaochufa","pxxh":1.11,"modify_time":"","pinyin":"yqsbcf","parent_id":"bszx_1601","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"逾期申报处罚","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/flzzyjjsx/wfcz/manager"},{"menu_id":"FOR","startDate":"","menu_item_id":"bszx_160301","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"xingzhengfuyishenqing","pxxh":1,"modify_time":"","pinyin":"xzfysq","parent_id":"bszx_1603","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"行政复议申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/xzfysq/xzfysqcxInfo"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_01","zttsxx":"该模块建设中","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/gtgshd.png","jianpin":"getigongshanghuhedingdingexinxichaxun","pxxh":7,"modify_time":"","pinyin":"gtgshhddexxcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrgl/getZsxmList.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"个体工商户核定定额信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_01&menu_item_id=cxzx_01&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0201","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"wanshuizhengming（guitaikaiju）xinxichaxun","pxxh":4,"modify_time":"","pinyin":"wszm（gtkj）xxcx","parent_id":"cxzx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"完税证明（柜台开具）信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zmxxcx/manager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0202","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"wanshuizhengming（wuzhihuaxitongkaiju）xinxichaxun","pxxh":2,"modify_time":"","pinyin":"wszm（wzhxtkj）xxcx","parent_id":"cxzx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"完税证明（无纸化系统开具）信息查询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs&workId=WSZM"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0203","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"duiwaizhifuzhengmingchaxun","pxxh":5,"modify_time":"","pinyin":"dwzfzmcx","parent_id":"cxzx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"对外支付证明查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zmxxcx/dwzfmanager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0204","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"chukoutuishui（mian）shuizhengmingchaxun","pxxh":3,"modify_time":"","pinyin":"ckts（m）szmcx","parent_id":"cxzx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/scj/syxxbg.do?params=ckts","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"出口退税（免）税证明查询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=cxzx_02&menu_item_id=cxzx_0204"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0205","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"wenshuwanshuizhenmingchaxun","pxxh":1,"modify_time":"","pinyin":"wswszmcx","parent_id":"cxzx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/ybwszm/print/ck.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"文书式完税证明查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=cxzx_02&menu_item_id=cxzx_0205"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_03","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/gsqccx.png","jianpin":"geshuiqingcechaxun","pxxh":19,"modify_time":"","pinyin":"gsqccx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notgr","real_url":"/views/jsdzsb/dzsbsy/gscx1.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"个税清册查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=cxzx_03&menu_item_id=cxzx_03"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_04","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/yhxxcx.png","jianpin":"youhuixinxichaxun","pxxh":6,"modify_time":"","pinyin":"yhxxcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"优惠信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/yhxxcx/manager"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_05","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/sszjjgxxcx.png","jianpin":"sheshuizhongjiejigouxinxichaxun","pxxh":9,"modify_time":"","pinyin":"sszjjgxxcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"涉税中介机构信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/sszjjgxxcx/manager"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_06","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/nsxyztxxcx.png","jianpin":"nashuixinyongzhuangtaixinxichaxun","pxxh":10,"modify_time":"","pinyin":"nsxyztxxcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"纳税信用状态信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/nsxyztxxcx/manager"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_07","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/wfwzxxcxl.png","jianpin":"weifaweizhangxinxichaxunlei","pxxh":11,"modify_time":"","pinyin":"wfwzxxcxl","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"违法违章信息查询类","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/wfwzxxcx/manager"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_08","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/lsbsczcx.png","jianpin":"lishibanshuicaozuochaxun","pxxh":12,"modify_time":"","pinyin":"lsbsczcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/scj/lsczcx.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"历史办税操作查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=cxzx_08&menu_item_id=cxzx_08"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0901","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"yuqiweishenbaochaxun","pxxh":1,"modify_time":"","pinyin":"yqwsbcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrgl/getyqwsbInitDate.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"逾期未申报查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/yqwsbcxmanager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0902","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"biangengchaxun","pxxh":2,"modify_time":"","pinyin":"bgcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/nsrgl/nsrbgxx_query_index.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"变更查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/bgcxmanager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0903","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuizhongrendingxinxichaxun","pxxh":3,"modify_time":"","pinyin":"szrdxxcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrgl/queryNsrsz.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"税种认定信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/szrdxxcxmanager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0904","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"tituishuikuanchaxun","pxxh":4,"modify_time":"","pinyin":"ttskcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/nsrgl/ttsk_query_index.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"提退税款查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/ttskcxmanager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0905","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"yuqiweijiaokuanchaxun","pxxh":5,"modify_time":"","pinyin":"yqwjkcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/nsrgl/yqwjk_query_index.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"逾期未缴款查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/yqwjkcxmanager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0906","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"nashuirenzigechaxun","pxxh":6,"modify_time":"","pinyin":"nsrzgcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrgl/queryNsrzg.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"纳税人资格查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/nsrzgcxmanager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0907","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"nashuirengoupiaozigechaxun","pxxh":7,"modify_time":"","pinyin":"nsrgpzgcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrgl/getgpxxInitDate.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"纳税人购票资格查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/nsrgpzgcxManager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0908","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"nashuirenyujiaoxinxichaxun","pxxh":8,"modify_time":"","pinyin":"nsryjxxcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrgl/getyjxxInitDate.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"纳税人预缴信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/nsryjxxcxManager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0909","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"yinshuixieyixinxichaxun","pxxh":9,"modify_time":"","pinyin":"ysxyxxcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrgl/queryYsxyxx.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"银税协议信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/ysxyxxcxManager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0910","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"nashuirengoupiaoxinxichaxun","pxxh":10,"modify_time":"","pinyin":"nsrgpxxcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"纳税人购票信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/nsrgpxxcxManager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0911","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"chukouhuowuzhuanyongjiaokuanshuchaxun","pxxh":11,"modify_time":"","pinyin":"ckhwzyjkscx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrgl/getckhwzyjksInitDate.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"出口货物专用缴款书查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/ckhwzyjkscxManager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0912","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"dayindianzijiaokuanpingzhengchaxun","pxxh":12,"modify_time":"","pinyin":"dydzjkpzcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/dzsb/skjn/dzjkprint_query.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"打印电子缴款凭证查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=cxzx_09&menu_item_id=cxzx_0912"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0913","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"nianduhuizongnashuishenbaobiaodayin","pxxh":13,"modify_time":"","pinyin":"ndhznssbbdy","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/dzsb/query/sbrkqkcx_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"年度汇总纳税申报表打印","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=cxzx_09&menu_item_id=cxzx_0913"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_0914","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"niandudianzishenbaomingxiqingkuangchaxun","pxxh":14,"modify_time":"","pinyin":"nddzsbmxqkcx","parent_id":"cxzx_09","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/dzsb/query/qnsssbrk_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"年度电子申报明细情况查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=cxzx_09&menu_item_id=cxzx_0914"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_10","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/wlfpcx.png","jianpin":"wangluofapiaochaxun","pxxh":14,"modify_time":"","pinyin":"wlfpcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wlfpcx.xmtax.gov.cn:7001","dz_bz":"N","menu_item_name":"网络发票查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/fpgl/jsp/wlfp/kpxxcx/nsr_kpxxcx_index.jsp"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_1101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"chukoutuishuixiangguanxinxichaxun","pxxh":1,"modify_time":"","pinyin":"cktsxgxxcx","parent_id":"cxzx_11","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/ckts/xgxx_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"出口退税相关信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_11&menu_item_id=cxzx_1101&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_1102","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"tuishuijineshenheqingkuangchaxun","pxxh":2,"modify_time":"","pinyin":"tsjeshqkcx","parent_id":"cxzx_11","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/ckts/tsje_shqk_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"退税金额审核情况查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_11&menu_item_id=cxzx_1102&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_1201","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zhuanpiaochaxun","pxxh":1,"modify_time":"","pinyin":"zpcx","parent_id":"cxzx_12","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/cssj/query_cssj_zp.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"专票查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_12&menu_item_id=cxzx_1201&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_1202","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"pupiaochaxun","pxxh":2,"modify_time":"","pinyin":"ppcx","parent_id":"cxzx_12","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/cssj/query_cssj_pp.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"普票查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_12&menu_item_id=cxzx_1202&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"cxzx_130101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishuizhuanyongfapiao","pxxh":1,"modify_time":"","pinyin":"zzszyfp","parent_id":"cxzx_1301","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/rzcx/lookuprzfp.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人发票认证信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_13&menu_item_id=cxzx_130101&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"cxzx_130102","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishuizhuanyongfapiao","pxxh":2,"modify_time":"","pinyin":"zzszyfp","parent_id":"cxzx_1301","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/rzcx/createrzjgwj.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"发票认证结果数据下载","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_13&menu_item_id=cxzx_130102&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"cxzx_130103","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishuizhuanyongfapiao","pxxh":3,"modify_time":"","pinyin":"zzszyfp","parent_id":"cxzx_1301","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/rzcx/lookuprztzs.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"认证结果通知书查询打印","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_13&menu_item_id=cxzx_130103&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"cxzx_130104","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengzhishuizhuanyongfapiao","pxxh":4,"modify_time":"","pinyin":"zzszyfp","parent_id":"cxzx_1301","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/rzcx/lookuprzfp_a.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人发票认证信息查询(通过发票代码和发票号码查询)","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_13&menu_item_id=cxzx_130104&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"cxzx_130201","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"huoyunfapiao","pxxh":1,"modify_time":"","pinyin":"hyfp","parent_id":"cxzx_1302","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/rzcx/lookuphyfpmx.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人发票认证信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_13&menu_item_id=cxzx_130201&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"cxzx_130202","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"huoyunfapiao","pxxh":2,"modify_time":"","pinyin":"hyfp","parent_id":"cxzx_1302","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/rzcx/lookuphyfptzs.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"认证结果通知书查询打印","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_13&menu_item_id=cxzx_130202&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"cxzx_130301","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"jidongchefapiao","pxxh":1,"modify_time":"","pinyin":"jdcfp","parent_id":"cxzx_1303","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/rzcx/lookupjdcfpmx.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人发票认证信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_13&menu_item_id=cxzx_130301&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"cxzx_130302","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"jidongchefapiao","pxxh":2,"modify_time":"","pinyin":"jdcfp","parent_id":"cxzx_1303","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/rzcx/lookupjdcfptzs.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"认证结果通知书查询打印","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_13&menu_item_id=cxzx_130302&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_1401","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"fudaoqiyibannashuirenjihejieguomingxiqingdanchaxundayin","pxxh":1,"modify_time":"","pinyin":"fdqybnsrjhjgmxqdcxdy","parent_id":"cxzx_14","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/jhjg/lookupjhjgmx_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"辅导期一般纳税人稽核结果明细清单查询打印","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_14&menu_item_id=cxzx_1401&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_1402","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"fudaoqiyibannashuirenjihejieguotongzhishuchaxundayin","pxxh":2,"modify_time":"","pinyin":"fdqybnsrjhjgtzscxdy","parent_id":"cxzx_14","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/jhjg/lookupjhjgtzs_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"辅导期一般纳税人稽核结果通知书查询打印","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_14&menu_item_id=cxzx_1402&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_1403","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"haiguanwanshuizhuanyongjiaokuanshu","pxxh":3,"modify_time":"","pinyin":"hgwszyjks","parent_id":"cxzx_14","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/third/jhjg/jhjg_index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"海关完税专用缴款书","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=cxzx_14&menu_item_id=cxzx_1403&gdsbz=GS"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_15","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/bsjdjjgxxcx.png","jianpin":"banshuijindujijieguoxinxichaxun","pxxh":1,"modify_time":"","pinyin":"bsjdjjgxxcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"办税进度及结果信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/bsjdjjgxxcx/manager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_1601","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/fpxxcx.png","jianpin":"fapiaoxinxichaxun","pxxh":1,"modify_time":"","pinyin":"fpxxcx","parent_id":"cxzx_16","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"发票信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/fpxxcx/manager"},{"menu_id":"THR","startDate":"","menu_item_id":"cxzx_1602","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/fpxxcx.png","jianpin":"fapiaoxinxichaxun","pxxh":2,"modify_time":"","pinyin":"fpxxcx","parent_id":"cxzx_16","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"购票信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/zhcx/nsrgpxxcxManager"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_17","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/shenbaoxinxi.png","jianpin":"shenbaoxinxichaxun","pxxh":3,"modify_time":"","pinyin":"sbxxcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"Y","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"Y","menu_item_name":"申报信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/sbxxcx/manager"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_18","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/jkxxcx.png","jianpin":"jiaokuanxinxichaxun","pxxh":4,"modify_time":"","pinyin":"jkxxcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"缴款信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/jkxxcx/jkxxcxInfo"},{"menu_id":"SEC","startDate":"","menu_item_id":"cxzx_19","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/qsxxcx.png","jianpin":"qianshuixinxichaxun","pxxh":5,"modify_time":"","pinyin":"qsxxcx","parent_id":"cxzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"欠税信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/qsxxcx/qsxxcxInfo"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shebaofeishenbaojiluchaxunhezuofei","pxxh":2,"modify_time":"","pinyin":"sbfsbjlcxhzf","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/sbjlcxhzf.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"社保费申报记录查询和作废","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0101"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0102","zttsxx":"我局定于2019年2月27日20:00到24:00对税库银信息系统签名服务器进行升级维护，在此期间所有缴税业务将暂停。\n","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuifeijiaona","pxxh":3,"modify_time":"","pinyin":"sfjn","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/jsdzsb/dzsbsy/skjn.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"税费缴纳","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0102"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0103","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shebaofeishenbao","pxxh":1,"modify_time":"","pinyin":"sbfsb","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb;cxyb;gxyb;cxyl;ptxxyb","real_url":"/dzsb/sbfsb/sbf_index.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"社保费申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0103"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0104","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"danweirenyuanzengyuanshenbao","pxxh":4,"modify_time":"","pinyin":"dwryzysb","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/zysb.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"单位人员增员申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0104"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0105","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"danweirenyuanjianyuanshenbao","pxxh":5,"modify_time":"","pinyin":"dwryjysb","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/jysb.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"单位人员减员申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0105"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0106","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"niandujiaofeijishushenbao","pxxh":6,"modify_time":"","pinyin":"ndjfjssb","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/jfjs.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"年度缴费基数申报","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0106"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0107","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"canbaorenyuanxinxibiangeng","pxxh":7,"modify_time":"","pinyin":"cbryxxbg","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/xxbg.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"参保人员信息变更","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0107"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0108","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shebaojiaofeijishubiangeng ","pxxh":8,"modify_time":"","pinyin":"sbjfjsbg?","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/jfjsbg.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"社保缴费基数变更 ","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0108"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0109","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shebaozhangmuchuli","pxxh":9,"modify_time":"","pinyin":"sbzmcl","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/zmcl.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"社保账目处理","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0109"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0110","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shebaozhengmingchaxundayin","pxxh":11,"modify_time":"","pinyin":"sbzmcxdy","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/sbzmcl.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"社保证明查询打印","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0110"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0111","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"zengjiacanbaoxianzhong","pxxh":12,"modify_time":"","pinyin":"zjcbxz","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/zjxz.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"增加参保险种","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0111"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0112","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shebaoxinxichaxun","pxxh":13,"modify_time":"","pinyin":"sbxxcx","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/views/sbf/sbfsy/dwsb/xxcx.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"社保信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0112"},{"menu_id":"FOR","startDate":"","menu_item_id":"dwsb_0113","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shebaofeiduizhangdanchaxun","pxxh":10,"modify_time":"","pinyin":"sbfdzdcx","parent_id":"dwsb","xzgz_class":"dwsb;nsrALL;notgs;notgr;notsb","real_url":"/sbf/dzdcx/index.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"社保费对账单查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=sbyw&menu_item_id=dwsb_0113"},{"menu_id":"FOR","startDate":"","menu_item_id":"dzsb_bg","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"cunkuanzhanghubaogao","pxxh":1,"modify_time":"","pinyin":"ckzhbg","parent_id":"bszx_0103","xzgz_class":"nsrALL;notsb;notsbgs;notgs;gsdgh;notgr","real_url":"/pw/newPw.do?forward=WZDJ0047","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"存款账户报告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=dzsb_bg"},{"menu_id":"THR","startDate":"","menu_item_id":"dzsb_sf","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"wangqiansanfangxieyi","pxxh":1,"modify_time":"","pinyin":"wqsfxy","parent_id":"bszx_17","xzgz_class":"nsrALL;notsb;notsbgs;notgs;gsdgh;notgr","real_url":"/dzsb/sfxys/selectInit.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"网签三方协议","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=bszx_17&menu_item_id=dzsb_sf"},{"menu_id":"FOR","startDate":"","menu_item_id":"dzyj","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shuiqiyouxiang（yuandishui）","pxxh":2,"modify_time":"","pinyin":"sqyx(yds)","parent_id":"hdzx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/mail/index.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"查看历史邮箱","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=hdzx_01&menu_item_id=dzyj"},{"menu_id":"FOR","startDate":"","menu_item_id":"dzyj_0101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"dianziyoujian","pxxh":1,"modify_time":"","pinyin":"dzyj","parent_id":"dzyj","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/mail/index.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"电子邮件","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=hdzx_01&menu_item_id=dzyj_0101"},{"menu_id":"FOR","startDate":"","menu_item_id":"gzcx_0101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"fapiaoxinxichaxun","pxxh":1,"modify_time":"","pinyin":"fpxxcx","parent_id":"gzcx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://fpcx.xmtax.gov.cn:7002","dz_bz":"N","menu_item_name":"发票查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/fpcx/index.do"},{"menu_id":"THR","startDate":"","menu_item_id":"gzcx_02","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zhongdashuishouweifaanjianchaxun","pxxh":2,"modify_time":"","pinyin":"zdsswfajcx","parent_id":"gzcx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/xmswcms/wycx/zdss.html","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"重大税收违法案件查询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/wycx/zdss.html"},{"menu_id":"THR","startDate":"","menu_item_id":"gzcx_03","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"xinyongdengjiAleinashuirenchaxun","pxxh":3,"modify_time":"","pinyin":"xydjAlnsrcx","parent_id":"gzcx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/dwfw/xydj/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"信用等级A类纳税人查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/gzfw/gzcx/xydjalnsrcx/xydjalnsrcxInfo"},{"menu_id":"FOR","startDate":"","menu_item_id":"gzcx_0401","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"qianshuichaxun","pxxh":4,"modify_time":"","pinyin":"qscx","parent_id":"gzcx_04","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"欠税查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/gzfw/gzcx/qscx/qscxInfo"},{"menu_id":"FOR","startDate":"","menu_item_id":"gzcx_0501","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"nashuiqingkuangzhengmingchayan","pxxh":1,"modify_time":"","pinyin":"nsqkzmcy","parent_id":"gzcx_05","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wsbsfwt2.xmtax.gov.cn:1080","dz_bz":"N","menu_item_name":"纳税情况证明查验","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/dwfw/gswszmcy.do?flag=WZ"},{"menu_id":"FOR","startDate":"","menu_item_id":"gzcx_0502","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"wuzhihuashuziqianmingwendangchakan","pxxh":2,"modify_time":"","pinyin":"wzhszqmwdck","parent_id":"gzcx_05","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"无纸化数字签名文档查看","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/viewFile.jsp"},{"menu_id":"THR","startDate":"","menu_item_id":"gzcx_06","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"","pxxh":7,"modify_time":"","pinyin":"","parent_id":"gzcx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人状态查询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/wycx.html?flag=nsrzt"},{"menu_id":"THR","startDate":"","menu_item_id":"gzcx_07","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"","pxxh":8,"modify_time":"","pinyin":"","parent_id":"gzcx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"一般纳税人资格查询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/wycx.html?flag=ybnsr"},{"menu_id":"THR","startDate":"","menu_item_id":"gzcx_08","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"","pxxh":9,"modify_time":"","pinyin":"","parent_id":"gzcx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"涉税文书审批结果查询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/wycx.html?flag=ssws"},{"menu_id":"THR","startDate":"","menu_item_id":"gzcx_09","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"","pxxh":10,"modify_time":"","pinyin":"","parent_id":"gzcx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"电子签章基本信息查询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/wycx.html?flag=dzqz"},{"menu_id":"FOR","startDate":"","menu_item_id":"gzcx_1001","zttsxx":" ","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shuiwujianchazhengchayan","pxxh":4,"modify_time":"","pinyin":"swjczcy","parent_id":"gzcx_10","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"税务检查证查验","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/gzfw/gzcx/swjczcy/manager"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"daibantixing","pxxh":1,"modify_time":"","pinyin":"dbtx","parent_id":"hdzx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/swxxtx/getMyMessage.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人待办","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=hdzx_01&menu_item_id=hdzx_0101"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0102","zttsxx":"该模块建设中","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"tishitixing","pxxh":2,"modify_time":"","pinyin":"tstx","parent_id":"hdzx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/views/menu/tstx.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"提示提醒","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=hdzx_01&menu_item_id=hdzx_0102"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0103","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zhengcesudi","pxxh":3,"modify_time":"","pinyin":"zcsd","parent_id":"hdzx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/bsfw/nsrgl/getPolicyExpressr.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"政策速递","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=hdzx_01&menu_item_id=hdzx_0103&gdsbz=GS"},{"menu_id":"FOR","startDate":"","menu_item_id":"hdzx_010401","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"youxiang1（yuanguoshui）","pxxh":1,"modify_time":"","pinyin":"yx1（ygs）","parent_id":"hdzx_0104","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/bsfw/mail/nsrLogin.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"电子邮箱","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=hdzx_01&menu_item_id=hdzx_010401&gdsbz=GS"},{"menu_id":"SEC","startDate":"","menu_item_id":"hdzx_02","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/yybs.png","jianpin":"yuyuebanshui","pxxh":2,"modify_time":"","pinyin":"yybs","parent_id":"hdzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wsbsfwt2.xmtax.gov.cn:1080","dz_bz":"N","menu_item_name":"预约办税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/dwfw/wsyy.do"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0301","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zizhuchaxun","pxxh":1,"modify_time":"","pinyin":"zzcx","parent_id":"hdzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"自助查询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/qwjs/views/search.jsp?siteName=default&clientip=null&fieldOption=0&keyWord"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0302","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zhinengkefuzixun","pxxh":2,"modify_time":"","pinyin":"znkfzx","parent_id":"hdzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://ai.xm-l-tax.gov.cn","dz_bz":"N","menu_item_name":"智能客服咨询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/aiconsult/robot/index.do?_pltfm=01"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0303","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"rengongzixunjieda","pxxh":3,"modify_time":"","pinyin":"rgzxjd","parent_id":"hdzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wsbsfwt2.xmtax.gov.cn:1080","dz_bz":"N","menu_item_name":"人工咨询解答","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/dwfw/user/msgboard_use.do?b_choose=true&b_zxzx=true"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0304","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"liuyanzixun","pxxh":4,"modify_time":"","pinyin":"lyzx","parent_id":"hdzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wsbsfwt2.xmtax.gov.cn:1080","dz_bz":"N","menu_item_name":"留言咨询","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/dwfw/user/msgboard_use.do?b_choose=true&b_addlogin=true"},{"menu_id":"SEC","startDate":"","menu_item_id":"hdzx_04","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/nsrmyddc.png","jianpin":"nashuirenmanyidudiaocha","pxxh":4,"modify_time":"","pinyin":"nsrmyddc","parent_id":"hdzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/bsfw/nsrgl/queryNsryjzj.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人满意度调查","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=hdzx_04&menu_item_id=hdzx_04&gdsbz=GS"},{"menu_id":"SEC","startDate":"","menu_item_id":"hdzx_05","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/nsrxq.png","jianpin":"nashuirenxuqiu","pxxh":5,"modify_time":"","pinyin":"nsrxq","parent_id":"hdzx","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzhd.xmtax.gov.cn:8004","dz_bz":"N","menu_item_name":"纳税人需求","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/front/dispatch/checkAndLoginByNsrsbh1.do"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0601","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"xingzhengjiuji","pxxh":1,"modify_time":"","pinyin":"xzjj","parent_id":"hdzx_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"行政救济","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/xzfysq/xzfysqcxInfo"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0602","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nafutousu","pxxh":2,"modify_time":"","pinyin":"nfts","parent_id":"hdzx_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzhd.xmtax.gov.cn:8004","dz_bz":"N","menu_item_name":"纳服投诉","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/front/dispatch/checkAndLoginByNsrsbh1.do"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0603","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"weifajubao","pxxh":3,"modify_time":"","pinyin":"wfjb","parent_id":"hdzx_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzhd.xmtax.gov.cn:8004","dz_bz":"N","menu_item_name":"违法举报","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/front/dispatch/checkAndLoginByNsrsbh1.do"},{"menu_id":"THR","startDate":"","menu_item_id":"hdzx_0604","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"xinyongfuping","pxxh":4,"modify_time":"","pinyin":"xyfp","parent_id":"hdzx_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"信用复评","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/bszx/nsxy/nsxyfpsq/nsxyfpsqManager"},{"menu_id":"THR","startDate":"","menu_item_id":"sssq_0100","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuishouyouhuishenqing","pxxh":5,"modify_time":"","pinyin":"ssyhsq","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/views/pw/ssyhsq.jsp","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"税收优惠申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=sssq_0100"},{"menu_id":"THR","startDate":"","menu_item_id":"sssq_0112","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shebaotuifeishenqing","pxxh":13,"modify_time":"","pinyin":"sbtfsq","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/pw/syxy.do?forward=WZSB0001","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"社保退费申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=sssq_0112"},{"menu_id":"THR","startDate":"","menu_item_id":"sssq_0113","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"geshuidaikoudaijiaoshouxufeishenqing","pxxh":14,"modify_time":"","pinyin":"gsdkdjsxfsq","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notgr;notsbgs;notgr","real_url":"/pw/newPw.do?forward=WZDZ0009","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"个税代扣代缴手续费申请","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=sssq_0113"},{"menu_id":"THR","startDate":"","menu_item_id":"sssq_0114","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuiwudengjixinxiweihuhetiaomadayin","pxxh":15,"modify_time":"","pinyin":"swdjxxwhhtmdy","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/sssq/swdjxxwh/swdjtmcx.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"税务登记信息维护和条码打印","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=sssq_0114"},{"menu_id":"THR","startDate":"","menu_item_id":"sssq_0115","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuiwudengjixinxichaxun","pxxh":16,"modify_time":"","pinyin":"swdjxxcx","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/sssq/swdjxxwh/swdjxxview.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"税务登记信息查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=sssq_0115"},{"menu_id":"THR","startDate":"","menu_item_id":"sssq_0116","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"sheshuishenqingbanliqingkuangchaxun","pxxh":17,"modify_time":"","pinyin":"sssqblqkcx","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/pw/pwlr.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"涉税申请办理情况查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=sssq_0116"},{"menu_id":"THR","startDate":"","menu_item_id":"sssq_0117","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"shuzizhengshushiyongxieyichaxun","pxxh":18,"modify_time":"","pinyin":"szzssyxycx","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/pw/pwsyxy.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"数字证书使用协议查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=sssq_0117"},{"menu_id":"THR","startDate":"","menu_item_id":"sssq_0119","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"biangengshuiwudengji","pxxh":20,"modify_time":"","pinyin":"bgswdj","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/pw/swdj/bgswdj.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"变更税务登记","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=sssq_0119"},{"menu_id":"THR","startDate":"","menu_item_id":"sssq_0121","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"daikaizengzhishuifapiaoshenbaodan","pxxh":22,"modify_time":"","pinyin":"dkzzsfpsbd","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/pw/syxy.do?forward=WZDKFP01","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"代开增值税发票申报单","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=sssq_0121"},{"menu_id":"SEC","startDate":"","menu_item_id":"tcyw_01","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"xinbannashuirenyewu","pxxh":1,"modify_time":"","pinyin":"xbnsryw","parent_id":"tcyw","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/xbnsrtcsfw/jsp/index.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"Y","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://xbnsrtcsfw.xmtax.gov.cn:8002","dz_bz":"N","menu_item_name":"新办纳税人业务","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xbnsrtcsfw/jsp/xbnsrtcsfw/tcsfw/entrance.jsp"},{"menu_id":"SEC","startDate":"","menu_item_id":"tcyw_02","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"kuaquyushuiyuanxinxibaogaoyewu","pxxh":2,"modify_time":"","pinyin":"kqysyxxbgyw","parent_id":"tcyw","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"Y","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"清税注销税（费）申报及缴纳套餐","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/gxhbs/tcjzhyw/qszxssbjjntc/qszxssbjjntcInfo"},{"menu_id":"SEC","startDate":"","menu_item_id":"tcyw_03","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zhufushuilianheshenbaojiaonayewu","pxxh":3,"modify_time":"","pinyin":"zfslhsbjnyw","parent_id":"tcyw","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"Y","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wssb.xm-n-tax.gov.cn:7001","dz_bz":"N","menu_item_name":"主附税联合申报缴纳业务","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssb/wssb/public/jsp/wssb.jsp?sblx=ZZS_YBNSR"},{"menu_id":"SEC","startDate":"","menu_item_id":"tsyw_02","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"wuzhihuabanshui","pxxh":2,"modify_time":"","pinyin":"wzhbs","parent_id":"tsyw","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"Y","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzh.xmtax.gov.cn:9558","dz_bz":"N","menu_item_name":"无纸化办税","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/adp/xmsatProcessNoLogin?wsbq=wsbs"},{"menu_id":"SEC","startDate":"","menu_item_id":"tsyw_04","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"fapiaowangshangshenling","pxxh":4,"modify_time":"","pinyin":"fpwssl","parent_id":"tsyw","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"Y","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://fpsl.xmtax.gov.cn:7001","dz_bz":"N","menu_item_name":"发票网上申领","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/wssl_nsrd/"},{"menu_id":"FOR","startDate":"","menu_item_id":"tzgg_0101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zhengcefaguitongzhigonggao","pxxh":4,"modify_time":"","pinyin":"zcfgtzgg","parent_id":"tzgg_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/swxxtx/tzgg.do?gglx=zcfg","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"政策法规","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/swxxtx/tzgg.do?gglx=zcfg"},{"menu_id":"FOR","startDate":"","menu_item_id":"tzgg_0106","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"sheshuitongzhi","pxxh":1,"modify_time":"","pinyin":"sstz","parent_id":"tzgg_06","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/swxxtx/tzgg.do?gglx=tzgg","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"涉税通知","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/swxxtx/tzgg.do?gglx=tzgg"},{"menu_id":"THR","startDate":"","menu_item_id":"tzgg_02","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zhongdashuishouweifaanjiangonggao","pxxh":2,"modify_time":"","pinyin":"zdsswfajgg","parent_id":"tzgg","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wzhd.xmtax.gov.cn:8004","dz_bz":"N","menu_item_name":"重大税收违法案件公告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/front/dispatch/getsswfrightlist.do?showList=true"},{"menu_id":"THR","startDate":"","menu_item_id":"tzgg_03","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"xinyongdengjiAleinashuirengonggao","pxxh":3,"modify_time":"","pinyin":"xydjAlnsrgg","parent_id":"tzgg","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"信用等级A类纳税人公告","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/wycx.html?flag=Ajnsr"},{"menu_id":"FOR","startDate":"","menu_item_id":"tzgg_0401","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"qianshuigonggao","pxxh":4,"modify_time":"","pinyin":"qsgg","parent_id":"tzgg_04","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/swxxtx/tzgg.do?gglx=qsgg","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn:6011","dz_bz":"N","menu_item_name":"欠税公告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/cxzx/qsgg/manager"},{"menu_id":"FOR","startDate":"","menu_item_id":"tzgg_0501","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"qitagonggao","pxxh":5,"modify_time":"","pinyin":"qtgg","parent_id":"tzgg_05","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/swxxtx/tzgg.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"其他公告","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/swxxtx/tzgg.do"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0101","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuirenjibenxinxi","pxxh":1,"modify_time":"","pinyin":"nsrjbxx","parent_id":"yhzx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/swxxtx/queryNsrjbxx.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人基本信息","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_01&menu_item_id=yhzx_0101"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0102","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuirenshui（fei）zhongrendingxinxi","pxxh":2,"modify_time":"","pinyin":"nsrs（f）zrdxx","parent_id":"yhzx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/bsfw/nsrgl/queryNsrsz.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人税（费）种认定信息","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=yhzx_01&menu_item_id=yhzx_0102&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0103","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuirenhedingxinxi","pxxh":3,"modify_time":"","pinyin":"nsrhdxx","parent_id":"yhzx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/sszyfw/queryNsrhdxx.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人核定信息","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_01&menu_item_id=yhzx_0103"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0104","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuirenzigexinxi","pxxh":4,"modify_time":"","pinyin":"nsrzgxx","parent_id":"yhzx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/bsfw/nsrgl/queryNsrzg.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"纳税人资格信息","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=yhzx_01&menu_item_id=yhzx_0104&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0105","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"yonghujibenxinxiweihu","pxxh":5,"modify_time":"","pinyin":"yhjbxxwh","parent_id":"yhzx_01","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/pw/swdj/smbsryxxcj.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"用户基本信息维护","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_01&menu_item_id=yhzx_0105"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0201","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"dianziziliaochaxun","pxxh":1,"modify_time":"","pinyin":"dzzlcx","parent_id":"yhzx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/dzyx/dzyxquery.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"电子资料查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_02&menu_item_id=yhzx_0201"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0202","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"dianziziliaobaosong","pxxh":2,"modify_time":"","pinyin":"dzzlbs","parent_id":"yhzx_02","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/dzzlcx/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"电子资料报送","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_02&menu_item_id=yhzx_0202"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0301","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"yonghujibenxinxiweihu","pxxh":1,"modify_time":"","pinyin":"yhjbxxwh","parent_id":"yhzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/pw/swdj/smbsryxxcj.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"用户基本信息维护","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_03&menu_item_id=yhzx_0301"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0302","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"mimaxiugai","pxxh":2,"modify_time":"","pinyin":"mmxg","parent_id":"yhzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/yhgl/findYddh.do?key=2","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"密码修改","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_03&menu_item_id=yhzx_0302"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0303","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"yonghushouquan","pxxh":3,"modify_time":"","pinyin":"yhsq","parent_id":"yhzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/yhgl/openSqlb.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"用户授权","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_03&menu_item_id=yhzx_0303"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0304","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"yonghuzhuxiao","pxxh":5,"modify_time":"","pinyin":"yhzx","parent_id":"yhzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/yhgl/findYddh.do?key=1","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"用户注销","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_03&menu_item_id=yhzx_0304"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0306","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shoucangjiaweihu","pxxh":6,"modify_time":"","pinyin":"scjwh","parent_id":"yhzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/scj/index.do","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"收藏夹维护","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=yhzx_03&menu_item_id=yhzx_0306"},{"menu_id":"THR","startDate":"","menu_item_id":"yhzx_0307","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"weixinfuwuhaojiechubangding","pxxh":7,"modify_time":"","pinyin":"wxfwhjcbd","parent_id":"yhzx_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"/views/nsrxxhd/wxjb.jsp","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt1.xmtax.gov.cn","dz_bz":"N","menu_item_name":"微信服务号解除绑定","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"gs","menu_item_url":"/lhpt/indexV2.do?menuid=yhzx_03&menu_item_id=yhzx_0307&gdsbz=GS"},{"menu_id":"THR","startDate":"","menu_item_id":"zhcx_0104","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"beianshixiangxiangshoujianmianmingxichaxun","pxxh":4,"modify_time":"","pinyin":"basxxsjmmxcx","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/otp4query/List.do?id=0307","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"备案事项享受减免明细查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=zhcx_0104"},{"menu_id":"THR","startDate":"","menu_item_id":"zhcx_0112","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"dianziqianzhangchaxun","pxxh":12,"modify_time":"","pinyin":"dzqzcx","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/dzyx/dzqzcy.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"电子签章查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=zhcx_0112"},{"menu_id":"THR","startDate":"","menu_item_id":"zhcx_0113","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"","jianpin":"dianziyingxiangchaxun","pxxh":13,"modify_time":"","pinyin":"dzyxcx","parent_id":"tsyw_03","xzgz_class":"nsrALL;notsb;notsbgs;notgs;notgr","real_url":"/dzyx/dzyxquery.do","server_id":"old;nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"https://wsbsfwt2.xmtax.gov.cn","dz_bz":"N","menu_item_name":"电子影像查询","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"ds","menu_item_url":"/tnsfwHome/index.do?menuid=tsyw_03&menu_item_id=zhcx_0113"},{"menu_id":"THR","startDate":"","menu_item_id":"zxfd_01","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"nashuirenxuetang","pxxh":1,"modify_time":"","pinyin":"nsrxt","parent_id":"zxfd","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://nsrkt.xm-n-tax.gov.cn:7031","dz_bz":"N","menu_item_name":"纳税人学堂","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/nskt/"},{"menu_id":"THR","startDate":"","menu_item_id":"zxfd_02","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"shuishouzhengcejijiedu","pxxh":2,"modify_time":"","pinyin":"sszcjjd","parent_id":"zxfd","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"税收政策及解读","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/fgk.html"},{"menu_id":"THR","startDate":"","menu_item_id":"zxfd_03","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"banshuizhinan","pxxh":3,"modify_time":"","pinyin":"bszn","parent_id":"zxfd","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"办税指南","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/bsfw/bszn.html"},{"menu_id":"THR","startDate":"","menu_item_id":"zxfd_04","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"caozuoguicheng","pxxh":4,"modify_time":"","pinyin":"czgc","parent_id":"zxfd","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://wsbsfwt2.xmtax.gov.cn:1080","dz_bz":"N","menu_item_name":"操作规程","target":"","wydkfs_dm":"1","zt_bz":"1","gds_bz":"","menu_item_url":"/dwfw/czgcQuery.do"},{"menu_id":"THR","startDate":"","menu_item_id":"zxfd_05","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"xiazaifuwu","pxxh":5,"modify_time":"","pinyin":"xzfw","parent_id":"zxfd","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"下载服务","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/bsfw/bsfw-zlxz/zlxz-bdzsxz/bdzsxz-swdj/pages/index.html"},{"menu_id":"THR","startDate":"","menu_item_id":"zxfd_06","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"redianwenti","pxxh":6,"modify_time":"","pinyin":"rdwt","parent_id":"zxfd","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"热点问题","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/bsfw/12366/rdwt/pages/index.html"},{"menu_id":"FOR","startDate":"","menu_item_id":"zxfd_0701","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"zhuantifudao","pxxh":1,"modify_time":"","pinyin":"ztfd","parent_id":"zxfd_07","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"专题辅导","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/ssxc/rdhy/ztfd/pages/index.html"},{"menu_id":"FOR","startDate":"","menu_item_id":"zxfd_0702","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"xinzhenghuibian","pxxh":2,"modify_time":"","pinyin":"xzhb","parent_id":"zxfd_07","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"新政汇编","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/ssxc/rdhy/xzhb/pages/index.html"},{"menu_id":"THR","startDate":"","menu_item_id":"zxfd_08","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"banshuiditu","pxxh":8,"modify_time":"","pinyin":"bsdt","parent_id":"zxfd","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"办税地图","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/bsdt.html"},{"menu_id":"THR","startDate":"","menu_item_id":"zxfd_09","zttsxx":"","bz":"Y","endDate":"","sfkz_bz":"","icon_addr":"/images/login_main/menuLi.png","jianpin":"banshuirili","pxxh":9,"modify_time":"","pinyin":"bsrl","parent_id":"zxfd","xzgz_class":"nsrALL;notsb;notsbgs;notgs;default;notgr","real_url":"","server_id":"nsr","cy_bz":"N","sf_leftmenu_dm":"N","yz_bz":"Y","styleClass":"","width":0,"qz_url":"http://www.xmtax.gov.cn","dz_bz":"N","menu_item_name":"办税日历","target":"","wydkfs_dm":"2","zt_bz":"1","gds_bz":"","menu_item_url":"/xmswcms/rili/bainianli_1.htm"}];
     $(function(){
	      //tab面板切换
		 
	     $('.box>ul>li').mouseover(function(){
			var $ul = $(this).parent();//获取当前li的父元素
			var liindex = $ul.children('li').index(this);//获取当前li的在父类中的所有li集合中的角标
			$(this).addClass('on').siblings().removeClass('on');//2.给当前li 添加 on 的class，移除其他兄弟的on class
			$ul.next().children("div").eq(liindex).fadeIn(150).siblings('.ct').hide();//3.淡入li对应的product 同时隐藏其他
			var imgs = $ul.next().children("div").eq(liindex).find("img");
			imgs.each(function(){
				if(($(this).attr("src")) == "")
				    $(this).attr("src",$(this).attr("data-src"));
			});
			var liWidth = $(this).width();//4.获取当前li的长度
			$ul.children('p').width(liWidth+20);//4.变动底下的线条
			
			if("服务提醒"==$(this).text()){
				getFwtx();
				$("#Fwtxmore").show();
				$("#WddbRefresh").hide();
			}else if("我的待办"==$(this).text()){
				$("#Fwtxmore").hide();
				$("#WddbRefresh").show();
			}
			 /*if("我要办税"==$(this).text() || "我要查询"==$(this).text()){
				$(".main_right_under").css("display","none");
				$("#box1").css("height","730px");
			}else{ 
				$("#box1").css("height","370px");
				$(".main_right_under").css("display","");
			}*/ 

			if( "公众服务"==$(this).text()|| "通知公告"==$(this).text()){ 
                getNewTz();
				$("#box2").css("display","none");
				$("#box3").css("display","");
			}else{ 
				$("#box3").css("display","none");
				$("#box2").css("display","");
			}
			if(liindex==0){
				$ul.children('p').stop(false,true).animate({'left' : '32px'},300);
			}else{
				$ul.children('p').stop(false,true).animate({'left' : ($(this).position().left-10) + 'px'},300);
			}
		});
		//表格颜色
		$("#undertable tr:nth-child(even)").addClass("trOdd");
		$("#undertable tr:nth-child(odd)").addClass("trEven");
        var gotoMenuName = window.parent.parent.getGotoMenu();
		if(gotoMenuName !=undefined && gotoMenuName != null && gotoMenuName != ""){  
           $("#"+ gotoMenuName).mouseover();
		}else{
			$("#yhzx").mouseover();
		}
		$("#wddb").mouseover();
	});	
	
	function getFwtx(){
		var fwtxwait=parent.parent.fwtx_wait;
		if(fwtxwait){//是否加载服务提醒
			getTzgg(fwtx_syxx_time,fwtx_sxlx,TzgglbURL);
		}
	}
	function getNewTz(){
			var tzggwait=parent.parent.tzgg_wait;
			if(tzggwait){//是否加载服务提醒
				getnewTzgg(tzgg_syxx_time,tzgg_sxlx);
			}
	}
	function moretzgg(){
    	var url="/tnsfwHome/index.ashx?menuid=tzgg&menu_item_id=tzgg";
    	//window.open(url,'_blank'); //在新的空白页面打开
		window.parent.parent.showMain(url); //覆盖当前页面打开
    }
</script>
<style type="text/css">

	#undertable .trOdd{background-color: #ffffff !important;border-bottom:1px solid #ededed;}
    #undertable .trEven{background-color: #f8fbfd !important;border-bottom:1px solid #ededed;}
*{
	margin:0;
    padding:0;/* 清除内外边距 */
}
body{
	font-family : Microsoft YaHei;
	color : black;
	background-color: #f6f6f6;
}
dl, dt, dd, ul, ol, li {
    list-style: none;
}
.content_info ct{
margin-left: 20px;
}

.hearder{
	width: 100%;
	height: 105px;
	background-color: #168de9;
}
.hearder .welcome{
	font-size: 14px;
	color: #ffffff;
	float: right;
	margin-top: 43px;
	margin-right: 30px;
}
.hearder .welcome img{
	margin: 0 20px;
}
.hearder>div{
	display: inline-block;
	vertical-align: middle;
}
.header_content_search_txt {
    right: 400px;
    height: 36px;
    background: url(/res/images/login_main/header_search_bg.png);
    border: 0;
    vertical-align: top;
    font-size: 14px;
    line-height: 34px;
    width: 321px;
    display: inline-block;
    position: absolute;
    right: 84px;
    padding-left: 35px;
} 
.header_content_search_btn{
	right: 355px;
	position: absolute;
	margin-top: -3px;
}
.logo{
	padding-top: 10px;
    padding-left: 40px;
}
.right{
	float: right;
	padding-top: 42px;
}
.main{
	background-color: #F6F6F6;
	height:760px;
}

.main .main_left{
    position:absolute;
	background-color: #FFFFFF;
	border: 1px solid #EDEDED;
	border-radius:3px;
	width: 338px;/*高固定340px含描边*/
	height:684px;/*高固定686px含描边*/
	margin-left: 20px;
}


.main_right>div{
	background-color: #FFFFFF;
	border: 1px solid #EDEDED;
	border-radius:3px;	 
}
.main_right .main_right_under{
	margin-top: 20px;
}

.menuDiv{
	background-color:#168ee8;
	vertical-align:middle;
	height: 40px;
}
.menuDiv>div{
	display: inline-block;
}
.menuDiv img{
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 10px;
	vertical-align: middle;
}
.menuDiv span{
	vertical-align: bottom;
	color: #ffffff;
}
.menuDiv #setting{
    float: right;
    margin-right: 20px;
	margin-top: 9px;
}
.menuUL{
    list-style-type:none;
}
.menuUL li{
   height: 50px;
   border-bottom: 1px dotted #ccc;
}
.menuUL>li>img{
	vertical-align: middle;
	padding-left: 28px;
}
.menuUL>li>span{
    padding-left: 28px;
	vertical-align: middle;
	line-height:50px;
}
.box>ul{
	list-style-type:none;
	line-height:50px;
	overflow: hidden;
	border-bottom: 1px solid #EDEDED;
	position: relative;
    margin-left: -20px;
}
.box>ul>li {
	float:left;
	position:relative;
	cursor:pointer;
	margin-right: 48px;
	border-bottom:none;
	font-size:16px;
/* 	font-weight:bold;
 */	color: #666666;
}

.box>ul .on{
     font-weight:bold;
     color: #168de9;
 }
.box>ul>li:first-child{
	margin-left: 42px;
}
.box ul p{position:absolute;top:48px;left:30px;width:100px;height:7px;border-top: 3px solid #168de9; overflow: hidden; text-align: center;}
.box .box_content{
	height: 308px;
	overflow-y:auto;
}

.box_content>div>div{
	display: inline-block;
	margin-left: 40px;
	margin-right: 16px;
	margin-top: 16px;/*106px-50px*/
	cursor: pointer;
}
.box_content>div>div img{
	display: block;
	
}
.box_content>div>div span{
	display: block;
	font-size:14px;
	color: #333333;
	text-align: center;
	margin-top: 20px;
	
}


.box_content table tr td{
	width: 11.11%;
	cursor: pointer;
	text-align: center;
	background-color: #ffffff;
}
.box_content table tr td img{
		display: block;
		margin-left: auto;
	    margin-right: auto;
	    margin-bottom: 5px;
	    width:48px;
		height:48px;
}
.box_content table tr td span{
	display: block;
    font-size: 14px;
    color: #333333;
    text-align: center;
}



.box ul li :hover{
	color: #168de9;
}
.content_infos span:hover{
	color: #168de9 !important;
}

.main_right_under{
	height: 308px;
}
.main_right_under table{
	border-collapse: collapse;
	font-size: 14px;
	color: #333333;
	width:100%;
	text-align: center;
	margin-top: 10px; 
}
.main_right_under table td{
	height: 45px;
}

.box_content > div>.public_wrap{
	display:block;
	padding-top: 40px;
	margin-top: 0px;
	margin-left: 60px;
}
.content_ public ul li{
	margin:0;
	margin-bottom: 38px;
	font-size: 14px;
}
/* #pubSearchLI{
    margin-left: 0px;
	margin:0;
	margin-bottom: 38px;
	font-size: 14px;
} */
.content_ public>div>div{
	display:inline-block;
	width: 49%;
	border: 1px solid red;
}
.content_ public .pubSearch{
	display: inline-block;
    width: 322px;
}
.content_ public .consult{
	display: inline-block;
	float: right;
	margin-right: 100px;
	
}
.pubSearch{
	vertical-align: middle;
	/* text-align: center; */
}
.pubSearchLI ul{
	font-size: 0px;
}
.pubSearchLI li:hover{  
	color: #168de9;
}

.pubSearchLI li{
	width: 212px;
	display:inline-block;
	float: left;
	margin-top: 15PX;
	font-size: 14px;
	line-height:35px;
}

.pubSearchLI li span{
	display:inline-block !important;
	margin-top: 0PX !important;
	padding-left: 10px;
}
.pubSearchLI li img{
	display:inline-block !important;	
}

.pubSearchLI ul{
	width: 480px;
	
}
.consult{
	vertical-align: middle;
	/* text-align: center; */
}

.consult li:hover{  
	color: #168de9;
}
.consult li{
	width: 200px;
	display:inline-block;
	float: left;
	margin-top: 15PX;
	font-size: 14px;
	line-height:35px;
}

.consult li span{
	display:inline-block !important;
	margin-top: 0PX !important;
	padding-left: 10px;
}
.consult li img{
	display:inline-block !important;
}

.main_right_up{
  position: relative;
	z-index: 1;
}
.main_right_under{
  height:360px;
  position: relative;
	z-index: 1;
}
#undertable tr:nth-child(odd) td{
	background-color:#F9FAFD;
}
.menuobj2 table tr td{
	text-align: left;
}
.blButton{
    width: 60px;
    height: 24px;
    color: #FFFFFF;
    text-align: center;
    line-height: 24px;
    background-color: #74B1EE;
    cursor: pointer;
    border-radius:3px;
    behavior: url(../PIE-1.0.0/PIE.htc);
}
.blButton:hover{
	background-color: #168de9;
	cursor: pointer;
}
#undertable{
	color:#666666;
}
#undertable tr td:nth-child(1){
	color:#333333;
}
#undertable tr:nth-child(1) td:nth-child(1){
	color:#666666;
}
.main_right_under table td{
	height: 48px;
}
.main_right_under table{
	margin-top: 0px;
}
#undertable table tr td{
	cursor: none;
} 
#tzgglb tr:nth-child(odd) td {
    background-color: #F9FAFD;
}
#tzgglb tr td{
    cursor: text;
}
#tzgglb tr:nth-child(odd) td {
    background-color: #F9FAFD;
}
#Fwtxmore:hover{
	color: #168de9 !important;
	cursor: pointer;
}
.oddLineCss td{
	background-color:#F9FAFD !important;
}
#box1{  
	height:370px;
	
}

</style>
</head>
<body>
	<div class="main">
		
		<div class="main_right">
			<!-- 右边上部分切换版 -->
			<div class="main_right_up">
				<div class="box" id = "box1">
						<ul>
							<li id="yhzx">我的信息</li>
							<li id="bszx">我要办税</li>
							<li id="cxzx">我要查询</li>
							<li id="hdzx">互动中心</li>
							<li id="gzfw">公众服务</li>
							<p ><b></b></p>
						</ul>
				 	<div class="box_content" > 
						 					         
								
							 							
											         
								
							 							
											         
								
							 							
											         
								  
								
									
										<div class="content_info ct"style="margin-top: 20px;">
								    	
									
									 
								<table class="content_info ct" style="border-style:none;width:100%">
									    
										    
												<tr valign="top" style="height: 140px;">
											
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('yhzx_01','yhzx','/tnsfwHome/index.do?menuid=yhzx_01&menu_item_id=yhzx_01','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/nsrxx.png"><span>纳税人信息</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('yhzx_02','yhzx','/tnsfwHome/index.do?menuid=yhzx_02&menu_item_id=yhzx_02','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/dzzl.png"><span>电子资料</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('yhzx_03','yhzx','/tnsfwHome/index.do?menuid=yhzx_03&menu_item_id=yhzx_03','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/yhgl.png"><span>用户管理</span>
														   </td>
														
													
												
												
												
											
											 
											 
											 <td colspan="6" style="width:66.66%;"> </td>
									         
										  
							          	  </tr>
									     
										 
									   		

							    </table>
								</div>
							
							 							
											         
								  
								
										
									
											<div class="content_info ct" style="display: none;margin-top:20px;">	
									
									 
								<table class="content_info ct" style="border-style:none;width:100%">
									    
										    
												<tr valign="top" style="height: 140px;">
											
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_01','bszx','/tnsfwHome/index.do?menuid=bszx_01&menu_item_id=bszx_01','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/zhxxbg.png"><span>综合信息报告</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_02','bszx','/tnsfwHome/index.do?menuid=bszx_02&menu_item_id=bszx_02','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/fpsy.png"><span>发票使用</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_03','bszx','/tnsfwHome/index.ashx?menuid=bszx_03&menu_item_id=bszx_03','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/sfsbjjn.png"><span>税费申报及缴纳</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_04','bszx','/tnsfwHome/index.do?menuid=bszx_04&menu_item_id=bszx_04','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/ssjm.png"><span>税收减免</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_05','bszx','/tnsfwHome/index.do?menuid=bszx_05&menu_item_id=bszx_05','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/zmkj.png"><span>证明开具</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_06','bszx','/tnsfwHome/index.do?menuid=bszx_06&menu_item_id=bszx_06','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/swxzxk.png"><span>税务行政许可</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_07','bszx','/tnsfwHome/index.do?menuid=bszx_07&menu_item_id=bszx_07','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/hdgl.png"><span>核定管理</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_08','bszx','/tnsfwHome/index.do?menuid=bszx_08&menu_item_id=bszx_08','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/ybtdsgl.png"><span>一般退（抵）税管理</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_09','bszx','/scj/syxxbg.do?params=ckts','2','Y','ds')">
                                                             <img class="lazyimg" src="" data-src="/res/images/login_main/cktsgl.png"><span>出口退税管理</span>	
															</td>												
                                                    	
														
													
												
												
												
											
											
										  
							          	  </tr>
									     
										 
									   
										    
												<tr valign="top" style="height: 140px;">
											
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_10','bszx','/tnsfwHome/index.do?menuid=bszx_10&menu_item_id=bszx_10','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/zzsdspzgl.png"><span>增值税抵扣凭证管理</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												
												<!-- 正在开发中 -->														
													<td class="content_infos"style="background-color: #ffffff;"  onclick="layer.alert('该模块建设中');">
														<img class="lazyimg" src="" data-src="/res/images/login_main/swdbgzjqsq.png"><span>税务代保管资金收取</span>
													</td>														
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_12','bszx','/xgzlbg/cx.do?zl_bz=yydj','1','Y','ds')">
                                                             <img class="lazyimg" src="" data-src="/res/images/login_main/yuyuedingjia.png"><span>预约定价安排</span>	
															</td>												
                                                    	
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_13','bszx','/tnsfwHome/index.do?menuid=bszx_13&menu_item_id=bszx_12','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/nashuixinyong.png"><span>纳税信用</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_14','bszx','/tnsfwHome/index.do?menuid=bszx_14&menu_item_id=bszx_14','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/jcjc.png"><span>稽查检查</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_15','bszx','/tnsfwHome/index.do?menuid=bszx_15&menu_item_id=bszx_15','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/sszyfwjggl.png"><span>涉税专业服务机构管理</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_16','bszx','/tnsfwHome/index.do?menuid=bszx_16&menu_item_id=bszx_16','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/flzzyjjsx.png"><span>法律追责与救济事项</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('bszx_17','bszx','/tnsfwHome/index.do?menuid=bszx_17&menu_item_id=bszx_17','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/qtfwsx.png"><span>其他服务事项</span>
														   </td>
														
													
												
												
												
											
											
										  
							          	  </tr>
									     
										 
									   		

							    </table>
								</div>
							
							 							
											         
								  
								
										
									
											<div class="content_info ct" style="display: none;margin-top:20px;">	
									
									 
								<table class="content_info ct" style="border-style:none;width:100%">
									    
										    
												<tr valign="top" style="height: 140px;">
											
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_15','cxzx','https://wsbsfwt1.xmtax.gov.cn:6011/cxzx/bsjdjjgxxcx/manager','1','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/bsjdjjgxxcx.png"><span>办税进度及结果信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_16','cxzx','/tnsfwHome/index.do?menuid=cxzx_16&menu_item_id=cxzx_16','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/fpxxcx.png"><span>发票信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_17','cxzx','/cxzx/sbxxcx/manager.html','1','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/shenbaoxinxi.png"><span>申报信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_18','cxzx','https://wsbsfwt1.xmtax.gov.cn:6011/cxzx/jkxxcx/jkxxcxInfo','1','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/jkxxcx.png"><span>缴款信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_19','cxzx','https://wsbsfwt1.xmtax.gov.cn:6011/cxzx/qsxxcx/qsxxcxInfo','1','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/qsxxcx.png"><span>欠税信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_04','cxzx','https://wsbsfwt1.xmtax.gov.cn:6011/cxzx/yhxxcx/manager','1','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/yhxxcx.png"><span>优惠信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_01','cxzx','https://wsbsfwt1.xmtax.gov.cn/lhpt/indexV2.do?menuid=cxzx_01&menu_item_id=cxzx_01&gdsbz=GS','1','Y','gs')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/gtgshd.png"><span>个体工商户核定定额信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_02','cxzx','/tnsfwHome/index.do?menuid=cxzx_02&menu_item_id=cxzx_02','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/zmxxcx.png"><span>证明信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_05','cxzx','https://wsbsfwt1.xmtax.gov.cn:6011/cxzx/sszjjgxxcx/manager','1','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/sszjjgxxcx.png"><span>涉税中介机构信息查询</span>
														   </td>
														
													
												
												
												
											
											
										  
							          	  </tr>
									     
										 
									   
										    
												<tr valign="top" style="height: 140px;">
											
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_06','cxzx','https://wsbsfwt1.xmtax.gov.cn:6011/cxzx/nsxyztxxcx/manager','1','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/nsxyztxxcx.png"><span>纳税信用状态信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_07','cxzx','https://wsbsfwt1.xmtax.gov.cn:6011/cxzx/wfwzxxcx/manager','1','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/wfwzxxcxl.png"><span>违法违章信息查询类</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_08','cxzx','/scj/lsczcx.do','1','Y','ds')">
                                                             <img class="lazyimg" src="" data-src="/res/images/login_main/lsbsczcx.png"><span>历史办税操作查询</span>	
															</td>												
                                                    	
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_09','cxzx','/tnsfwHome/index.do?menuid=cxzx_09&menu_item_id=cxzx_09','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/zhcz.png"><span>综合查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_10','cxzx','http://wlfpcx.xmtax.gov.cn:7001/fpgl/jsp/wlfp/kpxxcx/nsr_kpxxcx_index.jsp','1','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/wlfpcx.png"><span>网络发票查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_11','cxzx','/tnsfwHome/index.do?menuid=cxzx_11&menu_item_id=cxzx_11&gdsbz=GS','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/cktscx.png"><span>出口退税查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_12','cxzx','/tnsfwHome/index.do?menuid=cxzx_12&menu_item_id=cxzx_12&gdsbz=GS','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/cssjcx.png"><span>抄税数据查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_13','cxzx','/tnsfwHome/index.do?menuid=cxzx_13&menu_item_id=cxzx_13','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/rzxxcx.png"><span>认证信息查询</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_14','cxzx','/tnsfwHome/index.do?menuid=cxzx_14&menu_item_id=cxzx_14&gdsbz=GS','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/jhjgcx.png"><span>稽核结果查询</span>
														   </td>
														
													
												
												
												
											
											
										  
							          	  </tr>
									     
										 
									   
										    
												<tr valign="top" style="height: 140px;">
											
											
												<!-- 有效 -->
													
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('cxzx_03','cxzx','/views/jsdzsb/dzsbsy/gscx1.jsp','1','Y','ds')">
                                                             <img class="lazyimg" src="" data-src="/res/images/login_main/gsqccx.png"><span>个税清册查询</span>	
															</td>												
                                                    	
														
													
												
												
												
											
											
										  
							          	  </tr>
									     
										 
									   		

							    </table>
								</div>
							
							 							
											         
								  
								
										
									
											<div class="content_info ct" style="display: none;margin-top:20px;">	
									
									 
								<table class="content_info ct" style="border-style:none;width:100%">
									    
										    
												<tr valign="top" style="height: 140px;">
											
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('hdzx_01','hdzx','/tnsfwHome/index.do?menuid=hdzx_01&menu_item_id=hdzx_01','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/wdxx.png"><span>我的消息</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('hdzx_02','hdzx','http://wsbsfwt2.xmtax.gov.cn:1080/dwfw/wsyy.do','2','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/yybs.png"><span>预约办税</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('hdzx_03','hdzx','/tnsfwHome/index.do?menuid=hdzx_03&menu_item_id=hdzx_03','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/zxjh.png"><span>在线交互</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('hdzx_04','hdzx','https://wsbsfwt1.xmtax.gov.cn/lhpt/indexV2.do?menuid=hdzx_04&menu_item_id=hdzx_04&gdsbz=GS','1','Y','gs')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/nsrmyddc.png"><span>纳税人满意度调查</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('hdzx_05','hdzx','http://wzhd.xmtax.gov.cn:8004/front/dispatch/checkAndLoginByNsrsbh1.do','2','Y','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/nsrxq.png"><span>纳税人需求</span>
														   </td>
														
													
												
												
												
											
											
										
										 
									   
										  
											
												<!-- 有效 -->
													
														
														
															<td class="content_infos" style="background-color: #ffffff;" onclick="window.parent.showContent('hdzx_06','hdzx','/tnsfwHome/index.do?menuid=hdzx_06&menu_item_id=hdzx_01','1','N','')">
														      <img class="lazyimg" src="" data-src="/res/images/login_main/qybh.png"><span>权益保护</span>
														   </td>
														
													
												
												
												
											
											 
											 
											 <td colspan="3" style="width:33.33%;"> </td>
									         
										  
							          	  </tr>
									     
										 
									   		

							    </table>
								</div>
							
							 							
											         
								
							
								<div class="content_ public ct"  style="display: none;" >
                                    <div style="display: block;margin-top: 25px;">
																			 
											
													
												
	
									    									 
											
																																									
												<div class="pubSearch" style="margin-left: 0px;position: absolute;">
													<div style="display: inline-block;"><img class="lazyimg"  src="" data-src="/res/images/login_main/public_search.png"></div>
													<div style="width: 424px;">
													<ul class="pubSearchLI">										    
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_01','gzcx','/tnsfwHome/index.do?menuid=gzcx&menu_item_id=gzcx_01','1','N','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 发票查询</span>
																		</li>												
																	
																
																
																
																
															
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_02','gzcx','http://www.xmtax.gov.cn/xmswcms/wycx/zdss.html','2','Y','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 重大税收违法案件查询</span>
																		</li>												
																	
																
																
																
																
															
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_03','gzcx','https://wsbsfwt1.xmtax.gov.cn:6011/gzfw/gzcx/xydjalnsrcx/xydjalnsrcxInfo','1','Y','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 信用等级A类纳税人查询</span>
																		</li>												
																	
																
																
																
																
															
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_04','gzcx','/tnsfwHome/index.do?menuid=gzcx&menu_item_id=gzcx_04','1','N','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 欠税查询</span>
																		</li>												
																	
																
																
																
																
															
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_05','gzcx','/tnsfwHome/index.do?menuid=gzcx&menu_item_id=gzcx_05','1','N','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 证明信息查询</span>
																		</li>												
																	
																
																
																
																
															
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_06','gzcx','http://www.xmtax.gov.cn/xmswcms/wycx.html?flag=nsrzt','2','Y','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 纳税人状态查询</span>
																		</li>												
																	
																
																
																
																
															
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_07','gzcx','http://www.xmtax.gov.cn/xmswcms/wycx.html?flag=ybnsr','2','Y','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 一般纳税人资格查询</span>
																		</li>												
																	
																
																
																
																
															
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_08','gzcx','http://www.xmtax.gov.cn/xmswcms/wycx.html?flag=ssws','2','Y','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 涉税文书审批结果查询</span>
																		</li>												
																	
																
																
																
																
															
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_09','gzcx','http://www.xmtax.gov.cn/xmswcms/wycx.html?flag=dzqz','2','Y','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 电子签章基本信息查询</span>
																		</li>												
																	
																
																
																
																
															
																												
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('gzcx_10','gzcx','/tnsfwHome/index.do?menuid=gzcx&menu_item_id=gzcx_10','1','N','')">
																		   <img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 税务检查证查验</span>
																		</li>												
																	
																
																
																
																
															
														
													</ul>
													</div>
												</div>												
									        		
												
	
									    									 
											
													
											
												<div class="consult" style="margin-left: 460px;position: absolute;">
													<div style="display: inline-block;"><img class="lazyimg"  src="" data-src="/res/images/login_main/consult.png"></div>
													<ul style="width: 480px;">
															
														      
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('zxfd_01','zxfd','http://nsrkt.xm-n-tax.gov.cn:7031/nskt/','2','Y','')">
																			<img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 纳税人学堂</span>
																		</li>												
																	
																
																
																
																
															
														
															
														      
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('zxfd_02','zxfd','http://www.xmtax.gov.cn/xmswcms/fgk.html','2','Y','')">
																			<img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 税收政策及解读</span>
																		</li>												
																	
																
																
																
																
															
														
															
														      
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('zxfd_03','zxfd','http://www.xmtax.gov.cn/xmswcms/bsfw/bszn.html','2','Y','')">
																			<img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 办税指南</span>
																		</li>												
																	
																
																
																
																
															
														
															
														      
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('zxfd_04','zxfd','http://wsbsfwt2.xmtax.gov.cn:1080/dwfw/czgcQuery.do','1','Y','')">
																			<img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 操作规程</span>
																		</li>												
																	
																
																
																
																
															
														
															
														      
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('zxfd_05','zxfd','http://www.xmtax.gov.cn/xmswcms/bsfw/bsfw-zlxz/zlxz-bdzsxz/bdzsxz-swdj/pages/index.html','2','Y','')">
																			<img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 下载服务</span>
																		</li>												
																	
																
																
																
																
															
														
															
														      
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('zxfd_06','zxfd','http://www.xmtax.gov.cn/xmswcms/bsfw/12366/rdwt/pages/index.html','2','Y','')">
																			<img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 热点问题</span>
																		</li>												
																	
																
																
																
																
															
														
															
														      
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('zxfd_07','zxfd','/tnsfwHome/index.do?menuid=zxfd&menu_item_id=zxfd_07','1','N','')">
																			<img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 重点专题</span>
																		</li>												
																	
																
																
																
																
															
														
															
														      
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('zxfd_08','zxfd','http://www.xmtax.gov.cn/xmswcms/bsdt.html','2','Y','')">
																			<img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 办税地图</span>
																		</li>												
																	
																
																
																
																
															
														
															
														      
														    
														    	<!-- 有效 -->
																  
										 							
														            
																		<li onclick="window.parent.showContent('zxfd_09','zxfd','http://www.xmtax.gov.cn/xmswcms/rili/bainianli_1.htm','2','Y','')">
																			<img class="gzfw_log lazyimg" src="" data-src="/res/images/login_main/gzfwlog.png">
										                                    <span> 办税日历</span>
																		</li>												
																	
																
																
																
																
															
														
														
													</ul>
												</div>													
												
	
									    
									</div>
								</div>
							 							
											 		
					</div>										
				</div>
			</div>				
			<div class="main_right_under">
				<div class="box" id = "box2">
				 	<ul>
				 		<li id="wddb">我的待办</li>
				 		<li>服务提醒</li>	
				 		<div id="Fwtxmore" style="float: right;cursor: pointer;color: #999999;margin-right: 30px;display: none;" onclick="return false;showContent('https://wsbsfwt1.xmtax.gov.cn:6011/cxzx/bsjdjjgxxcx/manager','1','')">更多></div>	
				 		<p ><b></b></p>
				 	</ul>
				 	<div class="box_content menuobj2"> 
				 		<div class="content_wait ct">
				 			<table id="undertable">

				 			</table>
				 		</div>
				 		<div class="content_notice ct" style="display: none">
				 			<table id="tzgglb">

				 			</table>
				 		</div>
				 	</div>
				</div>
				<div class="box" id = "box3" style="display:none">
				 	<ul>
				 		<li style="color: #168de9;" class="on">通知公告</li>
				 		<!-- <li>通知提醒</li>	 -->
				 		<div style="float: right;cursor: pointer;color: #999999;margin-right: 30px;" onclick="return false;moretzgg()">更多></div>
				 		<p ><b></b></p >
				 	</ul>
				 	<div class="box_content menuobj2"> 
				 		<div class="content_wait ct">
				 			<!-- <table id="undertable"></table> -->
				 			<table id="tzgg"></table>
				 		</div>
				 		<!-- <div class="content_notice ct" style="display: none"><table id="tzgglb"></table></div> -->
				 	</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>