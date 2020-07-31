import { INCREMENT, DECREMENT } from "../Actions/Types";

export interface QuantityState {
    isLoading: boolean,
    quantity: number[],
}

const initialState: QuantityState = {
    isLoading: true,
    quantity: []
}

export const QuantityReducer = (state = initialState, action) => {
    const stateQuantityCopy = state.quantity;

    switch(action.type) {
        case INCREMENT:
            if (isNaN(stateQuantityCopy[action.id - 1])) {
                stateQuantityCopy[action.id - 1] = 1;
            } else {
                stateQuantityCopy[action.id - 1] = stateQuantityCopy[action.id - 1] + 1
            }

            return {
                ...state,
                quantity: stateQuantityCopy
            };

        case DECREMENT:
            if (isNaN(stateQuantityCopy[action.id - 1])) {
                stateQuantityCopy[action.id - 1] = 1;
            } else {
                stateQuantityCopy[action.id - 1] = stateQuantityCopy[action.id - 1] - 1
            }

            return {
                ...state,
                quantity: stateQuantityCopy
            };

        default:
            return state;
    }
}
