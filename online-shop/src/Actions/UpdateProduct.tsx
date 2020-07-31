import { UPDATE_PRODUCT } from "./Types";

export const updateProduct = (productData) => {
    return {
        type: UPDATE_PRODUCT,
        payload: productData
    }
}