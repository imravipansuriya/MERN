import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import First from './First'
import Second from './Second'

export default function App() {
  return (
    <div>
      App.js
      <Second />
      <First />
    </div>
  )
}


// npm install redux@next react-redux@next