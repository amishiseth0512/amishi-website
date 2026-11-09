import { SocialLinks } from "@/components/social-links";
import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import { projects, blogs } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="container mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 w-full items-center">
          <div className="flex flex-col justify-center space-y-4 min-w-0">
            <h1 className="font-serif text-4xl font-bold break-words md:text-5xl lg:text-6xl">
              Hi! I am Amishi.
            </h1>
            <div className="prose prose-gray dark:prose-invert">
              <p className="break-words">
                I am a software engineer, currently at San Jose State
                University, working on full stack engineering: working with
                databases, APIs, UIs, and more.
              </p>
            </div>
            <SocialLinks />
          </div>
          <div className="relative flex justify-center">
            <img
              src="https://res.cloudinary.com/dvs4eeg1p/image/upload/v1757522238/Screenshot_2025-09-09_at_4.07.33_PM_ljqz0h.png"
              alt="Profile"
              className="rounded-2xl object-cover h-52 w-52 md:h-80 md:w-80 max-w-full mt-8 md:mt-0"
            />
          </div>
        </div>
        <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-2 md:gap-10">
          <section className="min-w-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold md:text-3xl mb-2">
                Recent projects
              </h2>
            </div>
            <div className="mt-4 space-y-3">
              {projects.slice(0, 3).map((paper) => (
                <Link
                  key={paper.href}
                  href={paper.href}
                  className="block break-words text-muted-foreground hover:text-primary md:text-lg"
                >
                  - {paper.title}
                </Link>
              ))}
            </div>
          </section>
          <section className="min-w-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold md:text-3xl mb-2">
                Recent blogs
              </h2>
            </div>
            <div className="mt-4 space-y-3">
              {blogs.slice(0, 3).map((blog) => (
                <Link
                  key={blog.href}
                  href={blog.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block break-words text-muted-foreground hover:text-primary md:text-lg"
                >
                  - {blog.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
