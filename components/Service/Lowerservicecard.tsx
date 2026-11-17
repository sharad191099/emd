type ServiceCardItem = {
  id: string | number;
  number: string;
  title: string;
  description: string;
  link?: string;
  buttonText?: string;
};

type ServiceCardsProps = {
  items: ServiceCardItem[];
};

export default function Lowerservicecards({
  items,
}: ServiceCardsProps) {
  return (
    <section className="mb-10 w-full overflow-hidden bg-white py-15">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-9 px-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="group relative isolate min-h-[400px] overflow-hidden bg-[#f1f1f1] p-8 sm:min-h-[400px] sm:p-10 md:p-4 "
          >
            {/* Expanding circular hover background */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[20px] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[#666666] opacity-0 transition-all duration-700 ease-in-out group-hover:scale-[30] group-hover:opacity-100" />

            {/* Card content */}
            <div className="relative z-10 flex h-full min-h-[320px] flex-col">
              <span className="text-[28px] font-semibold italic text-[#1675b9] transition-colors duration-500 group-hover:text-white">
                {item.number}
              </span>

              <h3 className="mt-10 text-[26px] font-semibold leading-tight text-black transition-colors duration-500 group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-5 text-[17px] leading-[1.65] text-[#333333] transition-colors duration-500 group-hover:text-white">
                {item.description}
              </p>

              {/* Button appears on hover */}
              <div className="mt-auto flex justify-center pt-6">
                {item.link && (
                  <a
                    href={item.link}
                    className="translate-y-4 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#222222] opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    {item.buttonText ?? "Schedule Meeting"}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
