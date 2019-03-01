if(!String.prototype.isNumber) {
  String.prototype.isNumber=function (oNum){
    if(!this)return false;
    var strP=/^-?\d+(\.\d+)?$/;
    if(!strP.test(this))return false;
    try{
      if(parseFloat(this)!=this)return false;
    }catch(ex){
      return false;
    }
    return true;
  }
}
if(!isEmpty) {
  function isEmpty(str){
    if(typeof(str)!="string")
      throw new Error(-1,"所检测的对象不是字符串！");
    if(str==null || str=="") return true;
    return false;
  }
}
if(!String.prototype.isDate){
  String.prototype.isDate=function (){
    var pat_hd=/^((19|20)\d{2}-((0[1-9]{1})|(1[0-2]{1}))-((0[1-9]{1})|([1-2]{1}[0-9]{1})|(3[0-1]{1}))){1}(\s\d{2}:\d{2}:\d{2})?$/;
    try{
      if(!pat_hd.test(this)) throw new Error(-1,"日期格式不对！");
      var arr_dt=this.split(" ");
      if(arr_dt[0]=='') throw new Error(-1,"日期格式不对！");
      var oDate=arr_dt[0];
      var arr_hd=oDate.split("-");
      var dateTmp=new Date(arr_hd[0],parseFloat(arr_hd[1])-1,parseFloat(arr_hd[2]));
      if(dateTmp.getFullYear()!=parseFloat(arr_hd[0])||dateTmp.getMonth()!=parseFloat(arr_hd[1])-1||dateTmp.getDate()!=parseFloat(arr_hd[2]))
        throw new Error(-1,"日期格式不对！");
      if(arr_dt[1]&&arr_dt[1]!=''){
        var oTime=arr_dt[1];
        var arr_ht=oTime.split(":");
        dateTmp.setHours(arr_ht[0],arr_ht[1],arr_ht[2]);
        if(dateTmp.getHours()!=parseFloat(arr_ht[0])||dateTmp.getMinutes()!=parseFloat(arr_ht[1])||dateTmp.getSeconds()!=parseFloat(arr_ht[2]))
          throw new Error(-1,"日期格式不对！");
      }
    }catch(ex){
      if(ex.description){
        //alert(ex.description);
      }
      return false;
    }
    return true;
  }
}

if(!Date.prototype.parseDate) {
  Date.prototype.parseDate=function(str){
    str = str.toString();
    try {
      if(!str.isDate())
        throw new Error(-1,"日期格式错误。");
      var year = str.substring(0,4);
      var month = str.substring(5,7);
      var day = str.substring(8,10);
      var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
      var d= new Date(r[1], r[3]-1, r[4]);
      if(!(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]))
        throw new Error(-1,"日期格式错误。");
    }catch(ex) {
      throw ex;
    }
    return d;
  }
}

//测字符串实际长度
if(!String.prototype.actLength) {
  String.prototype.actLength = function(){
    var arr=this.match(/[^\x00-\xff]/ig);
    return this.length+(arr==null?0:arr.length);
  }
}




/**
 * 录入框录入过程数据类型检测
 */
function InputTypeChecker(){
  this.typeChecker = new DataTypeChecker();
  this.dateMask = "1050-01-01";
  this.dateYMMask = "1050-01";
  this.datetimeMask = "1050-01-01 01:01:01";
  this.dateRex = /^19([0-9]?)$/;
  this.getKeyChar = function(){
    return String.fromCharCode(window.event.keyCode);
  }
  /**校验是整数*/
  this.isInt = function(obj) {
    if(this.getKeyChar()==".") return false;
    var v = (obj.value) + this.getKeyChar();
    if (obj.money == "Y") v = (getoff_Qfw(obj.value) + this.getKeyChar());
    if("-"==v) return true;
    return this.typeChecker.isInt(v,obj);
  }
  /**校验是否是浮点数*/
  this.isFloat = function(obj) {
    var v = (obj.value) + this.getKeyChar();
    if (obj.money == "Y") v = (getoff_Qfw(obj.value) + this.getKeyChar());
    if("-"==v) return true;
    var ret = this.typeChecker.isFloat(v,obj);
    if(!ret) return false;
    return this.checkPrecision(obj);
  }
  /**校验小数位数*/
  this.checkPrecision = function(obj) {
    if(obj.precision){
      var v = (obj.value) + this.getKeyChar();      
      if (obj.money == "Y") v = (getoff_Qfw(obj.value) + this.getKeyChar());
      var d = v.split(".");
      if(d[1] && d[1].length>obj.precision) return false;
    }
    return true;
  }
  /**校验是否是字符串*/
  this.isString = function(obj) {
    if(window.event.keyCode<32 || window.event.keyCode>126) return false;
    return true;
  }
  /**是否是日期值*/
  this.isDate = function(obj) {
    var v = (obj.value + this.getKeyChar());
    var lenV = v.length;
    if(lenV<3 && (v=="1" || v=="2" || v=="19" || v=="20")) return true;
    if(lenV>this.dateMask.length) return false;
    v = v + this.dateMask.substring(lenV);
    if(lenV==9 && v.length>=10) {
      var mm = v.substring(5, 7) * 1;
      var dd = v.substring(8, 10) * 1;
      if((mm==4 || mm==6 || mm==9 || mm==11) && dd>2) {
        v = v.substring(0, 9) + "0";
       }
    }
   return this.typeChecker.isDate(v);
	 
  }
  /**是否是日期值*/
  this.isDateYM = function(obj) {
    var v = (obj.value + this.getKeyChar());
    var lenV = v.length;
    var ret = this.dateRex.test(v);
    if(lenV<3 && (v=="1" || v=="2" || v=="19" || v=="20")) return true;
    if(lenV>this.dateYMMask.length) return false;
    v = v + this.dateMask.substring(lenV);
    return this.typeChecker.isDate(v);
  }
}
 /*日期转换*/
