import { NEW_PRODUCT } from "../Actions/Types";
import productsUrl from "../API/ProductsUrl";

export interface AddProductState {
    isLoading: boolean,
    addedProduct: [],
}

const initialState: AddProductState = {
    isLoading: true,
    addedProduct: []
}

let productAPI = {}
export const addNewProduct = (productData) => {
    fetch(productsUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
        .then(response => response.json())
        .then(product => productAPI = product);
}

export const AddProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_PRODUCT:
            addNewProduct(action.payload)
            return {
                ...state,
                addedProduct: productAPI
            };
        default:
            return state;
    }
}