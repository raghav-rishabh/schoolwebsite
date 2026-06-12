"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout =
  pathname.startsWith("/login") ||
  pathname.startsWith("/forgot-password") ||
  pathname.startsWith("/reset-password") ||
  pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && (
        <>
          <AnnouncementBanner />
          <Navbar />
        </>
      )}

      <main>{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
}