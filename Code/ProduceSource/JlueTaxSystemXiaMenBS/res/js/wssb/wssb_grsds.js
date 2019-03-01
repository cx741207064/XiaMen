/***************************************
 *            厦门地税网站改造               
 * 网上申报个人所得税申报JavaScript函数*
 *                                   
 **************************************/

/**
 * 计算个人所得税的费用额，计算规则是：
	a)	如果所得额为0，则费用额为0；
	b)	如果税目是"个人所得税-工资,薪金应纳所得（0100）"且国籍是中国（156），则费用额＝1300；如果税目是"个人所得税-工资,薪金应

纳所得（0100）"且国籍不是中国，则费用额＝4000；
	c)	如果税目是"个人所得税-劳务报酬应纳所得（0400）"，如果所得额小于等于4000，则费用额＝800；如果所得额大于4000，则费用额＝

所得额×0.2；
	d)	如果税目是"个人所得税-个体经营应纳税所得（0200）"、"个人所得税-个人承包应纳所得（0300）"、"个人所得税-股息,利息,红利应

纳所得(每次)（0700）"、"个人所得税-财产转让应纳所得(每次)（0900）"、"个人所得税-偶然所得(每次)（1000）"、"个人所得税-其它所得(每次)

（1100）"，则费用额＝0；
	e)	如果种目是"个人所得税-稿酬应纳所得(每次)（0500）"、"个人所得税-特许权使用费应纳所得(每次)（0600）"、"个人所得税-财产租

赁应纳所得(每月)（0800）"，如果所得额小于等于4000，则费用额＝800；如果所得额大于4000，则费用额＝所得额×0.2；

 * 参数：
 *   sm： 税目代码
 *   sde：应纳税所得额
 *   gj：国籍
 *返回值：
 *   费用额
 */
function getFye(sm, sde, gj) {
  if(!isNumeric(sde)) sde = 0; sde = parseFloat(sde);
  var fye = 0.0;
  if(gj==null || gj=="") gj = 156;

  var sm1 = new Array('060100');
  var sm2 = new Array('060400', '060500', '060600', '060800');
  var sm3 = new Array('060200', '060300', '060700', '060900', '061000', '061100');

  if(gj == "156") {
	if(sm1.indexOf(sm) > -1) fye = 1500.0;
	else if(sm2.indexOf(sm) > -1) {
	  if(sde <= 4000.0) fye = 800;
	  else fye = sde * 0.2;
	}
  } else {
	if(sm1.indexOf(sm) > -1) fye = 4000.0;
	else if(sm2.indexOf(sm) > -1) {
	  if(sde <= 4000.0) fye = 800;
	  else fye = sde * 0.2;
	}
  }
  fye = toFixedNum(fye);
  return fye;
}

/**
 * 计算个人所得税的应纳税所得额，计算规则是：
a)	含税标志＝"1"（含税）：
	1.	应纳税所得额＝所得额（收入额）－费用扣除额；
			级距按应纳税所得额套用
b)	含税标志＝"0"（不含税）：
	i.	税目是"个人所得税-工资,薪金应纳所得（0100）"、"个人所得税-个体经营应纳税所得（0200）"、"个人所得税-个人承包应纳所得

（0300）"：
		1.	根据所得额从级距表（m_jj）中取出"不含税级距始<所得额－费用扣除额<=不含税级距止"的对应的税率和速算扣除数；
		2.	应纳税所得额=（不含税所得－费用扣除额－速算扣除数）/（1－税率）；
	ii.	税目是"个人所得税-稿酬应纳所得(每次)（0500）"、"个人所得税-特许权使用费应纳所得(每次)（0600）"、"个人所得税-财产租赁应

纳所得(每月)（0800）"：
		1.	不含税所得额<=3360元：
				应纳税所得额＝（不含税收入额－800）/（1－税率）；
		2.	不含税所得额>3360元：
				应纳税所得额＝[（不含税收入额×（1－20%）]/[1－税率×（1－20%）]；
	iii.	税目是"个人所得税-股息,利息,红利应纳所得(每次)（0700）"、"个人所得税-财产转让应纳所得(每次)（0900）"、"个人所得税-偶然

所得(每次)（1000）"、"个人所得税-其它所得(每次)（1100）"：
		1.	应纳税所得额＝收入额 /（1－税率）；
	iv.	税目是"个人所得税-劳务报酬应纳所得（0400）"：
		1.	不含税所得额<=3360元：
			a)	根据所得额从级距表（m_jj）中取出"含税级距始<不含税所得额<=含税级距止"的对应的税率和速算扣除数；
			b)	应纳税所得额＝（不含税收入额－800）/（1－税率）；
		2.	不含税所得额>3360元：
			a)	根据所得额从级距表（m_jj）中取出"不含税级距始<不含税所得额<=不含税级距止"的对应的税率和速算扣除数；
			b)	应纳税所得额＝[（不含税收入额－速算扣除数）×（1－20%）] / [1－税率×（1－20%）]；

说明：
    上面规则中所得的级距表的数据已经保存在名为m_jj的JavaScript全局二维数组中，数组结构是：
	jj_data[i][0]：税种代码
	jj_data[i][1]：税目代码
	jj_data[i][2]：含税级距始
	jj_data[i][3]：含税级距止
	jj_data[i][4]：不含税级距始
	jj_data[i][5]：不含税级距止
	jj_data[i][6]：速算扣除数
	jj_data[i][7]：税率
 * 参数：
 *   sm： 税目代码
 *   sde：所得额（收入额）
 *   fye：费用额，对于不含税的，赋0值
 *   sl： 税率
 *返回值：
 *   个人所得税应纳税所得额
 */
