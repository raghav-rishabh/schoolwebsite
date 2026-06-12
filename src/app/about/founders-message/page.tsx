"use client";

import Navbar from "@/components/layout/Navbar";

import { motion } from "framer-motion";

export default function FoundersMessagePage(): JSX.Element {
  return (
    <div className="bg-white text-[#0f2a4a] overflow-hidden">
      <Navbar />

      {/* Minimal Hero */}
      <section className="pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 lg:pb-28 bg-gradient-to-b from-[#c8d4e3] via-[#edf2f7] to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-amber-500 font-semibold mb-5 sm:mb-6 block"
          >
            Leadership
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[#0f2a4a] text-[3rem] sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-light"
            style={{
              fontFamily: "'EB Garamond', serif",
            }}
          >
            Founder’s
            <span className="font-semibold"> Message</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="text-slate-500 text-[14px] sm:text-[15px] leading-7 sm:leading-8 font-light max-w-2xl mx-auto mt-6 sm:mt-8"
          >
            A reflection on the values, philosophy, and purpose
            that continue to shape our institution and its future.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[480px_1fr] gap-14 sm:gap-16 lg:gap-28 items-start">
            {/* Founder Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-36"
            >
              <div className="overflow-hidden rounded-sm shadow-[0_25px_70px_rgba(15,42,74,0.10)]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80"
                  alt="Founder"
                  className="w-full h-[480px] sm:h-[520px] lg:h-[680px] object-cover"
                />
              </div>

              <div className="pt-7 sm:pt-10 border-b border-slate-100 pb-7 sm:pb-10">
                <h3
                  className="text-[2rem] sm:text-4xl text-[#0f2a4a] font-semibold leading-tight"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  Dr. Jonathan Westbrook
                </h3>

                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-slate-400 mt-3 sm:mt-4">
                  Founder & Chairman
                </p>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="pt-0 lg:pt-4"
            >
              <div className="max-w-3xl">
                <div className="space-y-7 sm:space-y-10 text-[15px] sm:text-[17px] leading-8 sm:leading-10 text-slate-600 font-light">
                  <p>
                    When Westbrook Academy was founded in 1982,
                    our vision extended far beyond classrooms or
                    academic rankings. We sought to create an
                    institution where education would shape
                    character, nurture curiosity, and prepare
                    young minds for lives of meaning, leadership,
                    and contribution.
                  </p>

                  <p>
                    Over the decades, our philosophy has remained
                    unchanged. True education is not measured only
                    by achievement, but by the integrity, empathy,
                    and confidence students carry into the world.
                    Our commitment continues to be the creation of
                    an environment where excellence and humanity
                    grow together.
                  </p>
                </div>

                <div className="mt-10 sm:mt-20">
                  <p className="text-[15px] sm:text-[17px] leading-8 sm:leading-10 text-slate-600 font-light">
                    As we continue to evolve with changing times, our
                    purpose remains rooted in the same enduring values
                    upon which this institution was established —
                    integrity, discipline, compassion, and the pursuit
                    of excellence. It is our hope that every student who
                    walks through these halls leaves not only educated,
                    but inspired to contribute meaningfully to society.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}