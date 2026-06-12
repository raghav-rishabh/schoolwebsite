import { PortableTextBlock } from "@portabletext/react";

// ─── Sanity Image ────────────────────────────────────────────
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  alt?: string;
}

// ─── Slug ────────────────────────────────────────────────────
export interface SanitySlug {
  _type: "slug";
  current: string;
}

// ─── Site Settings ───────────────────────────────────────────
export interface SiteSettings {
  siteName: string;
  tagline: string;
  logo?: SanityImage;
  seoDescription: string;
  footerText: string;
  announcementBanner?: {
    enabled: boolean;
    message: string;
    link?: string;
    linkLabel?: string;
  };
  navLinks: Array<{ label: string; href: string }>;
}

// ─── Home Page ───────────────────────────────────────────────
export interface HomePage {
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: SanityImage;
  heroCtaLabel?: string;
  heroCtaLink?: string;
  featuredStats: Array<{ value: string; label: string; icon?: string }>;
  welcomeMessage: PortableTextBlock[];
  principalName: string;
  principalImage?: SanityImage;
  latestNotices: NoticePreview[];
  galleryPreview: GalleryItemPreview[];
}

// ─── About Page ──────────────────────────────────────────────
export interface AboutPage {
  title: string;
  heroImage?: SanityImage;
  missionStatement: string;
  visionStatement: string;
  history: PortableTextBlock[];
  values: Array<{ title: string; description: string; icon?: string }>;
  facilities: Array<{ name: string; description: string; image?: SanityImage }>;
  staffMembers: StaffMember[];
}

export interface StaffMember {
  name: string;
  role: string;
  qualification: string;
  image?: SanityImage;
  bio?: string;
}

// ─── Notice ──────────────────────────────────────────────────
export interface Notice {
  _id: string;
  title: string;
  slug: SanitySlug;
  category: NoticeCategory;
  publishedAt: string;
  excerpt?: string;
  content?: PortableTextBlock[];
  attachmentUrl?: string;
  isImportant: boolean;
}

export type NoticePreview = Pick<
  Notice,
  "_id" | "title" | "category" | "publishedAt" | "slug" | "isImportant"
>;

export type NoticeCategory =
  | "academic"
  | "events"
  | "examinations"
  | "admissions"
  | "holiday"
  | "general";

// ─── Gallery ─────────────────────────────────────────────────
export interface GalleryItem {
  _id: string;
  title: string;
  image: SanityImage;
  category: string;
  takenAt?: string;
  altText?: string;
}

export type GalleryItemPreview = Pick<
  GalleryItem,
  "_id" | "title" | "image" | "category"
>;

// ─── Timetable ───────────────────────────────────────────────
export interface Period {
  periodNumber: number;
  subject: string;
  teacher?: string;
  startTime: string;
  endTime: string;
  room?: string;
}

export interface DaySchedule {
  day: string;
  periods: Period[];
}

export interface Timetable {
  _id: string;
  grade: string;
  section?: string;
  academicYear?: string;
  schedule: DaySchedule[];
}

// ─── Syllabus ────────────────────────────────────────────────
export interface Syllabus {
  _id: string;
  grade: string;
  subject: string;
  academicYear?: string;
  description?: string;
  fileUrl?: string;
  fileAsset?: { asset: { url: string } };
  updatedAt?: string;
  curriculum?: "cbse" | "ib" | "state";
}

// ─── Dress Code ──────────────────────────────────────────────
export interface DressCodeSection {
  heading: string;
  description: PortableTextBlock[];
  items: string[];
  image?: SanityImage;
}

export interface DressCode {
  title: string;
  heroImage?: SanityImage;
  sections: DressCodeSection[];
  lastUpdated?: string;
  notes?: PortableTextBlock[];
}

// ─── Contact Page ────────────────────────────────────────────
export interface ContactPage {
  address: string;
  phone: string[];
  email: string[];
  mapEmbedUrl?: string;
  officeHours?: string;
  admissionsContact?: {
    name: string;
    phone: string;
    email: string;
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
}