'use strict';

function addToCart(el, data) {
    el.preventDefault()
    const currId = +el.target.dataset.id
    const newItem = Object.assign({count: 1}, data.find(p => p.id === currId));
    (function() {
        if (cartDB.cart.length > 0) {
            for (let i = 0; i < cartDB.cart.length; i++) {
                if (newItem.id === cartDB.cart[i].id) {
                    cartDB.cart[i].count ++
                } else {
                    const proverka = cartDB.cart.find(p => p.id === newItem.id)
                    if (!Boolean(proverka)) {
                        cartDB.cart.push(newItem)
                        console.log('Такого товара нет в корзине мы его добавили');
                        return
                    }
                }
            }
        } else {
            cartDB.cart.push(newItem)
        }
    })()
    cartDB.count ++
    cartDB.totalPrice += newItem.price
    renderCart()
    renderCartPrice()

}

const cartHtml = item =>`
    <div class="cart__basket-item">
        <div class="cart__basket-img">
            <img src="${item.img}" class="js-img-url" alt="${item.name}">
        </div>
        <div class="cart__basket-info">
            <p class="cart__basket-name">${item.name}</p>
            <p>Price: ${item.price}$</p>
            <p>Count: ${item.count}</p>
            <a href="#" class="cart__basket-link">view full</a>
            <button class="js-delete-cart-item" data-id="${item.id}">Delete</button>
        </div>
    </div>
    </div>
`
function renderCart() {
    const html = cartDB.cart.map(el => cartHtml(el)).join('')
    document.querySelector('.js-show-card').innerHTML = html
    const btns = document.querySelectorAll('.js-delete-cart-item')
    if (btns) {
        btns.forEach(el => {
            el.addEventListener('click', ()=> deletCartItem(el.dataset.id))
        });
    }
}

