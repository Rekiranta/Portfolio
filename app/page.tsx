"use client";

import React, { useState, useEffect, useRef } from "react";

// ============================================================================
// DATA
// ============================================================================

type Category = "all" | "devops" | "data" | "api" | "realtime" | "iac" | "iot";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: Category;
  url: string;
};

const projects: Project[] = [
  // DevOps & CI/CD
  {
    title: "BuildWatch CI Monitor",
    description: "Dashboard showing CI pipeline status with real-time updates and quick feedback for developers.",
    tech: ["Node.js", "GitHub Actions", "WebSocket"],
    category: "devops",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/buildwatch-ci-monitor",
  },
  {
    title: "DevOps CI Demo",
    description: "Continuous integration setup connecting GitHub changes with automated tests and builds.",
    tech: ["Flask", "Pytest", "GitHub Actions"],
    category: "devops",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-ci-demo",
  },
  {
    title: "DevOps Status Board",
    description: "Real-time DevOps status dashboard with live service health monitoring.",
    tech: ["React", "Flask", "WebSocket"],
    category: "devops",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-statusboard",
  },
  {
    title: "Local Release Pipeline",
    description: "Simulated release pipeline for testing deployment workflows locally.",
    tech: ["Python", "Docker", "CI/CD"],
    category: "devops",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-local-release-pipeline",
  },
  {
    title: "Terraform K8s Blueprints",
    description: "Kubernetes infrastructure blueprints with Terraform and CI integration.",
    tech: ["Terraform", "Kubernetes", "GitHub Actions"],
    category: "devops",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/terraform-k8s-blueprints-ci",
  },
  // Data Pipelines
  {
    title: "Data Pipeline ELT with dbt",
    description: "End-to-end ELT pipeline that models, transforms and tests datasets using dbt.",
    tech: ["dbt", "PostgreSQL", "Python"],
    category: "data",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/data-pipeline-elt-dbt",
  },
  {
    title: "Streaming Redpanda Postgres",
    description: "Kafka streaming with idempotent Postgres sink for reliable data processing.",
    tech: ["Redpanda", "PostgreSQL", "Python"],
    category: "data",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/streaming-redpanda-postgres",
  },
  {
    title: "Local Serverless ETL",
    description: "Serverless-style ETL with event-based steps and modular task execution.",
    tech: ["LocalStack", "Lambda", "S3"],
    category: "data",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/local-serverless-etl",
  },
  {
    title: "Batch ETL Validate Postgres",
    description: "Batch ETL pipeline with data validation and quality checks before loading.",
    tech: ["Python", "PostgreSQL", "Pytest"],
    category: "data",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/batch-etl-validate-postgres",
  },
  {
    title: "Local Streaming Pipeline",
    description: "Local streaming data pipeline for real-time data processing experiments.",
    tech: ["Python", "Docker", "Streaming"],
    category: "data",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/local-streaming-pipeline",
  },
  // API & Web Services
  {
    title: "FastAPI Redis Cache API",
    description: "High-performance REST API with Redis caching and dependency injection.",
    tech: ["FastAPI", "Redis", "Pytest"],
    category: "api",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/fastapi-redis-cache-api",
  },
  {
    title: "Data Quality API",
    description: "API for data validation with comprehensive quality checks and reporting.",
    tech: ["FastAPI", "Pydantic", "Python"],
    category: "api",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/data-quality-api",
  },
  {
    title: "Task Manager Web",
    description: "Web-based task management application with clean UI and REST backend.",
    tech: ["Flask", "JavaScript", "SQLite"],
    category: "api",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/task-manager-web",
  },
  {
    title: "Project Planner Flask",
    description: "Project planning tool with task tracking and progress visualization.",
    tech: ["Flask", "SQLite", "JavaScript"],
    category: "api",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/project-planer-flask",
  },
  {
    title: "Expense Tracker Charts",
    description: "Expense tracking with interactive charts and spending analytics.",
    tech: ["Flask", "Chart.js", "Python"],
    category: "api",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/expense-tracker-charts",
  },
  // Real-time & Monitoring
  {
    title: "Node WebSocket Realtime Board",
    description: "Real-time collaboration board with WebSocket communication.",
    tech: ["Node.js", "WebSocket", "JavaScript"],
    category: "realtime",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/node-ws-realtime-board",
  },
  {
    title: "Node SSE Task Feed",
    description: "Server-sent events task feed for real-time updates without polling.",
    tech: ["Node.js", "SSE", "Express"],
    category: "realtime",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/node-sse-task-feed",
  },
  {
    title: "Event Stream Monitor",
    description: "Event stream monitoring dashboard for tracking system events.",
    tech: ["Python", "Flask", "Streaming"],
    category: "realtime",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/eventstream-monitor",
  },
  {
    title: "Service Health Dashboard",
    description: "Service health monitoring with status checks and alerting.",
    tech: ["Python", "Flask", "REST"],
    category: "realtime",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/service-health-dashboard",
  },
  // Infrastructure as Code
  {
    title: "LocalStack SQS DynamoDB IaC",
    description: "AWS infrastructure locally with LocalStack, SQS, and DynamoDB using Terraform.",
    tech: ["LocalStack", "Terraform", "DynamoDB"],
    category: "iac",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/localstack-sqs-dynamodb-iac",
  },
  // IoT & Simulation
  {
    title: "SensorLab Device Sim Tests",
    description: "IoT sensor device simulation with testing framework.",
    tech: ["Python", "IoT", "Pytest"],
    category: "iot",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/sensorlab-device-sim-tests",
  },
  {
    title: "ChargeLab EV Sessions",
    description: "EV charging session simulator for testing charging infrastructure.",
    tech: ["Node.js", "REST", "Simulation"],
    category: "iot",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/node-chargelab-ev-sessions",
  },
  {
    title: "FleetPilot Vehicle Telemetry",
    description: "Vehicle fleet telemetry system for tracking and analytics.",
    tech: ["Python", "Telemetry", "REST"],
    category: "iot",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/fleetpilot-vehicle-telemetry",
  },
];

