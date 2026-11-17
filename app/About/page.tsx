import HeroHeader from "../../components/About/Header";

export default function AboutPage() {
  return (
    <main>
      <HeroHeader
        heading={[
          { text: "We thrive on" },
          { text: "creativity &", highlight: true },
          { text: "innovation in", highlight: true },
          { text: "Event Experiences" },
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        mediaType="video"
        mediaSrc="https://www.event-management-delhi.com/assets/videos/845612.mp4"
        mediaAlt="Corporate event stage"
        badgeText="•CREATIVITY •INNOVATION •EVENT EXPERIENCES "
      />

      {/* Remaining About page content */}

      <div className="mt-22 mb-10 relative mx-auto max-w-[1370px] text-center">
    
        <h2 className="text-2xl font-medium leading-[1.45] tracking-light text-[#151515] sm:text-3xl md:text-[42px]">
          We are a leading{" "}
          <span className="font-normal italic">
            Event Management company in Delhi{" "}
          </span>
          that thrives on{" "}
          <span className="font-normal italic">creative event planning </span>and{" "}
          <span className="font-normal italic">innovative event management. </span>
          Our expert team is constantly launching fresh ideas and advanced strategies to deliver{" "}
          <span className="font-normal italic">
            memorable corporate events, weddings, brand activations, concerts, and luxury celebrations{" "}
          </span>
          that engage audiences and create lasting impressions.
        </h2>
      </div>

      {/* Content */}
      <section className="w-full bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px]">

        {/* First Section */}
        <h2 className="mb-3 text-xl font-bold text-black sm:text-2xl">
          Professional Event Management Company for Corporate &amp; Luxury Events
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <p className="text-justify text-[17px] leading-[26px] text-[#333333]">
            We are a full-service event management company specializing in creative event planning, premium production, and flawless execution for corporate events, weddings, brand activations, concerts, exhibitions, and luxury celebrations. Driven by innovation, creativity, and performance excellence, we transform ordinary ideas into extraordinary live experiences. Our goal is simple—to create powerful moments that connect brands, people, and emotions through unforgettable events. As a professional event planning company, we handle every project with precision, passion, and complete accountability from concept to completion.
          </p>

          <p className="text-justify text-[17px] leading-[26px] text-[#333333]">
            With years of industry experience, our team of expert event planners, designers, production managers, artists coordinators, and technical professionals work together to deliver seamless, stress-free, and high-impact events. We understand that every event carries a purpose—whether it’s building brand identity, celebrating milestones, launching products, or creating memorable personal moments. That’s why we offer customized event management solutions designed around your objectives, audience, and budget. From intimate corporate meetings to large-scale public events, we manage every detail with creativity and professionalism.
          </p>
        </div>

        {/* Second Section */}
          <h2 className="mt-7 mb-3 text-xl font-bold leading-snug text-black sm:text-2xl">
            End-to-End Event Planning &amp; Execution Services
          </h2>

          <p className="text-justify text-[17px] leading-[26px] text-[#333333]">
            As a trusted event management agency, our services cover a wide range of industries and event formats including corporate conferences, exhibitions, product launches, dealer meets, concerts, celebrity appearances, wedding planning, destination weddings, private parties, and brand promotions. Our strength lies in our ability to handle both creative planning and technical execution under one roof. From stage design, LED setups, lighting, sound, and décor to artist management, logistics, hospitality, and crowd management—we offer complete end-to-end event solutions.
          </p>

        {/* Third Section */}
          <h2 className="mt-7 mb-3 text-xl font-bold leading-snug text-black sm:text-2xl">
            Innovative &amp; High-Impact Event Experiences
          </h2>

          <p className="text-justify text-[17px] leading-[26px] text-[#333333]">
            What sets us apart in the event management industry is our commitment to innovation and quality. We don’t believe in repeating ideas—we believe in creating fresh, engaging, and immersive experiences for every event. Our creative team constantly explores the latest trends in event technology, stage design, audience engagement, and experiential marketing to ensure every project we deliver feels modern, premium, and impactful. We blend creativity with strategy to ensure your event is not just visually impressive but also achieves real business and engagement goals.
          </p>

         <h2 className="mt-7 mb-3 text-xl font-bold text-black sm:text-2xl">
         Corporate Event Management Services
        </h2>

         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <p className="text-justify text-[17px] leading-[26px] text-[#333333]">
            Our corporate event management services are designed to help brands create strong impressions through impactful conferences, award nights, annual meets, product launches, exhibitions, and employee engagement programs. We understand the importance of brand image, professionalism, and execution timelines in corporate events, and our team ensures that every aspect of the event reflects your brand’s values and objectives. With structured planning, transparent budgeting, and on-ground execution excellence, we deliver corporate events that create powerful brand experiences.
          </p>

          <p className="text-justify text-[17px] leading-[26px] text-[#333333]">
            In the world of weddings and social celebrations, we bring dreams to life through elegant designs, breathtaking décor, luxury production, and flawless coordination. Our wedding planning services include destination weddings, theme weddings, décor design, artist bookings, hospitality management, and complete guest coordination. Every wedding we manage is uniquely crafted with personal touches, cultural authenticity, and luxury aesthetics to ensure once-in-a-lifetime experiences for couples and their families.
          </p>
        </div>

          <h2 className="mt-15 mb-6 text-xl font-bold text-black sm:text-2xl">
         Our Successful Event Projects & Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <img className="max-h-[400px] w-full rounded-[5%]"
          src ="https://www.event-management-delhi.com/assets/img/portfolio/infosys-family-day.jpg"
          alt= " Infosys Image" />
          <img className="max-h-[400px] w-full rounded-[5%]"
          src ="https://www.event-management-delhi.com/assets/img/portfolio/ats-home-kraft.jpg"
          alt= "Outdoor Event" />
          </div>

          <h2 className="mt-10 mb-3 text-xl font-bold leading-snug text-black sm:text-2xl">
            Transparent Event Planning Process & Project Management
          </h2>

          <p className="text-justify text-[17px] leading-[26px] text-[#333333]">
            We strongly believe that successful events are built on trust, teamwork, and technical excellence. Our working process is simple yet powerful—understanding your requirements, developing creative concepts, planning logistics, executing on-ground operations, and delivering with perfection. We follow strict quality standards, safety measures, and time management protocols to ensure smooth execution at every stage. Our dedicated project managers ensure that you stay informed throughout the event planning journey, offering complete transparency and reliability.
          </p>


          <h2 className="mt-7 mb-3 text-xl font-bold leading-snug text-black sm:text-2xl">
            Pan-India Event Execution with Advanced Infrastructure
          </h2>

          <p className="text-justify text-[17px] leading-[26px] text-[#333333]">
            As a growing and dynamic event planning agency, we continuously invest in the latest equipment, technology, creative talent, and vendor partnerships to maintain high production standards. Our strong network of trusted vendors, artists, technicians, and logistics partners allows us to execute events efficiently across multiple cities and locations. Whether you are planning a corporate conference, exhibition, wedding, or brand promotion, our team has the capability to manage projects at any scale with confidence and consistency.
          </p>

          
          <h2 className="mt-7 mb-3 text-xl font-bold leading-snug text-black sm:text-2xl">
            Trusted Event Management Company with Proven Client Satisfaction
          </h2>

          <p className="text-justify text-[17px] leading-[26px] text-[#333333]">
            Client satisfaction is the core of our success. We take pride in our long-term client relationships built on trust, performance, and consistent results. Our mission is to make event planning stress-free while delivering memorable experiences that exceed expectations. Every event we execute reflects our commitment to creativity, quality, discipline, and customer satisfaction.
          </p>


          <h2 className="mt-7 mb-3 text-xl font-bold leading-snug text-black sm:text-2xl">
            Your Partner for Corporate Events, Weddings & Brand Promotions 
          </h2>

          <p className="mb-20 text-justify text-[17px] leading-[26px] text-[#333333]">
            If you are looking for a professional event management company that understands creativity, strategy, and flawless execution, you are in the right place. Whether it’s a corporate brand experience, a luxury wedding, a music concert, or a high-energy exhibition, we are here to turn your vision into a powerful reality. Let’s create something extraordinary together—because great events are not just organized, they are experienced.
          </p>
          

  </div>
</section>
    </main>
  );
}
