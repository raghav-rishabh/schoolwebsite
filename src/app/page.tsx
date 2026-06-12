"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Menu, X, GraduationCap, ChevronRight, Star, MapPin, Phone, Mail,
  Facebook, Twitter, Instagram, Youtube, ArrowRight,
  FlaskConical, Monitor, Dumbbell, Library,
  ChevronLeft, Quote, LucideIcon,
} from "lucide-react";
import Link from "next/link";



/* ─────────────────────────── TYPES ─────────────────────────── */

interface StatItem {
  value: string;
  label: string;
}

interface FacilityItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
  href:string;
}

interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  stars: number;
  text: string;
}

interface ContactRow {
  Icon: LucideIcon;
  text: string;
}

/* ─────────────────────────── CONSTANTS ─────────────────────────── */

const NAV_LINKS: string[] = ["Home", "About", "Facilities", "Academics", "CBSE", "Admissions"];

const HERO_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
];

const STATS: StatItem[] = [
  { value: "2,400+", label: "Students Enrolled" },
  { value: "98%",    label: "University Placement" },
  { value: "180+",   label: "Faculty Members" },
  { value: "42",     label: "Years of Excellence" },
];

const FACILITIES = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    desc: "State-of-the-art digital learning environments equipped with interactive boards, surround audio, and collaborative workstations that reimagine how students engage with knowledge.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    href: "/infrastructure/smart-classrooms",
  },

  {
    icon: FlaskConical,
    title: "Science Laboratories",
    desc: "Fully equipped chemistry, physics and biology laboratories with precision instruments, safety systems, and dedicated research bays for advanced experimental learning.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    href: "/infrastructure/science-labs",
  },

  {
    icon: Monitor,
    title: "Computer Lab",
    desc: "High-performance computing suites with the latest hardware and software, providing students immersive environments for coding, design, and digital literacy.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    href: "/infrastructure/smart-classrooms",
  },

  {
    icon: Dumbbell,
    title: "Sports Facilities",
    desc: "Expansive multi-sport grounds including Olympic-standard tracks, swimming pool, indoor courts, and professional coaching programmes that build champions.",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    href: "/infrastructure/sports-facilities",
  },

  {
    icon: Library,
    title: "Library",
    desc: "A curated collection of over 60,000 volumes alongside digital archives, quiet study rooms, and collaborative reading spaces designed to inspire intellectual curiosity.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    href: "/infrastructure/library",
  },
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Sarah Mitchell",
    role: "Parent of Grade 10 student",
    avatar: "https://i.pravatar.cc/80?img=47",
    stars: 5,
    text: "Westbrook has transformed our daughter completely. The faculty genuinely care about each child's development, not just academically but as a whole person. We could not have chosen a better school.",
  },
  {
    name: "James Okonkwo",
    role: "Parent of Grade 7 student",
    avatar: "https://i.pravatar.cc/80?img=12",
    stars: 5,
    text: "The infrastructure here is world-class. The science labs and smart classrooms provide an environment I never had access to growing up. Our son comes home genuinely excited about learning every day.",
  },
  {
    name: "Priya Sharma",
    role: "Parent of Grade 12 graduate",
    avatar: "https://i.pravatar.cc/80?img=23",
    stars: 5,
    text: "My daughter graduated with distinction and received offers from three top universities. Westbrook's rigorous academics, combined with exceptional mentorship, set her on a path we are incredibly proud of.",
  },
  {
    name: "David Chen",
    role: "Parent of Grade 9 student",
    avatar: "https://i.pravatar.cc/80?img=33",
    stars: 5,
    text: "What sets this school apart is the balance between academic excellence and extra-curricular development. My son has discovered a passion for robotics and music here he never knew he had.",
  },
  {
    name: "Elena Vasquez",
    role: "Parent of Grade 11 student",
    avatar: "https://i.pravatar.cc/80?img=44",
    stars: 5,
    text: "The communication between school and parents is exceptional. We always feel involved in our child's journey. The pastoral care team is responsive, warm, and genuinely invested.",
  },
  {
    name: "Michael Adeyemi",
    role: "Parent of Grade 6 student",
    avatar: "https://i.pravatar.cc/80?img=56",
    stars: 4,
    text: "Switching to Westbrook was the best decision we made for our son. Within a semester the change in his confidence, articulation, and work ethic was unmistakable. Truly remarkable institution.",
  },
];

const FOOTER_LINKS: Record<string, string[]> = {
  "Quick Links": ["Home", "About Us", "Admissions", "Academics", "Gallery", "News & Events"],
  Academics: ["Primary School", "Middle School", "Senior School", "Co-Curricular", "Examination Results"],
};

