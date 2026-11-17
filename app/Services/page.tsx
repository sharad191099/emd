import HeroHeader from "../../components/About/Header";
import Servicecard from "../../components/Service/Servicecard";

const services = [
  {id: 1,title: "Corporate Events",description:"Professional planning and execution of conferences, meetings, and corporate gatherings.",number: "01",href:"/Services/corporate-event"},
  {id: 2,title: "Exhibition Organiser",description:"End-to-end exhibition management including stall design, branding, and logistics.",number: "02",href:"/Services/exhibition-organiser"},
  {id: 3,title: "Sports Events",description:"Complete sports event planning with branding, coordination, and crowd engagement.",number: "03",href:"/Services/sports-event-organiser"},
  {id: 4,title: "Annual Day & Sales Meet",description:"Memorable annual days and sales meets with stage setup, production, and entertainment.",number: "04",href:"/Services/annual-and-sales-meet-organiser"},
  {id: 5,title: "Brand Promotion & Launch",description:"Powerful brand promotions and product launches designed to maximize visibility.",number: "05",href:"/Services/brand-promotion-company"},
  {id: 6,title: "Event Entertainment",description:"Live artists, DJs, anchors, and customized entertainment for all types of events.",number: "06",href:"/Services/corporate-event-entertainment-services"},
];

export default function ServicesPage() {
  return (
    <main>
      <HeroHeader
        layout="title"
        heading={[
          { text: "Our " },
          { text: "Complete", highlight: true },
          { text: " Event " },
          { text: "Management " },
          { text: "Services", highlight: true },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      {/* Your remaining Services page content */}

<section className="mt-20 w-full overflow-hidden bg-gradient-to-r from-[#fff0ed] via-[#ffc5b9] to-[#fff0ed] py-4">
  <div className="marquee-track flex w-max">
    {[1, 2].map((item) => (
      <p
        key={item}
        aria-hidden={item === 2}
        className="shrink-0 whitespace-nowrap pr-10 text-3xl font-semibold text-[#351207] sm:text-4xl lg:text-[54px]"
      >
        Event Entertainment Corporation / Exhibition Organiser /
        Sports Events / Annual Day / Sales Meet / Brand Promotions & Launch /
      </p>
    ))}
  </div>
</section>

    <section className="w-full overflow-hidden bg-[#f3f3f3] px-5 py-16 text-[#151515] md:px-10 md:py-24">
     <div className="mx-auto max-w-[1260px]">

        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="mt-15 text-3xl font-bold font-manrope leading-tight sm:text-4xl md:text-5xl">
                What We <span className="font-light italic text-[#1680c4]">
                    offer </span>
                    in Event<br></br>
                    <span className="font-light italic text-[#1680c4]">
                        Management
                    </span>
            </h2>
          </div>

          <div>
            <p className="mt-17 text-sm italic leading-8 text-gray-700 sm:text-base md:text-[20px]">
              We deliver end-to-end event management solutions including corporate events, exhibitions, sports events, brand promotions, and live entertainment.
            </p>

            <a href="#services-list" className="mt-5 mb-8 inline-flex items-center gap-3 text-sm md:text-[18px]">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="223" height="14" viewBox="0 0 223 12" fill="none">
                <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
              </svg>
              </span>
              Top Event Services
            </a>
          </div>
          </div>
          </div>

        <Servicecard services={services} />
    </section>
    <div className="mb-30"></div>

    </main>
  );
}
