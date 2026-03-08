import { Blog } from "@/types/blog"
import BlogCard from "./BlogCard"

type Props = {
  blogs: Blog[]
}

const BlogList = ({ blogs }: Props) => {
  return (
    <div className="grid gap-6 
    sm:grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    xl:grid-cols-4">

      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}

    </div>
  )
}

export default BlogList