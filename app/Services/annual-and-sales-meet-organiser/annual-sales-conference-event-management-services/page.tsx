"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Annual Sales Conference Event Management Services?",
   answer: "Annual Sales Conference Event Management Services involve complete planning, coordination, and execution of corporate sales conferences. We manage the entire lifecycle—from agenda planning, venue sourcing, branding, AV, and registration to hospitality, awards segments, and on-ground execution—ensuring a disciplined, high-impact sales conference experience"},
  {question: "Do you provide end-to-end management for annual sales conferences?",
   answer:"Yes. We provide complete end-to-end Annual Sales Conference Event Management Services, including planning, venue coordination, stage setup, audio-visual production, registration management, staffing, hospitality, entertainment, and event-day control."},
  {question: "Can you manage large sales conferences with multiple teams and leaders?",
   answer:"Absolutely. We manage sales conferences for 50 to 5000+ attendees, including leadership summits, regional sales meets, nationwide conferences, and multi-team events with structured agenda flow and strong stage control."},
  {question: "Do you help with venue selection and off-site sales conference planning?",
   answer: "Yes. We handle venue sourcing and booking for hotels, resorts, and convention centers across Delhi NCR and Pan India. Our services include site inspections, negotiations, zoning plans, permissions, and setup coordination."},
  {question: "Is registration and delegate management included in your services?",
   answer:"Yes. We manage complete delegate experience, including branded registration desks, badges, lanyards, welcome signage, seating guidance, agenda boards, and crowd flow management to ensure a smooth and professional start."},
  {question: "Do you provide stage setup, branding, and AV support for sales conferences?",
   answer:"Yes. Our Annual Sales Conference Event Management Services include stage design, conference branding, LED screens, sound systems, microphones, lighting, presentation support, and a dedicated technical crew for flawless execution."},
  {question: "How do you ensure the conference agenda runs on time?",
   answer:"We manage run-of-show discipline through detailed agenda planning, speaker cueing, stage control, mic handling, presentation management, and real-time coordination to keep sessions, breaks, and transitions on schedule."},
  {question: "Can you manage sales awards nights and recognition ceremonies?",
   answer:"Yes. We handle complete sales awards segments, including ceremony flow, trophies, stage walk coordination, photography, emcee coordination, and crowd energy management to ensure recognition moments feel premium and impactful."},
   {question: "Do you provide hospitality and accommodation coordination for off-site conferences?",
   answer:"Yes. For off-site or multi-day sales conferences, we manage meal planning, rooming lists, hospitality desks, VIP handling, and optional transportation coordination to ensure attendee comfort and smooth logistics."},
   {question: "Which locations do you cover for annual sales conference management services?",
   answer:"We provide Annual Sales Conference Event Management Services across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida, and across India based on event scale and requirements."}
];

