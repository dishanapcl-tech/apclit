import { Gauge, CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading } from "../components/Layout";
import { instruments } from "../data";
export default function Instruments() {
  return (
    <>
      <PageHero
        eyebrow="Testing Equipment"
        title="Testing and measuring instruments."
        subtitle="An overview of equipment identified in the APCL company profile. Availability, calibration status and current models should be verified before publication."
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Equipment Capability"
            title="Instrumentation supporting inspection and testing."
            text="This list is based on the Testing & Measuring Instruments section of the supplied profile."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-[1.3fr_.8fr_1fr] bg-[#123b64] px-5 py-4 text-xs font-extrabold uppercase tracking-wide text-white sm:px-6">
              <span>Instrument</span>
              <span>Manufacturer</span>
              <span>Model / notes</span>
            </div>
            {instruments.map((row, i) => (
              <div
                key={row[0]}
                className={`grid grid-cols-[1.3fr_.8fr_1fr] gap-3 px-5 py-5 text-sm sm:px-6 ${i % 2 ? "bg-slate-50" : "bg-white"}`}
              >
                <span className="flex gap-2 font-bold text-[#123b64]">
                  <Gauge size={17} className="mt-0.5 shrink-0 text-amber-700" />
                  {row[0]}
                </span>
                <span className="text-slate-600">{row[1]}</span>
                <span className="text-slate-500">{row[2]}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-start gap-2 text-xs leading-6 text-slate-500">
            <CheckCircle2 size={16} className="mt-1 shrink-0 text-amber-700" />{" "}
            Confirm current inventory, calibration validity and available ranges
            before publishing.
          </p>
        </div>
      </section>
    </>
  );
}
