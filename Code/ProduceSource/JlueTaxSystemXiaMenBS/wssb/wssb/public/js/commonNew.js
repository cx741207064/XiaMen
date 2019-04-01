var objTBY;

//如果输入对象的VALUE等于空字符的话，就取零值付回去
function xyvalue(obj){
	if (obj.value=="")
	{
		obj.value="0.00";
		return "0.00";
	}else{
        unformatCurrency(obj);
        var value=obj.value;
		formatCurrency(obj);
		return value;
	}
}

//返回税率的实际数值
function xyslvalue(obj){
	formatSl(obj);
	var value=obj.value;
	transSl(obj);
	return value;
}

/*****************************************************************
*  purpose: 当输入回车键时触发
*  
*****************************************************************/
function doOnKeyDown() {
	var event=window.event||arguments.callee.caller.arguments[0];
	if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
		
		if(event.keyCode == 13 && window.event.srcElement.tagName.toLowerCase() != "textarea") {
			event.keyCode = 9;
		}
	}else{
	        
			if(event.keyCode == 13 && event.target.tagName.toLowerCase() != "textarea") {
				event.keyCode = 9;
			}
		}
	
	
}

/*****************************************************************
*  purpose: 当输入CTRL+INSERT或者CTRL+DELETE时触发
*  
*****************************************************************/
function  keyDownInsert(){
	var event=window.event||arguments.callee.caller.arguments[0];
	if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
	if(event.ctrlKey){
		if(event.keyCode == 45){		//CTRL+INSERT:增行
			addRow_xh();
		}
		else if(event.keyCode == 46){	//CTRL+DELETE:删行
			delRow_xh();
		}
	}
	}else{
		
			if(event.ctrlKey){
				if(event.keyCode == 45){		//CTRL+INSERT:增行
					addRow_xh();
				}
				else if(event.keyCode == 46){	//CTRL+DELETE:删行
					delRow_xh();
				}
			}
		}
	
}

/*****************************************************************
*  purpose: 在选中的表中增加一行
*  
*****************************************************************/
function addRow(){
	var oRow;		//行（TR）对象
	var oCell;		//单元（TD）对象
	if((objTBY == null) || (nTbyRowNo < 0)){
		alert("请先选中需要增行的位置");
		return -1;
	}
	else{
		oRow = objTBY.insertRow(nTbyRowNo+1);
	}
	var nColspan = 1;
	var nAlign="";
	var ncalss="";
	if(typeof window.event!= 'undefined'&&!!(window.attachEvent)){
	//edit by zhonggc,20060907,从表中第0行取单元,改为从选择行取单员
	for(var i=0;i<objTBY.rows(nTbyRowNo).cells.length;i++){
		oCell =	oRow.insertCell();
		//nColspan = objTBY.rows(0).cells(i).colSpan;
		nColspan = objTBY.rows(nTbyRowNo).cells(i).colSpan;
		//nAlign = objTBY.rows(0).cells(i).align;
		nAlign = objTBY.rows(nTbyRowNo).cells(i).align;
		oCell.colSpan = nColspan;
	  //	oCell.innerHTML = objTBY.rows(0).cells(i).innerHTML;
		oCell.innerHTML = objTBY.rows(nTbyRowNo).cells(i).innerHTML;

		oCell.align=nAlign;
		clearAreaValue(oCell,"");
	}
	
	var addRowNo = nTbyRowNo; //用于计算“序号”的值
	var obj = objTBY.childNodes(nTbyRowNo+1).childNodes(nCellNo).childNodes(0);
	contentready();
	obj.select();
	obj.focus() ; //将光标下移一行
	}else{
		for(var i=0;i<objTBY.rows[nTbyRowNo].cells.length;i++){
			
			oCell =	oRow.insertCell(i);
			//nColspan = objTBY.rows(0).cells(i).colSpan;
			nColspan = objTBY.rows[nTbyRowNo].cells[i].colSpan;
			//nAlign = objTBY.rows(0).cells(i).align;
			nAlign = objTBY.rows[nTbyRowNo].cells[i].align;
			oCell.colSpan = nColspan;
		  //	oCell.innerHTML = objTBY.rows(0).cells(i).innerHTML;
			oCell.innerHTML = objTBY.rows[nTbyRowNo].cells[i].innerHTML;

			oCell.align=nAlign;
			clearAreaValue(oCell,"");
		}
		
		var addRowNo = nTbyRowNo; //用于计算“序号”的值
		var obj = objTBY.rows[nTbyRowNo+1].cells[nCellNo].childNodes[0];
		contentready();
		//obj.select();
		//obj.focus() ; //将光标下移一行
	}
	return addRowNo;
}

/**
 * 原本的增行函数addRow()是对IE及其他浏览器进行区分处理，但是在IE10的时候，表格函数使用()进行调用会出现缺少函数的问题
 * 经测试，IE也可以直接跟其他浏览器一样，使用[]进行下标的获取单元格对象，未不影响其他模块功能，这边新建一个方法以供调用
 * 
 * 该方法不对浏览器进行区分处理
 * 
 * add by zhiweiHuang 20180206
 *
 * 20180323先把代码上传以供年报开发使用 note by zhiweiHuang 20180323
 * @return
 */
function addRowWithoutCheckBrowserV(){
	
	/**
	 * 行（TR）对象
	 */
	var oRow;
	/**
	 * 单元（TD）对象
	 */
	var oCell;
	var nColspan = 1;
	var nAlign = "";
	var ncalss = "";
	if(objTBY == null || nTbyRowNo < 0)
	{
		alert("请先选中需要增行的位置");
		return -1;
	}
	else
	{
		oRow = objTBY.insertRow(nTbyRowNo+1);
	}
	
	var index = 0;
	for(var i = 0; i < objTBY.rows[nTbyRowNo].cells.length; i++)
	{
		/**
		 * 如果单元格是属于rowspan的话，就不复制
		 * 
		 * note by zhiweiHuang 20180323
		 */
		if(objTBY.rows[nTbyRowNo].cells[i].rowSpan == 1)
		{
			oCell =	oRow.insertCell(index++);
			oCell.colSpan = objTBY.rows[nTbyRowNo].cells[i].colSpan;
			oCell.width = objTBY.rows[nTbyRowNo].cells[i].width;
			oCell.align = objTBY.rows[nTbyRowNo].cells[i].align;
			oCell.style.display = objTBY.rows[nTbyRowNo].cells[i].style.display;
			oCell.innerHTML = objTBY.rows[nTbyRowNo].cells[i].innerHTML;
			oCell.className = objTBY.rows[nTbyRowNo].cells[i].className;
			
			clearAreaValue(oCell, "");
		}
	}
	
	/**
	 * 用于计算“序号”的值
	 */
	var addRowNo = nTbyRowNo;
	contentready();
	
	/**
	 * 先判断是否支持select方法
	 */
	var canSelectObj = getObjCanSelectInCell(objTBY.childNodes[nTbyRowNo+1].childNodes[nCellNo]);
	if(canSelectObj)
	{
		/**
		 * 将光标下移一行
		 */
		canSelectObj.select();
		canSelectObj.focus(); 
	}
	
	return addRowNo;
}

/**
 * 从cell单元格里面，递归查找可以select的子节点
 * add by zhiweiHuang 20170408
 * @return
 */
function getObjCanSelectInCell(obj)
{
	if(obj == null || typeof obj.select != 'undefined')
	{
		return obj;
	}
	
	var currentCellChildNodesObj = obj.childNodes;
	for(var z = 0; z < currentCellChildNodesObj.length; z++)
	{
		//判断当前子节点是否有select的方法；若有，返回该节点
		if(typeof currentCellChildNodesObj[z].select != 'undefined')
		{
			return currentCellChildNodesObj[z];
		}
		else
		{
			return getObjCanSelectInCell(currentCellChildNodesObj[z]);
		}
	}
}

/**
 * 对复杂的单元格进行增行
 * 与原先addRow的区别是，在对cell里面的子节点进行selcct的时候，进行function相关的判断
 * 
 * 当前应用的页面：企业所得税年报A类《境外所得纳税调整后所得明细表》
 * 
 * add by zhiweiHuang 20170408
 * @return
 */
function addRowForMultiCell(){
	var oRow;		//行（TR）对象
	var oCell;		//单元（TD）对象
	if((objTBY == null) || (nTbyRowNo < 0)){
		alert("请先选中需要增行的位置");
		return -1;
	}
	else{
		oRow = objTBY.insertRow(nTbyRowNo+1);
	}
	var nColspan = 1;
	var nAlign="";
	var ncalss="";
	if(typeof window.event!= 'undefined'&&!!(window.attachEvent)){
		for(var i=0;i<objTBY.rows(nTbyRowNo).cells.length;i++){
			oCell =	oRow.insertCell();
			nColspan = objTBY.rows(nTbyRowNo).cells(i).colSpan;
			nAlign = objTBY.rows(nTbyRowNo).cells(i).align;
			oCell.colSpan = nColspan;
			oCell.innerHTML = objTBY.rows(nTbyRowNo).cells(i).innerHTML;
			
			oCell.align=nAlign;
			clearAreaValue(oCell,"");
		}
		
		var addRowNo = nTbyRowNo; //用于计算“序号”的值
		contentready();
		
		//对新增的行进行选择
		var canSelectObj = getObjCanSelectInCell(objTBY.childNodes(nTbyRowNo+1).childNodes(nCellNo));
		if(canSelectObj)
		{
			//将光标下移一行
			canSelectObj.select();
			canSelectObj.focus(); 
		}
	}else{
		for(var i=0;i<objTBY.rows[nTbyRowNo].cells.length;i++){
			
			oCell =	oRow.insertCell(i);
			nColspan = objTBY.rows[nTbyRowNo].cells[i].colSpan;
			nAlign = objTBY.rows[nTbyRowNo].cells[i].align;
			oCell.colSpan = nColspan;
			oCell.innerHTML = objTBY.rows[nTbyRowNo].cells[i].innerHTML;
			
			oCell.align=nAlign;
			clearAreaValue(oCell,"");
		}
		
		var addRowNo = nTbyRowNo; //用于计算“序号”的值
		var obj = objTBY.rows[nTbyRowNo+1].cells[nCellNo].childNodes[0];
		contentready();
	}
	return addRowNo;
}

