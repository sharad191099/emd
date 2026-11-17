"use client";
import Herosection from "../../../components/Service/Herosection";
import Partners from "../../../components/Service/Partners";
import EventHighlights from "../../../components/Service/Eventhighlights"
import Lowerservicecards from "../../../components/Service/Lowerservicecard";
import { useState } from "react";

const faqs= [
  {question: "What types of exhibitions and trade shows do you organise?",
   answer: "We organise trade exhibitions, B2B and B2C trade shows, industry expos, product showcase exhibitions, startup and franchise expos, consumer fairs, and government and institutional exhibitions."},
  {question: "Do you provide end-to-end exhibition management services?",
   answer:"Yes. We offer complete end-to-end exhibition management including concept planning, venue coordination, stall design and fabrication, electricals, AV setup, branding, exhibitor coordination, and on-ground operations."},
  {question: "Can you manage large-scale national and international exhibitions?",
   answer:"Yes. We have the experience, infrastructure, and production network to manage large-scale national and international exhibitions with multiple exhibitors and high visitor footfall."},
  {question: "Do you handle stall design and fabrication?",
   answer: "Absolutely. We provide custom and modular stall design, octanorm setups, fabrication, installation, and dismantling as per exhibitor and brand requirements."},
  {question: "Do you offer technology-driven exhibition solutions?",
   answer:"Yes. We provide digital registration systems, QR-based entry, badge printing, LED walls, digital displays, audio-visual setups, and live demonstrations for enhanced visitor engagement."},
  {question: "Which cities do you provide exhibition management services in?",
   answer:"We offer Pan-India exhibition services including Delhi, Noida, Gurgaon, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Ahmedabad, Jaipur, Chandigarh, Kolkata, and other major cities."},
  {question: "Can exhibitions be customized based on business objectives?",
   answer:"Yes. Every exhibition is strategically customized based on industry type, target audience, exhibitor goals, branding needs, and business objectives."},
  {question: "Do you manage exhibitor coordination and on-ground operations?",
   answer:"Yes. We handle complete exhibitor onboarding, coordination, vendor management, security, housekeeping, crowd control, and on-site supervision for smooth exhibition execution."},
  {question: "How early should we contact you to plan an exhibition?",
   answer:"We recommend contacting us at least 6–8 weeks in advance for standard exhibitions and 3–4 months in advance for large-scale trade shows or national expos."},
];
const Lowerservicescard = [
  {id: 1,number: "01",title: "Exhibitions, Trade Shows & Expos",description:"We plan and execute exhibitions, trade shows, and expos with strategic layout planning,stall management,branding, visitor engagement, and seamless on-ground coordination.",link: "#",},
  {id: 2,number: "02",title: "Stall Design & Fabrication",description:"We design and fabricate custom exhibition stalls with creative concepts, high-quality materials, impactful branding, lighting, and functional layouts to attract maximum footfall.",link: "#",},
  {id: 3,number: "03",title: "Brand Showcases & Product Displays",description:"We manage brand showcases and product display zones with engaging setups, LED screens, demo areas, promotional activities, and professional brand presentation.",link: "#",},
  {id: 4,number: "04",title: "Exhibitor & On-Ground Management",description:"We handle exhibitor coordination, vendor management, logistics, technical support, and live supervision to ensure smooth exhibition operations from setup to dismantling.",link: "#",},
];

