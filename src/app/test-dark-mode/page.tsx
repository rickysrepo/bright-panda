import Navbar from "@/components/Navbar";

export default function TestDarkMode() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dark Mode Test Page
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            This page demonstrates the improved contrast in dark mode
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Contrast Test */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Text Contrast Test
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This paragraph demonstrates proper contrast in dark mode. The text
              should be clearly readable against the background.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Secondary text with slightly lower contrast but still readable.
            </p>
          </div>

          {/* Form Elements Test */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Form Elements Test
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Input Field
                </label>
                <input
                  type="text"
                  placeholder="Enter text here"
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Textarea
                </label>
                <textarea
                  placeholder="Enter longer text here"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>
            </div>
          </div>

          {/* Button Test */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Button Test
            </h2>
            <div className="space-y-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors">
                Primary Button
              </button>
              <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                Secondary Button
              </button>
            </div>
          </div>

          {/* Table Test */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Table Test
            </h2>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-4 py-2 text-left text-gray-900 dark:text-white font-semibold">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-gray-900 dark:text-white font-semibold">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-600">
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    Item 1
                  </td>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-300">
                    Value 1
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-600">
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    Item 2
                  </td>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-300">
                    Value 2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Dark Mode Status
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you can read this text clearly, the dark mode contrast is working
            properly.
          </p>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg inline-block">
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              ✓ Dark mode contrast improved
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
