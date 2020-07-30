import { NEW_PRODUCT } from "./Types";
import productsUrl from "../API/ProductsUrl";

export const createProduct = (productData) => dispatch  => {
    fetch(productsUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
        .then(response => response.json())
        .then(product => dispatch({
            type: NEW_PRODUCT,
            payload: product
        }));
}