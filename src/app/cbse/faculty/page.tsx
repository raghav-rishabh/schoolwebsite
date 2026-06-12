"use client";

import Navbar from "@/components/layout/Navbar";

import { motion } from "framer-motion";

const FACULTY_MEMBERS = [
  {
    name: "Dr. Amelia Carter",
    role: "Principal",
    department: "Administration",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Richard Bennett",
    role: "Chairman",
    department: "Leadership",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Sophia Williams",
    role: "Head of Sciences",
    department: "Science Department",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Daniel Foster",
    role: "Senior Mathematics Faculty",
    department: "Mathematics",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Olivia Bennett",
    role: "English Literature Faculty",
    department: "Languages",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Ethan Mitchell",
    role: "Physics Faculty",
    department: "Science Department",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Charlotte Hayes",
    role: "Biology Faculty",
    department: "Science Department",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Benjamin Clarke",
    role: "History Faculty",
    department: "Humanities",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Emily Parker",
    role: "School Counselor",
    department: "Student Wellness",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Lucas Anderson",
    role: "Sports Coordinator",
    department: "Athletics",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Ava Thompson",
    role: "Arts Faculty",
    department: "Creative Arts",
    image:
      "https://images.unsplash.com/photo-1542204625-de293a2f8ff0?auto=format&fit=crop&w=1200&q=80",
  },

  {
    name: "Michael Reynolds",
    role: "Computer Science Faculty",
    department: "Technology",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FacultyPage(): JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-[#0f2a4a] overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 lg:pb-32 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#d7e1ec] via-[#eef3f8] to-white">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #0f2a4a 1px, transparent 1px), linear-gradient(to bottom, #0f2a4a 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold mb-5 block"
          >
            Faculty & Staff
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
            Meet Our
            <span className="font-semibold"> Educators</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="text-slate-500 text-[14px] sm:text-[15px] leading-7 sm:leading-8 font-light max-w-3xl mx-auto mt-6 sm:mt-8"
          >
            A dedicated team of educators, mentors, coordinators,
            and professionals committed to nurturing excellence,
            curiosity, and character in every student.
          </motion.p>
        </div>
      </section>

      {/* Featured Faculty */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-sm shadow-[0_30px_90px_rgba(15,42,74,0.10)]"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
                alt="Faculty"
                loading="lazy"
                decoding="async"
                className="w-full h-[300px] sm:h-[520px] object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-amber-500 font-semibold">
                Academic Excellence
              </span>

              <h2
                className="mt-5 text-[#0f2a4a] text-[2.5rem] sm:text-5xl leading-[1] tracking-tight font-light"
                style={{
                  fontFamily: "'EB Garamond', serif",
                }}
              >
                Experienced Mentors
                <span className="font-semibold">
                  {" "}
                  & Lifelong Guides
                </span>
              </h2>

              <div className="mt-7 space-y-6 text-[15px] sm:text-[17px] leading-8 sm:leading-10 text-slate-600 font-light">
                <p>
                  Our faculty represents a diverse community of
                  educators who bring together academic expertise,
                  mentorship, innovation, and compassion to shape
                  meaningful learning experiences.
                </p>

                <p>
                  Beyond classrooms and curriculum, they inspire
                  confidence, critical thinking, leadership, and a
                  lifelong passion for learning in every student.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-8 sm:py-14 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {FACULTY_MEMBERS.map((faculty, index) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 4) * 0.07,
                }}
                viewport={{
                  once: true,
                  margin: "0px",
                }}
                // className="group bg-white border border-slate-200 overflow-hidden hover:shadow-[0_20px_50px_rgba(15,42,74,0.08)] transition-all duration-500 will-change-transform transform-gpu"
                className="group bg-white border border-slate-200 overflow-hidden hover:shadow-[0_20px_50px_rgba(15,42,74,0.08)] transition-shadow duration-500"
              >
                {/* Image */}
                <div className="overflow-hidden bg-slate-100">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    loading="lazy"
                    decoding="async"
                    // className="w-full h-[260px] sm:h-[330px] lg:h-[390px] object-cover group-hover:scale-[1.015] transition-transform duration-700 will-change-transform transform-gpu"
                    className="w-full h-[260px] sm:h-[330px] lg:h-[390px] object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-amber-500 font-semibold">
                    {faculty.department}
                  </p>

                  <h3
                    // className="mt-3 text-[1.35rem] sm:text-[1.7rem] lg:text-[2rem] leading-tight text-[#0f2a4a]"
                    className="mt-3 text-[1.1rem] sm:text-[1.45rem] lg:text-[1.7rem] leading-tight text-[#0f2a4a]"
                    style={{
                      fontFamily: "'EB Garamond', serif",
                    }}
                  >
                    {faculty.name}
                  </h3>

                  <p className="mt-2 text-slate-500 text-[13px] sm:text-[14px] lg:text-[15px] leading-6 font-light">
                    {faculty.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#0f2a4a] text-2xl sm:text-4xl lg:text-5xl leading-[1.45] font-light"
            style={{
              fontFamily: "'EB Garamond', serif",
            }}
          >
            “Great educators do more than teach lessons —
            they inspire futures, shape character, and awaken
            possibilities.”
          </motion.p>
        </div>
      </section>
    </div>
  );
}