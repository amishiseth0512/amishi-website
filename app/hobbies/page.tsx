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
                src="https://res.cloudinary.com/dvs4eeg1p/image/upload/v1757458847/IMG_1752_qzak8v.heic"
                alt="Dancing"
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="md:text-2xl text-lg font-semibold mb-2">Dancing</h3>
            <p className="text-gray-400 text-sm md:text-md">
              I’ve always loved dancing — whether it’s freestyle at home or picking up a few moves from random Instagram reels.
            </p>
          </div>

          <div className="group">
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <img
                src="https://res.cloudinary.com/dhxeo4rvc/image/upload/v1737380974/Screen_Shot_2025-01-20_at_5.49.03_AM_gw1bms.png"
                alt="Cooking"
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="md:text-2xl text-lg font-semibold mb-2">Cooking</h3>
            <p className="text-gray-400 text-sm md:text-md">
              Nothing fancy, but I enjoy experimenting in the kitchen, especially when I’m craving something from home.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
