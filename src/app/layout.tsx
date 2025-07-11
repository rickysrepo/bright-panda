import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright Panda",
  description:
    "Discover your creative potential with our expert-led art classes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Bright Panda
                </h3>
                <p className="text-gray-400 dark:text-gray-300">
                  Bringing art education to the community since 2010.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/classes"
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                    >
                      Classes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Contact Us
                </h3>
                <p className="text-gray-400 dark:text-gray-300">
                  279 Remuera Road
                  <br />
                  Remuera
                  <br />
                  Auckland, New Zealand
                  <br />
                  <br />
                  Phone: +64 9 123 4567
                  <br />
                  Email: info@brightpanda.co.nz
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center text-gray-400 dark:text-gray-300">
              <p>
                &copy; {new Date().getFullYear()} Bright Panda. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
