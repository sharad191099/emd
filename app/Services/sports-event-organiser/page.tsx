"use client";
import Herosection from "../../../components/Service/Herosection";
import Partners from "../../../components/Service/Partners";
import EventHighlights from "../../../components/Service/Eventhighlights"
import Lowerservicecards from "../../../components/Service/Lowerservicecard";
import { useState } from "react";

const faqs= [
  {question: "What is EMD and how is it related to Hire4Event?",
   answer: "EMD is a professional sports event management company and a group company of Hire4Event, one of India’s leading corporate event management brands. Backed by Hire4Event’s experience and infrastructure, EMD specializes exclusively in planning and executing sports events across India."},
  {question: "What types of sports events does EMD manage?",
   answer:"EMD manages professional sports leagues, large-scale marathons, corporate cricket and football leagues, annual corporate sports days, inter-company and inter-school tournaments, and indoor & outdoor sports competitions."},
  {question: "Does EMD have experience in large national and international sports events?",
   answer:"Yes. EMD has experience with IPL, ISL, IPTL, large marathons, and high-profile corporate tournaments, following league-level protocols, safety standards, and best practices."},
  {question: "Can EMD manage corporate sports days and employee engagement events?",
   answer: "Absolutely. EMD designs and executes employee sports days, corporate leagues, team-building sports activities, and wellness-focused sports programs aligned with company culture"},
  {question: "Which cities does EMD operate in?",
   answer: "EMD provides pan-India services including Delhi, Noida, Gurgaon, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, Jaipur, Chandigarh, and more."},
  {question: "Does EMD provide end-to-end sports event management?",
   answer:"Yes. From planning, venue selection, permissions, sports infrastructure, referees, medical support, branding, sponsorship activation, to on-ground operations."},
  {question: "Can EMD handle large participant volumes and crowd management?",
   answer:"Yes. EMD follows professional crowd control, security planning, medical arrangements, and compliance standards for safe execution."},
  {question: "Does EMD organize marathons and running events?",
   answer:"Yes. EMD organizes city marathons, corporate runs, charity runs, professionally timed races, including route planning, permissions, hydration, and medical support."},
  {question: "Can EMD customize sports events?",
   answer:"Every event is fully customizable — from formats and scoring systems to branding and engagement activities based on client objectives and budget."},
  {question: "Why should we choose EMD for sports event management?",
   answer:"EMD is backed by Hire4Event’s legacy, has proven experience in national-level events, pan-India operations, and a strong focus on safety and flawless execution."},
];
const Lowerservicescard = [
  {id: 1,number: "01",title: "Sports Event Planning & Strategy",description:"We plan and execute sports events with strategic planning, format design, scheduling, and end-to-endcoordination to ensure smooth execution, safety, and maximum participant engagement.",link: "#",},
  {id: 2,number: "02",title: "Sports Infrastructure & Field Setup",description:"We manage complete sports infrastructure including ground preparation, turf setup, courts, equipment,lighting, barricading, and technical installations as per professional standards.",link: "#",},
  {id: 3,number: "03",title: "Athlete, Team & Match Management",description:"We handle athlete registrations, team coordination, fixtures, referees, umpires, match officials,score management, and live match operations for flawless event flow.",link: "#",},
  {id: 4,number: "04",title: "On-Ground Operations & Safety Management",description:"We manage on-ground operations including logistics, crowd control, security, medical support,risk management, and real-time supervision to ensure safe and successful sports events.",link: "#",},
];

