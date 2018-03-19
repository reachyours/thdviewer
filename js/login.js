layui.config({
	base: 'js/'
}).use(['form', 'jquery'], function() {
	var form = layui.form,
		$ = layui.jquery;
		
	form.on('submit(loginBtn)',function(){
        $.ajax({
            url: 'login',
            type: 'POST',
            dataType: 'json',
            data: { //发送的数据
                username: $('input[name=username]').val(),
                password: $('input[name=password]').val()
            },
            success: function (res) {
                if (res.code === "1") {
                    layer.msg(res.data.username+res.msg);
                    setTimeout(function () {
                        window.location.href = "user/index"
                    }, 1000)
                } else {
                    layer.msg(res.msg);
                }
            },
            error: function () {
				layer.msg('重复出现此问题请及时联系管理员！',{
					time:1000
				})
            }
        });
		return false;
	});
});