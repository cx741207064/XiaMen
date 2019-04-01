(function($) {
	var MData=function(m,args,data){
		this.model=m;
		this.args=args;
		this.state=0;
		this.nRetry=0;
		if(data){
			this.data=data;
			this.state=1;
		}
	}
	xf.extend(MData,{
		success:function(data){
			var loadCtx=this.loadCtx;
			if(xf.utils.isEmpty(this.loadCtx))
				return;
			var ws=loadCtx.ws;
			try{
				this.data=eval("("+data+")");
			}catch(e){
				//加载错误，重新加载
				xf.error("Model ["+this.model._name+"] load failed:<<"+data+">>");
				if(this.nRetry>=3){
					//layer.alert("模型加载数据错误。");
					return;
				}
				
				this.reload();
				return;
			}
			for(var i =0;i<ws.length;i++){
				ws[i].updateUI(this.data);
			}
			this.state=1;
			this.loadCtx=null;
		},
		updateUI:function(w){
			var data=this.data;
			setTimeout(function() {
				try {
					w.updateUI(data);
				} catch (e) {
				}
			}, 100);
		},
		isReady:function(){
			return this.state!=0;
		},
		get:function(){
			if(this.isReady()){
				return this.data;
			}else{
				//避免多次下载
				if(xf.utils.isEmpty(this.loadCtx)){
					this.loadCtx={
						ws:[]
					};
				}
				
				var data={
						name:this.model._name,
						args:this.args
				}
				$.ajax({
					type:"POST",
					url:options.url,
					data:data,
					async : false,
					success:this.success.callback(this),
					error:function(){alert("Call otp4.MFactory.config to configure the URL.")},
					timeout:options.timeout});
				//this.data=result;
				return this.data;
			}
		},
		load:function(w,flag){
			var loadCtx=this.loadCtx;
			if(loadCtx){
				loadCtx.ws.push(w);
				return;
			}
			this.loadCtx={
					ws:[]
			};
			this.loadCtx.ws.push(w);
			
			/*
			var data={
					name:this.model._name,
					args:this.args
			}
			$.ajax({
				type:"POST",
				url:options.url,
				data:data,
				success:this.success.callback(this),
				error:function(){alert("Call otp4.MFactory.config to configure the URL.")},
				timeout:options.timeout});
			*/
			this.reload();
		},
		reload:function(){
			this.nRetry++;
			var data={
					name:this.model._name,
					args:this.args
			}
			$.ajax({
				type:"POST",
				url:options.url,
				data:data,
				success:this.success.callback(this),
				error:function(){alert("Call otp4.MFactory.config to configure the URL.")},
				timeout:options.timeout});			
		}
			
	});
	var Model=function(name,data){
		this._name=name;
		this._mdatas=[];
		if(data){
			this.newdata("",data);
		}
	};
	
	xf.extend(Model,{
		newdata:function(args,data){
			var mdata=new MData(this,args,data);
			this._mdatas.push(mdata);
			return mdata;
		},
		mdata:function(args){
			for(var i=0;i<this._mdatas.length;i++){
				if(this._mdatas[i].args==args)
					return this._mdatas[i];
			}
			return this.newdata(args);
		},
		get:function(args){
			args=args||"";
			var mdata=this.mdata(args);
			return mdata.get();
		},
		load:function(w,args){
			args=args||"";
			var mdata=this.mdata(args);
			if(mdata.isReady())
				mdata.updateUI(w);
			else 
				mdata.load(w);
		}
	});
	
	var models={};
	var options={
			url:"mload.jsp"
			//timeout:8000
	};
	
	var MFactory={
		config:function(cfg){
			$.extend(options,cfg);
		},
		regModel:function(n,data){
			if(models[n]){
				return;
			}
			models[n]=new Model(n,data);
		},
		/**
		 * called by filter
		 */
		get:function(n,args){
			var m=models[n];
			if(!m){
				m=new Model(n);
				models[n]=m;
			}
			return m.get(args);
		},
		/**
		 * called by select
		 */
		load:function(w,n,args,flag){
			var m=models[n];
			if(!m){
				m=new Model(n);
				models[n]=m;
			}
			return m.load(w,args,flag);
		}
	};
	MFactory.models=models;
	otp4.MFactory=MFactory;
})(jQuery);

