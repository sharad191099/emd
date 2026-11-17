"use client";
import HeroHeader from "../../../../components/About/Header";
import Partners from "../../../../components/Service/Partners";
import { useState } from "react";

const faqs= [
  {question: "What are Mall & Retail Activations by Expert Brand Promotion Organisers?",
   answer: "Mall & Retail Activations by Expert Brand Promotion Organisers are strategic on-ground brand promotion campaigns conducted inside malls and high-footfall retail spaces. These activations are designed to engage shoppers directly through interactive experiences, product demos, sampling, and visual branding to increase brand awareness, leads, and sales."},
  {question: "Why should brands invest in mall and retail activations for brand promotion?",
   answer:"Mall and retail activations allow brands to interact with consumers at the point of purchase. Unlike traditional advertising, Mall & Retail Activations by Expert Brand Promotion Organisers create real-time engagement, build trust, encourage product trials, and drive impulse buying in a natural retail environment."},
  {question: "Which types of brands benefit most from mall and retail activation campaigns?",
   answer:"Mall & Retail Activations by Expert Brand Promotion Organisers work best for FMCG brands, electronics, fashion and lifestyle labels, beauty and personal care brands, startups, D2C brands, and corporate brands looking to enter competitive markets or launch new products."},
  {question: "What services are included in mall and retail activation management?",
   answer: "Expert Brand Promotion Organisers provide end-to-end mall activation services, including concept development, mall permissions, kiosk and stall design, staffing, product demos, sampling, lead generation, on-ground execution, and post-event performance reporting."},
  {question: "Do you provide customized mall activation strategies for different brands?",
   answer:"Yes. Mall & Retail Activations by Expert Brand Promotion Organisers are fully customized based on brand objectives, target audience, product category, budget, and mall location. Every activation is tailored to align with the brand’s marketing goals and identity."},
  {question: "How do interactive and experiential retail activations help brand visibility?",
   answer:"Interactive and experiential Mall & Retail Activations by Expert Brand Promotion Organisers increase dwell time, audience participation, and social sharing. Activities like AR/VR experiences, games, contests, and influencer-led events create memorable brand interactions and boost both offline and online visibility."},
  {question: "Do you provide trained brand promoters and brand ambassadors for mall activations?",
   answer:"Yes. We provide professionally trained brand promoters, product demonstrators, and brand ambassadors for Mall & Retail Activations. Our team is briefed on brand messaging, product knowledge, and engagement techniques to ensure consistent and impactful consumer interactions."},
  {question: "How is ROI measured for mall and retail activation campaigns?",
   answer:"ROI for Mall & Retail Activations by Expert Brand Promotion Organisers is measured through footfall engagement data, number of leads generated, sampling reach, sales impact, customer feedback, and detailed post-activation reports with visual documentation."},
   {question: "In which locations do you execute mall and retail activations?",
   answer:"We execute Mall & Retail Activations across Delhi NCR, including Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad, as well as pan-India retail locations. Expert Brand Promotion Organisers ensure consistent execution for both single-city and nationwide campaigns."},
   {question: "How can brands get started with Mall & Retail Activations by Expert Brand Promotion Organisers?",
   answer:"Brands can get started by sharing their campaign objectives, target audience, and preferred locations. Our team of Expert Brand Promotion Organisers then designs a tailored mall and retail activation strategy focused on maximizing brand visibility, engagement, and measurable results."}
];

