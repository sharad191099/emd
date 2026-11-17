"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What Product Launch & BTL Promotions services do you provide?",
   answer: "As a professional Brand Promotion Organiser, we provide end-to-end Product Launch & BTL Promotions services, including launch strategy, location planning, branding, permissions, promoters, on-ground execution, product demos, sampling, lead generation, and post-campaign reporting."},
  {question: "How do your Product Launch & BTL Promotions help brands enter the market effectively?",
   answer:"Our Product Launch & BTL Promotions are designed to create controlled brand messaging, direct audience interaction, and immediate visibility. We help brands connect with consumers at the ground level, influence buying decisions, and establish strong market presence from day one."},
  {question: "Do you manage complete product launch campaigns from planning to execution?",
   answer:"Yes. We manage complete product launch campaigns under one roof, including concept planning, venue or location coordination, stage and AV setup, branding production, staffing, supervision, and execution—ensuring a seamless and professional launch experience."},
  {question: "What types of BTL Promotions do you execute for brands?",
   answer: "We execute a wide range of BTL Promotions, including mall activations, retail store promotions, roadshow-based BTL campaigns, corporate park activations, residential society promotions, sampling drives, and product demo campaigns tailored to brand objectives."},
  {question: "Do you offer mall and retail activations for product launches?",
   answer:"Yes. We specialize in mall and retail Product Launch & BTL Promotions, including kiosk design, stall setup, mall permissions, trained promoters, and customer engagement planning—ideal for FMCG, electronics, lifestyle, and retail brands."},
  {question: "Can you run roadshow and mobile van campaigns as part of BTL Promotions?",
   answer:"Absolutely. Our mobile van and roadshow-based BTL Promotions provide wide-area coverage through branded vehicles, planned routes, live announcements, and on-ground activations— perfect for mass-market product launches and regional brand penetration."},
  {question: "Do you provide trained promoters and brand ambassadors for BTL campaigns?",
   answer:"Yes. We provide trained brand promoters, product demonstrators, and campaign supervisors for all Product Launch & BTL Promotions. Every team member is briefed on brand messaging, product USPs, and engagement goals to ensure professional brand representation."},
  {question: "Which industries do you serve with Product Launch & BTL Promotions?",
   answer:"We deliver Product Launch & BTL Promotions for FMCG, real estate, automobiles, EV brands, retail, lifestyle, corporate, and service-based industries, with campaign formats customized according to industry behavior and audience expectations."},
   {question: "In which cities do you execute Product Launch & BTL Promotions?",
   answer:"We execute Product Launch & BTL Promotions across Delhi NCR and pan-India, including Delhi, Noida, Gurgaon, Mumbai, Bangalore, Pune, Hyderabad, Chandigarh, Jaipur, and other key markets—ensuring consistent quality nationwide."},
   {question: "Why should brands choose you as their Product Launch & BTL Promotions partner?",
   answer:"Brands choose us for strategic planning, in-house production, experienced on-ground teams, transparent coordination, and measurable results. As a trusted Brand Promotion Organiser, we deliver Product Launch & BTL Promotions that are structured, scalable, and results-driven."}
];

