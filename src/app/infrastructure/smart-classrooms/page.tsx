"use client";

import { motion } from "framer-motion";

export default function SmartClassroomsPage(): JSX.Element {
  return (
    <main className="bg-white text-[#0f2a4a] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070&auto=format&fit=crop"
            alt="Smart Classroom"
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
              Smart
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
              Technology-enabled learning spaces designed to
              encourage interaction, collaboration, critical
              thinking, and immersive educational experiences.
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
                Modern Learning
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[1] tracking-tight">
                Redefining
                <br />
                Classroom Experiences
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
                The smart classrooms combine technology with
                interactive teaching methodologies to create
                engaging and dynamic learning environments for
                students across all grades.
              </p>

              <p className="text-slate-600 text-[17px] leading-10 font-light">
                Digital boards, multimedia systems,
                collaborative learning tools, and modern
                classroom infrastructure help students engage
                more deeply with concepts while encouraging
                active participation and creativity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMMERSIVE IMAGE */}
      <section className="relative h-[95vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=2070&auto=format&fit=crop"
          alt="Interactive Learning"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

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
                Interactive.
                <br />
                Immersive.
                <br />
                Future-Ready.
              </h2>

              <p className="mt-8 text-white/70 text-[16px] leading-8 font-light max-w-2xl">
                Learning spaces designed to make education
                more engaging, visual, collaborative, and
                impactful for every student.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      {/* <section className="py-32 bg-[#f8fafc] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-slate-200 border border-slate-200">
            {[
              {
                title: "Interactive Boards",
                desc: "Digital smart boards enabling engaging and visually enhanced classroom teaching.",
              },

              {
                title: "Audio-Visual Learning",
                desc: "Integrated multimedia systems supporting immersive educational experiences.",
              },

              {
                title: "Collaborative Learning",
                desc: "Spaces designed to encourage teamwork, participation, and group interaction.",
              },

              {
                title: "Technology Integration",
                desc: "Modern educational tools helping students build digital literacy and confidence.",
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
      </section> */}

      {/* EDITORIAL SECTION */}
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
                alt="Digital Classroom"
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
              className="bg-[#0f2a4a] text-white p-12 lg:p-20 flex flex-col justify-center"
            >
              <span className="text-[11px] uppercase tracking-[0.26em] text-amber-400 font-semibold">
                Future-Focused Education
              </span>

              <h2 className="heading-font mt-6 text-5xl sm:text-6xl leading-[0.98] tracking-tight">
                Preparing Students
                <br />
                For Tomorrow
              </h2>

              <p className="mt-10 text-white/70 text-[16px] leading-9 font-light">
                Technology-enabled classrooms help students
                become adaptable learners capable of thinking
                critically, communicating effectively, and
                engaging confidently in an evolving digital
                world.
              </p>

              <p className="mt-8 text-white/70 text-[16px] leading-9 font-light">
                The integration of smart learning tools
                supports modern teaching methodologies while
                ensuring students remain actively involved in
                every stage of the learning process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
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
            “Technology becomes meaningful in education when
            it inspires curiosity, creativity, participation,
            and deeper understanding.”
          </motion.p>
        </div>
      </section>
    </main>
  );
}