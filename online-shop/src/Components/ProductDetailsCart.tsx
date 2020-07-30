import React  from 'react';
import 'fontsource-roboto';
import { Button } from "@material-ui/core";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../Actions/QuantityActions";
import store from "../store";

class ProductDetailsCart extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.incrementQty = this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
    }

    incrementQty = (id) => {
        this.props.incrementQuantity(id);
    }

    decrementQty = (id) => {
        this.props.decrementQuantity(id);
    }

    componentDidMount(){
        store.subscribe( this.forceUpdate.bind(this) );
    }

    render() {
        // Get the product
        const { id, name, category, price } = this.props.product;
        const { quantity } = this.props;

        // Each product has a name, a category and a price => We'll display these in a <tr>
        // Add 2 new buttons (+ and -) which will modify the quantity state
        return (
            <TableRow>
                <TableCell className="category">{category}</TableCell>
                <TableCell className="name">{name}</TableCell>
                <TableCell className="price">{price}</TableCell>
                <TableCell className="quantity">{quantity[id - 1]}</TableCell>
                <TableCell className="update">
                    <Button color="primary" onClick={() => this.decrementQty(id)}> -
                    </Button>
                </TableCell>
                <TableCell className="update">
                    <Button color="primary" onClick={() => this.incrementQty(id)}> +
                    </Button>
                </TableCell>
                <TableCell>
                    <Link to={`/products/${id}`} className="link">
                        <Button color="primary">Details</Button>
                    </Link>
                </TableCell>
            </TableRow>
        );
    }
}

const mapStateToProps = state => ({
    quantity: state.quantity.quantity,
});
export default connect(mapStateToProps, { incrementQuantity, decrementQuantity })(ProductDetailsCart);