var ImageLoader = require("./ImageLoader.js");
var $ = require("jquery");


var ImagesLazyLoading = (function(){

	var settings = null;

	var init = function(config){
		 settings= $.extend(
		 	{
		 		'watch': false
		 	}, 
		 	config
		 );

		 changeUrls();
		 
		 if(!!settings.watch)
		 {

		 	watchDomChanges();
		 }

	};


	function changeUrls(){
		$("img[data-lazy-src]").not(".data-lazy-loaded").each(function(){
			
			var $this = $(this);
			var _src2Load = $this.attr('data-lazy-src');

			var p = ImageLoader.getImagePromise(_src2Load);

			p.then(function(success){
				if(success)
				{
					$this.attr('src', _src2Load);
				}
				else
				{
					$this.attr('src', $this.attr('data-lazy-error-src'));	
				}

				$this.addClass('data-lazy-loaded');

				var callbackName = $this.attr('data-lazy-callback');
				
				if(typeof(callbackName) === 'string'  && typeof(window[callbackName]) === 'function' ){
					window[callbackName].call($this.get(), success);
				}


			})
		});

	}

	var observeDOM = (function(){
	    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
	        eventListenerSupported = window.addEventListener;

	    return function(obj, callback){
	        if( MutationObserver ){
	            // define a new observer
	            var obs = new MutationObserver(function(mutations, observer){
	                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
	                    callback();
	            });

	            console.log("obj: "+obj)
	            // have the observer observe foo for changes in children
	            obs.observe( obj, { childList:true, subtree:true });
	        }
	        else if( eventListenerSupported ){
	            obj.addEventListener('DOMNodeInserted', callback, false);
	            obj.addEventListener('DOMNodeRemoved', callback, false);
	        }
	    }
	})();

	

	function watchDomChanges(){

		console.log("watchDomChanges");
		observeDOM( $('body').get(0) ,function(){ 
			changeUrls();
		});
	}


	return {
		'init': init,
		'refresh': changeUrls,
	}

})();

module.exports = ImagesLazyLoading;