/*****************************************************************
*  purpose: 在选中的表中删除一行
*  
*****************************************************************/
function delRow(){	
	if((objTBY == null) || (nTbyRowNo < 0)){
		alert("请先选中需要删除的行");
		return -1;
	}
	if(objTBY.rows.length == 1) {
		if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
		clearAreaValue(objTBY.rows(0),"");}
		else{
			clearAreaValue(objTBY.rows[0],"");
		}
	}
	else {
		objTBY.deleteRow(nTbyRowNo);
	}
	var delRowNo = nTbyRowNo; //用于在“案卷目录”文书中计算“序号”的值
	if(nTbyRowNo == objTBY.rows.length){
		if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
		var obj = objTBY.childNodes(nTbyRowNo-1).childNodes(nCellNo).childNodes(0);
		}else{
			 var ele=$("input[name='XH']");
			 $.each(ele,function(i,val){
			    	$(this).val(i+1);
			    });
		//	var obj = objTBY.childNodes[nTbyRowNo-1].childNodes[nCellNo].childNodes[0];
		}
	}
	else{
		if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
		var obj = objTBY.childNodes(nTbyRowNo).childNodes(nCellNo).childNodes(0);}
		else{
			var obj = objTBY.rows[nTbyRowNo].cells[nCellNo].childNodes[0];
			var ele=$("input[name='XH']");
			 $.each(ele,function(i,val){
			    	$(this).val(i+1);
			    });
		}
	}
	//obj.focus();  //光标位置保持不变
	return delRowNo;
}

/**
 * 原本的增行函数delRow()是对IE及其他浏览器进行区分处理，但是在IE10的时候，表格函数使用()进行调用会出现缺少函数的问题
 * 经测试，IE也可以直接跟其他浏览器一样，使用[]进行下标的获取单元格对象，未不影响其他模块功能，这边新建一个方法以供调用
 * 
 * 该方法不对浏览器进行区分处理，且移除掉delRow里面对xh的处理（如果行中存在序号字段，请另外处理）
 * 
 * add by zhiweiHuang 20180206
 * @return
 */
function delRowWithoutCheckBrowserV(){
	
	if(objTBY == null || nTbyRowNo < 0)
	{
		alert("请先选中需要删除的行");
		return -1;
	}
	
	/**
	 * 只剩下一行的时候，采用清空单元格数值的处理方式
	 */
	if(objTBY.rows.length == 1)
	{
		clearAreaValue(objTBY.rows[0], "");
	}
	else 
	{
		objTBY.deleteRow(nTbyRowNo);
	}
	
	return nTbyRowNo;
}

/*************************************************************************
*  purpose: 清空某区域中所有编辑框的数据,比如：input,select,textarea
*  @param objId: 当前区域的ID,如div,table,span等的id
*  
*************************************************************************/
function clearAreaValue(oObj,initVal){
   clearEleValue(oObj,"input",initVal);
   clearEleValue(oObj,"select",initVal);
   clearEleValue(oObj,"textarea",initVal);      
}

/*************************************************************************
*  purpose: 清空某区域中某种编辑框的数据,比如：input,select,textarea
*  @param objId: 当前区域的ID,如div,table,span等的id
*  @param objId: 当前区域中编辑框的初始值
*  
*************************************************************************/
function clearEleValue(obj, tagName, initVal) {
	var coll = obj.getElementsByTagName(tagName);
	if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
		//coll = obj.all.tags(tagName); 
		//coll = document.getElementsByName(tagName);
		if (coll.length != 0) {
			for (i = 0; i < coll.length; i++) {
				if (coll[i].type != "hidden") {
					if (coll[i].disabled == false) {
						if (coll[i].className.indexOf("money") > -1)
							coll[i].value = "0.00";
						else if (coll[i].className.indexOf("sl") > -1)
							coll[i].value = "0%";
						else
							coll[i].value = initVal;	
					}
				}
			}
		}
	}
	else{
		//coll = obj.all.tags(tagName); 
		//coll = document.getElementsByName(tagName);
		if (coll.length != 0) {
			for (i = 0; i < coll.length; i++) {
				if (coll[i].type != "hidden") {
					if (coll[i].disabled == false) {
						if (coll[i].className.indexOf("money") > -1)
							coll[i].value = "0.00";
						else if (coll[i].className.indexOf("sl") > -1)
							coll[i].value = "0%";
						else
							coll[i].value = initVal;	
					}
				}
			}
		}
	}
	
}
/**********************************************************************
*   purpose: 得到对象在table中所在的点，页面的HTML格式为<TABLE><TBODY><TR><TD>
*   		 注：使用此方法需要在页面上定义全局变量objTBL
*   @param : obj：表格单元对象,即<td>下一层所对应的标签对象
*    return: arrP：对象所在位置（行，列）
***********************************************************************/
function getObjPoint(obj){
	var arrP = new Array();
	var cel = obj.parentElement;				//td
	objTBY = cel.parentElement.parentElement;	//TBODY
	arrP[0] = cel.parentElement.rowIndex;		//去掉TH项，行号
	arrP[1] = cel.cellIndex;					//去掉序号No项
	nRowNo = arrP[0];
	nCellNo = arrP[1];
	nTbyRowNo = cel.parentElement.sectionRowIndex;
}


/*************************************************************************
*  purpose: 还原全局变量的值
*  
*************************************************************************/
function resetGlobeVariable(){
	nRowNo = -1;          
	nTbyRowNo = -1;		  
	nCellNo = -1;  
}

/*************************************************************************
*  purpose: 增加一行(自动计算序号的值)
*  
*************************************************************************/
function addRow_xh(){
	var rowNo = addRow();
	if(rowNo < 0) return;
	else{
		resetXh_add(rowNo);
	}
	return rowNo + 1;
}

/*************************************************************************
*  purpose: 增加一行后重新设置序号
*  @param iRow: 增加前光标所在的tbody中的行号
*  
*************************************************************************/
function resetXh_add(iRow){
	if(iRow + 1 == objTBY.rows.length - 1){	//增加到最后一行
		//edit by zhonggc,20060906,增加一行的序号能
	//	setCellDisable(objTBY,iRow+1,0,true);
		setCellValuef(objTBY,iRow+1,0,(iRow + 2));
	}
	else{
		//setCellDisable(objTBY,iRow+1,0,true);
		setCellValuef(objTBY,iRow+1,0,(iRow + 2));
		for(var i=iRow+2;i<objTBY.rows.length;i++){	
		//	setCellDisable(objTBY,i,0,true);
			setCellValuef(objTBY,i,0,Number(getCellValuef(objTBY,i,0)) + 1);
		}
	}
}

/*************************************************************************
*  purpose: 删除一行(自动计算序号的值)
*  
*************************************************************************/
function delRow_xh(){
//	if(nTbyRowNo < 0) return;
	var rowNo = delRow();
	if(rowNo < 0) return;
	resetXh_del(rowNo);
}

/*************************************************************************
*  purpose: 删除一行后重新设置序号
*  @param iRow: 删除前光标所在的tbody中的行号
*  
*************************************************************************/
function resetXh_del(iRow){
	if(iRow == 0){//删除第一行
		if(objTBY.rows.length == 1) 
			setCellValuef(objTBY,0,0,1);
		else{
			for(var i=0;i<objTBY.rows.length;i++){
				setCellValuef(objTBY,i,0,Number(getCellValuef(objTBY,i,0)) - 1);
			}
		}
	}
	else if(iRow == objTBY.rows.length){//删除最后一行
		return;
	}
	else{
		for(var i=iRow;i<objTBY.rows.length;i++){
			setCellValuef(objTBY,i,0,Number(getCellValuef(objTBY,i,0)) - 1);
		}
	}
}

/********************************************************************** 
*   purpose: 设置checkbox是否被选中
*   @param : objTbody：指定表格对象
*   @param : nRow：指定表格行号
*   @param : nCol：指定表格列号
*   @param : boolFlag：未选中/选中（false/true）
***********************************************************************/
function setCellCheck(objTbody,nRow,nCol,boolFlag) {
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	objTbody.rows(nRow).cells(nCol).childNodes.item(0).checked = boolFlag;
}

function setCheckboxVal(obj){
	if(obj.checked == true){
		obj.value = "Y";
	}
	else {
		obj.value = "N";
	}
}

