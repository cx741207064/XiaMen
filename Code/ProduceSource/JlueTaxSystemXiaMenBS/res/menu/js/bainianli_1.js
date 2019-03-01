/**
 * 
 * 描述：js实现的map方法
 * 
 * @returns {Map}
 */
function Map() {
	var struct = function(key, value) {
		this.key = key;
		this.value = value;
	};
	// 添加map键值对
	var put = function(key, value) {
		for ( var i = 0; i < this.arr.length; i++) {
			if (this.arr[i].key === key) {
				this.arr[i].value = value;
				return;
			}
		}
		;
		this.arr[this.arr.length] = new struct(key, value);
	};
	// 根据key获取value
	var get = function(key) {
		for ( var i = 0; i < this.arr.length; i++) {
			if (this.arr[i].key === key) {
				return this.arr[i].value;
			}
		}
		return null;
	};
	// 根据key删除
	var remove = function(key) {
		var v;
		for ( var i = 0; i < this.arr.length; i++) {
			v = this.arr.pop();
			if (v.key === key) {
				continue;
			}
			this.arr.unshift(v);
		}
	};
	// 获取map键值对个数
	var size = function() {
		return this.arr.length;
	};
	// 判断map是否为空
	var isEmpty = function() {
		return this.arr.length <= 0;
	};
	this.arr = new Array();
	this.get = get;
	this.put = put;
	this.remove = remove;
	this.size = size;
	this.isEmpty = isEmpty;
}
var map = new Map();

// 纳税申报期限（月，日）
var NSSB_YEAR = 2018;
var NSSB_SBQX = {};
var SBF_SBQX = {};
var ZZS_SBQX = {};
var XFS_SBQX = {};
var NSSB_SBQX2017 = new Array(new Array(1, 16), new Array(2, 15), new Array(3,
		15), new Array(4, 19), new Array(5, 15), new Array(6, 15), new Array(7,
		17), new Array(8, 15), new Array(9, 15), new Array(10, 25), new Array(
		11, 15), new Array(12, 15));
var NSSB_SBQX2018 = new Array(new Array(1, 15), new Array(2, 22), new Array(3,
		15), new Array(4, 18), new Array(5, 15), new Array(6, 15), new Array(7,
		16), new Array(8, 15), new Array(9, 15), new Array(10, 24), new Array(
		11, 15), new Array(12, 17));
// var NSSB_SBQX_MONTH = new Array(1,2,3,4,5,6,7,8,9,10,11,12);
// var NSSB_SBQX_DAY = new Array(15,22,17,18,19,18,15,15,18,22,17,15);

// 社保费申报期限（月，日）
var SBF_SBQX2018 = new Array(new Array(1, 25), new Array(2, 25), new Array(3,
		25), new Array(4, 25), new Array(5, 25), new Array(6, 25), new Array(7,
		25), new Array(8, 25), new Array(9, 15), new Array(10, 25), new Array(
		11, 25), new Array(12, 25));
// 社保费申报期限（月，日）
var SBF_SBQX2017 = new Array(new Array(1, 25), new Array(2, 25), new Array(3,
		25), new Array(4, 25), new Array(5, 25), new Array(6, 25), new Array(7,
		25), new Array(8, 25), new Array(9, 25), new Array(10, 25), new Array(
		11, 25), new Array(12, 25));

var ZZS_SBQX2017 = new Array(new Array(1, 16), new Array(2, 15), new Array(3,
		15), new Array(4, 19), new Array(5, 15), new Array(6, 15), new Array(7,
		17), new Array(8, 15), new Array(9, 15), new Array(10, 25), new Array(
		11, 15), new Array(12, 15));
var ZZS_SBQX2018 = new Array(new Array(1, 15), new Array(2, 22), new Array(3,
		15), new Array(4, 18), new Array(5, 15), new Array(6, 15), new Array(7,
		16), new Array(8, 15), new Array(9, 15), new Array(10, 24), new Array(
		11, 15), new Array(12, 17));
var XFS_SBQX2017 = new Array(new Array(1, 16), new Array(2, 15), new Array(3,
		15), new Array(4, 19), new Array(5, 15), new Array(6, 15), new Array(7,
		17), new Array(8, 15), new Array(9, 15), new Array(10, 25), new Array(
		11, 15), new Array(12, 15));
