import Image from "next/image";
import Navbar from "@/components/Navbar";
import { content } from "@/content";

export default function Gallery() {
  const { gallery } = content;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {gallery.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 overflow-hidden group border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-64">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                  {artwork.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  By {artwork.artist}
                </p>
                <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-2 py-1 rounded">
                  {artwork.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {gallery.showcase.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {gallery.showcase.description}
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors">
            {gallery.showcase.cta}
          </button>
        </div>
      </div>
    </main>
  );
}
