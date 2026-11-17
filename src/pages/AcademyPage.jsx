import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ContentCard from "../components/ContentCard";
import { cpdEvents, isRegistrationOpen } from "../data/newsEventsData";

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        eyebrow="APCL Academy"
        title="Professional Development & Technical Programmes"
        description="Explore technical workshops and professional development programmes organised by Amithi Power Consultants (Pvt) Ltd."
      />
      <main className="min-h-[55vh] bg-[#F1F6FB]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#3B82B8]">
              Learn with APCL
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#123B64]">
              Programmes & Workshops
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Browse available programmes, review their details and follow the
              registration instructions.
            </p>
          </div>
          {cpdEvents.length ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cpdEvents.map((event) => (
                <ContentCard
                  key={event.id}
                  item={event}
                  type="academy"
                  registrationOpen={isRegistrationOpen(
                    event.registrationDeadline,
                  )}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[#C9D9E7] bg-white px-6 py-16 text-center">
              <h3 className="font-bold text-[#123B64]">
                No programmes announced
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                New APCL Academy programmes will be published here.
              </p>
            </div>
          )}
          <div className="mt-10 rounded-xl border border-[#DCE6EF] bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#123B64]">
              Interested in an APCL programme?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Contact APCL for programme availability and registration
              information.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#286B9D] px-5 py-3 text-sm font-bold text-white hover:bg-[#123B64]"
            >
              Contact APCL <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
