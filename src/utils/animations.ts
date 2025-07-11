import { gsap } from "gsap";

export const bannerAnimation = (elements: HTMLElement[]) => {
  const tl = gsap.timeline();

  tl.fromTo(
    elements[0],
    {
      opacity: 0,
      y: 50,
      duration: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    }
  )
    .fromTo(
      elements[1],
      {
        opacity: 0,
        y: 30,
        duration: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .fromTo(
      elements[2],
      {
        opacity: 0,
        y: 30,
        duration: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

  return tl;
};

export const cardsAnimation = (cards: HTMLElement[]) => {
  const tl = gsap.timeline();

  cards.forEach((card, index) => {
    tl.fromTo(
      card,
      {
        opacity: 0,
        y: 100,
        duration: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.2,
      }
    );
  });

  return tl;
};

export const titleAnimation = (title: HTMLElement) => {
  return gsap.fromTo(
    title,
    {
      opacity: 0,
      y: 50,
      duration: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    }
  );
};

export const carouselAnimation = (
  testimonials: HTMLElement[],
  isTransitioning: boolean
) => {
  if (isTransitioning) {
    return gsap.to(testimonials, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.inOut",
    });
  } else {
    return gsap.to(testimonials, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }
};

export const pageLoadAnimation = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    "main",
    {
      opacity: 0,
      duration: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }
  );

  return tl;
};

export const scrollTriggerAnimation = (
  element: HTMLElement,
  delay: number = 0
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
      duration: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: delay,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
};