function dateConvert(obj) {
  	chars= "0123456789";
	var f = window.event.keyCode;//处理删除时避免自动加"-"
    var v = obj.value;
    var keyChr = String.fromCharCode(window.event.keyCode);
    if (chars.indexOf(keyChr) <= -1) {
			window.event.keyCode=0;
			return true;
	}
   	if(!v) return false;
    if((v.length<4 || (v.length>5 & v.length<7)|| (v.length>7) )&& isNaN(keyChr)) return false;
    if((v.length>=4) && this.keyChr!="-" && f != '8' ){
    	return insertForDate(obj,keyChr);
        if(v.length==4 && this.keyChr*1>1) return false;
        if(v.length==7 && this.keyChr*1>3) return false;
    }
    if(v.length>9) return false;
    if(v.length<1 && ((this.keyChr * 1)<1 || (this.keyChr * 1)>2)) return false;
    if(v.length==5 && (this.keyChr * 1)>1) return false;
    if(v.length==6 && (v.substring(5,6) * 1) > 0 && (this.keyChr * 1)>2) {
      return false;
    }
    if(v.length==8 && (this.keyChr * 1)>3) return false;
    if(v.length==9 && (v.substring(8,9)*1) > 2 && (this.keyChr*1)>1)  return false;
    return false;
}
 /*日期转换*/
function dateConvertYM(obj) {
  	chars= "0123456789";
	var f = window.event.keyCode;//处理删除时避免自动加"-"
    var v = obj.value;
    var keyChr = String.fromCharCode(window.event.keyCode);
    if (chars.indexOf(keyChr) <= -1) {
			window.event.keyCode=0;
			return true;
		} 
   	if(!v) return false;
    if((v.length<4 || (v.length>5 & v.length<7) || (v.length>7))&& isNaN(keyChr)) return false;
    if((v.length>=4) && this.keyChr!="-" && f != '8') {
      //obj.value = obj.value + "-";
    	return insertForDate(obj,keyChr);
      if(v.length==4 && this.keyChr*1>1) return false;
      if(v.length==7 && this.keyChr*1>3) return false;
    }
    if(v.length>7) return true;
    return false;
}
 /*日期转换*/
function dateConvertY(obj) {
  	chars= "0123456789";
	var f = window.event.keyCode;//处理删除时避免自动加"-"
    var v = obj.value;
    var keyChr = String.fromCharCode(window.event.keyCode);
    if (chars.indexOf(keyChr) <= -1) {
			window.event.keyCode=0;
			return true;
		} 
   	if(!v) return false;
    if(v.length>=4) return true;
    return false;
}
function insertForDate(obj,keyChr){ // add by lzf
	var focus_x = getCursortPosition(obj);
	var fix_x = 1;
	obj.focus(); 
	sel = document.selection.createRange(); 
	sel.text = keyChr; 
	sel.select(); 
	var new_value = obj.value.match(/\d/g);
	var length = new_value?new_value.length:0;
	length = length>8?8:length;
	obj.value = '';
	for(var i=0;i<length;i++){
		obj.value += new_value[i];
		if((i==3 && length>4) || (i==5 && length>6)) insertAtCursor(obj,'-');
	}
	if(obj.value.substr(0,focus_x+2).split("-").length == 2) {
		if('-' ==  obj.value.substr(focus_x,1)){ fix_x =2; }
	}
	if(obj.value.substr(0,focus_x+2).split("-").length == 3) {
		if('-' ==  obj.value.substr(focus_x,1)){ fix_x =2; }
	}
	setCaretPosition(obj,focus_x+fix_x);
	window.event.keyCode=0;
	return false;
}
function insertAtCursor(myField, myValue) 
{ 
	//IE support 
	if (document.selection) { 
		myField.focus(); 
		sel = document.selection.createRange(); 
		sel.text = myValue; 
		sel.select(); 
	} 
	//MOZILLA/NETSCAPE support 
	else if (myField.selectionStart || myField.selectionStart == '0'){ 
		var startPos = myField.selectionStart; 
		var endPos = myField.selectionEnd; 
		// save scrollTop before insert 
		var restoreTop = myField.scrollTop; 
		myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos,myField.value.length); 
		if (restoreTop > 0) 
		{ 
			// restore previous scrollTop 
			myField.scrollTop = restoreTop; 
		} 
		myField.focus(); 
		myField.selectionStart = startPos + myValue.length; 
		myField.selectionEnd = startPos + myValue.length; 
	} else { 
		myField.value += myValue; 
		myField.focus(); 
	} 
}
function getCursortPosition (ctrl) {//获取光标位置函数
	var CaretPos = 0;	// IE Support
	if (document.selection) {
	ctrl.focus ();
		var Sel = document.selection.createRange ();
		Sel.moveStart ('character', -ctrl.value.length);
		CaretPos = Sel.text.length;
	}
	// Firefox support
	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
		CaretPos = ctrl.selectionStart;
	return (CaretPos);
}
function setCaretPosition(ctrl, pos){//设置光标位置函数
	if(ctrl.setSelectionRange)
	{
		ctrl.focus();
		ctrl.setSelectionRange(pos,pos);
	}
	else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}
