import HeroSection from "../../../components/EMDEventcard/CardHeroSection";
import EMDServicecard from "../../../components/EMDEventcard/EMDServicecard";
const services = [
  {
    title: "Conferences & summits",
    description: "Agenda planning, speaker coordination, stage & presentation setup, registration support, technical rehearsal. Managed alongside venue coordination so the programme runs to schedule.",
  },
  {
    title: "Annual sales meets",
    description: "Presentations, performance reviews, recognition segments and evening entertainment. Planning covers stage layout, AV, branding, seating and session sequencing.",
  },
  {
    title: "Dealer meets & conferences",
    description: "Coordinated travel, accommodation, registration desks, branded environments and presentation systems. Guest movement and on-site coordination handled.",
  },
  {
    title: "Product launches & activations",
    description: "Stage design, reveal mechanics, lighting cues, display fabrication and media-ready setups — planned around launch format and venue capacity.",
  },
  {
    title: "Award ceremonies & gala dinners",
    description: "Trophy presentation planning, seating layouts, menu coordination, lighting design and programme sequencing.",
  },
  {
    title: "Employee engagement & family days",
    description: "Activity planning, stage programming, crowd management, family-friendly logistics; also meetings, seminars and training with room layouts, projection, audio.",
  },
];

export default function eventmanagementpage() {
  return (
    <main>

      <HeroSection
        subtitle="CORPORATE EVENT MANAGEMENT IN NOIDA"
        heading={[
            { text: "Your Trusted " },
            { text: "Corporate Event Organiser", highlight: true },
            { text: " in Noida" },]}
        description="Event Management Delhi plans and executes corporate conferences, annual sales meets, dealer meets, product launches, award ceremonies and employee engagement events in Noida. From venue coordination and stage design to LED walls, AV production and on-site management, we bring every event requirement together under one coordinated plan."
        primaryButton="Request a Proposal"
        secondaryButton="Explore Services"
        primaryLink="/contact"
        secondaryLink="/Services"
      />

      {/* Remaining page sections */}

      <section className="mb-20 min-h-screen bg-[#f5f7fa] px-4 py-10 md:px-8">

      <div className="mx-auto max-w-[1350px] rounded-2xl bg-white p-6 shadow-lg md:p-10">

        {/* INTRODUCTION */}

        <section className="mb-10">
          <h2 className="mb-5 border-b-2 border-slate-200 pb-3 text-3xl font-semibold text-slate-900">
            Corporate Event Organiser in Noida
          </h2>

          <p className="mb-4 leading-7 text-slate-900">
            Event Management Delhi plans and executes corporate events for businesses across Noida, handling everything from the first briefing to on-site pack-down. As a corporate event organiser in Noida, the team works with companies, HR departments, marketing teams and business owners on conferences, annual sales meets, dealer conferences, product launches, award ceremonies, employee engagement programmes and corporate celebrations. Services combine event planning, <a className="text-[blue] font-semibold" href="https://www.hire4event.com/plan-your-event/full-service-event-production-companies-and-technical-support-providers">technical production service</a>, venue coordination and event-day management under one point of contact, so internal teams are not left coordinating multiple vendors. Whether the requirement is a single-day seminar in Sector 62 or a multi-day sales conference on the Noida Expressway, the scope is built around the event format, guest count, venue and budget. Share your event brief to discuss how the planning and production requirements can be taken forward.
          </p>

          <div className="mt-5 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/main/event-management-companies-in-noida.jpg"
              className="h-auto max-h-[700px] w-full object-cover"
            />
          </div>
        </section>


        <section>
          <h2 className="mb-5 border-b-2 border-slate-200 pb-3 text-2xl font-semibold text-slate-900">
            Corporate Event Management Services in Noida
          </h2>

          <p className="leading-7 text-slate-900">
            Corporate event management services in Noida cover a wide range of business event formats, each with different planning and production demands.
          </p>
          </section>
          
          <EMDServicecard services={services} />


        <section className="mb-10">
          <h2 className="mb-5 border-b-4 border-slate-200 pb-3 text-2xl font-semibold text-slate-900">
            End-to-End Corporate Event Planning and Production
          </h2>

          <p className="mb-5 leading-7 text-slate-900">
            A corporate event planner in Noida is most useful when planning and production sit with the same team. The workflow begins with a briefing to understand the event objective, audience, format and budget. From there, the team develops the event concept, programme structure and production requirements.
          </p>

          <p className="mb-4 leading-7 text-slate-900">
            Venue selection and layout planning follow, with capacity, accessibility, stage positioning and technical feasibility assessed against the event format. Once the venue is confirmed, stage design, backdrops and corporate branding are planned, along with LED walls, projection and presentation systems, sound reinforcement and stage lighting.
          </p>

          <p className="leading-7 text-slate-900">
            Guest registration, vendor scheduling and on-site coordination are managed as part of the same plan. As a corporate event production company in Noida, the team aligns fabrication, AV, entertainment and venue vendors to a single production schedule, which reduces the coordination load on corporate teams and keeps communication clear about responsibilities, timelines and costs. The result is one coordinated plan covering planning, production and event-day execution.
          </p>
        </section>



        <section className="mb-10">
          <h2 className="mb-5 border-b-4 border-slate-200 pb-3 text-2xl font-semibold text-slate-900">
            Corporate Event Equipment, Stage and AV Setup
          </h2>

          <p className="mb-4 leading-7 text-slate-900">
            Technical production is arranged according to the venue, attendance, programme format and staging requirements. A conference in a hotel ballroom needs different equipment from a product launch in a business centre or a dealer meet at a larger venue.
          </p>

          <p className="mb-4 leading-7 text-slate-900">
            Equipment and production support includes LED video walls and display systems for stage backdrops and presentation content; stage platforms, stage backdrops and event fabrication for branded environments; professional speakers, microphones and audio systems for halls of different sizes; conference projection and presentation equipment; stage and ambient lighting; and branding displays, signage and registration counters. Hybrid conference and virtual event production can be arranged where part of the audience joins remotely.
          </p>

          <p className="leading-7 text-slate-900">
            Configurations are confirmed after reviewing the venue's power supply, rigging restrictions, sightlines and load-in access, so the setup matches the space rather than being decided in advance. Equipment rental, <a className="text-[blue] font-semibold" href="https://www.hire4event.com/led-screen">LED wall rental</a>, sound and lighting rental and hybrid event production are all planned as part of the overall event scope
          </p>
        </section>



        <section className="mb-10">
          <h2 className="mb-5 border-b-4 border-slate-200 pb-3 text-2xl font-semibold">
            Corporate Event Management Across Noida
          </h2>

          <p className="mb-4 leading-7 text-slate-900">
            Corporate events in Noida take place across a range of commercial areas, and each brings practical considerations. Sector 18 and Sector 62 host hotels, business centres and conference facilities suited to meetings, seminars and mid-sized conferences. Sector 63 and Sector 125 are convenient for corporate offices and business parks where town halls, training programmes and employee events are commonly held. Sector 135 and the Noida Expressway corridor offer larger venues for sales meets, dealer conferences and award ceremonies.
          </p>

           <p className="leading-7 text-slate-900">
            Events held at corporate offices need careful planning around room capacity, power supply, load-in access and working hours, while hotel and conference venues require coordination with in-house AV and banquet teams. The team plans around these constraints during site assessment and venue coordination. Greater Noida and the wider Delhi NCR region are covered where the event brief requires it, with logistics planned according to distance, venue access and event timings.
          </p>
        </section>

     

        <section>
          <h2 className="mb-5 border-b-4 border-slate-200 pb-3 text-2xl font-semibold">
            Venue Selection and Event Logistics
          </h2>

          <p className="mb-4 leading-7 text-slate-900">
            Venue support begins with researching options that match the event format, guest count, accessibility, budget and production requirements. Capacity is assessed alongside seating layouts, stage positioning, guest movement and registration flow, so the space works for the programme rather than simply accommodating the headcount.
          </p>

          <p className="leading-7 text-slate-900">
            Technical feasibility is reviewed before confirmation, including power availability, rigging options, projection distances, acoustics and load-in access. As a corporate conference organiser in Noida, the team coordinates with venue management on layouts, catering timings and in-house equipment, and as a <a className="text-[blue] font-semibold" href="https://www.hire4event.com/corporate-event-planner-in-noida">corporate meeting organiser in Noida</a>, it manages smaller room setups, presentation systems and guest arrangements. Vendor coordination, registration counters and on-site logistics are planned in advance. Venue booking, conference organisation and corporate meeting services are handled as part of the wider event scope, so venue decisions stay aligned with production and programme needs.
          </p>
        </section>



        {/* Why Choose Our Corporate Event Management Services in Noida */}

        <section className="w-full bg-white px-5 py-10 md:px-10 lg:px-6">

        <div className="mx-auto max-w-[1300px] rounded-[28px] border border-[#cbdcff] bg-gradient-to-br from-[#f0f5ff] to-white px-6 py-8 shadow-[0_5px_15px_rgba(0,0,0,0.20)] md:px-8 md:py-9">

            {/* HEADING */}
            <h2 className="mb-5 text-xl font-bold leading-8 text-[#111827] md:text-2xl">
              Why Choose Our Corporate Event Management Services in Noida
            </h2>

            {/* FIRST PARAGRAPH */}
            <p className="mb-5 text-[15px] leading-7 text-slate-900">
              Corporate event management services in Noida are built around a coordinated approach, with planning, production, equipment and venue requirements managed together rather than as separate workstreams. Event solutions are tailored to business objectives, so the format, staging and technical setup support the purpose of the event, whether that is a sales target launch, a dealer conference or an employee recognition programme.
            </p>

            {/* SECOND PARAGRAPH */}
            <p className="text-[15px] leading-[26px] text-slate-900">
            Production and equipment requirements are integrated into the plan from the start, which helps avoid last-minute gaps between venue, staging and AV arrangements. Communication is kept clear about scope, timelines and costs, so corporate teams know what is included and what is expected of them. On-site coordination is provided during the event, covering vendors, staging, AV and guest movement. Planning remains flexible across different event formats, venue types and budgets, with the scope adjusted to what the event actually requires.
            </p>

        </div>
        </section>



        <section className="mb-10">
          <h2 className="mb-5 border-b-4 border-slate-200 pb-3 text-2xl font-semibold">
            Request a Corporate Event Proposal in Noida
          </h2>

          <p className="mb-4 leading-7 text-slate-900">
            To move forward, share your corporate event requirements with the team. Providing a few details helps assess the scope and prepare a relevant proposal:
          </p>

           <div className="ml-5 space-y-1 pl-6 leading-7 text-slate-900">
            <li>Event type and objective</li>
            <li>Preferred event date</li>
            <li>Venue or preferred location in Noida</li>
            <li>Estimated number of attendees</li>
            <li>Event budget or budget range</li>
            <li>Required staging, LED, sound, lighting & branding</li>
          </div>

          <p className="mt-5 leading-7 text-slate-900">
            These details allow the team to review venue options, production requirements and timelines before recommending an approach. Discuss your corporate event in Noida or request a <a className="text-[blue] font-semibold" href="/Services/corporate-event">corporate event management</a> quote with your event brief, and the team will respond with a proposal suited to your requirements.
          </p>
        </section>
      </div>
      </section>

    </main>
  );
}
