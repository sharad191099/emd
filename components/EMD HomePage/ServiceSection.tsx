"use client";
import { useState } from "react";
type ServiceListItem = {
  title: string;
  href: string;
}
type ServiceItem = {
  title: string;
  items: ServiceListItem[];
  description: string;
  action: string;
  href?: string;
  image: string;
};

type ServicesSectionProps = {
  heading: string;
  highlightedText: string;
  intro: string;
  services: ServiceItem[];
};

export default function ServicesSection({
  heading,
  highlightedText,
  intro,
  services,
}: ServicesSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <section className="w-full overflow-hidden bg-[#f3f3f3] px-5 py-16 text-[#151515] md:px-10 md:py-24">
      <div className="mx-auto max-w-[1235px]">

        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold font-manrope leading-tight sm:text-4xl md:text-5xl">
              {heading}
            </h2>

            <p className="mt-5 text-3xl font-light italic text-[#1680c4] sm:text-4xl md:text-5xl">
              - {highlightedText}
            </p>
          </div>

          <div>
            <p className="text-sm italic leading-8 text-gray-600 sm:text-base md:text-2xl">
              {intro}
            </p>

            <a className="mt-5 inline-flex items-center gap-3 text-sm md:text-[20px]">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="223" height="14" viewBox="0 0 223 12" fill="none">
                <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
              </svg>
              </span>
              Services
            </a>
          </div>
        </div>

        {/* Service rows */}
        <div id="services-list" className="mt-8 md:mt-10">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <article
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();

                  setMousePosition({
                    x: event.clientX - rect.left - rect.width / 2,
                    y: event.clientY - rect.top - rect.height / 2,
                  });
                }}
                className="group relative grid grid-cols-1 gap-6 overflow-hidden border-b border-[#cecece] py-9 perspective-[1000px] md:grid-cols-[minmax(0,1fr)_370px] md:gap-12 md:py-16"
              >
                {/* Center hover image */}
                <div
                className={`pointer-events-none absolute left-[46%] top-[45%] z-20 hidden md:block ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                    transform: `translate3d(
                    calc(-50% + ${isHovered ? mousePosition.x * 0.08 : 0}px),
                    calc(-50% + ${isHovered ? mousePosition.y * 0.08 : 0}px),
                    0
                    )`,
                    perspective: "1000px",
                }}
                >
                <div
                    className="h-[240px] w-full rounded-[16px] transition-[opacity,transform] duration-500 ease-out"
                    style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered
                        ? `rotateY(${mousePosition.x * 0.015}deg) rotateX(${
                            -mousePosition.y * 0.015
                        }deg) rotateZ(10deg) scale(1) translateZ(30px)`
                        : "rotateY(0deg) rotateX(0deg) rotateZ(10deg) scale(0.8) translateZ(0px)",
                    transformStyle: "preserve-3d",
                    }}
                >
                    <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover overflow-hidden"
                    />
                </div>
                </div>

                {/* Left content */}
                <div className="relative z-10">
                  <a
                    href={service.href ?? "#"}
                  >
                  <h2 className="text-2xl font-normal sm:text-3xl md:text-4xl">
                    
                    {service.title}
                  </h2>
                  </a>

                  <ul className="mt-8 space-y-1 text-sm leading-6 text-gray-900 sm:text-base md:text-[16px]">
                    {service.items.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          className="inline-block transition-colors duration-300 hover:text-[#1680c4]"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right content */}
                <div className="relative z-10 flex flex-col items-start md:pt-1">
                <p className="max-w-[470px] text-sm leading-6 text-grey-600 sm:text-base md:text-[17px]">
                    {service.description}
                  </p>

                  <a
                    href={service.href ?? "#"}
                    className="mt-10 text-sm font-medium uppercase transition-colors duration-300 hover:text-[#1680c4] hover:underline"
                  >
                    {service.action} →
                  </a>
                </div>

                {/* Background number */}
                <span className="pointer-events-none absolute bottom-5 left-[42%] hidden -translate-x-1/2 text-5xl font-light italic text-transparent [-webkit-text-stroke:1px_#777] md:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
