$(document).ready(
	function(){
		// $("h1").fadeOut(6000);
		$("#hello").hide();
		$("#hello").fadeIn(3000);

		$("#enter").hide();
		$("#enter").fadeIn(3000);

		
		$(".image").mouseenter(
			function(){
				$(this, "img").css("z-index","99");
				$(this, "img").animate({width: "+=20px",
					height: "+=20px"},'slow');
			});
		$(".image").mouseleave(
			function(){
				$(this, "img").animate({width: "-=20px",
					height: "-=20px"},'slow');
				$(this, "img").css("z-index","0");
			});		
});		




