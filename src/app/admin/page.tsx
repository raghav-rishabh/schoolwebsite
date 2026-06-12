"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

import {
  Users,
  ShieldCheck,
  ClipboardList,
  Bell,
  CalendarRange,
  Clock3,
} from "lucide-react";

export default function AdminPage() {
  const router = useRouter();

  // const [email, setEmail] = useState("");
  const [adminName, setAdminName] =
  useState("");
  const [loading, setLoading] = useState(true);

  const [applications, setApplications] =
    useState<any[]>([]);

  // ADMISSION WINDOW
  const admissionStart =
    "1 July 2026";

  const admissionEnd =
    "1 August 2026";

  const admissionsOpen = true;

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      // setEmail(user.email || "");
      // setAdminName("Rishabh");

      const { data: profile } =
  await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

if (profile) {
  setAdminName(profile.full_name);
}




      const { data, error } = await supabase
        .from("admission_forms")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (data) {
        setApplications(data);
      }

      if (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.replace("/login");
  };

  const todayApplications =
    useMemo(() => {
      const today =
        new Date().toLocaleDateString();

      return applications.filter(
        (app) =>
          new Date(
            app.created_at
          ).toLocaleDateString() === today
      ).length;
    }, [applications]);

  const recentApplications =
    applications.slice(0, 5);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8f6f2] flex items-center justify-center px-6">
        <p className="text-slate-500 text-sm tracking-[0.18em] uppercase text-center">
          Loading Dashboard
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f6f2] px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        {/* HERO */}
<div className="border border-slate-200 bg-gradient-to-br from-[#0f2a4a] via-[#143353] to-[#1a3f68] text-white overflow-hidden">
  <div className="p-8 sm:p-10 lg:p-14">
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
      <div>
        <p className="text-[11px] uppercase tracking-[0.28em] text-amber-400 font-semibold">
          Administration
        </p>

        <h1 className="heading-font text-5xl sm:text-6xl lg:text-7xl mt-5 leading-none">
          Welcome,
          <br />
          {adminName}
        </h1>

        <p className="mt-6 text-white/70 max-w-xl leading-8">
          Manage admissions, applications, notices and school operations from a single dashboard.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 border border-white/15 px-5 py-3">
          <span className="text-white/60 text-sm">
            Total Applications
          </span>

          <span className="text-amber-400 font-medium">
            {applications.length}
          </span>
        </div>
      </div>
      

      <button
        onClick={handleLogout}
        className="h-12 px-7 bg-white text-[#0f2a4a] text-sm uppercase tracking-[0.14em] hover:bg-slate-100 transition-colors duration-300 w-full sm:w-auto"
      >
        Logout
      </button>
    </div>
  </div>
</div>

        {/* OVERVIEW */}
        <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          <div className="border border-slate-200 bg-white p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 font-semibold">
                Total Applications
              </p>

              <ClipboardList
  size={18}
  className="text-amber-500"
/>
            </div>

            <h2 className="mt-6 text-[#0f2a4a] text-4xl font-medium">
              {applications.length}
            </h2>
          </div>

          <div className="border border-slate-200 bg-white p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 font-semibold">
                Applications Today
              </p>

              <Clock3
  size={18}
  className="text-blue-500"
/>
            </div>

            <h2 className="mt-6 text-[#0f2a4a] text-4xl font-medium">
              {todayApplications}
            </h2>
          </div>

          <div className="border border-slate-200 bg-white p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 font-semibold">
                Admissions Status
              </p>

              <ShieldCheck
  size={18}
  className="text-green-500"