var XFS_SBQX2018 = new Array(new Array(1, 15), new Array(2, 22), new Array(3,
		15), new Array(4, 18), new Array(5, 15), new Array(6, 15), new Array(7,
		16), new Array(8, 15), new Array(9, 15), new Array(10, 24), new Array(
		11, 15), new Array(12, 17));
try {
	var today = new Date();
	var yearstr = today.getFullYear();
	NSSB_SBQX = eval('NSSB_SBQX' + yearstr);
	SBF_SBQX = eval('SBF_SBQX' + yearstr);
} catch (e) {

}
// var SBF_SBQX_MONTH = new Array(1,2,3,4,5,6,7,8,9,10,11,12);
// var SBF_SBQX_DAY = new Array(20,22,20,20,20,20,20,20,20,20,20,20);

// 房产税(从价计征)申报期限（月，日）
var FCS_SBQX = new Array(new Array(1, 31), new Array(7, 31));
// 企业所得税年度纳税申报申报（5月31日）
var QYSDSND_SBQX = new Array(new Array(5, 31));
// 个体工商户生产经营所得、对企事业单位承包承租经营所得个人所得税年度纳税申报（3月31日），
var GTXX_SBQX = new Array(new Array(3, 31));
// 年所得12万元以上个人所得税自行申报（3月31日），
var GSZXSB_SBQX = new Array(new Array(3, 31));

// 残疾人就业保障金(8月份)
var CZJJ_SBQX = new Array(new Array(8, 31));

// var FCS_SBQX_MONTH = new Array(3,9);
// var FCS_SBQX_DAY = new Array(31,25);

// 土地税申报期限（月，日）
var TDS_SBQX = new Array(new Array(1, 31), new Array(7, 31));
// var TDS_SBQX_MONTH = new Array(3,6,9);
// var TDS_SBQX_DAY = new Array(31,30,25);

function montharr(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11) {
	this[0] = m0;
	this[1] = m1;
	this[2] = m2;
	this[3] = m3;
	this[4] = m4;
	this[5] = m5;
	this[6] = m6;
	this[7] = m7;
	this[8] = m8;
	this[9] = m9;
	this[10] = m10;
	this[11] = m11;
}

