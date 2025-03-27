$(function() {
	var number = 1 + Math.floor(Math.random() * 5);
	var backgroundImage = 'background' + number;
	
	$('body').css('background', 'url(images/' + backgroundImage + '.jpg) no-repeat center center fixed');
	$('body').css('background-size', 'cover');
	$('body').css('-webkit-background-size', 'cover');
	$('body').css('-moz-background-size', 'cover');
	$('body').css('-o-background-size', 'cover');
	
	$('.text-container').fadeIn(2000);
});