"use client";
import Herosection from "../../../components/Service/Herosection";
import Partners from "../../../components/Service/Partners";
import EventHighlights from "../../../components/Service/Eventhighlights"
import Lowerservicecards from "../../../components/Service/Lowerservicecard";
import { useState } from "react";

const faqs= [
  {question: "What type of corporate events does EMD by Hire4Event manage?",
   answer: "EMD by Hire4Event specializes in managing all types of corporate events including sales meets, dealer meets, annual days, annual conferences, employee meets, corporate celebrations, townhalls, and business meetings. We handle both small and large-scale corporate gatherings with ease."},
  {question: "Do you manage both small and large corporate events?",
   answer:"Yes. We efficiently manage small internal meetings as well as large corporate events with thousands of attendees. Our scalable event solutions allow us to plan and execute events of any size."},
  {question: "Which locations do you serve for corporate event management?",
   answer:"We are a leading event management company in Delhi and also manage corporate events across Noida, Gurgaon, and other major cities in India, supported by the nationwide network of Hire4Event."},
  {question: "Do you provide end-to-end corporate event management services?",
   answer: "Absolutely. We offer complete end-to-end event solutions, including:Event concept & planning Venue selection & coordination Stage, sound, light & AV setup Branding & event production Artist & entertainment booking Guest management & hospitality"},
  {question: "Can you manage annual conferences and corporate meetings?",
   answer:"Yes. Annual conferences and corporate meetings are one of our core strengths. We ensure smooth execution with professional conference management, technical support, delegate coordination, and on-ground event supervision."},
  {question: "Do you handle dealer meets and sales conferences?",
   answer:"Yes. We have strong expertise in dealer meets and sales meets, focusing on engagement, motivation, branding, and seamless event flow aligned with your business objectives."},
  {question: "Is EMD a part of Hire4Event?",
   answer:"Yes. EMD is powered by Hire4Event, one of India’s most experienced and trusted corporate event management companies. This allows us access to large-scale infrastructure, experienced teams, and nationwide vendor support."},
  {question: "Can you customize events as per our company’s brand and goals?",
   answer:"Definitely. Every event is custom-designed according to your brand guidelines, audience profile, and business goals to ensure a meaningful and impactful experience."},
  {question: "Do you provide event production and technical support?",
   answer:"Yes. We provide complete event production services, including stage setup, LED screens, sound systems, lighting, presentations, and technical crew for smooth execution."},
  {question: "Why should corporates choose EMD by Hire4Event?",
   answer:"Corporates choose EMD by Hire4Event for our experience, professionalism, reliability, and ability to manage events effortlessly—from planning to execution—while delivering high-quality corporate experiences."},
  {question: "Is EMD by Hire4Event a corporate event management company in Delhi?",
   answer:"Yes. EMD by Hire4Event is a leading corporate event management company in Delhi, known for organizing sales meets, dealer meets, annual conferences, employee meets, and large corporate celebrations. We manage events across all major venues and hotels in Delhi."},
  {question: "Do you organize corporate events in Noida?",
   answer:"Absolutely. We regularly organize corporate events in Noida, including annual days, sales meetings, townhalls, conferences, and employee engagement events. Our strong local presence ensures quick coordination, cost efficiency, and smooth execution."},
  {question: "Do you provide event management services in Gurgaon (Gurugram)?",
   answer:"Yes. EMD by Hire4Event offers professional corporate event management services in Gurgaon (Gurugram). We manage dealer meets, sales conferences, annual celebrations, and corporate gatherings across leading hotels, convention centers, and office locations."},
  {question: "Can you manage multi-city corporate events across Delhi NCR?",
   answer:"Yes. We specialize in multi-city corporate event execution across Delhi, Noida, and Gurgaon. With centralized planning and local execution teams, we ensure consistency, branding alignment, and seamless coordination across locations."},
   {question: "Do you handle small and large-scale corporate events in Delhi NCR?",
   answer:"Yes. Whether it’s a small employee meet or a large annual corporate conference, we manage events of all sizes across Delhi NCR, including Delhi, Noida, and Gurgaon."},
   {question: "What types of corporate events do you manage in Delhi, Noida, and Gurgaon?",
   answer:"Across all three locations, we manage: Sales meets & sales conferences Dealer & channel partner meets Annual days & corporate celebrations Annual conferences & business meetings Employee meets, townhalls & offsites"},
   {question: "Do you provide venue and hotel coordination in Delhi NCR?",
   answer:"Yes. We assist with venue selection and hotel coordination across Delhi, Noida, and Gurgaon, including corporate hotels, convention centers, banquet halls, and outdoor venues."},
   {question: "Why choose EMD by Hire4Event for corporate events in Delhi NCR?",
   answer:"Corporates choose us because we offer: Strong local expertise in Delhi, Noida & Gurgaon End-to-end event management Professional execution backed by Hire4Event Ability to manage complex and large-scale corporate events"},
   {question: "Do you provide last-minute or quick-turnaround corporate events?",
   answer:"Yes. Our experienced teams and local vendor network allow us to manage urgent and short-notice corporate events across Delhi NCR without compromising on quality."},
   {question: "How can we contact EMD by Hire4Event for a corporate event in Delhi NCR?",
   answer:"You can reach out to EMD by Hire4Event through our website or call our corporate events team to discuss your requirements for Delhi, Noida, or Gurgaon."}
];
const Lowerservicescard = [
  {id: 1,number: "01",title: "Annual Fest & Sales Meet Planning",description:"We design and plan impactful annual fests and sales meets with clear objectives, creative themes, structured agendas, and seamless coordination to align with your business goals.",link: "#",},
  {id: 2,number: "02",title: "Venue Setup & Event Infrastructure",description:"We manage complete event infrastructure including stage setup, LED screens, sound &amp; lighting, branding elements, seating arrangements, and technical installations for a premium experience.",link: "#",},
  {id: 3,number: "03",title: "Speaker, Artist & Agenda Management",description:"We handle speaker coordination, artist bookings, agenda flow, presentations, award ceremonies, team activities, and engagement sessions for smooth and professional event execution.",link: "#",},
  {id: 4,number: "04",title: "On-Ground Event Execution & Support",description:"We manage on-ground operations including event coordination, guest handling, logistics, vendor management, real-time supervision, and support to ensure a flawless annual fest or sales meet.",link: "#",},
];

