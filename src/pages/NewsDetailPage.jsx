import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { newsItems } from "../data/newsEventsData";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const item = newsItems.find((news) => news.slug === slug);
  if (!item)
    return (
      <PageHeader
        eyebrow="News"
        title="Announcement not found"
        description="This announcement may have been removed or the link may be incorrect."
      />
    );
  return (
    <>
      <PageHeader
        eyebrow="News"
        title={item.title}
        description={item.summary}
      />
      <main className="min-h-[55vh] bg-[#F1F6FB]">
        <article className="mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:py-14">
          <Link
            to="/news"
            className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-[#286B9D] hover:text-[#123B64]"
          >
            <ArrowLeft size={16} /> Back to all news
          </Link>
          <div className="overflow-hidden rounded-xl border border-[#DCE6EF] bg-white shadow-sm">
            <img
              src={item.image}
              alt={item.imageAlt || item.title}
              className="max-h-[460px] w-full bg-[#E5EEF6] object-cover"
              onError={(e) => {
                if (item.fallbackImage && !e.currentTarget.dataset.fallback) {
                  e.currentTarget.dataset.fallback = "1";
                  e.currentTarget.src = item.fallbackImage;
                }
              }}
            />
            <div className="p-6 sm:p-9">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="rounded-md bg-[#EAF3FA] px-3 py-1.5 font-bold uppercase tracking-wide text-[#245B85]">
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  {item.date}
                </span>
              </div>
              <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#123B64] sm:text-3xl">
                {item.title}
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.summary}
              </p>
              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-700">
                {(item.content || []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-10 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold text-[#123B64]">
                  Amithi Power Consultants (Pvt) Ltd
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#286B9D] hover:text-[#123B64]"
                >
                  Contact APCL <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
