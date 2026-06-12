"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";




export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] =
    useState("");

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage("");

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    router.replace("/admin");
  };

  return (
    // <main className="min-h-screen bg-[#f8f6f2] flex items-center justify-center px-6">
    <main className="min-h-screen bg-[#f8f6f2] flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md bg-white border border-slate-200 p-12">
        <p className="text-[11px] uppercase tracking-[0.28em] text-amber-500 font-semibold">
          Administration
        </p>

        <h1 className="heading-font text-[#0f2a4a] text-5xl mt-6 leading-none">
          Admin Login
        </h1>

        <p className="mt-6 text-slate-500 text-[15px] leading-8">
          Access the administration dashboard securely.
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

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full h-14 border border-slate-300 px-5 outline-none text-[15px] focus:border-[#0f2a4a] transition-colors duration-300"
          />


          <Link
            href="/forgot-password"
            className="block text-right text-sm text-slate-500 hover:text-[#0f2a4a]"
          >
            Forgot Password?
          </Link>


          {errorMessage && (
            <p className="text-red-500 text-sm">
              {errorMessage}
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full h-14 bg-[#0f2a4a] text-white text-sm uppercase tracking-[0.14em] font-medium hover:bg-[#163354] transition-colors duration-300 disabled:opacity-60"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </div>
      </div>
      <Link
        href="/"
        className="mt-6 text-[#0f2a4a] text-sm uppercase tracking-[0.14em] font-medium hover:text-amber-500 transition-colors duration-300"
      >
        ← Back to Homepage
      </Link>
    </main>
  );
}