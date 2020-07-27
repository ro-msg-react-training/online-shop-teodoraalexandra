// First of all, we have to have some hardcoded products
// Here, the products will have a name, a category and a price

const ProductsAPI = {
    products: [
        {id: 1, name: 'Whey Protein', category: 'Protein', price: '100 RON', image: 'image1.jpg', description: 'description_1'},
        {id: 2, name: 'Protein Blend', category: 'Protein', price: '120 RON', image: 'image1.jpg', description: 'description_1'},
        {id: 3, name: 'Maltodextrin', category: 'Carbohydrates', price: '20 RON', image: 'image1.jpg', description: 'description_1'},
        {id: 4, name: 'Dextrose', category: 'Carbohydrates', price: '15 RON', image: 'image1.jpg', description: 'description_1'},
        {id: 5, name: 'Glycomaize', category: 'Carbohydrates', price: '100 RON', image: 'image1.jpg', description: 'description_1'},
        {id: 6, name: 'Peanut Butter', category: 'Nut Butter', price: '10 RON', image: 'image1.jpg', description: 'description_1'},
        {id: 7, name: 'Pistachio Butter', category: 'Nut Butter', price: '45 RON', image: 'image1.jpg', description: 'description_1'},
        {id: 8, name: 'T-Shirt', category: 'Clothing', price: '40 RON', image: 'image1.jpg', description: 'description_1'},
        {id: 9, name: 'Sport Bra', category: 'Clothing', price: '70 RON', image: 'image1.jpg', description: 'description_1'},
        {id: 10, name: 'Leggings', category: 'Clothing', price: '110 RON', image: 'image1.jpg', description: 'description_1'}
    ],
    all: function() { return this.products},
    get: function(id) {
        const isProduct = p => p.id === id
        return this.products.find(isProduct)
    }
}

export default ProductsAPI