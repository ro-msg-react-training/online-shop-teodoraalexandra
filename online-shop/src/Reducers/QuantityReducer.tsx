import { INCREMENT, DECREMENT } from "../Actions/Types";

const initialState = {
    quantity: []
};

export default function quantityReducer (state = initialState, action) {
    const copy = state.quantity;

    switch(action.type) {
        case INCREMENT:
            if (isNaN(copy[action.id - 1])) {
                copy[action.id - 1] = 1;
            } else {
                copy[action.id - 1] = copy[action.id - 1] + 1
            }

            return {
                ...state,
                quantity: copy
            };

        case DECREMENT:
            if (isNaN(copy[action.id - 1])) {
                copy[action.id - 1] = 1;
            } else {
                copy[action.id - 1] = copy[action.id - 1] - 1
            }

            return {
                ...state,
                quantity: copy
            };

        default:
            return state;
    }
}
