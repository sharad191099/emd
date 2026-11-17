"use client";
import { useState, type FormEvent } from "react";
import HeroHeader from "../../components/About/Header";

export default function ContactPage() {
     const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <main>
      <HeroHeader
        layout="title"
        heading={[
          { text: "Connect with " },
          { text: "Our Professional", highlight: true },
          { text: " Event " },
          { text: "Planners", highlight: true }
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        rightTitle="CONTACT"
      />

    {/* Your remaining Contact page content */}

  <section className="w-full bg-white px-4 py-12 font-[Raleway,sans-serif] sm:px-6 md:py-16">
      <div className="mx-auto max-w-[980px] border border-[#f1f5f9] px-5 py-8 sm:px-10 md:px-16 md:py-10">
        <h2 className="mb-10 text-center text-2xl font-semibold text-black md:mb-10 md:text-[30px]">
          Drop a Message
        </h2>

        <form onSubmit={handleSubmit} className="mx-auto max-w-[734px]">
          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            autoComplete="name"
            required
            className="h-[52px] w-full rounded-full border border-[#e8e8e8] bg-white px-7 text-sm text-black outline-none transition focus:border-[#1680c4] sm:text-base"
          />

          {/* Email and Phone */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              required
              className="h-[52px] w-full rounded-full border border-[#e8e8e8] px-7 text-sm outline-none transition focus:border-[#1680c4] sm:text-base"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              autoComplete="tel"
              required
              className="h-[52px] w-full rounded-full border border-[#e8e8e8] px-7 text-sm outline-none transition focus:border-[#1680c4] sm:text-base"
            />
          </div>

          {/* Organization and Budget */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="organization"
              placeholder="Organization"
              autoComplete="organization"
              className="h-[52px] w-full rounded-full border border-[#e8e8e8] px-7 text-sm outline-none transition focus:border-[#1680c4] sm:text-base"
            />

            <input
              type="text"
              name="budget"
              placeholder="Budget (e.g., 5 lakh, 50,000)"
              className="h-[52px] w-full rounded-full border border-[#e8e8e8] px-7 text-sm outline-none transition focus:border-[#1680c4] sm:text-base"
            />
          </div>

          {/* Event Date */}
          <input
            type="date"
            name="eventDate"
            aria-label="Event date"
            className="mt-6 h-[52px] w-full rounded-full border border-[#e8e8e8] bg-white px-7 text-sm text-black outline-none transition focus:border-[#1680c4] sm:text-base"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message..."
            required
            rows={5}
            className="mt-6 min-h-[155px] w-full resize-y rounded-[16px] border border-[#e8e8e8] bg-white px-7 py-4 text-sm text-black outline-none transition focus:border-[#1680c4] sm:text-base"
          />

          {/* Consent */}
          <label className="mt-8 flex cursor-pointer items-start gap-2 text-sm leading-6 text-[#444] sm:text-base">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-[13px] w-[13px] shrink-0 accent-black"
            />
            <span>
              I consent to having this website store my submitted information.
              <span className="text-[#1680c4]"> *</span>
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-11 h-[70px] w-full rounded-full border border-[#e8e8e8] bg-[white] text-sm font-medium uppercase text-black transition duration-300 hover:bg-[black] hover:text-[white] sm:text-base"
          >
            Send Message
          </button>

          {submitted && (
            <p
              role="status"
              className="mt-4 text-center text-sm text-green-700"
            >
              Form validated successfully. Connect a backend to send your
              message.
            </p>
          )}
        </form>
      </div>
    </section>

    {/* Contact Information Cards */}
    <section className="w-full bg-white px-5 py-12">
    <div className="mx-auto grid max-w-[1050px] grid-cols-1 gap-7 sm:grid-cols-3">

    {/* Address */}
    <div className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden bg-[#f1f1f1] px-5 py-8 text-center">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#dedede]" />

      <div className="relative z-10">
        <h3 className="text-xl font-medium text-black">
          Address
        </h3>
        <p className="text-sm leading-6 text-gray-700">
          214, ABC Tower 1, Sector 135
          <br />
          Noida, Delhi NCR, 201301
          <br />
          India
        </p>
      </div>
    </div>

    {/* Phone / WhatsApp */}
    <div className="relative flex min-h-[204px] flex-col items-center justify-center overflow-hidden bg-[#f1f1f1] px-5 py-8 text-center">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#dedede]" />

      <div className="relative z-10">
        <h3 className="text-xl font-medium text-black">
          Phone / WhatsApp
        </h3>
        <a
          href="tel:+919810617123"
          className="text-sm text-gray-700 transition-colors hover:text-[#1680c4]"
        >
          +91-98106-17123
        </a>
      </div>
    </div>

    {/* Email */}
    <div className="relative flex min-h-[204px] flex-col items-center justify-center overflow-hidden bg-[#f1f1f1] px-5 py-8 text-center">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#dedede]" />

      <div className="relative z-10">
        <h3 className="text-xl font-medium text-black">
          Email
        </h3>
        <a
          href="mailto:sales@hire4event.com"
          className="text-sm text-gray-700 transition-colors hover:text-[#1680c4]"
        >
          sales@hire4event.com
        </a>
      </div>
    </div>

  </div>
</section>

{/* Contact Information Content */}
<section className="w-full bg-white px-5 pb-16">
  <div className="mt-10 mb-15 mx-auto max-w-[1200px] space-y-6 text-justify text-sm leading-[25px] text-[#454545] sm:text-base">

    <p>
      We'd love to hear about your upcoming event and help you turn your
      ideas into a powerful live experience. As a trusted event management
      company, we offer complete event planning and execution services for
      corporate events, weddings, brand activations, exhibitions, concerts,
      and private celebrations. Whether you are planning a business
      conference, luxury wedding, product launch, or a social celebration,
      our expert team is ready to deliver creativity, precision, and
      flawless execution.
    </p>

    <p>
      At our professional event planning agency, we focus on understanding
      your vision, audience, budget, and objectives before creating a
      customized event strategy. From concept development and venue
      planning to stage setup, lighting, sound, décor, artist management,
      logistics, and hospitality—we manage every detail under one roof.
      This ensures your event is seamless, stress-free, and perfectly
      organized from start to finish.
    </p>

    <p>
      We believe that great events are built on strong communication,
      transparency, and execution excellence. Our dedicated project
      managers keep you informed at every stage of planning while ensuring
      that timelines, quality, and budgets are strictly maintained. With a
      strong vendor and production network, we deliver high-quality results
      for both small private gatherings and large-scale corporate events.
    </p>

    <p>
      If you're looking for a reliable event management company near you
      that combines creativity with technical expertise, you've come to
      the right place. Use the contact form below or reach out to us
      directly via phone or email, and our team will get in touch with you
      shortly. Let's plan something extraordinary together—because your
      event deserves nothing less than perfection.
    </p>

  </div>
    </section>

    </main>
  )}
    