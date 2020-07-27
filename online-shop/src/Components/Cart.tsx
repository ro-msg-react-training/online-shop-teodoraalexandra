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
import {Typography} from "@material-ui/core";

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

    return (
        <TableContainer component={Paper}>
            <Typography variant="h2">Cart</Typography>
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

//TODO: checkout button -> new order on the backend

export default Cart