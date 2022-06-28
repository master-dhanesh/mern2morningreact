import { createSlice } from "@reduxjs/toolkit";

// action = {type: 'action/type' , payload: 'data you pass'}
const initialState = {
    value: 1,
    a: 1,
    b: 2,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        changeByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, changeByAmount } = counterSlice.actions;

export default counterSlice.reducer;

export const AsyncChangeByValue = (amt) => (dispatch, getState) => {
    console.log(getState());
    setTimeout(() => {
        dispatch(changeByAmount(amt));
    }, 2000);
};
