(function($) {
	otp4.configValidator({
		max:'最大不能超过'
	});	
	otp4.regValidator("max",function(val,sMax,msg){
		if (xf.utils.isEmpty(val))
			return;		
		var max=parseFloat(sMax,10);
		var val=parseFloat(val,10);
		if(val>max)
			return msg||otp4.valMessages.max+sMax;
	});	
	
	otp4.configValidator({
		min:'最小不能小于'
	});	
	otp4.regValidator("min",function(val,sMin,msg){
		if (xf.utils.isEmpty(val))
			return;		
		var min=parseFloat(sMin,10);
		var val=parseFloat(val,10);
		if(val<min)
			return msg||otp4.valMessages.min+sMin;
	});		
	
	otp4.configValidator({
		length:'输入长度必须为'
	});	
	otp4.regValidator("length",function(val,sLen,msg){
		if (xf.utils.isEmpty(val))
			return;		
		var len=parseInt(sLen,10);
		if(val.length!=len)
			return msg||otp4.valMessages.length+sLen;
	});	
	otp4.configValidator({
		maxLength:'输入长度不能超过'
	});	
	otp4.regValidator("maxLength",function(val,sLen,msg){
		if (xf.utils.isEmpty(val))
			return;		
		var len=parseInt(sLen,10);
		if(val.length>len)
			return msg||otp4.valMessages.maxLength+sLen;
	});	
	otp4.configValidator({
		minLength:'输入长度不能小于'
	});	
	otp4.regValidator("minLength",function(val,sLen,msg){
		if (xf.utils.isEmpty(val))
			return;		
		var len=parseInt(sLen,10);
		if(val.length<len)
			return msg||otp4.valMessages.minLength+sLen;
	});		
	
	
	otp4.configValidator({
		eq:'必须相同'
	});	
	
	otp4.regValidator("eq",function(val,other,msg){
		if (xf.utils.isEmpty(val))
			return;
		if(val!=other)
			return msg||otp4.valMessages.eq;
	});	
	
	otp4.configValidator({
		gt:'必须大于(>)'
	});	
	
	otp4.regValidator("gt",function(val,other,msg){
		if (xf.utils.isEmpty(val))
			return;
		if(val<=other)
			return msg||otp4.valMessages.gt;
	});
	
	otp4.configValidator({
		get:'必须大于(>=)'
	});	
	
	otp4.regValidator("get",function(val,other,msg){
		if (xf.utils.isEmpty(val))
			return;
		if(val<other)
			return msg||otp4.valMessages.get;
	});
	
	otp4.configValidator({
		lt:'必须小于(<)'
	});	
	
	otp4.regValidator("lt",function(val,other,msg){
		if (xf.utils.isEmpty(val))
			return;
		if(val>=other)
			return msg||otp4.valMessages.lt;
	});
	
	otp4.configValidator({
		let:'必须小于等于(<=)'
	});	
	
	otp4.regValidator("let",function(val,other,msg){
		if (xf.utils.isEmpty(val))
			return;
		if(val>other)
			return msg||otp4.valMessages.let;
	});	
	
	
})(jQuery);
