var objTBY;

//�����������VALUE���ڿ��ַ��Ļ�����ȡ��ֵ����ȥ
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

//����˰�ʵ�ʵ����ֵ
function xyslvalue(obj){
	formatSl(obj);
	var value=obj.value;
	transSl(obj);
	return value;
}

/*****************************************************************
*  purpose: ������س���ʱ����
*  
*****************************************************************/
function doOnKeyDown() {
	if(event.keyCode == 13 && window.event.srcElement.tagName.toLowerCase() != "textarea") {
		event.keyCode = 9;
	}
}

/*****************************************************************
*  purpose: ������CTRL+INSERT����CTRL+DELETEʱ����
*  
*****************************************************************/
function keyDownInsert(){
	if(event.ctrlKey){
		if(event.keyCode == 45){		//CTRL+INSERT:����
			addRow_xh();
		}
		else if(event.keyCode == 46){	//CTRL+DELETE:ɾ��
			delRow_xh();
		}
	}
}

/*****************************************************************
*  purpose: ��ѡ�еı�������һ��
*  
*****************************************************************/
function addRow(){
	var oRow;		//�У�TR������
	var oCell;		//��Ԫ��TD������
	if((objTBY == null) || (nTbyRowNo < 0)){
		alert("����ѡ����Ҫ���е�λ��");
		return -1;
	}
	else{
		oRow = objTBY.insertRow(nTbyRowNo+1);
	}
	var nColspan = 1;
	var nAlign="";
	var ncalss="";
	//edit by zhonggc,20060907,�ӱ��е�0��ȡ��Ԫ,��Ϊ��ѡ����ȡ��Ա
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
	
	var addRowNo = nTbyRowNo; //���ڼ��㡰��š���ֵ
	var obj = objTBY.childNodes(nTbyRowNo+1).childNodes(nCellNo).childNodes(0);
	obj.select();
	obj.focus()  //���������һ��
	return addRowNo;
}

/*****************************************************************
*  purpose: ��ѡ�еı���ɾ��һ��
*  
*****************************************************************/
function delRow(){	
	if((objTBY == null) || (nTbyRowNo < 0)){
		alert("����ѡ����Ҫɾ������");
		return -1;
	}
	if(objTBY.rows.length == 1) {
		clearAreaValue(objTBY.rows(0),"");
	}
	else {
		objTBY.deleteRow(nTbyRowNo);
	}
	var delRowNo = nTbyRowNo; //�����ڡ�����Ŀ¼�������м��㡰��š���ֵ
	if(nTbyRowNo == objTBY.rows.length){
		var obj = objTBY.childNodes(nTbyRowNo-1).childNodes(nCellNo).childNodes(0);
	}
	else{
		var obj = objTBY.childNodes(nTbyRowNo).childNodes(nCellNo).childNodes(0);
	}
	obj.focus();  //���λ�ñ��ֲ���
	return delRowNo;
}

/*************************************************************************
*  purpose: ���ĳ���������б༭�������,���磺input,select,textarea
*  @param objId: ��ǰ�����ID,��div,table,span�ȵ�id
*  
*************************************************************************/
function clearAreaValue(oObj,initVal){
   clearEleValue(oObj,"input",initVal);
   clearEleValue(oObj,"select",initVal);
   clearEleValue(oObj,"textarea",initVal);      
}

