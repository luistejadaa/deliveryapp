import {createSlice} from '@reduxjs/toolkit';
import {CustomerOrderStatus} from '../models';

/**
 * Defines the initial state and reducers for the order slice of the Redux store.
 */
const orderSelice = createSlice({
    name: 'orderSelice',
    initialState: {
        orderStatus: null as CustomerOrderStatus | null,
    },
    reducers: {
        /**
         * Updates the order status in the store.
         * @param state - The current state of the order slice.
         * @param action - The action containing the new order status.
         */
        updateOrderStatus(state, action) {
            state.orderStatus = action.payload;
        },
        /**
         * Clears the order status in the store.
         * @param state - The current state of the order slice.
         */
        clearOrder(state) {
            state.orderStatus = null;
        },
    },
});

/**
 * Exports the order slice's reducer and actions for use in the Redux store.
 */
const orderReducer = orderSelice.reducer;
export const {clearOrder, updateOrderStatus} = orderSelice.actions;
export {orderReducer};
