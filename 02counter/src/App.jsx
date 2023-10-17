import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 5;

  // const addValue = () => {
  //   if(counter < 20)
  //     setCounter(counter + 1)
  // }

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    if(counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
    <h1>React with PM</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
