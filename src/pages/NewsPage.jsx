import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ContentCard from "../components/ContentCard";
import { newsItems } from "../data/newsEventsData";

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title="Latest News"
        description="Company announcements, project updates and the latest news from Amithi Power Consultants (Pvt) Ltd."
      />
      <main className="min-h-[55vh] bg-[#F1F6FB]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#3B82B8]">
                APCL Updates
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#123B64]">
                Announcements & Projects
              </h2>
            </div>
            <Link
              to="/academy"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#286B9D] hover:text-[#123B64]"
            >
              Visit APCL Academy <ArrowRight size={16} />
            </Link>
          </div>
          {newsItems.length ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </main>
    </>
  );
}
function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-[#C9D9E7] bg-white px-6 py-16 text-center">
      <h3 className="font-bold text-[#123B64]">No announcements yet</h3>
      <p className="mt-2 text-sm text-slate-500">
        New APCL news will be published here.
      </p>
    </div>
  );
}
