!function($) {
	var emptyImg="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
	var Menu=xf.define({
		create:function(parent,item){
			var $li=$("<li></li>");
			$li.attr("unselectable","on");
			if(!parent.isRoot){
				var $icon=$("<img class='xf-menu-icon'></img>");
				$icon.attr("src",emptyImg);
				$li.append($icon);
				if(!xf.utils.isEmpty(item.icon)){
					$icon.attr("src",item.icon);
				}
			}
			
			var $a=$("<a href='"+item.href+"'>"+item.text+"</a>");
			
			if(!xf.utils.isEmpty(item.target))
				$a.attr("target",item.target);
			
			$li.append($a);
			this.$ul.append($li);
			if(!xf.utils.isEmpty(item.children)){
				var m=new PopupMenu(parent,item.children,$li);
				$li.append(m.$ul);
				$li.data("popup",m);
				var $arrow;
				if(parent.isRoot){
					if(parent.options.hasCaret){
						$arrow=$("<span class='xf-caret'></span>");
						$li.append($arrow);
					}
				}else{
					$arrow=$("<span class='xf-right-arrow'></span>");
					$li.append($arrow);
				}
			}else{
				$li.on("click",function(){
					if(!parent.isRoot)
						parent.$ul.hide();
					//m.$ul.hide();
				});
			}
			$li.hover(
				function(){
					$li.addClass("xf-menu-hover");
					var m=$li.data("popup");
					if(!xf.utils.isEmpty(m)){
						m.$ul.show();
						if(!parent.isRoot){
							var w=$li.outerWidth();
							m.$ul.css({
								left:w+"px",
								top:"0px"
							});
						}
					}
							
				},
				function(){
					$li.removeClass("xf-menu-hover");
					var m=$li.data("popup");
					if(!xf.utils.isEmpty(m)){

						m.$ul.hide();
					}
				}
			);
		}
	});
	var defaultOptions={
			hasCaret:true
	};
	var MenuBar=function($ul,items,options){
		this.options=$.extend(defaultOptions,options);
		this.$ul=$ul;
		$ul.attr("unselectable","on");
		this.isRoot=true;
		for(var i=0;i<items.length;i++){
			this.create(this,items[i],options);
		}
	}
	xf.extend(MenuBar,Menu);
	
	xf.extend(MenuBar,{
	});
	
	var PopupMenu=function(parent,items,$li){
		var $ul=$("<ul class='xf-popup-menu'></ul>");
		this.$ul=$ul;
		this.isRoot=false;
		for(var i=0;i<items.length;i++){
			this.create(this,items[i]);
		}
		if(!parent.isRoot){

		}
	}
	
	xf.extend(PopupMenu,Menu);
	
	otp4.MenuBar=MenuBar;
	
}(window.jQuery);