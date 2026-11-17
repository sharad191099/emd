type HeroSectionProps = {
  subtitle: string;
  heading: {
    text: string;
    highlight?: boolean;
  }[];
  description: string;
  primaryButton?: string;
  secondaryButton?: string;
  primaryLink?: string;
  secondaryLink?: string;
};

export default function HeroSection({
  subtitle,
  heading,
  description,
  primaryButton = "Request a Proposal",
  secondaryButton = "Explore Services",
  primaryLink = "/contact",
  secondaryLink = "#services",
}: HeroSectionProps) {
  return (
    <section className="max-w-full bg-gradient-to-r from-[#0c101c] to-[#141a32] px-6 py-16 text-white md:px-10 lg:py-12">

      <div className="ml-8 max-w-[1600px]">

        {/* Subtitle */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-[2px] w-6 bg-[#6878ff]"></span>

          <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#aab8d6]">
            {subtitle}
          </p>
        </div>

         {/* HEADING */}
        <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[58px]">
          {heading.map((item, index) => (
            <span
              key={index}
              className={item.highlight ? "text-[#8998ff]" : ""}
            >
              {item.text}{" "}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p className="max-w-[1550px] text-[15px] leading-7 text-[#b9c5dd] md:text-base">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-10 mb-10 flex flex-wrap gap-4">

          <a
            href={primaryLink}
            className="rounded-md bg-[#4c55eb] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6875ff]"
          >
            {primaryButton}
          </a>

          <a
            href={secondaryLink}
            className="rounded-md border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#6878ff] hover:bg-white/10"
          >
            {secondaryButton}
          </a>

        </div>

      </div>
    </section>
  );
}
