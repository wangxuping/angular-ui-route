define(['app','libs/ui-bootstrap-tpls-1.0.0','libs/jquery.bootstrap.min'],function(app){
    app.register.service('application', function(){
         //防止重复点击
        var isClickEditBtn = false;
        this.openDialog = function (opt) {
           if (isClickEditBtn) return;
           isClickEditBtn = true;
            var url = opt.url;
            var title = opt.title;
            var option = opt.option;
            var divId = opt.divId;
            var btnText = opt.btnText || "提交";
            var isclearCache = opt.isclearCache || true;
            var backdrop = opt.backdrop || "unstatic";
            var e = opt.saveclick;
            console.log(title);
            console.log(url);
            var btns = [
            {
                text: "取消",
                'class': "btn-default",
                click: function () {
                    $(this).dialog("destroy");
                }
            }];
            console.log(btns);
            var cancelBtn = {
                text: btnText,
                'class': "btn-success",
                click: function () {
                    var btnObj = event.target || event.srcElement;
                    $(btnObj).addClass("disabled");
                    var rtn = e(event, this);
                    if (rtn != false) {
                        $(this).dialog("destroy");
                    }
                    $(btnObj).removeClass("disabled");
                    event.stopPropagation();
                    return false;
                }
            };
            if (typeof (e) == "function") {
                btns.push(cancelBtn);
            }
            console.log(btns);
            console.log($(this).dialog("destroy2"));

            $.get(url, function (html) {
                var $panle = $(html);
                console.log($panle);
                // $panle.dialog({
                //     title: title,
                //     onClose: function () {
                //         $(this).dialog("destroy");
                //     },
                //     buttons: btns.reverse(),
                //     backdrop: backdrop
                // });
                // if (isclearCache) {
                //     $('div.modal').on('hidden.bs.modal', function () {
                //         $(this).remove();
                //         //if ($('div.modal').length == 0) {
                //             $('body').removeClass("modal-open");
                //         //}
                //     });
                // }

                isClickEditBtn = false;
            }).fail(function () {
                isClickEditBtn = false;
            });
        }
    })
})



