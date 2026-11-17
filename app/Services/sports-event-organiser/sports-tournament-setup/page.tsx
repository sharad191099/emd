"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Sports Tournament Setup & Management Services?",
   answer: "Sports Tournament Setup & Management Services include complete planning, execution, and on-ground control of sports tournaments. This covers tournament planning, venue booking, ground setup, sports equipment, referees, scoring, branding, safety arrangements, and final result management."},
  {question: "Which types of sports tournaments do you organize?",
   answer:"We organize cricket tournaments, football and futsal leagues, badminton competitions, basketball and volleyball tournaments, athletics meets, school sports days, corporate sports fests, and community sports leagues across Delhi NCR."},
  {question: "Do you provide end-to-end sports tournament management?",
   answer:"Yes. We provide full end-to-end sports tournament management services—from pre-event planning and approvals to match execution, staffing, officiating, score management, branding, and event closure."},
  {question: "Can you manage corporate sports tournaments and office sports days?",
   answer: "Yes. We provide full end-to-end sports tournament management services—from pre-event planning and approvals to match execution, staffing, officiating, score management, branding, and event closure."},
  {question: "Do you arrange sports venues and ground bookings?",
   answer:"Yes. We handle sports venue booking, ground coordination, permissions, security planning, parking management, and movement flow for players and spectators as part of our tournament setup services."},
  {question: "Do you provide referees, umpires, and match officials?",
   answer:"Yes. We arrange trained referees, umpires, scorers, timekeepers, and tournament officials to ensure fair play, rule compliance, and smooth match operations."},
  {question: " How do you manage fixtures, scoring, and results?",
   answer:"We manage match fixtures, team registrations, scorekeeping, points tables, live result tracking (manual or digital), and final standings to keep the tournament organized and on schedule."},
  {question: "Is sports equipment and ground setup included?",
   answer:"Yes. We provide complete sports equipment, field marking, boundary setup, team areas, referee zones, warm-up areas, and backup inventory for uninterrupted gameplay."},
   {question: "Do you offer branding and event production for sports tournaments?",
   answer:"Yes. Our services include sports event branding such as welcome gates, sponsor backdrops, team area branding, signage, media walls, trophy table setup, and announcement zones."},
   {question: "Which locations do you serve for sports tournament management?",
   answer:"We offer Sports Tournament Setup & Management Services across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida, and the entire Delhi NCR region."}
];

