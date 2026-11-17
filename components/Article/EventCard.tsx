import Link from "next/link";

export type EventCardProps = {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  href: string;
};

export default function EventCard({
  image,
  category,
  date,
  title,
  description,
  href,
}: EventCardProps) {
  return (
    <article className="group relative flex w-full flex-col items-center gap-6 border border-[#ffccc5] bg-white p-5 transition-all duration-500 ease-in-out hover:border-black hover:bg-[#111111] sm:flex-row sm:gap-8 sm:p-8 md:p-10">

      {/* Event Image */}
      <div className="h-[220px] w-full shrink-0 overflow-hidden rounded-[5%] sm:h-[240px] sm:w-[280px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Event Content */}
      <div className="min-w-0 ml-5 flex-1">
        <a href={href}>

        {/* Category and Date */}
        <div className="mb-5 flex flex-wrap items-center gap-3">

          <span className="rounded-full border border-gray-200 px-4 py-1 text-xs text-gray-700 transition-colors duration-500 group-hover:border-gray-600 group-hover:text-white sm:text-sm">
            {category}
          </span>

          <span className="rounded-full border border-gray-200 px-4 py-1 text-xs text-gray-700 transition-colors duration-500 group-hover:border-gray-600 group-hover:text-white sm:text-sm">
            {date}
          </span>

        </div>

        {/* Title */}
        <h2 className="text-xl font-medium leading-snug text-black transition-colors duration-500 group-hover:text-white sm:text-2xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-[680px] text-sm leading-7 text-gray-700 transition-colors duration-500 group-hover:text-gray-300 sm:text-base">
          {description}
        </p>
       </a>
      </div>

      {/* Circular Link */}
      <Link
        href={href}
        aria-label={`Read more about ${title}`}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#1680c4] bg-transparent transition-all duration-500 ease-in-out group-hover:border-blue group-hover:bg-white sm:ml-auto"
      >
      </Link>

    </article>
  );
}
