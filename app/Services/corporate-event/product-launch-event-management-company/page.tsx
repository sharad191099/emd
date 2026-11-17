"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What does a Product Launch Event Management Company in Delhi NCR do?",
   answer: "A Product Launch Event Management Company in Delhi NCR handles end-to-end planning and execution of launch events. This includes concept creation, venue selection, stage and AV setup, branding, guest management, media coordination, and on-ground event execution to ensure a smooth and impactful product launch."},
  {question: "Do you manage corporate and brand product launches of all sizes?",
   answer:"Yes. We manage product launch events of all scales, from small internal corporate launches and dealer meets to large-scale public product reveals with media, influencers, and high guest footfall across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad."},
  {question: "What types of product launches do you organize?",
   answer:"We organize launches for FMCG products, mobile apps, tech gadgets, automobiles, fashion brands, retail stores, corporate services, startups, and new business offerings. Our product launch event services are customized based on industry and target audience."},
  {question: "Can you help with product launch venues in Delhi, Noida, and Gurgaon?",
   answer: "Yes. We assist with venue selection and booking across Delhi NCR, including 5-star hotels, banquet halls, convention centers, malls, auditoriums, outdoor venues, corporate offices, and studio setups for hybrid or virtual product launches."},
  {question: "Do you provide stage setup, LED walls, sound, and lighting for product launches?",
   answer:"Absolutely. Our product launch event management services include complete stage fabrication, LED video walls, professional sound systems, stage lighting, special effects, and technical crew to ensure a flawless product reveal experience."},
  {question: "Do you handle branding and printing for product launch events?",
   answer:"Yes. We manage all event branding requirements such as stage backdrops, standees, welcome boards, media walls, product display units, kiosks, banners, brochures, passes, badges, and other printed collateral to maintain strong brand visibility throughout the event."},
  {question: "Can you manage guest invitations, RSVP, and registration desks?",
   answer:"Yes. We handle guest invitations, RSVP tracking, registration desks, badge printing, entry management, and VIP coordination. Our trained staff ensures smooth guest handling for corporate leaders, media, influencers, and business partners."},
  {question: "Do you arrange media coverage and PR support for product launches?",
   answer:"Yes. We assist with basic media coordination, press invite setup, media walls, photography, videography, and content creation suitable for PR and digital platforms. Media support can be customized based on your launch objectives."},
   {question: "What is the cost of hiring a Product Launch Event Management Company?",
   answer:"The cost of a product launch event depends on factors such as guest count, venue type, stage size, AV setup, LED walls, branding, entertainment, photography, and hospitality. We offer flexible and customizable packages based on your budget and requirements."},
   {question: "Why should I choose your Product Launch Event Management Company in Delhi NCR?",
   answer:"We offer experienced event managers, reliable vendor networks, creative launch concepts, transparent pricing, and professional execution. Our team ensures your product launch in Delhi NCR is well-planned, visually strong, and aligned with your business goals."}
];

