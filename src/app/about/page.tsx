import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Bright Panda</h1>
          <p className="text-xl text-gray-600">Discover the story behind our passion for art education</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Bright Panda began with a simple mission: to make art education accessible to everyone in our community. What started as a small studio with just a few students has grown into a vibrant center for artistic expression and learning.
            </p>
            <p className="text-gray-600">
              Our experienced instructors are passionate about sharing their knowledge and helping students of all skill levels discover their creative potential. We believe that art is not just a skill to be learned, but a way of seeing and experiencing the world.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://picsum.photos/800/600?random=4"
              alt="Our Studio"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image
                  src="https://picsum.photos/400/400?random=5"
                  alt="Cindy Baby"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cindy Baby</h3>
              <p className="text-gray-600">Drawing & Painting Instructor</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image
                  src="https://picsum.photos/400/400?random=6"
                  alt="Ricky Baba"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ricky Baba</h3>
              <p className="text-gray-600">Sculpture & Digital Art Instructor</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image
                  src="https://picsum.photos/400/400?random=7"
                  alt="Lillian"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lillian</h3>
              <p className="text-gray-600">Mixed Media & Abstract Art Instructor</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Creativity</h3>
              <p className="text-gray-600">We encourage creative expression and innovative thinking in all our classes.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We foster a supportive environment where artists can grow and learn together.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We maintain high standards in our teaching and artistic practice.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 