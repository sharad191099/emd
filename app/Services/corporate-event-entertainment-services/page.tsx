"use client";
import Herosection from "../../../components/Service/Herosection";
import Partners from "../../../components/Service/Partners";
import EventHighlights from "../../../components/Service/Eventhighlights"
import Lowerservicecards from "../../../components/Service/Lowerservicecard";
import { useState } from "react";

const faqs= [
  {question: "What types of corporate entertainment does EMD provide?",
   answer: "EMD provides celebrity artists, singers, bands, DJs, comedians, anchors, dancers, motivational speakers, and international performers."},
  {question: "Can EMD arrange celebrity artists for corporate events?",
   answer:"Yes. Powered by Hire4Event, EMD can book top Bollywood celebrities, singers, actors, sports personalities, and international artists."},
  {question: "Do you manage artist travel and technical requirements?",
   answer:"Absolutely. We manage travel, accommodation, visas, technical riders, sound, light, stage, and backstage operations end-to-end."},
  {question: "Do you provide entertainment for international corporate events?",
   answer: "Yes. EMD specializes in global corporate entertainment across international destinations."},
  {question: "Is EMD suitable for small and large corporate events?",
   answer:"Yes. From intimate leadership events to large-scale corporate galas, we manage all scales."}
];
const Lowerservicescard = [
  {id: 1,number: "01",title: "Sports Event Planning & Strategy",description:"We plan and execute sports events with strategic planning, format design, scheduling, and end-to-end coordination to ensure smooth execution, safety, and maximum participant engagement.",link: "#",},
  {id: 2,number: "02",title: "Sports Infrastructure & Field Setup",description:"We manage complete sports infrastructure including ground preparation, turf setup, courts, equipment,    lighting, barricading, and technical installations as per professional standards.",link: "#",},
  {id: 3,number: "03",title: "Athlete, Team & Match Management",description:"We handle athlete registrations, team coordination, fixtures, referees, umpires, match officials, score management, and live match operations for flawless event flow.",link: "#",},
  {id: 4,number: "04",title: "On-Ground Operations & Safety Management",description:"We manage on-ground operations including logistics, crowd control, security, medical support, risk management, and real-time supervision to ensure safe and successful sports events.",link: "#",},
];

