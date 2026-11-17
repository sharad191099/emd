"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What does a Corporate Meetup Event Management Company do?",
   answer: "A Corporate Meetup Event Management Company plans and executes end-to-end corporate meetups, including venue selection, event planning, stage and AV setup, branding, guest management, hospitality, engagement activities, and complete on-ground coordination to ensure a smooth and professional meetup experience."},
  {question: "Do you manage corporate meetups of all sizes in Delhi NCR?",
   answer:"Yes. We manage corporate meetups of all scales in Delhi NCR—from small leadership and CXO meetups with 20–30 guests to large corporate networking meetups with 300+ attendees across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad."},
  {question: "What types of corporate meetups do you organize?",
   answer:"As a full-service Corporate Meetup Event Management Company, we organize leadership meetups, CXO roundtables, startup networking events, client meet-and-greet programs, internal team meetups, brand community meetups, and corporate relationship-building events."},
  {question: "Can you help with venue selection for corporate meetups in Delhi, Noida, and Gurgaon?",
   answer: "Absolutely. We assist with venue selection based on guest profile, budget, and meetup format. Our team recommends hotels, banquet halls, cafés, lounges, coworking spaces, rooftops, auditoriums, and corporate office venues across Delhi NCR."},
  {question: "Do you provide complete branding and setup for corporate meetups?",
   answer:"Yes. We handle all corporate meetup branding, including backdrops, standees, logo walls, signage, seating layout, stage or podium setup, lighting, and brand-aligned décor to ensure the meetup looks professional and consistent with your brand identity."},
  {question: "Is audio and technical support included in corporate meetup management?",
   answer:"Yes. Our corporate meetup event management services include microphones, speakers, sound systems, basic AV support, presentation setup, and on-site technical staff to ensure clear communication and smooth event flow."},
  {question: "Can you manage guest registration and hospitality for meetups?",
   answer:"Yes. We provide full guest management services such as RSVP coordination, welcome desk setup, badge distribution, seating assistance, VIP handling, refreshments coordination, and dedicated on-ground event managers."},
  {question: "Do you offer engagement activities for corporate meetups?",
   answer:"We do. Depending on the meetup objective, we can arrange professional emcees, networking activities, panel discussions, Q&A sessions, icebreakers, giveaways, photo booths, and light entertainment to increase interaction and engagement."},
   {question: "How much does it cost to hire a Corporate Meetup Event Management Company?",
   answer:"The cost of corporate meetup management depends on factors like the number of guests, venue type, food package, branding requirements, AV setup, photography, manpower, and event duration. We create customized packages based on your budget and event goals."},
   {question: "Why should I hire a professional Corporate Meetup Event Management Company?",
   answer:"Hiring a professional Corporate Meetup Event Management Company ensures stress-free planning, brand-focused execution, smooth coordination, time management, and a polished experience for guests—allowing you to focus on networking and business objectives instead of logistics."}
];

