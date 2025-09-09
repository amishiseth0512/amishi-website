import { Nav } from "@/components/nav";

export default function PapershelfPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group">
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <img
                src="https://res.cloudinary.com/dhxeo4rvc/image/upload/v1737381025/Screen_Shot_2025-01-20_at_5.50.10_AM_mzi4mh.png"
                alt="Photography"
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="md:text-2xl text-lg font-semibold mb-2">Running</h3>
            <p className="text-gray-400 text-sm md:text-md">
              I've been running extensively over the past few months, and
              completed my first half marathon december 2024. my longest
              distance to date: 27.01 km. i love running man.
            </p>
          </div>

          <div className="group">
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <img
                src="https://res.cloudinary.com/dhxeo4rvc/image/upload/v1737380974/Screen_Shot_2025-01-20_at_5.49.03_AM_gw1bms.png"
                alt="Gaming"
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="md:text-2xl text-lg font-semibold mb-2">Piano</h3>
            <p className="text-gray-400 text-sm md:text-md">
              I've been playing the piano since i was about 6, and somehow the
              fanciest song i play to date is happy birthday, in my own medley
              version, lol.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
