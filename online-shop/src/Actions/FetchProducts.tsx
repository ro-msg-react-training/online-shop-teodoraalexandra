import { FETCH_PRODUCTS } from "./Types";
import productsUrl from "../API/ProductsUrl";

export const fetchProducts = () => dispatch  => {
    fetch(productsUrl)
        .then(response => response.json())
        .then(products => dispatch({
            type: FETCH_PRODUCTS,
            payload: products
        }));
}