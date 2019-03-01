/**��������ģ��
 * @copyright digitalChina 2002
 * @author xiaojf
 * @date 2002-12-14
 */

/**�ڱ�ģ���checkDate�����п�ʶ�𲢸�ʽ�����������Ϳɰ���
 * s �ַ�������	(���ִ�Сд,����Ϊ���'label'�ĵڶ����ַ�)
 * n ����		(���ִ�Сд,����Ϊ���'label'�ĵڶ����ַ�)
 * c ������		(���ִ�Сд,����Ϊ���'label'�ĵڶ����ַ�)
 * d ������		(���ִ�Сд,����Ϊ���'label'�ĵڶ����ַ�)
 * p �ٷ�������	(���ִ�Сд,����Ϊ���'label'�ĵڶ����ַ�)
 * ���������,�涨�ַ� 'Y' Ϊ�������� 'N' Ϊ�ɿ��� (���ִ�Сд,����Ϊ���'label'�ĵ�һ���ַ�)
 */

/**����ָ�����е��������
 * @param fName ��������
 */
function lockAll(fName)
{
	for(var i=0;i<fName.elements.length;i++)
		{
			var obj=fName.elements[i];
			obj.disabled=true;
		}
}

/**����ָ�����е��������Ϊ����
 * @ fName ��������
 */
function free(fName)
{
	for(var i=0;i<fName.elements.length;i++)
		{
			var obj=fName.elements[i];
			obj.disabled=false;
		}
}

/**��ָ���������е��ı���Ϊ��ʼֵ
 * @ fName ��������
 */
function clear(fName)
{

	for(var i=0;i<fName.elements.length;i++)
		{
		    var obj=fName.elements[i];
			if(typeof(obj.label)!="string")
			{
				continue;
			}
			if(obj.label=="")
			{
			   continue;
			}
			var tempStr=obj.label.charAt(1);
			if((tempStr=="N")||(tempStr=="n"))
			{
				obj.value="0";
			}
			if((tempStr=="C")||(tempStr=="c"))
			{
				obj.value="0.00"
			}
			if((tempStr=="D")||(tempStr=="d"))
			{
				obj.value=""
			}
		}
}

/**��֤�������Ƿ���д,��֤�����Ƿ�Ϸ�
 * @ fName ��������
 */
function checkDate(fName)
{

	for(var i=0;i<fName.elements.length;i++)
	{
		var obj=fName.elements[i];

		if(typeof(obj.label)!="string")
		{
				continue;
		}
		if(obj.label=="")
		{
			   continue;
		}
		if((obj.label.charAt(0)!="Y")&&(obj.label.charAt(0)!="y")&&
		(obj.label.charAt(0)!="N")&&(obj.label.charAt(0)!="n")){alert("Ԫ�ص�'label'��ʽ����!");return false;}

		//ͨ����һ���ַ���֤�Ƿ�Ϊ������ 'Y'��'y'Ϊ����,'N'��'n'Ϊ�ɿ�
		var str1=obj.label.charAt(0);
		//ͨ����֤�ڶ����ַ����ж�����
		var str2=obj.label.charAt(1);
		var str3=obj.label.substring(2,obj.label.length);
		if((str1=='Y')||(str1=='y'))
		{
			if(obj.value=="")
			{alert(str3+"����Ϊ��!");obj.focus();return false;}

			if((str2=="N")||(str2=="n"))
						{
							if(isNaN(parseInt(obj.value)))
							{
								alert(str3+"����Ϊ����!");
								obj.value="";
								obj.focus();
								return false;
							}
						}
			if((str2=="D") ||(str2=="d"))
						{
							isdate(obj);

						}
			if((str2=="C") ||(str2=="c") ||(str2=="P") ||(str2=="p"))
			{
				var tmpV=obj.value;
				if(obj.value.charAt(0)=="-")
				{
					tmpV=obj.value.substring(1,obj.value.length)
				}
				if(isNaN(parseInt(tmpV) || tmpV==NaN || tmpV==""))
				{
					if(str2=="P"||str2=="p")
					{alert(str3+"Ϊ�Ƿ��ٷ��ʸ�ʽ!");obj.value="0.00";return false;}
					if(str2=="C"||str2=="c")
					{alert(str3+"Ϊ�Ƿ����Ҹ�ʽ!");obj.value="0.00";return false;}
				}

				if(tmpV.indexOf(".")==-1)
				{
					if(parseInt(tmpV)==0)
					{obj.value="0.00";}
					if(parseInt(tmpV)!=0)
					//alert("��checkdate��");
					{obj.value=obj.value+".00"}
				}


			}

			if((str2=="S") ||(str2=="s"))
			{
			}
		}
	}
	return true;
}

