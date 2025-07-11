"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  show: boolean;
}

export default function TestimonialCarousel({
  testimonials,
  show,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [animatedIn, setAnimatedIn] = useState(false);

  // Initial load animation
  useEffect(() => {
    if (!show || animatedIn) return;
    if (testimonialRefs.current.length > 0) {
      gsap.set(testimonialRefs.current.filter(Boolean), {
        opacity: 0,
        y: 50,
      });
      gsap.to(testimonialRefs.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        onComplete: () => {
          setAnimatedIn(true);
        },
      });
    }
  }, [show, animatedIn, testimonials]);

  // Carousel animation
  useEffect(() => {
    if (!animatedIn) return;
    if (!testimonials || testimonials.length < 2) return;
    const interval = setInterval(() => {
      gsap.to(testimonialRefs.current.filter(Boolean), {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
          requestAnimationFrame(() => {
            gsap.set(testimonialRefs.current.filter(Boolean), {
              opacity: 1,
              scale: 1,
            });
          });
        },
      });
    }, 7500);
    return () => clearInterval(interval);
  }, [testimonials.length, animatedIn]);

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            No testimonials available.
          </p>
        </div>
      </div>
    );
  }

  const getCurrentTestimonials = () => {
    if (testimonials.length === 1) {
      return [testimonials[0]];
    }
    const firstIndex = currentIndex;
    const secondIndex = (currentIndex + 1) % testimonials.length;
    return [testimonials[firstIndex], testimonials[secondIndex]];
  };

  const currentTestimonials = getCurrentTestimonials();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {currentTestimonials.map((testimonial, index) => (
        <div
          key={`${currentIndex}-${index}`}
          ref={(el) => {
            testimonialRefs.current[index] = el;
          }}
          className={
            `bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 h-40 flex flex-col justify-center testimonial-card` +
            (!animatedIn ? " opacity-0" : "")
          }
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          <p className="font-semibold text-gray-900 dark:text-white mt-auto">
            - {testimonial.author}
          </p>
        </div>
      ))}
    </div>
  );
}
