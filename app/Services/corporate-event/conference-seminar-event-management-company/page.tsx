"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What services does a conference and seminar event management company in Delhi NCR provide?",
   answer: "A professional conference and seminar event management company in Delhi NCR handles end-to-end planning, coordination, and execution. This includes venue selection, stage setup, AV management, branding, registration, guest handling, speaker coordination, hospitality, and on-ground event management for corporate conferences and seminars."},
  {question: "Do you manage corporate conferences and seminars of all sizes?",
   answer:"Yes. We manage conferences and seminars of all scales, from small business seminars with 30–50 delegates to large corporate conferences with 1,000+ attendees across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad."},
  {question: "Can you help with venue selection for conferences in Delhi, Noida, and Gurgaon?",
   answer:"Absolutely. We assist in selecting and managing conference venues such as five-star hotels, convention centers, auditoriums, banquet halls, and corporate spaces in Delhi NCR based on your audience size, event format, and budget."},
  {question: "Do you provide complete AV and technical support for seminars and conferences?",
   answer: "Yes. Our conference event management services include full AV support such as sound systems, wireless microphones, LED walls, projectors, lighting, video conferencing for hybrid events, and a dedicated technical team to ensure flawless execution."},
  {question: "Do you handle delegate registration and guest management for conferences?",
   answer:"We manage complete guest and delegate handling, including online and on-site registration, RSVP management, QR or barcode check-in systems, badge printing, delegate kits, seating assistance, and help desks for corporate conferences and seminars."},
  {question: "Can you manage speakers, panelists, and VIP guests for corporate events?",
   answer:"Yes. We coordinate speaker schedules, presentation handling, green room setup, stage movement, VIP hospitality, airport transfers, hotel coordination, and on-ground support to ensure a smooth experience for all speakers and senior executives."},
  {question: "Do you offer branding and printing solutions for corporate conferences?",
   answer:"We provide complete corporate branding and printing services, including stage backdrops, standees, banners, welcome boards, agenda cards, session branding, certificates, trophies, media walls, and event signage aligned with your brand identity."},
  {question: "Do you organize hybrid and virtual conferences in Delhi NCR?",
   answer:"Yes. We organize virtual and hybrid conferences with live streaming, video conferencing integration, technical support, speaker coordination, and digital engagement tools, making it easy to connect physical and online audiences."},
   {question: "How much does it cost to organize a conference or seminar in Delhi NCR?",
   answer:"The cost of conference and seminar event management depends on factors like attendee count, venue type, stage and branding size, AV requirements, food and hospitality, event duration, and photography or videography needs. We offer flexible and customized packages."},
   {question: "Why should companies choose Event-Management-Delhi.com for conference planning?",
   answer:"Companies choose Event-Management-Delhi.com for our structured planning, experienced corporate event team, reliable vendors, transparent pricing, and strong execution across Delhi NCR. We understand corporate standards and deliver professionally managed conferences and seminars."}
];

