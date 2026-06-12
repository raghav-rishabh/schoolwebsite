"use client";

import { motion } from "framer-motion";

export default function SportsFacilitiesPage(): JSX.Element {
  return (
    <main className="bg-white text-[#0f2a4a] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop"
            alt="Sports Ground"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#071524]/80 via-[#0f2a4a]/55 to-[#0f2a4a]/82" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[92vh] flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 w-full">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="block text-[11px] uppercase tracking-[0.32em] text-amber-400 font-semibold mb-8"
            >
              Infrastructure
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="heading-font text-white text-6xl sm:text-7xl lg:text-[7rem] leading-[1.02] tracking-tight max-w-5xl"
            >
              Sports
              <br />
              Facilities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="max-w-2xl mt-10 text-white/70 text-[15px] sm:text-[16px] leading-8 font-light"
            >
              Spaces designed to encourage discipline,
              teamwork, endurance, leadership, and physical
              wellbeing through both indoor and outdoor
              sporting experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold">
                Student Development
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[1] tracking-tight">
                Building Strength
                <br />
                Beyond Academics
              </h2>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="space-y-10"
            >
              <p className="text-slate-600 text-[17px] leading-10 font-light">
                Physical education plays a vital role in the
                holistic development of students. The sports
                infrastructure encourages discipline,
                confidence, teamwork, resilience, and healthy
                competition.
              </p>

              <p className="text-slate-600 text-[17px] leading-10 font-light">
                From indoor strategy-based games to outdoor
                athletics and large-scale sporting events, the
                facilities are designed to support both
                recreation and competitive excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDOOR SPORTS */}
      <section className="py-32 bg-[#f8fafc] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-0 items-stretch">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070&auto=format&fit=crop"
                alt="Indoor Sports Room"
                className="w-full h-[720px] object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="bg-white p-12 lg:p-20 flex flex-col justify-center"
            >
              <span className="text-[11px] uppercase tracking-[0.26em] text-amber-500 font-semibold">
                Indoor Sports Room
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[0.98] tracking-tight">
                Focus,
                <br />
                Strategy & Precision
              </h2>

              <p className="mt-10 text-slate-600 text-[16px] leading-9 font-light">
                The indoor games room provides students with
                a calm and engaging environment for strategic
                and recreational activities including chess,
                carrom, ludo, and other indoor games.
              </p>

              <p className="mt-8 text-slate-600 text-[16px] leading-9 font-light">
                These activities encourage concentration,
                patience, decision-making, healthy social
                interaction, and analytical thinking while
                creating opportunities for relaxation and
                collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMMERSIVE GROUND SECTION */}
      <section className="relative h-[95vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
          alt="Sports Ground"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="heading-font text-white text-5xl sm:text-6xl leading-[1] tracking-tight">
                Energy.
                <br />
                Endurance.
                <br />
                Team Spirit.
              </h2>

              <p className="mt-8 text-white/70 text-[16px] leading-8 font-light max-w-2xl">
                Large open grounds designed for athletics,
                sprints, sports day events, outdoor games,
                and physical training activities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUTDOOR SECTION */}
      <section className="py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-0 items-stretch">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0f2a4a] text-white p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1"
            >
              <span className="text-[11px] uppercase tracking-[0.26em] text-amber-400 font-semibold">
                Outdoor Sports Ground
              </span>

              <h2 className="heading-font mt-6 text-5xl sm:text-6xl leading-[0.98] tracking-tight">
                Encouraging
                <br />
                Physical Excellence
              </h2>

              <p className="mt-10 text-white/70 text-[16px] leading-9 font-light">
                The expansive outdoor ground supports
                athletics, races, physical drills, football,
                sports day events, and a variety of outdoor
                sporting activities throughout the academic
                year.
              </p>

              <p className="mt-8 text-white/70 text-[16px] leading-9 font-light">
                Designed to accommodate both recreation and
                competition, the space promotes teamwork,
                discipline, stamina, leadership, and school
                spirit among students.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="order-1 lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=2070&auto=format&fit=crop"
                alt="Athletics Ground"
                className="w-full h-[720px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL QUOTE */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-font text-[#0f2a4a] text-4xl sm:text-5xl leading-[1.45] font-light"
          >
            “Sports teach discipline, resilience, teamwork,
            and the confidence to face challenges both on and
            beyond the field.”
          </motion.p>
        </div>
      </section>
    </main>
  );
}