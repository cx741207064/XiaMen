/***************************************
 *            厦门地税网站改造
 * 网上申报企业所得税申报JavaScript函数*
 *
 **************************************/

//企业所得税月份申报勾稽关系计算
function autoWSSB_QY_YF(thisform){
  var total01= Math.floor(parseFloat(null2zero(document.all('voWZ_ZS_SBB.string(YYE)').value))
      *parseFloat(null2zero(document.all('voWZ_ZS_SBB.string(SL)').value))* 100 + 0.5 ) / 100;
  document.all('voWZ_ZS_SBB.string(YNSE)').value=negative2zero(Math.floor((total01)*100+0.5)/100);
  var total02=parseFloat(null2zero(document.all('voWZ_ZS_SBB.string(YNSE)').value))
      -parseFloat(null2zero(document.all('voWZ_ZS_SBB.string(DKE)').value));
  document.all('voWZ_ZS_SBB.string(SJYZE)').value=negative2zero(Math.floor((total02)*100+0.5)/100);
}

//企业所得税月份申报输入校验
function validateWSSB_QY_YFAdd(thisform){
	if(document.all('voWZ_ZS_SBB.string(SZ_DM)').value==""){
		alert('请选择税种和税目！');
		return false;
	}
	if(document.all('voWZ_ZS_SBB.string(SM_DM)').value==""){
		alert('请选择税目！');
		return false;
	}
	if(validateWSSB_QY_YFForm(thisform)){
		thisform.action="/declare/qysdssb_yf_02.do";
//		thisform.submit();
		return true;
	}
  return false;
}


//企业所得税季度申报表勾稽关系计算
function autoWSSB_QY_JD(thisform){
	var LJ_LRZEObj = $('voWZ_ZS_B_QYSDSJD.string(LJ_LRZE)');
	var total01=parseFloat(null2zero(LJ_LRZEObj.value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_NSTZZJE)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_NSTZJSE)').value));

	document.all('voWZ_ZS_B_QYSDSJD.string(LJ_YNSSDE)').value=Math.floor((total01)*100+0.5)/100;
	var total02= Math.floor(parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_YNSSDE)').value))
			*parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_SYSL)').value)/100)* 100 + 0.5 ) / 100;
	document.all('voWZ_ZS_B_QYSDSJD.string(LJ_YNSDSE)').value=Math.floor((total02)*100+0.5)/100;
	var total03=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_YNSDSE)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_JMSDSE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_LYQYLRBSE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_GXSRBSE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_JWSYBSE)').value));
	document.all('voWZ_ZS_B_QYSDSJD.string(LJ_YJRKSDSE)').value=Math.floor((total03)*100+0.5)/100;
	var total04=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_YJRKSDSE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_QMWJSDSE)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSJD.string(LJ_SJYJNSDSE)').value));
	document.all('voWZ_ZS_B_QYSDSJD.string(LJ_QMYBTSDSE)').value=Math.floor((total04)*100+0.5)/100;
	document.all('voWZ_ZS_B_QYSDSJD.string(LJ_SJJSYZE)').value=negative2zero(Math.floor((total04)*100+0.5)/100);
}

