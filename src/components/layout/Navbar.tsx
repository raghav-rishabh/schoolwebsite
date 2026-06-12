"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";

const desktopMenu = [
  {
    title: "About Us",
    items: [
      "Founder's Message",
      "Chairman's Words",
      "Principal's Desk",
      "Vision & Mission",
      "Our Legacy",
    ],
  },
  {
    title: "Academics",
    items: [
      "Fee Structure",
      "Time Table",
      "Academic Calender",
      "Results & Awards",
    ],
  },
  {
    title: "CBSE",
    items: [
      "Mandatory Public Disclosure",
      "Faculty",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Campus & Classrooms",
      "Science Labs",
      "Library",
      "Sports Facilities",
      "Smart Classrooms",
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  const [mobileAccordion, setMobileAccordion] =
    useState<string | null>(null);

  useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [mobileOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* Overlay */}
<div
  onClick={() => setMobileOpen(false)}
  className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 transition-opacity duration-300 lg:hidden ${
    mobileOpen
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
/>

      {/* Navbar */}
      <header
        className={`fixed top-5 sm:top-8 lg:top-11 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-20px)] sm:w-[calc(100%-32px)] max-w-7xl h-[64px] sm:h-[72px] flex items-center transition-all duration-300 rounded-2xl border ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_40px_rgba(15,23,42,0.10)] border-white/30"
            : "bg-white/10 backdrop-blur-lg border-white/20"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 mr-auto min-w-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0e2240] rounded-md flex items-center justify-center shrink-0">
              <GraduationCap
                size={18}
                className="text-[#d4ad52]"
              />
            </div>

            <div className="leading-tight min-w-0">
              <div
                className={`text-[1rem] sm:text-[1.25rem] font-bold truncate ${
                  scrolled
                    ? "text-[#0e2240]"
                    : "text-white"
                }`}
                style={{
                  fontFamily:
                    "var(--font-display)",
                }}
              >
                Meridian Academy
              </div>

              <div
                className={`hidden sm:block text-[10px] uppercase tracking-[0.14em] font-medium ${
                  scrolled
                    ? "text-slate-400"
                    : "text-white/60"
                }`}
              >
                Est. 1985 · Excellence in Education
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              href="/"
              className={`relative px-4 py-2 text-[13px] font-semibold ${
                scrolled
                  ? "text-[#0e2240]"
                  : "text-white"
              }`}
            >
              Home

              {pathname === "/" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#b8932a]" />
              )}
            </Link>

            {/* Dropdowns */}
            {desktopMenu.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() =>
                  setOpenDropdown(item.title)
                }
                onMouseLeave={() =>
                  setOpenDropdown(null)
                }
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-[13px] font-medium transition-colors ${
                    scrolled
                      ? "text-slate-600 hover:text-[#0e2240]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.title}

                  <ChevronDown
                    size={14}
                    className={`transition-all duration-300 ${
                      openDropdown === item.title
                        ? "rotate-180"
                        : ""
                    } ${
                      scrolled
                        ? "text-slate-500"
                        : "text-white/70"
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 min-w-[240px] bg-white rounded-xl border border-slate-100 shadow-[0_10px_40px_rgba(15,23,42,0.10)] p-2 transition-all duration-200 ${
                    openDropdown === item.title
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {item.items.map((subItem) => {
                    const hrefMap: Record<
                      string,
                      string
                    > = {
                      // ABOUT
                      "Founder's Message":
                        "/about/founders-message",

                      "Chairman's Words":
                        "/about/chairmans-words",

                      "Principal's Desk":
                        "/about/principals-desk",

                      "Vision & Mission":
                        "/about/vision-mission",

                      "Our Legacy":
                        "/about/legacy",

                      // ACADEMICS
                      "Fee Structure":
                        "/academics/fee-structure",

                      "Time Table":
                        "/academics/time-table",

                      "Academic Calender":
                        "/academics/academic-calendar",

                      "Results & Awards":
                        "/academics/results-awards", 

                      // CBSE
"Mandatory Public Disclosure":
  "/cbse/mandatory-public-disclosure",

"Faculty":
  "/cbse/faculty",


                      // INFRASTRUCTURE
                      "Campus & Classrooms":
                        "/infrastructure/campus-classrooms",

                      "Science Labs":
                        "/infrastructure/science-labs",

                      "Library":
                        "/infrastructure/library",

                      "Sports Facilities":
                        "/infrastructure/sports-facilities",

                      "Smart Classrooms":
                        "/infrastructure/smart-classrooms",
                    };

                    const href =
                      hrefMap[subItem] || "/";

                    return (
                      <Link
                        key={subItem}
                        href={href}
                        className="block px-4 py-3 rounded-lg text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#0e2240] transition-colors relative"
                      >
                        {subItem}

                        {pathname === href && (
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#b8932a]" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* CTA */}
            <Link
              href="/admissions"
              className="ml-4 px-5 py-2.5 bg-[#0e2240] hover:bg-[#163354] text-white text-[13px] font-semibold rounded-md transition-colors"
            >
              Admissions
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
              scrolled
                ? "hover:bg-slate-100 text-[#0e2240]"
                : "hover:bg-white/10 text-white"
            }`}
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[340px] max-w-[92vw] bg-white z-50 shadow-[-8px_0_40px_rgba(14,34,64,0.14)] transition-transform duration-300 ${
          mobileOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-[64px] sm:h-[72px] px-6 border-b border-slate-100 flex items-center justify-between">
          <div
            className="text-[1.1rem] font-bold text-[#0e2240]"
            style={{
              fontFamily:
                "var(--font-display)",
            }}
          >
            Meridian Academy
          </div>

          <button
            onClick={() =>
              setMobileOpen(false)
            }
            className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-slate-100 transition-colors"
          >
            <X
              size={18}
              className="text-slate-600"
            />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto h-full pb-28">
          {/* Home */}
          <Link
            href="/"
            onClick={() =>
              setMobileOpen(false)
            }
            className={`block px-6 py-4 text-[15px] font-medium border-b border-slate-100 ${
              pathname === "/"
                ? "text-[#0e2240] bg-slate-50"
                : "text-slate-600"
            }`}
          >
            Home
          </Link>

          {/* Mobile Dropdowns */}
          {desktopMenu.map((item) => (
            <div
              key={item.title}
              className="border-b border-slate-100"
            >
              <button
                onClick={() =>
                  setMobileAccordion(
                    mobileAccordion === item.title
                      ? null
                      : item.title
                  )
                }
                className="w-full flex items-center justify-between px-6 py-4 text-left text-[15px] font-medium text-[#0e2240]"
              >
                {item.title}

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    mobileAccordion === item.title
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 bg-slate-50 ${
                  mobileAccordion === item.title
                    ? "max-h-[500px]"
                    : "max-h-0"
                }`}
              >
                {item.items.map((subItem) => {
                  const hrefMap: Record<
                    string,
                    string
                  > = {
                    // ABOUT
                    "Founder's Message":
                      "/about/founders-message",

                    "Chairman's Words":
                      "/about/chairmans-words",

                    "Principal's Desk":
                      "/about/principals-desk",

                    "Vision & Mission":
                      "/about/vision-mission",

                    "Our Legacy":
                      "/about/legacy",

                    // ACADEMICS
                    "Fee Structure":
                      "/academics/fee-structure",

                    "Time Table":
                      "/academics/time-table",

                    "Academic Calender":
                      "/academics/academic-calendar",

                    "Results & Awards":
                      "/academics/results-awards",

                    // CBSE
"Mandatory Public Disclosure":
  "/cbse/mandatory-public-disclosure",

"Faculty":
  "/cbse/faculty",

                    // INFRASTRUCTURE
                    "Campus & Classrooms":
                      "/infrastructure/campus-classrooms",

                    "Science Labs":
                      "/infrastructure/science-labs",

                    "Library":
                      "/infrastructure/library",

                    "Sports Facilities":
                      "/infrastructure/sports-facilities",

                    "Smart Classrooms":
                      "/infrastructure/smart-classrooms",
                  };

                  const href =
                    hrefMap[subItem] || "/";

                  return (
                    <Link
                      key={subItem}
                      href={href}
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className={`block px-10 py-3 text-[14px] transition-colors ${
                        pathname === href
                          ? "text-[#0e2240] font-medium"
                          : "text-slate-600 hover:text-[#0e2240]"
                      }`}
                    >
                      {subItem}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="px-6 pt-8 pb-10">
  <Link
    href="/admissions"
    onClick={() => setMobileOpen(false)}
    className="flex items-center justify-center w-full h-12 bg-[#0e2240] hover:bg-[#163354] text-white text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-300"
  >
    Apply Now
  </Link>
</div>
        </div>
      </div>
    </>
  );
}