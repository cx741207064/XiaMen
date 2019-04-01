/**
 * Created by huangzongji on 2016/11/29.
 *
 * Tab页面工具类
 * 1.tab新增
 * 2.tab刷新
 * 3.tab关闭
 */

TabUtils = {

    /**
     * 初始化
     */
    init: function () {
        var _context = TabUtils.getContext();
        _context.$(".J_menuTabs").on('click', '.J_menuTab i', TabUtils.closeTab);//绑定tab页面关闭事件
        _context.$(".J_menuTabs").on('click', '.J_menuTab', TabUtils.activeTab);//绑定tab页面激活事件
        _context.$(".J_menuTabs").on('dblclick', '.J_menuTab', TabUtils.closeTab);//绑定双击刷新tab页面事件
        _context.$('.J_tabCloseOther').on('click', TabUtils.closeOtherTabs);//绑定关闭其他tab页面事件
        _context.$('.J_tabShowActive').on('click', TabUtils.showActiveTab);//绑定显示激活tab页面事件
        _context.$('.J_tabLeft').on('click', TabUtils.scrollTabLeft);// 左移按扭
        _context.$('.J_tabRight').on('click', TabUtils.scrollTabRight);// 右移按扭

        // 关闭全部
        _context.$('.J_tabCloseAll').on('click', function () {
            _context.$('.page-tabs-content').children("[data-id]").not(":first").each(function () {
                $('.J_iframe[data-id="' + $(this).data('id') + '"]').remove();
                $(this).remove();
            });
            _context.$('.page-tabs-content').children("[data-id]:first").each(function () {
                $('.J_iframe[data-id="' + $(this).data('id') + '"]').show();
                $(this).addClass("active");
            });
            _context.$('.page-tabs-content').css("margin-left", "0");
        });
    },

    /**
     * 获得项目根路径
     *
     * 使用方法：Common.basePath();
     */
    basePath: function () {
        var curWwwPath = window.document.location.href;
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        var localhostPaht = curWwwPath.substring(0, pos);
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        return (localhostPaht + projectName);
    },

    /**
     * 获得上下文
     * @returns {window}
     */
    getContext: function () {
        var menuTabs = $(".J_menuTabs");
        if (!menuTabs || menuTabs.length == 0) {
            var win = window;
            while ((menuTabs = win.$(".J_menuTabs")).length == 0 && win != top) {
                win = win.parent;
                break;
            }
            // 未找到时返回主页面的TabSet，找到时直接返回找到的TabSet
            if (win == top) {
                win = top;
            }
            return win;
        } else {
            return window;
        }
    },

    /**
     * 打开tab页面
     * options : { href :"地址",tabName : "标签名称"，urlType:'1'，parentTabId : ''}
     * @param options
     */
    addTab: function (options) {
        var _context = TabUtils.getContext();
        var dataUrl, menuName, urlType, parentId, flag = true;
        urlType=options.urlType;
        urlType = urlType && urlType == "2" ? "2" : "1";
        parentTabId = options.parentTabId ? options.parentTabId : TabUtils.getActiveTabId();
        if (options.tabName) {
            dataUrl = options.href;
            menuName = options.tabName;
        } else {
            dataUrl = $(this).data('href');
            menuName = $.trim($(this).text());
            $(".navar-float").hide();
        }
        if (dataUrl == undefined || $.trim(dataUrl).length == 0 || dataUrl == '#') {
            if (!options.tabName) {
                options.stopPropagation();
            }
        } else {
            if (urlType == "1") {
                dataUrl = TabUtils.basePath() + dataUrl;
                //如果是监控大屏URL直接新开一个窗口,临时方案
              if( dataUrl.indexOf("mainmonitor") != -1){
                // window.location.href=dataUrl;
                 window.open(dataUrl);
                 return;
              }
            }
            // 选项卡菜单已存在
            _context.$('.J_menuTab').each(function () {
                if ($(this).data('id') == dataUrl) {
                    if (!$(this).hasClass('active')) {
                        $(this).addClass('active').siblings('.J_menuTab').removeClass('active');
                        TabUtils.scrollToTab(this);
                        // 显示tab对应的内容区
                        _context.$('.J_mainContent .J_iframe').each(function () {
                            if ($(this).data('id') == dataUrl) {
                                $(this).show().siblings('.J_iframe').hide();
                                return false;
                            }
                        });
                    }
                    flag = false;
                }
            });

            // 选项卡菜单不存在
            if (flag) {
                var str = '<a href="javascript:;" class="active J_menuTab" data-parent-id="' + parentTabId + '" data-id="' + dataUrl + '">' + menuName + ' <i class="fa fa-times-circle"></i></a>';
                _context.$('.J_menuTab').removeClass('active');

                // 添加选项卡对应的iframe
                var str1 = '<iframe class="J_iframe" id="iframe' + dataUrl + '" width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataUrl + '" seamless></iframe>';
                _context.$('.J_mainContent').find('iframe.J_iframe').hide().parents('.J_mainContent').append(str1);

                /* //显示loading提示
                 var loading = layer.load();

                 $('.J_mainContent iframe:visible').load(function () {
                 //iframe加载完成后隐藏loading提示
                 layer.close(loading);
                 });*/
                // 添加选项卡
                _context.$('.J_menuTabs .page-tabs-content').append(str);
                TabUtils.scrollToTab(_context.$('.J_menuTab.active'));
            }
        }
    },

    /**
     * 关闭tab页面
     */
    closeTab: function (tab) {
        var _context = TabUtils.getContext();
        if (tab.target || tab.srcElement) {
            tab = this;
            if($(tab).hasClass('J_menuTab')){
            	tab = $(tab);
            }else{
            	tab = $(tab).parents(".J_menuTab");
            }
        }
        var closeTabId = tab.data('id');
        var currentWidth = tab.width();
        // 当前元素处于活动状态
        if (tab.hasClass('active')) {
        	//fangwq
        	/**使parent元素处于活动状态，如果parnet不存在，则使"附近"的一个元素处于活动状态*/
        	var activeId = tab.data('parent-id');
        	var parentTab = TabUtils.getTabById(activeId);
        	if(parentTab){
        		parentTab.addClass('active');
        	}else{
        		// 当前元素后面有同辈元素，
                if (tab.next('.J_menuTab').size()) {
                	activeId = tab.next('.J_menuTab:eq(0)').data('id');
                	tab.next('.J_menuTab:eq(0)').addClass('active');
                }
                // 当前元素后面没有同辈元素，使当前元素的上一个元素处于活动状态
                if (tab.prev('.J_menuTab').size()) {
                	activeId = tab.prev('.J_menuTab:last').data('id');
                    tab.prev('.J_menuTab:last').addClass('active');
                }
        	}
        	 _context.$('.J_mainContent .J_iframe').each(function () {
                 if ($(this).data('id') == activeId) {
                     $(this).show().siblings('.J_iframe').hide();
                     return false;
                 }
             });

             var marginLeftVal = parseInt(_context.$('.page-tabs-content').css('margin-left'));
             if (marginLeftVal < 0) {
                 _context.$('.page-tabs-content').animate({
                     marginLeft: (marginLeftVal + currentWidth) + 'px'
                 }, "fast");
             }

             //  移除当前选项卡
             tab.remove();

             // 移除tab对应的内容区
             _context.$('.J_mainContent .J_iframe').each(function () {
                 if ($(this).data('id') == closeTabId) {
                     $(this).remove();
                     return false;
                 }
             });
        }
        // 当前元素不处于活动状态
        else {
            //  移除当前选项卡
            tab.remove();
            // 移除相应tab对应的内容区
            _context.$('.J_mainContent .J_iframe').each(function () {
                if ($(this).data('id') == closeTabId) {
                    $(this).remove();
                    return false;
                }
            });
            TabUtils.scrollToTab($('.J_menuTab.active'));
        }
        return false;
    }, 
    closeTabAndActiveParentTab: function (id,isRefresh,preHandle) {
        var _context = TabUtils.getContext();
        var _id = undefined;
        if (id.target || id.srcElement) {
            _id = $(this).data('id');
        } else {
            _id = id;
        }
        var activeTab = _context.$('.J_menuTab[data-id="' + _id + '"]');
        if (preHandle) {
            if (preHandle.call(this, activeTab) == false) {
                return false;
            }
        }
        var _context = TabUtils.getContext();
        // 移除当前选项卡
        activeTab.remove();

        var parentTabId = activeTab.data("parent-id");
        var parentTab = TabUtils.getTabById(parentTabId);//获得父页面标签
        if(!parentTab){
        	parentTab = _context.$(".page-tabs-content").children("[data-id]").last();
        }
        TabUtils.activeTab(parentTab, isRefresh);
        // 移除tab对应的内容区
        _context.$('.J_mainContent .J_iframe[data-id="' + activeTab.data('id') + '"]').remove();
    },

    /**
     * 滚动到指定选项卡
     * @param element
     */
    scrollToTab: function (element) {
        var _context = TabUtils.getContext();
        var marginLeftVal = TabUtils.calSumWidth(_context.$(element).prevAll()), marginRightVal = TabUtils.calSumWidth(_context.$(element).nextAll());
        // 可视区域非tab宽度
        var tabOuterWidth = TabUtils.calSumWidth(_context.$(".content-tabs").children().not(".J_menuTabs"));
        //可视区域tab宽度
        var visibleWidth = _context.$(".content-tabs").outerWidth(true) - tabOuterWidth;
        //实际滚动宽度
        var scrollVal = 0;
        if (_context.$(".page-tabs-content").outerWidth() < visibleWidth) {
            scrollVal = 0;
        } else if (marginRightVal <= (visibleWidth - _context.$(element).outerWidth(true) - _context.$(element).next().outerWidth(true))) {
            if ((visibleWidth - _context.$(element).next().outerWidth(true)) > marginRightVal) {
                scrollVal = marginLeftVal;
                var tabElement = element;
                while ((scrollVal - _context.$(tabElement).outerWidth()) > (_context.$(".page-tabs-content").outerWidth() - visibleWidth)) {
                    scrollVal -= _context.$(tabElement).prev().outerWidth();
                    tabElement = _context.$(tabElement).prev();
                }
            }
        } else if (marginLeftVal > (visibleWidth - _context.$(element).outerWidth(true) - _context.$(element).prev().outerWidth(true))) {
            scrollVal = marginLeftVal - _context.$(element).prev().outerWidth(true);
        }
        _context.$('.page-tabs-content').animate({
            marginLeft: 0 - scrollVal + 'px'
        }, "fast");
    },

    /**
     * 计算元素集合的总宽度
     * @param elements
     * @returns {number}
     */
    calSumWidth: function (elements) {
        var width = 0;
        var _context = TabUtils.getContext();
        _context.$(elements).each(function () {
            width += $(this).outerWidth(true);
        });
        return width;
    },

    /**
     * 查看左侧隐藏的选项卡
     */
    scrollTabLeft: function (_menuTabsClass) {
        var _context = TabUtils.getContext(_menuTabsClass);
        var marginLeftVal = Math.abs(parseInt(_context.$(".page-tabs-content").css("margin-left")));
        // 可视区域非tab宽度
        var tabOuterWidth = TabUtils.calSumWidth(_context.$(".content-tabs").children().not(".J_menuTabs"));
        //可视区域tab宽度
        var visibleWidth = _context.$(".content-tabs").outerWidth(true) - tabOuterWidth;
        //实际滚动宽度
        var scrollVal = 0;
        if (_context.$(".page-tabs-content").width() < visibleWidth) {
            return false;
        } else {
            var tabElement = _context.$(".J_menuTab:first");
            var offsetVal = 0;
            while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {//找到离当前tab最近的元素
                offsetVal += $(tabElement).outerWidth(true);
                tabElement = $(tabElement).next();
            }
            offsetVal = 0;
            if (TabUtils.calSumWidth($(tabElement).prevAll()) > visibleWidth) {
                while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).prev();
                }
                scrollVal = TabUtils.calSumWidth($(tabElement).prevAll());
            }
        }
        _context.$('.page-tabs-content').animate({
            marginLeft: 0 - scrollVal + 'px'
        }, "fast");
    },
    /**
     * 关闭其他选项卡
     */
    closeOtherTabs: function (notexpress) {
    	if(!notexpress){
    		notexpress='.active';
    	}
        var _context = TabUtils.getContext();
        _context.$(".page-tabs-content").children("[data-id]").not(notexpress).each(function () {
            _context.$('.J_iframe[data-id="' + $(this).data('id') + '"]').remove();
            $(this).remove();
        });
        var activeTab = _context.$(".page-tabs-content").children("[data-id]").last();
        TabUtils.activeTab(activeTab);
        _context.$('.page-tabs-content').css("margin-left", "0");
    },
    /**
     * 关闭所有选项卡
     */
    closeAllTabs: function (notexpress) {
    	var _context = TabUtils.getContext();
    	_context.$(".page-tabs-content").children("[data-id]").not(notexpress).each(function () {
    		_context.$('.J_iframe[data-id="' + $(this).data('id') + '"]').remove();
    		$(this).remove();
    	});
    	var activeTab = _context.$(".page-tabs-content").children("[data-id]").last();
        TabUtils.activeTab(activeTab);
    	_context.$('.page-tabs-content').css("margin-left", "0");
    },
    /**
     * 关闭右侧所有选项卡
     */
    closeRightTabs: function (id,notexpress) {
    	var _context = TabUtils.getContext();
    	_context.$(".page-tabs-content").find("[data-id="+id+"]").nextAll().not(notexpress).each(function () {
    		_context.$('.J_iframe[data-id="' + $(this).data('id') + '"]').remove();
    		$(this).remove();
    	});
    	_context.$('.page-tabs-content').css("margin-left", "0");
    },

    /**
     * 获得活动标签页
     */
    getActiveTab: function () {
        var _context = TabUtils.getContext();
        var tab = undefined;
        _context.$(".J_menuTab").each(function () {
            if ($(this).hasClass('active')) {
                tab = $(this);
                return;
            }
        });
        return tab;
    },

    getActiveTabId: function () {
        var tab = TabUtils.getActiveTab();
        if (tab) {
            return tab.data("id");
        } else {
            return "";
        }
    },

    getActiveTabParentId: function () {
        var tab = TabUtils.getActiveTab();
        if (tab) {
            return tab.data("parent-id");
        } else {
            return "";
        }
    },

    /**
     * 通过TabID获得标签页
     */
    getTabById: function (id) {
        var _context = TabUtils.getContext();
        var tab = undefined;
        _context.$(".J_menuTab").each(function () {
            if ($(this).data("id") == id) {
                tab = $(this);
                return;
            }
        });
        return tab;
    },

    /**
     * 通过Tab编号获得标签Iframe对象
     * @param tab_id
     * @returns {*}
     */
    getTabIframeByTabId: function (tab_id) {
        var _context = TabUtils.getContext();
        return _context.$('.J_mainContent .J_iframe[data-id="' + tab_id + '"]');
    },

    /**
     * 关闭当前激活标签页，并激活父标签页
     * @param isRefresh 是否刷新
     */
    closeActiveTabAndActiveParentTab: function (isRefresh, preHandle) {
        var activeTab = TabUtils.getActiveTab();//获得当前激活标签页
        var activeId = activeTab.data("id");
        if (preHandle) {
            if (preHandle.call(this, activeTab) == false) {
                return false;
            }
        }
        var _context = TabUtils.getContext();
        // 移除当前选项卡
        activeTab.remove();

        var parentTabId = activeTab.data("parent-id");
        var parentTab = TabUtils.getTabById(parentTabId);//获得父页面标签
        TabUtils.activeTab(parentTab, isRefresh);
        // 移除tab对应的内容区
        _context.$('.J_mainContent .J_iframe[data-id="' + activeId + '"]').remove();
    },

    /**
     * 点击选项卡菜单
     */
    activeTab: function (tab, isRefresh) {
        var _context = TabUtils.getContext();
        if (tab.target || tab.srcElement) {
            tab = this;
        }
        if (!$(tab).hasClass("active")) {
            var currentId = $(tab).data("id");
            // 显示tab对应的内容区
            _context.$(".J_mainContent .J_iframe").each(function () {
                if ($(this).data("id") == currentId) {
                    $(this).show().siblings(".J_iframe").hide();
                    return false;
                }
            });
            $(tab).addClass("active").siblings(".J_menuTab").removeClass("active");
            if (isRefresh) {
                var target = _context.$('.J_iframe[data-id="' + currentId + '"]');
                var url = target.attr('src');
                target.attr('src', url)
            }
           // TabUtils.scrollToTab(tab);
        }
    },
    /**
     * 刷新tab页面
     */
    refreshTab: function (id) {
        var _context = TabUtils.getContext();
        var _id = undefined;
        if (id.target || id.srcElement) {
            _id = $(this).data('id');
        } else {
            _id = id;
        }
        var target = _context.$('.J_iframe[data-id="' + _id + '"]');
        var url = target.attr('src');
        //显示loading提示
        var loading = layer.load();
        target.attr('src', url).load(function () {
            //关闭loading提示
            layer.close(loading);
        });
    },

    /**
     * 刷新替换tab页面
     */
    refreshTabAndReplaceTab: function (id, src) {//id:当前Tabid,src:需要替换的Tab路径
        var _context = TabUtils.getContext();
        var _id = undefined;
        if (id.target || id.srcElement) {
            _id = $(this).data('id');
        } else {
            _id = id;
        }
        var target = _context.$('.J_iframe[data-id="' + _id + '"]');
        var url = target.attr('src');
        //显示loading提示
        var loading = layer.load();
        target.attr('src', src).load(function () {
            //关闭loading提示
            layer.close(loading);
        });
    },


    /**
     * 查看右侧隐藏的选项卡
     * @returns {boolean}
     */
    scrollTabRight: function (_menuTabsClass) {
        var _context = TabUtils.getContext(_menuTabsClass);
        var marginLeftVal = Math.abs(parseInt(_context.$('.page-tabs-content').css('margin-left')));
        // 可视区域非tab宽度
        var tabOuterWidth = TabUtils.calSumWidth(_context.$(".content-tabs").children().not(".J_menuTabs"));
        //可视区域tab宽度
        var visibleWidth = _context.$(".content-tabs").outerWidth(true) - tabOuterWidth;
        //实际滚动宽度
        var scrollVal = 0;
        if (_context.$(".page-tabs-content").width() < visibleWidth) {
            return false;
        } else {
            var tabElement = _context.$(".J_menuTab:first");
            var offsetVal = 0;
            while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {//找到离当前tab最近的元素
                offsetVal += $(tabElement).outerWidth(true);
                tabElement = $(tabElement).next();
            }
            offsetVal = 0;
            while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
                offsetVal += $(tabElement).outerWidth(true);
                tabElement = $(tabElement).next();
            }
            scrollVal = TabUtils.calSumWidth($(tabElement).prevAll());
            if (scrollVal > 0) {
                _context.$('.page-tabs-content').animate({
                    marginLeft: 0 - scrollVal + 'px'
                }, "fast");
            }
        }
    },
    /**
     * 滚动到已激活的选项卡
     */
    showActiveTab: function () {
        var _context = TabUtils.getContext();
        TabUtils.scrollToTab(_context.$('.J_menuTab.active'));
    }
}






