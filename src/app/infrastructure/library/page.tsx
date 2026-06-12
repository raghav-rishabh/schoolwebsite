"use client";

import { motion } from "framer-motion";

export default function LibraryPage(): JSX.Element {
  return (
    <main className="bg-[#f8f6f2] text-[#0f2a4a] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
            alt="Library"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#071524]/85 via-[#0f2a4a]/65 to-[#0f2a4a]/88" />
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
              The
              <br />
              Library
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
              A quiet and inspiring environment designed to
              cultivate imagination, intellectual curiosity,
              research habits, and a lifelong love for
              reading.
            </motion.p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 border-b border-black/5 bg-[#f8f6f2]">
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
              <span className="text-[11px] uppercase tracking-[0.28em] text-amber-600 font-semibold">
                Reading & Research
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[1] tracking-tight">
                A Space Built
                <br />
                For Thought
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
              <p className="text-slate-700 text-[17px] leading-10 font-light">
                The library serves as an intellectual center
                of the institution, encouraging students to
                explore literature, academic resources,
                journals, and research material in a calm and
                focused environment.
              </p>

              <p className="text-slate-700 text-[17px] leading-10 font-light">
                Carefully designed reading spaces, organized
                collections, and modern learning resources
                create an atmosphere that inspires
                concentration, reflection, and independent
                learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMMERSIVE IMAGE */}
      <section className="relative h-[95vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop"
          alt="Reading Space"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
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
              <h2 className="heading-font text-white text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.96] tracking-tight">
                Silence.
                <br />
                Focus.
                <br />
                Discovery.
              </h2>

              <p className="mt-10 text-white/70 text-[16px] leading-8 font-light max-w-2xl">
                Spaces designed to encourage uninterrupted
                reading, thoughtful reflection, and meaningful
                academic exploration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LARGE EDITORIAL SECTION */}
      <section className="py-32 bg-[#f8f6f2] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0 items-stretch">
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
                src="https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=2070&auto=format&fit=crop"
                alt="Books"
                className="w-full h-[760px] object-cover"
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
              className="bg-white p-12 lg:p-20 flex flex-col justify-center border border-black/5"
            >
              <span className="text-[11px] uppercase tracking-[0.26em] text-amber-600 font-semibold">
                Intellectual Growth
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[0.98] tracking-tight">
                Encouraging
                <br />
                Lifelong Learning
              </h2>

              <p className="mt-10 text-slate-700 text-[16px] leading-9 font-light">
                Beyond academics, the library encourages
                students to develop curiosity, perspective,
                imagination, and a meaningful relationship
                with knowledge.
              </p>

              <p className="mt-8 text-slate-700 text-[16px] leading-9 font-light">
                The atmosphere combines traditional reading
                culture with modern educational resources,
                helping students build habits of inquiry,
                concentration, and independent thinking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-28 bg-[#f8f6f2] border-t border-black/5">
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
            “A library is more than a collection of books —
            it is a space where curiosity becomes knowledge
            and learning becomes lifelong.”
          </motion.p>
        </div>
      </section>
    </main>
  );
}