import React from 'react';
import '../Styles/index.css';
import 'fontsource-roboto';
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import ProductsInCart from "../API/CartProducts";
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import productsUrl from "../API/ProductsUrl";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import log from 'loglevel';

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class ProductPage extends React.Component<any, any> {
    constructor(props) {
        super(props);

        // Create an empty array as the initial state
        this.state = {
            product: {},
            openAdd: false,
            openDelete: false,
        };
    }

    componentDidMount() {
        fetch(productsUrl + "/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.setState({ product: data }));
    }

    render() {
        const { product, openAdd, openDelete } = this.state;

        const handleAddClick = () => {
            this.setState({openAdd: true});
        };

        const handleDeleteClick = () => {
            this.setState({openDelete: true});
        }

        const handleAddClose = (event?: React.SyntheticEvent, reason?: string) => {
            if (reason === 'clickaway') {
                return;
            }

            this.setState({openAdd: false});
        };

        const handleDeleteClose = (event?: React.SyntheticEvent, reason?: string) => {
            if (reason === 'clickaway') {
                return;
            }

            this.setState({openDelete: false});
        };

        // Avoid crashing :)
        if (Object.entries(product).length === 0) {
            return <div>Sorry, but the product was not found</div>
        }

        const addToCart = (e) => {
            e.preventDefault();
            ProductsInCart.add(product);
            handleAddClick();
        }

        const deleteProduct = (e) => {
            e.preventDefault();
            if (window.confirm("Are you sure you want to delete this product?")) {
                // Delete from backend
                fetch(productsUrl + "/" + product.id, {
                    method: 'DELETE',
                })
                    .then(res => res.text())
                    .then(res => log.info(res))

                // Send a success message
                handleDeleteClick();

                // Redirect user to products main page
                window.location.href = "../products";
            }
        }

        return (
            <Card >
                <CardContent>
                    <Typography variant="h4" color="primary" >
                        Product details page
                    </Typography>
                    <Typography >
                        <b>Name:</b> {product.name}
                    </Typography>
                    <Typography  color="primary">
                        <b>Price:</b> {product.price}
                    </Typography>
                    <Typography >
                        <b>Category:</b> {product.category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={addToCart}>Add to cart</Button>
                    <Link to='/products' className="link"><Button size="small" color="primary">Go back</Button></Link>
                    <Button size="small" onClick={deleteProduct} >Delete</Button>
                </CardActions>

                <Snackbar open={openAdd} autoHideDuration={6000} onClose={handleAddClose}>
                    <Alert onClose={handleAddClose} severity="success">
                        Added to cart successfully!
                    </Alert>
                </Snackbar>

                <Snackbar open={openDelete} autoHideDuration={6000} onClose={handleDeleteClose}>
                    <Alert onClose={handleDeleteClose} severity="success">
                        Deleted from catalogue successfully!
                    </Alert>
                </Snackbar>

            </Card>
        );
    }
}

export default ProductPage