//控件输入值检测
function checkDateFormat(obj) {
		//alert("isDateIn"+obj.onerrclear);
		var flag = false;
		if(obj.value =="") return true;
	  if(obj.datatype == "date" ){
			if(!dateCheckYMD(obj.value,obj.datatype)) {
			  obj.focus();
			  return flag;
		  }
		}else if(obj.datatype == "dateYM") {
			if(!dateCheckYMD(obj.value+'-01',obj.datatype)) {
			  obj.focus();
			  return flag;
		  }
		}else if(obj.datatype == "dateY") {
			if(!dateCheckYMD(obj.value+'-01-01',obj.datatype)) {
			  obj.focus();
			  return flag;
		  }
		}
		
		if(flag == 'false' && obj.onerrclear == 'true'){
			obj.value="";
		}
		flag = true;
	  return flag;
}

function _checkDateFormat(obj) {
		//alert("isDateIn"+obj.onerrclear);
		var flag = false;
		if(obj.value =="") return true;
	  if(obj.datatype == "date" ){
			if(!dateCheckYMD(obj.value,obj.datatype)) {
			  alert("必须按“YYYY-MM-DD”的格式输入日期值！");
			  obj.focus();
			  return flag;
		  }
		}else if(obj.datatype == "dateYM") {
			if(!dateCheckYMD(obj.value+'-01',obj.datatype)) {
			  alert("必须按“YYYY-MM”的格式输入日期值！");
			  obj.focus();
			  return flag;
		  }
		}else if(obj.datatype == "dateY") {
			if(!dateCheckYMD(obj.value+'-01-01',obj.datatype)) {
			  alert("必须按“YYYY”的格式输入日期值！");
			  obj.focus();
			  return flag;
		  }
		}
		if(flag == 'false' && obj.onerrclear == 'true'){
			obj.value="";
		}
		flag = true;
	  return flag;
}
//年月日检测
function dateCheckYMD(str,type) {
		//alert("dateCheckYMD:"+str);
	  if(str.length<1) return true;
	  var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
	  var arr = reg.exec(str);
	  if( ! reg.test(str)) return false;
	  var d = null;
	  d = new Date(RegExp.$1, (RegExp.$2 - 1), RegExp.$3);
	  if(d == null) return false;
	  if(d.getFullYear()!= RegExp.$1) return false;
	  if(d.getMonth()!= (RegExp.$2 - 1)) return false;
	  if(d.getDate()!= RegExp.$3)  return false;
	  return true;
}

/**
 * 数据类型检测
 */
function DataTypeChecker() {
  this.isInt = function(val,obj){
    val = (val) + "";
    if (obj.money == "Y") val = getoff_Qfw(val) + "";
    if(val == "") return true;
    val = new String(val);
    if(!val.isNumber()) return false;
    var num = val.toNumber();
    return num.isInt();
  }
  this.isFloat = function(val,obj){
    val = (val) + "";
    if (obj.money == "Y") val = getoff_Qfw(val) + "";
    if(val == "") return true;
    if(!val.isNumber()) return false;
    var num = val.toNumber();
    return num.isFloat();
  }
  this.isDate = function(val) {
    return checkDateFormat(val);
  }
  this.isDateYM = function(val) {
    return checkDateFormat(val);
    
  }
  this.isDateY = function(val) {
    return checkDateFormat(val);
  }
}

