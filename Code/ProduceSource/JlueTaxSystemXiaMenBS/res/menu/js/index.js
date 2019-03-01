var tag = '';//已选中的一级列表

var GS;

var GS_sb;

$(function () {
    //closeOpener();
    if (xgmm == 'yes' || kkk == '2')
        $("#iframe1").attr("src", "/views/login/wdsz.jsp");
    else {
        $("#iframe1").attr("src", "/swxxtx/index/indexConter.aspx");
    }
});


function opensy() {
    var xgmm = document.getElementById("xgmm").value;
    var kkk = document.getElementById("kkk").value;
    if (xgmm != 'yes' && kkk != '2') {
        /*$("#iframe1").attr("src","/swxxtx/index/indexConter.do");*/
        window.location.href = "/nsfwHome/index.aspx";
    }

}

function openyy() {
    var xgmm = document.getElementById("xgmm").value;
    var kkk = document.getElementById("kkk").value;
    if (xgmm != 'yes' && kkk != '2') {
        window.open(QUERY_DOMAIN_URL + "/dwfw/wsyy.do", 'Gs');
    }
}

function show1(o) {
    var xgmm = document.getElementById("xgmm").value;
    var kkk = document.getElementById("kkk").value;
    $('#tab1').html('');
    $('#nav4').html('');

    $('#sj').css('display', 'none');//不显示三级列表 小三角

    $("#nav3").css('display', 'none');//隐藏第三级菜单
    $("#tab2").html('');

    /*一级菜单悬浮*/
    var url = o.src;
    url = url.replace('wyj', 'yyj');
    o.src = url;

    /*显示对应的二级菜单*/
    var name = o.id;


    /*测试显示所有的二级菜单*/
    var len = 0;

    if (tag != '' && tag != name)//消除上个按钮的选中状态 ，，不显示三级列表
    {
        var p = document.getElementById(tag).src;
        p = p.replace('yyj', 'wyj');
        document.getElementById(tag).src = p;
    }
    tag = o.id;
    var tt;
    var htm = '';
    htm = '<tr>';
    if (name == 'wdyx') {
        for (var i in list) {
            if (list[i]['parent_id'] == 'wdyx') {
                var tt_bz = list[i]['zt_bz'];
                if (tt_bz == "0") { }
                else {
                    tt = list[i]['qz_url'];
                    var dm = "";
                    if (xgmm != 'yes' && kkk != '2') {
                        dm = ' onclick="show2(this)"';
                    }
                    htm += '<td><img alt=' + list[i]['wydkfs_dm'] + dm + ' name="' + tt + list[i]['menu_item_url'] + '"  id="' + list[i]['menu_item_id'] + '" onmouseover="change1(this)" onmouseleave="change2(this)" class="td_img" src="' + $ctx + '/res/menu/images' + list[i]['icon_addr'] + '"></td>';
                }
            }
        }
        htm += '<td width="800px;"></td>';
        /* htm += '<td><p class="dzcd" onclick="dzcd()">定制菜单>></p></td>';
*/
        htm += '<td width="100px;"></td>';
    }
    //添加我要查询条件过滤
    else if (name == 'wycx') {
        var j = 0;
        for (var i in list) {
            if (name == list[i]['parent_id']
                 && (list[i]['menu_item_id'] == "zhcx")) {
                var tt_bz = list[i]['zt_bz'];
                if (tt_bz == "0") { }
                else {
                    j++;
                    var dm = "";
                    if (xgmm != 'yes' && kkk != '2') {
                        dm = ' onclick="show2(this)"';
                    }
                    tt = list[i]['qz_url'];
                    htm += '<td><img alt=' + list[i]['wydkfs_dm'] + dm + ' name="' + tt + list[i]['menu_item_url'] + '"  id="' + list[i]['menu_item_id'] + '" onmouseover="change1(this)" onmouseleave="change2(this)"   class="td_img" src="' + $ctx + '/res/menu/images' + list[i]['icon_addr'] + '"></td>';
                }
            }
        }
        if (j < 10) {
            for (var i = 0; i < 10 - j; i++)
                htm += '<td width="91px;"></td>';
        }
        if (j != 0) {
            /*    htm += '<td><p class="dzcd" onclick="dzcd()">定制菜单>></p></td>';*/
            htm += '<td width="100px;"></td>'
        }
    }
    else {
        var j = 0;
        if (name == 'wybs')
            name = 'sy';
        for (var i in list) {
            if (name == list[i]['parent_id']) {
                var tt_bz = list[i]['zt_bz'];
                if (tt_bz == "0") { }
                else {
                    j++;
                    var dm = "";
                    if (xgmm != 'yes' && kkk != '2') {
                        dm = ' onclick="show2(this)"';
                    }
                    tt = list[i]['qz_url'];
                    htm += '<td><img alt=' + list[i]['wydkfs_dm'] + dm + ' name="' + tt + list[i]['menu_item_url'] + '"  id="' + list[i]['menu_item_id'] + '" onmouseover="change1(this)" onmouseleave="change2(this)"   class="td_img" src="' + $ctx + '/res/menu/images' + list[i]['icon_addr'] + '"></td>';
                }
            }
        }
        if (j < 10) {
            for (var i = 0; i < 10 - j; i++)
                htm += '<td width="91px;"></td>';
        }
        if (j != 0) {
            /*    htm += '<td><p class="dzcd" onclick="dzcd()">定制菜单>></p></td>';*/
            htm += '<td width="100px;"></td>'
        }

    }
    htm += '</tr>';
    $('#tab1').append(htm);
}


