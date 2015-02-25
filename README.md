# ImagesLazyLoading
ImagesLazyLoading is an module to lazy load images.

Usage:

javascript:

ImagesLazyLoading.init()


DOM:

<img  
				data-lazy-callback="borderRed"  
				data-lazy-src="http://www.kongtechnology.com/wp-content/uploads/see-how-your-google-results-measure-up-with-google-grader-video.jpg"  
				src="http://www.ajaxload.info/images/exemples/25.gif"  
				data-lazy-error-src="http://www.problogger.net/wp-content/uploads/2007/09/404-page-not-found.jpg" />
				
				

DOM attributa explaination:
data-lazy-src: hi res image. This image will be showed only once added
data-lazy-error-src: error image. This image is diplayed if "data-lazy-src" url return a 404
data-lazy-callback: this callback is executed when the image is loaded. The contest of the callback should be window (I suggest to explicitally declare the callback like window.callback = function(){} )






http://jurgob.github.io/ImagesLazyLoading/
