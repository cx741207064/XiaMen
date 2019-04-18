/******************************************************公共JS***************************************/
	var SWWSDM = new Array(
		new Array("GS0004","外籍人员收入支付信息注销"),//00
		new Array("PW0002","协定国居民享受协定待遇申请"),//01
		new Array("PW0001","延期缴纳税款申请"),//02
		new Array("PW0008","财产损失税前扣除申请"),//03
		new Array("PW0016","总机构管理费税前扣除申请"),//04
		new Array("SP2502","企业印制冠名票受理情况"),//05  企业印制发票申请
		new Array("SP2512","企业发票领购申请（调整申请）"),//06
		new Array("TS0001","退税申请"),//07
		new Array("DJ0011","开具外出经营税收管理证明申请"),//08
		new Array("PW0020","减免税（费）申请"),//09
		new Array("DS0031","印花税核定征收申请"),//10
		new Array("DJ0001","注销税务登记申请"),//11
		new Array("DJ0004","定期定额户停（歇）业申请"),//12
		new Array("DZ0009","个人所得税代扣代缴手续费申请"),//13
		new Array("PW0009","技术改造国产设备投资抵免企业所得税申请"),//14
		new Array("PW0011","技术改造国产设备投资抵免企业所得税审核"),//15
		new Array("PW0012","技术改造国产设备投资抵免企业所得税明细"),//16
		new Array("DS0030","定期定额ta"),//17
		new Array("DS0035","外籍个人所得税核定"),//18
		new Array("DS0036","外籍个人所得税核定调整"),//19
		new Array("DS0037","外籍个人所得税取消核定"),//20
		new Array("PW0005","预约定价预备会谈申请"),//21
		new Array("ZM0007","付汇申请审批表"),//22
		new Array("TS0007","建安退税申请表"),//23
		new Array("JA0003","外出经营活动情况申报"),//24
		new Array("FJA0003","经营项目缴销申请表"),//25
		new Array("ZS2011","企业所得税减免备案申请"),//26
		new Array("GJ0001","非居民享受税收协定待遇审批申请(企业)"),//27
		new Array("GJ0002","非居民享受税收协定待遇审批申请表（个人）"),//28
		new Array("GJ0003","非居民享受税收协定待遇申请备案表（企业）"),//29
		new Array("GJ0004","非居民享受税收协定待遇申请备案表（个人）"),//30
		new Array("GJ0005","停止享受税收协定优惠待遇审批表"),//31
		new Array("GJ0006","非居民享受税收协定待遇执行情况报告表"),//32
		new Array("ZC0001","企业资产损失清单申报表"),//33
		new Array("ZC0002","企业资产损失专项申报表"),//34
		new Array("PW0030","年度支持和促进就业减免税情况表"),//35
		new Array("SP2501","企业发票领购申请（首次申请）"),//36
		new Array("PW0029","促进就业减免税"),//37
		new Array("FP0009","企业印制套章票受理情况"),//38 企业申请印制发票审批表(套章申请)
		new Array("MZPS21","民主评税"),//39
		new Array("DS2030","定期定额通知书"),//40
	    new Array("DS2002","定期定额预核定通知书"),//41
		new Array("PWBA01","纳税人减免税备案登记表"),//42
		new Array("PWBA02","纳税人减免税备案登记表"),//43
		new Array("PWBA03","纳税人减免税备案登记表"),//44
		new Array("PWBA04","纳税人减免税备案登记表"),//45
		new Array("DJ0042","定期定额户停（歇）业备案"),//46
		new Array("GJ0007","对外支付情况报告表"),//
		new Array("GJ0008","合同管理报备表"),//48
		new Array("JA0015","建安企业异地施工项目个人所得税回机构所在地缴纳核准"),//49
		new Array("PWCJ01"," 创业就业备案类减免税申报备案表"),//50
		new Array("GSBA01","个人所得税分期缴纳事项备案申请表"),//51
		new Array("CA0001","数字证书申请表"),//52
		new Array("DJ0046","停业复业（提前复业）报告书"),//53
		new Array("DJ0047","纳税人存款账户账号报告表"),//54
		new Array("DJ0048","企业所得税预缴方式认定申请表"),//55
		new Array("PZ0022","代售印花税票许可申请审批表"),//56
		new Array("DS0030","定期定额审批表"),//57
		new Array("PW0081","延期申报申请核准"),//58
		new Array("PWBA05","纳税人减免税备案登记表(个税)"),//59
		new Array("SB0001","社会保险费退费申请表(一般)"),//60
		new Array("SB0002","社会保险费退费申请表(特殊)"),//61
		new Array("XZXK01","行政许可"),//62
		new Array("CCS001","税收减免优惠车船税"),//63
		new Array("DKFP01","代开增值税发票申报单")//64
	);

	var SWWSDM_TZS = new Array(
		new Array("TZSPW0002","协定国(地区)居民享受协定待遇申请"),//1
		new Array("TZSPW0001","核准延期缴纳税款审批"),//2
		new Array("TZSPW0008","企业财产损失审批"),//3
		new Array("TZSPW0020","减免税审批"),//4
		new Array("TZSDJ0001","核准注销税务登记/社保登记"),//5
		new Array("TZSDJ0004","核准停业"),//6
		new Array("TZSZYXK","准予税务行政许可决定书"),//7
		new Array("TZSPW0016","总机构收取管理费审批"),//8
		new Array("TZSDS0031","印花税核定审批申请"),//8
		new Array("TZSDZ00091","代征手续费领取"),//9
		new Array("TZSDZ00092","不予支付代征代扣手续费"),//10
		new Array("TZSTS00011","同意退税申请"),//11
		new Array("TZSTS00012","不同意退税申请"),//12
		new Array("TZSGS00041","外籍人员核准注销支付收入信息"),//13
		new Array("TZSGS00042","外籍人员不予核准注销支付收入信息"),//14
		new Array("TZSWZZYXK","准予税务行政许可决定"),//15
		new Array("TZSWZBZYXK","不予税务行政许可决定"),//16
		new Array("TZSDS0030","定期定额"),//17
		new Array("TZSDS0035","外籍个人所得税核定"),//18
		new Array("TZSDS0036","外籍个人所得税核定调整"),//19
		new Array("TZSDS0037","外籍个人所得税取消核定"),//20
		new Array("TZSDJ00111","外出经营活动税收管理证明"),//21
		new Array("TZSDJ00112","外出经营活动税收管理证明"),//22
		new Array("ZS2011","企业所得税减免备案申请"),//23
		new Array("TZSPWBA01","纳税人减免税备案执行告知书"),//24
		new Array("TZSPWBA02","纳税人减免税备案不予备案告知书"),//25
		new Array("TZSDJ0042","定期定额户停（歇）业不予备案告知书"),//26
		new Array("TZSJA0015","建安企业异地施工项目个人所得税回机构所在地缴纳核准"),//27

		new Array("PWBA21","纳税人减免税备案执行告知书"),//28
		new Array("PWBA22","纳税人减免税备案不予备案告知书"),//29
		new Array("PWBA23","停止执行纳税人减免税备案决定书"),//30
		new Array("GSBA02","个人所得税分期缴纳事项准予备案通知书"),//31
		new Array("GSBA03","个人所得税分期缴纳事项不予备案通知书"),//32
		new Array("GSBA01","个人所得税分期缴纳事项备案申请通知书"),
		new Array("WZDZ0011", "代征代扣手续费领取通知书")

	);

	/**根据选择不同的批文种类得出业务通知书表名*/
	function getTzsTableName(pwzl,tzsbh){
		//alert('pwzl'+gj0001+'tzsbh'+gj2001);
                pwzl=pwzl.trim();
                tzsbh=tzsbh.trim();
		var tzstabid = tzsbh.substring(0,6);
		var tablename;
	//	alert('pwzl:'+pwzl);
		if (pwzl==SWWSDM[0][0] || pwzl==SWWSDM[1][0]  || pwzl==SWWSDM[6][0]|| pwzl==SWWSDM[36][0] || pwzl==SWWSDM[9][0] || pwzl==SWWSDM[10][0] || pwzl==SWWSDM[11][0] || pwzl==SWWSDM[12][0] || pwzl==SWWSDM[18][0] || pwzl==SWWSDM[19][0] || pwzl==SWWSDM[20][0]|| pwzl==SWWSDM[46][0]) {
		   //alert("00");
                  tablename="SSTZS";
		} else if (pwzl==SWWSDM[2][0]) {
			tablename="PW_B_HZYQJNSKSPB_TZS";
		} else if (pwzl==SWWSDM[3][0]) {
			tablename="PW_B_CCSSSPB_TZS";
		} else if (pwzl==SWWSDM[4][0]) {
			tablename="PW_B_ZJGSQGLFSPB_TZS";
		}else if(pwzl==SWWSDM[5][0]){
			 tablename="FP_TZS_ZYYZFP";
		} else if ((pwzl==SWWSDM[7][0]) || (pwzl==SWWSDM[23][0])) {
			if (tzstabid=='TS0005') {//退税申请(同意)
				tablename = "TS_TYTSTZS";
			} else if (tzstabid=='TS0004') {//退税申请(不同意)
				tablename = "TS_BYTSTZS";
			}
		} else if (pwzl==SWWSDM[13][0]) {




			if (tzstabid=='DZ0011') {//个人所得税代扣代缴手续费申请(同意)
				tablename = "DZ_SXFLQTZS";
			} else if (tzstabid=='DZ0013') {//个人所得税代扣代缴手续费申请(不同意)
				tablename = "DZ_BYZFSXFTZS";
			}
		} else if (pwzl==SWWSDM[17][0]) {//定期定额
			tablename = "DS_TZS_DQDEHD";
		} else if (pwzl==SWWSDM[8][0]) {//开具外出经营税收管理证明申请
			if (tzstabid=='350200') {//建安
				tablename = "JA_WGZ";
			} else if (tzstabid=='DJTZ06') {//非建安
				tablename = "SSTZS";
			}

		}else if(pwzl==SWWSDM[21][0]) {
                         /**预约定价审批表*/
			if (tzstabid=='PW2005') {//同意预约定价审批
				tablename = "PW_YYDJYBHTSQTZS";
			} else if (tzstabid=='PW2006') {//不同意预约定价审批
				tablename = "PW_YYDJYBHTSQTZS";
			}
		}else if(pwzl==SWWSDM[26][0]) {
                         /**企业所得税备案通知书*/
			if (tzstabid=='ZS2012') {// 企业所得税备案给与备案通知书
				tablename = "ZS_QYSDS_JMBA_TZS_ZYBA";
			} else if (tzstabid=='ZS2013') {//企业所得税备案不与备案通知书
				tablename = "ZS_QYSDS_JMBA_TZS_BYBA";
			}
		} else if(pwzl==SWWSDM[27][0]){
			if(tzstabid=='GJ2001'){
			     tablename="GJ_FJM_XSXDDY_TZS";
			}else if(tzstabid=='GJ2000'){
				tablename="GJ_FJM_BYSLXSXDDY_TZS";
			}else if(tzstabid=='GJ2002'){
				tablename="GJ_FJM_BYTYXSXDDY_TZS";
			}
		}else if(pwzl==SWWSDM[28][0]){
			if(tzstabid=='GJ2001'){
			     tablename="GJ_FJM_XSXDDY_TZS";
			}else if(tzstabid=='GJ2000'){
				tablename="GJ_FJM_BYSLXSXDDY_TZS";
			}else if(tzstabid=='GJ2002'){
				tablename="GJ_FJM_BYTYXSXDDY_TZS";
			}
		}else if(pwzl==SWWSDM[29][0]){
			if(tzstabid=='GJ2003'){
			     tablename="GJ_FJM_XSXDDYSXBA_TZS";
			}else if(tzstabid=='GJ2004'){
				tablename="GJ_FJM_XSXDDYSXBYBA_TZS";
			}
		}else if(pwzl==SWWSDM[30][0]){
			if(tzstabid=='GJ2003'){
			     tablename="GJ_FJM_XSXDDYSXBA_TZS";
			}else if(tzstabid=='GJ2004'){
				tablename="GJ_FJM_XSXDDYSXBYBA_TZS";
			}
		}else if(pwzl==SWWSDM[31][0]){

				tablename="GJ_FJM_TZZXXDDY_TZS";

		}else if(pwzl==SWWSDM[32][0]){

				tablename="PW_ZCSSSBBYSLTZS";

		}else if(pwzl==SWWSDM[33][0]){

				tablename="PW_ZCSSSBBYSLTZS";

		}else if(pwzl==SWWSDM[38][0]){
			if(tzstabid=="FP3009"){
				tablename="SSTZS";
			}else{
				tablename="FP_TZS_ZYYZFP";
			}


	    }else if(pwzl==SWWSDM[39][0]||pwzl==SWWSDM[40][0]||pwzl==SWWSDM[41][0]){

			tablename="DS_TZS_DQDEHD";

	   }else if(pwzl==SWWSDM[42][0] || pwzl==SWWSDM[43][0] || pwzl==SWWSDM[44][0] ||pwzl== SWWSDM[45][0]){
		   if(tzstabid=="PWBA21"){
				tablename="PW_BA_JMSZX_TZS";
			}else if(tzstabid=="PWBA22"){
				tablename="PW_BA_JMSBYZX_TZS";
			}
	   }else if(pwzl==SWWSDM[46][0]){
		   if(tzstabid=="DJTZ21"){
				tablename="DJ_SQSP_TYBA_ZYBATZS";
			}else if(tzstabid=="DJTZ22"){
				tablename="DJ_SQSP_TYBA_BYBATZS";
			}
	   }else if(pwzl==SWWSDM[47][0]){
		   tablename="WZ_GJ_DWZF_SWQKBGB";
	   }else if(pwzl==SWWSDM[48][0]){
		  // tablename="GJ_DWZF_HTJBXX";
		   tablename="WZ_GJ_DWZF_HTBB";
	   }else if(pwzl==SWWSDM[49][0]){
		  if(tzstabid=="JATZ01"){
			  tablename="JA_YDXM_GSHJGSZDJNSQ_TZS";
		  }
	   }else if(pwzl==SWWSDM[50][0]){

		   if(tzstabid=="PWBA21"){
				  tablename="PW_BA_JMSZX_TZS";
			  }else  if(tzstabid=="PWBA22"){
				  tablename="PW_BA_JMSBYZX_TZS";
			  }else  if(tzstabid=="PWBA23"){
				  tablename="PW_BA_JMSTZZX_TZS";
			  }
	 }else if(pwzl==SWWSDM[51][0]){/*个人所得税分期缴纳事项备案申请表*/

			   if(tzstabid=="GSBA02"){
					  tablename="GS_BA_FQNSSXZYBATZS";
				  }else  if(tzstabid=="GSBA03"){
					  tablename="GS_BA_FQNSSXBYBATZS";
				  }
	}else if(pwzl==SWWSDM[55][0]){/*企业所得税预缴方式认定申请表*/

		   if(tzstabid=="DJTZ28"){
				  tablename="DJ_QYSDSYJFSRD_ZYJDS";
			  }else  if(tzstabid=="DJTZ29"){
				  tablename="DJ_QYSDSYJFSRD_BYJDS";
			  }
	 } else if(pwzl==SWWSDM[57][0]){/*定期定额审批表*/
			//DS2038 TZ0030 TZ0041
			   if(tzstabid=="DS2038"){
					  tablename="DS_TZS_DQDEHD";
				  }	else if(tzstabid=="TZ0030"){
					  tablename="DS_TZS_DQDEHD";
				  }else if(tzstabid=="TZ0041"){
					  tablename="DS_TZS_DQDEHD";
				  }
	}else if(pwzl==SWWSDM[58][0]){/*延期申报申请核准*/

			   if(tzstabid=="TZPW81"){
					  tablename="PW_B_HZYQSBSPB_TZS";
				  }
	}else if(pwzl==SWWSDM[60][0]||pwzl==SWWSDM[61][0]){/*社保费退费*/
		   if(tzstabid=="TZSB0001"){
				tablename="SB_ZW_BYTFGZS";
			}else if(tzstabid=="TZSB0002"){
				tablename="SB_ZW_TYTFTZS";
			}
	}


          return tablename;
	}

	/**根据选择不同的批文种类得出批文编号(通知书时用)*/
	function getTzsid(tabid,tzsbh){
		var tzstabid = tzsbh.substring(0,6);
		var tzsid;
		if (tzstabid=='DZ0013') {//个人所得税代扣代缴手续费申请(不同意)
			tzsid = "TZSDZ00092";
		} else if (tzstabid=='DZ0011') {//个人所得税代扣代缴手续费申请(同意)


			tzsid = "TZSDZ00091";

		} else if (tzstabid=='TS0005') {//退税申请(同意)
			tzsid = "TZSTS00011";
		} else if (tzstabid=='TS0004') {//退税申请(不同意)
			tzsid = "TZSTS00012";
		} else if (tzstabid=='TZGSB0') {//外籍人员收入支付信息注销(不同意)
			tzsid = "TZSGS00042";
		} else if (tzstabid=='TZGST0') {//外籍人员收入支付信息注销(同意)
			tzsid = "TZSGS00041";
		} else if (tzstabid=='FPTZ01') {//企业印制发票申请,企业发票领购申请(同意)
			tzsid = "TZSWZZYXK";
		} else if (tzstabid=='FPTZ02') {//企业印制发票申请,企业发票领购申请(不同意)
			tzsid = "TZSWZBZYXK";
		} else if (tzstabid=='350200') {//开具外出经营证明(建安)
			tzsid = "TZSDJ00111";
		} else if (tzstabid=='DJTZ06') {//开具外出经营证明(非建安)
			tzsid = "TZSDJ00112";
		} else if (tzstabid=='DJTZ02') {//注销地方税务登记(不同意)
			tzsid = "TZSDJ00011";
		} else if (tzstabid=='DJTZ01') {//注销地方税务登记(同意)
			tzsid = "TZSDJ0001";
		} else if (tzstabid=='DJTZ04') {//定期定额户停（歇）业申请(不同意)
			tzsid = "TZSDJ00041";
		} else if (tzstabid=='DJTZ03') {//定期定额户停（歇）业申请(同意)
			tzsid = "TZSDJ0004";
		} else if (tzstabid=='PW2005') {//预约定价同意审批
			tzsid = "WZPW2005";
		} else if (tzstabid=='PW2006') {//预约定价不同意审批
			tzsid = "WZPW2006";
		} else if (tzstabid=='ZS2012') {//减免备案给与备案
			tzsid = "TZSZS2012";
		} else if (tzstabid=='ZS2013') {//减免备案不与备案
			tzsid = "TZSZS2013";
		} else if (tzstabid=='GJ2001') {//非居民享受协定待定审批企业
			tzsid = "TZSGJ2001";
		}else if (tzstabid=='GJ2000') {//非居民享受协定待定审批企业
			tzsid = "TZSGJ2000";
		}else if (tzstabid=='GJ2002') {//非居民享受协定待定审批企业
			tzsid = "TZSGJ2002";
		}else if (tzstabid=='GJ2003') {//非居民享受协定待定审批企业
			tzsid = "TZSGJ2003";
		}else if (tzstabid=='GJ2004') {//非居民享受协定待定审批企业
			tzsid = "TZSGJ2004";
		}else if (tzstabid=='GJ2005') {//非居民享受协定待定审批企业
			tzsid = "TZSGJ2005";
		}else if (tzstabid=='PW0028') {//资产损失不予受理通知书
			tzsid = "TZSPW0028";
		}else if (tzstabid=='FP2009') {//套章申请准予通知书
			tzsid = "TZSFP2009";
		}else if (tzstabid=='FP3009') {//套章申请不准予通知书
			tzsid = "TZSFP3009";
		}else if (tzstabid=='FPTZ03') {//自印发票申请，准予税务决定许可通知
			tzsid = "TZSFPTZ03";
		}else if(tzstabid=='TZ2502'){
			tzsid="TZ2502";
		}else if (tabid=='PWBA01' || tabid=='PWBA02' || tabid=='PWBA03' || tabid=='PWBA04'){
			if(tzstabid=='PWBA21'){
				tzsid = "TZSPWBA21";
			}else if(tzstabid=='PWBA22'){
				tzsid = "TZSPWBA22";
			}
		}else if(tabid=='DJ0042'){
			if(tzstabid=='DJTZ22'){
				tzsid='DJTZ22';
			}else{
				tzsid='DJTZ21';
			}
		}else if(tabid=='JA0015'){
			tzsid='JATZ01';
		}else if(tabid=='PWCJ01'){
			if(tzstabid=='PWBA21'){
				tzsid='PWBA21';
			}else if(tzstabid=='PWBA22'){
				tzsid='PWBA22';
			}else if(tzstabid=='PWBA23'){
				tzsid='PWBA23';
			}
		}else if(tabid=='GSBA01'){
			if(tzstabid=='GSBA02'){
				tzsid='WZGSBA02';
			}else if(tzstabid=='GSBA03'){
				tzsid='WZGSBA03';
			}
		} else{
			tzsid = 'TZS'+tabid;
		}

		return tzsid;
	}

	/**根据选择不同的批文种类得出批文编号(通知书结果时用)*/
	function getTzsJgid(pwzl){
		if (pwzl==SWWSDM[5][0]) {//企业印制发票申请
			tzsid = "TZSJG2502";
		} else if (pwzl==SWWSDM[6][0]||pwzl==SWWSDM[36][0]) {//企业发票领购申请
			tzsid = "TZSJG2512";
		}
		return tzsid;
	}
	/**根据选择不同的批文种类得出业务通知书表名*/
	function getTzsJgTableName(pwzl){
		if (pwzl==SWWSDM[5][0]) {//企业印制发票申请
			tablename = "FP_SQSP_QYSQYZFP";
		} else if (pwzl==SWWSDM[6][0]||pwzl==SWWSDM[36][0]) {//企业发票领购申请
			tablename = "FP_SQSP_QYLGFP";
		}
		return tablename;
	}

	/**根据选择不同的批文种类得出业务主表名*/
	function getTableName(pwzl){
		var tablename="";
		if (pwzl==SWWSDM[0][0]) {
			tablename="WZ_GS_HD_WJRYZXDJSPB";
		} else if (pwzl==SWWSDM[1][0]) {
			tablename="WZ_PW_B_XDGJMXSDYSQB";
		} else if (pwzl==SWWSDM[2][0]) {
			tablename="WZ_PW_B_HZYQJNSKSPB";
		} else if (pwzl==SWWSDM[3][0]) {
			tablename="WZ_PW_B_CCSSSPB";
		} else if (pwzl==SWWSDM[4][0]) {
			tablename="WZ_PW_B_ZJGSQGLFSPB";
		} else if (pwzl==SWWSDM[5][0]) {
			tablename="WZ_FP_SQSP_QYSQYZFP";
		} else if (pwzl==SWWSDM[6][0]) {
			tablename="WZ_FP_SQSP_QYLGFP";
		} else if (pwzl==SWWSDM[7][0]) {
			tablename="WZ_TS_YBTSSPB";
		} else if (pwzl==SWWSDM[8][0]) {
			tablename="WZ_DJ_JYXMXX";
		} else if (pwzl==SWWSDM[9][0]) {
			tablename="WZ_PW_B_JMSPB";
		} else if (pwzl==SWWSDM[10][0]) {
			tablename="WZ_DS_SQSP_YHS";
		} else if (pwzl==SWWSDM[11][0]) {
			tablename="WZ_DJ_SQSP_ZX";
		} else if (pwzl==SWWSDM[12][0]) {
			tablename="WZ_DJ_SQSP_TY";
		} else if (pwzl==SWWSDM[13][0]) {
			tablename="WZ_DZ_SXFSPB";
		} else if (pwzl==SWWSDM[14][0]) {
			tablename="WZ_PW_B_JSGZDMSDSSQ";
		} else if (pwzl==SWWSDM[15][0]) {
			tablename="WZ_PW_B_JSGZDMSDSSHB";
		} else if (pwzl==SWWSDM[16][0]) {
			tablename="WZ_PW_B_JSGZDMSDS_MX";
		}else if (pwzl==SWWSDM[21][0]) {
			tablename="WZ_PW_YYDJYBHTSQ";
		}else if (pwzl==SWWSDM[22][0]) {
			tablename="WZ_ZM_FHZM_SPB";
		}else if (pwzl==SWWSDM[23][0]) {
			tablename="WZ_TS_JATSSPB";
		}else if (pwzl==SWWSDM[24][0]) {
			tablename="WZ_JA_WGZ_JX";
		}else if (pwzl==SWWSDM[25][0]) {
			tablename="WZ_DJ_JYXMXX";
		}else if (pwzl==SWWSDM[26][0]) {
			tablename="WZ_ZS_QYSDS_JMBA_ZB";
		}else if (pwzl==SWWSDM[27][0]) {
			tablename="WZ_GJ_FJM_XSXDDYSFXX_QY";
		}else if (pwzl==SWWSDM[28][0]) {
			tablename="WZ_GJ_FJM_XSXDDYSFXX_GR";
		}else if (pwzl==SWWSDM[29][0]) {
			tablename="WZ_GJ_FJM_XSXDDYBAB";
		}else if (pwzl==SWWSDM[30][0]) {
			tablename="WZ_GJ_FJM_XSXDDYBAB";
		}else if (pwzl==SWWSDM[31][0]) {
			tablename="WZ_GJ_FJM_TZXSXDDYSPB";
		}else if (pwzl==SWWSDM[32][0]) {
			tablename="WZ_GJ_FJM_XSXDDYZXQKB";
		}else if (pwzl==SWWSDM[33][0]) {
			tablename="WZ_PW_QYZCSSQDSBB_ZB";
		}else if (pwzl==SWWSDM[34][0]) {
			tablename="WZ_PW_QYZCSSZXSBB_ZB";
		}else if (pwzl==SWWSDM[36][0]) {
			tablename="WZ_FP_SQSP_QYLGFP";
		}else if (pwzl==SWWSDM[37][0]) {
			tablename="WZ_CJJY_QYSJNDGZSJB";
		}else if (pwzl==SWWSDM[38][0]) {
			tablename="WZ_FP_SQSP_QYSQYZFP";
		}else if (pwzl==SWWSDM[42][0]||pwzl==SWWSDM[43][0]||pwzl==SWWSDM[44][0]||pwzl==SWWSDM[45][0]) {
			tablename="WZ_PW_BA_JMBAB";
		}else if (pwzl==SWWSDM[46][0]) {
			tablename="WZ_DJ_SQSP_TYBA";
		}else if (pwzl==SWWSDM[47][0]) {
			tablename="WZ_GJ_DWZF_SWQKBGB";
		}else if (pwzl==SWWSDM[48][0]) {
			//tablename="GJ_DWZF_HTJBXX";
			tablename="WZ_GJ_DWZF_HTBB";

		}else if (pwzl==SWWSDM[49][0]) {
			tablename="WZ_JA_YDXM_GSHJGSZDJNSQ";
		}else if (pwzl==SWWSDM[50][0]) {
			tablename="WZ_PW_BA_CJJY";
		}else if (pwzl==SWWSDM[51][0]) {
			tablename="WZ_GS_BA_FQNSSXBASQB";
		}else if (pwzl==SWWSDM[52][0]) {
			tablename="WZ_CA_SQB";
		}else if(pwzl==SWWSDM[53][0]){/*停业复业（提前复业）报告书*/
			 tablename="WZ_DJ_SQ_TFY";
		}else if(pwzl==SWWSDM[54][0]){/*纳税人存款账户账号报告表*/
			 tablename="WZ_DJ_SQ_YHZHXX";
		}
		else if(pwzl==SWWSDM[55][0]){/*企业所得税预缴方式认定申请表*/
			 tablename="WZ_DJ_QYSDSYJFSRD";
		}else if(pwzl==SWWSDM[56][0]){/*代售印花税票许可申请审批表*/
			 tablename="WZ_PZ_WS_DSYHSPXKSQ_SPB";
		}else if(pwzl==SWWSDM[57][0]){/*定期定额审批表*/
			 tablename="WZ_DS_SP_DQDEYHD";
		}else if(pwzl==SWWSDM[58][0]){/*延期申报申请核准*/
			 tablename="WZ_PW_B_HZYQSBSPB";
		}else if(pwzl==SWWSDM[60][0]||pwzl==SWWSDM[61][0]){/*延期申报申请核准*/
			 tablename="WZ_SB_ZW_TFSQSPB";
		}else if(pwzl==SWWSDM[63][0]){
			 tablename="WZ_SSJMYH_CCS";
		}else if(pwzl==SWWSDM[64][0]){
			 tablename="WZ_DKFP";
		}
		return tablename;
	}

	/**
	根据不同税务文书代码得到不同的提示信息
	*/
  function getMsg(swwsdm,jmlx,lrrq) {
  	var msg="";
  	var dateTime = new Date();
  	var yy=dateTime.getFullYear();
	var MM=dateTime.getMonth()+1;  //因为1月这个方法返回为0，所以加1
	var dd=dateTime.getDate();
	var strdate="";
  // var strdate = myDate.toLocaleDateString();     //获取当前日期
  	if(lrrq==""||lrrq==null||lrrq==undefined){

  	  lrrq=	yy+"-"+MM+"-"+dd;
  	  strdate=lrrq;
  	}else{
  	  strdate=	getDateStr(lrrq,0);
  	}
  	if (swwsdm == "WZ"+SWWSDM[0][0]) {//离职（境）外籍人员注销支付收入信息申请表
  		msg="您已成功提交申请！请与贵司的税管员联系确定实地核查事宜。";
  	} else if (swwsdm == "WZ"+SWWSDM[1][0]) {//协定国(地区)居民享受协定待遇申请表
  		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，\n超期未上门的，本次申请事项将自动作废。\n(1)、企业所在国有关当局出具的法人证书原件及复印件。\n(2)、个人身份证明（包括身份证、护照、回乡证等）原件及复印件。\n(3)、所在国税务当局出具的居民证明。\n(4)、有关协议、合同副本及复印件。\n(5)、提供境内劳务的还需报送外籍人员来华时间、工作地点、工作内容证明等。\n对以上所需材料如有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[2][0]) {//核准延期缴纳税款审批表
  		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，超期未上门的，本次申请事项将自动作废。\n1、申请延期缴纳税款的报告；\n2、延期缴纳税款申请表；\n3、当期货币资金余额情况及所有银行存款帐户的对帐单；\n4、资产负债表；\n5、应付职工工资和社会保险费等支出预算；\n6、现金流量表；\n7、银行存款的近两周明细账（需银行盖章）。\n对以上所需材料如有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[3][0]) {//企业财产损失审批表
  		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，超期为上门的，本次申请事项将自动作废。\n1、《企业财产损失审批表》及附表《财产损失明细表》；\n2、提供能够证明资产损失确属已实际发生的合法证据，包括：具有法律效力的外部证据、具有法定资质的中介机构的经济鉴证证明和特定事项的企业内部证据；\n3、企业当年财务决算表；\n4、主管税务机关要求的其他资料、证件。\n注：企业发生自然灾害、永久或实质性损害需要现场取证的，应在证据保留期间及时申报审批，也可在年度终了后集中申报审批，但必须出据中介机构、国家及授权专业技术鉴定部门等的鉴定材料。\n对以上所需材料如有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[4][0]) {//总机构收取管理费审批表
  		msg="您申请的事项已受理，请您于5日内携带以下资料到主管地税机关办理相关手续。\n（1）收取管理费申请报告、《总机构收取管理费审核表》（加盖有效印章）；\n（2）企业营业执照、税务登记复印件；\n（3）上年分项管理费收支决算明细表；\n（4）上年度企业所得税年度申报表、会计决算报表；\n（5）税务机关对上年度总机构的企业所得税汇算报告；\n（6）本年度总机构收取管理费的下属公司名单、提取额度、提取方式、计划提取数及分项费用增减情况说明；\n（7）本年度上半年会计报表、企业所得税申报表和管理费使用情况表；\n（8）下属公司的企业章程；\n（9）税务机关要求报送的其他资料。";
  	} else if (swwsdm == "WZ"+SWWSDM[5][0]) {//企业申请印制发票审批表
  		msg="您提交的申请已提交，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，超期未上门的，本次申请事项将自动作废。\n纳税人申请自印发票，必须符合以下几项条件，方可向主管税务机关提出印制发票申请：\n1、《企业印制发票审核表》（一式四份）；\n2、自印发票式样（一式四份）。\n对以上所需材料如有疑问的，请与税管员联系。";
  	} else if (swwsdm == "WZ"+SWWSDM[6][0]) {//企业发票领购审批表
  		msg="您申请的事项已受理。请于五个工作日内携带税务机关要求的资料上门办理相关事宜。\n" +
  		    "（一）、首次领用发票的：\n" +
  		    "（1）《纳税人领用发票票种核定表》。\n"+
			"（2）税务登记证副本。\n" +
			"（3）经办人身份证明原件及复印件。\n" +
			"（4）发票专用章印模。 \n" +
			"（二）、正常领用地税发票的，携带发票领用簿（须盖企业发票专用章）。 \n" +
  				"对以上所需材料如有疑问的，请与税管员联系。\n\n" +
  				"                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[7][0]) {//网上退税申请
  		msg="您提交的申请已受理。请您于三个工作日内携带退税资料到主管税务机关上门办理相关事宜。\n" +
		  	  "退税资料分为基本资料和附加资料。基本资料为必送，附加资料按照罗列情形加送：\n" +
			"一、基本资料：1.退（抵）税申请表；2.申请退税的入库完税凭证（税收缴款书，电子缴税付款凭证，税收完税证）；3.减免税通知单（减免退税）、汇算报告（汇算清缴退税）、稽查文书（稽查退税）、代开的发票客户联和记账联原件（代开发票错误退税）、体现正确计税依据的个税明细申报表（个税退税）、税务行政复议决定书、生效的法院判决书。\n"+
		 	"二、附加资料：\n"+
		    "1.汇算报告包括：具有法定资质的中介机构出具的汇算清缴鉴证报告（经主管税务机关认可）、税务处理决定书或清算结论、纳税评估文书。\n"+"2.房产交易税收退税提供资料：（1）不动产登记中心出具《不予登记通知书》、《存量房交易涉税减免信息审核证明》、《家庭住房情况查询证明》；（2）原房改房的购房申请表、产权证、房改专用发票、出让房改房买卖合同；（3）拆迁补偿协议书、补偿费用计算表。\n"+"3.车船税退税提供资料：保险公司的保险单、汽车报废证明。\n"+"4.限售股转让所得个税清算退税：（1）本人有效身份证件（居民身份证、军官证、武警警官证、士兵证、外国护照、港澳居民来往内地通行证、台湾居民来往大陆通行证、香港身份证、台湾身份证、澳门身份证、中国护照、外国人永久居留证）原件（仅供查验）、复印件；（2）取得限售股的财产原值及可税前扣除的费用凭证（购买股票的发票、交易单据、税金"+
		   "费用的税和		票据、司法过户取得的限售股需要提供法院判决书或调解书以及执行书，不能提供财产原值及交易费用凭证的需要纳税人本人书面做出不能提供原值凭证和交易费用，愿意采用核定计税方法的文字说明）；（3）《厦门市限售股转让所得个人所得税清算补税申报表》或《厦门市限售股转让所得个人所得税清算退税申报表》；（4）限售股交易明细"+
		   "记录（加盖开户证券机构印章）		、证券机构预扣缴税费申报表复印件；（5）用于补(退)税款的本人开户银行卡或储蓄本。\n"+ "5.代国库收取资料：（1）个体工商户退库应提供税务登记证副本复印件；（2）退回代缴人账户或自然人缴税的应提供POS单复印件，如已丢失则提供银行流水单；（3）申请人为2个（含）自然人以上，而收款人为其中一人，退库申请人应提供书面说明，书面说明内容包括具体原因及同意将全部退库款项退给该收款人的声明，书面说明材料须所有退库申请人签章确"+
		"认；（4）公司将退库款项退到个人账户，应提供书面说明内容包括具体原因、收款人名称、银行账号、及同意将全部退库款项退给该收款人的声明；（5）开户名称已变更的应提供工商户名变更申请复印件。\n"
		+
		"对以上所需材料如有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
	  } else if (swwsdm == "WZ"+SWWSDM[8][0]) {//开具外出经营税收管理证明申请
  		msg="您申请的事项已提交，请您于5日内携带以下资料到主管地税机关办税服务中心办理相关手续:\n1、税务登记证副本。\n2、外出经营活动情况说明。\n3、建筑安装行业的纳税人还需提供外出经营合同原件及复印件。\n对以上所需材料如有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[9][0]) {//减免税（费）申请
  		msg="您的申请已提交，税务机关将在您提交申请后的三个工作日内确认是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，超期未上门的，本次申请事项将自动作废。\n需提供的证件、资料：\n " +
  				"1、所有减免税项目均应送的资料：\n（1）减免税申请报告;\n" +
  				"（2）减免税（费）申请表；\n" +
  				"（3）申请减免年度财务会计报表（仅营业税、企业所得税减免需报送此项）；\n" +
  				"（4）申请减免年度企业所得税年度纳税申报表（仅营业税、企业所得税减免需报送此项）；\n" +
  				"2、除上述统一资料外，各具体减免税项目还应报送的资料。\n   " +
  				"（1）促进就业减免，还需提供以下资料：\n  " +
  				"  a、《就业失业登记证》原件、复印件（须有劳动局注明的“企业吸纳”或“自主创业”字样）;\n  " +
  				"  b、《企业实体吸纳失业人员认定证明》及其附表;\n  " +
  				"  c、劳动合同; \n对以上所需材料如有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[10][0]) {//印花税核定审批申请
  		msg="您提交的申请已受理！请打印两份本申请书并加盖公章，于7个工作日后，与税管员联系，持本申请书到主管地税机关领取“印花税核定征收通知书”。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[11][0]) {//注销地方税务登记社保登记审批表
  		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带以下资料上门办理：\n" +
  				"（一）、定期定额征收以外的纳税人\n"+
  		" （1）税务登记证及其副本税务证件；\n"+
  		" （2）《发票领用簿》及未验旧、未使用的发票； \n"+
  				" （3）工商营业执照被吊销的，应提交工商行政管理部门发出的吊销决定原件及复印件。\n"+
  				" （二）、除定期定额征收以外的纳税人\n"+
  				" （1）税务登记证及其副本税务证件；\n"+
  				" （2）《发票领用簿》及未验旧、未使用的发票；\n"+
  				" （3）工商营业执照被吊销的应提交工商行政管理部门发出的吊销决定原件及复印件；\n"+
  				" （4）单位纳税人提供上级主管部门批复文件或董事会决议原件及复印件；\n"+
  				" （5）非居民企业提供项目完工证明、验收证明文件原件及复印件；\n"+
  				" （6）《中华人民共和国企业清算所得税申报表》及附表。\n"+
  				"，超期未上门的，本次申请事项将自动作废。\n税务机关检查认定资料齐全并办理完结清税款、滞纳金、罚款，缴销发票、发票领购和税务登记证件等税务事项后5个工作日内核准。";
  	} else if (swwsdm == "WZ"+SWWSDM[12][0]) {//定期定额户停（歇）业申请审批表
  		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，超期未上门的，本次申请事项将自动作废。\n税务机关检查认定资料齐全并办理完结清税款、滞纳金、罚款，缴销发票、发票领购和税务登记证件等税务事项后5个工作日内核准。";
  	} else if (swwsdm == "WZ"+SWWSDM[13][0]) {//代扣代缴个人所得税手续费申请
  		msg="您申请的事项已受理，请您留意查看申请事项的办理情况。该申请经主管税务机关核实后，您可从网上打印《代扣代缴手续费领取通知书》，持法定收款收据到主管税务机关领取手续费。\n如有未明事项，可与税务管理员联系。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[14][0]) {
  		msg="您申请的事项已提交，请您于5日内携带以下资料到主管地税机关办理相关手续:\n（1）申请抵免的申请报告（需签章）；\n（2）《技术改造国产设备投资抵免企业所得税申请表》（需签章）；\n（3）技术改造项目批准立项的有关文件；\n（4）技术改造项目可行性研究报告、初步设计和投资概算；\n（5）盖有有效公章的《符合国家产业政策的企业技术改造项目确认书》；\n（6）向银行贷款的应提供贷款合同。\n（7）税务机关要求报送的其它资料。";
  	} else if (swwsdm == "WZ"+SWWSDM[15][0]) {
  		msg="您申请的事项已提交，请您于5日内携带以下资料到主管地税机关办理相关手续:投资抵免核准后，年度终了后10日内，应报送的资料：\n（1）《技术改造国产设备投资抵免企业所得税审核表》（需签章）；\n（2）购买国产设备的增值税专用发票；\n（3）税务机关要求报送的其它资料。";
  	} else if (swwsdm == "WZ"+SWWSDM[16][0]) {
  		msg="您申请的事项已提交，请您于5日内携带以下资料到主管地税机关办理相关手续:\n（1）《技术改造国产设备投资抵免企业所得税明细表》\n（2）购买设备前一年度的年度汇算材料及申请抵免年度企业所得税年度申报表。\n（3）税务机关要求报送的其它资料。";
  	} else if (swwsdm == "WZ"+SWWSDM[21][0]) {//预约定价申请审批表
  		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜。\n超期未上门的，本次申请事项将自动作废。\n 1、书面申请，并就实施程序与具体内容提出初步建议和意见；\n 2、《预约定价确认申请表》。\n对以上所需材料如有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[22][0]) {//付汇证明
  		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。\n您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜。\n超期未上门的，本次申请事项将自动作废。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[23][0]) {//网上建安退税申请
  		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，超期未上门的，本次申请事项将自动作废。\n退税资料分为基本资料和附加资料。基本资料为必送，附加资料按照退税分类加送。\n一、基本资料\n1、退税申请表。\n原则上纳税人已通过网上提交申请的，不再要求提供纸质申请表 \n2、申请退税的入库完税凭证\n原则上征管系统或者开票模块能查询得到并能证明（打印）缴税记录的，不要求纳税人提供。征管系统查询不到的，应提供原件和复印件。\n3、委托书。如果退税款不是退到申请人的账户的，应附上退税人的委托书和被委托人的身份证及存折（或银行卡）复印件，分局应在委托书上签注证明并加盖公章。\n委托书样式：\n本人（或本公司）因 ***原因，需退还税款***元，现委托***办理退税事宜，请将此笔税款***元退到***的账户（需写明开户行及银行帐户）。今后该笔退税款如有任何责任，由本人（或本公司）负责。\n二、附加资料\n1、减免退税\n（1）企业减免退税。\n附加资料：《减免审批通知单》 \n（2）个体工商户减免退税。 \n附加资料：退税人签名的减免批文和定税表、法人存折（或银行卡） \n2、企业“汇算清缴”退税 \n附加资料：汇算报告。 \n3、增值税先征后退，涉及退附加 \n附加资料：国税增值税退税审批表（由国税审批的）、国税收入退还书 \n4、误收退税 \n企业所得税由国税管征的而误在地税申报的退税的附送国税完税凭证复印件。 \n5、个人所得税明细申报退税 \n附加资料：体现具体正确的计税依据的凭证资料、《个人所得税明细补、退税申报表》。\n6、柜台代开发票错误退税 \n附加资料：错误的发票客户联和记帐联原件及复印件。 \n7、稽查查补退税的 \n附加资料：查账报告 \n8、跨区局建安税收退税 \n有建安税款跨区局入库需要退税的，由主管税务机关审批后转入库机关进行退税，入库机关按照主管税务机关审批的结果办理退税。\n对以上所需材料如有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
  	} else if (swwsdm == "WZ"+SWWSDM[24][0]) {//缴销建安外管证申请表
  		msg=" 录入信息已保存成功，请持未验旧、未使用完的发票（领取发票的提供） 到管理员处进行审核，缴销时间以管理员审核时间为准。" ;
  	} else if (swwsdm == "WZ"+SWWSDM[25][0]) {//经营项目缴销申请表
  		msg=" 录入信息已保存成功。请持有关材料到管理员处进行审核，缴销时间以管理员审核时间为准。" ;
  	} else if (swwsdm == "WZ"+SWWSDM[26][0]) {//企业所得税减免备案申请
  		msg=" 录入信息已保存成功。请进入打印页面打印备案表，并携带相关纸质资料于五个工作日内到管理员处办理备案。" ;
  	}else if (swwsdm == "WZ"+SWWSDM[27][0]) {//非居民
  		msg="   录入信息已保存成功。请携带以下资料:\n" +
  		"    1、非居民享受税收协定待遇审批（企业）、非居民享受税收协定待遇审批（个人）需提交资料：税收居民身份证明、产权书据、合同、协议、支付凭证等权属证明或者中介、公证机构出具的相关证明、受益所有人证明资料。\n"+
  		"    2、非居民享受税收协定待遇备案（企业）、非居民享受税收协定待遇备案（个人）需提交资料：税收居民身份证明、合同、协议资料。\n"+
  		"    于五个工作日内到柜台办理受理手续  " ;
  	}else if (swwsdm == "WZ"+SWWSDM[28][0]) {//非居民
  		msg="   录入信息已保存成功。请携带以下资料:\n" +
  		"    1、非居民享受税收协定待遇审批（企业）、非居民享受税收协定待遇审批（个人）需提交资料：税收居民身份证明、产权书据、合同、协议、支付凭证等权属证明或者中介、公证机构出具的相关证明、受益所有人证明资料。\n"+
  		"    2、非居民享受税收协定待遇备案（企业）、非居民享受税收协定待遇备案（个人）需提交资料：税收居民身份证明、合同、协议资料。\n"+
  		"    于五个工作日内到柜台办理受理手续  " ;
  	}else if (swwsdm == "WZ"+SWWSDM[29][0]) {//非居民
  		msg="   录入信息已保存成功。请携带以下资料:\n" +
  		"    税收居民身份证明、合同、协议 于五个工作日内到柜台办理受理手续 。\n"+
  		"    于五个工作日内到柜台办理受理手续  " ;
  	}else if (swwsdm == "WZ"+SWWSDM[30][0]) {//非居民
  		msg="   录入信息已保存成功。请携带以下资料:\n" +
  		"    税收居民身份证明、合同、协议 于五个工作日内到柜台办理受理手续 。\n"+
  		"    于五个工作日内到柜台办理受理手续  " ;
  	}else if (swwsdm == "WZ"+SWWSDM[31][0]) {//非居民
  		msg=" 录入信息已保存成功。请携带相关纸质资料于五个工作日内到柜台办理受理手续  " ;
  	}else if (swwsdm == "WZ"+SWWSDM[32][0]) {//非居民
  		msg=" 录入信息已保存成功。请携带相关纸质资料于五个工作日内到柜台办理受理手续  " ;
  	}else if (swwsdm == "WZ"+SWWSDM[33][0]) {//非居民
  		msg=" 提交成功，请进入打印页面打印申报表。企业可按会计核算科目进行归类、汇总，将汇总清单于五个工作日内报税务机关。会计核算资料和纳税资料留存备查。" ;
  	}else if (swwsdm == "WZ"+SWWSDM[34][0]) {//非居民
  		msg=" 提交成功，请进入打印页面打印申报表。企业可按会计核算科目进行归类、汇总，再将汇总清单以及会计核算资料和纳税资料，于五个工作日内报税务机关留存备查。 " ;
  	}else if (swwsdm == "WZ"+SWWSDM[35][0]) {//非居民
  		msg=" 提交成功。 " ;
  	}else if (swwsdm == "WZ"+SWWSDM[36][0]) {//企业发票领购审批表
  		msg="您申请的事项已受理。请于五个工作日内携带以下资料上门办理:\n" +
  				"（一）、首次领用发票的：\n" +
  				"（1）《纳税人领用发票票种核定表》。\n"+
  				"（2）税务登记证副本。\n" +
  				"（3）经办人身份证明原件及复印件。\n" +
  				"（4）发票专用章印模。 \n" +
  				"（二）、正常领用地税发票的，携带发票领用簿（须盖企业发票专用章）。 \n" +
  				"对以上所需材料如有疑问的，请与税管员联系。\n\n" +
  				"                                                厦门地税\n                                              " + strdate;
  	}else if (swwsdm == "WZ"+SWWSDM[37][0]) {
  		msg=" 提交成功。 " ;
  	}else if (swwsdm == "WZ"+SWWSDM[38][0]) {
  		msg=" 您提交的申请已提交，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，超期未上门的，本次申请事项将自动作废。纳税人申请领购套章发票的，必须提供下几项资料，方可向主管税务机关提出领购申请：\n1、《企业发票领购申请(套章申请)》（一式四份）；\n2、套章发票式样（一式四份）。\n对以上所需材料如有疑问的，请与管理员联系。 " ;
  	}else if (swwsdm == "WZ"+SWWSDM[42][0]||swwsdm== "WZ"+SWWSDM[43][0]||swwsdm== "WZ"+SWWSDM[44][0]||swwsdm== "WZ"+SWWSDM[45][0]) {
  		msg=" 您提交的申请已提交，税务机关将在您提交申请后的三个工作日内审核是否受理。请您打印好《纳税人减免税备案登记表》并于管理员预受理后五个工作日内携带相关纸质资料到柜台办理备案。超期未上门的，本次备案申请事项自动作废。 ";
  	}else if (swwsdm == "WZ"+SWWSDM[46][0]) {
  		msg="您提交的申请已提交。请您打印好《停业报告书》并携带税务登记证及其副本、《发票领用簿》及未使用完的发票到柜台办理备案。超期未上门的，本次备案申请事项自动作废。如有欠税的，请到柜台清缴后方能办理停业备案";
  		//msg=" 您提交的申请已提交，税务机关将在您提交申请后的三个工作日内审核是否受理。请您打印好《停业报告书》并于管理员预受理后五个工作日内携带相关纸质资料到柜台办理备案。超期未上门的，本次备案申请事项自动作废。 ";
  	}else if (swwsdm == "WZ"+SWWSDM[53][0]) {
  		msg="您提交的申请已提交。请到申请停业的柜台办理复业登记，领取停业封存的证件。";
  	}else if (swwsdm == "WZ"+SWWSDM[47][0]) {
  		msg="您提交的报告已受理，您应于税务机关确认受理后5个工作日内向主管地税机关报送加盖公章的合同（协议）或相关交易凭证复印件（外文文本应同时附送中文译本），有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
  	}else if (swwsdm == "WZHT0001") {
  		msg="您的合同信息提交成功\n\n \n" ;
  	}else if(swwsdm== "WZ"+SWWSDM[48][0]){
  		msg="您的合同报备信息提交成功\n\n \n" ;
  	}else if(swwsdm== "WZ"+SWWSDM[49][0]){
  		msg="    您通过网站提交的福建省建安企业异地施工项目个人所得税回机构所在地缴纳事项申请已提交成功。请于3个工作日内携带以下资料的原件及复印件（加注单位签章）各一份至主管税务机关柜台办理。\n"
  			+"1、情况说明报告；\n"
  			+"2、建安合同以及关于项目异地施工相关说明材料（含建安合同）。\n"
  			+"                                                厦门地税\n                                                " + strdate;
  	}else if(swwsdm== "WZ"+SWWSDM[50][0]){
  		 if(jmlx=="110006"){
  			msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，超期未上门的，本次申请事项将自动作废。\n需提供的证件、资料：\n （一）企业吸纳税收减免需提供资料：\n 1、 备案类减免税申报备案; \n 2、《就业失业登记证》（注明“企业吸纳税收政策”）; \n 3、《企业实体吸纳失业人员认定证明》及其附表; \n  (二)自主创业税收减免需提供资料; \n 1、备案类减免税申报备案表; \n 2、《就业失业登记证》（注明“自主创业税收政策”）; \n                                               厦门地税\n                                              " + strdate;
  		 }else if(jmlx=="110007"){
  			msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，超期未上门的，本次申请事项将自动作废。\n需提供的证件、资料：\n 1、《备案类减免税申报备案表》; \n 2、《中国人民解放军义务兵退出现役证》或《中国人民解放军军官退出现役证》; \n                                                 厦门地税\n                                              " + strdate;
  		 }
  	}else if(swwsdm== "WZ"+SWWSDM[51][0]){
  		msg="  您于"+strdate+"过我局网站提出个人所得税分期纳税计划备案申报，请于3个工作日内携带以下资料的原件及复印件（加注个人签章）各一份至主管税务机关柜台办理。\n\n" +
  				"	1.工商行政管理部门出具的准予变更股权（备案）通知；\n" +
  				"	2.《厦门市个人所得税款分期缴纳事项备案申请表》；\n" +
  				"	3.纳税人身份证明；\n" +
  				"	4.投资协议；\n" +
  				"	5.非货币性资产评估价格证明；\n" +
  				"	6、非货币性资产原值及合理税费凭证；\n" +
  				"	7、股东大会关于转增股本的决议以及账目处理凭证。\n\n \n"
  		+"                                                厦门地税\n                                                " + strdate;
  	}else if(swwsdm== "WZ"+SWWSDM[54][0]){
  		msg = "提交成功，可通过“银行账户信息查询”查看账户情况。另，通过网站报备银行存款账户后，请及时携带有关资料到柜台办理资料报备手续。";
  	}else if(swwsdm== "WZ"+SWWSDM[55][0]){
  		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。" +
			"您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，\n" +
			"超期未上门的，本次申请事项将自动作废。\n" +
			"\n\n                                                厦门地税\n                                              " + strdate;
	}else if(swwsdm== "WZ"+SWWSDM[56][0]){
		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。" +
		"您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，\n" +
		"超期未上门的，本次申请事项将自动作废。\n" +

		"\n\n                                                厦门地税\n                                              " + strdate;
	}else if(swwsdm== "WZ"+SWWSDM[57][0]){
		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。" +
		"您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，\n" +
		"超期未上门的，本次申请事项将自动作废。\n" +

		"\n\n                                                厦门地税\n                                              " + strdate;
	}else if(swwsdm== "WZ"+SWWSDM[58][0]){
		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。" +
		"您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，\n" +
		"超期未上门的，本次申请事项将自动作废。\n" +

		"\n\n                                                厦门地税\n                                              " + strdate;
	}else if(swwsdm== "WZ"+SWWSDM[60][0]){

  		msg="尊敬的纳税人：\n" +
			"您已提交社保费退费申请，请您携带《社会保险费退费申请表》（申请表需加盖单位公章）" +
			"并根据退费事由提供以下资料，到主管税务机关办税服务厅办理相关事宜。\n" +

			"1.社保部门计算错误退费：提供社保部门出具的计算错误证明；\n" +
			"2.参保单位操作失误退费（含参保身份错误）：参保人员信息或参保身份错误的，提供错误人员身份证复印件，在复印件上说明错误原因及情况并加盖公章；基数错误的提供工资单；参保时间错误的，提供合同原件复印件；\n" +
			"3.参保单位未及时停保退费：提供员工离职证明；\n" +
			"4.重复征收退费：因账目重复退费的，提供身份证或身份证明原件、复印件并加盖单位公章；\n" +
			"5.政策变动退费：提供变动政策的文件材料；\n" +
			"6.银行原因退费：因银行原因造成多缴退费的，提供银行退费证明。\n" +
			"对以上所需材料如有疑问的，请与税管员联系。\n" +

			"\n\n                                                厦门地税\n                                              " + strdate;
      }else{
		msg="您提交的申请已受理，税务机关将在您提交申请后的三个工作日内审核是否受理。" +
		"您应于税务机关确认受理后五个工作日内携带税务机关要求的资料上门办理相关事宜，\n" +
		"超期未上门的，本次申请事项将自动作废。\n" +

		"\n\n                                                厦门税务\n                                              " + strdate;
	}

  	return msg;
  }

	/**根据选择不同的批文种类得出批文编号(通知书时用)*/
	function getPwbh(pwzl,xtwsbh,tzsbh){
		var pwbh;
		if (pwzl==SWWSDM[0][0] || pwzl==SWWSDM[1][0] || pwzl==SWWSDM[2][0] || pwzl==SWWSDM[3][0] || pwzl==SWWSDM[4][0] || pwzl==SWWSDM[5][0] || pwzl==SWWSDM[6][0] || pwzl==SWWSDM[7][0] || pwzl==SWWSDM[9][0]
		    || pwzl==SWWSDM[10][0] || pwzl==SWWSDM[11][0] || pwzl==SWWSDM[12][0] || pwzl==SWWSDM[13][0]|| pwzl==SWWSDM[21][0]|| pwzl==SWWSDM[23][0]|| pwzl==SWWSDM[26][0]|| pwzl==SWWSDM[27][0]|| pwzl==SWWSDM[28][0]|| pwzl==SWWSDM[29][0]|| pwzl==SWWSDM[30][0]|| pwzl==SWWSDM[31][0]||pwzl==SWWSDM[36][0]||pwzl==SWWSDM[38][0]||pwzl==SWWSDM[42][0]||pwzl==SWWSDM[43][0]||SWWSDM[44][0]||SWWSDM[45][0]) {
			pwbh = tzsbh;
		} else {
			pwbh = xtwsbh;
		}
		return pwbh;
	}

	/**
	根据不同税务文书代码得到不同的税务文书名字
	*/
  function getSwwsmc(swwsdm){
		var msg="";
		for (var i=0; i<SWWSDM.length; i++) {
			if (swwsdm == "WZ"+SWWSDM[i][0]) {
				msg=SWWSDM[i][1];
				break;
			}
		}
		return msg;
  }

	/**
	表单提交保存后,根据不同税务文书代码得到不同的提示信息
	*/
  function alertMsg_save(swwsdm) {
			var msg;
			if(!("WZPWBA01"==swwsdm||"WZPWBA02"==swwsdm||"WZPWBA03"==swwsdm||"WZPWBA04"==swwsdm)){
				msg = getMsg(swwsdm);//根据不同税务文书代码得到不同的提示信息
				alert(msg);
			}
	}
  function alertMsg_saveHT(swwsdm) {
	  var myDate = new Date();
	    var strdate = myDate.toLocaleDateString();
		    var msg="您提交的合同已受理，您应于税务机关确认受理后5个工作日内向主管地税机关报送加盖公章的合同（协议）原件及复印件，原件在税务机关核对后将返还，复印件报税务机关存档。有疑问的，请与税管员联系。 \n\n                                                      厦门地税\n                                                      " + strdate;
			alert(msg);
}


  function alertMsg_save(swwsdm,htsfba_bz) {

		var msg;
		var myDate = new Date();
	    var strdate = myDate.toLocaleDateString();
		if("Y"==htsfba_bz){
			msg="您提交的报告已受理，有疑问的，请与税管员联系。\n\n                                                厦门地税\n                                              " + strdate;
		}else{
			msg = getMsg(swwsdm);//根据不同税务文书代码得到不同的提示信息
		}
		if ("WZPWBA01" === swwsdm ||
			"WZTS0001" === swwsdm ||
			"WZDS0030" === swwsdm ||
			"WZDJ0048" === swwsdm ||
			"WZPW0001" === swwsdm ||
			"WZPW0081" === swwsdm ||
			"WZSB0001" === swwsdm ||
			"WZPW0020" === swwsdm ||
			"WZZS2011" === swwsdm ||
			"WZXZXK01" === swwsdm ||
			"WZCCS001" === swwsdm ||
			"WZDKFP01" === swwsdm)
		{
			alert("保存成功！");
		} else {
			 alert(msg);
			//layer.alert( msg,function (index) {layer.close(index);});
		}
	}

	/*进入说明页面*/
	function loadnote() {
		var swwsdm="WZ"+document.all['voWSSP_QUERY.string(PWZL)'].value;
////////////////////////////
		//alert(swwsdm);
    if(swwsdm=='WZPW0016' || swwsdm=='WZPW0009'||swwsdm=='WZPW0011' || swwsdm=='WZPW0012'){//不允许登陆
      alert("该审批事项已取消，如有疑义，可联系税管员。");
    }else{//允许登陆
    	var str=",WZPZ0022,WZPW0081,WZPW0005,";
    	if(str.indexOf(","+swwsdm+",")>-1){
    		var url="/pw/pw_jysp.do?b_forward=true&wssllsh="+document.all['voWSSP_QUERY.string(PWZL)'].value+"&TYPE=add";
    		window.location.href=url;
    	}else{
	      if (swwsdm=='WZDJ0001' || swwsdm=='WZDJ0004') {//无需登陆页面
	        swwsdm = "public/" + swwsdm;
	      }
	      var url = "/pw/"+swwsdm+".do";
	     window.location.href=url;
	     }
    }


	}

	/*
	保存到本地
	flag:判断是下载申请表还是通知书1:申请表,2:通知书
	*/
	function saveToDisk(swwsdm,flag) {
		var msg="";
		for (var i=0; i<SWWSDM.length; i++) {
			if (swwsdm == "WZ"+SWWSDM[i][0]) {
				if (flag==1) {//申请表
					msg=SWWSDM[i][1];
					break;
				} else if (flag==2) {//简单通知消息
					msg=SWWSDM[i][1] + "通知信息";
					fillData();
					break;
				}
			}
		}
		for (var j=0; j<SWWSDM_TZS.length; j++) {
  		if (swwsdm == SWWSDM_TZS[j][0]) {
				if (flag==3) {//详细通知书
					msg=SWWSDM_TZS[j][1] + "详细通知书";
					break;
				}
			}
		}
		document.execCommand("SaveAs", true, msg);
	}

	/*打印通知书*/
	function printTzs(swwsdm) {
		var obj = new Array(swwsdm);
		//alert(obj[0]+'dsfdsf');
		var sw=swwsdm.split(",");
	   if(sw[0]=="WZSP2502"||sw[0]=="WZFP0009"){
			showModalDialog("/views/tab/printTzsFp.jsp",obj,"status:false;dialogWidth:550px;dialogHeight:450px;status:no;center:yes;resizable:yes;scroll:yes");
		}else{
			showModalDialog("/views/tab/printTzs.jsp",obj,"status:false;dialogWidth:550px;dialogHeight:450px;status:no;center:yes;resizable:yes;scroll:yes");
		}
	}

	/*往通知书里填写内容
	function fillData() {
		var header="";
		var content="";
		var callerObjs = getArguments();

		var swwsdmlength = callerObjs[0].indexOf(",");
		var swwsdm = "";
		if(swwsdmlength>0){
	  	swwsdm = callerObjs[0].substr(0,swwsdmlength);//税务文书代码
	   	var wssllsh = callerObjs[0].substr(swwsdmlength+1,callerObjs[0].length); //网上受理流水号
		  header=getSwwsmc(swwsdm);//根据不同税务文书代码得到不同的税务文书名字
		  content="文书受理流水号为："+wssllsh+"\n"+getMsg(swwsdm);//根据不同税务文书代码得到不同的提示信息
	  }else{
	  	swwsdm = callerObjs[0];//税务文书代码
		  header=getSwwsmc(swwsdm);//根据不同税务文书代码得到不同的税务文书名字
		  content=getMsg(swwsdm);//根据不同税务文书代码得到不同的提示信息
	  }
		document.all['swwsdm'].value=swwsdm;
		document.getElementById("header").innerHTML='<td align=center height="45" id="header"><b><font size="5" color="#0000FF" face="黑体" id="_tzsmc">'+header+'</font></b></td>';
		document.getElementById("content").innerText=content;
	}
	*/

	function fillData() {
		var header="";
		var content="";
		var callerObjs = getArguments();
		var strs= new Array();
		strs=callerObjs[0].split(",");
//		for(i=0;i<strs.length;i++){
//			alert(strs[i]);
//		}
		var swwsdm = strs[0];
		var wssllsh = strs[1];
		var jmlx="";
		if(swwsdm=="WZPWCJ01"){
		   jmlx=strs[2];
		}
		var lrrq=strs[3];
//		var swwsdmlength = callerObjs[0].indexOf(",");
//		var swwsdm = "";
//		if(swwsdmlength>0){
//	  	swwsdm = callerObjs[0].substr(0,swwsdmlength);//税务文书代码
//	   	var wssllsh = callerObjs[0].substr(swwsdmlength+1,callerObjs[0].length); //网上受理流水号
		  header=getSwwsmc(swwsdm);//根据不同税务文书代码得到不同的税务文书名字
		  content="文书受理流水号为："+wssllsh+"\n"+getMsg(swwsdm,jmlx,lrrq);//根据不同税务文书代码得到不同的提示信息


//	  }else{
//	  	swwsdm = callerObjs[0];//税务文书代码
//		  header=getSwwsmc(swwsdm);//根据不同税务文书代码得到不同的税务文书名字
		//  content=getMsg(swwsdm);//根据不同税务文书代码得到不同的提示信息
//	  }
	  if(swwsdm == "WZ"+SWWSDM[42][0]||swwsdm== "WZ"+SWWSDM[43][0]||swwsdm== "WZ"+SWWSDM[44][0]||swwsdm== "WZ"+SWWSDM[45][0]){
			var zlmc = strs[2];
			header=getSwwsmc(swwsdm);
			content="文书受理流水号为："+wssllsh+"\n"+getPwbaMsg(zlmc,lrrq);
		}
		document.all['swwsdm'].value=swwsdm;
		document.getElementById("header").innerHTML='<td align=center height="45" id="header"><b><font size="5" color="#0000FF" face="黑体" id="_tzsmc">'+header+'</font></b></td>';
		document.getElementById("content").innerText=content;
		if(swwsdm=="WZZS2011"){
			content="";
			var basxDm=strs[2];
			var bazl= new Array();
			bazl=basxDm.split(";");
			if(bazl.length>0){content="</br>应携带的资料为：</br>";}
			for(i=0;i<bazl.length;i++){
				content=content+getslzl(bazl[i])+"</br>";
			}
			document.getElementById("slzl").innerHTML=content;
		}
	}

	function getPwbaMsg(zlmc,lrrq) {
		var array = new Array();
		array = zlmc.split(";");
		var nZlmc = "";
		for(i = 0; i < array.length; i++){
			nZlmc += array[i] + "\n" + "  ";
		}
	  	var msg="";
	  	var dateTime = new Date();
	  	var yy=dateTime.getFullYear();
		var MM=dateTime.getMonth()+1;  //因为1月这个方法返回为0，所以加1
		var dd=dateTime.getDate();
		var strdate="";

	  // var strdate = myDate.toLocaleDateString();     //获取当前日期
	  	if(lrrq==""||lrrq==null||lrrq==undefined){
	  	  lrrq=	yy+"-"+MM+"-"+dd;
	  	  strdate=lrrq;
	  	}else{
	  	  strdate=	getDateStr(lrrq,0);
	  	}
	  //	var myDate = new Date();
	  //  var strdate = myDate.toLocaleDateString();
		//var strdate=	getDateStr(lrrq,0);
	    msg=" 您提交的申请已提交，税务机关将在您提交申请后的三个工作日内审核是否受理。请您打印好《纳税人减免税备案登记表》并于管理员预受理后五个工作日内携带相关纸质资料到柜台办理备案。超期未上门的，本次备案申请事项自动作废。\n需提供的证件、资料：\n  "+nZlmc+"对以上所需要材料如有疑问，请与税管员联系。"+"                                            厦门地税\n                                              " + strdate;
	    return msg;
	}

	/*得到前画面通过以showModalDialog方式传的参数*/
	function getArguments() {
		var callerObjs = null;
		callerObjs = dialogArguments;//dialogArguments为window自带(以showModalDialog方式传)
	  if(typeof(callerObjs)!="object") {
		  window.close();
		}
		return callerObjs;
	}

	/*判断数据录入是否为数字(onblur)*/
	function checkNumber(itemChanged)
	{
		var iv = itemChanged.value;
		var Letters = "0123456789-.";
		for (i=0; i < iv.length; i++)
		{
			var checkChar = iv.charAt(i);
			if (Letters.indexOf(checkChar) == -1)
			{
				alert ("只能输入数字!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
			}
			if (i>0 && checkChar=='-')
			{
				alert ("请输入有效的数字!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
			}
		}
		if(iv.length>1) {
		  var isValid = true;
		  if(iv.charAt(0)=='0' && iv.charAt(1)!='.') isValid = false;
		  if(!isValid) {
				alert ("只能输入数字!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
		  }
		}
	}

	/*只允许用户输入数字(onkeypress)*/
	function checkInputNum() {
		chars= "0123456789+-.";
		e = window.event;
		eChar = String.fromCharCode(e.keyCode);
		if (chars.indexOf(eChar) <= -1) {
			window.event.keyCode=0;
		}
	}

/**ONBLUR时判断日期是否合法*/
function checkInputDate(f){
	if (!checkLength(f,10)) {
		alert('输入的日期格式不正确!');
		f.focus();
		return false;
	}
	if ( f.value != '') {
		if (!f.value.isDate()) {
			alert('输入的日期为非法日期!');
			f.focus();
			return false;
		}
	}
	return true;
}

	/*只允许用户输入正整数(onkeypress)*/
	function checkInputPlusNum() {
		chars= "0123456789";
		e = window.event;
		eChar = String.fromCharCode(e.keyCode);
		if (chars.indexOf(eChar) <= -1) {
			window.event.keyCode=0;
		}
	}

	/*只允许用户输入正数(onkeypress)*/
	function checkInputPlusNum1() {
		chars= "0123456789.";
		e = window.event;
		eChar = String.fromCharCode(e.keyCode);
		if (chars.indexOf(eChar) <= -1) {
			window.event.keyCode=0;
		}
	}
	/*只充许输电话号码格式(onkeypress)*/
	function checkInputPlusTel() {
		chars= "0123456789+- ()";
		e = window.event;
		eChar = String.fromCharCode(e.keyCode);
		if (chars.indexOf(eChar) <= -1) {
			window.event.keyCode=0;
		}
	}

	/*判断输入的是否为合法的电话号码(onblur)*/
	function checkTelNum(itemChanged) {
		var iv = itemChanged.value;
		var Letters = "0123456789-";
		for (var i=0; i<iv.length; i++) {
			var checkChar = iv.charAt(i);
			if (Letters.indexOf(checkChar) == -1) {
				alert ("输入的值不正确!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
			}
		}
		return true;
	}

	/* 判断输入的是否为合法的手机号码(onblur)
	 * 手机格式控制为11位数字
	 */
	function checkTelNum2(itemChanged) {
		var iv = itemChanged.value;
		var isLegal = true;

		if (iv.length == 0)
			return isLegal;
		if (iv.length != 11) {
			isLegal = false;
		} else {
			var Letters = "0123456789";
			for (var i = 0; i < iv.length; i++) {
				var checkChar = iv.charAt(i);
				if (Letters.indexOf(checkChar) == -1) {
					isLegal = false;
					break;
				}
			}
		}
		if (!isLegal) {
			alert ("手机号码必须为11位移动电话号码，请重新输入。");
			itemChanged.value="";
			itemChanged.focus();
		}

		return isLegal;
	}

	/*判断数据录入是否为正整数(onblur)*/
	function checkPlusNumber(itemChanged)
	{
		var iv = itemChanged.value;
		var Letters = "0123456789";
		for (i=0; i < iv.length; i++)
		{
			var checkChar = iv.charAt(i);
			if (Letters.indexOf(checkChar) == -1)
			{
				alert ("只能输入正整数!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
			}
			if (i>0 && checkChar=='-')
			{
				alert ("请输入有效的数字!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
			}
		}
		if(iv.length>1) {
		  var isValid = true;
		  if(iv.charAt(0)=='0' && iv.charAt(1)!='.') isValid = false;
		  if(!isValid) {
				alert ("只能输入数字!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
		  }
		}
		return true;
	}

	/*判断数据录入是否为正数(onblur)*/
	function checkPlusNumber1(itemChanged)
	{
		var iv = itemChanged.value;
		var Letters = "0123456789.";
		for (i=0; i < iv.length; i++)
		{
			var checkChar = iv.charAt(i);
			if (Letters.indexOf(checkChar) == -1)
			{
				alert ("只能输入正数!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
			}
			if (i>0 && checkChar=='-')
			{
				alert ("请输入有效的数字!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
			}
		}
		if(iv.length>1) {
		  var isValid = true;
		  if(iv.charAt(0)=='0' && iv.charAt(1)!='.') isValid = false;
		  if(!isValid) {
				alert ("只能输入数字!");
				itemChanged.value="";
				itemChanged.focus();
				return false;
		  }
		}
		return true;
	}

	/**指定小数位数的数字掩码(onblur)*/
	function numberMaskD( ws )
	{
	  chars= "0123456789+-.";
	  e = window.event;
	  eChar = String.fromCharCode(e.keyCode);
	  if(chars.indexOf(eChar)==-1) window.event.keyCode=0;
	  var srcVal = window.event.srcElement.value;
	  if(eChar=="+" || eChar=="-" || eChar==".") {
	    if((eChar=="+" ||  eChar==".") && srcVal.length<1) window.event.keyCode=0;
	    if(srcVal.indexOf(eChar)>=0) window.event.keyCode=0;
	  }
	  if((window.event.srcElement.value + eChar).length>1) {
	    if(ws == 0 && eChar==".") window.event.keyCode=0;
	    else {
	      if(eChar != "-") {
	        var val_1 = window.event.srcElement.value + eChar;
	        var val_2 = val_1.split(".");
	        if(val_2[1] && val_2[1].length > ws)
	          window.event.keyCode=0;
	      }
	    }
	  }
	}

	/**将输入的字母转化为大写(onkeypress)*/
	function toUpperCase(){
		chars= "abcdefghijklmnopqrstuvwxyz";
		e = window.event;
		eChar = String.fromCharCode(e.keyCode);
		if (chars.indexOf(eChar)>-1) {
			e.keyCode = e.keyCode -32;
		}
	}

	/**根据传入位数判断输入项ONBLUR时长度是否合法*/
	function checkLength(f,length){
		var len = f.value.length;
		if (len != length && f.value != '') {
			alert('输入的位数不正确');
			f.select();
			return false;
		}
		return true;
	}

	/**提交表单*/
	function doSubmit(form, action) {
		//alert(action);
		form.action=action;
		form.submit();
	}

	/**取消增加*/
	function doCancel() {
		document.URL='/pw/pw_01.do';
	}

	/*进入新增批文页面*/
	function addtab() {
		var tabid=document.all['tabid'].value;
		var url;
		if (tabid!='WZDJ0001' && tabid!='WZDJ0004') {//需要登陆
			url = "/pw/service.do?b_service=true&serviceName=tab_init&context.tabId="+tabid+"&newFlag=true";
			//url = "/pw/service.do?b_service=true&serviceName=tab_init&context.addtab="+tabid+"&newFlag=true";
		} else {//可以不需要登陆
			url = "/pw/public/service.do?b_service=true&serviceName=tab_init&context.tabId="+tabid+"&newFlag=true";
		}
	  window.location.href=url;
	}

	function addtab2(nsrid,nsrmc,dwsbh) {
		var tabid=document.all['tabid'].value;
		var url;
		if (tabid!='WZDJ0001' && tabid!='WZDJ0004') {//需要登陆
			url = "/pw/service.do?b_service=true&serviceName=tab_init&context.tabId="+tabid+"&newFlag=true"+"&nsrid="+nsrid+"&nsrmc="+nsrmc+"&dwsbh="+dwsbh;
			//url = "/pw/service.do?b_service=true&serviceName=tab_init&context.addtab="+tabid+"&newFlag=true";
		} else {//可以不需要登陆
			url = "/pw/public/service.do?b_service=true&serviceName=tab_init&context.tabId="+tabid+"&newFlag=true";
		}
	  window.location.href=url;
	}
	function addtab3(nsrid,nsrmc,dwsbh) {
	        var tabid="WZDJ0042";
			url = "/pw/service.do?b_service=true&serviceName=tab_init&context.tabId="+tabid+"&newFlag=true"+"&nsrid="+nsrid+"&nsrmc="+nsrmc+"&dwsbh="+dwsbh;
	        window.location.href=url;
	}
	function addtabCyjy(tabid,type) {
		url = "/pw/service.do?b_service=true&serviceName=tab_init&context.tabId="+tabid+"&newFlag=true"+"&TYPE="+type;
        window.location.href=url;
}
	function addtabdkdj() {
		var tabid=document.all['tabid'].value;
		if (tabid!='WZDJ0001' && tabid!='WZDJ0004') {//需要登陆
			url = "/pw/service.do?b_service=true&serviceName=tab_init&context.tabId="+tabid+"&newFlag=true&dkdj=true";
			//url = "/pw/service.do?b_service=true&serviceName=tab_init&context.addtab="+tabid+"&newFlag=true";
		} else {//可以不需要登陆
			url = "/pw/public/service.do?b_service=true&serviceName=tab_init&context.tabId="+tabid+"&newFlag=true&dkdj=true";
		}
	  window.location.href=url;
	}





	/**批文修改链接*/
	function tabModify(tabid,wzwsbh,pwzl) {
		// alert(tabid);
		// alert(wzwsbh);
		// alert(pwzl);
		var tablename;
		//var pwzl = document.all['voWSSP_QUERY.string(PWZL)'].value;
		tablename = getTableName(pwzl);
		var url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$WSSLLSH)='+wzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=!&view=false';
		if(tabid == 'PWBA01' || tabid == 'PWBA02' || tabid == 'PWBA03' || tabid == 'PWBA04'){
			var url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$WSSLLSH)='+wzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=!&view=false'+'&type=PWBAmodify';
		}
		window.location.href=url;
		return true;
	}



	function tabModifydwzf(tabid,wzwsbh,pwzl) {
		var tablename;
		tablename = getTableName(pwzl);
		var url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$WSSLLSH)='+wzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=!';
		window.location.href=url;
		return true;
	}


	/**批文删除链接*/
	function tabDelHtgl(tabid,wzwsbh,pwzl) {

		if (!confirm('您确认删除该申请审批纪录吗？合同管理')){
			return false;
		}
		var tablename;
		tablename = getTableName(pwzl);
		var url ='/pw/pw_delHtgl.do?b_del=true&serviceName=tab_del&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$WSSLLSH)='+wzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=!';
		window.location.href=url;
		return true;
	}

	/**批文删除链接*/
	function tabDel(tabid,wzwsbh,pwzl) {
		if (!confirm('您确认删除该申请审批纪录吗？')){
			return false;
		}
		var tablename;
		tablename = getTableName(pwzl);
		var url ='/pw/pw_del.do?b_del=true&serviceName=tab_del&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$WSSLLSH)='+wzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=!';
		window.location.href=url;
		return true;
	}


	function tabDeldwzf(tabid,wzwsbh,pwzl) {
		if (!confirm('您确认删除该申请审批纪录吗？')){
			return false;
		}
		var tablename;
		tablename = getTableName(pwzl);
		var url ='/pw/pw_del_dwzc.do?b_del=true&serviceName=tab_del&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$WSSLLSH)='+wzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=!';
		window.location.href=url;
		return true;
	}

	/**批文查看链接*/
	function tabView(tabid,wzwsbh,pwzl,lrrq) {

		var tablename;
		//var pwzl = document.all['voWSSP_QUERY.string(PWZL)'].value;
		tablename = getTableName(pwzl);

		var url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$WSSLLSH)='+wzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=!&view=true&LRRQ='+lrrq;
		window.location.href=url;
		return true;
	}

	function tabViewdwzc(tabid,wzwsbh,pwzl) {
		var tablename;
		//var pwzl = document.all['voWSSP_QUERY.string(PWZL)'].value;
		tablename = getTableName(pwzl);
		var url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$WSSLLSH)='+wzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=!&view=true';
		window.location.href=url;
		return true;
	}

	function tabViewdwzcHtgl(tabid,wzwsbh,pwzl) {
		var tablename;
		//var pwzl = document.all['voWSSP_QUERY.string(PWZL)'].value;
		tablename = "GJ_DWZF_HTJBXX";
		var url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$HTLSH)='+wzwsbh+'&view=true';
		window.location.href=url;
		return true;
	}

	/**批文查看通知书链接*/
	function tabViewTzs(tabid,xtwsbh,tzsbh,wsbh_mb) {
		if (!CheckIsOk()) {
			return false;
		}
		//var pwzl = document.all['voWSSP_QUERY.string(PWZL)'].value;
		var pwbh = getPwbh(tabid,xtwsbh,wsbh_mb);
		var tzsid = getTzsid(tabid,tzsbh);
		var tablename = getTzsTableName(tabid,tzsbh);
		var url;
		url ='/pw/service.do?b_service=true&allowrepeat=Y&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+pwbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&isclose=true&viewTzs=true';
		 window.open(url,"");
		//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
		return true;
	}

		/**批文查看通知书链接--这个是试点单位需要送达回证的*/
	function tabViewTzs1(tabid,xtwsbh,tzsbh,wsbh_mb) {
		if (!CheckIsOk()) {
			return false;
		}
		//var pwzl = document.all['voWSSP_QUERY.string(PWZL)'].value;
		var pwbh = getPwbh(tabid,xtwsbh,wsbh_mb);
		var tzsid = getTzsid(tabid,tzsbh);
		var tablename = getTzsTableName(tabid,tzsbh);
		var url;
		if(tabid=="DJ0004" || tabid=="PW0001" || tabid=="PW0002" || tabid=="PW0005" || tabid=="PW0008" || tabid=="PW0020" || tabid=="SP2502" || tabid=="TS0001"){

		  if(window.confirm("请确认是否接受送达回证")){
		  	//tabId 这边是指通知道书的表单的ID　sdId是指文书的种类，指哪种申请表，如果申请注销的表ID等
			url ='/pw/service.do?b_service=true&allowrepeat=Y&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+pwbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true&isclose=true&xtwsbh=' +xtwsbh+'&sdid='+tabid+'&needsdhz=true';
			window.open(url,"");
			//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
		  }else{
		        url ='/pw/service.do?b_service=true&allowrepeat=Y&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+pwbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true&isclose=true&needsdhz=false';
        window.open(url,"");
        //window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
			}
		}else{
			url ='/pw/service.do?b_service=true&allowrepeat=Y&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+pwbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true&isclose=true&needsdhz=false';
			window.open(url,"");
			//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
		}
		//window.open(url,"");
		return true;
	}

	/**批文查看通知书结果链接*/
	function tabViewTzsJg(tabid,xtwsbh,tzsbh) {
		if (!CheckIsOk()) {
			return false;
		}
		//var pwzl = document.all['voWSSP_QUERY.string(PWZL)'].value;
		var pwbh = getPwbh(tabid,xtwsbh,tzsbh);
		var tzsjgid = getTzsJgid(tabid,tzsbh);
		var tablename = getTzsJgTableName(tabid,tzsbh);
		var url;
		url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+xtwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true';
       if(tabid=='SP2502'){
    	url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+xtwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=1&viewTzs=true';
       }
		window.location.href=url;
		return true;
	}

	/**批文查看通知书链接(征管为非批文)*/
	function tabViewTzsNotPW(tabid,tzwsbh) {
		if (!CheckIsOk()) {
			return false;
		}
		var tzsid = getTzsid(tabid,tzwsbh);
		var tablename = getTzsTableName(tabid,tzwsbh);
		var url;
		if (tablename=='JA_WGZ') {//开具外出经营税收管理证明申请(建安)
			url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WGZHM)='+tzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true';
		} else {
			url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+tzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true';
		}
		window.location.href=url;
		return true;
	}

	/**定税查看通知书链接*/
	function tabViewTzsByDscx(tabid,tzsbh) {
		var tzsid = getTzsid(tabid,tzsbh);

		var tablename = getTzsTableName(tabid,tzsbh);
 // alert("tzsid="+tzsid+"==tablename="+tablename);

		var url;
		url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+tzsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true';

		window.location.href=url;
		return true;
	}

	/**批文重新提交链接*/
	function tabReCommit(tabid,wzwsbh,pwzl) {
		if (!CheckIsOk()) {
			return false;
		}
		var tablename;
		//var pwzl = document.all['voWSSP_QUERY.string(PWZL)'].value;
		tablename = getTableName(pwzl);
		var url ='/pw/service.do?b_service=true&serviceName=tab_init&context.tabId=WZ'+tabid+'&context.tabPKVO.string('+tablename+'$WSSLLSH)='+wzwsbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=!&recommit=true&tablename='+tablename+'';
		window.location.href=url;
		return true;
	}

	/**批文提交按钮*/
	function formsubmit(swwsdm,form) {
		if (swwsdm!='WZDJ0001' && swwsdm!='WZDJ0004') {//需要登陆
			 if(swwsdm=="WZHT0001"||swwsdm=="WZGJ0007"||swwsdm=="WZCA0001"){
					form.action='/pw/service.do?isCommit=true&SWWSDM='+swwsdm;
				}else{
				//	 document.getElementsByName("tabForm.table.tableValue.string(WZ_DJ_SQ_YHZHXX$FJLSH)")[0].value="AAAAAA";
					form.action='/pw/service.do?isCommit=true';
				}


		}else {//可以不需要登陆
			form.action='/pw/public/service.do?isCommit=true';
		}
		var sCheck=document.getElementById("tjsqCheck");
		 if(sCheck==null||sCheck==undefined){
		   }else{
				  sCheck.disabled=true;
			  }
		form.submit();
	}
	/**批文提交按钮*/
	function formsave(swwsdm,form) {
		if (swwsdm!='WZDJ0001' && swwsdm!='WZDJ0004') {//需要登陆
				if(swwsdm=="WZGJ0001"||swwsdm=="WZGJ0002"){
					document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYSPB$SAVE)'].value="SAVE";
				}
				if(swwsdm=="WZGJ0003"||swwsdm=="WZGJ0004"){
					document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYBAB$SAVE)'].value="SAVE";
				}
				if(swwsdm=="WZGJ0006"){
					document.all['tabForm.table.tableValue.string(WZ_GJ_FJM_XSXDDYZXQKB$SAVE)'].value="SAVE";
				}
			form.action='/pw/save.do';

		}
		if(swwsdm=='WZPWBA01'||swwsdm=='WZPWBA02'||swwsdm=='WZPWBA03'||swwsdm=='WZPWBA04'){
			document.all['tabForm.table.tableValue.string(WZ_PW_BA_JMBAB$SAVE)'].value="SAVE";
			form.action='/pw/public/service.do?isCommit=true';
		}
		else {
			form.action='/pw/public/service.do?isCommit=true';

		}
		form.submit();
		alert("资料保存成功！");
	}
	/*
	function formsave(swwsdm,form,zcwz) {
			form.action='/pw/public/service.do?isCommit=true';
			alert(form.action);
		form.submit();
		alert("资料保存成功！");
	}
	*/
	/**判断用户是不是有更改选择“申请事项”而没有按“查询”按钮*/
	function CheckIsOk(){
		var isok = document.all['isok'].value;
		if (isok == 'false') {
			alert("在您更改了申请事项选择后,必须点击查询按钮重新查询！");
			return false;
		}
		return true;
	}

