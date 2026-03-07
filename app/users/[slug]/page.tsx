

const UserPage = async ( {params} : Promise<{ params: { slug: string }, }>) => {
    const { slug } = await params;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-24  ">
        <h1 className="text-2xl"> User page! : {slug}</h1>
    </div>
  )
}

export default UserPage
