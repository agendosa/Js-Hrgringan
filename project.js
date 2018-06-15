// JavaScript Document

$(document).ready(function(){
	$('body').jEye();
	chomper(INITIAL_URL,true);
	
	$('.slideshow').cycle({
		prev: 'a.slideshow-nav-back',
		next: 'a.slideshow-nav-next',
		speed: 500
	});
	
 });

/*
 * Load Content Routine...
 * Fetches content data and does the chomp animation :)
 <script type="text/javascript">
	$(document).ready(function(){
		$('.slideshow').cycle({
			prev: 'a.slideshow-nav-back',
			next: 'a.slideshow-nav-next',
			speed: 500
		});
		
		// external links
		$('a[rel=external]').click(function(){
			window.open(this.href);
			return false;
		});
		
	});
</script>
 */
 
function chomper(content_path,do_refresh) {
	 
	$('#content').animate({ 
        	height: '33px'
      		}, 600, 'swing', function(){
				$('#content').empty();
				$('#content').load(content_path, function() {
					$('#content').animate({ 
						height: '455px'
					}, 600, 'swing', function() {
						if (do_refresh) {refresh_interactivity();}
					});
					$('#projects').css('display', 'none');
					$('#projects').fadeIn();
					$('#project-single').css('display', 'none');
					$('#project-single').fadeIn();
					$('#head-top').animate({marginTop: '0px'}, 600, 'swing');
				});
			}
	);
	$('#projects').fadeOut();
	$('#project-single').fadeOut();
	//$('#head-top').animate({marginTop: '422px'}, 600, 'swing');
	 
 }
 
 /*
  * Refresh Interactivity
  * Applies handlers to the interactive gallery of projects
  */
 
 function refresh_interactivity() {
	//load the coda slider thingy...
	$('#projects-page #coda-slider-1').codaSlider({
		autoSlideInterval:6000,
		autoHeight:false,
		autoSlide:true,
		autoSlideStopWhenClicked: true,
		dynamicArrows:true,
		dynamicArrowRightText:'<span>Next</span>',
		dynamicArrowLeftText:'<span>Back</span>',
		dynamicTabs:false,
		crossLinking:true
	});
	//handle project item clicks... 
	$('.project').click(function () {
		var linkpath = $(this).find('a').attr('rel');
		chomper(linkpath,true);
		return false;
	});
	//handle clicking the return to projects link
	$('#restore_project_list').click(function(){
		chomper('/kerja.php',true);
		return false;
	});
	
	//enable slideshow
	$('.slideshow').cycle({
		prev: 'a.slideshow-nav-back',
		next: 'a.slideshow-nav-next',
		speed: 500
	});
	
	// external links
	$('a[rel=external]').click(function(){
		window.open(this.href);
		return false;
	});
 }