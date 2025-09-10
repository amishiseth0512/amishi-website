import { SocialLinks } from "@/components/social-links";
import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="container py-8 md:py-12 md:ml-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 w-full">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl ml-5">
              Hi! I am Amishi.
            </h1>
            <div className="prose prose-gray dark:prose-invert ml-5">
              <p>
                I am a software engineer, currently at San Jose State
                University, working on full stack engineering: working with
                databases, APIs, UIs, and more.
              </p>
            </div>
            <SocialLinks />
          </div>
          <div className="relative aspect-square md:aspect-auto flex justify-center">
            <img
              src="https://res.cloudinary.com/dvs4eeg1p/image/upload/v1757522238/Screenshot_2025-09-09_at_4.07.33_PM_ljqz0h.png"
              alt="Profile"
              className="rounded-2xl object-cover md:h-80 md:w-80 h-52 w-52 ml-5 mt-20 md:mt-0"
            />
          </div>
        </div>
        <div className="md:mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <section>
            <div className="flex items-center justify-between">
              <h2 className="md:text-3xl text-lg font-bold ml-3 mb-2">
                Recent projects
              </h2>
            </div>
            <div className="mt-4 space-y-2">
              {projects.slice(0, 3).map((paper) => (
                <Link
                  key={paper.href}
                  href={paper.href}
                  className="block text-muted-foreground hover:text-primary ml-3 md:text-lg"
                >
                  - {paper.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
