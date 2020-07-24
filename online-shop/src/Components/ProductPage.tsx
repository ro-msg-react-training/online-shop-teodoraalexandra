import React from 'react';
import '../Styles/index.css';
import 'fontsource-roboto';
import { Button } from "@material-ui/core";
import { Typography, Container } from "@material-ui/core";
import ProductsAPI from "../API/AllProducts";
import ProductsInCart from "../API/CartProducts";
import { Link } from 'react-router-dom'

// TASK: Migrate your React component(s) from before from using class-based components
// to using hooks inside functional components.

const ProductPage = (props) => {
    const product = ProductsAPI.get(
        parseInt(props.match.params.number, 10)
    )

    if (!product) {
        return <div>Sorry, but the product was not found</div>
    }

    function addToCart(e) {
        e.preventDefault();
        ProductsInCart.add(product);
        alert("Added to cart successfully!");
    }

    return (
        <Container>
            <b>Product detail page</b>
            <Typography variant="h2" color="primary"> Name: {product.name} </Typography>
            <Typography variant="h4"> Category: {product.category} </Typography>
            <Typography variant="h4" color="primary"> Price: {product.price} </Typography>
            <Button onClick={addToCart}>Add</Button>
            <Link to='/products'><Button>Back</Button></Link>
        </Container>
    )
}
export default ProductPage