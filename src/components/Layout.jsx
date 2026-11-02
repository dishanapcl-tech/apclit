
import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { COMPANY } from "../data";

/* =========================================================
   CONFIGURATION
========================================================= */

const NAVIGATION = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Team", path: "/testing-team" },
  { label: "Projects", path: "/projects" },
  { label: "Instruments", path: "/instruments" },
  { label: "Clients", path: "/clients" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const SERVICES = [
  {
    label: "Design Division",
    path: "/design",
    description: "Electrical engineering design",
  },
  {
    label: "Testing Division",
    path: "/testing",
    description: "Inspection, testing and commissioning",
  },
];

const COMPANY_SERVICES = [
  "Electrical Safety Audits",
  "Power Quality Analysis",
  "MV Inspection & Testing",
  "Energy Audits",
  "Electrical Design",
  "Earthing System Analysis",
];

/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

const getTelephoneLink = (phone) =>
  `tel:${String(phone || "").replace(/\s+/g, "")}`;

const getEmailLink = (email) => `mailto:${email || ""}`;

/* =========================================================
   BRAND COMPONENT
========================================================= */

function Brand({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <Link
      to="/"
      aria-label="Amithi Power Consultants home"
      className="group inline-flex shrink-0 items-center gap-3"
    >
      {/* Company Logo */}
      <div
        className={[
          "flex h-[72px] w-[90px] shrink-0 items-center justify-center",
          "overflow-hidden rounded-lg",
          isDark ? "bg-white" : "bg-transparent",
        ].join(" ")}
      >
        <img
          src="/images/apcl_logo.png"
          alt="APCL"
          className="h-full w-full object-contain p-1"
        />
      </div>

      {/* Company Name */}
      <div className="flex min-w-0 flex-col justify-center">
        <span
          className={[
            "whitespace-nowrap text-[25px] font-extrabold",
            "leading-[1.15] tracking-[-0.045em]",
            isDark ? "text-white" : "text-[#12376A]",
          ].join(" ")}
        >
          Amithi Power
        </span>

        <span
          className={[
            "mt-1 whitespace-nowrap text-[15px] font-bold",
            "uppercase leading-[1.4] tracking-[0.17em]",
            isDark ? "text-slate-300" : "text-slate-500",
          ].join(" ")}
        >
          Consultants (Pvt) Ltd.
        </span>
      </div>
    </Link>
  );
}

/* =========================================================
   TOP CONTACT BAR
========================================================= */

function TopBar() {
  return (
    <div className="hidden bg-[#0B1F35] text-[12px] text-slate-300 lg:block">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-2">
        <p className="tracking-wide">
          Electrical Power Engineering
          <span className="mx-2 text-amber-400">/</span>
          Design
          <span className="mx-2 text-amber-400">/</span>
          Testing & Commissioning
          <span className="mx-2 text-amber-400">/</span>
          Consultancy
        </p>

        <div className="flex items-center gap-6">
          {COMPANY.phone && (
            <a
              href={getTelephoneLink(COMPANY.phone)}
              className="flex items-center gap-2 transition-colors hover:text-amber-300"
            >
              <Phone size={13} />
              <span>{COMPANY.phone}</span>
            </a>
          )}

          {COMPANY.email && (
            <a
              href={getEmailLink(COMPANY.email)}
              className="flex items-center gap-2 transition-colors hover:text-amber-300"
            >
              <Mail size={13} />
              <span>{COMPANY.email}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP SERVICES DROPDOWN
========================================================= */

function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isServiceActive = SERVICES.some(
    (service) => location.pathname === service.path
  );

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className={[
          "flex items-center gap-1.5 py-2 text-[13px]",
          "font-semibold transition-colors",
          isServiceActive || isOpen
            ? "text-[#1670B8]"
            : "text-slate-700 hover:text-[#1670B8]",
        ].join(" ")}
      >
        Services

        <ChevronDown
          size={15}
          className={[
            "transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-[270px] pt-3">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-[0_15px_45px_rgba(15,35,65,0.13)]">
            {SERVICES.map((service) => (
              <NavLink
                key={service.path}
                to={service.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  [
                    "group flex items-center justify-between",
                    "rounded-lg px-4 py-3 transition-colors",
                    isActive
                      ? "bg-blue-50 text-[#1670B8]"
                      : "text-slate-700 hover:bg-slate-50",
                  ].join(" ")
                }
              >
                <div>
                  <p className="text-[13px] font-bold">
                    {service.label}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    {service.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-slate-400 transition-colors group-hover:text-[#1670B8]"
                />
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   DESKTOP NAVIGATION
========================================================= */

function DesktopNavigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-6 xl:flex"
    >
      {NAVIGATION.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            [
              "relative py-2 text-[15px] font-semibold",
              "transition-colors",
              "after:absolute after:bottom-0 after:left-0",
              "after:h-[2px] after:w-full after:origin-left",
              "after:scale-x-0 after:bg-[#E7A83E]",
              "after:transition-transform",
              isActive
                ? "text-[#1670B8] after:scale-x-100"
                : "text-slate-700 hover:text-[#1670B8] hover:after:scale-x-100",
            ].join(" ")
          }
        >
          {item.label}
        </NavLink>
      ))}

      {/* <ServicesDropdown /> */}
    </nav>
  );
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function MobileNavigation({ isOpen, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    onClose();
    setServicesOpen(false);
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <nav
      aria-label="Mobile navigation"
      className="absolute left-0 right-0 top-full z-50 border-t border-slate-200 bg-white shadow-xl xl:hidden"
    >
      <div className="mx-auto max-h-[calc(100vh-90px)] max-w-[1440px] overflow-y-auto px-5 py-4">
        <div className="flex flex-col">
          {NAVIGATION.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                [
                  "border-b border-slate-100 py-3.5",
                  "text-[14px] font-semibold transition-colors",
                  isActive
                    ? "text-[#1670B8]"
                    : "text-slate-700 hover:text-[#1670B8]",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Services */}
          <button
            type="button"
            onClick={() =>
              setServicesOpen((current) => !current)
            }
            aria-expanded={servicesOpen}
            className="flex items-center justify-between border-b border-slate-100 py-3.5 text-left text-[14px] font-semibold text-slate-700"
          >
            Services

            <ChevronDown
              size={17}
              className={[
                "transition-transform duration-200",
                servicesOpen ? "rotate-180" : "",
              ].join(" ")}
            />
          </button>

          {servicesOpen && (
            <div className="border-b border-slate-100 bg-slate-50 px-4">
              {SERVICES.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  className={({ isActive }) =>
                    [
                      "block py-3 text-[13px] font-medium",
                      isActive
                        ? "text-[#1670B8]"
                        : "text-slate-600 hover:text-[#1670B8]",
                    ].join(" ")
                  }
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          )}

          <Link
            to="/contact"
            className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#12376A] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1670B8]"
          >
            Contact APCL
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* =========================================================
   MAIN HEADER
========================================================= */

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="relative mx-auto flex min-h-[50px] w-full items-center justify-between gap-5 pl-3 pr-5 py-3 sm:pl-4 sm:pr-7 lg:pl-5 lg:pr-8">
          {/* Brand */}
          <Brand />

          {/* Desktop navigation */}
          <DesktopNavigation />

          {/* Contact CTA */}
          <Link
            to="/contact"
            className="hidden shrink-0 items-center gap-2 rounded-lg bg-[#12376A] px-5 py-3 text-[13px] font-bold text-white transition-all hover:bg-[#1670B8] lg:flex"
          >
            Contact APCL
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-[#12376A] transition-colors hover:bg-slate-50 xl:hidden"
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

          {/* Mobile navigation */}
          <MobileNavigation
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      </header>
    </>
  );
}

/* =========================================================
   PAGE HERO
   Reusable for individual pages
========================================================= */

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#102D50]">
      {/* Background image */}
      {image && (
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1F35]/95 via-[#12376A]/85 to-[#12376A]/60" />

      {/* Decorative element */}
      <div className="absolute -right-20 -top-32 -z-10 h-[400px] w-[400px] rounded-full border border-white/10" />

      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-7 md:py-20 lg:px-8">
        <div className="max-w-4xl">
          {eyebrow && (
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-amber-400" />

              <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-300">
                {eyebrow}
              </p>
            </div>
          )}

          <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-slate-200 md:text-[17px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}) {
  const centered = align === "center";

  return (
    <div
      className={[
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
      ].join(" ")}
    >
      {eyebrow && (
        <div
          className={[
            "mb-4 flex items-center gap-3",
            centered ? "justify-center" : "",
          ].join(" ")}
        >
          <span className="h-[2px] w-8 bg-amber-500" />

          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-700">
            {eyebrow}
          </p>
        </div>
      )}

      <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#12376A] sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {text && (
        <p className="mt-5 text-[15px] leading-8 text-slate-600">
          {text}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-[#0B1F35] text-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:px-8 lg:py-16">
        {/* Company information */}
        <div>
          <Brand variant="dark" />

          <p className="mt-6 max-w-sm text-[13px] leading-7 text-slate-300">
            Amithi Power Consultants (Pvt) Ltd. provides
            professional electrical power engineering,
            design, inspection, testing, commissioning,
            energy audits and technical consultancy
            services.
          </p>

          <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-amber-400" />

            Engineering Excellence
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-[14px] font-bold tracking-wide text-white">
            Explore APCL
          </h3>

          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
            {NAVIGATION.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-2 text-[13px] text-slate-300 transition-colors hover:text-amber-300"
              >
                <ArrowRight
                  size={13}
                  className="text-amber-400"
                />

                {item.label}
              </Link>
            ))}
          </div>

          <h3 className="mt-7 text-[13px] font-bold text-white">
            Our Services
          </h3>

          <div className="mt-4 space-y-3">
            {SERVICES.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block text-[13px] text-slate-300 transition-colors hover:text-amber-300"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact details */}
        <div>
          <h3 className="text-[14px] font-bold tracking-wide text-white">
            Contact Information
          </h3>

          {COMPANY.address && (
            <div className="mt-5 flex items-start gap-3">
              <MapPin
                size={17}
                className="mt-1 shrink-0 text-amber-400"
              />

              <p className="text-[13px] leading-7 text-slate-300">
                {COMPANY.address}
              </p>
            </div>
          )}

          {COMPANY.phone && (
            <a
              href={getTelephoneLink(COMPANY.phone)}
              className="mt-4 flex items-center gap-3 text-[13px] text-slate-300 transition-colors hover:text-amber-300"
            >
              <Phone
                size={16}
                className="shrink-0 text-amber-400"
              />

              {COMPANY.phone}
            </a>
          )}

          {COMPANY.email && (
            <a
              href={getEmailLink(COMPANY.email)}
              className="mt-4 flex items-center gap-3 break-all text-[13px] text-slate-300 transition-colors hover:text-amber-300"
            >
              <Mail
                size={16}
                className="shrink-0 text-amber-400"
              />

              {COMPANY.email}
            </a>
          )}

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 border-b border-amber-400 pb-1 text-[12px] font-bold text-amber-300 transition-colors hover:text-white"
          >
            Get in touch
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 text-[11px] text-slate-400 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Amithi Power
            Consultants (Pvt) Ltd. All rights reserved.
          </p>

          <p className="tracking-wide">
            Established 2004 · Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   MAIN APPLICATION LAYOUT
========================================================= */

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header />

      {/* Main page content */}
      <main className="min-h-[60vh]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
