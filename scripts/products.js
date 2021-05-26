'use strict';

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