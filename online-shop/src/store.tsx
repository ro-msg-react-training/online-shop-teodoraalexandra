import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import { FetchProductsState } from "./Reducers/FetchProductsReducer";
import { AddProductState } from "./Reducers/AddProductReducer";
import { UpdateProductState } from "./Reducers/UpdateProductReducer";
import { QuantityState } from "./Reducers/QuantityReducer";

const middleware = [thunk];
export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export interface AppState {
    products: FetchProductsState,
    addedProduct: AddProductState,
    updatedProduct: UpdateProductState,
    quantity: QuantityState
}