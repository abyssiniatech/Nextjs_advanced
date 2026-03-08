import { Blog } from "@/types/blog"

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the fundamentals of React and component architecture.",
    body: "React is a powerful JavaScript library used to build interactive user interfaces...",
    image: "https://picsum.photos/600/400?1",
    link: "https://react.dev"
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    description: "A beginner guide to building modern web apps with Next.js.",
    body: "Next.js is a React framework that enables server-side rendering...",
    image: "https://picsum.photos/600/400?2",
    link: "https://nextjs.org"
  },
  {
    id: 3,
    title: "Understanding TypeScript",
    description: "Why TypeScript improves large-scale applications.",
    body: "TypeScript is a strongly typed superset of JavaScript...",
    image: "https://picsum.photos/600/400?3",
    link: "https://www.typescriptlang.org"
  },
]


for (let i = 4; i <= 50; i++) {
  blogs.push({
    id: i,
    title: `Tech Blog Post ${i}`,
    description: `Short description for blog post ${i}`,
    body: `This is the full body content of blog post ${i}. It discusses modern web development topics including React, Next.js, TypeScript, APIs, and best practices.`,
    image: `https://picsum.photos/600/400?random=${i}`,
    link: "https://example.com"
  })
}