import { UPDATE_PRODUCT } from "./Types";
import productsUrl from "../API/ProductsUrl";

export const updateProduct = (productData) => dispatch  => {
    const fullUrl = productsUrl + '/' + parseInt(productData.id);
    fetch(fullUrl, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
        .then(response => console.log(response))
        .then(product => dispatch({
            type: UPDATE_PRODUCT,
            payload: product
        }));
}