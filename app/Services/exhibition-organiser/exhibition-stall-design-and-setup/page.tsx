"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What does an exhibition stall design and setup service include?",
   answer: "Exhibition stall design and setup services include concept planning, 2D and 3D stall design, fabrication, branding and printing, lighting, electrical setup, furniture, on-site installation, dismantling, and post-event cleanup. Everything is managed end to end."},
  {question: "Do you provide custom exhibition stall designs?",
   answer:"Yes. We create fully custom exhibition stall designs based on your brand identity, stall size, exhibition guidelines, and marketing objectives. Each design is planned to maximize visibility, visitor movement, and engagement."},
  {question: "Do you offer both octanorm and wooden exhibition stalls?",
   answer:"Yes. We design and build octanorm stalls, custom wooden stalls, modular stalls, and hybrid stalls. We help you choose the right option based on budget, space, and branding requirements."},
  {question: "Can you handle stall fabrication and installation in a short setup window?",
   answer: "Yes. Our experienced on-ground team is trained to work within strict exhibition timelines. We ensure timely delivery, fast installation, and smooth handover before the exhibition opens."},
  {question: "Do you manage exhibition stall branding and printing?",
   answer:"Yes. We handle complete stall branding, including fascia branding, backdrops, vinyl pasting, sunboard panels, LED logos, 3D signage, posters, banners, and digital screen branding as per your brand guidelines."},
  {question: "Do you provide lighting and electrical setup for exhibition stalls?",
   answer:"Yes. We manage all electrical and lighting requirements, including spotlights, backlit panels, LED strips, ambient lighting, power points, and safe cable management as per venue rules."},
  {question: "Can you design stalls for different stall types like island or corner stalls?",
   answer:"Yes. We design and execute island stalls, corner stalls, peninsula stalls, inline stalls, and double-decker stalls (subject to venue approval) to suit your exhibition layout and traffic flow."},
  {question: "Which industries do you work with for exhibition stalls?",
   answer:"We work with IT, FMCG, automotive, real estate, healthcare, education, manufacturing, fashion, lifestyle, food & beverage, startups, and D2C brands across trade shows, expos, and corporate exhibitions."},
   {question: "Do you provide exhibition stall services across Delhi NCR?",
   answer:"Yes. We provide exhibition stall design and setup services in Delhi, Noida, Gurgaon, Greater Noida, Faridabad, and Ghaziabad. PAN India execution is also available based on project scope."},
   {question: "How much does an exhibition stall design and setup cost?",
   answer:"The cost depends on stall size, stall type, design complexity, branding level, lighting, furniture, AV requirements, and venue regulations. We offer budget-friendly as well as premium stall solutions with transparent pricing."}
];

