// JavaScript Document

$(document).ready(function(){
	
	$('ol#contact-types li').each(function(i) {
    	$(this).find('p').prepend('<span class="num interval-font">' + (i + 1) + '</span>');
	});

	
});
