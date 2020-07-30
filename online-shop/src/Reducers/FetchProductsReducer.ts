import {FETCH_PRODUCTS } from "../Actions/Types";

const initialState = {
    allProducts: []
}

export default function (state = initialState, action) {
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