export default function sportstournamentpage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Sports Tournament " },
                { text: "Setup & Management Services", highlight: true },
              ]}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/Services" },
                {label: "Sports Event Organiser"}
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
              <span className="block">Sports Tournament</span>
              <span className="block text-[#1675b9]">Services</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Services for Setting Up and Running Sports Tournaments</h2>

            <p className="mt-10">
              We offer full Sports Tournament Setup & Management Services for businesses, schools, colleges, RWAs, clubs, brands, and institutions in Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, and the greater Delhi NCR at Event-Management-Delhi.com. Our team will handle everything from setting up the tournament to running the matches on the day of the event to making sure everything goes well from start to finish. This includes <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/sports-event/cricket-tournament-organiser">cricket tournaments</a>, football leagues, badminton competitions, marathons, athletics meets, inter-school sports days, and <a className="text-[red]" href="https://www.hire4event.com/sports-events">corporate sports fests</a>.
            </p>
            <p className="mt-5">
              When you employ us, you don't get "arrangements." You're working with a group that knows how to operate tournaments like a pro: on schedule, with the right rules, safely, and smoothly for players, guests, and organizers.
              </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “A successful sports tournament is not just about matches—it’s about precision, discipline, and seamless coordination. At Event-Management-Delhi.com, we believe that every tournament deserves professional planning and flawless execution. From setting up the playing arena and managing fixtures to officiating matches and coordinating teams, we handle every detail with absolute clarity. Our Sports Tournament Setup & Management Services are designed to ensure fair play, strict timelines, safety compliance, and a smooth experience for players and spectators alike. Whether it’s a corporate sports fest or an inter-school championship, we run tournaments the way professionals do—structured, reliable, and stress-free.”
              </p>
            </div>
             <p className="mt-10">
                This page is all about our Sports Tournament Setup & Management Services: what we do, how we do it, and why clients pick us to conduct tournaments without problems. It explains our structured approach to planning, organizing, and executing sports tournaments with precision and discipline. From early-stage planning and venue coordination to match-day operations, officiating, safety management, and final reporting, every aspect of the tournament is handled in a controlled and professional manner. We outline our process in detail so clients clearly understand how we maintain timelines, ensure fair play, manage teams and officials, and keep the entire event running smoothly.
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
         We Set Up and Run Sports Tournaments That Work Like a System
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         A sports tournament isn't just one event; it's a series of planned events that all have to happen at the right time, on the right field, with the right referees, equipment, and crowd movement. If something goes wrong, like delayed fixtures, missing balls, sound system problems, or wrong scoring, it can ruin the whole thing.<br/>That's why we set up and manage sports tournaments like a system:
        </p>
         <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planning and getting approvals before the event</li>
            <li>Getting the ground/venue ready and setting it up</li>
            <li>Running the tournament and carrying out the matches</li>
            <li>Staffing and controlling the ground</li>
            <li>Planning for safety, discipline, and emergencies</li>
            <li>Reporting, results, and closing the event</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Our Sports Tournament Setup & Management Services keep everything organized and professional, whether it's a one-day knockout tournament or a league structure that lasts for several days.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            What We Handle Under Sports Tournament Setup & Management Services
            </h2>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
            What We Handle Under Sports Tournament Setup & Management Services
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
          We begin by figuring out what your tournament's goal is: to bring people together, <a className="text-[red]" href="https://www.hire4event.com/brand-promotion-and-product-activation">promote your business</a>, celebrate sports day, win a league championship, or become involved in the community. Then we come up with a useful format:
        </p>  
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Knockout, league, or mixed format</li>
            <li>Number of teams and length of matches</li>
            <li>Capacity of the venue and time slots for matches</li>
            <li>Rules for who can play</li> 
            <li>Planning fixtures and the match schedule</li>
            <li>Break times, warm-up periods, and ceremony times</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Our Sports Tournament Setup & Management Services are meant to speed things up and keep the day running smoothly.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          2) Booking sports venues and coordinating the grounds
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         We help you choose and run the right venue based on the type of sport, the number of people, the location, and your budget. Our staff makes sure that:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Ground booking and slot confirmation</li>
            <li>Venue rules, permissions, and security are all in order</li>
            <li>Teams and audience may go in and out easily</li>
            <li>Parking and movement routes are planned</li>
            <li>Setting up the dressing room and changing area (if there is one)</li>
            <li>Check the bathroom and other necessary needs</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
         We set up and run sports tournaments in both indoor and outdoor locations in Delhi NCR. We can even help with events that are outside of Delhi NCR if needed.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
            3) Set up the whole sports ground and mark the field
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          A tournament tought to look and feel like a real event. We take care of getting the ground ready and setting up for sports, such as:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Marking the pitch, field, or court according to the laws of the sport</li>
            <li>Marking the boundaries, cones, and zones</li>
            <li>Setting up the team dugout area (if needed)</li>
            <li>Signs for players to enter and areas for teams to sit</li>
            <li>Where the referee or umpire stands and where the official table is set up</li>
            <li>The warm-up zone and the substitution zones (depending on the sport)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            With our Sports Tournament Setup & Management Services, the venue is ready before the teams get there, so the first game starts on time.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          4) Equipment for sports and matches
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         We organize the necessary items and inventory for each sort of tournament.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Things You Need for a Cricket Tournament
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Stumps, bails, and boundary ropes/cones</li>
            <li>Cricket balls (for the match and extras)</li>
            <li>Scoreboard support (manual or digital)</li>
            <li>Sight screens (if needed)</li>
            <li>Team bibs (not required)</li>
        </div>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Things You Need for a Football Tournament
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Match balls, corner flags, and goal nets</li>
            <li>Bibs, cones, and training markers</li>
            <li>Substitution cards (optional)</li>
        </div>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Basketball, volleyball, and badminton
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Nets, poles, and other things for the court</li>
            <li>Match balls and shuttles as needed</li>
            <li>Scoreboard and referee stand (if needed)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          With our Sports Tournament Setup & Management Services, you can be sure that there is enough stock on hand so that gameplay never stops because of problems that could be avoided.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         5) Referees, umpires, and tournament officials
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A well-run sports tournament depends heavily on the quality and fairness of its officials. To ensure discipline, accuracy, and smooth match flow, we provide trained and experienced referees, umpires, and tournament officials who understand the rules, match pressure, and on-ground coordination required for professional execution.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Qualified umpires and referees specific to each sport</li>
            <li>Match officials for league formats and large-scale tournaments</li>
            <li>Technical officials for rule enforcement and match supervision</li>
            <li>Scorers responsible for accurate scorekeeping and records</li>
            <li>Timekeepers and marshals to manage match duration and discipline</li>
            <li>Support for pre-match rule briefings and ground conduct</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our officials work closely with the tournament control desk to ensure consistency in decisions, proper handling of disputes, and uninterrupted match progression. This is a critical part of our Sports Tournament Setup & Management Services, as fair play, transparent scoring, and correct rule implementation build credibility, player confidence, and long-term trust in your tournament.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         6) Managing scores, fixtures, points tables, and results
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We run the tournament "brain" that keeps everything in order:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Display of match fixtures</li>
            <li>List of registered teams and player rosters</li>
            <li>Scorekeeping and match sheets</li>
            <li>Updates on live results (manual and digital as planned)</li>
            <li>A table of points (for league formats)</li>
            <li>Keeping track of who makes it to the semifinals and finals</li>
            <li>Putting together the final results</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Depending on the sport and venue needs, our Sports Tournament Setup & Management Services can include help with digital scoring.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Branding and Event Look: We Make It Seem Like a Real Tournament
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          If your tournament is for a school, a business, a community, or a sponsor, how it looks is important. We offer branding and event identification as part of our Sports Tournament Setup & Management Services:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Welcome gate and branding stands for the event</li>
            <li>Sponsor branding on backdrops and signs</li>
            <li>Branding for the team area and signs that point the way</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/p2-led-wall">Media wall and photo backdrop</a> for winners</li>
            <li>Announcements zone and stage branding</li>
            <li>Player bib branding (optional)</li>
            <li>Trophy table branding and setup for the ceremony</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         A event with professional branding looks high-end, feels organized, and makes sponsors feel better about their money.
        </p>
      </div>

      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Opening Ceremony, Anchoring, and Announcements (Optional Extra)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A lot of clients prefer a formal start and flawless announcements on match day. We can add:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A professional emcee or announcer</li>
            <li>Planning the flow of the opening ceremony</li>
            <li>Coordinating the chief guest (if needed)</li>
            <li>Arranging the national anthem (if needed)</li>
            <li>Announcing the team's introduction and schedule</li>
            <li>Announcing the winners and getting the crowd involved</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes our Sports Tournament Setup & Management Services perfect for sports festivals and corporate sports days.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            Sound system, commentary, and control desk
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A central control desk helps keep the event organized so that everything goes smoothly. We offer:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Microphones and PA sound systems</li>
            <li>Help from an announcer for match calls</li>
            <li>A control desk to keep track of the schedule and teams</li>
            <li>Coordination of walkie-talkies on the ground (for big events)</li>
            <li>Help with emergency alerts and crowd control</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes your tournament feel more like a planned sporting event than a casual get-together.
        </p>
      </div>

      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Hospitality for players and coordination of the team
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          When players feel cared for, a tournament is a success. We take care of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>The team's reporting desk and time slots</li>
            <li>The coordination of team movement and the match call system</li>
            <li>The arrangement of drinking water and hydration stations</li>
            <li>Planning meals and snacks (as needed)</li>
            <li>Planning for teams in the waiting area</li>
            <li>Volunteer help for direction</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our Sports Tournament Setup & Management Services are made to help teams and coaches understand what's going on.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Planning for medical help and safety
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          There are no shortcuts when it comes to planning for safety at sports events. Depending on how big the event is, we set up:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A first-aid desk and a basic medical kit</li>
            <li>Medical help on call (if needed)</li>
            <li>Help from ambulances (for bigger tournaments)</li>
            <li>Control of crowd movement and safe zones</li>
            <li>Planning for bad weather or rain (for outdoor activities)</li>
            <li>Basic safety inspections for the ground</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our Sports Tournament Setup and Management Services are all about making sure everyone has fun while being safe and in control.
        </p>
      </div>
      </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/sports-tournament-setup.jpg"
              alt="Sports Tournament Setup & Management Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="text-center">Sports Tournament Setup & Management Services</p>
          </div>

      {/* Section 13 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
             Optional: Photography, Videography, and Highlights
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We provide content coverage alternatives if you want your tournament to build long-term brand value:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Pictures of the match (action and team photos)</li>
            <li>Coverage of winners and award moments</li>
            <li>Short highlight video and reels (optional)</li>
            <li>Event coverage that focuses on branding for marketing purposes</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Great for communicating with people inside the company and getting the word out on social media.
        </p>
      </div>

      {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Athletics We Offer Services for Setting Up and Running Sports Tournaments
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We set up and run sports tournaments for many different sports and formats, such as:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Cricket tournaments (T10, T20, corporate leagues)</li>
            <li>Football tournaments and futsal leagues</li>
            <li>Badminton tournaments (singles/doubles)</li>
            <li>Volleyball tournaments</li>
            <li>Basketball tournaments</li>
            <li>Athletics meets and sports day events</li>
            <li>Tournaments for table tennis</li>
            <li>Events for kabaddi (depends on format)</li>
            <li>Help with marathons, walkathons, and cyclothons (depends on logistics)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         If you have a different format for your sport, let us know and we'll change our Sports Tournament Setup & Management Services to fit.
        </p>
      </div>

      {/* Section 15*/}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Who Hires Us to Set Up and Run Sports Tournaments?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our clients usually include:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Businesses that <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/sports-event/annual-sports-day-organiser">plan annual sports days</a></li>
            <li>HR teams that run tournaments to get employees involved</li>
            <li>Schools and colleges that plan sports meets</li>
            <li>RWAs and communities that host local leagues</li>
            <li>Sports clubs and academies that plan competitions</li>
            <li>Brands and sponsors that run promotional sports events</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Our Sports Tournament Setup & Management Services are perfect for you if you need consistent execution and professional control.
        </p>
      </div>

      {/* Section 16 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           Why Customers Pick Our Services for Setting Up and Running Sports Tournaments
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Many sellers can "arrange" sports things, but running a tournament takes experience, discipline, and strong organization skills. Clients pick us because:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>We handle all aspects of operations, not just some of them</li>
            <li>We keep our timetables on time and the match flow going well</li>
            <li>We hire trained officials, scorers, and ground crew</li>
            <li>We make plans for safety, reporting, and backup choices</li>
            <li>We provide branding and event production help in-house</li>
            <li>We deliver across Delhi NCR with a trustworthy workforce</li>
            <li>We deal professionally with businesses and institutions</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
         When your brand name is on the tournament, you need to show that you are professional. That's exactly what our Sports Tournament Setup and Management Services do.
        </p>
      </div>

      {/* Section 17 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           In Delhi NCR, We Offer Sports Tournament Setup & Management Services (Service Areas)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We provide professional Sports Tournament Setup & Management Services across Delhi NCR, including Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida, and nearby regions. Our strong local presence helps us manage tournaments smoothly, regardless of the venue or sport.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Corporate sports days and employee tournaments</li>
            <li>School and college sports meets</li>
            <li>Residential and community leagues</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/book-venue-for-corporate-event-and-conferences">Indoor and outdoor sports venues</a></li>
            <li>Branded and sponsored sports events</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
           We also support tournaments outside Delhi NCR based on event size and duration. Multi-day and large-format competitions are handled with advance planning and coordinated execution.
        </p>
      </div>

      {/* Section 18 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           How We Set Up and Run Sports Tournaments
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We swiftly switch to planning mode and send you a detailed execution plan when you get in touch with us.<br/>We usually ask for the following: the type of sport and tournament format, the estimated number of teams and players, the ideal date and location, the length of the event (one day or several days), the level of branding needed (basic or premium), and any other specific needs (such a main guest, sponsor visibility, or awards).<br/>Then we give:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Plan and schedule for execution</li>
            <li>Build up a list and a framework for the workforce</li>
            <li>Give a cost estimate with possibilities</li>
            <li>Timetable and duties on the ground</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Our method is straightforward: make a clear plan, follow through, and deliver professionally.
        </p>
      </div>
        </div>

              
        <h2 className="mt-3 mb-3 text-[21px] font-semibold text-[#202020]">
         Let's Run Your Tournament Like a Pro
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Choose Event-Management-Delhi.com if you want a sports competition that starts on schedule, looks professional, feels thrilling, and stays under control from the first whistle to the last trophy.<br/>We offer full sports tournament setup and management services for <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/sports-event/sports-day-organiser">corporate sports days</a>, institutional tournaments, league formats, and community competitions all over Delhi NCR.<br/>Get in touch immediately and let's arrange your tournament with a team that knows how to run a sports event, not simply how to decorate it.
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