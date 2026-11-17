"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Expo Management Services in Delhi NCR?",
   answer: "Expo Management Services in Delhi NCR cover complete planning, coordination, and execution of exhibitions and trade shows. This includes venue coordination, stall setup, branding, registration, technical production, manpower, security, and smooth on-ground management from setup to dismantling."},
  {question: "Do you provide end-to-end expo management services?",
   answer:"Yes. We offer end-to-end Expo Management Services, handling everything from concept planning, exhibitor coordination, stall fabrication, branding, AV setup, registration management, and final closure, so clients don’t need to manage multiple vendors."},
  {question: "What types of exhibitions do you manage?",
   answer:"We manage all types of exhibitions, including trade fairs, industrial expos, corporate exhibitions, B2B and B2C expos, consumer exhibitions, government expos, startup expos, real estate expos, technology expos, and public exhibitions."},
  {question: "Do you offer Expo Management Services for exhibitors as well as organizers?",
   answer: "Yes. Our Expo Management Services support both expo organizers and individual exhibitors. For exhibitors, we handle stall design, fabrication, branding, staffing, demo setups, and visitor engagement to maximize lead generation."},
  {question: "Which locations do you cover for expo management?",
   answer:"We provide Expo Management Services across Delhi NCR, including Delhi, Noida, Gurgaon, Greater Noida, Faridabad, and Ghaziabad. PAN India execution is also available depending on project scope and duration."},
  {question: "Can you manage stall design and fabrication for exhibitions?",
   answer:"Absolutely. We design and build standard octanorm stalls, custom exhibition stalls, pavilions, entrance gates, and branded zones. All stall fabrication follows venue guidelines and safety norms."},
  {question: "Do you handle expo registration and visitor management systems?",
   answer:"Yes. We manage visitor registration counters, exhibitor passes, vendor entry control, help desks, and crowd flow. QR-based registration and digital entry systems can also be arranged for large expos."},
  {question: "What technical services are included in Expo Management?",
   answer:"Our Expo Management Services include stage setup, sound systems, LED walls, lighting, truss and rigging, live announcements, and full-day technical support for inaugurations, demos, and panel discussions."},
   {question: "How much does Expo Management Services cost in Delhi NCR?",
   answer:"The cost of Expo Management Services depends on venue size, number of stalls, event duration, branding requirements, technical setup, manpower, and logistics. We offer flexible packages to match different budgets and execution levels."},
   {question: "Why should we hire a professional Expo Management Company in Delhi NCR?",
   answer:"A professional Expo Management Company ensures timely setup, compliance with venue rules, smooth coordination, strong branding, better visitor experience, and stress-free execution—allowing you to focus on networking, sales, and business growth."}
];

