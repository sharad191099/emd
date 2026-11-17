"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What Live Bands & Celebrity Performers services do you provide under Event Entertainment Services?",
   answer: "We provide end-to-end Live Bands & Celebrity Performers services as part of our professional Event Entertainment Services. This includes artist shortlisting, booking, contract management, technical coordination, travel and hospitality, stage production, on-ground artist handling, and complete show execution. Clients get a single, accountable partner for the entire entertainment experience."},
  {question: "Do you offer complete live band booking and management services for events?",
   answer:"Yes. We specialise in professional live band booking and management services for corporate events, weddings, festivals, college fests, and public concerts. From selecting the right genre and band to managing sound, stage, rehearsals, and performance flow, we handle everything under our Live Bands & Celebrity Performers services."},
  {question: "Can you arrange celebrity performers for corporate and private events?",
   answer:"Absolutely. We provide celebrity performer booking and management services for corporate events, award nights, product launches, dealer meets, private parties, and public shows. Our team manages celebrity coordination discreetly and professionally to ensure smooth execution and high-impact event entertainment."},
  {question: "How do you select the right live band or celebrity performer for an event?",
   answer: "We choose artists based on event objectives, audience demographics, brand positioning, venue type, and budget. Our curated approach ensures that every Live Band or Celebrity Performer aligns with your event’s purpose and enhances the overall Event Entertainment Services experience."},
  {question: "Do you manage technical production for live bands and celebrity performances?",
   answer:"Yes. Our Live Bands & Celebrity Performers services are backed by full technical and production support. We manage professional sound systems, lighting design, LED screens, stage setup, backline equipment, power planning, rehearsals, and live show cues to deliver flawless performances."},
  {question: "Are your Live Bands & Celebrity Performers services suitable for corporate events?",
   answer:"Yes. We design corporate-friendly live band and celebrity entertainment solutions that maintain professionalism while creating excitement. Our services are ideal for annual corporate parties, employee engagement events, leadership conferences, brand anniversaries, and corporate offsites."},
  {question: "Do you provide artist management and backstage coordination during events?",
   answer:"We offer complete on-ground artist management and backstage coordination services. This includes artist arrival planning, dressing rooms, hospitality, security coordination, performance timing, green-room management, and artist departures—ensuring a smooth and stress-free experience for clients and performers."},
  {question: "Can you manage large-scale live concerts and celebrity nights?",
   answer:"Yes. We provide full-scale live concert and celebrity night management services including show planning, crowd coordination, security integration, technical execution, sponsor branding, and backstage operations. These services are ideal for college festivals, public events, city celebrations, and ticketed concerts."},
   {question: "In which locations do you provide Live Bands & Celebrity Performers services?",
   answer:"We are based in Delhi NCR and deliver Live Bands & Celebrity Performers services across India, including Delhi, Noida, Gurgaon, Mumbai, Bangalore, Pune, Hyderabad, Jaipur, Chandigarh, and other major cities. Clients benefit from centralized planning and consistent execution quality nationwide."},
   {question: "Why choose event-management-delhi.com for Live Bands & Celebrity Performers services?",
   answer:"Clients choose us for our verified artist network, transparent pricing, strong production capabilities, professional artist handling, and complete ownership of execution. Our Event Entertainment Services are built on reliability, creativity, and accountability— ensuring every live performance or celebrity appearance adds real value to your event."}
];

