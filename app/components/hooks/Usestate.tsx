  "use client"
import {useState} from "react"
const Usestate = () => {
    const [count,setCount]=useState<number>(0)
    const [show,setShow] = useState(true);
    const handleshow =()=>{
        setShow(true)
    }
  return (
    <div>
         {
            show && (
         <section>
        <h1 style={{color:count>0 ? "green": count<0 ? "red" : "white"}}>{count}</h1>
        <div>
            <button onClick={() =>setCount(count+1)} className="bg-pink-800 text-white px-4 py-2 rounded hover:bg-pink-700 text-gray-100">Increment</button>
        </div>
         </section>
            )
        }
        <button className="bg-green-800 text-white rounded px-4 py-2" onClick={handleshow}>{show ? "Hide": "Show"}</button>
    </div>
  )
}

export default Usestate
