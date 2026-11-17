"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Dealer Networking Meet Event Management Services?",
   answer: "Dealer Networking Meet Event Management Services are comprehensive professional solutions that handle the planning, coordination, and execution of dealer meetings, distributor conferences, and channel partner events from start to finish, ensuring they strengthen business relationships and deliver a premium brand experience."},
  {question: "Why should I hire a professional Corporate Meetup Event Management Company?",
   answer:"Hiring a professional Corporate Meetup Event Management Company saves time, protects your brand image, and ensures seamless execution of details like guest flow, ambience, AV support, and networking coordination, resulting in successful business relationships and lead generation."},
  {question: "What services are included in your Sports Tournament Setup & Management Services?",
   answer:"Our Sports Tournament Setup & Management Services include full planning, venue booking, ground marking, sports equipment coordination, referee management, fixture scheduling, scorekeeping, branding, safety planning, and on-ground team coordination for corporate sports days, school tournaments, and community leagues."},
  {question: "What does Team Coordination Services for Sports Events involve?",
   answer: "Team Coordination Services for Sports Events involves end-to-end management of team registration, fixture communication, reporting desk setup, kit distribution, referee coordination, match readiness tracking, and on-ground discipline to ensure smooth, professional tournament operations."},
  {question: "Why is expert Sports Event Venue Management crucial for tournaments?",
   answer:"Expert Sports Event Venue Management is crucial because sports venues have unique operational challenges like field setup, safety zoning, crowd control, equipment logistics, and compliance requirements that require professional handling to ensure events start on time and run safely."},
  {question: "What types of Dealer Meets does your event management company handle?",
   answer:"Our event management company handles all types of dealer meets including annual dealer conferences, regional distributor meets, product launch networking events, dealer awards nights, scheme announcement meetings, and multi-city dealer networking meets with consistent branding."},
  {question: "How do your Annual Sales Conference Event Management Services ensure success?",
   answer:"Our Annual Sales Conference Event Management Services ensure success through strategic planning, premium venue sourcing, professional stage and AV setup, tight agenda control, motivational award segments, seamless hospitality, and complete on-ground staffing for a powerful, business-driven conference experience."},
  {question: "What industries do you serve with Dealer Networking Meet Event Management?",
   answer:"We serve multiple industries including FMCG, automotive, electronics, building materials, pharmaceuticals, manufacturing, IT distribution, real estate channel partners, and consumer durable brands with our specialized Dealer Networking Meet Event Management Services."},
   {question: "Do you provide Sports Event Management Services outside Delhi NCR?",
   answer:"Yes, we provide Sports Tournament Setup & Management, Team Coordination Services, and Sports Event Venue Management across Delhi NCR and can support events throughout India depending on the scale, logistics, and specific requirements of your sports tournament or corporate sports day."},
   {question: "What makes your Corporate Meetup Event Management different from other vendors?",
   answer:"Our Corporate Meetup Event Management stands out through our structured event journey approach, corporate-grade branding, professional AV support, disciplined guest management, and dedicated coordination—focusing on business outcomes rather than just logistical arrangements for meetings in Delhi, Noida, and Gurgaon."}
];

