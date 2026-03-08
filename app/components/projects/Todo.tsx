   "use client"

import { useState } from "react"

// typescript
interface TodoItem {
    id: string
    title: string
    completed: boolean
    createdAt: Date
}




//    build professional and scalable todo app with nextjs 16 
//   features:
//  - add todo
// - delete todo
// - mark as completed
// - filter by status (all, completed, pending)
// - persist data in local storage
// - responsive design by using tailwind css
// - use typescript for type safety
// - use react hooks for state management
// - use nextjs 16 features like server components and client components
// - use nextjs 16 features like server components and client components
// - use date-fns for date formatting
// - use uuid for unique id generation
// - use react-icons for icons
// - use react-toastify for notifications
// - use react-query for data fetching and caching
const Todo = () => {
    const [todos, setTodos] = useState<TodoItem[]>([])
    const [newTodo, setNewTodo] = useState<string>('')
     

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
         <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    className="border p-2 w-full"

                />
                <button
                    onClick={() => {
                        if (newTodo.trim() === '') return
                        const newTodoItem: TodoItem = {
                            id: crypto.randomUUID(),
                            title: newTodo.trim(),
                            completed: false,
                            createdAt: new Date()
                        }
                        setTodos([...todos, newTodoItem])
                        setNewTodo('')
                    }}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Add Todo
                </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="border-b p-2">
                        {todo.title}
                    </li>
                      
                ))}
            </ul>
              
    </div>
  )
}

export default Todo
