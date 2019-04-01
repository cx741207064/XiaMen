/**
 * 事件处理工具类，用于对各页面的通用事件进行统一处理
 *
 * @author 黄宗基
 * @version 1.0
 *
 */
Events = {

    // 项目页面路径的相对上下文
    RELATIVE_CONTEXT: "jsp/",

    // 未选中要操作的记录时的警告消息
    NO_EDIT_WARNING_MSG: "请选择要操作的数据!",

    // 未选中要删除的记录时的警告消息
    NO_SELECTION_WARNING_MSG: "请选择要操作的数据!",

    // 删除确认消息
    DELETION_CONFIRM_MSG: "确定要删除当前的记录吗?",

    // 查询结果为空时的提示消息
    NO_SEARCH_RESULTS_INFO_MSG: "没有查询结果数据!",

    // 保存成功提示消息
    SAVE_SUCCESS_INFO_MSG: "当前记录保存操作成功!",

    // 导出确认消息
    EXPORT_CONFIRM_MSG: "确认要导出当前查询的数据?",

    /**
     * 初始化查询列表
     * {
     *  bootstrapId: "#spmxxxTableList",//bootstrap-table列表控件id
     *  queryFormId: "#formSearch",//查询表单id，不需要过滤查询此属性可不填写
     *  url: Common.basePath() + "/spmxxxController.do?queryList"//bootstrap-table列表查询url
     *  isAutoKeyDown : true,
     *  options : { //bootstrap-table 参数，此处填写将覆盖默认值
     *  uniqueId: "id", //主键列
     *  sortName: "foodname",//排序字段名
     *  sortOrder: "asc"
     *  }
     * }
     * @param params
     *
     */
    onInitTable: function (params) {
        var that = this;
        var queryFormId = params.queryFormId;
        var formQueryParams = {};
        if (queryFormId && $(queryFormId).length > 0) {
            var fields = $(queryFormId).serializeArray();
            $.each(fields, function (i, field) {
                formQueryParams[field.name] = field.value;
            });
            //查询回车键
            var isAutoKeyDown = params.isAutoKeyDown == false ? false : true;
            if (isAutoKeyDown) {
                $(queryFormId).keydown(function (e) {
                    var event = e || window.event;
                    var code = event.keyCode || event.which || event.charCode;
                    if (code == 13) {
                        var _url = $(params.bootstrapTableId).bootstrapTable("getOptions").url;
                        if (_url) {
                            that.onGeneralTableFormQuery(params.bootstrapTableId, params.queryFormId);
                        }
                    }
                });
            }
        }

        var queryParamsObj = function (params) {
            var queryParams = $.extend(formQueryParams, {
                limit: params.limit, // 页面大小
                offset: params.offset, // 页码
                order: params.order,
                ordername: params.sort
            });
            return queryParams;
        };

        var layerId = "";
        var tableOffsetTop = "";
        var _options = $.extend({}, {
            url: params.url,//请求后台的URL
            method: 'post',//请求方式（*）
            search: false,//是否显示表格搜索，此搜索是客户端搜索，不会进服务端
            cache: false,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            sidePagination: "server",//分页方式：client客户端分页，server服务端分页（*）
            queryParams: queryParamsObj,
            singleSelect: true,//单选
            pagination: true,//是否显示分页（*）
            showRefresh: false,//是否显示刷新按钮
            showToggle: false,//是否显示详细视图和列表视图的切换按钮
            showColumns: false,//是否显示所有的列
            pageNumber: 1,//初始化加载第一页，默认第一页
            pageSize: 10,//每页的记录行数（*）
            pageList: [10, 20, 30],//可供选择的每页的行数（*）
            idField:'id',
            pageStore: false,//分页时保存所选（*）
            iconSize: 'outline',
            striped: true,//是否显示行间隔色
            clickToSelect: true,//是否启用点击选中行
            minimumCountColumns: 0,
            // height: getHeight() - 55,
            contentType: "application/x-www-form-urlencoded",//为了让后台获取页码和行数的参数（切记不可少）
            onLoadSuccess: function () {
                if (layerId && layerId != "") {
                    layer.close(layerId);
                }
            },
            /*onPostBody: function () {
             tableOffsetTop = $(params.bootstrapTableId).closest(".bootstrap-table").clientHeight;

             },*/
            onRefresh: function () {
                layerId = layer.load(2);
            },
            onLoadError: function () {
                layer.alert("加载出错,请联系管理员!");
                if (layerId && layerId != "") {
                    layer.close(layerId);
                }
            }
        }, params.options);
        //分页选中保存  by FangWQ
        if(!_options.singleSelect && _options.pageStore){
    		//在渲染页面数据之前执行的方法，此配置很重要!!!!!!!  
    		_options.responseHandler=function(res){
    			$.each(res.rows, function (i, row) {  
    				//判断当前行的数据id是否存在与选中的数组，存在则将多选框状态变为true
    				var selIds = $(params.bootstrapTableId).data('bootstrap.table') && $(params.bootstrapTableId).data('bootstrap.table').selIds||[];
    				row.select = $.inArray(row[_options.idField], selIds) != -1;
    			});  
    			return res; 
    		};
        }
        var $table = $(params.bootstrapTableId).bootstrapTable(_options);
        if($table){
        	var data = $table.data('bootstrap.table');
        	if(!_options.singleSelect && _options.pageStore){
        		//选中事件操作数组  
        		var union = function(array,ids){  
        			$.each(ids, function (i, id) {  
        				if($.inArray(id,array)==-1){  
        					array[array.length] = id;  
        				}  
        			});  
        			return array;  
        		};  
        		//取消选中事件操作数组  
        		var difference = function(array,ids){  
        			$.each(ids, function (i, id) {  
        				var index = $.inArray(id,array);  
        				if(index!=-1){  
        					array.splice(index, 1);  
        				}  
        			});  
        			return array;  
        		};  
        		var _ = {"union":union,"difference":difference};  
        		//绑定选中事件、取消事件、全部选中、全部取消  
        		$table.on('check.bs.table check-all.bs.table uncheck.bs.table uncheck-all.bs.table', function (e, rows) {  
        			var ids = $.map(!$.isArray(rows) ? [rows] : rows, function (row) {  
        				return row[_options.idField];  
        			});  
        			var rows = $.map(!$.isArray(rows) ? [rows] : rows, function (row) {  
        				return row;  
        			});  
        			func = $.inArray(e.type, ['check', 'check-all']) > -1 ? 'union' : 'difference';  
        			data.selIds = _[func](data.selIds||[], ids);   
        			data.sels = _[func](data.sels||[], rows);   
        		});
        	}
        }
        // console.log("kkkkkkkkkkkkkkkkkkkkkk=" + tableOffsetTop);
        // $(params.bootstrapTableId).bootstrapTable("resetView", {height: height});

        function getHeight() {
            console.log($(params.bootstrapTableId).clientHeight);
            return $(document.body).height() - 80;
        }
    },

    /**
     * 通用查询方法
     * @param bootstrapTableId 表格id
     * @param queryFormId 查询formid
     * @param url 新的查询url
     */
    onGeneralTableFormQuery: function (bootstrapTableId, queryFormId, url) {
    	if(queryFormId){
    		// 查询增加表单校验 by 曾锦桂
    		var validator = $(queryFormId).validate();// 表单校验
            if (!validator.form()) {
                return false;
            }
    		var fields = $(queryFormId).serializeArray();
    		//selectpicker在多选模式下multiple，修复为空时不算在表单里 by FangWQ
    		var mulselects = $(queryFormId).find('.selectpicker[multiple]');
    		$.each(mulselects,function(i,mulselect){
    			if(!$(mulselect).val()){
    				var field = {name:$(mulselect).attr('name'),value:''};
    				fields.push(field)
    			}
    		});
    		var queryParams = [];
    		$.each(fields, function (i, field) {
    			/**
    			 * hjw 处理获取的控件存在多个值时只获取了最后一个值的BUG
    			 * 修改后：获取的多个值，拼接成一个串，且值与值之间用“,”隔开
    			 */
    			if(queryParams[field.name]==null||queryParams[field.name]==""){
					queryParams[field.name] = field.value;
				}else{
					queryParams[field.name] = queryParams[field.name] +","+field.value;
				}
    			//queryParams[field.name] = field.value;
    		});
    	}
        var _url = $(bootstrapTableId).bootstrapTable("getOptions").url;
        if (!_url) {//默认查询url为空，并且传入新url
            if (url) {
                $(bootstrapTableId).bootstrapTable("getOptions").url = url;
            } else {
                alert("查询URL不能为空，请检查!");
            }
        }
        $(bootstrapTableId).unselTable(); // 2018/07/09 蔡安铭 解决查询列表时，复选框还被选中问题
        $(bootstrapTableId).bootstrapTable("getOptions").pageNumber = 1;
        $(bootstrapTableId).bootstrapTable("refresh", {
            url: url,
            query: queryParams
        });
    },
    /**
     * 点击树节点查询
     * 1、赋值隐藏域$('#query\\.parent_id').val(id);
	   2、调用方法，并传入节点id
	   Events.onGeneralTreeFormQuery("#TableList", "#formSearch",[[@{/xtgl/zone/query}]]+'?query.parent_id='+id);
     */
    onGeneralTreeFormQuery: function (bootstrapTableId, queryFormId, url) {
    	if(queryFormId){
    		var fields = $(queryFormId).serializeArray();
    		var queryParams = [];
    		$.each(fields, function (i, field) {
    			queryParams[field.name] = null;
    		});
    	}
    	var _url = $(bootstrapTableId).bootstrapTable("getOptions").url;
    	if (!_url) {//默认查询url为空，并且传入新url
    		if (url) {
    			$(bootstrapTableId).bootstrapTable("getOptions").url = url;
    		} else {
    			alert("查询URL不能为空，请检查!");
    		}
    	}
    	$(bootstrapTableId).bootstrapTable("getOptions").pageNumber = 1;
    	$(bootstrapTableId).bootstrapTable("refresh", {
    		url: url,
    		query: queryParams
    	});
    },

    /**
     * 通用查询表单重置方法
     * @param queryFormId
     */
    onGeneralFormQueryReset: function (queryFormId) {
        if ($(queryFormId).length > 0) {
            $(queryFormId)[0].reset();
            $(queryFormId + " .selectpicker").each(function () {
                var _id = this.id;
                if (_id) {
                    if (_id.indexOf(".") != -1) {
                        _id = _id.replace(".", "\\.");
                    }
                    $("#" + _id).selectpicker("refresh");
                }
            });
            $(queryFormId).find("input").each(function(){
    	    	$(this).val("");
    	    });
        }
    },

    /**
     * 通用查询表单重置方法(仅重置非只读或非禁用组件的值)
     * @param queryFormId
     */
    onGeneralFormQueryResetNotReadonly: function (queryFormId) {
        if ($(queryFormId).length > 0) {
            $(queryFormId)[0].reset();
            $(queryFormId + " .selectpicker:not(\'[readonly],[disabled]\')").each(function () {
                var _id = this.id;
                if (_id) {
                    if (_id.indexOf(".") != -1) {
                        _id = _id.replace(".", "\\.");
                    }
                    $("#" + _id).selectpicker("refresh");
                }
            });
            $(queryFormId).find("input:input:not(\'[readonly],[disabled]\')").each(function(){
                $(this).val("");
            });
        }
    },

    /**
     * 通用列表单行删除方法
     *
     * @param tableId 列表id
     * @param queryFormId 查询表单id
     * @param href 提交后台删除的href
     * @param preHandle 提交删除前的自定义方法
     * @param callback 提交删除后的回调方法
     */
    onGeneralTableSingleDelete: function (options) {
        var that = this;
        if (!$(options.tableId) || $(options.tableId).length != 1) {
            layer.alert("列表ID错误!");
        }
        layer.confirm(options.confirmMsg||Events.DELETION_CONFIRM_MSG, {
            btn: ['是', '否']
        }, function () {
        	Events.onGeneralSave($.extend({}, options, {
                callback: function (data, opt) {
                    if (options.callback) {// 返回true则刷新列表
                        if (options.callback.call(this, data, opt) == false) {
                            return false;
                        }
                    }
                    that.onGeneralTableFormQuery(options.tableId, options.queryFormId);//自动刷新列表
                }
            }));
        });
    },

    /**
     * tab页面保存事件
     *
     * @param customShowMsg 是否自定义弹出确认框(默认false,自动弹出操作提示)
     * @param formId 表单id
     * @param href 提交保存后台控制类路径 "${ctx}/xxxx/xxx.do?save"
     * @param validate 是否表单校验
     * @param params 提交保存的参数 {字段1:'值1',字段2:'值2'}
     * @param preHandle 提交保存前的自定义方法【参数为(args[0],args[1],args[3],args[4])】
     * @param callback 提交完成后自定义回调事件【参数为ajax返回值data】，返回值为true则关闭当前弹出窗口
     */
    onGeneralTabSave: function (options) {
        Events.onGeneralSave($.extend({}, options, {
            callback: function (data, opt) {
                if (options.callback) {// 返回true则刷新列表
                    if (options.callback.call(this, data, opt) == false) {
                        return false;
                    }
                }
                // 只在保存成功刷新tab页
                if (data.success && data.success == true && options.isRefresh != false ) {
                    TabUtils.closeActiveTabAndActiveParentTab(true);
                }
            }
        }));
    },

    /**
     * 通用保存方法
     *
     * @param customShowMsg 是否自定义弹出确认框(默认false,自动弹出操作提示)
     * @param formId 表单id
     * @param href 提交保存后台控制类路径 "${ctx}/xxxx/xxx.do?save"
     * @param validate 是否表单校验
     * @param params 提交保存的参数 {字段1:'值1',字段2:'值2'}
     * @param preHandle 提交保存前的自定义方法【参数为(args[0],args[1],args[3],args[4])】
     * @param callback 提交完成后自定义回调事件【参数为ajax返回值data】，返回值为true则关闭当前弹出窗口
     *
     */
    onGeneralSave: function (options) {
        var that = this;
        options.params = options.params || [];
        if (options.form_id) {
            var _form = $(options.formId);

            //增加是否校验表单的参数，供页面点暂存时用
            var _validate = options.validate;
            if (typeof(_validate) != "undefined" && !_validate) {
                //只有明确表明不检查表单时才不进行检查，默认需检查表单
            } else {
                var validator = _form.validate();// 表单校验
                if (!validator) {
                    return false;
                }
            }
        }
        if (options.preHandle) {// 提交保存前的自定义方法
            if (options.preHandle.call(this, options) == false) {
                return false;
            }
        }
        if (options.formId) {
            var _form = $(options.formId);
            var disabled = _form.find(':input:disabled').removeAttr('disabled');//暂时取消禁用状态
            var serialized = _form.serializeArray() || [];
            disabled.attr('disabled', 'disabled');
            options.params = $.merge(serialized, options.params);
            if (!options.href) {
                options.href = _form.attr("action");
            }
        }
        var loadIndex = layer.load(2);//加入遮罩
        $.post(encodeURI(options.href), options.params, function (data) {
            layer.close(loadIndex);
            if (!options.customShowMsg) {
                var msgIndex = layer.alert(data.msg, {icon: data.success == true ? 1 : 2, title: data.success == true ? "提示" : "错误"}, function (index) {
                    layer.close(msgIndex);
                    if (options.callback) {
                        return options.callback.call(that, data, options);
                    }
                });
            } else {
                if (options.callback) {
                    return options.callback.call(that, data, options);
                }
            }
        }, "json");
    },

    number_formatter: function (bootstrapTableId, index) {
        var bootstrapOptions = $(bootstrapTableId).bootstrapTable("getOptions");
        var pageNumber = bootstrapOptions.pageNumber;
        var pageSize = bootstrapOptions.pageSize;
        return index + ((pageNumber - 1) * pageSize) + 1;
    },

    //得到事件
    getEvent: function () {
        if (window.event) {
            return window.event;
        }
        func = Events.getEvent.caller;
        while (func != null) {
            var arg0 = func.arguments[0];
            if (arg0) {
                if ((arg0.constructor == Event || arg0.constructor == MouseEvent || arg0.constructor == KeyboardEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                    return arg0;
                }
            }
            func = func.caller;
        }
        return null;
    },

    //阻止冒泡
    cancelBubble: function () {
        var e = Events.getEvent();
        if (window.event) {
            //e.returnValue=false;//阻止自身行为
            e.cancelBubble = true;//阻止冒泡
        } else if (e.preventDefault) {
            //e.preventDefault();//阻止自身行为
            e.stopPropagation();//阻止冒泡
        }
    },

    /**
     * 初始化模糊查询控件
     * {
     *  id : "",//控件ID
     *  url : "",//后台请求地址
     *  effectiveFieldsAlias : {txnno: "交易号", entname: "经营者名称", jyhtype: "经营者类型"},//列表中文和字段映射
     *  onSetSelectValue : function(e, keyword, data){}//选择事件
     * }
     * @param options
     */
    onInitSuggest: function (options) {
        var that = this;
        var effectiveFields = [];
        $.each(options.effectiveFieldsAlias, function (name, value) {
            effectiveFields[effectiveFields.length] = name;
        });
        var _url = options.url;
        var type = '?';
        if (/=$/.test(_url)) {
            type = '';
        } else if (/\?/.test(_url)) {
            type = '&';
        }
        options.url = _url + type + "d=" + new Date().getTime();

        $(options.id).bsSuggest($.extend({
            allowNoKeyword: false,   //是否允许无关键字时请求数据。为 false 则无输入时不执行过滤请求
            getDataMethod: "url",
            fnAdjustAjaxParam: function (keyword, options) {
                return {data: {"query.multipleCondition": keyword}};
            },
            delayUntilKeyup: true,
            processData: function (data) {
                return {
                    "message": "",
                    "value": data.rows
                };
            },
            autoSelect: false,
            clearable: true, //可清除已输入内容
            ignorecase: true, //忽略大小写
            effectiveFields: effectiveFields,
            showHeader: true //显示 header
        }, options == undefined ? {} : options)).on('onDataRequestSuccess', function (e, result) {
            console.log('onDataRequestSuccess: ', result);
            if (that.options.onDataRequestSuccess) {
                that.options.onDataRequestSuccess(e, result);
            }
        }).on('onSetSelectValue', function (e, keyword, data) {
            console.log('onSetSelectValue');
            if (that.options.onSetSelectValue) {
                that.options.onSetSelectValue(e, keyword, data);
            }
        }).on('onUnsetSelectValue', function () {
            console.log('onUnsetSelectValue');
            if (that.options.onUnsetSelectValue) {
                that.options.onUnsetSelectValue(e);
            }
        });
    },

    /**
     * 获取下载模板路径
     * @param templete_code为模板编号
     * @returns {String}
     * liugeng 20170718
     */
    getTempleteUrl: function (templete_code) {
        var url = '';
        var templete = top.codeData.BM_TEMPLETE_DOWNLOAD;//模板下载参数
        for (var i = 0; i < templete.length; i++) {
            if (templete[i].id == templete_code) {
                url += templete[i].text;
                break;
            }
        }
        return url;
    }
};
jQuery.fn.extend({
	getTableSels : function () {
		var $table = this;
		var options = $table.bootstrapTable('getOptions');
		if(options){
			if(!options.singleSelect && options.pageStore){
				var sels = $table.data('bootstrap.table') && $table.data('bootstrap.table').sels||[];
				return sels;
			}else{
				return $table.bootstrapTable('getSelections');
			}
		}
		return null;
	},
	getTableSelIds : function () {
		var $table = this;
		var options = $table.bootstrapTable('getOptions');
		if(options){
			if(!options.singleSelect && options.pageStore){
				var selIds = $table.data('bootstrap.table') && $table.data('bootstrap.table').selIds||[];
				return selIds;
			}else{
				return $table.bootstrapTable('getSelections');
			}
		}
		return null;
	},
	unselTable : function () {
		var $table = this;
		var options = $table.bootstrapTable('getOptions');
		if(options){
			if(!options.singleSelect && options.pageStore){
				$table.data('bootstrap.table').selIds=[];
				$table.data('bootstrap.table').sels=[];
				$table.bootstrapTable('uncheckAll');
			}else{
				$table.bootstrapTable('uncheckAll');
			}
		}
	}
});



/**
 * 防止按backspace键退出系统
 * liugeng 2017/4/7
 */
$(document).keydown(function (e) {
    var doPrevent;
    if (e.keyCode == 8 || e.keyCode == 13) {   //注：8为Backspace键，13为Enter键
        var d = e.srcElement || e.target;
        if (d.tagName.toUpperCase() == 'INPUT' || d.tagName.toUpperCase() == 'TEXTAREA') {
            doPrevent = d.readOnly || d.disabled;
        }
        else
            doPrevent = true;
    }
    else
        doPrevent = false;
    if (doPrevent)
        e.preventDefault();
});