/>
            </div>

            <h2
              className={`mt-6 text-2xl font-medium ${
                admissionsOpen
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {admissionsOpen
                ? "Open"
                : "Closed"}
            </h2>
          </div>

          <div className="border border-slate-200 bg-white p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 font-semibold">
                Logged In As
              </p>

              <Users
  size={18}
  className="text-purple-500"
/>
            </div>

            <h2 className="mt-6 text-[#0f2a4a] text-lg sm:text-xl font-medium break-all">
              {adminName}
            </h2>
          </div>
        </div>

        {/* CONTROL PANELS */}
        <div className="mt-14 grid xl:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* ADMISSION CONTROL */}
          <div className="border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-6 sm:px-8 py-6">
              <h2 className="text-2xl text-[#0f2a4a] font-medium">
                Admission Window
              </h2>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border border-slate-200 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    Opening Date
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <CalendarRange
                      size={18}
                      className="text-amber-500"
                    />

                    <p className="text-[#0f2a4a] text-lg font-medium">
                      {admissionStart}
                    </p>
                  </div>
                </div>

                <div className="border border-slate-200 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    Closing Date
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <CalendarRange
                      size={18}
                      className="text-amber-500"
                    />

                    <p className="text-[#0f2a4a] text-lg font-medium">
                      {admissionEnd}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border border-slate-200 p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Current Status
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <div
                    className={`px-5 py-3 text-sm uppercase tracking-[0.12em] border ${
                      admissionsOpen
                        ? "border-green-200 text-green-600 bg-green-50"
                        : "border-red-200 text-red-500 bg-red-50"
                    }`}
                  >
                    {admissionsOpen
                      ? "Admissions Open"
                      : "Admissions Closed"}
                  </div>

                  <button className="h-11 px-6 bg-[#0f2a4a] text-white text-sm uppercase tracking-[0.12em] hover:bg-[#163354] transition-colors duration-300">
                    Change Status
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-6 sm:px-8 py-6">
              <h2 className="text-2xl text-[#0f2a4a] font-medium">
                Recent Activity
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              {recentApplications.length ===
              0 ? (
                <div className="p-8">
                  <p className="text-slate-500">
                    No recent activity.
                  </p>
                </div>
              ) : (
                recentApplications.map(
                  (app) => (
                    <div
                      key={app.id}
                      className="p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0f2a4a] text-white flex items-center justify-center text-sm font-medium shrink-0">
                          {app.full_name
                            ?.charAt(0)
                            ?.toUpperCase()}
                        </div>

                        <div>
                          <p className="text-[#0f2a4a] text-[15px] font-medium leading-7">
                            {
                              app.full_name
                            }{" "}
                            submitted an
                            admission enquiry.
                          </p>

                          <p className="mt-2 text-slate-400 text-xs uppercase tracking-[0.12em]">
                            {new Date(
                              app.created_at
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>

        {/* NOTICE PANEL */}
        <div className="mt-14 border border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl sm:text-3xl text-[#0f2a4a] font-medium">
                Notices & Announcements
              </h2>
            </div>

            <button className="h-11 px-6 bg-[#0f2a4a] text-white text-sm uppercase tracking-[0.12em] hover:bg-[#163354] transition-colors duration-300">
              Add Notice
            </button>
          </div>

          <div className="p-6 sm:p-8">
            <div className="border border-dashed border-slate-300 p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f8fafc] mx-auto flex items-center justify-center">
  <Bell
    size={28}
    className="text-slate-400"
  />
</div>

              <h3 className="mt-5 text-[#0f2a4a] text-xl font-medium">
                Create Your First Announcement
              </h3>

              <p className="mt-3 text-slate-500 leading-7 max-w-xl mx-auto">
                Create announcements, admission
                updates, holidays, examination
                circulars, and important notices
                for students and parents.
              </p>
            </div>
          </div>
        </div>

        {/* APPLICATIONS */}
        <div className="mt-14 sm:mt-16 border border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-5 sm:py-6">
            <h2 className="text-2xl sm:text-3xl text-[#0f2a4a] font-medium">
              Admission Applications
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {applications.length === 0 ? (
              <div className="p-8">
                <p className="text-slate-500">
                  No applications yet.
                </p>
              </div>
            ) : (
              applications.map((app) => (
                <div
                  key={app.id}
                  className="p-5 sm:p-8"
                >
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl text-[#0f2a4a] font-medium leading-tight">
                        {app.full_name}
                      </h3>

                      <p className="mt-3 text-slate-500 text-sm">
                        Submitted on{" "}
                        {new Date(
                          app.created_at
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="border border-slate-200 px-4 py-3 text-sm uppercase tracking-[0.12em] text-slate-500 w-fit">
                        {
                          app.class_applying
                        }
                      </div>

                      <div className="border border-amber-200 bg-amber-50 text-amber-700 px-4 py-3 text-sm uppercase tracking-[0.12em] w-fit">
                        Pending
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <p className="text-slate-400 uppercase tracking-[0.14em] text-[11px] mb-3">
                        Email
                      </p>

                      <p className="text-[#0f2a4a] text-[15px] break-all">
                        {app.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-400 uppercase tracking-[0.14em] text-[11px] mb-3">
                        Phone
                      </p>

                      <p className="text-[#0f2a4a] text-[15px]">
                        {app.phone}
                      </p>
                    </div>

                    <div className="sm:col-span-2">
                      <p className="text-slate-400 uppercase tracking-[0.14em] text-[11px] mb-3">
                        Previous School
                      </p>

                      <p className="text-[#0f2a4a] text-[15px] leading-7">
                        {app.previous_school ||
                          "—"}
                      </p>
                    </div>
                  </div>

                  {app.message && (
                    <div className="mt-8 border-t border-slate-100 pt-8">
                      <p className="text-slate-400 uppercase tracking-[0.14em] text-[11px] mb-4">
                        Message
                      </p>

                      <p className="text-slate-600 leading-8 text-[15px]">
                        {app.message}
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}