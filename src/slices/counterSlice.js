import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementNumber: (state, action) => {
            if(!isNaN(parseInt(action.payload))){
              state.value += parseInt(action.payload);  
            }
        }
    }
})

export const { increment, decrement, incrementNumber } = counterSlice.actions;
export default counterSlice.reducer;