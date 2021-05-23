'use strict';

document.addEventListener('DOMContentLoaded', function() {
    
    const fetch_db = async ()=> {
        const data = await(await fetch('../db.json')).json()
        return data
    }
    const toHtml = product => {
        return `
            <div class="featured__item js-featured-item">
                <div class="featured__item-top">
                    <img src="${product.img}" class="js-img-url" alt="nameOfBrands">
                    <a href="#" class="quick-show"><i class="fas fa-expand-arrows-alt"></i> Quick view</a>
                    <span class="ribbon new">${product.ribon}</span>
                </div>
                <div class="featured__item-bottom">
                    <a href="#" class="featured__item-info js-featured-name">${product.name}</a>
                    <span class="reviews">
                        <em>6 Review(s)</em>
                    </span>
                    <div class="price">
                        <span class="price__actual js-featured-price">${product.price}</span>
                        <del>${product.oldPrice}</del>
                    </div>
                </div>
                <ul class="featured__item-btn">
                    <li><a href="#" data-id="${product.id}" class="js-add-to-card"><i data-id="${product.id}" class="fa fa-shopping-bag circle"></i></li>
                    <li><a href="#" class="js-get-price"><i class="fa fa-balance-scale circle"></i></a></li>
                    <li><a href="#" class="js-get-img-url"><i class="fa fa-heart circle"></i></a></li>
                </ul>
            </div>
        `
    }
    function renderProduct(data) {
        const point = document.querySelector('.featured__list')
        const html = data.map(el => toHtml(el)).join('')
        point.innerHTML = html
    }

    async function createProducts() {
        const data = await fetch_db()
        renderProduct(data)
        return data
    }
    createProducts().then(data => {
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
        // с помощью цикла сделайте перебор товаров
        document.querySelectorAll('.js-add-to-card').forEach(el => {
            el.addEventListener('click', el=> addToCard(el, data))
        })
        
        const $featuredItem = document.querySelectorAll('.js-featured-item')
        if($featuredItem) {
            $featuredItem.forEach(item => {
                // item.querySelector('.js-add-to-card').addEventListener('click', el=> addToCard(el, data))

                // по клику получить цену товара с помощью js
                const price = item.querySelector('.js-featured-price').textContent
                item.querySelector('.js-get-price').addEventListener('click', el=> getPrice(el, price))

                // по клику получить адрес картинки с помощью js
                const imgURL = item.querySelector('.js-img-url').src
                item.querySelector('.js-get-img-url').addEventListener('click', el=> getImgUrl(el, imgURL))
            })
        }
        function getPrice(el, price) {
            el.preventDefault()
            console.log(`Цена товара: ${price}`);
        }
        function getImgUrl(el, imgURL) {
            el.preventDefault()
            console.log(`адрес картинки: ${imgURL}`);
        }
    })





































    


});

