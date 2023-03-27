import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,add } from './CounterSlice'

function Counter() {
    const num = useSelector((state)=>{return state.count})
    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <p>{num.Number}</p>
        <button onClick={()=>dispatch(decrement())}>Increment</button>
        <button onClick={()=>dispatch(add(100))}>add</button>
    </div>
  )
}

export default Counter