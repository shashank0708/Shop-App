class CartItem {
    constructor(id, productId, quantity, productPrice, productTitle, sum, imageUrl) {
        this.id = id
        this.productId = productId
        this.imageUrl =imageUrl
        this.quantity = quantity
        this.productPrice = productPrice
        this.productTitle = productTitle
        this.sum = sum
    }
}

export default CartItem