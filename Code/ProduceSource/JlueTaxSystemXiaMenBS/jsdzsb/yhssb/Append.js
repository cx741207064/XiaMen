function addOneRow(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13) {

    var temp_data = document.getElementById("temp_data").getAttribute("value")
    $("#frm_dfsf").children("tbody").eq(1).html(temp_data)

    var tmp_count = document.getElementById("tmp_count").getAttribute("value")
    tmp_count = parseInt(tmp_count) + 1
    document.getElementById("tmp_count").setAttribute("value", tmp_count)

    $("#frm_dfsf").children("tbody").eq(1).append("<tr></tr>")
    var tr_count = $("#frm_dfsf").children("tbody").eq(1).children("tr").length
    var tr = $("#frm_dfsf").children("tbody").eq(1).children("tr").eq(tr_count - 1)

    var x = document.getElementById("sbbVo['zspmdm']");
    for (i = 0; i < x.length; i++) {
        if (x.options[i].value == p2) {
            p2 = "印花税- " + x.options[i].text + "&nbsp;<input type=hidden name=sbbList[" + (tr_count - 1) + "]['zspmdm'] value=" + p2 + " />"
        }
    }

    var y = document.getElementById("ssjmxzdm");
    for (i = 0; i < y.length; i++) {
        if (y.options[i].value == p12 && p12 != "") {
            p12 = y.options[i].text + "&nbsp;"
        }
    }

    $(tr).append("<td align=\"center\" nowrap><a href=\"#\" onclick=\"modify(" + (tr_count - 1) + ",this)\">修改</a>&nbsp;&nbsp;<a href=\"#\" onclick=\"delOneRow(this)\">删除</a>&nbsp;&nbsp;</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p1 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p2 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p3 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p4 + "</td>")
    $(tr).append("<td align=\"center\" nowrap style=\"color: Maroon\">" + p5 + "<input type=\"hidden\" name=\"sbbList[" + (tr_count - 1) + "]['SJYZE']\" value=\"" + p5 + "\" /></td>")
    $(tr).append("<td align=\"center\" nowrap>" + p6 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p7 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p8 + "<input type=hidden name=sbbList[" + (tr_count - 1) + "]['jsje'] value=" + p8 + " /></td>")
    $(tr).append("<td align=\"center\" nowrap>" + p9 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p10 + "<input type=hidden name=sbbList[" + (tr_count - 1) + "]['bqynse'] value=" + p10 + " /></td>")
    $(tr).append("<td align=\"center\" nowrap>" + p11 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p12 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p13 + "</td>")
}

function modifyOneRow(inde,p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13) {

    inde = index
    var tr = $("#frm_dfsf").children("tbody").eq(1).children("tr").eq(inde).html("")

    var x = document.getElementById("sbbVo['zspmdm']");
    for (i = 0; i < x.length; i++) {
        if (x.options[i].value == p2) {
            p2 = "印花税- " + x.options[i].text + "&nbsp;<input type=hidden name=sbbList[" + (inde) + "]['zspmdm'] value=" + p2 + " />"
        }
    }

    var y = document.getElementById("ssjmxzdm");
    for (i = 0; i < y.length; i++) {
        if (y.options[i].value == p12 && p12 != "") {
            p12 = y.options[i].text + "&nbsp;"
        }
    }

    $(tr).append("<td align=\"center\" nowrap><a href=\"#\" onclick=\"modify(" + (inde) + ",this)\">修改</a>&nbsp;&nbsp;<a href=\"#\" onclick=\"delOneRow(this)\">删除</a>&nbsp;&nbsp;</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p1 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p2 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p3 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p4 + "</td>")
    $(tr).append("<td align=\"center\" nowrap style=\"color: Maroon\">" + p5 + "<input type=\"hidden\" name=\"sbbList[" + (inde) + "]['SJYZE']\" value=\"" + p5 + "\" /></td>")
    $(tr).append("<td align=\"center\" nowrap>" + p6 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p7 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p8 + "<input type=hidden name=sbbList[" + (inde) + "]['jsje'] value=" + p8 + " /></td>")
    $(tr).append("<td align=\"center\" nowrap>" + p9 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p10 + "<input type=hidden name=sbbList[" + (inde) + "]['bqynse'] value=" + p10 + " /></td>")
    $(tr).append("<td align=\"center\" nowrap>" + p11 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p12 + "</td>")
    $(tr).append("<td align=\"center\" nowrap>" + p13 + "</td>")

    Cxjsje()

    changeDiv("yhssblb")

}

function modify(i,obj) {

    index=i
    if (!confirm("是否修改 ？")) {
        return false;
    }

    var td = new Array(14)
    var $tds = $(obj).parent("td").parent("tr").children("td")

    td[2] = $tds.eq(2).children("input").val()
    getObj("zspmdm").value = td[2]
    var x = document.getElementById("sbbVo['zspmdm']");
    for (i = 0; i < x.length; i++) {
        if (x.options[i].value == td[2]) {
            getObj("zspmText").innerHTML = "印花税- " + x.options[i].text + "&nbsp;"
        }
    }

    td[5] = $tds.eq(5).text()
    getObj("sbbVo['bqybtse']").value = td[5]

    td[6] = $tds.eq(6).text()
    getObj("sbbVo['hdzshdde']").value = td[6]

    td[7] = $tds.eq(7).text()
    getObj("sbbVo['hdzshdbl']").value = td[7]

    td[8] = $tds.eq(8).text()
    getObj("sbbVo['jsje']").value = td[8]

    td[9] = $tds.eq(9).text()
    getObj("sysl").value = td[9]
    getObj("lblSlText").innerHTML = td[9]

    td[10] = $tds.eq(10).text()
    getObj("sbbVo['bqynse']").value = td[10]

    td[11] = $tds.eq(11).text()
    getObj("sbbVo['jmse']").value = td[11]

    td[13] = $tds.eq(13).text()
    getObj("sbbVo['bqyjse1']").value = td[13]

    changeDiv("yhstxsbb")
}

function changeDiv(DivId) {

    var divs = ["yhssblb", "yhstjsbjl", "yhstxsbb", ];
    var tzlx = DivId;
    for (var i = 0; i < divs.length; i++) {
        if (divs[i] == tzlx) {
            $("#" + divs[i]).show();
        } else {
            $("#" + divs[i]).hide();
        }
    }

}

function delOneRow(obj) {
    if (confirm("是否删除 ？")) {
        $(obj).parent("td").parent("tr").remove()

        var tmp_count = document.getElementById("tmp_count").getAttribute("value")
        tmp_count = parseInt(tmp_count) - 1
        document.getElementById("tmp_count").setAttribute("value", tmp_count)

        Cxjsje()

    }
}

//重新计算金额
function Cxjsje() {
    var tzlx = "yhssblb";
    if (tzlx == "yhssblb") {
        var sjyzeNo = 0;
        var sjyze = 0.00;
        if (getObj("tmp_count")) {
            sjyzeNo = getObj("tmp_count").value;
        }
        for (var i = 0 ; i < sjyzeNo ; i++) {
            sjyze = sjyze + parseFloat(getoff_Qfw(getObj("sbbList[" + i + "]['SJYZE']").value));
        }

        if (sjyze == '0') {
            $("#_skhj").text("0");
        } else {
            $("#_skhj").text(add_Qfw(toFixedNum(sjyze, 2)));
        }
    }
}

function modifyBack() {

    changeDiv("yhssblb")
}

$(function () {

})