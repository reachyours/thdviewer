console.log(window.screen.availHeight);
function getheight(){
	var height=window.screen.availHeight-10;
	$('#myframe').attr('height',height);
}
getheight();
/*----360图片点击----*/
$('.imgv img').click(function(){
	$('#mod_select').css({
		'display':'none'
	})
	$('.mod_360').css({
		'display':'none'
	})
	$('.myframe').css({
		'display':'block'
	})
	$('.back').css({
		'display':'block'
	})
	$('#allimg').css({
		'display':'none'
	})
	$('.myframe').attr('src',$(this).attr('num'));
	$('#mod_select').css({
		'display':'none'
	})
	$('.toplist').css({
		'display':'none'
	})
	$('.header_name').css({
		'display':'none'
	})
	$('.footer').css({
		'display':'none'
	})
})
/*---360点击返回---*/
$('.back').click(function () {
	// console.log(123);
	window.location.href='pagehome.html';
	// $('#allimg').css({
	// 	'display':'block'
	// })
	// $('#d3_img').css({
	// 	'display':'none'
	// })
	// $('.myframe').css({
	// 	'display':'none'
	// })
	// $('.back').css({
	// 	'display':'none'
	// })
	// $('#mod_select').css({
	// 	'display':'block'
	// })
})
/*---3d点击返回---*/
$('.back1').click(function(){
	// console.log(123);
	// window.location.href='new1.html';
	$('#allimg').css({
		'display':'none'
	})
	$('#d3_img').css({
		'display':'block'
	})
	$('.myframe').css({
		'display':'none'
	})
	$('.back1').css({
		'display':'none'
	})
	$('#mod_select').css({
		'display':'block'
	})
	$('.toplist').css({
		'display':'block'
	})
		$('.header_name').css({
		'display':'block'
	})
		$('.introduce').css({
			'display':'none'
		})
	$('.footer').css({
		'display':'block'
	})
})
/*切换3d和360*/
$('#mod_360').click(function () {
	$('#allimg').css({
		'display':'block'
	})
	$('#d3_img').css({
		'display':'none'
	})
	$('.mod_btn1').css({
		'background-color': '#5bc0de',
    	'border-color': '#46b8da'
	})
	$('.mod_btn2').css({
		'background-color': '#cccccc',
    	'border-color': '#cccccc'
	})
	
})
$("#mod_3d").click(function(){
	$('#allimg').css({
		'display':'none'
	})
	$('#d3_img').css({
		'display':'block'
	})
	$('.mod_btn2').css({
		'background-color': '#5bc0de',
    	'border-color': '#46b8da'
	})
	$('.mod_btn1').css({
		'background-color': '#cccccc',
    	'border-color': '#cccccc'
	})
})
/*3d图片点击*/
$('.imgv2 img').click(function(){
	$('#mod_select').css({
		'display':'none'
	})
	$('.mod_360').css({
		'display':'none'
	})
	$('.myframe').css({
		'display':'block'
	})
	$('.back1').css({
		'display':'block'
	})
	$('#allimg').css({
		'display':'none'
	})
	$('#d3_img').css({
		'display':'none'
	})
	$('.myframe').attr('src',$(this).attr('num'));
	$('#mod_select').css({
		'display':'none'
	})
	$('.toplist').css({
		'display':'none'
	})
	$('.header_name').css({
		'display':'none'
	})
	$('.introduce').css({
		'display':'block'
	})
	$('.footer').css({
		'display':'none'
	})
})

$('.introduce').click(function () {
	$('#mymodal').modal('show');
})
