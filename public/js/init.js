$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#menu');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = $("header");
        if (distanceY > shrinkOn) {
            header.addClass("smaller");
            // classie.add(header,"smaller");
        } else {
            if (header.hasClass("smaller")) {
                header.removeClass("smaller");
            }
        }
    });
}
window.onload = init();
