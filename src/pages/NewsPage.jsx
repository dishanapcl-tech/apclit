
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Search,
  Newspaper,
  GraduationCap,
  Lightbulb,
  ChevronDown,
  X
} from "lucide-react";

import PageHeader from "../components/PageHeader";

import {
  insights,
  events,
  newsItems,
  cpdEvents,
  isRegistrationOpen
} from "../data/newsEventsData";

const PAGE_SIZE = 6;

const FILTERS = [
  { id: "all", label: "All" },
  { id: "insights", label: "Insights" },
  { id: "events", label: "Events" },
  { id: "news", label: "News" }
];


// =====================================================
// SHARED CATEGORY FILTER
// =====================================================

function CategoryFilter({ categories, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-[#DCE6EF] bg-white px-3 py-2.5 text-xs font-medium text-[#123B64] outline-none focus:border-[#286B9D]"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}


// =====================================================
// SHARED CONTENT CARD
// =====================================================

function ContentCard({ item, type }) {
  const isCPD = type === "cpd";
  const isInsight = type === "insight";

  const registrationOpen =
    isCPD && isRegistrationOpen(item.registrationDeadline);

  let detailLink = item.href || "/contact";

  if (type === "news") {
    detailLink = `/news/${item.slug}`;
  }

  if (isCPD) {
    detailLink = `/academy/${item.slug}`;
  }

  if (isInsight) {
    detailLink = `/insights/${item.slug}`;
  }

  const cardImage = item.cardImage || item.image;
  const cardFallbackImage = item.cardFallbackImage || item.fallbackImage;

  const typeLabel = {
    insight: "Insight",
    event: "Event",
    cpd: "CPD Programme",
    news: "News"
  }[type];

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[#DCE6EF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D2E7] hover:shadow-lg">

      {/* IMAGE */}

      <Link
        to={detailLink}
        className="relative block aspect-[16/10] overflow-hidden bg-[#E5EEF6]"
      >
        {cardImage ? (
          <img
            src={cardImage}
            alt={item.imageAlt || item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              if (
                cardFallbackImage &&
                !e.currentTarget.dataset.fallback
              ) {
                e.currentTarget.dataset.fallback = "true";
                e.currentTarget.src = cardFallbackImage;
              }
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[#8AA5BD]">
            {isInsight ? <Lightbulb size={42} /> : <Newspaper size={42} />}
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#245B85] shadow-sm">
          {typeLabel}
        </span>
      </Link>


      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-5">

        <div className="flex flex-wrap items-center gap-2">

          {item.category && (
            <span className="rounded-md bg-[#EAF3FA] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#245B85]">
              {item.category}
            </span>
          )}

          {isCPD && (
            <span
              className={`rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                registrationOpen
                  ? "bg-[#E9F8EF] text-[#168044]"
                  : "bg-[#F1F3F5] text-slate-500"
              }`}
            >
              {registrationOpen
                ? "Registration Open"
                : "Registration Closed"}
            </span>
          )}

        </div>


        <div className="mt-4 flex items-start gap-2 text-xs text-slate-400">
          <CalendarDays
            size={15}
            className="mt-0.5 shrink-0 text-[#3B82B8]"
          />
          <span>{item.date || "Date to be announced"}</span>
        </div>


        <h3 className="mt-3 text-lg font-bold leading-snug text-[#123B64] transition-colors group-hover:text-[#286B9D]">
          <Link to={detailLink}>
            {item.title}
          </Link>
        </h3>


        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {item.summary}
        </p>


        {(type === "event" || isCPD) && item.venue && (
          <div className="mt-4 flex items-start gap-2 text-xs text-[#45627D]">
            <MapPin
              size={15}
              className="mt-0.5 shrink-0 text-[#286B9D]"
            />
            <span>{item.venue}</span>
          </div>
        )}


        {isInsight && item.readingTime && (
          <p className="mt-3 text-xs text-slate-400">
            {item.readingTime}
          </p>
        )}


        <div className="mt-auto border-t border-[#EDF2F7] pt-4 mt-5">
          <Link
            to={detailLink}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#286B9D] transition-colors hover:text-[#123B64]"
          >
            {isCPD
              ? "View Programme"
              : isInsight
              ? "Read More"
              : "Read More"}

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


// =====================================================
// CONTENT SECTION
// =====================================================

function ContentSection({
  id,
  eyebrow,
  title,
  description,
  icon,
  items,
  type,
  categories,
  emptyMessage
}) {
  const [category, setCategory] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        category === "All Categories" ||
        item.category === category;

      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        !searchText ||
        [
          item.title,
          item.summary,
          item.category,
          item.venue
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [items, category, search]);

  const displayedItems = filteredItems.slice(0, visible);

  const categoryOptions = [
    "All Categories",
    ...new Set(
      items.map((item) => item.category).filter(Boolean)
    )
  ];

  return (
    <section id={id} className="scroll-mt-24">

      {/* SECTION HEADING */}

      <div className="mb-7">
        <div className="flex items-center gap-2 text-[#286B9D]">
          {icon}
          <span className="text-xs font-bold uppercase tracking-[0.15em]">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-2 text-2xl font-extrabold text-[#123B64] sm:text-3xl">
          {title}
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          {description}
        </p>
      </div>


      {/* SECTION FILTERS */}

      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <CategoryFilter
          categories={categoryOptions}
          value={category}
          onChange={(value) => {
            setCategory(value);
            setVisible(PAGE_SIZE);
          }}
        />

        <div className="relative w-full sm:max-w-xs">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder={`Search ${title.toLowerCase()}...`}
            className="w-full rounded-lg border border-[#DCE6EF] bg-white py-2.5 pl-10 pr-10 text-xs text-[#123B64] outline-none placeholder:text-slate-400 focus:border-[#286B9D]"
          />

          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setVisible(PAGE_SIZE);
              }}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#123B64]"
            >
              <X size={15} />
            </button>
          )}
        </div>

      </div>


      {/* RESULTS COUNT */}

      <div className="mb-5 text-xs text-slate-500">
        Showing{" "}
        <strong className="text-[#123B64]">
          {displayedItems.length}
        </strong>{" "}
        of{" "}
        <strong className="text-[#123B64]">
          {filteredItems.length}
        </strong>{" "}
        items
      </div>


      {/* CARDS */}

      {displayedItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((item) => (
            <ContentCard
              key={`${item.contentType || type}-${item.id}`}
              item={item}
              type={item.contentType || type}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-[#C9D9E7] bg-white px-6 py-16 text-center">
          <Search
            size={34}
            className="mx-auto text-[#9CB2C7]"
          />

          <h3 className="mt-4 text-lg font-bold text-[#123B64]">
            No {title} Found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {emptyMessage}
          </p>
        </div>
      )}


      {/* LOAD MORE */}

      {visible < filteredItems.length && (
        <div className="mt-9 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-lg border border-[#C9DCEB] bg-white px-7 py-3 text-sm font-bold text-[#245B85] shadow-sm transition hover:border-[#286B9D] hover:bg-[#EAF3FA]"
          >
            Load More
            <ChevronDown size={17} />
          </button>
        </div>
      )}

    </section>
  );
}


// =====================================================
// MAIN NEWS & EVENTS PAGE
// =====================================================

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const showAll = activeFilter === "all";

  return (
    <>
      <PageHeader
        eyebrow="APCL Resources"
        title="News & Events"
        description="Stay informed about APCL project achievements, engineering insights, company announcements, technical events and professional development programmes."
      />

      <main className="min-h-screen bg-[#F1F6FB]">

        <div className="mx-auto max-w-7xl px-5 py-0 sm:px-8 lg:px-10 lg:py-8">

          {/* MAIN FILTER BAR */}

          <div className="mb-6 flex flex-col gap-5 border-b border-[#DCE6EF] pb-2 sm:flex-row sm:items-center sm:justify-between">

            {/* <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#286B9D]">
                Discover APCL
              </p>

              <h2 className="mt-1 text-xl font-extrabold text-[#123B64]">
                Explore Our Updates
              </h2>
            </div> */}


            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-lg border px-5 py-2.5 text-sm font-semibold transition ${
                    activeFilter === filter.id
                      ? "border-[#123B64] bg-[#123B64] text-white shadow-sm"
                      : "border-[#DCE6EF] bg-white text-slate-600 hover:border-[#286B9D] hover:text-[#286B9D]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

          </div>


          {/* 01 - INSIGHTS */}

          {(showAll || activeFilter === "insights") && (
            <>
              <ContentSection
                id="insights"
                eyebrow="Engineering Knowledge"
                title="Insights"
                description=""
                icon={<Lightbulb size={20} />}
                items={insights}
                type="insight"
                emptyMessage="New engineering insights and technical articles will be published here."
              />

              {showAll && (
                <div className="my-8 border-t border-[#D5E3EF]" />
              )}
            </>
          )}


          {/* 02 - EVENTS AND CPD */}

          {(showAll || activeFilter === "events") && (
            <>
              <ContentSection
                id="events"
                eyebrow="Learning & Development"
                title="Events & CPD Programmes"
                description=""
                icon={<GraduationCap size={20} />}
                items={[
                  ...events.map((item) => ({
                    ...item,
                    id: `general-${item.id}`,
                    contentType: "event"
                  })),
                  ...cpdEvents.map((item) => ({
                    ...item,
                    id: `cpd-${item.id}`,
                    contentType: "cpd"
                  }))
                ]}
                type="cpd"
                emptyMessage="Upcoming workshops, events and CPD programmes will be announced here."
              />

              {showAll && (
                <div className="my-8 border-t border-[#D5E3EF]" />
              )}
            </>
          )}


          {/* 03 - NEWS */}

          {(showAll || activeFilter === "news") && (
            <ContentSection
              id="news"
              eyebrow="Company & Project Updates"
              title="News"
              description=""
              icon={<Newspaper size={20} />}
              items={newsItems}
              type="news"
              emptyMessage="Company announcements and project updates will be published here."
            />
          )}

        </div>
      </main>
    </>
  );
}
