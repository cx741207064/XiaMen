function showTableData(JsonData) {
    var obj = JsonData
    $.each(obj,function (index, el) {
        var arr = Object.keys(el)
        arr.forEach(function (key) {
            var input = $("input#" + key)
            if (input) {
                input.val(el[key])
            }
        })

    })
}

function showTableActionDisplay() {
    var action = TABLE_ACTION
    if (action == "display") {
        $("input.money,input.integer").removeClass("money").addClass("input_money_readonly").prop("readonly", true).css("background-color", "rgb(232, 236, 232)").css("border-style", "none")
        $("select[name=XZDMJMC]").prop("disabled", "disabled")
        $("a[name=save]").css("display", "none")
    }

}

function showDate() {

    var spanTBRQ = $("span#TBRQ")
    spanTBRQ.html("20180905")

    var obj = result
    if (!obj[0]["SSSQ_Q"]) {
        var span = $("span#SSRQQ")
        span.html("20180801")

        var span = $("span#SSRQZ")
        span.html("20180831")

        return false;
    }

    $.each(obj, function (index, el) {

        var arr = Object.keys(el)
        arr.forEach(function (key) {
            if (key == "SSSQ_Q") {
                var span = $("span#SSRQQ")
                span.html(el[key].split(',')[0])
            }
            if (key == "SSSQ_Z") {
                var span = $("span#SSRQZ")
                span.html(el[key].split(',')[0])
            }

        })

    })

}

$(function () {
})