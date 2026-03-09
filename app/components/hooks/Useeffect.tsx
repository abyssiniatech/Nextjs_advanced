"use client"
import {useEffect} from "react"
const Useeffect =()=>{
      useEffect(() =>{
         setTimeout(()=>{
             document.title="welcome"
         })
      })
    return(
        <div>
              <h1>welcome to useEffect</h1>
        </div>
    )
}
export default Useeffect