function CheckType() {
  this.keyChr = String.fromCharCode(window.event.keyCode);

  this.checkInt = function(obj) {
    var v = (obj.value) + this.keyChr;
    if (obj.money == "Y") v = (getoff_Qfw(obj.value) + this.keyChr);
    if(v.length==1 && v=="-") return true;
    if(!v.isNumber()) return false;
    return true;
  }

  this.checkFloat = function(obj) {
    var v = (obj.value) + this.keyChr;
    if (obj.money == "Y") v = v = (getoff_Qfw(obj.value) + this.keyChr);
    if(obj.precision) {
      var d = v.split(".");
      if(d[1] && d[1].length>obj.precision) return false;
    }
    if(v.length==1 && v=="-") return true;
    if(v.length>1 && obj.value.indexOf(".")<1 && this.keyChr=="." ) return true;
    if(!v.isNumber()) return false;
  }

  this.checkString = function(obj) {
    if (this.keyChr==" ") {
      window.event.keyCode=27;
      return false;
    }
    return true;
  }

  this.checkDate = function(obj) {
    var v = obj.value;
    if((v.length<4 || (v.length>5 & v.length<7) || (v.length>7))&& isNaN(this.keyChr)) return false;
    if((v.length==4 || v.length==7) && this.keyChr!="-") {
      obj.value = obj.value + "-";
      if(v.length==4 && this.keyChr*1>1) return false;
      if(v.length==7 && this.keyChr*1>3) return false;
    }
    if(v.length>9) return false;
    if(v.length<1 && ((this.keyChr * 1)<1 || (this.keyChr * 1)>2)) return false;
    if(v.length==5 && (this.keyChr * 1)>1) return false;
    if(v.length==6 && (v.substring(5,6) * 1) > 0 && (this.keyChr * 1)>2) {
      return false;
    }
    if(v.length==8 && (this.keyChr * 1)>3) return false;
    if(v.length==9 && (v.substring(8,9)*1) > 2 && (this.keyChr*1)>1)  return false;
    return true;
  }

  this.checkDateYM = function(obj) {
    var v = obj.value;
    if((v.length<4 || (v.length>5 & v.length<7) )&& isNaN(this.keyChr)) return false;
    if((v.length==4) && this.keyChr!="-") {
      obj.value = obj.value + "-";
      if(v.length==4 && this.keyChr*1>1) return false;
      if(v.length==7 && this.keyChr*1>3) return false;
    }
    if(v.length<1 && ((this.keyChr * 1)<1 || (this.keyChr * 1)>2)) return false;
    if(v.length==5 && (this.keyChr * 1)>1) return false;
    if(v.length==6 && (v.substring(5,6) * 1) > 0 && (this.keyChr * 1)>2) {
      return false;
    }
    return true;
  }
}

function CheckRange() {
  this.keyChr = String.fromCharCode(window.event.keyCode);
  this.checkNumber = function(obj) {
    if(obj.min && getoff_Qfw(obj.value)*1<obj.min*1) {
      focusToObj(obj);
      alert("输入值不能小于"+obj.min+".");
      return false;
    }
    if(obj.max && getoff_Qfw(obj.value)*1>obj.max*1) {
      focusToObj(obj);
      alert("输入值不能大于"+obj.max+".");
      return false;
    }
    return true;
  }

  this.checkString = function(obj){
    return true;
  }

  this.checkDate = function(obj) {
    var dt = new Date();
    if(obj.value=="") return true;
    var d = dt.parseDate(obj.value);
    if(obj.min) {
      var dMin = dt.parseDate(obj.min);
      if(d < dMin) {
        focusToObj(obj);
        alert("输入值不能小于"+obj.min+".");
        return false;
      }
    }
    if(obj.max) {
      var dMax = dt.parseDate(obj.max);
      if(d > dMax) {
        focusToObj(obj);
        alert("输入值不能大于"+obj.max+".");
        return false;
      }
    }
    return true;
  }

  this.checkDateYM = function(obj) {
    var dt = new Date();
    if(obj.value=="") return true;
    var val = obj.value + "-01";
    var d = dt.parseDate(val);
    if(obj.min) {
      var minVal = obj.min + "-01";
      var dMin = dt.parseDate(minVal);
      if(d < dMin) {
        focusToObj(obj);
        alert("输入值不能小于"+obj.min+".");
        return false;
      }
    }
    if(obj.max) {
      var maxVal = obj.max + "-01";
      var dMax = dt.parseDate(maxVal);
      if(d > dMax) {
        focusToObj(obj);
        alert("输入值不能大于"+obj.max+".");
        return false;
      }
    }
    return true;
  }
}


function Checker() {
  this.name="Checker";
}

/**
 * 控制输入值的格式
 */
//checkType=function(obj) {
inputKeyPressCheck = function(obj) {
  //var checkType = new CheckType();
  var checker = new InputTypeChecker();
  if(obj.datatype) {
    if(window.event) {
      var keyCode = window.event.keyCode;
      var keyChr = String.fromCharCode(window.event.keyCode);
    }

    if(obj.datatype=="int") {
      return checker.isInt(obj);
    } else if(obj.datatype=="float") {
      return checker.isFloat(obj);
    } else if(obj.datatype=="string")  {
      return checker.isString(obj);
    } else if(obj.datatype=="date") {
      //return checker.isDate(obj);
      return !dateConvert(obj);
    } else if(obj.datatype=="dateYM") {
    	return !dateConvertYM(obj);
      //return checker.isDateYM(obj);
    } else if(obj.datatype=="dateY") {
    	return !dateConvertY(obj);
      //return checker.isDateYM(obj);
    }
  }
  return true;
}

/**
 * input输入框失去焦点检测
 */
inputBlurCheck = function(obj) {
  var checker = new DataTypeChecker();
  if(obj.datatype) {
    if(window.event) {
      var keyCode = window.event.keyCode;
      var keyChr = String.fromCharCode(window.event.keyCode);
    }
    if(obj.datatype=="int") {
      ret = checker.isInt(obj.value,obj);
      if(!ret)
        alert("必须输入整数型的值！");
      return ret;
    } else if(obj.datatype=="float") {
      ret = checker.isFloat(obj.value,obj);
      if(!ret)
        alert("必须输入浮点数型的值！");
      return ret;
    } else if(obj.datatype=="string")  {
      ret = checker.isString(obj.value);
      if(!ret)
        alert("必须输入字符串！");
      return ret;
    } else if(obj.datatype=="date") {
      ret = checker.isDate(obj);
      if(!ret)
        alert("必须按“YYYY-MM-DD”的格式输入日期值！");
      return ret;
    } else if(obj.datatype=="dateYM") {
      ret = checker.isDateYM(obj);
      if(!ret)
        alert("必须按“YYYY-MM”的格式输入日期值！");
      return ret;
    } else if(obj.datatype=="dateY") {
      ret = checker.isDateY(obj);
      if(!ret)
        alert("必须按“YYYY”的格式输入日期值！");
      return ret;
    }
  }
}

