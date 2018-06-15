$(document).ready(function() {
var monthNames = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ]; 
var dayNames= ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
var newDate = new Date();
newDate.setDate(newDate.getDate()); 
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
setInterval( function() {
	var detik = new Date().getSeconds();
	$("#itil").html(( detik < 10 ? "0" : "" ) + detik);
	},1000);
setInterval( function() {
	var menit = new Date().getMinutes();
	$("#asu").html(( menit < 10 ? "0" : "" ) + menit);
    },1000);
setInterval( function() {
	var jam = new Date().getHours();
	$("#joh").html(( jam < 10 ? "0" : "" ) + jam);
    }, 1000);
}); 