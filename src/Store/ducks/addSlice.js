import { createSlice } from "@reduxjs/toolkit";


const addSlice = createSlice({
    name:'addSlice',
    initialState:0,
    reducers:{
        addNumber:(state)=>state+5,
        subtractNumber: (state)=> state-5
    }
});

export const {addNumber, subtractNumber} = addSlice.actions;
export default addSlice.reducer; //will be importing as addReducer in store