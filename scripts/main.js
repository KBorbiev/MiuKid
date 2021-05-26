'use strict';

document.addEventListener('DOMContentLoaded', function() {
    createProducts().then(data => {
        sliderProducts()
        document.querySelectorAll('.js-add-to-card').forEach(el => {
            el.addEventListener('click', el=> addToCart(el, data))
        })
    })
    
});

