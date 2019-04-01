function closeOpener(){
	try{
		try{
			var href = self.opener.opener.opener.location.href;
			if(!(href != null && (href.indexOf("xmtax.gov.cn")>-1 || href.indexOf("10.104")>-1 || href.indexOf("145.")>-1 || href.indexOf("127.0.0.1")>-1 || href.indexOf("localhost")))){
				//alert("这是由非地税访问的链接,不用关掉");
			}else{
				//self.opener.opener.opener.close();
				self.opener.opener.opener = null;
				self.opener.opener.open(' ','_self');
				self.opener.opener.close();
			}
		} catch(e){}
		try{
			var href = self.opener.opener.location.href;
			if(!(href != null && (href.indexOf("xmtax.gov.cn")>-1 || href.indexOf("10.104")>-1 || href.indexOf("145.")>-1 || href.indexOf("127.0.0.1")>-1 || href.indexOf("localhost")))){
				//alert("这是由非地税访问的链接,不用关掉");
			}else{
				//self.opener.opener.close();
				self.opener.opener = null;
				self.opener.open(' ','_self');
				self.opener.close();
			}
		} catch(e){}
		try{
			var href = self.opener.location.href;
			if(!(href != null && (href.indexOf("xmtax.gov.cn")>-1 || href.indexOf("10.104")>-1 || href.indexOf("145.")>-1 || href.indexOf("127.0.0.1")>-1 || href.indexOf("localhost")))){
				//alert("这是由非地税访问的链接,不用关掉");
			}else{
				self.opener.close();
				//self.opener = null;
				//self.open(' ','_self');
				//self.close();
			}
		} catch(e){}
		self.moveTo(0,0);
		self.resizeTo(screen.availWidth,screen.availHeight);
		//self.resizeTo(window.screen.width,window.screen.height);
	} catch(e){}
}

function closeOpener4Swgb(){
	try{
		try{
			self.opener.opener.opener = null;
			self.opener.opener.open(' ','_self');
			self.opener.opener.close();
			//self.opener.opener.opener.close();
		} catch(e){}
		try{
			//self.opener.opener.close();
			self.opener.opener = null;
			self.opener.open(' ','_self');
			self.opener.close();
		} catch(e){}
		try{
			//self.opener.close();
			//window.opener = null;
			//window.open(' ','_self');
			//window.close();
		} catch(e){}
	self.moveTo(0,0);
	self.resizeTo(screen.availWidth,screen.availHeight);
	//self.resizeTo(window.screen.width,window.screen.height);
	} catch(e){}
}