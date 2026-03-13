export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
      const { slug } = await params;
    return (
        <div>
            <h1> the student is is : {slug}</h1>
        </div>
    );
}