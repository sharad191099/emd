"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Sports Event Venue Management Services?",
   answer: "Sports Event Venue Management Services involve complete operational control of the sports venue, including planning, permissions, layout zoning, ground readiness, access control, safety, equipment coordination, crowd flow, vendor management, and on-ground supervision to ensure sports events run smoothly and on time."},
  {question: "Why is professional venue management important for sports events?",
   answer:"Sports venues have complex operational needs such as player movement, spectator flow, safety zones, field readiness, referee coordination, and emergency planning. Professional Sports Event Venue Management Services ensure disciplined operations, reduce risks, prevent delays, and maintain a structured, big-event experience."},
  {question: "What types of sports events require venue management services?",
   answer:"Sports Event Venue Management Services are ideal for corporate sports days, school and college sports meets, cricket and football tournaments, badminton and basketball competitions, athletics meets, marathons, RWAs sports events, district-level championships, and multi-sport festivals."},
  {question: "Do you help with sports venue booking and permissions?",
   answer: "Yes. Our Sports Event Venue Management Services include venue shortlisting, ground booking, coordination with venue authorities, handling permissions, compliance checks, setup timelines, vendor access approvals, and adherence to venue rules."},
  {question: "How do you manage crowd flow, entry, and parking at sports venues?",
   answer:"We design structured entry and exit plans, segregated access for players and spectators, parking flow management, security checkpoints, wristband or badge systems, and clear signage to keep the venue safe, organised, and congestion-free."},
  {question: "Is ground preparation and field readiness included?",
   answer:"Yes. Our Sports Event Venue Management Services cover ground cleaning, line marking, boundary setup, goalposts or nets installation, bench and dugout zones, technical table placement, and smooth transitions between matches to avoid delays."},
  {question: "Do you manage sports equipment and vendor coordination?",
   answer:"Absolutely. We coordinate with sports equipment vendors to ensure timely delivery, correct setup, safety checks, backup availability, and proper placement of equipment such as cricket kits, football goals, nets, scoreboards, podiums, medals, and trophies."},
  {question: "How do you ensure safety and emergency preparedness at sports venues?",
   answer:"We handle security coordination, barricading, crowd control, emergency exit mapping, first-aid desk setup, ambulance coordination (if required), risk assessment of surfaces and electrical points, and clear emergency response planning."},
   {question: "Can you manage spectator seating and sponsor branding at the venue?",
   answer:"Yes. Our Sports Event Venue Management Services include seating layout planning, spectator zoning, directional signage, sponsor branding placement, media zones, photo backdrops, award areas, and sponsor visibility while complying with venue guidelines."},
   {question: "Which locations do you serve for Sports Event Venue Management Services?",
   answer:"We provide Sports Event Venue Management Services across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida, and the entire Delhi NCR region. Outstation venue management support is available depending on event size and logistics."}
];

