// Initially, the cart is empty

const ProductsInCart = {
    products: [],
    all: function() { return this.products},
    // We will use this function from the Product Detail Page
    add: function(product) {
        this.products.push(product)
    },
    // Get only the ids and quantity for making an order
    id: function () { return this.products.map(function(product) {
        return {"productId": product.id, "quantity": 1};});}
}

export default ProductsInCart