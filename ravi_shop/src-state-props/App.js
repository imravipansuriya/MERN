import React from 'react'
import First from './First'
import Second from './Second'

export default function App() {

  const [counter, setCounter] = React.useState(10);

  return (
    <div>
      App
      <Second counter={counter} />
      <First setCounter={setCounter} />
    </div>
  )
}
