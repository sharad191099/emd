"use client";
import Herosection from "../../../components/Service/Herosection";
import Partners from "../../../components/Service/Partners";
import EventHighlights from "../../../components/Service/Eventhighlights"
import Lowerservicecards from "../../../components/Service/Lowerservicecard";
import { useState } from "react";

const faqs= [
  {question: "What is EMD by Hire4Event?",
   answer: "EMD is the event management division of Hire4Event, specializing in product launches, ATL & BTL marketing, brand activations, and experiential campaigns."},
  {question: "What ATL and BTL services does EMD offer?",
   answer:"We offer roadshows, mall activations, retail promotions, exhibitions, corporate promotions, product sampling, and integrated brand campaigns."},
  {question: "Does EMD manage brand promotions and activations?",
   answer:"Yes, EMD handles end-to-end brand promotions including planning, permissions, execution, manpower, and reporting."},
  {question: "Can EMD handle large-scale and multi-city campaigns?",
   answer: "Absolutely. Backed by Hire4Event’s nationwide infrastructure, we manage multi-city campaigns across India with consistent quality."},
  {question: "Does EMD provide creative and conceptual support?",
   answer:"Yes, our team delivers campaign ideation, creative concepts, branding design, and audience engagement strategies."}
];
const Lowerservicescard = [
  {id: 1,number: "01",title: "Product Launch Planning & Strategy",description:"We plan and execute large-scale product launch events with strong strategic planning, creative concepts, launch flow design, and integrated ATL &amp; BTL alignment to ensure maximum brand impact and visibility.",link: "#",},
  {id: 2,number: "02",title: "Event Production, Branding & Setup",description:"We manage complete event production including stage design, LED screens, sound, lighting, experiential zones, kiosks, product displays, and brand-led visual setups aligned with launch objectives.",link: "#",},
  {id: 3,number: "03",title: "Brand Promotion & Audience Engagement",description:"We execute high-impact brand promotion activities including mall activations, roadshows, product sampling, influencer engagement, media interactions, and experiential marketing to drive audience engagement and recall.",link: "#",},
  {id: 4,number: "04",title: "On-Ground Execution & Campaign Management",description:"We manage end-to-end on-ground execution including permissions, logistics, manpower, crowd flow, compliance, real-time supervision, and post-event reporting to ensure flawless delivery of large-scale launch and promotion campaigns.",link: "#",},
];

