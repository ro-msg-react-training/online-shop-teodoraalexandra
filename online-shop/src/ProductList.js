import React from 'react';
import ProductDetail from './ProductDetail';
import './index.css';

class ProductList extends React.Component {
    render() {
        const products = this.props.products;
        const productDetail = products.map((product) =>
            <ProductDetail product={product}/>
        );

        return (
            <table>
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th colSpan="2">Update quantity</th>
                </tr>
                </thead>
                <tbody>
                {productDetail}
                </tbody>
            </table>
        );
    }
}

export default ProductList