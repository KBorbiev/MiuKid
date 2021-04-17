'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const $slider = $('.js-featured-slider');
    if ($slider) {
        $slider.owlCarousel({
            nav: true,
            items: 5,
            margin: 30,
            loop: true,
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
    
    // с помощью цикла сделайте перебор товаров
    const $featuredItem = document.querySelectorAll('.js-featured-item')
    if($featuredItem) {
        $featuredItem.forEach(item => {
            // по клику получить название товара с помощью js
            const $featuredName = item.querySelector('.js-featured-name').textContent
            item.querySelector('.js-get-name').addEventListener('click', el=> getName(el, $featuredName))

            // по клику получить цену товара с помощью js
            const price = item.querySelector('.js-featured-price').textContent
            item.querySelector('.js-get-price').addEventListener('click', el=> getPrice(el, price))

            // по клику получить адрес картинки с помощью js
            const imgURL = item.querySelector('.js-img-url').src
            item.querySelector('.js-get-img-url').addEventListener('click', el=> getImgUrl(el, imgURL))
        })
    }
    function getName(el, name) {
        el.preventDefault()
        console.log(`Название товара: ${name}`);
    }
    function getPrice(el, price) {
        el.preventDefault()
        console.log(`Цена товара: ${price}`);
    }
    function getImgUrl(el, imgURL) {
        el.preventDefault()
        console.log(`адрес картинки: ${imgURL}`);
    }

});

