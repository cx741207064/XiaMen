$(function () {
    $.ajax({
        type: "get",
        url: "/initinfo.ashx",
        contentType: "application/x-www-form-urlencoded",
        dataType: "json",
        data: escape(JSON.stringify("")),
        success: function (ret) {
            $('#NSRMC').html(ret.NSRMC);
            $('a#company').html(ret.NSRMC);
            $('a#company').prop("title", ret.NSRMC);

            $('#NSRSBH').html(ret.NSRSBH);
            $('#LXDH').html(ret.LXDH);
            $('#DJZCLX').html(ret.DJZCLX);
            $('#ZGDSSWJFJMC').html(ret.ZGDSSWJFJMC);
            $('#SCJYDZ').html(ret.SCJYDZ);
            $('#GBHY').html(ret.GBHY);
            $('#JYFW').html(ret.JYFW);
            $('#ZCDZ').html(ret.ZCDZ);

            $('#FDDB').html(ret.FDDB);
            $('#FDID').html(ret.FDID);
            $('#FDSJ').html(ret.FDSJ);

            $('#CWFZR').html(ret.CWFZR);
            $('#CWFZID').html(ret.CWFZID);
            $('#CWFZSJ').html(ret.CWFZSJ);

            $('#BSR').html(ret.BSR);
            $('#BSID').html(ret.BSID);
            $('#BSSJ').html(ret.BSSJ);
        },
        error: function (ret) {

        }
    });
});