function getYnssde(sm, sde, fye, hs_tag, sl) {
	if(!isNumeric(sde)) sde = 0; sde = parseFloat(sde);
	if(!isNumeric(fye)) fye = 0; fye = parseFloat(fye);
	if(!isNumeric(sl)) sl = 0; sl = parseFloat(sl);

    //返回值数组
	var ret = new Array();
	ret['sskcs'] = 0;
	ret['sl'] = sl;
	ret['ynssde'] = sde;

    var ynssde = sde;
    var sskcs1 = 0;
    var sl1 = 0;
	var sskcse = 0;
	var sle = 0;

	var grsdsSZ_DM = "06";

    if(hs_tag=="1")  {
	  ynssde = toFixedNum((sde - fye), 2)
	  if(ynssde > 999999999) ynssde = 999999999;
	  for( var i=0; i<jj_data.length; i++) {
		if(jj_data[i][1]==sm && parseFloat(jj_data[i][2])<ynssde && parseFloat(jj_data[i][3])>=ynssde) {
//		  debug("含税情况  sm: "+sm+"  sl: "+jj_data[i][7]+ "  sskcs: "+jj_data[i][6]+"<br>");
		  sskcs1 = jj_data[i][6];
		  sl1 = jj_data[i][7];
		  ret['sskcs'] = sskcs1;
		  ret['sl'] = sl1;
		  break;
		}
	  }
    }
    else {
        switch(sm)  {
		  case '060100':        //个人所得税-工资薪金应纳所得
			  var sde = sde - fye;
			  if(sde > 999999999) sde = 999999999;
			  for( var i=0; i<jj_data.length; i++)  {
				if(jj_data[i][1]==sm && parseFloat(jj_data[i][4])<sde && parseFloat(jj_data[i][5])>=sde)  {
//				  debug("不含税情况,计算应纳税所得额时  sm: "+sm+"  sl: "+jj_data[i][7]+ "  sskcs: "+jj_data[i][6]+"<br>");
				  sskcs1 = jj_data[i][6];
				  sl1 = parseFloat(jj_data[i][7]);
				  break;
				}
			  }
			  ynssde =  ((sde - sskcs1)/(1 - sl1));
			  if(ynssde > 999999999) ynssde = 999999999;
			  for( var i=0; i<jj_data.length; i++)  {
				if(jj_data[i][1]==sm && parseFloat(jj_data[i][2])<ynssde && parseFloat(jj_data[i][3])>=ynssde)  {
//				  debug("不含税情况，取税率和速算扣除数  sm: "+sm+"  sl: "+jj_data[i][7]+ "  sskcs: "+jj_data[i][6]+"<br>");
				  sskcse = parseFloat(jj_data[i][6]);
				  sle = parseFloat(jj_data[i][7]);
				  ret['sskcs'] = sskcse;
				  ret['sl'] = sle;
				  break;
				}
			  }
			  break;
		  case '060200':        //个人所得税-个体经营应纳税所得
		  case '060300':        //个人所得税-个人承包应纳所得
			  if(sde > 999999999) sde = 999999999;
			  for( var i=0; i<jj_data.length; i++)   {
				if(jj_data[i][1]==sm && parseFloat(jj_data[i][4])<sde && parseFloat(jj_data[i][5])>=sde)  {
//				  debugln("不含税情况  sm: "+sm+"  sl: "+jj_data[i][7]+ "  sskcs: "+jj_data[i][6]+"<br>");
				  sskcs1 = jj_data[i][6];
				  sl1 = jj_data[i][7];
				  ret['sskcs'] = sskcs1;
				  ret['sl'] = sl1;
				  break;
				}
			  }
			  ynssde = (sde - fye - sskcs1)/(1 - sl1) ;
			  break;
		  case '060400':        //个人所得税-劳务报酬应纳所得
			  if(sde<=3360) {
			    if(sde>999999999) sde = 999999999;
				for( var i=0; i<jj_data.length; i++)  {
				  if(jj_data[i][1]==sm && parseFloat(jj_data[i][2])<sde && parseFloat(jj_data[i][3])>=sde)  {
					sskcs1 = jj_data[i][6];
					sl1 = jj_data[i][7];
					break;
				  }
				}
//				debug("不含税情况,计算应纳税所得额时  sm: "+sm+"  sl: "+sl1+ "  sskcs: "+sskcs1+"<br>");
				ynssde =  ((sde - 800) / (1 - sl1));
			  }
			  else {
				  var sde1 = sde * 0.8;
				  if(sde1 > 999999999) sde1 = 999999999;
				  for( var i=0; i<jj_data.length; i++) {
					if(jj_data[i][1]==sm && parseFloat(jj_data[i][4])<sde1 && parseFloat(jj_data[i][5])>=sde1)  {
					  sskcs1 = jj_data[i][6];
					  sl1 = jj_data[i][7];
					  break;
					}
				  }
//					debug("不含税情况,计算应纳税所得额时  i: "+i+"  sm: "+sm+"  sde1: "+sde1+"  sl: "+sl1+ "sskcs: "+sskcs1+"<br>");
				  ynssde = ((sde - sskcs1) * (1 - 0.2) / (1 - sl1 * (1 - 0.2)));
			  }
			  //取实际适用的税率和速算扣除数
			  if (ynssde > 999999999) ynssde = 999999999;
			  for( var i=0; i<jj_data.length; i++)	{
				if(jj_data[i][1]==sm && parseFloat(jj_data[i][2])<ynssde && parseFloat(jj_data[i][3])>=ynssde) 	{
				  sskcse= jj_data[i][6];
				  sle = jj_data[i][7];
				  ret['sskcs'] = sskcse;
				  ret['sl'] = sle;
				  break;
				}
			  }
//				debug("不含税情况,取税率和速算扣除数  sm: "+sm+"  sl: "+sle+ "  sskcs: "+sskcse+"<br>");
			  break;
		  case '060500':        //个人所得税-稿酬应纳所得(每次)
		  case '060600':        //个人所得税-特许权使用费应纳所得(每次)
			  if(sde <= 3360)
				  ynssde = ((sde - 800) / (1 - sl));
			  else
				  ynssde =  (sde * (1 - 0.2)) / (1 - sl * (1 - 0.2));
			  break;
		  case '0800':        //个人所得税-财产租赁应纳所得(每月)
			  if(sde <= 3360)
				  ynssde = ((sde - 800) / (1 - sl));
			  else
				  ynssde = (sde * (1 - 0.2)) / (1 - sl * (1 - 0.2));
			  break;
		  case '060700':        //个人所得税-股息 利息 红利应纳所得(每次)
		  case '061000':        //个人所得税-偶然所得(每次)
		  case '061100':        //个人所得税-其它所得(每次)
			  ynssde = (sde / (1 - sl));
			  break;
		  case '060900':        //个人所得税-财产转让应纳所得(每次)
			  ynssde = ((sde - fye) / (1 - sl));
			  break;
        }
    }
	if (ynssde<0) ynssde = 0;
	ynssde = toFixedNum(ynssde, 2);
	ret['ynssde'] = ynssde;
    return ret;
}

