"use client";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/" , hasDropdown: false},
  { name: "ABOUT", href: "/About", hasDropdown: false},
  { name: "SERVICES", href: "/Services", hasDropdown: true },
  { name: "ARTICLES", href: "/Articles", hasDropdown: false },
  { name: "CONTACT", href: "/contact", hasDropdown: false }
];
const services= [
  {title: "CORPORATE EVENT", href: "/Services/corporate-event"},
  {title: "EXHIBITION ORGANISER", href: "/Services/exhibition-organiser"},
  {title: "SPORTS EVENT", href: "/Services/sports-event"},
  {title: "ANNUAL DAY & SALES MEET", href: "/Services/annual-and-sales-meet-organiser"},
  {title: "BRAND PROMOTION & LAUNCH", href: "/Services/brand-promotion-company"},
  {title: "ENTERTAINMENT FOR EVENT", href: "/Services/corporate-event-entertainment-services"}
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 m-0 max-w-full border-t-[3px] border-[#333] bg-white">
      <div className="mx-auto flex min-h-[76px] max-w-[1350px] items-center justify-between gap-6 px-5 lg:px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-1 text-[#1766a6]">
            <img className="flex h-10 max-w-[1260px] items-center justify-center" 
              src="https://www.event-management-delhi.com/assets/img/logo/emd-new-logo.webp">
              </img>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navLinks.map((link) => (
             <div key={link.name} className="group relative">
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 text-[17px] font-medium text-black transition-colors duration-300 hover:text-[#1766a6]"
            >
              {link.name}
              {link.hasDropdown && (
                <span className="text-xl font-normal text-red-500 transition-transform duration-300 group-hover:rotate-45">
                  +
                </span>
              )}
            </Link>

            {/* Services Dropdown */}
            {link.name.toLowerCase() === "services" && (
              <div
                className="invisible absolute left-0 top-full z-50 w-[260px] translate-y-2 bg-[#101010] px-7 py-8 opacity-0 shadow-xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
              >
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="block text-[15px] font-medium
                  leading-6 text-white transition-colors
                  duration-200 hover:text-[#1766a6]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
          )}
          </div>
          ))}
        </nav>

        {/* Quotation button */}
        <Link
          href="/contact"
          className="hidden shrink-0 items-center justify-center rounded-full border border-[#e8e8e8] px-8 py-[12px] text-[17px] font-medium text-black transition-all duration-300 hover:border-[black] md:flex"
        >
          GET QUOTATION
        </Link>

        {/* Mobile menu */}
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-gray-200 px-4 py-2 text-2xl text-black">
            ☰
          </summary>
          <nav className="absolute right-0 top-full mt-3 flex w-64 flex-col gap-1 rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm text-black transition-colors hover:bg-gray-100 hover:text-[#1766a6]"
              >
                {link.name}
                {link.hasDropdown && (
                  <span className="ml-2 text-red-500">+</span>
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full border border-gray-200 px-4 py-3 text-center text-sm text-black hover:bg-[#1766a6] hover:text-white"
            >
              GET QUOTATION
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
