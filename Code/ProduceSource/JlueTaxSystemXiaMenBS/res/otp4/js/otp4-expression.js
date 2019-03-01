!function ($){
	var notInExp=/([\S]+)[\s]*(not[\s]+in)[\s]*\(([\s\S]+)\)/;
	var inExp=/([\S]+)[\s]*(in)[\s]*\(([\s\S]+)\)/;
	var lExp=/([\S]+)[\s]*(==|!=|>|>=|<|<=)[\s]*([\S]+)/;

	var EmptyExpression={
		test:function(data){
			return true;
		}
	}
	
	otp4.Expression={
		parse:function(s){
			if(notInExp.test(s)){
				return new notInExpression(RegExp.$1,RegExp.$2,RegExp.$3);
			}else if(inExp.test(s)){
				return new InExpression(RegExp.$1,RegExp.$2,RegExp.$3);
			}else if(lExp.test(s)){
				return new LogicExpression(RegExp.$1,RegExp.$2,RegExp.$3);
			}else{
				
				return EmptyExpression;
			}
		}
	};
	

	
	var notInExpression=function(s1,s2,s3){
		if(s1.indexOf('$')!=0){
			layer.alert("表达式必须字段必须以$开头:"+s1);
			return;
		}
		this.field=s1.substring(1);
		this.values=eval("(["+s3+"])");
	}
	
	xf.extend(notInExpression,{
		test:function(data){
			var val=data[this.field];
			for(var i=0;i<this.values.length;i++){
				if(val==this.values[i])
					return false;
			}
			return true;
		}
	});
	
	var InExpression=function(s1,s2,s3){
		if(s1.indexOf('$')!=0){
			layer.alert("表达式必须字段必须以$开头:"+s1);
			return;
		}
		this.field=s1.substring(1);
		this.values=eval("(["+s3+"])");
		
	}
	xf.extend(InExpression,{
		test:function(data){
			var val=data[this.field];
			for(var i=0;i<this.values.length;i++){
				if(val==this.values[i])
					return true;
			}
			return false;
		}
	});
	
	var LogicExpression=function(s1,s2,s3){
		if(s1.indexOf('$')!=0){
			layer.alert("表达式必须字段必须以$开头:"+s1);
			return;
		}
		this.field=s1.substring(1);
		var op=$.trim(s2);
		if("=="==op){
			this.testFn=function(val1,val2){
				return val==val2;
			}
		}else if("!="==op){
			this.testFn=function(val1,val2){
				return val1!=val2;
			}
		}else if(">"==op){
			this.testFn=function(val1,val2){
				return val1>val2;
			}
		}else if(">="==op){
			this.testFn=function(val1,val2){
				return val1>=val2;
			}
		}else if("<"==op){
			this.testFn=function(val1,val2){
				return val1<val2;
			}
		}else if("<="==op){
			this.testFn=function(val1,val2){
				return val1<=val2;
			}
		}
		this.value=eval("("+s3+")");		
	}
	xf.extend(LogicExpression,{
		test:function(data){
			var val=data[this.field];
			return this.testFn(val,this.value);
		}
	});
	
}(window.jQuery);
