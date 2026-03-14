

const Reviewpage = async ({params}: { params: Promise<{ blogid: number; review: string }> }) => {
     const { blogid, review } = await params;
    return (
    <div>
        <div className="bg-indigo-900 text-white flex justify-center items-center min-h-screen m-4">
            <h1> Blogid = <span style={{color:blogid<50 ? "red" : blogid>50? "teal":"green" }}>{blogid}</span></h1>
            <h1> the review id = <span style={{color:review.length<10 ? "red" : review.length>10? "teal":"green" }}>{review}</span></h1>
    </div>
    </div>

  )
};

export default Reviewpage;