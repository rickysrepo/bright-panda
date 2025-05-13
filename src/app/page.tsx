import Image from "next/image";
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
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
              <h1 className="text-5xl font-bold mb-4">Welcome to Bright Panda</h1>
              <p className="text-xl mb-8">Discover your creative potential with our expert-led art classes</p>
              <Link href="/classes" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
                View Our Classes
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Classes Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* English Class */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://picsum.photos/400/300?random=1"
                    alt="English Class"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">English</h3>
                  <p className="text-gray-600 mb-4">Develop strong communication skills through interactive activities and creative writing.</p>
                  <Link href="/classes#english" className="text-indigo-600 hover:text-indigo-800">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Mathematics Class */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://picsum.photos/400/300?random=2"
                    alt="Mathematics Class"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
                  <p className="text-gray-600 mb-4">Develop problem-solving skills and mathematical thinking through engaging activities.</p>
                  <Link href="/classes#mathematics" className="text-indigo-600 hover:text-indigo-800">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Mandarin Class */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://picsum.photos/400/300?random=3"
                    alt="Mandarin Class"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Mandarin</h3>
                  <p className="text-gray-600 mb-4">Learn Chinese language and culture through interactive lessons and cultural activities.</p>
                  <Link href="/classes#mandarin" className="text-indigo-600 hover:text-indigo-800">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Art Class */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://picsum.photos/400/300?random=4"
                    alt="Art Class"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Art</h3>
                  <p className="text-gray-600 mb-4">Explore various art mediums and develop your creative expression.</p>
                  <Link href="/classes#art" className="text-indigo-600 hover:text-indigo-800">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* AI Class */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://picsum.photos/400/300?random=5"
                    alt="AI Class"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">AI</h3>
                  <p className="text-gray-600 mb-4">Learn about artificial intelligence and machine learning through hands-on projects.</p>
                  <Link href="/classes#ai" className="text-indigo-600 hover:text-indigo-800">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">&ldquo;Bright Panda transformed my understanding of art. The instructors are incredibly supportive and knowledgeable.&rdquo;</p>
                <p className="font-semibold">- Sarah M.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">&ldquo;I&apos;ve learned so much in just a few weeks. The classes are well-structured and the atmosphere is very welcoming.&rdquo;</p>
                <p className="font-semibold">- John D.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