/***************************************************业务JS**************************************/
//印花税核定征收申请
	var HDBL_DZB = new Array(
		new Array("090100","工业－购销金额",0.5,0.8),
		new Array("090100","商业批发或以批发为主－购销金额",0.7,0.8),
		new Array("090100","商业零售－购销金额",0.4,0.8),
		new Array("090100","外贸－购销金额",0.8,1),
		new Array("090100","建筑安装业－采购金额",0.8,1),
		new Array("090100","房地产开发业－售房收入、房屋开发直接材料费",1,1),
		new Array("090100","其他－购销金额",0.8,1),
		new Array("090200","加工、定作业－加工或承揽收入",0.8,0.9),
		new Array("090200","印刷、广告业－加工或承揽收入",0.7,0.8),
		new Array("090200","修理、修缮业－加工或承揽收入",0.4,0.5),
		new Array("090200","测绘、测试业－加工或承揽收入",0.5,0.6),
		new Array("090300","经营收入",0.8,1),
		new Array("090400","经营收入",0.8,1),
		new Array("090400","项目发包总成本",1,1),
		new Array("090500","租赁金额",1,1),
		new Array("090600","货物运输收入",1,1),
		new Array("090700","仓储保管收入",1,1),
		new Array("090800","借款金额",1,1),
		new Array("090900","保险费金额",1,1),
		new Array("091000","技术开发、转让、咨询、服务收入",1,1),
		new Array("091100","产权转移收入",1,1)
	);

  /* 切换 */
  function rateCheck_yhs(f) {
  	var form = f.form;
		var idx = f.index;
  	var pzlx = document.all['tabForm.table.detail1['+idx+'].string(WZ_DS_SQSP_YHSMX$SQZSPZLX_DM)'].value;//核定征收凭证类型
  	var sel = document.all['tabForm.table.detail1['+idx+'].string(WZ_DS_SQSP_YHSMX$SQJSYJ)'];
  	var sqbl = f.value;
  	var jsyj;

		for (var i=0; i<sel.options.length; i++) {
			if (sel.options[i].selected && sel.options[i].value != "") {
				jsyj = sel.options[i].text;
				break;
			}
		}

		for(ii=0; ii<HDBL_DZB.length; ii++) {
			if(pzlx==HDBL_DZB[ii][0] && jsyj==HDBL_DZB[ii][1]) {
				var sqbl_val = sqbl * 1;
				if(sqbl_val<HDBL_DZB[ii][2] || sqbl_val>HDBL_DZB[ii][3]) {
					alert("输入的核定比例超出允许范围，应该在 ["+HDBL_DZB[ii][2]+"] 和 ["+HDBL_DZB[ii][3]+"] 之间。");
					f.focus();
					return false;
				}
			}
		}
  }


