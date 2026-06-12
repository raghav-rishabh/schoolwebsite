"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { motion } from "framer-motion";

export default function ScienceLabsPage(): JSX.Element {
  return (
    <main className="bg-white text-[#0f2a4a] overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2070&auto=format&fit=crop"
            alt="Science Laboratory"
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
              className="block text-[11px] uppercase tracking-[0.3em] text-amber-400 font-semibold mb-8"
            >
              Infrastructure
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="heading-font text-white text-6xl sm:text-7xl lg:text-[7rem] leading-[1.02] tracking-tight max-w-5xl"
            >
              Science
              <br />
              Laboratories
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="max-w-2xl mt-10 text-white/70 text-[15px] sm:text-[16px] leading-7 sm:leading-8 lg:leading-9 font-light"
            >
              Purpose-built laboratories designed to
              encourage scientific exploration, analytical
              thinking, experimentation, and hands-on
              learning experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-20">
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
                Practical Learning
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[1] tracking-tight">
                Learning Through
                <br />
                Experimentation
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
              <p className="text-slate-600 text-[17px] leading-7 sm:leading-8 lg:leading-9 font-light">
                The science laboratories are designed to
                transform theoretical understanding into
                practical application. Students are encouraged
                to observe, analyze, experiment, and discover
                through immersive scientific experiences.
              </p>

              <p className="text-slate-600 text-[17px] leading-7 sm:leading-8 lg:leading-9 font-light">
                Equipped with modern apparatus, dedicated work
                stations, and supervised learning environments,
                the laboratories foster curiosity, precision,
                collaboration, and critical thinking across
                all scientific disciplines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* PHYSICS LAB */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f8fafc] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 items-stretch">
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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Physics Lab"
                className="w-full h-[280px] sm:h-[420px] lg:h-[720px] object-cover"
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
              className="bg-white p-8 sm:p-10 lg:p-20 flex flex-col justify-center pr-6 sm:pr-10 lg:pr-20"
            >
              <span className="text-[11px] uppercase tracking-[0.26em] text-amber-500 font-semibold">
                Physics Laboratory
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[0.98] tracking-tight max-w-[90%]">  
                Understanding
                <br />
                Scientific Principles
              </h2>

              <p className="mt-10 text-slate-600 text-[16px] leading-7 sm:leading-8 lg:leading-9 font-light">
                The Physics Laboratory provides students with
                opportunities to investigate motion, energy,
                electricity, optics, and mechanics through
                practical experimentation and observation.
              </p>

              <p className="mt-8 text-slate-600 text-[16px] leading-7 sm:leading-8 lg:leading-9 font-light">
                Equipped with modern instruments and guided
                experimental modules, the lab strengthens
                conceptual understanding while encouraging
                analytical thinking and precision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHEMISTRY LAB */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-slate-100">
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
                Chemistry Laboratory
              </span>

              <h2 className="heading-font mt-6 text-5xl sm:text-6xl leading-[0.98] tracking-tight">
                Encouraging
                <br />
                Scientific Discovery
              </h2>

              <p className="mt-10 text-white/70 text-[16px] leading-7 sm:leading-8 lg:leading-9 font-light">
                The Chemistry Laboratory introduces students
                to scientific investigation through
                experiments involving reactions, compounds,
                analysis, and molecular structures.
              </p>

              <p className="mt-8 text-white/70 text-[16px] leading-7 sm:leading-8 lg:leading-9 font-light">
                Safety-focused workspaces and advanced
                laboratory setups help students develop
                practical understanding while building
                confidence in experimental procedures.
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
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
                alt="Chemistry Lab"
                className="w-full h-[280px] sm:h-[420px] lg:h-[720px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BIOLOGY LAB */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#f8fafc] border-b border-slate-100">
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
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop"
                alt="Biology Lab"
                className="w-full h-[280px] sm:h-[420px] lg:h-[720px] object-cover"
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
                Biology Laboratory
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[0.98] tracking-tight">
                Exploring Life
                <br />
                & Nature
              </h2>

              <p className="mt-10 text-slate-600 text-[16px] leading-7 sm:leading-8 lg:leading-9 font-light">
                The Biology Laboratory provides an immersive
                environment where students study living
                systems, anatomy, microbiology, ecosystems,
                and life sciences through observation and
                practical investigation.
              </p>

              <p className="mt-8 text-slate-600 text-[16px] leading-7 sm:leading-8 lg:leading-9 font-light">
                Carefully curated specimens, microscopes, and
                advanced learning resources encourage inquiry,
                exploration, and deeper scientific
                understanding.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
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
            className="heading-font text-[#0f2a4a] text-3xl sm:text-5xl leading-[1.45] font-light"
          >
            “Scientific learning becomes meaningful when
            students are encouraged to explore, experiment,
            and discover independently.”
          </motion.p>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}