"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "Do you provide professional Anchors, Emcees, and Hosts for events?",
   answer: "Yes. We provide professional Anchors, Emcees, and Hosts services as part of our Event Entertainment Services, managing everything from selection to on-ground execution."},
  {question: "What types of events do you provide Anchors and Emcees for?",
   answer:"We provide Anchors, Emcees, and Hosts for corporate events, conferences, award ceremonies, product launches, brand events, public programs, and large-scale live events."},
  {question: "Do you offer corporate event anchors and emcees?",
   answer:"Yes. We provide corporate event anchors and emcees for annual meetings, leadership summits, seminars, town halls, employee engagement programs, and business networking events."},
  {question: "Can you arrange Anchors and Hosts for award ceremonies?",
   answer: "Yes. We provide award ceremony anchors, emcees, and hosts who manage stage flow, audience engagement, announcements, and timing with complete professionalism."},
  {question: "Do you provide Anchors and Emcees for product launches and brand events?",
   answer:"Yes. Our Anchors, Emcees, and Hosts services for product launches and brand events focus on clear brand messaging, structured storytelling, and smooth coordination with AV and speakers."},
  {question: "Do you offer multilingual Anchors, Emcees, and Hosts?",
   answer:"Yes. We provide multilingual anchors and emcees in English, Hindi, and regional languages for pan-India corporate events, public programs, and multi-city brand activations."},
  {question: "Do you handle script coordination and show flow management?",
   answer:"Yes. Our Anchors, Emcees, and Hosts services include script coordination, cue alignment, speaker introductions, award announcements, and real-time show flow management."},
  {question: "Are your Anchors and Emcees managed on-ground during the event?",
   answer:"Yes. We provide complete on-ground coordination, where our anchors work closely with event planners, production teams, and technical crews to ensure seamless execution."},
   {question: "Do you provide Anchors and Emcees for large public and live events?",
   answer:"Yes. We provide professional anchors and emcees for concerts, festivals, college events, city-level celebrations, and public brand events, ensuring crowd control and stage discipline."},
   {question: "In which locations do you provide Anchors, Emcees & Hosts services?",
   answer:"We provide Anchors, Emcees, and Hosts services across Delhi NCR and pan-India, including Delhi, Noida, Gurgaon, Mumbai, Bangalore, Pune, Hyderabad, Jaipur, and more."}
];

