"use client";

import Navbar from "@/components/layout/Navbar";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function PrincipalsDeskPage(): JSX.Element {
  return (
    <div className="bg-white text-[#0f2a4a] overflow-hidden">
      <Navbar />

      {/* Hero */}
      {/* <section className="relative pt-44 pb-32 overflow-hidden bg-gradient-to-b from-[#a8b9cc] via-[#eef3f8] to-white border-b border-slate-200"> */}
      <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#a8b9cc] via-[#eef3f8] to-white border-b border-slate-200">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #0f2a4a 1px, transparent 1px), linear-gradient(to bottom, #0f2a4a 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[480px_1fr] gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-sm shadow-[0_30px_90px_rgba(15,42,74,0.12)] rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1200&q=80"
                  alt="Principal"
                  // className="w-full h-[620px] object-cover"
                  className="w-full h-[500px] sm:h-[620px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-10 -right-6 bg-white border border-slate-100 px-8 py-6 shadow-[0_20px_60px_rgba(15,42,74,0.10)] rounded-sm">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-2">
                  Principal
                </p>

                <h3
                  className="text-3xl text-[#0f2a4a] font-semibold"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  Dr. Amelia Carter
                </h3>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
            >
              <span className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold mb-6 block">
                Principal’s Desk
              </span>

              <h1
                className="text-[#0f2a4a] text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight font-light mb-10"
                style={{
                  fontFamily: "'EB Garamond', serif",
                }}
              >
                Inspiring Growth
                <br />
                <span className="font-semibold">
                  Every Single Day
                </span>
              </h1>

              <div className="space-y-9 text-[17px] leading-10 text-slate-600 font-light max-w-2xl">
                <p>
                  At Westbrook Academy, we believe education must
                  empower students to become thoughtful,
                  confident, and compassionate individuals. Every
                  child who enters our institution carries unique
                  potential, and it is our responsibility to help
                  them discover and develop it fully.
                </p>

                <p>
                  Our classrooms are designed not only for
                  academic learning, but for curiosity,
                  collaboration, and character building. We strive
                  to create an environment where students feel
                  encouraged to question, innovate, and grow into
                  responsible global citizens.
                </p>

                <p>
                  I am proud to lead a community of passionate
                  educators, supportive parents, and ambitious
                  learners who together contribute to the vibrant
                  culture of this institution. We remain committed
                  to ensuring that every student receives an
                  education rooted in excellence, integrity, and
                  purpose.
                </p>
              </div>

              {/* Bottom Row */}
              <div className="mt-16 flex items-center gap-5">
                <div className="w-12 h-12 rounded-sm bg-[#0f2a4a]/5 flex items-center justify-center">
                  <GraduationCap
                    size={22}
                    className="text-[#0f2a4a]"
                  />
                </div>

                <div>
                  <p className="text-slate-400 text-[11px] uppercase tracking-[0.2em]">
                    Westbrook Academy
                  </p>

                  <p
                    className="text-2xl text-[#0f2a4a]"
                    style={{
                      fontFamily: "'EB Garamond', serif",
                    }}
                  >
                    Learning Beyond Classrooms
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="text-[#0f2a4a] text-4xl sm:text-5xl leading-[1.5] font-light"
              style={{
                fontFamily: "'EB Garamond', serif",
              }}
            >
              “The purpose of education is not merely to prepare
              students for examinations, but to prepare them for
              life.”
            </p>

            <div className="mt-14">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-[#0f2a4a] text-sm font-semibold tracking-wide group"
              >
                Back to Home
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Transition */}
      {/* <section className="h-20 bg-[#f4f6f9]" /> */}
    </div>
  );
}