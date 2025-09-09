import { Nav } from "@/components/nav";
import { BlogList } from "@/components/blog-list";
import { blogs } from "@/lib/utils";

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="container py-8 md:py-12">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-bold mb-6 ml-5">Blogs</h1>
          <p className="text-muted-foreground mb-8 ml-5">
            Every week, I document and articulate my knowledge and personal
            perspectives on topics that captivate my interest. Here are all
            blogs I've written recently.
          </p>
          <BlogList items={blogs} />
        </div>
      </main>
    </div>
  );
}