//企业发票领购申请
	//保存Check
	function saveFplgCheck(){
		for (var i=0; i<100; i++) {
			if (typeof(document.all['tabForm.table.detail1[' +i+'].isChecked']) == "object") {

				if (checkPlusNumber(document.all['tabForm.table.detail1['+i+'].string(WZ_FP_SQSP_QYLGFPMX$MCGML)'])){
					var myyl = parseInt(document.all['tabForm.table.detail1['+i+'].string(WZ_FP_SQSP_QYLGFPMX$MYGL)'].value);//现每月用量
					var mcgml = parseInt(document.all['tabForm.table.detail1['+i+'].string(WZ_FP_SQSP_QYLGFPMX$MCGML)'].value);//现每次购买量

					if (myyl<=0) {
				  	alert('现每月用量必须是大于零的整数！');
				  	document.all['tabForm.table.detail1['+i+'].string(WZ_FP_SQSP_QYLGFPMX$MYGL)'].focus();
				  	return false;
					}
					if (mcgml<=0) {
				  	alert('现每次购买量必须是大于零的整数！');
				  	document.all['tabForm.table.detail1['+i+'].string(WZ_FP_SQSP_QYLGFPMX$MCGML)'].focus();
				  	return false;
					}
					if (mcgml > myyl) {
				  	alert('现每次购买量不能大于现每月用量！');
				  	document.all['tabForm.table.detail1['+i+'].string(WZ_FP_SQSP_QYLGFPMX$MCGML)'].focus();
				  	return false;
					}
				}
			} else {
				break;
			}
		}
		return true;
	}

