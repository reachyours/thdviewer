/**
 * 全局js需要时调用
 */

/**
 * 设置未来(全局)的AJAX请求默认选项
 * 主要设置了AJAX请求遇到Session过期的情况
 */
layui.use('layer',function(){
	var layer = layui.layer;
    $.ajaxSetup({
        type : 'POST',
        complete : function(xhr, status) {
            var sessionStatus = xhr.getResponseHeader('sessionstatus');
            if (sessionStatus === 'timeout') {
                var top = getTopWinow();
                layer.confirm('您已长时间没有进行操作，请重新登录.',{
                    title:'重新登录'
                },function(data){
                    top.location.href = 'login';
                })
            }
        }
    });
});

// /**
//  * 在页面中任何嵌套层次的窗口中获取顶层窗口
//  * @return 当前页面的顶层窗口对象
//  */
function getTopWinow() {
	var p = window;
	while (p !== p.parent) {
		p = p.parent;
	}
	return p;
}