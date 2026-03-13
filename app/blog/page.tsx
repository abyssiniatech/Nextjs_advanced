// import BlogList from "@/components/BlogList"
import {BlogList} from "@/components/BlogList"
import { blogs } from "@/data/blogs"
export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Tech Blog
        </h1>

        <BlogList blogs={blogs} />

      </div>

    </main>
  )
}