// JavaScript Document

$(document).ready(function(){
						   
	// external links
	$('a[rel=external], a.external').click(function(){
		window.open(this.href);
		return false;
	});
	
        
        var TwitterSelector = $('#tweets');
        $.getJSON("http://www.hargaringan.com/twitter/fetchtimeline.php", function(json){

            $.each(json, function(index, item) {
                TwitterSelector.append('<li><span class="tweet-name">@'+item.user.screen_name+': </span>'+item.text+'</span></li>');
            });
            
            initTwitter();
        });
        
        function initTwitter() {
            
	// twitter
	var tweetCount = $('ul#tweets li').size();
	var currentTweet = 0;
	var prevTweet = 0;
	
	
	var tweetWidth = $('ul#tweets li:eq(0)').width();
	var boxWidth = 562;
	
	$('ul#tweets li:eq(0)').css('top', '0');
	
	$.preLoadImages('twitter-bird-animated.png', 'http://www.hargaringan.com/rtsystem/assets/images/twitter-bird-animated.png');
	$.preLoadImages('twitter-nav-arrows.png', 'http://www.hargaringan.com/rtsystem/assets/images/twitter-nav-arrows.png');
	
	function nextTweet() {
		
		prevTweet = currentTweet;
		currentTweet = (currentTweet + 1) % tweetCount;
		
		
		// animate prevTweet out and back to bottom
		$('ul#tweets li:eq(' + prevTweet + ')').animate({top: '-42px'},500,'easeInCubic',function(){																					  
			$(this).css({top: '42px', left: '0'});
		});
		
		// animate currentweet in
		$('ul#tweets li:eq(' + currentTweet + ')').delay(250).animate({top: '0'},250,'easeOutCubic', function() {
			tweetWidth = $('ul#tweets li:eq(' + currentTweet + ')').width();
		});
		
		//animate bird
		$('a#twitter-bird').removeClass('stop').addClass('animate').animate({marginTop:'4px'},250,function() {
			$(this).animate({marginTop:'0'},250,function() {$(this).removeClass('animate').addClass('stop');});
		});
		
		
	}
	
	var tweetInterval = setInterval(nextTweet, 8000);
	
	function scrollTweet() {
		
			$('ul#tweets li:eq(' + currentTweet + ')').css({
				left: '-=' + 4 + 'px'
			});
		
	}
	
	var liPos = 0;
	
	$('#twitter').hover(function() {						 
		clearInterval(tweetInterval);
		
		liPos = parseInt($('ul#tweets li:eq(' + currentTweet + ')').css('left'));
		if(tweetWidth > boxWidth) {
			if(liPos < 0) {
				$('#twitter #arrow-left').fadeIn();
			}
			if(liPos > (-1 * (tweetWidth - boxWidth) - 20)) {
				$('#twitter #arrow-right').fadeIn();
			}
		}
	}, function() {
		tweetInterval = setInterval(nextTweet,8000);
		//nextTweet();
		$('#twitter .arrow').fadeOut();
	});
	
	
	
	$('#twitter #arrow-left').hover(function() {
		var scrollToPoint = tweetWidth - boxWidth;
		var speed = scrollToPoint * 5;
		$('ul#tweets li:eq(' + currentTweet + ')').animate({left: '0'},speed,'swing', function() {
			if(liPos >= 0) {
				$('#twitter #arrow-left').fadeOut();
			}
		});
		$('#twitter #arrow-right').fadeIn();
		
	}, function() {
		$('ul#tweets li:eq(' + currentTweet + ')').stop();
		
	});
	
	$('#twitter #arrow-right').hover(function() {
		var scrollToPoint = tweetWidth - boxWidth;
		var speed = scrollToPoint * 5;
		$('ul#tweets li:eq(' + currentTweet + ')').animate({left: '-' + (scrollToPoint + 20) + 'px'},speed,'swing', function() {
			if(liPos > (-1 * (tweetWidth - boxWidth) - 20)) {
				$('#twitter #arrow-right').fadeOut();
			}
		});
		$('#twitter #arrow-left').fadeIn();

	}, function() {
		$('ul#tweets li:eq(' + currentTweet + ')').stop();
	});
	
        }

	
 });

(function($) {
  var cache = [];
  // Arguments are image paths relative to the current page.
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  };
})(jQuery);