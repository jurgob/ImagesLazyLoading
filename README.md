# ImagesLazyLoading
ImagesLazyLoading is an module to lazy load images.

##Usage:

###javascript:
```
ImagesLazyLoading.init()
```

###DOM Attributes:
```
<img  
	data-lazy-callback="borderRed"  
	data-lazy-src="http://www.kongtechnology.com/wp-content/uploads/see-how-your-google-results-measure-up-with-google-grader-video.jpg"  
	src="http://www.ajaxload.info/images/exemples/25.gif"  
	data-lazy-error-src="http://www.problogger.net/wp-content/uploads/2007/09/404-page-not-found.jpg" 
/>
```				

				
##Explanations:

###DOM attributa explaination:
data-lazy-src: hi res image. This image will be showed only once added
data-lazy-error-src: error image. This image is diplayed if "data-lazy-src" url return a 404
data-lazy-callback: this callback is executed when the image is loaded. The contest of the callback should be window (I suggest to explicitally declare the callback like window.callback = function(){} )

###Some more functionality:
ImagesLazyLoading.init(): will initialize the module
ImagesLazyLoading.refresh(): refresh the plugin. This will load the new images addded on the DOM after the init() execution
ImagesLazyLoading.init({watch: true})  with "watch:true" option ImagesLazyLoading will listen for the DOM changes and it will automatically load new images. (basically it automatically call the refresh function)


##Live Examples:
http://jurgob.github.io/ImagesLazyLoading/
