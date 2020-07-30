import { UPDATE_PRODUCT } from "../Actions/Types";

export interface UpdateProductState {
    isLoading: boolean,
    updatedProduct: [],
}

const initialState: UpdateProductState = {
    isLoading: true,
    updatedProduct: []
}

export const UpdateProductReducer = (state = initialState, action) => {
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