export default function Dealernetworkingpage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Dealer Networking " },
                { text: "Meet Event Management Services", highlight: true },
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
              <span className="block">Dealer Networking</span>
              <span className="block text-[#1675b9]">Meet Planner</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Dealer Networking Meet Event Management Services for Corporate and Business</h2>

            <p className="mt-10">
              Your Dealer Networking Meet is a pivotal business touchpoint. At Event-Management-Delhi.com, we provide specialized, end-to-end Dealer Networking Meet Event Management Services designed to strengthen relationships, build trust, and align your channel with strategic growth. This is far more than generic event planning; it is about creating a premium, structured, and seamless experience that allows your leadership and sales teams to concentrate entirely on meaningful conversations and driving tangible business outcomes.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “We transform your channel partner gathering from a logistical challenge into a strategic asset. By managing the entire ecosystem—from initial planning and venue sourcing to production, branding, hospitality, and on-ground execution—we ensure your event feels effortless. Our services cover Delhi NCR, including Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, and Greater Noida, with PAN India support available. Whether it’s an intimate strategy session for 40 key dealers or a <a className="text-[red]" href="https://www.hire4event.com/annual-festivals">large-scale annual meet</a> for 800+ partners, we deliver a unified, high-impact experience under one roof.”
              </p>
            </div>
             <p className="mt-10">
                Our comprehensive approach guarantees that every detail, from the first impression to the final farewell, reinforces your brand’s premium stature and strategic intent. We handle the intricate logistics—venue coordination, <a className="text-[red]" href="https://www.hire4event.com/inhouse-service/event-production-and-rental-service">technical production</a>, thematic branding, and guest hospitality—so you can focus on engagement. The result is a flawlessly executed meet that not only runs smoothly but also actively facilitates the networking, recognition, and alignment that are crucial for channel growth and loyalty.
            </p>
            <p className="mt-5">
                Partner with us to elevate your next dealer gathering into a powerful catalyst for business growth. Let our dedicated event management services handle the complexity, ensuring a professional and impactful environment where relationships are strengthened and strategies are forged. Contact Event-Management-Delhi.com today to plan a Dealer Networking Meet that delivers exceptional value and leaves a lasting, positive impression on your most important channel partners.
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
         What We Mean When We Say "Dealer Networking Meet Event Management Services"
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Our Dealer Networking Meet Event Management Services are meant to help with the genuine purpose of a dealer meet:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Strengthen relationships with dealers and make them more loyal</li>
            <li>Talk about goals, plans, new products, and the direction of the business</li>
            <li>Encourage teams and regions to work together</li>
            <li>Reward the best dealers and encourage others to do the same</li>
            <li>Get market insights straight from your channel partners</li>
            <li>Make your brand experience feel high-end and organized</li>
        </div>
           <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We don't force a single format on everyone. We plan the event around your business goals, channel structure, and industry tone.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            Dealer Networking Meet Event Planning Services We Offer (Full Execution)
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
            Our Dealer Networking Meet Event Management Services provide complete end-to-end solutions that transform your business objectives into flawlessly executed events. We manage the entire lifecycle—from initial strategic planning and venue sourcing to on-ground execution and post-event documentation. Our structured approach covers concept development, agenda design, <a className="text-[red]" href="https://www.hire4event.com/event-branding">corporate branding</a>, technical production, hospitality management, awards programming, and professional content creation. With dedicated project management and a single-point contact system, we coordinate all vendors and logistics while you focus on strategic engagement with your channel partners. We ensure consistent, premium-quality execution whether for intimate regional meets or large-scale multi-city conferences, delivering events that strengthen dealer relationships, reinforce brand value, and drive measurable business outcomes.
        </p>  
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mt-8 mb-3 text-[22px] font-semibold text-[#202020]">
          1) Planning the event's concept, agenda, and flow
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We start with structure since dealer meets work best when the flow is clear and the time is handled. We take care of the following for our Dealer Networking Meet Event Management Services:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planning the event format (day meet, evening meet, full day + dinner)</li>
            <li>Mapping out the agenda (welcome, business sessions, networking breaks, awards, closing)</li>
            <li>Making a run-of-show (a minute-by-minute plan for controlling the event)</li>
            <li>Planning the timing of sessions, speaker slots, and transitions</li>
            <li>Planning how to best use the budget to get the most impact</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This preparatory step makes sure the event goes smoothly and is more like a <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/corporate-event/meeting-organiser">business meeting</a> than a casual get-together.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mt-8 mb-3 text-xl font-semibold text-[#202020]">
            2) Help with finding, shortlisting, and booking venues
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          Your venue should fit your dealer profile and the aim of the meeting. It should be simple to get to, comfortable, professional, and in line with your brand. Our Dealer Networking Meet Event Management Services include:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Hotel banquet halls (3-star/5-star)</li>
            <li>Conference venues and convention halls</li>
            <li>Resort venues for offsite dealer networking meets</li>
            <li>Premium lounges for smaller, high-value dealer meets</li>
            <li>Help with negotiations, booking, and venue management</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We also take care of venue rules, vendor access, loading and unloading windows, and stage and AV permissions.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          3) Welcome Branding, Entry Experience, and Registration Desk
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         The welcome experience sets the tone. We make entrance easy, high-quality, and well-organized. We offer the following as part of Dealer Networking Meet Event Management Services:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Branding for the welcome gate/entry</li>
            <li>Setting up a registration desk with trained staff</li>
            <li>Badges, lanyards, and participant lists</li>
            <li>Dealer kits, brochures, and agenda handouts</li>
            <li>Helping people find their seats and keeping the line moving</li>
            <li>Taking care of VIPs for top dealers and senior officials</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Your channel partners feel valued from the moment they walk in.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         4) Setting up the stage, the backdrop, and the whole corporate brand
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Your brand should be clean, high-end, consistent, and ready for the camera at dealer meetings. Our Dealer Networking Meet Event Management Services include:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li><a className="text-[red]" href="https://www.hire4event.com/stage-platform">Stage design</a> and backdrop based on the brand theme</li>
            <li>Branding the podium and stage furniture</li>
            <li>Making standees, welcome boards, and directional signs</li>
            <li>Making agenda boards and session branding panels</li>
            <li>Making a photo wall or media wall for dealer pictures</li>
            <li>Printing and making things according to the venue's rules</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We keep a professional image by avoiding cluttered designs, shoddy finishes, and sloppy placements.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         5) Setting up the AV, sound, LED screen, and technical help
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          There are lectures, presentations, movies, and prize announcements at dealer meetings. Technical stability is very important. We provide the following as part of our Dealer Networking Meet Event Management Services:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Wireless microphones (handheld, collar, podium)</li>
            <li>A professional sound system and speakers</li>
            <li>A projector/screen or <a className="text-[red]" href="https://www.hire4event.com/p2-led-wall">LED wall</a> (if needed)</li>
            <li>Laptops that link, clickers, and help with presentations</li>
            <li>Lighting for the stage and the mood</li>
            <li>Technical crew for handling sound and images live</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We make sure that speakers can be heard clearly, movies play without any problems, and transitions happen on schedule.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            6) Seating and space planning that makes networking easy
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            People being there doesn't mean that networking will happen. It happens when the layout makes it easy for people to talk to each other. Our Dealer Networking Meet Event Management Services include:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Round-table setups for meetings where people talk to each other</li>
            <li>Theater/classroom setups for meetings with a lot of presentations</li>
            <li>Lounge areas for casual networking</li>
            <li>A separate meeting area for leaders and important dealers</li>
            <li>A spot for refreshments that makes it easy for people to walk around</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We make the space so that people may meet, communicate, and interact without getting in each other's way or getting confused.
        </p>
      </div>

      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            7) Managing Dealer and Hospitality Comfort
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Dealer meets are occasions for building relationships. Hospitality is not a choice; it's part of the experience of your brand. As part of our Dealer Networking Meet Event Management Services, we take care of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Snack and refreshment stations for tea and coffee</li>
            <li>Planning breakfast, lunch, and dinner according to the event schedule</li>
            <li>Planning <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/hospitality-food-industry-event-organiser">VIP hospitality</a></li>
            <li>Coordinating hotel stays (if the meeting is not on-site)</li>
            <li>Coordinating transportation (optional)</li>
            <li>Setting up a hospitality desk to help attendees</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We make sure that everyone is comfortable and that everything runs smoothly, especially for programs that last more than one hour or more than one day.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            8) Segments for awards, recognition, and dealer motivation
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Recognition makes people more loyal faster than words do. If your meeting has awards, we treat that part like a high-end production. Our Dealer Networking Meet Event Management Services include:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Arranging the flow of the award segment</li>
            <li>Trophies, certificates, and other souvenirs</li>
            <li>Calling out winners and controlling the stage walk</li>
            <li>Coordinating AV for names, images, and music cues</li>
            <li>Coordinating professional photo opportunities and coverage</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes your recognition feel big, not rushed, and it helps you feel proud of your relationship with the dealer.
        </p>
      </div>

      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         9) Anchors, hosts, and program coordination
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Dealer meetings need a host that is sure of themselves, can keep the energy up, and run the meeting properly. Under Dealer Networking Meet Event Management Services, we offer:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A corporate <a className="text-[red]" href="https://www.hire4event.com/book-an-artist/book-anchor-for-corporate-event-and-wedding">emcee or anchor</a> (in Hindi or English as needed)</li>
            <li>Announcing on stage and keeping the program going</li>
            <li>Hosting awards and getting the audience involved</li>
            <li>Keeping time and making smooth transitions</li>
            <li>Working together with the AV and staging teams</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          The right host makes sure the program feels high-end and organized the whole time.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            10) Dinner and light entertainment for networking in the evening (optional)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          After corporate presentations, a lot of brands like to have a relaxed evening session. We can add a classy networking night without ruining the business tone. Our Dealer Networking Meet <a className="text-[red]" href="https://www.hire4event.com/event-planner/event-management-companies-in-noida">Event Management Services</a> may help with things like:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Setting up the gala dinner and designing the atmosphere</li>
            <li>Providing alternatives for soft live music or a live band</li>
            <li>Performances of culture (safe for brands)</li>
            <li>DJ after dinner (if the crowd is right)</li>
            <li>Picture booth corner / moments with your brand</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We suggest what works best for your dealer profile—nothing too much or too strange.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            11) Pictures, videos, and content for events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Your dealer meeting is a valuable part of your brand. We record it in a professional way so you may utilize it for marketing, internal communications, and future events. Our Dealer Networking Meet Event Management Services include:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Professional photography (both staged and casual networking)</li>
            <li>Videography and a highlight film</li>
            <li>Optional leadership bytes and dealer testimonials</li>
            <li>Coverage of the award segment and group photos</li>
            <li>Edited outputs after the event (depending on the package)</li>
        </div>
      </div>


      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            12) Managing and supervising the on-the-ground event team and vendors
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          There are a lot of vendors and stringent schedules at dealer gatherings. We have trained professionals and are in charge of the whole event. As part of Dealer Networking Meet Event Management Services, you get:
        </p>
        <h2 className="mt-3 mb-1 text-[21px] font-semibold text-[#202020]">
            We handle the following for Sports Event Venue Management Services:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A dedicated event manager</li>
            <li>A production supervisor and stage manager</li>
            <li>Registration staff and ushers</li>
            <li>Mic runners and stage crew</li>
            <li>A vendor coordination team for <a className="text-[red]" href="https://www.hire4event.com/book-venue-for-corporate-event-and-conferences">venue Booking</a>, AV, branding, and hospitality</li>
            <li>A setup and dismantling team that keeps a close eye on the time</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Your internal team may focus on creating relationships while we take care of operations.
        </p>
      </div>


       <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            Different Ways to Meet Dealers We Handle
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our Dealer Networking Meet Event Management Services for All Types of Dealer Meets:
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

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/dealer-networking-meet-event-management-services.jpg"
              alt="Dealer Networking Meet Event Management Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="mb-3 text-center">Dealer Networking Meet Event Management Services</p>
          </div>

      {/* Section 13 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
             How We Begin (Quick and Easy)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          To start preparing your dealer networking meeting, we usually need:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>City and date range for the event</li>
            <li>Estimated number of dealers/attendees</li>
            <li>Fulfill purpose (annual review / scheme launch / awards / onboarding)</li>
            <li>Location preference (hotel/resort/banquet/convention)</li>
            <li>Branding level (basic / premium)</li>
            <li>AV needs (projector/LED, sound, mics)</li>
            <li>Hospitality needs (meal just or stay and transportation)</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            After we get these inputs, our Dealer Networking Meet Event Management Services team prepares a full execution plan with specific goals.
        </p>
      </div>

      {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           Dealer Networking Meet Event Management Services That Make Customers Loyal to Your Brand
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A dealer networking meeting doesn't only last one day; it affects your channel for months. The perfect experience builds trust, makes communication better, and encourages people to do their best. Our Dealer Networking Meet Event Management Services give you quality planning, flawless execution, disciplined coordination, and a brand experience that your dealers will remember. If you want your next dealer meeting to seem professional, well-organized, and have a big impression, get in touch with Event-Management-Delhi.com today and let's prepare it the proper way.
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