const categories: { key: Category; label: string; color: string }[] = [
  { key: "all", label: "All Projects", color: "bg-slate-600" },
  { key: "devops", label: "DevOps & CI/CD", color: "bg-green-500" },
  { key: "data", label: "Data Pipelines", color: "bg-cyan-500" },
  { key: "api", label: "API & Web", color: "bg-violet-500" },
  { key: "realtime", label: "Real-time", color: "bg-amber-500" },
  { key: "iac", label: "Infrastructure", color: "bg-pink-500" },
  { key: "iot", label: "IoT & Sim", color: "bg-orange-500" },
];

const certifications = [
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", icon: "aws" },
  { name: "AWS Academy Cloud Architecting", issuer: "Amazon Web Services", icon: "aws" },
  { name: "Google Cloud Computing Foundations", issuer: "Google Cloud", icon: "gcp" },
  { name: "SAS Data Literacy Essentials", issuer: "SAS Institute", icon: "data" },
  { name: "Fundamentals of Digital Marketing", issuer: "Google", icon: "google" },
];

const skills = {
  cloud: ["AWS", "Google Cloud", "LocalStack"],
  devops: ["GitHub Actions", "Terraform", "CI/CD", "Git"],
  containers: ["Docker", "Kubernetes", "Linux", "Windows Server"],
  databases: ["PostgreSQL", "MySQL", "Redis", "DynamoDB"],
  languages: ["Python", "TypeScript", "JavaScript", "Bash", "SQL"],
  frameworks: ["FastAPI", "Flask", "Node.js", "React", "Next.js"],
};

