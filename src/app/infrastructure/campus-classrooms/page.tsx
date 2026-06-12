"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { motion } from "framer-motion";

export default function CampusClassroomsPage(): JSX.Element {
  return (
    <main className="bg-white text-[#0f2a4a] overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
            alt="Campus"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a4a]/70 via-[#0f2a4a]/45 to-[#0f2a4a]/82" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-end">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 pb-24">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[11px] uppercase tracking-[0.32em] text-amber-400 font-semibold mb-8 block"
            >
              Infrastructure
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="heading-font text-white text-6xl sm:text-7xl lg:text-[8rem] leading-[0.94] tracking-tight max-w-5xl"
            >
              Campus &
              <br />
              Classrooms
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
              Thoughtfully designed spaces that encourage
              curiosity, creativity, collaboration, and
              meaningful learning experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold">
                Learning Environment
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[1] tracking-tight">
                Designed For
                <br />
                Modern Learning
              </h2>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="space-y-10"
            >
              <p className="text-slate-600 text-[17px] leading-10 font-light">
                The campus has been thoughtfully planned to
                provide students with an environment that
                balances academic focus, creativity, and
                wellbeing. Every classroom and learning space
                is designed to encourage interaction,
                exploration, and confidence.
              </p>

              <p className="text-slate-600 text-[17px] leading-10 font-light">
                From naturally lit classrooms to collaborative
                learning spaces, the institution integrates
                modern educational infrastructure with a calm
                and disciplined atmosphere that inspires
                meaningful growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMMERSIVE IMAGE BLOCK */}
      <section className="relative h-[95vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop"
          alt="Classroom"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

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
                Spaces That Inspire
                <br />
                Curiosity & Focus
              </h2>

              <p className="mt-8 text-white/70 text-[16px] leading-8 font-light max-w-2xl">
                Open, modern, and student-centered spaces
                crafted to create immersive educational
                experiences every day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 bg-[#f8fafc] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-slate-200 border border-slate-200">
            {[
              {
                title: "Smart Classrooms",
                desc: "Technology-enabled classrooms supporting interactive learning experiences.",
              },
              {
                title: "Open Learning Spaces",
                desc: "Collaborative spaces designed to encourage creativity and communication.",
              },
              {
                title: "Natural Environment",
                desc: "Well-lit spaces with ventilation and calming architectural design.",
              },
              {
                title: "Student-Centered Design",
                desc: "Every detail planned to improve focus, comfort, and productivity.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="bg-white p-10 lg:p-12 hover:bg-[#fcfaf6] transition-colors duration-300"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-amber-500 font-semibold">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-[#0f2a4a] text-2xl font-medium leading-snug">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-500 text-[15px] leading-8 font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE IMAGE SECTION */}
      <section className="py-32 bg-white">
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
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80"
                alt="Campus Building"
                className="w-full h-[320px] sm:h-[500px] lg:h-[760px] object-cover"
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
              className="bg-[#0f2a4a] text-white p-12 lg:p-20 flex flex-col justify-center"
            >
              <span className="text-[11px] uppercase tracking-[0.26em] text-amber-400 font-semibold">
                Campus Architecture
              </span>

              <h2 className="heading-font mt-6 text-5xl sm:text-6xl leading-[0.98] tracking-tight">
                A Campus Built
                <br />
                Around Students
              </h2>

              <p className="mt-10 text-white/70 text-[16px] leading-9 font-light">
                The institution combines contemporary
                educational infrastructure with a disciplined
                and welcoming environment. Spacious corridors,
                open courtyards, modern classrooms, and
                thoughtfully designed learning spaces together
                create an atmosphere that feels inspiring,
                focused, and future-ready.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-28 border-t border-slate-100">
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
            “An inspiring environment shapes the way students
            think, learn, collaborate, and grow.”
          </motion.p>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}