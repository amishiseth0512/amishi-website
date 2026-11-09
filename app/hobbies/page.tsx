import { Nav } from "@/components/nav";

export default function PapershelfPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="group min-w-0">
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <img
                src="https://res.cloudinary.com/dvs4eeg1p/image/upload/v1757521723/IMG_1752_jjwtnj.jpg"
                alt="Dancing"
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 md:text-2xl">Dancing</h3>
            <p className="break-words text-gray-400 text-sm md:text-md">
              I’ve always loved dancing, whether it’s freestyle at home or
              picking up things from random Instagram reels.
            </p>
          </div>

          <div className="group min-w-0">
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <img
                src="https://res.cloudinary.com/dvs4eeg1p/image/upload/v1757521723/IMG_5591_ohaacl.jpg"
                alt="Cooking"
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 md:text-2xl">Cooking</h3>
            <p className="break-words text-gray-400 text-sm md:text-md">
              Nothing fancy, but I enjoy experimenting in the kitchen,
              especially when I’m craving something from home.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
