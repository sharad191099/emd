"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What roadshow and outdoor campaign services do you provide as a brand promotion organiser?",
   answer: "As an Expert Brand Promotion Organiser, we provide end-to-end roadshows and outdoor campaign services, including campaign strategy, creative branding, roadshow vans, permissions, staffing, live activations, product demos, sampling, lead generation, and complete on-ground execution across Delhi NCR and pan-India."},
  {question: "Why should brands choose professional roadshows & outdoor campaigns for promotion?",
   answer:"Roadshows & Outdoor Campaigns by Expert Brand Promotion Organiser allow brands to connect directly with audiences in high-footfall public spaces. These campaigns create instant visibility, stronger recall, real-time engagement, and faster market penetration compared to standalone digital advertising."},
  {question: "Do you manage roadshow campaigns from planning to execution?",
   answer:"Yes. We manage roadshows and outdoor campaigns from concept to completion. Our services include location mapping, branding design, permissions, logistics, manpower, daily operations, technical setup, and post-campaign reporting—ensuring a seamless experience for brands."},
  {question: "What types of outdoor brand promotion campaigns do you execute?",
   answer: "We execute a wide range of outdoor brand promotion campaigns, including branded roadshow vans, mobile marketing units, product launch roadshows, sampling campaigns, live demos, awareness drives, corporate roadshows, and multi-city outdoor activations."},
  {question: "In which locations do you run roadshows and outdoor campaigns?",
   answer:"We run Roadshows & Outdoor Campaigns across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, and other metro and tier-2 cities in India. Our strong local vendor network allows us to scale campaigns efficiently without compromising quality."},
  {question: "Do you provide branded roadshow vans and mobile activation units?",
   answer:"Yes. As an Expert Brand Promotion Organiser, we provide fully customized branded roadshow vans and mobile units equipped with LED screens, sound systems, product display zones, and interactive branding to maximize visibility and audience engagement."},
  {question: "Do you arrange brand promoters and brand ambassadors for outdoor campaigns?",
   answer:"Absolutely. We provide trained brand promoters, emcees, and brand ambassadors for roadshows and outdoor campaigns. Our team is professionally briefed to communicate your brand message clearly, engage audiences, and drive participation and lead generation."},
  {question: "Can roadshows be combined with mall activations and retail promotions?",
   answer:"Yes. We specialize in integrated brand promotion campaigns that combine roadshows, outdoor activations, mall activations, and retail promotions. This approach ensures controlled engagement inside malls and high-reach visibility outdoors, improving overall campaign impact."},
   {question: "How do you measure the success of roadshows and outdoor campaigns?",
   answer:"Our Roadshows & Outdoor Campaigns by Expert Brand Promotion Organiser are ROI-driven. We track engagement levels, leads generated, sampling reach, footfall impact, audience interaction, and sales influence, supported by detailed post-campaign reports."},
   {question: "Which industries do you serve with roadshows and outdoor brand promotions?",
   answer:"We provide roadshows and outdoor campaigns for FMCG, real estate, automobiles, EV brands, education, healthcare, technology, retail, lifestyle brands, banking, and corporate clients. Every campaign is tailored to industry-specific goals and compliance requirements."}
];

