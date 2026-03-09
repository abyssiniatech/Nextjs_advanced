import React, { useRef } from "react"

const Useref = () => {
const inputref = useRef<React.Ref<HTMLInputElement> | undefined >(null)
const handlefocus =()=>{
    inputref.current?.focus()

}
  return (
    <div>
      <input type="text" ref={inputref}  className="p-4 rounded"/>
      <button  onClick={handlefocus} className="bg-pink-700 text-700 rounded px-4 py-2 hover:bg-pink-600">Focus</button>
    </div>
  )
}

export default Useref
