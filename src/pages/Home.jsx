import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  ShieldCheck,
  Zap,
  DraftingCompass,
  Sun,
  ScanLine,
  Cable,
  Building2,
  Lightbulb,
  Gauge,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects } from "../data";

/*
 * APCL homepage — blue corporate theme
 * Replace this component in your existing React project.
 *
 * Photo handling:
 * The component first uses the local paths below. If a file is missing,
 * it switches to an online fallback. For production, use APCL-owned photos.
 */
const heroSlides = [
  {
    eyebrow: "Electrical Engineering & Consultancy",
    title: "Engineering confidence.",
    accent: "Powering progress.",
    description:
      "Independent electrical engineering support for design, inspection, testing and energy performance.",
    image: "/images/project-grid-substation.jpeg",
    fallback:
      "https://images.unsplash.com/photo-1473341304170-971b4b8c5c4a?auto=format&fit=crop&w=2200&q=85",
    cta: "Explore our services",
    href: "/design",
  },
  {
    eyebrow: "Renewable Energy",
    title: "Smarter solar.",
    accent: "Stronger performance.",
    description:
      "Renewable energy plant design, electrical assessment and testing support for dependable solar installations.",
    image: "/images/hero-solar.jpg",
    fallback:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85",
    cta: "Renewable energy services",
    href: "/design",
  },
  {
    eyebrow: "Infrared Thermography for Electrical Systems",
    title: "What you can't See",
    accent: "Can Still Fail",
    description:
      "Solar aerial thermography and electrical condition assessments to help identify anomalies and support maintenance decisions.",
    image: "/images/hero-thermography.jpg",
    fallback:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=85",
    cta: "Inspection services",
    href: "/testing",
  },
  {
    eyebrow: "Testing & Commissioning",
    title: "Measured carefully.",
    accent: "Trusted in practice.",
    description:
      "Medium-voltage and low-voltage inspection, testing and commissioning backed by careful measurement and technical reporting.",
    image: "/images/hero-testing.jpg",
    fallback:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2200&q=85",
    cta: "Testing services",
    href: "/testing",
  },
];

const serviceGroups = [
  {
    title: "Power System Design & Consultancy",
    description:
      "Power system modelling, simulation and engineering design using industry tools such as ETAP and PS CAD for dependable, standards-based solutions.",
    image: "/images/Power Systems Design Workstation.png",
    fallback:
      "https://images.unsplash.com/photo-1473341304170-971b4b8c5c4a?auto=format&fit=crop&w=1200&q=85",
    Icon: DraftingCompass,
    href: "/design",
  },
  {
    title: "MEP Design & Consultancy",
    description:
      "Integrated electrical and building services design consultancy tailored to project requirements, functionality and applicable standards.",
    image: "/images/mep-design.jpg",
    fallback:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    Icon: Building2,
    href: "/design",
  },
  {
    title: "Testing & Commissioning",
    description:
      "Inspection, testing and commissioning of electrical installations, MV/LV switchgear, transformers, cables and protection systems.",
    image: "/images/Medium-Voltage Switchgear Testing.png",
    fallback:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85",
    Icon: Cable,
    href: "/testing",
  },
  {
    title: "Electrical Safety Audit & Thermography",
    description:
      "Electrical safety assessments to identify installation risks, verify compliance and recommend practical corrective actions.",
    image: "/images/Thermal Inspection of Industrial Switchgear.png",
    fallback:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
    Icon: ShieldCheck,
    href: "/testing",
  },
  {
    title: "Renewable System Inspection & Testing",
    description:
      "Technical inspection, performance assessment and testing of renewable energy systems, including solar PV installations.",
    image: "/images/hero-solar.jpg",
    fallback:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    Icon: Sun,
    href: "/design",
  },
];