//总机构收取管理费
	//管理费比例check
	function zjgGlfblCheck(e) {
		if (parseInt(e.value)>2) {
			alert("收取管理费比例不能大于2%！");
			e.focus();
			return false;
		}
		return true;
	}

//网上退税
	//入库日期判断
	function checkRtkrq(form) {
		var jnsph = form['zs_zsbVO.string(JNSPH)'].value;//机内税票号
		var rtkrqs = form['zs_zsbVO.string(RTKRQS)'].value;//入退库日期始
		var rtkrqz = form['zs_zsbVO.string(RTKRQZ)'].value;//入退库日期止
        var jkrqs = form['zs_zsbVO.string(JKRQS)'].value;//缴款日期始
        var jkrqz = form['zs_zsbVO.string(JKRQZ)'].value;//缴款日期止

		if (jnsph=="") {

			if(rtkrqs == "" || rtkrqz == ""){
				//alert("请录入　入退库日期始止，或者缴款日期始止！");
				//return false;
					if (jkrqs == "" || jkrqz == "") {
						alert("请录入入退库日期始止，或者缴款日期始止");
						return false;
						}
					}
		      if(rtkrqs !="" &&rtkrqz !=""){
					var tmp_date = new Date();
					var rtkrqs_date = tmp_date.parseDate(rtkrqs,"yyyy-mm-dd");
					var rtkrqz_date = tmp_date.parseDate(rtkrqz,"yyyy-mm-dd");

					var yxq_rtkrq = rtkrqs_date.dayDiff(rtkrqz_date,"d");
					if (yxq_rtkrq > 365) {
						alert('入（退）库日期区间跨度不得超过一年');
						form['zs_zsbVO.string(RTKRQS)'].focus();
						return false;
					}
		      }
/*
			var nds = rtkrqs.substr(0,4);
			var ndz = rtkrqz.substr(0,4);

			if (nds != ndz) {
				alert('入（退）库日期必须在一年之内');
				form['zs_zsbVO.string(RTKRQS)'].focus();
				return false;
			}
*/
		}
		return true;
	}



	function checkRtkrqJa(form) {
		var jnsph = form['zs_zsbVO.string(JNSPH)'].value;//机内税票号
		var rtkrqs = form['zs_zsbVO.string(RTKRQS)'].value;//入退库日期始
		var rtkrqz = form['zs_zsbVO.string(RTKRQZ)'].value;//入退库日期止
		var skssqs = form['zs_zsbVO.string(SKSSQS)'].value;//税款日期始
        var skssqz = form['zs_zsbVO.string(SKSSQZ)'].value;//税款日期
		if (jnsph=="") {
			if(rtkrqs == "" || rtkrqz == ""){
					if (skssqs == "" || skssqz == "") {
						alert("请录入入退库日期始止，或者税款日期始止");
						return false;
						}
					}
		      if(rtkrqs !="" &&rtkrqz !=""){
					var tmp_date = new Date();
					var rtkrqs_date = tmp_date.parseDate(rtkrqs,"yyyy-mm-dd");
					var rtkrqz_date = tmp_date.parseDate(rtkrqz,"yyyy-mm-dd");
					var yxq_rtkrq = rtkrqs_date.dayDiff(rtkrqz_date,"d");
					if (yxq_rtkrq > 365) {
						alert('入（退）库日期区间跨度不得超过一年');
						form['zs_zsbVO.string(RTKRQS)'].focus();
						return false;}
		      }
		}
		return true;
	}




	function doSelectZsb(f) {
		var value=f.value;
		var thisform = f.form;
		var idx=f.index;
		alert("提示:系统将调出该税票的入库记录!");
	  thisform.action='/pw/wsts.do?b_select=true&jnsph='+value+'&index='+idx+'';
	  thisform.submit();
	}

	function checkYtse(f) {
		var index=f.attributes["index"].nodeValue;//该对象的跑标
		var ynse=document.all['tabForm.table.detail1['+index+'].string(WZ_TS_TSSPB_MX$YNSE)'].value;
    //校验应退税额必须为2位小数
    var d = f.value.split(".");
    if (d[1] && d[1].length>2) {
			alert('应退税额只能输入2位小数！');
    	f.focus();
      return false;
    }

		if (parseFloat(f.value)>parseFloat(ynse)) {
			alert('应退税额不能大于实缴税额！');
    	f.focus();
    	return false;
		}

    //根据index向上和向下2个方向取对象，把数值相加，把退税总金额写值
    var tszje = 0;
    var objtsje = null;
    var ii = index
    //向下已到0为限制
    for (ii = parseFloat(index); ii>=0 ; ii--){
      objtsje = document.all['tabForm.table.detail1['+ii+'].double(WZ_TS_TSSPB_MX$YTSE)'];
      if (objtsje){
        if (objtsje.value.trim()!=""){
          tszje = tszje + parseFloat(objtsje.value);
        }
      }

    }

    //向上已碰到的第一个为null的对象为止
    for (ii = parseFloat(index)+1; ii>=0 ; ii++){
      objtsje = document.all['tabForm.table.detail1['+ii+'].double(WZ_TS_TSSPB_MX$YTSE)'];
      if (objtsje){
        if (objtsje.value.trim()!=""){
          tszje = tszje + parseFloat(objtsje.value);
        }
      }else{
      break;
    }

    }
    document.all['tszjetd'].innerHTML = toFixedNum(tszje, 2);
		return true;
	}

