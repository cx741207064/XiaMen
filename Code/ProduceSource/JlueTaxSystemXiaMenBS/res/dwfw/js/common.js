	
//定义网站基本属性
var Cfg={
  siteURL:"http://www.xm-l-tax.gov.cn/",
  searchBaseUrl:"http://ai.xm-l-tax.gov.cn/aiconsult/self/index.do?_pltfm=01&_channel=0103",
  intelligentServiceUrl:"http://xmtax.m1.ontotext.cn/api/relate?q="

}

//网站信息
var site={
  
  site_header:function(){
  
  },
  site_footer:function(){
  
  
  }
}
	

/**
 * 初始化通用TAB切换
 * tabs：要切换的tab数组；
 * isAutoPlay：是否自动切换tab；
 * timer：全局定时器句柄；
 * tabsName：全局的tabs数组名称；
 * */
var initTab = function(tabs){
	var isAutoPlay;
	var timer;
	var tabsName;
	if(arguments.length == 4){
		isAutoPlay = arguments[1];
		timer = arguments[2];
		tabsName = arguments[3];
	}
	  //切换tab
	  var changeTab = function(event){
	    var current = CommonUtil.getEventTarget(event,"id");
	    for(var i = 0 ;i<tabs.length ;i++){
	      var div = document.getElementById(tabs[i].div);
	      var tab = document.getElementById(tabs[i].tab);
	      if(tabs[i].tab == current){
	        div.style.display = "block";
	        tab.className = "tabhover";
	      }
	      else{
	        div.style.display = "none";
	        tab.className = "";
	      }
	    }
	  }
	  var startAutoPlay = function(){
		  if(isAutoPlay && timer == null){
			  timer = window.setInterval("CommonUtil.autoPlayTabs("+tabsName+")",2000);
			  CommonUtil.tabTimers[tabsName] = timer; 
		  }
	  }
	  var stopAutoPlay = function(){
		  if(isAutoPlay && timer != null){
	    		window.clearInterval(timer);
	    		timer = null;
	      }
	  }
	  //绑定切换、自动切换
	  for(var i = 0 ;i<tabs.length ;i++){
	    var tabid = tabs[i].tab;
	    var divid = tabs[i].div;
	    var tab = document.getElementById(tabid);
	    var div = document.getElementById(divid);
	    if(tab){
	    	tab.onmouseover = function(event){
		    	var event = event || window.event;//ie/firefox
		    	//自动切换tab
		    	stopAutoPlay();
		    	//手动切换tab
		    	changeTab(event);
		    };
		    tab.onmouseout = function(event){
		    	startAutoPlay();
		    };
	    }
	    if(div){
	    	  div.onmousemove = function(event){
	  	    	stopAutoPlay();
	  	    };
	  	    div.onmouseout = function(event){
	  	    	startAutoPlay();
	  	    };
	    }
	  
	  }
	  startAutoPlay();
}


