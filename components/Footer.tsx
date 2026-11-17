import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Services", href: "/Services" },
  { label: "Articles", href: "/Articles" },
  { label: "EMD Noida", href: "/event-management-service-noida"},
  { label: "Contact Us", href: "/contact" },
  {label: "EMD - Event Management Company",href: "/professional-event-planning-services"}
];

export default function Footer() {
  return (
    <footer className="mt-15 relative w-full overflow-hidden bg-[url('https://www.event-management-delhi.com/assets/img/bg/footer-bgshape.png')] bg-cover bg-center text-white">

      {/* Decorative curved background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1675b4]/90 via-[#20528d]/90 to-[#24245e]/95"/>

      {/* Main footer content */}
      <div className="relative mx-auto grid max-w-[1350px] grid-cols-1 gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.6fr] lg:gap-16 lg:px-8 lg:py-16">

        {/* Company information */}
        <div>
          <Link
            href="#"
            aria-label="EMD Home"
            className="mb-7 inline-flex items-center gap-1 text-4xl font-bold tracking-tight"
          >
              <img className="flex h-10 max-w-[1260px] items-center justify-center" 
              src="https://www.event-management-delhi.com/assets/img/logo/emd-new-white-logo.webp">
              </img>
          </Link>

          <p className="max-w-[590px] text-[20px] leading-8 sm:text-lg">
            EMD (Event Management Delhi) is a trusted corporate event
            management company in Delhi NCR, established in 2011 and
            headquartered in Noida. Known for delivering reliable and
            professional event solutions, EMD specializes in corporate
            events, conferences, meetings, and large-scale programs.
            With years of industry experience, the company ensures
            seamless planning, strong execution, and high-quality event
            delivery across the region.
          </p>
        </div>

        {/* Contact information */}
        <div className="space-y-5 text-[16px]">
          <a
            href="tel:+919810617123"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-sky-200"
          >
            <span className="text-2xl" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset-icon lucide-headset">
                  <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path>
                  <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
                </svg>
            </span>
            <span>+91-9810617123</span>
          </a>

          <a
            href="mailto:sales@hire4event.com"
            className="flex items-center gap-2 break-all transition-colors duration-300 hover:text-sky-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6 shrink-0"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 7 9-7" />
            </svg>
            sales@hire4event.com
          </a>

          <div className="flex items-start gap-2 text-sm leading-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="mt-1 h-6 w-6 shrink-0"
              aria-hidden="true"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <p>
              214, ABC Tower -1, Sector 135, Noida,
              <br />
              Delhi NCR, Uttar Pradesh 201301
            </p>
          </div>
        </div>

        {/* Navigation links */}
        <nav aria-label="Footer navigation">
          <ul className="space-y-4">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-start gap-3 text-[16px] transition-all duration-300 hover:translate-x-1 hover:text-sky-200"
                >
                  <span className="text-xl leading-5" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-white/10 bg-[#22245c]/70">
        <div className="mx-auto flex max-w-[1350px] flex-col gap-4 px-6 py-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-sm sm:text-base">
            © 2026{" "}
            <Link
              href="/"
              className="text-[#1687d0] transition-colors hover:text-sky-200"
            >
              event-management-delhi.com 
            </Link>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