// 实现月历
function calendar(yearstr, monthstr, daystr) {
	var monthNames = "JanFebMarAprMayJunJulAugSepOctNovDec";
	if (monthstr < 1) {
		monthstr = 12;
	}
	var today = new Date(yearstr, monthstr - 1, daystr);
	var thisDay;

	var monthDays = new montharr(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	year = today.getFullYear();

	thisDay = today.getDate();

	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
		monthDays[1] = 29;

	nDays = monthDays[today.getMonth()];

	firstDay = today;

	firstDay.setDate(1);

	var monthx = today.getMonth();

	testMe = firstDay.getDate();

	hightstr = "";

	var ssMessage = getSsMessageArr(yearstr, monthstr, daystr);

	var hit;
	hit = hightstr.split(",");

	var outStr = "";

	if (testMe == 2)
		firstDay.setDate(0);
	//var tmpNow = new Date();
	var tmpNow = new Date(yearstr, (monthstr - 1), daystr);

	var tmpYear = tmpNow.getYear();
	var tmpMonth = tmpNow.getMonth();
	var tmpDay = tmpNow.getDate();
	startDay = firstDay.getDay();

	/*
	 * outStr = outStr + "<TABLE width='400' BORDER='0' CELLSPACING='0'
	 * CELLPADDING='2' BGCOLOR='white'><TR><TD align=center><table
	 * width='400' border='0' cellspacing='1' cellpadding='2' bgcolor='#5caeff'
	 * height='150'>"; for (var jjj = 0 ;jjj < ssMessage.length ; jjj++ ){ if
	 * (ssMessage[jjj] == ""){ } else { outStr = outStr + "<tr><td height='10'><font
	 * style='font-size:14px;color: whitesmoke;'>&nbsp;&nbsp;&nbsp;*" +
	 * ssMessage[jjj] + "</font></td></tr>"; } } outStr = outStr + "</td></tr></table>";
	 */

	outStr = outStr
			+ "<TABLE width='220' BORDER='0' CELLSPACING='0' CELLPADDING='2' BGCOLOR='white' height='240'><TR><TD><table width='220' border='0' cellspacing='0' cellpadding='0' STYLE='font-size:9pt;Color:#333333;' height='240'>";

	if (monthstr == 1) {
		outStr = outStr
				+ "<TR style='height: 29px;'><th colspan='7' bgcolor='white' style='height: 29px;'><a href='#'  id='prev_month' title='上一月份'  style='font-size:14px;text-decoration: none;color: black;position: absolute;left: 0;' onclick='update("
				+ (year - 1) + "," + "12" + "," + firstDay.getDate()
				+ ");' ><</a>&nbsp;";
	} else {
		outStr = outStr
				+ "<TR style='height: 29px;'><th colspan='7' bgcolor='white' style='height: 29px;'><a href='#'  id='prev_month' title='上一月份' style='font-size:14px;text-decoration: none;color: black;position: absolute;left: 0;' onclick='update("
				+ year + "," + (monthx) + "," + firstDay.getDate()
				+ ");' ><</a>&nbsp;";
	}
	var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	var monthNames = new Array("1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月",
			"8 月", "9 月", "10 月", "11 月", "12 月");
	// var now = new Date(yearstr,(monthstr-1),daystr);
	var now = new Date();
	now.setFullYear(yearstr, (monthstr - 1), daystr);

	if (monthstr == 12) {
		outStr = outStr
				+ "<FONT style='font-size: 14px;color: #333333;'>"
				+ " "
				+ now.getFullYear()
				+ " 年 "
				+ monthNames[now.getMonth()]
				+ " "
				+ "</FONT>&nbsp;<a href='#'  id='prev_month' title='下一月份' style='font-size:14px;text-decoration: none;color: black;position: absolute;right: 0;' onclick='update("
				+ (year + 1) + "," + "1" + ");' >></a>";
	} else {
		outStr = outStr
				+ "<FONT STYLE='font-size:9pt;color: #505051'>"
				+ " "
				+ now.getFullYear()
				+ " 年 "
				+ monthNames[now.getMonth()]
				+ " "
				+ "</FONT>&nbsp;<a href='#'  id='prev_month' title='下一月份' style='font-size:14px;text-decoration: none;color: black;position: absolute;right: 0;' onclick='update("
				+ year + "," + (monthstr + 1) + "," + now.getDate()
				+ ");' >></a>";
	}
	outStr = outStr + "</TH></TR>";
	outStr = outStr
			+ "</tr><TR style='height: 42px;'><TH><FONT STYLE='font-size:9pt;Color:#333333;'>日</FONT></TH><th ><FONT STYLE='font-size:9pt;Color:#333333;'>一</FONT></TH> <TH ><FONT STYLE='font-size:9pt;Color:#333333;'>二</FONT></TH> <TH ><FONT STYLE='font-size:9pt;Color:#333333;'>三</FONT></TH> <TH ><FONT STYLE='font-size:9pt;Color:#333333;'>四</FONT></TH> <TH ><FONT STYLE='font-size:9pt;Color:#333333;'>五</FONT></TH> <TH ><FONT STYLE='font-size:9pt;Color:#333333;'>六</FONT></TH></TR><TR>";

	column = 0;
	for (i = 0; i < startDay; i++) {
		outStr = outStr + "\n<TD style='height: 31.42px;width: 31.42px;'><FONT STYLE='font-size:9pt'> </FONT></TD>";
		column++;
	}
	var j;
	for (i = 1; i <= nDays; i++) {
		var intnum
		for (j = 0; j < hit.length; j++) {
			if (i == hit[j]) {
				break
			}
			;
		}

		if (j < hit.length) {

			var tempExpireDate = now.getFullYear()
					+ "-"
					+ ((now.getMonth() + 1) < 10 ? ("0" + (now.getMonth() + 1))
							: (now.getMonth() + 1)) + "-"
					+ (i < 10 ? ("0" + i) : i);
			if (daystr == (i < 10 ? ("0" + i) : i)) {
			outStr = outStr
				+ "</TD><TD ALIGN='CENTER' BGCOLOR='blue' style='background-color: blue;height: 31.42px;width: 31.42px;border-radius: 50%;' class='expireDate' title='"
				+ map.get(tempExpireDate)
				+ "'><FONT STYLE='font-size:9pt;Color:white;font-weight:bold'>";
	
			} else {
				outStr = outStr
				+ "</TD><TD ALIGN='CENTER' style='height: 31.42px;width: 31.42px;background-color: yellow;border-radius:50%;' class='expireDate' title='"
				+ map.get(tempExpireDate)
				+ "'><FONT STYLE='font-size:9pt;Color:red;font-weight:bold'>";
			}
		} else {
			if (tmpMonth == now.getMonth() && tmpDay == i) {
				outStr = outStr
						+ "</TD><TD BGCOLOR='#218AE2'  style='height: 31.42px;width: 31.42px;border-top-left-radius:17px;border-top-right-radius:17px;border-bottom-left-radius:17px;border-bottom-right-radius:17px;' ALIGN='CENTER'><FONT STYLE='font-size:9pt;font-family:Arial;font-weight:bold;Color:white;'>";
			} else {
				outStr = outStr
						+ "</TD><TD BGCOLOR='#FFFFFF' ALIGN='CENTER' style='height: 31.42px;width: 31.42px;'><FONT style='font-size: 9px;font-family:Arial;font-weight:bold;Color: #96969b;'>";
			}

		}
		outStr = outStr + i;

		if (j < hit.length)
			outStr = outStr + "</FONT></TD>";

		column++;
		if (column == 7) {
			outStr = outStr + "<TR>";
			column = 0;
		}
	}

	outStr = outStr + "</TABLE> </TD></TR></TABLE>";
	BSRL.innerHTML = outStr;
}

function update(year, month, day) {

	if (year > NSSB_YEAR) {
		return;
	}
	// 如果没有当年的办税日期就停止
	try {
		eval('NSSB_SBQX' + year);
	} catch (e) {
		if (year != NSSB_YEAR)
			return;
	}

	if (month == 0) {
		month = 12;
	}

	var tmpNow = new Date();
	var tmpMonth = tmpNow.getMonth();
	var tmpDay = tmpNow.getDate();
	if ((tmpMonth + 1) == month) {
		day = tmpDay;
	} else {
		day = 1;
	}
	calendar(year, month, day);
}

function sbqxcalendar() {
	this.getSsMessage = function(yearstr, monthstr, daystr) {
		return getMessage(yearstr, monthstr, daystr);
	}
}
function getMessage(yearstr, monthstr, daystr) {
	var ssMessage = getSsMessageArr(yearstr, monthstr, daystr);
	var _ssMessage = "";
	for ( var i = 0; i < ssMessage.length; i++) {
		if (ssMessage[i] == "") {
		} else {
			_ssMessage = _ssMessage + ssMessage[i] + ",";
		}
	}
	_ssMessage = _ssMessage.substring(0, _ssMessage.length - 1) + ".";
	return (_ssMessage);
}
function getMessageForRl(yearstr, monthstr, daystr) {
	var ssMessage = getSsMessageArr(yearstr, monthstr, daystr);
	var _ssMessage = "";
	for ( var i = 0; i < ssMessage.length; i++) {
		if (ssMessage[i] == "") {
		} else {
			_ssMessage = _ssMessage + "*" + ssMessage[i] + ",";
		}
	}
	_ssMessage = _ssMessage.substring(0, _ssMessage.length - 1) + ".";
	return (_ssMessage);
}

function getSsMessageArr(yearstr, monthstr, daystr) {
	if (monthstr < 1) {
		monthstr = 12;
	}
	var today = new Date(yearstr, monthstr - 1, daystr);
	var thisDay;
	var monthDays = new montharr(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

	year = today.getFullYear();

	thisDay = today.getDate();

	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
		monthDays[1] = 29;

	nDays = monthDays[today.getMonth()];

	firstDay = today;

	firstDay.setDate(1);

	var monthx = today.getMonth();

	testMe = firstDay.getDate();

	hightstr = "";
	var sbqxFlag = new Array(new Array(false, 15), new Array(false, 20),
			new Array(false, 31), new Array(false, 31), new Array(false, 31),
			new Array(false, 31), new Array(false, 31), new Array(false, 31),
			new Array(false, 31), new Array(false, 25));

	NSSB_SBQX = eval('NSSB_SBQX' + yearstr);
	ZZS_SBQX = eval('ZZS_SBQX' + yearstr);
	XFS_SBQX = eval('XFS_SBQX' + yearstr);
	SBF_SBQX = eval('SBF_SBQX' + yearstr);

	if (yearstr == 2018) {
		GSZXSB_SBQX = new Array(new Array(4, 2));
		GTXX_SBQX = new Array(new Array(4, 2));
	}

	for ( var i = 0; i < NSSB_SBQX.length; i++) {
		var tmp = NSSB_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = tmp[1];
			sbqxFlag[0][0] = true;
			sbqxFlag[0][1] = tmp[1];
			break;
		}
	}
	for ( var i = 0; i < ZZS_SBQX.length; i++) {
		var tmp = ZZS_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = tmp[1];
			sbqxFlag[1][0] = true;
			sbqxFlag[1][1] = tmp[1];
			break;
		}
	}
	for ( var i = 0; i < XFS_SBQX.length; i++) {
		var tmp = XFS_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = tmp[1];
			sbqxFlag[2][0] = true;
			sbqxFlag[2][1] = tmp[1];
			break;
		}
	}
	for ( var i = 0; i < SBF_SBQX.length; i++) {
		var tmp = SBF_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = hightstr + "," + tmp[1];
			sbqxFlag[3][0] = true;
			sbqxFlag[3][1] = tmp[1];
			break;
		}
	}
	for ( var i = 0; i < FCS_SBQX.length; i++) {
		if (year == '2017' && monthx == '8') {
			break;
		}
		var tmp = FCS_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = hightstr + "," + tmp[1];
			sbqxFlag[4][0] = true;
			sbqxFlag[4][1] = tmp[1];
			break;
		}
	}
	for ( var i = 0; i < TDS_SBQX.length; i++) {
		if (year == '2017' && monthx == '8') {
			break;
		}
		var tmp = TDS_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = hightstr + "," + tmp[1];
			sbqxFlag[5][0] = true;
			sbqxFlag[5][1] = tmp[1];
			break;
		}
	}
	for ( var i = 0; i < QYSDSND_SBQX.length; i++) {
		var tmp = QYSDSND_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = hightstr + "," + tmp[1];
			sbqxFlag[6][0] = true;
			sbqxFlag[6][1] = tmp[1];
			break;
		}
	}
	for ( var i = 0; i < GTXX_SBQX.length; i++) {
		var tmp = GTXX_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = hightstr + "," + tmp[1];
			sbqxFlag[7][0] = true;
			sbqxFlag[7][1] = tmp[1];
			break;
		}
	}
	for ( var i = 0; i < GSZXSB_SBQX.length; i++) {
		var tmp = GSZXSB_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = hightstr + "," + tmp[1];
			sbqxFlag[8][0] = true;
			sbqxFlag[8][1] = tmp[1];
			break;
		}
	}
	for ( var i = 0; i < CZJJ_SBQX.length; i++) {
		var tmp = CZJJ_SBQX[i];
		if (tmp[0] == monthx + 1) {
			hightstr = hightstr + "," + tmp[1];
			sbqxFlag[9][0] = true;
			sbqxFlag[9][1] = tmp[1];
			break;
		}
	}

	var ssMessage = new Array("本月纳税申报截止日期是YYYY-MM-DD",
			"本月增值税申报截止日期是YYYY-MM-DD", "本月消费税申报截止日期是YYYY-MM-DD",
			"本月社保费申报截止日期是YYYY-MM-DD", "本月房产税（从价计征）申报截止日期是YYYY-MM-DD",
			"本月土地使用税申报截止日期是YYYY-MM-DD", "企业所得税年度纳税申报申报截止日期是YYYY-MM-DD",
			"个体工商户生产经营所得、对企事业单位承包承租经营所得、个人所得税年度纳税申报申报截止日期是YYYY-MM-DD",
			"年所得12万元以上个人所得税自行申报申报截止日期是YYYY-MM-DD", "残疾人就业保障金申报截止日期是YYYY-MM-DD");
	for ( var i = 0; i < sbqxFlag.length; i++) {
		if (sbqxFlag[i][0]) {
			var regs = /YYYY/g;
			ssMessage[i] = ssMessage[i].replace(regs, year);
			regs = /MM/g;
			ssMessage[i] = ssMessage[i].replace(regs, monthx + 1);
			regs = /DD/g;
			ssMessage[i] = ssMessage[i].replace(regs, sbqxFlag[i][1]);

			// 增加消息提醒
			var tmpMonth = (monthx + 1);
			var tmpDay = sbqxFlag[i][1];
			tmpMonth = tmpMonth < 10 ? ("0" + tmpMonth) : tmpMonth;
			tmpDay = tmpDay < 10 ? ("0" + tmpDay) : tmpDay;
			var expireDate = year + "-" + tmpMonth + "-" + tmpDay;
			if (map.get(expireDate) != null) {
				map.put(expireDate, map.get(expireDate) + "," + ssMessage[i]);
			} else {
				map.put(expireDate, ssMessage[i]);
			}

		} else {
			ssMessage[i] = "";
		}
	}
	return ssMessage;
}