export default function sportsvenuepage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Sports Event " },
                { text: "Venue Management Services", highlight: true },
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
              <span className="block">Sports Venue</span>
              <span className="block text-[#1675b9]">Booking Services</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Sports Event Venue Booking Services for Corporate Events</h2>

            <p className="mt-10">
              At Event-Management-Delhi.com, we deliver complete Sports Event Venue Management Services for tournaments, leagues, school and college sports meets, corporate sports days, athletics events, marathons, indoor games, outdoor competitions, and multi-sport festivals across Delhi NCR. From Delhi to Noida, Gurgaon, Faridabad, Ghaziabad, and Greater Noida, we manage venues with precision and discipline.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “When a sports venue is managed professionally, everything else falls into place. Teams arrive on time, spectators move smoothly, matches begin as scheduled, safety stays controlled, and the event carries a true big-league presence. A well-run venue doesn’t just host a game—it supports the entire sporting experience from start to finish.”
              </p>
            </div>
             <p className="mt-10">
                Our responsibility is straightforward: we take complete ownership of the venue so you can focus entirely on the sport. From the first entry to the final whistle, our Sports Event Venue Management Services ensure operational clarity, controlled movement, ready play areas, organized seating, and smooth coordination between players, officials, vendors, and support teams.
            </p>
            <p className="mt-5">
                Whether it’s a one-day inter-school competition or a multi-day championship, our Sports Event Venue Management Services cover everything end to end. This includes planning, permissions, layout zoning, field readiness, <a className="text-[red]" href="https://www.hire4event.com/equipment">equipment coordination</a>, crowd flow, vendor zones, security, technical setup, hygiene management, and real-time on-ground supervision to keep the event running flawlessly.
            </p>
            <p className="mt-5">
                Our objective is simple and practical. We take complete ownership of the venue so organizers, institutions, brands, and sports bodies can focus entirely on the sport itself. With a single operations team managing all venue responsibilities, risks reduce, coordination improves, and your sports event runs with precision, professionalism, and confidence.   
            </p>
          </div>
        </div>
        </section>


          <section className="ml-8 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
        

      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Why Sports Event Venue Management Needs Experts
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Sports arenas are not the same as banquet halls. They have genuine operational problems, like big entrances, changing rooms, field markings, match schedules, safety zones, spectator sections, coordinating referees and umpires, backup power, access to bathrooms, being ready for emergencies, and rigorous requirements from venue authorities.<br/>That's why companies, brands, institutions, sports organizations, RWAs, and corporate HR teams use us to <a className="text-[red]" href="https://www.hire4event.com/sports-events">manage sports events</a>. We prepare how the venue will work like a system so that the event starts on schedule, looks organized, and stays safe.<br/><strong>When we run the venue, you get:</strong>
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A clear flow of people and disciplined operations</li>
            <li>Smooth movement for players, officials, and fans</li>
            <li>A ready play area and the right equipment in the right place</li>
            <li>Professional management of entry and exit and parking</li>
            <li>A controlled setup for stalls, sponsors, and branding</li>
            <li>Backup plans for power outages, rain, and other emergencies</li>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mt-8 mb-3 text-[21px] font-semibold text-[#202020]">
            What We Do for You with Our Sports Event Venue Management Services
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
            Our Sports Event Venue Management Services are a full solution, not just a bunch of separate chores. Here is a detailed look at what we take care of.
        </p>  
      </div>


      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      {/* Section 3 */}
      <div>
        <h2 className="mt-8 mb-3 text-[22px] font-semibold text-[#202020]">
          1) Finding, booking, and coordinating the venue
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We help you narrow down your options and book the right venue based on:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>The type of sport (cricket, football, athletics, badminton, basketball, volleyball, etc.)</li>
            <li>The number of people who can fit in the venue and how they need to be seated</li>
            <li>The quality of the ground or court</li>
            <li>The availability of changing rooms</li>
            <li>The parking and access routes</li>
            <li>The availability of power and infrastructure</li>
            <li>The venue's rules and time slots</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Once the location is set, our Sports Event Venue Management Services will work with the venue's staff to make sure everything is in order, including entry permissions, setup times, vendor access, and compliance requirements.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mt-8 mb-3 text-xl font-semibold text-[#202020]">
            2) Help with permissions and compliance
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          Many <a className="text-[red]" href="https://www.hire4event.com/venue-booking/noida/sports-event-venue">sports venues</a> need government permission and to follow the rules. Our Sports Event Venue Management Services help with:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Helping with venue authority paperwork</li>
            <li>Making arrangements for access control on the day of the event</li>
            <li>Making sure that sound, lighting, stalls, and branding follow venue rules</li>
            <li>Coordinating with local needs (if needed)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We keep things organized so you don't have to deal with last-minute limits.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          3) Planning the layout and zoning of the venue
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         Every place during a sports event should have a purpose. We make a full map of the venue and put it into action.
        </p>
        <h2 className="mt-2 mb-1 text-[21px] font-semibold text-[#202020]">
          Our Sports Event Venue Management Services include zoning, which includes:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>The buffer zone and the perimeter of the playing area</li>
            <li>Path for teams to enter and exit and warm up</li>
            <li>Seating and observation areas for spectators</li>
            <li>VIP seating and a lounge for sponsors (if needed)</li>
            <li>Counters for registration and check-in</li>
            <li>A desk and control area for referees and officials</li>
            <li>A medical/help desk and emergency response zone</li>
            <li>Counters for food and drinks and water stations</li>
            <li>Points for media coverage</li>
            <li>Space for storage and work</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This is where the "professional feel" comes from: everything is in the right position.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         4) Readiness for the ground/court and field operations
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Being ready is the most important thing for both outdoor and indoor courts. Our Sports Event Venue Management Services make sure that:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>The play area is checked and ready</li>
            <li>The ground is cleaned and prepared</li>
            <li>Lines are marked, boundaries are set up, cones are placed, and signs are put up</li>
            <li>Setting up the goalposts and nets</li>
            <li>Putting the technical table in the right spot (for indoor sports)</li>
            <li>Making sure the bench sections and team dugout zones are where they need to be</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We carefully organize the transitions between matches so that games don't become delayed because of setup gaps that could have been avoided.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         5) Putting <a className="text-[red]" href="https://www.hire4event.com/equipment">sports equipment</a> in the right place and working with vendors
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We work with sporting equipment vendors to make sure that products are:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Delivered on time</li>
            <li>Set up appropriately</li>
            <li>Tested for safety and usefulness</li>
            <li>Available with backups as needed</li>
        </div>
        <h2 className="mt-6 mb-1 text-[21px] font-semibold text-[#202020]">
            Depending on the sport, our Sports Event Venue Management Services can help with:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Cricket kits, stumps, boundary markers, and sight screens</li>
            <li>Football goals, nets, corner flags</li>
            <li>Badminton/volleyball nets and poles</li>
            <li>Basketball rings and scoreboards</li>
            <li>Athletics timing setup support (basic coordination)</li>
            <li>Medals, trophies, and podium placement</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We plan the movement of equipment so that there is no overlap or misunderstanding if your event contains more than one sport.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            6) Access Control, Entry, and Parking
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Without proper planning, large crowds, multiple teams, and support staff can quickly create confusion at a sports venue. Our Sports Event Venue Management Services focus on creating a clear, disciplined system for entry, exit, and movement within the venue, including separate access points for players, officials, VIPs, staff, and spectators wherever required.<br/>Our access and parking management includes:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>security and access checks using wristbands, badges, or passes</li>
            <li>planned entry and exit gates to avoid crowd overlap</li>
            <li>a structured parking layout and controlled vehicle flow</li>
            <li>designated drop-off and pickup zones for buses and teams</li>
            <li>coordination with security staff for smooth gate operations</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This organized approach reduces congestion, improves safety, and ensures that arrivals and departures remain smooth, controlled, and stress-free throughout the event.
        </p>
      </div>

      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            7) Staffing on the ground and overseeing the venue
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          You will have a specialized operations crew that runs the venue in real time. We offer the following Sports Event Venue Management Services:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A venue manager or event controller</li>
            <li>Floor coordinators for zones</li>
            <li>Ushers and volunteers to help with crowd control</li>
            <li>Support workers at the check-in desk</li>
            <li>Workers to coordinate teams and officials</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We run the venue like a control room: quickly, calmly, and in sync.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            8) Safety, Security, and Emergency Preparedness
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          People walk about, are in crowds, and do physical activity at sports events. Planning for safety is really important.
        </p>
        <h2 className="mt-3 mb-1 text-[21px] font-semibold text-[#202020]">
            We offer the following services for managing sports events:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Coordinating the deployment of security personnel</li>
            <li>Setting up barricades and controlling the crowd</li>
            <li>Mapping out emergency exits and making sure they are visible on the ground</li>
            <li>Coordinating the first-aid desk</li>
            <li>And, if needed, coordinating ambulance support</li>
            <li>Figuring out how risky it is to walk on slippery surfaces, near electric wires, or through narrow doorways</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We put safety first without making the place feel "restricted."
        </p>
      </div>

      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         9) Planning for power management and backups
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Reliable electricity is needed for sound systems, lights, scoreboards, registration desks, and media coverage.
        </p>
        <h2 className="mt-3 mb-1 text-[21px] font-semibold text-[#202020]">
            Our Sports Event Venue Management Services include:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Help with planning power loads</li>
            <li>Safe cabling paths and distribution points</li>
            <li>Coordinating the generator and power backup (if needed)</li>
            <li>Managing the extension and power points</li>
            <li>Checking for electrical safety</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          No tangled cables. No power outages that come out of the blue. Operations that are clean.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            10) Control of washrooms, hygiene, and cleanliness 
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          For every guest and crew, clean bathrooms and a neat venue are important.
        </p>
        <h2 className="mt-3 mb-1 text-[21px] font-semibold text-[#202020]">
            We keep the venue clean and safe by managing restroom access and cleaning personnel schedules through our Sports Event Venue Management Services:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Putting trash cans in different areas</li>
            <li>Mobility to clean up after the game</li>
            <li>Handling of dry and moist waste (if necessary)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          For school, college, and <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/corporate-event-planners-for-business-meetings-and-launches">business gatherings</a>, a clean venue is important for your reputation.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            11) Managing seating and the experience of spectators
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          If there are people watching your sporting event, making them comfortable is quite important.
        </p>
        <h2 className="mt-3 mb-1 text-[21px] font-semibold text-[#202020]">
            We offer sports event venue management services that include:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Arranging the seating configuration and putting up zone markers</li>
            <li>Flow of people entering to keep crowds from piling up</li>
            <li>Putting up barriers near play areas</li>
            <li>Putting up signs for directions, bathrooms, and exits</li>
            <li>Putting up water counters and a place to get snacks</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This is very helpful for tournaments, finals, and community sports festivals.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            12) Branding, making sponsors visible, and signs at the venue
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Sponsors and partners are common at sports events. We make sure that branding is neat and easy to see without infringing any laws at the location.
        </p>
        <h2 className="mt-3 mb-1 text-[21px] font-semibold text-[#202020]">
            We handle the following for Sports Event Venue Management Services:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Entry branding and welcome boards</li>
            <li>Sponsor banners, standees, and perimeter branding</li>
            <li>Stage/award area branding (if needed)</li>
            <li>Signs pointing in different directions throughout the stadium</li>
            <li>Photo spots and prize backdrop areas    </li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Result: Your venue appears neat and professional.
        </p>
      </div>
      </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/sports-event-venue-management.jpg"
              alt="Sports Event Venue Management Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="text-center">Sports Event Venue Management Services</p>
          </div>

      {/* Section 13 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
             13) Setting up registration, player check-in, and the help desk
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          For competitive sports, players must check in quickly and in an orderly way. We set up and run:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Help desks and registration stations</li>
            <li>Schedule for team reports</li>
            <li>Help with ID verification (as per your standards)</li>
            <li>Coordinating the distribution of bibs (for marathons and other sports)</li>
            <li>Handing over team kits (if necessary)</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            As part of our Sports Event Venue Management Services, we take care of all of this so that your match schedule stays on track. 
        </p>
      </div>

      {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          14) Vendor Zones: Food, water, stalls, and help counters
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We set up special areas for food stalls, water stations, or sponsor booths at your event and keep track of where the vendors are.
        </p>
        <h2 className="mt-3 mb-1 text-[21px] font-semibold text-[#202020]">
            Our Sports Event Venue Management Services include:
        </h2>   
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Arranging the flow of queues</li>
            <li>Checking hygiene and managing garbage</li>
            <li>Helping vendors with power allocation</li>
            <li>Putting up barriers near playing areas to keep people safe</li>
        </div>
      </div>

      {/* Section 15*/}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Sports Events We Help with Managing Venues
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We manage sports events for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li><a className="text-[red]" href="https://www.hire4event.com/plan-your-event/sports-event/sports-day-organiser">Corporate sports days</a> and annual sports meets</li>
            <li>School sports days and inter-school tournaments</li>
            <li>College sports fests and university tournaments</li>
            <li>Resident welfare association (RWA) sports events</li>
            <li>District-level tournaments and open championships</li>
            <li>Cricket leagues, football leagues, badminton tournaments</li>
            <li>Athletics meets, marathons, and fun runs</li>
            <li>Sports activities inside stadiums and arenas</li>
            <li>Multi-sport carnivals with more than one court or field</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Our Sports Event Venue Management Services can work with any size venue and any size event, from small to huge.
        </p>
      </div>

      {/* Section 16 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           Sports Event Venue Management Services are available in Delhi NCR.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We work in:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Delhi</li>
            <li>Noida</li>
            <li>Gurgaon</li>
            <li>Greater Noida</li>
            <li>Faridabad</li>
            <li>Ghaziabad</li>
            <li>NCR areas that are close by and have available venues</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We can help with your sporting event if it is outside of NCR, depending on the scope and timing.
        </p>
      </div>

      {/* Section 17 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           How We Work: Controlled, On Time, and Professional
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We don't work like "general decorators." We run things like venue managers. That means that our Sports Event Venue Management Services have a certain way of doing things:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>An event controller who is the exclusive point of contact</li>
            <li>A checklist for visiting the venue before the event and for running it</li>
            <li>A clear plan for zoning the venue</li>
            <li>A timeline for scheduling and setting up vendors</li>
            <li>Staff and volunteers get a briefing on the ground</li>
            <li>Live coordination throughout games and overseeing the closing and cleanup at the end of the day</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
           The result is a well-run venue and a sports event that goes off without a hitch.
        </p>
      </div>

      {/* Section 18 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           Why Clients Hire Us to Manage Sports Events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          You can count on us to do what we say we're going to do. Clients choose our <a className="text-[red]" href="https://www.hire4event.com/venue-booking/noida/sports-event-venue">Sports Event Venue</a> Management Services because:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>We take care of all aspects of venue operations</li>
            <li>We know how to keep the flow and timing of sports events</li>
            <li>We professionally coordinate vendors, staff, and zones</li>
            <li>We make the venue experience clean and organized</li>
            <li>We lower your risk on event day by planning and having backups</li>
            <li>We keep your brand image with well-organized signage and layouts</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Our Sports Event Venue Management Services are perfect for you if you want professionals to take care of the venue for your sports event.
        </p>
      </div>
        </div>

              
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         Let's take care of your sports event venue the right way
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Your sports event needs a place that looks neat, runs on time, and stays secure without any last-minute problems. Event-Management-Delhi.com offers Sports Event Venue Management Services, which include a full operational team that runs the venue like a system and follows through on every detail.<br/>If you need help managing a <a className="text-[red]" href="https://www.hire4event.com/sports-events">sports event in Delhi NCR</a>, get in touch with us immediately and let us know the date, sport, expected audience, and desired site. We'll make a clear plan for the venue, take care of everything that has to be done on the day of the event, and make sure everything goes well from the first entry to the last prize.<br/>Event-Management-Delhi.com is the company you can trust to manage sports events.
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