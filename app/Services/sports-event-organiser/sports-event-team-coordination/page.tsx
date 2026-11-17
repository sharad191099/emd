"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Team Coordination Services for Sports Events?",
   answer: "Team Coordination Services for Sports Events involve managing team communication, reporting systems, movement control, match readiness, and on-ground coordination so sports events run on time, stay disciplined, and operate smoothly from start to finish."},
  {question: "What types of sports events require team coordination services?",
   answer:"Team Coordination Services for Sports Events are ideal for corporate sports days, school and college tournaments, inter-school championships, employee league matches, sports festivals, marathons, and multi-team or multi-venue sports events."},
  {question: "Do you provide dedicated coordinators for teams and officials?",
   answer:"Yes. Our Team Coordination Services for Sports Events include dedicated on-ground coordinators who act as a single point of contact for teams, referees, scorers, and venue staff to ensure clear communication and controlled execution."},
  {question: "How do you manage team reporting and check-in on match day?",
   answer: "We set up structured reporting desks, team check-in systems, verification lists, and reporting timelines to ensure teams arrive on time, move correctly, and do not disrupt match flow."},
  {question: "Can you handle fixtures, scheduling, and last-minute changes?",
   answer:"Yes. Our Team Coordination Services for Sports Events include fixture communication, real-time schedule updates, buffer planning, and quick coordination for delays, overruns, substitutions, or match sequence changes."},
  {question: "Do you coordinate team movement, warm-up zones, and ground access?",
   answer:"Absolutely. We manage team movement from reporting areas to warm-up zones and playing grounds, ensuring matches start on schedule and the venue remains organised and congestion-free."},
  {question: "Is kit, jersey, and bib distribution included in team coordination?",
   answer:"Yes. We coordinate team-wise kit, jersey, and bib distribution using tracking systems to avoid confusion, mismatches, or disputes—especially useful for corporate sports events and tournaments."},
  {question: "How do you coordinate between teams and referees or officials?",
   answer:"We manage toss reporting, rule briefings, score verification, result submissions, and match transition coordination so teams and officials remain aligned throughout the event."},
   {question: "Do you provide team coordination services for multi-sport or multi-venue events?",
   answer:"Yes. Our Team Coordination Services for Sports Events are designed for scale and include central control desks, sport-wise coordinators, venue-wise reporting plans, and real-time escalation handling."},
   {question: "Which locations do you cover for team coordination services?",
   answer:"We provide Team Coordination Services for Sports Events across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida, and the entire Delhi NCR region. Outstation support is available based on event scale and logistics."}
];

