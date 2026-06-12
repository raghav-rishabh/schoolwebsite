"use client";

import { motion } from "framer-motion";

export default function FeeStructurePage(): JSX.Element {
  return (
    <main className="bg-white text-[#0f2a4a] overflow-hidden">
      {/* HEADER IMAGE */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="border border-slate-200 bg-white overflow-hidden"
          >
            <img
              src="/fees/fee-header.png"
              alt="Fee Chart Header"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      {/* <section className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold">
                Admissions
              </span>

              <h2 className="heading-font mt-6 text-[#0f2a4a] text-5xl sm:text-6xl leading-[1] tracking-tight">
                Fee
                <br />
                Structure
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >
              <p className="text-slate-600 text-[16px] sm:text-[17px] leading-8 sm:leading-10 font-light">
                The fee structure has been prepared to ensure
                complete transparency and clarity for parents
                and guardians. The charts below provide
                detailed information regarding admission fees,
                caution deposits, and annual composite fees
                for various classes during the academic
                session.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* NEW STUDENTS */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10 sm:mb-12">
            <span className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold">
              Admissions
            </span>

            <h2 className="heading-font mt-4 text-[#0f2a4a] text-4xl sm:text-5xl leading-none">
              For New Students
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-slate-200 bg-white overflow-x-auto"
          >
            <img
              src="/fees/fee-new-students.png"
              alt="Fee Structure For New Students"
              className="w-full h-auto object-contain min-w-[900px] lg:min-w-0"
            />
          </motion.div>
        </div>
      </section>

      {/* ANNUAL FEE */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10 sm:mb-12">
            <span className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold">
              Academic Session
            </span>

            <h2 className="heading-font mt-4 text-[#0f2a4a] text-4xl sm:text-5xl leading-none">
              Annual Fee Schedule
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-slate-200 bg-white overflow-x-auto"
          >
            <img
              src="/fees/fee-annual-structure.png"
              alt="Annual Fee Structure"
              className="w-full h-auto object-contain min-w-[1100px] lg:min-w-0"
            />
          </motion.div>
        </div>
      </section>

      {/* NOTE */}
      <section className="py-20 sm:py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-slate-500 text-[15px] sm:text-[16px] leading-8 font-light"
          >
            For clarification regarding fee payment,
            admission procedures, installment schedules, or
            any related queries, parents are encouraged to
            contact the school administration office during
            working hours.
          </motion.p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="pb-24 sm:pb-28">
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
            “Transparency builds trust, and trust strengthens
            the partnership between school and family.”
          </motion.p>
        </div>
      </section>
    </main>
  );
}