export default function mallretailservicespage() {
   const [openIndex, setOpenIndex] = useState(null);
   const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
    };
  return (
    <main>
      <HeroHeader
              layout="title"
              heading={[
                { text: "Mall & Retail " },
                { text: "Activations by Expert Brand Promotion Organisers", highlight: true },
              ]}
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/Services" },
                {label: "Brand Promotion Organiser"}
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
              <span className="block">Mall & Retail</span>
              <span className="block text-[#1675b9]">Events organiser</span>
            </h1>

            <div className="mt-8">
              <Partners />
            </div>
          </div>

          {/* RIGHT SIDE: regular page content, NOT a component */}
          <div className="max-w-[1800px] pt-1 text-[16px] leading-[1.7] text-[#333333]">
            <h2 className="text-[42px] leading-[1.2] font-semibold">Mall & Retail Activations by Expert Brand Promotion Organisers for High-Impact Brand Visibility</h2>

            <p className="mt-10">
              Brands can't just use traditional advertising anymore to get people's attention or sway their buying decisions in today's highly competitive consumer market. People want to be able to interact with brands, find things that are useful to them, and be involved in the real world. Brands can meet their customers where they make buying decisions through mall and retail activations. Brands can have real conversations with shoppers, help them find new products, and make them feel comfortable with the brand right away, which is something that static ads often don't do.
            </p>
             <p className="mt-5">
              Expert Brand Promotion does mall and retail activations. organisers give you a great way to turn regular foot traffic into valuable brand engagement. These activations put brands right in front of people who are ready to buy by giving them access to busy malls, shopping centers, and retail zones. Brands can make touchpoints that people will remember and that will lead to trials, conversations, and impulse buys by carefully planning and focusing on their audience. This will also help them become more well-known in the market.
            </p>
            <p className="mt-5">
                We are good at making brand experiences that feel natural in stores. From coming up with ideas to putting them into action, everything is in line with brand goals and how people act. Each activation gets visibility and measurable results thanks to strategic layouts, creative ways to get people involved, trained promoters, and smooth coordination. These experiences not only make people more aware, but they also make them more trustworthy and affect what they buy in real time.
                </p>          
            <div
              className="mt-3 relative flex min-h-[270px] w-full items-center bg-contain bg-center bg-no-repeat px-12 py-10 sm:px-20"
              style={{
                backgroundImage: "url('https://www.event-management-delhi.com/assets/img/bg/quote-text-bg.png')",
              }}
            >
              <p className="text-base italic leading-7 text-black sm:text-lg">
                “Mall & Retail Activations by Expert Brand Promotion Organisers bridge the gap between brands and consumers by transforming ordinary shopping moments into engaging brand experiences. Through creative concepts, strategic planning, and flawless execution, these activations help brands earn trust, spark interest, and drive immediate sales. When done right, retail activations turn foot traffic into lasting brand connections and measurable business growth.”
              </p>
            </div>
          </div>
        </div>
        </section>


          <section className="ml-8 max-w-full bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
      
      {/* Section 1 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         Why Mall and Retail Activations Are Important for Brand Promotion
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
         People today want more than just ads; they want experiences. Mall and retail activations bring brands closer to customers in a way that feels natural and memorable in a physical setting. As a <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/brand-promotion/brand-promotion-event-planner">professional brand promotion organiser</a>, we know how to turn mall visitors into potential buyers with smart activation strategies.
        </p>
        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
         How Expert Brand Promotion organisers Help Brands
        </h2>
         <p className="text-base leading-[1.65] text-gray-900">
         Expert brand promotion organisers can help brands with mall and retail activations by:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Talk directly to the people you want to reach</li>
            <li>Make people remember your brand right away</li>
            <li>Get leads that are worth your time</li>
            <li>Get people to try out and demo products</li>
            <li>Make people more likely to buy on impulse</li>
            <li>Make your brand stronger both online and offline</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
         Expert brand promotion organisers can help brands with mall and retail activations by:
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
            What We Know About Organizing Brand Promotions
            </h2>
         <p className="text-base leading-[1.65] text-gray-900">
            As a <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/brand-promotion/brand-promotion-event-planner">full-service brand promotion</a> company, we handle everything from start to finish for mall and retail activations. Our team makes sure that every activation fits with your brand identity and marketing goals, from coming up with ideas to putting them into action.
        </p>  
        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
         Our Expertise in Mall and Retail Activations
        </h2>
         <p className="text-base leading-[1.65] text-gray-900">
         We are experts at Mall and Retail Activations by Expert Brand Promotion Organisers that are:
        </p>
         <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Planned in a smart way</li>
            <li>Designed in a creative way</li>
            <li>Focused on the audience</li>
            <li>Based on ROI</li>
            <li>Can be used in many places</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
         We have a lot of experience with brand promotion campaigns, <a className="text-[red]" href="https://www.hire4event.com/corporate-events">corporate events</a>, roadshows, exhibitions, and retail marketing, which gives us a big advantage when it comes to mall activations that get results.
        </p>
        <h2 className="mt-6 mb-3 text-[21px] font-semibold text-[#202020]">
         Different Kinds of Mall and Retail Activations We Offer
        </h2>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
      <div>
        <h2 className="mt-8 mb-3 text-[22px] font-semibold text-[#202020]">
          1. Activations for Launching Products in Malls
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
            Launching a product in a mall setting gives you immediate access to thousands of potential customers. Our Mall and Retail Activations by Expert Brand Promotion organisers offer full product launch services, such as:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Kiosks and stalls with your brand on them</li>
            <li>Areas for product demos</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/led-screen">Digital displays and LED screens</a></li>
            <li>Sample and trial counters</li>
            <li>Presentations of products in real time</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            These activations are great for launching new products, changing the look of a brand, and running seasonal sales.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h2 className="mt-8 mb-3 text-[22px] font-semibold text-[#202020]">
            2. Interactive Activations and Experiential Marketing
        </h2>
         <p className="text-base leading-[1.5] text-gray-900">
          Experiential marketing makes people feel connected to brands. We create interactive events that get people involved and interested.<br/>Our experiential Mall & Retail Activations by Expert Brand Promotion Organisers include:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Experiences in AR and VR</li>
            <li>Areas for gamification</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/selfie-photo-booth">Photo booths</a> and ways to get people involved on social media</li>
            <li>Activations based on contests</li>
            <li>Mall events led by influencers</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            These kinds of events not only draw in crowds, but they also get people talking on social media.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
          3. Branding and Visual Merchandising in Stores
        </h2>
        <p className="text-base leading-[1.5] text-gray-900">
         Strong visual branding is very important for retail success. We help brands stand out with creative retail branding ideas.<br/>We offer the following services:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Designing kiosks and pop-up stores in malls</li>
            <li>Signs and stands for stores</li>
            <li>LED walls, backdrops, and flex branding</li>
            <li>Branding in-store and on windows</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          As experts in Mall & Retail Activations by Expert Brand Promotion Organisers, we make sure that all touchpoints look the same.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         4. Brand Ambassadors and Promotional Staff
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Trained staff is very important for the success of mall activations. We have professional promoters, product demonstrators, and brand ambassadors who will represent your brand.<br/>Our group takes care of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Hiring and training staff</li>
            <li>Writing and briefing for the brand</li>
            <li>Keeping an eye on performance</li>
            <li>Reporting on interactions with customers</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          This makes sure that your Mall & Retail Activations by Expert Brand Promotion Organisers always send out a clear and interesting brand message.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         5. Campaigns for Sampling and Lead Generation
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Sampling is still one of the best ways to promote things in stores. We run big sampling and lead generation campaigns in malls and stores.<br/>Here are some of our activation strategies:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Campaigns for targeted sampling</li>
            <li>Collecting data about customers</li>
            <li>Registrations based on QR codes</li>
            <li>Ways to get feedback right away</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          These data-driven Mall & Retail Activations by Expert Brand Promotion Organisers help brands track how well their campaigns are doing and make them better for the next time.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            The Planning That Goes Into Successful Mall Activations
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           Every successful activation starts with a plan. We do a lot of research before planning any mall activation because we are professional brand promotion organisers.<br/>We plan by doing the following:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Knowing what the brand wants to do</li>
            <li>Finding out who your target audience is</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/blogs/top-malls-in-delhi-ncr/">Choosing the best malls</a> and stores</li>
            <li>Making layouts for activation</li>
            <li>Making plans for foot traffic and points of engagement</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This strategic approach makes sure that Mall & Retail Activations by Expert Brand Promotion Organisers get the most exposure and the best results.
        </p>
      </div>


      {/* Section 9 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Execution From Start to Finish and Management on the Ground
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Execution is the point at which strategy and reality meet. Our skilled project managers are in charge of every part of the activation process.<br/>We take care of:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Getting permission from the mall and coordinating</li>
            <li>Setting up and logistics</li>
            <li>Making and producing things technically</li>
            <li>Running the business every day and fixing problems</li>
            <li>Taking things apart and writing reports after the event</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Our end-to-end services make sure that Mall & Retail Activations by Exp
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Retail Activations Driven by Technology
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We use modern technology to make it easier to track data and get people involved. Our tech-enabled activations are:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Kiosks with touchscreens</li>
            <li>Systems for digital feedback</li>
            <li>Contests based on QR codes</li>
            <li>Data analysis in real time</li>
            <li>Displays with <a className="text-[red]" href="https://www.hire4event.com/led-blinder-light">LED lights</a> and interactivity</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Expert brand promotion organisers use technology to help brands get valuable information and boost the return on investment (ROI) of their campaigns.
        </p>
      </div>

      {/* Section 11 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
         What Kinds of Businesses We Help With Mall and Retail Activations
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          Our mall activation services are useful for many different types of businesses, such as:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Goods and services for consumers</li>
            <li>Electronics and gadgets</li>
            <li>Brands for fashion and lifestyle</li>
            <li>Personal care and beauty</li>
            <li>Brands of cars and electric vehicles</li>
            <li>Money, banking, and insurance</li>
            <li>Developers of real estate and property</li>
            <li>New businesses and D2C brands</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Expert Brand Promotion Organisers tailor Mall & Retail Activations to meet the needs of each brand, no matter what industry it is in.
        </p>
      </div>

      {/* Section 12 */}
      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Why You Should Choose Us for Mall and Retail Activations
        </h2>
        <p className="mb-2 text-base leading-[1.65] text-gray-900">
          We are a trusted brand promotion organiser, and we bring experience, creativity, and great execution to every project.<br/><strong>What We Do Best</strong>
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Solutions for promoting a brand from all angles</li>
            <li>Experience with mall and retail activations that has been proven</li>
            <li>A strong network of vendors and malls</li>
            <li>A team of creative designers and producers</li>
            <li>Trained people to do promotions</li>
            <li>Clear prices and reports</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Because we care about quality, Mall & Retail Activations by Expert Brand Promotion Organisers are a great way for brands to spend money on marketing.
        </p>
      </div>
      </div>


        {/* Image */}
      <div className="mt-9 overflow-hidden rounded-xl">
            <img
              src="https://www.event-management-delhi.com/assets/img/services/mall-retail-activation-services.jpg"
              alt="Mall & Retail Activations by Expert Brand Promotion Organisers"
              className="h-auto max-h-[700px] w-full object-cover"
            />
            <p className="mb-3 text-center">Mall & Retail Activations by Expert Brand Promotion Organisers</p>
          </div>

        {/* sections */}

        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
        <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            Working With Other Brand Promotion Services
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
           When combined with other marketing efforts, mall activations work best. We help brands link retail activations with:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li><a className="text-[red]" href="https://www.hire4event.com/plan-your-event/sales-and-marketing-event-organiser">Marketing for corporate events</a></li>
            <li>Outdoor ads and roadshows</li>
            <li>Taking part in trade shows and exhibitions</li>
            <li><a className="text-[red]" href="https://www.hire4event.com/blogs/top-social-media-influencer-for-events/">Campaigns for social media</a> and digital marketing</li>
            <li>Strategies for marketing with influencers</li>
        </div>
         <p className="mt-6 text-base leading-[1.65] text-gray-900">
            This all-in-one method makes sure that Mall & Retail Activations by Expert Brand Promotion Organisers add value to the brand over time.
        </p>
      </div>


      <div>
        <h2 className="mb-3 text-[22px] font-semibold text-[#202020]">
            How to Measure the Success and ROI of Mall Activations
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
          We believe in results that can be measured. We report on:
        </p>
        <div className="pl-5 text-base leading-[1.65] text-gray-900">
            <li>Data on foot traffic engagement</li>
            <li>Numbers of leads generated</li>
            <li>The reach of sampling</li>
            <li>Analysis of the effect on sales</li>
            <li>Documenting with pictures</li>
        </div>
        <p className="mt-6 text-base leading-[1.65] text-gray-900">
          Brands can easily see how well Mall & Retail Activations by Expert Brand Promotion Organisers worked with detailed reports.
        </p>
      </div>
      </div>


    <div>
        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
        Activations in Malls and Stores All Over Delhi NCR and India
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        We successfully run mall and retail activations in Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, and other big cities in India. Our pan-India capabilities make it easy for brands to run campaigns in many places at the same time.<br/>Expert Brand Promotion Organisers do Mall & Retail Activations with professionalism and consistency, whether it's a single mall activation or a nationwide retail campaign.
        </p>

        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
        Retail Activations: A Way to Promote Your Brand for the Future
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        Brands need to be able to quickly change with the times because consumer behavior is always changing. Mall activations are still useful because they let people interact with each other, get feedback, and build trust in real time.<br/>Mall and Retail Activations by Expert Brand Promotion Organisers are still one of the best ways to promote a brand today thanks to their use of new ideas, creativity, and strategy.
        </p>

        <h2 className="mt-6 mb-3 text-[22px] font-semibold text-[#202020]">
        Get in Touch With Expert Brand Promotion Organisers Today
        </h2>
        <p className="text-base leading-[1.65] text-gray-900">
        Our mall and retail activation services are the best way to get more people to see your brand, get them to buy something, and get them to talk about it. We help brands stand out in busy stores because we are experienced at <a className="text-[red]" href="https://www.hire4event.com/plan-your-event/brand-promotion/brand-promotion-event-planner">organizing brand promotions</a>.<br/>Choose Mall & Retail Activations by Expert Brand Promotion Organisers to turn foot traffic into loyal customers and strong brand connections.<br/>Are you ready to connect with your audience directly?<br/>Get in touch with us today to find out how our Mall & Retail Activations by Expert Brand Promotion Organisers can boost your brand's visibility and give you measurable results.
        </p>
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