import {FETCH_PRODUCTS } from "../Actions/Types";
import productsUrl from "../API/ProductsUrl";

export interface FetchProductsState {
    isLoading: boolean,
    allProducts: [],
}

const initialState: FetchProductsState = {
    isLoading: true,
    allProducts: []
}

let productsAPI = []
export const fetchProducts = () => {
    fetch(productsUrl)
      .then(response => response.json())
        .then(products => productsAPI = products)
}

export const FetchProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            fetchProducts();
            return {
                ...state,
                allProducts: productsAPI
            };

        default:
            return state;
    }
}