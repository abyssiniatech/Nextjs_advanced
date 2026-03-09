"use client"

import { createContext, useState } from "react"

export const usercontext = createContext('')
const Parentstate = () => {
    const [user, setuser] = useState<string>("surafel mengist")
    console.log(user);

  return (
    <div>
       <usercontext.Provider value={user}>
        <h1>Parent state</h1>
         
        <button className="bg-teal-800 text-white rounded px-4 py-2 " onClick={() => setuser("New User")}>Change User</button>
       </usercontext.Provider>
    </div>
  )
}

export default Parentstate
