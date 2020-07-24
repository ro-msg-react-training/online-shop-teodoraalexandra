

const ProductsInCart = {
    products: [],

    all: function() { return this.products},
    add: function(product) {
        this.products.push(product)
    }
}

export default ProductsInCart