export default function Conferenceeventpage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Conference & Seminar " },
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
              <span className="block">CONFERENCE & SEMINAR</span>
              <span className="block text-[#1675b9]">ORGANISER</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Conference & Seminar Event Management Company in Delhi NCR</h2>

            <p className="mt-10">
              Conference & Seminar Event Management Company aren't simply "events" in today's fast-paced business environment. They're also great ways to build authority, make strong business connections, teach people, and come up with fresh ideas. You need a professional conference and seminar event management company that can handle everything with accuracy, creativity, and professionalism, whether you're <a className="text-[red]" href="https://www.hire4event.com/inhouse-service/conference-and-corporate-events">planning a corporate conference</a>, leadership summit, annual seminar, dealer meet, training session, or an industry conclave.
            </p>
            <p className="mt-5">
                We at Event-Management-Delhi.com design and carry out high-impact corporate conferences and seminars in Delhi NCR, which includes Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad. We offer full-service solutions for your event, from choosing the location and setting up the stage to managing the speakers, branding, registration, <a className="text-[red]" href="/Services/corporate-event/conference-seminar-event-management-company">AV setup</a>, and hospitality. We make sure your event runs smoothly, is interesting, and is remembered.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                 “A well-executed conference is not just about logistics. It is about clarity of purpose, disciplined execution, and creating an environment where ideas, conversations, and decisions can move forward with confidence.”
              </p>
            </div>
             <p className="mt-5">
                Beyond execution, our focus is on strategic planning and measurable outcomes. Every conference or seminar we manage is built around your objectives—whether that is knowledge sharing, leadership alignment, product positioning, or stakeholder engagement. Our experienced team anticipates challenges, coordinates every moving part, and ensures timelines, budgets, and quality standards are met without compromise. The result is a well-structured, purpose-driven event that delivers real value to your audience and strengthens your brand presence.
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
          Why Hire a Company to Plan Your Conference or Seminar?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          There are a lot of moving factors in a conference or seminar. Your brand's image can be hurt by even little blunders, including bad sound quality, late registration, messed-up seating, or timetables that are hard to understand. That's why companies want to <a className="text-[red]" href="https://www.hire4event.com/event-planner">hire an expert conference event planner</a> in Delhi who knows what businesses want and can handle every aspect.<br/>When you hire our conference and seminar management team, you get:
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>Planning that is organized and has defined deadlines</li>
          <li>Professional <a className="text-[red]" href="https://www.hire4event.com/inhouse-service/event-production-and-rental-service">event production and stage management</a></li>
          <li>Reliable AV (audio, video, LED, mic, sound) support</li>
          <li>Branding, printing, and on-the-ground visibility solutions</li>
          <li>Guest management, RSVP, and registration help</li>
          <li>Coordinating vendors and having a professional event planner</li>
          <li>Making sure everything goes smoothly with backup plans and risk management</li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We don't merely plan an event. We develop a corporate experience that is well-managed and in line with your goals.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
       Delhi NCR's Conference and Seminar Event Management Services</h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We offer full conference and seminar services to businesses, associations, startups, multinational corporations, schools, and professional organizations. We tailor our solutions to fit the size of the event, the sort of audience, the location, the length of time, and your business goals.<br/><strong className="text-[20px]">1) Planning the Conference and Making a Plan for the Event</strong>
        </p>
        <p className="mt-3 text-base text-gray-900">
          A good plan is the first step to a successful conference. Our team can help you figure out:
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
          <li>The goal of the event (networking, education, <a className="text-[red]" href="https://www.hire4event.com/service/brand-promotion-and-product-launch-event">product launch </a>, leadership, training)</li>
          <li>The type of people that will be there and how many people are expected to show up</li>
          <li>Planning the flow, agenda, and schedule of the event</li>
          <li>Managing the timing of speakers, seminars, and the stage</li>
          <li>Planning a budget using the greatest prices from vendors</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We make the planning easy to understand and focused on getting results.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          2) Choosing a Venue and Taking Care of It
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Finding the correct place to hold a seminar or conference is very important for its success. We help you pick the best one based on your needs and budget:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Hotels with three or five stars</li>
          <li>Convention centers</li>
          <li>Corporate office spaces</li>
          <li>Open spaces for big business meetings</li>
          <li><a className="text-[red]" href="https://www.hire4event.com/book-venue-for-corporate-event-and-conferences?category=auditorium&location_city=&search_venue=Search+Venue">Banquet halls and auditoriums</a></li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We take care of booking the location, negotiating the terms, getting permission, setting up the stage, moving vendors, and more.<br/>Our experts can help you choose a conference space in Delhi, Noida, or Gurgaon that fits the format of your event.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
         3) Setting Up the Stage, Branding, and Making the Event Happen </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          A conference should look high-end and professional. We offer full conference event production services in Delhi NCR, such as:<br/><strong className="text-[20px]">Key Cities We Serve as a Conference & Seminar Event Management Company</strong>
        </p>
        <div className="mt-2 pl-5 text-base leading-[1.65] text-gray-900">
          <li>Setting up the stage and backdrop</li>
          <li>Branding the podium and making the stage seem good</li>
          <li>Decorating the space with a corporate theme</li>
          <li>Setting up the LED wall and screen</li>
          <li>Providing lighting, truss, and rigging solutions</li>
          <li>Making signs and things for events in a professional way</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We make sure that everything looks professional, clean, and impactful, whether it's a leadership summit or a formal lecture.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          4) Setting Up Audio and Video (AV) and Helping with Technical Issues
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         A meeting must have clear sound and visuals. We offer full AV solutions:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Setting up wireless microphones (handheld, collar, podium)</li>
          <li>Setting up a PA sound system and speakers</li>
          <li>Setting up projectors, screens, and <a className="text-[red]" href="https://www.hire4event.com/p2-led-wall">LED walls</a></li>
          <li>Connecting laptops and supporting presentations</li>
          <li>Setting up video conferencing (for hybrid conferences)</li>
          <li>Providing a technical crew for live handling</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We make sure that every attendee can hear, see, and comprehend the proceedings without any problems.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          5) Managing Guests and the Registration Desk
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A smooth arrival sets the mood for the whole event. We take care of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Coordinating online and offline registration</li>
          <li>Managing RSVPs and confirming guests</li>
          <li>Setting up the registration desk with staff</li>
          <li>Making badges, lanyards, and ID cards</li>
          <li>Making delegate kits and welcome kits</li>
          <li>Help with seating and managing lines</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          For big corporate conventions, we can also set up entrance systems that use barcodes or QR codes to speed up check-in.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          6) Managing Speakers and VIPs
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Speakers are the core of any successful seminar or conference. Our team takes complete care of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Coordinating speakers and managing their schedules</li>
          <li>Setting up and managing the green room</li>
          <li>Collecting, reviewing, and organizing presentations</li>
          <li>Planning and coordinating speaker movement on stage</li>
          <li>Providing special hospitality for VIPs and senior executives</li>
          <li>Handling airport pickups, hotel transfers, and local transportation</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We ensure every speaker enjoys a comfortable, well-organized experience, allowing them to focus fully on delivering their best performance.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         7) Help with Corporate Branding and Printing
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          At conferences, it's vital for brands to be seen. We offer full branding solutions for business events:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Standee, flex, banners, and welcome boards</li>
          <li>Signs that point the way, <a className="text-[red]" href="https://www.hire4event.com/event-branding">branding for the stage</a></li>
          <li>Agenda cards, pamphlets, and booklets</li>
          <li>Trophies and certificates</li>
          <li>A photo booth and a media wall with your logo on it</li>
          <li>Printing a backdrop and branding each session</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          Our branding team makes sure that everything looks professional, consistent, and in line with your company's identity.
        </p>
      </div>

      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         8) Arrangements for Food, Drinks, and Hospitality
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          When it comes to seminars and conferences, hospitality is important. We set up:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Snacks for tea and coffee</li>
          <li>Packages for breakfast, lunch, and dinner</li>
          <li>Water bottles and snack counters</li>
          <li>VIP hospitality services</li>
          <li>Coordination at the hotel and the hospitality desk</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          Based on the profile of your guests and the time of the event, we can arrange meal options that will make everyone feel at ease.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          9) Optional Corporate Entertainment and Engagement
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We can add engagement components to your conference if it has a networking session or closing ceremony at night. These could be:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Anchors and professional emcees</li>
          <li><a className="text-[red]" href="https://www.hire4event.com/book-an-artist/book-live-band-for-corporate-event-and-wedding">Live bands </a>(soft corporate atmosphere)</li>
          <li>Performances of cultural significance</li>
          <li>Help with the award presentation</li>
          <li>Background music and a DJ (light corporate)</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We keep it professional and safe for brands, never too much.
        </p>
      </div>

      {/* Section 11*/}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          10) Taking Pictures, Making Videos, and Covering Events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Taking professional photos of your conference can help with marketing, internal reporting, and branding. We have:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
          <li>Professional photography at conferences</li>
          <li>Coverage of speaker sessions</li>
          <li>Videography and highlight reels for businesses</li>
          <li>Testimonials and byte recordings</li>
          <li>Edited movies and reels from after the event (optional)</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          You can also use this content to promote your website, LinkedIn, and business.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         We Handle These Kinds of Conferences and Seminars
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We are an experienced conference and seminar event management firm in Delhi NCR that can handle all types and sizes of events:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
        <li><a className="text-[red]" href="/Services/corporate-event">Business meetings and conferences</a></li>
        <li>Business training and seminars</li>
        <li>Leadership summits and panel discussions</li>
        <li>Dealer meetings and channel partner conferences</li>
        <li>Investor meetings and corporate announcements</li>
        <li>Product launches and brand seminars</li>
        <li>Medical conferences and education seminars</li>
        <li>Corporate workshops, orientations, and onboarding events</li>
        <li>Virtual webinars and <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/hybrid-conference-organizers">hybrid conferences</a></li>
        </div>
      </div>
       </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/conference-seminar-event-management-company.jpg"
              alt="Corporate cricket event"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="text-center">Conference & Seminar Event Management Company</p>
          </div>



        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">

             {/* Section 13 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         How We Plan Events for Conferences and Seminars
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We have a simple and professional approach that keeps you in charge at all times:<br/>Step 1: Need Call and Understand We know the aim of your event, who will be there, when it will be, how much it will cost, and where you want it to be held.<br/>Step 2: Planning and Making a Proposal We talk about the event plan, the estimated cost, the schedule, and how to set things up.<br/>Step 3: Booking Vendors and Production We lock in vendors for the venue, AV, stage, branding, staff, and hospitality.<br/>Step 4: Putting the Plan into Action and Managing Things on the Ground A dedicated team takes care of the whole event flow.<br/>Step 5: Closing the Event We offer event reports, images and videos, and a smooth finish to vendor services.
        </p>
      </div>


       {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Why Should You Choose Event-Management-Delhi.com for Business Meetings and Conferences?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          There are a lot of vendors out there, but corporate events need people who are competent, on time, and pay attention to the little things. Clients pick us because:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
        <li>We have a lot of experience managing corporate conferences and seminars</li>
        <li>We have a dedicated event manager and skilled team on the ground</li>
        <li>We have a reliable network of AV, production, and vendors</li>
        <li>We are open about our budgets and make sure everything runs well</li>
        <li>We do a great job in Delhi, Noida, Gurgaon, and NCR</li>
        <li>Planning that is specific to each sort of event</li>
        <li>Designs, branding, and service quality that are good for businesses</li>
        </div>
        <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We know how corporate audiences act and what corporations want, and we give it to them.
        </p>
      </div>


       {/* Section 15 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
        Managing Conferences and Seminars in Delhi, Noida, Gurgaon, and NCR
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We offer conference and seminar management services all over Delhi NCR. Some examples are:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Conference Management Company in Delhi</li>
            <li>Seminar Organisers in Noida</li>
            <li>Corporate Conference Event Planner in Gurgaon</li>
            <li>Corporate event execution in Faridabad and Ghaziabad</li>
            <li>PAN-India support for multi-city corporate events (if needed)</li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
          If your business needs a professional to plan conferences and seminars, our staff is here to help.
        </p>
      </div>


       {/* Section 16 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         How Much Does a Conference or Seminar Cost?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          The cost depends on multiple factors, such as:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Number of attendees</li>
            <li>Venue type and location</li>
            <li>Stage setup size and branding requirement</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/equipment/audio-visual-equipment-on-rent">AV equipment</a>(LED, sound, mics, projector)</li>
            <li>Food and hospitality packages</li>
            <li>Duration (half day, full day, multi-day)</li>
            <li>Photography/videography requirements</li>
        </div>
         <p className="mt-8 text-base leading-[1.65] text-gray-900">
          We offer flexible packages for small seminars as well as large-scale corporate conferences. Our pricing is competitive and vendor quality is reliable.
        </p>
      </div>
        </div>

        <div>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Let’s Plan Your Next Conference or Seminar in Delhi NCR
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          If you want your corporate conference or seminar to run smoothly, look professional, and create a great experience for attendees, you need the right execution partner. We at Event-Management-Delhi.com are ready to deliver reliable and premium conference & seminar event management services in Delhi NCR.<br/>Contact us today to get a custom quotation and event plan for your next corporate conference, seminar, or leadership summit.
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