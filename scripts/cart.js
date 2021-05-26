'use strict';

const cartDB = {
    cart: [],
    count: 0,
    totalPrice: 0
}


const cartPriceHtml = (total, count) => `
    <span>${count}/<span class="cart__price">$${total.toFixed(2)}</span></span>
`
function renderCartPrice() {
    const {count} = cartDB
    const {totalPrice} = cartDB
    if (count >= 0) {
        const html =  cartPriceHtml(totalPrice, count)
        const $cartPrice = document.querySelector('#cartPrice')
        $cartPrice.innerHTML = html
    }
    console.log(cartDB);
}
