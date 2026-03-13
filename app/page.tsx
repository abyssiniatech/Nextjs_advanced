interface Users{
  id:number;
  title:string;
  body:string;
}

export default async function Home() {
  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  const users:Users[] = data;
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-2">
     <h1>Fetch Api</h1>
      {
        users.map((list:Users)=>{
          return(
            <div key={list.id}>
                 <h1>{list.id}</h1>
                 <h1>{list.title}</h1>
                 <h1>{list.body}</h1>
            </div>
          )
        })
      }
    </div>
  );
}