function Photo({ src, fallback, alt, className, loading = "lazy" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onError={(event) => {
        const image = event.currentTarget;
        if (!image.dataset.fallbackUsed) {
          image.dataset.fallbackUsed = "true";
          image.src = fallback;
        }
      }}
    />
  );
}

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="apcl-hero relative isolate flex min-h-[680px] items-start overflow-hidden bg-[#092d50] text-white md:min-h-[300px]">
      <style>{`
        @keyframes apclFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes apclZoom {
          from { transform: scale(1.02); }
          to { transform: scale(1.09); }
        }
        @keyframes apclProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .apcl-fade-up { animation: apclFadeUp .7s ease-out both; }
        .apcl-fade-delay { animation: apclFadeUp .8s .12s ease-out both; }
        .apcl-zoom { animation: apclZoom 6s ease-out both; }
        .apcl-progress { animation: apclProgress 6s linear both; }
        @media (prefers-reduced-motion: reduce) {
          .apcl-fade-up, .apcl-fade-delay, .apcl-zoom, .apcl-progress {
            animation: none !important;
          }
        }
      `}</style>

      {heroSlides.map((item, index) => (
        <div
          key={item.eyebrow}
          aria-hidden="true"
          className={`absolute inset-0 -z-30 transition-opacity duration-1000 ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Photo
            src={item.image}
            fallback={item.fallback}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            className={`h-full w-full object-cover ${
              active === index ? "apcl-zoom" : ""
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 -z-20 bg-[#062344]/50" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#061a32]/95 via-[#082b4e]/80 to-[#082b4e]/25" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#061a32]/90 via-transparent to-[#061a32]/20" />

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-00 pt-10 sm:px-8 md:pb-28 lg:px-14">
        <div key={active} className="max-w-4xl">
          <div className="apcl-fade-up mb-6 flex items-center gap-3">
            <span className="h-px w-11 bg-sky-300" />
            <span className="text-xs font-bold uppercase tracking-[0.23em] text-sky-200 sm:text-sm">
              {slide.eyebrow}
            </span>
          </div>
          <p className="apcl-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-sm">
            Amithi Power Consultants (Pvt) Ltd
          </p>
          <h1 className="apcl-fade-up max-w-4xl text-[2.8rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {slide.title}
            <span className="mt-2 block text-sky-300">{slide.accent}</span>
          </h1>
          <p className="apcl-fade-delay mt-7 max-w-2xl text-base leading-8 text-blue-50/90 sm:text-lg">
            {slide.description}
          </p>
          <div className="apcl-fade-delay mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to={slide.href}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-white px-6 py-4 text-sm font-bold text-[#123b64] transition hover:bg-sky-100"
            >
              {slide.cta}
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/40 bg-white/5 px-6 py-0 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Contact our team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/15">
          <div key={active} className="apcl-progress h-full bg-sky-300" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const projectCarouselRef = useRef(null);
  const [projectCarouselPaused, setProjectCarouselPaused] = useState(false);
  const projectScrollAmount = 420;

  useEffect(() => {
    if (projectCarouselPaused || projects.length < 2) return undefined;

    const timer = window.setInterval(() => {
      const carousel = projectCarouselRef.current;
      if (!carousel) return;

      const atEnd =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 8;

      if (atEnd) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: projectScrollAmount, behavior: "smooth" });
      }
    }, 2500);

    return () => window.clearInterval(timer);
  }, [projectCarouselPaused]);

  return (
    <>
      <HeroSlider />

      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-0 px-5 sm:grid-cols-3 sm:px-8 lg:px-14">
          {[
            {
              Icon: DraftingCompass,
              title: "Engineering Design",
              text: "Plan with technical clarity.",
            },
            {
              Icon: Activity,
              title: "Testing & Commissioning",
              text: "Decisions supported by data.",
            },
            {
              Icon: ShieldCheck,
              title: "Quality & afety",
              text: "Understand risk and asset condition.",
            },
          ].map(({ Icon, title, text }, index) => (
            <div
              key={title}
              className={`flex items-start gap-4 py-7 sm:px-5 sm:py-8 ${
                index ? "border-t border-blue-50 sm:border-l sm:border-t-0" : ""
              }`}
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#123b64]">
                <Icon size={21} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#123b64]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT APCL — closely matching the supplied About Us reference */}
      <section className="bg-white">
        <div className="grid min-h-[610px] xl:grid-cols-[50%_50%]">
          {/* LEFT: two landscape photos, ribbon, and credential row */}
          <div className="relative isolate min-h-[580px] overflow-hidden bg-[#062b5d]">
            <div className="absolute inset-0 -z-30">
              <Photo
                src="https://images.unsplash.com/photo-1693013112835-5f3128bb555f?auto=format&fit=crop&w=1800&q=90"
                fallback="https://images.unsplash.com/photo-1693013112835-5f3128bb555f?auto=format&fit=crop&w=1800&q=90"
                alt="Electrical substation with power lines and wires"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Soft dark overlay keeps the centered credential row legible */}
            <div className="absolute inset-0 -z-20 bg-[#041b3b]/35" />
            <div className="absolute inset-x-0 top-1/2 -z-10 h-[48%] -translate-y-1/2 bg-gradient-to-r from-[#031b3b]/90 via-[#062b5d]/80 to-[#031b3b]/90" />

            {/* Top-left About Us ribbon */}
            <div className="absolute left-0 top-5 z-10 flex items-center">
              {/* <span className="bg-[#0868b4] px-8 py-3 text-lg font-bold text-white sm:text-xl">
                About Us
              </span> */}
              <span className="h-0 w-0 border-y-[25px] border-l-[20px] border-y-transparent border-l-[#0868b4]" />
              <span className="ml-[-8px] h-0 w-0 border-y-[25px] border-l-[12px] border-y-transparent border-l-[#2c91d3]" />
            </div>

            {/* Credentials arranged in one horizontal strip */}
            <div className="absolute left-0 right-0 top-1/2 z-10 grid -translate-y-1/2 grid-cols-2 px-4 py-5 text-white sm:grid-cols-4 sm:px-5 lg:px-4 2xl:px-6">
              {[
                {
                  Icon: Activity,
                  title: "22+ Years",
                  description: "Engineering Experience",
                },
                {
                  Icon: ShieldCheck,
                  title: "ISO 9001:2015",
                  description: "Certified Quality Management System",
                },
                {
                  Icon: Zap,
                  title: "End-to-End",
                  description: "Engineering Solutions",
                },
                {
                  Icon: Building2,
                  title: "Global Reach",
                  description: "Local & International Projects",
                },
              ].map(({ Icon, title, description }, index) => (
                <div
                  key={title}
                  className={`min-w-0 px-3 py-3 ${
                    index > 0 ? "sm:border-l sm:border-white/45" : ""
                  }`}
                >
                  <Icon size={27} className="mb-3 text-white" />
                  <h3 className="text-base font-bold leading-tight sm:text-lg xl:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/95 sm:text-[13px]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: company profile */}
          <div className="relative flex items-center bg-white px-6 py-12 sm:px-10 sm:py-12 lg:px-12 xl:px-14">
            {/* Distinct angled blue separator, similar to the reference */}
            {/* <div className="absolute -left-1 top-0 hidden h-full w-10 bg-[#0879bd] [clip-path:polygon(100%_0,30%_0,0_50%,100%_100%,30%_100%)] xl:block" /> */}

            <div className="mx-auto w-full max-w-3xl">
              <div className="mb-4 h-1 w-16 bg-[#1769aa]" />
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-[#123b70] sm:text-4xl lg:text-[2.65rem]">
                About Amithi Power Consultants
              </h2>
              <p className="mt-3 text-base font-bold italic leading-7 text-[#17558e] sm:text-lg">
                Engineering Excellence. Powering a Safer, Smarter, and More
                Sustainable Future.
              </p>

              <div className="mt-6 space-y-3 text-justify text-sm leading-[1.45] text-slate-900 sm:text-[15px]">
                <p>
                  Established in 2002 and registered in 2004,{" "}
                  <strong>Amithi Power Consultants (Pvt) Ltd (APCL)</strong> is
                  a pioneering electrical engineering consultancy in Sri Lanka,
                  founded by the late <strong>Eng. Rienzie Fernando</strong>,
                  former Chief Engineer (Transmission Maintenance) of the Ceylon
                  Electricity Board.
                </p>
                <p>
                  Building upon his vision and engineering legacy, APCL has
                  grown into a trusted engineering consultancy with over two
                  decades of experience in electrical power engineering,
                  building services, testing, commissioning, and energy
                  consultancy.
                </p>
                <p>
                  We deliver comprehensive engineering solutions to utilities,
                  industrial facilities, commercial developments, and
                  infrastructure projects in Sri Lanka and internationally. Our
                  expertise encompasses engineering design, power system
                  studies, electrical safety and energy audits, testing and
                  commissioning, renewable energy integration, and specialized
                  engineering consultancy.
                </p>
                <p>
                  Supported by experienced professional engineers, advanced
                  engineering software, and specialized testing instruments, we
                  are committed to delivering technically sound, economically
                  viable, and quality-driven solutions that enhance the safety,
                  reliability, and efficiency of electrical systems.
                </p>
                <p>
                  At APCL, we continue to uphold our founder's vision through
                  engineering excellence, professional integrity, and an
                  unwavering commitment to our clients.
                </p>
              </div>

              <p className="mt-5 border-l-4 border-[#1769aa] pl-4 text-base font-bold italic leading-7 text-[#174d85] sm:text-lg">
                Amithi Power Consultants — Trusted Expertise. Proven
                Engineering. Lasting Value.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 bg-[#2676b8] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#195d98]"
              >
                Learn More <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — four main APCL service categories */}
      <section className="bg-[#f3f7fb] py-20 sm:py-5" id="services">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="font-sans text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#123b64] sm:text-5xl md:text-6xl lg:text-7xl">
              Our Services
            </h2>
            <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-blue-700" />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {serviceGroups.map(
              ({ Icon, title, description, image, fallback, href }) => (
                <Link
                  key={title}
                  to={href}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(18,59,100,0.13)]"
                >
                  <div className="relative h-52 overflow-hidden bg-blue-100">
                    <Photo
                      src={image}
                      fallback={fallback}
                      alt={title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08294b]/75 via-[#08294b]/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-lg bg-white text-[#123b64] shadow-md">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl font-bold leading-snug text-[#123b64]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {description}
                    </p>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* KEY PROJECTS — auto-scrolling project carousel */}
      <section className="relative overflow-hidden bg-[#f3f7fb] py-20 sm:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.045em] text-[#123b64] sm:text-5xl lg:text-6xl">
                Key Projects
              </h2>
              <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-blue-700 sm:mx-0" />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Scroll projects left"
                onClick={() =>
                  projectCarouselRef.current?.scrollBy({
                    left: -projectScrollAmount,
                    behavior: "smooth",
                  })
                }
                className="grid h-11 w-11 place-items-center rounded-full border border-blue-200 bg-white text-[#123b64] shadow-sm transition hover:bg-blue-50"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Scroll projects right"
                onClick={() =>
                  projectCarouselRef.current?.scrollBy({
                    left: projectScrollAmount,
                    behavior: "smooth",
                  })
                }
                className="grid h-11 w-11 place-items-center rounded-full border border-blue-200 bg-white text-[#123b64] shadow-sm transition hover:bg-blue-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={projectCarouselRef}
            onMouseEnter={() => setProjectCarouselPaused(true)}
            onMouseLeave={() => setProjectCarouselPaused(false)}
            onFocus={() => setProjectCarouselPaused(true)}
            onBlur={() => setProjectCarouselPaused(false)}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:thin] [scrollbar-color:#b7cce0_transparent]"
          >
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex w-[85%] min-w-0 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(18,59,100,0.14)] sm:w-[48%] lg:w-[32%]"
              >
                <div className="relative h-56 overflow-hidden bg-blue-100">
                  <Photo
                    src={project.image}
                    fallback="https://images.unsplash.com/photo-1473341304170-971b4b8c5c4a?auto=format&fit=crop&w=1200&q=80"
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08294b]/65 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-center text-lg font-bold leading-snug text-[#123b64] sm:text-xl">
                    {project.title}
                  </h3>

                  {project.description?.trim() && (
                    <div className="mt-4 flex-1">
                      {(() => {
                        const points = project.description
                          .split("\\n")
                          .map((item) => item.trim())
                          .filter(Boolean);

                        if (points.length === 1) {
                          return (
                            <p className="text-center text-sm leading-6 text-slate-600">
                              {points[0]}
                            </p>
                          );
                        }

                        return (
                          <ul className="mx-auto w-fit space-y-2 text-left text-sm leading-6 text-slate-600">
                            {points.map((item, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1769aa]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      })()}
                    </div>
                  )}
                  <div className="mt-5 h-px bg-blue-100" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#1769aa] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#12558c]"
            >
              View All Projects <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0b3157] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center lg:px-14 lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-sky-200">
              Start a conversation
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Have an engineering challenge?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/75 sm:text-base">
              Tell us about your project requirements and speak with the APCL
              team.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-md bg-white px-7 py-4 text-sm font-bold text-[#123b64] transition hover:bg-blue-50"
          >
            Contact our team <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