/*************************************************************************
*  purpose: ���ĳ������ĳ�ֱ༭�������,���磺input,select,textarea
*  @param objId: ��ǰ�����ID,��div,table,span�ȵ�id
*  @param objId: ��ǰ�����б༭��ĳ�ʼֵ
*  
*************************************************************************/
function clearEleValue(obj,tagName,initVal){
	var coll;
    coll = obj.all.tags(tagName); 
	if (coll.length != 0)
	{
		for (i=0; i<coll.length; i++) {
			if(coll[i].type != "hidden"){	
				if(coll[i].disabled == false){
					if(coll[i].value!="0.00" && coll[i].value!="0")
						coll[i].value = initVal;
				}
			}
		}
	}	
}
/**********************************************************************
*   purpose: �õ�������table�����ڵĵ㣬ҳ���HTML��ʽΪ<TABLE><TBODY><TR><TD>
*   		 ע��ʹ�ô˷�����Ҫ��ҳ���϶���ȫ�ֱ���objTBL
*   @param : obj�����Ԫ����,��<td>��һ������Ӧ�ı�ǩ����
*    return: arrP����������λ�ã��У��У�
***********************************************************************/
function getObjPoint(obj){
	var arrP = new Array();
	var cel = obj.parentElement;				//td
	objTBY = cel.parentElement.parentElement;	//TBODY
	arrP[0] = cel.parentElement.rowIndex;		//ȥ��TH��к�
	arrP[1] = cel.cellIndex;					//ȥ�����No��
	nRowNo = arrP[0];
	nCellNo = arrP[1];
	nTbyRowNo = cel.parentElement.sectionRowIndex;
}


/*************************************************************************
*  purpose: ��ԭȫ�ֱ�����ֵ
*  
*************************************************************************/
function resetGlobeVariable(){
	nRowNo = -1;          
	nTbyRowNo = -1;		  
	nCellNo = -1;  
}

