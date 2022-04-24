import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

export default function App() {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
    </div>
  )
}
