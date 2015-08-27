$(function(){
	var len = $('.nav ul li').length;
	var len1 = $('.nav_li').length;
	var index = 0;
	$('.nav ul li').click(function(){
		var index = $(this).index();
		
		if(index == len-1){
			$('.vs').hide();
			$('.vs2').addClass('block');
			
			$('.collect1').addClass('home');
		}else{
			$('.vs').show();
			$('.vs2').removeClass('block');
			$('.collect1').removeClass('home');
		}
		
		$(this).addClass('nav_active').siblings('.nav_active').removeClass('nav_active');
		$(this).children().addClass('nav_active1').parent().siblings().children().removeClass('nav_active1')
		$('.nav_li').eq(index).show().siblings('.nav_li').hide();
		
		$('.nav_li').swipeLeft(function(){
			index++;
			if(index>len1-1){index=0;}
			a(index);
		});
		
		$('.nav_li').swipeRight(function(){
			index--;
			if(index<0){index=len1-1;}
			a(index);
		});
		
	})
	function a(index){
		$('.nav ul li').eq(index).addClass('nav_active').siblings('.nav_active').removeClass('nav_active');
//		$('.nav_li').removeClass('navs2');
		$('.nav_li').eq(index).addClass('navs').siblings().removeClass('navs');
		$('.nav_li').eq(index).show().siblings('.nav_li').hide();
	}

//	function b(index){
//		$('.nav ul li').eq(index).addClass('nav_active').siblings('.nav_active').removeClass('nav_active');
//		$('.nav_li').removeClass('navs');
//		$('.nav_li').eq(index).addClass('navs2').siblings().removeClass('navs2');;
//		$('.nav_li').eq(index).show().siblings('.nav_li').hide();
//	}


	$('.nav_li').swipeLeft(function(){
		index++;
		if(index>len1-1){index=0;}
		a(index);
	});
		
	$('.nav_li').swipeRight(function(){
		index--;
		if(index<0){index=len1-1;}
		a(index);
	});

	var tr = true;
	$('.video').click(function(){
		if(tr){
			$(this).addClass('no');
			$('.my_videos').show();
			tr = false;
		}else{
			$(this).removeClass('no');
			$('.my_videos').hide();
			tr = true;
		}
	})
	
	
	$('.collect1').click(function(){
		var clas = $(this).attr('class');
		if(clas == 'collect1'){
			$(this).addClass('collect_active');
		}else{
			$(this).removeClass('collect_active');	
		}
	})
	
	
	var n = true;
	$('.solicitude1 span').click(function(){
		if(n){
			$('.my_solicitude').slideDown();
			$('.solicitude').attr('class','solicitude_active')
			n = false;
		}else{
			$('.my_solicitude').slideUp();
			$('.solicitude_active').attr('class','solicitude')
			n = true;
		}
	})
	
	
	$('.my_solicitude ul li').click(function(){
		var r = $(this).index();
		if(r==0){
			$(this).children().addClass('jinxing_active');
			remove(this);
		}else if(r==1){
			$(this).children().addClass('not_start_active');
			remove(this);
		}else if(r==2){
			$(this).children().addClass('ok1_active');
			remove(this);
		}else{
			$(this).children().addClass('interest_active');
			remove(this);
		};
		
		function remove(this1){
			$(this1).addClass('color2');
			$(this1).siblings().removeClass('color2');
			$(this1).siblings().children().removeClass('jinxing_active').removeClass('not_start_active').removeClass('ok1_active').removeClass('interest_active');
		}
	})
	
})
