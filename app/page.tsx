import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "Cloud Resume Challenge",
    description:
      "Serverless resume hosted on AWS with IaC, CDN, CI/CD, and a visitor counter API.",
    tags: ["AWS", "Terraform", "CI/CD"],
    link: "https://github.com/Rekiranta/cloud-resume-challenge",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kubernetes Home Lab",
    description:
      "Bare-metal K3s cluster with GitOps style deployments, monitoring and secrets management.",
    tags: ["Kubernetes", "GitOps", "Ansible"],
    link: "https://github.com/Rekiranta/kubernetes-homelab",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Observability Dashboard",
    description:
      "Unified Grafana dashboards for pipelines, uptime, and incident response playbooks.",
    tags: ["Grafana", "Prometheus", "Automation"],
    link: "https://github.com/Rekiranta/observability-dashboard",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Serverless Data Sync",
    description:
      "Event-driven ETL that syncs SaaS data to a warehouse with caching and validation steps.",
    tags: ["Python", "API", "Serverless"],
    link: "https://github.com/Rekiranta/serverless-data-sync",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
];

const blogPosts = [
  {
    title: "What I Learned Building My First K8s Home Lab",
    date: "Dec 2024",
    excerpt:
      "Notes on networking hurdles, GitOps workflows, and keeping observability simple enough to maintain.",
    link: "https://github.com/Rekiranta",
  },
  {
    title: "From Zero to CI/CD: Shipping Faster with Small Steps",
    date: "Oct 2024",
    excerpt:
      "Breaking down CI/CD adoption into weekly goals that work for small teams and solo builders.",
    link: "https://github.com/Rekiranta",
  },
  {
    title: "Automating Resume Deployments with Terraform",
    date: "Aug 2024",
    excerpt:
      "How IaC keeps my resume, DNS, and CDN consistent while experimenting with new features.",
    link: "https://github.com/Rekiranta",
  },
];

const experiences = [
  {
    title: "IT Infrastructure Student",
    subtitle: "Metropolia University of Applied Sciences",
    period: "2024 – Present",
    points: [
      "Hands-on labs in virtualization, networking, and automation.",
      "Coursework on cloud architectures, APIs, and service reliability.",
      "Team projects focused on DevOps culture and tooling.",
    ],
  },
  {
    title: "Cloud & DevOps Projects",
    subtitle: "Independent",
    period: "2023 – Present",
    points: [
      "Building CI/CD pipelines, IaC modules, and containerized services.",
      "Experimenting with monitoring stacks and incident runbooks.",
      "Documenting learnings through blog-style notes and demos.",
    ],
  },
];

const skills = [
  "AWS",
  "Google Cloud",
  "Terraform",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Linux",
  "Ansible",
  "Helm",
  "Prometheus",
  "Grafana",
  "MySQL",
  "PostgreSQL",
  "Python",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Bash",
  "Power BI",
  "CI/CD",
  "Git",
  "Windows Server",
  "Networking",
  "APIs",
];

