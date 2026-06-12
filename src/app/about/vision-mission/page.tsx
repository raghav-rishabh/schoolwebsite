"use client";

import Navbar from "@/components/layout/Navbar";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMissionPage(): JSX.Element {
  return (
    <div className="bg-white text-[#0f2a4a] overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-24 bg-gradient-to-b from-[#a8b9cc] via-[#eef3f8] to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold mb-6 block"
          >
            Philosophy & Purpose
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[#0f2a4a] text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight font-light"
            style={{
              fontFamily: "'EB Garamond', serif",
            }}
          >
            Vision &
            <span className="font-semibold"> Mission</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="text-slate-600 text-[15px] leading-8 font-light max-w-2xl mx-auto mt-8"
          >
            Guiding principles that shape our institution,
            inspire learning, and define our commitment to
            holistic education.
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-28 lg:py-36 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_420px] gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.24em] font-medium mb-10">
                <Eye size={14} />
                Our Vision
              </div>

              <h2
                className="text-5xl text-[#0f2a4a] leading-[1.05] mb-12"
                style={{
                  fontFamily: "'EB Garamond', serif",
                }}
              >
                Building Individuals
                <br />
                With Purpose &
                <br />
                Integrity
              </h2>

              <div className="space-y-9 text-[17px] leading-10 text-slate-600 font-light">
                <div className="flex gap-5">
                  <div className="w-2 h-2 rounded-full bg-[#0f2a4a] mt-5 shrink-0" />

                  <p>
                    We envision an institution where education
                    nurtures intellectual excellence, emotional
                    intelligence, creativity, and moral values in
                    equal measure.
                  </p>
                </div>

                <div className="flex gap-5">
                  <div className="w-2 h-2 rounded-full bg-[#0f2a4a] mt-5 shrink-0" />

                  <p>
                    Our aim is to shape individuals who are
                    confident, compassionate, socially
                    responsible, and prepared to contribute
                    meaningfully to society.
                  </p>
                </div>

                <div className="flex gap-5">
                  <div className="w-2 h-2 rounded-full bg-[#0f2a4a] mt-5 shrink-0" />

                  <p>
                    We aspire to cultivate a learning environment
                    rooted in respect, curiosity, discipline, and
                    lifelong growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-sm shadow-[0_30px_80px_rgba(15,42,74,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
                  alt="Vision"
                  className="w-full h-[460px] object-cover rounded-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-28 lg:py-36 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[420px_1fr] gap-20 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#f8fafc] p-8 rounded-sm shadow-[0_30px_80px_rgba(15,42,74,0.06)]">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80"
                  alt="Mission"
                  className="w-full h-[460px] object-cover rounded-sm"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.24em] font-medium mb-10">
                <Target size={14} />
                Our Mission
              </div>

              <h2
                className="text-5xl text-[#0f2a4a] leading-[1.05] mb-12"
                style={{
                  fontFamily: "'EB Garamond', serif",
                }}
              >
                Creating A Culture
                <br />
                Of Excellence &
                <br />
                Leadership
              </h2>

              <div className="space-y-9 text-[17px] leading-10 text-slate-600 font-light">
                <div className="flex gap-5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-5 shrink-0" />

                  <p>
                    To provide a dynamic and inclusive learning
                    environment that empowers students to achieve
                    academic excellence and personal growth.
                  </p>
                </div>

                <div className="flex gap-5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-5 shrink-0" />

                  <p>
                    To encourage innovation, critical thinking,
                    leadership, and ethical responsibility through
                    modern education and holistic development.
                  </p>
                </div>

                <div className="flex gap-5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-5 shrink-0" />

                  <p>
                    To foster a safe and inspiring atmosphere
                    where every learner is encouraged to explore
                    their full potential with confidence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Transition */}
      {/* <section className="h-20 bg-[#f4f6f9]" /> */}
    </div>
  );
}