"use client";

import Navbar from "@/components/layout/Navbar";

import { motion } from "framer-motion";
import { Clock3, ArrowRight } from "lucide-react";

export default function LegacyPage(): JSX.Element {
  return (
    <div className="bg-white text-[#0f2a4a] overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-gradient-to-b from-[#a8b9cc] via-[#eef3f8] to-white border-b border-slate-200">
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#0f2a4a]/5 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold mb-6 block"
          >
            Our Heritage
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[#0f2a4a] text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-light"
            style={{
              fontFamily: "'EB Garamond', serif",
            }}
          >
            A Legacy Of
            <span className="font-semibold"> Excellence</span>
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
            More than four decades of nurturing minds,
            shaping character, and building a culture of
            educational distinction.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[520px_1fr] gap-24 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden rounded-sm shadow-[0_30px_90px_rgba(15,42,74,0.10)]">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80"
                  alt="Legacy"
                  className="w-full h-[640px] object-cover"
                />
              </div>

              {/* Floating Year Card */}
              <div className="absolute -bottom-10 right-10 bg-white px-8 py-6 rounded-sm shadow-[0_20px_60px_rgba(15,42,74,0.10)] border border-slate-100">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-2">
                  Established
                </p>

                <h3
                  className="text-5xl text-[#0f2a4a]"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  1982
                </h3>
              </div>
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
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-amber-500 font-semibold mb-8">
                <Clock3 size={14} />
                Since 1982
              </div>

              <h2
                className="text-5xl lg:text-6xl leading-[1.02] text-[#0f2a4a] mb-12"
                style={{
                  fontFamily: "'EB Garamond', serif",
                }}
              >
                Generations Of
                <br />
                Learning,
                <br />
                Leadership &
                <br />
                Character
              </h2>

              <div className="space-y-10 text-[17px] leading-10 text-slate-600 font-light">
                <p>
                  Since its inception, Westbrook Academy has
                  remained committed to the pursuit of meaningful
                  education rooted in integrity, discipline, and
                  intellectual growth. What began as a vision to
                  create a nurturing academic environment has
                  evolved into a respected institution shaping
                  generations of learners.
                </p>

                <p>
                  Over the decades, the institution has embraced
                  innovation while preserving the timeless values
                  that define its foundation. From academic
                  excellence to co-curricular achievement,
                  Westbrook Academy continues to inspire students
                  to lead with confidence, compassion, and
                  responsibility.
                </p>

                <p>
                  Today, our legacy is reflected not only in the
                  accomplishments of our alumni, but in the strong
                  culture of learning and community that continues
                  to thrive within our campus. Every milestone
                  represents our unwavering dedication to shaping
                  future generations with purpose and vision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#f8fafc] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                number: "40+",
                label: "Years Of Excellence",
              },
              {
                number: "12K+",
                label: "Successful Alumni",
              },
              {
                number: "95%",
                label: "Academic Achievement",
              },
              {
                number: "50+",
                label: "Dedicated Faculty",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3
                  className="text-6xl text-[#0f2a4a] mb-4"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  {item.number}
                </h3>

                <p className="text-slate-500 text-sm uppercase tracking-[0.18em]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-28 bg-white">
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
              “A great institution is not defined only by its
              history, but by the values it continues to uphold
              for future generations.”
            </p>

            <div className="mt-16">
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