"use client";
import { useRef } from "react";
const events = [
  {
    id: 1,
    title: "Family Day Celebration Event",
    company: "Infosys",
    image: "https://www.event-management-delhi.com/assets/img/services/infosys-family-day-celebration-event.jpg",
  },
  {
    id: 2,
    title: "Muthoot Group",
    company: "Offsite Event",
    image: "https://www.event-management-delhi.com/assets/img/services/muthoot-offsite-event.jpg",
  },
  {
    id: 3,
    title: "Family Day Celebration Event",
    company: "ATS HomeKraft",
    image: "https://www.event-management-delhi.com/assets/img/services/ats-homekraft-family-day-celebration-event.jpg",
  },
  {
    id: 4,
    title: "Conference Event",
    company: "Betronomy AI",
    image: "https://www.event-management-delhi.com/assets/img/services/betronomy-ai-conference-event.jpg",
  },
  {
    
    id: 5,
    title: "Family Day Celebration Event",
    company: "Infosys",
    image: "https://www.event-management-delhi.com/assets/img/services/infosys-family-day-celebration-event.jpg",
  }
];

export default function EventHighlights() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(
      "[data-event-card]"
    ) as HTMLElement | null;

    const distance = card ? card.offsetWidth + 38 : 420;

    sliderRef.current.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16">
      {/* Heading */}
      <div className="mx-auto max-w-[1350px] px-5 sm:px-8">
        <h2 className="max-w-[650px] text-4xl font-semibold leading-[1.15] tracking-tight text-[#111111] sm:text-5xl lg:text-[52px]">
          Our <span className="font-normal italic text-[#1675b9]">
            Latest
          </span>{" "}
          Corporate
          <br />
          Event{" "}
          <span className="font-normal italic text-[#1675b9]">
            Highlights
          </span>
        </h2>
      </div>

      {/* Slider line and arrows */}
      <div className="relative mt-16 flex h-12 items-center justify-center">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#e7e7e7]" />

        <div className="relative flex items-center gap-6 bg-white px-3">
          <button
            type="button"
            aria-label="Previous events"
            onClick={() => moveSlider("left")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-2xl transition-colors duration-300 hover:border-[#1675b9] hover:text-[#1675b9]"
          >
            ←
          </button>

          <button
            type="button"
            aria-label="Next events"
            onClick={() => moveSlider("right")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-2xl transition-colors duration-300 hover:border-[#1675b9] hover:text-[#1675b9]"
          >
            →
          </button>
        </div>
      </div>

      {/* Event slider */}
      <div
        ref={sliderRef}
        className="mt-12 flex gap-[38px] overflow-x-auto scroll-smooth px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden marquee-track2 flex w-max"
      >
        {events.map((event) => (
          <article  
            key={event.id}
            data-event-card
            className="shrink-0 whitespace-nowrap pr-10 text-3xl font-semibold text-[#351207] sm:text-4xl lg:text-[54px]"
          >
            <div className="aspect-square w-full overflow-hidden bg-gray-100">
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-lg font-medium leading-snug text-[#171717] sm:text-xl">
                {event.title}
              </h3>

              <p className="mt-1 text-sm text-[#777777] sm:text-base">
                {event.company}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