//查询验证
function checkSkrkrq(){
	var xzny = "2006-01";
	if ((document.all.skrkrqs.value) == null || (document.all.skrkrqs.value) == ""){
		alert("税款入库日期始不能为空。");
		document.all.skrkrqs.focus();
		return false;
	}
	if ((document.all.skrkrqz.value) == null || (document.all.skrkrqz.value) == ""){
		alert("税款入库日期止不能为空。");
		document.all.skrkrqz.focus();
		return false;
	}
	if (document.all.skrkrqs.value > document.all.skrkrqz.value){
		alert("税款入库日期止不能早于税款入库日期始。");
		document.all.skrkrqz.focus();
		return false;
	}
	if (document.all.skrkrqs.value < xzny){
		alert("只能查询税款入库日期在2006年1月1日以后的数据。");
		document.all.skrkrqz.focus();
		return false;
	}

	if ((document.all.skrkrqs.value >= document.all.currentDate.value)){
		alert("税款入库日期必须早于当前年度月份("+document.all.currentDate.value +")。");
		document.all.skrkrqs.focus();
		return false;
	}

	if ((document.all.skrkrqz.value >= document.all.currentDate.value)){
		alert("税款入库日期必须早于当前年度月份("+document.all.currentDate.value +")。");
		document.all.skrkrqz.focus();
		return false;
	}
	return true;
}

