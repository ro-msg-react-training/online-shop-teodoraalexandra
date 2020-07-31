import React from 'react';
import ProductDetails from './ProductDetails';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import {Button, Typography} from "@material-ui/core";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../Styles/index.css';
import 'fontsource-roboto';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchProducts } from "../Actions/FetchProducts";
import {AppState } from "../store";

type Props = {
    products: [],
    isLoading: boolean,
    setLoadingStatus: (loadingStatus: boolean) => void,
    setProducts: (products: []) => void,
}

class ProductList extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchProducts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newProduct) {
            this.props.products.push(nextProps.newProduct);
        }
    }

    render() {
        const { products } = this.props;

        // Using the map function, we will get all the products from the array
        const productDetails = products.map((product) =>
           <ProductDetails key={product.id} product={product}/>
        );

        return (
            <TableContainer component={Paper}>
                <Typography variant="h2" className="inline">Products</Typography>

                <Link to='/addProduct' className="link">
                    <Button size="large" className="right" >Add new product</Button>
                </Link>

                <Table aria-label="simple table" className="productsTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Product name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productDetails}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
   products: state.products.allProducts,
    isLoading: state.products.isLoading
});
export default connect(mapStateToProps, {fetchProducts})(ProductList)