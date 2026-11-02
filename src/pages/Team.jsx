import { useMemo, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { PageHero } from "../components/Layout";
import { team } from "../data";

const clean = (value = "") =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const fullText = (person) =>
  clean(
    `${person.name || ""} ${person.role || ""} ${person.category || ""} ${
      person.area || ""
    }`
  );

const hasAny = (person, words) =>
  words.some((word) => fullText(person).includes(clean(word)));

function initials(name = "") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.replace(/[.,]/g, "")[0])
    .join("")
    .toUpperCase();
}

function PersonCard({ person, onReadMore, featured = false, eyebrow }) {
  return (
    <article
      className={`group overflow-hidden bg-white ${
        featured
          ? "grid grid-cols-1 border border-slate-200 md:grid-cols-[minmax(250px,0.85fr)_1.15fr]"
          : "flex flex-col border border-slate-200"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#e8edf2] ${
          featured ? "h-72 md:h-full md:min-h-[340px]" : "h-64"
        }`}
      >
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full min-h-64 items-center justify-center bg-gradient-to-br from-[#edf2f7] to-[#dbe5ef]">
            <div
              className={`flex items-center justify-center rounded-full border-4 border-white bg-[#123b64] font-bold text-amber-300 shadow-md ${
                featured ? "h-32 w-32 text-4xl" : "h-24 w-24 text-3xl"
              }`}
            >
              {initials(person.name)}
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/30 to-transparent" />
        {eyebrow && (
          <span className="absolute bottom-4 left-4 bg-[#123b64] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            {eyebrow}
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "justify-center p-7 md:p-9" : "p-5"}`}>
        {featured && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            APCL Leadership
          </p>
        )}
        <h3
          className={`font-bold leading-snug text-[#123b64] ${
            featured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {person.name}
        </h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
          {person.role}
        </p>
        {person.area && (
          <p className="mt-1 text-sm text-amber-700">{person.area}</p>
        )}
        <button
          type="button"
          onClick={() => onReadMore(person)}
          className="mt-5 inline-flex w-fit items-center gap-2 border-b border-amber-500 pb-1 text-sm font-bold text-[#123b64] transition hover:gap-3 hover:text-amber-700"
        >
          View Profile <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}

function ProfileModal({ person, onClose }) {
  if (!person) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071d34]/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-title"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-white/95 text-[#123b64] shadow-sm transition hover:bg-amber-50"
        >
          <X size={20} />
        </button>
        <div className="grid sm:grid-cols-[220px_1fr]">
          <div className="h-60 bg-[#e8edf2] sm:h-full">
            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="flex h-full min-h-60 items-center justify-center bg-gradient-to-br from-[#edf2f7] to-[#dbe5ef]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#123b64] text-3xl font-bold text-amber-300">
                  {initials(person.name)}
                </div>
              </div>
            )}
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Team profile
            </p>
            <h2 id="profile-title" className="mt-3 text-2xl font-bold text-[#123b64]">
              {person.name}
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              {person.role}
            </p>
            {person.area && (
              <p className="mt-1 text-sm text-amber-700">{person.area}</p>
            )}
            {person.qualifications && (
              <>
                <div className="my-5 h-px bg-slate-200" />
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                  Qualifications
                </h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
                  {person.qualifications}
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamSection({ title, intro, people, emptyMessage, onReadMore }) {
  return (
    <section className="mt-16">
      <div className="mb-7 flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            APCL · Our people
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-[#123b64] md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            {intro}
          </p>
        </div>
        {people.length > 0 && (
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {people.length} {people.length === 1 ? "profile" : "profiles"}
          </span>
        )}
      </div>
      {people.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {people.map((person, index) => (
            <PersonCard
              key={`${person.name}-${index}`}
              person={person}
              onReadMore={onReadMore}
            />
          ))}
        </div>
      ) : (
        <p className="border border-dashed border-slate-300 bg-white px-5 py-6 text-sm text-slate-500">
          {emptyMessage}
        </p>
      )}
    </section>
  );
}

export default function Team() {
  const [activePerson, setActivePerson] = useState(null);

  const sections = useMemo(() => {
    const founder = team.find((person) =>
      hasAny(person, ["founder", "founding director"])
    );

    const ceo = team.find(
      (person) =>
        person !== founder &&
        hasAny(person, ["chief executive officer", "ceo", "senior consultant"])
    );

    const available = team.filter(
      (person) => person !== founder && person !== ceo
    );

    const design = available.filter((person) =>
      hasAny(person, ["design division", "design engineer", "head of design", "design hod"])
    );

    const testing = available.filter((person) =>
      hasAny(person, ["testing division", "testing engineer", "head of testing", "testing hod", "commissioning"])
    );

    const admin = available.filter((person) =>
      hasAny(person, ["administrative", "administration", "admin staff", "office support"])
    );

    const classified = new Set([...design, ...testing, ...admin]);
    const other = available.filter((person) => !classified.has(person));

    return { founder, ceo, design, testing, admin, other };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our Leaders & Team"
        title="Leadership excellence. Engineering expertise."
        subtitle="The people guiding APCL’s work combine professional experience, technical knowledge and a shared commitment to quality."
      />

      <main className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-5 pt-12 md:px-6 md:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
              Our leadership
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123b64] md:text-4xl">
              Guided by experience
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Meet the leaders who shape our direction and support the teams
              delivering electrical engineering consultancy, design, testing
              and commissioning services.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {sections.founder && (
              <PersonCard
                person={sections.founder}
                featured
                eyebrow="Founder"
                onReadMore={setActivePerson}
              />
            )}
            {sections.ceo && (
              <PersonCard
                person={sections.ceo}
                featured
                eyebrow="Chief Executive Officer / Senior Consultant"
                onReadMore={setActivePerson}
              />
            )}
          </div>

          <TeamSection
            title="Design Division"
            intro="Engineering design professionals and technical leaders delivering coordinated, practical design solutions."
            people={sections.design}
            emptyMessage="Design Division profiles can be displayed here once team roles are identified in the data."
            onReadMore={setActivePerson}
          />

          <TeamSection
            title="Testing Division"
            intro="Testing and commissioning specialists focused on electrical system condition, performance, safety and reliability."
            people={sections.testing}
            emptyMessage="Testing Division profiles can be displayed here once team roles are identified in the data."
            onReadMore={setActivePerson}
          />

          <TeamSection
            title="Administrative Staff"
            intro="The people supporting APCL’s operations and helping our engineering teams deliver projects smoothly."
            people={sections.admin}
            emptyMessage="Administrative staff profiles can be displayed here once their roles are identified in the data."
            onReadMore={setActivePerson}
          />

          {sections.other.length > 0 && (
            <TeamSection
              title="Engineering & Technical Team"
              intro="Additional engineering professionals and technical support contributing to APCL’s projects and services."
              people={sections.other}
              emptyMessage="No additional profiles."
              onReadMore={setActivePerson}
            />
          )}

          <div className="mt-16 border-t border-slate-200 pt-8 text-center">
            <p className="text-sm leading-6 text-slate-500">
              APCL’s team brings together professional leadership, technical
              capability and a shared commitment to dependable engineering.
            </p>
          </div>
        </div>
      </main>

      <ProfileModal
        person={activePerson}
        onClose={() => setActivePerson(null)}
      />
    </>
  );
}
