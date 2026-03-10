"use client"

import { useRef } from "react"

const Refcounter = () => {
  const counterRef = useRef<number>(0)
  const textRef = useRef<HTMLParagraphElement>(null)

  const increment = () => {
    counterRef.current++
    if (textRef.current) {
      textRef.current.textContent = counterRef.current.toString()
    }
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen flex justify-center flex-col items-center gap-4">
      {/* Do not try to use textRef.current here */}
      <p ref={textRef}>0</p>

      <button
        className="bg-pink-900 text-white rounded text-2xl px-4 py-2"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  )
}

export default Refcounter