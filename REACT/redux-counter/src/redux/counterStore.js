import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.js";


const counterStore = configureStore({
    reducer:{
        counterReducer:counterSlice
    }
})


export default counterStore