// ============================================================================
// COMPONENTS
// ============================================================================

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-slate-50">
      {/* Navigation */}
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden border-b border-slate-800/50">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Teemu Rekiranta</span>
              </h1>

              <p className="mt-4 text-xl font-medium text-cyan-400">
                Junior Cloud & DevOps Engineer
              </p>

              <p className="mt-4 max-w-lg text-lg text-slate-400">
                Building cloud-ready solutions and automating infrastructure.
                Passionate about AWS, Google Cloud, CI/CD, and modern DevOps practices.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 px-6 py-3 font-semibold text-slate-900 transition hover:opacity-90">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in touch
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:border-green-500/50 hover:text-green-400">
                  View projects
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Helsinki, Finland
                </span>
                <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-400 transition">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  @Rekiranta
                </a>
              </div>
            </div>

            {/* Terminal Window */}
            <div className="animate-fade-in animate-delay-2">
              <TerminalWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-slate-800/50 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCard number="23+" label="Projects Built" delay={0} />
            <StatCard number="5" label="Certifications" delay={100} />
            <StatCard number="8+" label="Years Experience" delay={200} />
            <StatCard number="15+" label="Technologies" delay={300} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`border-b border-slate-800/50 transition-opacity duration-700 ${visibleSections.has("about") ? "opacity-100" : "opacity-0"}`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader title="About Me" subtitle="My journey into cloud and DevOps" />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-slate-400">
              <p>
                I&apos;m a <span className="text-green-400 font-medium">Junior Cloud and DevOps Engineer</span> and
                IT Infrastructure student based in Helsinki, Finland. I&apos;m transitioning into IT after
                more than eight years in demanding environments where I developed strong skills in
                process optimization, quality control, and teamwork.
              </p>
              <p>
                My focus is on <span className="text-cyan-400 font-medium">cloud platforms</span>,
                <span className="text-cyan-400 font-medium"> DevOps practices</span>, and
                <span className="text-cyan-400 font-medium"> virtualized infrastructure</span>.
                I believe in learning by building real projects and turning theoretical concepts into practical solutions.
              </p>
              <p className="text-lg font-medium text-green-400 italic">
                &quot;Learning fast, building faster.&quot;
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Currently</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-green-400">&#x2192;</span>
                    Studying cloud services, virtualization & ICT infrastructure
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-400">&#x2192;</span>
                    Exploring AWS, Google Cloud & cloud-native patterns
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-violet-400">&#x2192;</span>
                    Practicing DevOps, CI/CD, containers & automation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-amber-400">&#x2192;</span>
                    Building infrastructure, APIs & data pipelines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`border-b border-slate-800/50 bg-slate-900/20 transition-opacity duration-700 ${visibleSections.has("skills") ? "opacity-100" : "opacity-0"}`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader title="Tech Stack" subtitle="Technologies I work with" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCategory title="Cloud Platforms" skills={skills.cloud} color="green" />
            <SkillCategory title="DevOps & CI/CD" skills={skills.devops} color="cyan" />
            <SkillCategory title="Containers & OS" skills={skills.containers} color="violet" />
            <SkillCategory title="Databases" skills={skills.databases} color="amber" />
            <SkillCategory title="Languages" skills={skills.languages} color="pink" />
            <SkillCategory title="Frameworks" skills={skills.frameworks} color="orange" />
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="border-b border-slate-800/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader title="GitHub Activity" subtitle="My open source contributions" />

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Rekiranta&show_icons=true&theme=transparent&hide_border=true&title_color=4ade80&icon_color=22d3ee&text_color=94a3b8&bg_color=0a0f1a"
              alt="GitHub Stats"
              className="rounded-xl border border-slate-800"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Rekiranta&theme=transparent&hide_border=true&stroke=334155&ring=4ade80&fire=22d3ee&currStreakLabel=4ade80&sideLabels=94a3b8&currStreakNum=f1f5f9&sideNums=f1f5f9&dates=64748b&background=0a0f1a"
              alt="GitHub Streak"
              className="rounded-xl border border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`border-b border-slate-800/50 bg-slate-900/20 transition-opacity duration-700 ${visibleSections.has("certifications") ? "opacity-100" : "opacity-0"}`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader title="Certifications" subtitle="Professional credentials and training" />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`border-b border-slate-800/50 transition-opacity duration-700 ${visibleSections.has("projects") ? "opacity-100" : "opacity-0"}`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader title="Projects" subtitle={`${projects.length} hands-on projects showcasing my skills`} />

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === cat.key
                    ? "filter-active"
                    : "border border-slate-700 text-slate-400 hover:border-green-500/50 hover:text-green-400"
                }`}
              >
                {cat.label}
                {cat.key !== "all" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({projects.filter(p => p.category === cat.key).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* View All on GitHub */}
          <div className="mt-10 text-center">
            <a
              href="https://github.com/Rekiranta/My-dev-portfolio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-400 transition hover:border-green-500/50 hover:text-green-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View all projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`transition-opacity duration-700 ${visibleSections.has("contact") ? "opacity-100" : "opacity-0"}`}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeader title="Let's Connect" subtitle="Open to opportunities and collaborations" />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-slate-400">
              <p className="text-lg">
                I&apos;m currently looking for junior cloud and DevOps roles, internships,
                or collaborative learning projects. If you think my profile and projects
                look interesting, I&apos;d love to hear from you!
              </p>
              <p>
                Whether you have a question, want to discuss a project, or just want to
                connect, feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                href="mailto:Teemu.Rekiranta1@gmail.com"
                icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                title="Email"
                value="Teemu.Rekiranta1@gmail.com"
              />
              <ContactCard
                href="https://www.linkedin.com/in/teemurekiranta"
                icon={<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                title="LinkedIn"
                value="teemurekiranta"
              />
              <ContactCard
                href="https://github.com/Rekiranta"
                icon={<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>}
                title="GitHub"
                value="Rekiranta"
              />
              <ContactCard
                href="#"
                icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Location"
                value="Helsinki, Finland"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 text-sm font-bold text-slate-900">
                TR
              </div>
              <span className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Teemu Rekiranta
              </span>
            </div>
            <p className="text-sm font-medium text-green-400/80">
              Learning fast, building faster.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed right-0 top-0 z-50 h-full w-72 bg-slate-900 p-6 shadow-2xl lg:hidden ${mobileMenuOpen ? "mobile-menu-open" : "translate-x-full"}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="mt-12 space-y-4">
          {["About", "Skills", "Certifications", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-lg font-medium text-slate-300 transition hover:bg-slate-800 hover:text-green-400"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function Header({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/50 bg-[#0a0f1a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 text-sm font-bold text-slate-900">
            TR
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold text-slate-100">Teemu Rekiranta</p>
            <p className="text-xs text-slate-500">Cloud & DevOps Engineer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {["About", "Skills", "Certifications", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 transition hover:text-green-400"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-200 lg:hidden"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function TerminalWindow() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-3 font-mono text-xs text-slate-500">teemu@portfolio ~ </span>
      </div>
      <div className="p-5 font-mono text-sm">
        <div className="text-slate-500">$ whoami</div>
        <div className="mt-1 text-green-400">teemu-rekiranta</div>

        <div className="mt-4 text-slate-500">$ cat focus.txt</div>
        <div className="mt-1 space-y-1 text-slate-300">
          <div><span className="text-cyan-400">&#x2192;</span> Cloud platforms (AWS, GCP)</div>
          <div><span className="text-cyan-400">&#x2192;</span> DevOps & CI/CD pipelines</div>
          <div><span className="text-cyan-400">&#x2192;</span> Infrastructure as Code</div>
          <div><span className="text-cyan-400">&#x2192;</span> Containerization & K8s</div>
          <div><span className="text-cyan-400">&#x2192;</span> Backend & data pipelines</div>
        </div>

        <div className="mt-4 text-slate-500">$ echo $MOTTO</div>
        <div className="mt-1 text-amber-400">&quot;Learning fast, building faster.&quot;</div>

        <div className="mt-4 flex items-center text-slate-500">
          $ <span className="ml-1 h-4 w-2 bg-green-400 cursor-blink" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label, delay }: { number: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={ref} className="text-center">
      <div className={`stat-number text-3xl font-bold text-green-400 sm:text-4xl ${visible ? "" : "opacity-0"}`}>
        {number}
      </div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">{title}</h2>
      <p className="mt-2 text-slate-500">{subtitle}</p>
    </div>
  );
}

function SkillCategory({ title, skills, color }: { title: string; skills: string[]; color: string }) {
  const colorClasses: Record<string, string> = {
    green: "border-green-500/30 bg-green-500/5",
    cyan: "border-cyan-500/30 bg-cyan-500/5",
    violet: "border-violet-500/30 bg-violet-500/5",
    amber: "border-amber-500/30 bg-amber-500/5",
    pink: "border-pink-500/30 bg-pink-500/5",
    orange: "border-orange-500/30 bg-orange-500/5",
  };

  const tagColors: Record<string, string> = {
    green: "border-green-500/30 text-green-400 hover:bg-green-500/20",
    cyan: "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20",
    violet: "border-violet-500/30 text-violet-400 hover:bg-violet-500/20",
    amber: "border-amber-500/30 text-amber-400 hover:bg-amber-500/20",
    pink: "border-pink-500/30 text-pink-400 hover:bg-pink-500/20",
    orange: "border-orange-500/30 text-orange-400 hover:bg-orange-500/20",
  };

  return (
    <div className={`rounded-xl border p-5 ${colorClasses[color]}`}>
      <h3 className="font-semibold text-slate-200">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className={`rounded-full border px-3 py-1 text-sm font-medium transition ${tagColors[color]}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function CertificationCard({ cert }: { cert: { name: string; issuer: string; icon: string } }) {
  const iconColors: Record<string, string> = {
    aws: "text-amber-500",
    gcp: "text-blue-500",
    google: "text-green-500",
    data: "text-cyan-500",
  };

  return (
    <div className="cert-card card-hover rounded-xl p-5">
      <div className={`text-2xl ${iconColors[cert.icon] || "text-slate-400"}`}>
        {cert.icon === "aws" && ""}
        {cert.icon === "gcp" && ""}
        {cert.icon === "google" && ""}
        {cert.icon === "data" && ""}
      </div>
      <h3 className="mt-3 font-semibold text-slate-200">{cert.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const categoryColors: Record<Category, string> = {
    all: "border-l-slate-500",
    devops: "border-l-green-500",
    data: "border-l-cyan-500",
    api: "border-l-violet-500",
    realtime: "border-l-amber-500",
    iac: "border-l-pink-500",
    iot: "border-l-orange-500",
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={`card-hover group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-5 border-l-4 ${categoryColors[project.category]}`}
    >
      <h3 className="font-semibold text-slate-200 group-hover:text-green-400 transition">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-400">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

function ContactCard({ href, icon, title, value }: { href: string; icon: React.ReactNode; title: string; value: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="card-hover flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5"
    >
      <div className="rounded-lg bg-green-500/10 p-3 text-green-400">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p className="mt-1 font-medium text-slate-200">{value}</p>
      </div>
    </a>
  );
}
