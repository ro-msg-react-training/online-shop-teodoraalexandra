import React from 'react';
import '../Styles/index.css';
import 'fontsource-roboto';
import { Button } from "@material-ui/core";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from "react-router-dom";

// TASK: Migrate your React component(s) from before from using class-based components
// to using hooks inside functional components.

const ProductDetails = (props) => {
    const { id, name, category, price } = props.product;

    return (
        <TableRow>
            <TableCell className="category">{category}</TableCell>
            <TableCell className="name">{name}</TableCell>
            <TableCell className="price">{price}</TableCell>
            <TableCell>
                <Link to={`/products/${id}`} className="link">
                    <Button color="primary">Details</Button>
                </Link>
            </TableCell>
        </TableRow>
    );
}

export default ProductDetails