export default function Expomanagementpage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Expo " },
                { text: "Management Services", highlight: true },
              ]}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/Services" },
                {label: "Professional Exhibition Organiser"}
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
              <span className="block">Expo Management</span>
              <span className="block text-[#1675b9]">Services</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Expo Management Services in Delhi NCR</h2>

            <p className="mt-10">
              At expos, which only last a few days, brands fight for attention, trust, and business. A well-run expo presence can bring in hundreds of leads, help you build distributor networks, <a className="text-[red]" href="https://www.hire4event.com/service/brand-promotion-and-product-launch-event">launch new products</a>, and make your business look like an industry leader. But an expo is not "just another event." There are strict deadlines, rules for the venue, a lot of vendors, a lot of logistics, and a crowd that moves quickly.
            </p>
            <p className="mt-5">
              That's why companies like professional Expo Management Services. They handle everything from getting permission and planning to branding, setting up booths, running the show, managing guest flow, <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/corporate-event/technology-event-planner">setting up technology</a>, and shutting down after the expo.
              </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                   "An expo is a high-pressure, high-opportunity platform where every detail matters. With professional Expo Management Services, your brand stands out through smart planning, impactful stall design, smooth logistics, and flawless execution. From permissions to teardown, we manage everything—so you can focus on leads, partnerships, and business growth.”
              </p>
            </div>
             <p className="mt-10">
                We provide complete Expo Management Services for all types of exhibitions in Delhi NCR (Delhi, Noida, Gurgaon, Greater Noida, Faridabad, Ghaziabad) and PAN India (as needed for each project). These include <a className="text-[red]" href="https://www.hire4event.com/service/exhibition">corporate exhibitions</a>, trade fairs, industrial expos, consumer expos, B2B events, and public exhibitions. We handle all the details so you and your team can focus on making sales and meeting new people, whether you're running an expo or showing at one.
            </p>
             <p className="mt-5">
                An experienced expo management partner understands visitor behavior, venue regulations, and on-ground challenges. From eye-catching stall layouts and clear branding to crowd movement, lead capture, and real-time coordination, every element is planned to maximise visibility and engagement. The result is a structured, professional expo presence that delivers measurable business outcomes—not just footfall.
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
         What do services for managing expos do?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Expo Management Services handles all the planning, coordination, setup, and execution that needs to happen to make sure an expo goes off without a hitch. This could mean:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Organizing the whole expo (multiple stalls, exhibitors, entry flow, stage, sponsors)</li>
            <li>Running your brand's participation (<a className="text-[red]" href="https://www.hire4event.com/exhibition-stall-fabrication">stall design</a>, setup, staffing, branding, demos, engagement)</li>
            <li>Taking care of certain operational areas (AV, registration, signage, logistics, hospitality, manpower)</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         In short, Expo Management Services make sure that your expo is professional, starts and ends on time, follows the venue's rules, and gives visitors a great time.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            Why businesses need professionals to run expos
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
          An expo has a lot of moving parts. If anything goes wrong, like a stall delay, bad signs, bad sound, bad lighting, or last-minute problems with a vendor, it hurts both the brand's reputation and foot traffic.<br/>Here are some ways that Professional Expo Management Services can help you:
        </p>  
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>A well-organized, high-quality expo environment</li>
            <li>Smooth coordination of exhibitors and operational control</li>
            <li>Strong branding and visibility for sponsors</li>
            <li>Faster setup and hassle-free execution</li>
            <li>A better experience for visitors and more engagement</li>
            <li>More leads and business opportunities</li>
            <li>Safe, compliant installation and clean closure</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
        You need to hire professionals to take care of the backend if you want guests and exhibitors to have a good time at your expo.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Our Complete Solutions for Expo Management
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         At Event-Management-Delhi.com, our Expo Management Services are set up like a full system, from planning to wrapping up. This means you don't have to deal with many different vendors and keep track of deadlines.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          1) Making plans for the expo, coming up with ideas, and designing the layout
        </h2>
         <p className="text-base leading-[1.65] text-gray-900">
         There should be a clear plan for each expo that explains what it is, who it is for, and how it will go. We can help you with:
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Coming up with the final idea and theme for the expo</li>
            <li>Figuring out who your target audience is (B2B, B2C, or a mix of both)</li>
            <li>Planning the hall's layout and zoning</li>
            <li>Coming up with a plan for how to assign stalls</li>
            <li>Planning how people will get in and out of the hall</li>
            <li>Onboarding exhibitors</li>
            <li>And planning for safety and operations.</li>
        </div>
         <p className="mt-5 text-base leading-[1.65] text-gray-900">
         A good plan will help your expo run more smoothly and make more money.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
        2) Picking a place and making sure everything runs smoothly
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          The right venue for Delhi NCR expos affects the number of people who come, how easy it is for exhibitors, and how well things go. Our team can help you with:
        </p>
        <div className="mt-2 pl-5 text-base leading-[1.65] text-gray-900">
            <li><a className="text-[red]" href="https://www.hire4event.com/book-venue-for-corporate-event-and-conferences">Finding the right venue</a> based on the size and location of your expo</li>
            <li>Negotiating and coordinating bookings</li>
            <li>Understanding the rules, permissions, and timelines for the venue</li>
            <li>Working with venue teams on the ground</li>
            <li>Planning loading and unloading and scheduling movement</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
        One of the most important parts of good Expo Management Services is coordinating the venue, and we do a great job of it.
        </p>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
        We ensure every venue-related activity follows a clear timeline, avoiding last-minute delays or compliance issues. Our team manages technical layouts, power requirements, safety norms, and access planning in advance. This structured approach helps exhibitors set up on time and ensures the expo runs without disruption from start to finish.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          3) Putting up stalls, building things, and getting the expo infrastructure ready
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         You can see expos. Stalls should be clean, well-made, and all the same. We made standard stalls (octanorm).
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Custom stalls for high-end brands</li>
            <li>Putting up pavilions (state, category, and industry pavilions)</li>
            <li>Making and branding the entrance gate</li>
            <li>Laying down carpet or flooring in the aisles and decorating the hall</li>
            <li>Setting up the organizer's office, help desks, and information counters</li>
            <li>Setting up storage areas and staff zones (if the venue allows)</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
          Whether you're the organizer or an exhibitor, our Expo Management Services make sure that the infrastructure is professional.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         4) Sponsors get branding, signs, and more visibility.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Expos are also good places to sell things. We plan and put up all of the branding for the expo:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Branding for the welcome boards, arch gates, and main entrance</li>
            <li>Signs that tell you where to go and boards that tell you what zone you're in</li>
            <li>Boards that show the numbers of the stalls and maps of the hall</li>
            <li>Panels that show the logos of sponsors and partners</li>
            <li>A <a className="text-[red]" href="https://www.hire4event.com/page/corporate-event-backdrop-decor-ideas">photo backdrop or media wall</a> for the press and visitors</li>
            <li>Standees, banners, and hanging banners (if they are allowed)</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
          Visitors can find their way around better and things are less confusing when there are clear signs.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         5) Managing the flow of people, registration, and entry
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A smooth entry sets the tone. We handle registration counters and help desks, visitor badges (optional) and passes, exhibitor passes and vendor entry control, managing lines and helping people move around, and having staff on the ground to give directions and help.<br/>If your expo is big enough and you need them, we can also set up QR-based entry systems.<br/>Our team plans entry and exit points to avoid congestion during peak hours. We coordinate closely with security and venue staff to maintain controlled access at all times. Real-time monitoring ensures smooth visitor movement, better crowd distribution, and a professional experience for exhibitors and attendees alike.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         6) Stage, Sound, LED, and Technical Production
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Many expos have opening ceremonies, product demos, panel discussions, and shows on stage. We handle the following:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Putting up the stage, backdrop, and branding</li>
            <li>The sound system and microphones</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/p2-led-wall">LED walls</a> and TV screens for sponsors and sessions</li>
            <li>Lighting, truss, and rigging</li>
            <li>Live announcements and emcee support</li>
            <li>A technical crew that works all day</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         This is where professional Expo Management Services really shine: there are no technical issues and no last-minute problems.
        </p>
      </div>

      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         7) Staff, security, and cleaning
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          For an expo to be clean, safe, and run well, the staff needs to be trained. We provide:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Event coordinators and floor managers</li>
            <li>Registration staff and helpdesk staff</li>
            <li>Promoters (for brand zones, if needed)</li>
            <li>Security staff for entry gates and hall monitoring</li>
            <li>Staff to help with loading and unloading</li>
            <li>Staff to help with cleaning and housekeeping</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
          We decide how many people to hire based on how many people we think will show up and how big the venue is.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         8) Making plans and working with vendors
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Coordinating is the most important part of putting on an expo. Our backend team is in charge of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Making schedules and setting up timelines for vendors</li>
            <li>Moving materials and giving out entry passes</li>
            <li>Planning electricity and power distribution</li>
            <li>Coordinating exhibitors and dealing with problems</li>
            <li>Making backups and fixing problems on the spot.</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
          Exhibitors should feel like they have help, not like they are lost. That's a part of good Expo Management Services.
        </p>
      </div>
      </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/expo-management-services.jpg"
              alt="Expo Management Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="text-center">Expo Management Services</p>
          </div>

      {/* Section 11 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
        9) Making sure VIPs and guests are comfortable at the opening and other big events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          If your expo has VIP visits, inaugurations, or sponsor gatherings, we will take care of the following:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Rules for VIPs and the hospitality desk</li>
            <li>Setting up the lounge and arranging the seating</li>
            <li>Coordinating food and drinks and setting up the bouquet, cutting the ribbon, and lighting the lamp</li>
            <li>A photographer for special VIP moments</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         We make sure that everything goes smoothly and politely.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         10) Taking photos, making videos, and cleaning up after the expo
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Expos make good content for ads. We offer:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Professional photos of the stalls, foot traffic, and stage</li>
            <li>A highlight video or aftermovie</li>
            <li>Optional exhibitor byte recordings</li>
            <li>Short clips that are ready for social media (optional)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         We also clean up and take down the expo when it's over.
        </p>
      </div>

      {/* Section 13*/}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          What kinds of events does Expo Management Services help with?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We can help with a lot of different kinds of expos, such as trade shows and industrial expos, corporate and <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/government-event/government-event-organiser">government exhibitions</a>, consumer product expos, real estate expos, auto, EV, and technology expos, education and career expos, healthcare and pharma expos, food and lifestyle exhibitions, startup and innovation expos, and franchise and business opportunity expos.<br/>We plan based on whether it's business-to-business (B2B), business-to-consumer (B2C), or a mix of the two.
        </p>
      </div>

      {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Expo Management Services in Delhi, Noida, Gurgaon, and the NCR
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        We put on expos and exhibitions all over Delhi NCR, such as Expo Management Services in Delhi, Expo Management Services in Noida, Expo Management Services in Gurgaon, and Greater Noida, Faridabad, Ghaziabad, and other NCR hubs nearby.<br/>Depending on the size and length of the expo project, we can also help with ones that happen in more than one city.
        </p>
      </div>

       {/* Section 15 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
        Why should you hire Event-Management-Delhi.com to run your expo?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Expos need teams that are organized, disciplined, and can follow through on their plans. Clients trust us with Expo Management Services because we have:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A dedicated team that takes care of everything from start to finish</li>
            <li>A strong network of vendors for stalls, AV, branding, and manpower</li>
            <li>A focus on timelines for setup and smooth operations</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/customized-branding">High-quality branding and production</a></li>
            <li>Clear communication with exhibitors and sponsors</li>
            <li>Budgets that can be changed (standard and premium execution options)</li>
            <li>Experienced management for venues in Delhi NCR</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
        We handle everything with organization and clarity, so your expo goes off without a hitch.
        </p>
      </div>

       {/* Section 16 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Estimated The cost of Expo Management Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         There are a lot of things that affect how much an expo will cost, such as:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>The size and length of the venue (1 day, 3 days, or more)</li>
            <li>The number and type of stalls</li>
            <li>The size of the branding (entry gate, signage, sponsor boards)</li>
            <li>The stage and technical needs</li>
            <li>How many people are needed for security, cleaning, and other jobs</li>
            <li>How complicated the registration system is</li>
            <li>Rules for moving vendors and logistics</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We help you choose a package that fits your needs and budget. Let us know about your expo, and we'll help you figure out the best plan.
        </p>
      </div>
        </div>

              
        <h2 className="mt-3 mb-3 text-[21px] font-semibold text-[#202020]">
         Get Professional Help to Plan Your Expo
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         For an expo to be successful, it needs to be planned by professionals, have a great presentation, and run smoothly. Event-Management-Delhi.com is the best choice if you want a partner who can take care of your expo from beginning to end without any problems, delays, or stress for the vendors.<br/>Contact us today for a personalized quote and proposal for reliable, full-service Expo Management Services in Delhi NCR.
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