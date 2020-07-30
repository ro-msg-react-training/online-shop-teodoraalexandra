import { NEW_PRODUCT } from "../Actions/Types";

export interface AddProductState {
    isLoading: boolean,
    addedProduct: [],
}

const initialState: AddProductState = {
    isLoading: true,
    addedProduct: []
}

export const AddProductReducer = (state = initialState, action) => {
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