$(function () {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
    ;


    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    ;

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

});

$(document).ready(function () {

    $('.menu-trigger').click(function () {
        $('nav ul').slideToggle(580);
    });
    $(window).resize(function () {
        if ($(window).width() > 650) {
            $('nav ul').removeAttr('style');
        }
    });//end resize


    $(".gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        preload: [1, 3]
    });

    $('.main-slider').owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                loop: false
            }
        }
    });

    $('.reviews-wrapper').owlCarousel({
        items: 1,
        margin: 10
    });
});


$(window).load(function () {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});
