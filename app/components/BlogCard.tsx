import { Blog } from "@/types/blog"
import Image from "next/image"
type Props = {
  blog: Blog
}

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <Image
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 space-y-3">

        <h2 className="text-xl font-bold text-gray-800">
          {blog.title}
        </h2>

        <p className="text-gray-600 text-sm">
          {blog.description}
        </p>

        <p className="text-gray-500 text-sm line-clamp-3">
          {blog.body}
        </p>

        <a
          href={blog.link}
          target="_blank"
          className="text-blue-600 font-medium hover:underline"
        >
          Read More →
        </a>

      </div>
    </div>
  )
}

export default BlogCard