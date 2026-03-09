  "use client"
  import { useReducer } from "react"
const initialState = 0;

const userReducer = (state:number, action:{ type: "increment" | "decrement" | "reset" }) => {
    switch(action.type){
        case "increment":
            return state + 1;
                break;
        case "reset":
            return initialState;
             break;
        case "decrement":
            return state - 1;
                break;
        default:
            return state;
             
    }
}

const Usereducer = () => {
    const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <div>
      <h1>User Reducer</h1>
        <h2>{state}</h2>
        <button onClick={() => dispatch({type:"increment"})} className="bg-green-700 text-white rounded px-4 py-2 hover:bg-green-600">Increment</button>
        <button onClick={() => dispatch({type:"decrement"})} className="bg-red-700 text-white rounded px-4 py-2 hover:bg-red-600 mx-2">Decrement</button>
        <button onClick={() => dispatch({type:"reset"})} className="bg-blue-700 text-white rounded px-4 py-2 hover:bg-blue-600">Reset</button>
    </div>
  )
}

export default Usereducer
