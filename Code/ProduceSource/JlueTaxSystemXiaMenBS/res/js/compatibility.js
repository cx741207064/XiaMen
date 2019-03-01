
function brower(){
	var agent = navigator.userAgent;
	var isOpera = agent.indexOf("Opera") > -1;
	var isIE = agent.indexOf("compatible") > -1 && agent.indexOf("MSIE") > -1 && !isOpera;
	var isFF = agent.indexOf("Firefox") > -1;
	var isSafari = agent.indexOf("Safari") > -1;
	
	if(isIE){
		var a = agent.replace(/[ ]/g, "");
		if(a.indexOf("MSIE6.0") > -1){
			return "IE6";
		} else if(a.indexOf("MSIE7.0") > -1){
			return "IE7";
		} else if(a.indexOf("MSIE8.0") > -1){
			return "IE8";
		} else if(a.indexOf("MSIE9.0") > -1){
			return "IE9";
		} else if(a.indexOf("MSIE10.0") > -1){
			return "IE10";
		} else if(a.indexOf("MSIE11.0") > -1){
			return "IE11";
		} else {
			return "IE";
		}
	} else if(isOpera){
		return "Opera";
	} else if(isFF){
		return "FireFox";
	} else if(isSafari){
		return "Safari";
	} else {
		return "other";
	}
}

function checkBrower() {
	var info = brower();
	
	if("IE8,IE9,IE10,IE11".indexOf(info) < 0) {
		/*alert("检测到您使用的浏览器与网站可能存在兼容性问题,\n建议使用IE8及以上版本浏览器");*/
	}
}

function rframeAutoHeight(){
	var parentFrame = parent.document.getElementById("mainFrame");
	var currentFrame = parentFrame.contentWindow.document.getElementById("rightFrame");
	var d = null;
	try{
		d = currentFrame.contentWindow.document;
	}catch (e) {
	}
	if(d){
		var contentUl = d.getElementsByTagName("ul")[0];
		var height = 300;
		var minHeight = 300;
		if(contentUl){
			height = contentUl.scrollHeight + 10;
		} else {
			height = currentFrame.contentWindow.document.body.scrollHeight + 10;
		}
		height = height < minHeight ? minHeight : height;
		currentFrame.height = height;
	}
	parentFrame.height = parentFrame.contentWindow.document.body.scrollHeight + 10;
	
}

function r1frameAutoHeight(){
	var parentFrame = parent.document.getElementById("mainFrame");
	var currentFrame = parentFrame.contentWindow.document.getElementById("rFrame");
	var d = null;
	try{
		d = currentFrame.contentWindow.document;
	}catch (e) {
	}
	if(d){
		var contentUl = d.getElementsByTagName("ul")[0];
		var height = 300;
		var minHeight = 300;
		if(contentUl){
			height = contentUl.scrollHeight + 10;
		} else {
			height = currentFrame.contentWindow.document.body.scrollHeight + 10;
		}
		height = height < minHeight ? minHeight : height;
		currentFrame.height = height;
	}
	parentFrame.height = parentFrame.contentWindow.document.body.scrollHeight + 10;
}
