"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const handleUpdatePassword =
    async () => {
      setMessage("");

      if (password.length < 6) {
        setMessage(
          "Password must be at least 6 characters long."
        );
        return;
      }

      if (
        password !== confirmPassword
      ) {
        setMessage(
          "Passwords do not match."
        );
        return;
      }

      setLoading(true);

      const { error } =
        await supabase.auth.updateUser({
          password,
        });

      if (error) {
        setMessage(error.message);
      } else {
        setSuccess(true);

        setTimeout(() => {
          router.push("/login");
        }, 2500);
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
          New Password
        </h1>

        {!success ? (
          <>
            <p className="mt-6 text-slate-500 text-[15px] leading-8">
              Create a new password for your
              administrator account.
            </p>

            <div className="mt-10 space-y-5">
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-slate-300 px-5 outline-none text-[15px] focus:border-[#0f2a4a] transition-colors duration-300"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                className="w-full h-14 border border-slate-300 px-5 outline-none text-[15px] focus:border-[#0f2a4a] transition-colors duration-300"
              />

              <p className="text-xs text-slate-400">
                Password must contain at
                least 6 characters.
              </p>

              {message && (
                <p className="text-sm text-red-500">
                  {message}
                </p>
              )}

              <button
                onClick={
                  handleUpdatePassword
                }
                disabled={loading}
                className="w-full h-14 bg-[#0f2a4a] text-white text-sm uppercase tracking-[0.14em] font-medium hover:bg-[#163354] transition-colors duration-300 disabled:opacity-60"
              >
                {loading
                  ? "Updating..."
                  : "Update Password"}
              </button>
            </div>
          </>
        ) : (
          <div className="mt-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center">
              ✓
            </div>

            <h2 className="mt-5 text-2xl text-[#0f2a4a] font-medium">
              Password Updated
            </h2>

            <p className="mt-3 text-slate-500 leading-7">
              Your password has been
              updated successfully.
            </p>

            <p className="mt-2 text-slate-400 text-sm">
              Redirecting to login...
            </p>
          </div>
        )}
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