export default function Exhibitionstallpage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Exhibition Stall " },
                { text: "Design & Setup Services", highlight: true },
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
              <span className="block">Corporate Meetup</span>
              <span className="block text-[#1675b9]">ORGANISER</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Exhibition Stall Design & Setup Services in Delhi NCR</h2>

            <p className="mt-10">
              At an exhibition, the first thing people see about your brand is your stall. Before they talk to your team, people will see your booth. They look at how it looks, how it is lit, how it is set up, how it is branded, how it shows off products, and how professional it is. A well-designed stall attracts people, gets them interested, and turns them into real business leads. How clear and eye-catching a brand's message is in a crowded exhibition space can make or break how well it is remembered and how visitors react.
            </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                   "An exhibition stall is more than just a place to stand; it's a live brand statement." The way you set up your store, the lighting, the graphics, and even where you put your products all tell customers what kind of brand you are. A well-designed stall gets people to look at it, talk to each other, and trust you in seconds, making it a powerful business tool instead of just a display.”
              </p>
            </div>
             <p className="mt-5">
                That's why businesses hire a pro to help them plan and build their exhibition booths. Exhibitions need more than just creativity; they also need careful planning, technical accuracy, and perfect execution. <a className="text-[red]" href="https://www.hire4event.com/blogs/category/exhibition-seminars/stall-design-fabrication/">Professional stall design</a> makes sure that your brand stands out and that visitors and exhibitors have a good time. This means using space wisely, making sure people can move around easily, and following the rules of the exhibition.
            </p>
             <p className="mt-5">
                At Event-Management-Delhi.com, we provide full Exhibition Stall Design and Setup Services for brands that are going to trade shows, expos, fairs, and corporate exhibitions. We can help you with everything from coming up with ideas and designing a 3D stall to building it, branding it, lighting it, setting it up on site, and taking it down. We know how long exhibits last, what the rules are for venues, and what your branding goals are. This makes sure that every stall looks good, is built well, and meets your marketing goals in all of Delhi NCR and PAN India
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
         Why the way your exhibition stall looks is important for your business
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         You can't just be at an exhibition; you have to stand out. There are hundreds of stalls trying to get people's attention, so your stall needs to quickly get your brand message across and bring in the right people.<br/>Here are some ways a professionally run stall can help you:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Get more people to walk in and out of your store</li>
            <li>Build a strong brand presence</li>
            <li>Show off your products and services well</li>
            <li>Get visitors to spend more time with you</li>
            <li>Get more qualified leads</li>
            <li>Build trust with distributors, dealers, and partners</li>
            <li>Make a strong visual identity for photos and media</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         Our Exhibition Stall Design & Setup Services will make sure that your stall looks great and works even better.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            What We Do for Setting Up and <a className="text-[red]" href="https://www.hire4event.com/exhibition-stall-fabrication">Designing Exhibition Stalls</a>
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
          Not only do we make things, but we also help you plan and build your stall from start to finish. We help with planning, designing, making, moving, setting up, and providing on-the-ground support for <a className="text-[red]" href="https://www.hire4event.com/exhibition-stall-fabrication">exhibition stalls</a>.
        </p>   
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
            1) Custom Stall Design (3D and Planning of the Idea)
            </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Every brand needs a unique booth experience. We come up with ideas for your stall based on your goals, the size of your booth, the people who will be there, and the rules for the show.<br/><strong>Here are some ways we can help with the design:</strong>
        </p>  
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planning the layout in 2D (how to use the space)</li>
            <li>3D design render (a preview that looks real)</li>
            <li>Putting together the brand's colors, theme, and messages</li>
            <li>Places to show off goods and do demos</li>
            <li>Planning the meeting area (both public and private)</li>
            <li>Planning the storage area</li>
            <li>Planning the flow of visitors</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
         Our Exhibition Stall Design & Setup Services will help you stand out in the <a className="text-[red]" href="https://www.hire4event.com/book-venue-for-corporate-event-and-conferences?category=exhibition-center&location_city=&search_venue=Search+Venue"></a>exhibition hall, whether you want a modern, bold look or a clean, professional setup.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          2) Making and putting together stalls (done in-house)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Once the design is approved, our team starts building with strong finishes and high-quality materials. We pay attention to how long things last, how clean the edges are, how neat the branding is, and how high-end the look is.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Here are the different ways we can make things:
        </h2>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Wooden stalls (made to order with a specific structure and finish)</li>
            <li>Octanorm stalls (standard modular setups)</li>
            <li>Hybrid stalls (a mix of octanorm and custom branding elements)</li>
            <li>Two-story stalls (if you have permission)</li>
            <li>Signs and panels with backlighting that look good</li>
            <li>Counter units, shelves, and product stands</li>
            <li><a className="text-[red]" href="https://www.germanhangerdelhi.com/warehouse-tents-on-rent">Storage and pantry areas</a> (as per venue rules)</li>
        </div>
         <p className="mt-5 text-base leading-[1.65] text-gray-900">
         Our Exhibition Stall Design & Setup Services are meant to help you during the days of the exhibition. They are strong, safe, and professional.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
        3) Setting up and putting up stalls on the site
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          Exhibitions have strict deadlines. There aren't a lot of hours to set up. Our skilled team on the ground makes sure that installation goes smoothly and on time, with no last-minute stress.
        </p>
        <h2 className="mt-5 mb-3 text-xl font-semibold text-[#202020]">
         We handle:</h2>
        <div className="mt-2 pl-5 text-base leading-[1.65] text-gray-900">
            <li>Getting materials in and coordinating logistics</li>
            <li>Putting things together and finishing them on site</li>
            <li>Setting up electrical and lighting</li>
            <li>Placing and touching up branding</li>
            <li>Installing carpets and floors</li>
            <li>Setting up product displays and stands</li>
            <li>Doing a final safety check and handing over the project</li>
        </div>
        <p className="mt-7 text-base leading-[1.65] text-gray-900">
        Before people arrive, your stall is ready. This is how professional Exhibition Stall Design & Setup Services should work.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          4) Full visual identity for stalls, including branding and printing
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         A stall should make it clear who you are and what you have to offer in just a few seconds. We offer full branding and printing services as part of our Exhibition Stall Design & Setup Services.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Branding options include:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Backdrop branding and fascia</li>
            <li>Signs with the company's logo (acrylic, LED, 3D letters)</li>
            <li>Pasting vinyl, printing on foam board, and sunboard</li>
            <li>Panels, posters, and banners for products and groups</li>
            <li>Stand-up displays and roll-ups for advertising</li>
            <li>Signs to show the way, offer boards, and QR lead boards</li>
            <li>Branding on TV screens for presentations</li>
        </div>
        <p className="mt-5 text-base leading-[1.65] text-gray-900">
          We make sure that your branding is clear, sharp, and follows the rules you set for it.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         5) Help with lighting, electricity, and audio-visuals in the booth
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Lighting can make a normal booth feel like a fancy one. As part of our Exhibition Stall Design & Setup Services, we can set up basic AV equipment and smart lighting if you need them.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
         We set up:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Spotlights for product displays</li>
            <li>Focus lighting for demo areas</li>
            <li>Backlit branding panels</li>
            <li>LED strips and high-end ambient lighting</li>
            <li>Power points, extension boards, and cable management</li>
            <li>Screens for TVs, display units, and speakers (optional)</li>
        </div>
        <p className="mt-5 text-base leading-[1.65] text-gray-900">
          When there is good lighting, it is easier for people to see products, pay attention, and take pictures.
        </p>
      </div>
      </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/exhibition-stall-design-and-setup.jpg"
              alt="Exhibition Stall Design & Setup Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="text-center">Exhibition Stall Design & Setup Services</p>
          </div>

      {/* Section 7 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         6) Experience Zones, Demo Counters, and Displays of Products
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Your booth should help the person by showing them the product, talking about its benefits, and starting a conversation. We create areas for functional experiences that have:
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Experience & Display Services
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Demo and sampling counters</li>
            <li>Shelves and wall displays for products</li>
            <li>Glass displays for expensive items</li>
            <li>Catalog stands and brochure holders</li>
            <li>Tablet and lead capture stations</li>
            <li>Meeting tables, lounge seating, and chairs</li>
            <li>Storage cabinets for gifts and inventory</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Your team will be able to work and talk to each other easily with our Exhibition Stall Design & Setup Services.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         7) Furniture, floors, and decorations for booths at trade shows
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We have booth furniture and finishing touches that match the theme of your stall:
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Furniture & Finishing Options
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Help desks and reception counters</li>
            <li>Chairs, stools, sofas, and meeting tables</li>
            <li>Carpet, vinyl, and raised platforms</li>
            <li>High-quality laminations and paint finishes</li>
            <li>Plants and small decorations (a minimal corporate look)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         A clean, comfortable stall keeps your team busy all day and makes them more likely to join in.
        </p>
      </div>

      {/* Section 9*/}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          8) Putting things back together and cleaning up after the event
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Once the exhibition concludes, timely and organised dismantling is just as important as the setup. Our team ensures a smooth and damage-free wrap-up, strictly following venue timelines and safety norms. We carefully dismantle the stall structure, signage, lighting, and display units to avoid any loss or breakage. All materials are packed systematically, labelled where required, and moved out of the venue without disrupting other exhibitors.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Post-Event Services
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>On-time dismantling as per organiser guidelines</li>
            <li>Safe loading and unloading of stall materials</li>
            <li>Waste collection, cleaning, and proper disposal</li>
            <li>Venue clearance and handover compliance</li>
            <li>Secure transportation and storage support, if required</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
        Our Exhibition Stall Design & Setup Services cover the complete exhibition lifecycle—ensuring your brand experience ends as smoothly as it began.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         We plan and set up all kinds of booths for exhibitions.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Different brands need different kinds of stalls. We can help you plan and build standard or octanorm stalls for your show.
        </p>
        <h2 className="mt-3 mb-3 text-[21px] font-semibold text-[#202020]">
          Cheap, easy to set up, and perfect for small spaces.
        </h2>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li><strong>Wooden stalls made just for you</strong> - Full customization, a high-end look, and great brand visibility.</li>
            <li><strong>Stalls that are modular and hybrid</strong> - The best balance of cost and look is a mix of modular structure and custom parts.</li>
            <li><strong>Stalls on the Island (Open on All Sides)</strong> - Made to get the most people to walk by and recognize the brand.</li>
            <li><strong>Stalls in the Corner (Open on Two Sides)</strong> - A lot of visitors and good visibility.</li>
            <li><strong>Stalls on the Peninsula (Three Sides Open)</strong> - High traffic coverage with brands placed in a controlled way.</li>
            <li><strong>Two levels of stalls</strong> - For big brands that need a meeting room on top (if the venue agrees).</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
        We can help you pick the best type of stall for your booth size and show goals if you need reliable Exhibition Stall Design & Setup Services.
        </p>
      </div>

       {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Industries We Work With
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         We help with <a className="text-[red]" href="https://www.hire4event.com/exhibition-stall-fabrication">exhibition stall projects</a> for a wide range of industries, such as: IT and SaaS companies, FMCG and consumer brands, cars and electric vehicles, real estate and infrastructure, healthcare and pharmaceuticals, education and training, and manufacturing and industrial tools.
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Crafts, fashion, and lifestyle</li>
            <li>Brands of food and drink</li>
            <li>New businesses and brands that sell directly to customers</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
        No matter what kind of business you have, our Exhibition Stall Design & Setup Services will help you get the right people to come.
        </p>
      </div>

       {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Why should you hire Event-Management-Delhi.com to design and set up your exhibition stall?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Exhibitions are time-sensitive, have rules to follow, and are competitive. You need a partner who is fast, reliable, and has done this before.
        </p>
        <h2 className="mt-3 mb-3 text-[21px] font-semibold text-[#202020]">
          Brands pick us for these reasons:
        </h2>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Full design, building, and installation of stalls from start to finish</li>
            <li>Unique 3D designs made just for your brand</li>
            <li>High-quality building and clean finishing</li>
            <li>Strict management of timelines (setup deadlines are met)</li>
            <li>Everything you need for branding, lighting, and furniture in one place</li>
            <li>A full-time project manager and team on-site</li>
            <li>Clear prices and helpful budget options</li>
            <li>Help is available all over Delhi NCR and PAN India.</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
        We make it easy, smooth, and stress-free to find professional services for designing and setting up exhibition stalls.
        </p>
      </div>

       {/* Section 13 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Exhibition Stall Design and Setup Services in the Delhi NCR Region
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         We deliver to all the main business and exhibition areas, including:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Exhibition Stall Design & Setup Services in Delhi</li>
            <li>Exhibition Stall Design & Setup Services in Noida</li>
            <li>Exhibition Stall Design & Setup Services in Gurgaon</li>
            <li>Greater Noida, Faridabad, Ghaziabad</li>
            <li>Help for big convention centers and expo sites all over NCR</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         We can still do PAN India if the exhibition is outside of Delhi NCR, but it depends on the project's scope.
        </p>
      </div>

       {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         How much do services cost to design and build exhibition stalls?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         The price depends on a lot of things, like:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>The size of the stall (in square meters or square feet)</li>
            <li>The type of stall (octanorm, wooden, modular, or hybrid)</li>
            <li>How complicated the design is and how well it is finished</li>
            <li>The type of branding (basic prints vs. premium 3D/LED signage)</li>
            <li>The lighting needs</li>
            <li>The number and quality of the furniture</li>
            <li>The <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/audio-visual-equipment-rental-company-for-events">AV Setup</a> needs (TV/LED screens, etc.)</li>
            <li>Rules for the venue and logistics</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
        We have cheap options for new businesses and expensive ones for big brands. We'll give you the best quote if you tell us how big your stall is and what the exhibition is about.
        </p>
      </div>
        </div>

              
        <h2 className="mt-3 mb-3 text-[21px] font-semibold text-[#202020]">
         Book your exhibition stall now.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         A great stall is a great way to get people to notice your brand and get leads. Don't let your booth at the show look like everyone else's. Choose a team that can plan, meet deadlines, and get things done.<br/>Call Event-Management-Delhi.com right away for reliable, high-quality, and on-time exhibition stall design and setup services in Delhi NCR. We'll help you plan for your next expo.
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