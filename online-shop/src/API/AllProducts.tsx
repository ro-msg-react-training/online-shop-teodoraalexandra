// First of all, we have to have some hardcoded products
// Here, the products will have a name, a category and a price

const ProductsAPI = {
    products: [
        {number: 1, name: 'Whey Protein', category: 'Protein', price: '100 RON'},
        {number: 2, name: 'Protein Blend', category: 'Protein', price: '120 RON'},
        {number: 3, name: 'Maltodextrin', category: 'Carbohydrates', price: '20 RON'},
        {number: 4, name: 'Dextrose', category: 'Carbohydrates', price: '15 RON'},
        {number: 5, name: 'Glycomaize', category: 'Carbohydrates', price: '100 RON'},
        {number: 6, name: 'Peanut Butter', category: 'Nut Butter', price: '10 RON'},
        {number: 7, name: 'Pistachio Butter', category: 'Nut Butter', price: '45 RON'},
        {number: 8, name: 'T-Shirt', category: 'Clothing', price: '40 RON'},
        {number: 9, name: 'Sport Bra', category: 'Clothing', price: '70 RON'},
        {number: 10, name: 'Leggings', category: 'Clothing', price: '110 RON'}
    ],
    all: function() { return this.products},
    get: function(id) {
        const isProduct = p => p.number === id
        return this.products.find(isProduct)
    }
}

export default ProductsAPI