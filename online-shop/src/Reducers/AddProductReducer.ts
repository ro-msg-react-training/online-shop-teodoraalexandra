import { NEW_PRODUCT } from "../Actions/Types";

const initialState = {
    addedProduct: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_PRODUCT:
            return {
                ...state,
                addedProduct: action.payload
            };
        default:
            return state;
    }
}