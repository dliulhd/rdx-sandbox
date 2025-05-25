// import { useState } from 'react'
import './App.css';
import Counter from './components/Counter';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Counter />
        {/* Uncomment the button below to see the count state in action */}
        {/* This is just an example of using useState, not related to Redux */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </>
  )
}

export default App
