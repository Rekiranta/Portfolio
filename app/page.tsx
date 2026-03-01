"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

// ============================================================================
// DATA
// ============================================================================

const featuredProjects = [
  {
    title: "Terraform K8s Blueprints",
    desc: "Production-ready Kubernetes infrastructure with Terraform modules and automated CI/CD pipelines via GitHub Actions.",
    tech: ["Terraform", "Kubernetes", "GitHub Actions", "Docker"],
    category: "DevOps",
    color: "#ef4444",
    url: "https://github.com/Rekiranta/terraform-k8s-blueprints-ci",
  },
  {
    title: "Data Pipeline ELT + dbt",
    desc: "End-to-end ELT data pipeline with dbt transformations, PostgreSQL warehouse, and automated quality checks.",
    tech: ["dbt", "PostgreSQL", "Python", "Docker"],
    category: "Data",
    color: "#3b82f6",
    url: "https://github.com/Rekiranta/data-pipeline-elt-dbt",
  },
  {
    title: "BuildWatch CI Monitor",
    desc: "Real-time CI/CD build monitoring dashboard with WebSocket connections and GitHub Actions integration.",
    tech: ["Node.js", "GitHub Actions", "WebSocket", "React"],
    category: "DevOps",
    color: "#22c55e",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/buildwatch-ci-monitor",
  },
  {
    title: "FastAPI Redis Cache API",
    desc: "High-performance REST API with Redis caching layer, comprehensive testing suite, and containerized deployment.",
    tech: ["FastAPI", "Redis", "Pytest", "Docker"],
    category: "API",
    color: "#a855f7",
    url: "https://github.com/Rekiranta/fastapi-redis-cache-api",
  },
];

const techStack = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask" },
  { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" },
];

const certifications = [
  "AWS Cloud Foundations",
  "AWS Cloud Architecting",
  "Google Cloud Computing",
  "SAS Data Literacy",
  "Google Digital Marketing",
];

const marqueeWords = [
  "SCALABLE", "AUTOMATED", "RELIABLE", "CLOUD-NATIVE",
  "CONTAINERIZED", "OBSERVABLE", "SECURE", "RESILIENT",
];

// ============================================================================
// HOOKS
// ============================================================================

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function useCounterAnimation(
  ref: React.RefObject<HTMLElement | null>,
  target: number,
  duration: number = 2000
) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, duration, hasAnimated]);

  return count;
}

function useCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
        glowRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return glowRef;
}

// ============================================================================
// COMPONENTS
// ============================================================================

