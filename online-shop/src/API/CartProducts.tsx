// Initially, the cart is empty

const ProductsInCart = {
    products: [],
    all: function() { return this.products},
    // We will use this function from the Product Detail Page
    add: function(product) {
        this.products.push(product)
    }
}

export default ProductsInCart