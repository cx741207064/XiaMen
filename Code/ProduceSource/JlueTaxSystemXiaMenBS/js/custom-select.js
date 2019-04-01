/**
 * select下拉框初始化
 * selectid:对应select的id
 * obj：json对象
 * value:初始化值
 * kb:是否有空白选项  true是，false否
 */
function onInitSelect(selectid,obj,value,kb){
	$(selectid).empty();
	
	if(kb==true){
		$(selectid).append("<option value=''></option>");
	}
	var strs= new Array(); //定义一数组 
	if(value!=null){
		strs=value.split(",");		
		for (var i = 0; i < obj.length; i++) {
			var flag="0";
			for ( var int = 0; int < strs.length; int++) {
				if(strs[int] && strs[int] == obj[i].id){
					flag="1";
				}
			}
			if(flag=="1"){
				
				$(selectid).append("<option value=" + obj[i].id + " selected='selected'>" + obj[i].text + "</option>");
			}else {
				$(selectid).append("<option value=" + obj[i].id + ">" + obj[i].text + "</option>");
			}	    
		}
	}else{
		for (var i = 0; i < obj.length; i++) {
			$(selectid).append("<option value=" + obj[i].id + ">" + obj[i].text + "</option>");
		}		
	}	
	
	$(selectid).selectpicker('refresh');
}
function onInitSelectMultiple(selectid,obj,value,kb){
	$(selectid).empty();
	if(kb==true){
		$(selectid).append("<option value=''></option>");
	}
	
	for (var i = 0; i < obj.length; i++) {
		if(value && value == obj[i].id){
			$(selectid).append("<option value=" + obj[i].id + " selected='selected'>" + obj[i].text + "</option>");
		}else {
			$(selectid).append("<option value=" + obj[i].id + ">" + obj[i].text + "</option>");
		}	    
	}
	$(selectid).selectpicker('refresh');
};

/**
 * 
 * @param selectid 对应select的id
 * @param objP 父级数据对象 格式：{"id":"父级key","text":"子级id1,子级id1....,子级idn"}
 * @param objC 子级数据对象
 * @param value 值
 * @param kb 是否显示空白
 */
function onInitSelectGroup(selectid,objP,objC,value,kb){
	$(selectid).empty();
	if(kb==true){
		$(selectid).append("<option value=''></option>");
	}
	for (var i = 0; i < objP.length; i++) {
		var str = "";
		var arr = objP[i].text.split(",");
		for (var k = 0; k < arr.length; k++) {
			for (var j = 0; j < objC.length; j++) {
				if(arr[k] == objC[j].id){
					if(value && value == objC[j].id){
						str += "<option value=" + objC[j].id + " selected='selected'>" + objC[j].text + "</option>";
					}else{
						str += "<option value=" + objC[j].id + ">" + objC[j].text + "</option>";
					}
					break;
				}
			}
		}
		$(selectid).append("<optgroup label="+objP[i].id+">"+str+"</optgroup>");
	}
	$(selectid).selectpicker('refresh');
};

/**
 * select下拉框过滤初始化
 * selectid:对应select的id
 * obj：json对象
 * value:初始化值
 * kb:是否有空白选项  true是，false否
 * suzu：显示的数组
 */
function onInitSelectScreen(selectid,obj,value,kb,suzu){
	$(selectid).empty();
	if(kb==true){
		$(selectid).append("<option value=''></option>");
	}
	for (var i = 0; i < obj.length; i++) {
		for ( var int = 0; int < suzu.length; int++) {
			if(suzu[int]==obj[i].id){
				$(selectid).append("<option value=" + obj[i].id + ">" + obj[i].text + "</option>");
			}
		}
	    
	}
	$(selectid).val(value);
	/*$(selectid).selectpicker({
		noneSelectedText : '===请选择==='
	});*/
	$(selectid).selectpicker('refresh');
};
//下拉框改变事件
/**
 * select下拉框初始化
 * selectid:对应select的id
 * source：数据来源id
 * target:true-赋值value，false-赋值text
 */
function onSelectChange(selectid,target,flag){
	$(selectid).on('change',function () {//加载下拉框点击事件
		if(flag){
			$(target).val($(selectid).val());
		}else{
			$(target).val($(selectid).find("option:selected").text());
		}
		
	});
	$(selectid).selectpicker('refresh');
}


