import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
    <Switch>
        <Route exact path='/roster' component={ProductList}/>
        <Route path='/roster/:number' component={ProductDetail}/>
    </Switch>
)


export default Roster