export default function annualconferenceeventpage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Annual Sales " },
                { text: "Conference Event Management Services", highlight: true },
              ]}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/Services" },
                {label: "Annual and Sales Meet Organiser"}
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
              <span className="block">Annual Conference</span>
              <span className="block text-[#1675b9]">organiser</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Annual Sales Conference Management for Large Sales Teams</h2>

            <p className="mt-10">
              Your <a className="text-[red]" href="https://www.hire4event.com/service/corporate-annual-family-day-dealer-meet-sales-meet">annual sales conference</a> is far more than a routine meeting. It is the pivotal gathering where your entire sales force, leadership, regional heads, and partners unite with a singular focus: alignment and momentum. This event establishes the year's tone, launches new strategies, celebrates top performers, and ignites the collective energy that will drive the next twelve months of business forward.
            </p>
             <p className="mt-5">
               At Event-Management-Delhi.com, we provide end-to-end Annual Sales Conference Event Management Services, ensuring a seamless and powerful event. We manage the entire conference lifecycle—from initial concept and agenda planning to venue sourcing, stage production, branding, <a className="text-[red]" href="https://www.hire4event.com/equipment/audio-visual-equipment-on-rent">AV Setups</a>, registration, hospitality, and on-ground execution—so your leadership can remain focused on people, performance, and crucial business outcomes.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “We are not just planners; we are your strategic execution partner. Our service is built on the understanding that a sales conference must blend flawless operations with motivational energy. We deliver professional, brand-safe, and meticulously managed events, ensuring a premium corporate experience from the first registration to the final curtain call.”
              </p>
            </div>
             <p className="mt-10">
                This page is written in a “we provide service” format because that is our core promise. We take full ownership of the complex orchestration required, handling every logistical detail and vendor coordination. Our dedicated approach guarantees your <a className="text-[red]" href="https://www.hire4event.com/inhouse-service/conference-and-corporate-events">annual conference</a> is not only executed with precision but also crafted to inspire your team and solidify your strategic vision for the year ahead.
            </p>
          </div>
        </div>
        </section>


          <section className="ml-8 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
      
      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Why Your Annual Sales Conference Needs Professional Event Management
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         A sales convention carries significant stakes. Your teams expect seamless execution, senior leadership demands discipline, and the overall quality directly impacts your brand’s perception. A single registration hiccup, a microphone failure during a keynote, or a confusing agenda flow can instantly shift the mood.<br/>Our Annual Sales Conference Event Management Services are designed to ensure:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Streamlined planning with fixed deadlines</li>
            <li>Premium design and consistent branding</li>
            <li>Powerful audio-visual support for presentations</li>
            <li>Comfortable hospitality and guest experience</li>
            <li>Tight program and stage control</li>
            <li>High-energy moments for motivation and awards</li>
            <li>Full on-ground support with minimal strain on your internal team</li>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mt-10 mb-3 text-[21px] font-semibold text-[#202020]">
            Annual Sales Conference Event Planning Services We Offer (End-to-End)
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
            We handle every facet of your conference, eliminating the need to coordinate multiple vendors.
        </p>  
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mt-8 mb-3 text-[22px] font-semibold text-[#202020]">
          1) Conference Planning, Format, and Flow Design
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We start by understanding your objectives and audience, then build the event framework:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Conference format: Half-day, full-day, or multi-day off-site</li>
            <li>Session planning: Keynotes, goal-setting, product updates, workshops</li>
            <li>Break scheduling: Networking tea/coffee breaks, lunch, engagement activities</li>
            <li>Run-of-show development: Minute-by-minute event flow</li>
            <li>Budget planning and vendor strategy</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Our services go beyond task execution—we strategically plan for seamless operations.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mt-8 mb-3 text-xl font-semibold text-[#202020]">
            2) Venue Sourcing and Off-site Planning (Delhi NCR & Pan India)
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          We match the venue to your company’s style and event tone—whether formal, premium, motivational, or retreat-style.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>3-star and 5-star <a className="text-[red]" href="https://www.hire4event.com/book-venue-for-corporate-event-and-conferences">hotel venues & conference halls</a></li>
            <li>Resort venues for <a className="text-[red]" href="https://www.hire4event.com/plan-your-trip/corporate-offsite-conference-organiser-in-delhi-noida-and-gurgaon">off-site sales conferences</a></li>
            <li>Convention centers for large gatherings</li>
            <li>Venue negotiation and booking coordination</li>
            <li>Site inspections and event zoning plans</li>
            <li>Permissions, vendor access, and setup scheduling</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            With our services, venue planning becomes simple, not stressful.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          3) Registration, Welcome, and Delegate Experience
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         The first 20 minutes set the tone. We ensure a smooth check-in and welcoming process:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Entrance and welcome area signage and branding</li>
            <li>Staffed registration desks with trained personnel</li>
            <li>Badges, lanyards, and delegate kits</li>
            <li>Printed agendas and session schedule boards</li>
            <li>Attendee seating guidance and crowd flow management</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We ensure your event starts on time, organized and professional.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         4) Stage Setup, Set Design, and Conference Branding
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Your sales conference is a stage for your brand. The set must look powerful and camera-ready.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Themed stage backdrop and design</li>
            <li>Podium and stage furniture</li>
            <li>Branded items: standees, signage, session panels</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/plan-your-event/corporate-event/award-ceremony-organiser">Awards night</a> stage look (if applicable)</li>
            <li>Photo wall or media wall for team pictures</li>
            <li>Consistent branding across all touchpoints</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We ensure your conference stands out—never ordinary.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         5) AV Setup: Sound, LED, Lighting, and Technical Crew
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Presentations, videos, demos, and speeches are core to sales conferences—technical excellence is critical.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Wireless microphones (collar, handheld, podium)</li>
            <li>Professional sound system scaled to the event</li>
            <li>LED walls, projectors, and screens</li>
            <li>Clickers, laptop connections, and presentation support</li>
            <li>Stage and ambient lighting</li>
            <li>Dedicated technical crew (sound and visuals)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Your keynotes and presentations will run flawlessly.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            6) Agenda Management and Stage Control (Run-of-Show Discipline)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            With multiple presenters and segments, we maintain strict stage flow and timing.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Speaker stage entry planning and cueing</li>
            <li>Mic handoffs, slide control, video playback</li>
            <li>Break and session transition timing</li>
            <li>Coordination with emcee and leadership</li>
            <li>Last-minute schedule adjustments without confusion</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We keep your event on time, professional, and sharp.
        </p>
      </div>
      </div>

       <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/annual-sales-conference-event-management-services.jpg"
              alt="Annual Sales Conference Event Management Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="mb-3 text-center">Annual Sales Conference Event Management Services</p>
          </div>


      {/* Section 9 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            7) Sales Awards Night, Recognition, and Celebration Segments
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Recognition fuels sales culture. We handle awards as a premium segment.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Awards ceremony flow design</li>
            <li>Trophies, certificates, and mementos</li>
            <li>Winner announcement photography</li>
            <li>Stage walk coordination and photo ops</li>
            <li>Emcee coordination and crowd energy management</li>
            <li>Dedicated photography/videography for awards</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We make awards feel grand and exciting.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            8) Team Engagement and Motivation Elements (Business-Appropriate)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Sales teams need energizing. We incorporate professional, business-safe engagement.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>High-energy emcee tailored for sales audiences</li>
            <li>Team activities and quick engagement games</li>
            <li>Themed conference experience (e.g., sales mission theme)</li>
            <li>Networking and interaction zones</li>
            <li>Optional light evening entertainment</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We plan engagement that aligns with your motivational and business goals
        </p>
      </div>

      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         9) Hospitality, Food, and Room Coordination (For Off-sites)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          If your conference involves travel and stay, hospitality is key. We manage dining and accommodation logistics.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planned tea/coffee breaks, lunch, and dinner</li>
            <li>Rooming list coordination with the hotel</li>
            <li>Hospitality desk for attendee assistance</li>
            <li>Special handling for leaders and VIPs</li>
            <li>Optional local transportation coordination</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We ensure attendee comfort and schedule smoothness.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            10) Conference Coverage: Photography, Videography, and Post-Event Content
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Capture leadership speeches, awards, celebrations, and team bonding professionally.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Conference photography (candid and staged)</li>
            <li>Videography and highlight reel</li>
            <li>Leadership bytes and team testimonials</li>
            <li>Optional event recap video</li>
            <li>Optional short clips for internal comms and LinkedIn</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We also support your internal branding and communication.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            11) On-ground Staffing and Vendor Coordination
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           Your internal team should not manage vendors on event day. We provide full staffing:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Event manager and production supervisor</li>
            <li>Registration team and ushers</li>
            <li>Stage runners and mic handlers</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/event-branding">Branding and setup crew</a></li>
            <li>Vendor coordination for AV, venue, food, decor</li>
            <li>Emergency backup planning and quick solutions</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Your leaders can focus on people, not logistics.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            Types of Annual Sales Conferences We Plan
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We tailor our services to your team size and objectives:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>One-day annual sales conference</li>
            <li>Two to three-day sales off-site conference</li>
            <li>Regional sales conference (North, West, East, South)</li>
            <li>Nationwide sales conference with multi-city teams</li>
            <li>Conference + awards night + gala dinner format</li>
            <li>Conference + training workshops format</li>
            <li>Conference + product launch format</li>
            <li>Leadership summit + sales strategy conference format</li>
        </div>
      </div>
      </div>

        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Where We Offer Annual Sales Conference Event Management Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         We operate in Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida, and across India (as required).<br/>Whether a corporate hotel conference in Delhi NCR or a resort off-site, we deliver.
        </p>


        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
       <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           Why Choose Event-Management-Delhi.com for Your Annual Sales Conference?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Sales events differ from standard corporate events—they require energy, motivation, discipline, and powerful stage presence. Our team understands sales conference dynamics and delivers accordingly.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Annual dealer networking meet</li>
            <li>Regional dealer meet (North/West/East/South)</li>
            <li>Distributor and channel partner meet</li>
            <li>Scheme launch and networking meet</li>
            <li>Product update meet and demo zone setup</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/award-ceremonies-and-product-launches-organiser-Delhi-NCR">Dealer awards night</a> and gala dinner</li>
            <li>Onboarding meet for new dealers</li>
            <li>Top dealer leadership meet (premium closed-door format)</li>
            <li>Multi-city dealer meets with consistent branding and experience</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We change the format depending on your field and the "tone" you desire, whether it's official, motivational, premium, or easygoing.
        </p>
      </div>


       <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            Why Brands Pick Us to Help with Dealer Networking Meet Event Planning
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Dealer meetings are important for brand reputation. Dealers talk about their experiences. The quality of your event becomes the quality of your brand. That's why we do things with discipline. When you book Dealer Networking Meet Event Management Services with Event-Management-Delhi.com, you get:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Corporate-level planning and professional execution</li>
            <li>A reliable vendor network with quality control</li>
            <li>Premium branding and clean finishing</li>
            <li>Strong AV, stage control, and technical reliability</li>
            <li>Smooth hospitality and attendee handling</li>
            <li>Budgets that can be changed: from basic to premium production</li>
            <li>One person in charge of everything with a dedicated event manager</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We work with you as a partner, not a random group of vendors.
        </p>
      </div>
      </div>


       <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Service Area: Delhi NCR and all of India
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         We offer Dealer Networking Meet Event Management Services in the following areas: Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida, and adjacent NCR zones. We also help with PAN India meetings for big companies and networks with several locations, depending on the scope and schedules.
        </p>

     

      {/* Section 13 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
             How We Begin (Quick and Easy)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          To start preparing your dealer networking meeting, we usually need:
        </p>
         <h2 className="mt-2 mb-1 text-[21px] font-semibold text-[#202020]">
            When you engage us, you get:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>End-to-end management from a single team</li>
            <li>Experienced corporate event production and AV support</li>
            <li>Premium branding execution and theme consistency</li>
            <li>Disciplined run-of-show and stage control</li>
            <li>Comfortable hospitality and smooth coordination</li>
            <li>Flexible packages and clear pricing</li>
            <li>A dedicated event manager and on-ground staff</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
           We are not just a vendor—we are your execution partner.
        </p>
      </div>

      {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           What We Need From You for a Quick Plan
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          To provide an accurate proposal and budget, we typically require:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Conference city and preferred dates</li>
            <li>Estimated number of attendees</li>
            <li>Conference duration (single or multi-day)</li>
            <li>Preferred venue type (hotel, resort, convention center)</li>
            <li>Agenda structure and key segments (awards, training, launch)</li>
            <li>AV expectations (LED screens, sound, lighting)</li>
            <li>Branding level (basic or premium)</li>
            <li>Accommodation or transportation needs (if any)</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
          With these details, our team can deliver a solid execution plan.
        </p>
        </div>
        </div>


          <h2 className="mt-6 mb-3 text-[21px] font-semibold text-[#202020]">
            Let’s Build a Sales Conference That Resonates All Year
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Your annual sales conference is where motivation translates into tangible results. Let us handle logistics, vendors, production, and execution so your teams can focus on winning, learning, and celebrating.<br/>Contact Event-Management-Delhi.com today to secure premium Annual Sales Conference Event Management Services—and ensure your conference feels powerful, seamless, and truly business-driven.
        </p>


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