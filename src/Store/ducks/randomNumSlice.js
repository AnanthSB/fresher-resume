import { createSlice } from "@reduxjs/toolkit";

const randomSlice = createSlice({
    name:'randomNumber',
    initialState:0,
    reducers:{
        getRandomNumber: (state)=> Math.round(Math.random()*100)
    }
});

export const {getRandomNumber} = randomSlice.actions;
export default randomSlice.reducer; // will importing it as randomReducer function in store.js 