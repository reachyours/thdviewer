$('.tabs li').click(function(){
	
	$('.tabs li').removeClass('tablis');
	$(this).addClass('tablis');                                                            
	
	
});
$('.tabs li').mouseover(function(){
		$(this).popover('show');	
});
$('.tabs li').mouseout(function(){

	$(this).popover('hide');
});
$("[name='my-checkbox']").bootstrapSwitch();



// Without JQuery
var slider = new Slider("#ex6");
slider.on("slide", function(slideEvt) {
	$("#ex6SliderVal").text(slideEvt.value/10);
});
var slider = new Slider("#ex7");
slider.on("slide", function(slideEvt) {
	$("#meta_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex8");
slider.on("slide", function(slideEvt) {
	$("#spec_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex9");
slider.on("slide", function(slideEvt) {
	$("#rou_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex10");
slider.on("slide", function(slideEvt) {
	$("#placement_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex11");
slider.on("slide", function(slideEvt) {
	$("#texture_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex12");
slider.on("slide", function(slideEvt) {
	$("#trans_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex13");
slider.on("slide", function(slideEvt) {
	$("#thick_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex14");
slider.on("slide", function(slideEvt) {
	$("#ambient_val").text(slideEvt.value/10);
});
// var slider = new Slider("#ex15");
// slider.on("slide", function(slideEvt) {
// 	$("#bump_val").text(slideEvt.value/10);
// });
var slider = new Slider("#ex16");
slider.on("slide", function(slideEvt) {
	$("#cavity_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex17");
slider.on("slide", function(slideEvt) {
	$("#trans_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex18");
slider.on("slide", function(slideEvt) {
	$("#emission_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex19");
slider.on("slide", function(slideEvt) {
	$("#albedo_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex20");
slider.on("slide", function(slideEvt) {
	$("#specular_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex21");
slider.on("slide", function(slideEvt) {
	$("#bump_val").text(slideEvt.value/10);
});
var slider = new Slider("#ex22");
slider.on("slide", function(slideEvt) {
	$("#bumpmap_val").text(slideEvt.value/10);
});

/*显示隐藏切换*/
$('.main_dis span').click(function(){
	$('.main_dis span').css({
		'background-color':'#333333'
	})
	if($(this).attr('nid')=="1"){
		$('.main_sp1').css({
			'background-color':'#1caad9'
		})
	}
	if($(this).attr('nid')=="2"){
		$('.main_sp2').css({
			'background-color':'#1caad9'
		})
	}
})

$('.prb_ssp1 span').click(function () {
	$('.prb_ssp1 span').removeClass('bgc');
	$(this).addClass('bgc');
	if ($(this).attr('nid')=='1') {
		$('.prb_divf').css({
			'display':'block'
		})
		$('.prb_checolor').css({
			'display':'none'
		})
	}
	if ($(this).attr('nid')=='2') {
		$('.prb_divf').css({
			'display':'none'
		})
		$('.prb_checolor').css({
			'display':'block'
		})
	}
})
$('.trans_sp span').click(function (){
	$('.trans_sp span').removeClass('trans_co');
	$(this).addClass('trans_co');
})

$('.prbspec_ssp span').click(function () {
	$('.prbspec_ssp span').removeClass('bgc');
	$(this).addClass('bgc');
	if ($(this).attr('nid')=='1') {
		$('.specprb_divf').css({
			'display':'block'
		})
		$('.prbspec_checolor').css({
			'display':'none'
		})
	}
	if ($(this).attr('nid')=='2') {
		$('.specprb_divf').css({
			'display':'none'
		})
		$('.prbspec_checolor').css({
			'display':'block'
		})
	}
})

/*---albedo切换---*/
$('.prb_spp2 span').click(function () {
	$('.prb_spp2 span').removeClass('bgc');
	$(this).addClass('bgc');
	if ($(this).attr('nid')=='1') {
		$('.albedo_divf').css({
			'display':'block'
		})
		$('.albedo_checolor').css({
			'display':'none'
		})
	}
	if ($(this).attr('nid')=='2') {
		$('.albedo_divf').css({
			'display':'none'
		})
		$('.albedo_checolor').css({
			'display':'block'
		})
	}
})

/*---ambient切换---*/
$('.prb_ssp3 span').click(function () {
	$('.prb_ssp3 span').removeClass('bgc');
	$(this).addClass('bgc');
	if ($(this).attr('nid')=='1') {
		$('.emission_divf').css({
			'display':'block'
		})
		$('.emission_checolor').css({
			'display':'none'
		})
	}
	if ($(this).attr('nid')=='2') {
		$('.emission_divf').css({
			'display':'none'
		})
		$('.emission_checolor').css({
			'display':'block'
		})
	}
})

$('#pbr_ms span').click(function () {
	// console.log(12);
	$('#pbr_ms span').removeClass('pbr_sel1');
	$(this).addClass('pbr_sel1');

	if ($(this).attr('nid')=='1') {
		$('.specular_content').removeClass('display');
		$('.specular_content').addClass('disnone');
		$('.metaliness_content').addClass('display');
		$('metaliness_content').removeClass('disnone');
	}
	if ($(this).attr('nid')=='2') {
		$('.specular_content').addClass('display');
		$('.specular_content').removeClass('disnone');
		$('.metaliness_content').addClass('disnone');
		$('.metaliness_content').removeClass('display');
	}
})

$('#rou_mes span').click(function () {
	$('#rou_mes span').removeClass('pbr_sel1');
	$(this).addClass('pbr_sel1');
})

$('.rou_ness span').click(function () {
	$('.rou_ness span').removeClass('pbr_sel1');
	$(this).addClass('pbr_sel1');
})

$('#map_normal span').click(function () {
	$('#map_normal span').removeClass('pbr_sel1');
	$(this).addClass('pbr_sel1');
	if ($(this).text()=='Normal Map') {
		$('.normal_dis').css({
			"display":'block'
		})
		$('.bump_map').css({
			'display':'none'
		})
	}
	if ($(this).text()=='Bump Map') {
		$('.normal_dis').css({
			"display":'none'
		})
		$('.bump_map').css({
			'display':'block'
		})
	}
})
/*颜色选择器*/
$(function () {
    $('#mycp').colorpicker();
    
});
$(function () {
    
    $('#myspecular').colorpicker();
});
$(function () {
    $('#mycp1').colorpicker();

});
$(function () {
    $('#profile1').colorpicker();
    
});
$(function () {
    $('#profile2').colorpicker();
    
});
$(function () {
    $('#profile3').colorpicker();
    
});
$(function () {
    $('#profile4').colorpicker();
    
});
$(function () {
    $('#profile5').colorpicker();
    
});
$(function () {
    $('#profile6').colorpicker();
    
});
$(function () {
    $('#profile7').colorpicker();
    
});
$(function () {
    $('#myemission').colorpicker();
    
});
$('.list').click(function () {
	$(this).next('div').toggle("fast");
})
/*阻止事件冒泡 on 和 off 开关按钮*/
$(".mycheckbox").click(function(event){
            event.stopPropagation();
    });

/*开关按钮的触发事件*/
/*---第三条---*/
$('.place input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
 /* console.log(this); // DOM element
  console.log(event); // jQuery event*/
  //console.log(state); // true | false
   var height=$('.discover').height();
   $('.displacement').toggle();
   if (state) {
	   		
   	}
   	if (!state){
	     	
	}
});
/*---第四条---*/
$('.bump_icheck input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
 /* console.log(this); // DOM element
  console.log(event); // jQuery event*/
  console.log(state); // true | false
   
   $('.bump_cover').toggle();
   if (state) {
	   		
   	}
   	if (!state){
	     	
	}
});
/*---第五条---*/
$('.subsur_icheck input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
 /* console.log(this); // DOM element
  console.log(event); // jQuery event*/
  console.log(state); // true | false
   
   $('.subsurface_cover').toggle();
   if (state) {
	   	$('.scat_check').prop('checked',true);
	   	$('.trans_check').prop('checked',true);
	   	$('.scatter_content').css({
	   		'display':'block'
	   	})
	   	$('.translucency_content').css({
	   		'display':'block'
	   	})	
   	}
   	if (!state){
	    $('.scat_check').prop('checked',false);
	   	$('.trans_check').prop('checked',false);
	   	$('.scatter_content').css({
	   		'display':'none'
	   	})
	   	$('.translucency_content').css({
	   		'display':'none'
	   	})	
	}
});
/*---第六条---*/
$('.ambient_icheck input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
 /* console.log(this); // DOM element
  console.log(event); // jQuery event*/
  console.log(state); // true | false
   
   $('.ambient_cover').toggle();
   if (state) {
	   		
   	}
   	if (!state){
	     	
	}
});
/*---第七条---*/
$('.cavity_icheck input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
 /* console.log(this); // DOM element
  console.log(event); // jQuery event*/
  console.log(state); // true | false
   var height=$('.discover').height();
   $('.cavity_cover').toggle();
   if (state) {
	   		
   	}
   	if (!state){
	     	
	}
});
/*---第八条---*/
$('.trans_icheck input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
 /* console.log(this); // DOM element
  console.log(event); // jQuery event*/
  console.log(state); // true | false
   var height=$('.discover').height();
   $('.trans_cover').toggle();
   if (state) {
	   		
   	}
   	if (!state){
	     	
	}
});
/*---第九条---*/
$('.emission_icheck input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
 /* console.log(this); // DOM element
  console.log(event); // jQuery event*/
  console.log(state); // true | false
   var height=$('.discover').height();
   $('.emission_cover').toggle();
   if (state) {
	   		
   	}
   	if (!state){
	     	
	}
});
	

    $('.dou_check').on('click',function(){
       
        if ($(this).prop('checked')) {
			if ($(this).attr('num')==1) {
				$('.scatter_content').css({
				'display':'block'
				})
			}
			if ($(this).attr('num')==2) {
				$('.translucency_content').css({
				'display':'block'
				})
			}		
		}
		if (!$(this).prop('checked')) {
			if ($(this).attr('num')==1) {
				$('.scatter_content').css({
				'display':'none'
				})
			}
			if ($(this).attr('num')==2) {
				$('.translucency_content').css({
				'display':'none'
				})
			}	
		}
		if (!$('.scat_check').prop('checked') && !$('.trans_check').prop('checked')) {
			$('.subsurface_cover').css({
				'display':'block'
			})
			$('.subsur_icheck input[name="my-checkbox"]').bootstrapSwitch('toggleState', true,true);
		}
    });
    /*base color 换颜色*/
    $('#mycp').change(function () {
    	
    	$('.base_color').css({
    		'background-color':$(this).val()
    	})
    })
    /*albedo换颜色*/
    $('#mycp1').change(function () {
    	
    	$('.albedo_color').css({
    		'background-color':$(this).val()
    	})
    })
     /*profile换颜色*/
    $('#profile1').change(function () {
    	
    	$('.profile01_color').css({
    		'background-color':$(this).val()
    	})
    })
    $('#profile2').change(function () {
    	
    	$('.profile11_color').css({
    		'background-color':$(this).val()
    	})
    })
    $('#profile3').change(function () {
    	
    	$('.profile02_color').css({
    		'background-color':$(this).val()
    	})
    })
    $('#profile4').change(function () {
    	
    	$('.profile22_color').css({
    		'background-color':$(this).val()
    	})
    })
    $('#profile5').change(function () {
    	
    	$('.profile03_color').css({
    		'background-color':$(this).val()
    	})
    })
    $('#profile6').change(function () {
    	
    	$('.profile33_color').css({
    		'background-color':$(this).val()
    	})
    })
    $('#profile7').change(function () {
    	
    	$('.custom_color').css({
    		'background-color':$(this).val()
    	})
    })

    /*mange textures模态框显示隐藏*/
    // $('#myModal').modal('show');
    $('.prb_sp2').click(function(){
    	$('#myModal').modal('show');
    })
    $('.text_p').click(function () {
    	$(".text_p").removeClass('text_bgc');
    	$(this).addClass('text_bgc');
    })

    /*文件上传 choose files*/
    $('#ssi-upload3').ssi_uploader({url:'#',dropZone:false,allowed:['jpg','png']});