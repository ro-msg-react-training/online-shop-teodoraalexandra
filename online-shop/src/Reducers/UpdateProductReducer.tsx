import { UPDATE_PRODUCT } from "../Actions/Types";

const initialState = {
    updatedProduct: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PRODUCT:
            return {
                ...state,
                updatedProduct: action.payload
            }
        default:
            return state;
    }
}