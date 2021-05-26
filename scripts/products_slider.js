'use strict';
function sliderProducts() {
    const $slider = $('.js-featured-slider');
    if ($slider) {
        $slider.owlCarousel({
            nav: true,
            items: 5,
            margin: 30,
            loop: false,
            dots: false,
            navContainerClass: 'owl-nav nav-featured',
            navText: ["<span class='fa fa-angle-left circle'></span>", "<span class='fa fa-angle-right circle'></span>"],
            autoHeight: true,
            responsive:{
                1200:{
                    items: 5,
                },
                768: {
                    items: 3
                },
                425: {
                    items: 2,
                    margin: 15
                },
                320: {
                    items: 1,
                    margin: 10
                }
            }
        });
    }
}