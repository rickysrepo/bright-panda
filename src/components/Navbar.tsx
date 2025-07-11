"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return pathname === path
      ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400"
      : "text-gray-600 dark:text-gray-300 border-transparent hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400";
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Set initial position before showing
      gsap.set(menuRef.current, { x: "-100%" });

      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-gray-800 dark:text-white focus:outline-none"
              >
                Bright Panda
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:outline-none ${isActive(
                  "/"
                )}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:outline-none ${isActive(
                  "/about"
                )}`}
              >
                About
              </Link>
              <Link
                href="/classes"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:outline-none ${isActive(
                  "/classes"
                )}`}
              >
                Our Classes
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:outline-none ${isActive(
                  "/contact"
                )}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:focus:ring-indigo-400"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with GSAP animation */}
      <div
        className={`sm:hidden fixed inset-0 z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Full screen overlay for closing menu */}
        <div
          className="fixed inset-0 bg-transparent"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu panel */}
        <div
          ref={menuRef}
          className="fixed inset-y-0 left-0 w-full max-w-xs bg-white dark:bg-gray-900 shadow-xl z-10"
        >
          <div className="pt-5 pb-3 space-y-1">
            <Link
              href="/"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none ${isActive(
                "/"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none ${isActive(
                "/about"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/classes"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none ${isActive(
                "/classes"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Classes
            </Link>
            <Link
              href="/contact"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none ${isActive(
                "/contact"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
