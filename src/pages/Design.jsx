import { DraftingCompass, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, SectionHeading } from "../components/Layout";
import { designAreas, designServices } from "../data";
export default function Design() {
  return (
    <>
      <PageHero
        eyebrow="Design Division"
        title="Electrical power & building services engineering."
        subtitle="Design, review, simulation, consultancy and engineering supervision across power and building systems."
        image="/images/project-transmission-line.jpeg"
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Division Services"
            title="From concept design to project support."
            text="These service categories are based on the Design Division section of the APCL company profile."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {designServices.map(([title, description], i) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="inline-flex rounded-xl bg-amber-50 p-3 text-amber-700">
                  <DraftingCompass size={23} />
                </span>
                <p className="mt-5 text-xs font-black text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-lg font-extrabold text-[#123b64]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Technical Capabilities"
            title="Specialist design and analysis areas."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {designAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-extrabold text-[#123b64]">
                  {area.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {area.items.map((item) => (
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
        </div>
      </section>
      <section className="bg-[#123b64] py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-2xl font-black">
              Discuss a design or engineering study
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Contact APCL to discuss your project scope and requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-4 font-extrabold text-[#123b64]"
          >
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