function setCheckboxHidVal(objchb,objhid) {
	if(objchb.checked == true){
		objhid.value = "1";
	}
	else {
		objhid.value = "0";
	}
}
/********************************************************************** 
*   purpose: 设置单元格是否可编辑
*   @param : objTbody：指定表格对象
*   @param : nRow：指定表格行号
*   @param : nCol：指定表格列号
*   @param : boolFlag：允许编辑/禁止编辑（false/true）
***********************************************************************/
function setCellDisable(objTbody,nRow,nCol,boolFlag) {
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	objTbody.rows(nRow).cells(nCol).childNodes.item(0).disabled = boolFlag;
}

/********************************************************************** 
*   purpose: 设置单元格焦点
*   @param : objTbody：指定表格对象
*   @param : nRow：指定表格行号
*   @param : nCol：指定表格列号
***********************************************************************/
function setCellFocus(objTbody,nRow,nCol) {
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	objTbody.rows(nRow).cells(nCol).childNodes.item(0).focus();
}

/********************************************************************** 
*   purpose: 得到单元格内容
*   @param : objTbody：指定表格对象
*   @param : nRow：指定表格行号
*   @param : nCol：指定表格列号
*   return : 对象元素的值
***********************************************************************/
function getCellValuef(objTbody,nRow,nCol){
	if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	return objTbody.rows(nRow).cells(nCol).childNodes.item(0).value;}
	else{
		if(objTbody == null) return;
		if(nRow >= objTbody.rows.length) return;
		if(nCol >= objTbody.rows[nRow].cells.length) return;
		return objTbody.rows[nRow].cells[nCol].childNodes[0].value;
	}
}

/********************************************************************** 
*   purpose: 设置单元格内容
*   @param : objTbody：指定表格对象
*   @param : nRow：指定表格行号
*   @param : nCol：指定表格列号
*   @param : val：值
***********************************************************************/
function setCellValuef(objTbody,nRow,nCol,val){
	if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	objTbody.rows(nRow).cells(nCol).childNodes.item(0).value = val;
	}
	else{
		if(objTbody == null) return;
		if(nRow >= objTbody.rows.length) return;
		if(nCol >= objTbody.rows[nRow].cells.length) return;
	    var ele=$("input[name='XH']");
	    $.each(ele,function(i,val){
	    	$(this).val(i+1);
	    });
	    
		//objTbody.rows[nRow].cells[nCol].childNodes[0].value =val;
	}
}

/********************************************************************** 
*   purpose: 得到单元格对象
*   @param : objTbody：指定表格对象
*   @param : nRow：指定表格行号
*   @param : nCol：指定表格列号
*   return : 对象
***********************************************************************/
function getObject(objTbody,nRow,nCol) {
	if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	return objTbody.rows(nRow).cells(nCol).childNodes.item(0);}
	else{
		if(objTbody == null) return;
		if(nRow >= objTbody.rows.length) return;
		if(nCol >= objTbody.rows[nRow].cells.length) return;
		return objTbody.rows[nRow].cells[nCol].childNodes[0].item[0];
	}
}

/********************************************************************** 
*   purpose: 删除指定表格所有行，最后留下一空行
*   @param : objTbody：指定表格对象
***********************************************************************/
function delAllRow(objTbody) {
	while(objTbody.rows.length>1) {
		objTbody.deleteRow(1);
	}
	clearRowVal(objTbody,0);
	setCellValuef(objTbody,0,0,1);
}

/********************************************************************** 
*   purpose: 清空指定表格行
*   @param : objTbody：指定表格对象
*   @param : nRow：指定表格行号
***********************************************************************/
function clearRowVal(objTbody,nRow) {
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	for(var i=1;i<objTbody.rows(nRow).cells.length;i++) {	//表格第一个元素为序号，所以从表格第二个元素开始设置
		objTbody.rows(nRow).cells(i).childNodes.item(0).value = "";
	}
}

function rowsSelected(objTBY,nRow) {
	if(objTBY == null) return;
	if(nRow >= objTBY.rows.length) return;
}

function clearRowsSelected(objTBY) {
	if(objTBY == null) return;
	for(var i=0;i<objTBY.rows.length;i++) {
		getObject(objTBY,i,0).style.backgroundColor = "#ffffff";	
		getObject(objTBY,i,0).style.borderBottomColor = "#ffffff";
		getObject(objTBY,i,1).style.backgroundColor = "#ffffff";	
		objTBY.rows[i].bgColor = "white";
	}
}

/********************************************************************
*	purpose:比较两个日期的大小
*	@param firstDate 
*	@param secondDate 
*	return 结果：firstDate=secondDate返回0
*				 firstDate<secondDate返回>0的数
*				 firstDate>secondDate返回<0的数
********************************************************************/
function compareDate(firstDate,secondDate) {
	var firstDateArray = new Array();
	var secondDateArray = new Array();
	firstDateArray = firstDate.split("-");
	secondDateArray = secondDate.split("-");
	var tmp = Number(secondDateArray[0]) - Number(firstDateArray[0]);
	if(tmp != 0) return tmp;
	else {
		tmp = Number(secondDateArray[1]) - Number(firstDateArray[1]);
		if(tmp != 0) return tmp;
		else {
			tmp = Number(secondDateArray[2]) - Number(firstDateArray[2]);
			return tmp;
		}
	}
}
/**	
charCounter
	caculates how many specified characters a string contains.
	
	Params: 
		str, represents the string
		c,	specifies the character
	Return value: the number of the c character contained in the str.
*/
function charCounter(str,c)
{
	strError = "";
	var i = 0;
	var count = 0;
	while(i<str.length) {
		if(str.charAt(i) == c) count++;
		i++;
	}
	return count;
}

function isValidDate(dataForm) {
	cDate = dataForm.value;
	dSize = cDate.length;
	sCount= 0;
	if(cDate=='') return true;
	for(var i=0; i < dSize; i++)
		(cDate.substr(i,1) == "-") ? sCount++ : sCount;
	if (sCount != 2) {
		return("您输入的日期格式错误 !\n日期格式必须是'年-月-日'");
	}
	//将输入的日期字符串分隔成3部分
	idxBarI = cDate.indexOf("-");
	idxBarII= cDate.lastIndexOf("-");
	strY = cDate.substring(0,idxBarI);
	strM = cDate.substring(idxBarI+1,idxBarII);
	strD = cDate.substring(idxBarII+1,dSize);
	if(!TestKey(strY) || !TestKey(strM) || !TestKey(strD)) {
		return("您输入的日期格式错误 !\n日期格式必须是'年-月-日'");
	}
	strM = (strM.length < 2 ? '0'+strM : strM); 
	strD = (strD.length < 2 ? '0'+strD : strD);
	if(strY.length == 2)
		strY = (strY > 50 ? '19'+strY : '20'+strY);
	dataForm.value = strY+'-'+strM+'-'+strD;
	ok = ValDate(strM, strD, strY);
	if(ok==false) {
		return("您输入的日期格式错误 !\n日期格式必须是'年-月-日'");
	}
	return true;
}

function isValidNumber(dataForm) {
	if(dataForm.value == "") return true;
	if(dataForm.className=="money_4" || dataForm.className=="input_money_4_readonly" )
	{
		unformatCurrency_4(dataForm);
	}
	else if(dataForm.className=="money_6" || dataForm.className=="input_money_6_readonly" ){
		unformatCurrency_6(dataForm);
	}
	else
	{
		unformatCurrency(dataForm);
	}
	if(isNaN(dataForm.value)) {
	}
	dataForm.value = Number(dataForm.value);
	if(dataForm.className=="money_4" || dataForm.className=="input_money_4_readonly" )
	{
		formatCurrency_4(dataForm);
	}
	else if(dataForm.className=="money_6" || dataForm.className=="input_money_6_readonly" ){
		formatCurrency_6(dataForm);
	}
	else
	{
		formatCurrency(dataForm);
	}
	return true;
}

//检测字符串是否为整数
function TestKey(src)
{
	chars= "0123456789";
	for(var i=0;i<=src.length;i++)
	{
		if(chars.indexOf(src.charAt(i))==-1) return false;
	}
	return true;
}
/********************************************************************** 
 * 检查电话号码
***********************************************************************/
function TestPhone(phoneObj)
{
	var src = phoneObj.value;
	var aa,bb;
	chars= "-0123456789";
	for(var i=0;i<=src.length;i++)
	{
		if(chars.indexOf(src.charAt(i))==-1) {
			alert("您输入非数字！");
			phoneObj.focus();
			return false;
		}
	}
	if (src.search("-") == -1)
	{
		aa = src;
		bb = "";
	}
	else 
	{
		aa = src.substring(0,src.search("-"));
		bb = src.substr((src.search("-")+1), (src.length-src.search("-")-1) );
	}
	if (aa.length > 12) {
		alert("电话号码的长度超出范围！");
			phoneObj.focus();
		return false;
	}
	if (bb.length > 0)
	{
		if (TestKey(bb) == false) {
			alert("您输入非数字！");
			phoneObj.focus();
			return false;
		}
		if (bb.length > 6) {
			alert("电话号码的长度超出范围！");
			phoneObj.focus();
			return false;
		}
	}
	return true;
}

function ValDate(M, D, Y)
{
	Months= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	Leap = false;
	if((Y % 4 == 0) && ((Y % 100 != 0) || (Y %400 == 0)))
		Leap = true;
	if((D < 1) || (D > 31) || (M < 1) || (M > 12) || (Y < 0))
		return(false);
	if((D > Months[M-1]) && !((M == 2) && (D > 28)))
		return(false);
	if(!(Leap) && (M == 2) && (D > 28))
		return(false); 
	if((Leap) && (M == 2) && (D > 29))
		return(false); 
}

