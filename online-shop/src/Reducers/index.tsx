import { combineReducers } from "redux";
import fetchProductReducer from './FetchProductsReducer';
import addProductReducer from "./AddProductReducer";
import updateProductReducer from "./UpdateProductReducer";
import quantityReducer from "./QuantityReducer";

export default combineReducers({
    products: fetchProductReducer,
    addedProduct: addProductReducer,
    updatedProduct: updateProductReducer,
    quantity: quantityReducer
})