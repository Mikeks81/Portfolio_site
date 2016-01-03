$(document).ready(
	function(){
		// Landing page animation

		$("#hello").hide();
		$("#hello").fadeIn(3000);

		$("#enter").hide();
		$("#enter").fadeIn(3000);

		// ###### Gallery Page #########

		// ---------------LIGTHBOX--------------------

		$(".image").on('click', // shows light box and clicked image
			function(){
				var currentImageMarker = $(this).addClass('currentImage');

				//array of img tags in gallery_frames
				// need to pick out alt attribute for high res file path 
				var collection = $("#gallery_frames img").siblings(); 

				// what the next image is from thumbnail click
				// var nextImage = $(".currentImageMarker").next().attr('alt');
				var nextImage = $(".currentImage").next().attr('alt');

				// what the previous image is from thumbnail click
				var prevImage = $(".currentImage").prev().attr('alt');
				
				$("#lb_image").attr('src',($(this).attr('alt'))); 
				$("#outer_lightbox").fadeIn(400)
				
				$("#f_arrow").on('click', //navigation arrows forward
					function(e){
						e.preventDefault();
						// if .current class is undefined...
						if ($('.currentImage').val() === undefined ) { 
							// make first img tag in #gallery_frames class .currentimage
							$('#gallery_frames img').first().addClass('currentImage'); 

							$('#lb_image').attr('src',($('.currentImage').attr('alt')));
							
						}

						else {
						// adds class to the next sibling of the currentImage class
						$('.currentImage').next().addClass('currentImage'); 

						// removes the class from the previous image 
						$('.currentImage').first().removeClass('currentImage');

						// tells lb image to use .currentImage alt info as src path
						$('#lb_image').attr('src',($('.currentImage').attr('alt')));
						}
					});


				$("#b_arrow").on('click', //navigation arrows forward
					function(e){
						e.preventDefault();
						// if .current class is undefined...
						if ($('.currentImage').val() === undefined )  {
							//make last img tag in #gallery_frames a class of .currentImage
							$('#gallery_frames img').last().addClass('currentImage');
							$('#lb_image').attr('src',($('.currentImage').attr('alt')));
						}
						else {
						// adds class to the previous sibling of the currentImage class
						$('.currentImage').prev().addClass('currentImage'); 

						// removes the class from the previous image 
						$('.currentImage').last().removeClass('currentImage');


						// tells lb image to use .currentImage alt info as src path
						$('#lb_image').attr('src',($('.currentImage').attr('alt')));
						}
					});

				// Key board navigation

				$("body").on("keydown", // sourced parts of this code from jquery api and stack
					function(event){
						if (event.which == 39) {
		
							// if .current class is undefined...
							if ($('.currentImage').val() === undefined ) { 
							// make first img tag in #gallery_frames class .currentimage
								$('#gallery_frames img').first().addClass('currentImage'); 
							
								$('#lb_image').attr('src',($('.currentImage').attr('alt')));
							}

							else {
							// adds class to the next sibling of the currentImage class
							$('.currentImage').next().addClass('currentImage'); 

							// removes the class from the previous image 
							$('.currentImage').first().removeClass('currentImage');

							// tells lb image to use .currentImage alt info as src path
							$('#lb_image').attr('src',($('.currentImage').attr('alt')));
							}
						}
						else if (event.which == 37) {
								// if .current class is undefined...
							if ($('.currentImage').val() === undefined ) {
								//make last img tag in #gallery_frames a class of .currentImage
								$('#gallery_frames img').last().addClass('currentImage');
								$('#lb_image').attr('src',($('.currentImage').attr('alt')));
							}
							else {
							// adds class to the previous sibling of the currentImage class
							$('.currentImage').prev().addClass('currentImage'); 

							// removes the class from the previous image 
							$('.currentImage').last().removeClass('currentImage');


							// tells lb image to use .currentImage alt info as src path
							$('#lb_image').attr('src',($('.currentImage').attr('alt')));
							}
						}

					});

				$("#close_lightbox").on('click',
					function(e){
						e.preventDefault();
						$("#outer_lightbox").fadeOut(400);
					});
			});


		//########### Contact Page ###########		

		

});		


			



