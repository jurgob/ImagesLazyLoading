var linkClick = function(e){

    e.preventDefault(); 
    var $link = $(this); 
    var link_href = $link.attr('href'); 
    $link.addClass('link-loading');  

    var changePage = function (pageUrl)
    { 


        var $preContentArea = $body.find('#skrollr-prebody');
        var $contentArea = $body.find('#skrollr-body');
        var $content= $contentArea.find(">*[data-page-url='"+pageUrl+"']");
        var $preContent = $preContentArea.find(">*[data-page-url='"+pageUrl+"']");

        var pageTitle = $content.attr('data-page-title');


        document.title = pageTitle;


        $preContentArea.find('[data-page-url]').hide();
        $contentArea.find('[data-page-url]').hide();

        console.log('$content.length: '+$contentArea.find('[data-page-url]').length);
        console.log('$content.length: '+pageUrl);

        $content.show();
        $preContent.show();


        window.history.pushState({"html": $('html')[0].outerHTML , "pageTitle": pageTitle}, "", pageUrl); 
        $body.find('.skrollr-prebody').imagesLoaded(function(){
            console.log('REFRESH SCROLL!!');

            s.refresh();

            console.log('REFRESH SCROLL AF!! '+s);

            //setTimeout(s.refresh, 2000);
             
             $(".navbar-toggle.expanded").click();
        });

    }; 
     



    $.get(
        link_href,
        function (data)
        { 
            var $data = $('<div>' + data + '</div>'); 
            var pageTitle = $data.find('head title').text(); 
            var content = $data.find('.skrollr-body').html(); 
            //console.log('precontent ' + $data.find('#skrollr-prebody').length); 
            var preContent = $data.find('#skrollr-prebody').html(); 

            var $preContentArea = $body.find('#skrollr-prebody');
            var $contentArea = $body.find('#skrollr-body');

            if( $contentArea.find('>[data-page-url]').length === 0  )
            {
                $contentArea.empty();
                $preContentArea.empty();
            }


            var $newContent = $('<div/>').attr('data-page-url', link_href).attr('data-page-title', pageTitle).html(content);
            $contentArea.append($newContent);

            var $newPreContent = $('<div/>').attr('data-page-url', link_href).html(preContent);
            $preContentArea.html($newPreContent.html() );
            //$preContentArea.append($newPreContent );


            changePage(link_href);  
            $link.removeClass('link-loading'); 
        }
    ); 
};

$body.delegate('a', 'click',linkClick );