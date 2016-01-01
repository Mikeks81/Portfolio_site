$(document).ready(
	function(){
		// Landing page animation

		$("#hello").hide();
		$("#hello").fadeIn(3000);

		$("#enter").hide();
		$("#enter").fadeIn(3000);

		// ###### Gallery Page #########

		$(".image").on('click',
			function(){
				$("#lb_image").attr('src',($(this).attr('alt')));
				$("#outer_lightbox").fadeIn(500);
				$("#inner_lightbox").fadeIn(500);
				$("#lb_image").fadeIn(500);
			});

		// $(".image").mouseenter( //on mouseenter of image the image zooms 5px
		// 	function(){
		// 		$(this, "img").animate({width: "+=5px",
		// 			height: "+=5px"});
		// 	});
		// $(".image").mouseleave( //on mouseleave of image the image returns to normal
		// 	function(){
		// 		$(this, "img").animate({width: "-=5px",
		// 			height: "-=5px"});
		// 	});

		// Used CSS to do the animation instead
		// DO NOT DELETE ABOVE CODE - IMG SELECTOR CODE IS DOPES!!

		//########### Contact Page ###########		
});		




