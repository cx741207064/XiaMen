//浮动信息层控制脚本，主要用于错误信息提示和其他需要以层显示的信息
function FloatMsgLayer(id, msg) {
  this.currentMoveObj = null;    //当前拖动对象
  this.layerRelLeft;    //鼠标按下位置相对对象位置
  this.layerRelTop;
  this.tipWidth=400;    //浮动层宽度
  this.tipHeight=100;   //浮动层高度
  this.id;              //浮动层ID
  this.msg;             //浮动层要显示的信息，如果信息为空，则不显示浮动层

  if(id!=null) this.id=id;
  if(msg!=null) this.msg = msg;

  this.setId = function(id) {
    this.id = id;
  }
  this.setMsg = function(msg) {
    this.msg = msg;
  }

  this.layerMouseDown = function(obj){
    //currentMoveObj = obj;        //当对象被按下时，记录该对象
    this.currentMoveObj = document.all.errLayer;        //当对象被按下时，记录该对象
    this.currentMoveObj.style.position = "absolute";
    layerRelLeft = event.x - this.currentMoveObj.style.pixelLeft;
    layerRelTop = event.y - this.currentMoveObj.style.pixelTop;
  }
  this.winmouseup = window.document.onmouseup();
  window.document.onmouseup = function(){
    if(typeof(this.winmouseup)=="object" && this.winmouseup) this.winmouseup();
    this.currentMoveObj = null;    //当鼠标释放时同时释放拖动对象
    window.document.onmouseup = this.winmouseup();
    this.winmouseup = null;
  }
  this.layerMouseMove = function(obj){
    if(this.currentMoveObj != null) {
      this.currentMoveObj.style.pixelLeft=event.x - layerRelLeft;
      this.currentMoveObj.style.pixelTop=event.y - layerRelTop;
    }
  }

  this.showMsgLayer = function() {
    if(!this.msg || this.msg=="") return;
    var doc_width=document.body.clientWidth;
    var doc_height=document.body.clientHeight;
    var left = (doc_width - tipWidth) / 2;
    var top = (doc_height - tipHeight) / 2;
    var inHTML = "<table width=\""+tipWidth+"\" cellspacing=\"0\" cellpadding=\"0\" onselectstart=\"return false\" ";
    inHTML += "onmousedown=\"layerMouseDown(this)\" onmousemove=\"layerMouseMove(this)\" title=\"按住鼠标不放可以拖动\">";
    inHTML += "<tr class=\"title\">";
    inHTML += "<td width=\"99%\" style=\"cursor: move\"><font style=\"color: white; font-weight: bold\">※ 发生错误!</font></td>";
    inHTML += "<td><input type=\"button\" name=\"btnClose\" value=\"╳\" title=\"关 闭\"";
    inHTML += "style=\"font-size: 9pt; font-weight: bold; text-valign: middle\" ";
    inHTML += "onClick=\"document.all.errLayer.style.display='none'\"></td>";
    inHTML += "</tr>";
    inHTML += "<tr><td colspan=\"2\" style=\"width: 90%; text-align: center; color: red; font-weight: bold\">";
    inHTML += "<br>"+msg+"<br><br>";
    inHTML += "</td></tr><table>";
    var layerHtml = "<div id=\""+id+"\" ondblclick=\"this.style.display='none'\" style=\"position: absolute; left: "+left+"; top: "+top+"; width: "+tipWidth+"; height: "+tipHeight+"; z-index: 999\">";
    var msgBox = document.createElement(layerHtml);
    msgBox.innerHTML = inHTML;
    msgBox.style.textAlign 	   = "center";
    msgBox.style.verticalAlign = "middle";
    msgBox.style.position 	   = "absolute";
    msgBox.style.border 	     = "1 solid #999999";
    msgBox.style.backgroundColor = "#EEEEEE";
    document.body.appendChild(msgBox);
  }
}
