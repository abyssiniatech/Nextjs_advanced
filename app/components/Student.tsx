import { List } from "./List"

const Student = () => {
  return (
    <div className="bg-indigo-900 text-white min-h-screen flex flex-col items-center justify-center">
      {List.map((student,index)=>(
        <div key={index} className="bg-indigo-700 p-4 rounded-lg mb-4 w-64 text-center">
          <h2>{student.name}</h2>
          <p>{student.department}</p>
        </div>
      ))}
    </div>
  )
}

export default Student
