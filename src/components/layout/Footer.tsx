"use client";

import Link from "next/link";

import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface ContactRow {
  Icon: LucideIcon;
  text: string;
}

const FOOTER_LINKS = {
  "About Us": [
    {
      label: "Founder's Message",
      href: "/about/founders-message",
    },

    {
      label: "Chairman's Words",
      href: "/about/chairmans-words",
    },

    {
      label: "Principal's Desk",
      href: "/about/principals-desk",
    },

    {
      label: "Vision & Mission",
      href: "/about/vision-mission",
    },

    {
      label: "Our Legacy",
      href: "/about/legacy",
    },
  ],

  Academics: [
    {
      label: "Fee Structure",
      href: "/academics/fee-structure",
    },

    {
      label: "Time Table",
      href: "/academics/time-table",
    },

    {
      label: "Academic Calendar",
      href: "/academics/academic-calendar",
    },

    {
      label: "Results & Awards",
      href: "/academics/results-awards",
    },
  ],

  CBSE: [
    {
      label: "Mandatory Public Disclosure",
      href: "/cbse/mandatory-public-disclosure",
    },

    {
      label: "Faculty",
      href: "/cbse/faculty",
    },
  ],

  Infrastructure: [
    {
      label: "Campus & Classrooms",
      href: "/infrastructure/campus-classrooms",
    },

    {
      label: "Science Labs",
      href: "/infrastructure/science-labs",
    },

    {
      label: "Library",
      href: "/infrastructure/library",
    },

    {
      label: "Sports Facilities",
      href: "/infrastructure/sports-facilities",
    },

    {
      label: "Smart Classrooms",
      href: "/infrastructure/smart-classrooms",
    },
  ],
};

export default function Footer(): JSX.Element {
  const SOCIAL_ICONS: LucideIcon[] = [
    Facebook,
    Twitter,
    Instagram,
    Youtube,
  ];

  const CONTACT_ROWS: ContactRow[] = [
    {
      Icon: MapPin,
      text: "14 Westbrook Lane, Academic Park,\nMetro City — 110001",
    },

    {
      Icon: Phone,
      text: "+1 (800) 942-3100",
    },

    {
      Icon: Mail,
      text: "admissions@westbrookacademy.edu",
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#0a1f38] text-white"
    >
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center">
              <GraduationCap
                size={18}
                className="text-amber-400"
              />
            </div>

            <span className="font-semibold tracking-tight text-base leading-tight">
              Westbrook
              <br />

              <span className="text-xs font-normal tracking-widest uppercase text-white/40">
                Academy
              </span>
            </span>
          </div>

          <p className="text-white/40 text-sm leading-relaxed font-light mb-6">
            Nurturing exceptional minds and building future leaders since 1982
            through academic excellence and holistic development.
          </p>

          <div className="flex gap-3">
            {SOCIAL_ICONS.map(
              (Icon: LucideIcon, i: number) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Social link ${i + 1}`}
                  className="w-8 h-8 bg-white/8 hover:bg-amber-500 rounded-sm flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={13} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Links */}
        {Object.entries(FOOTER_LINKS).map(
          ([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">
                {heading}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white font-light transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-amber-400 transition-all duration-200" />

                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">
            Contact Us
          </h4>

          <div className="space-y-4">
            {CONTACT_ROWS.map(
              ({ Icon, text }: ContactRow) => (
                <div
                  key={text}
                  className="flex gap-3"
                >
                  <Icon
                    size={14}
                    className="text-amber-400 mt-1 shrink-0"
                  />

                  <p className="text-white/50 text-sm font-light leading-relaxed whitespace-pre-line">
                    {text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 lg:px-10 py-6 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-white/30 text-xs font-light">
        <p>
          © 2026 Westbrook Academy. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-white/60 transition-colors"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="hover:text-white/60 transition-colors"
          >
            Terms of Use
          </a>

          <a
            href="#"
            className="hover:text-white/60 transition-colors"
          >
            Safeguarding
          </a>
        </div>
      </div>
    </footer>
  );
}

