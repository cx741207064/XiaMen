(function($) {
	var expIDCode18=/^(\d{2})(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})(\d{3})(\d|X)$/i;
	var expIDCode15=/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{3})$/i;
	var provs = {
			11 : "北京",
			12 : "天津",
			13 : "河北",
			14 : "山西",
			15 : "内蒙古",
			21 : "辽宁",
			22 : "吉林",
			23 : "黑龙江 ",
			31 : "上海",
			32 : "江苏",
			33 : "浙江",
			34 : "安徽",
			35 : "福建",
			36 : "江西",
			37 : "山东",
			41 : "河南",
			42 : "湖北 ",
			43 : "湖南",
			44 : "广东",
			45 : "广西",
			46 : "海南",
			50 : "重庆",
			51 : "四川",
			52 : "贵州",
			53 : "云南",
			54 : "西藏 ",
			61 : "陕西",
			62 : "甘肃",
			63 : "青海",
			64 : "宁夏",
			65 : "新疆",
			71 : "台湾",
			81 : "香港",
			82 : "澳门",
			91 : "国外 "
		};	
	var idChksum=function(code){
		if (code.length == 18) {
			code = code.split('');
			// ∑(ai×Wi)(mod 11)
			// 加权因子
			var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5,
					8, 4, 2 ];
			// 校验位
			var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for ( var i = 0; i < 17; i++) {
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			if (parity[sum % 11] != code[17]) {
				return false;
			}
			return true;
		}
	}	
	var checkBirthday=function(y,m,d){
		var birthday=new Date();
		birthday.setFullYear(y);
		birthday.setMonth(m-1);
		birthday.setDate(d);
		if(birthday.getDate()!=d)
			return false;
		return true;
	}

	var IDCode=function(code){
		this._code=code;
		this._bValidate=false;
		this._bNull=false;
		this._province="";
		this._city="";
		this._county="";
		this._year="";
		this._month="";
		this._date="";
		this._seq="";
		this._chksum="";
		this.init(code);
	}
	
	xf.extend(IDCode,{
		init:function(code){
			if(typeof code=='undefined' || code==null || code.length==0){
				//do nothing;
				this._bNull=true;
			}else if (code.length == 18) {
				if(!expIDCode18.test(code)){
					this._message=otp4.valMessages.IDCode[0];
					//this._message="身份证格式不正确";
				}else{
					this._province=RegExp.$1;
					this._city=RegExp.$2;
					this._county=RegExp.$3;
					this._year=RegExp.$4;
					this._month=RegExp.$5;
					this._date=RegExp.$6;
					this._seq=RegExp.$7;
					this._chksum=RegExp.$8;
					if(!checkBirthday(parseInt(this._year,10),parseInt(this._month,10),parseInt(this._date,10))){
						this._message=otp4.valMessages.IDCode[2];
						//this._message="生日不正确";
					}else if(typeof provs[this._province]=="undefined"){
						this._message=otp4.valMessages.IDCode[1];
						//this._message="省份不正确";
					}else if(!idChksum(code)){
						this._message=otp4.valMessages.IDCode[3];
						//this._message="校验位不正确";		
					}else 
						this._bValidate=true;
				}
			}else if(code.length==15){
				if(!expIDCode15.test(code)){
					this._message=otp4.valMessages.IDCode;
					//this._message="身份证格式不正确";
				}else{
					this._province=RegExp.$1;
					this._city=RegExp.$2;
					this._county=RegExp.$3;
					this._year=RegExp.$4;
					this._month=RegExp.$5;
					this._date=RegExp.$6;
					this._seq=RegExp.$7;
					if(!checkBirthday(parseInt(this._year,10)+1900,parseInt(this._month,10),parseInt(this._date,10))){
						this._message=otp4.valMessages.IDCode[2];
						//this._message="出身日期不是正确的日期";
					}else if(typeof provs[this._province]=="undefined"){
						this._message=otp4.valMessages.IDCode[1];
						//this._message="省份代码不存在";
					}else 
						this._bValidate=true;
				}				
			}else{
				this._message=otp4.valMessages.IDCode[0];//"身份证位数不正确"+code.length+",应该为15或18位";
			}
		},
		isNull:function(){
			return this._bNull;
		},
		isValidate:function(){
			return this._bValidate;
		},
		getCode:function(){
			return this._code;
		},
		getMessage:function(){
			return this._message;
		},
		getYear:function(){
			return this._year;
		},
		getMonth:function(){
			return this._month;
		},
		getDate:function(){
			return this._date;
		},
		getProvince:function(){
			return this._province;
		},
		getCity:function(){
			return this._city;
		},
		getCounty:function(){
			return this._county;
		},
		getSeq:function(){
			return this._seq;
		},
		getChksum:function(){
			return this._chksum;
		}
		
	});
	otp4.IDCode=IDCode;
	
	
	otp4.regValidator("IDCode",function(val){
		var id=new IDCode(val);
		if(id.isNull())
			return;
		if(id.isValidate())
			return;
		return id.getMessage();
	});	
	
	
	
})(jQuery);
