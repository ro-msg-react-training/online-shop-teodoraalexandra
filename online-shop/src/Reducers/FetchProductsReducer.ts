import {FETCH_PRODUCTS } from "../Actions/Types";

export interface FetchProductsState {
    isLoading: boolean,
    allProducts: [],
}

const initialState: FetchProductsState = {
    isLoading: true,
    allProducts: []
}

export const FetchProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            };

        default:
            return state;
    }
}