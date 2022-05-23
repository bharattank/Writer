$(document).ready(function () {

    // toggle nav menu
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('on');
        $('.nav-menu').slideToggle()
    })
   
    // close hamburger menu after click a
    $('.menu li a').on("click", function () {
        $('.menu-toggler').click();
    });


    // Text splitting
    Splitting();

    // pagepiling js intialization.

    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        anchors: ['banner', 'about', 'service', 'portfolio', 'myteam', 'testimonial', 'news', 'contact'],
        afterRender: function () {
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function (index) {
            if (index > 1) {
                $('#pp-nav').removeClass('custom');
            } else {
                $('#pp-nav').addClass('custom');
            }
        }
    });

    // fixed header
    $(window).on('scroll', function (event) {
        headerAffix();
    });
    function headerAffix() {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > $('.header').height()) {
            $('.header').addClass('fixed-top');
        } else {
            $('.header').removeClass('fixed-top');
        }
    }
    headerAffix();

    // nav-menu height

    var windowHeight = $(window).height();
    $(".nav-menu").css("height", windowHeight + 'px');

    $(window).resize(function () {

        var windowHeight = $(window).height();
        $(".nav-menu").css("height", windowHeight + 'px');

    }).resize();

    // isotop js intialization
    $(window).on("load", function () {
        var b = $(".work-filter"),
            c = $("#menu-filter");
        b.isotope({
            filter: "*",
            layoutMode: "masonry",
            animationOptions: {
                duration: 750,
                easing: "linear"
            }
        }), c.find("a").on("click", function () {
            var a = $(this).attr("data-filter");
            return c.find("a").removeClass("active"), $(this).addClass("active"), b.isotope({
                filter: a,
                animationOptions: {
                    animationDuration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), !1
        });

        // testimonial slider
        $('.testimonial-image-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.testimonial-content-slide',
            autoplay: true,
            arrows: false,
            speed: 1000,

        });
        $('.testimonial-content-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.testimonial-image-slide',
            dots: true,
            arrows: true,
            autoplay: true,
            speed: 1000,
            nextArrow: '<i class="fal fa-long-arrow-right slide-arrow next-arrow">',
            prevArrow: '<i class="fal fa-long-arrow-left slide-arrow prev-arrow">',
        });

        // news slider
        $('.news-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            slidesShow: true,
            speed: 1000,
            dots: true,
            arrows: true,
            autoplay: true,
            nextArrow: '<i class="fal fa-long-arrow-right news-slide-arrow news-next-arrow">',
            prevArrow: '<i class="fal fa-long-arrow-left news-slide-arrow news-prev-arrow">',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });

});