function AnimatedStars() {
  const [stars, setStars] = useState<Array<{
    left: string; top: string; size: number; duration: string; delay: string; maxOpacity: number;
  }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 80 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 4}s`,
      maxOpacity: Math.random() * 0.5 + 0.2,
    }));
    setStars(generated);
  }, []);

  return (
    <>
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            "--duration": star.duration,
            "--delay": star.delay,
            "--max-opacity": star.maxOpacity,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

function RotatingBadge() {
  return (
    <div className="relative w-24 h-24">
      <svg className="rotating-badge w-full h-full" viewBox="0 0 100 100">
        <defs>
          <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.3" />
        <text fontSize="10" fontWeight="bold" fill="#ef4444" letterSpacing="3">
          <textPath href="#circlePath">
            OPEN TO WORK &#x2022; OPEN TO WORK &#x2022;{" "}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  const projectCount = useCounterAnimation(projectsRef, 23);
  const certCount = useCounterAnimation(certsRef, 5);
  const techCount = useCounterAnimation(techRef, 15);

  useScrollAnimation();
  const cursorGlowRef = useCursorGlow();

  const [navVisible, setNavVisible] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setNavVisible(current < 50 || current < lastScroll.current);
      setNavScrolled(current > 100);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Card tilt effect on mouse move
  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    card.style.transform = `perspective(800px) rotateY(${(x - 0.5) * 4}deg) rotateX(${(0.5 - y) * 4}deg) translateY(-4px)`;
  }, []);

  const handleCardMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white relative">
      {/* Cursor glow */}
      <div ref={cursorGlowRef} className="cursor-glow" style={{ opacity: 0 }} />

      {/* ============================================
          FLOATING NAV
          ============================================ */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 floating-nav rounded-full px-6 py-3 flex items-center gap-6 transition-all duration-500 ${
          navVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        } ${navScrolled ? "shadow-2xl" : ""}`}
      >
        <span className="font-display font-extrabold text-white text-sm tracking-wider">TR</span>
        <div className="w-px h-4 bg-white/10" />
        <a href="#about" className="text-sm font-medium">About</a>
        <a href="#projects" className="text-sm font-medium">Work</a>
        <a href="#skills" className="text-sm font-medium">Skills</a>
        <a href="#contact" className="text-sm font-medium px-4 py-1.5 bg-white/10 rounded-full text-white hover:bg-white/15 transition-colors">
          Contact
        </a>
      </nav>

      {/* ============================================
          HERO
          ============================================ */}
      <section className="stars-bg relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <AnimatedStars />
        <div className="hero-glow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hero-text-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-400">Open to opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="hero-text-animate font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight">
            I build and automate{" "}
            <br className="hidden sm:block" />
            infrastructure that{" "}
            <br className="hidden sm:block" />
            delivers <span className="italic-accent">real impact</span>
          </h1>

          {/* Subtitle */}
          <div className="hero-text-animate mt-8 flex flex-col items-center gap-3">
            <p className="text-gray-400 text-lg">
              Hello, I&apos;m <span className="text-white font-semibold">Teemu Rekiranta</span>
            </p>
            <span className="inline-block px-4 py-1.5 rounded-md bg-red-500 text-white text-sm font-bold">
              Cloud &amp; DevOps Engineer
            </span>
          </div>

          {/* CTA */}
          <div className="hero-text-animate mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all"
            >
              Let&apos;s Connect
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:Teemu.Rekiranta1@gmail.com"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
              </svg>
              Teemu.Rekiranta1@gmail.com
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* ============================================
          BENTO ABOUT CARDS
          ============================================ */}
      <section className="section-gradient px-6 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stats card */}
          <div
            className="bento-card p-8 scroll-animate"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="flex items-center gap-10">
              <div ref={projectsRef}>
                <div className="font-display text-4xl font-extrabold text-white">{projectCount}+</div>
                <div className="text-xs text-gray-500 mt-1">Projects</div>
              </div>
              <div ref={techRef}>
                <div className="font-display text-4xl font-extrabold text-white">{techCount}+</div>
                <div className="text-xs text-gray-500 mt-1">Technologies</div>
              </div>
              <div ref={certsRef}>
                <div className="font-display text-4xl font-extrabold text-white">{certCount}</div>
                <div className="text-xs text-gray-500 mt-1">Certifications</div>
              </div>
            </div>
          </div>

          {/* Core Focus card */}
          <div
            className="bento-card p-8 scroll-animate md:col-span-2"
            data-delay="1"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">Core Focus</p>
            <p className="text-white font-display font-bold text-lg italic leading-snug">
              Cloud infrastructure, CI/CD automation, and container orchestration
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["AWS", "Terraform", "Kubernetes", "Docker", "GitHub Actions"].map((t) => (
                <span key={t} className="tech-pill text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT
          ============================================ */}
      <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="scroll-animate">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">A Quick Glance</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Building the bridge<br />
              between ideas<br />
              and <span className="italic-accent">infrastructure</span>
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              I&apos;m Teemu Rekiranta, an IT infrastructure student and cloud enthusiast who turns complex cloud challenges into automated, reliable systems. I specialize in building CI/CD pipelines, containerized deployments, and infrastructure as code.
            </p>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              While I&apos;m still studying, I&apos;ve built 23+ hands-on projects spanning data pipelines, real-time APIs, Kubernetes orchestration, and cloud architecture. My code is built to scale, and I&apos;m always learning new ways to improve.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>

            <a
              href="https://github.com/Rekiranta"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-white font-medium hover:text-red-400 transition-colors group"
            >
              Dive in deeper
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Profile photo with glow effect */}
          <div className="scroll-animate flex justify-center" data-delay="2">
            <div className="photo-card-wrapper relative">
              {/* Background card (offset) */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl bg-white/[0.03] border border-white/[0.06]" />
              {/* Main photo */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] rounded-2xl overflow-hidden border-2 border-white/10 hover:border-white/20 transition-all duration-500">
                <Image
                  src="/profile.jpg"
                  alt="Teemu Rekiranta"
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SKILLS
          ============================================ */}
      <section id="skills" className="section-gradient px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center scroll-animate mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">My Skillset</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            The Magic <span className="italic-accent">Behind</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 scroll-animate" data-delay="1">
          {techStack.map((tech, i) => (
            <span
              key={tech.name}
              className="tech-pill scroll-animate"
              data-delay={String(Math.min(Math.floor(i / 4) + 1, 5))}
            >
              <img src={tech.icon} alt={tech.name} className="w-5 h-5 brightness-0 invert opacity-70" />
              {tech.name}
            </span>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 scroll-animate" data-delay="2">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Certifications</p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span key={cert} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-300 hover:bg-red-500/15 hover:border-red-500/30 transition-all cursor-default">
                <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          MARQUEE STRIP
          ============================================ */}
      <section className="py-8 bg-red-500 -rotate-1 scale-105 my-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-50" />
        <div className="marquee-container relative z-10">
          <div className="marquee-track animate-marquee">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="flex items-center">
                <span className="marquee-text">{word}</span>
                <span className="marquee-star">&#9733;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROJECTS
          ============================================ */}
      <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center scroll-animate mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Crafting Modern Solutions</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            PROJECT <span className="italic-accent">SHOWCASE</span>
          </h2>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="project-card block scroll-animate group"
              data-delay={String(i + 1)}
              style={{ "--accent-color": project.color } as React.CSSProperties}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-6 rounded-full transition-all duration-300 group-hover:h-10" style={{ backgroundColor: project.color }} />
                <div className="flex-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-500">{project.category}</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-red-400 transition-colors mt-1">
                    {project.title}
                  </h3>
                </div>
                <svg className="w-5 h-5 text-gray-600 group-hover:text-red-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

              <p className="text-gray-500 leading-relaxed mb-4 pl-5">{project.desc}</p>

              <div className="flex flex-wrap gap-2 pl-5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill text-xs">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 scroll-animate">
          <a
            href="https://github.com/Rekiranta/My-dev-portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors group"
          >
            See more projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ============================================
          FOOTER CTA
          ============================================ */}
      <section id="contact" className="footer-cta footer-fluid px-6 py-32 text-center relative">
        <div className="relative z-10 max-w-3xl mx-auto scroll-animate">
          <span className="font-display font-extrabold text-5xl text-white/[0.07] mb-8 block">TR</span>

          {/* Rotating badge */}
          <div className="absolute top-0 right-0 md:right-10 scroll-animate" data-delay="3">
            <RotatingBadge />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            FROM CODE TO <span className="text-red-400">CLOUD</span>
            <br />
            LET&apos;S BUILD SOMETHING <span className="text-white">REAL!</span>
          </h2>

          <div className="mt-10">
            <a
              href="mailto:Teemu.Rekiranta1@gmail.com"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all group"
            >
              Get in touch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <p className="mt-8 text-gray-400 font-medium">
            Available for internships and entry-level cloud positions.
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            I focus on building automated, scalable infrastructure
            <br />that runs reliably in production.
          </p>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="px-6 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs">
              <span className="font-display font-extrabold text-lg text-white tracking-wider">TEEMU</span>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                I build, learn, and automate infrastructure through quality code. Thanks for visiting my corner of the web!
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-green-400 text-xs">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </div>
            </div>

            <div className="flex gap-16 text-sm">
              <div>
                <p className="text-gray-500 uppercase tracking-wider text-xs font-bold mb-4">General</p>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                  <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                  <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                </div>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-wider text-xs font-bold mb-4">Connect</p>
                <div className="space-y-3">
                  <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="block text-gray-400 hover:text-white transition-colors">GitHub</a>
                  <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="block text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                  <a href="mailto:Teemu.Rekiranta1@gmail.com" className="block text-gray-400 hover:text-white transition-colors">Email</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Teemu Rekiranta. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
