function showOverlay(){
	$("#overlay").height(pageHeight());
	$("#overlay").width(pageWidth());
	$("#overlay").fadeTo(200,0.2);
	$("#tipDialog").show();
}

function hideOverlay(){
	$("#overlay").fadeOut(200);
	$("#tipDialog").hide();
}

function pageHeight(){
	return document.body.scrollHeight;
}

function pageWidth(){
	return document.body.scrollWidth;
}

function adjust(id){
	var w = $(id).width();
	var h = $(id).height();

	var t = scrollY() + (windowHeight()/2) - (h/2);
	if(t<0) t = 0;
	
	var l = scrollX() + (windowWidth()/2) - (w/2);
	if(l<0) l = 0;
	
	$(id).css({left:1+'px',top:1+'px'});
}


function windowHeight(){
	var de = document.documentElement;
	return self.innerHeight || (de&&de.clientHeight)||document.body.clientHeight;
}

function windowWidth(){
	var de = document.documentElement;
	return self.innerWidth || (de&&de.clientWidth)||document.body.clientWidth;
}


function scrollY(){
	var de = document.documentElement;
	return self.pageYOffset || (de&&de.scrollTop)||document.body.scrollTop;
}

function scrollX(){
	var de = document.documentElement;
	return selft.pageXOffset || (de&&de.scrollLeft)||document.body.scrollLeft;
}

//菜单高度重置大小
function resizeDiv(){
	var leftWindow = $("#leftFrame")[0].contentWindow;
	var winHeight = $(window).height();
	var divCount = leftWindow.$(".nav-tow").size();
	var divTextHeight = leftWindow.$(".navone-text a").css("line-height");
	var divHeight = parseInt(winHeight)-parseInt(divTextHeight)*parseInt(divCount);
	leftWindow.$(".nav-tow").each(function(i){
		$(this).css({height:divHeight,overflow:"auto"});
	});
}