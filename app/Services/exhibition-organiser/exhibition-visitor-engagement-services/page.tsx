"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Visitor Engagement Services for Exhibitions?",
   answer: "Visitor Engagement Services for Exhibitions include planned activities, trained staff, interactive experiences, and lead capture systems designed to attract visitors, increase stall interaction, and convert exhibition footfall into qualified business leads."},
  {question: "Why are Visitor Engagement Services important for exhibitions in Delhi NCR?",
   answer:"Exhibitions in Delhi NCR are highly competitive. Visitor Engagement Services help your brand stand out, increase booth footfall, improve visitor retention, and ensure meaningful conversations instead of random walk-ins."},
  {question: "What types of visitor engagement activities work best at trade shows and expos?",
   answer:"Popular exhibition engagement activities include brand promoters, product demos, interactive games, quizzes, lucky draws, QR-based lead capture, sampling counters, photo booths, and live booth presentations—all designed to drive engagement and leads."},
  {question: "Do Visitor Engagement Services help in lead generation at exhibitions?",
   answer: "Yes. Professional Visitor Engagement Services for Exhibitions focus strongly on lead generation using QR codes, digital forms, badge scanning, structured data capture, and visitor qualification for effective post-event follow-ups."},
  {question: "Can you provide trained promoters and brand ambassadors for exhibition booths?",
   answer:"Absolutely. We provide trained exhibition promoters and brand ambassadors in Delhi NCR who are well-groomed, bilingual (Hindi/English), product-briefed, and experienced in visitor interaction and lead collection."},
  {question: "Are Visitor Engagement Services suitable for small exhibition stalls?",
   answer:"Yes. Visitor Engagement Services can be customized for small stalls, corner booths, and large island stalls. Even compact exhibition booths can generate strong engagement with the right activity mix and lead capture strategy."},
  {question: "Do you manage product demos and live presentations at exhibitions?",
   answer:"Yes. We manage live product demos, presentations, and booth sessions, including mic setup, crowd handling, scheduling, presenter support, and Q&A coordination—while following exhibition hall rules."},
  {question: "Can Visitor Engagement Services be customized for different industries?",
   answer:"Yes. Our Exhibition Visitor Engagement Services are tailored for B2B, D2C, FMCG, industrial, tech, education, healthcare, startup, and corporate brands, based on goals, audience type, and booth size."},
   {question: "Which locations do you cover for exhibition visitor engagement in Delhi NCR?",
   answer:"We provide Visitor Engagement Services for Exhibitions across Delhi, Noida, Gurgaon, Greater Noida, Faridabad, Ghaziabad, Pragati Maidan, Expo Mart, hotels, convention centers, and corporate exhibition venues."},
   {question: "How do Visitor Engagement Services improve ROI at exhibitions?",
   answer:"By increasing footfall quality, encouraging meaningful interaction, capturing structured leads, managing crowd flow, and creating memorable brand experiences, Visitor Engagement Services ensure your exhibition investment delivers measurable business results."}
];

