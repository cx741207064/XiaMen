
var _fixIE6BugIFrames = new Array();  //用以处理在IE6以下版本浏览器中菜单被SELECT框遮挡的问题
checkBrowser = function(){
  if (window.XMLHttpRequest) { //Mozilla, Safari,...IE7
    if(!window.ActiveXObject) return "Mozilla, Safari";
    else return "IE7";
  } else return "IE6";   //IE6及以下版本
}
var _browserVersion = checkBrowser();
sfHover = function() {
  try{
  if(_browserVersion=="IE6"){
    for(var ii=0; ii<10; ii++){
      //下面这句中的src="/system/include/blank.jsp"是为了防止在https状态提示页面内容中含有不安全内容的警告
      _fixIE6BugIFrames[ii] = document.createElement("<iframe class=\"backgroundIframe\" id=\"_fixIE6BugIFrame"+ii+"\" src=\"/system/include/blank.jsp\"></iframe>");
    }
  }
  var sfEls = document.getElementById("nav").getElementsByTagName("li");
  for (var ii=0; ii<sfEls.length; ii++) {
  	sfEls[ii].onmouseover=function() {
      this.className+=" sfhover";
      if(_browserVersion=="IE6"){
        if(this.tagName=="li"){
          var el = this.firstChild;
          do{
            if(el.tagName=="ul"){
              this.appendChild( _fixIE6BugIFrames[_fixIE6BugIFrames.length - 1] );
              _fixIE6BugIFrames[_fixIE6BugIFrames.length - 1] = null;
              _fixIE6BugIFrames.length = _fixIE6BugIFrames.length - 1;
              break;
            }
          }while(el=el.nextSibling);
        }
      }
  	}
  	sfEls[ii].onmouseout=function() {
      this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
      if(_browserVersion=="IE6"){
        if(this.tagName=="li"){
          for(var ii=0; ii<this.children.length; ii++) {
            var _iframe = this.children[ii];
            if(_iframe.className=="backgroundIframe"){
              _fixIE6BugIFrames[_fixIE6BugIFrames.length] = _iframe;
              this.removeChild(_iframe);
            }
          }
        }
      }
  	}
  }
  }catch(e){}
}

if (window.attachEvent) window.attachEvent("onload", sfHover);