//四舍五人保留m位小数
function formatnumber(val,m) {

	var num,intPart,dotPart,dotPos,destNum;
	//小数点位置
	dotPos=String(val).indexOf(".");
	//整数，不处理
	if(dotPos==-1)
		destNum=val;
	//有小数
	else
	{
		//整数部分(含小数点)
		intPart=String(val).substring(0,dotPos+1);
		//小数部分
		dotPart=String(val).substring(dotPos+1);
		//小数位数小于m，不处理
		if(dotPart.length<=m)
			destNum=val;
		//小数位数大于m
		else {
			var tmp = new Array();
			for(var i=0;i<=m;i++) {
				//小数点后第i位数
				tmp[i] = String(dotPart).charAt(i);
			}
			//小数点后第m+1位数为5
			if(tmp[m]==5)
			{
				//小数点后第m位数为奇数1,3,5,7，round函数自动进位
				if(tmp[m-1]==1 || tmp[m-1]==3 || tmp[m-1]==5 || tmp[m-1]==7 || tmp[m-1]==9)
					destNum=Math.round(val*Math.pow(10,m))/Math.pow(10,m);
				//小数点后第二位数为偶数0,2,4,6,8，用以下方法进位
				else
				{
					//小数点后第m位数加1
					tmp[m-1]=Number(tmp[m-1]) + Number(1);
					//整数与小数合并
					dotPart = "";
					for(var i=0;i<m;i++) {
						dotPart = dotPart + String(tmp[i]);
					}
					destNum=intPart + dotPart;
				}
			}
			//小数点后第m+1位数不为5，round函数自动进位
			else
				destNum=Math.round(val*Math.pow(10,m))/Math.pow(10,m);
		}
	}
	return(destNum);
}
/********************************************************************** 
 * 格式化数字
 *	@param dataForm：需要进行格式化的数字
 *	@param n：整数的位数
 *	@param m：小数的位数
***********************************************************************/
function formatNumberType(val,n,m) {
  n_str = String(formatnumber(val,m));
	return formatDotpart(n_str,m);
}
/********************************************************************** 
 * 计算小数点后的位数
 *	@param val：数字
 *	@return 小数的位数
***********************************************************************/
function countDot(val) {
	var dotPos=String(val).indexOf(".");
	if(dotPos!=-1)
    	return String(val).substring(dotPos+1).length;
    else return 0;
}

/** 形成有指定小数位数的数字
 *	
*/
function formatDotpart(str,m) {
	if(m == 0) return str;
    var dotPart = "";
    var pl = countDot(str);
    for(var i=0;i<m-pl;i++) {
		dotPart = dotPart + "0";
   	}
   	if(pl == 0) str = str + "." + dotPart;
   	else str = str + dotPart;
   	return str;
}

function setFormatDown(type,dataForm,event) {
	switch(type) {
		case "TYPE_DATE":
			inputDateType(dataForm,event);
			break;
		case "TYPE_NUMBER":
			inputNumberType(dataForm,event);
			break;
		case "PURE_NUMBER":
			inputPureNumberType(dataForm,event);
			break;
		case "TYPE_PHONE":
			inputPhoneType(dataForm,event);
			break;
		default:
			break;
	}
	return;
}

function setFormatUp(type,dataForm,event) {
	switch(type) {
		case "TYPE_DATE":
			setDateType(dataForm,event);
			break;
		case "TYPE_NUMBER":
			setNumberType(dataForm,event);
			break;
		case "PURE_NUMBER":
			break;
		default:
			break;
	}
	return;
}

function setFormatBlur(type,dataForm,n,m) {
	var strResult = true;
	switch(type) {
		case "TYPE_DATE":
			strResult = isValidDate(dataForm);
			break;
		case "TYPE_NUMBER":
			strResult = isValidNumber(dataForm);
			if(strResult == true) {
				if(n != null) {
					if(n != "*"){
						if(dataForm.value >= Math.pow(10,n)) {
							strResult = "输入数字超出范围！";
						}
					}
					if(m != null) {
						dataForm.value = formatNumberType(dataForm.value,n,m);
					}
				}
			}
			break;
		case "PURE_NUMBER":
			strResult = TestKey(dataForm.value);
			if(strResult == true) {
				if(n != null) {
					if(dataForm.value >= Math.pow(10,n)) {
						strResult = "输入数字超出范围！";
					}
				}
			}
			else {
				strResult = "输入不合法！";
			}
			break;
		default:
			break;
	}
	return strResult;
}

function showErrorBlur(type,dataForm,n,m) {
	if(dataForm.value == "") return true;
	var strResult = true;
	strResult = setFormatBlur(type,dataForm,n,m);
	if(strResult != true) {
		if(dataForm.className=="integer")
		{
			dataForm.value = "0";
		}
		else if(dataForm.className=="date_rq")
		{
			alert("日期输入不正确");
			dataForm.value = "";
		}
		else if(dataForm.className=="money_4")
		{
			dataForm.value = "0.0000";
		}
		else if(dataForm.className=="money_6")
		{
			dataForm.value = "0.000000";
		}
		else
		{
			dataForm.value = "0.00";
		}
		dataForm.focus();
		dataForm.select();
		return false;
	}
	return true;
}