//代扣代缴个人所得税
//合计
function checkgroup(obj){
	var zt = obj.checked;
	var obj_name = obj.name;
  var rows = (obj_name.split("[")[1]).split("]")[0];  //取得当前行数

	for (var gh=0 ; gh < (parseInt(document.all("count").value)) ; gh++){
		if (document.all('zs_zsbList_DK['+gh+'].string(JNSPH)').value == document.all('zs_zsbList_DK['+rows+'].string(JNSPH)').value){
			document.all('zs_zsbList_DK['+gh+'].isChecked').checked = zt;
			document.all("zs_zsbList_DK["+gh+"].string(CHECK_BZ)").value = zt;
		}
	}
	sumhjAndsxf();
}
//计算税款合计，手续费合计
function sumhjAndsxf(){
var tbodyObj = document.getElementById('dtlTable');
	var hj=0;
	var sxfhj=0;
	        $("table :checkbox").each(function(key,value){
            if($(value).prop('checked')){
                  sjjne=new Number(tbodyObj.rows[key+1].cells[4].innerHTML).toFixed(2);
                  sxfhj=Number((new Number(sxfhj)).toFixed(2))+Number((new Number(sjjne * 0.02)).toFixed(2));
                  hj =Number((new Number(hj)).toFixed(2)) + Number(sjjne);
            }
        })
	hj = (new Number(hj)).toFixed(2);
	document.all.skhj.value = hj;
	if (hj > 0){
		//sxfhj = hj * 0.02;
		sxfhj = (new Number(sxfhj)).toFixed(2);
		document.all.slsxfhj.value = sxfhj;
	}
	else {
		document.all.slsxfhj.value = hj ;
	}
}

//外籍人员注销
	//入库日期判断
	function checkSearchInfo() {
		var xm = document.all.xm.value;//个人中文姓名
		var zjlx_dm =document.all.zjlx_dm.value; //证件类型
		var wxm = document.all.wxm.value;//个人外文姓名
		var zjhm = document.all.zjhm.value;//证件号码
		if(zjhm=="" || zjhm==null) {
			alert('证件号码必须填写完整');
			document.all.zjhm.focus();
			return false;
		}
		if(zjlx_dm=="" || zjlx_dm==null) {
			alert('请选择证件类型');
			document.all.zjlx_dm.focus();
			return false;
		}

		if((xm=="" || xm==null) && (wxm=="" || wxm==null)) {
			alert('个人中文姓名和个人外文姓名至少必须输入一条');
			document.all.xm.focus();
			return false;
		}
		return true;
	}

//未登陆批文
	//根据选择的申请业务分发到不同页面
	function doNoLoginDispatch(sqyw,nsrId,nsrMc) {
		var url;
		url = '/pw/public/pw_nologin_confirm?b_unloginConfirm=true&nsrId='+nsrId+'nsrMc='+nsrMc;
		window.location.href=url;
	}

//开具外出经营税收管理证明申请
function checkDateBetween(f,daynum) {
	var index = f.index;
	var yxqs = document.all['tabForm.table.detail1['+ index +'].string(WZ_DJ_JYXMLWXX$YXQS)'].value;//有效期始
	var yxqz = document.all['tabForm.table.detail1['+ index +'].string(WZ_DJ_JYXMLWXX$YXQZ)'].value;//有效期止

	var tmp_date = new Date();
	var yxqs_date = tmp_date.parseDate(yxqs,"yyyy-mm-dd");
	var yxqz_date = tmp_date.parseDate(yxqz,"yyyy-mm-dd")
	var yxq_xyts = yxqs_date.dayDiff(yxqz_date,"d");
	if (yxq_xyts > daynum) {
		alert("外出经营活动有效期限起止的时间要小于等于180天！");
		f.focus();
		return false;
	}
	return true;
}

