const partners = [
  { name: "Zee Media", image: "/img/partnerimg/zee_media.png" },
  { name: "Samsung", image: "/img/partnerimg/logo-16.png" },
  { name: "Aristocrat", image: "https://www.event-management-delhi.com/assets/img/logo/logo-8.png" },
  { name: "Ministry of Health", image: "/img/partnerimg/logo-13.png" },
  { name: "Honda", image: "https://www.event-management-delhi.com/assets/img/logo/logo-22.png" },
  { name: "HT Media", image: "/img/partnerimg/ht-media-logo.png" },
  { name: "Infosys", image: "/img/partnerimg/infosys.jpg" },
  { name: "LG", image: "https://www.event-management-delhi.com/assets/img/logo/logo-9.png" },
  { name: "Oracle", image: "/img/partnerimg/logo-14.png" },
  { name: "Reliance", image: "https://www.event-management-delhi.com/assets/img/logo/logo-25.png" },
  { name: "BookMyShow", image: "/img/partnerimg/logo-11.png" },
  { name: "Barclays", image: "https://www.event-management-delhi.com/assets/img/logo/logo-21.png" },
];

export default function Partners() {
  return (
    <div className="relative w-full">

      {/* Partners title and line */}
      <div className="relative mt-10 flex items-center gap-5">
        <h2 className="shrink-0 text-lg font-medium text-black sm:text-xl">
          Our Trusted Partners
        </h2>
        <div className="h-px flex-1 bg-[#1675b9]/20" />
      </div>

      {/* Logo grid */}
      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex h-24 items-center justify-center border border-gray-200 bg-white p-4 transition-all duration-500 hover:border-[#1675b9] hover:shadow-md"
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