/**
 * 校验输入值的大小范围
 */
checkRange=function(obj) {
  if(obj.value=="") return true;
  var checkRange = new CheckRange();
  if(obj.datatype) {
    try{
      var keyCode = window.event.keyCode;

      if(obj.datatype=="int" || obj.datatype=="float") {
        return checkRange.checkNumber(obj);
      } else if(obj.datatype=="string") {
        return checkRange.checkString(obj);
      } else if(obj.datatype=="date") {
        return checkRange.checkDate(obj);
      } else if(obj.datatype=="dateYM") {
        return checkRange.checkDateYM(obj);
      } else if(obj.datatype=="dateY") {
        return checkRange.checkDateY(obj);
      }
    }catch(ex) {
      alert(ex.description);
      focusToObj(obj);
      return false;
    }
  }
  return true;
}

checkMaxLen=function(obj) {
  var maxLen=-1;
  if(obj.maxlength) maxLen = obj.maxlength;
  var len = (new String(obj.value)).length;
  if(len==0) return true;
  if(obj.CJKCharset && !obj.CJKCharset.toUpperCase()=="TRUE")
    len = (new String(obj.value)).actLength();
  if(maxLen>0 && len > maxLen) {
    alert("输入长度不能大于"+maxLen+"位。");
    return false;
  }
  return true;
}

checkMinLen=function(obj) {
  var minLen=-1;
  if(obj.minlength) minLen = obj.minlength;
  var len = (new String(obj.value)).length;
  if(len==0) return true;
  if(obj.CJKCharset && !obj.CJKCharset.toUpperCase()=="TRUE")
    len = (new String(obj.value)).actLength();
  if(minLen>0 && len < minLen) {
    alert("输入长度不能小于"+minLen+"位。");
    return false;
  }
  return true;
}

Checker.prototype.checkLen=function(obj, autoTruncate) {
  var minLen=-1, maxLen=-1;
  if(obj.minlength) minLen = obj.minlength;
  if(obj.maxlength) maxLen = obj.maxlength;
//  alert("minLen: "+minLen+", maxLen: "+maxLen);
  var ret = checkMinLen(obj);
  if(!ret) {
    if(autoTruncate && autoTruncate==true)
      obj.value = obj.value.substring(0, minLen);
    return false;
  }
  var ret = checkMaxLen(obj);
  if(!ret) {
    if(autoTruncate && autoTruncate==true)
      obj.value = obj.value.substring(0, maxLen);
    return false;
  }
  return true;
}

focusToObj=function(obj) {
  obj.focus();
}

hintOnErr=function(obj) {
  obj.style.backgroundColor="#FF5555"
}

errorProcess=function(obj) {
  if(obj.onerrclear) {
    if("TRUE"==obj.onerrclear.toUpperCase()) {
      obj.value = "";
    }
  }
}

var inputCtrl = {
  'input': function(element) {
    var oldOnKeyPress = element.onkeypress;
    element.onkeypress=function() {
//      /var ret = checkType(element);
      var ret = inputKeyPressCheck(element);
      if(ret==false) {
        //errorProcess(element);
        return ret;
      }
      if (element.money == "Y") change_amt(element);
      //调用原来的onkeypress事件函数
      if(oldOnKeyPress) {
        element.onkeypress=oldOnKeyPress;
        element.onkeypress();
      }
      return true;
    }
    var oldOnKeyUp = element.onkeyup;
    element.onkeyup=function() {
      if (element.money == "Y") change_amt(element);
      //调用原来的onkeypress事件函数
      if(oldOnKeyUp) {
        element.onkeyup=oldOnKeyUp;
        element.onkeyup();
      }
      return true;
    }
    var oldOnBlur = element.onblur;
    element.onblur = function() {
      //var ret = checkType(element);
      var ret = inputBlurCheck(element);
      if(ret==false) {
        errorProcess(element);
        focusToObj(element);
        return ret;
      }
      ret = checkRange(element);
      if(ret==false) {
        errorProcess(element);
        focusToObj(element);
        return ret;
      }
      ret = checkMinLen(element);
      if(ret==false) {
        focusToObj(element);
        errorProcess(element);
        return ret;
      }
      ret = checkMaxLen(element);
      if(ret==false) {
        focusToObj(element);
        errorProcess(element);
        return ret;
      }
      //调用原来的onkeypress事件函数
      if(oldOnBlur) {
        element.onblur = oldOnBlur;
        element.onblur();
      }
      return true;
    }
  },

  'textarea': function(element) {
    var oldOnKeyPress = element.onkeypress;
    element.onkeypress=function() {
      var chk = new Checker();
      ret = chk.checkLen(element, false);
      if(ret == false) return ret;

      //调用原来的onkeypress事件函数
      if(oldOnKeyPress) {
        element.onkeypress=oldOnKeyPress;
        element.onkeypress();
      }
      return true;
    }

    var oldOnKeyUp = element.onkeyup;
    element.onkeyup = function() {
      var chk = new Checker();
      ret = chk.checkLen(element, true);
      if(ret == false) return ret;

      //调用原来的onkeyup事件函数
      if(oldOnKeyUp) {
        element.onkeyup=oldOnKeyUp;
        element.onkeyup();
      }
      return true;
    }

    var oldOnPaste = element.onpaste;
    element.onpaste = function() {
      var chk = new Checker();
      ret = chk.checkLen(element, true);
      if(ret == false) return ret;

      //调用原来的onkeyup事件函数
      if(oldOnPaste) {
        element.onpaste=oldOnPaste;
        element.onpaste();
      }
      return true;
    }

    var oldOnBlur = element.onblur;
    element.onblur = function() {
      ret = checkRange(element, true);
      if(ret == false) return ret;

      //调用原来的onkeypress事件函数
      if(oldOnBlur) {
        element.onblur = oldOnBlur;
        element.onblur();
      }
      return true;
    }
  }
}
try {
	//注册上面的“js控制”
	Behaviour.register(inputCtrl);
} catch (e) {
	 
}





  /*
 * 增加千分位符
 * obj 显示出来的控件
 * chinacash 是否显示中文大写
 */
