export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
      const { slug } = await params;
    return (
        <div className="bg-indigo-900 text-white flex justify-center items-center min-h-screen">
            <h1> the student is is : {slug}</h1>
        </div>
    );
}