export default function roadshowspage() {
   const [openIndex, setOpenIndex] = useState(null);
   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Roadshows & Outdoor " },
                { text: "Campaigns Organisers", highlight: true },
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
              <span className="block">Roadshows & Outdoor</span>
              <span className="block text-[#1675b9]">Planner</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Why Choose Roadshows and Outdoor Campaigns by a Professional Brand Promotion Company</h2>

            <p className="mt-10">
              Brands need more than just being seen online to make a real difference in today's very competitive market. Being there in person still has a big effect on how customers act and remember a brand. Roadshows and outdoor campaigns let brands go right into public places where people are naturally interested and get involved right away. Brands can make people more aware of them and leave a lasting impression by meeting them on the streets, in neighborhoods, and in places with a lot of foot traffic.
            </p>
             <p className="mt-5">
              Expert Brand Promotion Organizer's roadshows and outdoor campaigns are meant to get brands to the right places, at the right times, and with the right message. These campaigns turn normal public spaces into interactive brand zones where people can see, hear, feel, and interact with a brand in real time. Strategic planning, creative execution, and smooth coordination make sure that people can see and interact with the content in cities and regions.
            </p>
            <p className="mt-5">
                We are experts at planning and running roadshows and outdoor campaigns that make a big difference and get measurable results. Every part of the process, from figuring out brand goals to designing mobile branding units and overseeing their use in the field, is in line with marketing goals. These campaigns help brands launch new products, take over local markets, build trust, and make people remember them in very competitive areas all over Delhi NCR and India.
                </p>          
            <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “Roadshows & Outdoor Campaigns by Expert Brand Promotion Organiser bring brands closer to people through direct, high-visibility engagement in public spaces. With strategic route planning, creative branding, trained promotional teams, and flawless execution, these campaigns turn streets into powerful brand communication platforms. When executed professionally, outdoor campaigns generate strong recall, deeper engagement, and real business impact.”
              </p>
            </div>
          </div>
        </div>
        </section>


          <section className="ml-8 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
      
      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Why Choose Roadshows and Outdoor Campaigns by a Professional Brand Promotion Company
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Targeted in a smart way</li>
            <li>Done in a creative way</li>
            <li>Perfectly planned</li>
            <li>Focused on the brand and the return on investment</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Our team knows that outdoor advertising isn't only about being seen; it's also about having an experience, interacting with people, and having an impact. That's why we focus on offering complete brand promotion solutions that leave a lasting impact.
        </p>
      </div>

      {/* Section 2 */}

       <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
            Planning and carrying out a roadshow from start to finish
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
            We take care of every part of putting on a roadshow or outdoor campaign as an experienced Brand Promotion Organiser. Our Roadshows & Outdoor Campaigns by Expert Brand Promotion Organiser cover everything from the idea to the end:
        </p>  
      </div>

      {/* Section 3 */}

      <div>
        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
          Planning a campaign strategically
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            First, we learn about your brand's goals, target audience, and the areas you want to focus on. Our planning staff makes personalized roadshow plans that fit your marketing goals, whether they are getting leads, raising brand awareness, letting people try your products, or getting new customers.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Branding and Creative Concept
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          Strong graphics get people's attention. Our creative team makes customized vans, kiosks, mobile stages, hoardings, and other promotional settings that show off your brand's personality and message. Every part is made to draw people in and help them remember.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Mapping locations and giving permissions
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         Picking the right places is really important. We find places with a lot of foot traffic, like business centers, residential neighborhoods, markets, malls, and transit junctions. Our staff also takes care of getting the right permits from the city and police and making sure that everything is in line with local laws. This makes sure that the campaign goes off without a hitch.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Execution of High-Impact Outdoor Campaign
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our Roadshows and Outdoor Campaigns are run with accuracy and expertise by Expert Brand Promotion Organiser. We make sure that every activity runs well and has the biggest effect by focusing on flawless on-the-ground administration.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Branded Roadshow Vans and Mobile Units
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We use fully customized branded roadshow vehicles that have sound systems, LED screens, product display areas, and interactive branding features. These mobile units are like moving billboards that make a lot of people see them on certain routes.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Brand Ambassadors and Promotional Staff
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           Our skilled brand ambassadors, promoters, and emcees will represent your brand in a professional way. They talk directly to audiences, get their messages over, hand out promotional materials, and get them to participate.
        </p>
      </div>


      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Showing off and sampling products
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Trust grows as people connect with each other. We do live product demos, sample events, and immersive activations that let clients try out your product or service for themselves.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
           Outdoor Brand Promotion Solutions That Work
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our Roadshows and Outdoor Campaigns by Expert Brand Promotion Organiser are not like other promotions since they are meant to get actual results. We make sure that every activation is in line with measurable KPIs, such as:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>More people know about the brand</li>
            <li>How involved customers are</li>
            <li>Getting leads</li>
            <li>More foot traffic</li>
            <li>Help with converting sales</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We make sure your brand gets 360-degree exposure by combining on-the-ground promotions with digital marketing and ATL strategies.
        </p>
      </div>

      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Managing Roadshows in Multiple Cities and Across India
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We don't restrict your brand to just one place. Our Roadshows & Outdoor Campaigns by Expert Brand Promotion Organiser can be scaled up to:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Delhi</li>
            <li>Noida</li>
            <li>Gurgaon</li>
            <li>Faridabad</li>
            <li>Ghaziabad</li>
            <li>Other tier-2 and metro cities in Indi</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We can send the same brand message to many cities without lowering quality or execution requirements because we have strong vendor networks and operational knowledge.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Outdoor campaigns and roadshows for specific industries
        </h2>
        <p className="mb-2 text-base leading-[1.65] text-gray-900">
          As a full-service Brand Promotion Organiser, we tailor our roadshows to fit a variety of industries, such as:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Consumer Goods and Fast-Moving Consumer Goods</li>
            <li>Property and Infrastructure</li>
            <li>Brands of cars and EVs</li>
            <li>School and EdTech</li>
            <li>Technology and Telecommunications</li>
            <li>Health care and medicine</li>
            <li>Brands for retail and lifestyle</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our Roadshows and Outdoor Campaigns by Expert Brand Promotion Organizer are made to meet the needs of specific industries, audiences, messages, and compliance
        </p>
      </div>


       <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Integrating mall activations and outdoor campaigns for stores
        </h2>
        <p className="mb-2 text-base leading-[1.65] text-gray-900">
          We combine mall activations and retail promotions with roadshows to help brands get more people involved. This mixed method makes sure that:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Controlled settings for high-end branding</li>
            <li>Customers stay longer with you</li>
            <li>Direct purchase effect</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          These campaigns work perfectly with our mall and retail activation services, which makes your overall brand promotion strategy stronger.
        </p>
      </div>


       <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Roadshows for businesses and corporations
        </h2>
        <p className="mb-2 text-base leading-[1.65] text-gray-900">
          We know more than just how to run consumer campaigns. We also do corporate roadshows and outdoor B2B campaigns that are aimed at decision-makers, channel partners, and business audiences. These campaigns are great for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Launching new products</li>
            <li>Branding for businesses</li>
            <li>Meetings with dealers and promotions for channels</li>
            <li>Promotions for banks and money</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Your brand gets more credibility and authority in competitive B2B settings with Roadshows and Outdoor Campaigns from an expert brand promotion organizer.
        </p>
      </div>


       <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Support for advanced technology and production
        </h2>
        <p className="mb-2 text-base leading-[1.65] text-gray-900">
          Technology is very important for outdoor campaigns these days. Our Roadshows and Outdoor Campaigns by Expert Brand Promotion The organizer gives you access to:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Digital displays and LED walls</li>
            <li>Systems for sound and public address</li>
            <li>Live streaming and video coverage</li>
            <li>Taking pictures and videos of events</li>
            <li>Tools for capturing data and tracking leads</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes sure that your campaign is not only visually appealing, but also based on data and focused on results.
        </p>
      </div>
      </div>


        {/* Image */}
      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/roadshows-outdoor-campaigns-brand-promotion-organiser.jpg"
              alt="Roadshows & Outdoor Campaigns Organisers"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="mb-3 text-center">Roadshows & Outdoor Campaigns Organisers</p>
          </div>


        {/* sections */}

        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
        <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Safety, Compliance, and Operational Excellence
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           During every campaign, we follow strict safety and operational rules. Our team makes sure of the following:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Safe and legal executions</li>
            <li>How professional staff act</li>
            <li>Fixing problems in real time</li>
            <li>No disruption to public spaces</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Reliability, openness, and doing things right are what make us a trusted Brand Promotion Organiser.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Why We Are the Best Brand Promotion Organizer
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Clients choose us for Roadshows & Outdoor Campaigns by Expert Brand Promotion Organiser because we offer:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Services to promote your brand from all angles</li>
            <li>Campaign strategies that are made just for you</li>
            <li>Teams with a lot of experience on the ground</li>
            <li>A deep understanding of the local market</li>
            <li>Prices and times that are clear</li>
            <li>A history of successful execution</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We don't just promote brands; we also build trust with customers and a presence in the market.
        </p>
      </div>


        <div>
       <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            All of your integrated brand promotion needs in one place
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our roadshows and outdoor campaigns work perfectly with our other services, such as:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Managing corporate events</li>
            <li>Events to launch new products</li>
            <li>Activations in malls and stores</li>
            <li>Managing Exhibitions and Trade Shows</li>
            <li>Brand promotions online and in person</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This all-in-one approach makes sure that the brand story is told the same way at all touchpoints.
        </p>
      </div>


        <div>
       <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Let's strategically take your brand to the streets.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our Roadshows & Outdoor Campaigns by Expert Brand Promotion Organiser are the best way to get more people to see your brand, connect with customers directly, and make brand experiences that people will never forget. We at event-management-delhi.com are dedicated to running outdoor brand promotion campaigns that are highly effective, professionally managed, and focused on getting results that will help your business grow in competitive markets.
        </p>
      </div>
      </div>


    <div>
        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
          Are you ready to start your roadshow campaign?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        Work with a Brand Promotion Organiser you can trust who knows how to plan, carry out, and grow your campaign. Let's put on outdoor campaigns and roadshows that will make people notice your brand.
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