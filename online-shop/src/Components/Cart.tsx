import React from 'react';
import ProductDetail from './ProductDetail';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../Styles/index.css';
import 'fontsource-roboto';
import ProductsInCart from "../API/CartProducts";
import {Button, Typography} from "@material-ui/core";


const url = 'http://localhost:4000/orders';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// The difference between Cart and ProductList is in map function
// In cart we will have to get the ProductsInCart, not ProductsAPI where we have all products
function Cart(prop) {
    const classes = useStyles();

    const productDetail = ProductsInCart.all().map((product) =>
        <ProductDetail product = {product}/>
    );

    function checkout(e) {
        e.preventDefault();
        const request = {
            "customer": "doej",
            "products": ProductsInCart.id()
        }

        // Create a new order on the backend
        // POST request using fetch with error handling
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };

        fetch(url, requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    console.log("Everything is fine.");
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        // Send a success message
        alert("Your order has been placed successfully!");

        // Redirect user to products main page
        window.location.href = "../products";
    }

    return (
        <TableContainer component={Paper}>
            <Typography variant="h2" className="inline">Cart</Typography>
            <Button size="large" className="right" onClick={checkout}>Checkout</Button>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Product name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell colSpan={2}>Update quantity</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productDetail}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Cart