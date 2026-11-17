import HeroHeader from "../../components/About/Header";
import EventCard from "../../components/Article/EventCard";
const events = [
  {
    image: "https://www.event-management-delhi.com/assets/img/blogs/gamification-zone-design-and-corporate-event-management-1.jpg",
    category: "Gamification Zone Design and Corporate Event Management",
    date: "30/10/2026",
    title: "Gamification Zone Design and Corporate Event Management",
    description:"Professional gamification zone design and corporate event management services for corporate events, exhibitions, conferences, product launches and employee engagement programmes, covering interactive game stations, branded gamification zones, digital quizzes and leaderboards, custom fabrication and branding, equipment and technical production, installation scheduling and event-day coordination.",
    href: "/Articles/gamification-zone-design-and-corporate-event-management",
  },
  {
    image: "https://www.event-management-delhi.com/assets/img/blogs/marathon-route-branding-and-sponsor-activation-services-1.jpg",
    category: "Marathon Route Branding and Sponsor Activation Services",
    date: "29/10/2026",
    title: "Marathon Route Branding and Sponsor Activation Services",
    description:"Professional marathon route branding and sponsor activation services for marathons, half-marathons, charity runs and corporate races, covering branded route markers, start and finish line structures, sponsor backdrops, directional signage, branded arches, promotional zones, sponsor activation areas, sampling stations, signage fabrication and printing, LED displays, installation scheduling and event-day coordination.",
    href: "/Articles/marathon-route-branding-and-sponsor-activation-services",
  },
  {
    image: "https://www.event-management-delhi.com/assets/img/blogs/corporate-long-service-award-ceremony-planning-and-management-1.jpg",
    category: "Corporate Long-Service Award Ceremony Planning and Management",
    date: "23/10/2026",
    title: "Corporate Long-Service Award Ceremony Planning and Management",
    description:"Professional corporate long-service award ceremony planning and management services for employee milestone celebrations, work anniversary recognition, loyalty awards and corporate appreciation events, covering event concept development, venue sourcing, award presentation planning, stage production, branding, audiovisual setup, guest registration, catering, hospitality, entertainment and on-site event coordination.",
     href: "/Articles/corporate-long-service-award-ceremony-planning-and-management",
  },
  {
    image: "https://www.event-management-delhi.com/assets/img/blogs/corporate-franchise-partner-meet-planning-and-event-coordination-1.jpg",
    category: "Corporate Franchise Partner Meet Planning and Event Coordination",
    date: "16/10/2026",
    title: "Corporate Franchise Partner Meet Planning and Event Coordination",
    description:"Professional corporate franchise partner meet planning and event coordination services for annual meets, partner conferences, business review sessions and recognition events covering event concept planning, venue sourcing, agenda coordination, delegate registration, stage and presentation setup, branding, catering, travel arrangements, accommodation coordination, partner networking and on-site management.",
     href: "/Articles/corporate-franchise-partner-meet-planning-and-event-coordination",
  },
  {
    image: "https://www.event-management-delhi.com/assets/img/blogs/press-conference-live-streaming-and-broadcast-production-services-1.jpg",
    category: "Press Conference Live Streaming and Broadcast Production Services",
    date: "12/10/2026",
    title: "Press Conference Live Streaming and Broadcast Production Services",
    description:"Professional press conference live streaming and broadcast production services for corporate announcements, media briefings, government statements, product launches, executive addresses and investor communications covering multi-camera recording, audio capture, live video switching, graphics integration, streaming configuration, technical rehearsal, live broadcast monitoring, media feed distribution and event recording.",
     href: "/Articles/press-conference-live-streaming-and-broadcast-production-services",
  },
  {
    image: "https://www.event-management-delhi.com/assets/img/blogs/event-temporary-kitchen-infrastructure-and-catering-area-setup-services-1.jpg",
    category: "Event Temporary Kitchen Infrastructure and Catering Area Setup Services",
    date: "12/10/2026",
    title: "Event Temporary Kitchen Infrastructure and Catering Area Setup Services",
    description:"Professional event temporary kitchen infrastructure and catering area setup services for corporate conferences, exhibitions, trade fairs, weddings, outdoor functions, hospitality areas and large-scale events covering site assessment, kitchen layout planning, equipment placement, temporary work surfaces, food preparation zones, dishwashing and handwashing stations, service counters, utility coordination and dismantling after the event.",
    href: "/Articles/event-temporary-kitchen-infrastructure-and-catering-area-setup-services",
}
];
export default function sportseventpage() {
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Corporate Event " },
                { text: "Management Company", highlight: true },
              ]}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Articles"}
              ]}
              rightTitle="ARTICLES"
            />

      <section className="mb-25 mx-auto max-w-[1350px] px-5 py-16 md:px-8 md:py-10">

        {/* Upper Fixed Paragraph */}
        <div className="mb-16">
          <p className="text-justify text-sm leading-7 text-gray-900 sm:text-base md:leading-7 md:text-[18px]">
            EMD is a leading corporate event management company in Delhi, delivering end-to-end solutions for high-profile events, conferences, and business meetings. With strong expertise in planning, production, and execution, EMD ensures seamless experiences, professional coordination, and impactful event outcomes tailored to corporate and government requirements.
          </p>
        </div>

        {/* Dynamic Event Cards */}
        <div className="flex flex-col gap-7">
          {events.map((event, index) => (
            <EventCard
              key={index}
              {...event}
            />
          ))}
        </div>
      </section>
    </main>
  );
}