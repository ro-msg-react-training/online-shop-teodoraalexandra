import React from 'react';
import './index.css';

class ProductDetail extends React.Component {
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
}

export default ProductDetail