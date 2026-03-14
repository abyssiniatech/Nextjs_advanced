export default async function BlogPostPage({ params }: { params: Promise<{ blogid: number }> }) {
      const { blogid } = await params;
    return (
        <div className="bg-indigo-900 text-white flex justify-center items-center min-h-screen">
            <h1> the student is is : <span style={{color:blogid<50 ? "red" : blogid>50? "teal":"green" }}>{blogid}</span></h1>
        </div>
    );
}