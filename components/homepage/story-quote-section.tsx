"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function StoryQuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    if (!section || !imageWrapper) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let rafId: number | null = null;
    let isIntersecting = false;

    const updateParallax = () => {
      if (!isIntersecting || !section || !imageWrapper) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Distance from section center to viewport center
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distance = sectionCenter - viewportCenter;

      // Subtle parallax factor (0.05) for a gentle, elegant touch
      const translateY = distance * 0.05;

      imageWrapper.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      rafId = null;
    };

    const requestUpdate = () => {
      if (rafId === null && isIntersecting) {
        rafId = window.requestAnimationFrame(updateParallax);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          requestUpdate();
        }
      },
      { rootMargin: "150px 0px 150px 0px" },
    );

    observer.observe(section);

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    requestUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Story and Healing Quote"
      className="relative w-full bg-[#111111] overflow-hidden min-h-[66vh] py-[7vmax]"
    >
      {/* Botanical Background Image with Parallax & Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          ref={imageWrapperRef}
          className="absolute -top-[15%] -bottom-[15%] left-0 right-0 h-[130%] w-full will-change-transform"
        >
          <Image
            src="/images/story-plant.png"
            alt="Botanical background illustration"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 bg-foreground opacity-54 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="story-fluid-grid relative z-10 w-full">
        <div className="story-block-quote flex items-end justify-start">
          <h2 className="font-heading font-light whitespace-pre-wrap text-light-accent text-h2">
            You deserve a place where your story is heard, valued, and
            understood.{" "}
            <em className="font-heading font-light italic">
              Nothing will be too heavy for us to carry together.
            </em>
          </h2>
        </div>
      </div>
    </section>
  );
}
