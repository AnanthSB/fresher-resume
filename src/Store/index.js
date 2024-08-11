import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ducks/counterSlice";
import addReducer from "./ducks/addSlice";
import randomReducer from "./ducks/randomNumSlice";
const store = configureStore({
  reducer: {
    counterValue: counterReducer, //in counterValue, state of the counterSlice will be stored,
    addNum: addReducer, //in addNum, state of the addSlice will be stored,
    randomNum: randomReducer, //in randomNum, state of the randomNumSlice will be stored.
  },
});

export default store; //stores all slices stateValues
