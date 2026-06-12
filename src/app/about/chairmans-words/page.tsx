"use client";

import Navbar from "@/components/layout/Navbar";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ChairmansWordsPage(): JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-[#0f2a4a] overflow-hidden">
      <Navbar />

      {/* Hero */}
      {/* <section className="relative pt-44 pb-32 overflow-hidden">
       */}
       <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 lg:pb-32 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a4a] via-[#1a365d] to-[#2d4d73]" />

        {/* Soft Glow */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-[11px] uppercase tracking-[0.28em] text-amber-400 font-semibold mb-6 block">
                Leadership
              </span>

              <h1
                className="text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-light"
                style={{
                  fontFamily: "'EB Garamond', serif",
                }}
              >
                Chairman’s
                <br />
                <span className="font-semibold">
                  Perspective
                </span>
              </h1>

              <p className="text-white/65 text-[15px] leading-8 font-light max-w-xl mt-10">
                Guiding the institution with a commitment to
                excellence, integrity, and meaningful education
                for future generations.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="relative"
            >
              <div className="overflow-hidden rounded-sm shadow-[0_35px_100px_rgba(0,0,0,0.28)]">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80"
                  alt="Chairman"
                  className="w-full h-[560px] object-cover"
                />
              </div>

              {/* Floating Label */}
              <div className="absolute -bottom-10 left-10 bg-white px-8 py-6 shadow-[0_20px_60px_rgba(15,42,74,0.10)] rounded-sm">
                <h3
                  className="text-3xl text-[#0f2a4a] font-semibold"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  Richard Bennett
                </h3>

                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mt-2">
                  Chairman
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Intro Quote */}
            <div className="mb-16">
              <p
                className="text-[#0f2a4a] text-3xl sm:text-4xl leading-[1.5] font-light"
                style={{
                  fontFamily: "'EB Garamond', serif",
                }}
              >
                “True education must prepare students not only
                for success, but for responsibility, leadership,
                and service to society.”
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-10 text-[17px] leading-10 text-slate-600 font-light">
              <p>
                At Westbrook Academy, our mission extends beyond
                academic achievement. We strive to cultivate an
                environment where students are encouraged to think
                independently, lead with confidence, and develop a
                deep sense of integrity and compassion.
              </p>

              <p>
                The world today demands individuals who are not
                only intellectually capable, but emotionally
                resilient and socially conscious. Our institution
                remains committed to shaping young minds that can
                adapt to change while remaining grounded in strong
                values and purpose.
              </p>

              <p>
                I remain deeply grateful to our faculty, parents,
                and students who continue to contribute to the
                growth and spirit of this institution. Together,
                we carry forward a shared vision of excellence,
                innovation, and meaningful education.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between flex-wrap gap-6">
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-[0.2em] mb-2">
                  Westbrook Academy
                </p>

                <h4
                  className="text-3xl text-[#0f2a4a]"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  Excellence With Purpose
                </h4>
              </div>

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