function change_amt(obj) {
var strWithQfw;//原始字符串
var strLast="";//上次输入的字符串
	var strWithoutQfw;//去掉千分位的字符串
	strWithQfw=obj.value;
	if(strWithQfw=="") {
		obj.value=""; 
		strLast="";
	}	else {	
	//去掉千分位
	strWithoutQfw=getoff_Qfw(strWithQfw);
	//添加千分位，重新显示在小写输入框中
  	strWithQfw = add_Qfw(strWithoutQfw);
   	obj.value=strWithQfw; 
    }
}

//去掉 ","
function getoff_Qfw(cash){
	if (!(cash.length == 1 && cash == "-") && isNaN(parseFloat(cash))) {
		return "";
	}
	cash = "" + cash;
    var len=cash.length;
    var ch="";
    var newCash="";
    for (var ii=0;ii<len;ii++){
        ch=cash.charAt(ii);
        if (ch!=","){newCash=newCash+ch;}
    }
    return newCash.trim();
}


//去掉 ","
function getoff_QfwNew(cash){
	if(cash==null || cash==""){
	  return 0;
	}
	if (!(cash.length == 1 && cash == "-") && isNaN(parseFloat(cash))) {
		return 0;
	}
	cash = "" + cash;
    var len=cash.length;
    var ch="";
    var newCash="";
    for (var ii=0;ii<len;ii++){
        ch=cash.charAt(ii);
        if (ch!=","){newCash=newCash+ch;}
    }
    return newCash.trim();
}

//加上","
function add_Qfw(cash) {
	if (!(cash.length == 1 && cash == "-") && isNaN(parseFloat(cash))) {
		if (cash == "-"){
		} else {
		  return "";
		}
	}
	cash = "" + cash;
    var len=cash.length;
	var cashTmp = cash;
	var fsFlag = "";
	var xsdStr = "";
    var cashNew="";//加上","的字符串
    var tt=0;//计数器，每加一个"," tt 加 1 
    var t=0;//添加","的个数

	if (cashTmp.indexOf("-") >= 0) {
		cashTmp = "" + cashTmp.substring(1,cashTmp.length);//(Math.abs(cashTmp));
		len = cashTmp.length;
		fsFlag = "-";
	} else {
		if (cashTmp.length > 0) {
			if (cashTmp.charAt(0) == "0") {
				cashTmp = "" + (Math.abs(cashTmp));
			}
		}
	}

	var dot=cashTmp.indexOf(".");
	if (dot<0) {
		dot=cashTmp.length;
	} else {
		len=(cashTmp.substring(0,dot)).length;
		xsdStr = (cashTmp.substring(dot,cashTmp.length))
	}
	if(len>3) {
    	t=(len-len%3)/3;
    } else {
    	return cash;
    }

    if(len%3 !=0)  {//个数部分长度不是3的倍数
	    for (var ii=0;ii<len;ii++)   {
				cashNew=cashNew+cashTmp.charAt(ii);
		    if (ii== (len%3+3*tt-1) &&  tt<t) {
					tt=tt+1;
		      cashNew=cashNew+",";
		    }
			}
		}	else	{//个数部分长度是3的倍数
			tt=tt+1;
	    for (var ii=0;ii<len;ii++)  {
				cashNew=cashNew+cashTmp.charAt(ii);
		    if (ii== (3*tt-1) &&  tt<t) {
					tt=tt+1;
		      cashNew=cashNew+",";
		    }
	    }		
	}
	if (cashNew.indexOf(",") == (cashNew.length - 1)) {
		cashNew = cashNew.substring(0,cashNew.length - 1);
	}
    return (fsFlag + cashNew + xsdStr).trim();
  }

 
 /**
  * 清除所有千分位的输入框
  * //getoff_Qfw
  */
 function clearQfw() {
	var inputs = document.getElementsByTagName("INPUT");
	for (var inputNo = 0 ; inputNo < inputs.length ; inputNo ++) {
		try {
			var inputTmp = inputs[inputNo];
			if (inputTmp) {
				if (inputTmp.money == "Y") {
					inputTmp.value = getoff_Qfw(inputTmp.value);
				}
			}
		} catch(e){
			alert(e);
		}
	}
}
/**
 * 给所有FORM增加上onSubmit事件
 */
