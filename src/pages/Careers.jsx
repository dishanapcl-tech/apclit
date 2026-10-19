
import { useState, useEffect } from "react";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  BriefcaseBusiness,
  Zap,
  ClipboardCheck,
  Wrench,
  FileText,
  Mail,
  CheckCircle2,
  Building2,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/Layout";

const trainingAreas = [
  {
    icon: Building2,
    title: "Electrical System Design",
    description:
      "Gain exposure to electrical engineering design assignments and practical engineering solutions.",
  },
  {
    icon: Zap,
    title: "Power System Studies",
    description:
      "Learn about power system studies, technical analysis and electrical system performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Commissioning",
    description:
      "Observe and participate in electrical testing and commissioning activities under professional guidance.",
  },
  {
    icon: Award,
    title: "Electrical Audits & Inspections",
    description:
      "Develop an understanding of electrical safety assessments, inspections and condition evaluations.",
  },
  {
    icon: Wrench,
    title: "Servicing & Maintenance",
    description:
      "Gain industry exposure to electrical infrastructure servicing and maintenance activities.",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description:
      "Develop practical skills in engineering documentation, technical reports and professional communication.",
  },
];

const trainingBenefits = [
  {
    icon: Award,
    title: "Recognized Training Organization",
    description:
      "APCL is registered as a training organization with the Institution of Engineers, Sri Lanka (IESL), with training supported by qualified and experienced engineers.",
  },
  {
    icon: Users,
    title: "Proven Training Experience",
    description:
      "APCL has trained over 150 engineering students from state and private universities in Sri Lanka and overseas universities.",
  },
  {
    icon: BookOpen,
    title: "Industry-Focused Learning",
    description:
      "Bridge academic knowledge and real-world engineering practice through exposure to day-to-day engineering activities.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description:
      "Build technical competencies, practical experience and professional confidence for the engineering industry.",
  },
];

