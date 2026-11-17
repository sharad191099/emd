import Link from "next/link";
type Service = {
  id: number;
  title: string;
  description: string;
  number: string;
  href: string;
};

type ServicecardProps = {
  services: Service[];
};

export default function Servicecard({ services }: ServicecardProps) {
  return (
    <section className="w-full bg-[#f5f5f5] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1260px] grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative flex min-h-[250px] flex-col items-center justify-center border border-[#c7dff0] bg-white px-6 py-10 text-center transition-all duration-500 ease-in-out"
          >
            {/* Top and bottom decorative lines */}
            <span className="absolute -top-px left-5 right-5 h-px bg-[#c7dff0] transition-colors duration-500 group-hover:bg-white/30" />
            <span className="absolute -bottom-px left-5 right-5 h-px bg-[#c7dff0] transition-colors duration-500 group-hover:bg-white/30" />

             <Link
            href={service.href}
            className="mb-5 text-lg font-medium text-black transition-colors duration-500"
          >
            {service.title}
          </Link>
            <p className="mb-3 max-w-[340px] text-base leading-[1.65] text-gray-800 transition-colors duration-500">
              {service.description}
            </p>

            <span className="mt-8 text-2xl italic">
              {service.number}
            </span>

            {/* Decorative corner markers */}
            <span className="absolute -left-[5px] -top-[5px] h-[10px] w-[10px] bg-[#1675b9]" /> {/* Top Left corner */}
            <span className="absolute -right-[5px] -top-[5px] h-[10px] w-[10px] bg-[#1675b9]" /> {/* Top Right corner */}
            <span className="absolute -bottom-[5px] -left-[5px] h-[10px] w-[10px] bg-[#1675b9]" /> {/* Top BottomLeft corner */}
            <span className="absolute -bottom-[5px] -right-[5px] h-[10px] w-[10px] bg-[#1675b9]" /> {/* Top BottomRight corner */}
          </div>
        ))}
      </div>
    </section>
  );
}
