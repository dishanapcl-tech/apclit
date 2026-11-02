
import { useMemo } from "react";
import { Linkedin } from "lucide-react";
import { PageHero } from "../components/Layout";
import { team } from "../data";

const normalize = (value = "") =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const getRole = (person) =>
  normalize(person.role || person.category || person.area || "");

const includesAny = (value, terms) =>
  terms.some((term) => value.includes(normalize(term)));

function getLinkedIn(person) {
  return (
    person.linkedin ||
    person.linkedinUrl ||
    person.linkedinURL ||
    person.linkedIn ||
    ""
  );
}

function initials(name = "") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.replace(/[.,]/g, "")[0])
    .join("")
    .toUpperCase();
}

function PersonCard({ person, featured = false }) {
  const linkedin = getLinkedIn(person);

  return (
    <article
      className={`group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_14px_36px_rgba(12,39,67,0.10)] ${
        featured
          ? "grid grid-cols-1 sm:grid-cols-[minmax(190px,0.82fr)_1.18fr]"
          : "flex flex-col"
      }`}
    >
      {/* Profile image */}
      <div
        className={`relative overflow-hidden bg-[#e9eef4] ${
          featured
            ? "h-72 sm:h-full sm:min-h-[320px]"
            : "h-72 sm:h-80"
        }`}
      >
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full min-h-60 items-center justify-center bg-gradient-to-br from-[#edf2f7] to-[#dce5ee]">
            <div
              className={`flex items-center justify-center rounded-full border-4 border-white bg-[#123b64] font-bold text-white shadow-sm ${
                featured ? "h-28 w-28 text-3xl" : "h-24 w-24 text-2xl"
              }`}
            >
              {initials(person.name)}
            </div>
          </div>
        )}
      </div>

      {/* Profile details */}
      <div
        className={`flex flex-1 flex-col ${
          featured ? "justify-center p-6 sm:p-7" : "p-5"
        }`}
      >
        {/* Name */}
        <h3
          className={`font-bold leading-snug text-[#123b64] ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {person.name}
        </h3>

        {/* Position - displayed only once */}
        {person.position && (
          <p className="mt-1.5 text-sm font-semibold leading-5 text-slate-700">
            {person.position}
          </p>
        )}

        {/* Optional area */}
        {person.area && (
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {person.area}
          </p>
        )}

        {/* Qualifications */}
        {person.qualifications && (
          <div className="mt-3 border-t border-slate-100 pt-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
              Qualifications
            </p>

            <p className="mt-1.5 whitespace-pre-line text-xs leading-5 text-slate-600">
              {person.qualifications}
            </p>
          </div>
        )}

        {/* LinkedIn */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${person.name}'s LinkedIn profile`}
            title="View LinkedIn profile"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#0A66C2] transition-all duration-200 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
          >
            <Linkedin size={17} />
          </a>
        )}
      </div>
    </article>
  );
}

function TeamGroup({
  title,
  description,
  people,
  emptyMessage,
  featured = false,
}) {
  return (
    <section className="mt-14">
      {/* Section heading */}
      <div className="mb-6 flex flex-col gap-2 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-slate-500">
            APCL · People
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-[#123b64] md:text-3xl">
            {title}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>

        {people.length > 0 && (
          <p className="text-xs font-medium text-slate-400">
            {people.length} {people.length === 1 ? "profile" : "profiles"}
          </p>
        )}
      </div>

      {/* Profiles */}
      {people.length > 0 ? (
        <div
          className={`grid gap-5 ${
            featured
              ? "lg:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {people.map((person, index) => (
            <PersonCard
              key={`${person.name || "member"}-${index}`}
              person={person}
              featured={featured}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-sm text-slate-500">
          {emptyMessage}
        </p>
      )}
    </section>
  );
}

export default function Team() {
  const grouped = useMemo(() => {
    const groups = {
      founder: [],
      directors: [],
      ceo: [],
      design: [],
      testing: [],
      admin: [],
      other: [],
    };

    team.forEach((person) => {
      // Role is used for categorization.
      // Position is used only as the displayed designation.
      const role = getRole(person);

      if (includesAny(role, ["founder", "founding director"])) {
        groups.founder.push(person);
      } else if (includesAny(role, ["director", "directors"])) {
        groups.directors.push(person);
      } else if (
        includesAny(role, [
          "ceo",
          "chief executive officer",
          "senior consultant",
        ])
      ) {
        groups.ceo.push(person);
      } else if (
        includesAny(role, ["design", "design division", "design engineer"])
      ) {
        groups.design.push(person);
      } else if (
        includesAny(role, [
          "testing",
          "testing division",
          "commissioning",
        ])
      ) {
        groups.testing.push(person);
      } else if (
        includesAny(role, [
          "administrative",
          "administration",
          "admin",
          "office support",
        ])
      ) {
        groups.admin.push(person);
      } else {
        groups.other.push(person);
      }
    });

    return groups;
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Leadership & Engineering Expertise"
        subtitle="A team of experienced consultants, engineers and professionals delivering reliable, standards-based electrical engineering solutions."
      />

      <main className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-5 pt-10 md:px-6 md:pt-14">
          <TeamGroup
            title="Founder"
            description="The foundation of APCL’s engineering vision and professional values."
            people={grouped.founder}
            featured
            emptyMessage="Founder profile will be added here."
          />

          <TeamGroup
            title="Directors"
            description="Providing governance, strategic direction and professional oversight."
            people={grouped.directors}
            featured
            emptyMessage="Director profiles will be added here."
          />

          <TeamGroup
            title="Chief Executive Officer / Senior Consultant"
            description="Leading the organization and guiding the delivery of APCL’s consultancy and engineering services."
            people={grouped.ceo}
            featured
            emptyMessage="CEO profile will be added here."
          />

          <TeamGroup
            title="Design Division"
            description="Engineering design and consultancy for power systems, MEP and related electrical infrastructure."
            people={grouped.design}
            emptyMessage="Design Division team profiles will appear here when their division or role is identified in the team data."
          />

          <TeamGroup
            title="Testing Division"
            description="Inspection, testing and commissioning professionals supporting electrical system safety, performance and reliability."
            people={grouped.testing}
            emptyMessage="Testing Division team profiles will appear here when their division or role is identified in the team data."
          />

          <TeamGroup
            title="Administrative Staff"
            description="Supporting project coordination, business operations and the smooth delivery of APCL services."
            people={grouped.admin}
            emptyMessage="Administrative staff profiles will appear here when their roles are identified in the team data."
          />

          {grouped.other.length > 0 && (
            <TeamGroup
              title="Engineering & Technical Team"
              description="Additional technical professionals contributing to APCL’s project delivery."
              people={grouped.other}
              emptyMessage="Additional team profiles will be listed here."
            />
          )}
        </div>
      </main>
    </>
  );
}
