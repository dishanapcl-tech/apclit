import { useState } from 'react'
import {
  ArrowRight,
  Search,
  Users,
  GraduationCap,
  Award,
  BriefcaseBusiness,
  ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/Layout'

const teamMembers = [
  {
    name: 'B. A. Charith Sachintha',
    designation: 'Head of Department – Testing & Commissioning',
    title: 'Senior Electrical Engineer',
    qualifications: [
      'B.Eng (EEE) – JNTUA, India',
      'MSc (Electrical Installations) – University of Moratuwa',
    ],
    memberships: ['AMIE(SL)'],
    initials: 'CS',
    division: 'Testing Division',
    photo: '/team/charith.jpg',
  },
  {
    name: 'Haritha Kalubowila',
    designation: 'Technical Lead – Testing & Commissioning',
    title: 'Senior Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons)',
      'MSc (Electrical Installations) – University of Moratuwa (Reading)',
    ],
    memberships: [],
    initials: 'HK',
    division: 'Testing Division',
    photo: '/team/haritha.jpg',
  },
  {
    name: 'Nimali Kodithuwakku',
    designation: 'Electrical Engineer – Testing Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – SLTC Research University',
      'MSc (Electrical Installations) – University of Moratuwa (Reading)',
    ],
    memberships: [],
    initials: 'NK',
    division: 'Testing Division',
    photo: '/team/nimali.jpg',
  },
  {
    name: 'Dananjaya Gopallawa',
    designation: 'Electrical Engineer – Testing Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – Sri Lanka Institute of Information Technology (SLIIT)',
    ],
    memberships: ['Certified Thermographic Surveyor (USA)'],
    initials: 'DG',
    division: 'Testing Division',
    photo: '/team/dananjaya.jpg',
  },
  {
    name: 'Madhura Pabudanan',
    designation: 'Electrical Engineer – Testing Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – University of Ruhuna',
      'PG Dip. (Electrical Installations) – University of Moratuwa (Reading)',
    ],
    memberships: ['AMIE(SL)'],
    initials: 'MP',
    division: 'Testing Division',
    photo: '/team/madhura.jpg',
  },
  {
    name: 'Chalangana Thanthirimalage',
    designation: 'Electrical Engineer – Testing Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – General Sir John Kotelawala Defence University',
      'MSc (Electrical Installations) – University of Moratuwa (Reading)',
    ],
    memberships: ['AMIE(SL)'],
    initials: 'CT',
    division: 'Testing Division',
    photo: '/team/chalangana.jpg',
  },
  {
    name: 'Theekshana Nikaweratiya',
    designation: 'Electrical Engineer – Testing Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – General Sir John Kotelawala Defence University',
    ],
    memberships: [],
    initials: 'TN',
    division: 'Testing Division',
    photo: '/team/theekshana.jpg',
  },
  {
    name: 'Vinujitha Pindeniya',
    designation: 'Electrical Engineer – Testing Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – General Sir John Kotelawala Defence University',
    ],
    memberships: [],
    initials: 'VP',
    division: 'Testing Division',
    photo: '/team/vinujitha.jpg',
  },
  {
    name: 'Dinusha Lakruwan',
    designation: 'Electrical Engineer – Testing Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – General Sir John Kotelawala Defence University',
    ],
    memberships: [],
    initials: 'DL',
    division: 'Testing Division',
    photo: '/team/dinusha.jpg',
  },
  {
    name: 'Arunalu Rathnathunga',
    designation: 'Electrical Engineer – Testing Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – General Sir John Kotelawala Defence University',
    ],
    memberships: [],
    initials: 'AR',
    division: 'Testing Division',
    photo: '/team/arunalu.jpg',
  },
  {
    name: 'Dishan Sanjuka',
    designation: 'Electrical Engineer – Testing Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – University of Ruhuna',
      'Diploma in Software Engineering & ICT',
    ],
    memberships: [],
    initials: 'DS',
    division: 'Testing Division',
    photo: '/team/dishan.jpg',
  },
  {
    name: 'Shevon Perera',
    designation: 'Engineering Assistant – Testing Division',
    title: 'Engineering Assistant',
    qualifications: [
      'HND – Sri Lanka Telecom Training Centre',
      'BEng (Hons) – Sri Lanka Institute of Information Technology (Reading)',
    ],
    memberships: [],
    initials: 'SP',
    division: 'Testing Division',
    photo: '/team/shevon.jpg',
  },
  {
    name: 'Sajana Gunasekara',
    designation: 'Head of Department - Design Division',
    title: 'Electrical Engineer',
    qualifications: [
      'B.Sc. Engineering (Hons) – University of Moratuwa',
    ],
    memberships: [],
    initials: 'SG',
    division: 'Design Division',
    photo: '/team/sajana.jpg',
  },
]

const divisions = [
  'All Members',
  'Design Division',
  'Testing Division',
]