//国产设备
//申请表总额自动技术
function autoMultiplyByGcsbSQ(f) {
	var index = f.index;
	var sl = document.all['tabForm.table.detail1['+ index +'].string(WZ_PW_B_JSGZDMSDSSQ_MX$SBSL)'].value;//数量
	var gsdj = document.all['tabForm.table.detail1['+ index +'].string(WZ_PW_B_JSGZDMSDSSQ_MX$GSDJ)'].value;//概算单价

	if (sl!="" && gsdj!="") {
		document.all['tabForm.table.detail1['+ index +'].string(WZ_PW_B_JSGZDMSDSSQ_MX$GSTZZE)'].value=parseFloat(sl)*parseFloat(gsdj);
	}
}
//审核表总额自动技术
function autoMultiplyByGcsbSH(f) {
	var index = f.index;
	var sl = document.all['tabForm.table.detail1['+ index +'].string(WZ_PW_B_JSGZDMSDSSHB_MX$SBSL)'].value;//数量
	var gsdj = document.all['tabForm.table.detail1['+ index +'].string(WZ_PW_B_JSGZDMSDSSHB_MX$SBDJ)'].value;//单价

	if (sl!="" && gsdj!="") {
		document.all['tabForm.table.detail1['+ index +'].string(WZ_PW_B_JSGZDMSDSSHB_MX$SBZE)'].value=parseFloat(sl)*parseFloat(gsdj);
	}
}


	function checkBchfse(f) {

		var index=f.index;//该对象的跑标
		var ynse=document.all['tabForm.table.detail1['+index+'].string(WZ_ZM_FHZM_SPB_WSMX$SE)'].value;

    //校验本次付汇涉及税额必须为2位小数
    var d = f.value.split(".");
    if (d[1] && d[1].length>2) {
			alert('本次付汇涉及税额只能输入2位小数！');
    	f.focus();
      return false;
    }

		if (parseFloat(f.value)>parseFloat(ynse)) {
			alert('本次付汇涉及税额不能大于已纳税额！');
    	f.focus();
    	return false;
		}

    //根据index向上和向下2个方向取对象，把数值相加，把付汇总金额写值
    var hfzje = 0;
    var objhfje = null;
    var ii = index
    //向下已到0为限制
    for (ii = parseFloat(index); ii>=0 ; ii--){
      objhfje = document.all['tabForm.table.detail1['+ii+'].double(WZ_ZM_FHZM_SPB_WSMX$BCFHSE)'];
      if (objhfje){
        if (objhfje.value.trim()!=""){
          hfzje = hfzje + parseFloat(objhfje.value);
        }
      }

    }


    //向上已碰到的第一个为null的对象为止
    for (ii = parseFloat(index)+1; ii>=0 ; ii++){
      objhfje = document.all['tabForm.table.detail1['+ii+'].double(WZ_ZM_FHZM_SPB_WSMX$BCFHSE)'];
      if (objhfje){
        if (objhfje.value.trim()!=""){
          hfzje = hfzje + parseFloat(objhfje.value);
        }
      }else{
      break;
    }

    }
   document.all['hfzjetd'].innerHTML = toFixedNum(hfzje, 2);
		return true;
	}

	//---------------异地本次附汇额---

		function checkWdBchfse(f) {

		var index=f.index;//该对象的跑标
		var ynse=document.all['tabForm.table.detail5['+index+'].double(WZ_ZM_FHZM_SPB_WDWSMX$SE)'].value;
    //校验本次付汇涉及税额必须为2位小数
    var d = f.value.split(".");
    if (d[1] && d[1].length>2) {
			alert('本次异地付汇涉及税额只能输入2位小数！');
    	f.focus();
      return false;
    }

		if (parseFloat(f.value)>parseFloat(ynse)) {
			alert('本次异地付汇涉及税额不能大于已纳税额！');
    	f.focus();
    	return false;
		}

    //根据index向上和向下2个方向取对象，把数值相加，把付汇总金额写值
    var hfzje = 0;
    var objhfje = null;
    var ii = index
    //向下已到0为限制
    for (ii = parseFloat(index); ii>=0 ; ii--){
      objhfje = document.all['tabForm.table.detail5['+ii+'].double(WZ_ZM_FHZM_SPB_WDWSMX$BCFHSE)'];
      if (objhfje){
        if (objhfje.value.trim()!=""){
          hfzje = hfzje + parseFloat(objhfje.value);
        }
      }

    }


    //向上已碰到的第一个为null的对象为止
    for (ii = parseFloat(index)+1; ii>=0 ; ii++){
      objhfje = document.all['tabForm.table.detail5['+ii+'].double(WZ_ZM_FHZM_SPB_WDWSMX$BCFHSE)'];
      if (objhfje){
        if (objhfje.value.trim()!=""){
          hfzje = hfzje + parseFloat(objhfje.value);
        }
      }else{
      break;
    }

    }
   document.all['wdhfzjetd'].innerHTML = toFixedNum(hfzje, 2);
		return true;
	}

  //-------------------

  	//---------------异地计税依据---

		function checkWdJsyj(f) {

		var index=f.index;//该对象的跑标
    //校验本次付汇涉及税额必须为2位小数
    var d = f.value.split(".");
    if (d[1] && d[1].length>2) {
			alert('本次异地计税依据只能输入2位小数！');
    	f.focus();
      return false;
    }


    //根据index向上和向下2个方向取对象，把数值相加，把付汇总金额写值
    var jsyjZe = 0;
    var objjsyj = null;
    var ii = index
    //向下已到0为限制
    for (ii = parseFloat(index); ii>=0 ; ii--){
      objjsyj = document.all['tabForm.table.detail5['+ii+'].double(WZ_ZM_FHZM_SPB_WDWSMX$JSYJ)'];
      if (objjsyj){
        if (objjsyj.value.trim()!=""){
          jsyjZe = jsyjZe + parseFloat(objjsyj.value);
        }
      }

    }


    //向上已碰到的第一个为null的对象为止
    for (ii = parseFloat(index)+1; ii>=0 ; ii++){
      objjsyj = document.all['tabForm.table.detail5['+ii+'].double(WZ_ZM_FHZM_SPB_WDWSMX$JSYJ)'];
      if (objjsyj){
        if (objjsyj.value.trim()!=""){
          jsyjZe = jsyjZe + parseFloat(objjsyj.value);
        }
      }else{
      break;
    }

    }
   document.all['wdjsyj'].innerHTML = toFixedNum(jsyjZe, 2);
		return true;
	}


 	//---------------异地税额---

		function checkWdSe(f) {

		var index=f.index;//该对象的跑标
    //校验本次付汇涉及税额必须为2位小数
    var d = f.value.split(".");
    if (d[1] && d[1].length>2) {
			alert('本次异地税额只能输入2位小数！');
    	f.focus();
      return false;
    }

    //根据index向上和向下2个方向取对象，把数值相加，把付汇总金额写值
    var seZe = 0;
    var objse = null;
    var ii = index
    //向下已到0为限制
    for (ii = parseFloat(index); ii>=0 ; ii--){
      objse = document.all['tabForm.table.detail5['+ii+'].double(WZ_ZM_FHZM_SPB_WDWSMX$SE)'];
      if (objse){
        if (objse.value.trim()!=""){
          seZe = seZe + parseFloat(objse.value);
        }
      }

    }


    //向上已碰到的第一个为null的对象为止
    for (ii = parseFloat(index)+1; ii>=0 ; ii++){
      objse = document.all['tabForm.table.detail5['+ii+'].double(WZ_ZM_FHZM_SPB_WDWSMX$SE)'];
      if (objse){
        if (objse.value.trim()!=""){
          seZe = seZe + parseFloat(objse.value);
        }
      }else{
      break;
    }

    }
   document.all['wdse'].innerHTML = toFixedNum(seZe, 2);
		return true;
	}


		/**批文查看送达回证链接*/
	function tabViewSdhz(tabid,xtwsbh,tzsbh,wsbh_mb) {

		var url;

		url='/pw/pw_dzsdhz.do?allowrepeat=Y&b_initial&tabid='+tabid+'&xtwsbh='+xtwsbh+'&tzsbh='+tzsbh+'&wsbh_mb='+wsbh_mb;

		if(window.confirm("请确认是否接受送达回证")){

		url='/pw/pw_dzsdhz.do?allowrepeat=Y&b_commit&tabid='+tabid+'&xtwsbh='+xtwsbh+'&tzsbh='+tzsbh+'&wsbh_mb='+wsbh_mb+'&needsdhz=true';
			window.open(url,"");
			//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
		}else{
			url='/pw/pw_dzsdhz.do?allowrepeat=Y&b_initial&tabid='+tabid+'&xtwsbh='+xtwsbh+'&tzsbh='+tzsbh+'&wsbh_mb='+wsbh_mb+'&needsdhz=false';
			window.open(url,"");
			//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
		}
		//window.open(url,"");
		return true;
	}

      /**批文查看送达回证链接---laiquzhen--2009-11-03修改*/
	function tabViewSdhzNew(tabid,xtwsbh,tzsbh,wsbh_mb,sdhzwh,pwzl,pwzt,lrrqs,lrrqz) {
		//alert('tabid'+tabid+'xtwsbh'+xtwsbh+'tzsbh'+tzsbh+'wsbh_mb'+wsbh_mb+'sdhzwh'+sdhzwh+'pwzl'+pwzl+'pwzt'+pwzt+'lrrqs'+lrrqs+'lrrqz'+lrrqz);
		var url;
		url='/pw/pw_dzsdhz.do?allowrepeat=Y&b_initial&tabid='+tabid+'&xtwsbh='+xtwsbh+'&tzsbh='+tzsbh+'&wsbh_mb='+wsbh_mb;
                //判断是否已有送达回证
                if(sdhzwh==null || sdhzwh==""){
                    if(window.confirm("请确认是否接受送达回证")){

		         url='/pw/pw_dzsdhz.do?allowrepeat=Y&b_commit&tabid='+tabid+'&xtwsbh='+xtwsbh+'&tzsbh='+tzsbh+'&wsbh_mb='+wsbh_mb+'&needsdhz=true'+'&voWSSP_QUERY.string(PWZL)='+pwzl+'&voWSSP_QUERY.string(PWZT)='+pwzt+'&voWSSP_QUERY.string(LRRQS)='+lrrqs+'&voWSSP_QUERY.string(LRRQZ)='+lrrqz;
			window.open(url,"");
			//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
		    }else{
			url='/pw/pw_dzsdhz.do?allowrepeat=Y&b_initial&tabid='+tabid+'&xtwsbh='+xtwsbh+'&tzsbh='+tzsbh+'&wsbh_mb='+wsbh_mb+'&needsdhz=false'+'&voWSSP_QUERY.string(PWZL)='+pwzl+'&voWSSP_QUERY.string(PWZT)='+pwzt+'&voWSSP_QUERY.string(LRRQS)='+lrrqs+'&voWSSP_QUERY.string(LRRQZ)='+lrrqz;
			window.open(url,"");
			//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
		    }
                 }else{

                       url='/pw/pw_dzsdhz.do?allowrepeat=Y&b_initial&tabid='+tabid+'&xtwsbh='+xtwsbh+'&tzsbh='+tzsbh+'&wsbh_mb='+wsbh_mb+'&needsdhz=false'+'&voWSSP_QUERY.string(PWZL)='+pwzl+'&voWSSP_QUERY.string(PWZT)='+pwzt+'&voWSSP_QUERY.string(LRRQS)='+lrrqs+'&voWSSP_QUERY.string(LRRQZ)='+lrrqz;
			window.open(url,"");
			//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
                 }

		//window.open(url,"");
		return true;
	}

        /**批文查看通知书链接--这个是试点单位需要送达回证的------2009-11-06----laiquzhen修改*/
	function tabViewTzs1New(tabid,xtwsbh,tzsbh,wsbh_mb,sdhzwh) {
		if (!CheckIsOk()) {
			return false;
		}
		var pwbh = getPwbh(tabid,xtwsbh,wsbh_mb);
		var tzsid = getTzsid(tabid,tzsbh);
		//alert(tzsid);
		var tablename = getTzsTableName(tabid,tzsbh);
	//	alert('tabid:'+tabid+',xtwsbh:'+xtwsbh+',tzsbh:'+tzsbh+',wsbh_mb:'+wsbh_mb+',sdhzwh:'+sdhzwh);
		var url;
		if(tabid=="DJ0004" || tabid=="PW0001" || tabid=="PW0002" || tabid=="PW0005" || tabid=="PW0008" || tabid=="PW0020" || tabid=="SP2502" || tabid=="TS0001" || tabid=="ZS2011" || tabid=="GJ2003" || tabid=="DJ0042" || tabid=="PWCJ01"){
		   if(sdhzwh==null || sdhzwh==""){
			   if(window.confirm("请确认是否接受送达回证")){
		    	 			//tabId 这边是指通知道书的表单的ID　sdId是指文书的种类，指哪种申请表，如果申请注销的表ID等
				   url ='/pw/service.do?b_service=true&allowrepeat=Y&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+pwbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true&isclose=true&xtwsbh=' +xtwsbh+'&sdid='+tabid+'&needsdhz=true';
				   //alert("u1:"+url);
				   window.open(url,"");
							//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
                     }else{
                    	 url ='/pw/service.do?b_service=true&allowrepeat=Y&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+pwbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true&isclose=true&needsdhz=false';
                    	 //alert("u2:"+url);
                    	 window.open(url,"");
                    	 //window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
                     	}
		  }else{
              url ='/pw/service.do?b_service=true&allowrepeat=Y&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+pwbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true&isclose=true&needsdhz=false';
              //alert("u3:"+url);
              window.open(url,"");
              			// window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
            }
		 }else{

			url ='/pw/service.do?b_service=true&allowrepeat=Y&serviceName=tab_init&context.tabId='+tzsid+'&context.tabPKVO.string('+tablename+'$WSBH)='+pwbh+'&context.tabPKVO.string('+tablename+'$WSLX_DM)=0&viewTzs=true&isclose=true&needsdhz=false';
			//alert("u4:"+url);
			window.open(url,"");
						//window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
		}

		//window.open(url,"");
		return true;
	}


	/**不予受理,撤销,不予预受理,作废,失效原因链接*/
	function showYy(pwzt,yy) {
		yy = encodeURI(yy);
		var url ='/pw/pw_showyy.do?allowrepeat=Y&b_initial&pwzt='+pwzt+'&yy='+ yy ;
		window.showModalDialog(url,window,'dialogWidth:975px;dialogHeight:550px;center:yes;status:0;help:0;edge:sunken;scroll:no');
		return true;
	}
	// 查看不通过原因
	function showYy2(hdjg_dm, hdyjms) {
		var hdjg = "不通过类型：";
		if (hdjg_dm == 1) {
			hdjg += "不符合申请条件";
		} else if (hdjg_dm == 2) {
			hdjg += "提交数据有误";
		} else if (hdjg_dm == 3) {
			hdjg += "提交影像资料有误";
		} else if (hdjg_dm == 4) {
			hdjg += "其他";
		} else if (hdjg_dm == 9) {
			hdjg += "不受理";
		}
		var _hdyjms = "不通过理由：" + hdyjms;
		alert(hdjg + "\n" + _hdyjms);
	}


	/**
	 * 获取受理资料
	 * @param swwsdm
	 * @return
	 */
	function getslzl__backup(basxdm) {
	  	var msg="";
	  	if(basxdm=="01"){msg="资源综合利用收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"a、厦门市资源综合利用主管部门颁发的《资源综合利用认定证书》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"b、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="02"){msg="开发新技术、新产品、新工艺发生的研究开发费用:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"a、自主、委托、合作研究开发项目计划书和研究开发费预算</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"b、自主、委托、合作研究开发专门机构或项目组的编制情况和专业人员名单</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"c、自主、委托、合作研究开发项目当年研究开发费用发生情况归集表及相关项目明细</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"d、企业总经理办公会或董事会关于自主、委托、合作研究开发项目立项的决议文件</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"e、委托、合作研究开发项目的合同或协议</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"f 、研究开发项目的效用情况说明、研究成果报告等资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"g、政府科技部门的鉴定意见书（对企业申报的研发项目有异议时才要求企业提供）</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"h、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="03"){msg="安置残疾人员所支付的工资:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		  						"a、安置的残疾人员名单及其工作岗位，附《中华人民共和国残疾人证》或《中华人民共和国残疾军人证（1至8级）》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		  						"b、纳税人与安置的残疾人签订的劳动合同c、为安置的残疾人缴纳社会保险费的记录</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		  						"d、工资表以及通过银行等金融机构向安置的残疾人实际支付工资凭证</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		  						"e、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="04"){msg="从事农、林、牧、渔业项目的所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、经营业务属于《国民经济行业分类》中的农、林、牧、渔业具体项目说明;<br/>"
	  		+"b、有效期内的远洋渔业企业资格证书复印件（从事远洋捕捞业务的提供）;<br/>"
	  		+"c、县级以上农、林、牧、渔业政府主管部门的确认意见（进行农产品的再种植、养殖是否可以视为农产品的种植、养殖项目享受相应的税收优惠难以确定时提供）;<br/>"
	  		+"d、从事农作物新品种选育的认定证书复印件（从事农作物新品种选育的提供）。<br/>"
	  		+"e、《企业所得税优惠事项备案表》2份;<br/>"
	  		+"项目所得核算情况复印件;";}
	  	if(basxdm=="05"){msg="从事国家重点扶持的公共基础设施项目投资经营的所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、政府有关部门出具的批准从事公共基础设施项目的文件</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、该项目完工验收报告</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"c、该项目当年度收入、成本以及费用分摊情况</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"d、取得第一笔生产经营收入的证明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"e、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="06"){msg="从事符合条件的环境保护、节能节水项目的所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、取得第一笔生产经营收入的证明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、该项目当年度收入、成本以及费用分摊情况</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"c、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="07"){msg="符合条件的技术转让所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、技术性转让所得明细表及开具的技术转让发票</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、技术转让合同（副本）（向境外转让技术的提供技术出口合同（副本））</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"c、经厦门市科技局登记的《技术合同信息》（向境外转让技术的提供省级以上商务部门出具的技术出口合同登记证书或技术出口许可证、技术出口合同数据表）</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"d、技术转让所得归集、分摊、计算的相关资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"e、实际缴纳相关税费的证明资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"f、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="08"){msg="小型微利企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、各月职工工资表、社保缴交记录</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、与劳务派遣公司订立的劳务派遣协议</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
					  			/*+"c、主管税务机关要求提供的其他资料"*/;}
	  	if(basxdm=="09"){msg="国家需要重点扶持的高新技术企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、高新技术企业证书	</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、产品（服务）属于《国家重点支持的高新技术领域》规定的范围的说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"c、认定当年提供加盖厦门市高新技术企业认定管理办公室章的高新技术企业申报数据清单</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"d、企业当年研究开发费用结构明细表；高新技术产品（服务）收入占企业总收入的比例说明；企业具有大学专科以上学历的科技人员占企业当年职工总数的比例说明、研发人员占企业当年职工总数的比例说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"e、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="10"){msg="新设立的高新技术企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"a、高新技术企业证书</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"b、产品（服务）属于《国家重点支持的高新技术领域》规定的范围的说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"c、认定当年提供加盖厦门市高新技术企业认定管理办公室章的高新技术企业申报数据清单</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"d、企业当年研究开发费用结构明细表；高新技术产品（服务）收入占企业总收入的比例说明；企业具有大学专科以上学历的科技人员占企业当年职工总数的比例说明、研发人员占企业当年职工总数的比例说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"e、取得第一笔生产经营收入的证明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"f、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="11"){msg="软件及集成电路企业所得税优惠:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、软件企业应报送厦门市软件行业协会颁发的《软件企业认定证书》及符合软件企业认定条件的证明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、集成电路设计企业应报送信息产业部委托认定机构认定的证书、证明文件</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"c、国家规划布局内重点软件企业应报送国家发改委、工业和信息化部、商务部、国家税务总局联合审核认定的国家规划布局内重点软件企业名单以及经中国软件协会认定的国家规划布局内的重点软件企业证书</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"d、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="12"){msg="文化体制改革中转制的经营性文化事业单位:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、文物商店应提供国家文化行政主管部门许可证明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、从事网络经营应提供经国家行政主管部门许可证明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"c、全国或区域出版物发行连锁经营企业应提供国家行政主管部门许可证明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"d、只读类光盘复制企业、可录类光盘生产企业应提供新闻出版行政主管部门许可</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"e、文化事业转制单位应提供转制证明材料";}
	  	if(basxdm=="13"){msg="";}
	  	if(basxdm=="14"){msg="创业投资企业投资:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、厦门市发展和改革委员会下发的创业投资企业备案通知及年度检查合格通知</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、创业投资企业投资运作情况说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"c、对中小高新技术企业的投资合同或章程、实投资金验资报告、相关长期投资明细账</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"d、投资的中小高新技术企业的基本情况（包括企业职工人数、年销售（营业）额、资产总额等）说明，附省级高新技术企业认定管理机构出具的有效的高新技术企业认定证书等相关材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"e、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="15"){msg="环境保护、节能节水、安全生产专用设备投资抵免:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、设备供货合同及发票</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="16"){msg="以前年度技术改造购置国产设备投资抵免余额处理:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、厦门市经发局出具的《符合国家产业政策的企业技术改造项目确认书》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、有权税务机关准予享受抵免企业所得税的文件</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"c、经主管税务机关审核的《技术改造国产设备投资抵免企业所得税审核表》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"d、《技术改造国产设备投资抵免企业所得税明细表》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"e、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="17"){msg="固定资产加速折旧:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"a、固定资产的功能、预计使用年限短于《实施条例》规定计算折旧的最低年限的理由、证明资料及有关情况的说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"b、被替代的旧固定资产的功能、使用及处置等情况的说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"c、固定资产加速折旧拟采用的方法和折旧额的说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"d、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="18"){msg="缩短软件折旧或摊销年限:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"a、购进软件是否单独计价、功能、预计使用年限短于《实施条例》规定计算折旧摊销的最低年限的理由、证明资料及有关情况的说明，附购货合同、发票</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b、被替代的旧软件的功能、使用及处置等情况的说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c、购进软件拟采用的折旧或摊销年限</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="19"){msg="动漫企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、《动漫企业证书》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、企业职工人数、学历结构以及研发人员占企业职工的比例说明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、开发、生产、创作、经营的动漫产品列表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、自主开发、生产和拥有自主知识产权的动漫产品的情况说明及有关证明材料(包括版权登记证书或专利证书等知识产权证书的复印件)；" +
					  			"5、</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经具有资质的中介机构鉴证的企业财务年度报表(含资产负债表、损益表、现金流量表)等企业经营情况，以及企业年度研究开发费用情况表，并附研究开发活动说明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"6、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="20"){msg="技术先进型服务企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、《技术先进型服务企业证书》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、经审计的上年度企业财务报表</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、企业上年度技术先进服务业务收入以及离岸外包收入表</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="21"){msg="国债利息收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、国债净价交易交割单；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、国债投资明细表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、应收利息科目明细账；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、税务机关要求报送的其他资料。";}
	  	if(basxdm=="22"){msg="地方政府债券利息所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、地方政府债券利息收入证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、税务机关要求报送的其他资料。";}
	  	if(basxdm=="23"){msg="符合条件的居民企业之间的股息、红利等权益性投资收益:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、投资协议；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、连续持有上市股票12个月以上的证据；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、投资收益、应收股利科目明细账；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、税务机关要求报送的其他资料。";}
	  	if(basxdm=="24"){msg="符合条件的非营利组织的收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、非营利组织认定证书；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、非营利组织章程；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、非营利组织收入、支出明细表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、投入人对投入财产无权享有的申明；" +
					  			"5、</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工作人员工资福利开支情况；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"6、财产及孳息的分配使用情况；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"7、税务机关要求报送的其他资料。";}
	  	if(basxdm=="25"){msg="符合非营利组织条件的科技园的收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、国务院科技和教育行政主管部门出具的认定证明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、国家大学科技园资格证明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、非营利组织认定证书；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " +
					  			"4、收入、支出明细表； </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"5、税务机关要求报送的其他资料。";}
	  	if(basxdm=="26"){msg="符合非营利组织条件的孵化器的收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、国务院科技行政主管部门出具的证明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、非营利组织认定证书；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、收入、支出明细表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、税务机关要求报送的其他资料。";}
	  	if(basxdm=="27"){msg="证券投资基金从证券市场中取得的收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、证券投资基金批准文件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、申请免税的证券投资基金各项收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、税务机关要求报送的其他资料。";}
	  	if(basxdm=="28"){msg="投资者从证券投资基金分配中取得的收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、证券投资基金分配方案；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、投资者申请免税的证券投资基金分配收入明细表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、投资份额证明件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、税务机关要求报送的其他资料。";}
	  	if(basxdm=="29"){msg="证券投资基金管理人运用基金买卖股票、债券的差价收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、国家证券管理部门对证券投资基金管理人的批准、注册证明件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、证券投资基金批准文件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、申请免税的收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、税务机关要求报送的其他资料。";}
	  	if(basxdm=="30"){msg="股权分置改革:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、股权分置改革试点单位文件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、非流通股实施股权分置改革方案；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、支付对价协议；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、税务机关要求报送的其他资料。";}
	  	if(basxdm=="31"){msg="广播电视村村通:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、经营有线电视网络证明文件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、有线电视收视费收入和安装费收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、税务机关要求报送的其他资料。";}
	  	if(basxdm=="32"){msg="中国清洁发展机制基金:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、申请免税的各项收入的明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、税务机关要求提供的其他材料。";}
	  	if(basxdm=="33"){msg="金融机构农户小额贷款的利息收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、农户小额贷款合同；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、利息收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、税务机关要求报送的其他资料。";}
	  	if(basxdm=="34"){msg="保险公司为种植业、养殖业提供保险业务取得的保费收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、保险合同；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、保费收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、税务机关要求报送的其他资料。";}
	  	if(basxdm=="35"){msg="铁路建设债券收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、铁路建设债券利息收入证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、税务机关要求报送的其他资料。";}
	  	if(basxdm=="36"){msg="清洁发展机制项目（CDM项目）-1、抵扣应纳税所得额:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、从事氢氟碳化物（HFC）和全氟碳化物（PFC）类CDM项目和氧化亚氮（N2O）类CDM项目证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、温室气体减排量转让收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、按比例上缴的协议及上缴证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、税务机关要求报送的其他资料。";}
	  	if(basxdm=="37"){msg="清洁发展机制项目（CDM项目）-2、三免三减半:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、企业将温室气体减排量转让的HFC和PFC类CDM项目，以及将温室气体减排量转让的N2O类CDM项目的证明材料(加盖公章的复印件)；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、将温室气体减排量转让收入上缴给国家的证明(加盖公章的复印件)；　</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、取得第一笔收入的相关证明资料，如收款证明、发票存根联等(加盖公章的复印件)；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、项目所得核算情况声明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"5、税务机关要求报送的其他资料。";}
	  	if(basxdm=="38"){msg="“公司＋农户”从事农、林、牧、渔业项目的所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、公司与农户签订的委托养殖合同；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、畜禽苗、饲料、兽药及疫苗等的所有权（产权）证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、税务机关要求报送的其他资料。";}
	  	if(basxdm=="39"){msg="符合条件的节能服务公司实施合同能源管理项目:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、能源管理项目合同；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、市经发局、市财政局、市国税局、市地税局联审意见；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、取得第一笔生产经营收入的证明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、税务机关要求报送的其他资料。";}
	  	if(basxdm=="40"){msg="生产和装配伤残人员用品企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、免税申请报告；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、伤残人员专门用品制作师名册、《职业资格证书》（复印件），以及申请前年度制作师《职业资格证书》检查合格证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"3、收入明细资料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"4、税务机关要求报送的其他资料。"; }
	  	if(basxdm=="41"){msg="监狱、劳教企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"1、企业产权证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					  			"2、税务机关要求报送的其他资料。";}
	  	return msg;
	  }






	function getslzl(basxdm) {
	  	var msg="";
	  	if(basxdm=="01"){msg="资源综合利用收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"a、厦门市资源综合利用主管部门颁发的《资源综合利用认定证书》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  							"b、主管税务机关要求提供的其他资料";}
	  	if(basxdm=="02"){msg="开发新技术、新产品、新工艺发生的研究开发费用:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
								"a、自主、委托、合作研究开发项目计划书和研究开发费预算（需说明资金来源）；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
								"b、自主、委托、合作研究开发专门机构或项目组的编制情况和专业人员名单；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
								"c、自主、委托、合作研究开发项目当年研究开发费用发生情况归集表及相关项目明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
								"d、企业总经理办公会或董事会关于自主、委托、合作研究开发项目立项的决议文件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
								"e、委托、合作研究开发项目的合同或协议；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
								"f、研究开发项目的效用情况说明、研究成果报告等资料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
								"g、政府科技部门的鉴定意见书（对企业申报的研发项目有异议时才要求企业提供）</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
								/*+"h、主管税务机关要求提供的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="03"){msg="安置残疾人员所支付的工资:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"a、安置的残疾人员名单及其工作岗位，附《中华人民共和国残疾人证》或《中华人民共和国残疾军人证（1至8级）》；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"b、纳税人与安置的残疾人签订的劳动合同；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"c、为安置的残疾人缴纳社会保险费的记录；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"d、工资表以及通过银行等金融机构向安置的残疾人实际支付工资凭证；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
						  		"e、主管税务机关要求提供的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="04"){msg="从事农、林、牧、渔业项目的所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、经营业务属于《国民经济行业分类》中的农、林、牧、渔业具体项目说明;<br/>"
	  		+"b、有效期内的远洋渔业企业资格证书复印件（从事远洋捕捞业务的提供）;<br/>"
	  		+"c、县级以上农、林、牧、渔业政府主管部门的确认意见（进行农产品的再种植、养殖是否可以视为农产品的种植、养殖项目享受相应的税收优惠难以确定时提供）;<br/>"
	  		+"d、从事农作物新品种选育的认定证书复印件（从事农作物新品种选育的提供）。<br/>"
	  		+"e、《企业所得税优惠事项备案表》2份;<br/>";}
	  	if(basxdm=="05"){msg="从事国家重点扶持的公共基础设施项目投资经营的所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"a、政府有关部门出具的批准从事公共基础设施项目的文件</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"b、该项目完工验收报告</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"c、该项目当年度收入、成本以及费用分摊情况</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"d、取得第一笔生产经营收入的证明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"e、属于优惠期限内受让的项目，应提供项目权属变动资料（合同、协议等）及转让企业已享受优惠情况说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
						  		"f、主管税务机关要求提供的其他资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="06"){msg="从事符合条件的环境保护、节能节水项目的所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"a、政府有关部门出具的批准从事公共基础设施项目的文件</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"b、该项目完工验收报告</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"c、该项目当年度收入、成本以及费用分摊情况；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"d、取得第一笔生产经营收入的证明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						  		"e、属于优惠期限内受让的项目，应提供项目权属变动资料（合同、协议等）及转让企业已享受优惠情况说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
						  		"f、主管税务机关要求提供的其他资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="07"){msg="符合条件的技术转让所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、技术转让合同（副本）（向境外转让技术的提供技术出口合同（副本））</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、经厦门市科技局登记的《技术合同信息》（向境外转让技术的提供省级以上商务部门出具的技术出口合同登记证书或技术出口许可证、技术出口合同数据表）</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、技术转让所得归集、分摊、计算的相关资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、实际缴纳相关税费的证明资料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"e、主管税务机关要求提供的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="08"){msg="小型微利企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"a、各月职工工资表、社保缴交记录；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、与劳务派遣公司订立的劳务派遣协议；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、主管税务机关要求提供的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/ ;}
	  	if(basxdm=="09"){msg="国家需要重点扶持的高新技术企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、高新技术企业证书</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、产品（服务）属于《国家重点支持的高新技术领域》规定的范围的说明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、企业当年研究开发费用结构明细表；高新技术产品（服务）收入占企业总收入的比例说明；企业具有大学专科以上学历的科技人员占企业当年职工总数的比例说明、研发人员占企业当年职工总数的比例说明。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"d、主管税务机关要求提供的其他资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="10"){msg="新设立的高新技术企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、高新技术企业证书</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、产品（服务）属于《国家重点支持的高新技术领域》规定的范围的说明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、企业当年研究开发费用结构明细表；高新技术产品（服务）收入占企业总收入的比例说明；企业具有大学专科以上学历的科技人员占企业当年职工总数的比例说明、研发人员占企业当年职工总数的比例说明。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、取得第一笔生产经营收入的证明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"e、主管税务机关要求提供的其他资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="11"){msg="软件及集成电路企业所得税优惠:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、软件企业应报送厦门市软件行业协会颁发的《软件企业认定证书》及符合软件企业认定条件的证明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、集成电路设计企业应报送信息产业部委托认定机构认定的证书、证明文件</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、国家规划布局内重点软件企业应报送国家发改委、工业和信息化部、商务部、国家税务总局联合审核认定的国家规划布局内重点软件企业名单以及经中国软件协会认定的国家规划布局内的重点软件企业证书。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、签订劳动合同关系且具有大学专科以上学历人员比例说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"f、集成电路制造销售（营业）收入占企业收入总额的比例说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"e、研究开发费用总额占企业销售（营业）收入总额的比例不低于6%的说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"g、主管税务机关要求提供的其他资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="12"){msg="文化体制改革中转制的经营性文化事业单位:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、文物商店应提供国家文化行政主管部门许可证明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、从事网络经营应提供经国家行政主管部门许可证明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、全国或区域出版物发行连锁经营企业应提供国家行政主管部门许可证明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、只读类光盘复制企业、可录类光盘生产企业应提供新闻出版行政主管部门许可</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"e、文化事业转制单位应提供转制证明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" ;}
	  	if(basxdm=="13"){msg="";}
	  	if(basxdm=="14"){msg="创业投资企业投资:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、厦门市发展和改革委员会下发的创业投资企业备案通知及年度检查合格通知；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、创业投资企业投资运作情况说明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、对中小高新技术企业的投资合同或章程、实投资金验资报告、相关长期投资明细账；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、投资的中小高新技术企业的基本情况（包括企业职工人数、年销售（营业）额、资产总额等）说明，附省级高新技术企业认定管理机构出具的有效的高新技术企业认定证书等相关材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"e、投资额抵扣额逐年结转明细表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"f、主管税务机关要求提供的其他资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="15"){msg="环境保护、节能节水、安全生产专用设备投资抵免:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、企业购买专用设备有关文件、会议纪要、采购计划、资金来源说明等</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、购置专用设备合同、融资租赁合同、发票复印件</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、对照《目录》具体项目说明企业所购买专用设备类别、名称、型号、技术指标、参照标准、应用领域、能效标准等，并提供专用设备说明书、检测报告等技术资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、专用设备投入使用的会计核算相关凭证复印件，投入使用的专用设备是否转让或出租的说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"e、企业原有生产工艺流程及专用设备投入使用后的实际效果</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"f、投资额逐年结转抵免明细表</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"g、主管税务机关要求提供的其他资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/ ;}
	  	if(basxdm=="16"){msg="";}
	  	if(basxdm=="17"){msg="固定资产加速折旧:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、固定资产的功能、预计使用年限短于《实施条例》规定计算折旧的最低年限的理由、证明资料及有关情况的说明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、被替代的旧固定资产的功能、使用及处置等情况的说明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、固定资产加速折旧拟采用的方法和折旧额的说明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、实行加速折旧的固定资产的入账凭证复印件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"e、实行加速折旧的固定资产明细表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"f、主管税务机关要求提供的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="18"){msg="缩短软件折旧或摊销年限:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、购进软件是否单独计价、功能、预计使用年限短于《实施条例》规定计算折旧摊销的最低年限的理由、证明资料及有关情况的说明，附购货合同、发票；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、被替代的旧软件的功能、使用及处置等情况的说明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、购进软件拟采用的折旧或摊销年限；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"d、主管税务机关要求提供的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="19"){msg="动漫企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、《动漫企业证书》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、企业职工人数、学历结构以及研发人员占企业职工的比例说明</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、开发、生产、创作、经营的动漫产品列表</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、自主开发、生产和拥有自主知识产权的动漫产品的情况说明及有关证明材料(包括版权登记证书或专利证书等知识产权证书的复印件)</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"e、经具有资质的中介机构鉴证的企业财务年度报表(含资产负债表、损益表、现金流量表)等企业经营情况，以及企业年度研究开发费用情况表，并附研究开发活动说明材料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"f、主管税务机关要求提供的其他资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="20"){msg="技术先进型服务企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、《技术先进型服务企业证书》</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、经审计的上年度企业财务报表</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、企业上年度技术先进服务业务收入以及离岸外包收入表</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"d、主管税务机关要求提供的其他资料</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="21"){msg="国债利息收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、备案申请报告（国债类型、利率、利息收入等专项说明）；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、国债净价交易交割单；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、应收利息（投资收益）科目明细账或按月汇总表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"d、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/ ;}
	  	if(basxdm=="22"){msg="地方政府债券利息所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、地方政府债券利息收入证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"b、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="23"){msg="符合条件的居民企业之间的股息、红利等权益性投资收益:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、备案申请报告；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、投资合同或协议书</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、连续持有上市股票12个月以上的证明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、投资收益、应收股利科目明细账或按月汇总表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"e、被投资企业做出利润分配决定的董事会决议、公告等利润分配相关证明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"f、被投资方《企业法人营业执照》复印件或者属于居民企业的证明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"g、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="24"){msg="符合条件的非营利组织的收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、申请报告；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、事业单位、社会团体、基金会、民办非企业单位的组织章程或宗教活动场所的管理制度；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、非营利组织登记证复印件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、具有资质的中介机构鉴证的审计报告，应包括以下内容：</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a）、申请前年度的财务报表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b）、申请前年度独立核算的资金来源情况、使用情况及说明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c）、开展公益活动和非营利活动的明细情况；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d）、工作人员工资福利开支情况及缴纳社保情况，并附工资手册和社保缴费单据，申请前年度所在地政府公布的人均工资标准。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"e、登记管理机关出具的事业单位、社会团体、基金会、民办非企业单位申请前年度的年度检查结论；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"f、财政、税务部门要求提供的其他材料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";}
	  	if(basxdm=="25"){msg="";}
	  	if(basxdm=="26"){msg="";}
	  	if(basxdm=="27"){msg="证券投资基金从证券市场中取得的收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、证券投资基金批准文件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、申请免税的证券投资基金各项收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"c、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="28"){msg="投资者从证券投资基金分配中取得的收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、证券投资基金分配方案；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、投资者申请免税的证券投资基金分配收入明细表；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、投资份额证明件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"d、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="29"){msg="证券投资基金管理人运用基金买卖股票、债券的差价收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、国家证券管理部门对证券投资基金管理人的批准、注册证明件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、证券投资基金批准文件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、申请免税的收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"d、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="30"){msg="股权分置改革:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、股权分置改革试点单位文件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、非流通股实施股权分置改革方案；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、支付对价协议；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"d、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	if(basxdm=="31"){msg="";}
	  	if(basxdm=="32"){msg="中国清洁发展机制基金:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、申请免税的各项收入的明细及记账凭证、原始凭证；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、温室气体减排量转让收入上缴给国家部分的复印件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"c、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="33"){msg="金融机构农户小额贷款的利息收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、农户小额贷款合同；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、利息收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"c、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="34"){msg="保险公司为种植业、养殖业提供保险业务取得的保费收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、保险合同；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、保费收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"c、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="35"){msg="铁路建设债券收入:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、铁路建设债券利息收入证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"b、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="36"){msg="清洁发展机制项目（CDM项目）-1、抵扣应纳税所得额:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、从事氢氟碳化物（HFC）和全氟碳化物（PFC）类CDM项目和氧化亚氮（N2O）类CDM项目证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、温室气体减排量转让收入明细；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、按比例上缴的协议及上缴证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"d、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="37"){msg="清洁发展机制项目（CDM项目）-2、三免三减半:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、企业将温室气体减排量转让的HFC和PFC类CDM项目，以及将温室气体减排量转让的N2O类CDM项目的证明材料(加盖公章的复印件)；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、将温室气体减排量转让收入上缴给国家的证明(加盖公章的复印件)；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、取得第一笔收入的相关证明资料，如收款证明、发票存根联等(加盖公章的复印件)；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"d、项目所得核算情况声明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"e、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/ ;}
	  	if(basxdm=="38"){msg="“公司＋农户”从事农、林、牧、渔业项目的所得:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、公司与农户签订的委托养殖合同；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、畜禽苗、饲料、兽药及疫苗等的所有权（产权）证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"c、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */;}
	  	if(basxdm=="39"){msg="符合条件的节能服务公司实施合同能源管理项目:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、能源管理项目合同；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、市经发局、市财政局、市国税局、市地税局联审意见；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、取得第一笔生产经营收入的证明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"d、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/ ;}
	  	if(basxdm=="40"){msg="生产和装配伤残人员用品企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、符合《中国伤残人员专门用品目录》证明原件及复印件；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、伤残人员专门用品制作师名册、《职业资格证书》（复印件），以及申请前年度制作师《职业资格证书》检查合格证明；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"c、收入明细资料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/* +
	  		"d、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" */; }
	  	if(basxdm=="41"){msg="监狱、劳教企业:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"a、监狱部门出具的企业全部产权属于监狱系统的证明材料；</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
	  		"b、监狱企业国有资产产权登记年度检查表或国有资产变动产权登记表</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" /*+
	  		"c、税务机关要求报送的其他资料。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"*/;}
	  	return msg;
	  }


	//取得url中指定参数的值
	function gethRequestParmValue(url,paras) {
	    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
	    var paraObj = {}
	    for (i = 0; j = paraString[i]; i++) {
	        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
	    }
	    var returnValue = paraObj[paras.toLowerCase()];
	    if (typeof (returnValue) == "undefined") {
	        return "";
	    } else {
	        return returnValue;
	    }
	}
       //取得传时间的前后几天
	function getDateStr(str,addDayCount){
		str = str.replace(/-/g,"/");
		var dd = new Date(str );
		dd.setDate(dd.getDate()+addDayCount);//获取AddDayCount天后的日期
		var y = dd.getYear();
		var m = dd.getMonth()+1;//获取当前月份的日期
		var d = dd.getDate();
		return y+"-"+m+"-"+d;
	}

//验证是否为身份证号码
	function isIdCardNo (num) {

		  var len = num.length, re;
		  if (len == 15){
		    re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})[A-Z0-9]$/);

		  }else if (len == 18){
		    re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})[A-Z0-9]$/);
		  }else {
		    alert("输入的身份证号码位数不对！");
		    return false;
		  }
		  var a = num.match(re);
		   if(a==null){
		     alert("输入的身份证号码不正确，请检查！")
			 return false;
		   }
		  if (a != null) {
		    if (len==15) {
		      var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]);
		      var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5];
		    } else {
		      var D = new Date(a[3]+"/"+a[4]+"/"+a[5]);
		      var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5];
		    }
		    if (!B) {
		    	alert("输入的身份证号 "+ a[0] +" 里出生日期不对！");
		      return false;
		    }
		  }
		  return true;
	 }

	String.prototype.trim = function() {
		  return this.replace(/(^\s*)|(\s*$)/g, "");
		}

	function uploadSx(ywsx_bm){
		//var ywsx_bm = '107408';
		var resLsh = "";
		var args = new Array(ywsx_bm,resLsh);
	    var url="/sx/uploadSxFile/uploadSxFile.html";
	    var opensWin = window.showModalDialog(url,args,'dialogWidth:980px;dialogHeight:600px;center:yes;status:0;help:0;edge:sunken;scroll:no');
	    resLsh = args[1];
	    return resLsh;
	 }

	//日期差值
	//参数mode  y: 年, m: 月, w: 星期, d: 日, 默认是日
	//alert((new Date()).dayDiff((new Date(2002,0,1))))
	Date.prototype.dayDiff=function (cDate,mode){
	  try{
	    cDate.getFullYear();
	  }catch(e){
	    return (0);
	  }
	  var base=60*60*24*1000;
	  var result=Math.abs(this-cDate);
	  switch(mode){
	    case "y":
	      result/=base*365;
	      break;
	    case "m":
	      result/=base*365/12;
	      break;
	    case "w":
	      result/=base*7;
	      break;
	    case "d":
	      result/=base;
	      break;
	    default:
	      result/=base;
	      break;
	  }
	  return (Math.floor(result));
	}


	// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
	function validateCardNum(card) {
		if(card.value.length != 18) {
			alert("身份证输入不合法");
			card.value = "";
			return  false;
		}

		return true;
	}

	