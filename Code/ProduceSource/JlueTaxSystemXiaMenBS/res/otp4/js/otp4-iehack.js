!function ($){
	var exp=/(MSIE[\s]\d.\d)/;
    avalon.ready(function(){
    	$("["+otp4.AvalonAttr2+"]").each(function(){
    		var id=$(this).attr(otp4.AvalonAttr2);
    		var vm=avalon.vmodels[id];
    		try{
    			var env={};
    			var url=window.location+"";
    			var pos=url.indexOf("?");
    			var s="";
    			if(pos>=0)
    				s=url.substring(pos+1);
    			var ss=s.split("&");
    			for(var i=0;i<ss.length;i++){
    				var arg=ss[i].split("=");
    				env[$.trim(arg[0])]=arg[1];
    			}

	    		if(!xf.utils.isEmpty(vm.oninit)){
	    			vm.$actions.$env=env;
	    			vm.oninit();
	    		}
    		}catch(e){
    			//layer.alert(e);
    			alert("after ready:"+e);
    		}
    	});
    	
    });
    
	
}(window.jQuery);
