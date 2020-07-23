import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import theme from "./theme";
import './index.css';
import 'fontsource-roboto';

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
    <ThemeProvider theme={theme}>
        <Typography color="primary" variant="h3">Products</Typography><br/>
        <ProductList products = {products} />
    </ThemeProvider>,
    document.getElementById('root')
);
