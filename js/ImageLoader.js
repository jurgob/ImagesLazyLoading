var ImageLoader = (function ImageLoader(){
				
	this.images  = {};
	this.getImagePromise = function(url){
		if(!this.images[url])
		{ 
			 var imagePromise = new Promise(
			    function(resolve, reject) 
			    {  
			    	console.log('getImagePromise');
			    	var image = new Image()
					image.src = url;
					$(image)
						.load(function(){
							resolve(true);
						 })
						.error(function(){
							resolve(false);
						});
			    }
			);
			this.images[url] = imagePromise;
		}
		
		return this.images[url];
	}

	return this;
})();

module.exports = ImageLoader;