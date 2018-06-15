// JavaScript Document

$(document).ready(function(){

	$('#.article-totem ul li.share-btn').toggle(
      function () {$(this).siblings('.share-link').slideDown();},
      function () {$(this).siblings('.share-link').slideUp();}
    );
	
	// search form auto-select
	
	$('#keywords').click(function() {$(this).select();})
	
	
	$('.slideshow').cycle({
		prev: 'a.slideshow-nav-back',
		next: 'a.slideshow-nav-next',
		speed: 500
	});
	
	
	// fancybox
	
	$("a.tell-a-friend").fancybox({
		'hideOnContentClick': false,
		'autoDimensions': false,
		'width': 580,
		'height': 345,
		'padding':0,
		'overlayOpacity': .75,
		'overlayColor': '#000'
	});
	
	
	// short-url alert
	
	$('a.short-url').click(function() {
		if($('.alert-banner')) {$('.alert-banner').slideUp().remove();}
		var content = $(this).attr('rel');
		var alertBanner = $('<div class="alert-banner" style="display:none"> Shortened URL: <span class="select">' + content + '</span><a href="#" class="close"><span>close</span></a></div>').hide();
        alertBanner.prependTo($('body')).slideDown();
		$('a.close').click(function() {
			$('.alert-banner').slideUp();
			return false;
		});
		return false;
	});
	
	
	
	// bookmark script http://www.developersnippets.com/2009/05/10/simple-bookmark-script-using-jquery/
	
    $("a.bookmark").click(function(e){
		e.preventDefault();
		var bookmarkUrl = this.href;
		var bookmarkTitle = this.title;
	 
		if (window.sidebar) { // For Mozilla Firefox Bookmark
			window.sidebar.addPanel(bookmarkTitle, bookmarkUrl,"");
		} else if( window.external || document.all) { // For IE Favorite
			window.external.AddFavorite( bookmarkUrl, bookmarkTitle);
		} else if(window.opera) { // For Opera Browsers
			$("a.bookmark").attr("href",bookmarkUrl);
			$("a.bookmark").attr("title",bookmarkTitle);
			$("a.bookmark").attr("rel","sidebar");
		} else { // for other browsers which does not support
			 alert('Please manually bookmark this page (usually Ctrl + D (Windows), or Cmd + D (Mac).');
			 return false;
		}
	});

	
 });

