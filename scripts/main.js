'use strict';

document.addEventListener('DOMContentLoaded', function() {
    $('.js-featured-slider').owlCarousel({
        nav: true,
        items: 5,
        margin: 30,
        loop: true,
        dots: false,
        navContainerClass: 'owl-nav nav-featured',
        navText: ["<span class='fa fa-angle-left circle'></span>", "<span class='fa fa-angle-right circle'></span>"],
        responsive:{
            1200:{
                items: 5,
            },
            768: {
                items: 3
            }
        }
    });
});

