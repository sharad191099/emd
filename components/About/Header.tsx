import type { ReactNode } from "react";
import Link from "next/link";

type HeadingLine = {
  text: string;
  highlight?: boolean;
};

type Breadcrumb = {
  label: string;
  href?: string;
};

type HeroHeaderProps = {
  heading: HeadingLine[];
  breadcrumbs: Breadcrumb[];
  rightTitle?: string;
  mediaType?: "image" | "video";
  mediaSrc?: string;
  mediaAlt?: string;
  badgeText?: string;
  backgroundColor?: string;
  className?: string;
  rightContent?: ReactNode;

  // New optional customization props
  layout?: "media" | "title";
  headingClassName?: string;
};

export default function HeroHeader({
  heading,
  breadcrumbs,
  rightTitle,
  mediaType,
  mediaSrc,
  mediaAlt = "Event management",
  badgeText = "CREATIVITY • INNOVATION • EVENT EXPERIENCES •",
  backgroundColor = "bg-white",
  className = "",
  rightContent,
  layout = "media",
  headingClassName = "",
}: HeroHeaderProps) {
  const hasMedia = Boolean(mediaSrc && mediaType);

  return (
    <section
      className={`relative w-full overflow-hidden ${backgroundColor} ${className}`}
    >
      <div
        className={`mx-auto grid w-full max-w-[1350px] grid-cols-1 items-center gap-8 px-6 py-16 sm:px-10 lg:gap-12 lg:px-8 ${
          hasMedia
            ? "lg:grid-cols-2"
            : "lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]"
        }`}
      >
        {/* Heading */}
        <div className="relative z-10 min-w-[1000px]">
          <h1
            className={`font-medium leading-[1.08] tracking-tight text-[#111111] ${
              hasMedia
                ? "text-4xl sm:text-5xl lg:text-[clamp(40px,4vw,70px)]"
                : "text-4xl sm:text-5xl lg:text-[clamp(42px,4.1vw,72px)]"
            } ${headingClassName}`}
          >
            {heading.map((line, index) => (
              <span
                key={`${line.text}-${index}`}
                className={`${
                  layout === "title" ? "inline" : "block"
                } ${
                  line.highlight
                    ? "font-light italic text-[#1675b9]"
                    : "font-semibold"
                }`}
              >
                {line.text}
                {layout === "title" && " "}
              </span>
            ))}
          </h1>

          {/* Breadcrumb */}
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-[#202020] sm:mt-6 sm:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="223"
              height="12"
              viewBox="0 0 223 12"
              fill="none"
              className="w-24 shrink-0 sm:w-40 lg:w-[230px]"
            >
              <path
                d="M1.33789 1.18359H221.034L209.173 10.9822"
                stroke="#FF4A23"
                strokeLinecap="round"
              />
            </svg>

            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-3 text-[17px]"
            >
              {breadcrumbs.map((crumb, index) => (
                <span
                  key={`${crumb.label}-${index}`}
                  className="flex items-center gap-1"
                >
                  {index > 0 && (
                    <span className="text-gray-400">/</span>
                  )}

                  {crumb.href && index !== breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors duration-300 hover:text-[#1675b9]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* Right side */}
        <div
          className={`relative flex min-w-0 items-center ${
            hasMedia
              ? "min-h-[220px] justify-center lg:min-h-[300px]"
              : "min-h-[100px] justify-center lg:justify-end"
          }`}
        >
          {mediaSrc && mediaType === "image" && (
            <img
              src={mediaSrc}
              alt={mediaAlt}
              className="relative h-[340px] w-full max-w-[600px] overflow-hidden rounded-tl-[180px] rounded-tr-[180px] rounded-bl-[180px] rounded-br-[180px]"
            />
          )}

          {mediaSrc && mediaType === "video" && (
            <video
              src={mediaSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={mediaAlt}
              className="relative h-[340px] w-full max-w-[600px] overflow-hidden rounded-tl-[180px] rounded-tr-[180px] rounded-bl-[180px] rounded-br-[180px]"
            />
          )}

          {rightContent}

          {!hasMedia && !rightContent && rightTitle && (
            <div
              aria-hidden="true"
              className="mb-20 max-w-full select-none whitespace-nowrap text-center text-[clamp(42px,7vw,130px)] font-extrabold leading-none tracking-tight text-[#eeeeee] lg:text-right"
            >
              {rightTitle}
            </div>
          )}

          {hasMedia && (
            <div className="absolute -bottom-5 left-0 flex h-28 w-28 items-center justify-center rounded-full bg-white p-2 shadow-sm sm:-left-6 sm:h-36 sm:w-36">
              <div className="flex h-full w-full items-center justify-center rounded-full border-[8px] border-[#f2f2f2]">
                <span className="max-w-[90px] text-center text-[10px] font-semibold uppercase leading-5 tracking-[2px] text-[#333333] sm:text-[11px]">
                  {badgeText}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
