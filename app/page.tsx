import HeroSection from "../components/HeroSection";
import TrustedPartners from "../components/EMD HomePage/TrustedPartners";
import ServicesSection from "../components/EMD HomePage/ServiceSection";
import TeamMembers from "../components/EMD HomePage/Teammembers"
const services = [
  {
    title: "Corporate Event Management",
    items: [
      {title: "Conferences & Seminars",href: "/Services/corporate-event/conference-seminar-event-management-company"},
      {title: "Product Launches",href: "/Services/corporate-event/product-launch-event-management-company"},
      {title: "Corporate Meetups",href: "/Services/corporate-event/corporate-meetup-event-management-company"}
    ],
    description:
      "From concept to execution, we organize high-impact corporate events that enhance brand presence and deliver exceptional experiences.",
    action: "Talk to Experts",
    href: "/Services/corporate-event",
    image: "https://www.event-management-delhi.com/assets/img/services/corporat-event-management.png",
  },

  {
    title: "Exhibition Organiser",
    items: [
      {title: "Stall Design & Setup",href: "/Services/exhibition-organiser/exhibition-stall-design-and-setup"},
      {title: "Expo Management",href: "/Services/exhibition-organiser/expo-management-services"},
      {title: "Visitor Engagement",href: "/Services/exhibition-organiser/exhibition-visitor-engagement-services"}
    ],
    description:
      "We organize exhibitions with creative booth designs, smooth coordination, and outstanding visitor engagement.",
    action: "Plan Exhibition",
    href: "/Services/exhibition-organiser",
    image: "https://www.event-management-delhi.com/assets/img/services/exhibition-organiser.png",
  },
   {
    title: "Sports Event Management",
    items: [
      {title: "Tournament Setup",href: "/Services/sports-event-organiser/sports-tournament-setup"},
      {title: "Team Coordination",href: "/Services/sports-event-organiser/sports-event-team-coordination"},
      {title: "Venue Management",href: "/Services/sports-event-organiser/sports-event-venue-management"}
    ],
    description:
      "From small tournaments to large sports events, we ensure flawless planning, coordination, and on-ground execution.",
    action: "Check Event Plans",
    href: "/Services/sports-event-organiser",
    image: "https://www.event-management-delhi.com/assets/img/services/sports-event-management.png",
  },
   {
    title: "Dealer & Sales Meet",
    items: [
      {title: "Dealer Networking Meet",href: "/Services/annual-and-sales-meet-organiser/dealer-networking-meet-event-management-services"},
      {title: "Annual Sales Conference",href: "/Services/annual-and-sales-meet-organiser/annual-sales-conference-event-management-services"},
      {title: "Channel Partner Engagement",href: "/Services/annual-and-sales-meet-organiser/channel-partner-engagement-event-management-services"}
    ],
    description:
      "We organize impactful dealer and sales meets designed to boost motivation, strengthen partnerships, and drive business growth with clear communication and engaging experiences.",
    action: "Plan Meet",
    href: "/Services/annual-and-sales-meet-organiser",
    image: "https://www.event-management-delhi.com/assets/img/services/dealer-and-salse-meet.png",
  },
   {
    title: "Brand Promotion Organiser",
    items: [
      {title: "Mall & Retail Activations",href: "/Services/brand-promotion-company/mall-retail-activation-services"},
      {title: "Roadshows & Outdoor Campaigns",href: "/Services/brand-promotion-company/roadshows-outdoor-campaigns-brand-promotion-organiser"},
      {title: "Product Launch & BTL Promotions",href: "/Services/brand-promotion-company/product-launch-btl-promotion-services"}
    ],
    description:
      "We plan and execute result-driven brand promotion campaigns that increase visibility, connect with target audiences, and create strong market presence across platforms.",
    action: "Promote Brand",
    href: "/Services/brand-promotion-company",
    image: "https://www.event-management-delhi.com/assets/img/services/brand-promotion-company.png",
  },
   {
    title: "Event Entertainment Services",
    items: [
      {title: "Live Bands & Celebrity Performers",href: "/Services/corporate-event-entertainment-services/live-bands-celebrity-performers-event-entertainment-services"},
      {title: "Anchors, Emcees & Hosts",href: "/Services/corporate-event-entertainment-services/anchors-emcees-hosts-event-entertainment-services"},
      {title: "Theme-Based Shows & Acts",href: "/Services/corporate-event-entertainment-services/theme-based-shows-acts-event-entertainment-services"}
    ],
    description:
      "We deliver curated entertainment solutions for corporate events that engage audiences, maintain brand tone, and add energy to conferences, annual meets, and celebrations.",
    action: "Book Entertainment",
    href: "/Services/corporate-event-entertainment-services",
    image: "https://www.event-management-delhi.com/assets/img/services/corporate-event-entertainment-services.png",
  }
];

