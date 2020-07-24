import React, { useState } from 'react';
import '../Styles/index.css';
import 'fontsource-roboto';
import { Button } from "@material-ui/core";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from "react-router-dom";

// TASK: Migrate your React component(s) from before from using class-based components
// to using hooks inside functional components.

function ProductDetail(props) {
    // Declare a new state variable, which we'll call "quantity"
    const [quantity, setQuantity] = useState(1);
    const product = props.product;

    return (
        <TableRow>
            <TableCell className="category">{product.category}</TableCell>
            <TableCell className="name">{product.name}</TableCell>
            <TableCell className="price">{product.price}</TableCell>
            <TableCell className="quantity">{quantity}</TableCell>
            <TableCell className="update">
                <Button color="primary" onClick={() =>
                    setQuantity(quantity - 1)}> -
                </Button>
            </TableCell>
            <TableCell className="update">
                <Button color="primary" onClick={() =>
                    setQuantity(quantity + 1)}> +
                </Button>
            </TableCell>
            <TableCell>
                <Link to={`/products/${product.number}`} className="link">
                    <Button color="primary">Details</Button>
                </Link>
            </TableCell>
        </TableRow>
    );
}

/*class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        // Create a quantity state which we should be able to modify using + and - buttons
        this.state = {
            quantity: 1
        };
    }

    render() {
        // Get the product
        const product = this.props.product;

        // Each product has a name, a category and a price => We'll display these in a <tr>
        // Add 2 new buttons (+ and -) which will modify the quantity state
        return (
            <tr>
                <td className="category">{product.category}</td>
                <td className="name">{product.name}</td>
                <td className="price">{product.price}</td>
                <td className="quantity">{this.state.quantity}</td>
                <td className="update">
                    <button onClick={() =>
                        this.setState({ quantity: this.state.quantity - 1})}> -
                    </button>
                </td>
                <td className="update">
                    <button onClick={() =>
                        this.setState({ quantity: this.state.quantity + 1})}> +
                    </button>
                </td>
            </tr>
        );
    }
}*/

export default ProductDetail