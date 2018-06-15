// JavaScript Document

$(document).ready(function(){

	$('#.article-totem ul li.share-btn').toggle(
      function () {$(this).siblings('.share-link').slideDown();},
      function () {$(this).siblings('.share-link').slideUp();}
    );
	
	// Gravatar
	
	if ($('#comment-form input#email').val() != '') {loadGravatar();}
	
	$('#comment-form input#email').blur(function() {loadGravatar();});
	
	function loadGravatar() {
		$('#comment-form input#email').addClass('loading');
		var gravatar = $.md5($('#comment-form input#email').val().trim());
		$('#comment-form .avatar img').attr('src', 'http://www.gravatar.com/avatar/' + gravatar + '.jpg?s=84' + '&d=http://www.redtiki.com.au/rtsystem/assets/images/blog-comment-avatar-default.jpg');

		$('#comment-form .avatar img').load(function() {
			$('#comment-form input#email').removeClass('loading');
		});
	}
	
	
	$('.slideshow').cycle({
		prev: 'a.slideshow-nav-back',
		next: 'a.slideshow-nav-next',
		speed: 500
	});
	
	// bookmark script
	
	if(window.opera)
    {
        if ($("a.bookmark").attr("rel") != "")
        {$("a.bookmark").attr("rel","sidebar");}
    }
    $("a.bookmark").click(function(event)
    {
        event.preventDefault();
        if (window.sidebar)
        {
            window.sidebar.addPanel(this.title, this.href, "");
        }
        else if(window.external)
        {
            window.external.AddFavorite(this.href, this.title);
        }
        else if(window.opera)
        {
            return false;
        }
        else
        {
            alert('Please bookmark this page manually.');
        }
    });

	
 });