export default function livebandspage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Live Bands & Celebrity ", highlight: true},
                { text: "Performers Services", },
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
              <span className="block">Live Bands & Celebrity</span>
              <span className="block text-[#1675b9]">Booking Services</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Professional Live Bands & Celebrity Performers Management Under Event Entertainment Services</h2>

            <p className="mt-10">
              Entertainment plays a defining role in the success of any event. It sets the mood, makes people feel connected, and affects how they remember the event long after it's over. Live bands and celebrity performers bring a level of excitement and authenticity that recorded or generic entertainment just can't match. When planned well, live performances make corporate events, social gatherings, brand launches, and big public programs more fun and interesting.
            </p>
            <p className="mt-5">
                Live Bands & Celebrity Performers Services for Premium Event Entertainment Experiences are meant to provide carefully chosen performances that fit with the event's goals and the type of people who will be there. These services do more than just book artists; they also make sure that the performance is relevant, the technology is ready, and everything runs smoothly. Every performance is planned to improve the event's flow and brand image, whether it's a live band setting the mood or a celebrity making an appearance to draw attention.
            </p>
            <p className="mt-5">
                We are a professional Event Entertainment Services company that takes care of every detail when it comes to live bands and celebrity performers. Each part is handled professionally, from choosing artists and negotiating contracts to coordinating production and managing things on the ground. This all-in-one approach makes sure that performances go off without a hitch, meet technical standards, and have a big effect without getting in the way of the event's schedule or goals.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                  “Live Bands & Celebrity Performers Services deliver more than entertainment; they create defining moments that shape how an event is remembered. Through careful artist selection, professional production management, and seamless execution, these performances add energy, credibility, and emotional impact. When managed by experienced event professionals, live entertainment becomes a powerful tool for engagement, brand reinforcement, and memorable guest experiences.”
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
          Full-service booking and execution for live bands and celebrity performers
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          When clients hire us for live bands and celebrity performers, they get a complete solution instead of a bunch of separate services. Our method is meant to get rid of the risks, confusion, and last-minute problems that come with live entertainment. We offer the following services for live bands and celebrity performers:
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Choosing an artist based on the goal of the event and the type of people who will be there</li>
            <li>Professional negotiation and management of contracts</li>
            <li>Planning schedules and coordinating performance</li>
            <li>Arrangements for travel, lodging, and hospitality</li>
            <li>Managing technical riders and coordinating production</li>
            <li>Taking care of artists on the ground and overseeing the show</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         This organized way of doing things makes sure that your Event Entertainment Services run smoothly, are well-organized, and are stress-free.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Live Band Performance Services That Get People Excited and Involved
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
          Live music can change the mood of an event right away. We curate and manage live bands as part of our Live Bands & Celebrity Performers services. These bands get the audience more involved and make the event more fun. We offer live band shows for:
        </p>   
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Annual company days and parties</li>
            <li>Activating brands and launching new products</li>
            <li>Ceremonies for awards and gala dinners</li>
            <li>High-end social events and wedding receptions</li>
            <li>Festivals at colleges and events for young people</li>
            <li>Public concerts and shows with tickets.</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Each Live Bands & Celebrity Performers engagement is tailored to the venue's acoustics, the audience's demographics, and the flow of the event to make sure the performance fits in with the event instead of taking over it.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Booking Services for Celebrity Performers for High-Impact Event Entertainment
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Famous performers make any event more visible, credible, and exciting right away. Our Live Bands & Celebrity Performers services include professionally managing celebrity artists in the fields of music, entertainment, and performance. We take care of famous performers for:
        </p>
        <div className="mt-2 pl-5 text-base leading-[1.65] text-gray-900">
            <li>Annual meetings and award nights for businesses</li>
            <li>Launching new products and revealing new brands</li>
            <li>Conferences for dealers and distributors</li>
            <li>Events and activities in malls and public places</li>
            <li>Private parties and events just for you</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Our team takes care of all the planning in a professional and private way, making sure that the celebrity's presence adds to the event's prestige while keeping everything running smoothly.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Choosing the Right Artists for Live Bands and Celebrity Performers
         </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          Choosing the right performer is very important for the success of the event. When we plan Live Bands & Celebrity Performers, we make sure that the entertainment fits with the main goal of the event. We look at:
        </p>
        <div className="mt-2 pl-5 text-base leading-[1.65] text-gray-900">
            <li>What the target audience wants</li>
            <li>Brand messaging and positioning</li>
            <li>Size of the event and type of venue</li>
            <li>Being aware of other cultures and having a diverse audience</li>
            <li>Budget and technical viability</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         This makes sure that the Live Bands & Celebrity Performers you choose will connect with your guests and help your event's purpose.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Technical Production and Stage Management for Bands and Celebrities Who Perform Live
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         Professional production is needed for world-class entertainment. Our Live Bands & Celebrity Performers services are backed up by strong technical and production skills. We take care of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Stage design and layout like in a concert</li>
            <li>Sound systems and acoustics for professionals</li>
            <li>More advanced lighting design and effects</li>
            <li>LED screens, pictures, and backgrounds</li>
            <li>Managing power and backline equipment</li>
            <li>Sound checks, rehearsals, and cues for the show</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes sure that the performances are perfect and the audience has a great time.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Live bands and famous people performing at corporate events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          There needs to be a balance between sophistication and excitement at corporate events. We carefully choose our Live Bands & Celebrity Performers services for corporate clients to make sure they meet professional standards while still being fun. Best for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Company parties every year</li>
            <li>Events to get employees involved</li>
            <li>Conferences and summits for leaders</li>
            <li>Offsite meetings and retreats for businesses</li>
            <li>Celebrations for the anniversary of a brand</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          As part of our Event Entertainment Services, we make sure that the entertainment fits with the company's culture and values.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Management Services for Live Concerts and Celebrity Nights
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         For big events, our Live Bands & Celebrity Performers services include managing full-scale concerts and celebrity nights. We are responsible for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planning the artist's schedule and the flow of the show</li>
            <li>Managing the audience and coordinating security</li>
            <li>Making the show and running it technically</li>
            <li>Running things behind the scenes and in the green room</li>
            <li>Integrating stage and sponsor branding</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            These services are great for college events, citywide celebrations, festivals, and public entertainment programs.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Managing artists on the ground and coordinating backstage
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Behind the scenes, live entertainment needs to be very carefully planned. Our Live Bands & Celebrity Performers team takes care of every detail to make sure that artists can perform in a comfortable and professional way. We take care of:
         </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planning when and where the artist will arrive and move</li>
            <li>Setting up the dressing rooms and hospitality</li>
            <li>Coordination of performance times</li>
            <li>Access control and security</li>
            <li>Managing the departure of artists and the end of the show</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         This focus on the small things makes sure that everything goes smoothly and that artists have a good time.
        </p>
      </div>
      </div>


    <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Execution Capabilities for Live Bands and Celebrities Across India 
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We are based in Delhi NCR and offer Live Bands & Celebrity Performers services all over India. This lets clients put on entertainment programs in many cities with the same high quality. Our network for carrying out tasks includes: Delhi, Noida, Gurgaon, Mumbai, Bangalore, Pune, Hyderabad, Jaipur, Chandigarh, and other big cities. This lets one professional team plan everything from one place and carry it out in different places.
         </p>
    </div>
      
     {/* Image */}
   
      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/live-bands-celebrity-performers-event-entertainment-services.jpg"
              alt="Live Bands & Celebrity Performers Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="mb-3 text-center">Live Bands & Celebrity Performers Services</p>
          </div>


      {/* Section 9 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Why Pick Us for Event Entertainment Services That Include Live Bands and Celebrity Performers
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Customers trust us because we have a lot of experience, are professional, and have creative ideas. What makes our Live Bands & Celebrity Performers services stand out:   
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A strong network of artists and verified performers</li>
            <li>Clear pricing and contracts</li>
            <li>Dependable help with technical and production issues</li>
            <li>Professionals who know how to manage artists</li>
            <li>Responsibility for execution from start to finish</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         We are a trusted provider of Event Entertainment Services, and we know how important it is to be responsible when putting on live shows and celebrity events.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Integration with full event management services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our Live Bands & Celebrity Performers services work perfectly with:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planning and running corporate events</li>
            <li>Ceremonies to give out awards and fancy dinners</li>
            <li>Launching new products and promoting brands</li>
            <li>Entertainment for trade shows and exhibitions</li>
            <li>Planning weddings and other social events</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This lets clients work with one experienced partner to handle all of the entertainment and production for their event.
        </p>
      </div>

      {/* Section 11*/}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Businesses that hire live bands and famous people to perform
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We offer services for live bands and celebrity performers for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Businesses and corporations</li>
            <li>Agencies for marketing and advertising</li>
            <li>Companies that deal with real estate and infrastructure</li>
            <li>Colleges and schools</li>
            <li>Events for the government and the public sector</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Each engagement is tailored to meet the needs of the industry and the behavior of the audience.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Dedication to professionalism and doing a great job
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We at event-management-delhi.com think that entertainment should improve your reputation, not put you at risk. We pay close attention to deadlines, safety, compliance, and quality control when we do our Live Bands & Celebrity Performers services. We manage every project with:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Clear communication</li>
            <li>Professional paperwork</li>
            <li>Teams that are in charge of coordination</li>
            <li>Oversight of execution in real time</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes sure that your Event Entertainment Services always do a great job.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Live bands and famous people who make events memorable
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Long after the speeches and decorations are gone, people will remember the entertainment. With our Live Bands & Celebrity Performers services, we want to make memories that guests will talk about, share, and remember. We don't just hire artists; we also plan entertainment that will make your event a success.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Hire live bands and famous people to perform at your next event.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           If you're planning a big party, a corporate event, or a brand activation, our Event Entertainment Services offer everything you need in one place: live bands and celebrity performers.
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