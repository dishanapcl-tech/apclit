import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, BookOpen } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ImageGallery from "../components/ImageGallery";
import { insights } from "../data/newsEventsData";

export default function InsightsDetailPage() {
  const { slug } = useParams();
  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    return (
      <>
        <PageHeader
          eyebrow="APCL Insights"
          title="Article Not Found"
          description="The requested article could not be found."
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

  const detailImage = article.fullImage || article.image;
  const detailFallbackImage = article.fullFallbackImage || article.fallbackImage;

  return (
    <>
      <PageHeader
        eyebrow="APCL Insights"
        title="Engineering Insights & Knowledge"
        description="Technical knowledge, engineering perspectives and professional insights from Amithi Power Consultants."
      />
      <main className="min-h-screen bg-[#F1F6FB]">
        <article className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:py-14">
          <Link
            to="/news"
            className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-[#286B9D] hover:text-[#123B64]"
          >
            <ArrowLeft size={16} /> Back to News & Events
          </Link>

          <div className="overflow-hidden rounded-2xl border border-[#DCE6EF] bg-white shadow-sm">
            {article.animation ? (
              <div className="border-b border-[#DCE6EF] bg-[#F1F6FB]">
                <iframe
                  src={`${article.animation}?theme=light`}
                  title={`${article.title} animation`}
                  loading="lazy"
                  className="block h-[800px] w-full border-0 sm:h-[660px]"
                />
              </div>
            ) : (
              <ImageGallery
                title={article.title}
                images={article.galleryImages?.length ? article.galleryImages : [detailImage || detailFallbackImage].filter(Boolean)}
              />
            )}

            <div className="p-6 sm:p-9 lg:p-12">
              <span className="inline-block rounded-md bg-[#EAF3FA] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#245B85]">
                {article.category || "Technical Insight"}
              </span>

              <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#123B64] sm:text-3xl lg:text-4xl">
                {article.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-[#EDF2F7] pb-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-[#286B9D]" /> {article.date}
                </div>
                {article.readingTime && (
                  <div className="flex items-center gap-2">
                    <Clock size={15} className="text-[#286B9D]" /> {article.readingTime}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <BookOpen size={15} className="text-[#286B9D]" />
                  {article.author || "Amithi Power Consultants"}
                </div>
              </div>

              <div className="mt-8 border-l-4 border-[#286B9D] pl-5">
                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  {article.introduction || article.summary}
                </p>
              </div>

              <div className="mt-10 space-y-10">
                {article.sections?.map((section, index) => (
                  <section key={index}>
                    <h2 className="text-xl font-bold leading-snug text-[#123B64] sm:text-2xl">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-justify text-sm leading-8 text-slate-600 sm:text-base">
                      {section.paragraphs?.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {article.conclusion && (
                <section className="mt-12 rounded-xl border border-[#DCE8F2] bg-[#F4F8FC] p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-[#123B64]">Conclusion</h2>
                  <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                    {article.conclusion}
                  </p>
                </section>
              )}

              <div className="mt-12 border-t border-[#DCE6EF] pt-8">
                <p className="text-sm font-bold text-[#123B64]">Amithi Power Consultants (Pvt) Ltd</p>
                <p className="mt-2 text-sm italic leading-6 text-slate-500">
                  Engineering Excellence. Powering a Safer, Smarter, and More Sustainable Future.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#123B64] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#286B9D]"
                >
                  Contact APCL <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}