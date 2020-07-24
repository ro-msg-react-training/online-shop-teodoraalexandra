import React from 'react';
import ProductDetail from './ProductDetail';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from "@material-ui/core";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../Styles/index.css';
import 'fontsource-roboto';
import ProductsAPI from "../API/AllProducts";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function ProductList(prop) {
    const classes = useStyles();

    // Using the map function, we will get all the products from the array
    const productDetail = ProductsAPI.all().map((product) =>
            <ProductDetail product = {product}/>
    );

    return (
        <TableContainer component={Paper}>
            <Typography variant="h2">Products</Typography>
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

/*class ProductList extends React.Component {
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
                    <th>Quantity</th>
                    <th colSpan="2">Update quantity</th>
                </tr>
                </thead>
                <tbody>
                {productDetail}
                </tbody>
            </table>
        );
    }
}*/

export default ProductList