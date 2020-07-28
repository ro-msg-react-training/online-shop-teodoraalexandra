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


const url = 'http://localhost:4000/products';

class ProductPage extends React.Component<any, any> {
    constructor(props) {
        super(props);

        // Create an empty array as the initial state
        this.state = {
            product: [],
        };
    }

    componentDidMount() {
        fetch(url + "/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.setState({ product: data }));
    }

    render() {
        const { product } = this.state;

        // Avoid crashing :)
        if (product.length === 0) {
            return <div>Sorry, but the product was not found</div>
        }

        function addToCart(e) {
            e.preventDefault();
            ProductsInCart.add(product);
            alert("Added to cart successfully!");
        }

        function deleteProduct(e) {
            e.preventDefault();
            if (window.confirm("Are you sure you want to delete this product?")) {
                // Delete from backend
                fetch(url + "/" + product.id, {
                    method: 'DELETE',
                })
                    .then(res => res.text())
                    .then(res => console.log(res))

                // Send a success message
                alert("This product has been deleted successfully!");

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
            </Card>
        );
    }
}

export default ProductPage

