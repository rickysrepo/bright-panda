"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { content } from "@/content";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { bannerAnimation, cardsAnimation } from "@/utils/animations";

export default function Home() {
  const { home } = content;
  const bannerRefs = useRef<(HTMLElement | null)[]>([]);
  const cardsRefs = useRef<(HTMLElement | null)[]>([]);
  const titleRefs = useRef<(HTMLElement | null)[]>([]);
  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Banner animation
    if (bannerRefs.current.length > 0) {
      const bannerTl = bannerAnimation(
        bannerRefs.current.filter(Boolean) as HTMLElement[]
      );
      tl.add(bannerTl);
    }

    // 2. First section title animation (immediately after banner button)
    if (titleRefs.current[0]) {
      tl.fromTo(
        titleRefs.current[0],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "+=0"
      );
    }

    // 3. Card animation (immediately after title animation)
    if (cardsRefs.current.length > 0) {
      tl.fromTo(
        cardsRefs.current.filter(Boolean) as HTMLElement[],
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        },
        "+=0"
      );
    }

    // 4. Second section title animation (immediately after card animation)
    if (titleRefs.current[1]) {
      tl.fromTo(
        titleRefs.current[1],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "+=0"
      );
    }
    // 5. Testimonials card animation (immediately after second section title)
    tl.add(() => setShowTestimonials(true));
  }, []);

  const extendedTestimonials = [
    ...home.testimonials.items,
    {
      text: "The instructors here are incredibly talented and patient. My child has learned so much in just a few months.",
      author: "Sarah",
    },
    {
      text: "I love how the classes are structured. They make learning fun and engaging for all ages.",
      author: "Michael",
    },
    {
      text: "The art classes have really helped me develop my creative skills. Highly recommended!",
      author: "Emma",
    },
    {
      text: "Great environment for learning. The teachers are very knowledgeable and supportive.",
      author: "David",
    },
  ];

  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="relative">
          {/* Hero Section with GSAP fade-in animation */}
          <div className="relative h-[600px]">
            <Image
              src="https://picsum.photos/1920/1080"
              alt="Art Class Hero"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4 sm:px-6 lg:px-8">
                <h1
                  ref={(el) => {
                    bannerRefs.current[0] = el;
                  }}
                  className="text-5xl font-bold mb-4 opacity-0"
                >
                  {home.hero.title}
                </h1>
                <p
                  ref={(el) => {
                    bannerRefs.current[1] = el;
                  }}
                  className="text-xl mb-8 opacity-0"
                >
                  {home.hero.subtitle}
                </p>
                <Link
                  href="/classes"
                  ref={(el) => {
                    bannerRefs.current[2] = el;
                  }}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors opacity-0"
                >
                  {home.hero.cta}
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Classes Section with GSAP slide-up animation */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                ref={(el) => {
                  titleRefs.current[0] = el;
                }}
                className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white opacity-0"
              >
                {home.featuredClasses.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {home.featuredClasses.classes.map((classItem, index) => (
                  <div
                    key={classItem.title}
                    ref={(el) => {
                      cardsRefs.current[index] = el;
                    }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 overflow-hidden border border-gray-200 dark:border-gray-700 opacity-0"
                  >
                    <div className="relative h-48">
                      <Image
                        src={classItem.image}
                        alt={classItem.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {classItem.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {classItem.description}
                      </p>
                      <Link
                        href={`/classes#${classItem.title.toLowerCase()}`}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section with GSAP carousel */}
          <section className="bg-gray-50 dark:bg-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                ref={(el) => {
                  titleRefs.current[1] = el;
                }}
                className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white opacity-0"
              >
                {home.testimonials.title}
              </h2>
              <div>
                <TestimonialCarousel
                  testimonials={extendedTestimonials}
                  show={showTestimonials}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </ErrorBoundary>
  );
}
