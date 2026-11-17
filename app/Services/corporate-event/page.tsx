"use client";
import Herosection from "../../../components/Service/Herosection";
import Partners from "../../../components/Service/Partners";
import EventHighlights from "../../../components/Service/Eventhighlights"
import Lowerservicecards from "../../../components/Service/Lowerservicecard";
import { useState } from "react";

const faqs= [
  {question: "What types of corporate events do you manage?",
   answer: "We manage conferences, seminars, product launches, annual days, award ceremonies, sales meets, exhibitions, team-building activities, and business meetings."},
  {question: "Do you provide end-to-end corporate event management?",
   answer:"Yes. We offer complete solutions including planning, venue selection, production, branding, logistics, and on-site coordination."},
  {question: "Can you manage large-scale corporate events?",
   answer:"Yes. We have experience managing events with hundreds to thousands of attendees while ensuring smooth operations and compliance."},
  {question: "Do you provide technology-driven event solutions?",
   answer: "Yes. We offer digital invitations, online registrations, QR check-ins, LED screens, live streaming, professional sound, and advanced lighting."},
  {question: "Which cities do you provide corporate event services in?",
   answer:"We offer Pan-India services including Delhi NCR, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Ahmedabad, Jaipur, Chandigarh, Kolkata, and more."},
  {question: "Can corporate events be customized as per business objectives?",
   answer:"Absolutely. Every corporate event is customized based on brand goals, audience, format, and budget."},
  {question: "Do you handle corporate branding and décor?",
   answer:"Yes. We manage complete event branding, stage design, décor, signage, and visual identity aligned with brand guidelines."},
  {question: "How early should we contact you to plan a corporate event?",
   answer:"We recommend contacting us 4–6 weeks in advance for standard events and 2–3 months in advance for large-scale conferences or exhibitions."},
];
const Lowerservicescard = [
  {id: 1,number: "01",title: "Exhibitions & Conference Events",description:"We plan and manage exhibitions and conferences with smooth coordination, production setup, and professional guest handling.",link: "#",},
  {id: 2,number: "02",title: "Annual Day & Sales Meet Planning",description:"We organize Annual Days and Sales Meets with themes, awards, presentations, entertainment, and complete event planning.",link: "#",},
  {id: 3,number: "03",title: "Brand Promotions & Product Launch Events",description:"We execute engaging product launches and brand promotion events with creative concepts, staging, media support, and audience engagement.",link: "#",},
  {id: 4,number: "04",title: "Entertainment & Artist Management",description:"We provide artists, performers, and entertainment services with full coordination, stage support, and performance management.",link: "#",},
];

