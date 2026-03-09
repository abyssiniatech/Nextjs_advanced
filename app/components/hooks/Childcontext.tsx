   "use client"


import { useContext } from 'react'
import { usercontext } from './Parentstate'
const Childcontext = () => {
    // child context
    const  user = useContext(usercontext)
  return (
    <div className="bg-slate-800 text-white min-h-screen p-4 flex flex-col justify-center items-center gap-2   my-4">
      <p className='text-2xl'>my name is :{user}</p>
    </div>
  )
}

export default Childcontext
