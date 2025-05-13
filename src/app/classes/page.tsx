import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Classes() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Classes</h1>
          <p className="text-xl text-gray-600">Explore our diverse range of educational programs</p>
        </div>

        {/* English Class */}
        <div id="english" className="mb-16 scroll-mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64">
              <Image
                src="https://picsum.photos/800/600?random=1"
                alt="English Class"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">English</h2>
              <p className="text-gray-600">
                Our English program focuses on developing strong communication skills through interactive activities, reading comprehension, and creative writing. Students will enhance their vocabulary, grammar, and speaking abilities in a supportive environment.
              </p>
            </div>
          </div>
        </div>

        {/* Mathematics Class */}
        <div id="mathematics" className="mb-16 scroll-mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64">
              <Image
                src="https://picsum.photos/800/600?random=2"
                alt="Mathematics Class"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Mathematics</h2>
              <p className="text-gray-600">
                Our Mathematics program helps students develop strong problem-solving skills and mathematical thinking. We cover topics from basic arithmetic to advanced algebra, making math engaging and accessible for all levels.
              </p>
            </div>
          </div>
        </div>

        {/* Mandarin Class */}
        <div id="mandarin" className="mb-16 scroll-mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64">
              <Image
                src="https://picsum.photos/800/600?random=3"
                alt="Mandarin Class"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Mandarin</h2>
              <p className="text-gray-600">
                Our Mandarin program introduces students to Chinese language and culture. Through interactive lessons, students learn pronunciation, writing, and conversational skills while gaining cultural understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Art Class */}
        <div id="art" className="mb-16 scroll-mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64">
              <Image
                src="https://picsum.photos/800/600?random=4"
                alt="Art Class"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Art</h2>
              <p className="text-gray-600">
                Our Art program encourages creative expression through various mediums. Students explore drawing, painting, sculpture, and mixed media while developing their artistic skills and personal style.
              </p>
            </div>
          </div>
        </div>

        {/* AI Class */}
        <div id="ai" className="mb-16 scroll-mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64">
              <Image
                src="https://picsum.photos/800/600?random=5"
                alt="AI Class"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">AI</h2>
              <p className="text-gray-600">
                Our AI program introduces students to the fundamentals of artificial intelligence and machine learning. Through hands-on projects, students learn about algorithms, data analysis, and the ethical implications of AI technology.
              </p>
            </div>
          </div>
        </div>

        {/* Class Schedule */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Class Schedule</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left">Class</th>
                  <th className="py-3 px-4 border-b text-left">Day</th>
                  <th className="py-3 px-4 border-b text-left">Time</th>
                  <th className="py-3 px-4 border-b text-left">Instructor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">English</td>
                  <td className="py-3 px-4 border-b">Monday</td>
                  <td className="py-3 px-4 border-b">6:00 PM - 8:00 PM</td>
                  <td className="py-3 px-4 border-b">Cindy Baby</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Mathematics</td>
                  <td className="py-3 px-4 border-b">Tuesday</td>
                  <td className="py-3 px-4 border-b">6:00 PM - 8:00 PM</td>
                  <td className="py-3 px-4 border-b">Ricky Baba</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Mandarin</td>
                  <td className="py-3 px-4 border-b">Wednesday</td>
                  <td className="py-3 px-4 border-b">6:00 PM - 8:00 PM</td>
                  <td className="py-3 px-4 border-b">Lillian</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Art</td>
                  <td className="py-3 px-4 border-b">Thursday</td>
                  <td className="py-3 px-4 border-b">6:00 PM - 8:00 PM</td>
                  <td className="py-3 px-4 border-b">Cindy Baby</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">AI</td>
                  <td className="py-3 px-4 border-b">Friday</td>
                  <td className="py-3 px-4 border-b">6:00 PM - 8:00 PM</td>
                  <td className="py-3 px-4 border-b">Ricky Baba</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
} 