export default function sportseventpage() {
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
                { text: "Team Coordination & Management", highlight: true },
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
              <span className="block">Sports Team</span>
              <span className="block text-[#1675b9]">Coordination & Management</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Sports Event Team Coordination Services for Corporate Events</h2>

            <p className="mt-10">
             Whether it's a corporate sports day, interschool tournament, intercollegiate championship, league match, marathon support event, or multi-team sports festival, we at Event-Management-Delhi.com offer Team Coordination Services for Sports Events that keep your match day organized, disciplined, and on schedule. Coordination forms the foundation of performance when numerous teams, coaches, officials, and venues come together. Clear communication, controlled movement, prompt reporting, and seamless on-ground operations are all areas in which our Team Coordination Services for Sports Events are valuable.
            </p>
            <p className="mt-5">
             We don't operate like a typical "sports event vendor." We function similarly to your operations partner. Registration, team briefings, reporting time control, kit distribution, fixtures and match flow, ground entry/exit, dressing room handling, and continuous coordination with referees, scorers, and venue management are all behind-the-scenes tasks that our team handles and that participants never want to deal with. Your event will function like a system rather than a fight when you use our Team Coordination Services for Sports Events.
              </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “Great sports events are remembered for the game—but they succeed because of coordination. At Event-Management-Delhi.com, our Team Coordination Services for Sports Events are built to bring order, clarity, and discipline to match days involving multiple teams and stakeholders. We handle communication, reporting timelines, team movement, and on-ground coordination so every participant knows where to be and when. From registrations and briefings to referee coordination and venue flow, our team works silently in the background to keep operations running smoothly. The result is a sports event that feels structured, calm, and professionally managed—without confusion or delays.”
              </p>
            </div>
             <p className="mt-10">
                Our sports event team coordination services are intended to clear up any uncertainty and ease the burden on both players and organizers. In order to make sure that teams, officials, and ground crew all know where to go and when, we designate specialized coordinators who serve as a single point of contact.
            </p>
          </div>
        </div>
        </section>


          <section className="ml-8 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 gap-x-20 gap-y-5 md:grid-cols-2">

      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Team Coordination Services for Sports Events: What We Handle End-to-End
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Our Team Coordination Services for Sports Events are designed for organisers who want predictable execution, professional control, and smooth on-ground operations. We plan, coordinate, and manage teams from pre-event communication to the final ceremony, ensuring clarity at every stage. Our team handles reporting systems, movement planning, and match-day coordination so organisers don’t have to manage operational pressure. The service can be booked as a standalone coordination package or combined with complete <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/best-sports-event-management-company-with-complete-setup">sports event management</a>, including venue handling, production, branding, manpower deployment, announcements, and overall event control.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            1) Team Onboarding, Registration & Data Management
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
          Before the first whistle, the system must be clean. Our Team Coordination <a className="text-[red]" href="https://www.hire4event.com/service/sports">Services for Sports Events</a> include structured data collection and team onboarding so you don’t face last-minute confusion.<br/><strong>We manage:</strong>
        </p>  
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Team registration formats (online/offline)</li>
            <li>Player lists, jersey sizes, and team details</li>
            <li>Coach/manager contact database</li>
            <li>Document requirements (as applicable)</li>
            <li>Consent and participation declarations (if required)</li>
            <li>Last date reminders and follow-up calls/messages</li>
            <li>Final team confirmation and reporting instructions</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This step alone saves organisers hours of chasing.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          2) Fixtures, Scheduling & Team-Wise Communication
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Sports events often fail because teams don’t know where to report, when to report, and what happens next. Our Team Coordination Services for Sports Events solve this with a tight communication system.<br/><strong>We handle:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Fixtures distribution and time-slot sharing</li>
            <li>Team reporting times and assembly points</li>
            <li>Ground allocation if multiple grounds/courts are used</li>
            <li>Match sequence updates (if timings shift)</li>
            <li>Communication to coaches/managers in real time</li>
            <li>Buffer planning for delays and overruns</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Our coordination team ensures everyone is informed, and the schedule stays in control.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
            3) Reporting Desk, Team Check-In & Verification
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          On event day, the entry system needs to be fast and disciplined. With Team Coordination Services for Sports Events, we set up a proper reporting mechanism that keeps the venue organised.<br/><strong>We provide:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
<li>Team reporting desk setup (signage + staff)</li>
<li>Check-in lists and verification support</li>
<li>Wristbands/badges distribution (if required)</li>
<li>Kit handover acknowledgment</li>
<li>Guidance staff for movement to warm-up zones</li>
<li>Escalation handling for late reporting and missing players</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This ensures no team "wanders" or blocks the event flow.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          4) Ground Movement, Warm-Up Zones & Match Readiness
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         Teams need to reach the right place at the right time. Our Team Coordination Services for Sports Events include movement coordination so matches start on schedule.<br/><strong>We coordinate:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Warm-up area allocation</li>
            <li>Movement from reporting to ground/court</li>
            <li>Match call announcements and next-match alerts</li>
            <li>Substitution rules reminders (as applicable)</li>
            <li>Coach briefings and timekeeping support</li>
            <li>Team holding area management for back-to-back matches</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Result: the ground stays active, the event stays on time.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         5) Team Kit, Bibs, Jerseys & Essentials Coordination
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          If you're <a className="text-[red]" href="https://www.hire4event.com/sports-events">organising a corporate sports event</a> or tournament, kit distribution can become chaos. Our Team Coordination Services for Sports Events keep kit allocation clean, counted, and trackable.<br/><strong>We manage:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Jersey/bib distribution by team</li>
            <li>Size management and exchange tracking</li>
            <li>Team-wise kit checklist and handover sheet</li>
            <li>Captain/manager-based collection system</li>
            <li>Returnable item tracking (if applicable)</li>
            <li>Emergency essentials coordination (ice packs, towels, tape—if arranged) </li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This reduces disputes and avoids "we didn't get our kit" situations.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         6) Referee, Scorer & Official Coordination With Teams
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A sports event needs alignment between teams and officials. Our Team Coordination Services for Sports Events create that alignment.<br/><strong>We coordinate:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Match reporting time for referees and officials</li>
            <li>Team briefing format (rules, fouls, timeouts)</li>
            <li>Toss coordination and captain reporting</li>
            <li>Score submission and verification system</li>
            <li>Dispute handling support (only coordination, not judgment)</li>
            <li>Match result announcements and next-match intimation</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         It keeps the event professional, fair, and under control.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         7) On-Ground Discipline, Crowd Control & Team Guidance
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Sports events can get intense. Emotions rise. That's normal. But discipline must stay intact. Our Team Coordination Services for Sports Events include trained staff who guide teams politely but firmly, keeping movement and behaviour within event rules.<br/><strong>We manage:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Entry/exit discipline around playing area</li>
            <li>Team seating and dugout management (where relevant)</li>
            <li>Coach movement control (within permitted zone)</li>
            <li>Crowd/parent/staff guidance (for school events)</li>
            <li>Match-to-match transition control</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Your event feels organised, not chaotic.
        </p>
      </div>

      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         8) Multi-Venue & Multi-Sport Coordination
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          If your sports event has multiple sports (cricket + football + badminton + athletics) or multiple locations, coordination becomes a full operations job. Our Team Coordination Services for Sports Events are built for scale.<br/><strong>We provide:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Sport-wise coordination managers</li>
            <li>Venue-wise reporting and movement plans</li>
            <li>Central control desk for updates and escalations</li>
            <li>Runner staff for quick communication</li>
            <li>Consolidated schedule tracking and real-time adjustments</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This is especially useful for corporate sports days and annual sports meets.  
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            Team Coordination Services for Sports Events We Provide For (Use Cases)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We provide Team Coordination Services for Sports Events across formats and organiser types. If your event involves teams, fixtures, and reporting—this service fits.<br/><strong>We commonly support:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li><a className="text-[red]" href="https://www.hire4event.com/service/sports">Corporate sports day events</a></li>
            <li>School tournaments and annual sports day</li>
            <li>Resident welfare sports events (RWA)</li>
            <li>Government department sports meets</li>
            <li>Sports festivals with multiple games</li>
            <li>Invitational tournaments and friendly matches</li>
        </div>
      </div>
      </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/sports-event-team-coordination.jpg"
              alt="Sports Event Team Coordination & Management"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="text-center">Sports Event Team Coordination & Management</p>
          </div>

      {/* Section 13 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
             Our Coordination Style: Professional, Structured, Brand-Safe
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We provide Team Coordination Services for Sports Events in a way that reflects positively on the organiser and the brand behind the event. Our coordination style is calm, structured, and respectful, ensuring that teams, officials, and staff feel guided rather than controlled. We focus on clarity, discipline, and predictability, so everyone on the ground knows what to do and when to do it.
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Clear instructions, not shouting</li>
            <li>Disciplined reporting, not last-minute panic</li>
            <li>Polite handling, not rude staff</li>
            <li>Structured updates, not random calls</li>
            <li>Real-time control, not “we’ll see what happens”</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
             Our coordinators are briefed on event rules, brand tone, and audience sensitivity before the event begins. This ensures consistent communication, better cooperation from teams, and smoother match transitions. When teams feel guided properly, they cooperate better, matches run smoother, officials stay focused, and your sports event maintains a premium, well-managed appearance throughout the day.
        </p>
      </div>

      {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Deliverables Included in Team Coordination Services for Sports Events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          When you book our Team Coordination Services for Sports Events, you get clear deliverables—not vague promises. Depending on the event size, we assign staff and set systems.<br/><strong>Typical deliverables include:</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Team database management</li>
            <li>Fixtures distribution support</li>
            <li>Reporting and check-in desk management</li>
            <li>Team movement plan and warm-up coordination</li>
            <li>Kit distribution coordination (if needed)</li>
            <li>Coordination with referees, scorers, and venue</li>
            <li>Match transition management</li>
            <li>Coordination support for results compilation</li>
            <li>On-ground issue handling and escalation desk</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
           This is coordination you can rely on, not "just manpower."
        </p>
      </div>

      {/* Section 15*/}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          What Makes Our Team Coordination Services for Sports Events Different?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Most organisers face the same issues every time: late teams, confused reporting points, fixture miscommunication, kit mismatch, arguments near the ground, and schedule delays. Our job is to prevent these issues before they happen.
        </p>
        <h2 className="mt-3 mb-1 text-[21px] font-semibold text-[#202020]">
          Here’s what makes our Team Coordination Services for Sports Events different:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li><strong>Dedicated Team Captains Communication System:</strong> We coordinate through team captains/managers so messages stay controlled and accurate.</li>
            <li><strong>On-Ground Control Desk:</strong> We create a central coordination point for match updates, announcements, and escalation.</li>
            <li><strong>Match Readiness Tracking:</strong> We track which teams are ready, which are in warm-up, and who is next—so the event flow stays active.</li>
            <li><strong>Backup Planning:</strong> If a match runs late, we re-align reporting and call times quickly to reduce chain delays.</li>
            <li><strong>Professional Staff Briefing:</strong> Our coordinators are briefed about event rules and your brand tone—so they behave professionally on-ground.</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         This is why clients trust our Team Coordination Services for <a className="text-[red]" href="https://www.hire4event.com/sports-events">Sports Events for corporate</a> and institutional events.
        </p>
      </div>

      {/* Section 16 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           Location Coverage: Delhi NCR & Beyond
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We provide Team Coordination Services for Sports Events across:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Delhi</li>
            <li>Noida</li>
            <li>Gurgaon</li>
            <li>Faridabad</li>
            <li>Ghaziabad</li>
            <li>Greater Noida</li>
            <li>Nearby NCR areas</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            If your sports event is outside NCR, we can support depending on event scale, dates, and logistics.
        </p>
      </div>

      {/* Section 17 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           Add-On Support (Optional With Team Coordination)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Many organisers book Team Coordination Services for Sports Events along with add-ons to make the event fully managed. If needed, we can also arrange:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Sports event ground setup coordination</li>
            <li>Announcer/anchor and commentary support</li>
            <li>Stage and prize distribution ceremony setup</li>
            <li>Branding and signage around the venue</li>
            <li>Medal/trophy arrangement support</li>
            <li>Medical desk coordination (with partner vendors)</li>
            <li>Refreshments and water station coordination</li>
            <li>Photography/videography coordination</li>
            <li>Volunteer management and duty allocation</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
           You can keep the scope simple or go full-scale—our system adapts.
        </p>
      </div>

      {/* Section 18 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
           Who Should Book Team Coordination Services for Sports Events?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Book our Team Coordination Services for Sports Events if you want:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Strict schedule adherence</li>
            <li>Professional reporting and team handling</li>
            <li>Better discipline around the playing area</li>
            <li>Fewer disputes and less confusion</li>
            <li>Improved participant experience</li>
            <li>Smoother coordination with officials and venue</li>
            <li>A corporate-quality execution style</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            If your event has more than 4 teams, or multiple matches in a day, coordination becomes essential—not optional.
        </p>
      </div>
        </div>

              
        <h2 className="mt-3 mb-3 text-[21px] font-semibold text-[#202020]">
         Work With Us: Team Coordination Services for Sports Events That Keep Everything On Track
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         At Event-Management-Delhi.com, our goal is simple: make your sports event run smoothly while you stay stress-free. With our Team Coordination Services for Sports Events, we become the operational backbone of your event—coordinating teams, managing movement, controlling match flow, and ensuring disciplined execution.<br/>If you're planning a tournament, sports day, league match, or <a className="text-[red]" href="https://www.hire4event.com/sports-events">multi-sport event in Delhi NCR</a>, connect with our team and share:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Sport(s) and number of teams</li>
            <li>Event date and venue location</li>
            <li>Match format and time slots</li>
            <li>Reporting and kit requirements</li>
            <li>Any VIP/ceremony plan (if included)</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We'll build a coordination plan that fits your event, your audience, and your brand standards—powered by our professional Team Coordination Services for Sports Events.
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