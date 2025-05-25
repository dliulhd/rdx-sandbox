import {createSlice} from '@reduxjs/toolkit';

interface CounterState {
  value: number;            // TypeScript's 'number' type covers all numbers (integers and floats)
  incrementAmount: number;  // but you can enforce integer logic in your reducers/actions
}


const initialState: CounterState = {value:0,incrementAmount: 0};

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setIncrementAmount: (state, action) => {
            state.incrementAmount = action.payload; 
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }

});

export const 
    {
        increment, 
        decrement, 
        setIncrementAmount, 
        incrementByAmount
    } = counterSlice.actions;
export default counterSlice.reducer;
// This code defines a Redux slice for a counter feature.