function clearTheMoneyInputFlag() {
	var forms = document.getElementsByTagName("FORM");
	for (var formNo = 0 ; formNo < forms.length ; formNo ++) {
		var formTmp = forms[formNo];
		if (formTmp) {
			var _oldFormOnSubmit = formTmp.onsubmit;
			formTmp.onsubmit = function() {
		      clearQfw();
		      if(_oldFormOnSubmit) {
		        formTmp.onsubmit = _oldFormOnSubmit;
		        return formTmp.onsubmit();
		      }
		      return true;
		    }
		}
	}
}

/**
 * 验证输入框内容是否合法
 * 
 * @param obj
 * @returns {Boolean}
 */
function checkInputFunc(formObj) {
  var inputNo = formObj.elements.length;
  var checkFal = true;;
  for (var i=0; i<inputNo; i++) {
	var obj = formObj.elements[i];
	if (obj != null) {
	  if(obj.type == "text" && !obj.readOnly && !obj.disabled){
		  obj.style.backgroundColor = "";
		  var objVal = obj.value;
		  //半角转全角
		  var tszfArr=[45,60,62];
		  try{
			  obj.value=ToDBC(objVal,tszfArr);  
		  }catch(e){
			  
		  }
		  objVal=obj.value;
		  var datatype = obj.getAttribute("datatype");
		  if (datatype != null && objVal != null && objVal != "") {
			  var reg ; 
			  if (obj.getAttribute("money") == "Y") {
				  var len=objVal.length;
				  var ch="";
				  var newCash = "";
				  for (var ii=0;ii<len;ii++){
					  ch=objVal.charAt(ii);
					  if (ch!=","){newCash=newCash+ch;}
				  }
				  objVal = newCash.trim();
				  if (datatype == "int") {
				    reg = /^(-?\d+)[0-9]*$/;
				  } else if (datatype == "float") {
					reg = /^(-?\d+)(\.\d+)?$/;
				  } 
			  } else {
				  if (datatype == "date") {
					reg = /^(\d{4})-(\d{2})-(\d{2})$/;
				  } else if (datatype == "dateYM") {
					reg = /^(\d{4})-(\d{2})$/;
				  } else if (datatype == "dateY") {
					reg = /^(\d{4})$/;
				  }
			  }
			  if (reg != null) {
				  if(!reg.test(objVal)) {
					  obj.style.backgroundColor = "red";
					  checkFal = false;
				  }
			  }
			  var precision = obj.getAttribute("precision");
			  if (precision != null) {
		        var d = objVal.split(".");
		        if(d[1] && d[1].length>precision*1) {
					obj.style.backgroundColor = "red";
		        	checkFal = false;
		        }
			  }
			  var max = obj.getAttribute("max");
			  if (max != null) {
				  if (objVal * 1 > max * 1) {
					  obj.style.backgroundColor = "red";
					  checkFal = false;
				  }
			  }
			  var min = obj.getAttribute("min");
			  if (min != null) {
				  if (objVal * 1 < min * 1) {
					  obj.style.backgroundColor = "red";
					  checkFal = false;
				  }
			  }
		  }
	  }
    }
  }
  if (!checkFal) {
	  alert("输入框内容不正确，请修改。");
	  return false;
  }
  return true;
}

function checkInputFlag() {
	var forms = document.getElementsByTagName("FORM");
	for (var formNo = 0 ; formNo < forms.length ; formNo ++) {
		var formTmp = forms[formNo];
		if (formTmp) {
			var _oldFormOnSubmit = formTmp.onsubmit;
			formTmp.onsubmit = function() {
			  try {
			    var checkFlag = checkInputFunc(formTmp);
			    if (!checkFlag) {
				  return false;
			    }
			  }catch(e){}
		      clearQfw();
		      if(_oldFormOnSubmit) {
		        formTmp.onsubmit = _oldFormOnSubmit;
		        return formTmp.onsubmit();
		      }
		      return true;
		    }
		}
	}
}

//clearTheMoneyInputFlag 替换成 checkInputFlag 
if (window.addEventListener) { 
	window.addEventListener('load', checkInputFlag, false); //firefox ,chrome
} else if (window.attachEvent) { 
	window.attachEvent("onload",checkInputFlag);
} 

