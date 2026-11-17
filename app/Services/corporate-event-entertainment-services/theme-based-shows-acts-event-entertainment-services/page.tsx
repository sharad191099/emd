"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Theme-Based Shows & Acts services?",
   answer: "Our Theme-Based Shows & Acts services are professionally planned entertainment performances designed around a specific event theme, concept, or brand story. We create and execute immersive shows that align with your event objectives, audience profile, and visual identity as part of our Event Entertainment Services."},
  {question: "Do you provide Theme-Based Shows & Acts for corporate events?",
   answer:"Yes, we provide Theme-Based Shows & Acts for corporate events such as conferences, annual meetings, leadership summits, employee engagement programs, and corporate gala dinners. Our performances are structured to match corporate values while delivering engaging and high-quality entertainment."},
  {question: "Can you design Theme-Based Shows & Acts according to our event concept?",
   answer:"Absolutely. We design custom Theme-Based Shows & Acts based on your event concept, brand messaging, audience expectations, and venue layout. From creative planning to final execution, every performance is tailored to your event’s theme."},
  {question: "Do you offer Theme-Based Shows & Acts for award ceremonies and stage events?",
   answer: "Yes, we provide Theme-Based Shows & Acts for award ceremonies, gala nights, and stage-driven events. Our performances are synchronized with award segments, timelines, and stage flow to ensure a smooth, elegant, and engaging event experience."},
  {question: "Are cultural and traditional Theme-Based Shows & Acts available?",
   answer:"Yes, we offer cultural and traditional Theme-Based Shows & Acts suitable for corporate celebrations, government events, institutional programs, and cultural evenings. We ensure cultural accuracy, professional choreography, and visually rich presentations."},
  {question: "Do your Theme-Based Shows & Acts include costumes, choreography, and styling?",
   answer:"Yes, our Theme-Based Shows & Acts services include complete coordination of costumes, props, choreography, hair, makeup, and performance styling. We ensure visual consistency and polished presentation aligned with the event theme."},
  {question: "Can Theme-Based Shows & Acts be used for product launches and brand events?",
   answer:"Yes, we provide Theme-Based Shows & Acts for product launches and brand events to help tell the product story through performance. Our themed acts support brand messaging, audience engagement, and experiential marketing goals."},
  {question: "Do you handle technical production for Theme-Based Shows & Acts?",
   answer:"Yes, we manage technical production for Theme-Based Shows & Acts, including stage planning, sound, lighting, LED visuals, cue coordination, and rehearsals. Our team ensures flawless synchronization between performers and technical execution."},
   {question: "Do you provide Theme-Based Shows & Acts for large public events?",
   answer:"Yes, we offer large-format Theme-Based Shows & Acts for public events, festivals, college events, city celebrations, and brand activations. Our performers are experienced in handling high-energy audiences and large-scale stages."},
   {question: "Do you provide Theme-Based Shows & Acts services across India?",
   answer:"Yes, we provide Theme-Based Shows & Acts services across Delhi NCR and Pan India, including Mumbai, Bangalore, Pune, Hyderabad, Jaipur, Chandigarh, and other major cities. We ensure consistent quality and professional execution across locations."}
];