function hidden1(event) {

    $('#nav4').html('');
    $('#sj').css('display', 'none');
    $('#tab1').html('');
    $('#tab2').html('');
    $('#nav3').css('display', 'none');
    if (tag != '')//消除上个按钮的选中状态 ，，不显示三级列表
    {
        var p = document.getElementById(tag).src;
        p = p.replace('yyj', 'wyj');
        document.getElementById(tag).src = p;

    }
    tag = '';
}



var yj = ['sy', 'wybs', 'wycx', 'wyyy', 'wyzy', 'wdhd', 'wdyx', 'wdsz'];

/**
 * @param o
 */
function show2(o) {
    $("#tab2").html('');
    $('#nav4').html('');
    $('#sj').css('display', 'none');//不显示小三角

    var len = 0;
    var name = o.id;
    $("#nav3").css('background-image', 'url(' + $ctx + '/res/menu/images/' + name + '/1.png)');
    $('#nav3').css('background-repeat', 'no-repeat');
    $('#nav3').css('display', '');
    var htm = '';
    var j = 0;

    htm += '<tr>';
    var j = 0;
    var tt;
    for (var i in list) {
        //添加过滤
        if (list[i]['parent_id'] == name
            && (list[i]['menu_item_id'] == "sbns_0" || list[i]['menu_item_id'] == "sbns_4" || list[i]['menu_item_id'] == "sbns_5")) {
            var tt_bz = list[i]['zt_bz'];
            if (tt_bz == "0") { }
            else {
                tt = list[i]['qz_url'];
                var dm = "";
                dm = ' onclick="openW(this)"';
                htm += '<td valign="top" align="center" width="100px;" class="nav3_td"><img alt=' + list[i]['wydkfs_dm'] + ' name=' + tt + list[i]['menu_item_url'] + dm + ' class="nav3_img"  src="' + $ctx + '/res/menu/images' + list[i]['icon_addr'] + '"></td>';
                j++;
                if (j % 10 == 0)
                    htm += '</tr><tr>';
            }
        }
    }
    if (j == 0) {//不存在三级菜单
        openW(o);
    }
    else {
        for (var i = 1; i <= 10 - j % 10; i++) {
            htm += '<td width="100px"></td>';
        }
        htm += '</tr>';
        if (j / 10 > 1) {
            $("#nav3").css('height', 300);
            $("#nav3").css('background-image', 'url(' + $ctx + '/res/menu/images/' + name + '/2.png)');
        }
        else {
            $("#nav3").css('height', 130);
            $("#nav3").css('background-image', 'url(' + $ctx + '/res/menu/images/' + name + '/1.png)');
        }

        var fl = 0;
        var flag1 = tag;
        if (tag == 'wybs')
            flag1 = 'sy';
        for (var i in list) {
            if (list[i]['zt_bz'] == "1" && list[i]['parent_id'] == flag1)
                fl++;
            if (list[i]['menu_item_id'] == name) {
                break;
            }
        }
        if (j != 0) {
            var jl = -40 - (fl - 1) * 92;
            $('#sj').css('right', jl);//小三角偏移位置
            $('#sj').css('display', '');
        }
        $("#tab2").html('');
        $("#tab2").append(htm);

        //选择涉税申请
        if (name == 'sssq') {
            htm = '';
            htm += '<iframe src="/views/menu/sssq.jsp" width="1085px;" height="530px;" frameborder="0"></iframe>';
            $('#nav4').html('');
            $('#nav4').append(htm);
            $("#nav3").css('height', 100);
        }
    }
}

