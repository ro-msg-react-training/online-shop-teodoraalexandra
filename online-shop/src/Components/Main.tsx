import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product';
import Cart from './Cart';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /products
// and /cart routes will match any pathname that starts
// with /products or /cart. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/products' component={Product}/>
            <Route path='/cart' component={Cart}/>
        </Switch>
    </main>
)

export default Main
