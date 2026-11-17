import Link from "next/link";

type EventCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
};

export default function Eventcard({
  image,
  title,
  description,
  date,
  link,
}: EventCardProps) {
  return (
     <Link
      href={link}
      className="group flex h-full w-[98%] flex-col overflow-hidden rounded-md bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl"
    >
      {/* IMAGE */}

      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-5">

        <h3 className="mb-3 text-lg font-semibold leading-6 text-[#111827] transition-colors duration-300 group-hover:text-blue-900">
          {title}
        </h3>

        <p className="mb-5 flex-1 text-sm leading-[22px] text-slate-700">
          {description}
        </p>

        {/* FOOTER */}

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-gray-200 pt-4 text-xs text-slate-600">
          <span>
            Posted by <strong className="text-slate-900">EMD</strong>
          </span>

          <span>{date}</span>
        </div>

      </div>
    </Link>
  );
}