export default function productlaunchPage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Product Launch " },
                { text: "Event Management Company", highlight: true },
              ]}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/Services" },
                {label: "Corporate Event Organiser"}
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
              <span className="block">Product Launch</span>
              <span className="block text-[#1675b9]">ORGANISER</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Product Launch Event Management Company in Delhi NCR</h2>

            <p className="mt-10">
              We are a well-known product launch event management company in Delhi NCR. We help clients create buzz-driven launches by providing strong branding, smooth execution, and high-quality production. We handle everything for your event, from planning to execution, in Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad. This includes <a className="text-[red]" href="/Services/corporate-event/product-launch-event-management-company"> launching a new product </a>, service, app, gadget, FMCG item, car, fashion line, or business offering.
            </p>
            <p className="mt-5">
                A good product launch is more than just an event; it's a chance to build your brand. This is the first time your product will be seen by the market, the media, your customers, and your business partners. That's why companies hire a professional Product Launch Event Management Company to take care of everything, get people excited, and make sure the launch goes smoothly.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                  “A successful product launch is not about noise alone; it is about clarity, timing, and impact. When the right message meets the right audience through flawless execution, a product earns instant credibility. Thoughtful planning, strong branding, and seamless on-ground management turn a launch into a powerful business moment that drives visibility, trust, and long-term market presence.”
              </p>
            </div>
             <p className="mt-5">
                Our team is ready to help you <a className="text-[red]" href="/Services/corporate-event/product-launch-event-management-company">plan a product launch</a> that not only looks impressive but also delivers measurable business results. From understanding your product story and target audience to designing the launch concept, branding elements, stage setup, and guest experience, we manage every detail with precision. We focus on creating meaningful engagement through the right mix of visuals, messaging, technology, and on-ground coordination. Whether your objective is media coverage, lead generation, dealer engagement, or brand positioning, we align the entire launch strategy with your company’s goals. If you are looking for a reliable Product Launch Event Management Company that ensures professionalism, creativity, and flawless execution from start to finish, our team is here to make your launch impactful and result-driven.
            </p>
          </div>
        </div>
        </section>


          <section className="ml-8 w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">

      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          WHY DO I NEED TO HIRE A COMPANY TO PLAN MY PRODUCT LAUNCH EVENT?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          To launch a product, you need to plan, come up with new ideas, pick the right time, and carry out the plan perfectly. There are many parts to a launch event, such as designing the stage, setting up the technology, branding, media, interacting with the audience, managing celebrities and anchors, and making sure guests feel welcome. A good Product Launch Event Management Company makes sure that every detail is taken care of and that your brand's story is told in the best way possible.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
       WHAT TO EXPECT WHEN YOU WORK WITH OUR PRODUCT LAUNCH EVENT MANAGEMENT COMPANY:</h2>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>A launch idea that fits with your brand and product.</li>
            <li>Making a list of possible venues and keeping track of them.</li>
            <li>A <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/event-infrastructure/stage-setup-company">premium stage setup</a> with sound, lighting, and an LED wall.</li>
            <li>Planned the flow of the show and the product launches.</li>
            <li>Handled guest handling, invites, and registration desks.</li>
            <li>Made sure the brand was present by printing and branding events.</li>
            <li>Put together media coverage and content.</li>
            <li>Managed the crew and logistics on site.</li>
        </div>
        <p className="ml-5 mt-2 text-base leading-[1.65] text-gray-900">
         A successful launch builds excitement, trust, and visibility. As a Product Launch Event Management Company in Delhi NCR, that is exactly what we do.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          SERVICES FOR MANAGING PRODUCT LAUNCH EVENTS IN DELHI-NCR
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         We are a full-service product launch event management company, which means we take care of everything for corporate and brand launch events. We offer flexible services so you can choose either full-service management or just the services you need.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          1) PLANNING THE LAUNCH OF A PRODUCT AND COMING UP WITH IDEAS FOR IT.
        </h2>
         <p className="text-base leading-[1.65] text-gray-900">
         Every product has a story to tell. We can help you turn your story into a theme for a launch, an experience, or an event. Our plan includes:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Making objective maps for awareness, sales, media visibility, and investor confidence.</li>
            <li>Plan out different groups of people who will be there, like customers, media, dealers, corporate guests, and influencers.</li>
            <li>Planned the order of events (welcome, opening, teaser, reveal, demo, speeches, Q&A, and closing).</li>
            <li>Made a timeline and a list of things to do for production.</li>
            <li>Get the most out of your budget without lowering quality.</li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
          A professional Product Launch Event Management Company can help you the most if you want a high-quality and perfect launch.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
         2) CHOOSING A PLACE AND GETTING READY FOR A PRODUCT LAUNCH</h2>
         <p className="text-base leading-[1.5] text-gray-900">
          The venue makes a first impression. Our team will help you find the best place in Delhi-NCR to launch your product, such as:
        </p>
        <h2 className="ml-5 mb-3 text-xl font-semibold text-[#202020]">
         Venue Options We Manage</h2>
        <div className="mt-2 pl-5 text-base leading-[1.65] text-gray-900">
            <li>5-star hotels and luxury banquet halls.</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/book-venue-for-corporate-event-and-conferences?category=auditorium&location_city=&search_venue=Search+Venue">Auditoriums and conference centers.</a></li>
            <li>Malls and other busy public places.</li>
            <li>Outdoor venues and experiential spaces.</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/event-management-company-in-delhi-ncr/corporate-offsite-conference-organiser-in-delhi-noida-and-gurgaon-1729248805">Corporate office launch setups.</a></li>
            <li>Studio setups for hybrid/virtual product launches.</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We take care of booking the venue, negotiating the terms, planning the layout, giving vendors access, letting people in and out of the event, and organizing the venue as a whole.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          3) SETTING UP THE STAGE, SET DESIGN, AND PRODUCT REVEAL
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         The "reveal moment" is the most important part of a launch. Our professional Product Launch Event Management Company can help you with custom stage design and background branding, setting up the product reveal (with curtains, boxes, smoke/fog, confetti, and light), and integrating LED walls for launch films and live visuals.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Stage & Reveal Management
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Set up the podium, seating, and VIP stage, as well as the trusses and rigging for lighting and effects.</li>
          <li>Set up demo tables, built stands, and did product placement on stage.</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We make sure that the product stays the center of attention and that the reveal moment looks professional in pictures and videos.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         4) SETTING UP THE AV (SOUND, LIGHTING, LED, SCREENS) AND THE TECHNICAL TEAM
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A product launch has to look and sound perfect. We provide high-quality technical support.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Technical Support & Equipment
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Wireless microphones (collar, handheld, and podium).</li>
            <li>PA sound system for clear music and voice.</li>
            <li>TVs, projectors, displays, and LED walls.</li>
            <li>Give stage lighting, moving heads, and focused product lighting.</li>
            <li>Take care of laptop connections and presentations.</li>
            <li>People who work on technical rehearsals and live events.</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          There shouldn't be any breaks during your event. That's why brands hire us, professional Product Launch Event Management Companies.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          5) BRANDING, PRINTING, AND VISUAL IDENTITY FOR EVENTS
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Every launch needs to have good branding. We take care of all the on-site branding, such as welcome boards, standees, directional signs, stage backdrops, side panels, media walls, photo ops, product launch stands, and kiosks.
        </p>
         <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Branding & Print Materials
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Brochures, flyers, catalogs, and leaflets.</li>
          <li>Passes, badges, lanyards, and wristbands.</li>
        </div>
        <p className="mt-5 text-base leading-[1.65] text-gray-900">
         Our branding makes sure that your product and company name are always shown in a professional way throughout the venue.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         6) GUEST INVITATION, RSVP, AND REGISTRATION DESK
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Managing guests in an organized way is necessary for a product launch. We help with RSVP coordination and managing the guest list, sending out invitations (both digital and paper), setting up a registration desk with trained staff, managing entry and controlling the line, printing badges, and delivering delegate kits.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Guest Management Services
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Made sure VIP guests had the right seats.</li>
        </div>
        <p className="mt-5 text-base leading-[1.65] text-gray-900">
         We treat all of our guests, from CEOs to media and influencers, with professionalism.
        </p>
      </div>
      </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/product-launch-event-management-company.jpg"
              alt="Corporate cricket event"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="text-center">Conference & Seminar Event Management Company</p>
          </div>

      {/* Section 9 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         7) OPTIONAL: COORDINATION OF MEDIA, PR, AND INFLUENCERS
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our Product Launch Event Management Company will help you get the word out about your brand by setting up a press briefing space and sending out press invites.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         PR & Media Coordination
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A brand media wall for pictures and interviews.</li>
            <li>We take photos and videos for content that is ready for the media.</li>
            <li>We help with basic <a className="text-[red]" href="https://www.hire4event.com/event-planner">event planning for PR.</a></li>
            <li>We can also change the scope of our PR outreach to fit your needs.</li>
        </div>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          8) SETTING UP THE PRODUCT DEMO ZONE AND EXPERIENCE
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Many launches need to show off their products. We make fun experience zones like live product demo counters, trial booths, and interactive kiosks.
        </p>
         <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Demo Zone & Experience Setup
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Setups for sampling and testing in the food and beverage, beauty, and fast-moving consumer goods (FMCG) industries, as well as display counters and areas to show off products.</li>
            <li>Experience with VR or AR (if applicable).</li>
            <li>Help desk and product explanation counters.</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         A demo zone gets guests involved and helps them understand the product right away.
        </p>
      </div>

      {/* Section 11*/}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          9) ANCHORS, ARTISTS, AND ENTERTAINMENT FOR BUSINESSES.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We can set up <a className="text-[red]" href="https://www.hire4event.com/artist-booking-agency/host">professional anchors and emcees</a>, optional celebrity presence coordination, live bands and instrumental performances, corporate-friendly DJs and background music, audience participation activities, and lucky draws to make the event fun and high-end.
        </p>
        <h2 className="mt-5 text-[18px] font-semibold text-[#202020]">
          Our entertainment services include:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Professional corporate anchors and experienced emcees</li>
            <li>Optional celebrity appearance and guest coordination</li>
            <li>Live bands and instrumental music performances</li>
            <li>Corporate-friendly DJs and curated background music</li>
            <li>Audience engagement activities and interactive sessions</li>
            <li>Lucky draws, contests, and brand-based participation activities</li>
        </div>
        <p className="text-base leading-[1.65] text-gray-900">
          We customize the entertainment to fit your brand and the people you want to reach.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         10) HELP WITH PHOTOGRAPHY, VIDEOGRAPHY, AND LAUNCH FILMS.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Launch content is useful for marketing in the future. We offer professional event photography, product reveal moments, coverage of speakers and audiences, highlight videos, and aftermovies as part of our coverage services.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Content & Coverage Services
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
        <li><a className="text-[red]" href="/Services/corporate-event">Business meetings and conferences</a></li>
        <li>Optional: reels or short videos for social media.</li>
        <li>Videos of people giving testimonials are optional.</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
        Content coverage is important if you want your launch to have marketing value for a long time.
        </p>
      </div>

             {/* Section 13 */}
        <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            WE HANDLE DIFFERENT KINDS OF PRODUCT LAUNCH EVENTS.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         We are the best company in Delhi-NCR for managing product launches across all industries.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Launches in the fashion, technology, corporate services, healthcare, and fast-moving consumer goods (FMCG) industries.</li>
            <li>Set up the opening of stores and brands.</li>
            <li>Held meetings with dealers and distributors to launch new products.</li>
      </div>
      <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Our staff at the Product Launch Event Management Company can handle everything from a small corporate launch to a big public reveal.
        </p>
      </div>


       {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         HOW WE CARRY OUT OUR PRODUCT LAUNCH EVENTS
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
          We follow a professional process to make sure the event goes off without a hitch:<br/><strong>STEP 1: TALK ABOUT THE REQUIREMENTS AND GOALS</strong>. We know your product, who you want to sell it to, how much money you have, and when you want to sell it.<br/><strong>STEP 2: IDEA, PLAN, AND SCHEDULE</strong>. We give you an idea for the launch theme, the event flow, the production plan, and the expected cost.<br/><strong>STEP 3: LOCK IN THE VENUE, PRODUCTION, AND VENDORS</strong>. We decide on the location, stage, audio and video equipment, branding, staff, hospitality, and vendors.<br/><strong>STEP 4: SETUP AND PRACTICE ON THE GROUND</strong>. We plan rehearsals and set up the venue in a structured way.<br/><strong>STEP 5: CARRYING OUT THE LAUNCH DAY</strong>. Our event manager and staff are in charge of signing people up, keeping the stage running smoothly, helping with technical issues, and taking care of guests.<br/><strong>STEP 6: CLOSING AFTER THE EVENT</strong>. We deliver photos and videos and make sure everything goes smoothly.
        </p>
      </div>


       {/* Section 15 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
        WHY SHOULD YOU CHOOSE EVENT-MANAGEMENT-DELHI.COM TO HELP YOU PLAN YOUR PRODUCT LAUNCH?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We know that launching a new product is a lot of work. Why brands choose us:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A team with a lot of experience launching brands and businesses.</li>
            <li>A strong network of vendors for stage, AV, LED, and fabrication.</li>
            <li>Professional event managers who do a great job.</li>
            <li>Fun themes that are appropriate for business settings.</li>
            <li>Reliable on-site staff and quick problem solving.</li>
            <li>Clear pricing and a good planning process.</li>
            <li>Coverage in Delhi, Noida, Gurgaon, and the NCR.</li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
          A good Product Launch Event Management Company can help you have a launch that looks great and goes off without a hitch.
        </p>
      </div>


       {/* Section 16 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         EVENT MANAGEMENT COMPANY FOR PRODUCT LAUNCHES IN DELHI, NOIDA, AND GURGAON.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We offer conference and seminar management services all over Delhi NCR. Some examples are:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>We plan events for launching products in Delhi and Noida.</li>
            <li>A company in Gurgaon that manages product launch events.</li>
            <li>Planned and carried out events in Faridabad and Ghaziabad with success.</li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We help venues in hotels, convention centers, malls, auditoriums, and outside.
        </p>
      </div>
        

        <div>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         WHAT THINGS AFFECT THE COST OF PRODUCT LAUNCH EVENTS?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          The number of guests, the type of venue, the size of the stage, the set design, the branding, the <a className="text-[red]" href="https://www.hire4event.com/p2-led-wall">LED wall</a>, the sound, the lighting, and the special effects all affect the cost of an event.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Activities that include anchors, artists, celebrities, and participation.</li>
            <li>Take pictures and videos of the event.</li>
            <li>Provide packages for food and hospitality</li>
        </div>
        <p className="text-base leading-[1.65] text-gray-900">
          We offer packages that can be changed to fit your needs, so you only pay for what you need. Please tell us the date, city, and approximate number of guests you want when you ask for a quote.
          </p>
        </div>

        <div>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         GET IN TOUCH WITH THE COMPANY THAT RUNS THE PRODUCT LAUNCH EVENT.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          If you want to make sure that your product launch goes off without a hitch and is of high quality, get in touch with Event-Management-Delhi.com right away. As you plan and carry out your next launch, our team will give you full professional support.<br/>If you need a trustworthy company to help you <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/brand-promotion/product-launch-event-organiser">plan a product launch event</a>, think about us because of our experience, creativity, and perfect execution.
        </p>
        </div>
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
    </main>
  );
}