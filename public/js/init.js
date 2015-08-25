$(function() {
    var $w = $(window);
    $w.scroll(function() {
        var distanceY = $w.scrollTop() || window.pageYOffset,
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
});
