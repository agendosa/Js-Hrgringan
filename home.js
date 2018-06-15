// JavaScript Document

var quoteCount = $('ul#quotes li').size();
var currentQuote = 0;
var prevQuote = 0;
var nextHeight = 0;

$(document).ready(function(){
						   
	// homepage Slider
	$('#home-page #coda-slider-1').codaSlider({
		autoSlideInterval:6000,
		autoHeight:false,
		autoSlide:true,
		autoSlideStopWhenClicked: true,
		dynamicArrows:false,
		dynamicTabs:false,
		crossLinking:true
	});
	
	$('#banner-thumbnails li a').hover(function(){
		if($(this).hasClass('current') == false) {
			$(this).animate({
				opacity: '1'
			}, 'fast');
		}
	}, function(){
		if($(this).hasClass('current') == false) {
			$(this).animate({
				opacity: '.65'
			}, 'fast');
		}
	});
	
	// testimonials
	$('ul#quotes li').addClass('offscreen').eq(0).removeClass('offscreen');
	$('ul#quotes').css('height', $('ul#quotes li:eq(' + currentQuote + ')').height());
	
 });

// called by Flash movie
function nextQuote() {
	prevQuote = currentQuote;
	$('ul#quotes li:eq(' + prevQuote + ')').addClass('offscreen');
	currentQuote = (currentQuote + 1) % quoteCount;
	$('ul#quotes li:eq(' + currentQuote + ')').removeClass('offscreen').css('opacity', '0');
	nextHeight = $('ul#quotes li:eq(' + currentQuote + ')').height();
	
	
	$('ul#quotes').animate({height: nextHeight},500,function(){$('ul#quotes li:eq(' + currentQuote + ')').animate({opacity: '1'},500)});

}