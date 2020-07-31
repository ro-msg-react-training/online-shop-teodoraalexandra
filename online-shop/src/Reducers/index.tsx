import { combineReducers } from "redux";
import { FetchProductsReducer } from './FetchProductsReducer';
import { AddProductReducer } from "./AddProductReducer";
import { UpdateProductReducer } from "./UpdateProductReducer";
import { QuantityReducer } from "./QuantityReducer";

export default combineReducers({
    products: FetchProductsReducer,
    addedProduct: AddProductReducer,
    updatedProduct: UpdateProductReducer,
    quantity: QuantityReducer
})