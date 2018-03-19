$(".idv").click(function () {
	$(this).attr("nid");
	$('.editor_all').css({
		'display':'none'
	})
	$('.edit_con').css({
		'display':'block'
	})
	$(".edit_con").attr('nid',$(this).attr('nid'));
})
$('.exit').click(function () {
	$('.editor_all').css({
		'display':'block'
	})
	$('.edit_con').css({
		'display':'none'
	})
})


$('.page span').click(function () {
	var str=$(this).attr("nid");
	console.log(str);
	if (str=="1") {
		console.log(str);
		$('.div1').css({
			'display':'block'
		})
		$('.div2').css({
			'display':'none'
		})
		$('.div3').css({
			'display':'none'
		})
	}
	if (str=="2") {
		console.log(str);
		$('.div2').css({
			'display':'block'
		})
		$('.div1').css({
			'display':'none'
		})
		$('.div3').css({
			'display':'none'
		})
	}
	if (str=="3") {
		$('.div3').css({
			'display':'block'
		})
		$('.div1').css({
			'display':'none'
		})
		$('.div2').css({
			'display':'none'
		})
		
	}
})