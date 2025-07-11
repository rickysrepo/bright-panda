"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimationDemo() {
  const bannerRefs = useRef<(HTMLElement | null)[]>([]);
  const cardsRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      "main",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    if (bannerRefs.current.length > 0) {
      const tl = gsap.timeline();

      tl.fromTo(
        bannerRefs.current[0],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
        .fromTo(
          bannerRefs.current[1],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          bannerRefs.current[2],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.5"
        );
    }

    if (cardsRefs.current.length > 0) {
      cardsRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              delay: index * 0.2,
            }
          );
        }
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          GSAP Animation Demo
        </h1>

        {/* Banner Animation Demo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Banner Content Animation
          </h2>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-12 rounded-lg text-white text-center">
            <h3
              ref={(el) => {
                bannerRefs.current[0] = el;
              }}
              className="text-3xl font-bold mb-4"
            >
              Welcome to Bright Panda
            </h3>
            <p
              ref={(el) => {
                bannerRefs.current[1] = el;
              }}
              className="text-xl mb-6"
            >
              Discover your creative potential with our expert-led art classes
            </p>
            <button
              ref={(el) => {
                bannerRefs.current[2] = el;
              }}
              className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold"
            >
              Get Started
            </button>
          </div>
        </section>

        {/* Card Animation Demo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Card Slide-up Animation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRefs.current[index - 1] = el;
                }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Card {index}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This card demonstrates the GSAP slide-up animation with
                  staggered delays.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GSAP Timeline Demo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            GSAP Timeline Animation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Timeline 1", "Timeline 2", "Timeline 3"].map((title, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This demonstrates GSAP timeline animations with complex
                  sequences.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors"
          >
            Reset Animations
          </button>
        </div>
      </div>
    </main>
  );
}
