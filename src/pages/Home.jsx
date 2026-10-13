import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  ShieldCheck,
  Zap,
  DraftingCompass,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { projects } from "../data";
import { SectionHeading } from "../components/Layout";
const services = [
  [
    Activity,
    "Testing & Commissioning",
    "HV, MV and LV testing, inspection and commissioning support.",
    "/testing",
  ],
  [
    DraftingCompass,
    "Design & Consultancy",
    "Electrical power engineering and building services design.",
    "/design",
  ],
  [
    Zap,
    "Energy & Power Quality",
    "Energy audits, power quality monitoring and engineering analysis.",
    "/testing",
  ],
  [
    ShieldCheck,
    "Safety & Condition Assessment",
    "Electrical safety audits, thermography and equipment assessments.",
    "/testing",
  ],
];
export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#123b64]">
        <div className="absolute inset-0 -z-20 bg-[url('/images/project-colombo-port-city.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081c32]/95 via-[#123b64]/85 to-[#123b64]/45" />
        <div className="mx-auto grid min-h-[610px] max-w-7xl items-center gap-12 px-5 py-20 md:px-6 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[.14em] text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> ESTABLISHED
              2004 · ENGINEERING EXCELLENCE
            </p>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering confidence for a{" "}
              <span className="block text-amber-300">
                power-connected world.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Amithi Power Consultants (Pvt) Ltd provides electrical power
              engineering, design consultancy, testing, commissioning, audits
              and technical analysis for utilities, commercial facilities and
              industry.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/design"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-amber-400 px-7 py-4 font-extrabold text-[#123b64] hover:bg-amber-300"
              >
                Explore Our Services <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 px-7 py-4 font-bold text-white hover:bg-white/10"
              >
                Discuss a Project <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-200">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-amber-300" /> Design &
                Engineering
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-amber-300" /> Testing &
                Commissioning
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-auto max-w-sm rounded-2xl border border-white/20 bg-white/10 p-7 text-white shadow-2xl backdrop-blur-md">
              <img
                src="/images/apcl-logo.png"
                alt="APCL logo"
                className="h-16 w-16 rounded-xl bg-white object-contain p-1"
              />
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[.18em] text-amber-200">
                Amithi Power Consultants
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug">
                From engineering studies to on-site testing and technical
                reporting.
              </h2>
              <p className="mt-5 border-t border-white/20 pt-5 text-sm leading-7 text-slate-200">
                A practical, quality-focused approach to electrical engineering
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 md:px-6">
          {[
            [
              DraftingCompass,
              "Design & Consultancy",
              "Planning, design and technical review",
            ],
            [
              Activity,
              "Testing & Measurement",
              "Inspection, measurement and analysis",
            ],
            [
              ShieldCheck,
              "Quality & Safety",
              "Engineering assessment and reporting",
            ],
          ].map(([Icon, title, text]) => (
            <div key={title} className="flex items-start gap-4">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-[#123b64]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About APCL"
              title="A specialist engineering consultancy with a broad technical scope."
              text="APCL's company profile describes experience across electrical design and consultation, power system studies, testing and commissioning, energy consultation and auditing. The team supports projects from concept and design review through to inspection and analysis."
            />
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-extrabold text-[#123b64] hover:text-amber-700"
            >
              Learn more about APCL <ArrowRight size={18} />
            </Link>
          </div>
          <img
            src="/images/project-grid-substation.jpeg"
            alt="Electrical substation engineering project"
            className="h-[340px] w-full rounded-2xl object-cover shadow-xl md:h-[430px]"
          />
        </div>
      </section>
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Services"
              title="Technical capability across power and building systems."
              text="Explore the dedicated Design and Testing Division pages for full service details."
            />
            <Link
              to="/design"
              className="inline-flex shrink-0 items-center gap-2 font-extrabold text-amber-700"
            >
              All services <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([Icon, title, text, to]) => (
              <Link
                key={title}
                to={to}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
              >
                <span className="inline-flex rounded-xl bg-[#eaf1f8] p-3 text-[#123b64] group-hover:bg-amber-100">
                  <Icon size={25} />
                </span>
                <h3 className="mt-6 text-lg font-extrabold text-[#123b64]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-amber-700">
                  Explore <ChevronRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected Projects"
              title="Engineering work across diverse sectors."
              text="Selected examples from the supplied company profile."
            />
            <Link
              to="/projects"
              className="inline-flex shrink-0 items-center gap-2 font-extrabold text-amber-700"
            >
              View projects <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article
                key={p.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                    {p.type}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#123b64]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-amber-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-2xl font-black text-[#123b64]">
              Have an engineering requirement?
            </h2>
            <p className="mt-2 text-sm text-[#123b64]/80">
              Contact APCL to discuss your project scope.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#123b64] px-6 py-4 font-extrabold text-white hover:bg-slate-800"
          >
            Contact Our Team <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
