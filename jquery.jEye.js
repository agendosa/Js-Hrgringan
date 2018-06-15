/*
 * jEye jQuery plugin
 *
 * Copyright (c) 2009 Giovanni Casassa (senamion.com - senamion.it)
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.senamion.com
 *
 */

jQuery.fn.jEye = function(o) {

	var windowWidth = parseInt($(window).width());

	o = jQuery.extend({
		xEye: windowWidth/2 - 50,
		yEye: 268,
		wEye: 98,
		hEye: 48,
		wPupil: 72,
		hPupil: 62,
		eyes: 2
	}, o);

	return this.each(function(i) {
		var el = $(this);
		var radius = Math.floor((o.wEye - o.wPupil) / 2) - 1;
		var	position = $('body').position();
		var xEl = position.left;
		var yEl = position.top;
		var topPosR = 0;

		$('#head-top').append("<div id='eye-left'>" +
			"<img id='pupil1' src='http://www.hargaringan.com/rtsystem/assets/images/projects-eye.png' style='position: relative; top:48px; left:15px; width: " + o.wPupil + "px; height:" + o.hPupil + "px' />" + 
			"</div>");
		if (o.eyes == 2) {
			$('#head-top').append("<div id='eye-right'>" +
				"<img id='pupil2' src='http://www.hargaringan.com/rtsystem/assets/images/projects-eye.png' style='position: relative; top:48px; left:15px; width: " + o.wPupil + "px; height:" + o.hPupil + "px' />" + 
				"</div>");
			}

		$('body').mousemove(function(e){
			var r = 78;
			var ym = e.pageY - yEl;
			var xm = e.pageX - xEl;
			var xo = o.xEye;
			var yo = o.yEye;
			ang = Math.atan((yo - ym) / (xm - xo));
			
			//$('#twitter').html('radius = ' + radius + ', ang = ' + ang + ', radius - Math.floor(Math.sin(ang) * r) = ' + (radius - Math.floor(Math.sin(ang) * r))); 
			
			if (xo > xm) {
				ang += Math.PI;
			}
			
			var topL = radius - Math.floor(Math.sin(ang) * r);
			if ( topL > 48) {
				$('#pupil1').css("top", topL + "px");
			}
			$('#pupil1').css("left", (Math.floor(Math.cos(ang) * r) + radius) + "px");
			
			
			if (o.eyes == 2) {
				xm -= o.wEye;
				ang = Math.atan((yo - ym) / (xm - xo));
				
				if (xo > xm) {
					ang += Math.PI;
				}
				var topR = radius - Math.floor(Math.sin(ang) * r);
				if ( topR > 48) {
					$('#pupil2').css("top", radius - Math.floor(Math.sin(ang) * r) + "px");
				}
				$('#pupil2').css("left", (Math.floor(Math.cos(ang) * r) + radius) + "px");
			}
			
			//$('#twitter').html('ym =' + ym +', xm =' + xm +', xo =' + xo +', yo =' + yo + ', e.pageX = ' + e.pageX + ', e.pageY = ' + e.pageY + ', xEl =' + xEl +', yEl =' + yEl);
			
		});
	});
};