import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './Components/ProductList';
import ProductDetail from "./Components/ProductDetail";
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography, Container } from "@material-ui/core";
import theme from "./Styles/theme";
import App from './Components/App';
import './Styles/index.css';
import 'fontsource-roboto';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

// First of all, we have to have some hardcoded products
// Here, the products will have a name, a category and a price
const ProductsAPI = {
    products: [
        {id: 1, name: 'Whey Protein', category: 'Protein', price: '100 RON'},
        {id: 2, name: 'Protein Blend', category: 'Protein', price: '120 RON'},
        {id: 3, name: 'Maltodextrin', category: 'Carbohydrates', price: '20 RON'},
        {id: 4, name: 'Dextrose', category: 'Carbohydrates', price: '15 RON'},
        {id: 5, name: 'Glycomaize', category: 'Carbohydrates', price: '100 RON'},
        {id: 6, name: 'Peanut Butter', category: 'Nut Butter', price: '10 RON'},
        {id: 7, name: 'Pistachio Butter', category: 'Nut Butter', price: '45 RON'},
        {id: 8, name: 'T-Shirt', category: 'Clothing', price: '40 RON'},
        {id: 9, name: 'Sport Bra', category: 'Clothing', price: '70 RON'},
        {id: 10, name: 'Leggings', category: 'Clothing', price: '110 RON'}
    ],
    all: function() { return this.products},
    get: function(id) {
        const isProduct = p => p.id === id
        return this.products.find(isProduct)
    }
}

export default ProductsAPI

/*<ThemeProvider theme={theme}>
            <Typography color="primary" variant="h3">Products</Typography><br/>
            <ProductList products = {products} />
        </ThemeProvider>*/

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);