export default function productlaunchpage() {
   const [openIndex, setOpenIndex] = useState(null);
   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Product Launch & BTL " },
                { text: "Promotions", highlight: true },
              ]}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/Services" },
                {label: "Brand Promotion Organiser"}
              ]}
              rightTitle="SERVICES" 
            />
        <div className="flex min-h-[25px] w-full items-center justify-center">
      <img
        src = "	https://event-management-delhi.com/assets/img/shape/star-1.png"
        alt = "Star">
        </img>
        </div>

      {/* Add the remaining sports event page sections here */}

      <section className="relative mx-auto max-w-auto px-6 py-16 lg:py-10 overflow-hidden bg-white">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-25 lg:grid-cols-2">

          {/* LEFT SIDE: heading stays here, partner section is a component */}
          <div className=" ml-70">
            <h1 className="text-5xl font-bold uppercase leading-[1.2] tracking-tight text-[#111111] sm:text-6xl lg:text-[84px]">
              <span className="block">Product Launch & BTL</span>
              <span className="block text-[#1675b9]">Promotions Planner</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">High-Impact Product Launch & BTL Promotions for Strong Brand Visibility and Market Entry</h2>

            <p className="mt-10">
                To launch a product or run a BTL promotion today, you need more than just being seen. Brands need to enter the market with a clear plan, control, and purpose. Product launches and below-the-line promotions give people a chance to see, touch, and understand a product in real life. When planned carefully, these campaigns help brands build trust, clearly communicate value, and affect purchase decisions at the most basic level.
            </p>
             <p className="mt-5">
                A professional brand promotion organizer's services for product launches and below-the-line promotions are meant to give people structured, results-oriented brand experiences. Every part of the campaign, from setting goals to choosing the best activation formats and locations, is in line with the brand's goals. These promotions help brands get the word out, get people to interact with them, get leads, and help people remember them, especially in competitive markets where there isn't much attention and trust is important.
            </p>
            <p className="mt-5">
                We handle everything from product launches to below-the-line promotions as an experienced brand promotion organizer. Our method includes strategic planning, creative branding, trained staff, and smooth execution on the ground. Every campaign is carried out with professionalism and consistency, whether it takes place in malls, corporate parks, residential areas, or outside. This ensures strong visibility, controlled messaging, and measurable results.
                </p>          
            <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “Product Launch & BTL Promotions by a Professional Brand Promotion Organiser enable brands to enter markets with confidence and clarity. Through planned execution, audience-focused engagement, and strong on-ground presence, these campaigns turn product introductions into impactful brand experiences. When done right, BTL promotions go beyond awareness to build trust, drive interaction, and support long-term brand growth.”
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
        <h2 className="mt-2 mb-3 text-[22px] font-semibold text-[#202020]">
          Planning and Carrying Out Product Launches and BTL Promotions Campaigns in a Smart Way
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           A clear execution roadmap is the first step in every successful Product Launch & BTL Promotions campaign. Before we launch a campaign, we work closely with brands to figure out the goals, target audience, activation format, and location strategy.<br/><strong>Our Planning Process Ensures</strong>
        </p>  
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Consistent brand positioning</li>
            <li>The best place for the most exposure</li>
            <li>Design that focuses on the audience</li>
            <li>Teams work together without any problems</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          With this structured approach, we can offer Product Launch and BTL Promotions that are effective, scalable, and ready for the market.
        </p>
      </div>

      {/* Section 2 */}

      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Full Range of Product Launch Management Services for Brand Promotions
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
            We take full responsibility for a brand's Product Launch and BTL Promotions when they work with us. Everything, from planning to execution, is taken care of in one place.<br/><strong>Our Product Launch Support Includes</strong>
        </p>  
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planning the launch of a product and its rollout</li>
            <li>Making sure the venue and location are in sync</li>
            <li>Stage, AV, and technical production</li>
            <li>Branding, making things, and setting up displays</li>
            <li>People and supervision on the ground</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This integrated execution model makes sure that your Product Launch and BTL Promotions are always professional, organized, and in line with your brand.
        </p>
      </div>

      {/* Section 3 */}

      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          BTL Promotions Services Made for Interacting Directly with Customers
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We are a results-driven Brand Promotion Organizer that creates BTL Promotions that put brands in front of their target audience. Our Product Launch and BTL Promotions are all about interaction, experience, and conversion, not just branding.<br/><strong>Our BTL Campaigns Are Designed To:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Get people to try out and demo products</li>
            <li>Help people interact with each other in real time</li>
            <li>Let you get leads and feedback</li>
            <li>Make it easier for people to remember your brand at the ground level</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Every campaign is set up to get people involved and show real results.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Services for Activating Malls and Stores for Product Launches and BTL Promotions
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          Planning is very important in retail spaces with a lot of foot traffic. We do Product Launch and BTL Promotions in malls and stores while following all rules, making sure that the branding is strong, and controlling the flow of customers.<br/><strong>Our Mall Activation Services Include</strong>
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Design of kiosks and stalls</li>
            <li>Coordination of mall permissions</li>
            <li>Putting promoters in place and keeping an eye on them</li>
            <li>Planning how to get customers involved</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          These Product Launch and BTL Promotions are great for brands in the FMCG, electronics, lifestyle, and retail sectors.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Mobile Van and Roadshow Campaigns for BTL Brand Promotions
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         Our Product Launch & BTL Promotions, which are based on roadshows, give brands a lot of exposure in a lot of different places.<br/><strong>We Take Care Of</strong>
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Cars and vans with brand names</li>
            <li>Planning routes and coverage by city</li>
            <li>Activities for promoting and announcing live events</li>
            <li>Monitoring of centralized execution</li>
        </div>  
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
          These BTL campaigns work very well for products that are sold to a lot of people and for growing a brand in a specific area.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Corporate Activation Services for Launching Products and BTL Promotions
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We do Product Launch and BTL Promotions in corporate parks, IT hubs, and business centers. This lets brands reach working professionals and decision-makers.<br/><strong>These Activations Are Meant To</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Keep a high-end brand tone</li>
            <li>Allow focused product interaction</li>
            <li>Give leads that are of high quality</li>
        </div>  
        <p className="mt-6 text-base leading-[1.5] text-gray-900">
         Product launches and BTL promotions that focus on businesses work best for brands in the tech, finance, wellness, and service industries.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Activations in Residential Areas for Local BTL Brand Promotions
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Residential campaigns build trust and familiarity. Our Product Launch and BTL Promotions in housing societies are meant to get families involved in a way that is comfortable and not too pushy.<br/>We Take Care Of
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Permissions at the level of society</li>
            <li>Events and activities on weekends and holidays</li>
            <li>Trying out products and samples</li>
            <li>Collecting and reporting leads</li>
        </div>  
        <p className="mt-6 text-base leading-[1.5] text-gray-900">
         Product launches and BTL promotions that focus on businesses work best for brands in the tech, finance, wellness, and service industries.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Trained Promoters and Brand Ambassadors for Product Launches and Below-the-Line Promotions
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           People are the face of your brand. That's why we have trained people to help with our Product Launch and BTL Promotions:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>People who promote brands</li>
            <li>People who show off products</li>
            <li>Supervisors of campaigns</li>
        </div>  
        <p className="mt-6 text-base leading-[1.5] text-gray-900">
         Product launches and BTL promotions that focus on businesses work best for brands in the tech, finance, wellness, and service industries.
        </p>
      </div>
      </div>

      {/* Image */}
      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/product-launch-btl-promotion-services.jpg"
              alt="Product Launch & BTLPromotions"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="mb-3 text-center">Product Launch & BTLPromotions</p>
          </div>



        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      {/* Section 9 */}

      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
           Custom Branding and Making Things for Product Launches and Below-the-Line Promotions
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Visual impact is very important for Product Launch and BTL Promotions. We make and design branding elements that make products more visible and focused.<br/><strong>Our Branding Services Include</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Kiosks and counters made just for you</li>
            <li>Units for displaying products</li>
            <li>Backdrops, standees, and branding for stores</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          All branding is done to keep the quality, durability, and consistency of the brand.      
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
           Why We Are a Reliable Brand Promotion Company for Product Launches and BTL Promotions
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Brands choose us because we know how to get things done, how long they will take, and what the market wants.<br/><strong>Some of Our Strengths Are</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A team that knows how to promote brands</li>
            <li>Production and logistics done in-house</li>
            <li>Ability to carry out tasks across India</li>
            <li>Clear coordination and reporting</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          As a professional Brand Promotion Organizer, we offer Product Launch and BTL Promotions that brands can trust.
        </p>
      </div>

      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Services for Launching Products and BTL Promotions in Specific Industries
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We offer Product Launch and BTL Promotions for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Brands for fast-moving consumer goods</li>
            <li>Companies that deal with real estate and infrastructure</li>
            <li>Brands of cars and electric vehicles</li>
            <li>Brands for stores and lifestyles</li>
            <li>Clients from businesses and corporations</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We change each campaign based on how people in the industry act and what the target audience wants.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Support for Product Launches and BTL Promotions Across India
        </h2>
        <p className="mb-2 text-base leading-[1.65] text-gray-900">
          We do Product Launch and BTL Promotions all over India, even though we are based in Delhi NCR. Some of the major cities we work in are Delhi, Noida, Gurgaon, Mumbai, Bangalore, Pune, Hyderabad, Chandigarh, Jaipur, and others. This lets brands keep the same level of quality across different markets.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Pan-India execution with consistent brand messaging and quality standards</li>
            <li>Centralized planning combined with local on-ground execution teams</li>
            <li>City-wise permissions, logistics, and vendor coordination</li>
            <li>Ability to manage single-city and multi-city BTL campaigns seamlessly</li>
            <li>Scalable activation models for regional and national product launches</li>
        </div>
      </div>


       <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Brand Promotion and Event Management Services That Work Together
        </h2>
        <p className="mb-2 text-base leading-[1.65] text-gray-900">
          You can use our Product Launch and BTL Promotions with:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planning and running corporate events</li>
            <li>Taking part in trade shows and exhibitions</li>
            <li>Getting artists and celebrities involved</li>
            <li>Big brand activations</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This lets brands run full brand promotion campaigns with just one partner.
        </p>
      </div>


       <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Product Launch and BTL Promotions by Professionals That Work
        </h2>
        <p className="mb-2 text-base leading-[1.65] text-gray-900">
          Our Product Launch & BTL Promotions services are designed to help with visibility, engagement, and growth if you're planning a new launch or want to strengthen your brand's presence on the ground. At event-management-delhi.com, we don't just run campaigns; we also make sure that brands do well on the ground.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Strategic planning and execution for product launches and BTL campaigns</li>
            <li>On-ground brand activations focused on real customer engagement</li>
            <li>Experienced promoters and supervisors managing live interactions</li>
            <li>End-to-end coordination including permissions, logistics, and setup</li>
            <li>Performance tracking and reporting for measurable campaign results</li>
        </div>
      </div>
      </div>


    <div>
        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
          We can help you plan your next product launch and BTL promotions campaign.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Contact our team today to work with a trusted Brand Promotion Organiser that top brands in India use to plan Product Launches and BTL Promotions. From campaign strategy and location planning to on-ground execution, staffing, and reporting, we manage every stage of your product launch and BTL marketing activities. Our team focuses on creating high-impact brand activations that drive visibility, engagement, and measurable results across retail spaces, corporate environments, roadshows, and experiential campaigns nationwide.
        </p>
    </div>

 {/* FAQ*/}

<section className="mt-15 mb-30"> 

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
        <span className="text-[18px] font-normal leading-10 text-[#111827]">
            {index+1}. {faq.question}
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
    </main>
  );
}