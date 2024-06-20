$(document).ready(function ($) {
    "use strict";


    //introduction_video magnificPopup
    $('#introduction_video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1',
                },
            },

            srcAction: 'iframe_src',
        }
    });

//plane slick slide

    $('.plane_wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // at 1024px and below
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600, // at 600px and below
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //landing page slick slide
    $('.page_slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // at 1024px and below
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600, // at 600px and below
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // client_say_active
    $('.client_say_active').owlCarousel({
        loop: true,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })



    // sponsor_active
    $('.sponsor_active').owlCarousel({
        loop: true,
        margin: 20,
        navText: false,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            767: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    })






}(jQuery));

//    // sponsor_active
//    jQuery('.service_scroll').owlCarousel({
//     center: true,
//     items:3,
//     loop:true,
//     margin:30,
//     nav:false,
//     dots:true,
//     autoplay: true,
//     slideTransition: 'linear',
//     autoplayTimeout: 6000,
//     autoplaySpeed: 6000,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3
//         }
//     }
// });