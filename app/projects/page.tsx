import Counter from "../components/projects/Counter"
import Todo from "../components/projects/Todo"
const page = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center flex-col m-4 p-4"> 
      <Counter />
      <Todo />
    </div>
  )
}

export default page
