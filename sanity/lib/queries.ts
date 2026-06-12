import { groq } from "next-sanity";

// ─── Home Page ──────────────────────────────────────────────
export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    heroTitle,
    heroSubtitle,
    heroImage,
    heroCtaLabel,
    heroCtaLink,
    featuredStats,
    welcomeMessage,
    principalName,
    principalImage,
    "latestNotices": *[_type == "notice"] | order(publishedAt desc) [0...3] {
      _id, title, category, publishedAt, slug
    },
    "galleryPreview": *[_type == "galleryItem"] | order(_createdAt desc) [0...6] {
      _id, title, image, category
    }
  }
`;

// ─── About Page ─────────────────────────────────────────────
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    title,
    heroImage,
    missionStatement,
    visionStatement,
    history,
    values,
    facilities,
    staffMembers[] {
      name, role, qualification, image, bio
    }
  }
`;

// ─── Notices ────────────────────────────────────────────────
export const allNoticesQuery = groq`
  *[_type == "notice"] | order(publishedAt desc) {
    _id,
    title,
    category,
    publishedAt,
    slug,
    excerpt,
    attachmentUrl,
    isImportant
  }
`;

export const noticeBySlugQuery = groq`
  *[_type == "notice" && slug.current == $slug][0] {
    _id,
    title,
    category,
    publishedAt,
    content,
    attachmentUrl,
    isImportant
  }
`;

// ─── Gallery ────────────────────────────────────────────────
export const galleryQuery = groq`
  *[_type == "galleryItem"] | order(_createdAt desc) {
    _id,
    title,
    image,
    category,
    takenAt
  }
`;

export const galleryCategoriesQuery = groq`
  array::unique(*[_type == "galleryItem"].category)
`;

// ─── Timetable ──────────────────────────────────────────────
export const timetableQuery = groq`
  *[_type == "timetable"] | order(grade asc) {
    _id,
    grade,
    section,
    academicYear,
    schedule
  }
`;

// ─── Syllabus ───────────────────────────────────────────────
export const syllabusQuery = groq`
  *[_type == "syllabus"] | order(grade asc) {
    _id,
    grade,
    subject,
    academicYear,
    fileUrl,
    description,
    updatedAt
  }
`;

// ─── Dress Code ─────────────────────────────────────────────
export const dressCodeQuery = groq`
  *[_type == "dressCode"][0] {
    title,
    heroImage,
    sections[] {
      heading,
      description,
      items,
      image
    },
    lastUpdated,
    notes
  }
`;

// ─── Contact Page ───────────────────────────────────────────
export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    address,
    phone,
    email,
    mapEmbedUrl,
    officeHours,
    admissionsContact,
    socialLinks
  }
`;

// ─── Site Settings ──────────────────────────────────────────
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    logo,
    favicon,
    seoDescription,
    socialLinks,
    navLinks,
    footerText,
    announcementBanner
  }
`;