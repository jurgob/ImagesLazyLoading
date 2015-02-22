( function( $ ) {
	$window = $(window);
	$body = $('body');


	$body.imagesLoaded( function() {

        window.initScroll = function(){
            window.mySkrollr = skrollr.init({
                smoothScrolling: true,
                mobileDeceleration: 0.004
            });

            window.mySkrollrmenu = skrollr.menu.init(window.mySkrollr, {
                animate: true,
                easing: 'sqrt',
                scale: 2,
                duration: function(currentTop, targetTop) {
                    return 500;
                    //return Math.abs(currentTop - targetTop) * 10;
                },
                complexLinks: false,
                change: function(newHash, newTopPosition) {
                    //Do stuff
                }
            });

        }


        setTimeout(function() {

            initScroll();


			$body.removeClass('loading').addClass('loaded');



            $body.delegate('.navbar-toggle', 'click', function(e){
                e.preventDefault();
                var $this =$(this);
                if($this.hasClass('collapsed')){
                    $this.removeClass('collapsed');
                    $this.addClass('expanded');
                    $('.navbar').removeClass('collapsed');
                    $('.navbar').addClass('expanded');
                }else{
                    $this.addClass('collapsed');
                    $this.removeClass('expanded');
                    $('.navbar').addClass('collapsed');
                    $('.navbar').removeClass('expanded');
                }
            });



            var linkClick = function(e){

                e.preventDefault(); 
                var $link = $(this); 
                var link_href = $link.attr('href'); 
                $link.addClass('link-loading');  
                var changePage = function (pageUrl, content)
                { 
                    var $preContentArea = $('#skrollr-prebody');
                    var $contentArea = $('#skrollr-body');


                    var $content= $contentArea.find(">[data-page-url='"+pageUrl+"']").eq(0);
                    var $preContent = $preContentArea.find(">[data-page-url='"+pageUrl+"']").eq(0);

                    var pageTitle = $content.attr('data-page-title');

                    document.title = pageTitle;

                    $preContentArea.find('[data-page-url]').hide();
                    $contentArea.find('[data-page-url]').hide();

                    $content.show();
                    $preContent.show();

                    //$body.find('.skrollr-body').html(content);
                    //$body.find('#skrollr-prebody').html(preContent);


                    window.history.pushState({"html": content, "pageTitle": pageTitle}, "", pageUrl); 





                    setTimeout(function(){
                        window.mySkrollr.refresh();
                        //window.mySkrollr.destroy();
                       // initScroll();
                    }, 2000);

                    //$('#skrollr-prebody').imagesLoaded(function(){
                    //    s.refresh(); 
                    //     $(".navbar-toggle.expanded").click();
                    //});


                }; 
                 
                $.get(
                    link_href,
                    function (data)
                    { 
                        var $data = $('<div>' + data + '</div>'); 


                        var pageTitle = $data.find('head title').text(); 
                        var content = $data.find('.skrollr-body').html(); 
                        var preContent = $data.find('#skrollr-prebody').html(); 

                        var $preContentArea = $('#skrollr-prebody');
                        var $contentArea = $('#skrollr-body');


                        if( $contentArea.find('>[data-page-url]').length === 0  )
                        {
                            console.log('EMPTY ');
                            $contentArea.html('');
                            $preContentArea.html('');
                        }


                        var $newContent = $('<div/>').attr('data-page-url', link_href).attr('data-page-title', pageTitle).html(content).hide();
                        $contentArea.append($newContent);

                        var $newPreContent = $('<div/>').attr('data-page-url', link_href).html(preContent).hide();
                        $preContentArea.append($newPreContent);



                        changePage(link_href);  
                        $link.removeClass('link-loading', data); 
                    }
                ); 
            };

            $body.delegate('a', 'click',linkClick );

            //Animation.init();

		}, 800);
	});

} )( jQuery );