var CommonUtil = {
	//获取触发event的元素属性值（兼容不同浏览器）
	getEventTarget : function (event,name){
		if(event.target)//chrome
			return event.target[name];
		else if(event.srcElement)//ie
			return event.srcElement[name];
	},
	//切换图片（公众参与）
	toggleTab : function(id){
		var elem = document.getElementById(id);
		if(elem != null){
			if(elem.style.display == "none"){
				elem.style.display = "block";
				var ulElem = document.getElementById("ul_"+id);
				if(typeof ulElem != "undefined" ){
					var lis = ulElem.getElementsByTagName("li");
					if(lis.length == 0)
						elem.style.height = 0;
				}
			}else
				elem.style.display = "none"
		}
	},
	//切换至下一个tab
	autoPlayTabs : function(tabs){
		var currentTab = -1;
		for(var i = 0; i<tabs.length; i++){
			var tabid = tabs[i].tab;
			var divid = tabs[i].div;
			var tab = document.getElementById(tabid);
			var div = document.getElementById(divid);
			if(tab && tab.className == "tabhover")
				if(div && div.style.display != "none"){
					currentTab = i;
					tab.className = "";
					div.style.display = "none";
					break;
				}
		}
		if(currentTab == -1)
			currentTab = 0;
		if(((currentTab+1)%tabs.length) == 0)
			currentTab = 0;
		else 
			currentTab = currentTab + 1;
		var currentTabElm = document.getElementById(tabs[currentTab].tab);
		var currentDivElm = document.getElementById(tabs[currentTab].div);
		if(currentTabElm && currentDivElm){
			currentTabElm.className = "tabhover";
			currentDivElm.style.display = "block";
		}
	},
	ajax : function(url,method,params,success){
		var xmlhttp;
		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		}else{// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
		  if (xmlhttp.readyState==4 && xmlhttp.status==200){
			  success(xmlhttp.responseText);
		  }
		}
		xmlhttp.open(method,url);
		if("POST" == method)
			xmlhttp.send(params);
		else
			xmlhttp.send();
	},
	doScript : function(htmlString){
	    var reg = /<script[^>]*>[\s\S]*?<\/[^>]*script>/gi;   
	    var match = htmlString.match(reg);
	    for(var i = 0; i<match.length; i++){
	    	var _script = match[i];
	    	var starScriptReg = /<script[^>]*>/gi;
	    	var starScriptMath = _script.match(starScriptReg);
	    	_script = _script.replace(starScriptMath[0],"");
	    	var endScriptReg = /<\/[^>]*script>/gi;
	    	var endScriptMath = _script.match(endScriptReg);
	    	_script = _script.replace(endScriptMath[0],"");
	    	
	    	var scriptTag = document.createElement("script");
	    	scriptTag.text = _script;
	    	document.getElementById("index_main").appendChild(scriptTag);
	    }
	},
	tabTimers : {}
}


//显示底部导航div
function show_nav_div(id){
	for(i=2;i<7;i++){
		 if(id==i){
			 	if(document.getElementById('div_dh_' + id).style.display=='none'){
		   			document.getElementById('dh_menu_' + id).className='ul_links_li_xz';
		    		document.getElementById('div_dh_' + id).style.display='';
				}
		 }else{
			 document.getElementById('dh_menu_' + i).className='ul_links_li_qx';
			 document.getElementById('div_dh_' + i).style.display='none';
		 }
	 }
		 
}
	
//一级菜单切换
function overMenuTab(ID){
	for(i=0;i<5;i++){
		 if(ID==i){
			 document.getElementById('menus_' + ID).className='zkw_title_on';
			 document.getElementById('menus_top_' + ID).style.display='';
			 if(typeof changePageContent != "undefined")
				 changePageContent(ID);
		 }else{
			 document.getElementById('menus_' + i).className='zkw_title';
			 document.getElementById('menus_top_' + i).style.display='none';
		 }
	 }
}
	
	
//服务对象快速入口
function fwdxksrk(){
	if(document.getElementById('ul-ksrk').style.display=='none'){
		document.getElementById('ul-ksrk' ).style.display='';
	}else{
	 document.getElementById('ul-ksrk' ).style.display='none';
	}	
}

//放大缩小
function doZoom(size){
	var className = "content_middle";
	if(10 == size || 1 == size)
		className = "content_small";
	else if(11 == size || 2 == size)
		className = "content_middle";
	else if(14 == size || 3 == size)
		className = "content_large";
	
	document.getElementById('fontzoom').className=className;
}

//过滤字符串前后的空格
String.prototype.trim = function() {
  return this.replace(/(^\s*)|(\s*$)/g, "");
}


/**
 * 停机
 */
function JsTjdlXz( tjlx) { 
	 var flag=false;
	 $.ajax({
		    url:"/dwfw/commonAjaxTjxz.do",
			data:{tjlx:tjlx},
    		method:"POST",
    		async : false,
    		success:function(data) {
    			if (data.success) {
    			    flag=true;
    			} else {
    				alert(data.msg);
    				flag=false;
    			}
    		}
        });
	  return flag;
}

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