export default function EntertainmentEventsPage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <Herosection
        breadcrumb={[
          { label: "HOME", href: "/" },
          {label: "SERVICES",href:"/Services"},
          { label: "Corporate Event Entertainment Services" }
        ]}
        heading={[
          { text: "Corporate" },
          { text: "Event ", highlight: true },
          { text: "Entertainment Services by EMD" }
        ]}
        backgroundImage="https://event-management-delhi.com/assets/img/hero/brand-promotion-company.jpg"
        description="We plan and deliver corporate event entertainment services with creative concepts, professional execution, and seamless coordination, ensuring engaging performances, smooth event flow, and a memorable brand experience."
      />

      {/* Add the remaining sports event page sections here */}

      <section className="relative mx-auto max-w-auto px-6 py-16 lg:py-20 overflow-hidden bg-white">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-25 lg:grid-cols-2">

          {/* LEFT SIDE: heading stays here, partner section is a component */}
          <div className=" ml-70">
            <h1 className="text-5xl font-bold uppercase leading-[1.2] tracking-tight text-[#111111] sm:text-6xl lg:text-[75px]">
              <span className="block">Entertainment for  </span>
              <span className="block text-[#1675b9]">Corporate Events</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <p className="mt-8">
              EMD is a premium corporate event entertainment company, powered by Hire4Event, delivering world-class entertainment solutions for corporate events across India and globally. Corporate event entertainment is our forte, and we specialize in curating unforgettable live experiences with the right artists, the right production, and seamless execution.<br/>From boardroom gatherings to large-scale corporate galas, EMD provides any artist, any entertainment format, anywhere in the world.
            </p>
            <div className="mt-5 mb-8">
            <p><strong>Complete Entertainment Solutions for Corporate Events </strong><br/>At EMD, we understand that entertainment defines the energy of a corporate event. Whether it’s a dealer meet, sales conference, annual day, awards night, product launch, or gala dinner, our entertainment solutions are curated to match your brand objectives and audience profile.<br/>Our Corporate Entertainment Services Include:
            </p>
            </div>
            <div className="mb-15 pl-5 space-y-1 text-base text-gray-900">
                <li>Celebrity artist booking for corporate events</li>
                <li>Live singers & playback artists</li>
                <li>Bollywood, Sufi, Indie & International bands</li>
                <li>Stand-up comedians & celebrity anchors</li>
                <li>DJs, EDM & international DJs</li>
                <li>Celebrity appearances & brand ambassadors</li>
                <li>Cultural performances & theme-based acts</li>
                <li>Dance troupes & choreography shows</li>
                <li>Motivational speakers & corporate influencers</li>
            </div>
             <p>Any artist. Any genre. Any country. We make it happen.</p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                   “A well-executed exhibition creates powerful brand impressions, meaningful interactions, and long-term business opportunities. With our end-to-end exhibition management services, you gain a reliable partner focused on quality, creativity, and seamless execution.”
              </p>
            </div>
          </div>
        </div>
        </section>


    <section className="ml-6 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">

      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Powered by Hire4Event – India’s Leading Artist Booking Platform
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         EMD operates with the strong backbone of <strong>Hire4Event</strong>, India’s largest and most trusted artist booking and event production company. With 10,000+ artists onboard and a presence across major global destinations, we deliver seamless corporate entertainment solutions.
         </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Verified artists & transparent pricing</li>
          <li>End-to-end artist management</li>
          <li>Travel, hospitality & technical rider handling</li>
          <li>Stage, sound, light & LED setup</li>
          <li>Seamless coordination from booking to performance</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         This integrated approach makes EMD a one-stop corporate entertainment partner.
         </p>
      </div>

       {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Global Corporate Entertainment Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         EMD provides corporate entertainment services worldwide, delivering local expertise with international production standards for global corporate events.<br/><strong>Service Locations:</strong><br/>India | Dubai | Thailand | Singapore | Vietnam | Malaysia | Europe | UK | USA | Middle East | Asia-Pacific<br/>Whether it’s an international conference, corporate offsite, incentive trip, or global dealer meet, our team ensures flawless execution.
         </p>
      </div>

       {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Why EMD is the Preferred Corporate Entertainment Company
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Corporate-focused entertainment planning</li>
          <li>Global artist network & celebrity access</li>
          <li>In-house production & event rental services</li>
          <li>Strong experience in large-scale corporate events</li>
          <li>Trusted by Fortune 500 companies</li>
          <li>Single point of contact for artists & technical setup</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         We don’t just book artists — we design corporate entertainment experiences.
         </p>
      </div>

       {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Corporate Events We Specialize In
        </h2>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Annual Day Celebrations</li>
          <li>Sales Meet & Dealer Meet Entertainment</li>
          <li>Product Launch Events</li>
          <li>Award Nights & Gala Dinners</li>
          <li>Employee Engagement Events</li>
          <li>Conference Entertainment</li>
          <li>Corporate Offsites & MICE Events</li>
        </div>
      </div>

       {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Corporate Event Entertainment Services in Delhi NCR
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         EMD powered by Hire4Event is a leading corporate event entertainment company in Delhi NCR, delivering premium entertainment solutions for conferences, annual days, dealer meets, product launches, and award nights.
         </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Celebrity singers & Bollywood performers</li>
          <li>Corporate DJs & live bands</li>
          <li>Stand-up comedians & anchors</li>
          <li>Cultural & theme-based performances</li>
        </div>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Corporate Event Entertainment Services in Mumbai & Bangalore
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        In Mumbai, India's entertainment capital, EMD provides seamless access to Bollywood celebrities supported by premium event production.<br/>In Bangalore, we deliver curated entertainment for IT companies, startups, MNCs, conferences, offsites, and product launches.
         </p>
      </div>

       {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Corporate Event Entertainment Services in Gurgaon & Noida
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        EMD is a preferred corporate entertainment partner in Gurgaon and Noida, offering fast artist availability, strong local execution, and cost-effective entertainment solutions for corporate events.<br/>Powered by Hire4Event’s headquarters in Noida, we ensure quick turnarounds and reliable on-ground support.
         </p>
      </div>
      </div>

 {/* FAQ*/}

      <section className="mt-10">

          <h2 className="text-3xl font-bold text-slate-900 md:text-2xl">
              Frequently Asked Questions
          </h2>


          <div className="mt-5">

              <div className="space-y-2">
          {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
              <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[7px] transition-all duration-300 ${
                  isOpen ? "bg-white" : ""
                  }`}
              >
                  {/* QUESTION */}
                  <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[39px] w-full items-center justify-between gap-4 px-4 py-2 text-left"
                  >
                  <span className="text-[18px] font-normal leading-8 text-[#111827]">
                    {faq.question}
                  </span>

                  <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center text-[17px] font-normal text-[#111827] transition-transform duration-200 ${
                      isOpen ? "rotate-0" : ""
                      }`}
                  >
                      {isOpen ? "−" : "+"}
                  </span>
                  </button>

                  {/* ANSWER */}
                  <div
                  className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                  >
                  <div className="overflow-hidden">
                      <div className="border-t border-[#e5e7eb] px-4 pb-4 pt-3">
                      <p className="text-[15px] leading-[1.7] text-[#4b5563]">
                          {faq.answer}
                      </p>
                      </div>
                  </div>
                  </div>
              </div>
              );
          })}
            </div>
      
      </div>

    </section>
  </div>
</section>
  
        <EventHighlights />
         <Lowerservicecards items={Lowerservicescard} />

    </main>
  );
}