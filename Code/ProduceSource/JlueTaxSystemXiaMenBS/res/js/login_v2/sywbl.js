	//跳转判断
	function  showContent(url,wydkfs_dm,gds_bz){
		//先判断是否是企业所得税相关功能
		if(gds_bz == "qysds") { 
		   $.ajax({
				url: "/tnsfwHome/qysds.do",
				type: 'post',
				data: {"param":"qysds"},
		        success: function(data){
		        	var s_url="";
		        	if(data.jg=='false')
		        		alert(data.message);
		        	if(data.jg=='true'&&data.type=='ds'){
						window.parent.$(".main_right_content").css("display",""); 
						window.parent.$("#table_right_content2").attr("src",data.url);
						window.parent.$("#table_right_content").css("display","none"); 
					}
		        	if(data.jg=='true'&&data.type=='gs')
		        		window.open (data.url);
		        }	        
			});
		}else{
			if(wydkfs_dm == '1'){
				window.parent.$(".main_right_content").css("display",""); 
				window.parent.$("#table_right_content2").attr("src",url);
				//window.parent.document.getElementById('table_right_content2').src=url;
				window.parent.$("#table_right_content").css("display","none"); 
			}else{
				window.open(url);
			}
		}
		
	}

	/*我的待办 */
	 function getWddb(syxx_time,sxlx,isgrsds){
		$.ajax({
			type : "GET",
			url : "/swxxtx/getWddb.do",
			data : {
				method: "checkJsGs",
				syxx_time:syxx_time,
				sxlx:sxlx,
				isgrsds:isgrsds
			},
			dataType : "json",
			success : function(data) {
			try{
				parent.parent.wddb_wait=false;
				parent.parent.wddbdate=data;
				var m=0;
 				TzgglbURL=data['TzgglbURL'];
 				redistime=data['redistime'];
 				type=data['type'];
				var gs_WSBZSXMGRID=data['gs_WSBZSXMGRID'];
				var gswsbxx = JSON.parse(gs_WSBZSXMGRID); 
				var ds_WSBZSXMGRID=data['ds_WSBZSXMGRID'];
				var dswsbxx = JSON.parse(ds_WSBZSXMGRID); 
				var NSRTTXXGRID=data['NSRTTXXGRID'];
				var yqwsb = JSON.parse(NSRTTXXGRID); 	
				var ybnsrrdList=data['ybnsrrdList'];
				var wdMailNumber=data['wdMailNumber'];
				var html="";
				if(wdMailNumber!=""&&wdMailNumber!="0"&&wdMailNumber!=null){
					html+="<tr style='color: #666666;'><td colspan=4 style='padding-left: 40px;'>您有"+wdMailNumber+"封未读邮件！</td></tr>"
					html+="<tr style='color: #666666;'><td style='width: 50%;padding-left: 40px;'>事项名称</td><td style='width: 20%;'>截止日期</td><td style='width: 20%;'>状态</td><td>操作</td></tr>";
					m++;
				}else{
					html+="<tr class='oddLineCss' style='color: #666666;'><td style='width: 50%;padding-left: 40px;'>事项名称</td><td style='width: 20%;'>截止日期</td><td style='width: 20%;'>状态</td><td>操作</td></tr>";
				}
				if(gswsbxx!=null){
					for(var i=0;i<gswsbxx.length;i++){//国税未申报
						m++;
						var ZSXMMC=gswsbxx[i]['ZSXMMC'];
						var SKSSQ=gswsbxx[i]['SKSSQ'];
						var menu_item_id="";//申报
						menu_item_id=findmemuid(ZSXMMC);
						var gds_bz="";
						var yz_bz="";
						var wydkfs_dm="";
						var url;
						var parent_id="";	
						var qz_url="";
						var menu_item_url="";
						
				 		for(var j in yzlist){ 
							var yz_menu_item_id=yzlist[j].menu_item_id;
							if(yz_menu_item_id==menu_item_id){
								gds_bz=yzlist[j].gds_bz;
								yz_bz=yzlist[j].yz_bz;
								wydkfs_dm=yzlist[j].wydkfs_dm;
								if(gds_bz=="ds"){
									menu_item_url=yzlist[j].real_url;//真
									//qz_url=yzlist[j].qz_url;
								}else{
									menu_item_url=yzlist[j].menu_item_url;//假
									//qz_url="http://localhost:7001"
								}
								qz_url=yzlist[j].qz_url;//域名
								parent_id=yzlist[j].parent_id;
								url=qz_url+menu_item_url;
								if(m%2==0){
									html+="<tr class='oddLineCss'><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>未申报</td><td>";
									html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";								
					            }else{
									html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>未申报</td><td>";
									html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";								
					            }
								break;
							}
						} 
						if(m==5){
							break;
						}
					}
				}
				if(dswsbxx!=null&&m<5){
					 for(var i=0;i<dswsbxx.length;i++){//地税未申报
					 	m++;
					 	if(m>5){
							break;
						}
					 	var ckeckmenu;
						var ZSXMMC=dswsbxx[i]['ZSXMMC'];
						var SKSSQ=dswsbxx[i]['SKSSQ'];
						var menu_item_id="";//申报
						menu_item_id=findmemuid(ZSXMMC);
						var gds_bz="";
						var yz_bz="";
						var wydkfs_dm="";
						var url;
						var parent_id="";	
						var qz_url="";
						var menu_item_url="";
						
				 		for(var j in yzlist){ 
							var yz_menu_item_id=yzlist[j].menu_item_id;
							if(yz_menu_item_id==menu_item_id){
								gds_bz=yzlist[j].gds_bz;
								yz_bz=yzlist[j].yz_bz;
								wydkfs_dm=yzlist[j].wydkfs_dm;
								if(gds_bz=="ds"){
									menu_item_url=yzlist[j].real_url;//真
									//qz_url=yzlist[j].qz_url;
								}else{
									menu_item_url=yzlist[j].menu_item_url;//假
									//qz_url="http://localhost:7001"
								}
								qz_url=yzlist[j].qz_url;
								parent_id=yzlist[j].parent_id;
								url=qz_url+menu_item_url;
								if(m%2==0){
									html+="<tr class='oddLineCss'><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>未申报</td><td>";
									html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";					
					            }else{
					            	html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>未申报</td><td>";
									html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";					
					            }				
								break;
							}
						} 
					}
				}
				if(yqwsb!=null&&m<5){
				 	for(var i=0;i<yqwsb.length;i++){//逾期未申报
				 		m++;
				 		if(m>5){
							break;
						}
				 		var ckeckmenu;
						var ZSXMMC=yqwsb[i]['ZSXMMC'];
						var SKSSQ=yqwsb[i]['SBQX'];
						var menu_item_id="";//申报
						menu_item_id=findmemuid(ZSXMMC);
						var gds_bz="";
						var yz_bz="";
						var wydkfs_dm="";
						var url;
						var parent_id="";	
						var qz_url="";
						var menu_item_url="";
				
				 		for(var j in yzlist){ 
							var yz_menu_item_id=yzlist[j].menu_item_id;
							if(yz_menu_item_id==menu_item_id){
								gds_bz=yzlist[j].gds_bz;
								yz_bz=yzlist[j].yz_bz;
								wydkfs_dm=yzlist[j].wydkfs_dm;
								if(gds_bz=="ds"){
									menu_item_url=yzlist[j].real_url;//真
									//qz_url=yzlist[j].qz_url;
								}else{
									menu_item_url=yzlist[j].menu_item_url;//假
									//qz_url="http://localhost:7001"
								}
								qz_url=yzlist[j].qz_url;
								parent_id=yzlist[j].parent_id;
								url=qz_url+menu_item_url;
								if(m%2==0){
									html+="<tr class='oddLineCss'><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>逾期未申报</td><td>";
									html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";					
									
					            }else{
					            	html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>逾期未申报</td><td>";
									html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";					
					            }
								break;
							}
						}  
					} 
				} 
				  
				//for(var i=0;i<ybnsrrdList.length;i++){//一般纳税人认定
				//	var ybnsrrd=ybnsrrdList[i];
					if(ybnsrrdList!=null&&ybnsrrdList.length!=0&&m<5){
						if(m%2==0){
							html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>一般纳税人认定</td><td style='width: 20%;'></td><td style='width: 20%;color: #ff8939;'>未认定</td><td></td></tr>";	
			            }else{
							html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>一般纳税人认定</td><td style='width: 20%;'></td><td style='width: 20%;color: #ff8939;'>未认定</td><td></td></tr>";			
			            }
					}
				//} 
				$('#undertable').html(html);
			}catch (e) {
				 //console.log(e.name + ": " + e.message);
		  } 
			}	
		});  
    }
	
	 /*服务提醒  */
	 function getTzgg(syxx_time,sxlx,TzgglbURL){
		var fwtx_layer=layer.load(1);
		$.ajax({
			type : "GET",
			url : "/swxxtx/getFwtx.do",
			data : {
				method: "checkJsGs",
				syxx_time:syxx_time,
				sxlx:sxlx
			},
			dataType : "json",
			success : function(data) {
				parent.parent.fwtx_wait=false;
				parent.parent.fwtxdate=data['fwtxVO'];//全局变量
	            layer.close(fwtx_layer);
				var html="<tr class='oddLineCss' style='color: #666666;'><td style='width: 30%;padding-left: 60px;'>申请事项编码</td><td style='width: 30%;'>申请事项名称</td><td style='width: 20%;'>办理状态</td><td>申请日期</td></tr>";
				//通知公告  
				if(data['fwtxVO']!=null){
					var fwtxVOlist=data['fwtxVO'];
					//var fwtxVOlist=$.parseJSON(fwtxVO);
					var number=5;
					if(fwtxVOlist.length<number){
						number=fwtxVOlist.length;
					}
					for(var i=0;i<number;i++){
						var SQRQ=fwtxVOlist[i]["sqrq"];
			            SQRQ=SQRQ.substr(0,10);
			            var DQZT=fwtxVOlist[i]["dqzt"];
			            if(DQZT=="1"){
			            	DQZT="已完成";
			            }else if(DQZT=="2"){
			            	DQZT="已终止";
			            }
			            var SQBH=fwtxVOlist[i]["sqbh"];
			            var SQMC=fwtxVOlist[i]["sqmc"];
			            var SXMC=fwtxVOlist[i]["sxmc"];
			            if(SXMC==""){
			            	SXMC=findSqsxmc(SQBH);
			            }
			            if(GetLength(SXMC)>35){
			            	SXMC=cutstr(SXMC,35);
				        }
			            if(i%2==1){
			                html+="<tr class='oddLineCss'><td style='width: 30%;padding-left: 60px;'>"+SQBH+"</td><td style='width: 30%;'>"+SXMC+"</td><td class='tzrq' style='width: 20%;'>"+DQZT+"</td><td class='tzrq'>"+SQRQ+"</td></tr>";
			            }else{
			                html+="<tr><td style='width: 30%;padding-left: 60px;'>"+SQBH+"</td><td style='width: 30%;'>"+SXMC+"</td><td class='tzrq' style='width: 20%;'>"+DQZT+"</td><td class='tzrq'>"+SQRQ+"</td></tr>";
			            }
		            }  
		            $('#tzgglb').html(html);
				}

			}	
		});  
    }
    
    var GetLength = function (str) {
        ///<summary>获得字符串实际长度，中文2，英文1</summary>
        ///<param name="str">要获得长度的字符串</param>
        var realLength = 0, len = str.length, charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) realLength += 1;
            else realLength += 2;
        }
        return realLength;
    };
    
    /* 字符串、最长 */
	function cutstr(str, len) {
        var str_length = 0;
        var str_len = 0;
        str_cut = new String();
        str_len = str.length;
        for (var i = 0; i < str_len; i++) {
            a = str.charAt(i);
            str_length++;
            if (escape(a).length > 4) {
                //中文字符的长度经编码之后大于4  
                str_length++;
            }
            str_cut = str_cut.concat(a);
            if (str_length >= len) {
                str_cut = str_cut.concat("...");
                return str_cut;
            }
        }
        //如果给定字符串小于指定长度，则返回源字符串；  
        if (str_length < len) {
            return str;
        }
    }

	function findmemuid(ZSXM_DM){
		 var memu_item_id;
		 if("城市维护建设税"==ZSXM_DM||"地方教育附加"==ZSXM_DM||"教育费附加"==ZSXM_DM){//地税
			memu_item_id="bszx_030409";
		 }else if("房产税"==ZSXM_DM){
		 	memu_item_id="bszx_030402";
		 }else if("土地使用税"==ZSXM_DM){
		 	memu_item_id="bszx_030403";
		 }else if("土地增值税"==ZSXM_DM){
		 	memu_item_id="bszx_030404";
		 }else if("印花税"==ZSXM_DM){
		 	memu_item_id="bszx_030405";
		 }else if("车船税"==ZSXM_DM){
		 	memu_item_id="bszx_030406";
		 }else if("环保税"==ZSXM_DM){
		 	memu_item_id="bszx_030407";
		 }else if("个人所得税"==ZSXM_DM){
		 	memu_item_id="bszx_030408";
		 }else if("资源税"==ZSXM_DM){
		 	memu_item_id="bszx_030410";
		 }else if("耕地占用税"==ZSXM_DM){
		 	memu_item_id="bszx_030411";
		 }else if("契税"==ZSXM_DM){
		 	memu_item_id="bszx_030412";
		 }else if("工会经费"==ZSXM_DM){
		 	memu_item_id="bszx_030501";
		 }else if("残疾人就业保障金"==ZSXM_DM){
		 	memu_item_id="bszx_030502";
		 }else if("企业所得税"==ZSXM_DM){//企业所得税
		 	memu_item_id="bszx_0303";
		 }else if("增值税"==ZSXM_DM){ //国税
		 	memu_item_id="bszx_030101";
		 }else if("消费税"==ZSXM_DM){
		 	memu_item_id="bszx_0302";
		 }else if("文化事业建设费"==ZSXM_DM){
		 	memu_item_id="bszx_030503";
		 }else if("废弃电子基金"==ZSXM_DM){
		 	memu_item_id="bszx_030504";
		 }
		 return memu_item_id;
	}	
  $(function(){
	  var wddb_syxx_time = "";
	  var wddb_sxlx = "";
	  var wddb_isgrsds = "";
	  $.ajax({//获取首页加载配置
			type : "GET",
			url : "/swxxtx/getSyjzpz.do",
			dataType : "json",
			async:false,
			success : function(data) {
				jzList=data.jzList;
				var a=jzList[0];
				for(var i=0; i<jzList.length;i++){
					if("Sbxx"==jzList[i].name){
						wddb_syxx_time=jzList[i].redistime;
						wddb_sxlx=jzList[i].type;
						wddb_isgrsds=jzList[i].isgrsds;
					}else if("Fwtx"==jzList[i].name){
						fwtx_syxx_time=jzList[i].redistime;
						fwtx_sxlx=jzList[i].type;
					}else if("Tzgg"==jzList[i].name){
						tzgg_syxx_time=jzList[i].redistime;
						tzgg_sxlx=jzList[i].type;
					}
				}
			}	
		}); 
	  var wddbwait=parent.parent.wddb_wait;
	  if(wddbwait){
	      getWddb(wddb_syxx_time,wddb_sxlx,wddb_isgrsds);
	  }
	  var wddbdate=parent.parent.wddbdate;
	  if(wddbdate!=null){
		try{
		    var data=wddbdate;
		  	var m=0;
			TzgglbURL=data['TzgglbURL'];
			redistime=data['redistime'];
			type=data['type'];
			var gs_WSBZSXMGRID=data['gs_WSBZSXMGRID'];
			var gswsbxx = JSON.parse(gs_WSBZSXMGRID); 
			var ds_WSBZSXMGRID=data['ds_WSBZSXMGRID'];
			var dswsbxx = JSON.parse(ds_WSBZSXMGRID); 
			var NSRTTXXGRID=data['NSRTTXXGRID'];
			var yqwsb = JSON.parse(NSRTTXXGRID); 	
			var ybnsrrdList=data['ybnsrrdList'];
			var wdMailNumber=data['wdMailNumber'];
			var html="";
			if(wdMailNumber!=""&&wdMailNumber!="0"&&wdMailNumber!=null){
				html+="<tr style='color: #666666;'><td colspan=4 style='padding-left: 40px;'>您有"+wdMailNumber+"封未读邮件！</td></tr>"
				html+="<tr style='color: #666666;'><td style='width: 50%;padding-left: 40px;'>事项名称</td><td style='width: 20%;'>截止日期</td><td style='width: 20%;'>状态</td><td>操作</td></tr>";
				m++;
			}else{
				html+="<tr class='oddLineCss' style='color: #666666;'><td style='width: 50%;padding-left: 40px;'>事项名称</td><td style='width: 20%;'>截止日期</td><td style='width: 20%;'>状态</td><td>操作</td></tr>";
			}
			if(gswsbxx!=null){
				for(var i=0;i<gswsbxx.length;i++){//国税未申报
					m++;
					var ZSXMMC=gswsbxx[i]['ZSXMMC'];
					var SKSSQ=gswsbxx[i]['SKSSQ'];
					var menu_item_id="";//申报
					menu_item_id=findmemuid(ZSXMMC);
					var gds_bz="";
					var yz_bz="";
					var wydkfs_dm="";
					var url;
					var parent_id="";	
					var qz_url="";
					var menu_item_url="";
					
			 		for(var j in yzlist){ 
						var yz_menu_item_id=yzlist[j].menu_item_id;
						if(yz_menu_item_id==menu_item_id){
							gds_bz=yzlist[j].gds_bz;
							yz_bz=yzlist[j].yz_bz;
							wydkfs_dm=yzlist[j].wydkfs_dm;
							if(gds_bz=="ds"){
								menu_item_url=yzlist[j].real_url;//真
								//qz_url=yzlist[j].qz_url;
							}else{
								menu_item_url=yzlist[j].menu_item_url;//假
								//qz_url="http://localhost:7001"
							}
							qz_url=yzlist[j].qz_url;//域名
							parent_id=yzlist[j].parent_id;
							url=qz_url+menu_item_url;
							if(m%2==0){
								html+="<tr class='oddLineCss'><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>未申报</td><td>";
								html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";								
				            }else{
								html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>未申报</td><td>";
								html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";								
				            }
							break;
						}
					} 
					if(m==5){
						break;
					}
				}
			}
			if(dswsbxx!=null&&m<5){
				 for(var i=0;i<dswsbxx.length;i++){//地税未申报
				 	m++;
				 	if(m>5){
						break;
					}
				 	var ckeckmenu;
					var ZSXMMC=dswsbxx[i]['ZSXMMC'];
					var SKSSQ=dswsbxx[i]['SKSSQ'];
					var menu_item_id="";//申报
					menu_item_id=findmemuid(ZSXMMC);
					var gds_bz="";
					var yz_bz="";
					var wydkfs_dm="";
					var url;
					var parent_id="";	
					var qz_url="";
					var menu_item_url="";
					
			 		for(var j in yzlist){ 
						var yz_menu_item_id=yzlist[j].menu_item_id;
						if(yz_menu_item_id==menu_item_id){
							gds_bz=yzlist[j].gds_bz;
							yz_bz=yzlist[j].yz_bz;
							wydkfs_dm=yzlist[j].wydkfs_dm;
							if(gds_bz=="ds"){
								menu_item_url=yzlist[j].real_url;//真
								//qz_url=yzlist[j].qz_url;
							}else{
								menu_item_url=yzlist[j].menu_item_url;//假
								//qz_url="http://localhost:7001"
							}
							qz_url=yzlist[j].qz_url;
							parent_id=yzlist[j].parent_id;
							url=qz_url+menu_item_url;
							if(m%2==0){
								html+="<tr class='oddLineCss'><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>未申报</td><td>";
								html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";					
				            }else{
				            	html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>未申报</td><td>";
								html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";					
				            }
							break;
						}
					} 
				}
			}
			if(yqwsb!=null&&m<5){
			 	for(var i=0;i<yqwsb.length;i++){//逾期未申报
			 		m++;
			 		if(m>5){
						break;
					}
			 		var ckeckmenu;
					var ZSXMMC=yqwsb[i]['ZSXMMC'];
					var SKSSQ=yqwsb[i]['SBQX'];
					var menu_item_id="";//申报
					menu_item_id=findmemuid(ZSXMMC);
					var gds_bz="";
					var yz_bz="";
					var wydkfs_dm="";
					var url;
					var parent_id="";	
					var qz_url="";
					var menu_item_url="";
			
			 		for(var j in yzlist){ 
						var yz_menu_item_id=yzlist[j].menu_item_id;
						if(yz_menu_item_id==menu_item_id){
							gds_bz=yzlist[j].gds_bz;
							yz_bz=yzlist[j].yz_bz;
							wydkfs_dm=yzlist[j].wydkfs_dm;
							if(gds_bz=="ds"){
								menu_item_url=yzlist[j].real_url;//真
								//qz_url=yzlist[j].qz_url;
							}else{
								menu_item_url=yzlist[j].menu_item_url;//假
								//qz_url="http://localhost:7001"
							}
							qz_url=yzlist[j].qz_url;
							parent_id=yzlist[j].parent_id;
							url=qz_url+menu_item_url;
							if(m%2==0){
								html+="<tr class='oddLineCss'><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>逾期未申报</td><td>";
								html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";					
								
				            }else{
				            	html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>"+ZSXMMC+"</td><td style='width: 20%;'>"+SKSSQ+"</td><td style='width: 20%;color: #ff8939;'>逾期未申报</td><td>";
								html+="<div class='blButton' onclick=\"showContent(\'"+url+"\',\'"+wydkfs_dm+"\',\'"+gds_bz+"\');\">办理</div></td></tr>";					
				            }
							break;
						}
					}  
				} 
			} 
			  
			//for(var i=0;i<ybnsrrdList.length;i++){//一般纳税人认定
			//	var ybnsrrd=ybnsrrdList[i];

				if(ybnsrrdList!=null&&ybnsrrdList.length!=0&&m<5){
					if(m%2==0){
						html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>一般纳税人认定</td><td style='width: 20%;'></td><td style='width: 20%;color: #ff8939;'>未认定</td><td></td></tr>";	
		            }else{
						html+="<tr><td class='bg_one' style='width: 50%;padding-left: 40px;color:#333333;'>一般纳税人认定</td><td style='width: 20%;'></td><td style='width: 20%;color: #ff8939;'>未认定</td><td></td></tr>";			
		            }
				}
			$('#undertable').html(html);
		}catch (e) {
			 //console.log(e.name + ": " + e.message);
		} 
	  }
	  var fwtxdate=parent.parent.fwtxdate;
 	 if(fwtxdate!=null){
			var html="<tr class='oddLineCss' style='color: #666666;'><td style='width: 30%;padding-left: 60px;'>申请事项编码</td><td style='width: 30%;'>申请事项名称</td><td style='width: 20%;'>办理状态</td><td>申请日期</td></tr>";
				var fwtxVOlist=fwtxdate;
				var number=5;
				if(fwtxVOlist.length<number){
					number=fwtxVOlist.length;
				}
				for(var i=0;i<number;i++){
					var SQRQ=fwtxVOlist[i]["sqrq"];
		            SQRQ=SQRQ.substr(0,10);
		            var DQZT=fwtxVOlist[i]["dqzt"];
		            if(DQZT=="1"){
		            	DQZT="已完成";
		            }else if(DQZT=="2"){
		            	DQZT="已终止";
		            }
		            var SQBH=fwtxVOlist[i]["sqbh"];
		            var SQMC=fwtxVOlist[i]["sqmc"];
		            var SXMC=fwtxVOlist[i]["sxmc"];
		            if(SXMC==""){
		            	SXMC=findSqsxmc(SQBH);
		            }
		            if(GetLength(SXMC)>35){
		            	SXMC=cutstr(SXMC,35);
			        }
		            if(i%2==1){
		                html+="<tr class='oddLineCss'><td style='width: 30%;padding-left: 60px;'>"+SQBH+"</td><td style='width: 30%;'>"+SXMC+"</td><td class='tzrq' style='width: 20%;'>"+DQZT+"</td><td class='tzrq'>"+SQRQ+"</td></tr>";
		            }else{
		                html+="<tr><td style='width: 30%;padding-left: 60px;'>"+SQBH+"</td><td style='width: 30%;'>"+SXMC+"</td><td class='tzrq' style='width: 20%;'>"+DQZT+"</td><td class='tzrq'>"+SQRQ+"</td></tr>";
		            }
		        }  
	            $('#tzgglb').html(html);
 	 }
 	 var tzggdate=parent.parent.tzggdate;
 	 if(tzggdate!=null){
	 	var html="<tr class='oddLineCss' onclick='findqsgg();'><td style='width: 78%;text-align: left;padding-left: 50px;'>【欠税公告】国家税务总局厦门市税务局关于纳税人欠缴税款情况的公告</td><td class='tzrq'>2018-11-25</td></tr>";
  		var number=5;
  		var gs_TZGGVOlist=$.parseJSON(tzggdate);
 		if(gs_TZGGVOlist.length<number){
 			number=gs_TZGGVOlistlist.length;
 		}
 		for(var i=0;i<number;i++){
             var TITLE=gs_TZGGVOlist[i]["TITLE"];
             var CMS_DEST_PATH=gs_TZGGVOlist[i]["CMS_DEST_PATH"];
             if(GetLength(TITLE)>60){
                TITLE=cutstr(TITLE,60);
             }
             var UPDATE_TIME=gs_TZGGVOlist[i]["UPDATE_TIME"];
 			var arr = UPDATE_TIME.split(" ");
 			var url=TzgglbURL+CMS_DEST_PATH;
 			if(i==0){
 				TITLE="【政策法规通知公告】"+TITLE;
 			}
 			if(i%2==0){
				html+="<tr onclick='window.open(\""+url+"\");'><td style='width: 78%;text-align: left;padding-left: 50px;'>"+TITLE+"</td><td class='tzrq'>"+arr[0]+"</td></tr>";
            }else{
            	html+="<tr  class='oddLineCss' onclick='window.open(\""+url+"\");'><td style='width: 78%;text-align: left;padding-left: 50px;'>"+TITLE+"</td><td class='tzrq'>"+arr[0]+"</td></tr>";
            }
         }  
         $('#tzgg').html(html);
  	 }
	});	
  
  function findSqsxmc(SQBH){
	  var sqmc=""
	  if(SQBH=="SLSXA021006001"){
		  sqmc="发票领用";
	  }else if(SQBH=="SLSXA021013001"){
		  sqmc="发票验（交）旧";
	  }else if(SQBH=="SLSXA061003001"){
		  sqmc="车辆购置税申报";
	  }else if(SQBH=="SLSXA011002002"){
		  sqmc="变更税务登记";
	  }else if(SQBH=="SLSXA042010001"){
		  sqmc="税（费）种认定";
	  }
	  return sqmc;
  }
  
  /*通知公告  */
	 function getnewTzgg(redistime,type){
	 	var tzgg_layer=layer.load(1);
		$.ajax({
			type : "GET",
			url : "/tnsfwHome/nologin/getTzgg.do",
			data : {
				method: "checkJsGs",
				syxx_time:redistime,
				sxlx:type
			},
			dataType : "json",
			success : function(data) {
				parent.parent.tzgg_wait=false;
				parent.parent.tzggdate=data['gs_TZGGVO'];//全局变量
			 	layer.close(tzgg_layer);
			 	var html="<tr class='oddLineCss' onclick='findqsgg();'><td style='width: 78%;text-align: left;padding-left: 50px;'>【欠税公告】国家税务总局厦门市税务局关于纳税人欠缴税款情况的公告</td><td class='tzrq'>2018-11-25</td></tr>";
			 	var TzgglbURL=data['TzgglbURL'];
				//通知公告  
				if(data['gs_TZGGVO']!=null){
					var gs_TZGGVO=data['gs_TZGGVO'];
					var gs_TZGGVOlist=$.parseJSON(gs_TZGGVO);
					var number=5;
					if(gs_TZGGVOlist.length<number){
						number=gs_TZGGVOlistlist.length;
					}
					for(var i=0;i<number;i++){
			            var TITLE=gs_TZGGVOlist[i]["TITLE"];
			            var CMS_DEST_PATH=gs_TZGGVOlist[i]["CMS_DEST_PATH"];
			            if(GetLength(TITLE)>60){
			               TITLE=cutstr(TITLE,60);
			            }
			            var UPDATE_TIME=gs_TZGGVOlist[i]["UPDATE_TIME"];
						var arr = UPDATE_TIME.split(" ");
						var url=TzgglbURL+CMS_DEST_PATH;
						if(i==0){
							TITLE="【政策法规通知公告】"+TITLE;
						}
						if(i%2==0){
							html+="<tr onclick='window.open(\""+url+"\");'><td style='width: 78%;text-align: left;padding-left: 50px;'>"+TITLE+"</td><td class='tzrq'>"+arr[0]+"</td></tr>";
			            }else{
			            	html+="<tr  class='oddLineCss' onclick='window.open(\""+url+"\");'><td style='width: 78%;text-align: left;padding-left: 50px;'>"+TITLE+"</td><td class='tzrq'>"+arr[0]+"</td></tr>";
			            }
		            }  
		            $('#tzgg').html(html);
				}

			}	
		});  
}  
	 
	 function findqsgg(){
	    	var url="/tnsfwHome/index.do?menuid=tzgg&menu_item_id=tzgg_04";
	    	//window.open(url,'_blank'); //在新的空白页面打开
			window.parent.parent.showMain(url); //覆盖当前页面打开
	 }
