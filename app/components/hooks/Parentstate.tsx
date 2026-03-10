"use client"

import { createContext, useState } from "react"

export const usercontext = createContext('')
export const Agecontext = createContext(0);
const Parentstate = () => {
    const [user, setuser] = useState<string>("surafel mengist")
    const [age, setAge] = useState<number>(25);
    console.log(user);

  return (
    <div>
      <usercontext.Provider value={user}>
        <h1>Parent state</h1>
        <Agecontext.Provider value={age}></Agecontext.Provider>
        <button
          className="bg-teal-800 text-white rounded px-4 py-2 "
          onClick={() => setuser("New User")}>
          Change User
        </button>
        <button
          className="bg-teal-800 m-4 text-white rounded px-4 py-2 "
          onClick={() => setAge(30)}>
          Change Age
        </button>
      </usercontext.Provider>
    </div>
  );
}

export default Parentstate
