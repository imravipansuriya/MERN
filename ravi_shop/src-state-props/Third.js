import React from 'react'

export default function Third({setCounter}) {
  return (
    <div>
        <button onClick={()=>{
            setCounter(counter => counter + 1)
        }}>INCREMENT</button>
        <button
        onClick={()=>{
            setCounter(counter => counter - 1)
        }}>DECREMENT</button>
    </div>
  )
}
