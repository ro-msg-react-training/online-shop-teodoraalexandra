import { UPDATE_PRODUCT } from "../Actions/Types";
import productsUrl from "../API/ProductsUrl";

export interface UpdateProductState {
    isLoading: boolean,
    updatedProduct: [],
}

const initialState: UpdateProductState = {
    isLoading: true,
    updatedProduct: []
}

let productAPI;
export const updateProduct = (productData) => {
    const fullUrl = productsUrl + '/' + parseInt(productData.id);
    fetch(fullUrl, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
        .then(response => console.log(response))
        .then(product => productAPI = product);
}

export const UpdateProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT:
            updateProduct(action.payload)
            return {
                ...state,
                updatedProduct: productAPI
            }
        default:
            return state;
    }
}