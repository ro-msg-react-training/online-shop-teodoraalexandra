import { createStore, applyMiddleware } from "redux";
import rootReducer from './Reducers';
import { FetchProductsState } from "./Reducers/FetchProductsReducer";
import { AddProductState } from "./Reducers/AddProductReducer";
import { UpdateProductState } from "./Reducers/UpdateProductReducer";
import { QuantityState } from "./Reducers/QuantityReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export interface AppState {
    products: FetchProductsState,
    addedProduct: AddProductState,
    updatedProduct: UpdateProductState,
    quantity: QuantityState
}