export default function themeshoweventpage() {
   const [openIndex, setOpenIndex] = useState(null);
   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Theme-Based ", highlight: true},
                { text: "Shows & Acts Services", },
              ]}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/Services" },
                {label: "Corporate Event Entertainment Services"}
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
              <span className="block">Theme-Based</span>
              <span className="block text-[#1675b9]">Event Planner</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Professional Anchors, Emcees & Hosts Services Under Event Entertainment Services</h2>

            <p className="mt-10">
              Theme-based entertainment gives an event more meaning, depth, and visual flow. When performances fit with a clear idea or story, they turn regular shows into experiences that audiences will remember. Theme-Based Shows & Acts Services help keep creativity in check by making sure that every performance fits with the event's story, brand identity, and audience expectations, instead of just being entertainment on its own.
            </p>
            <p className="mt-5">
                Theme-Based Shows & Acts Services for Immersive Event Entertainment Experiences are meant to bring together performance, design, and storytelling into one experience. These services focus on carefully chosen ideas, artists, choreography, costumes, and technical synchronization to make moments that are both visually interesting and emotionally powerful. Theme-driven performances make events run more smoothly and reinforce their purpose, whether they are corporate galas, award ceremonies, product launches, or public events.
            </p>
            <p className="mt-5">
                We take care of Theme-Based Shows & Acts from start to finish as part of our Event Entertainment Services. This includes coming up with ideas and putting them into action live. Everything is carefully planned, from the creative direction to the coordination of the artists to the production needs to the management of the show on the ground. This disciplined approach makes sure that everything is consistent, high-quality, and dependable, so performances can make the event better without getting in the way of schedules or operational control.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                  “Theme-Based Shows & Acts Services transform events into immersive experiences by aligning performance with concept, visual design, and storytelling. Through structured creative planning, professional execution, and precise coordination, themed entertainment enhances audience engagement and strengthens brand perception. When managed by experienced event professionals, theme-based performances become a powerful narrative tool that defines the overall event experience.”
              </p>
            </div>
          </div>
        </div>
        </section>


          <section className="ml-8 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">

      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Planning and Carrying Out End-to-End Theme-Based Shows and Acts
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Clients who choose us for Theme-Based Shows & Acts get full ownership and professional management from the idea stage to the final performance. Our Theme-Based Shows and Acts Services Include:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Knowing the goals of the event and the theme direction</li>
            <li>Coming up with ideas and planning creatively</li>
            <li>Choosing artists and acts based on the theme</li>
            <li>Planning the costumes, choreography, and performance</li>
            <li>Stage synchronization and technical production</li>
            <li>Running and overseeing the show on the ground</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This end-to-end method makes sure that your Event Entertainment Services stay consistent, look good, and are delivered in a professional way.   
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Corporate Theme-Based Shows and Acts for Events That Are All About the Brand
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
            Corporate events need entertainment that is fun and fits with the company's values. Our Theme-Based Shows & Acts services for business events are meant to make the event better without taking away from the message. We Provide Entertainment Based on Themes For:
        </p>   
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Days off for the whole company</li>
            <li>Conferences and summits for leaders</li>
            <li>Events to get employees involved</li>
            <li>Celebrations for the brand's anniversary</li>
            <li>Gala dinners for businesses</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Every performance of Theme-Based Shows & Acts is meant to show professionalism, creativity, and consistency with the brand.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Themed Shows and Acts for Award Ceremonies and Stage-Driven Events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Structured entertainment that fits perfectly between segments is needed for award nights. Our Theme-Based Shows & Acts services for award ceremonies make sure that everything goes smoothly, that the timelines are followed, and that the shows look great. We Put Together Acts That:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Go along with award segments</li>
            <li>Keep the audience's energy up</li>
            <li>Help the event's reputation</li>
            <li>Make the stage look better</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            These theme-based acts keep the ceremony's formal tone while adding excitement.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Shows and Acts Based on Cultural Themes for Both Traditional and Modern Events
         </h2>
         <p className="text-base leading-[1.5] text-gray-900">
            Performing cultural stories adds emotional depth to events. Our Theme-Based Shows & Acts services include performances based on different cultures that are meant for both traditional and modern audiences. Good For:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Evenings of culture</li>
            <li>Corporate parties for the holidays</li>
            <li>Events for the government and institutions</li>
            <li>Events based on a place or its history</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We make sure that the performance is culturally accurate, visually rich, and respectful at all times.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Shows and Acts Based on Concepts and Themes for Experiential Events
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
            Some events need more than just the stage for entertainment. Our Theme-Based Shows & Acts services include performances that are based on a theme and involve the audience and the setting. These Are Great For:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Brand events that people can take part in</li>
            <li>Launches of high-end goods</li>
            <li>Openings of trade shows and exhibitions</li>
            <li>Private events for the wealthy</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Theme-based shows and acts make for memorable experiences that guests will remember long after the event is over.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Costumes, Hair and Makeup, and Dance for Themed Shows and Acts
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          For theme-based entertainment, visual consistency is very important. We offer professional coordination of costumes, styling, and choreography for our Theme-Based Shows & Acts services. We Take Care Of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Costumes and props that fit the theme</li>
            <li>Matching colors and making things look good together</li>
            <li>Choreographed dances that went with the music</li>
            <li>Practice and improve the performance</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes sure that the presentation is polished and of high quality.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Technical Help with Theme-Based Shows and Acts
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          The quality of the production has a big effect on the performance. Strong technical execution backs up our Theme-Based Shows & Acts services. We Work Together:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Layout of the stage and performance areas</li>
            <li>Sound and lighting that are professional</li>
            <li>LED graphics and visuals that fit the theme</li>
            <li>Managing the flow of a show based on cues</li>
            <li>Practice sessions with technical teams</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This integration makes sure that every act has the most visual and emotional effect possible.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
           Theme-Based Shows and Acts for Brand Events and Product Launches
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          To launch a product, you need to tell a story through experience. Our Theme-Based Shows & Acts services for brand and product events help you show off your products in a fun and interesting way. We Plan Shows That:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Help tell the story of the product</li>
            <li>Be in line with the brand's message</li>
            <li>Get people excited and ready for what's to come</li>
            <li>Get the audience more involved</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          These performances are a great addition to your Event Entertainment Services strategy.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Big Theme-Based Shows and Performances for Public and Live Events
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Theme-based entertainment needs to be powerful and well-planned for big crowds. Our Theme-Based Shows & Acts services include performances in large formats that are good for public events. Best For:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Concerts and festivals</li>
            <li>Celebrations at the city level</li>
            <li>Events at colleges and universities</li>
            <li>Activations of public brands</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          We make sure that the performers are present, connect with the audience, and follow the rules.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Managing Performances and Coordinating Shows on the Ground
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Live shows require accuracy. Our Theme-Based Shows & Acts team takes care of every detail to make sure everything goes smoothly. We Take Care Of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Setting up the performers and making calls</li>
            <li>Managing the backstage and green room</li>
            <li>Make sure the lighting and sound are in sync with the cue</li>
            <li>Watching the show in real time</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes sure that your Theme-Based Shows and Acts go off without a hitch from start to finish.
        </p>
      </div>
      </div>

      
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Ability to Carry Out Theme-Based Shows and Acts Across India
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We are based in Delhi NCR and offer Theme-Based Shows & Acts services all over India. This lets our clients hold events with the same high quality all over the country. We Cover the Following Areas of Execution: Delhi, Noida, Gurgaon, Mumbai, Bangalore, Pune, Hyderabad, Jaipur, Chandigarh, and other big cities. This lets you plan from one place and carry it out reliably on the ground.
        </p>
      </div>


       {/* Image */}
   
      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/theme-based-shows-acts-event-entertainment-services.jpg"
              alt="Theme-Based Shows & Acts Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="mb-3 text-center">Theme-Based Shows & Acts Services</p>
          </div>



        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Why Choose Us for Theme-Based Shows and Acts as Part of Our Event Entertainment Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We know how to balance creativity and control, which is why our clients trust us. What Makes Our Theme-Based Shows & Acts Services Dependable:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Good planning for creativity</li>
            <li>Coordinators and performers who are professionals</li>
            <li>Support for high-quality production</li>
            <li>Clear communication and action</li>
            <li>Proven experience with different types of events</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            We are a trusted provider of Event Entertainment Services, and we put on shows that add value to your brand.
        </p>
      </div>


      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Integration with Full Event Entertainment Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Our Theme-Based Shows & Acts services work perfectly with:
         </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Hosts, emcees, and anchors</li>
            <li>Bands and famous people who perform live</li>
            <li>Ceremonies for awards and gala nights</li>
            <li>Planning corporate events</li>
            <li>Shows and launches of new products</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This makes sure that all of the entertainment elements are planned and coordinated in the same way.
        </p>
      </div>
    

        {/* Section 9 */}
    <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Industries We Work With to Provide Theme-Based Shows and Acts
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            We provide Theme-Based Shows & Acts services for:
         </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Businesses and corporations</li>
            <li>Agencies that do marketing and branding</li>
            <li>Companies that build homes and roads</li>
            <li>Schools and colleges</li>
            <li>Events for the government and the public sector</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            Every performance is tailored to meet the needs of the industry and the audience.
        </p>
    </div>
      
    

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
           Dedication to Creativity, Discipline, and High-Quality Work
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            At event-management-delhi.com, we think that themed entertainment should be beautiful and work perfectly. We plan our Theme-Based Shows & Acts with discipline, practice, and real-time coordination. Every Event Benefits From:  
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A clear creative path</li>
            <li>Professional writing</li>
            <li>Teams that work together full-time</li>
            <li>Checks on the quality of performance</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This makes sure that our Event Entertainment Services always give reliable results.
        </p>
      </div>


      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
           Shows and Acts Based on Themes That Turn Events Into Experiences
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Themes make entertainment interesting. Our Theme-Based Shows & Acts services turn venues into experiences and performances into ways to tell stories. We don't just put on shows; we bring your event's theme to life through performance.
        </p>
      </div>


      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Book Shows and Acts with a Theme for Your Next Event
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our Theme-Based Shows & Acts services under Event Entertainment Services will give you creativity, control, and an unforgettable impact for your corporate event, award ceremony, product launch, or big celebration.
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