import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../feature/CounterSlice";
export default configureStore({
    reducer :{
        count : CounterSlice
    }
})