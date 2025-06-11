import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { content } from "@/content";

export default function Home() {
  const { home } = content;

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[600px]">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Art Class Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{home.hero.title}</h1>
              <p className="text-xl mb-8">{home.hero.subtitle}</p>
              <Link
                href="/classes"
                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                {home.hero.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Classes Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {home.featuredClasses.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {home.featuredClasses.classes.map((classItem) => (
                <div
                  key={classItem.title}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={classItem.image}
                      alt={classItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {classItem.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {classItem.description}
                    </p>
                    <Link
                      href={`/classes#${classItem.title.toLowerCase()}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {home.testimonials.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {home.testimonials.items.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="font-semibold">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
