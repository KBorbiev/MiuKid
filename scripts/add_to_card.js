'use strict';
const cardDB = []

function addToCard(el, data) {
    el.preventDefault()
    const currId = el.target.dataset.id
    const d = data.find(p => p.id === +currId)
    cardDB.push(d)
    console.log(cardDB);
    renderCard(cardDB)
}
const cardHtml = item =>`
    <div class="cart__basket-item">
    <div class="cart__basket-top d-flex">
    <i class="fas fa-clipboard-check"></i>
    <img src="${item.img}" class="js-img-url" alt="nameOfBrands">
        <p class="cart__basket-info">
            ${item.name}
        </p>
    </div>
    <div class="cart__basket-bottom">
        <a href="#" class="cart__basket-link">view full</a>
    </div>
    </div>
`
function renderCard(cardDB) {
    const html = cardDB.map(el => cardHtml(el)).join('')
    document.querySelector('.js-show-card').innerHTML = html
}
