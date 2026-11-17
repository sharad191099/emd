"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Dealer Networking Meet Event Management Services?",
   answer: "Dealer Networking Meet Event Management Services involve complete planning and execution of professional dealer meets, including venue selection, branding, AV setup, registration, hospitality, stage management, engagement activities, awards, and on-ground coordination to strengthen dealer relationships and sales alignment."},
  {question: "Why should brands organize dealer networking meets?",
   answer:"Dealer networking meets help brands build stronger dealer relationships, communicate sales strategies, launch schemes or products, reward performance, collect market feedback, and improve loyalty across their distribution and channel partner network."},
  {question: "What types of dealer networking events do you manage?",
   answer:"We manage annual dealer networking meets, regional dealer conferences, distributor meets, channel partner meetings, incentive and scheme launches, product launch plus dealer meets, dealer awards nights, onboarding meets, and multi-city dealer networking events."},
  {question: "Do you provide end-to-end dealer meet event management?",
   answer: "Yes. Our Dealer Networking Meet Event Management Services are end-to-end, covering planning, budgeting, venue booking, permissions, registration, stage and branding, AV setup, hospitality, staffing, entertainment, awards, and post-event closure."},
  {question: "Can you manage dealer networking meets across multiple cities?",
   answer:"Absolutely. We specialize in multi-city dealer networking meet management with consistent branding, standardized execution, central planning, and local coordination across Delhi NCR and PAN India locations."},
  {question: "Do you help with venue selection for dealer networking events?",
   answer:"Yes. We shortlist and manage hotels, banquets, resorts, conference halls, and premium venues based on dealer profile, city, accessibility, budget, and event format. Venue coordination and permissions are included."},
  {question: "Is stage setup, branding, and AV included in dealer meet management?",
   answer:"Yes. Our Dealer Networking Meet Event Management Services include stage setup, backdrop branding, LED screens or projectors, podium branding, sound systems, lighting, mic management, and complete technical supervision."},
  {question: "Do you handle dealer registration, welcome desks, and hospitality?",
   answer:"Yes. We manage professional registration desks, badge and kit distribution, VIP handling, hospitality desks, food coordination, hotel stays (if required), transport support, and on-ground guest assistance."},
   {question: "Can you organize awards, recognition, and entertainment for dealer meets?",
   answer:"Yes. We plan and execute dealer award ceremonies, trophies, certificates, award graphics, anchor coordination, and optional entertainment such as live bands, cultural acts, DJs, or themed networking dinners—aligned with corporate standards."},
   {question: "Which locations do you serve for Dealer Networking Meet Event Management Services?",
   answer:"We offer Dealer Networking Meet Event Management Services across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida, and the entire Delhi NCR region. PAN India execution is available based on event scale and requirements."}
];

