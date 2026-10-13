import { Activity, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, SectionHeading } from "../components/Layout";
import { testingServices } from "../data";
export default function Testing() {
  return (
    <>
      <PageHero
        eyebrow="Testing Division"
        title="Inspection, testing and commissioning services."
        subtitle="Electrical testing and commissioning, safety audits, energy audits, condition monitoring and equipment assessment."
        image="/images/project-substation.jpeg"
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Testing Services"
            title="Testing tailored to electrical system requirements."
            text="These service groups follow the testing capabilities described in the APCL company profile. Actual test scope and ratings must be agreed for each project."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {testingServices.map((s, i) => (
              <article
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="rounded-xl bg-amber-50 p-3 text-amber-700">
                    <Activity size={24} />
                  </span>
                  <div>
                    <p className="text-xs font-black text-slate-300">
                      SERVICE GROUP {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-[#123b64]">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-amber-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs leading-6 text-slate-500">
            Test methods, equipment ratings and acceptance criteria must be
            verified against applicable standards, client specifications and
            approved method statements.
          </p>
        </div>
      </section>
      <section className="bg-[#123b64] py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-2xl font-black">
              Need testing or a technical assessment?
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Send the equipment details and requested scope to our team.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-4 font-extrabold text-[#123b64]"
          >
            Request an enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
