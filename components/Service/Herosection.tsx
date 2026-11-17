import Link from "next/link";
type HerosectionProps = {
  breadcrumb: {
   label: string;
  href?: string;
  }[];
  heading: {
    text: string;
    highlight?: boolean;
  }[];
  backgroundImage?: string;
  backgroundVideo?: string;
  description: string;
};

export default function Herosection({
  breadcrumb,
  heading,
  backgroundImage,
  backgroundVideo,
  description,
}: HerosectionProps) {

  return (
    <section className="w-full bg-white">
      {/* Hero background */}
      <div
        className="relative mx-4 flex min-h-[480px] items-end overflow-hidden bg-cover bg-center bg-no-repeat px-6 pb-24 pt-24 sm:mx-4 sm:min-h-[580px] sm:px-12 lg:min-h-[720px] lg:px-24 lg:pb-28">
         {/* Background video */}
        {backgroundVideo ? (
          <video
            key={backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={backgroundImage}
            className="absolute inset-0 h-full w-full
            object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          /* Background image */
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
            }}
          />
        )}

        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r
          from-black/80 via-black/40 to-black/10"
        />
        <div className="relative z-10 w-full">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm uppercase text-white sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="223" height="14" viewBox="0 0 223 12" fill="none">
                <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round"></path>
              </svg>

            {breadcrumb.map((item, index) => (
              <span key={`${item}-${index}`} className="flex gap-3">
                {index > 0 && <span>/</span>}
                {item.href && index !== breadcrumb.length - 1 ? (
                    <Link
                      href={item.href}
                      className="transition-colors duration-300 hover:text-[#1675b9]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
              </span>
            ))}
          </nav>

          {/* Main heading */}
          <h1 className="max-w-6xl text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl lg:text-7xl">
            {heading.map((item, index) => (
              <span
                key={`${item.text}-${index}`}
                className={`mr-3 inline-block ${
                  item.highlight
                    ? "font-light italic text-[#1675b9] underline underline-offset-6 underline decoration-3"
                    : ""
                }`}
              >
                {item.text}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* Bottom description and fixed meeting circle */}
      <div className="relative mx-4 grid grid-cols-1 items-center gap-8 px-6 py-6 sm:px-12 lg:grid-cols-3 lg:px-24">
        <p className="max-w-xl text-sm leading-6 text-gray-700 sm:text-[18px]">
          {description}
        </p>

        {/* Fixed meeting button */}
        <div className="relative flex justify-center lg:-mt-24">
          <Link
            href="#"
            className="flex h-45 w-45 flex-col items-center justify-center rounded-full border border-[#1680d0] bg-white text-center text-2xl font-medium text-[#1675b9] outline outline-8 outline-white transition-all duration-300 hover:bg-[black] hover:text-white hover:border-[black]"
          >
            <span className="flex items-center gap-1">
              FIX <span className="text-2xl leading-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M17.5 2.60144H2.5C2.155 2.60144 1.875 2.88144 1.875 3.22644C1.875 3.57144 2.155 3.85144 2.5 3.85144H15.9909L2.05812 17.7846C1.81406 18.0286 1.81406 18.4243 2.05812 18.6683C2.18031 18.7905 2.34 18.8514 2.5 18.8514C2.66 18.8514 2.82 18.7905 2.94187 18.6683L16.875 4.73519V18.2264C16.875 18.5714 17.155 18.8514 17.5 18.8514C17.845 18.8514 18.125 18.5714 18.125 18.2264V3.22644C18.125 2.88144 17.845 2.60144 17.5 2.60144Z" fill="#FF4A23"></path>
            </svg>
              </span>
            </span>
            <span>MEETING</span>
          </Link>
        </div>

        {/* Fixed contact information */}
        <div className="flex flex-wrap justify-between gap-6 lg:justify-end lg:gap-12">
          <div>
            <p className="text-m text-gray-800">Say hello!</p>
            <a
              href="mailto:sales@hire4event.com"
              className="text-xl text-black font-semibold hover:text-[#1675b9]"
            >
              sales@hire4event.com
            </a>
          </div>

          <div>
            <p className="text-m text-gray-800">Say hello!</p>
            <a
              href="tel:+919810617123"
              className="text-xl text-black font-semibold hover:text-[#1675b9]"
            >
              +91-9810617123
            </a>
          </div>
        </div>
      </div>
      <div className="flex min-h-[25px] w-full items-center justify-center">
      <img
        src = "	https://event-management-delhi.com/assets/img/shape/star-1.png"
        alt = "Star">
        </img>
        </div>
    </section>
  );
}
