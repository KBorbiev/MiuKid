function deletCartItem(id) {
    cartDB.cart.find(p => {
        if (p.id === +id) {
            p.count --
            cartDB.count --
            cartDB.totalPrice = cartDB.totalPrice - p.price
        }
    })
    renderCart()
    renderCartPrice()
}