function MemberCard({ member }) {
  const [imageFailed, setImageFailed] = useState(false)

  const initials =
    member.initials ||
    member.name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
      <div className="h-1.5 bg-[#123b64] transition-colors group-hover:bg-amber-400" />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start gap-4">
          {/* Staff photo with automatic initials fallback */}
          <div className="h-50 w-50shrink-0 overflow-hidden bg-[#eaf1f8] text-xl font-black text-[#123b64] transition group-hover:bg-amber-100">
            {member.photo && !imageFailed ? (
              <img
                src={member.photo}
                alt={`Photo of ${member.name}`}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                {initials}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
              {member.division}
            </span>

            <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#123b64]">
              {member.name}
            </h3>

            <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
              {member.designation}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-5">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#123b64]">
            <GraduationCap size={18} className="shrink-0 text-amber-600" />
            Qualifications
          </div>

          <ul className="mt-3 space-y-2.5">
            {member.qualifications.map((qualification) => (
              <li
                key={qualification}
                className="flex items-start gap-2 text-sm leading-6 text-slate-600"
              >
                <ChevronRight
                  size={16}
                  className="mt-1 shrink-0 text-amber-600"
                />
                <span>{qualification}</span>
              </li>
            ))}
          </ul>
        </div>

        {member.memberships.length > 0 && (
          <div className="mt-5 border-t border-slate-100 pt-4">
            <div className="flex items-center gap-2 text-sm font-extrabold text-[#123b64]">
              <Award size={17} className="shrink-0 text-amber-600" />
              Professional Credentials
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {member.memberships.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold leading-5 text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-slate-400">
            <BriefcaseBusiness size={15} />
            {member.title}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function TestingTeam() {
  const [search, setSearch] = useState('')
  const [activeDivision, setActiveDivision] = useState('All Members')

  const filteredMembers = teamMembers.filter((member) => {
    const query = search.trim().toLowerCase()

    const matchesSearch = [
      member.name,
      member.designation,
      member.title,
      member.division,
      ...member.qualifications,
      ...member.memberships,
    ]
      .join(' ')
      .toLowerCase()
      .includes(query)

    const matchesDivision =
      activeDivision === 'All Members' ||
      member.division === activeDivision

    return matchesSearch && matchesDivision
  })

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#123b64]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#081c32] via-[#123b64] to-[#1b527f]" />

        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Our People · Design & Testing Division
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              The expertise behind
              <span className="block text-amber-300">
                every test and inspection.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Meet the engineering team at Amithi Power Consultants (Pvt) Ltd.
              Our Design and Testing Divisions support electrical projects
              through engineering design, testing, inspection, condition
              assessment and technical reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#team-members"
                className="inline-flex items-center gap-3 rounded-lg bg-amber-400 px-6 py-4 font-extrabold text-[#123b64] transition hover:bg-amber-300"
              >
                Meet Our Team
                <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-lg border border-white/40 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team introduction */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-3 md:px-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
              <Users size={25} />
            </div>
            <div>
              <h2 className="font-extrabold text-[#123b64]">
                Experienced Leadership
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Technical direction and engineering oversight.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
              <GraduationCap size={25} />
            </div>
            <div>
              <h2 className="font-extrabold text-[#123b64]">
                Qualified Engineers
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Academic training and technical development.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
              <Award size={25} />
            </div>
            <div>
              <h2 className="font-extrabold text-[#123b64]">
                Professional Standards
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Professional memberships and specialist credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team directory */}
      <section
        id="team-members"
        className="bg-slate-50 py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Our People"
            title="Meet our technical team."
            text="Explore the qualifications and professional credentials of our Design and Testing Division personnel."
          />

          {/* Search and result count */}
          <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, qualification..."
                aria-label="Search team members"
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            <p className="text-sm font-semibold text-slate-500">
              Showing {filteredMembers.length} of {teamMembers.length} team
              members
            </p>
          </div>

          {/* Division filters */}
          <div className="mt-5 flex flex-wrap gap-2">
            {divisions.map((division) => (
              <button
                key={division}
                type="button"
                onClick={() => setActiveDivision(division)}
                aria-pressed={activeDivision === division}
                className={`rounded-full px-4 py-2.5 text-sm font-bold transition ${
                  activeDivision === division
                    ? 'bg-[#123b64] text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-[#123b64]'
                }`}
              >
                {division}
              </button>
            ))}
          </div>

          {/* Member cards */}
          {filteredMembers.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
              <Users size={34} className="mx-auto text-slate-300" />

              <h3 className="mt-4 text-lg font-extrabold text-[#123b64]">
                No team members found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another name, qualification or division.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setActiveDivision('All Members')
                }}
                className="mt-5 font-bold text-amber-700 hover:text-[#123b64]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-amber-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-2xl font-black text-[#123b64]">
              Need professional electrical services?
            </h2>
            <p className="mt-2 text-sm text-[#123b64]/80">
              Discuss your engineering design, inspection, testing or
              commissioning requirements with APCL.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#123b64] px-6 py-4 font-extrabold text-white transition hover:bg-slate-800"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}