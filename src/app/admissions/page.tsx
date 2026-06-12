"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

import { supabase } from "@/lib/supabase";

const documents = [
  "Birth Certificate",
  "Passport Size Photographs",
  "Previous Academic Records",
  "Transfer Certificate",
  "Aadhaar Card Copy",
];

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    class_applying: "",
    previous_school: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const { error } = await supabase
      .from("admission_forms")
      .insert([formData]);

    if (error) {
      console.log(error);

      setErrorMessage(
        "Something went wrong. Please try again."
      );

      setLoading(false);
      return;
    }

    setSuccessMessage(
      "Admission enquiry submitted successfully."
    );

    setFormData({
      full_name: "",
      email: "",
      phone: "",
      class_applying: "",
      previous_school: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <main className="bg-white overflow-hidden">
      {/* TOP SECTION */}
      <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#c8d4e3] via-[#edf2f7] to-white border-b border-slate-200">
  
  {/* Top Overlay Gradient */}
  <div className="absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-[#0f2a4a]/25 via-[#0f2a4a]/10 to-transparent pointer-events-none z-10" />

  <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-10 text-center">
    <motion.span
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="inline-block text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold mb-6"
    >
      Admissions 2026–27
    </motion.span>

    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-[#0f2a4a] text-5xl sm:text-6xl lg:text-7xl leading-[0.95]"
      style={{
        fontFamily: "'EB Garamond', serif",
      }}
    >
      Admissions
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
      }}
      className="max-w-2xl mx-auto mt-8 text-slate-500 text-[15px] sm:text-[16px] leading-8 font-light"
    >
      Begin your child’s academic journey in
      an environment built on excellence,
      discipline, creativity, and holistic
      development.
    </motion.p>
  </div>
</section>

      {/* DOCUMENTS */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold">
              Required Documents
            </span>

            <h2
              className="mt-5 text-[#0f2a4a] text-4xl sm:text-5xl"
              style={{
                fontFamily: "'EB Garamond', serif",
              }}
            >
              Documents Required
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-slate-200 border border-slate-200">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="bg-white px-6 sm:px-8 py-8 sm:py-10 flex items-start gap-5 hover:bg-[#fdfbf7] transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-amber-200 flex items-center justify-center shrink-0">
                  <Check
                    size={16}
                    className="text-amber-600"
                  />
                </div>

                <div>
                  <h3 className="text-[#0f2a4a] text-[16px] sm:text-[17px] font-medium leading-7">
                    {doc}
                  </h3>

                  <p className="mt-2 text-slate-500 text-[14px] leading-7 font-light">
                    Required during the admission
                    and verification process.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold">
              Admission Enquiry
            </span>

            <h2
              className="mt-5 text-[#0f2a4a] text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-[0.92] tracking-[-0.06em] font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Admission Form
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-[12px] uppercase tracking-[0.18em] text-slate-400 mb-4">
                  Student Name
                </label>

                <input
                  type="text"
                  required
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      full_name:
                        e.target.value,
                    })
                  }
                  className="w-full h-14 border-b border-slate-300 bg-transparent outline-none focus:border-[#0f2a4a] transition-colors text-[#0f2a4a]"
                />
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-[0.18em] text-slate-400 mb-4">
                  Previous School
                </label>

                <input
                  type="text"
                  value={
                    formData.previous_school
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      previous_school:
                        e.target.value,
                    })
                  }
                  className="w-full h-14 border-b border-slate-300 bg-transparent outline-none focus:border-[#0f2a4a] transition-colors text-[#0f2a4a]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-[12px] uppercase tracking-[0.18em] text-slate-400 mb-4">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email:
                        e.target.value,
                    })
                  }
                  className="w-full h-14 border-b border-slate-300 bg-transparent outline-none focus:border-[#0f2a4a] transition-colors text-[#0f2a4a]"
                />
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-[0.18em] text-slate-400 mb-4">
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone:
                        e.target.value,
                    })
                  }
                  className="w-full h-14 border-b border-slate-300 bg-transparent outline-none focus:border-[#0f2a4a] transition-colors text-[#0f2a4a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] uppercase tracking-[0.18em] text-slate-400 mb-4">
                Grade Applying For
              </label>

              <input
                type="text"
                required
                value={
                  formData.class_applying
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    class_applying:
                      e.target.value,
                  })
                }
                className="w-full h-14 border-b border-slate-300 bg-transparent outline-none focus:border-[#0f2a4a] transition-colors text-[#0f2a4a]"
              />
            </div>

            <div>
              <label className="block text-[12px] uppercase tracking-[0.18em] text-slate-400 mb-4">
                Message
              </label>

              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message:
                      e.target.value,
                  })
                }
                className="w-full border-b border-slate-300 bg-transparent outline-none resize-none focus:border-[#0f2a4a] transition-colors text-[#0f2a4a] py-4"
              />
            </div>

            {successMessage && (
              <p className="text-green-600 text-sm">
                {successMessage}
              </p>
            )}

            {errorMessage && (
              <p className="text-red-500 text-sm">
                {errorMessage}
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="h-14 px-10 bg-[#0f2a4a] hover:bg-[#17385f] disabled:opacity-60 text-white text-sm tracking-[0.08em] uppercase font-medium transition-colors duration-300 inline-flex items-center gap-3"
              >
                {loading
                  ? "Submitting..."
                  : "Submit Form"}

                <ArrowRight size={15} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}