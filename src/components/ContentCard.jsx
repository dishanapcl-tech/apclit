
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

export default function ContentCard({
  item,
  type = "news",
}) {
  if (!item) return null;

  const isAcademy = type === "academy";

  const detailLink = isAcademy
    ? `/academy/${item.slug}`
    : `/news/${item.slug}`;

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#DCE6EF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D2E7] hover:shadow-lg">

      {/* IMAGE */}
      <Link
        to={detailLink}
        className="relative block aspect-[16/10] overflow-hidden bg-[#E5EEF6]"
      >
        {item.image && (
          <img
            src={item.image}
            alt={item.imageAlt || item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(event) => {
              if (
                item.fallbackImage &&
                !event.currentTarget.dataset.fallback
              ) {
                event.currentTarget.dataset.fallback = "true";
                event.currentTarget.src = item.fallbackImage;
              }
            }}
          />
        )}

        {item.category && (
          <span className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#245B85] shadow-sm">
            {item.category}
          </span>
        )}
      </Link>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5">

        {/* ACADEMY REGISTRATION STATUS */}
        {isAcademy && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-[#BBE5CB] bg-[#E9F8EF] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#168044]">
              <span className="h-2 w-2 rounded-full bg-[#22A05A]" />
              {item.status || "Upcoming"}
            </span>
          </div>
        )}

        {/* DATE */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <CalendarDays size={14} className="shrink-0 text-[#3B82B8]" />
          <span>{item.date || "Date to be announced"}</span>
        </div>

        {/* TITLE */}
        <h3 className="mt-3 text-lg font-bold leading-snug text-[#123B64] transition-colors group-hover:text-[#3B82B8]">
          <Link to={detailLink}>
            {item.title}
          </Link>
        </h3>

        {/* SUMMARY */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {item.summary}
        </p>

        {/* VENUE FOR ACADEMY */}
        {isAcademy && item.venue && (
          <div className="mt-4 flex items-start gap-2 text-xs text-[#45627D]">
            <MapPin size={15} className="mt-0.5 shrink-0 text-[#286B9D]" />
            <span>{item.venue}</span>
          </div>
        )}

        {/* READ MORE */}
        <div className="mt-auto border-t border-[#EDF2F7] pt-4 mt-5">
          <Link
            to={detailLink}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#286B9D] transition-colors hover:text-[#123B64]"
          >
            {isAcademy ? "View Programme" : "Read More"}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </article>
  );
}
