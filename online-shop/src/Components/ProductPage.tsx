import React from 'react';
import '../Styles/index.css';
import 'fontsource-roboto';
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import ProductsAPI from "../API/AllProducts";
import ProductsInCart from "../API/CartProducts";
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    title: {
        fontSize: 30,
    },
    pos: {
        marginBottom: 12,
    },
});

// TASK: Migrate your React component(s) from before from using class-based components
// to using hooks inside functional components.

const ProductPage = (props) => {
    const classes = useStyles();

    // Get the given product depending on the parameters (the number which is PK)
    const product = ProductsAPI.get(
        parseInt(props.match.params.number, 10)
    )

    // Avoid crashing :)
    if (!product) {
        return <div>Sorry, but the product was not found</div>
    }

    function addToCart(e) {
        e.preventDefault();
        ProductsInCart.add(product);
        alert("Added to cart successfully!");
    }

    return (
        <Card >
            <CardContent>
                <Typography className={classes.title} color="primary" gutterBottom>
                    Product details page
                </Typography>

                <Typography className={classes.pos}>
                    <b>Name:</b> {product.name}
                </Typography>
                <Typography className={classes.pos} color="primary">
                    <b>Price:</b> {product.price}
                </Typography>
                <Typography className={classes.pos}>
                    <b>Category:</b> {product.category}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={addToCart}>Add to cart</Button>
                <Link to='/products' className="link"><Button size="small" color="primary">Go back</Button></Link>
            </CardActions>
        </Card>
    )
}
export default ProductPage

