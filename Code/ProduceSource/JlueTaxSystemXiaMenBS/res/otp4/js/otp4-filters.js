(function($) {
	/**
	 * SelModel 
	 */
	avalon.filters['otp4_dict']=function(str,mod){
		var data=otp4.MFactory.get(mod);
		for(var i=0;data&&i<data.length;i++){
			if(data[i].val==str){
				return data[i].txt;
			}
		}
		return str;
	}
	
	/**
	 * 
	 */
	avalon.filters['otp4_add']=function(str,exp){
		return parseInt(str,10)+exp;
	}
	
})(jQuery);
