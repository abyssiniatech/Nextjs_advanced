   "use client"

import { useState } from "react"

   
   // counter app by using useState hook
   // import useState from react
   // import Counter from './Counter';
// style the counter app by using tailwind css
   // create a button to increment the counter
   // type the counter value in a heading tag
const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const [login, setLogin] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
      
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => setShow(!show)}
        >
          {show ? 'Hide Counter' : 'Show Counter'}
        </button>
        {show && (
          <section className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold mb-4">Counter App</h1>
            <p className="text-lg">Count: {count}</p>
          </section>
        )}
        {login ? (
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <p className="text-lg">Count: {count}</p>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

         <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

         <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
          
      </section>
        ) : (
            <section className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold mb-4">Please Login to access the Counter App</h1>
                <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setLogin(true)}
        >
            Login
        </button>
            </section>
        )}
    </div>
  )
}

export default Counter
