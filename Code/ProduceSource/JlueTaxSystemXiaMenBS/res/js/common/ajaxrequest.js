/**
 * Ajax请求类
 *
 * 类名：AJAX
 *
 * 创建方法：var ajaxobj=new AJAX();，如果创建失败则返回false
 * 属性：method   - 请求方法，字符串，POST或者GET，默认为POST
 * 　　　url      - 请求URL，字符串，默认为空
 * 　　　async    - 是否异步，true为异步，false为同步，默认为true
 * 　　　content  - 请求的内容，如果请求方法为POST需要设定此属性，默认为空
 * 　　　callback - 回调函数，即返回响应内容时调用的函数，默认为直接返回，
 *                 回调函数有一个参数为XMLHttpRequest对象，即定义回调函数时要这样：function mycallback(xmlobj)
 *
 * 方法：send()     -  发送请求，无参数
 *
 * 一个例子：
 * <script type="text/javascript" src="ajaxrequest.js"></script>
 * <script type="text/javascript">
 * var ajaxobj=new AJAXRequest();    // 创建AJAX对象
 * ajaxobj.method="GET";   // 设置请求方式为GET
 * ajaxobj.url="default.asp"  // URL为default.asp
 * // 设置回调函数，输出响应内容
 * ajaxobj.callback=function(xmlobj) {
 *   document.write(xmlobj.responseText);
 * }
 * ajaxobj.send();    // 发送请求
 * </script>
 */
function AJAXRequest() {
	var xmlObj = false;
	var CBfunc,ObjSelf;
	ObjSelf=this;
	this.method="POST";
	this.url;
	this.async=true;
	this.content="";

  /*初始化XMLHTTP对象*/
  this.init=function() {
    if(xmlObj) return;
    try {
      xmlObj=new XMLHttpRequest();  //这是支持FireFox的方式
    }catch(e) {
      try { xmlObj=new ActiveXObject("Microsoft.XMLHTTP"); }
      catch(e2) {
        try { xmlObj=new ActiveXObject("MSXML2.XMLHTTP"); }
        catch(e3) { xmlObj=false; }
      }
    }
  }
  this.init();
	if (!xmlObj) return false;

  /*xmlObj状态改变时回调函数*/
  xmlObj.onreadystatechange=function() {
   //alert('onreadystatechange: '+xmlObj.readyState);
    if(xmlObj && xmlObj.readyState==4) {
      if(xmlObj.status==200) { ObjSelf.callback(xmlObj);}
      return xmlObj.status;
    }
  }

  /**回调函数*/
	this.callback=function(cbobj) {return;}

	/*发送HTTP请求的函数*/
  this.send=function() {
		if(this.method==null || this.url==null || this.async==null) return false;
    xmlObj.open (this.method, this.url, this.async);
		if(this.method=="POST") xmlObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		if(this.method=="POST")
      xmlObj.send(this.content);
		else
      xmlObj.send(null);

    try{
      this.callback(xmlObj);
    }catch(exception){
      throw exception;
    }
	}

  /**销毁XMLHTTP对象*/
  this.destory = function() {
    xmlObj = null;
    ObjSelf = null;
  }
}
