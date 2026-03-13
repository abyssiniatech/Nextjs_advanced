  "use client"
import Link from "next/link"
interface lin{
  name:string;
  href:string;
}
const link=[
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    {name:"Users", href:"/users"},
    { name: "Api", href: "/api" },
    { name: "Basic", href: "/basic" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Hooks", href: "/hooks" },

]
const Links = () => {
  return (
    <div className="flex gap-4">
      {link.map((l:lin) => (
        <Link key={l.href} href={l.href} className="text-lg text-gray-600 hover:text-gray-900">
          {l.name}
        </Link>
      ))}
    </div>
  )
}

export default Links