//企业所得税年度申报表勾稽关系计算
function autoWSSB_QY_ND(thisform){
	var XSYYSRObj = $('voWZ_ZS_B_QYSDSND.string(XSYYSR)');
	var total01=parseFloat(null2zero(XSYYSRObj.value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(XSTH)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(ZKYZR)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(XXYYSLJE)').value=Math.floor((null2zero(total01))*100+0.5)/100;
	var total02=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(XXYYSLJE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(TXQSYFSY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(TZSY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(TZZRJSY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(ZRJSY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(HRJSY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(ZCPYJSY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(BTSR)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(QTSR)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(SRZEHJ)').value=Math.floor((null2zero(total02))*100+0.5)/100;
	var total03=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(GZXJ)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(FLFJF)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(GDZCZJ)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(WXZCDYZCTX)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YJKFFY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(LXJZC)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(HRJSS)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(ZJJZC)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(SJZJGGLF)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YWZDF)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(SJ)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(FZSS)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(ZTFZZBJ)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(ZCPKFSBFJSS)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(TZZRJSS)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(SFBXJK)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(LDBFF)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(GGZC)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(JZZC)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(SJZXSSF)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(CLF)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(FYF)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YSZXDXSFY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(KCZYBCF)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(QTKCFYXM)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(QJFYHJ)').value=Math.floor((null2zero(total03))*100+0.5)/100 ;
	var total04=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(SRZEHJ)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(XSYYCB)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(XSYYSJJFJ)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(QJFYHJ)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(NSTZQSD)').value=Math.floor((null2zero(total04))*100+0.5)/100;
	var total05=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(GZXJNSTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(FLFJFTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(LXZCNSTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YWZDFNSTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(GGZCNSTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(ZZZCNSTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(JZZCNSTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(ZJTXZCNSTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(FZSSNSTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(FZZBNSTZE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(FKFJZNJ)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(CFDJZB)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(DQTZDJZB)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(CQTZJZZB)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(QTNSTZZJXM)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(JNSTZZJE)').value=Math.floor((null2zero(total05))*100+0.5)/100;
	var total06=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YJKFFYFJKCE)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(QTNSTZJSXM)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(JNSTZJSE)').value=Math.floor((null2zero(total06))*100+0.5)/100;
	var total07=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(NSTZQSD)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(JNSTZZJE)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(JNSTZJSE)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(NSTZHSD)').value=Math.floor((null2zero(total07))*100+0.5)/100;
	var total08=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(GZLXSD)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(MSBTSR)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(MSJJSFFJ)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(MYBSTZSY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(MSJSZRSY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(MSZLSFSY)').value))
			+parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(QTMSSD)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(JMSSD)').value=Math.floor((null2zero(total08))*100+0.5)/100;
	var total09=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(NSTZHSD)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(NBYQNDKS)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(JMSSD)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(YNSSDE)').value=Math.floor((null2zero(total09))*100+0.5)/100;
	var total11= Math.floor(parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YNSSDE)').value))
			*parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(SYSL)').value)/100)* 100 + 0.5 ) / 100;
	document.all('voWZ_ZS_B_QYSDSND.string(YJSDSE)').value=negative2zero(Math.floor((null2zero(total11))*100+0.5)/100);
	var total10=parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YJSDSE)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(QCDJSDSE)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YYJSDSE)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YBSJNTZSYDMSE)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(YBSJWTZSYDMSE)').value))
			-parseFloat(null2zero(document.all('voWZ_ZS_B_QYSDSND.string(JPZJMSDSE)').value));
	document.all('voWZ_ZS_B_QYSDSND.string(YBTDSDSE)').value=Math.floor((null2zero(total10))*100+0.5)/100;
	document.all('voWZ_ZS_B_QYSDSND.string(SJJSYZE)').value=negative2zero(Math.floor((null2zero(total10))*100+0.5)/100);
}


/**
 * 逾期申报检测
 */
function checkYqsb() {
  var yqsbChecker = new YsqbChecker();
  yqsbChecker.SZ_DM = szObj.value;
  yqsbChecker.SM_DM = smObj.value;
  yqsbChecker.SKSSQS = ssqsObj.value;
  yqsbChecker.SKSSQZ = ssqzObj.value;
  if(typeof(sblxObj)!="undefined") {
    yqsbChecker.SBLB_DM = sblxObj.value;
//    alert("yqsbChecker.SBLB_DM: "+yqsbChecker.SBLB_DM);
  }
  //yqsbChecker.SWJG_QJ_DM = szObj.value;
  //yqsbChecker.SBFS_DM = szObj.value;
  //yqsbChecker.GSMXBBLX_DM = szObj.value;
  try{
    if(typeof(sfbssbObj)!="undefined" && sfbssbObj){
      yqsbChecker.SF_BSSB = sfbssbObj.value;
    }
  }catch(e) {
    alert(e.description);
  }
  var ret = yqsbChecker.checkIfYqsb();
  yqsbChecker = null;
  return ret;
}

//企业所得税季度申报表输入校验
function validateWSSB_QY_JDForm() {
	if(getObj("voWZ_ZS_B_QYSDSJD.string(SZ_DM)").value==" "){
		alert('请选择税种！');
		getObj("voWZ_ZS_B_QYSDSJD.string(SZ_DM)").focus()
		return false;
	}
	if(getObj("voWZ_ZS_B_QYSDSJD.string(SM_DM)").value==""){
		alert('请选择税目！');
		getObj("voWZ_ZS_B_QYSDSJD.string(SM_DM)").focus()
		return false;
	}
  var a0;
  var skssqs = getObj("voWZ_ZS_B_QYSDSJD.string(SKSSQ_YEAR)");
  if (isEmpty(skssqs.value)) {
    alert("税（费）所属期所在年份 不能为空");
    skssqs.focus();
    return false;
  }

  var skssqz = getObj("voWZ_ZS_B_QYSDSJD.string(SKSSQ_QUARTER)");
  if (isEmpty(skssqz.value)) {
    alert("税（费）所属期所在季度 不能为空");
    skssqz.focus();
    return false;
  } else {
    if (parseInt(skssqz.value) > 4 || parseInt(skssqz.value) < 1){
      alert("税（费）所属期所在季度 在1-4间");
      skssqz.focus();
      return false;
    }
  }
  var lj_xsyysr = getObj("voWZ_ZS_B_QYSDSJD.string(LJ_XSYYSR)");
  if (isEmpty(lj_xsyysr.value)){
    alert("销售（营业）净额 不能为空");
    lj_xsyysr.focus();
    return false;
  }

  var lj_lrze = getObj("voWZ_ZS_B_QYSDSJD.string(LJ_LRZE)");
  if (isEmpty(lj_lrze.value)){
    alert("利润总额 不能为空");
    lj_lrze.focus();
    return false;
  }

/**
   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(SKSSQS)", "税（费）所属期所在年份 不能为空.", new Function ("varName", "this.min='1990'; this.max='2008';  return this[varName];"));
   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(SKSSQZ)", "税（费）所属期所在季度 不能为空.", new Function ("varName", "this.min='1'; this.max='4';  return this[varName];"));
   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(LJ_XSYYSR)", "一、销售（营业）净额 不能为空.", new Function ("varName", " return this[varName];"));
   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(LJ_LRZE)", "二、利润总额 不能为空.", new Function ("varName", " return this[varName];"));

   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(SKSSQS)", "税（费）所属期所在年份 必须是数字", new Function ("varName", "this.min='1990'; this.max='2008';  return this[varName];"));
   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(SKSSQZ)", "税（费）所属期所在季度 必须是数字", new Function ("varName", "this.min='1'; this.max='4';  return this[varName];"));

   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(LJ_XSYYSR)", "一、销售（营业）净额 必须是数字", new Function ("varName", " return this[varName];"));
   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(LJ_LRZE)", "二、利润总额 必须是数字", new Function ("varName", " return this[varName];"));

   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(SKSSQS)", "税（费）所属期所在年份 不在范围 1990 到 2008 内.", new Function ("varName", "this.min='1990'; this.max='2008';  return this[varName];"));
   a0 = new Array("voWZ_ZS_B_QYSDSJD.string(SKSSQZ)", "税（费）所属期所在季度 不在范围 1 到 4 内.", new Function ("varName", "this.min='1'; this.max='4';  return this[varName];"));
**/
//  return true;

  /**逾期申报检测*/
  var ret = checkYqsb();
  return !ret;            //如果返回是true，表示已经逾期申报，不允许提交; 如果返回false，表示未逾期，则可以正常提交
}

function validateWSSB_QY_NDForm() {
	var SMObj = $('voWZ_ZS_B_QYSDSND.string(SM_DM)');
	//alert("a"+document.all('voWZ_ZS_B_QYSDSND.string(SM_DM)').value+"b");
	if(document.all('voWZ_ZS_B_QYSDSND.string(SZ_DM)').value==""){
		alert('请选择税种！');
		document.all('voWZ_ZS_B_QYSDSND.string(SZ_DM)').focus()
		return false;
	}
	if(SMObj.value==""){
		alert('请选择税目！');
		SMObj.focus()
		return false;
	}
  var skssqs = getObj("voWZ_ZS_B_QYSDSND.string(SKSSQ_YEAR)");
  if (isEmpty(skssqs.value)) {
    alert("税（费）所属期年份 不能为空");
    skssqs.focus();
    return false;
  }

  var xsyysr = getObj("voWZ_ZS_B_QYSDSND.string(XSYYSR)");
  if (isEmpty(xsyysr.value)){
    alert("销售（营业）收入（请填附表一） 不能为空");
    xsyysr.focus();
    return false;
  }
/**
	 var a1;
   a1 = new Array("voWZ_ZS_B_QYSDSND.string(SKSSQS)", "税（费）所属期年份 不能为空.", new Function ("varName", "this.min='1990'; this.max='2008';  return this[varName];"));
   a1 = new Array("voWZ_ZS_B_QYSDSND.string(XSYYSR)", "销售（营业）收入（请填附表一） 不能为空.", new Function ("varName", " return this[varName];"));
   a1 = new Array("voWZ_ZS_B_QYSDSND.string(SKSSQS)", "税（费）所属期年份 必须是数字", new Function ("varName", "this.min='1990'; this.max='2008';  return this[varName];"));
   a1 = new Array("voWZ_ZS_B_QYSDSND.string(XSYYSR)", "销售（营业）收入（请填附表一） 必须是数字", new Function ("varName", " return this[varName];"));
   a1 = new Array("voWZ_ZS_B_QYSDSND.string(SKSSQS)", "税（费）所属期年份 不在范围 1990 到 2008 内.", new Function ("varName", "this.min='1990'; this.max='2008';  return this[varName];"));
**/
//	 return true;

  /**逾期申报检测*/
  var ret = checkYqsb();
  return !ret;            //如果返回是true，表示已经逾期申报，不允许提交; 如果返回false，表示未逾期，则可以正常提交
}

function showerror(){
	alert("您单位是涉外企业，涉外企业所得税不属于地税征管范围！");
//	history.back();
  location.href="./nssb_index.do?b_query=true";
}

function showerror2(){
	alert("您单位企业所得税属国税管征，不属于地税征管范围！");
//	history.back();
  location.href="./nssb_index.do?b_query=true";
}

function null2zero(inputstr){
	if(inputstr=="")
		return "0";
	else
		return inputstr;
}
function negative2zero(inputstr){
	if(parseFloat(inputstr)<0)
		return "0";
	else
		return inputstr;
}
