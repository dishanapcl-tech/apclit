
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarDays,
  MapPin,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
} from "lucide-react";

import { cpdEvents } from "../data/newsEventsData";

// =====================================================
// CAROUSEL SETTINGS
// =====================================================

const AUTO_SLIDE_DURATION = 5000;
const SLIDE_ANIMATION_DURATION = 450;

// =====================================================
// REGISTRATION STATUS
// =====================================================

const isRegistrationOpen = (deadline) => {
  if (!deadline) return false;

  const [year, month, day] = deadline.split("-").map(Number);

  if (!year || !month || !day) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadlineDate = new Date(year, month - 1, day);
  deadlineDate.setHours(0, 0, 0, 0);

  return today <= deadlineDate;
};

// =====================================================
// MAIN CPD SECTION
// =====================================================

export default function CPDEventsSection({
  title = "APCL Academy",
}) {
  // Get upcoming programmes
  const upcomingEvents = cpdEvents.filter(
    (event) => event.status !== "Completed"
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalEvents = upcomingEvents.length;

  // =====================================================
  // CPD DETAIL PAGE LINK
  // =====================================================

  const getEventLink = (event) => {
    return event.slug ? `/academy/${event.slug}` : "/academy";
  };

  // =====================================================
  // NEXT EVENT
  // =====================================================

  const nextEvent = useCallback(() => {
    if (totalEvents <= 1) return;

    setCurrentIndex((prev) => (prev + 1) % totalEvents);
  }, [totalEvents]);

  // =====================================================
  // PREVIOUS EVENT
  // =====================================================

  const previousEvent = useCallback(() => {
    if (totalEvents <= 1) return;

    setCurrentIndex((prev) => (prev - 1 + totalEvents) % totalEvents);
  }, [totalEvents]);

  // =====================================================
  // AUTOMATIC SLIDING
  // =====================================================

  useEffect(() => {
    if (totalEvents <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalEvents);
    }, AUTO_SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [totalEvents, isPaused]);

  // =====================================================
  // ACTIVE EVENT
  // =====================================================

  const activeEvent = upcomingEvents[currentIndex];

  const registrationOpen = activeEvent
    ? isRegistrationOpen(activeEvent.registrationDeadline)
    : false;

  return (
    <section
      className="h-full min-w-0 bg-[#F1F6FB] pt-2 pb-7 sm:pt-3 sm:pb-7"
      aria-labelledby="apcl-events-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto h-full min-w-0 max-w-[1440px] px-5 sm:px-8 lg:px-10 2xl:px-12">

        {/* ================= SECTION HEADER ================= */}

        <div className="mb-6 flex min-w-0 flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-2">

          <h2
            id="apcl-events-heading"
            className="text-2xl font-extrabold tracking-tight text-[#123B64] sm:text-3xl"
          >
            {title}
          </h2>

          {/* NAVIGATION + VIEW ALL */}

          <div className="flex shrink-0 items-center gap-2">

            {totalEvents > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousEvent}
                  aria-label="Previous event"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D5E3EF] bg-white text-[#245B85] shadow-sm transition hover:border-[#3B82B8] hover:bg-[#EAF3FA] active:scale-95"
                >
                  <ChevronLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={nextEvent}
                  aria-label="Next event"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D5E3EF] bg-white text-[#245B85] shadow-sm transition hover:border-[#3B82B8] hover:bg-[#EAF3FA] active:scale-95"
                >
                  <ChevronRight size={19} />
                </button>
              </>
            )}

            <Link
              to="/news"
              className="group inline-flex items-center gap-2 rounded-lg border border-[#D5E3EF] bg-white px-3 py-2.5 text-xs font-bold text-[#245B85] shadow-sm transition hover:border-[#3B82B8] hover:bg-[#EAF3FA]"
            >
              View All

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>

        {/* ================= CPD EVENT CARD ================= */}

        {activeEvent ? (
          <article
            key={activeEvent.id}
            className="animate-cpd-slide group flex min-w-0 flex-col gap-4 overflow-hidden rounded-xl border border-[#DCE6EF] bg-white p-3 shadow-[0_2px_8px_rgba(30,58,90,0.04)] transition-all duration-300 hover:border-[#B8D2E7] hover:shadow-lg sm:h-[252px] sm:flex-row sm:gap-5 sm:p-3.5"
          >

            {/* EVENT IMAGE - CLICKABLE */}

            <Link
              to={getEventLink(activeEvent)}
              aria-label={`View ${activeEvent.title}`}
              className="relative block h-48 w-full shrink-0 overflow-hidden rounded-lg bg-[#E5EEF6] sm:h-[220px] sm:w-[240px]"
            >

              {activeEvent.cardImage || activeEvent.image ? (
                <img
                  src={activeEvent.cardImage || activeEvent.image}
                  alt={activeEvent.imageAlt || activeEvent.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(event) => {
                    if (
                      activeEvent.fallbackImage &&
                      !event.currentTarget.dataset.fallback
                    ) {
                      event.currentTarget.dataset.fallback = "true";
                      event.currentTarget.src = activeEvent.fallbackImage;
                    }
                  }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[#7D9BB5]">
                  <GraduationCap size={40} strokeWidth={1.3} />
                </div>
              )}

            </Link>

            {/* EVENT CONTENT */}

            <div className="flex min-w-0 flex-1 flex-col justify-center px-1 py-2 sm:px-2 sm:py-1">

              {/* REGISTRATION STATUS */}

              <div className="mb-2">
                {registrationOpen ? (
                  <span className="inline-flex w-fit items-center gap-2 rounded-md border border-[#BBE5CB] bg-[#E9F8EF] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#168044]">
                    <span className="h-2 w-2 rounded-full bg-[#22A05A]" />
                    Registration Open
                  </span>
                ) : (
                  <span className="inline-flex w-fit items-center gap-2 rounded-md border border-[#DCE6EF] bg-[#F1F6FB] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#58718A]">
                    <span className="h-2 w-2 rounded-full bg-[#91A4B7]" />

                    {activeEvent.registrationDeadline
                      ? "Registration Closed"
                      : "Registration Details to Be Announced"}
                  </span>
                )}
              </div>

              {/* EVENT TITLE - CLICKABLE */}

              <h3 className="break-words text-base font-bold leading-snug text-[#123B64] transition-colors group-hover:text-[#3B82B8] sm:text-lg">
                <Link
                  to={getEventLink(activeEvent)}
                  className="hover:text-[#3B82B8]"
                >
                  {activeEvent.title}
                </Link>
              </h3>

              {/* EVENT DESCRIPTION */}

              <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-slate-500">
                {activeEvent.summary}
              </p>

              {/* DATE AND VENUE */}

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">

                {/* DATE */}

                <div className="inline-flex min-w-0 items-center gap-2 rounded-md border border-[#DCE8F2] bg-[#F4F8FC] px-2.5 py-1.5">
                  <CalendarDays
                    size={15}
                    className="shrink-0 text-[#286B9D]"
                  />

                  <span className="text-xs font-semibold text-[#245B85]">
                    {activeEvent.date || "Date to be announced"}
                  </span>
                </div>

                {/* VENUE */}

                <div className="inline-flex min-w-0 items-center gap-2 rounded-md border border-[#DCE8F2] bg-[#F4F8FC] px-2.5 py-1.5">
                  <MapPin
                    size={15}
                    className="shrink-0 text-[#286B9D]"
                  />

                  <span className="text-xs font-semibold text-[#245B85]">
                    {activeEvent.venue || "Venue to be announced"}
                  </span>
                </div>

              </div>

              {/* VIEW PROGRAMME BUTTON - DIRECT DETAIL LINK */}

              <Link
                to={getEventLink(activeEvent)}
                className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-[#286B9D] px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#123B64] active:scale-95"
              >
                {activeEvent.buttonLabel || "View Programme"}

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </article>

        ) : (

          /* EMPTY STATE */

          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#C9D9E7] bg-white px-6 py-12 text-center">

            <GraduationCap size={32} className="mb-3 text-[#3B82B8]" />

            <h3 className="text-sm font-bold text-[#123B64]">
              No Upcoming Events
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              New professional development programmes will be announced here.
            </p>

          </div>
        )}

        {/* ================= CAROUSEL INDICATORS ================= */}

        {totalEvents > 1 && (
          <div className="mt-4 flex items-center justify-between">

            <div className="flex items-center gap-1.5">
              {upcomingEvents.map((event, index) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to event ${index + 1}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-7 bg-[#3B82B8]"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <span className="text-[11px] font-semibold tabular-nums text-slate-400">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(totalEvents).padStart(2, "0")}
            </span>

          </div>
        )}

      </div>

      {/* ================= SLIDE ANIMATION ================= */}

      <style>{`
        @keyframes cpdSlide {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-cpd-slide {
          animation: cpdSlide ${SLIDE_ANIMATION_DURATION}ms ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-cpd-slide {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}
