"use client";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/img/Homeheroimg/bharat-shakti.webp",
  "/img/Homeheroimg/event-management-company-in-delhi.webp",
  "/img/Homeheroimg/slider001.jpg",
  "/img/Homeheroimg/tata-power.webp",
  "/img/Homeheroimg/unccd-cop14.webp",
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);
     return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % backgroundImages.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  return (
    <section className="relative flex min-h-[480px] w-full items-center overflow-hidden bg-slate-950 md:min-h-[580px] lg:min-h-[680px]">

      {/* Background image slider only */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Dark overlay remains consistent */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content stays exactly the same on every slide */}
      <div className="relative z-10 mx-auto w-full max-w-[1350px] px-5 py-16 md:px-10 lg:px-14">
        <div className="max-w-[770px] bg-gradient-to-br from-[#101b40]/95 to-[#21415d]/95 p-6 text-white shadow-2xl sm:p-8 md:p-10">

          <p className="mb-5 text-sm sm:text-base">
            Event <span className="text-sky-500">Management</span> company in Delhi
          </p>

          <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            Delhi’s Trusted Experts in Corporate, Social & High-Profile Event
            Management
          </h1>

          <p className="mt-5 text-sm leading-6 text-gray-100 sm:text-base">
            Professional Event Management company in Delhi offering planning, production, and on-site coordination. We deliver seamless corporate and social events with creative concepts, reliable execution, and high-quality setups. From idea to completion, we turn concepts into memorable experiences with smart planning and attention to detail.
          </p>
        </div>
      </div>

      {/* Previous slide */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous background image"
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 hover:bg-white sm:left-3 sm:h-12 sm:w-12"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Next slide */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next background image"
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 hover:bg-white sm:right-3 sm:h-12 sm:w-12"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {backgroundImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show background ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              activeSlide === index
                ? "bg-sky-500"
                : "bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