export default function CorporatemeetupPage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Corporate Meetup " },
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
              <span className="block">Corporate Meetup</span>
              <span className="block text-[#1675b9]">ORGANISER</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Corporate Meetup Event Management Company in Delhi NCR</h2>

            <p className="mt-10">
              When businesses want real connections—not just long meetings—they <a className="text-[red]" href="https://www.hire4event.com/service/corporate-events">plan a corporate meetup</a>. A meetup is where teams bond, leaders align goals, partners build trust, and brands create strong impressions in a relaxed but professional environment. If you’re looking for a Corporate Meetup Event Management Company that can plan, manage, and execute meetups with zero stress and full impact, you’re in the right place.
            </p>
            <p className="mt-5">
                At Event-Management-Delhi.com, we design and deliver premium corporate meetups in Delhi NCR (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad). Whether it’s a leadership meetup, startup networking session, CXO roundtable, team meetup,<a className="text-[red]" href="https://www.hire4event.com/corporate-events">corporate community gathering</a>, or client meet-and-greet—our team handles everything end-to-end: planning, venue, theme, stage/AV, branding, guest coordination, food, entertainment, and full on-ground execution.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                  “A corporate meetup is not measured by the length of the agenda, but by the quality of conversations it creates. It’s where teams connect beyond titles, leaders share direction with clarity, and brands build trust through genuine interaction. When planned thoughtfully and executed professionally, a corporate meetup becomes a strategic business experience—one that strengthens relationships, aligns vision, and leaves a lasting impression long after the event concludes.”
              </p>
            </div>
             <p className="mt-5">
                And yes—this page is dedicated to one thing: helping you find the right Corporate Meetup Event Management Company for your next <a className="text-[red]" href="https://www.hire4event.com/corporate-event-planner-in-noida">corporate gathering</a>. From the first discussion to the final wrap-up, we focus on clarity, coordination, and purpose-driven execution. We understand that every corporate meetup has a different objective—networking, alignment, collaboration, or relationship-building—and we plan accordingly. Our approach combines strategic planning, smooth operations, and attention to detail, ensuring your meetup runs seamlessly, feels well-organized, and delivers meaningful engagement for every participant involved.
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
          Why Corporate Meetups Matter More Than Ever
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Corporate meetups are different from big conferences. They’re shorter, focused, interactive, and built for networking and engagement. A well-planned meetup can:
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Strengthen business relationships and trust</li>
            <li>Improve team collaboration and internal culture</li>
            <li>Increase brand recall in a friendly environment</li>
            <li>Generate leads through networking and partnerships</li>
            <li>Create shareable content for LinkedIn and brand marketing</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         But the success of a meetup depends on planning the “small details” perfectly—guest flow, ambience, sound, seating, refreshments, activities, timing, and seamless coordination. That’s why hiring an experienced Corporate Meetup Event Management Company saves time, protects your brand image, and ensures a smooth experience.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            What We Do as a Corporate Meetup Event Management Company</h2>
         <p className="text-base leading-[1.65] text-gray-900">
          As a professional Corporate Meetup Event Management Company, we don’t deliver random arrangements. We create a structured event journey—from entry to exit—so people feel welcomed, comfortable, engaged, and impressed.<strong>Our corporate meetup services include:</strong>
        </p>   
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Meetup planning and concept creation</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/book-venue-for-corporate-event-and-conferences">Venue selection and booking support</a></li>
            <li>Stage setup (if needed), ambience and décor</li>
            <li>Audio, mic, speaker, and basic AV support</li>
            <li>Corporate branding & printing (standees, backdrops, signage)</li>
            <li>Registration desk and guest management staff</li>
            <li>Refreshments, meals, and hospitality coordination</li>
            <li>Emcee/host, music, light entertainment (optional)</li>
            <li>Photography and short recap video (optional)</li>
            <li>Complete event day coordination and supervision</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         From intimate boardroom-style meetups to large networking evenings—our execution stays professional, polished, and on-time.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Types of Corporate Meetups We Manage
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Different companies need different meetup formats. As a full-service Corporate Meetup Event Management Company, we manage:
        </p>
        <h2 className="mt-5 mb-2 text-[21px] font-semibold text-[#202020]">
          1) Leadership & CXO Meetups
        </h2>
         <p className="text-base leading-[1.65] text-gray-900">
         High-profile and high-precision. We arrange premium venues, controlled entry, formal seating, smooth stage flow, and VIP hospitality.
        </p>
        <h2 className="mt-3 mb-2 text-[21px] font-semibold text-[#202020]">
          2) Networking Meetups & Business Mixers
        </h2>
         <p className="text-base leading-[1.65] text-gray-900">
         Perfect for startups, founders, agencies, and corporate communities. We focus on networking zones, lounge seating, food stations, and interactive engagement.
        </p>
        <h2 className="mt-3 mb-2 text-[21px] font-semibold text-[#202020]">
          3) Client Meetups & Relationship Events
        </h2>
         <p className="text-base leading-[1.65] text-gray-900">
         Designed to strengthen partnerships. We add branding touchpoints, thoughtful hospitality, and a premium experience that reflects your company values.
        </p>
        <h2 className="mt-3 mb-2 text-[21px] font-semibold text-[#202020]">
         4) Team Meetups & Internal Culture Events
        </h2>
         <p className="text-base leading-[1.65] text-gray-900">
         Great for bonding and motivation. We can add icebreakers, games, engagement activities, light entertainment, and theme-based décor.
        </p>
        <h2 className="mt-3 mb-2 text-[21px] font-semibold text-[#202020]">
          5) Product & Brand Community Meetups
        </h2>
         <p className="text-base leading-[1.65] text-gray-900">
         Ideal for launches and user communities. We manage demo zones, brand booths, AV support, signage, and content coverage.<br/>No matter the format, you get one reliable execution partner: Corporate Meetup Event Management Company support from planning to wrap-up.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
         Venue Planning for Corporate Meetups in Delhi, Noida & Gurgaon</h2>
         <p className="text-base leading-[1.5] text-gray-900">
          Venue decides the vibe. A corporate meetup should feel comfortable, premium, and easy to access. Our team suggests venues based on your guest profile and meetup style, such as:
        </p>
        <h2 className="mt-5 mb-3 text-xl font-semibold text-[#202020]">
         Venue Options We Manage</h2>
        <div className="mt-2 pl-5 text-base leading-[1.65] text-gray-900">
            <li>Hotels and banquet spaces</li>
            <li>Cafés and private lounges</li>
            <li>Rooftop venues for evening meetups</li>
            <li>Restaurants with private halls</li>
            <li>Coworking spaces & business hubs</li>
            <li>Auditoriums for formal sessions</li>
            <li>Corporate office venues for internal meetups</li>
        </div>
        <h2 className="mt-10 mb-3 text-xl font-semibold text-[#202020]">
         Complete Venue Management Support</h2>
         <div className="mt-2 pl-5 text-base leading-[1.65] text-gray-900">
            <li>Venue shortlisting based on accessibility, parking, and connectivity</li>
            <li>Price negotiation and contract finalization with venue partners</li>
            <li>Layout and seating planning (theatre, classroom, round-table, or lounge style)</li>
            <li>Coordination for <a className="text-[red]" href="https://www.hire4event.com/equipment/audio-visual-equipment-on-rent">AV setup</a>, branding placement, and registration area</li>
            <li>Vendor access management and loading/unloading coordination</li>
            <li>Time scheduling, entry permissions, and venue compliance handling</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         We handle venue negotiations, layout planning, vendor access, and timing coordination so you don’t have to run behind multiple contacts.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Meetup Setup, Ambience & Branding That Looks Corporate (Not Random)
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         A meetup doesn’t need a huge stage—but it needs the right atmosphere. As a corporate-focused Corporate Meetup Event Management Company, we design the setup to look brand-consistent and professional.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Ambience & Setup Options
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Welcome branding & entry gate signage</li>
            <li>Stage/podium setup (optional)</li>
            <li>Backdrop and logo wall (for photos)</li>
            <li>Seating layout: theatre / classroom / lounge / mixed</li>
            <li>Networking corners and interaction zones</li>
            <li>LED screen or TV screen setup (optional)</li>
            <li>Lighting for premium look and photos</li>
            <li>Background music and emcee coordination</li>
        </div>
         <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Branding Deliverables
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Standees, flex boards, foam boards</li>
            <li>Table branding, tent cards, name tags</li>
            <li>Event agenda and schedule stand</li>
            <li>Directional signage and session branding</li>
            <li>Photo backdrop / media wall for meetups</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
          Your meetup should look like your brand—clean, premium, and planned.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Audio, Mic & Technical Support for Meetups
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Most meetups fail because guests can’t hear clearly or the flow becomes unorganized. Our Corporate Meetup Event Management Company team ensures technical smoothness:
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Technical Support & Equipment
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Wireless microphones (collar/handheld)</li>
            <li>Speakers & sound system as per venue size</li>
            <li>Basic AV support for presentations</li>
            <li>Laptop and clicker setup</li>
            <li>On-site technician support during the meetup</li>
        </div>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         On-Ground Technical Management
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Dedicated on-site technician support throughout the meetup</li>
            <li>Sound checks and technical rehearsal before the event starts</li>
            <li>Real-time troubleshooting during sessions</li>
            <li>Coordination with speakers for mic handling and presentation flow</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
          If you want a hybrid meetup (online + offline), we can also arrange live streaming and virtual integration depending on requirements.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Guest Management & Hospitality: The Meetup “Experience” Part
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         A corporate meetup isn’t only about agenda—it’s about how people feel. Our hospitality approach ensures guests enjoy the event without confusion.
        </p>
         <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          We Provide:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>RSVP coordination support</li>
            <li>Welcome desk and entry assistance</li>
            <li>Badges/lanyards (if needed)</li>
            <li>Seating guidance and crowd flow management</li>
            <li>Refreshments & food counter coordination</li>
            <li>VIP handling for speakers/partners</li>
            <li>Dedicated event coordinator on-ground</li>
        </div>
        <p className="mt-5 text-base leading-[1.65] text-gray-900">
        This is where a professional Corporate Meetup Event Management Company makes the biggest difference—smoothness, comfort, and control.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Engagement Ideas We Can Add to Corporate Meetups
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Want your meetup to be more lively and memorable? We can add engagement elements that still feel corporate:
         </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Our engagement services include:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Professional emcee to keep flow active</li>
            <li>Quick networking games / icebreakers</li>
            <li>Panel discussion / fireside chat setup</li>
            <li>Q&A session handling with mic runners</li>
            <li>Lucky draw / giveaways coordination</li>
            <li>Corporate photo booth corner</li>
            <li>Short live performance (soft, premium)</li>
        </div>
        <p className="mt-5 text-base leading-[1.65] text-gray-900">
         These additions improve energy, networking, and content opportunities.
        </p>
      </div>
      </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/corporate-meetup-event-management-company.jpg"
              alt="Corporate Meetup Event Management Company"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="text-center">Corporate Meetup Event Management Company</p>
          </div>

      {/* Section 9 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Why Choose Event-Management-Delhi.com for Corporate Meetups?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          There are many vendors, but a <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/corporate-event/meeting-organiser">corporate meetup</a> needs corporate discipline: timing, quality, and professional coordination. Businesses choose us because we deliver the full package.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         What you get with us:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>End-to-end planning from one team</li>
            <li>Reliable vendors & professional staff</li>
            <li>Clear communication and fast coordination</li>
            <li>Branding-focused setup and corporate aesthetics</li>
            <li>Strong experience in Delhi, Noida, Gurgaon & NCR</li>
            <li>Flexible budgets for small and large meetups</li>
            <li>One dedicated event manager for your meetup</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         If you want a trusted Corporate Meetup Event Management Company, we’re built exactly for this.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Corporate Meetup Event Management Company for Delhi NCR Locations
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We provide meetup planning and execution across:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Corporate Meetup Event Management Company in Delhi</li>
            <li>Corporate Meetup Event Management Company in Noida</li>
            <li>Corporate Meetup Event Management Company in Gurgaon</li>
            <li>Faridabad & Ghaziabad corporate meetups</li>
            <li>Nearby NCR zones as per event requirement</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         Whether your meetup is on a weekday evening, weekend afternoon, or a full-day corporate session—our team is ready.
        </p>
      </div>

      {/* Section 11*/}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Estimated Cost for Corporate Meetups (What Affects Pricing?)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Meetup pricing varies because every corporate meetup has a different setup and venue requirement. Cost depends on:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Number of attendees</li>
            <li>Venue type (hotel/lounge/coworking/rooftop)</li>
            <li>Food package and hospitality level</li>
            <li>Branding and printing quantity</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/plan-your-event/audio-visual-equipment-rental-company-for-events">AV requirement</a> (mics, speakers, LED, screens)</li>
            <li>Photography/videography needs</li>
            <li>Manpower and event duration</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
          We create a practical plan within your budget, without compromising on essentials.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Let’s Plan Your Next Corporate Meetup
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         If you want a meetup that looks premium, runs smoothly, and feels truly professional—partner with Event-Management-Delhi.com. We are your reliable Corporate Meetup Event Management Company for Delhi NCR, offering complete solutions under one roof.<br/>Connect with us today to plan your next corporate meetup, <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/networking-event-organiser">networking event</a>, leadership gathering, or team meetup with confidence.
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