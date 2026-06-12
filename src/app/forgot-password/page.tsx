"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true);
    setMessage("");

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email.trim(),
        {
          redirectTo:
            `${window.location.origin}/reset-password`,
        }
      );

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "If an account exists for this email, a password reset link has been sent."
      );
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#f8f6f2] flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md bg-white border border-slate-200 p-12">
        <p className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold">
          Administration
        </p>

        <h1 className="heading-font text-[#0f2a4a] text-5xl mt-6 leading-none">
          Forgot Password
        </h1>

        <p className="mt-6 text-slate-500 text-[15px] leading-8">
          Enter your email address and we'll send you a
          link to reset your password.
        </p>

        <div className="mt-10 space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full h-14 border border-slate-300 px-5 outline-none text-[15px] focus:border-[#0f2a4a] transition-colors duration-300"
          />

          {message && (
            <p className="text-sm text-green-600">
              {message}
            </p>
          )}

          <button
            onClick={handleReset}
            disabled={loading}
            className="w-full h-14 bg-[#0f2a4a] text-white text-sm uppercase tracking-[0.14em] font-medium hover:bg-[#163354] transition-colors duration-300 disabled:opacity-60"
          >
            {loading
              ? "Sending..."
              : "Send Reset Link"}
          </button>
        </div>
      </div>

      <Link
        href="/login"
        className="mt-6 text-[#0f2a4a] text-sm uppercase tracking-[0.14em] font-medium hover:text-amber-500 transition-colors duration-300"
      >
        ← Back to Login
      </Link>

      <Link
        href="/"
        className="mt-3 text-slate-500 text-sm uppercase tracking-[0.14em] hover:text-[#0f2a4a] transition-colors duration-300"
      >
        ← Back to Homepage
      </Link>
    </main>
  );
}