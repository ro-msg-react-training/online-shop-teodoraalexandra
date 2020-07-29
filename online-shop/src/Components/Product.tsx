import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";

// The Product component matches one of two different routes depending on the full pathname
const Product = () => (
    <Switch>
        <Route exact path='/products' component={ProductList}/>
        <Route path='/products/:id' component={ProductPage}/>
    </Switch>
)

export default Product