function inputPureNumberType(dataForm,event) {
	var event=window.event||event;
	if(( 
		(event.keyCode == 8) || //"backspace" of the left keyboard
		(event.keyCode == 9) ||	//"tab" of the left keyboard
		(event.keyCode == 46) || //del" of the right keyboard
		(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board 
		(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard		
		(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
	  )) == false){
		if(typeof window.event!="undefined"){
			event.returnValue = false;
		}else{
			event.preventDefault();
		}
	
	}
}

function inputPhoneType(dataForm,event) {
	var event=window.event||event;
	if(( 
		(event.keyCode == 8) || //"backspace" of the left keyboard
		(event.keyCode == 9) ||	//"tab" of the left keyboard
		(event.keyCode == 46) || //del" of the right keyboard
		(event.keyCode == 109) || //"-" of the right keyboard
		(event.keyCode == 110) || //"." of the left keyboard
		(event.keyCode == 189) || //"-" of the left keyboard
		(event.keyCode == 190) || //"." of the right keyboard
		(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board 
		(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard		
		(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
	  )) == false){
	//alert("Sorry, You can't input characters except 1~9 and '-' !");
	if(typeof window.event!="undefined"){
			event.returnValue = false;
		}else{
			event.preventDefault();
		}
	}
	if(event.keyCode == 109 ||event.keyCode == 189){
		if(dataForm.value.indexOf("-") != -1) {
			if(typeof window.event!="undefined"){
			event.returnValue = false;
		}else{
			event.preventDefault();
		}
		}
	}
}

function inputNumberType(dataForm,event) {
	var event=window.event||event;
	if(( 
		(event.keyCode == 8) || //"backspace" of the left keyboard
		(event.keyCode == 9) ||	//"tab" of the left keyboard
		(event.keyCode == 46) || //del" of the right keyboard
		(event.keyCode == 109) || //"-" of the right keyboard
		(event.keyCode == 110) || //"." of the left keyboard
		(event.keyCode == 189) || //"-" of the left keyboard
		(event.keyCode == 190) || //"." of the right keyboard
		(event.keyCode == 173) || //"-" of the right keyboard(firefox's keycode)
		(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board 
		(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard		
		(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard	
	  )) == false){
	//alert("Sorry, You can't input characters except 1~9 and '-' !");
		if (typeof window.event != 'undefined'&&!!(window.attachEvent)){
		event.returnValue = false;}
		else{
			event.preventDefault();
		}
	}
	
	/*
	Exceptions that will be processed below:
	1. Don't permit two "." in one input number.
	2. Don't permit the symbol of "-" exists in anywhere unless the head of the input string. And we should change the input number's positive or negative signal when the number of "-" character in user input is above one.
	*/
	//1.process the 1st case
	if(event.keyCode == 110 || event.keyCode == 190){
		if(dataForm.value.indexOf(".") != -1) event.returnValue = false;
	}
	
	//2.process the 2rd case
	if(event.keyCode == 109 ||event.keyCode == 189||event.keyCode == 173){
		if(dataForm.value.indexOf("-") == -1){
			if(dataForm.value != ""){
				//修改当前值等于零时，输入负号时的问题
				if(dataForm.value == 0){
					dataForm.value = "";
					//添加以下代码解决无法得到焦点的问题，解决当值为零时，数据从左侧输入的问题
					var num = dataForm.value.length;
					if(dataForm.createTextRange){
						range = dataForm.createTextRange(); 
						range.collapse(true); 
						range.moveStart('character',num); 
						range.select();
					}else{
						dataForm.setSelectionRange(0,num);
						dataForm.focus();
					}
				}
				else{
					dataForm.value = "-" + dataForm.value;
					//添加以下代码解决光标定位的问题
					if(dataForm.createTextRange){
						range = dataForm.createTextRange();
						range.collapse(true); 
						range.moveStart('character',1); 
						range.select();  
						dataForm.fireEvent("onchange");
						event.returnValue = false;
					}else{
						dataForm.setSelectionRange(0,1);
						dataForm.focus();
						var evt = document.createEvent("Events");
						evt.initEvent("change",true,true);
						dataForm.dispatchEvent(evt);
						event.preventDefault();
					}
				}
			}
		}
		else{
			var fieldText = dataForm.value;
			dataForm.value = fieldText.substr(1,fieldText.length-1);
			if(dataForm.value != ""){
				event.returnValue = false;
				//添加以下代码解决光标定位的问题
				var num = fieldText.length;
				if(dataForm.createTextRange){
					range = dataForm.createTextRange(); 
					range.collapse(true); 
					range.moveStart('character',0); 
					range.select();
					dataForm.fireEvent("onchange");
				}else{
					dataForm.setSelectionRange(0,0);
					dataForm.focus();
					var evt = document.createEvent("Events");
					evt.initEvent("change",true,true);
					dataForm.dispatchEvent(evt);
					event.preventDefault();
				}
				
				
			}
		}
	}
}

function setNumberType(dataForm,event){
	var event=window.event||event;
	if(( 
		(event.keyCode == 8) || //"backspace" of the left keyboard
		(event.keyCode == 9) ||	//"tab" of the left keyboard
		(event.keyCode == 46) || //del" of the right keyboard
		(event.keyCode == 109) || //"-" of the right keyboard
		(event.keyCode == 110) || //"." of the left keyboard
		(event.keyCode == 189) || //"-" of the left keyboard
		(event.keyCode == 190) || //"." of the right keyboard
		(event.keyCode == 173) || //"-" of the right keyboard(firefox's keycode)
		(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board 
		(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard		
		(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard	
	  )) == false){
		if(typeof window.event!="undefined"){
			event.returnValue = false;
		}else{
			event.preventDefault();
		}
	}
}

function inputDateType(dataForm,event) {
	var event=window.event||event;
	if((
		(event.keyCode == 8) || //"backspace" of the left keyboard
		(event.keyCode == 9) ||	//"tab" of the left keyboard
		(event.keyCode == 46) || //del" of the right keyboard
		(event.keyCode == 109) || //"-" of the right keyboard
		(event.keyCode == 189) || //"-" of the left keyboard
		(event.keyCode == 173) || //"-" of the right keyboard(firefox's keycode)
		(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board 
		(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard		
		(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
	   )) == false) {
		
		if(typeof window.event!="undefined"){
			event.returnValue = false;
		}else{
			event.preventDefault();
		}
	}
	/*
	Here we list some cases need to be processed below:
	1.Requires just two "-" in the string.
	*/
	//1.handle the case 1:
	if(event.keyCode == 109 ||event.keyCode == 189||event.keyCode == 173) {//denote the "-" key
		if(charCounter(dataForm.value,"-") >= 2) {
			if(typeof window.event!="undefined"){
			event.returnValue = false;
		}else{
			event.preventDefault();
		}
		}
	}	
}

/** 1128 added 当输入所属时期起止时，用户输入完月份后，系统自动带出日期
 *	@param dataForm：需要进行处理的日期
 *	@param qzFlag：起止日期标志。0：代表所属时期起；1：代表所属时期止
 *	
*/
function setFormatUp_sssq(dataForm,qzFlag){
	var event=window.event||arguments.callee.caller.arguments[0];
	if(event.keyCode != 8 && event.keyCode != 46){//denote "backspace" and "del" keys.
		if(dataForm.value.length == 4 || dataForm.value.length == 7){
			if(charCounter(dataForm.value,"-")<2){
				dataForm.value += "-";
				if(dataForm.value.length == 8){
					if(qzFlag == 0){
						dataForm.value += "01";	
					}
					else if(qzFlag == 1){
						dataForm.value += getSssqzDayByMonth(dataForm);	
					}			
				}
			}
		}
	}
}

/** 1128 added 获得某月份对应的天数
 *	@param dataForm：需要进行处理的日期
 *	
*/
function getSssqzDayByMonth(dataForm){
	var sssqz = dataForm.value;
	return getDayByMonth(sssqz);
}

function getDayByMonth(sssqz){
	var strMonth = sssqz.substr(5,2);
	var Y = sssqz.substr(0,4);
	var strMaxDay;
	Leap = false;
	if((Y % 4 == 0) && ((Y % 100 != 0) || (Y %400 == 0)))
		Leap = true;
	Months= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	for(var i=0;i<12;i++){
		if(strMonth == (i+1)){
			strMaxDay = Months[i];
			if((Leap) && (strMonth == 2)){
				strMaxDay = 29;
			}
		}
	}
	return strMaxDay;
}

//0114 added 格式化金额数据，eg val=1900000,结果将返回1,900,000
function formatCurrency(currencyObj){
	unformatCurrency(currencyObj);//此处必须先调用此函数，将有dot分隔的数字中的dot去掉，如果数字中没有dot，此函数不会带来任何影响
	var val = currencyObj.value;
	if(val == "")	return;
	
	//val = Math.round(parseFloat(val) * 100) / 100;
	//Math.round()四舍五入时有问题(如:0.145会四舍五入成0.14)
	val = formatPoint(parseFloat(val), 2);
	val = val.toString();
	
	var ifNegative = false;
	if(val.indexOf("-") != -1){
		val = val.substr(1,val.length-1);
		ifNegative = true;
	}
	var decimalIndex = (val.indexOf(".")==-1) ? val.length : val.indexOf(".");

	var startIndex = 0; 
	var formatResult = "";
	var bstopformat=false;
	while(startIndex< val.length){
		var residue = decimalIndex - 3*parseInt(decimalIndex/3);
		if(startIndex ==0 && residue !=0){
			formatResult = val.substr(startIndex,residue);
			startIndex = residue;
			}
		else{
		    //如果小数点后，就不格式化操作了。
		    if (val.substr(startIndex,3).indexOf(".")!=-1){
				bstopformat=true;
			}

			if(val.substr(startIndex,3).indexOf(".")==-1){
				if(startIndex == 0) {
					formatResult += val.substr(startIndex,3);	
				} else {
				    if (bstopformat){
						formatResult +=val.substr(startIndex,3);	
					} else {
					    formatResult += "," + val.substr(startIndex,3);	
					}
				}
	
				startIndex += 3;
			}
			else{
				formatResult += val.substr(startIndex,4);
				startIndex += 4;
			}
		}
	}
	
	if(ifNegative == true){
		val = "-" + val;
		formatResult = "-" + formatResult;
	}
	

	if(formatResult.substring(0,1)==".")
	{
		formatResult="0"+formatResult;
	}
	currencyObj.value = formatResult;
}

//0114 added 将金额数据中的逗号去掉，eg val=1,900,000,结果将返回1900000
function unformatCurrency(currencyObj){	
	//maliang modified at 20060510 ,添加对科学计数法的处理，否则，会对数据的处理有偏差，
	//如，会将E后面的数据抛弃，造成数据算法的错误
	var tmp_value = currencyObj.value;
	//如果是用科学计数法表示的数据，则将其转换为正常的十进制表示的数值
	if((tmp_value.indexOf("E") > -1) || (tmp_value.indexOf("e") > -1)){
		currencyObj.value = parseFloat(tmp_value);//处理科学计数法
		
		//alert(currencyObj.value);
		
		currencyObj.value = Math.round(parseFloat(currencyObj.value) * 10000) / 10000;
	}
	//下面继续执行反格式化操作
	//maliang 20060510 修改结束
	var val = currencyObj.value;
	var classNmae = currencyObj.className;
	if(val == ""&&classNmae=="money"){
		val = "0.00";
	}
	if(val == "-"&&classNmae=="money"){
		val = "0.00";
	}
	if(val == "")	return;
	var unformatResult = "";
	var i = 0;

	var isNegtiveVal=false;

	while(i < val.length){
		if(val.substr(i,1) == "-")
		  isNegtiveVal=true;
		if((val.substr(i,1) == "-") || !isNaN(parseInt(val.substr(i,1))))
		{
			unformatResult += val.substr(i,1);
		}
		else if(val.substr(i,1) == ".") 
		{
			var dot=val.substr(i+1,val.length-i-1);
			unformatResult += val.substr(i,1);
			var j=0;
			var js=0;
			while(j<dot.length)
			{
				if(js==3)
				{
					break;
				}
				var dot1=dot.substr(j,1);
				if(!isNaN(parseInt(dot1)))
				{
					unformatResult += dot1;
					js++;
				}
				j++;
			}
			break;
		}
		i++;
	}
	currencyObj.value = unformatResult;
}

//0217 added 去掉金额中整数部分前面无用的“0”，比如0001234.33,结果为1234.33
function removeNoUseZero(obj){
	var objValue = obj.value;
	if(objValue == "") return;
	var intPart;
	var decimalPart;
	var dotPos = objValue.indexOf(".");
	var iLetter;
	if(dotPos > -1){
		intPart = objValue.substring(0,dotPos);
		decimalPart = objValue.substring(dotPos,objValue.length);
	}else{
		intPart = objValue;
		decimalPart = "";
	}
	for(var i=0;i<intPart.length-1;i++){
		iLetter = objValue.charAt(i);
		if(iLetter == '0'){
			intPart = intPart.substring(1,intPart.length);
		}else{
			break;
		}
	}
	obj.value = intPart + decimalPart;
}

/**
 * 比较年月，年月是分开的
 */
function compareDate_ym(firstDate_year,firstDate_month,secondDate_year,secondDate_month){
	var tmp = 0;
	tmp = Number(firstDate_year) - Number(secondDate_year);
	if(tmp > 0){
		 return 1;
	}
	else if(tmp == 0){
		tmp = Number(firstDate_month) - Number(secondDate_month);
		if(tmp > 0){
			 return 2;
		}
	}
	return 0;
}
/********************************************************************** 
 * 检测输入的日期是否合法
***********************************************************************/
function setDateType(dataForm) {
	var i=0;
	var lens=dataForm.value.length;
	var values=dataForm.value;
	var formatvalue="";
	while(i<lens)
	{
		if(!isNaN(values.substr(i,1)) || values.substr(4,1)=="-" || values.substr(8,1)=="-")
		{
			formatvalue+=values.substr(i,1);
			if(formatvalue.substr(0,1)>2 || formatvalue.substr(0,1)<1)
			{
				formatvalue="";
			}
			if((formatvalue.substr(0,2)>21 || formatvalue.substr(0,2)<19) && i==1)
			{
				formatvalue=formatvalue.substr(0,1);
			}
			if(values.substr(4,1)!="-" && i==4)
			{
				formatvalue=formatvalue.substr(0,4)+"-"+formatvalue.substr(4,1);
			}
			if(formatvalue.substr(5,1)>1)
			{
				formatvalue=formatvalue.substr(0,5)+"0"+formatvalue.substr(5,1);
			}
			if(formatvalue.substr(5,2)>12)
			{
				formatvalue=formatvalue.substr(0,6);
			}
			if(values.substr(7,1)!="-" && i==7)
			{
				formatvalue=formatvalue.substr(0,7)+"-"+formatvalue.substr(7,1);
			}
			if(formatvalue.substr(8,1)>3)
			{
				formatvalue=formatvalue.substr(0,8)+"0"+formatvalue.substr(8,1);
			}
			if(formatvalue.substr(8,2)>31)
			{
				formatvalue=formatvalue.substr(0,9);
			}
		}
		i++;
	}
	dataForm.value=formatvalue.substr(0,10);
}
/**
 * 校验年度输入是否正确
 */
function verifyYearDigit(yearObj){
	var strYear = yearObj.value;
	if(strYear == "") return;
	if(strYear.length == 2){
		yearObj.value = (strYear > 50 ? '19'+strYear : '20'+strYear);
		return;
	}else if(strYear.length != 4){
		alert("输入的年度不正确！");
		yearObj.focus();
		yearObj.select();
		return false;
	}
	return true;
}

/**
 * 如果输入的月份小于10，则在月份前补0
 */
function fillMonthDigit(monthObj){
	var strMonth = monthObj.value;
	if(strMonth == "") return;
	monthObj.value = (strMonth.length < 2 ? '0'+strMonth : strMonth); 
}

/**
 * 校验输入的月份是否合理（在1－12之间）
 */
function verifyMonth(monthObj){
	var strMonth = monthObj.value;
	if(strMonth == "") return;
	if((Number(strMonth) < 1) || (Number(strMonth) > 12)){
		alert("输入的月份不正确！");
		monthObj.focus();
		monthObj.select();
		return false;
	}
	return true;
}
/********************************************************************** 
*   purpose: 得到对象在table中所在的点，页面的HTML格式为<TABLE><TBODY><TR><TD>
*   		 注：使用此方法需要在页面上定义全局变量objTBL
*   @param : obj：表格单元对象,即<td>下一层所对应的标签对象
*    return: arrP：对象所在位置（行，列）
***********************************************************************/
function getObjPoint(obj){
	var arrP		=new Array();
	var tmpParent	=obj;
	var cel;
	
	for(var i=0;i<10;i++)
	{
		if(tmpParent.tagName=="TD")
		{
			cel		=tmpParent;
		}
		
		if(tmpParent.tagName=="TBODY")
		{
			objTBY	=tmpParent;	
		}
		if(tmpParent.tagName=="TABLE")
		{
			objTBL	=tmpParent;	
			break;
		}
		tmpParent=tmpParent.parentElement;
	}		
	
	arrP[0] = cel.parentElement.rowIndex;		//去掉TH项，行号
	arrP[1] = cel.cellIndex;					//去掉序号No项
	nRowNo = arrP[0];
	nCellNo = arrP[1];
	nTbyRowNo = cel.parentElement.sectionRowIndex;
}

/********************************************************************** 
*   当选中行时，使该行颜色发生变化（变深）
***********************************************************************/
function selectRow() {
	for(var i=0;i<objTBY.rows.length;i++) {
		objTBY.rows[i].bgColor = "#E8ECE8";
	}
	objTBY.rows[nTbyRowNo].bgColor = strSelectRowColor;
}
/********************************************************************** 
*   初始化页面的输入数据
*	数字类型初始值0，税率类型初始值0％，日期类型初始值空，钱币类型初始0。00
***********************************************************************/
function checkinputdata(obj)
{
	if(obj.value=="null" || String(obj.value)=="undefined" || String(obj.value)=="" 
		|| String(obj.value)=="NaN" || String(obj.value)=="NaN%" || obj.value==".00")
	{		
		if(obj.className=="integer" || obj.className=="input_integer_readonly")
		{
			obj.value="0";
		}
		else if(obj.className=="sl" || obj.className=="sl_readonly")
		{
			obj.value="0%";
		}
		else if(obj.className=="date_rq" || obj.className=="string" || obj.className=="string_readonly" || obj.className=="nsrsbh"
				|| obj.className=="yzbm")
		{
			obj.value="";
		}
		else if(obj.className=="money_4" || obj.className=="input_money_4_readonly")
		{
			obj.value="0.0000";
		}
		else if(obj.className=="money_6" || obj.className=="input_money_6_readonly"){
			obj.value="0.000000";
		}
		else
		{
			obj.value="0.00";
		}
	}
}
/********************************************************************** 
*   将输入对象转换为数组类型
***********************************************************************/
function initializeArray(o)
{
	if(o)
	{
		if(!o[0])
		{
			o[0]=o;
			o.length=1;
		}
	}
	else
	{
		window.location.reload();
	}
}

/**********************************************************************
 * 将税率数据由小数形式转换为％形式来显示(小数点后4位)
***********************************************************************/
function transSl_4(slObj){
	if(slObj.value.substr(slObj.value.length-1,1)!="%")
	{
		var str= parseFloat(slObj.value) * 100;
	}
	else
	{
		str=parseFloat(slObj.value.substr(0,slObj.value.length-1));
	}
	str=formatnumber(str,4);
	if(isNaN(str))
		str = "0";
	slObj.value = str + "%";
}

/**********************************************************************
 * 将税率数据由小数形式转换为％形式来显示(小数点后6位)
 ***********************************************************************/
function transSl_6(slObj){
	if(slObj.value.substr(slObj.value.length-1,1)!="%")
	{
		var str= parseFloat(slObj.value) * 100;
	}
	else
	{
		str=parseFloat(slObj.value.substr(0,slObj.value.length-1));
	}
	str=formatnumber(str,6);
	if(isNaN(str))
		str = "0";
	slObj.value = str + "%";
}

/**********************************************************************
 * 将税率数据由小数形式转换为％形式来显示(小数点后8位)
***********************************************************************/
function transSl_8(slObj){
	var str = "";
	if(slObj.value.substr(slObj.value.length-1,1)!="%")
	{
		str = parseFloat(slObj.value) * 100;
	}
	else
	{
		str=parseFloat(slObj.value.substr(0,slObj.value.length-1));
	}
	str=formatnumber(str,8);
	if(isNaN(str))
		str = "0";
	slObj.value = str + "%";
}

/**********************************************************************
 * 将税率数据由小数形式转换为％形式来显示(小数点后10位)
***********************************************************************/
function transSl_10(slObj){
	var str = "";
	if(slObj.value.substr(slObj.value.length-1,1)!="%")
	{
		str = parseFloat(slObj.value) * 100;
	}
	else
	{
		str=parseFloat(slObj.value.substr(0,slObj.value.length-1));
	}
	str=formatnumber(str,10);
	if(isNaN(str))
		str = "0";
	slObj.value = str + "%";
}

/********************************************************************** 
 * 将税率数据由小数形式转换为％形式来显示
***********************************************************************/
function transSl(slObj){
	
	if(slObj.value.substr(slObj.value.length-1,1)!="%")
	{
		var str= parseFloat(slObj.value) * 100;
	}
	else
	{
		str=parseFloat(slObj.value.substr(0,slObj.value.length-1));		
	}
	
	str=formatnumber(str,2);
	if(isNaN(str))
		str = "0";
	slObj.value = str + "%";
}
/********************************************************************** 
 * 将税率数据由％形式转换为小数形式来显示
***********************************************************************/
function formatSl(slObj){
	var str="";
	//空字符串格式化,转为0
	if(slObj.value.length==0)
	  slObj.value=0;
	if(slObj.value.substr(slObj.value.length-1,1)=="%")
	{
		str=slObj.value.substr(0,slObj.value.length-1);
		slObj.value = parseFloat(str)/100;
	}
}

/**
根据年份和月份返回天数   add by dxy
*/
function getday(year,month)
{


	if ((year=="") || (year < 1900)) {
		alert("请输入大于1900的年份！");
		return ;
	}

    if ((month=="") || (month < 1) || (month > 12)){
		alert("请输入有效月份！");
		return ;
	}

	switch (parseInt(month,10)){
		case 2:
			high =28;
			if ((year % 4 == 0) && (year % 100 != 0))
				{high =29;}
			else if (year % 400 == 0) {high=29;}
			break;
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			high =31;
			break;
		default:
			high =30;
	}

	return high;
}


//id为TABLE的id
function addOneRow(tbname)
{
	var oRow;		 //行（TR）对象
	var oCell;		 //单元（TD）对象
   var nTbyRowNum; //总行数

   var id = document.all(tbname);
   if(id.rows.length <= 0) return;

   nTbyRowNum = id.rows.length;
	oRow = id.insertRow(-1);

   var cellsLength = id.rows(0).cells.length;
	for(var i=0; i<cellsLength; i++)
   {
		oCell = oRow.insertCell();
      oCell.innerHTML = id.rows(nTbyRowNum - 1).cells(i).innerHTML;
	  if(i!=cellsLength-1){
		clearAreaValue(oCell,"");
	  }
	}

   //设置新增加行的序号值（第一列）
   id.rows(nTbyRowNum).cells(0).childNodes.item(0).value = nTbyRowNum;
   
   //设置按钮的值
   var cols = cellsLength - 1;   //最后一列
  
   t = id.rows(nTbyRowNum - 1).cells(cols).innerHTML;
   var rule = /addOneRow/g;  
   var replaceText = "delOneRow";
   t = t.replace(rule,replaceText);

   var row = nTbyRowNum - 1;
   var pos1 = t.indexOf(")");
   t = t.substring(0,pos1) + "," + row + t.substring(pos1);

   id.rows(row).cells(cols).innerHTML = t;
   id.rows(row).cells(cols).childNodes.item(0).value = '-';
}

//id为TABLE的id，n为删除的记录号
function delOneRow(tbname, n)
{
   var id = document.all(tbname);
   if(id.rows.length <= 0) return;

   if(confirm("确定要删除指定行吗？") == false) return;

   id.deleteRow(n);

   var nTbyRowNum = id.rows.length;
   if(nTbyRowNum <= 1)
   {
      return;
   }

   var cols = id.rows(0).cells.length;
   cols--;

   //该行以下各行号都减1
   for(k = n; k <= nTbyRowNum - 1; k++)
   { 
      //设置行的序号（第一列）
      id.rows(k).cells(0).childNodes.item(0).value = k;

      //设置按钮的值（最后一列）
      t = id .rows(k).cells(cols).innerHTML;
      pos = t.indexOf("delOneRow");      
      if(pos != -1)
      {
         pos1 = t.indexOf(",");
         pos2 = t.indexOf(")");
         t = t.substring(0,pos1) + "," + k + t.substring(pos2);         
         id.rows(k).cells(cols).innerHTML = t;
      }
   }
}
/********************************************************************** 
 * 限制输入框文本的最长输入长度
***********************************************************************/
function limitInput(o,str)
{
	var str1=o.value;
	if(str)
	{
		if(o.value.length>str)
		{
			str1=o.substr(0,str);
			alert(o.displayname+"最大长度不能超过"+str+"位");
		}		
	}
	o.value=str1;
}
/********************************************************************** 
 * 校验邮编是不是六位
***********************************************************************/
function checkYzbm(o)
{
  var values = o.value;
  if((values != null) && (values != ""))
  {
     if(values.length !=6)
     {
       alert("邮政编码应该是6位数字!");
       o.focus();
       return false;
     }
  }
  return true;
}
/********************************************************************** 
 * 校验纳税人识别号是不是20&15位
***********************************************************************/
function checkNsrsbh(o)
{
	var values= o.value;
	if((values != null) && (values != ""))
	{
		 if(values.length !=15 && values.length !=20)
		{
			alert("纳税人识别号应为20位或15位!");
			o.focus();
			return false;
		}
	}
	return true;
}
/********************************************************************** 
 * 为下拉框设置缺省被选择项
***********************************************************************/
function selectedItem(o)
{
	for(var i=0;i<o.length;i++)
	{
		if(o[i].value==o.selectitem)
		{
			o.selectedIndex=i;
		}
	}
}
/********************************************************************** 
 * 为复选框设置缺省被选择项
***********************************************************************/
function checkItem(o)
{
	if(o.checkitem==o.value)
	{
		o.checked=true;
	}
}
/********************************************************************** 
 * 反格式化日期
***********************************************************************/
function unformatDate(dataForm) {
	cDate = dataForm.value;
	dSize = cDate.length;
	idxBarI = cDate.indexOf("-");
	if(idxBarI)
	{
		idxBarII= cDate.lastIndexOf("-");
		strY = cDate.substring(0,idxBarI);
		strM = cDate.substring(idxBarI+1,idxBarII);
		strD = cDate.substring(idxBarII+1,dSize);
		data = strY+strM+strD;
		return data;
	}
	return dataForm;
}
/********************************************************************** 
 * 初始化日期
***********************************************************************/
function initdate(o)
{
	if(o.value.length==8)
	{
		o.value=o.value.substr(0,4)+"-"+o.value.substr(4,2)+"-"+o.value.substr(6,2);
	}
}

/*
 * bit限制小数点位数
 * 2012-09-11 zhizhong yang
 */
function keypressBit(objTR,bit) {
	var event=window.event||arguments.callee.caller.arguments[0];
	var txtval = objTR.value;
	var key = event.keyCode;
	if ((key < 48 || key > 57) && key != 46) {
		event.keyCode = 0;
	} else {
		if (key == 46) {
			if (txtval.indexOf(".") != -1 || txtval.length == 0)
				event.keyCode = 0;
		}
		if (txtval.indexOf(".") > 0) {
			var temp = txtval.split(".");
			if (temp[1].length > (bit-1))
				event.keyCode = 0;
		}
	}
}

/*
 * 必输验证
 *
 *2012-09-11 zhizhong yang
 */
function mustEnter(par){
	if(typeof window.event != 'undefined'&&!!(window.attachEvent)){
	for (var i = 0; i < xform.all.item(par).length; i++){
		if(null == xform.all.item(par)[i].value || "" == xform.all.item(par)[i].value){
			alert("表单中存在空数据，请确认！");
			return false;
			break;
		}
	}
	}else{
		var validArray=$("xform "+par);
		for (var i = 0; i < validArray.length; i++){
			if( $.trim(validArray[i].val())==''){
				alert("表单中存在空数据，请确认！");
				return false;
				break;
			}
		}
	}
	return true;
}
/********************************************************************** 
 * 反格式化日期 将YYYY-MM-DD 转化为YYYYMMDD
***********************************************************************/
function formatDate(dateObj){
	if(dateObj.value.length==0){
		dateObj.value = "";
	}else{
		dateObj.value = dateObj.value.replace(/-/g,'');
	}
}


//0114 added 格式化金额数据，eg val=1900000,结果将返回1,900,000
function formatCurrency_6(currencyObj){
	unformatCurrency_6(currencyObj);//此处必须先调用此函数，将有dot分隔的数字中的dot去掉，如果数字中没有dot，此函数不会带来任何影响
	var val = currencyObj.value;
	if(val == "")	return;
	
	val = Math.round(parseFloat(val) * 1000000) / 1000000;
	val = val.toString();
	
	var ifNegative = false;
	if(val.indexOf("-") != -1){
		val = val.substr(1,val.length-1);
		ifNegative = true;
	}
	var decimalIndex = (val.indexOf(".")==-1) ? val.length : val.indexOf(".");

	var startIndex = 0; 
	var formatResult = "";
	var bstopformat=false;
	while(startIndex< val.length){
		var residue = decimalIndex - 3*parseInt(decimalIndex/3);
		if(startIndex ==0 && residue !=0){
			formatResult = val.substr(startIndex,residue);
			startIndex = residue;
			}
		else{
		    //如果小数点后，就不格式化操作了。
		    if (val.substr(startIndex,3).indexOf(".")!=-1){
				bstopformat=true;
			}

			if(val.substr(startIndex,3).indexOf(".")==-1){
				if(startIndex == 0) {
					formatResult += val.substr(startIndex,3);	
				} else {
				    if (bstopformat){
						formatResult +=val.substr(startIndex,3);	
					} else {
					    formatResult += "," + val.substr(startIndex,3);	
					}
				}
	
				startIndex += 3;
			}
			else{
				formatResult += val.substr(startIndex,4);
				startIndex += 4;
			}
		}
	}
	
	if(ifNegative == true){
		val = "-" + val;
		formatResult = "-" + formatResult;
	}
	

	if(formatResult.substring(0,1)==".")
	{
		formatResult="0"+formatResult;
	}
	currencyObj.value = formatResult;
}

//0114 added 将金额数据中的逗号去掉，eg val=1,900,000,结果将返回1900000
function unformatCurrency_6(currencyObj){	
	//maliang modified at 20060510 ,添加对科学计数法的处理，否则，会对数据的处理有偏差，
	//如，会将E后面的数据抛弃，造成数据算法的错误
	var tmp_value = currencyObj.value;
	//如果是用科学计数法表示的数据，则将其转换为正常的十进制表示的数值
	if((tmp_value.indexOf("E") > -1) || (tmp_value.indexOf("e") > -1)){
		currencyObj.value = parseFloat(tmp_value);//处理科学计数法
		
		currencyObj.value = Math.round(parseFloat(currencyObj.value) * 1000000) / 1000000;
	}
	//下面继续执行反格式化操作
	//maliang 20060510 修改结束
	var val = currencyObj.value;
	var classNmae = currencyObj.className;
	if(val == ""&&classNmae=="money_6"){
		val = "0.000000";
	}
	if(val == "")	return;
	var unformatResult = "";
	var i = 0;

	var isNegtiveVal=false;

	while(i < val.length){
		if(val.substr(i,1) == "-")
		  isNegtiveVal=true;
		if((val.substr(i,1) == "-") || !isNaN(parseInt(val.substr(i,1))))
		{
			unformatResult += val.substr(i,1);
		}
		else if(val.substr(i,1) == ".") 
		{
			var dot=val.substr(i+1,val.length-i-1);
			unformatResult += val.substr(i,1);
			var j=0;
			var js=0;
			while(j<dot.length)
			{
				if(js==6)
				{
					break;
				}
				var dot1=dot.substr(j,1);
				if(!isNaN(parseInt(dot1)))
				{
					unformatResult += dot1;
					js++;
				}
				j++;
			}
			break;
		}
		i++;
	}
	currencyObj.value = unformatResult;
}

function formatCurrency_4(currencyObj){
	unformatCurrency_4(currencyObj);//此处必须先调用此函数，将有dot分隔的数字中的dot去掉，如果数字中没有dot，此函数不会带来任何影响
	var val = currencyObj.value;
	if(val == "")	return;
	
	val = Math.round(parseFloat(val) * 10000) / 10000;
	val = val.toString();
	
	var ifNegative = false;
	if(val.indexOf("-") != -1){
		val = val.substr(1,val.length-1);
		ifNegative = true;
	}
	var decimalIndex = (val.indexOf(".")==-1) ? val.length : val.indexOf(".");

	var startIndex = 0; 
	var formatResult = "";
	var bstopformat=false;
	while(startIndex< val.length){
		var residue = decimalIndex - 3*parseInt(decimalIndex/3);
		if(startIndex ==0 && residue !=0){
			formatResult = val.substr(startIndex,residue);
			startIndex = residue;
			}
		else{
		    //如果小数点后，就不格式化操作了。
		    if (val.substr(startIndex,3).indexOf(".")!=-1){
				bstopformat=true;
			}

			if(val.substr(startIndex,3).indexOf(".")==-1){
				if(startIndex == 0) {
					formatResult += val.substr(startIndex,3);	
				} else {
				    if (bstopformat){
						formatResult +=val.substr(startIndex,3);	
					} else {
					    formatResult += "," + val.substr(startIndex,3);	
					}
				}
	
				startIndex += 3;
			}
			else{
				formatResult += val.substr(startIndex,4);
				startIndex += 4;
			}
		}
	}
	
	if(ifNegative == true){
		val = "-" + val;
		formatResult = "-" + formatResult;
	}
	

	if(formatResult.substring(0,1)==".")
	{
		formatResult="0"+formatResult;
	}
	currencyObj.value = formatResult;
}

function unformatCurrency_4(currencyObj){	
	var tmp_value = currencyObj.value;
	if((tmp_value.indexOf("E") > -1) || (tmp_value.indexOf("e") > -1)){
		currencyObj.value = parseFloat(tmp_value);//处理科学计数法
		
		currencyObj.value = Math.round(parseFloat(currencyObj.value) * 10000) / 10000;
	}
	var val = currencyObj.value;
	var classNmae = currencyObj.className;
	if(val == ""&&classNmae=="money_4"){
		val = "0.0000";             //这里原本写错成0.000000了，应为4位小数  by   wxf   20170804
	}
	if(val == "")	return;
	var unformatResult = "";
	var i = 0;

	var isNegtiveVal=false;

	while(i < val.length){
		if(val.substr(i,1) == "-")
		  isNegtiveVal=true;
		if((val.substr(i,1) == "-") || !isNaN(parseInt(val.substr(i,1))))
		{
			unformatResult += val.substr(i,1);
		}
		else if(val.substr(i,1) == ".") 
		{
			var dot=val.substr(i+1,val.length-i-1);
			unformatResult += val.substr(i,1);
			var j=0;
			var js=0;
			while(j<dot.length)
			{
				if(js==5)
				{
					break;
				}
				var dot1=dot.substr(j,1);
				if(!isNaN(parseInt(dot1)))
				{
					unformatResult += dot1;
					js++;
				}
				j++;
			}
			break;
		}
		i++;
	}
	currencyObj.value = unformatResult;
}

//num四舍五入保留v位小数
function decimal(num,v){
		var vv = Math.pow(10,v);
		return Math.round(num*vv)/vv;
		
	}


/**
 * 删除非法字符，删除连续空格，字段长度控制
 * 页面的文本都添加特殊字符的处理，以免因为特殊字符，提交报错
 * @return
 */
function textChangeCheckValue(obj)
{
	var value = obj.value;
	
	//非法字符集
	var codes = '<>/@#%￥$&';
	//非法字符数组
	var codearray = codes.split('');
	for (var i = 0; i < codearray.length; i++)
	{
		while(value.indexOf(codearray[i]) > -1)
		{
			value = value.replace(codearray[i], '');
		}
	}
	
	//删除连续空格
	value = $.trim(value).replace(/\s+/g, ' ');
	
	obj.value = value;
}

/**
 * 格式化四舍五入保留fractionDigits位小数
 * 小数位数大于所需的精度，则从最后一位四舍五入到所需精度的后一位，
 * @return
 */
function formatPoint(number,fractionDigits){ 
	//传入参数number为0时，直接返回结果
	if(number == 0){
		return number;
	}
	//传入参数number为整数时，直接返回结果
	if(number.toString().split(".")[1] == undefined){
		return  number;
	}
	//对负数进行特殊处理
	var strFlag = false;
	if(number < 0){
		strFlag = true;
		number = Math.abs(number);
	}
	
	var n = number.toString().split(".")[1].length;
	for(var i=n-1; i>=fractionDigits+2; i--){
		number = Math.round(number*Math.pow(10,i))/Math.pow(10,i);
	}
	//对扩大倍数后的数据重新四舍五入到整数
	number = Math.round((number*Math.pow(10,fractionDigits)).toRound(2))/Math.pow(10,fractionDigits);
	if(strFlag){
		number = -1 * number;
	}
    return  number;     
} 

Number.prototype.toRound = function(d){
	var s=this+"";
	if(!d)d=0;
	if(s.indexOf(".")==-1)
		s+=".";
	s+=new Array(d+1).join("0");
	if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+ (d+1) +"})?)\\d*$").test(s)){
		var s="0"+ RegExp.$2, pm=RegExp.$1, a=RegExp.$3.length, b=true;
		if (a==d+2){a=s.match(/\d/g); if (parseInt(a[a.length-1])>4){
			for(var i=a.length-2; i>=0; i--) {
				a[i] = parseInt(a[i])+1;
				if(a[i]==10){
					a[i]=0; 
					b=i!=1;
				}else 
					break;
				}
			}
		s=a.join("").replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");
		}
		if(b)
			s=s.substr(1);
		return (pm+s).replace(/\.$/, "");
	} 
	return this+"";
}; 

/**
 * 根据参数设置行序号
 * @param tbodyId
 * @param colId
 * @return
 */
function setHcForInputByParam(tbodyId, colId)
{
	var hcArr = $("#"+ tbodyId +" input[name='"+ colId +"']");
	$.each(hcArr, function(i,val){
		
		$(hcArr[i]).val(i + 1);
	});
}

/**
 * 用于解决jsp引入doctype导致input超出td的范围
 * @param className 设置的样式名称
 * @param inputWidth 设置input宽度
 * @return
 */
function installInputWidthByClassname(className, inputWidth) {
	$("#inputTable input[class='"+ className +"']").each(function(i){
		$(this).width(inputWidth);
	});
}

/**
 * 此方法目前只用于企业所得税年报（2017版，A类）的企业所得税汇总纳税分支机构所得税分配表（A109010）
 * 格式化四舍五入保留fractionDigits位小数
 * 小数位数大于所需的精度，则从最后一位四舍五入到所需精度的后一位，
 * @return
 */
function formatPointNew(number,fractionDigits){ 
	//传入参数number为0时，直接返回结果
	if(number == 0){
		return number;
	}
	//传入参数number为整数时，直接返回结果
	if(number.toString().split(".")[1] == undefined){
		return  number;
	}
	
	/**
	 * 为了准确进位，这边对传进来的小数数据进行处理
	 * 按照进位参数要求，直接截取到进位参数后一位的数据
	 * eg：fractionDigits为2，表示要进位到百分位，那这边就截取到千分位，也就是三位小数，再进行进位，防止因为万分位有数据，导致进位错误
	 * 当小数位中存在连续出现的5个9的情况时，这边不进行截取到千分位
	 */
	if(!(number.toString().indexOf("e") == -1 && number.toString().indexOf("E") == -1)){
		number = number.toFixed(fractionDigits);
	}
	
	var numberStr = number.toString().split(".")[1];
	if(number.toString().indexOf(".") > -1 && numberStr.indexOf("99999") == -1 && numberStr.indexOf("e") == -1 && numberStr.indexOf("E") == -1)
	{
		number = parseFloat(number.toString().substring(0, number.toString().indexOf(".") + fractionDigits + 2));
	}
	
	//对负数进行特殊处理
	var strFlag = false;
	if(number < 0){
		strFlag = true;
		number = Math.abs(number);
	}
	
	var n = numberStr.length;
	for(var i=n-1; i>=fractionDigits+2; i--){
		number = Math.round(number*Math.pow(10,i))/Math.pow(10,i);
	}
	//对扩大倍数后的数据重新四舍五入到整数
	number = Math.round((number*Math.pow(10,fractionDigits)).toRound(2))/Math.pow(10,fractionDigits);
	if(strFlag){
		number = -1 * number;
	}
    return  number;     
} 