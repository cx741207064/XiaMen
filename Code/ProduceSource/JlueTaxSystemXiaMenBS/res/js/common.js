//根据名称取得对象，如果同名对象有多个，则只返回第一个
function getObj(objName) {
  var obj = document.getElementById(objName);
  if(obj == null || obj == undefined)
	  obj = document.getElementsByName(objName)[0];
  return obj;
}
var sfts='1'; 
commonOnload();
//初始化
function  commonOnload(){
	//对外服务功能不提示
    try{
     if(window.parent.location.href.indexOf("dwfw")>-1){
    	 return;
     }
    }catch(e){
    	
    }
	if(sfts=='1'){
	 $.ajax({
		    url:"/common/checktjts.ashx",
			data:{tjlx:'DLXZ'},
 		method:"POST",
 		async : false,
 		success:function(data) {
 			if (data.success) {
 			} else {
 				alert(data.msg);
 				sfts='0';
 			}
 		}
     });
	}
	
}
//改变流程状态
function changeLiucheng(lcid){
	$("#"+lcid).addClass("liucheng_02");
	$("#"+lcid).addClass("h1_14w");
	$("#"+lcid).removeClass("liucheng_03");
	$("#"+lcid).removeClass("h1_14b");
}
//改变checkbox的状态
function checkChange(name, bl){
	if(bl){
		$('[name="'+name+'"]').prop('checked', 'checked');
	}else{
		$('[name="'+name+'"]').removeProp('checked');
	}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

/**
 * 根据模版自动填充数据
 * addTemplate：将模版加进来；
 * fillResult：填冲边显示数据；
 **/
var templateUtil = {
	_tpls : {},
	addTemplate : function(name){
		var target = $("[name=\""+name+"\"");
		var _html = target.prop("outerHTML");
		var _tpl = {};
		_tpl.tpl = _html;
		_tpl.parmArr = this.proccessTemplate(_html);
		_tpl.parent = target.parent();
		this._tpls[name] = _tpl; 

		_tpl.parent.html("");//移除模版
	},
	proccessTemplate : function(_html){
		var parmArr = [];
		var reg = /#\{\w*\}/igm;
		var results = _html.match(reg);
		if(results){
			for(var i = 0; i < results.length; i++){
				var item = results[i];
				item = item.replace("#{", "");
				item = item.replace("}", "");
				parmArr.push(item);
			}
		}
		return parmArr;
	},
	fillResult : function(name, data){//根据模版，填充数据
		if(this._tpls[name]){
			var datas = data;
			if(!(typeof datas.length == "number")){
				datas = new Array(data);
			}
			var innerContent = "";
			var parmArray = this._tpls[name].parmArr;
			var tpl = this._tpls[name].tpl;
			var parent = this._tpls[name].parent;
			for(var i = 0; i < datas.length; i++){
				var _html = tpl;
				var item = datas[i];
				for(var j = 0; j < parmArray.length; j++){
					var parm = parmArray[j];
					_html = _html.replace("#{"+parm+"}", item[parm]);
				}
				innerContent += _html;
			}
			parent.html("");
			parent.append(innerContent);//插入页面
			$("[name=\""+name+"\"]").show();//显示所有插入数据
		}
	}
};

//加载页面
function showPageNew(url,menu_name){
	window.location.href=url;
}
//加载界面不收缩
function showPageNew2(url,menu_name){
	window.location.href=url;
}
//三级菜单点击收缩
function showPageNew3(url,menu_name,senMenuName){
	window.location.href=url;
}
//子页面点击收缩
function showPageNew4(url,menu_name){
	window.location.href=url;
}
//三级菜单子页面点击收缩
function showPageNew5(url,menu_name){
	window.location.href=url;
}