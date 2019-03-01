function showQueryData() {
    var arr_result = result
    var n=0
    if (result !== undefined && result !== null) {
        $("#ShowSearchResult").children("tbody").children("tr:gt(1)").remove()
        for (var i = 0; i < arr_result.length; i++) {
            var obj = arr_result[i]

            if (obj.TABLE_NAME) {
                //增值税
                var tr = $("<tr></tr>")
                $("#ShowSearchResult").children("tbody").append(tr)
                var td = new Array(7)
                td[0] = n+ 1

                td[1] = arr_result[i]["SSSQ_Q"] + " 至 " + arr_result[i]["SSSQ_Z"]

                td[2] =zsxmConvert(arr_result[i]["ZS_ZSXM_DM"])

                td[3] = "商业(17%、16%)"

                td[4] = arr_result[i]["YBBYS_1"]

                td[5] = arr_result[i]["YBBYS_24"]

                td[6] = arr_result[i]["YBBYS_34"]

                tr.append("<td align='center'>" + td[0] + "</td>")
                tr.append("<td align='center'>" + td[1] + "</td>")
                tr.append("<td align='center'>" + td[2] + "</td>")
                tr.append("<td align='center'>" + td[3] + "</td>")
                tr.append("<td align='center'>" + td[4] + "</td>")
                tr.append("<td align='center'>" + td[5] + "</td>")
                tr.append("<td align='center'>" + td[6] + "</td>")

                n++
            }
            else if (obj.xms) {
                //附加税
                for (var j = 0; j < obj.tmp_count; j++) {
                    var tr = $("<tr></tr>")
                    $("#ShowSearchResult").children("tbody").append(tr)
                    var td = new Array(7)
                    td[0] =n+ 1

                    td[1] = arr_result[i]["sbbVo['skssqq']"] + " 至 " + arr_result[i]["sbbVo['skssqz']"]

                    if (j == 0) {
                        td[2] = "城市维护建设税"
                        td[3] = "市区（增值税附征）"
                    }
                    if (j == 1) {
                        td[2] = "教育费附加"
                        td[3] = "增值税教育费附加"
                    }
                    if (j == 2) {
                        td[2] = "地方教育附加"
                        td[3] = "增值税地方教育附加"
                    }

                    td[4] = arr_result[i]["sbbList[" + j + "]['hj']"]

                    td[5] = arr_result[i]["sbbList[" + j + "]['bqynse']"]

                    td[6] = arr_result[i]["sbbList[" + j + "]['bqybtse']"]

                    tr.append("<td align='center'>" + td[0] + "</td>")
                    tr.append("<td align='center'>" + td[1] + "</td>")
                    tr.append("<td align='center'>" + td[2] + "</td>")
                    tr.append("<td align='center'>" + td[3] + "</td>")
                    tr.append("<td align='center'>" + td[4] + "</td>")
                    tr.append("<td align='center'>" + td[5] + "</td>")
                    tr.append("<td align='center'>" + td[6] + "</td>")

                    n++
                }

            }
            else {
                //印花税
                for (var j = 0; j < obj.tmp_count; j++) {
                    var tr = $("<tr></tr>")
                    $("#ShowSearchResult").children("tbody").append(tr)
                    var td = new Array(7)
                    td[0] = n + 1

                    td[1] = arr_result[i]["sbbVo['skssqq']"] + " 至 " + arr_result[i]["sbbVo['skssqz']"]

                    td[2] = zsxmConvert(arr_result[i]["sbbVo['zsxmdm']"])

                    td[3] = zspmConvert(arr_result[i]["sbbList[" + j + "]['zspmdm']"])

                    td[4] = arr_result[i]["sbbList[" + j + "]['jsje']"]

                    td[5] = arr_result[i]["sbbList[" + j + "]['bqynse']"]

                    td[6] = arr_result[i]["sbbList[" + j + "]['SJYZE']"]

                    tr.append("<td align='center'>" + td[0] + "</td>")
                    tr.append("<td align='center'>" + td[1] + "</td>")
                    tr.append("<td align='center'>" + td[2] + "</td>")
                    tr.append("<td align='center'>" + td[3] + "</td>")
                    tr.append("<td align='center'>" + td[4] + "</td>")
                    tr.append("<td align='center'>" + td[5] + "</td>")
                    tr.append("<td align='center'>" + td[6] + "</td>")

                    n++
                }

            }

        }
    }
}
function zsxmConvert(dm) {
    var re
    if (dm == "10111") {
        re = "印花税"
    }
    if (dm == "10109") {
        re = "附加税"
    }
    if (dm == "10101") {
        re = "增值税"
    }
    return re
}

function zspmConvert(dm) {
    var re

    $("#YhsZspm option").each(function (index, el) {
        if (el.value == dm) {
            re=el.text
        }
    })

    return re
}


$(function () {
    showQueryData()
})