export default function ExhibitionEventsPage() {
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
          { label: "PROFESSIONAL EXHIBITION ORGANISER" }
        ]}
        heading={[
          { text: "EXHIBITION" },
          { text: "MANAGEMENT ", highlight: true },
          { text: "IN" },
          { text: "DELHI", highlight: true },
          { text: "NCR" }
        ]}
        backgroundVideo="https://www.event-management-delhi.com/assets/videos/upits-2025-msme-lok-bhawan.mp4"
        description="We plan and execute exhibitions with strategic planning, creative stall design, and seamless coordination, ensuring maximum brand visibility, visitor engagement, and business impact."
      />

      {/* Add the remaining sports event page sections here */}

      <section className="relative mx-auto max-w-auto px-6 py-16 lg:py-20 overflow-hidden bg-white">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-25 lg:grid-cols-2">

          {/* LEFT SIDE: heading stays here, partner section is a component */}
          <div className=" ml-70">
            <h1 className="text-5xl font-bold uppercase leading-[1.2] tracking-tight text-[#111111] sm:text-6xl lg:text-[84px]">
              <span className="block">EXHIBITION</span>
              <span className="block text-[#1675b9]">ORGANISER</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">

            <p className="mt-6">
              Planning a successful exhibition requires strategic thinking, creative presentation, and flawless execution. As a professional Exhibition Organiser, we help brands attract the right audience and generate business leads through well-managed exhibitions, trade shows, expos, product displays, and industry fairs. From exhibition concept development and stall design to venue coordination, branding, audio-visuals, lighting, and on-ground management — every detail is handled with precision to showcase your brand effectively.
            </p>
            <p className="mt-5">
               Based in Delhi NCR, we work with startups, corporates, MNCs, government bodies, and associations to deliver high-impact exhibitions of all scales. Our modern approach includes custom stall fabrication, digital branding, LED screens, visitor flow management, live demos, and technical support. With a strong vendor network, industry expertise, and strict quality control, we ensure smooth execution, strong brand visibility, and measurable ROI from every exhibition.
            </p>
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
             <p className="mt-5">
                If you are looking to hire an experienced Exhibition Organiser in Delhi NCR who understands brand positioning, visitor engagement, and flawless execution, we are ready to help you plan your next successful exhibition.
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
          Extensive Experience in Trade Shows & Exhibitions 
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our exhibition management team brings extensive hands-on experience in planning and executing high-impact exhibitions, trade shows, and expos across industries. We understand the complexity of exhibition environments and deliver seamless coordination from concept to closure
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Trade Exhibitions & Industry Expos</li>
          <li>B2B & B2C Trade Shows</li>
          <li>International & National Exhibitions</li>
          <li>Product Showcase Exhibitions</li>
          <li>Franchise & Startup Expos</li>
          <li>Consumer Fairs & Public Exhibitions</li>
          <li>Government & Institutional Exhibitions</li>
          <li>Corporate Brand Exhibitions</li>
          <li>Buyer–Seller Meets & Trade Networking Events</li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We ensure strict adherence to timelines, exhibitor coordination, venue regulations, safety norms, and brand standards—delivering every exhibition with precision and professionalism.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          One of the Most Reliable Professional Exhibition Organisers in India
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          With a strong foundation in exhibition planning and execution, we provide complete end-to-end exhibition management solutions under one roof.
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Exhibition concept planning & layout design</li>
          <li>Venue selection, booking & coordination</li>
          <li>Stall design, fabrication & modular setups</li>
          <li>Custom & octanorm stall construction</li>
          <li>Electricals, lighting & power distribution</li>
          <li>Audio-visuals, LED walls & digital displays</li>
          <li>Exhibitor onboarding & coordination</li>
          <li>Entry management, badges & registration systems</li>
          <li>Branding, signage & wayfinding</li>
          <li>On-ground exhibition operations & supervision</li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
         Our structured approach ensures smooth exhibitor experiences, strong visitor flow, and maximum brand exposure.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
       Exhibitions Designed for Visibility, Engagement & Business Growth
       </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our exhibitions are strategically designed to deliver measurable business outcomes while creating immersive brand experiences.
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Enhanced brand visibility & recall</li>
          <li>Lead generation & business networking</li>
          <li>Product launches & live demonstrations</li>
          <li>Buyer engagement & footfall optimization</li>
          <li>Industry positioning & thought leadership</li>
          <li>Dealer, distributor & partner interaction</li>
          <li>Market expansion & customer acquisition</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          Each event is customized based on audience profile, corporate culture, and business objectives
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Pan-India Exhibition Management Services
        </h2>
        <p className="mb-1 text-base leading-[1.65] text-gray-900">
          We offer Pan-India exhibition organising services with experienced teams and trusted fabrication and production partners across major cities.
        </p>
        <h3 className="font-bold text-[#202020] mb-3">Key Cities We Serve</h3>
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
         <p className="mt-24 text-base leading-[1.65] text-gray-900">
         Whether it’s a local trade fair or a large-scale national expo, we ensure consistent quality and professional execution across locations.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
         Why Choose Us as Your Exhibition Organiser?
          </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Experienced exhibition planners & project managers</li>
          <li>End-to-end in-house exhibition management</li>
          <li>Strong stall fabrication & production network</li>
          <li>Seamless exhibitor & vendor coordination</li>
          <li>Technology-driven registration & entry systems</li>
          <li>Creative layouts with optimized visitor flow</li>
          <li>Transparent costing & budget control</li>
          <li>Dedicated on-site teams for smooth execution</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
         We focus on operational excellence, exhibitor satisfaction, and strong ROI for brands.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          End-to-End Exhibition Solutions Under One Roof
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Exhibition Planning & Strategy</li>
          <li>Venue Liaison & Permissions</li>
          <li>Stall Design, Fabrication & Installation</li>
          <li>Electrical, Lighting & AV Setup</li>
          <li>Exhibition Branding & Signage</li>
          <li>Visitor Registration & Badge Printing</li>
          <li>Exhibitor Support & Coordination Desk</li>
          <li>Security, Housekeeping & Crowd Management</li>
          <li>On-Ground Exhibition Operations</li>
          <li>Post-Event Reporting & Analytics</li>
        </div>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Your Trusted Partner for Professional Exhibitions
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          From focused industry expos to large-scale trade shows, we deliver well-organized exhibitions that drive visibility, engagement, and business growth. With professional planning, experienced execution teams, and reliable infrastructure, we turn exhibitions into powerful business platforms.
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