(function($) {
	var route={
		_routes:{},
		_views:{},
		_default:"/",
		_fromRoute:false,
		when:function(id,cfg,bDefault){
			this._routes[id]=cfg;
			if(bDefault)
				this._default=id;
			return this;
		},
		get:function(id){
			var cfg=this._routes[id];
			if(!cfg)
				cfg=this._routes[this._default];
			return cfg;
		},
		view:function(nm,$view){
			if($view){
				if(nm){
					this._views[nm]=$view;
				}else{
					this._defaultView=$view;
				}
			}else{
				if(nm){
					return this._views[nm];
				}else{
					return this._defaultView;
				}
			}
		}
	}
	
	otp4.$route=route;
	
	var doRoute=function (el,hash){
		var cfg=route.get(hash);
		if(!cfg){
			return;
		}
		var r=otp4.$route._routes;
		var $view=route.view(cfg.target);
		$.ajax( {
			type : "get",
			url : cfg.templateUrl,
			async : false,
			success: function(data) {
				$view.empty();
				$view.append($(data));
				otp4.DiFactory.ready($view);
				avalon.scan($view.get(0));
			}
		});
	}
	
	/**
	 * Route anchor
	 */
	var routeFn=function(el){
		var hash=$(el).attr("href")+"";
		var pos=hash.indexOf("#");
		if(pos<0)
			return;
		hash=hash.substring(pos+1);
		$(el).on("click",function(){
			var loc=window.location+"";
			var pos=loc.indexOf("#");
			if(pos>=0)
				loc=loc.substring(pos+1);
			if(loc==hash)
				return false;	
			
			try{
				doRoute(el,hash);
			}catch(e){
				alert(e);
			}
			return true;
		});
	}	
	
	var gotoHash=function(){
		var url=window.location+"";
		var pos=url.indexOf("#");
		if(pos>=0){
			url=url.substring(pos+1);
		}else{
			url="/";
		}
		if(url.length>0){
			doRoute(null,url);
		}
		return true;
	}
	
	/**
	 * View 
	 */
	var viewFn=function(el){
		var nm=$(el).attr("xf-view");
		route.view(nm,$(el));
	}	
	//otp4.DiFactory.reg("[xf-view]",viewFn);	
	$(document).ready(function(){
		$("[xf-view]").each(function(){
			viewFn(this);
		});
		gotoHash();
	});
	
	window.onhashchange=gotoHash;
	
})(jQuery);

