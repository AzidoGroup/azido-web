$(function() {
    var $w = $(window);
    var term = ["var az = require('azido-module'),\n\t^500worker = require('work');",
                "^500var conn = az.connect('45.56.84.8').port(1337);",
                "^500var plan = conn.download(^500'/business-plan.json');",
                "\n\n^500worker.convert(plan, function(money) {\n\tconsole.log(money);\n}); ^3000// $$$!"];
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
    $('a[href^=#]').click(function(e) {
        e.preventDefault();
        var dest = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(dest).offset().top
        }, 'slow');
    });

    $('.terminal').typed({
        strings: [term.join("\n")],
        typeSpeed: 50,
        contentType: "text",
        showCursor: false,
        loop: false
    });
    // code
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});