/**�ú����������͵��ı���ʧȥ����(onchange)ʱ����,������ʽ������
 * @ obj ��Ҫ������ı������
 */
function isdate(obj)
 {
	//if(b!="1"){return};
	var str1=obj.label.charAt(0);
	var str2=obj.label.charAt(1);
	var str3=obj.value;
	var str4=obj.label.substring(2,obj.label.length);
	if((str1=="Y")||(str1=="y"))
	{
		if((str3.length!=10) && (str3.length!=8))
		{
			alert("'"+str4+"'���ڸ�ʽ����!");
			obj.value="";
			obj.focus();
			return;
		}
		if(str3.length==10)
		{
			if(str3.indexOf(".")!=-1)
			{
				if(str3.indexOf(".")!=4 || str3.lastIndexOf(".")!=7)
				{
					alert("'"+str4+"'���ڸ�ʽ����!");
					obj.value="";
					obj.focus();
					return;
				}
			}	
			if(str3.indexOf("-")!=-1)
			{
				if(str3.indexOf("-")!=4 || str3.lastIndexOf("-")!=7)
				{
					alert("'"+str4+"'���ڸ�ʽ����!");
					obj.value="";
					obj.focus();
					return;
				}
			}
		}
		if(str3.length==10)
		{
			str3=str3.substring(0,4)+str3.substring(5,7)+str3.substring(8,10);
		}	
		var yVal=str3.substring(0,4);
		var mVal=str3.substring(4,6);
		var dVal=str3.substring(6,8);
		//���ڴ���1900��01��01��С��2072��12��31
		if((parseInt(yVal)<1900) || (parseInt(yVal)>2072)|| yVal==0000)
		{
			alert(str4+"���ڱ�����'1900��01��01��'��'2072��12��31��'֮��.");
			obj.focus();
			return;
		}
		
		if(mVal.charAt(0)=="0")
		{
			var mValTmp=mVal.charAt(1);
			if(parseInt(mValTmp)==0 ||parseInt(mValTmp)>12)
			{
				alert("'"+str4+"'���ڴ���!");
				obj.value="";
				obj.focus();
				return;
			}
		}
		if(dVal.charAt(0)=="0")
		{
			var dValTmp=dVal.charAt(1);
			if(parseInt(dValTmp)==0 ||parseInt(dValTmp)>31)
			{
				alert("'"+str4+"'���ڴ���!");
				obj.value="";
				obj.focus();
				return;
			}
		}
		obj.value=str3.substring(0,4)+"-"+str3.substring(4,6)+"-"+str3.substring(6,8);
	}	
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
/**��ʽ���������͵����ݸú������ı����onchange�¼��е���
 * @ param obj ��Ҫ��ʽ�����
 */
function iscurrency111(obj)
{
	if(obj.value==""){obj.value="0.00";}
	var f=obj.value;
	var fb=false;
	if(obj.value.charAt(0)=="-")
	{
		f=obj.value.substring(1,obj.value.length)
		fb=true;
	}
	if(isNaN(parseFloat(f)) || obj.value.charAt(0)==".")
	{
		var strs=obj.label.substring(2,obj.label.length);
		alert(strs+"Ϊ�Ƿ����Ҹ�ʽ1!");
		obj.value="0.00"
		fb=false;
		return;
	}
	var iB=Math.pow(10,2);//pow��
	obj.value= Math.round(parseFloat(f)*iB)/iB;
	if(obj.value.indexOf(".")==-1)
	{
		obj.value=obj.value+".00";
		fb=false;
		return;
	}
	var tempstr1=obj.value;
	if(tempstr1.indexOf(".")!=-1){
		if(tempstr1.substring(tempstr1.indexOf("."),tempstr1.length).lenght==1)
		{
			obj.value=obj.value+"0";
			if((fb==true) && (obj.value.charAt("0")!="-")){obj.value="-"+obj.value}
			fb=false;
			return;
		}
		if(tempstr1.substring(tempstr1.indexOf("."),tempstr1.length).lenght==0)
		{

			obj.value=obj.value+"00";
			if((fb==true) && (obj.value.charAt("0")!="-")){obj.value="-"+obj.value}
			fb=false;
			return;
		}
	}
}

/**��ʽ���������͵����ݸú������ı����onchange�¼��е���
 * @ param obj ��Ҫ��ʽ�����
 */
function iscurrency(obj)
{
	if(obj.value==""){obj.value="0.00";}
	var f=obj.value;
	var fb=false;
	if(obj.value.charAt(0)=="-")
	{

		f=obj.value.substring(1,obj.value.length);
		fb=true;
	}
//	if(isNaN(parseFloat(f)) || obj.value.charAt(0)==".")
	if(isNaN(parseFloat(f)))              //1113 updated	
	{
		var strs=obj.label.substring(2,obj.label.length);
		//alert(strs+"Ϊ�Ƿ����Ҹ�ʽ!");
		obj.value="0.00"
		fb=false;
		return;
	}
	var iB=Math.pow(10,2);//pow��
	obj.value= Math.round(parseFloat(f)*iB)/iB;

	if(obj.value.indexOf(".")==-1)
	{
		if(fb==true)
		{obj.value="-"+obj.value+".00";}
		else
		{obj.value=obj.value+".00";}
		return;
	}
	var ff=obj.value;
	if(ff.indexOf(".")!=-1){
		if(ff.substring(ff.indexOf("."),ff.length).length==1)
		{
			obj.value=obj.value+"0";
			if(fb==true){obj.value="-"+obj.value}

			return;
		}
		if(f.substring(f.indexOf("."),f.length).length==0)
		{

			obj.value=obj.value+"00";
			if(fb==true)
				{obj.value="-"+obj.value}

			return;
		}
		if(fb==true){obj.value="-"+obj.value;}
	}
}


/**��ʽ���ٷ������͵�����,�ú������ı����onchange�¼��е���
 *
 */
function ispercent(obj){
	if(obj.value.indexOf("%")==-1)
	{
		obj.value=obj.value+"%"
	}
}

/**��onkeyup�¼��ﴥ��,������Լ��������ַ�
 * @ param obj ��������
 */
function onKeyDownT(obj)
{
	var b=obj.label.charAt(1);
	b=b.toLowerCase();
	if(event.keyCode == 8 || event.keyCode == 46){
		/*var rng = window.document.selection.createRange();
		if (rng!=null && rng.parentElement().type == "text")
		{
			if(rng.text.length==rng.parentElement.value.length)
			{
				if(b=="n"){rng.parentElement.value=="0";}
				if(b=="c"|| b=="p"){rng.parentElement.value=="0.00";}
				if(b=="d"|| b=="s"){rng.parentElement.value=="";}
			}
	    }
		else*/ if(obj.value!="")
		{
			obj.value=obj.value.substring(0,obj.value.length-1);
		}
	}
	switch(b){
		case 'n':
			if(event.keyCode == 13){event.keyCode = 9;}
			if((
			(event.keyCode == 9) ||	//"tab" of the left keyboard
			(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board
			(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard
			(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
			)) == false){
			event.returnValue = false;
			}
		     break;
		case 'p':
		case 'c':
		if(event.keyCode == 13){event.keyCode = 9;}
		if((
			(event.keyCode == 9) ||	//"tab" of the left keyboard
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
//		if(event.keyCode == 109 ||event.keyCode == 189){
//			event.returnValue = false;
//		}
		break;
		case 'd':
			if(event.keyCode == 13)
			{
				/*if(obj.value.length!=10)
				{event.returnValue = false;}
				else{event.keyCode = 9;}*/
				event.keyCode = 9;
			}
		if((
			(event.keyCode == 9) ||	//"tab" of the left keyboard
			(event.keyCode == 110) || //"." of the left keyboard
			(event.keyCode == 190) || //"." of the right keyboard
			(event.keyCode == 109) || //"-" of the right keyboard
			(event.keyCode == 189) || //"-" of the left keyboard
			(event.keyCode >=35 && event.keyCode <=40) || // direction keys of the right key board
			(event.keyCode>=48 && event.keyCode <=57) || //0-9 of the left keyboard
			(event.keyCode >= 96 && event.keyCode <=105 //0-9 of the right keyboard
			 )) == false){
			event.returnValue = false;
			}
		else{
				if(obj.value.length==5)
				{
					if(event.keyCode!=48 && event.keyCode!=49 && event.keyCode!=96 && event.keyCode!=97)
					{event.returnValue=false;}
				}
				if(obj.value.length==8)
				{
					if(obj.value.charAt(5)==0 && obj.value.charAt(6)==2)
					{
						if(event.keyCode!=48 && event.keyCode!=49 && event.keyCode!=50 && event.keyCode!=96 && event.keyCode!=97 && event.keyCode!=98)
						{
							event.returnValue=false;
						}
					}
					if(event.keyCode!=48 && event.keyCode!=49 && event.keyCode!=96 && event.keyCode!=97 && event.keyCode!=98 && event.keyCode!=99 && event.keyCode!=50 && event.keyCode!=51)
					{event.returnValue=false;}
				}
			if(event.keyCode==109 || event.keyCode==189 || event.keyCode==110 ||event.keyCode==190)
			{event.returnValue=false;}

			if(obj.value.length==4)
			{obj.value=obj.value+"-";}
			if(obj.value.length==7)
			{obj.value=obj.value+"-";}
			if(obj.value.length==10)
			{event.returnValue=false;}
		}
	}
}

/**��onkeyup�¼��ﴥ��,Լ��������ַ�
 * @ param obj ��������
 */
function onKeyUpT(obj)
{
	var t=obj.label.charAt(1);
	t=t.toLowerCase();
	strError = "";
	switch(t){
		case 'n':
		break;
	//	case n
		break;
		case 'c':
		break;
		case 'p':
		break;
		case 'd':
		if(event.keyCode != 8 && event.keyCode != 46){//denote "backspace" and "del" keys.
			if(obj.value.length == 4 || obj.value.length == 7){
				if(obj.value.indexOf(".") != -1){
					if(charCounter(obj.value,".")<2)
						 obj.value += ".";
				}
				else
					if(charCounter(obj.value,"-")<2)
						 obj.value += "-";
			}
		}
		break;
	}
}
/**����С��λ��
 *
 */
function charCounter(str,c)
{
	strError = "";
	var i = 0;
	var count = 0;
	while(i<str.length){
		if(str.charAt(i) == c) count++;
		i++;
	}
	return count;
}
/**��ʽ��������ֵ
 *@ obj ����ֵ�ı���
 *@ return ��ʽ�����ֵ
 */
 function chg(obj){
if(isNaN(obj.value) || obj.value==""){obj.value="0.00";return;}
	var iB=Math.pow(10,2);//pow��
	obj.value= Math.round(parseFloat(obj.value)*iB)/iB;
	var s=obj.value;
	if(s.indexOf(".")==-1)
	{
		if(s=="0"){s="0.00"}
		else{s=s+".00"}
	}
	return s;
 }
//���ܣ��ж��Ƿ�Ϊ��ʾҳ��
function display(fName){

	if(document.fName.TABLE_ACTION.value=="display")
	{
		for(var i=0;i<fName.elements.length;i++)
		{
			var obj=fName.elements[i];
			obj.readonly=true;
		}
	}
}




//���DataWindow���������ݵ��Ƿ�Ϊ����
function chkNum_dw(myvalue){
  var invalidate1="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var invalidate2="`-=\;',/~!@#$%^&*()_+|:<>?";
  var indexstr="";
  for (var i=0;i<invalidate1.length;i++)
  {
		indexstr=invalidate1.substr(i,1);
		if(myvalue.toString().indexOf(indexstr)!=-1){
		  alert("���棺\n�������˷�����������");
		  return false;
		}
  }

  for (var i=0;i<invalidate2.length;i++)
  {
		indexstr=invalidate2.substr(i,1);
		if(myvalue.toString().indexOf(indexstr)!=-1){
		  alert("���棺\n�������˷�����������");
		  return false;
		}
  }

  if (myvalue.toString().indexOf(".")==0)
  {
	  alert("���棺\n���������");
	  return false;
  }

  return true;
}



/**
 * ��֤�������Ƿ�Ϸ���������Ӧ��ʽת��
 * @ fName ���������
 */
function chkInput(obj)
{
    if (!chkTxtFldLbl(obj.label)) {
        return false;
    }

    var canNull = (obj.label.charAt(0).toLowerCase() == "n");
    var type = obj.label.charAt(1).toLowerCase();
    var name = obj.label.substring(2, obj.label.length);

    if (obj.value == "") {

        if (type == "n") {
            obj.value = "0";
            return true;
        }

        if (type == "c") {
            obj.value = "0";
            return true;
        }

        if ( (type == "s" || type == "d") && !canNull ) {

            alert("���棺\n"+name + "����Ϊ�գ�������д��");
            return false;
        }

        return true;
    }

    if (type == "n" && isNaN(parseInt(obj.value))) {

        alert("���棺\n"+ name + "ӦΪ�����������޸ġ�");
        obj.value = "0";
        obj.focus();
        return false;

    } else if (type == "d") {

        if (!chkDate(obj)) {
            return false;
        }

    } else if (type == "c") {

        if (!chkCurrency(obj)) {
            return false;
        }

    } else if ( type == "s") {

    }
}

/**
 * ����������label��ʽ�Ƿ���ȷ
 * @param str �������label
 */
function chkTxtFldLbl(str) {

    if (str == "" || typeof(str) != "string") {
        return false;
    }

    if ((str.charAt(0) != "Y") && (str.charAt(0) != "y") &&
        (str.charAt(0) != "N") && (str.charAt(0) != "n")) {

        alert("���棺\n������" + str + "��label��ʽ����\n�������labelӦ��Y(y)��N(n)��ͷ��");
        return  false;
    }

    return true;
}


function chkCurrency(obj) {

	var f = obj.value;

	if(isNaN(parseFloat(f)) || obj.value.charAt(0) == ".") {
		var strs = obj.label.substring(2, obj.label.length);
		alert("���棺\n"+strs + "ӦΪ��λС���������޸ġ�");
		obj.value="0.00"
		return;
	}

	var iB = Math.pow(10, 2);// 10��2����
	obj.value = Math.round(parseFloat(f)*iB)/iB;

}



function chkDate(obj) {

    var year  = parseInt(rmLeadZero(obj.value.substr(0, 4)));
    var month = parseInt(rmLeadZero(obj.value.substr(4, 2)));
    var day   = parseInt(rmLeadZero(obj.value.substr(6, 2)));

    if (obj.value.length != 8 || isNaN(parseInt(obj.value))) {
        alert("���棺\n���ڸ�ʽ����\n��ʹ��8λ���ֱ�ʾ���ڡ�\n�磺ʹ��20021002����2002��10��02�ա�");
        obj.focus();
        return false;
    }

    if ( year  < 1970 || year  > 2020 ||
         month < 1    || month > 12   ||
         day   < 1    || day   > 31) {
        alert("���棺\n���ڸ�ʽ����\n��ȷ������������ڸ�ʽ�뷶Χ����ȷ��");
        obj.focus();
        return false;
    }

    return true;
}



function truncFloat(floatnum)
{
	return Math.round(parseFloat(parseInt((floatnum * 1000).toString()).toString()) / 10) / 100;
  //return parseFloat(parseInt((floatnum * 100).toString()).toString()) / 100;
}

//���ȡֵΪNULLֵ������Ϊ""
function nu(fName){
	for(var i=0;i<fName.elements.length;i++)
		{
		    var obj=fName.elements[i];
			if(obj.value==null)
			{
				obj.value="";
			}
		}
}

//��������
function isreal(thestr)
{

if ((thestr=="0.00")||(thestr=="0")||(thestr==''))
{return 0;}
var thestr=String(thestr);
var ttt=thestr.indexOf("-");
var dotlst=thestr.indexOf(".");
var dotend=thestr.length;
if ((dotlst==-1)||(dotend-dotlst<=3)) {return thestr;}
else
{
	var dot2nd=thestr.indexOf(".");

	var intpart=thestr.substring(0,dot2nd);

	var decpart=thestr.substring(dot2nd+3,dot2nd+4);

	var dec=thestr.substring(dot2nd+1,dot2nd+3);

    var thestr1;
	if(parseInt(decpart)>=5)
	{
	  var tmp1="1";

	  if(parseInt(dec)==0)
		{
			var t1=dec.substring(1,2);
			thestr1=parseInt(t1)+parseInt(tmp1);
	    }
      else
		{
		  thestr1=parseInt(dec)+parseInt(tmp1);
		}
	 if(thestr1==100)
	  {
		var tmp2="1";
		if(String(ttt)=="0")
		{
		  tmp2="-1";
		}
		thestr=parseInt(intpart)+parseInt(tmp2);
		thestr=String(thestr)+".00";
	  }
	  else if(thestr1<=9)
	  {
		 thestr=String(intpart)+".0"+String(thestr1);
	  }
	  else
	  {
		thestr=String(intpart)+"."+String(thestr1);
	  }
	 }
	else
	{thestr=String(intpart)+"."+String(dec);}
		return thestr;
	}
  }
//����У��
//onkeyup="onkeyupDate(this)" onkeydown="onkeyDnDate(this)" onblur="onkeyupDate(this)"



function onkeyupDate( obj )
{
	var KEY_BACKSPACE	= 8;
	var CHARS = "0123456789";

	//��ȡ�༭������
	var szValue = obj.value;
	var iKeyCode = event.keyCode;


	//��ݱ�����1��2��ͷ,�������һ����ʱ��
	if( szValue.length >= 1 )
	if( szValue.charAt(0) != "1" && szValue.charAt(0) !="2" )
	{
		alert( "��ݱ�����1��2��ͷ!\n����������" );
		obj.value = "";
		return ;
	}
	
	if( iKeyCode != KEY_BACKSPACE ) 
	{
	//����λ��1��ʱ���Զ����9������λ��2��ʱ���Զ����0
		if( szValue == "1"  )
			obj.value = obj.value + "9";
		if( szValue == "2"  )
			obj.value = obj.value + "0";
	}
			
	//��������4λ��7λ���ֵ�ʱ�����Զ��������ֺ�����Ϸָ�����		
	if( iKeyCode != KEY_BACKSPACE )
	{ 	
		if( szValue.length == 4  )
			obj.value = obj.value + "-";
		if( szValue.length == 7  )
			obj.value = obj.value + "-";
	}
	
	var i;

	//�����ݵĺϷ���
	if( szValue.length >= 1)
	for(  i = 0 ; i < 4 ; i ++ )
	{
		if( CHARS.indexOf( szValue.charAt(i) ) == -1 )
		{
			alert( "��ݱ��ʽ�а�������ȷ���ַ�!\n���������롣" );
			event.returnValue = false;
			obj.value = "";
			return;
		}
		if( i == szValue.length -1 )
			break;
	}

	//�����ݷָ����ĺϷ���
	if( szValue.length >= 5 )
	if( szValue.charAt(4) != "-" )
	{
		alert( " ��ݷָ�����ﲻ��ȷ!\n���������롣" );
		event.returnValue = false;
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}
/*
	//ע�Ͳ���,�����˽�����,����1-9����,��Ҫ���û�������¼��0

	//����·���λ�ĺϷ���
	if( szValue.length >= 6  )
	if( szValue.charAt(5) != "1" && szValue.charAt(5) != "0")
	{
		alert( " �·ݱ��ʽ����ȷ!\n���������롣" );
		event.returnValue = false;
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}
*/

	//����·���λ�ĺϷ���,����������
	if( szValue.length == 6  )
	if( CHARS.indexOf( szValue.charAt(5) ) == -1 )
	{
		alert( "�·ݱ��ʽ�а�������ȷ���ַ�!\n���������롣" );
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}


	//����·���λ�ĺϷ���,����λ�Ǵ���1��������Ҫ��0
	if( szValue.length == 6  )
	if( szValue.charAt(5) != "1" && szValue.charAt(5) != "0")
	{
		szValue = szValue.substring( 0 , 5 ) + "0" + szValue.charAt(5) + "-";
		obj.value = szValue;
		return;		
	}

	//����·���λ�ĺϷ���,������2001-1-�������,�����и�ʽ����
	if( szValue.length == 7  )
	if( szValue.charAt(5) == "1" && szValue.charAt(6) == "-")
	{		
		szValue = szValue.substring( 0 , 5 ) + "0" + szValue.charAt(5) + "-";
		obj.value = szValue;
		return;		
	}

	//����·�ĩλ�ĺϷ���,�����10������,�����12��
	if( szValue.length >= 7 && szValue.charAt(5) == "1" )
	if( szValue.charAt(6) != "0" &&
		szValue.charAt(6) != "1" &&
		szValue.charAt(6) != "2" )
	{
		alert( "�·ݱ��ʽ����ȷ!\n���������롣" );
		event.returnValue = false;
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}

	//����·�ĩλ�ĺϷ���,����������
	if( szValue.length >= 7  )
	if( CHARS.indexOf( szValue.charAt(6) ) == -1 )
	{
		alert( "�·ݱ��ʽ�а�������ȷ���ַ�!\n���������롣" );
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;
		
	}
	//����·ݺϷ���,������00
	if( szValue.length == 7  )
	if( CHARS.indexOf( szValue.charAt(5) ) == "0" &&
		CHARS.indexOf( szValue.charAt(6) ) == "0" )
	{
		alert( "�·ݱ��ʽ00����ȷ!\n���������롣" );
		obj.value = szValue.substring( 0 , 4 ) + "-";
		return;		
	}



	//����·ݷָ����ĺϷ���
	if( szValue.length >=8  )
	if( szValue.charAt(7) != "-" )
	{
		alert( " �·ݷָ�����ﲻ��ȷ!\n���������롣" );
		event.returnValue = false;
		obj.value = szValue.substring( 0 , 7 ) + "-";
		return;		
	}

	//���������λ�ĺϷ���,����������
	if( szValue.length >= 9 )
	if( CHARS.indexOf( szValue.charAt(8) ) == -1 )
	{
		alert( "���ڱ��ʽ�а�������ȷ���ַ�!\n���������롣" );
		obj.value = szValue.substring( 0 , 7 ) + "-";
		return;		
	}
	
	if( szValue.length == 9 )
	{
		//��2�·ݵ������޶�
		if( szValue.charAt(5) == "0" &&
			szValue.charAt(6) == "2" &&
			szValue.charAt(8) != "0" &&
			szValue.charAt(8) != "1" &&
			szValue.charAt(8) != "2" )

		{
			obj.value = szValue.substring( 0 , 8 ) + "0" + szValue.charAt(8) ;
			return;
		}
		else
		{
			if(	szValue.charAt(8) != "0" &&
				szValue.charAt(8) != "1" &&
				szValue.charAt(8) != "2" &&
				szValue.charAt(8) != "3" )
			{
				obj.value = szValue.substring( 0 , 8 ) + "0" + szValue.charAt(8) ;
				return;		
			}
		}
	}//if( szValue.length == 9 )


	//�������ĩλ�ĺϷ���,����������
	if( szValue.length >= 9 )
	if( CHARS.indexOf( szValue.charAt(9) ) == -1 )
	{
		alert( "���ڱ��ʽ�а�������ȷ���ַ�!\n���������롣" );
		obj.value = szValue.substring( 0 , 7 ) + "-";
		return;		
	}


	//������ںϷ���,������00
	if( szValue.length >= 10  )
	if( CHARS.indexOf( szValue.charAt(8) ) == "0" &&
		CHARS.indexOf( szValue.charAt(9) ) == "0" )
	{
		alert( "���ڱ��ʽ00����ȷ!\n���������롣" );
		obj.value = szValue.substring( 0 , 7 ) + "-";
		return;		
	}


	//����ճ�����ݵĳ���
	if( szValue.length > 10 )
	{
		alert( "���ڱ�ﲻ��ȷ!\n���������롣" );
		obj.value = "";
		return;		
	}

	var iYear,iMonth,iDay;
	var szCalc,iCalc,iMaxDay;
	//����������ڵ���ʵ��
	if( szValue.length == 10 )
	{
		//ȡ��
		szCalc = szValue.substring( 0 , 4 );
		iYear = parseInt( szCalc );
		//ȡ��
		szCalc = szValue.substring( 5 , 7 );
		if( szCalc.charAt(0) == "0" )
			szCalc = szCalc.charAt(1);
		iMonth = parseInt( szCalc );
		//ȡ��
		szCalc = szValue.substring( 8 , 10 );
		if( szCalc.charAt(0) == "0" )
			szCalc = szCalc.charAt(1);		
		iDay = parseInt( szCalc );
		
		//ȡ��������ʱ�Ҳ�����غ���wxq
		iCalc = iYear - 4 ;
		while( iCalc >4 )
			iCalc -= 4;
	
		//���·�
		if( iMonth == 1 || iMonth == 3 || iMonth ==5 || iMonth ==7 ||
			iMonth == 8 || iMonth == 10 || iMonth == 12 )
			iMaxDay = 31;
		else
			iMaxDay =30;
	
		//2�´���
		if( iMonth == 2 )
		{
			if(iCalc == 4)
				iMaxDay = 29;
			else
				iMaxDay = 28;
		}

		if(iDay > iMaxDay )
		{
			alert( "���ڱ��ʽ����ȷ!\n���������롣" );
			event.returnValue = false;
			obj.value = szValue.substring( 0 , 8 ) ;
			return;	
		}
	}//if( szValue.length == 10 )
				
}

function onkeyDnDate( obj )
{

	//��Ч��λ��ֵ
	var KEY_ENTER	= 13;
	var KEY_TAB		= 9;
	var KEY_F1		= 112;
	var KEY_F12		= 123;
	var KEY_ALT		= 18;
	var KEY_NUM		= 144;
	var KEY_CAP		= 20;
	var KEY_ESC		= 27;
	var KEY_MICROSOFT1	= 91;
	var KEY_MICROSOFT2	= 92;
	var KEY_POPERTY		= 93;
	var KEY_BACKSPACE	= 8;
	var KEY_INSERT	= 45;
	var KEY_DELETE	= 46;
	var KEY_HOME	= 36;
	var KEY_END	= 35;
	var KEY_PGUP	= 33;
	var KEY_PGDN	= 34;
	
	var KEY_NUM0	= 48;
	var KEY_NUM9	= 57;
	var KEY_NUM0Ex	= 96;
	var KEY_NUM9Ex	= 105;
	
	var KEY_UP	= 38;
	var KEY_DOWN	= 40;
	var KEY_LEFT	= 37;
	var KEY_RIGHT	= 39;
	
	var KEY_SUB1	= 189;
	var KEY_SUB2	= 109;
	
	var CHARS = "0123456789";

	//�����λ��ֵ
	var iKeyCode = event.keyCode;
	
	//alert( iKeyCode );	
	
	//��Ч��ϵͳ��Ӧ��ͬʱ����Ҫ�༭��Ӧ�İ���
	if( iKeyCode == KEY_ENTER ||
		iKeyCode == KEY_TAB ||
		iKeyCode == KEY_ALT ||
		iKeyCode == KEY_NUM ||
		iKeyCode == KEY_CAP ||
		iKeyCode == KEY_ESC ||
		iKeyCode == KEY_INSERT	||
		iKeyCode == KEY_DELETE	||
		iKeyCode == KEY_HOME	||
		iKeyCode == KEY_END ||
		iKeyCode == KEY_BACKSPACE	||
		iKeyCode == KEY_MICROSOFT1	||
		iKeyCode == KEY_MICROSOFT2	||
		iKeyCode == KEY_POPERTY		||			
		iKeyCode == KEY_SUB1	||
		iKeyCode == KEY_SUB2	||		
		iKeyCode == KEY_UP		||
		iKeyCode == KEY_DOWN	||
		iKeyCode == KEY_LEFT	||				
		iKeyCode == KEY_RIGHT ) return ;
		
	//��Ч��ϵͳ��Ӧ��ͬʱ����Ҫ�༭��Ӧ�İ���
	if( iKeyCode >= KEY_F1 && iKeyCode <= KEY_F12  )
		return;
		
	
	//�����¼�����ݣ��򰴼��¼���Ч,�����ּ���
	if( iKeyCode < KEY_NUM0 || iKeyCode > KEY_NUM9Ex  )
	{
		event.returnValue = false;
		return ;
	}		
	if( iKeyCode < KEY_NUM0Ex  && iKeyCode > KEY_NUM9 )
	{
		event.returnValue = false;
		return ;
	}
	
}




function change_sl(obj)
{
	if(obj.value>1)
	{alert("˰�ʱ���С��1");
	obj.value="0.00";
	return;
	}	
}