export default function BrandEventsPage() {
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
          { label: "Brand Promotion Organiser" }
        ]}
        heading={[
          { text: "Creative" },
          { text: "Brand Promotion", highlight: true },
          { text: "Solutions" }
        ]}
        backgroundImage="https://event-management-delhi.com/assets/img/hero/brand-promotion-company.jpg"
        description="We plan and execute high-impact brand promotion campaigns with strategic planning, creative execution, and seamless on-ground coordination, ensuring strong audience engagement, consistent brand messaging, and maximum visibility across ATL and BTL platforms."
      />

      {/* Add the remaining sports event page sections here */}

      <section className="relative mx-auto max-w-auto px-6 py-16 lg:py-20 overflow-hidden bg-white">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">

          {/* LEFT SIDE: heading stays here, partner section is a component */}
          <div className=" ml-70">
            <h1 className="text-5xl font-bold uppercase leading-[1.2] tracking-tight text-[#111111] sm:text-6xl lg:text-[84px]">
              <span className="block">Brand Promotion </span>
              <span className="block text-[#1675b9]">Solutions</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <p className="mt-10">
              EMD is the dedicated event management division of Hire4Event, created to deliver powerful, result-oriented marketing and brand activation solutions for leading brands across India. With deep industry experience and strong execution capabilities, EMD specializes in large-scale product launches, brand promotions, product sampling campaigns, and integrated ATL & BTL marketing events.
            </p>
            <div className="mt-5 mb-8">
            <p><strong>Large-Scale Product Launch Events </strong><br/>We design and execute impactful product launch events that create buzz, drive media attention, and deliver memorable brand experiences. From concept development and venue selection to stage design, technical production, artist engagement, and media coordination, EMD manages the entire launch seamlessly—whether it’s a corporate product unveiling or a high-energy public launch.
            </p>
             <p><strong>Brand Promotion & Activation </strong><br/>EMD helps brands connect directly with their target audience through innovative brand promotion and activation campaigns. Our experiential marketing strategies ensure strong visibility, customer engagement, and brand recall across malls, retail outlets, corporate parks, exhibitions, and public spaces
            </p>
             <p><strong>Product Sampling & Consumer Engagement </strong><br/>We execute high-impact product sampling campaigns designed to generate trials, feedback, and conversions. Our trained promoters, well-planned logistics, and strategic locations ensure maximum reach and effective consumer interaction for FMCG, lifestyle, tech, and corporate brands.
            </p>
            </div>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                   “A successful brand promotion builds visibility, trust, and audience connection. With our strategic brand promotion services, we create impactful activations, meaningful engagement, and memorable brand experiences that drive real business growth.”
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
          ATL & BTL Marketing Solutions by EMD
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         EMD delivers complete<strong>ATL (Above The Line)</strong> and <strong>BTL (Below The Line)</strong> marketing solutions designed to maximize brand visibility, engagement, and ROI.
         </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Roadshows & on-ground activations</li>
          <li>Mall activations & retail promotions</li>
          <li>Corporate & trade events</li>
          <li>Exhibitions & expos</li>
          <li>Promotional events & integrated campaigns</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         Our integrated approach ensures consistent brand messaging across all platforms while delivering measurable results.
         </p>
      </div>

       {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Why Choose EMD by Hire4Event
        </h2>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Backed by the expertise and infrastructure of Hire4Event</li>
          <li>Proven experience in large-scale brand & corporate events</li>
          <li>End-to-end execution with creative & technical excellence</li>
          <li>Pan-India reach with trusted vendors and manpower</li>
          <li>Customized solutions aligned with brand goals & budgets</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         Whether launching a product or strengthening brand presence, EMD delivers impactful and professionally managed brand experiences.
         </p>
      </div>

       {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Brand Promotion & Activation Expertise
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         EMD specializes in high-visibility brand promotions and experiential activations across malls, retail outlets, exhibitions, corporate parks, and public venues.<br/>From concept development to on-ground execution, we ensure strong audience engagement and long-term brand recall.
         </p>
      </div>

       {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Product Launch & Sampling Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         EMD manages small to large-scale product launch events including media launches, dealer launches, and public unveilings.
         </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Product sampling & promoter deployment</li>
          <li>Logistics & permission management</li>
          <li>Branding, kiosks & experiential zones</li>
          <li>Consumer engagement & lead generation</li>
        </div>
      </div>

       {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         ATL & BTL Marketing Services in Delhi NCR
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         EMD by Hire4Event actively delivers ATL & BTL marketing, product launches, brand activations, and sampling campaigns across Delhi, Noida, and Gurgaon.
         </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Mall activations & roadshows</li>
          <li>Corporate park promotions</li>
          <li>Product launches & exhibitions</li>
          <li>Sampling & retail campaigns</li>
        </div>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Brand Promotion Services in Mumbai & Bangalore
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        In Mumbai, EMD executes high-impact brand activations, mall promotions, and large-scale experiential campaigns.<br/>In Bangalore, we specialize in tech launches, startup promotions, corporate brand events, and integrated ATL & BTL activations.
         </p>
      </div>

       {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Pan-India & Multi-City Campaign Execution
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        EMD specializes in multi-city ATL & BTL campaigns across Delhi NCR, Mumbai, Bangalore, and other major cities.<br/>We manage city-wise permissions, local vendors, manpower, and compliance to ensure seamless and hassle-free execution.
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