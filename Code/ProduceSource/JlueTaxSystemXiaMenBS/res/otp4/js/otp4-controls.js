(function($) {
	
	var wrapGroup=function(el){
		/*: do nothing:
		var $group=$("<div class='xf-input-group'></div>");
		
		var $span;
		if($(el).is("input[type='checkbox']")||$(el).is("input[type='radio']")){
			$span=$(el).next();
		}
		$(el).wrap($group);
		if(!xf.utils.isEmpty($span)){
			$span.remove();
			$(el).after($("<span class='xf-checkbox-label'>"+$span.html()+"</span>"));
		}
		return $group;
		*/
	}
	var propExp=/\[(([^\[\]])*)\]/;
	var chgprop=function(prop){
		return prop.replace(propExp,".$1");
	}
	var vExp=/\{\{([\s\S]*)\}\}/;
	var idxExp=/\$index/;
	
	var prepareDuplex=function(el,vm){
		var prop=$(el).attr("name");
		var sTemp=prop;
		if(!xf.utils.isEmpty(prop)){
			if(vExp.test(prop)){
				var s=RegExp.$1;
				prop1=prop.replace(vExp,"el");
				prop=prop.replace(vExp,s);
				var s=prop.replace(idxExp,vm.$index);
				$(el).attr("name",s);
			}else
				prop1=prop;
			
			var prop1=chgprop(prop1);
			
			$(el).attr("ms-duplex",prop1);
		}
	}
	
	/**
	 * 日期/时间
	 * 
	 */
	var pickDate=function(){
		WdatePicker( {
			skin : "default",
			dateFmt : this.fmt,
			readOnly : true
		});
	}

	var dateFn2=function(el,vm) {
		var fmt = $(el).attr("xf-format") || "yyyy-MM-dd";
		var ctx={fmt:fmt};
		var $group=wrapGroup(el);
		prepareDuplex(el,vm);
		$(el).on("focus", pickDate.callback(ctx));
		/*
		$(el).on("focusout",function(e){
			if($(e.srcElement).hasClass("WdateFmtErr")){
				layer.msg("日期超出范围或输入有误", {
					icon : otp4.DiFactory.options.failIcon,
					skin : 'layer-fail'
				});
			}
		});
		*/
		//$(el).on("click", pickDate.callback(ctx));
	}
	otp4.DiFactory.reg(".xf-datetime", dateFn2);

	/**
	 * 下拉基类
	 * 
	 */
	var obj =function(data, name) {
		var ss = name.split(".");
		var obj = data;
		for ( var i = 0; i < ss.length - 1; i++) {
			obj = obj[ss[i]];
		}
		return obj;
	}
	

	var Filter=function(s){
		this.expression=otp4.Expression.parse(s);
	}
	
	xf.extend(Filter,{
		contains:function(data){
			return this.expression.test(data);
		}
	});
	
	
	var BaseSelect = xf.define( {
		initSelect : function(el, vm) {
			this.el = el;
			this.vm = vm;
			var $el = $(el);
			var watch = $el.attr("xf-watch");
			var name = $el.attr("xf-selmodel");
			this.fmt = $el.attr("xf-format") || "{txt}";
			var sFilter=$el.attr("xf-filter")||"";
			this.filter=new Filter(sFilter);
			
			
			this.watchName = watch;
			this.modelName=name;
			
			var args;
			if (!xf.utils.isEmpty(watch)) {
				var vmm = obj(vm, watch);
				var pos = watch.lastIndexOf(".");
				var pn = watch.substring(pos + 1);
				vmm.$watch(pn, this.watch.callback(this));

				//
				this.watch();
			}else{
				otp4.MFactory.load(this,name, args);
			}
			
			var sOpts=$el.attr("xf-options");
			if(sOpts){
				var opts=eval("("+sOpts+")");
				$.extend(this.options,opts);
			}
			
		},
		watch : function() {
			try{
				//
				xf.utils.property(this.vm, this.prop,"");
				$("select[name='"+this.prop +"']").empty();
				$("select[name='"+this.prop +"']").append("<option value=''>" + this.options.emptyText+ "</option>");
			}catch(e){
			}
			var args = "";
			if(!xf.utils.isEmpty(this.watchName))
				args=xf.utils.property(this.vm, this.watchName);
			otp4.MFactory.load(this,this.modelName, args);
		}
		
		,
		release:function(){
		},
		checkExist:function(){
			var $el=$(this.el);
			if($el.closest("body").length==0)
				return false;
			else
				return true;
		}
	});

	var textFormat=function(data,fmt){
		return fmt.replace("{val}",data.val).replace("{txt}",data.txt);
	}
	/**
	 * 普通下拉
	 * 
	 */
	var selOptions={
			nullable:true,
			emptyText:"请选择..."
	};
	var NormSelect = function(el, vm) {
		var options={};
		$.extend(options,selOptions);
		this.options=options;
		this.prop=$(el).attr("ms-duplex");
		if(this.prop)
			this.initVal=xf.utils.property(vm,this.prop);
		this.initSelect(el,vm);
		
	};

	xf.extend(NormSelect, BaseSelect,
	{
		updateUI : function(data) {
			var $el = $(this.el);
			if(data==null||data.length==0)
				return;
			$el.empty();
			var val0=null;
			if(this.options.nullable){
				var $opt = $("<option value=''>" + this.options.emptyText+ "</option>");
				$el.append($opt);
				if (val0==null)
					val0 = "";
			}

			if(this.prop)
				this.initVal=xf.utils.property(this.vm,this.prop);
			
			for ( var i = 0; data && i < data.length; i++) {
				if(!this.filter.contains(data[i]))
					continue;
				var val = data[i].val;
				if (val0==null)
					val0 = val;
				var txt = textFormat(data[i],this.fmt);
				var s="<option title='" + txt + "' value='" + val +"'";
				if(!xf.utils.isEmpty(this.initVal)&&val==this.initVal)
					s+=" selected";
				s += ">" + txt
				+ "</option>";
				var $opt = $(s);
				xf.info(s);
				$el.append($opt);
			}
			
			
			if(!xf.utils.isEmpty(this.initVal)){
				//IE6 BUG,改为在创建options时设置
				//xf.info("-223--:"+this.initVal);
				//$el.val(this.initVal);
				this.initVal=null;
			}else{
				xf.utils.property(this.vm,this.prop,val0);
			}
			
		}
	});
	
	var selectFn = function(el, vm) {
		wrapGroup(el);
		prepareDuplex(el,vm);
		var sel = new NormSelect(el, vm);
	}

	otp4.DiFactory.reg("select[xf-selmodel]", selectFn);

	/**
	 * 复选下拉框
	 */
	var setting = {
		setting:{
		
		},
		check : {
			enable : true,
			chkboxType : {
				"Y" : "",
				"N" : ""
			}
		},
		view : {
			dblClickExpand : false,
			showIcon : false,
			showLine : false
		},
		data : {
			simpleData : {
				enable : true
			}
		},
		callback : {
		}
	};
	var data2nodes=function(data,fmt,filter){
		var nodes=[];
		for(var i=0;i<data.length;i++){
			if(!filter.contains(data[i]))
				continue;
			var node={};
			node.id=data[i].val;
			node.pId=data[i].parent;
			node.name=textFormat(data[i],fmt);
			nodes.push(node);
		}
		return nodes;
	}
	var treeOptions={};
	var Tree = function(el, vm) {
		var options={};
		$.extend(options,treeOptions);
		this.options=options;
		this.initPop(el, vm);
		this.initSelect(el, vm);
		
	};
	xf.extend(Tree, BaseSelect, {
		initPop : function(el, vm) {
			//$(el).attr("readonly",true);
			var $parent = $(el).closest(".xf-input-group");
			if ($parent.length > 0) {
				var $btn = $(".xf-addon-btn", $parent);
				if ($btn.size() > 0) {
					var tree = this;
					$btn.on("click", function(event) {
						tree.toggle();
						event.stopPropagation();
						event.preventDefault();
						return false;
					});
				}

				var $val = $("input[type='hidden']",$parent);
				if ($val.length > 0) {
					this.$val = $val;
					this.prop=$val.attr("ms-duplex");
				}
				this.$parent = $parent;
			} else {
				var $val = $(el).next("input[type='hidden']");
				if ($val.length > 0) {
					this.$val = $val;
					this.prop=$val.attr("ms-duplex");
				}
			}

			this.$body = $("<ul class='ztree'/>");
			this.$panel = $("<div class='xf-dropdown-pop'/>");
			this.$panel.append(this.$body);
			otp4.ctrl(el).append(this.$panel);
			//$(el).before(this.$panel);
			var opts = {};
			$.extend(opts, setting);
			opts.callback.beforeClick = this.beforeClick.callback(this);
			opts.callback.onCheck = this.onCheck.callback(this);
			this.treeOptions = opts;
			var id=xf.utils.uuid();
			this.$body.attr("id", id);
			this.onBodyDown = this.bodyDown.callback(this);
	},
	
	updateUI : function(data) {
		var zTree = this._treeObj;
		if (zTree)
			zTree.destroy();
		var dNodes=data2nodes(data,this.fmt,this.filter);
		var t=$.fn.zTree.init(this.$body, this.treeOptions, dNodes);
		
		this._treeObj=t;
		
		if(this.prop){
			this.updateLabel(t);
		}
		/*
		if (zTree) {
			this.resetVal();
		} else {
			this.initVal(t);
		}*/
	},
	isVisible : function() {
		
		return this.$panel.is(":visible");
	},
	toggle:function(){
		if (this.isVisible())
			this.hide();
		else
			this.show();		
	},
	show : function() {
			var $el = $(this.el);
			var off=$el.offset();
			var $ctrl=otp4.ctrl(this.el);
			var offctrl=xf.utils.getOffet($ctrl);
			
			var left=off.left-offctrl.left;
			
			if(xf.utils.isIE6())
				left-=14;
				
			var h = off.top+$el.outerHeight()-offctrl.top;
			this.$panel.css( {
				left : left+"px",
				top : h + "px"
			}).slideDown("fast");
			
			this.$panel.width($el.outerWidth());
			$(document).bind("click", this.onBodyDown);
			this.$panel.show();
	},
	bodyDown : function(event) {
			if (event.target == this.el)
				return;
			if ($(event.target).parents(".xf-dropdown-pop").length > 0)
				return;
		
			this.hide();
		},
		hide : function() {
			this.$panel.fadeOut("fast");
			$(document).unbind("click", this.onBodyDown);
		},
		beforeClick : function(treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj(treeId);
			zTree.checkNode(treeNode, !treeNode.checked, null, true);
			return false;
		},
		onCheck : function(e, treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj(treeId);
			var nodes = zTree.getCheckedNodes(true);
			var val = "";
			var txt = "";
			for ( var i = 0; i < nodes.length; i++) {
				if (i > 0) {
					val += ",";
					txt += ",";
				}
				val += nodes[i].id;
				txt += nodes[i].name;
			}
			$(this.el).val(txt);
			if (this.$val)
				this.$val.val(val);
		},
		/*
		resetVal : function() {
			$(this.el).val("");
			if (this.$val){
				this.$val.val("");
			}
		},*/
		updateLabel : function(zTree) {
			$(this.el).val("");
			var nodes = zTree.getNodes();
			var val = null;
			if (this.$val)
				val = this.$val.val();
			var vals=[];
			if(xf.utils.isEmpty(val)){
				//do nothing				
			}else
				vals=val.split(",");
			for ( var i = 0; i < nodes.length; i++) {
				checkNode(vals,nodes[i],zTree);
			}
		}
	});

	var checkNode=function(vals,node,zTree){
		if(xf.utils.contains(vals,node.id))
			zTree.checkNode(node, true, null, true);
		
		if(node.children){
			for(var i=0;i<node.children.length;i++){
				checkNode(vals,node.children[i],zTree);
			}
		}
	}
	
	var dropdownFn=function(el, vm) {
		$(el).attr("readonly",true);
		$(el).on("keydown",function(e){
			return false;
		});
		var tree = new Tree(el, vm);
		$(el).data("data", tree);
		$(el).on("focus", function() {
			if(!tree.isVisible())
				tree.show();
		});		
	}

	/**
	 * replaced by xf-multiselect:
	 */
	//otp4.DiFactory.reg("input[type='text'].xf-dropdown", dropdownFn);
	
	/**
	 * xf-multiselect
	 */
	var mselectFn=function(el,vm){
		
		
		var prop=$(el).attr("name");
		
		$(el).attr("name",null);
		$(el).addClass("xf-down-arrow");
		wrapGroup(el);

		/*
		var $btn=$("<span class='xf-addon-btn'><button type='button' class='xf-btn xf-btn-default'><span class='xf-caret'></span></button></span>");
		$(el).after($btn);
		$(".xf-btn",$btn).height($(el).height());
		*/
		var prop1=chgprop(prop);
		var $val=$("<input type='hidden' ms-duplex='"+prop1+"' name='"+prop1+"'/>");
		$(el).after($val);		
		
		dropdownFn(el,vm);	
	}
	
	otp4.DiFactory.reg("input.xf-multiselect", mselectFn);	
	

	
	
	/**
	 * xf-money 
	 */
	var expMoney=/^((-)?\d+)(\.(\d){0,2})?$/;
	var moneyFormat=function(val){
		if(val.length==0)
			return '';
		return avalon.filters['currency'](val,'#').substring(1);
	}
	var moneyFn=function(el,vm){
		wrapGroup(el);
		var prop=$(el).attr("name");
		
		$(el).attr("name",null);
		
		if(vExp.test(prop)){
			var s=RegExp.$1;
			prop1=prop.replace(vExp,"el");
			prop=prop.replace(vExp,s);
			prop=prop.replace(idxExp,vm.$index);
		}else{
			prop1=prop;
		}
		var prop1=chgprop(prop1);
		var $val=$("<input type='hidden' ms-duplex='"+prop1+"' name='"+prop+"'/>");
		$(el).after($val);
		
		var val=xf.utils.property(vm,prop1)||'';
		$(el).val(moneyFormat(val));
		
		//prop1是VM的名称 ,prop是 input的名称用于同步提交
		//动态加载数据的监控:
		var pn=prop1;
		var vmm = obj(vm, prop1);
		var pos=prop1.indexOf(".");
		if(pos>0)
			pn = prop1.substring(pos + 1);
		vmm.$watch(pn,function(){
			var val2=xf.utils.property(vm,prop1)||'';
			$(el).val(moneyFormat(val2));
		});
		
		
		
		$(el).on("focusin",function(){
			$(el).val($val.val());
		});
		
		$(el).on("focusout",function(){
			var val=$(el).val()||'';
			$val.val(val);
			$(el).val(moneyFormat(val));
			if(val.length>0&&!expMoney.test($val.val())){
				$(el).focus();
				$(el).parent().addClass("xf-has-error");
				$(el).parent().removeClass("xf-has-success");
			}else{
				$(el).parent().addClass("xf-has-success");
				$(el).parent().removeClass("xf-has-error");
			}
			
		});
	}
	otp4.DiFactory.reg("input.xf-money", moneyFn);

	
	var calFn=function(el,vm){
		var $val=$(el).next();
		var prop=$val.attr("ms-duplex");
		var val=xf.utils.property(vm,prop)||'0';
		var $max=$val.next();
		val=parseInt(val,10)+1;
		$(el).val(val);
		var vmm = obj(vm, prop);
		var pos = prop.lastIndexOf(".");
		var pn = prop.substring(pos + 1);
		vmm.$watch(pn, function(){
			var val1=$val.val(); 
			try{
				val1=parseInt(val1,10);
				val1+=1;
			}catch(e){
			}
			$(el).val(val1);
		});
		
		var f=function(){
			var n=1;
			var max=0;
			try{
				try{
					n=parseInt($(el).val(),10);
				}catch(e){
					alert(e);
					n=0;
				}
				if(isNaN(n))
					n=0;
				
				max=parseInt($max.val(),10);
				if(n>max){
					n=max;
					$(el).val(n);
				}
				else if(n<1){
					n=1;
					$(el).val(n);
				}
			}catch(e){
				return;
			}
			val=n-1;
			$val.val(val);
		};
		$(el).on("keydown",function(e){
			if(e.keyCode == 13)
			{
				f();
				xf.info("------------------el.val="+$(el).val());
			}
		});
		$(el).on("focusout",f);
	}
	
	otp4.DiFactory.reg("input.xf-cal", calFn);
	
	
	

	
	var scopeInputFn=function(el,vm){
		var $max=$(el).next();
		$(el).on("focusout",function(){
			var n=1;
			var max=0;
			try{
				try{
					n=parseInt($(el).val(),10);
				}catch(e){
					n=0;
				}
				if(isNaN(n))
					n=0;
				max=parseInt($max.val(),10);
				if(n>max){
					n=max;
				}
				else if(n<1){
					n=1;
				}
				$(el).val(n);
			}catch(e){
				return;
			}
		});
	}
	
	otp4.DiFactory.reg("input.xf-scopeInput", scopeInputFn);
	
	
	/**
	 * 
	 */
	var inputFn=function(el,vm){
		wrapGroup(el);
		prepareDuplex(el,vm);
	}
	
	otp4.DiFactory.reg(".xf-input", inputFn);
	
	
	
	/**
	 * 
	 */
	var downloadFn=function(el,vm){
		var $el=$(el);
		var action=$el.attr("xf-download");
		$el.on("click",function(e){
			if(!otp4.doValidate(el,vm))
				return false;
			otp4.layerOpen(3000);
			var $form=$(el).closest("form");
			var old=$form.attr("action");
			$form.attr("action",action);
			$form.submit();
			$form.attr("action",old);
			return false;
		});
	}
	
	otp4.DiFactory.reg("[xf-download]", downloadFn);	

	/**
	 * 同步提交遮罩和数据校验
	 */	
	var submitFn=function(el,vm){
		var $el=$(el);
		
		$el.on("click",function(e){
			if(!otp4.doValidate(el,vm))
				return false;
			otp4.layerOpen(3000);
			return true;
		});
	}	
	otp4.DiFactory.reg("[type=submit]", submitFn);
	var submitFn2=function(el,vm){
		//避免2次处理
		if($(el).has("[type=submit]")){
			return;
		}else
			submitFn(el,vm);
	}
	otp4.DiFactory.reg(".xf-submit", submitFn2);	
	
	/**
	 * include
	 */
	var includeFn=function(el,vm){
		var url=$(el).attr("xf-include");
		if(url==null||url.length==0)
			return;
		$.ajax( {
			type : "get",
			url : url,
			success: function(data) {
				$(el).empty();
				$(el).append($(data));
				otp4.DiFactory.ready($(el));
				avalon.scan($(el).get(0));
			}
		});
	}
	
	
	otp4.DiFactory.reg("div[xf-include]", includeFn);
	
	/**
	 * 
	 */
	var printAreaCount = 0;
    var removePrintArea = function (id) {
        $("iframe#" + id).remove();
    };
    
	var printAreaOld=function($area){
        var idPrefix = "printArea_";
        removePrintArea(idPrefix + printAreaCount);
        printAreaCount++;
        var iframeId = idPrefix + printAreaCount;
        iframe = document.createElement('IFRAME');
        $(iframe).attr({
            id: iframeId
        });
        
        $(iframe).width($area.width()-5);
        $(iframe).height($area.width());
        
        
        iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
        
        document.body.appendChild(iframe);
        
        var doc = iframe.contentWindow.document;
        $(document).find("link").filter(function () {
            return $(this).attr("rel").toLowerCase() == "stylesheet";
        }).each(
                function () {
                    doc.write('<link type="text/css" rel="stylesheet" href="'
                            + $(this).attr("href") + '" >');
                });
        
        doc.write('<div class="' + $area.attr("class") + '">');
        doc.write($area.html());
		doc.write('</div>');
        doc.close();
        xf.info(document.body.innerHTML);
        var frameWindow = iframe.contentWindow;
        frameWindow.close();
        frameWindow.focus();
        frameWindow.print();
        //$(iframe).remove();
	}
	
	var printArea=function($area){
		var pwin=window.open("","print");
		var doc=pwin.document;
        $(document).find("link").filter(function () {
            return $(this).attr("rel").toLowerCase() == "stylesheet";
        }).each(
                function () {
                    doc.write('<link type="text/css" rel="stylesheet" href="'
                            + $(this).attr("href") + '" >');
        });
        //doc.write('<div class="' + $area.attr("class") + '">');
        doc.write('<div class="' + $area.attr("class") + '" style="width:auto">');
        doc.write($area.html());
		doc.write('</div>');
        doc.close();
        var $nop=$(".xf-noprint",$(doc));
        $nop.remove();
        pwin.print();
        pwin.close();
	}
	
	var printFn=function(el,vm){
		var $el=$(el);
		$el.on("click",function(e){
			var $ctrl=otp4.ctrl(e.srcElement);
			var $area=$(".xf-print-area",$ctrl);
			printArea($area);
		});
	}
	
	otp4.DiFactory.reg("[xf-print]", printFn);


	var saveArea=function($area,fileName){
		var pwin=window.open("","print");
		var doc=pwin.document;
        $(document).find("link").filter(function () {
            return $(this).attr("rel").toLowerCase() == "stylesheet";
        }).each(
                function () {
                    doc.write('<link type="text/css" rel="stylesheet" href="'
                            + $(this).attr("href") + '" >');
        });
        doc.write('<div class="' + $area.attr("class") + '">');
        doc.write($area.html());
		doc.write('</div>');
        doc.close();
        var $nop=$(".xf-noprint",$(doc));
        $nop.remove();
        pwin.document.execCommand('SaveAs',true,fileName);
        pwin.close();
	}	
	var saveFn=function(el,vm){
		var $el=$(el);
		var fileName=$el.attr("xf-save")||".htm";
		$el.on("click",function(e){
			var $ctrl=otp4.ctrl(e.srcElement);
			var $area=$(".xf-print-area",$ctrl);
			saveArea($area,fileName);
		});
	}
	
	otp4.DiFactory.reg("[xf-save]", saveFn);
	
	
	/**
	 * 分页
	 */
	var pageFn=function(el,vm){
		var url=otp4.config().contextPath+"/templates/paging.htm";
		$.ajax( {
			type : "get",
			url : url,
			async:false,
			success: function(data) {
				$(el).empty();
				$(el).append($(data));
				otp4.DiFactory.ready($(el));
				avalon.scan(el,vm);
			}
		});
	}
	
	otp4.DiFactory.reg("div[xf-paging]", pageFn);
	
	/**
	 * 导出
	 */
	var exportFn=function(el,vm){
		var ths=$("thead > tr >th",$(el));
		var hs=null;
		var ws=null;
		ths.each(function(){
			if($(this).hasClass("xf-noexport"))
				return;
			var w=$(this).attr("xf-export-width")||0;
			
			if(hs==null){
				hs=$(this).html();
				ws+=w;
			}else{
				hs+=",";
				hs+=$(this).html();
				
				ws+=",";
				ws+=w;
			}
		});

		var tds=$("tbody > tr >td",$(el));
		var ds=null;
		tds.each(function(){
			if($(this).hasClass("xf-noexport"))
				return;
			if(ds==null)
				ds=$(this).html();
			else{
				ds+=",";
				ds+=$(this).html();
			}
		});
		var $form=$(el).closest("form");
		var $hs=$("input[name='exportHead']",$(el));
		if($hs.length==0){
			$hs=$("<input type='hidden' name='exportHead'/>");
			$form.append($hs);
		}
		var $ds=$("input[name='exportRow']",$(el));
		if($ds.length==0){
			$ds=$("<input type='hidden' name='exportRow'/>");
			$form.append($ds);
		}
		
		var $ws=$("input[name='exportWidth']",$(el));
		if($ws.length==0){
			$ws=$("<input type='hidden' name='exportWidth'/>");
			$form.append($ws);
		}
		
		$hs.val(hs);
		$ds.val(ds);
		$ws.val(ws);
	}
	otp4.DiFactory.reg("table.xf-export", exportFn);
	
	var DropDown=function(el,vm){
		this.el=el;
		this.vm=vm;
		/*
		this.url=$(el).attr("xf-url");
		this.$parentCtrl=otp4.ctrl(el);
		this.$parentVM=vm;
		*/
		this.onBodyDown = this.bodyDown.callback(this);
	}
	
	xf.extend(DropDown,{
		show:function(el,vm){
			var url=$(el).attr("xf-url");
			var $ctrl=otp4.ctrl(el);
			var dlg=this;
			var env={
					value:$(el).val()
			};
			var path=null;
			var pp=url.lastIndexOf("/");
			if(pp>=0){
				path=url.substring(0,pp+1);
			}
			$.ajax( {
				type : "get",
				url : url,
				async:false,
				success: function(data) {
					var $pop=$("<div class='xf-dropdown-pop2'/>");
					dlg.$pop=$pop;
					$pop.append($(data));
					try{
						$ctrl.append($pop);
					}catch(ee){
						layer.alert("系统异常");
						xf.error("对话框失败 "+ee);
					}
					
					var off=$(el).offset();
					var offctrl=xf.utils.getOffet($ctrl);
					var left=off.left-offctrl.left;
					if(xf.utils.isIE6())
						left-=14;
						
					var h = off.top+$(el).outerHeight()-offctrl.top;
					$pop.css( {
						left : left+"px",
						top : h + "px"
					}).slideDown("fast");
					
					try{
						$ctrl.append($pop);
						$pop.fadeIn();
						var invm=otp4.invm($pop);
						if(path){
							for(var n in invm.$actions){
								var a=invm.$actions[n];
								if(a.url.indexOf("/")!=0){
									a.url=path+a.url;								
								}
							}
						}
						invm.$actions.$env=env;
						if(invm.oninit){
							invm.oninit();
						}
					}catch(ee){
						layer.alert("VM需要定义$actions对象.");
						xf.error("对话框失败 "+ee);
					}
					
					try{
						otp4.DiFactory.ready($pop);
					}catch(ee){
						layer.alert("系统异常");
						xf.error("对话框失败 "+ee);
					}
					
					try{	
						avalon.scan($pop[0]);
					}catch(ee){
						layer.alert("系统异常");
						xf.error("对话框失败 "+ee);
					}
					try{
						//xf.info("-----------"+dlg.onBodyDown);
						$pop.data("dropdown",dlg);
						$(document).bind("click", dlg.onBodyDown);
					}catch(ee){
						alert(ee);
					}
				}
			});
		},
		hide:function(){
			if(this.$pop){
				this.$pop.remove();
				this.$pop=null;
			}
			$(document).unbind("click", this.onBodyDown);
		},
		bodyDown : function(event) {
			if (event.target == this.el)
				return;
			if ($(event.target).parents(".xf-dropdown-pop2").length > 0)
				return;
			this.hide();
		},
		doOK:function(args){
			var el=this.el;
			var vm=this.vm;
			var okFn=$(el).attr("xf-onOK");
			if(okFn&&vm[okFn]){
				vm[okFn](args);
			}
		}
	});
	var getDropdown=function(vm){
		var el=otp4.getEl(vm);
		var $pop=$(el).closest(".xf-dropdown-pop2");
		return $pop.data("dropdown");
	}
	otp4.ok=function(vm,args){
		var dropdown=getDropdown(vm);
		dropdown.hide();
		dropdown.doOK(args);
	}
	otp4.cancel=function(vm){
		var dropdown=getDropdown(vm);
		dropdown.hide();
	}
	var dropdown2Fn=function(el,vm){
		wrapGroup(el);
		prepareDuplex(el,vm);		
		
		$(el).addClass("xf-down-arrow");
		
		var dlg=new DropDown(el,vm);
		$(el).on("click", function(){
			if(!dlg.$pop){
				dlg.show(el,vm);
			}else{
			}
		});
		
		
		$(el).attr("readonly",true);
		$(el).on("keydown",function(e){
			return false;
		});
	};
	otp4.DiFactory.reg("input.xf-dropdown", dropdown2Fn);	

})(jQuery);
