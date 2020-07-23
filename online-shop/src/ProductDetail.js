import React from 'react';
import './index.css';

class ProductDetail extends React.Component {
    render() {
        // Get the product
        const product = this.props.product;

        // Each product has a name, a category and a price => We'll display these in a <tr>
        return (
            <tr>
                <td className="category">{product.category}</td>
                <td className="name">{product.name}</td>
                <td className="price">{product.price}</td>
            </tr>
        );
    }
}

export default ProductDetail