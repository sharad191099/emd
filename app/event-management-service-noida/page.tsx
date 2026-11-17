import HeroHeader from "../../components/About/Header";
import Eventcard from "../../components/EMDEventcard/Eventcard"
export default function EMDPage() {
  return (
    <main>
      <HeroHeader
        heading={[
          { text: "Event Management", highlight: true},
          { text: "Services in Noida" }
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: " Event Management Services in Noida" },
        ]}
      />

        {/* Main Content */}
      <section className="mb-20 w-full bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-[1330px]">

        {/* UPPER PARAGRAPH */}

        <p className="mb-20 text-[15px] leading-[27px] text-slate-800">
          EMD is a leading event management company in Noida, delivering end-to-end solutions for high-profile corporate events, conferences, business meetings, and grand celebrations. With strong expertise in planning, production, and flawless execution, EMD ensures seamless experiences, professional coordination, and impactful event outcomes tailored specifically to Noida's corporate, industrial, and residential hubs.
        </p>

        {/* EVENT CARDS */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <Eventcard
            image="https://www.event-management-delhi.com/assets/img/main/corporate-meeting-organiser-in-noida-fe.jpg"
            title="Corporate Meeting Organiser in Noida"
            description="Event Management Delhi provides corporate meeting organisation services in Noida for board meetings, management meetings, AGMs, sales meetings, leadership meetings and town halls — covering meeting planning, venue coordination, seating, presentation facilities, audiovisual equipment, branding and on-site coordination."
            date="2026-11-02"
            link="/event-management-service-noida/corporate-meeting-organiser-in-noida"
          />

          <Eventcard
            image="https://www.event-management-delhi.com/assets/img/main/corporate-event-services-in-noida-fe.jpg"
            title="Corporate Event Services in Noida"
            description="Event Management Delhi offers corporate event services in Noida for conferences, meetings, dealer meets, product launches and employee programmes — covering planning, venue, production, LED, sound, branding and on-site management."
            date="2026-10-29"
            link="/event-management-service-noida/corporate-event-services-in-noida"
          />

          <Eventcard
            image="https://www.event-management-delhi.com/assets/img/main/event-management-companies-in-noida-fe.jpg"
            title="Event Management Companies in Noida"
            description="Businesses looking for event management companies in Noida can get end-to-end event planning, venue coordination, stage and branding setup, technical production and event-day management for corporate functions, conferences, product launches, exhibitions and employee engagement programmes."
            date="2026-10-27"
            link="/event-management-service-noida/event-management-companies-in-noida"
          />

          <Eventcard
            image="https://www.event-management-delhi.com/assets/img/main/corporate-event-organiser-in-noida-fe.jpg"
            title="Corporate Event Organiser in Noida"
            description="Plan corporate conferences, annual sales meets, dealer meets, product launches and award ceremonies in Noida with professional event planning, venue coordination, stage setup, LED walls, AV production and on-site event management."
            date="2026-10-26"
            link="/event-management-service-noida/corporate-event-organiser-in-noida"
          />

        </div>
      </div>
    </section>
      </main>
  )
}