export default function CorporateEventsPage() {
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
          { label: "CORPORATE EVENT ORGANISER" }
        ]}
        heading={[
          { text: "CORPORATE" },
          { text: "EVENT", highlight: true },
          { text: "MANAGEMENT" },
          { text: "COMPANY", highlight: true },
          { text: "IN DELHI" }
        ]}
        backgroundImage="https://event-management-delhi.com/assets/img/hero/event-management-company-in-delhi.jpg"
        description="We plan and manage corporate events with precision, creativity, and seamless coordination, ensuring every detail supports your goals and creates impact."
      />

      {/* Add the remaining sports event page sections here */}

      <section className="relative mx-auto max-w-auto px-6 py-16 lg:py-20 overflow-hidden bg-white">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-25 lg:grid-cols-2">

          {/* LEFT SIDE: heading stays here, partner section is a component */}
          <div className=" ml-70">
            <h1 className="text-5xl font-bold uppercase leading-[1.2] tracking-tight text-[#111111] sm:text-6xl lg:text-[84px]">
              <span className="block">CORPORATE</span>
              <span className="block text-[#1675b9]">EVENT</span>
              <span className="block text-[#1675b9]">PLANNER</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Corporate Event Planner for Conferences, Meetings & Brand Events</h2>

            <p className="mt-10">
              To plan a successful corporate event, precision, creativity, and flawless execution are essential. As a leading Corporate Event Planner, we help brands achieve their business goals through impactful events such as conferences, seminars, annual days, team-building activities, award ceremonies, product launches, trade fairs, and business meetings. From venue selection and stage setup to audio-visuals, branding, décor, catering, artist management, hospitality, logistics, and on-site coordination — every detail is handled with complete professionalism to reflect your brand image and event objectives.
            </p>
            <p className="mt-5">
                Based in Delhi NCR, we work with startups, corporates, government bodies, associations, MNCs, and global brands, delivering high-quality events of every scale. Our tech-driven approach includes digital invites, registration kiosks, LED screens, live streaming, stage lighting, and expert sound engineering. With a strong vendor network, industry expertise, and a focus on compliance and quality, we ensure stress-free planning, smooth execution, and memorable corporate experiences.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                 “A well-planned business event may help people get to know each other, improve the company's image, and produce value that lasts. When you choose our full end-to-end planning service, you receive a dependable partner who is dedicated to providing high-quality work, professionalism, and smooth implementation.”
              </p>
            </div>
             <p className="mt-5">
                If you want to hire a skilled Corporate Event Planner that knows how to meet company needs, meet audience expectations, and display your brand well, we're ready to help you plan your next successful event.
            </p>
          </div>
        </div>
        </section>


          <section className="ml-8 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">

      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Extensive Experience in Corporate & Business Events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our corporate event planning team brings extensive experience in managing a wide range of business and brand-focused events across industries.
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Corporate Conferences & Seminars</li>
          <li>Annual General Meetings (AGMs)</li>
          <li>Sales Meets & Dealer Conferences</li>
          <li>Product Launch Events</li>
          <li>Award Ceremonies & Recognition Nights</li>
          <li>Corporate Annual Days & Celebrations</li>
          <li>Team-Building & Employee Engagement Events</li>
          <li>Trade Fairs & Exhibitions</li>
          <li>Business Meetings & Networking Events</li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We ensure strict adherence to timelines, confidentiality, compliance, and brand consistency, delivering every corporate event with precision and professionalism.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          One of the Most Reliable Corporate Event Planners in India
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          With a strong foundation in corporate event execution, we provide complete end-to-end corporate event management solutions.
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Corporate event concept & theme development</li>
          <li>Venue identification & negotiation</li>
          <li>Stage design, fabrication & décor</li>
          <li>Audio-visuals, LED screens & sound systems</li>
          <li>Digital invites & guest registration management</li>
          <li>Speaker, anchor, artist & celebrity management</li>
          <li>Corporate branding & signage</li>
          <li>Hospitality, catering & logistics coordination</li>
          <li>On-ground event operations & execution</li>
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
       Corporate Events Designed for Engagement & Brand Impact</h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our corporate events are strategically designed to deliver real business impact while creating meaningful engagement.
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Brand visibility & positioning</li>
          <li>Employee motivation & engagement</li>
          <li>Leadership communication</li>
          <li>Client, dealer & partner engagement</li>
          <li>Product awareness & market launches</li>
          <li>Knowledge sharing & networking</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          Each event is customized based on audience profile, corporate culture, and business objectives
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Pan-India Sports Event Management Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We offer Pan-India corporate event management services with experienced teams and trusted vendor partners across major cities.
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

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
         Why Choose Us for Corporate Event Management? </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Experienced corporate event professionals</li>
          <li>End-to-end in-house event management solutions</li>
          <li>Strong vendor & production network</li>
          <li>Technology-driven event execution</li>
          <li>Creative concepts with flawless delivery</li>
          <li>Transparent planning & budget management</li>
          <li>Dedicated event managers for smooth coordination</li>
        </div>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          End-to-End Corporate Event Solutions Under One Roof
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Corporate Event Planning & Strategy</li>
          <li>Venue & Infrastructure Setup</li>
          <li>Stage, Audio-Visuals & Lighting</li>
          <li>Event Branding & Corporate Collateral</li>
          <li>Digital Registration & Event Technology</li>
          <li>Artist, Anchor & Speaker Management</li>
          <li>Hospitality, Catering & Logistics</li>
          <li>On-Ground Event Operations</li>
          <li>Post-Event Support & Reporting</li>
        </div>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Your Trusted Partner for Professional Corporate Events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          From leadership conferences to large-scale brand events, we deliver seamless execution,
          strong brand impact, and long-term value through professionally managed corporate events.
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