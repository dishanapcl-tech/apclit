import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import {
  cpdEvents,
  isRegistrationOpen,
  formatDeadline,
} from "../data/newsEventsData";

export default function AcademyDetailPage() {
  const { slug } = useParams();
  const event = cpdEvents.find((item) => item.slug === slug);
  if (!event)
    return (
      <PageHeader
        eyebrow="APCL Academy"
        title="Programme not found"
        description="This programme may have been removed or the link may be incorrect."
      />
    );
  const open = isRegistrationOpen(event.registrationDeadline);
  return (
    <>
      <PageHeader
        eyebrow="APCL Academy"
        title={event.title}
        description={event.summary}
      />
      <main className="min-h-[55vh] bg-[#F1F6FB]">
        <article className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:py-14">
          <Link
            to="/academy"
            className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-[#286B9D] hover:text-[#123B64]"
          >
            <ArrowLeft size={16} /> Back to APCL Academy
          </Link>
          <div className="overflow-hidden rounded-xl border border-[#DCE6EF] bg-white shadow-sm">
            <img
              src={event.image}
              alt={event.imageAlt || event.title}
              className="max-h-[480px] w-full bg-[#E5EEF6] object-cover"
              onError={(e) => {
                if (event.fallbackImage && !e.currentTarget.dataset.fallback) {
                  e.currentTarget.dataset.fallback = "1";
                  e.currentTarget.src = event.fallbackImage;
                }
              }}
            />
            <div className="p-6 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide ${open ? "border-[#BBE5CB] bg-[#E9F8EF] text-[#168044]" : "border-[#DCE6EF] bg-[#F1F6FB] text-[#58718A]"}`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${open ? "bg-[#22A05A]" : "bg-[#91A4B7]"}`}
                  />
                  {open
                    ? "Registration Open"
                    : event.registrationDeadline
                      ? "Registration Closed"
                      : "Registration Details to Be Announced"}
                </span>
                {event.category && (
                  <span className="rounded-md bg-[#EAF3FA] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#245B85]">
                    {event.category}
                  </span>
                )}
              </div>
              <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#123B64] sm:text-3xl">
                {event.title}
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {event.summary}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Info
                  icon={<CalendarDays size={19} />}
                  label="Programme Date"
                  value={event.date || "To be announced"}
                />
                <Info
                  icon={<MapPin size={19} />}
                  label="Venue"
                  value={event.venue || "To be announced"}
                />
                {event.registrationDeadline && (
                  <Info
                    icon={<Clock size={19} />}
                    label="Registration Deadline"
                    value={formatDeadline(event.registrationDeadline)}
                  />
                )}
              </div>
              <section className="mt-9">
                <h2 className="text-xl font-bold text-[#123B64]">
                  Programme Overview
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
                  {(event.content || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
              {event.objectives?.length > 0 && (
                <section className="mt-8">
                  <h2 className="text-xl font-bold text-[#123B64]">
                    Programme Objectives
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {event.objectives.map((o, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-[#3B82B8]"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {event.audience && (
                <section className="mt-8 rounded-lg border border-[#DCE8F2] bg-[#F4F8FC] p-5">
                  <h2 className="font-bold text-[#123B64]">
                    Target Participants
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {event.audience}
                  </p>
                </section>
              )}
              <section className="mt-9 rounded-xl bg-[#123B64] p-6 text-white sm:p-8">
                <h2 className="text-xl font-bold">Registration & Enquiries</h2>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  {open
                    ? "For registration details and further information about this programme, please contact APCL."
                    : "Please contact APCL to enquire about this programme or future sessions."}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#123B64] hover:bg-blue-50"
                >
                  Contact APCL <ArrowRight size={16} />
                </Link>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
function Info({ icon, label, value }) {
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-lg border border-[#DCE8F2] bg-[#F4F8FC] p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E1EDF7] text-[#286B9D]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B8299]">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold leading-5 text-[#123B64]">
          {value}
        </p>
      </div>
    </div>
  );
}