function openW(o) {
    var start_t = "";
    var end_t = "";
    for (var i in list) {
        if (o.name == list[i]['qz_url'] + list[i]['menu_item_url']) {
            start_t = list[i]['start_date'];
            end_t = list[i]['end_date'];
            break;
        }
    }
    var local_t = "";
    var myDate = new Date();
    local_t += myDate.getFullYear();
    local_t += (myDate.getMonth() + 1);
    local_t += myDate.getDate();
    local_t += myDate.getDay();
    local_t += myDate.getHours();
    local_t += myDate.getMinutes();
    local_t += myDate.getSeconds();
    var tt = 0;
    start_t = start_t.replace(/-/g, '').replace(/:/g, '').replace(/ /g, '');
    end_t = end_t.replace(/-/g, '').replace(/:/g, '').replace(/ /g, '');
    if (start_t > local_t && start_t != "")
        tt = 1;
    if (end_t < local_t && end_t != "")
        tt = 1;
    //模拟系统去除时间判定
    if (false)
        alert("当前时间不能使用该功能");
    else {
        if (o.name.indexOf('/nsfwHome/index.do?menuid=dzsb&menu_item_id=dzsb_0103') > -1) {
            $.ajax({
                url: "/nsfwHome/qysds.do",
                type: 'post',
                success: function (data) {
                    var s_url = "";
                    if (data.jg == 'false')
                        alert(data.message);
                    if (data.jg == 'true' && data.type == 'ds') {
                        s_url = data.url;
                        s_url = s_url.replace(ym, "");
                        s_url = s_url.replace(local_ip, "");
                        $("#iframe1").attr("src", s_url);
                    }
                    if (data.jg == 'true' && data.type == 'gs')
                        GS = window.open(data.url, 'Gs');
                }

            });
        }
        else if (o.name.indexOf('/wssl_nsrd') > -1) {
            var kk = o.name + "?id=" + nsrsbh + "&timestamp=" + timestamp;
            GS = window.open(kk, 'Gs');
        }
        else {
            var type = o.alt;
            if (type == '2') {
                if (o.name.indexOf('/adp/xmsatProcessNoLogin?wsbq=wsbs') > -1)
                    GS = window.open(o.name, 'Gs');
                else
                    GS_sb = window.open(o.name, 'Gs_sb');
            }
            if (type == '1') {
                var k = o.name;
                k = k.replace(ym, "");
                k = k.replace(local_ip, "");
                $("#iframe1").attr("src", k);
            }
        }
        hidden1();
    }
}
function change1(o) {
    var url = o.src;
    url = url.replace('images/w', 'images/y');
    o.src = url;
}

function change2(o) {
    var url = o.src;
    url = url.replace('images/y', 'images/w');
    o.src = url;
}

function dzcd() {
    var url = 'dzcd.html'; //转向网页的地址;
    var name = ''; //网页名称，可为空;
    var iWidth = '600'; //弹出窗口的宽度;
    var iHeight = '400'; //弹出窗口的高度;
    var iTop = (window.screen.height - 30 - iHeight) / 2; //获得窗口的垂直位置;
    var iLeft = (window.screen.width - 10 - iWidth) / 2; //获得窗口的水平位置;
    //window.open('dzcd.html', 'new', 'location=no, toolbar=no','height=300,width=400');
    window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');

    return false;
}


function openWdsz() {
    $("#iframe1").attr("src", "/views/login/wdsz.jsp");

}

function closeW() {
    try {
        GS.close();
    }
    catch (e) {
    }
    try {
        GS_sb.close();
    }
    catch (e) {
    }
}

function checkTop() {
    if ($('#iframe1').attr("src").indexOf('indexConter') > -1) {

        $('#top_bar').hide();
        $('#iframe1').css("margin-top", "40px");
    } else {
        $('#top_bar').show();
        $('#iframe1').css("margin-top", "10px");
    }
}