const opportunities = [
  {
    number: "01",
    icon: GraduationCap,
    title: "In-Plant Training Program",
    label: "For eligible undergraduates",
    description:
      "Designed for Electrical Engineering undergraduates seeking hands-on experience in a professional engineering environment.",
    details: [
      "For students from UGC-approved local universities.",
      "Registration through the relevant NAITA training schemes.",
      "Non-paid training program.",
      "Practical exposure to engineering activities, subject to training availability.",
    ],
    note:
      "Eligibility and placement are subject to the applicable training scheme and APCL's training capacity.",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Customized Training Program",
    label: "Paid technical training",
    description:
      "Customized training opportunities for individuals, students, graduate engineers and organizations seeking specialized technical knowledge and practical industry exposure.",
    details: [
      "Students from foreign universities.",
      "Students from local institutions outside the applicable NAITA-approved schemes.",
      "Graduate engineers seeking additional industrial exposure.",
      "Organizations requiring specialized staff training.",
      "Professionals seeking competency development.",
    ],
    note:
      "Program scope and fees depend on the training requirements, available resources and agreed arrangements.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[.2em] text-amber-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#123b64] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function OpportunityCard({ opportunity }) {
  const Icon = opportunity.icon;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
      <div className="h-1.5 bg-[#123b64]" />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
            <Icon size={28} />
          </div>
          <span className="text-3xl font-black text-slate-200">
            {opportunity.number}
          </span>
        </div>

        <p className="mt-6 text-xs font-extrabold uppercase tracking-wider text-amber-700">
          {opportunity.label}
        </p>

        <h3 className="mt-2 text-2xl font-black text-[#123b64]">
          {opportunity.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {opportunity.description}
        </p>

        <ul className="mt-6 space-y-3">
          {opportunity.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-amber-600"
              />
              <span className="text-sm leading-6 text-slate-600">
                {detail}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 rounded-xl bg-slate-50 p-4 text-xs leading-6 text-slate-500">
          {opportunity.note}
        </p>

        <a
          href={`mailto:internships@apcl.lk?subject=${encodeURIComponent(
            `APCL ${opportunity.title} Enquiry`,
          )}`}
          className="mt-auto flex items-center justify-center gap-3 pt-7 font-extrabold text-[#123b64] transition hover:text-amber-700"
        >
          Enquire About This Program
          <ArrowRight size={18} />
        </a>
      </div>
    </article>
  );
}

export default function Careers() {
  const [interest, setInterest] = useState("In-Plant Training");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [message, setMessage] = useState("");

  function submitEnquiry(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `APCL Careers & Training Enquiry - ${interest}`,
    );

    const body = encodeURIComponent(
      [
        "Careers & Training Enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `University / Organization: ${institution || "Not provided"}`,
        `Area of Interest: ${interest}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    window.location.href =
      `mailto:internships@apcl.lk?subject=${subject}&body=${body}`;
  }

  return (
    <>
      {/* Hero */}
      
      {/* Hero feature banner using an existing website image */}
<section className="w-full bg-white px-0 pt-1 pb-3 md:pt-1 md:pb-5">
  <div className="grid w-full grid-cols-1 overflow-hidden bg-[#123b64] lg:grid-cols-2">
    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
      <p className="text-xs font-black uppercase tracking-[.2em] text-amber-300">
        Learn. Experience. Grow.
      </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
              Turn engineering knowledge into practical experience.
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              At Amithi Power Consultants (Pvt) Ltd, our training
              opportunities aim to bridge academic learning and real-world
              engineering practice through exposure to professional
              engineering activities.
            </p>

            <a
              href="#training-opportunities"
              className="mt-7 inline-flex w-fit items-center gap-3 rounded-lg bg-amber-400 px-6 py-4 font-extrabold text-[#123b64] transition hover:bg-amber-300"
            >
              Explore Training Programs
              <ArrowRight size={18} />
            </a>
          </div>


<div className="relative min-h-64 overflow-hidden bg-slate-200 sm:min-h-80 lg:min-h-full">
  {/*
    Automatically change the displayed image every 4 seconds.
  */}
  <TrainingBannerSlideshow />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#123b64]/30 to-transparent" />
</div>

        </div>
      </section>

      {/* Why train with APCL */}
      <section className="bg-slate-50 px-5 py-10 md:px-6 md:py-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why Train With Us?"
            title="Learn from engineering professionals."
            description="Our training approach combines professional guidance, industry exposure and opportunities to understand practical engineering work."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trainingBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                      <Icon size={25} />
                    </div>
                    <span className="text-xl font-black text-slate-200">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold leading-7 text-[#123b64]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practical exposure */}
      <section className="bg-white px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Practical Engineering Exposure"
            title="Explore real engineering activities."
            description="Training assignments may cover a range of technical disciplines, subject to project schedules, available resources and the company's training capacity."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainingAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="flex gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-amber-300 hover:bg-amber-50/30"
                >
                  <div className="h-fit shrink-0 rounded-lg bg-[#123b64] p-3 text-white">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-extrabold leading-6 text-[#123b64]">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training opportunities */}
      <section
        id="training-opportunities"
        className="scroll-mt-8 bg-slate-50 px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Opportunities"
            title="Choose a training pathway."
            description="APCL offers in-plant training and customized technical training opportunities for eligible students, graduates, individuals and organizations."
          />

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            {opportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.number}
                opportunity={opportunity}
              />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-500">
            All opportunities are subject to eligibility, training resource
            availability, project schedules and APCL's capacity. Submission
            of an enquiry does not guarantee a placement.
          </p>
        </div>
      </section>

      {/* Careers and training enquiry form */}
      <section className="bg-white px-5 pt-6 pb-16 md:px-6 md:pt-8 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[.2em] text-amber-700">
              Start a Conversation
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#123b64] sm:text-4xl">
              Interested in joining our training programs?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Tell us about your academic background, organization and
              training interests. Our training coordination team can
              provide further information about relevant opportunities.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                  <Mail size={23} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Training Coordinator
                  </p>
                  <a
                    href="mailto:internships@apcl.lk"
                    className="mt-1 block break-all font-extrabold text-[#123b64] hover:text-amber-700"
                  >
                    internships@apcl.lk
                  </a>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Contact us for information about in-plant training,
                    internships and customized technical training.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-9">
            <h3 className="text-2xl font-black text-[#123b64]">
              Training enquiry
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Complete the details below to prepare an email to our training
              coordination team.
            </p>

            <form onSubmit={submitEnquiry} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="career-name"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Full Name *
                </label>
                <input
                  id="career-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  maxLength={150}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label
                  htmlFor="career-email"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Email Address *
                </label>
                <input
                  id="career-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  maxLength={254}
                  required
                  placeholder="you@university.edu"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label
                  htmlFor="career-institution"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  University / Organization
                </label>
                <input
                  id="career-institution"
                  type="text"
                  value={institution}
                  onChange={(event) => setInstitution(event.target.value)}
                  maxLength={200}
                  placeholder="Enter your university or organization"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label
                  htmlFor="career-interest"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Area of Interest *
                </label>
                <select
                  id="career-interest"
                  value={interest}
                  onChange={(event) => setInterest(event.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                >
                  <option value="In-Plant Training">
                    In-Plant Training
                  </option>
                  <option value="Customized Training">
                    Customized Training
                  </option>
                  <option value="Electrical Engineering Internship">
                    Electrical Engineering Internship
                  </option>
                  <option value="Graduate Engineer Training">
                    Graduate Engineer Training
                  </option>
                  <option value="Other Careers Enquiry">
                    Other Careers Enquiry
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="career-message"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Tell Us About Your Interest *
                </label>
                <textarea
                  id="career-message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  maxLength={5000}
                  rows={5}
                  required
                  placeholder="Tell us about your academic background, preferred training period and areas of interest..."
                  className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#123b64] px-6 py-4 font-extrabold text-white transition hover:bg-amber-600"
              >
                Prepare Training Enquiry
                <ArrowRight size={18} />
              </button>

              <p className="text-xs leading-5 text-slate-500">
                This form opens your default email application with your
                enquiry prepared. You must send the email from that
                application. No information is submitted to a server by
                this form.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-amber-400 px-5 py-10 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black text-[#123b64] sm:text-3xl">
              Start building your engineering future.
            </h2>
            <p className="mt-2 leading-7 text-[#123b64]/80">
              Contact APCL to discuss your training interests and
              professional development goals.
            </p>
          </div>

          <a
            href="mailto:internships@apcl.lk?subject=APCL%20Careers%20and%20Training%20Enquiry"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#123b64] px-6 py-4 font-extrabold text-white transition hover:bg-slate-800"
          >
            Contact Training Coordinator
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
  
}

function TrainingBannerSlideshow() {
  const photos = [
    "/images/training.jpeg",
    "/images/training-2.jpeg",
   
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % photos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="absolute inset-0">
      {photos.map((photo, index) => (
        <img
          key={photo}
          src={photo}
          alt={`APCL engineering training ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
