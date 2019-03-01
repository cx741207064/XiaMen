!function($) {
	var emptyImg="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
	var stack=[];
	var Item=function(parent){
		this.parent=parent;
		this.child=null;
	}
	function mtest(){
		xf.info(stack.size());
	}
	var isParent=function($li,lastItem){
		var item1=$li.data("menuItem");
		if(item1==lastItem)
			return true;
		if(item1.parent.isRoot())
			return false;
		return isParent(item1.parent.$parentLi,lastItem);
	}


	var Menu=xf.define({
		create:function(parent,item){
			var $li=$("<li></li>");
			if(!parent.isRoot()){
				if(!xf.utils.isEmpty(item.icon)){
					var $icon=$("<img class='xf-menu-icon'></img>");
					$li.append($icon);
					$icon.attr("src",item.icon);
				}else{
					var $icon=$("<div class='xf-menu-icon'></div>");
					$li.append($icon);
				}
			}
			var $a=$("<a href='"+item.href+"'>"+item.text+"</a>");
			$li.append($a);
			this.$ul.append($li);
			var mitem=new Item(parent);
			$li.data("menuItem",mitem);
			if(!xf.utils.isEmpty(item.children)){
				var m=new PopupMenu(parent,item.children,$li);
				mitem.child=m;
				$("body").append(m.$ul);
				$li.on("click",function(event){
					var w=-1;
					var h=1;
					var off=$li.offset();
					if(!parent.isRoot()){
						w=$li.outerWidth();
					}else{
						h=$li.outerHeight();
					}
					m.$ul.css({
						left:(off.left+w)+"px",
						top:(off.top+h)+"px"
					});
					for(var i=stack.length-1;i>=0;i--){
						var $lastLi=stack.last();
						var lastItem=$lastLi.data("menuItem");
						if(!isParent($li,lastItem)){
							$lastLi.trigger("click");
							stack.removeAt(i);
						}
					}
					if(m.$ul.is(":visible")){
						m.$ul.hide();
						stack.remove($li);
					}else{
						m.$ul.show();
						stack.push($li);
					}
					xf.utils.cancelEvent(event);
					return false;
				});
			}else{

			}
			$li.hover(
				function(){
					$li.addClass("xf-menu-hover");
				},
				function(){
					$li.removeClass("xf-menu-hover");
				}
			);
			return $li;
		},
		isRoot:function(){
			return this.$parentLi==null;
		}
	});

	var docClick=function(){
		for(var i=stack.length-1;i>=0;i--){
			var $lastLi=stack.last();
			var lastItem=$lastLi.data("menuItem");
			if(lastItem.child)
				lastItem.child.$ul.hide();
			stack.removeAt(i);
		}
		stack.removeAll();
	}

	var MenuBar=function($ul,items){
		this.$ul=$ul;
		$ul.parent().addClass("xf-menu-bar-ie6");
		this.$parentLi=null;
		for(var i=0;i<items.length;i++){
			this.create(this,items[i]);
		}
		$(document).on("click",docClick);
	}
	xf.extend(MenuBar,Menu);
	
	xf.extend(MenuBar,{
	});
	
	var PopupMenu=function(parent,items,$li){
		var $ul=$("<ul class='xf-popup-menu xf-popup-menu-ie6'></ul>");
		this.$parentLi=$li;
		this.$ul=$ul;
		var lis=[];
		var mw=0;
		for(var i=0;i<items.length;i++){
			var $li=this.create(this,items[i]);
			if($li.width()>mw)
				mw=$li.width();
			lis.push($li);
		}
		for(var i=0;i<lis.length;i++){
			lis[i].width(mw);
		}
	}
	
	xf.extend(PopupMenu,Menu);
	
	otp4.MenuBarIE6=MenuBar;
	
}(window.jQuery);