export default function SportsEventsPage() {
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
          { label: "SPORT EVENT ORGANISER" }
        ]}
        heading={[
          { text: "LEADING" },
          { text: "SPORTS EVENT", highlight: true },
          { text: "COMPANY IN INDIA" }
        ]}
        backgroundImage="https://event-management-delhi.com/assets/img/hero/sports-event-organiser-banner.jpg"
        description="We plan and execute sports events with strategic planning, professional event operations, and seamless coordination, ensuring high participant engagement, smooth execution, and strong brand visibility."
      />

      {/* Add the remaining sports event page sections here */}

      <section className="relative mx-auto max-w-auto px-6 py-16 lg:py-20 overflow-hidden bg-white">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-25 lg:grid-cols-2">

          {/* LEFT SIDE: heading stays here, partner section is a component */}
          <div className=" ml-70">
            <h1 className="text-5xl font-bold uppercase leading-[1.2] tracking-tight text-[#111111] sm:text-6xl lg:text-[84px]">
              <span className="block">Sports</span>
              <span className="block">Event</span>
              <span className="block text-[#1675b9]">Organiser</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[17px] leading-[1.7] text-[#333333]">
            <p>A Group Company of Hire4Event</p>

            <p className="mt-1">
              EMD is a trusted and experienced sports event management
              company in India and a proud group company of Hire4Event,
              one of the country&apos;s most established corporate event
              management brands. With years of hands-on expertise in
              planning, executing, and managing sports events at every
              scale, EMD has emerged as one of the most reliable sports
              event organisers across India.
            </p>

            <h2 className="mt-7 font-semibold text-grey text-slate-800">
              Extensive Experience in Large-Scale Sports Events
            </h2>

            <p>
              EMD brings deep domain expertise through its involvement
              in major sporting events, including:
            </p>

            <div className="mt-5 list-square space-y-1 pl-5 text-[15px]">
              <li>IPL (Indian Premier League)</li>
              <li>ISL (Indian Super League)</li>
              <li>IPTL (International Premier Tennis League)</li>
              <li>National &amp; city-level Marathons and Running Events</li>
              <li>Corporate Cricket Leagues</li>
              <li>Inter-Corporate Sports Tournaments</li>
              <li>School &amp; College Sports Meets</li>
              <li>Annual Corporate Sports Days</li>
            </div>

            <div className="relative mt-8 border-l border-[#1675b9] py-1 pl-4">
              <p>
                Our team understands the complexity, compliance,
                logistics, and execution standards required for
                high-profile sports events, making EMD a preferred
                partner for organizers, brands, corporates, and
                institutions.
              </p>
              </div>
          <div
              className="relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “A well-executed exhibition creates powerful brand impressions,
                meaningful interactions, and long-term business opportunities.
                With our end-to-end exhibition management services, you gain
                a reliable partner focused on quality, creativity, and seamless execution.”
              </p>
            </div>
          </div>
        </div>
        </section>


          <section className="ml-8 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">

      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          One of the Most Experienced Sports Event Organisers in India
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          With a legacy powered by <strong>Hire4Event</strong>, EMD has built
          one of the most experienced sports event management teams in India.
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>End-to-end sports event planning</li>
          <li>Venue identification &amp; sports infrastructure setup</li>
          <li>Player &amp; team coordination</li>
          <li>Referees, umpires &amp; technical officials</li>
          <li>Sports equipment &amp; field setup</li>
          <li>Medical support &amp; safety compliance</li>
          <li>Crowd management &amp; security</li>
          <li>Branding, sponsorship &amp; activation zones</li>
          <li>Live production, sound, LED &amp; broadcast support</li>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Corporate Sports Event Management Specialists
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          EMD is widely recognized for delivering corporate sports events
          that combine competition, engagement, and brand value.
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Corporate Cricket &amp; Football Leagues</li>
          <li>Annual Corporate Sports Days</li>
          <li>Employee Engagement Sports Events</li>
          <li>Team-Building Sports Activities</li>
          <li>Indoor &amp; Outdoor Sports Carnivals</li>
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[21px] font-bold text-[#202020]">
          Pan-India Sports Event Management Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          EMD operates across all major metro cities and sports hubs in India.
        </p>
        <h3 className="font-bold text-[#202020]">Key Cities We Serve</h3>
        <div className="grid grid-cols-3 list-square gap-x-4 pl-5 text-base leading-[1.65] text-gray-900">
          <li>Delhi</li>
          <li>Noida</li>
          <li>Gurgaon</li>
          <li>Mumbai</li>
          <li>Bangalore</li>
          <li>Hyderabad</li>
          <li>Pune</li>
          <li>Chennai</li>
          <li>Ahmedabad</li>
          <li>Jaipur</li>
          <li>Chandigarh</li>
          <li>Kolkata</li>
        </div>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-xl font-bold text-[#202020]">
          Why Choose EMD for Sports Event Management?
        </h2>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Group company of Hire4Event</li>
          <li>Experience in IPL &amp; ISL events</li>
          <li>Corporate &amp; professional sports expertise</li>
          <li>End-to-end in-house solutions</li>
          <li>Safety-first execution</li>
          <li>Pan-India operations</li>
        </div>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          End-to-End Sports Event Solutions Under One Roof
        </h2>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Sports event planning &amp; concept</li>
          <li>Infrastructure &amp; field setup</li>
          <li>Equipment &amp; technical services</li>
          <li>Athlete &amp; team management</li>
          <li>Officials &amp; match management</li>
          <li>Branding &amp; sponsor activation</li>
          <li>AV, LED &amp; live coverage</li>
          <li>On-ground logistics</li>
        </div>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Your Trusted Partner for Professional Sports Events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          EMD delivers excellence for league-level sports events, marathons,
          and corporate sports days across India.
        </p>
      </div>
      </div>

 {/* FAQ*/}

      <section className="mt-18">

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
                  <span className="text-[18px] font-normal leading-5 text-[#111827]">
                      {index + 1}. {faq.question}
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