type ServiceCard = {
  title: string;
  description: string;
};

type ServiceCardsProps = {
  services: ServiceCard[];
};

export default function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <section className="w-full bg-white px-5 py-12 md:px-10 lg:px-8">

      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[24px] border border-[#d4e0ff] bg-[#f2f6ff] p-6 shadow-[0_3px_10px_rgba(0,0,0,0.03)] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:border-[blue] hover:bg-[white]"
          >

            {/* TITLE */}
            <h3 className="mb-5 text-[18px] font-semibold leading-8 text-[#123b80]">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[15px] leading-[26px] text-[#111827]">
              {service.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
