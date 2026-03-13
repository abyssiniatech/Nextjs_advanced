export default async function BlogPostPage({ params }: { params: Promise<{ slug: number }> }) {
      const { slug } = await params;
    return (
        <div className="bg-indigo-900 text-white flex justify-center items-center min-h-screen">
            <h1> the student is is : <span style={{color:slug<50 ? "red" : slug>50? "teal":"green" }}>{slug}</span></h1>
        </div>
    );
}