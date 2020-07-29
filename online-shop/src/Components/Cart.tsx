import React from 'react';
import ProductDetails from './ProductDetails';
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
import urlOrders from "../API/OrdersUrl";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import log from 'loglevel';


const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// The difference between Cart and ProductList is in map function
// In cart we will have to get the ProductsInCart, not ProductsAPI where we have all products
const Cart = (prop) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const productDetails = ProductsInCart.all().map((product) =>
        <ProductDetails product = {product}/>
    );

    const request = {
        'customer': "doej",
        products: ProductsInCart.id()
    }

    // Create a new order on the backend
    // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
    };

    const checkout = () => {
        fetch(urlOrders, requestOptions)
            .then(response => response.status)
            .then(data => {
                log.info("Success: ", data);
            })
            .catch((error) => {
                log.error("Error: ", error);
            });

        // Send a success message
        handleClick();
    }

    return (
        <TableContainer component={Paper}>
            <Typography variant="h2" className="inline">Cart</Typography>
            <Button size="large" className="right" onClick={checkout}>Checkout</Button>
            <Table className="productsTable" aria-label="simple table">
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
                    {productDetails}
                </TableBody>
            </Table>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Your order has been placed successfully!
                </Alert>
            </Snackbar>

        </TableContainer>
    );
}

export default Cart