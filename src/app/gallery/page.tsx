import Image from "next/image";
import Navbar from "@/components/Navbar";
import { content } from "@/content";

export default function Gallery() {
  const { gallery } = content;

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {gallery.title}
          </h1>
          <p className="text-xl text-gray-600">{gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative h-64">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{artwork.title}</h3>
                <p className="text-gray-600 mb-1">By {artwork.artist}</p>
                <span className="inline-block bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                  {artwork.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {gallery.showcase.title}
          </h2>
          <p className="text-gray-600 mb-8">{gallery.showcase.description}</p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
            {gallery.showcase.cta}
          </button>
        </div>
      </div>
    </main>
  );
}
