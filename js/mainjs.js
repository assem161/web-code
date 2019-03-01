// Resonsive Menu for All Screen............................

$(function(){
	'use strict';
	// tirger nice scroll
	 $("html").niceScroll({
	 	cursorcolor:"rgba(174, 119, 23,0.5)",
	 	cursorborder:"1px solid rgba(174, 119, 23,1)",
	 	cursorwidth :"8px"
	 });
	// change header height
	$('.header').height($(window).height());

	$(window).resize(function(){
		$('.header').height($(window).height());
	});

	// transfer by arrow

	$('.header .arrow i').click(function(){
		$('html , body').animate({
			scrollTop: $('.feat').offset().top
		},1000)
	});

	// show the remain divs
	$('.bot').click(function(){
		$('.boxM:hidden').fadeIn();
	})


	// Make small Slider by Using ande Remove arrow

	//Check last and afirst arrow.........

	var arrowleft =$('.testo .fa-chevron-left'),
		arrowright=$('.testo .fa-chevron-right');
	
	function checkarrow(){
		$('.client:first').hasClass('active') ? arrowleft.stop().fadeOut() : arrowleft.stop().fadeIn();
		$('.client:last').hasClass('active') ? arrowright.stop().fadeOut() : arrowright.stop().fadeIn();
	}
	checkarrow();

	$('.testo i').click(function(){
		if($(this).hasClass('fa-chevron-right')){
			
			$('.testo .active').fadeOut(100,function(){
				$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				checkarrow();
			});

		}else{
			$('.testo .active').fadeOut(100,function(){
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				checkarrow();	
				});
		}
	});
})