const socials = [
  { label: "GitHub", href: "https://github.com/Rekiranta" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/teemurekiranta" },
  { label: "Email", href: "mailto:Teemu.Rekiranta1@gmail.com" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_15%_75%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_90%_60%,rgba(59,130,246,0.08),transparent_28%)]" />

      <NavBar />

      <section className="relative mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 lg:px-8">
        <Hero />
      </section>

      <section id="about" className="mx-auto max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg card-shadow">
          <p className="text-sm font-semibold text-blue-600">About</p>
          <h2 className="text-2xl font-bold text-slate-900">A little about me</h2>
          <p className="mt-3 text-sm text-slate-600">
            I am a junior Cloud and DevOps engineer who loves turning theory into hands-on builds. My focus areas
            are cloud platforms, CI/CD, observability, and resilient infrastructure. I am continuously learning and
            documenting the wins (and lessons) along the way.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Projects"
          description="A collection of practical builds showcasing my curiosity for DevOps and cloud."
        />
        <div className="mt-6 flex flex-wrap gap-3 rounded-full border border-slate-200 bg-white/70 px-4 py-3 text-sm font-medium text-slate-600 shadow-sm">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">DevOps & Cloud</span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">Automation</span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">Reliability</span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">Observability</span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">Infrastructure</span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="blogs" className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white/70 p-8 shadow-lg card-shadow">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-600">Blogs</p>
              <SectionTitle>My Recent Blogs</SectionTitle>
              <p className="text-sm text-slate-600">
                Insights, tutorials, and retrospectives on DevOps, cloud technologies, and software craftsmanship.
              </p>
            </div>
            <a
              href="https://github.com/Rekiranta"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Browse all
            </a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 font-semibold text-blue-600">
                    Blog
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900">{post.title}</h3>
                <p className="text-sm text-slate-600">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3"
                >
                  Read more
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-[28px] border border-slate-200 bg-white/70 p-8 shadow-lg card-shadow">
          <p className="text-sm font-semibold text-blue-600">Experience</p>
          <SectionTitle>Professional Experience & Projects</SectionTitle>
          <p className="text-sm text-slate-600">
            A blend of academic work and personal projects showcasing my drive to build reliable systems.
          </p>

          <div className="mt-8 grid w-full gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start">
            <div className="space-y-6">
              <ExperienceCard {...experiences[0]} />
            </div>
            <div className="mx-auto hidden h-full md:block">
              <div className="dashed-line h-full rounded-full bg-slate-200" />
            </div>
            <div className="space-y-6">
              <ExperienceCard {...experiences[1]} align="right" />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white/70 p-8 shadow-lg card-shadow">
          <p className="text-sm font-semibold text-blue-600">Skills</p>
          <SectionTitle>Technical Skills</SectionTitle>
          <p className="text-sm text-slate-600">
            A curated selection of my expertise in DevOps and cloud computing.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600">
            <span>Last updated Jan 2025</span>
            <a
              href="mailto:Teemu.Rekiranta1@gmail.com"
              className="inline-flex items-center gap-2 text-blue-700 underline decoration-2 underline-offset-4"
            >
              Open to feedback and collaboration
            </a>
          </div>
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-[28px] border border-slate-200 bg-white/80 p-8 text-center shadow-lg card-shadow">
          <p className="text-sm font-semibold text-blue-600">Résumé</p>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">My Resume</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            View my education, qualifications, and recent experience as a Cloud & DevOps engineer.
          </p>
          <div className="mt-6 w-full rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 text-left shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
              <div className="font-semibold text-slate-800">Teemu Rekiranta</div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 font-semibold text-blue-600">
                  Verified
                </span>
                <span>Last updated Jan 2025</span>
              </div>
            </div>
            <div className="mt-4 grid gap-3 text-xs text-slate-600 sm:grid-cols-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Experience</div>
                <p className="font-medium text-slate-800">1 – 2 years</p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Technical Skills</div>
                <p className="font-medium text-slate-800">20+</p>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Location</div>
                <p className="font-medium text-slate-800">Helsinki, Finland</p>
              </div>
            </div>
            <div className="mt-5 h-[260px] rounded-xl border border-dashed border-slate-200 bg-white/60 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">Preview</p>
              <p className="mt-2 text-sm">
                Detailed snapshot of my recent work, tools I use, and education milestones. Download for the full view.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <a
              href="/Teemu-Rekiranta-Resume.pdf"
              className="button-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-white shadow-lg transition hover:brightness-105"
            >
              Download CV
            </a>
            <a
              href="mailto:Teemu.Rekiranta1@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-blue-700 shadow-sm transition hover:-translate-y-0.5"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white shadow-md">
            T
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">Teemu Rekiranta</p>
            <p className="text-xs text-slate-500">Cloud & DevOps Engineer</p>
          </div>
        </div>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 sm:flex">
          <a href="#about" className="transition hover:text-blue-600">
            About
          </a>
          <a href="#skills" className="transition hover:text-blue-600">
            Skills
          </a>
          <a href="#experience" className="transition hover:text-blue-600">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-blue-600">
            Projects
          </a>
          <a href="#blogs" className="transition hover:text-blue-600">
            Blogs
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Rekiranta"
            className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-blue-600"
            aria-label="Toggle theme"
          >
            ☀️
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 px-6 py-12 text-center shadow-2xl card-shadow sm:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.1),transparent_38%)]" />
      <div className="absolute left-8 top-8 hidden h-12 w-12 rounded-2xl border border-blue-100 bg-blue-50/70 md:block" />
      <div className="absolute -right-6 bottom-8 hidden h-24 w-24 rotate-12 rounded-3xl border border-blue-100 bg-sky-50/70 md:block" />

      <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
        Cloud & DevOps Engineer
      </p>
      <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Teemu <span className="text-blue-600">Rekiranta</span>
      </h1>
      <p className="mt-4 text-lg text-slate-600 sm:text-xl">
        Building scalable, observable infrastructure aligned with business needs.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
        <span>📍 Helsinki, Finland</span>
        <span>•</span>
        <span>Open to work</span>
        <span>•</span>
        <span>Available for remote roles</span>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
        <a
          className="button-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-white shadow-lg transition hover:brightness-105"
          href="mailto:Teemu.Rekiranta1@gmail.com"
        >
          Let&apos;s Connect
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-blue-700 shadow-sm transition hover:-translate-y-0.5"
          href="#projects"
        >
          View Projects
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-blue-700 shadow-sm transition hover:-translate-y-0.5"
          href="#resume"
        >
          My Resume
        </a>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-medium text-slate-600">
        {socials.map((social) => (
          <a
            key={social.label}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm transition hover:-translate-y-0.5 hover:text-blue-600"
            href={social.href}
          >
            {social.label}
          </a>
        ))}
      </div>
      <div className="mt-12 flex items-center justify-center gap-2 text-sm font-semibold text-blue-600">
        <span className="rounded-full bg-blue-50 px-4 py-2">Scroll to explore</span>
        <span aria-hidden className="animate-bounce text-lg">
          ↓
        </span>
      </div>
    </div>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 text-center sm:text-left">
      <p className="text-sm font-semibold text-blue-600">Projects</p>
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-bold text-slate-900">{children}</h2>;
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          priority={false}
        />
      </div>
      <div className="flex flex-col gap-3 px-5 py-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            DevOps
          </span>
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-600">
            Cloud Computing
          </span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="text-sm text-slate-600">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-xs font-semibold text-blue-600">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-blue-50 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3"
        >
          View project <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

function ExperienceCard({
  title,
  subtitle,
  period,
  points,
  align = "left",
}: {
  title: string;
  subtitle: string;
  period: string;
  points: string[];
  align?: "left" | "right";
}) {
  const alignment = align === "right" ? "items-end text-right" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-md ${alignment}`}>
      <div className="flex w-full items-center justify-between text-xs font-semibold text-blue-600">
        <span>{period}</span>
        <span>Present</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{subtitle}</p>
      <ul className="mt-2 space-y-2 text-sm text-slate-700">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
