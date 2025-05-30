// import { useState } from 'react'
import './App.css';
import Counter from './components/Counter';
import  {AllProducts } from './components/AllProducts';
import  {SpecificProduct } from './components/SpecificProduct';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Counter />
        <br />
        <SpecificProduct />
        <br />
        <AllProducts />
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
