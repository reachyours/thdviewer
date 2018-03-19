layui.use(['layer'], function () {
    var layer = layui.layer;
    $("#logins").click(function () {
        $.ajax({
            url: 'user/login',
            type: 'POST',
            dataType: 'json',
            data: {
                username: $('input[name=username]').val(),
                password: $('input[name=password]').val()
            },
            success: function (res) {

                if (res.code === '1') {
                    layer.msg(res.msg, {time: 1250});
                    setTimeout(function () {
                        window.location.href = res.loginPath;
                    }, 1500);
                } else {
                    layer.msg(res.msg, {time: 1500})
                }
            },
            error: function () {
                layer.msg('出错了', {time: 1500})
            }
        })
    });
});