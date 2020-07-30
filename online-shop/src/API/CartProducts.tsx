// Initially, the cart is empty

const ProductsInCart = {
    products: [
        { id: 1, name: 'Whey Protein', category: 'Protein', price: '100 RON' },
        { id: 2, name: 'Chocolate Protein', category: 'Protein', price: '120 RON' }
    ],
    all: function() { return this.products},
    // We will use this function from the Product Detail Page
    add: function(product) {
        this.products.push(product)
    },
    // Get only the ids and quantity for making an order
    id: function () { return this.products.map(function(product) {
        return {"productId": product.id, "quantity": product.quantity };});},
}

export default ProductsInCart