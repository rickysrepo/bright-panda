import Image from "next/image";
import Navbar from "@/components/Navbar";
import { content } from "@/content";

export default function Classes() {
  const { classes } = content;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {classes.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {classes.subtitle}
          </p>
        </div>

        {classes.programs.map((program) => (
          <div key={program.id} id={program.id} className="mb-16 scroll-mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {program.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {program.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {classes.schedule.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-gray-900 dark:text-white font-semibold">
                    Class
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-gray-900 dark:text-white font-semibold">
                    Day
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-gray-900 dark:text-white font-semibold">
                    Time
                  </th>
                  <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-gray-900 dark:text-white font-semibold">
                    Instructor
                  </th>
                </tr>
              </thead>
              <tbody>
                {classes.schedule.classes.map((classItem) => (
                  <tr
                    key={classItem.name}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                      {classItem.name}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                      {classItem.day}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                      {classItem.time}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                      {classItem.instructor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
