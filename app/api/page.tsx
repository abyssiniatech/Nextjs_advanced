   "use client"
  import {useState} from "react"
  import React from "react"
  interface Post {
    id:number;
    title:string;
    body:string;
}

const Apipage = () => {
    // fetch data from api by using Promise ,
    // const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    // use try catch block to handle error
    // use if else block to check if data is ok or not
    // use map function to display data in the page
    // design the page by using tailwind css
    // use type script to define the type of data
  const [posts, setPosts] =useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
      .catch(err => {
        setError("Error fetching data from server related ");
        console.error(err);
      });
  }, []);

  return (
    <div>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Apipage
