import {INCREMENT, DECREMENT } from "./Types";

export const incrementQuantity = (id) => dispatch => {
    dispatch({
        type: INCREMENT,
        id: id
    })
}

export const decrementQuantity = (id) => dispatch => {
    dispatch({
        type: DECREMENT,
        id: id
    })
}