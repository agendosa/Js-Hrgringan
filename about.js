// JavaScript Document
	
$(document).ready(function(){
	
	$('.staff-details').hover(
      function () {
        $(this).children('.staff-slider').animate({top:'-96px'}, 400, "easeInCubic");
      }, 
      function () {
        $(this).children('.staff-slider').animate({top:'0'}, 200, "easeOutCubic");
      }
    );
	/*
	$('#content p:nth-last-child(2)').before('<div class="spacer" style="width:140px"><!-- --></div><div class="spacer" style="width:150px"><!-- --></div><div class="spacer" style="width:160px"><!-- --></div><div class="spacer" style="width:165px"><!-- --></div><div class="spacer" style="width:170px"><!-- --></div><div class="spacer" style="width:170px"><!-- --></div><div class="spacer" style="width:190px"><!-- --></div><div class="spacer" style="width:200px"><!-- --></div><div class="spacer" style="width:200px"><!-- --></div>');
	*/

});
