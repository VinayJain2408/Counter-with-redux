import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name:'count',
    initialState:{Number:0},
    reducers:{
        increment:(state)=>{
            state.Number ++
        },
        decrement:(state)=>{
            state.Number --
        },
        add:(state,action)=>{
            state.Number+=action.payload
        }
    }
  })

  export const {increment, decrement,add} = CounterSlice.actions
  export default CounterSlice.reducer