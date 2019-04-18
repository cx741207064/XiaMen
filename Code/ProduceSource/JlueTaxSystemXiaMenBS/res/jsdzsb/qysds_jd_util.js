var DWRUtil = {
	desc:"replace temp util object",
	setValue:function(objId,val){
	  var obj = $(document.getElementById(objId));
	  if(obj == null || obj == undefined || obj.length < 1) {
		  obj = document.getElementsByName(objId)[0];
		  if (obj == null || obj == undefined) {
		  } else {
		    obj.value = val;
		  }
	  } else {
		obj.val(val);
		obj.attr('value', val);
	  }
	},
	getValue:function(objId){
		var obj = $(document.getElementById(objId));
		if(obj == null || obj == undefined || obj.length < 1) {
		  obj = document.getElementsByName(objId)[0];
		  if (obj == null || obj == undefined) {
		  } else {
		    return obj.value;
		  }
		} else {
		  return obj.val();
		}
		return "";
	},
	getObjBy_Ids:function(objId){
		var obj = $(document.getElementById(objId));
		if(obj == null || obj == undefined || obj.length < 1) {
		  obj = document.getElementsByName(objId)[0];
		  if (obj == null || obj == undefined) {
		  } else {
		    return obj;
		  }
		} else {
		  return obj;
		}
	},
	hasObjBy_Ids:function(objId){
		var obj = $(document.getElementById(objId));
		if(obj == null || obj == undefined || obj.length < 1) {
		  obj = document.getElementsByName(objId)[0];
		}
		return !(obj == null || obj == undefined);
	},
	focusByIds:function(objId){
		var obj = $(document.getElementById(objId));
		if(obj == null || obj == undefined || obj.length < 1) {
		  obj = document.getElementsByName(objId)[0];
		}
		if(obj == null || obj == undefined) {
		} else {
			obj.focus();
		}
	}
}
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
 }
 String.prototype.ltrim=function(){
    return this.replace(/(^\s*)/g,"");
 }
 String.prototype.rtrim=function(){
    return this.replace(/(\s*$)/g,"");
 } 