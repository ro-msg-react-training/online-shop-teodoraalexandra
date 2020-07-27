import React from 'react';
import ProductDetail from './ProductDetail';
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


const url = 'http://localhost:4000/products';

//TODO: find a solution for these <any>s
class ProductList extends React.Component<{}, any> {
    constructor(props) {
        super(props);

        // Create an empty array as the initial state
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ products: data }));
    }

    render() {
        const { products } = this.state;

        // Using the map function, we will get all the products from the array
        const productDetail = products.map((product) =>
           <ProductDetail product = {product}/>
        );

        return (
            <TableContainer component={Paper}>
                <Typography variant="h2">Products</Typography>
                <Table aria-label="simple table">
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
}

export default ProductList