export default function HomePage() {
  return (
    <main>

      {/* Reusable hero section */} 
      <HeroSection />

      {/* Normal page content */}
      
    <section className="relative isolate w-full overflow-hidden bg-white px-5 py-12 sm:px-8 md:min-h-[300px] md:py-14">
        
        <img
  src="https://www.event-management-delhi.com/assets/img/shape/star-2.png"
  aria-hidden="true"
  className="pointer-events-none absolute left-[3%] top-2 h-20 w-20 object-contain md:h-32 md:w-32"
/>

{/* Bottom-left star image */}
<img
  src="	https://www.event-management-delhi.com/assets/img/shape/star-2.png"
  aria-hidden="true"
  className="pointer-events-none absolute bottom-0 left-[7%] h-24 w-24 object-contain md:h-35 md:w-70 "
/>

  {/* Decorative curved lines */}

  {/* Main heading */}
  <div className="relative mx-auto max-w-[1100px] text-center">
    
    <h2 className="text-2xl font-medium sans-serif leading-[1.35] tracking-tight text-[#151515] sm:text-3xl md:text-[38px]">
      We thrive on{" "}
      <span className="font-normal italic">
        creativity and innovation
      </span>
      , delivering fresh ideas and unique concepts to make your{" "}
      <span className="font-normal italic">event experience</span> stand
      out with premium{" "}
      <span className="font-normal italic">
        Event Management company in Delhi.
      </span>
    </h2>
  </div>
  

</section>
      {/* Reusable trusted partners section */}
    <TrustedPartners />

    <ServicesSection
    heading="Event Management company in Delhi"
    highlightedText="Exceptional Events"
    intro="We offer comprehensive event management solutions—covering corporate events, exhibitions, sports events, annual day & sales meets, brand promotions & launches, and entertainment for events. Our expert team ensures seamless planning, creative execution, and unforgettable experiences tailored to your brand."
    services={services}
    />

    <div className="mx-auto max-w-[1260px]">

        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mt-30 text-3xl font-bold font-manrope leading-tight sm:text-4xl md:text-5xl">
                Meet the <span className="font-light italic text-[#1680c4]">
                    Creative </span>
                    Minds Behind<br></br>
                    <span className="font-light italic text-[#1680c4]">
                        Unforgettable Events
                    </span>
            </h2>
          </div>

          <div>
            <p className="mt-38 text-sm italic leading-8 text-gray-700 sm:text-base md:text-xl">
              Event Management company in Delhi - A creative and experienced team dedicated to delivering seamless, memorable events—whether corporate, wedding, concert, or brand activation. We turn your ideas into reality with passion and precision.
            </p>

            <a href="#services-list" className="mt-5 mb-8 inline-flex items-center gap-3 text-sm md:text-[18px]">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="223" height="14" viewBox="0 0 223 12" fill="none">
                <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
              </svg>
              </span>
              30+ Team Members
            </a>
          </div>
        </div>
    <TeamMembers/>

    
{/* Event Gallery Section */}
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mt-25 text-3xl font-bold font-manrope leading-tight sm:text-4xl md:text-5xl">
                Premium <span className="font-light italic text-[#1680c4]">
                    Projects </span>
                    Delivered with <span className="font-light italic text-[#1680c4]">
                        Perfection
                    </span>
            </h2>
          </div>

          <div>
            <p className="mt-25 text-sm italic leading-8 text-gray-700 sm:text-base md:text-xl">
              A passionate team delivering beautifully planned and flawlessly executed projects across all event categories—corporate, wedding, live shows, and more.
            </p>

            <a href="#services-list" className="mt-5 mb-2 inline-flex items-center gap-3 text-sm md:text-[18px]">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="223" height="14" viewBox="0 0 223 12" fill="none">
                <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
              </svg>
              </span>
              721+ Event Experiences
            </a>
          </div>
        </div>
        </div>

    <section className="w-full bg-white px-5 py-12 md:px-10 lg:px-16">
  <div className="mx-auto grid max-w-[1260px] grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">

    {/* Column 1 */}
    <div className="flex flex-col gap-15">
      <div className="group relative overflow-hidden">
        <img
          src="https://www.event-management-delhi.com/assets/img/portfolio/ecolink-fanVerse-2025.jpg"
          alt="EcoLink FanVerse conference event"
          className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[310px]"
        />
      </div>

      <div className="group relative overflow-hidden">
        <img
          src="https://www.event-management-delhi.com/assets/img/portfolio/polycab-dealers-meet.jpg"
          alt="Outdoor fun carnival event"
          className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[355px]"
        />
      </div>
    </div>

    {/* Column 2 — shifted down */}
    <div className="flex flex-col gap-15 lg:pt-11">
      <div className="group relative overflow-hidden">
        <img
          src="https://www.event-management-delhi.com/assets/img/portfolio/ats-home-kraft.jpg"
          alt="Team celebration event"
          className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[315px]"
        />
      </div>

      <div className="group relative overflow-hidden">
        <img
          src="https://www.event-management-delhi.com/assets/img/portfolio/philips-product-launch.jpg"
          alt="Philips corporate event"
          className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[315px]"
        />
      </div>
    </div>

    {/* Column 3 */}
    <div className="flex flex-col gap-15">
      <div className="group relative overflow-hidden">
        <img
          src="https://www.event-management-delhi.com/assets/img/portfolio/muthoot-group.jpg"
          alt="Polycab stage event"
          className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[310px]"
        />
      </div>

      <div className="group relative overflow-hidden">
        <img
          src="https://www.event-management-delhi.com/assets/img/portfolio/amway-wali-diwali.jpg"
          alt="Amway Diwali celebration"
          className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[355px]"
        />
      </div>
    </div>
    </div>
    <div className="mt-30 mx-auto max-w-[1260px] overflow-hidden">
    <video
    className="h-[300px] w-full object-cover sm:h-[450px] md:h-[600px]"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
      <source src="https://www.hire4event.com/assets-new/video/best-corporate-event-planning-company-in-noida.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>

    
{/* Blog Cards Section */}
        <div className=" mt-15 mx-auto max-w-[1260px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mt-25 text-3xl font-bold font-manrope leading-tight sm:text-4xl md:text-5xl">
                Fresh <span className="font-light italic text-[#1680c4]">
                    Ideas & Stories </span>
                    from Our <span className="font-light italic text-[#1680c4]">
                        Event Team </span>
            </h2>
          </div>

          <div>
            <p className="mt-25 text-sm italic leading-8 text-gray-700 sm:text-base md:text-xl">
              Stay updated with expert tips, event trends, planning ideas, and behind-the-scenes stories from our Event Management company in Delhi specialists.
            </p>
          </div>
        </div>
        </div>

         <div className="mt-15 mx-auto grid max-w-[1260px] grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <a className="group border rounded-[5%] border-[#ffd5cc] bg-white p-5 text-black transition-all duration-500 ease-in-out hover:bg-[#111111] hover:text-white">
            <div className="h-[240px] w-full overflow-hidden">
                <img
                src="https://www.event-management-delhi.com/assets/img/blogs/most-trusted-hackathon-event-organiser-delhi-ncr-india-fe.jpg"
                alt="Hackathon event"
                className="h-full w-full object-cover rounded-[5%] transition-all duration-500 ease-in-out group-hover:scale-[1.02]"
                />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm transition-all duration-500 group-hover:border-gray-600">
                Hackathon Events
                </span>
                <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm transition-all duration-500 group-hover:border-gray-600">
                09/01/2026
                </span>
            </div>

            <h2 className="mt-5 text-xl font-semibold leading-8 transition-all duration-500 ease-in-out md:text-2xl">
                EMD (Event-Management-Delhi.com): The Most Trusted Hackathon Event Organiser in Delhi NCR & Across India
            </h2>

            <p className="mt-6 text-base leading-[26px] transition-all duration-500 ease-in-out">
                EMD (Event-Management-Delhi.com) is a trusted Delhi NCR-based hackathon event organiser delivering end-to-end online, offline, and hybrid hackathon management services across India for corporates, enterprises, and institutions.
            </p>
            </a>

        {/* Card 2 */}
        <a className="group border rounded-[5%] border-[#ffd5cc] bg-white p-5 text-black transition-all duration-500 ease-in-out hover:bg-[#111111] hover:text-white">
        <div className="h-[240px] w-full overflow-hidden">
            <img
            src="https://www.event-management-delhi.com/assets/img/blogs/corporate-event-management-company-bangalore-fe.jpg"
            alt="Event management equipment"
            className="h-full w-full object-cover rounded-[5%] transition-all duration-500 ease-in-out group-hover:scale-[1.02]"
            />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm transition-all duration-500 group-hover:border-gray-600">
            Event Management
            </span>
            <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm transition-all duration-500 group-hover:border-gray-600">
            23/12/2024
            </span>
            </div>

            <h2 className="mt-5 text-xl font-semibold leading-8 transition-all duration-500 ease-in-out md:text-2xl">
            Event Management Company in Bangalore for Corporate Events
        </h2>

        <p className="mt-6 text-base leading-[26px] transition-all duration-500 ease-in-out">
            Expert corporate event planners in Bangalore's tech hub. We handle conferences, summits, and product launches seamlessly.
        </p>
        </a>

            {/* Card 3 */}
            <a className="group border rounded-[5%] border-[#ffd5cc] bg-white p-5 text-black transition-all duration-500 ease-in-out hover:bg-[#111111] hover:text-white">
            <div className="h-[240px] w-full overflow-hidden">
                <img
                src="https://www.event-management-delhi.com/assets/img/blogs/best-event-management-companies-gurgaon-corporate-events-fe.jpg"
                alt="Corporate stage event"
                className="h-full w-full object-cover rounded-[5%] transition-all duration-500 ease-in-out group-hover:scale-[1.02]"
                />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm transition-all duration-500 group-hover:border-gray-600">
                Event Management
                </span>
                <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm transition-all duration-500 group-hover:border-gray-600">
                19/12/2024
                </span>
            </div>

            <h2 className="mt-5 text-xl font-semibold leading-8 transition-all duration-500 ease-in-out md:text-2xl">
                Best Event Management Companies in Gurgaon for Corporate Events
            </h2>

            <p className="mt-6 text-base leading-[26px] transition-all duration-500 ease-in-out">
                Find the best corporate event management companies in Gurgaon for conferences, seminars, leadership summits, and high-stakes business meetings.
            </p>
            </a>

  </div>
</section>
    </main>
  );
}