export default function channelmeetevent() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Channel Partner " },
                { text: "Engagement Event Management Services", highlight: true },
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
              <span className="block">Partner</span>
              <span className="block text-[#1675b9]">Engagement Events</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Dealer Networking Meet Organizers for Corporate Brands</h2>

            <p className="mt-10">
              Dealer networking meets play a crucial role in strengthening the backbone of any distribution-led business. A strong dealer network does not happen automatically; it is built through consistent communication, mutual respect, and meaningful engagement. Physical meetings allow brands to clearly communicate business direction, align sales strategies, and reinforce long-term commitment to their channel partners. Unlike digital communication, in-person networking creates trust, encourages open dialogue, and gives dealers a sense of belonging to the brand’s growth story, which directly impacts motivation and performance.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “A dealer networking meet is not just about gathering partners under one roof; it is about creating alignment, confidence, and shared purpose. When dealers experience a professionally planned event, they understand that the brand values their contribution and sees them as long-term partners. Clear communication, structured sessions, and a refined event experience send a strong message of stability and growth, turning routine business relationships into trusted partnerships that support sustained expansion across markets.”
              </p>
            </div>
             <p className="mt-10">
                Well-executed dealer networking events also serve as a structured platform to address operational challenges, market trends, and future opportunities. Brands can use these meets to introduce new policies, explain incentive schemes, discuss regional performance, and set realistic expectations for the upcoming sales cycle. At the same time, dealers gain a voice to share on-ground feedback, consumer behavior insights, and competitive challenges. This two-way communication helps management make informed decisions while ensuring dealers feel heard, respected, and involved.
            </p>
             <p className="mt-5">
                This is where professional Dealer Networking Meet Event Management Services become essential. Managing such events requires precise planning, seamless coordination, and an understanding of corporate dynamics. From <a className="text-[red]" href="https://www.hire4event.com/book-venue-for-corporate-event-and-conferences">venue selection</a> and agenda design to branding, technical execution, hospitality, and on-ground supervision, every element must work in sync. A professionally managed dealer networking meet ensures that the brand’s message is delivered clearly, the experience feels polished, and the focus remains on building relationships rather than managing logistics or last-minute challenges.
            </p>
          </div>
        </div>
        </section>


          <section className="ml-8 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
      
      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Dealer Networking Meets: What We Help You Achieve
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         A dealer networking meet is more than simply a get-together; it's a business tool. When planned correctly, it helps you:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Make ties with current dealers and distributors stronger</li>
            <li>Bring new dealers into your brand ecosystem</li>
            <li>Tell them about goals, plans, rewards, and product updates</li>
            <li>Make a good impression of your brand by being friendly and professional</li>
            <li>Keep the network motivated by giving them recognition and awards</li>
            <li>Help people learn and connect with others across borders</li>
            <li>Get feedback from the market and channel partners</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            These results are what our Dealer Networking Meet Event Management Services are based on. We don't just "arrange" the setting; we plan the flow and experience so that your dealers leave with more clarity, confidence, and loyalty.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mt-6 mb-3 text-[21px] font-semibold text-[#202020]">
            Dealer Networking Meet Event Planning Services We Offer (From Start to Finish)
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
            We take care of the whole execution cycle, from planning to production to on-the-ground management to closing. This lets your internal sales force focus on networking and talking about business.
        </p>  
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mt-8 mb-3 text-[22px] font-semibold text-[#202020]">
          1) Event planning and networking meet strategy
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Before we get started, we make sure the event fits with your business goals.
        </p>
        <h2 className="mt-3 mb-1 text-[22px] font-semibold text-[#202020]">
          Our planning includes:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Mapping out the profiles of attendees (dealers, distributors, sales teams, and leaders)</li>
            <li>Planning the agenda (welcome, business sessions, networking, awards, and dinner)</li>
            <li>Choosing the structure of the event (formal meeting, conference-style, or casual networking mixer)</li>
            <li>Making sure the theme and messages of the event are in line with each other</li>
            <li>Setting a calendar and keeping track of tasks</li>
            <li>Planning a budget with cost-effective vendor options</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This is the basis of our Dealer Networking Meet Event Management Services: an organized plan that keeps stress to a minimum.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mt-8 mb-3 text-xl font-semibold text-[#202020]">
            2) Choosing a venue and managing it (Delhi NCR + PAN India)
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          The venue is important since it establishes the mood for networking. We provide you venue possibilities based on your audience, how easy it is to get to, and how experienced you are.
        </p>
        <h2 className="mt-3 mb-1 text-[22px] font-semibold text-[#202020]">
          We take care of:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Reserving hotels and banquets (3-star and 5-star alternatives)</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/venue-booking/noida">Conference halls</a>, resort venues, and high-end lounges</li>
            <li>Locations with a lot of room for major dealer meetings</li>
            <li>Permissions, vendor access, time slots, and venue coordination</li>
            <li>Organizing seating arrangements and dividing up area</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            If you want a premium dealer networking meet in Delhi, Noida, Gurgaon, or across NCR—our Dealer Networking Meet Event Management Services include complete venue support.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          3) Setting up the registration and welcome desk
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         The initial phase of a <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/dealer-meet-planning-and-event-management-services">dealer event</a> should go smoothly. We make a professional welcome flow:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Branding and welcome signs at the entrance</li>
            <li>A registration desk with trained staff</li>
            <li>Badges, lanyards, and dealer kits</li>
            <li>Agenda handouts and event brochures</li>
            <li>Seating recommendations and crowd flow control</li>
            <li>VIP handling for senior dealers and leadership</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our Dealer Networking Meet Event Management Services make sure that your event begins off on the right foot, with no confusion or delays.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         4) Setting up the stage, branding, and the look and feel of the company
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A brand stage is also a dealer networking gathering. Your setup needs to seem high-end, professional, and ready for business.
        </p>
        <h2 className="mt-3 mb-1 text-[22px] font-semibold text-[#202020]">
          We offer:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Branding for the stage and backdrop</li>
            <li>Branding for the podium and placement of the standee</li>
            <li>Setting up an <a className="text-[red]" href="https://www.hire4event.com/p2-led-wall">LED wall</a> or screen (optional)</li>
            <li>Directional signs, table branding, and session branding</li>
            <li>A brand wall or photo wall for networking times</li>
            <li>Decor that fits the theme (business and simple)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our Dealer Networking Meet Event Management Services make your meet look like a powerful brand experience instead of just a simple gathering.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         5) Setting up the AV, sound, lighting, and technical management
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          For dealer meetings, clear sound and smooth graphics are a must. We take care of all the technical details:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Wireless mics (collar, handheld, podium)</li>
            <li>Speakers and sound system depends on the size of the venue</li>
            <li>Choices for projectors and screens or LED walls</li>
            <li>Help with presentations and connecting laptops</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/profile-light">Lighting for the stage</a> and the atmosphere</li>
            <li>Technicians on site to handle live events</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our Dealer Networking Meet Event Management Services make sure that your sessions go smoothly and are run by professionals.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            6) Seating arrangement, networking areas, and experience Design
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           Networking doesn't just happen. It happens when there is room for it. We plan the environment to make interactions more meaningful:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Sitting at a round table for talks</li>
            <li>Places to sit and network in the lounge</li>
            <li>Brand demo areas (if you need to show off your products)</li>
            <li>A separate conference room for leaders and important dealers</li>
            <li>Coffee kiosks and refreshment areas to get people moving</li>
            <li>Event flow planning that makes it easy for people to interact</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We design our Dealer Networking Meet Event Management Services to build relationships, not just to handle logistics.
        </p>
      </div>


      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            7) Managing dealer comfort, food, and hospitality
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Dealers travel, spend time, and promote your business in the market. As part of your brand image, we take care of hospitality.
        </p>
        <h2 className="mt-3 mb-1 text-[22px] font-semibold text-[#202020]">
            We take care of:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>High-quality food packages (breakfast, lunch, and supper)</li>
            <li>Tea/coffee snacks and refreshment counters</li>
            <li>VIP hospitality and special seating</li>
            <li>Coordinating hotel stays (if needed)</li>
            <li>Airport/railway pickup and local transport (optional)</li>
            <li>Hospitality desk support for smooth handling</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our Dealer Networking Meet Event Management Services ensure dealers feel respected, comfortable, and valued.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            8) Dealer Awards, Recognition, and Motivation Parts
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Recognition drives loyalty. We take care of the whole section if your meeting involves prizes or praise for performance:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planning the award categories (with your team)</li>
            <li>Planning and timing for stage movement</li>
            <li>Trophies, souvenirs, and certificates</li>
            <li>Graphics for the award reveal and AV coordination</li>
            <li>Planning for picture moments and coverage</li>
            <li>Anchor coordination for a smooth flow</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our Dealer Networking Meet Event Management Services make award moments look high-end and well-organized, not rushed or sloppy.
        </p>
      </div>

      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         9) Anchors, Hosts & Flow Management (Professional and Corporate)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          You need a host who is receptive to business but also active for dealer networking events. We offer:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Experienced emcees and anchors (in Hindi and English)</li>
            <li>Starting sessions, keeping the agenda going, and getting people involved</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/plan-your-event/corporate-event/award-ceremony-organiser">Hosting the award ceremony</a></li>
            <li>Making announcements and dealing with the audience</li>
            <li>Time management and working with the AV team</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This keeps a high-end corporate tone while also getting people more involved, which is exactly what our Dealer Networking Meet Event Management Services are for.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           10) Entertainment & Evening Networking (Optional Add-On)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Some dealer networking events have a laid-back nighttime session to help people get to know each other better. We can set up entertainment that is suited for businesses, such as:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A live band (for a gentle corporate ambiance)</li>
            <li>Cultural performances</li>
            <li>A DJ for after dinner (depending on what the audience wants)</li>
            <li>A themed networking dinner setting</li>
            <li>Photo booth corner / branded moments</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We make sure that everything is secure for your business and fits with your audience. Our Dealer Networking Meet Event Management Services never try to sell you extras you don't need. We simply suggest what works for you.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            11) Coverage of photos, videos, and content
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           Dealer meetups make great brand content, such awards, statements from leaders, dealer testimonials, and networking highlights.
        </p>
        <h2 className="mt-3 mb-1 text-[22px] font-semibold text-[#202020]">
           We offer:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Professional photography (both staged and candid)</li>
            <li>Videography and a highlight film</li>
            <li>Leadership bytes and dealer testimonies</li>
            <li>A post-event edited recap (optional)</li>
            <li>Short clips that are ready for social media (optional)</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Our Dealer Networking Meet Event Management Services let you capture actual business moments that make your brand look good both inside and outside your company.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           12) People on the ground and supervision on the day of the event
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Dealer needs disciplined execution on the ground. We provide complete manpower:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Event coordinator and manager</li>
            <li>Registration staff</li>
            <li>Ushers and hospitality support</li>
            <li>Stage runners and mic handlers</li>
            <li>Vendor coordination team</li>
            <li>Setup and breakdown crew</li>
        </div>
          <p className="mt-6 text-base leading-[1.65] text-gray-900">
            With our Dealer Networking Meet Event Management Services, your team may still network and talk business while we take care of everything else.
        </p>
      </div>

       
       <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           Formats of Dealer Networking Meets We Manage
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We change the framework for each industry because they all work in their own way. Our Dealer Networking Meet Event Management Services help with:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Yearly dealer networking meets</li>
            <li>Regional dealer conferences (North, West, East, South)</li>
            <li>Distributor and channel partner meets</li>
            <li>Scheme launches and incentive meets</li>
            <li>Product introduction and dealer networking combo events</li>
            <li>Dealer awards nights</li>
            <li>Dealership onboarding meets</li>
            <li>Premium leadership meets with top dealers</li>
            <li>Multi-city dealer meets with consistent branding</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          No matter how many people come to your meet, whether it's 50 dealers or more than 1000, we will always do it the same way.
        </p>
      </div>


       <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            Industries We Help with Dealer Networking Meets
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We help brands in the following areas with Dealer Networking Meet Event Management Services:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Fast-moving consumer goods (FMCG)</li>
            <li>Electronics and appliances</li>
            <li>Cars and electric vehicles (EV)</li>
            <li>Building materials (cement, paint, plywood, hardware)</li>
            <li>Manufacturing and industrial items</li>
            <li>Distribution of pharmaceuticals and healthcare</li>
            <li>Networks for IT products and services</li>
            <li>Meetings for channel partners in real estate</li>
            <li>Brands that provide fashion and leisure products</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We can plan and manage your dealer network like a pro if you have one.
        </p>
      </div>
      </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/channel-partner-engagement-event-management-services.jpg"
              alt="Channel Partner Engagement Event Management Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="mb-3 text-center">Channel Partner Engagement Event Management Services</p>
        </div>


       <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Why Brands Pick Our Event Management Services for Dealer Networking Meets
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Dealer meetings are delicate because they entail corporate goals, senior partners, targets, and managing relationships. Brands pick us because we act like a business partner instead of a "local vendor."
        </p>
        <h2 className="mt-2 mb-1 text-[21px] font-semibold text-[#202020]">
         When you order Dealer Networking Meet Event Management Services with Event-Management-Delhi.com, you can expect the following:
        </h2>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>One team handles everything from start to finish</li>
            <li>Structured planning, timelines, and professional coordination</li>
            <li>A reliable network of vendors for stage, <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/audio-visual-equipment-rental-company-for-events">AV setup</a>, printing, and hospitality</li>
            <li>A high-end corporate look with strong branding consistency</li>
            <li>Experienced staff on the ground who are trained for corporate events</li>
            <li>The ability to work in Delhi NCR and all over India</li>
            <li>Clear budgeting, transparent scope, and smooth closure</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We protect your brand image by following the rules.
        </p>
      </div>

  
      <div>
        <h2 className="mt-6 mb-3 text-[21px] font-semibold text-[#202020]">
            Dealer Networking Meet Event Management Services in Delhi NCR
            </h2>
         <p className="mb-6 text-base leading-[1.65] text-gray-900">
            We regularly hold dealer networking events in Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida, and other neighboring NCR areas.<br/>We can make sure that the format and branding are the same at all sites for multi-city dealer meetings.
        </p>  
      </div>


      {/* Section 13 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
             What We Need to Know to Get Started (So We Can Plan Quickly)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          To make plans fast and correctly, we usually need:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>The city of the event and the date range you want</li>
            <li>How many dealers or attendees you expect</li>
            <li>The format of the meeting (day, evening, or full day with dinner)</li>
            <li>The type of venue you prefer (hotel, resort, banquet hall, or corporate space)</li>
            <li>The level of branding you need (basic or premium)</li>
            <li>The AV needs (LED/projector, <a className="text-[red]" href="https://www.hire4event.com/sound-system-on-rent">sound system</a>, mics)</li>
            <li>The level of hospitality you expect (food, stay, transport)</li>
            <li>Any entertainment or award segment you need</li>
        </div>
      </div>

      {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           What We Promise: A Dealer Meet That Feels High-End, Smooth, and Ready for Business
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Your dealers should go in and immediately think, "This brand means business." This brand cares about its partners. "This brand is getting bigger."<br/>That's the actual return on investment (ROI) for a strong dealer networking meet, and that's what our Dealer Networking Meet Event Management Services are meant to do.<br/>We take care of the planning, vendors, setup, staff, and execution so that your sales leaders and managers can focus on building connections with dealers, having conversations, and getting results for the business.
        </p>
        </div>
        </div>


          <h2 className="mt-6 mb-3 text-[21px] font-semibold text-[#202020]">
            Are you ready to plan your next dealer networking event?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Get in touch with Event-Management-Delhi.com today if you want a trustworthy staff to handle your event from start to end. We offer Dealer Networking Meet Event Management Services in Delhi NCR and beyond.<br/>We will help you set up a dealer networking event that promotes loyalty, boosts performance, and enhances your channel, just like a <a className="text-[red]" href="https://www.hire4event.com/service/corporate-annual-family-day-dealer-meet-sales-meet">great Dealer & Sales Meet</a> should.
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