import {INCREMENT, DECREMENT } from "./Types";

export const incrementQuantity = (id) => {
    return {
        type: INCREMENT,
        id: id
    }
}

export const decrementQuantity = (id) => {
    return {
        type: DECREMENT,
        id: id
    }
}