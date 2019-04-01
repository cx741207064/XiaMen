/***************************************
 *            厦门地税网站改造               
 * 网上申报纳税申报JavaScript函数*
 *                                   
 **************************************/
 //建安申报营业税
function jaSbYys(sf_jah, jasbfs_dm, smObj, yye) {
  //建安户
  if (sf_jah == "Y") {
	  var smVal = smObj.value;
	  var jasm = new Array('020201', '020202', '020203', '020204', '020290'); //建安营业税相关税目

    //混合申报
    if (jasbfs_dm == "30") {
		  if (jasm.indexOf(smVal) > -1) {
			  //if (parseFloat(yyeVal) >= 100000) {
        if (parseFloat(yye) >= 300000) {   //2007-04-12按业务需求改成300000元作为是否进行项目登记的起始点
				 var bz = confirm("建安项目金额在30万元以上的按规定应进行项目登记并按项目申报，请确认您是否要继续此次申报！");
				 if (!bz) {
					 return true;
				 }
			  }
		  }
	  }
    //项目申报
	  else if (jasbfs_dm == "10"){
		  if (jasm.indexOf(smVal) > -1) {
			  alert("您是建安户且申报方式是项目申报，请通过建安项目申报营业税");
			  return true;
		  }
	  }

  }

  return false;
}