import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright Panda",
  description: "Discover your creative potential with our expert-led art classes.",
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
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Bright Panda</h3>
                <p className="text-gray-400">
                  Bringing art education to the community since 2010.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/classes" className="text-gray-400 hover:text-white">
                      Classes
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" className="text-gray-400 hover:text-white">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400">
                  279 Remuera Road<br />
                  Remuera<br />
                  Auckland, New Zealand<br />
                  <br />
                  Phone: +64 9 123 4567<br />
                  Email: info@brightpanda.co.nz
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Bright Panda. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