export default function Exhibitionvisitorpage() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Visitor " },
                { text: "Engagement Services for Exhibitions", highlight: true },
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
              <span className="block">Visitor Engagement</span>
              <span className="block text-[#1675b9]">Services</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Visitor Engagement Services for Exhibitions in Delhi NCR</h2>

            <p className="mt-10">
              Exhibitions are crowded. Stalls look similar. Visitors walk fast. And most brands lose attention in the first 5 seconds. That’s why smart exhibitors don’t just “set up a booth”—they plan engagement. If your stall doesn’t spark curiosity, start conversations, and keep visitors involved, you’ll miss leads even with the best stall design.
            </p>
            <p className="mt-5">
              At Event-Management-Delhi.com, we deliver professional Visitor Engagement Services for Exhibitions that help brands attract the right crowd, increase footfall, improve stall interaction, and convert visitors into qualified leads. From interactive activities to trained promoters, lead capture, brand experiences, and on-ground coordination—we build engagement strategies that work in real exhibition conditions.
              </p>
          <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                "Exhibitions aren’t about just being present—they’re about being noticed. With our Visitor Engagement Services for Exhibitions in Delhi NCR, we help brands cut through the noise, pull the right audience to their stalls, and turn quick visits into meaningful interactions. From interactive concepts and trained promoters to smart lead capture and on-ground execution, we ensure your booth stays active, engaging, and result-driven throughout the event.”
              </p>
            </div>
             <p className="mt-10">
                If you’re participating in an expo, <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/corporate-event/trade-shows-event-planner">trade show</a>, or business fair in Delhi, Noida, Gurgaon, or anywhere across Delhi NCR, our Visitor Engagement Services for Exhibitions are designed to make your booth busy, your brand memorable, and your results measurable. We focus on attracting the right audience, not just random footfall, ensuring your team spends time with visitors who matter to your business. With planned engagement, trained manpower, and real-time lead capture, we help turn short booth visits into valuable business conversations that continue even after the exhibition ends.
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
         What kinds of services help people get involved at trade shows?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Exhibitions' Visitor Engagement Services are a group of planned activities, people, and brand experiences that get people to come to your booth, talk to your staff, look at what you have to offer, and give you their contact information so you can follow up.<br/>In short, it's everything that turns "walking visitors" into "interested visitors."<br/>These services transform passive booth traffic into active participation and meaningful business conversations.<br/>They bridge the gap between your brand presence and genuine visitor interaction.<br/>Without effective engagement, even the most attractive booth can fail to convert visitors into qualified leads.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
            Why Brands Use Visitor Engagement Services
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
          Brands use these services to:
        </p>  
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Get more people to visit their booths and stay longer</li>
            <li>Start conversations naturally (without hard-selling)</li>
            <li>Get leads and contacts quickly</li>
            <li>Create buzz and draw crowds</li>
            <li>Help people remember their brand by giving them experiences</li>
            <li>Show people how to use their products and services</li>
            <li>Help with demos and presentations</li>
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          Why the Most Important Thing at Exhibitions Is Getting Visitors to Talk to You
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Many businesses only care about how big and nice their stalls are. The biggest stall doesn't win at exhibitions; the most interesting one does.<br/>A good engagement plan can help you:
        </p>
        <div className="list-square pl-5 text-base leading-[1.65] text-gray-900">
            <li>Stand out from nearby competitors</li>
            <li>Bring in more people to your booth without causing chaos</li>
            <li>Make your product easier to understand</li>
            <li>Get better leads (not random walk-ins)</li>
            <li>Create moments that are worth sharing on social media</li>
            <li>Keep visitors coming all day long</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
         We want to get people involved in a way that feels professional, safe for your brand, and meaningful—not loud or gimmicky.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#202020]">
            What We Offer: Our Exhibition Visitor Engagement Services
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          Our engagement solutions are both complete and modular. You can pick one service or combine a few to create a complete plan for your exhibition engagement.
        </p>
        <h2 className="mt-5 mb-3 text-xl font-semibold text-[#202020]">
           1) Brand Ambassadors and Promoters Who Have Been Trained
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
          Your brand's face is made up of people. With the right pitch and attitude, a trained promoter can get people to come to your event.<br/><strong>We provide:</strong>
        </p>
        <div className="mt-2 pl-5 text-base leading-[1.65] text-gray-900">
            <li>Smart, well-groomed <a className="text-[red]" href="https://www.hire4event.com/service/exhibition">exhibition promoters</a></li>
            <li>Staff who can speak Hindi and English as needed</li>
            <li>Help with product briefings and brand scripts</li>
            <li>Help with gathering leads</li>
            <li>Managing lines for activities and demos</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
        This is one of the best Visitor Engagement Services for Exhibitions because it makes it easy for people to talk to each other and keeps them coming back.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          2) Activity areas and games that people can play (bring in crowds without making noise)
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         People love stalls where they can touch things, especially when it's quick, fun, and rewarding.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Engagement Activities
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Spin the wheel with a brand theme</li>
            <li>Quiz contests based on products</li>
            <li>Sign-ups for lucky draws</li>
            <li>Games on a tablet or screen</li>
            <li>Counters that say "Answer and Win"</li>
            <li>Quick challenge games (safe and good for business)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          All of the activities are meant to get leads in a way that feels natural, not forced. Modern Visitor Engagement Services for Exhibitions should do that.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         3) Getting leads and information (quickly and smartly)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Footfall is useless if you don't collect data. We make systems for capturing leads that make it easy to follow up.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Lead Capture Services
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>QR codes to get leads</li>
            <li>Digital forms on iPads</li>
            <li>Scanning badges (if it's okay)</li>
            <li>Lead forms that you fill out by hand (always have a backup)</li>
            <li>Putting leads into groups (hot, warm, or cold)</li>
            <li>Sharing daily lead reports (optional)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our Exhibition Visitor Engagement Services are all about making connections that can help your business
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         4) Running live presentations and product demos
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          If people need an explanation, demos and live sessions are great ways to get them interested in your product.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Lead Capture Services
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Plan and organize the flows of the demos</li>
            <li>Setting up the microphone and sound system according to the rules of the hall</li>
            <li>Assisting the presenter and keeping order on stage</li>
            <li>Assisting with gathering an audience (without bothering nearby stalls)</li>
            <li>Make schedule boards and demo announcements</li>
            <li>Run a Q&A session led by staff</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Our Visitor Engagement Services for Exhibitions help people understand and trust what you have to offer, whether it's a tech solution, an industrial tool, FMCG sampling, or a service model.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         5) Sampling and experience marketing (let them try it before they buy it)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          One of the fastest ways to get people involved is to sample correctly.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Sampling Services
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Sampling counters and staff</li>
            <li>Controlled distribution (no waste, no crowd mess)</li>
            <li>Product briefings during sampling</li>
            <li>Collecting feedback after sampling</li>
            <li>Combo engagement: a sample, a QR lead form, and an offer card</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Exhibitions that offer this kind of Visitor Engagement Services are great for D2C, food and drink, personal care, and fast-moving consumer goods (FMCG) brands.
        </p>
      </div>

      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         6) Be the emcee or anchor for booth engagement (know how to handle crowds) 
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          A good emcee keeps the crowd interested, makes sure that activities go smoothly, and keeps the energy up at busy stalls.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Emcee & Anchor Services
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Provide an <a className="text-[red]" href="https://www.hire4event.com/artist-booking-agency/host/top-10-event-anchors-and-emcees-to-book-in-delhi-ncr">emcee or anchor for your exhibition</a></li>
            <li>Host activities and make announcements</li>
            <li>Keeping track of who is participating</li>
            <li>Running contests and dealing with winners</li>
            <li>Speaking in a professional way (not like a loud DJ)</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes your Visitor Engagement Services for Exhibitions more fun and organized, especially when things are busy.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         7) Setting up a redemption counter and corporate giveaways
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          People will come if you do giveaways the right way. Random distribution causes crowd rush and bad leads. We set up organized systems for redemption.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Giveaway & Redemption Services
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Plan the giveaway (what works and what doesn't)</li>
            <li>Set up the redemption counter</li>
            <li>Make sure everyone is eligible (quiz, demo, scan, meeting)</li>
            <li>Keep track of stock and distribution</li>
            <li>Make branded carry bags and coupon cards</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes it easier to manage your Visitor Engagement Services for Exhibitions and more focused on conversions.
        </p>
      </div>

      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         8) Photo Booth / Brand Moment Corner (Memories and Social)
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          People like pictures when they come to see. Companies like getting free publicity. We create a safe photo corner for brands that encourages people to share and talk to each other.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Photo & Social Engagement
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>A branded photo wall or a media wall</li>
            <li>An instant photo setup (optional)</li>
            <li>Boards with QR codes and hashtags for social media</li>
            <li>Plan for "take a picture and win" engagement</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This is a modern and very helpful part of Visitor Engagement Services for Exhibitions.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         9) Keeping an eye on the flow of visitors, lines, and crowds
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Engagement shouldn't be a problem. Our team on the ground makes sure that the flow is smooth, so your booth stays professional and comfortable.
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Crowd & Flow Management
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Directing people in and out</li>
            <li>Lining people up</li>
            <li>Keeping track of when things happen</li>
            <li>Putting staff in the right places during busy times</li>
            <li>Being polite while keeping the crowd in line</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          A lot of people don't pay attention to this, but it's one of the most important Visitor Engagement Services for Exhibitions for a high-end brand image.
        </p>
      </div>
      </div>

      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/exhibition-visitor-engagement-services.jpg"
              alt="Exhibition Visitor Engagement Services"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="text-center">Exhibition Visitor Engagement Services</p>
          </div>

      {/* Section 13 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
        A plan for getting people to talk to each other based on the type of booth
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Not every stall needs the same plan. The format of our booth affects how we get people to interact with it:
        </p>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Small Stalls (9 to 18 square meters)
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>One or two promoters</li>
            <li>A QR code to collect leads and a simple game</li>
            <li>A small demo counter</li>
            <li>Giveaways that are controlled</li>
        </div>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
          Corner/Two-Side Open Stalls
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>An anchor and an activity pull from both sides</li>
            <li>Demo scheduling and signage</li>
            <li>A photo corner</li>
            <li>A lead capture desk</li>
        </div>
        <h2 className="mt-5 mb-3 text-[21px] font-semibold text-[#202020]">
           Island/Large Stalls
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Several areas for interaction</li>
            <li>A demo stage with seating and mic management</li>
            <li>A redemption counter with staff rotation</li>
            <li>Premium branding moments with media coverage</li>
        </div>
      </div>

      {/* Section 14 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Who Should Use Exhibition Visitor Engagement Services?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Exhibition visitor engagement services are ideal for businesses that want more than just footfall at an expo. These services are designed for brands that want meaningful interactions, qualified leads, and better return on their exhibition investment.<br/>Our services are especially suitable for:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Brands looking to generate high-quality leads and customer data</li>
            <li>Companies launching new products or services at trade shows and exhibitions</li>
            <li>B2B businesses aiming to connect with dealers, distributors, and channel partners</li>
            <li>D2C brands seeking direct customer interaction and brand awareness</li>
            <li>Startups wanting to attract investors, collaborators, and strategic partners</li>
            <li>Industrial and manufacturing companies showcasing machinery, tools, and technical solutions</li>
            <li>Education, healthcare, and service-based brands focused on awareness and on-the-spot registrations</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         If your goal is to attract visitors, keep them engaged at your stall, and convert conversations into leads, exhibition visitor engagement services play a critical role. They help transform your exhibition presence into a focused marketing and sales opportunity rather than just a display space.
        </p>
      </div>

      {/* Section 15*/}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
          Why should you pick Event-Management-Delhi.com?
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We know how it feels to be at an exhibition: loud halls, not a lot of space, strict rules, and a lot of competition. Engagement has to be smart, fast, and in charge.
        </p>
        <h2 className="mt-5 mb-1 text-[21px] font-semibold text-[#202020]">
           Brands choose us for Visitor Engagement Services for Exhibitions because we offer:
        </h2>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Trained promoters and professional staff</li>
            <li>Activities that are fun and fit the brand's tone</li>
            <li>Planning for lead capture (not random walk-ins)</li>
            <li>Smooth booth coordination and discipline</li>
            <li>Full support throughout Delhi NCR</li>
            <li>Clear reports and results that can be measured (optional)</li>
            <li>Engagement packages that can be changed to fit different budgets</li>
        </div>
      </div>

      {/* Section 16 */}
      <div>
        <h2 className="mb-3 text-[21px] font-semibold text-[#202020]">
         Exhibition Services in Delhi NCR to Get People Involved
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        A successful exhibition is not just about stall space—it is about interaction, visibility, and real audience engagement. Our exhibition services in Delhi NCR help brands attract visitors, keep them involved, and convert footfall into meaningful business outcomes.<br/>We provide complete on-ground support across Delhi, Noida, Gurgaon, Greater Noida, Faridabad, Ghaziabad, and nearby NCR locations, ensuring your brand stands out at every exhibition.  
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Experienced on-ground staff for booth handling and visitor engagement</li>
            <li>Interactive activities and live demonstrations to attract footfall</li>
            <li>Visitor management and lead coordination support</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/plan-your-event/brand-promotion/brand-promotion-event-planner">Brand promotion</a> and audience engagement activities</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/plan-your-event/audio-visual-equipment-rental-company-for-events">Audio-visual setup</a> and technical coordination</li>
            <li>Complete stall setup assistance and on-site supervision</li>
        </div>
      </div>
        </div>

              
        <h2 className="mt-3 mb-3 text-[21px] font-semibold text-[#202020]">
         Let's make your booth the most fun.
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         Exhibitions cost a lot because of the stall, branding, travel, staff, and time. Don't waste all that money by not talking to people. With professional Visitor Engagement Services for Exhibitions, your booth will be more than just a display. It will also draw in leads.<br/>Contact Event-Management-Delhi.com today for personalized Visitor Engagement Services for Exhibitions in Delhi NCR. Let's use your next expo to help your business grow.
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