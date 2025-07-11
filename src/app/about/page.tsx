import Image from "next/image";
import Navbar from "@/components/Navbar";
import { content } from "@/content";

export default function About() {
  const { about } = content;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {about.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {about.story.title}
            </h2>
            {about.story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://picsum.photos/800/600?random=4"
              alt="Our Studio"
              fill
              className="object-cover rounded-lg"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {about.team.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.team.members.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="256px"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {about.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.values.items.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
