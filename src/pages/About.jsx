import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Zap,
  Users,
  Target,
  Compass,
  CheckCircle2,
} from "lucide-react";

// Place your actual logo files in /public/images/ and update these paths if needed.
const COMPANY_LOGO = "/images/apcl_logo.png";
const ISO_LOGO = "/images/iso-9001-2015-logo.png";

const values = [
  [
    ShieldCheck,
    "Quality & Integrity",
    "Professional, reliable and technically sound engineering outcomes.",
  ],
  [
    Zap,
    "Engineering Excellence",
    "Practical solutions shaped by experience, analysis and modern tools.",
  ],
  [
    Users,
    "Client Partnership",
    "Clear communication and collaborative delivery throughout each project.",
  ],
  [
    Compass,
    "Continual Improvement",
    "Learning, reviewing and improving our services and processes.",
  ],
];

const capabilities = [
  "Electrical Power Engineering",
  "Building Services Engineering",
  "Testing & Commissioning",
  "Electrical Safety & Energy Assessments",
  "Renewable Energy Systems",
  "Power System Studies & Consultancy",
];

export default function AboutUs() {
  return (
    <main className="bg-white text-slate- ">
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,.22),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,.12),transparent_40%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12 lg:pb-5">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-sky-200">
              About Amithi Power Consultants
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering Excellence.
              <span className="block text-sky-300">
                Powering a Safer Future.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Amithi Power Consultants (Pvt) Ltd delivers practical, reliable
              and quality-driven engineering solutions across electrical power
              engineering and building services. We bring technical expertise
              and a client-focused approach to every project.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-amber-300"
              >
                Talk to our team <ArrowRight size={17} />
              </Link>
              <a
                href="#quality-policy"
                className="rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Our quality policy
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-3xl border border-sky-300/15" />
            <div className="relative rounded-2xl border border-white/10 bg-white/[.06] p-7 shadow-2xl backdrop-blur-sm sm:p-9">
                {/* <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-xl bg-white p-2 sm:h-32 sm:w-36">
                  <img
                    src={COMPANY_LOGO}
                    alt="Amithi Power Consultants logo"
                    className="max-h-20 max-w-full object-contain"
                  />
                </div> */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  ["22+ Years", "Engineering Experience"],
                  ["ISO 9001:2015", "Quality Management"],
                  ["Multi-Sector", "Engineering Solutions"],
                ].map(([v, l]) => (
                  <div key={v} className="rounded-xl bg-white/[.07] p-4">
                    <p className="text-lg text-center font-bold text-white">{v}</p>
                    <p className="mt-1 text-center text-xs leading-5 text-slate-300">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                Trusted engineering expertise, built on quality and professional
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-5">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-amber-600">
              Our story
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built on Experience.
              <br />
              Driven by Purpose.
            </h2>
            <div className="mt-7 h-1 w-16 rounded-full bg-amber-400" />
          </div>
          <div className="space-y-2 text-base leading-8 text-slate-600 text-justify">
            <p>
              Founded by the late{" "}
              <strong className="text-slate-900">Eng. Rienzie Fernando</strong>,
              former Chief Engineer (Transmission Maintenance) of the Ceylon
              Electricity Board, Amithi Power Consultants was established in
              2002 and registered in 2004.
            </p>
            <p>
              We have grown with a commitment to professional engineering,
              dependable service and long-term client relationships. Our work
              spans electrical power systems, building services, inspection,
              testing, commissioning and engineering consultancy.
            </p>
            <p>
              We believe good engineering means understanding project needs,
              identifying risks, making informed decisions and delivering
              solutions that support safety, performance and sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:px-8 md:grid-cols-2 lg:px-12">
          {[
            [
              Target,
              "Our Mission",
              "To provide quality engineering consultancy and technical services that help clients achieve safe, reliable, efficient and sustainable facilities.",
            ],
            [
              Compass,
              "Our Vision",
              "To be recognized for engineering excellence, professional responsibility and lasting value in power and built infrastructure.",
            ],
          ].map(([Icon, title, body]) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Icon size={24} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-700">
                {title}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                {title === "Our Mission"
                  ? "Deliver dependable engineering solutions."
                  : "Be a trusted engineering partner."}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-amber-600">
            What guides us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            The values behind our work
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Our principles shape how we approach engineering challenges and
            maintain service quality.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([Icon, title, body]) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-sky-700 group-hover:bg-sky-700 group-hover:text-white">
                <Icon size={23} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-amber-300">
              Our capabilities
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Integrated expertise for complex projects.
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              From planning and design to inspection and technical assessment,
              our multidisciplinary services help clients make confident
              engineering decisions.
            </p>
            <Link
              to="/design"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-300 hover:text-white"
            >
              Explore our services <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.05] p-5"
              >
                <CheckCircle2 className="shrink-0 text-amber-300" size={20} />
                <span className="text-sm font-medium text-slate-100">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quality-policy" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-amber-600">
                Quality commitment
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Quality is built into every step.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Our quality management system supports consistent service
                delivery, customer satisfaction and continual improvement.
              </p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex min-h-24 items-center justify-center rounded-xl bg-white p-4">
                  <img
                    src={ISO_LOGO}
                    alt="ISO 9001:2015 Quality Management System logo"
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-semibold text-slate-800">
                  ISO 9001:2015
                </p>
                <p className="mt-1 text-center text-xs text-slate-500">
                  Quality Management System
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Award size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-sky-700">
                    APCL Quality Policy
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-950">
                    Our commitment to quality
                  </h3>
                </div>
              </div>
              <p className="mt-6 leading-7 text-slate-600">
                Amithi Power Consultants (Pvt) Ltd is committed to providing
                engineering consultancy and technical services that meet
                applicable requirements and customer expectations. We strive to
                maintain the effectiveness of our Quality Management System in
                accordance with ISO 9001:2015 and continually improve our
                processes, competence and service delivery.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Understand and meet applicable statutory, regulatory and customer requirements.",
                  "Deliver technically sound, reliable and timely engineering services.",
                  "Develop the competence and awareness of our people.",
                  "Monitor performance, address risks and opportunities, and continually improve our processes.",
                  "Enhance customer satisfaction through professional service and effective communication.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-700"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-sky-700"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-slate-100 pt-5 text-xs leading-5 text-slate-500">
                Please verify this website draft against APCL’s approved
                controlled Quality Policy before publishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-700">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 py-12 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Let’s build a safer, smarter future.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-sky-100">
              Speak with our team about your engineering, inspection or
              consultancy requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-sky-800 hover:bg-sky-50"
          >
            Contact APCL <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
