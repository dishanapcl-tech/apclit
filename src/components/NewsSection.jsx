
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Newspaper,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { newsItems } from "../data/newsEventsData";

// Carousel settings
const AUTO_SLIDE_DURATION = 2000; // 3 seconds
const SLIDE_ANIMATION_DURATION = 450; // 450 milliseconds

export default function NewsSection({ title = "News" }) {
  // Get all featured news
  const featuredNews = newsItems.filter((item) => item.featured);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalNews = featuredNews.length;

  // Next news
  const nextNews = useCallback(() => {
    if (totalNews <= 1) return;

    setCurrentIndex((prev) => (prev + 1) % totalNews);
  }, [totalNews]);

  // Previous news
  const previousNews = useCallback(() => {
    if (totalNews <= 1) return;

    setCurrentIndex((prev) => (prev - 1 + totalNews) % totalNews);
  }, [totalNews]);

  // Automatic sliding every 5 seconds
  useEffect(() => {
    if (totalNews <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalNews);
    }, AUTO_SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [totalNews, isPaused]);

  // Active news item
  const activeNews = featuredNews[currentIndex];

  return (
    <section
      className="h-full min-w-0 bg-[#F1F6FB] pt-2 pb-7 sm:pt-3 sm:pb-7"
      aria-labelledby="apcl-news-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto h-full min-w-0 max-w-[1440px] px-5 sm:px-8 lg:px-10 2xl:px-12">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-6 flex min-w-0 flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">

          <div className="min-w-0">
            <h2
              id="apcl-news-heading"
              className="text-2xl font-extrabold tracking-tight text-[#123B64] sm:text-3xl"
            >
              {title}
            </h2>
          </div>

          {/* NAVIGATION ARROWS + VIEW ALL */}
          <div className="flex shrink-0 items-center gap-2">

            {totalNews > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousNews}
                  aria-label="Previous news"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D5E3EF] bg-white text-[#245B85] shadow-sm transition duration-200 hover:border-[#3B82B8] hover:bg-[#EAF3FA] active:scale-95"
                >
                  <ChevronLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={nextNews}
                  aria-label="Next news"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D5E3EF] bg-white text-[#245B85] shadow-sm transition duration-200 hover:border-[#3B82B8] hover:bg-[#EAF3FA] active:scale-95"
                >
                  <ChevronRight size={19} />
                </button>
              </>
            )}

            {/* <Link
              to="/news"
              className="group inline-flex items-center gap-2 rounded-lg border border-[#D5E3EF] bg-white px-3 py-2.5 text-xs font-bold text-[#245B85] shadow-sm transition duration-200 hover:border-[#3B82B8] hover:bg-[#EAF3FA]"
            >
              View All

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link> */}

          </div>
        </div>

        {/* ================= NEWS CAROUSEL ================= */}
        <div className="min-w-0">

          {activeNews ? (
            <article
              key={activeNews.id}
              className="animate-news-slide group flex min-w-0 flex-col gap-4 overflow-hidden rounded-xl border border-[#DCE6EF] bg-white p-3 shadow-[0_2px_8px_rgba(30,58,90,0.04)] transition-all duration-300 hover:border-[#B8D2E7] hover:shadow-lg sm:flex-row"
            >

              {/* NEWS IMAGE */}
              <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg bg-[#E5EEF6] sm:h-44 sm:w-44 lg:w-48">

                {activeNews.image ? (
                  <img
                    src={activeNews.image}
                    alt={activeNews.imageAlt || activeNews.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(event) => {
                      if (
                        activeNews.fallbackImage &&
                        !event.currentTarget.dataset.fallback
                      ) {
                        event.currentTarget.dataset.fallback = "true";
                        event.currentTarget.src = activeNews.fallbackImage;
                      }
                    }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[#7D9BB5]">
                    <Newspaper size={38} strokeWidth={1.3} />
                  </div>
                )}

              </div>

              {/* NEWS CONTENT */}
              <div className="flex min-w-0 flex-1 flex-col justify-center px-1 py-2 sm:px-2">

                {/* CATEGORY AND DATE */}
                <div className="mb-3 flex flex-wrap items-center gap-3">

                  <span className="inline-flex w-fit items-center rounded-md border border-[#D4E5F3] bg-[#EAF3FA] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#245B85]">
                    {activeNews.category}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                    <CalendarDays size={13} />
                    {activeNews.date}
                  </span>

                </div>

                {/* NEWS TITLE */}
                <h3 className="break-words text-base font-bold leading-snug text-[#123B64] transition-colors group-hover:text-[#3B82B8] sm:text-lg">
                  {activeNews.title}
                </h3>

                {/* NEWS DESCRIPTION */}
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                  {activeNews.summary}
                </p>

                {/* READ MORE */}
                {/* <Link
                  to={activeNews.href || "/news"}
                  className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-bold text-[#286B9D] transition-colors hover:text-[#123B64]"
                >
                  Read More

                  <ChevronRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link> */}

              </div>
            </article>

          ) : (

            /* EMPTY STATE */
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#C9D9E7] bg-white px-6 py-12 text-center">

              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF3FA] text-[#3B82B8]">
                <Newspaper size={22} />
              </div>

              <h3 className="text-sm font-bold text-[#123B64]">
                No News Available
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                APCL news and project announcements will appear here.
              </p>

            </div>
          )}

          {/* ================= CAROUSEL INDICATORS ================= */}
          {totalNews > 1 && (
            <div className="mt-4 flex items-center justify-between">

              {/* INDICATOR DOTS */}
              <div className="flex items-center gap-1.5">

                {featuredNews.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to news ${index + 1}`}
                    aria-current={currentIndex === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "w-7 bg-[#3B82B8]"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}

              </div>

              {/* NEWS COUNTER */}
              <span className="text-[11px] font-semibold tabular-nums text-slate-400">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(totalNews).padStart(2, "0")}
              </span>

            </div>
          )}

        </div>
      </div>

      {/* ================= SLIDE ANIMATION ================= */}
      <style>{`
        @keyframes newsSlide {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-news-slide {
          animation: newsSlide ${SLIDE_ANIMATION_DURATION}ms ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-news-slide {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}
