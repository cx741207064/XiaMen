//�����걨��ʱ�������˰����Ԥ�ɻ�����������ʾ
function showJmYjPrompt(yjse,jmse,jmzl_dm,nsrsbh){
	if(parseFloat(yjse) > 0){
		alert("��˰��ʶ��ţ�" + nsrsbh + "\n����Ԥ��˰��:" + yjse + "Ԫ");
	}
	if(parseFloat(jmse) > 0){
		if(jmzl_dm == "01"){
			alert("��˰��ʶ��ţ�" + nsrsbh + "\n���ڼ������Ϊ:" + parseFloat(jmse)*100 + "%");
		}
		if(jmzl_dm == "02"){
			alert("��˰��ʶ��ţ�" + nsrsbh + "\n���ڼ���˰��Ϊ:" + jmse + "Ԫ");
		}
	}
}

//��ʼ��ʱ���ã�������ʽ��������ݣ�����10000����ʽ����Ϊ10,000.00
function formatNumberValue(ObjName){
	eval("var coll = document." + ObjName + ".tags('input');");
	for(var i=0;i<coll.length;i++){
		coll[i].value = formatNumberType(coll[i].value,0,2);
		formatCurrency(coll[i]);
	}
}

//��ʽ�걨ʱ����
function doSubmit(strUrl)
{
	if(confirm("�Ƿ�ȷ���ύ�걨��"))
	{
		//var a = event.srcElement;
		//document.xform.modify.disabled = true;
        //document.xform.exit.disabled = true;
        //document.xform.zssb.disabled = true;
		//alert(a.name);
		window.location=strUrl;
	}
}

function addTab(strUrl){
	window.location = strUrl;
}  

function checkdata(){
	for(var i=0;i<document.xform.elements.length;i++)
	{
		var obj=document.xform.elements[i];
		//wanglei 2004-09-23 ���Ӷ�NaN%���ж�
		//if(obj.value==null || String(obj.value)=="undefined" || String(obj.value)=="" || String(obj.value)=="NaN")
		if(obj.value==null || String(obj.value)=="undefined" || String(obj.value)=="" || String(obj.value)=="NaN" || String(obj.value)=="NaN%")
		{
			obj.value="0.00";
		}
	}
}

function exitthis(strUrl)
{
   window.location = strUrl;
}

function insertdisabled()
{
	document.xform.save.disabled = true;
    //document.xform.exit.disabled = true;
  
}
function updatedisabled()
{
	//document.xform.modify.disabled = true;
    //document.xform.exit.disabled = true;
    //document.xform.delet.disabled = true;
}