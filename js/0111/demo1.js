function getheight(){
	var height=screen.availHeight*0.35;
	$('#lefts').css({
		'top':height+"px"
	});
	$('#rights').css({
		'top':height+"px"
	});
}
getheight();
/*左右切换背景*/
var flag=1;
$('.tune').click(function(){
	
	if (flag==1) {
		$('#bgimg').prop('src','images/bgg1.jpg');
		flag=0;
	}
	else{
		$('#bgimg').prop('src','images/bgg2.jpg');
		flag=1;
	}
})