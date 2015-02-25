var $ = require("jquery");
var ImagesLazyLoading = require("../../ImagesLazyLoading");

$(document).ready(function(){

	ImagesLazyLoading.init({
		watch: true
	});



	var $firstTest = $('.firstTest img');
	var $secondTest = $('.secondTest img');
	var $thirdTest = $('.thirdTest img');


	window.borderGreen = function(){
		console.log('borderGreen');
		$(this).css('border', '1px solid green');
	}
	window.borderRed = function(){
		console.log('borderRed');
		$(this).css('border', '1px solid red');
	}
});

function addImage(){
	console.log(' ------ aftertimeout ------ ');

	$('body').append('<img  data-lazy-src="http://www.kongtechnology.com/wp-content/uploads/see-how-your-google-results-measure-up-with-google-grader-videoadsd.jpg"   src="http://www.ajaxload.info/images/exemples/25.gif" data-lazy-error-src="http://www.problogger.net/wp-content/uploads/2007/09/404-page-not-found.jpg" data-lazy-callback="borderGreen" />')
	.append('<img data-lazy-src="http://bit.fieramilano.it/sites/default/files/logo%20bit2015.png" src="http://www.ajaxload.info/images/exemples/25.gif" data-lazy-callback="borderRed" />')
	.append('<img data-lazy-src="https://www.petfinder.com/wp-content/uploads/2012/11/122163343-conditioning-dog-loud-noises-632x475.jpg" src="http://www.ajaxload.info/images/exemples/25.gif" data-lazy-callback="borderRed" />');

	//ImagesLazyLoading.refresh();

}

setTimeout(addImage, 10000);

setTimeout(addImage, 15000);