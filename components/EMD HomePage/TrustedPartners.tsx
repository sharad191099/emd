"use client";

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[][] = [
  [
    { name: "Infosys", logo: "/img/partnerimg/infosys.jpg" },
    { name: "RailTel", logo: "/img/partnerimg/railtel-logo.jpg" },
    { name: "Cinépolis", logo: "/img/partnerimg/cinepolice-logo.jpg" },
    { name: "MSME", logo: "/img/partnerimg/foundation-for-msme-clusters.png" },
    { name: "VIT", logo: "/img/partnerimg/vit-vellore.jpg" },
    { name: "ATS", logo: "/img/partnerimg/ats-logo.png" },
    { name: "Praxia", logo: "/img/partnerimg/praxia.png" },
    { name: "Imodco", logo: "/img/partnerimg/imodco-part-of-the-sbm-offshore-group.png" },
    { name: "Indian dairy", logo: "/img/partnerimg/Indian-dairy-association.jpg" },
    { name: "Lasern", logo: "/img/partnerimg/larsen-and-toubro.jpg" },
    { name: "MCL", logo: "/img/partnerimg/major-cricket-league-logo.jpg" },
    { name: "MG", logo: "/img/partnerimg/muthoot-group-icon.jpg" },
    { name: "Nayara", logo: "/img/partnerimg/nayara-energy.jpg" },
    { name: "Yodely", logo: "/img/partnerimg/yodley.jpg" },
    { name: "HT Media", logo: "/img/partnerimg/ht-media-logo.png" },
  ],
  [
    { name: "Bose", logo: "/img/partnerimg/logo-1.png" },
    { name: "Manasum", logo: "/img/partnerimg/manasum-living-logo.jpg" },
    { name: "Isha Foundation", logo: "/img/partnerimg/logo-4.png" },
    { name: "Nippon Steel", logo: "/img/partnerimg/nippon-steel.png" },
    { name: "Hike", logo: "/img/partnerimg/logo-2.png" },
    { name: "HDFC Bank", logo: "/img/partnerimg/hdfc-bank-logo.jpg" },
    { name: "Ayuryog", logo: "/img/partnerimg/ayuryog-logo.jpg" },
    { name: "AML", logo: "/img/partnerimg/aml-right-source-logo.jpg" },
    { name: "Bertonomy", logo: "/img/partnerimg/betronomy-ai-logo.jpg" },
    { name: "compunnel", logo: "/img/partnerimg/compunnel.png" },
    { name: "Eldercare", logo: "/img/partnerimg/eldercare-logo.jpg" },
    { name: "IHE", logo: "/img/partnerimg/ihe-logo.jpg" },
    { name: "ZEE", logo: "/img/partnerimg/zee_media.png" },
    { name: "Reap", logo: "/img/partnerimg/reap_logo.png" },
    { name: "Philip", logo: "/img/partnerimg/philips-logo.jpg" },
  ],
  [
    { name: "Samsung", logo: "/img/partnerimg/logo-16.png" },
    { name: "Sharp Travels", logo: "/img/partnerimg/logo-17.png" },
    { name: "Samkwang", logo: "/img/partnerimg/logo-18.png" },
    { name: "Reliance Foundation", logo: "/img/partnerimg/reliance-foundation-logo.jpg" },
    { name: "NongHyup Bank", logo: "/img/partnerimg/logo-19.png" },
    { name: "Amity University", logo: "/img/partnerimg/logo-7.png" },
    { name: "Regent", logo: "/img/partnerimg/regent-edu-connect-logo.jpg" },
    { name: "Bharat", logo: "/img/partnerimg/bharat-shiksha-expo-logo.jpg" },
    { name: "Ministry Health", logo: "/img/partnerimg/logo-13.png" },
    { name: "Oracle", logo: "/img/partnerimg/logo-14.png" },
    { name: "India Expo", logo: "/img/partnerimg/logo-15.png" },
    { name: "Addverb", logo: "/img/partnerimg/logo-20.png" },
    { name: "Muthoot", logo: "/img/partnerimg/muthoot-group-icon.jpg" },
    { name: "FNP", logo: "/img/partnerimg/logo-12.png" },
    { name: "Book My Show", logo: "/img/partnerimg/logo-11.png" },
  ],
  [
    { name: "Emudhra", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-24.png" },
    { name: "Reliance Industries", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-25.png" },
    { name: "Meritto", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-26.png" },
    { name: "Jio", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-29.png" },
    { name: "CEL", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-30.png" },
    { name: "FICCI", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-31.png" },
    { name: "Ola", logo: "https://www.event-management-delhi.com/assets/img/logo/ola-electric-logo.jpg" },
    { name: "LG", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-9.png" },
    { name: "Adobe", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-10.png" },
    { name: "Cadence", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-27.png" },
    { name: "Aristocraft", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-8.png" },
    { name: "Thales", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-6.png" },
    { name: "Barcley", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-21.png" },
    { name: "Honda", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-22.png" },
    { name: "Argentina", logo: "https://www.event-management-delhi.com/assets/img/logo/logo-23.png" },

  ],
];

export default function TrustedPartners() {
  return (
    
    <section className="mb-10 w-full overflow-hidden bg-white py-10 md:py-12">
        <h1 className = "mb-2 text-[18px] font-Normal text-black  text-center">
                ABOUT US
            </h1>
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[250px_minmax(0,2fr)] md:gap-8">
        {/* Section title */}
        <div className="px-6 md:pl-16">
          <h2 className="text-xl font-semibold leading-tight text-[#222]">
            Our
            <br />
            Trusted Partners
          </h2>
        </div>

        {/* Moving logo rows */}
        <div className="min-w-0">
          {partners.map((row, index) => (
            <div
              key={index}
              className="overflow-hidden border-b border-[#c9c9c9] first:border-t"
            >
              <div
                className={`flex w-max ${
                  index % 2 === 0
                    ? "animate-partners-left"
                     : "animate-partners-right"
                }`}
              >
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    aria-hidden={copy === 1}
                    className="flex shrink-0 items-center"
                  >
                    {row.map((partner) => (
                      <div
                        key={partner.name}
                        className="flex h-[80px] w-[155px] shrink-0 items-center justify-center px-5"
                      >
                        <img
                          src={partner.logo}
                          alt={copy === 0 ? partner.name : ""}
                          width={120}
                          height={60}
                          loading="lazy"
                          decoding="async"
                          className="max-h-[59px] max-w-[100px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