export default function anchorsemceespage() {
   const [openIndex, setOpenIndex] = useState(null);
   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Anchors, Emcees & Hosts ", highlight: true},
                { text: "Booking Services", },
              ]}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/Services" },
                {label: "Corporate Event Entertainment Services"}
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
              <span className="block">Anchors, Emcees & Hosts</span>
              <span className="block text-[#1675b9]">For Events</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Professional Anchors, Emcees & Hosts Services Under Event Entertainment Services</h2>

            <p className="mt-10">
              The way an event goes and how the audience feels about it are greatly affected by anchors, emcees, and hosts. They keep things organized, keep things moving, and make sure that the transitions between segments go smoothly. When timing, communication, and engagement are most important, Anchors, Emcees & Hosts Services make events clearer and more confident. A professionally run host makes sure that the program goes off without a hitch and that the audience stays interested and involved the whole time.
            </p>
            <p className="mt-5">
                Anchors, Emcees, and Hosts Services for Professional Event Entertainment Experiences are tailored to fit the mood, purpose, and audience of each event. The right host helps get messages across clearly and builds brand trust, whether it's a corporate conference, an award ceremony, a product launch, or a big public event. These services are all about keeping the event's rhythm going without any distractions, controlled communication, and getting the audience involved.
            </p>
            <p className="mt-5">
                We take care of everything for anchors, emcees, and hosts as part of our Event Entertainment Services. This includes choosing them, giving them information, rehearsing, and coordinating everything on the day of the event. Every host is on the same page as the event schedule, brand message, and technical flow. This structured method makes sure that everyone is professional on stage, that speakers and production teams work well together, and that events are always the same, whether they are corporate, social, or public.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                  “Anchors, Emcees & Hosts Services provide the backbone of a well-executed event by ensuring clarity, coordination, and audience engagement. With the right host, events maintain flow, professionalism, and energy from start to finish. When managed by experienced event professionals, hosting becomes a strategic element that strengthens communication, enhances brand perception, and delivers a seamless event experience”
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
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          End-to-End Anchors, Emcees & Hosts Booking and Management Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          When you hire us for Anchors, Emcees, and Hosts, you get full professional management, not just help finding talent. We are fully responsible for choosing, briefing, coordinating, and managing hosts who are a perfect fit for the tone and audience of your event. We offer the following services for Anchors, Emcees, and Hosts:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Knowing what the event's goals are and how the program will go</li>
            <li>Suggesting good anchors or hosts</li>
            <li>Profiling language, tone, and audience</li>
            <li>Professional booking and signing contracts</li>
            <li>Help with coordinating scripts and rehearsals</li>
            <li>Coordination on the ground and control of the show</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         This structured process makes sure that your Event Entertainment Services stay smooth and professional.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Corporate Event Anchors and Emcees for Hosting Professional Events
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
            Corporate events need accuracy, confidence, and a strong brand connection. We plan our Anchors, Emcees, and Hosts services for corporate events to keep things professional while also keeping the audience interested. We offer corporate anchors and hosts for:
        </p>   
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Annual meetings of the whole group</li>
            <li>Seminars and conferences</li>
            <li>Summits for leaders</li>
            <li>Town halls for businesses</li>
            <li>Programs to get employees involved</li>
            <li>Events for networking in business</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Each anchor gets a full briefing so they can represent your organization with honesty and clarity.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Stage-managed events need award ceremony anchors, emcees, and hosts
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Award nights need a lot of energy, good timing, and perfect planning. Our services for award ceremonies, which include anchors, emcees, and hosts, make sure that the event goes off without a hitch while still being fun and classy. We take care of hosts for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Nights of awards for businesses</li>
            <li>Events to honor people in the industry</li>
            <li>Awards for dealers and distributors</li>
            <li>Award ceremonies for employees inside the company</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Our emcees keep a close eye on the schedule while making announcements, keeping the audience interested, and making sure everything runs smoothly.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Services for Product Launches and Brand Events with Anchors and Hosts
         </h2>
         <p className="text-base leading-[1.5] text-gray-900">
            A product launch is more than just an announcement; it's a statement about the brand. Our Anchors, Emcees, and Hosts services for product launches focus on telling stories in a structured way and controlling the message of the brand. We make sure:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Clear introductions to products</li>
            <li>Easy coordination with AV and presentations</li>
            <li>Easy transitions between speakers</li>
            <li>Getting the audience involved without distracting them</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Our Anchors, Emcees, and Hosts are an important part of brand-driven Event Entertainment Services because of this.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Business Events: Conference and Seminar Anchors and Emcees
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
            For big conferences and seminars, you need anchors who can professionally handle time, speakers, and audience interaction. Our Anchors, Emcees, and Hosts services for conferences keep people on task and interested in the agenda. We offer hosts for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Conferences for businesses</li>
            <li>Forums for the industry</li>
            <li>Summits of knowledge</li>
            <li>Talk shows</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Investor meetings: Our anchors make sure the event stays on track and keeps the audience's attention.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Multilingual hosts, anchors, and emcees for a wide range of audiences
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          India's events are for a wide range of people. As part of our Anchors, Emcees, and Hosts services, we offer professionals who can speak English, Hindi, and other regional languages. This is perfect for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Corporate events all over India</li>
            <li>Programs run by the government and public sector</li>
            <li>Events for the community and culture</li>
            <li>Brand campaigns in more than one city</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Multilingual hosting makes it easier for people to connect and understand each other.
        </p>
      </div>
      </div>


       {/* Image */}
   
      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/anchors-emcees-hosts-event-entertainment-services.jpg"
              alt="Anchors, Emcees & Hosts Booking Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="mb-3 text-center">Anchors, Emcees & Hosts Booking Services</p>
          </div>



        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          For big public and live events, we provide anchors, emcees, and hosts
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            You need to be able to control the crowd and run the stage well at public events. Our Anchors, Emcees, and Hosts services include professionals who know how to handle high-energy situations. Good for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Concerts and festivals</li>
            <li>Events at colleges and universities</li>
            <li>Celebrations at the city level</li>
            <li>Public brand events</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Our hosts keep the audience interested while making sure the program stays on track
        </p>
      </div>


      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Anchors and emcees need to coordinate their scripts and make sure their content is in line with each other
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            A good anchor talks well, but a great anchor talks right. Our Anchors, Emcees, and Hosts services include making sure that the script fits with the brand's tone and the goals of the event. We help with:
         </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Scripts for opening and closing</li>
            <li>Introductions of the speakers</li>
            <li>Announcements of awards</li>
            <li>Messages that the brand agrees with</li>
            <li>Coordinate cues with technical teams</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This makes sure that all of your Event Entertainment Services are the same.
        </p>
      </div>
    

        {/* Section 9 */}
    <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Anchors and hosts manage the flow of the show on the ground
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Our anchors, emcees, and hosts don't just talk; they also keep the show moving. They work closely with:
         </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Teams that plan events</li>
            <li>People who work with technology and AV</li>
            <li>People who plan and run events</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This coordination makes sure that transitions go smoothly, the pace is controlled, and there is little downtime.
        </p>
    </div>
      
    

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Why You Should Hire Us for Anchors, Emcees, and Hosts
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          As a professional provider of Event Entertainment Services, we know that the quality of the host reflects directly on the brand and the event organizer. Some of our strengths are:   
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Anchors that have been tried and tested</li>
            <li>Emcees trained by the company</li>
            <li>Clear prices and booking</li>
            <li>Professional planning of rehearsals</li>
            <li>Reliable execution on the ground</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Businesses and brands all over India trust our Anchors, Emcees, and Hosts services.
        </p>
      </div>


      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
           Pan-India Availability of Anchors, Emcees, and Hosts Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We are based in Delhi NCR and provide Anchors, Emcees, and Hosts services all over India, including: Delhi, Noida, Gurgaon, Mumbai, Bangalore, Pune, Hyderabad, Jaipur, Chandigarh, and more. This lets brands keep the same level of hosting quality in different places.
        </p>
      </div>


      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Working together with full event entertainment services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our services for anchors, emcees, and hosts work perfectly with:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Live bands and famous people who perform</li>
            <li>Ceremonies for awards and gala nights</li>
            <li>Planning events for businesses</li>
            <li>Exhibitions and product launches</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes sure that the hosting, entertainment, and production teams work well together.
        </p>
      </div>


      {/* Section 13 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Industries That Use Our Anchors, Emcees, and Hosts Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           We offer Anchors, Emcees, and Hosts services for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Businesses and corporations</li>
            <li>Companies that do marketing and advertising</li>
            <li>Companies that deal with real estate and infrastructure</li>
            <li>Schools and universities</li>
            <li>Government and public sector groups</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Each host is chosen based on what is standard in the industry and what the audience expects.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Dedication to Hosting and Event Excellence in the Professional World
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We at event-management-delhi.com think that hosting is not just a way to fill time; it is the structure of the event. We pay close attention to professionalism, communication, and brand integrity when we provide our Anchors, Emcees, and Hosts services. There is support for every event:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Clear instructions and planning</li>
            <li>Official paperwork</li>
            <li>Coordination that is focused</li>
            <li>Managing shows in real time</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes sure that our Event Entertainment Services will always deliver.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Anchors, Emcees, and Hosts Who Make Events Better
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           A good host makes an event more than just an event. Our Anchors, Emcees, and Hosts services are meant to get people more involved, keep things moving, and improve how people see your brand. We don't just give you anchors; we also give you confident stage leadership for your event.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Get Professional Anchors, Emcees, and Hosts for Your Next Event
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           Our Anchors, Emcees, and Hosts services under Event Entertainment Services make sure that your corporate event, award ceremony, conference, or large-scale program is professional, clear, and connects with the audience.
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