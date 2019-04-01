$(document).ready(function(){
	/**
	 * 绑定所有输入框丢失焦点事件，去除前后空格
	 */
	$('input[type=text]:not(:disabled)').bind("blur", function() {
		try {
		  $(this).val($.trim($(this).val()));
		} catch(e){
		}
	});
	
	/**
	 * Submit事件清除空格、清除千分位
	 */
	$("form").bind("submit", function(event) {
		otp4.layerOpen(3000);
		try{
			$('input[money=Y]:not(:disabled)').each(function(){
			  $(this).val($.trim($(this).val().replace(/\s+/g, "")));
		      $(this).val($(this).val().replace(/,/gm,""));
			});
		}catch(e){}
		
		try{
			$('input[datatype=float]:not(:disabled)').each(function(){
			  $(this).val($.trim($(this).val().replace(/\s+/g, "")));
		      $(this).val($(this).val().replace(/,/gm,""));
			});
		}catch(e){}
		
		try{
			$('input[datatype=int]:not(:disabled)').each(function(){
			  $(this).val($.trim($(this).val().replace(/\s+/g, "")));
		      $(this).val($(this).val().replace(/,/gm,""));
			});
		}catch(e){}
	})
});

(function($) {
	
})(jQuery);
