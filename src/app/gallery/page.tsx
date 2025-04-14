import Image from 'next/image';
import Navbar from '@/components/Navbar';

const artworks = [
  {
    id: 1,
    title: 'Sunset Over Mountains',
    artist: 'Sarah Johnson',
    category: 'Painting',
    image: 'https://picsum.photos/400/400?random=14'
  },
  {
    id: 2,
    title: 'Urban Life',
    artist: 'Michael Chen',
    category: 'Drawing',
    image: 'https://picsum.photos/400/400?random=15'
  },
  {
    id: 3,
    title: 'Abstract Emotions',
    artist: 'Emily Rodriguez',
    category: 'Abstract',
    image: 'https://picsum.photos/400/400?random=16'
  },
  {
    id: 4,
    title: 'Portrait Study',
    artist: 'Student Work',
    category: 'Drawing',
    image: 'https://picsum.photos/400/400?random=17'
  },
  {
    id: 5,
    title: 'Nature\'s Beauty',
    artist: 'Student Work',
    category: 'Painting',
    image: 'https://picsum.photos/400/400?random=18'
  },
  {
    id: 6,
    title: 'Modern Sculpture',
    artist: 'Sarah Johnson',
    category: 'Sculpture',
    image: 'https://picsum.photos/400/400?random=19'
  },
  {
    id: 7,
    title: 'Digital Dreams',
    artist: 'Michael Chen',
    category: 'Digital Art',
    image: 'https://picsum.photos/400/400?random=20'
  },
  {
    id: 8,
    title: 'Colorful Expressions',
    artist: 'Student Work',
    category: 'Abstract',
    image: 'https://picsum.photos/400/400?random=21'
  },
  {
    id: 9,
    title: 'Still Life',
    artist: 'Emily Rodriguez',
    category: 'Painting',
    image: 'https://picsum.photos/400/400?random=22'
  }
];

export default function Gallery() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">Explore our collection of student and instructor artworks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Showcase</h2>
          <p className="text-gray-600 mb-8">
            Our students create amazing works of art. Join our classes and see your work featured here!
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
            Join Our Classes
          </button>
        </div>
      </div>
    </main>
  );
} 