/* ─────────────────────────── UTILITIES ─────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function useScrolled(threshold: number = 20): boolean {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c: number) => (c + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-[92vh] min-h-[560px] overflow-hidden">
      {/* Image carousel */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={HERO_IMAGES[current]}
            alt="School campus"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a4a]/70 via-[#0f2a4a]/50 to-[#0f2a4a]/75" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a4a]/30 via-[#0f2a4a]/22 to-[#0f2a4a]/36" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.25em" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] mb-6 block"
        >
          Established 1982 · Excellence in Education
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          // className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6"
          className="heading-font text-white text-5xl sm:text-6xl lg:text-[7rem] leading-[0.92] tracking-tight"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Shaping Future Leaders<br />
          <span className="font-semibold">Through Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/70 text-base sm:text-lg font-light max-w-xl leading-relaxed mb-10"
        >
          A distinguished institution where academic rigour, moral character, and creative spirit
          converge to prepare exceptional young minds for the world ahead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/infrastructure/campus-classrooms"
            className="px-7 py-3 bg-white text-[#0f2a4a] text-sm font-semibold tracking-wide hover:bg-amber-50 transition-colors duration-200 rounded-sm"
          >
            Discover Our School 
          </Link>
          <Link
            href="/admissions"
            className="px-7 py-3 border border-white/50 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors duration-200 rounded-sm flex items-center gap-2"
          >
            Admissions <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_IMAGES.map((_: string, i: number) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-px transition-all duration-500 ${
              i === current ? "w-10 bg-amber-400" : "w-4 bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── ABOUT ─────────────────────────── */

function About(): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* <div className="aspect-[4/5] rounded-sm overflow-hidden"> */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden rotate-[-4deg] hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80"
                alt="School building"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent boxes */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0f2a4a] rounded-sm hidden lg:block" />
            <div className="absolute -bottom-3 -right-3 w-32 h-32 border border-amber-400 rounded-sm hidden lg:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:pl-8"
          >
            <motion.span
              variants={fadeUp}
              className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block"
            >
              About Westbrook Academy
            </motion.span>
            <motion.h2
              variants={fadeUp}
              // className="text-[#0f2a4a] text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-7"
              className="text-[#0f2a4a] text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              A Legacy of Learning,<br />
              <span className="font-semibold">A Future of Promise</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-slate-500 text-base leading-relaxed mb-5 font-light"
            >
              Founded in 1982, Westbrook Academy has cultivated generations of scholars, leaders and
              innovators. Rooted in the conviction that every child deserves an environment that
              challenges, nurtures and inspires, we have built an institution where academic integrity
              and human development walk hand in hand.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-slate-500 text-base leading-relaxed mb-10 font-light"
            >
              Our distinguished faculty, world-class facilities and holistic curriculum draw students
              from across the region, united by a shared pursuit of excellence — not merely in
              examinations, but in character, empathy and purpose.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-10"
            >
              {STATS.map((s: StatItem) => (
                <div key={s.label}>
                  <p
                    className="text-3xl font-semibold text-[#0f2a4a] mb-1"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FACILITIES ─────────────────────────── */

interface FacilityCardProps {
  facility: FacilityItem;
  index: number;
}

function FacilityCard({ facility, index }: FacilityCardProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const even: boolean = index % 2 === 0;
  const Icon: LucideIcon = facility.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-sm ${
        index !== 0 ? "mt-2" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden aspect-[16/10] lg:aspect-auto ${
          !even ? "lg:order-last" : ""
        }`}
      >
        <img
          src={facility.img}
          alt={facility.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#0f2a4a]/20" />
      </div>

      {/* Content */}
      <div
        className={`bg-[#f8f9fb] flex flex-col justify-center px-10 lg:px-14 py-12 ${
          !even ? "lg:order-first" : ""
        }`}
      >
        <div className="w-11 h-11 rounded-sm bg-[#0f2a4a]/6 flex items-center justify-center mb-6">
          <Icon size={20} className="text-[#0f2a4a]" />
        </div>
        <h3
          className="text-[#0f2a4a] text-2xl lg:text-3xl font-light mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {facility.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed font-light mb-6">{facility.desc}</p>
        <a
        href={facility.href}
          className="text-[#0f2a4a] text-sm font-semibold tracking-wide flex items-center gap-2 group w-fit"
        >
          Learn more
          <ChevronRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.div>
  );
}

function Facilities(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block"
          >
            World-Class Infrastructure
          </motion.span>
          <motion.h2
            variants={fadeUp}
            // className="text-[#0f2a4a] text-3xl sm:text-4xl lg:text-5xl font-light leading-tight"
            className="text-[#0f2a4a] text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Facilities Built for<br />
            <span className="font-semibold">Exceptional Learning</span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FACILITIES.map((f: FacilityItem, i: number) => (
            <FacilityCard key={f.title} facility={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── TESTIMONIALS ─────────────────────────── */

interface StarRatingProps {
  count?: number;
}

function StarRating({ count = 5 }: StarRatingProps): JSX.Element {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_: unknown, i: number) => (
        <Star
          key={i}
          size={12}
          className={i < count ? "fill-amber-400 text-amber-400" : "text-slate-200"}
        />
      ))}
    </div>
  );
}

function Testimonials(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scroll = (dir: number): void => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-36 bg-[#f4f6f9]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.span
              variants={fadeUp}
              className="text-amber-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3 block"
            >
              Parent Testimonials
            </motion.span>
            <motion.h2
              variants={fadeUp}
              // className="text-[#0f2a4a] text-3xl sm:text-4xl lg:text-5xl font-light"
              className="text-[#0f2a4a] text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Words From Our<br />
              <span className="font-semibold">School Community</span>
            </motion.h2>
          </motion.div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-[#0f2a4a]/20 rounded-sm flex items-center justify-center hover:bg-[#0f2a4a] hover:text-white hover:border-[#0f2a4a] transition-all duration-200 text-[#0f2a4a]"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-[#0f2a4a]/20 rounded-sm flex items-center justify-center hover:bg-[#0f2a4a] hover:text-white hover:border-[#0f2a4a] transition-all duration-200 text-[#0f2a4a]"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Scroll strip */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {TESTIMONIALS.map((t: TestimonialItem, i: number) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              // className="min-w-[300px] sm:min-w-[340px] bg-white rounded-sm p-8 snap-start flex-shrink-0 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              className="w-full min-w-full h-[320px] bg-white rounded-sm p-8 snap-center flex-shrink-0 border border-slate-100 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <Quote size={24} className="text-amber-400/60 mb-4" />
              <p className="text-slate-600 text-[15px] leading-7 font-light mb-8 break-words whitespace-normal max-w-full">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-[#0f2a4a] text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
                <StarRating count={t.stars} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA BANNER ─────────────────────────── */

function CtaBanner(): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-0" ref={ref}>
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80"
          alt="School"
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-[#0f2a4a]/85 flex items-center justify-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center px-6"
          >
            <motion.h2
              variants={fadeUp}
              // className="text-white text-2xl sm:text-4xl font-light mb-4"
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Begin Your Child's Journey{" "}
              <span className="font-semibold">With Us</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/60 mb-8 text-sm max-w-md mx-auto"
            >
              Applications for the 2026–27 academic session are now open. Limited seats available.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold tracking-wide transition-colors duration-200 rounded-sm"
            >
              Apply for Admissions <ArrowRight size={14} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer(): JSX.Element {
  const SOCIAL_ICONS: LucideIcon[] = [Facebook, Twitter, Instagram, Youtube];

  const CONTACT_ROWS: ContactRow[] = [
    { Icon: MapPin, text: "14 Westbrook Lane, Academic Park,\nMetro City — 110001" },
    { Icon: Phone, text: "+1 (800) 942-3100" },
    { Icon: Mail,  text: "admissions@westbrookacademy.edu" },
  ];

  return (
    <footer id="contact" className="bg-[#0a1f38] text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center">
              <GraduationCap size={18} className="text-amber-400" />
            </div>
            <span className="font-semibold tracking-tight text-base leading-tight">
              Westbrook<br />
              <span className="text-xs font-normal tracking-widest uppercase text-white/40">
                Academy
              </span>
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed font-light mb-6">
            Nurturing exceptional minds and building future leaders since 1982 through academic
            excellence and holistic development.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((Icon: LucideIcon, i: number) => (
              <a
                key={i}
                href="#"
                aria-label={`Social link ${i + 1}`}
                className="w-8 h-8 bg-white/8 hover:bg-amber-500 rounded-sm flex items-center justify-center transition-colors duration-200"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]: [string, string[]]) => (
          <div key={heading}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">
              {heading}
            </h4>
            <ul className="space-y-3">
              {links.map((l: string) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-white/50 text-sm hover:text-white font-light transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-amber-400 transition-all duration-200" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">
            Contact Us
          </h4>
          <div className="space-y-4">
            {CONTACT_ROWS.map(({ Icon, text }: ContactRow) => (
              <div key={text} className="flex gap-3">
                <Icon size={14} className="text-amber-400 mt-1 shrink-0" />
                <p className="text-white/50 text-sm font-light leading-relaxed whitespace-pre-line">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 lg:px-10 py-6 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-white/30 text-xs font-light">
        <p>© 2026 Westbrook Academy. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white/60 transition-colors">Safeguarding</a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── APP ─────────────────────────── */

export default function App(): JSX.Element {
  return (
    <div className="font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        h1,h2,h3 { font-family: 'EB Garamond', Georgia, serif !important; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Facilities />
      <Testimonials />
      <CtaBanner />
      {/* <Footer /> */}
    </div>
  );
}
