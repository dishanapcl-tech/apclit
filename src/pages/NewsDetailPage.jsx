import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ImageGallery from "../components/ImageGallery";
import { newsItems } from "../data/newsEventsData";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const item = newsItems.find((news) => news.slug === slug);

  if (!item) {
    return (
      <>
        <PageHeader
          eyebrow="APCL News"
          title="Announcement Not Found"
          description="The requested announcement could not be found."
        />
        <main className="bg-[#F1F6FB] px-5 py-16 text-center">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 rounded-lg bg-[#123B64] px-5 py-3 text-sm font-bold text-white hover:bg-[#286B9D]"
          >
            <ArrowLeft size={16} /> Back to News & Events
          </Link>
        </main>
      </>
    );
  }

  const detailImage = item.fullImage || item.image;
  const detailFallbackImage = item.fullFallbackImage || item.fallbackImage;

  return (
    <>
      <PageHeader eyebrow="APCL News" title={item.title} description={item.summary} />
      <main className="min-h-screen bg-[#F1F6FB]">
        <article className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:py-14">
          <Link
            to="/news"
            className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-[#286B9D] hover:text-[#123B64]"
          >
            <ArrowLeft size={16} /> Back to News & Events
          </Link>

          <div className="overflow-hidden rounded-2xl border border-[#DCE6EF] bg-white shadow-sm">
            <ImageGallery
              title={item.title}
              images={item.galleryImages?.length ? item.galleryImages : [detailImage || detailFallbackImage].filter(Boolean)}
            />

            <div className="p-6 sm:p-9 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="rounded-md bg-[#EAF3FA] px-3 py-1.5 font-bold uppercase tracking-wide text-[#245B85]">
                  {item.category || "Company News"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={14} /> {item.date || "Date not specified"}
                </span>
              </div>

              <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#123B64] sm:text-3xl lg:text-4xl">
                {item.title}
              </h1>
              <p className="mt-5 border-l-4 border-[#286B9D] pl-4 text-base leading-8 text-slate-600">
                {item.summary}
              </p>

              <div className="mt-8 space-y-5 text-justify text-sm leading-8 text-slate-700 sm:text-base">
                {(Array.isArray(item.content) ? item.content : []).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 border-t border-[#DCE6EF] pt-7">
                <p className="text-sm font-bold text-[#123B64]">Amithi Power Consultants (Pvt) Ltd</p>
                <p className="mt-2 text-xs text-slate-500">
                  Engineering Excellence. Powering a Safer, Smarter, and More Sustainable Future.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#286B9D] hover:text-[#123B64]"
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
