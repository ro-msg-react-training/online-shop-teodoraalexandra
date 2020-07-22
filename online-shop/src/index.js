import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// TASK: Create a new React Component for displaying a single product's details.
class ProductDetail extends React.Component {
    render() {
        // Get the product
        const product = this.props.product;

        // Each product has a name, a category and a price => We'll display these in a <tr>
        return (
            <tr>
                <td className="category">{product.category}</td>
                <td className="name">{product.name}</td>
                <td className="price">{product.price}</td>
            </tr>
        );
    }
}

// TASK: Create an React component for displaying a list of products. Hint: use the .map call on the array of products.
class ProductList extends React.Component {
    render() {
        const products = this.props.products;
        const productDetail = products.map((product) =>
                <ProductDetail product={product}/>
            );

        return (
            <table>
                <thead>
                <tr>
                  <th>Category</th>
                  <th>Product name</th>
                  <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {productDetail}
                </tbody>
            </table>
        );
    }
}

// First of all, we have to have some hardcoded products
// Here, the products will have a name, a category and a price
const products = [
    {name: 'Whey Protein', category: 'Protein', price: '100 RON'},
    {name: 'Protein Blend', category: 'Protein', price: '120 RON'},
    {name: 'Maltodextrin', category: 'Carbohydrates', price: '20 RON'},
    {name: 'Dextrose', category: 'Carbohydrates', price: '15 RON'},
    {name: 'Glycomaize', category: 'Carbohydrates', price: '100 RON'},
    {name: 'Peanut Butter', category: 'Nut Butter', price: '10 RON'},
    {name: 'Pistachio Butter', category: 'Nut Butter', price: '45 RON'},
    {name: 'T-Shirt', category: 'Clothing', price: '40 RON'},
    {name: 'Sport Bra', category: 'Clothing', price: '70 RON'},
    {name: 'Leggings', category: 'Clothing', price: '110 RON'}
];

ReactDOM.render(
    <div className="container">
        <h1>Products</h1>
        <ProductList products = {products} />
    </div>,
    document.getElementById('root')
);