export default function annualeventpage() {
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
          { label: "ANNUAL AND SALES MEET ORGANISER" }
        ]}
        heading={[
          { text: "corporate" },
          { text: "ANNUAL SALES", highlight: true },
          { text: "MEET" },
          { text: "ORGANISER"}
        ]}
        backgroundImage="https://event-management-delhi.com/assets/img/hero/annual-and-sales-meet-organisers.jpg"
        description="We plan and execute Annual Fests and Sales Meets with strategic planning, professional event operations, and seamless coordination—ensuring engaging experiences, flawless execution, and strong brand impact."
      />

      {/* Add the remaining sports event page sections here */}

      <section className="relative mx-auto max-w-auto px-6 py-16 lg:py-20 overflow-hidden bg-white">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-25 lg:grid-cols-2">

          {/* LEFT SIDE: heading stays here, partner section is a component */}
          <div className=" ml-70">
            <h1 className="text-5xl font-bold uppercase leading-[1.2] tracking-tight text-[#111111] sm:text-6xl lg:text-[84px]">
              <span className="block">Annual & Sales </span>
              <span className="block text-[#1675b9]">Meet Organiser</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] text-black leading-[1.2] font-semibold">Corporate Event<br/>Management Company in Delhi</h2>

            <p className="mt-10">
              EMD by Hire4Event is a well-known and highly experienced event management company in Delhi, specializing in planning and executing corporate events of all scales. Backed by the legacy, infrastructure, and expertise of Hire4Event, EMD has successfully delivered impactful, well-organized, and result-driven corporate events for leading brands across India. From small internal employee meets to large-scale annual conferences and celebrations, we manage every aspect of corporate event planning with professionalism, creativity, and precision.
            </p>
            <p className="mt-5 mb-8">
                <strong>Our Corporate Event Management Expertise </strong><br/>We are widely trusted for organizing:
            </p>
            <div className="pl-5 space-y-1 text-base leading-[1.65] text-gray-900">
            <li><strong>Sales Meets & Sales Conferences</strong><br/>Strategically designed events to motivate sales teams, launch targets, and align business goals.</li>
            <li><strong>Dealer Meets & Channel Partner Meets</strong><br/>End-to-end management including venue, branding, presentations, entertainment, and engagement activities.</li>
            <li><strong>Annual Days & Annual Celebrations</strong><br/>Theme-based corporate celebrations with stage setup, artists, entertainment, awards, and gala dinners.</li>
            <li><strong>Annual Conferences & Business Meetings</strong><br/>Seamless conference planning with AV setup, stage design, delegate management, and technical support.</li>
            <li><strong>Employee Meets & Townhalls</strong><br/>Interactive and engaging employee events that strengthen company culture and communication.</li>
            <li><strong>Corporate Gatherings (Small to Large Scale)</strong><br/>From 50 to 5,000+ attendees, we handle logistics, production, and execution with ease.</li>

            </div>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                  “A successful corporate event is not just about execution—it’s about alignment, engagement, and impact. At EMD by Hire4Event, we transform corporate objectives into memorable experiences through strategic planning, creative execution, and flawless delivery.”
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
          Why Choose EMD by Hire4Event?
        </h2>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Proven corporate event experience across multiple industries</li>
          <li>Powered by Hire4Event with access to one of India’s largest event infrastructure and artist networks</li>
          <li>End-to-end event solutions including venue, production, AV, artists, branding, and hospitality</li>
          <li>Scalable event management for small boardroom meets to large annual gatherings</li>
          <li>Professional team ensuring smooth coordination and flawless execution</li>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Corporate Events Made Easy
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         At EMD by Hire4Event, we understand corporate objectives, timelines, and brand values. Our structured planning approach ensures stress-free event execution, allowing clients to focus on their business while we manage everything—from concept to closure. Whether it’s a sales meet in Delhi, a dealer conference, or a grand annual celebration, EMD delivers events that leave a lasting impression.<br/><strong>Looking to organize a corporate event in Delhi?</strong><br/>EMD by Hire4Event is your reliable partner for professional, seamless, and impactful corporate event management.
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