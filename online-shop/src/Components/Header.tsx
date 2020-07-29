import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, Typography } from '@material-ui/core'

// The Header creates links that can be used to navigate between routes.
// Here we have: home, products and cart
const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Link to='/' className="link">
                <Typography variant="h6" className="active" id="home">Home &nbsp;</Typography>
            </Link>

            <Link to='/products' className="link">
                <Typography variant="h6" id="products">Products &nbsp;</Typography>
            </Link>

            <Link to='/cart' className="link">
                <Typography variant="h6" id="cart">Cart</Typography>
            </Link>
        </Toolbar>
    </AppBar>
)

export default Header