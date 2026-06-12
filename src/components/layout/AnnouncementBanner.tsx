"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-[20] w-full h-7 bg-[#0b1d34] border-b border-white/10"
        >
          {/* Mobile Full Banner Link */}
          <a
            href="/admissions#form"
            aria-label="Open admissions form"
            className="absolute inset-0 sm:hidden z-[1]"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center justify-center relative">
            {/* Content */}
            <div className="flex items-center gap-3 text-center">
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Megaphone
                  size={13}
                  className="text-amber-400 shrink-0"
                />
              </motion.div>

              <p className="text-[11px] sm:text-[12px] tracking-[0.12em] uppercase font-medium text-white/80">
                <span className="sm:hidden">
                  Admissions Open →
                </span>

                <span className="hidden sm:inline">
                  Admissions Open For 2026–27 Academic Session
                </span>
              </p>

              <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />

              <a
                href="/admissions#form"
                className="hidden sm:inline-flex text-[11px] uppercase tracking-[0.12em] font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                Apply Now
              </a>
            </div>

            {/* Close */}
            <button
              onClick={() => setVisible(false)}
              className="absolute z-[2] right-4 sm:right-6 lg:right-10 w-6 h-6 flex items-center justify-center text-white/40 hover:text-white transition-colors"
              aria-label="Close announcement"
            >
              <X size={13} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}