/**
 * 指定Form上的必录项校验
 * 参数：
 *  form:  可选，需要校验的Form对象
 *  showMsg: 可选,校验完后是否显示校验错误信息, 默认是不显示
 *  bgColor: 可选，指定校验未通过控件的背景颜色
 * 返回true或false
 *
 * 调用例子:
 * var ret = validateBeforeSubmit(); //校验页面所有控件,校验后不显示出错误信息,错误控件底色为默认的红色
 * var ret = validateBeforeSubmit(document.all.form1); //校验后不显示出错误信息,错误控件底色为默认的红色
 * var ret = validateBeforeSubmit(document.all.form1, true); //校验后显示出错误信息,错误控件底色为默认的红色
 * var ret = validateBeforeSubmit(document.all.form1, true, '#00FF00'); //校验后显示出错误信息,错误控件底色为绿色
 */
var validateMessage = "";
if(!validateBeforeSubmit) {
  function validateBeforeSubmit() {
	  alert("00000");
    var form, bgColor='#FF0000', showMsg;
    var hasError = false;
    var args = arguments;
    if(args[0]) form = args[0];
    if(args[1]) showMsg = args[1];
    if(args[2]) bgColor = args[2];

    validateMessage = "";
    var tagNames = new Array("INPUT", "textarea", "select");
    try {
      for(ii=0; ii<tagNames.length; ii++) {
        var elements = document.getElementsByTagName(tagNames[ii]);
        if(form && form.tagName && form.tagName.toUpperCase()=="FORM" && elements) {
          //通过getElementsByTagName方法取到的对象都是以数组形式存在的
          for(jj=0; jj<elements.length; jj++) {
            if(elements[jj].form!=form) {
              continue;
            }
            if(elements[jj].required){
              if(!isEmpty(elements[jj].required) && elements[jj].required.toUpperCase()=="TRUE") {
                if(isEmpty(elements[jj].value)) {
                  if(elements[jj].requiredMsg && !isEmpty(elements[jj].requiredMsg)) {
                    validateMessage += elements[jj].requiredMsg + "&";
                    //alert(elements[jj].requiredMsg);
                  }else{
                    validateMessage += "[" + elements[jj].name + "] 不能为空！" + "&";
                    //alert("[" + elements[jj].name + "] 不能为空！");
                  }
                  elements[jj].focus();
                  if(bgColor)
                    elements[jj].style.backgroundColor = bgColor;
                  hasError = true;
                }else{
                  elements[jj].style.backgroundColor = '';
                }
              }
            }
          }
        }else{
          //通过getElementsByTagName方法取到的对象都是以数组形式存在的
          for(var jj=0; jj<elements.length; jj++) {
            if(elements[jj].required){
            //alert(elements[0].name + " : " + elements[jj].required);
              if(!isEmpty(elements[jj].required) && elements[jj].required.toUpperCase()=="TRUE") {
                if(isEmpty(elements[jj].value)) {
                  if(elements[jj].requiredMsg && !isEmpty(elements[jj].requiredMsg)) {
                    validateMessage += elements[jj].requiredMsg + "&";
                    //alert(elements[jj].requiredMsg);
                  }else{
                    validateMessage += "[" + elements[jj].name + "] 不能为空！" + "&";
                    //alert("[" + elements[jj].name + "] 不能为空！");
                  }
                  elements[jj].focus();
                  if(bgColor)
                    elements[jj].style.backgroundColor = bgColor;
                  hasError = true;
                }else{
                  elements[jj].style.backgroundColor = '';
                }
              }
            }
          }
        }
      }
      if(showMsg &&  showMsg==true && validateMessage && validateMessage.length>0) {
        var temp = validateMessage.split('&');
        var msg = "";
        for(var ii=0; ii<temp.length; ii++) {
          msg += temp[ii] + "\n";
        }
        alert(msg);
      }
    }catch(e) {
      //alert(e.description);
    }
    return !hasError;
  }
}

/*
 * 全角转半角
 * */
function DBC2SB(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i); //获取当前字符的unicode编码
        if (code >= 65281 && code <= 65373)//在这个unicode编码范围中的是所有的英文字母已经各种字符
        {
            result += String.fromCharCode(str.charCodeAt(i) - 65248); //把全角字符的unicode编码转换为对应半角字符的unicode码
        } else if (code == 12288)//空格
        {
            result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}
 

function ToDBC(txtstring) {
   // txtstring = utils.html(txtstring);
    var tmp = "";
    var mark = "";/*用于判断,如果是html尖括里的标记,则不进行全角的转换*/
    for (var i = 0; i < txtstring.length; i++) {
        if (txtstring.charCodeAt(i) == 32) {
            tmp = tmp + String.fromCharCode(12288);
        }
        else if (txtstring.charCodeAt(i) < 127) {
            tmp = tmp + String.fromCharCode(txtstring.charCodeAt(i) + 65248);
        }
        else {
            tmp += txtstring.charAt(i);
        }
    }
    return tmp;
}
function ToDBC(txtstring,arr) {
	   // txtstring = utils.html(txtstring);
	var tmp = "";
	var sfstr=typeof txtstring=='string';
	if(!sfstr){
		 return txtstring
	}
    txtstring=txtstring+"";
    var paraAttr=["--"];
    var resultArr=["－－"];
    var flag=false;
    for(var i=0;i<paraAttr.length;i++){
    	while (txtstring.indexOf(paraAttr[i]) >= 0){
    		txtstring = txtstring.replace(paraAttr[i],resultArr[i]);
         }
    }
     return txtstring;
	    
	}
