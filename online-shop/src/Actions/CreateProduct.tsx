import { NEW_PRODUCT } from "./Types";

export const createProduct = (productData) => {
    return {
        type: NEW_PRODUCT,
        payload: productData
    }
}