/*************************************************************************
*  purpose: ����һ��(�Զ�������ŵ�ֵ)
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
*  purpose: ����һ�к������������
*  @param iRow: ����ǰ������ڵ�tbody�е��к�
*  
*************************************************************************/
function resetXh_add(iRow){
	if(iRow + 1 == objTBY.rows.length - 1){	//���ӵ����һ��
		//edit by zhonggc,20060906,����һ�е������
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
*  purpose: ɾ��һ��(�Զ�������ŵ�ֵ)
*  
*************************************************************************/
function delRow_xh(){
//	if(nTbyRowNo < 0) return;
	var rowNo = delRow();
	if(rowNo < 0) return;
	resetXh_del(rowNo);
}

/*************************************************************************
*  purpose: ɾ��һ�к������������
*  @param iRow: ɾ��ǰ������ڵ�tbody�е��к�
*  
*************************************************************************/
function resetXh_del(iRow){
	if(iRow == 0){//ɾ����һ��
		if(objTBY.rows.length == 1) 
			setCellValuef(objTBY,0,0,1);
		else{
			for(var i=0;i<objTBY.rows.length;i++){
				setCellValuef(objTBY,i,0,Number(getCellValuef(objTBY,i,0)) - 1);
			}
		}
	}
	else if(iRow == objTBY.rows.length){//ɾ�����һ��
		return;
	}
	else{
		for(var i=iRow;i<objTBY.rows.length;i++){
			setCellValuef(objTBY,i,0,Number(getCellValuef(objTBY,i,0)) - 1);
		}
	}
}

/********************************************************************** 
*   purpose: ����checkbox�Ƿ�ѡ��
*   @param : objTbody��ָ��������
*   @param : nRow��ָ������к�
*   @param : nCol��ָ������к�
*   @param : boolFlag��δѡ��/ѡ�У�false/true��
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
*   purpose: ���õ�Ԫ���Ƿ�ɱ༭
*   @param : objTbody��ָ��������
*   @param : nRow��ָ������к�
*   @param : nCol��ָ������к�
*   @param : boolFlag������༭/��ֹ�༭��false/true��
***********************************************************************/
function setCellDisable(objTbody,nRow,nCol,boolFlag) {
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	objTbody.rows(nRow).cells(nCol).childNodes.item(0).disabled = boolFlag;
}

/********************************************************************** 
*   purpose: ���õ�Ԫ�񽹵�
*   @param : objTbody��ָ��������
*   @param : nRow��ָ������к�
*   @param : nCol��ָ������к�
***********************************************************************/
function setCellFocus(objTbody,nRow,nCol) {
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	objTbody.rows(nRow).cells(nCol).childNodes.item(0).focus();
}

/********************************************************************** 
*   purpose: �õ���Ԫ������
*   @param : objTbody��ָ��������
*   @param : nRow��ָ������к�
*   @param : nCol��ָ������к�
*   return : ����Ԫ�ص�ֵ
***********************************************************************/
function getCellValuef(objTbody,nRow,nCol){
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	return objTbody.rows(nRow).cells(nCol).childNodes.item(0).value;
}

/********************************************************************** 
*   purpose: ���õ�Ԫ������
*   @param : objTbody��ָ��������
*   @param : nRow��ָ������к�
*   @param : nCol��ָ������к�
*   @param : val��ֵ
***********************************************************************/
function setCellValuef(objTbody,nRow,nCol,val){
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	objTbody.rows(nRow).cells(nCol).childNodes.item(0).value = val;
}

/********************************************************************** 
*   purpose: �õ���Ԫ�����
*   @param : objTbody��ָ��������
*   @param : nRow��ָ������к�
*   @param : nCol��ָ������к�
*   return : ����
***********************************************************************/
function getObject(objTbody,nRow,nCol) {
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	if(nCol >= objTbody.rows(nRow).cells.length) return;
	return objTbody.rows(nRow).cells(nCol).childNodes.item(0);
}

/********************************************************************** 
*   purpose: ɾ��ָ����������У��������һ����
*   @param : objTbody��ָ��������
***********************************************************************/
function delAllRow(objTbody) {
	while(objTbody.rows.length>1) {
		objTbody.deleteRow(1);
	}
	clearRowVal(objTbody,0);
	setCellValuef(objTbody,0,0,1);
}

/********************************************************************** 
*   purpose: ���ָ�������
*   @param : objTbody��ָ��������
*   @param : nRow��ָ������к�
***********************************************************************/
function clearRowVal(objTbody,nRow) {
	if(objTbody == null) return;
	if(nRow >= objTbody.rows.length) return;
	for(var i=1;i<objTbody.rows(nRow).cells.length;i++) {	//����һ��Ԫ��Ϊ��ţ����Դӱ��ڶ���Ԫ�ؿ�ʼ����
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
*	purpose:�Ƚ��������ڵĴ�С
*	@param firstDate 
*	@param secondDate 
*	return �����firstDate=secondDate����0
*				 firstDate<secondDate����>0����
*				 firstDate>secondDate����<0����
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
		return("����������ڸ�ʽ���� !\n���ڸ�ʽ������'��-��-��'");
	}
	//������������ַ����ָ���3����
	idxBarI = cDate.indexOf("-");
	idxBarII= cDate.lastIndexOf("-");
	strY = cDate.substring(0,idxBarI);
	strM = cDate.substring(idxBarI+1,idxBarII);
	strD = cDate.substring(idxBarII+1,dSize);
	if(!TestKey(strY) || !TestKey(strM) || !TestKey(strD)) {
		return("����������ڸ�ʽ���� !\n���ڸ�ʽ������'��-��-��'");
	}
	strM = (strM.length < 2 ? '0'+strM : strM); 
	strD = (strD.length < 2 ? '0'+strD : strD);
	if(strY.length == 2)
		strY = (strY > 50 ? '19'+strY : '20'+strY);
	dataForm.value = strY+'-'+strM+'-'+strD;
	ok = ValDate(strM, strD, strY);
	if(ok==false) {
		return("����������ڸ�ʽ���� !\n���ڸ�ʽ������'��-��-��'");
	}
	return true;
}

function isValidNumber(dataForm) {
	if(dataForm.value == "") return true;
	if(dataForm.className=="money_4" || dataForm.className=="input_money_4_readonly" )
	{
		unformatCurrency_4(dataForm);
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
	else
	{
		formatCurrency(dataForm);
	}
	return true;
}

//����ַ����Ƿ�Ϊ����
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
 * ���绰����
***********************************************************************/
function TestPhone(phoneObj)
{
	var src = phoneObj.value;
	var aa,bb;
	chars= "-0123456789";
	for(var i=0;i<=src.length;i++)
	{
		if(chars.indexOf(src.charAt(i))==-1) {
			alert("����������֣�");
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
		alert("�绰����ĳ��ȳ�����Χ��");
			phoneObj.focus();
		return false;
	}
	if (bb.length > 0)
	{
		if (TestKey(bb) == false) {
			alert("����������֣�");
			phoneObj.focus();
			return false;
		}
		if (bb.length > 6) {
			alert("�绰����ĳ��ȳ�����Χ��");
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

//�������˱���mλС��
function formatnumber(val,m) {

	var num,intPart,dotPart,dotPos,destNum;
	//С����λ��
	dotPos=String(val).indexOf(".");
	//������������
	if(dotPos==-1)
		destNum=val;
	//��С��
	else
	{
		//��������(��С����)
		intPart=String(val).substring(0,dotPos+1);
		//С������
		dotPart=String(val).substring(dotPos+1);
		//С��λ��С��m��������
		if(dotPart.length<=m)
			destNum=val;
		//С��λ������m
		else {
			var tmp = new Array();
			for(var i=0;i<=m;i++) {
				//С������iλ��
				tmp[i] = String(dotPart).charAt(i);
			}
			//С������m+1λ��Ϊ5
			if(tmp[m]==5)
			{
				//С������mλ��Ϊ����1,3,5,7��round�����Զ���λ
				if(tmp[m-1]==1 || tmp[m-1]==3 || tmp[m-1]==5 || tmp[m-1]==7 || tmp[m-1]==9)
					destNum=Math.round(val*Math.pow(10,m))/Math.pow(10,m);
				//С�����ڶ�λ��Ϊż��0,2,4,6,8�������·�����λ
				else
				{
					//С������mλ����1
					tmp[m-1]=Number(tmp[m-1]) + Number(1);
					//������С���ϲ�
					dotPart = "";
					for(var i=0;i<m;i++) {
						dotPart = dotPart + String(tmp[i]);
					}
					destNum=intPart + dotPart;
				}
			}
			//С������m+1λ����Ϊ5��round�����Զ���λ
			else
				destNum=Math.round(val*Math.pow(10,m))/Math.pow(10,m);
		}
	}
	return(destNum);
}
/********************************************************************** 
 * ��ʽ������
 *	@param dataForm����Ҫ���и�ʽ��������
 *	@param n��������λ��
 *	@param m��С����λ��
***********************************************************************/
function formatNumberType(val,n,m) {
  n_str = String(formatnumber(val,m));
	return formatDotpart(n_str,m);
}
/********************************************************************** 
 * ����С������λ��
 *	@param val������
 *	@return С����λ��
***********************************************************************/
function countDot(val) {
	var dotPos=String(val).indexOf(".");
	if(dotPos!=-1)
    	return String(val).substring(dotPos+1).length;
    else return 0;
}

/** �γ���ָ��С��λ��������
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

function setFormatDown(type,dataForm) {
	switch(type) {
		case "TYPE_DATE":
			inputDateType(dataForm);
			break;
		case "TYPE_NUMBER":
			inputNumberType(dataForm);
			break;
		case "PURE_NUMBER":
			inputPureNumberType(dataForm);
			break;
		case "TYPE_PHONE":
			inputPhoneType(dataForm);
			break;
		default:
			break;
	}
	return;
}

function setFormatUp(type,dataForm) {
	switch(type) {
		case "TYPE_DATE":
			setDateType(dataForm);
			break;
		case "TYPE_NUMBER":
			setNumberType(dataForm);
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
							strResult = "�������ֳ�����Χ��";
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
						strResult = "�������ֳ�����Χ��";
					}
				}
			}
			else {
				strResult = "���벻�Ϸ���";
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
			alert("�������벻��ȷ");
			dataForm.value = "";
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

function inputPureNumberType(dataForm) {
	if(( 
		(event.keyCode == 8) || //"backspace" of the left keyboard
		(event.keyCode == 9) ||	//"tab" of the left keyboard
		(event.keyCode == 46) || //del" of the right keyboard
		(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board 
		(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard		
		(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
	  )) == false){
	event.returnValue = false;
	}
}

function inputPhoneType(dataForm) {
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
	event.returnValue = false;
	}
	if(event.keyCode == 109 ||event.keyCode == 189){
		if(dataForm.value.indexOf("-") != -1) event.returnValue = false;
	}
}

function inputNumberType(dataForm) {
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
		event.returnValue = false;
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
	if(event.keyCode == 109 ||event.keyCode == 189){
		if(dataForm.value.indexOf("-") == -1){
			if(dataForm.value != ""){
				//�޸ĵ�ǰֵ������ʱ�����븺��ʱ������
				if(dataForm.value == 0){
					dataForm.value = "";
					//������´������޷��õ���������⣬�����ֵΪ��ʱ�����ݴ�������������
					var num = dataForm.value.length;
					range = dataForm.createTextRange(); 
					range.collapse(true); 
					range.moveStart('character',num); 
					range.select();
				}
				else{
					dataForm.value = "-" + dataForm.value;
					//������´�������궨λ������
					range = dataForm.createTextRange(); 
					range.collapse(true); 
					range.moveStart('character',1); 
					range.select();  
					dataForm.fireEvent("onchange");
					event.returnValue = false;
				}
			}
		}
		else{
			var fieldText = dataForm.value;
			dataForm.value = fieldText.substr(1,fieldText.length-1);
			if(dataForm.value != ""){
				event.returnValue = false;
				//������´�������궨λ������
				var num = fieldText.length;
				range = dataForm.createTextRange(); 
				range.collapse(true); 
				range.moveStart('character',0); 
				range.select();
				dataForm.fireEvent("onchange");
			}
		}
	}
}

function setNumberType(dataForm){
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
		event.returnValue = false;
	}
}

function inputDateType(dataForm) {
	if((
		(event.keyCode == 8) || //"backspace" of the left keyboard
		(event.keyCode == 9) ||	//"tab" of the left keyboard
		(event.keyCode == 46) || //del" of the right keyboard
		(event.keyCode == 109) || //"-" of the right keyboard
		(event.keyCode == 189) || //"-" of the left keyboard
		(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board 
		(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard		
		(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
	   )) == false) {
		event.returnValue = false;
	}
	/*
	Here we list some cases need to be processed below:
	1.Requires just two "-" in the string.
	*/
	//1.handle the case 1:
	if(event.keyCode == 109 ||event.keyCode == 189) {//denote the "-" key
		if(charCounter(dataForm.value,"-") >= 2) {
			event.returnValue = false;
		}
	}	
}

/** 1128 added ����������ʱ����ֹʱ���û��������·ݺ�ϵͳ�Զ���������
 *	@param dataForm����Ҫ���д��������
 *	@param qzFlag����ֹ���ڱ�־��0����������ʱ����1����������ʱ��ֹ
 *	
*/
function setFormatUp_sssq(dataForm,qzFlag){
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

/** 1128 added ���ĳ�·ݶ�Ӧ������
 *	@param dataForm����Ҫ���д��������
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

//0114 added ��ʽ��������ݣ�eg val=1900000,���������1,900,000
function formatCurrency(currencyObj){
	unformatCurrency(currencyObj);//�˴������ȵ��ô˺���������dot�ָ��������е�dotȥ�������������û��dot���˺�����������κ�Ӱ��
	var val = currencyObj.value;
	if(val == "")	return;
	
	val = Math.round(parseFloat(val) * 100) / 100;
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
		    //���С����󣬾Ͳ���ʽ�������ˡ�
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

//0114 added ����������еĶ���ȥ����eg val=1,900,000,���������1900000
function unformatCurrency(currencyObj){	
	//maliang modified at 20060510 ,��ӶԿ�ѧ�������Ĵ������򣬻�����ݵĴ�����ƫ�
	//�磬�ὫE�����������������������㷨�Ĵ���
	var tmp_value = currencyObj.value;
	//������ÿ�ѧ��������ʾ�����ݣ�����ת��Ϊ������ʮ���Ʊ�ʾ����ֵ
	if((tmp_value.indexOf("E") > -1) || (tmp_value.indexOf("e") > -1)){
		currencyObj.value = parseFloat(tmp_value);//�����ѧ������
		
		//alert(currencyObj.value);
		
		currencyObj.value = Math.round(parseFloat(currencyObj.value) * 10000) / 10000;
	}
	//�������ִ�з���ʽ������
	//maliang 20060510 �޸Ľ���
	var val = currencyObj.value;
	var classNmae = currencyObj.className;
	if(val == ""&&classNmae=="money"){
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

//0217 added ȥ���������������ǰ�����õġ�0��������0001234.33,���Ϊ1234.33
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
 * �Ƚ����£������Ƿֿ���
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
 * �������������Ƿ�Ϸ�
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
 * У����������Ƿ���ȷ
 */
function verifyYearDigit(yearObj){
	var strYear = yearObj.value;
	if(strYear == "") return;
	if(strYear.length == 2){
		yearObj.value = (strYear > 50 ? '19'+strYear : '20'+strYear);
		return;
	}else if(strYear.length != 4){
		alert("�������Ȳ���ȷ��");
		yearObj.focus();
		yearObj.select();
		return false;
	}
	return true;
}

/**
 * ���������·�С��10�������·�ǰ��0
 */
function fillMonthDigit(monthObj){
	var strMonth = monthObj.value;
	if(strMonth == "") return;
	monthObj.value = (strMonth.length < 2 ? '0'+strMonth : strMonth); 
}

/**
 * У��������·��Ƿ������1��12֮�䣩
 */
function verifyMonth(monthObj){
	var strMonth = monthObj.value;
	if(strMonth == "") return;
	if((Number(strMonth) < 1) || (Number(strMonth) > 12)){
		alert("������·ݲ���ȷ��");
		monthObj.focus();
		monthObj.select();
		return false;
	}
	return true;
}
/********************************************************************** 
*   purpose: �õ�������table�����ڵĵ㣬ҳ���HTML��ʽΪ<TABLE><TBODY><TR><TD>
*   		 ע��ʹ�ô˷�����Ҫ��ҳ���϶���ȫ�ֱ���objTBL
*   @param : obj�����Ԫ����,��<td>��һ������Ӧ�ı�ǩ����
*    return: arrP����������λ�ã��У��У�
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
	
	arrP[0] = cel.parentElement.rowIndex;		//ȥ��TH��к�
	arrP[1] = cel.cellIndex;					//ȥ�����No��
	nRowNo = arrP[0];
	nCellNo = arrP[1];
	nTbyRowNo = cel.parentElement.sectionRowIndex;
}

/********************************************************************** 
*   ��ѡ����ʱ��ʹ������ɫ�����仯�����
***********************************************************************/
function selectRow() {
  
	for(var i=0;i<objTBY.rows.length;i++) {
		objTBY.rows[i].bgColor = "#E8ECE8";
	}
	objTBY.rows[nTbyRowNo].bgColor = strSelectRowColor;
}
/********************************************************************** 
*   ��ʼ��ҳ�����������
*	�������ͳ�ʼֵ0��˰�����ͳ�ʼֵ0�����������ͳ�ʼֵ�գ�Ǯ�����ͳ�ʼ0��00
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
		else
		{
			obj.value="0.00";
		}
	}
}
/********************************************************************** 
*   ���������ת��Ϊ��������
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
 * ��˰��������С����ʽת��Ϊ����ʽ����ʾ(С�����4λ)
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
	slObj.value = str + "%";
}

/**********************************************************************
 * ��˰��������С����ʽת��Ϊ����ʽ����ʾ(С�����6λ)
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
	slObj.value = str + "%";
}

/**********************************************************************
 * ��˰��������С����ʽת��Ϊ����ʽ����ʾ(С�����8λ)
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
	slObj.value = str + "%";
}

/**********************************************************************
 * ��˰��������С����ʽת��Ϊ����ʽ����ʾ(С�����10λ)
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
	slObj.value = str + "%";
}

/********************************************************************** 
 * ��˰��������С����ʽת��Ϊ����ʽ����ʾ
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
	slObj.value = str + "%";
}
/********************************************************************** 
 * ��˰�������ɣ���ʽת��ΪС����ʽ����ʾ
***********************************************************************/
function formatSl(slObj){
	var str="";
	//���ַ�����ʽ��,תΪ0
	if(slObj.value.length==0)
	  slObj.value=0;
	if(slObj.value.substr(slObj.value.length-1,1)=="%")
	{
		str=slObj.value.substr(0,slObj.value.length-1);
		slObj.value = parseFloat(str)/100;
	}
}

/**
������ݺ��·ݷ�������   add by dxy
*/
function getday(year,month)
{


	if ((year=="") || (year < 1900)) {
		alert("���������1900����ݣ�");
		return ;
	}

    if ((month=="") || (month < 1) || (month > 12)){
		alert("��������Ч�·ݣ�");
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


//idΪTABLE��id
function addOneRow(tbname)
{
	var oRow;		 //�У�TR������
	var oCell;		 //��Ԫ��TD������
   var nTbyRowNum; //������

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

   //�����������е����ֵ����һ�У�
   id.rows(nTbyRowNum).cells(0).childNodes.item(0).value = nTbyRowNum;
   
   //���ð�ť��ֵ
   var cols = cellsLength - 1;   //���һ��
  
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

//idΪTABLE��id��nΪɾ���ļ�¼��
function delOneRow(tbname, n)
{
   var id = document.all(tbname);
   if(id.rows.length <= 0) return;

   if(confirm("ȷ��Ҫɾ��ָ������") == false) return;

   id.deleteRow(n);

   var nTbyRowNum = id.rows.length;
   if(nTbyRowNum <= 1)
   {
      return;
   }

   var cols = id.rows(0).cells.length;
   cols--;

   //�������¸��кŶ���1
   for(k = n; k <= nTbyRowNum - 1; k++)
   { 
      //�����е���ţ���һ�У�
      id.rows(k).cells(0).childNodes.item(0).value = k;

      //���ð�ť��ֵ�����һ�У�
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
 * ����������ı�������볤��
***********************************************************************/
function limitInput(o,str)
{
	var str1=o.value;
	if(str)
	{
		if(o.value.length>str)
		{
			str1=o.substr(0,str);
			alert(o.displayname+"��󳤶Ȳ��ܳ���"+str+"λ");
		}		
	}
	o.value=str1;
}
/********************************************************************** 
 * У���ʱ��ǲ�����λ
***********************************************************************/
function checkYzbm(o)
{
  var values = o.value;
  if((values != null) && (values != ""))
  {
     if(values.length !=6)
     {
       alert("��������Ӧ����6λ����!");
       o.focus();
       return false;
     }
  }
  return true;
}
/********************************************************************** 
 * У����˰��ʶ����ǲ���20&15λ
***********************************************************************/
function checkNsrsbh(o)
{
	var values= o.value;
	if((values != null) && (values != ""))
	{
		 if(values.length !=15 && values.length !=20)
		{
			alert("��˰��ʶ���ӦΪ20λ��15λ!");
			o.focus();
			return false;
		}
	}
	return true;
}
/********************************************************************** 
 * Ϊ����������ȱʡ��ѡ����
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
 * Ϊ��ѡ������ȱʡ��ѡ����
***********************************************************************/
function checkItem(o)
{
	if(o.checkitem==o.value)
	{
		o.checked=true;
	}
}
/********************************************************************** 
 * ����ʽ������
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
 * ��ʼ������
***********************************************************************/
function initdate(o)
{
	if(o.value.length==8)
	{
		o.value=o.value.substr(0,4)+"-"+o.value.substr(4,2)+"-"+o.value.substr(6,2);
	}
}

/*
 * bit����С����λ��
 * 2012-09-11 zhizhong yang
 */
function keypressBit(objTR,bit) {
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
 * ������֤
 *
 *2012-09-11 zhizhong yang
 */
function mustEnter(par){
	for (var i = 0; i < xform.all.item(par).length; i++){
		if(null == xform.all.item(par)[i].value || "" == xform.all.item(par)[i].value){
			alert("���д��ڿ����ݣ���ȷ�ϣ�");
			return false;
			break;
		}
	}
	return true;
}
/********************************************************************** 
 * ����ʽ������ ��YYYY-MM-DD ת��ΪYYYYMMDD
***********************************************************************/
function formatDate(dateObj){
	if(dateObj.value.length==0){
		dateObj.value = "";
	}else{
		dateObj.value = dateObj.value.replace(/-/g,'');
	}
}


//0114 added ��ʽ��������ݣ�eg val=1900000,���������1,900,000
function formatCurrency_6(currencyObj){
	unformatCurrency_6(currencyObj);//�˴������ȵ��ô˺���������dot�ָ��������е�dotȥ�������������û��dot���˺�����������κ�Ӱ��
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
		    //���С����󣬾Ͳ���ʽ�������ˡ�
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

//0114 added ����������еĶ���ȥ����eg val=1,900,000,���������1900000
function unformatCurrency_6(currencyObj){	
	//maliang modified at 20060510 ,��ӶԿ�ѧ�������Ĵ������򣬻�����ݵĴ�����ƫ�
	//�磬�ὫE�����������������������㷨�Ĵ���
	var tmp_value = currencyObj.value;
	//������ÿ�ѧ��������ʾ�����ݣ�����ת��Ϊ������ʮ���Ʊ�ʾ����ֵ
	if((tmp_value.indexOf("E") > -1) || (tmp_value.indexOf("e") > -1)){
		currencyObj.value = parseFloat(tmp_value);//�����ѧ������
		
		currencyObj.value = Math.round(parseFloat(currencyObj.value) * 1000000) / 1000000;
	}
	//�������ִ�з���ʽ������
	//maliang 20060510 �޸Ľ���
	var val = currencyObj.value;
	var classNmae = currencyObj.className;
	if(val == ""&&classNmae=="money"){
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
	unformatCurrency_4(currencyObj);//�˴������ȵ��ô˺���������dot�ָ��������е�dotȥ�������������û��dot���˺�����������κ�Ӱ��
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
		    //���С����󣬾Ͳ���ʽ�������ˡ�
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
	//������ÿ�ѧ��������ʾ�����ݣ�����ת��Ϊ������ʮ���Ʊ�ʾ����ֵ
	if((tmp_value.indexOf("E") > -1) || (tmp_value.indexOf("e") > -1)){
		currencyObj.value = parseFloat(tmp_value);//�����ѧ������
		
		currencyObj.value = Math.round(parseFloat(currencyObj.value) * 10000) / 10000;
	}
	//�������ִ�з���ʽ������
	//maliang 20060510 �޸Ľ���
	var val = currencyObj.value;
	var classNmae = currencyObj.className;
	if(val == ""&&classNmae=="money_4"){
		val = "0.0000";
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
