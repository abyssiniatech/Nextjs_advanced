   "use client"
import Image from "next/image"
import Links from "./Links"
const Header = () => {
  return (
    <div className="flex  items-center justify-between p-4 border-bottom-2 border-gray-300">
      <h1 className="text-2xl">My website</h1>
      <Image 
      src="/vercel.svg" 
      alt="my image"
      height={40}
      width={40}
      className=""
      />
      <Links />
    </div>
  )
}

export default Header
