"use client";

import React, { useState, useEffect } from "react";

// ============================================================================
// DATA
// ============================================================================

type Category = "all" | "devops" | "data" | "api" | "realtime" | "iac" | "iot";

const projects = [
  { title: "BuildWatch CI Monitor", description: "Real-time CI pipeline dashboard with WebSocket updates for instant build feedback.", tech: ["Node.js", "GitHub Actions", "WebSocket"], category: "devops" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/buildwatch-ci-monitor" },
  { title: "DevOps CI Demo", description: "Automated CI setup with GitHub Actions, tests, and deployment workflows.", tech: ["Flask", "Pytest", "GitHub Actions"], category: "devops" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-ci-demo" },
  { title: "DevOps Status Board", description: "Live service health monitoring with React frontend and Flask API.", tech: ["React", "Flask", "WebSocket"], category: "devops" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-statusboard" },
  { title: "Local Release Pipeline", description: "Simulated release pipeline for testing deployment workflows locally.", tech: ["Python", "Docker", "CI/CD"], category: "devops" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-local-release-pipeline" },
  { title: "Terraform K8s Blueprints", description: "Kubernetes infrastructure blueprints with Terraform and CI integration.", tech: ["Terraform", "Kubernetes", "GitHub Actions"], category: "devops" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/terraform-k8s-blueprints-ci" },
  { title: "Data Pipeline ELT + dbt", description: "End-to-end ELT pipeline with data modeling and transformations using dbt.", tech: ["dbt", "PostgreSQL", "Python"], category: "data" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/data-pipeline-elt-dbt" },
  { title: "Streaming Redpanda Postgres", description: "Kafka streaming with idempotent Postgres sink for reliable data processing.", tech: ["Redpanda", "PostgreSQL", "Python"], category: "data" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/streaming-redpanda-postgres" },
  { title: "Local Serverless ETL", description: "Serverless-style ETL with event-based steps and modular execution.", tech: ["LocalStack", "Lambda", "S3"], category: "data" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/local-serverless-etl" },
  { title: "Batch ETL Validate Postgres", description: "Batch ETL pipeline with Pandera validation and quality checks.", tech: ["Python", "PostgreSQL", "Pandera"], category: "data" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/batch-etl-validate-postgres" },
  { title: "Local Streaming Pipeline", description: "Local streaming data pipeline for real-time processing experiments.", tech: ["Python", "Docker", "Streaming"], category: "data" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/local-streaming-pipeline" },
  { title: "FastAPI Redis Cache API", description: "High-performance REST API with Redis caching and dependency injection.", tech: ["FastAPI", "Redis", "Pytest"], category: "api" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/fastapi-redis-cache-api" },
  { title: "Data Quality API", description: "API for data validation with comprehensive quality checks and reporting.", tech: ["FastAPI", "Pydantic", "Python"], category: "api" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/data-quality-api" },
  { title: "Task Manager Web", description: "Web-based task management application with clean UI and REST backend.", tech: ["Flask", "JavaScript", "SQLite"], category: "api" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/task-manager-web" },
  { title: "Project Planner Flask", description: "Project planning tool with task tracking and progress visualization.", tech: ["Flask", "SQLite", "JavaScript"], category: "api" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/project-planer-flask" },
  { title: "Expense Tracker Charts", description: "Expense tracking with interactive Chart.js visualizations.", tech: ["Flask", "Chart.js", "Python"], category: "api" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/expense-tracker-charts" },
  { title: "WebSocket Realtime Board", description: "Real-time collaboration board with WebSocket communication.", tech: ["Node.js", "WebSocket", "JavaScript"], category: "realtime" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/node-ws-realtime-board" },
  { title: "SSE Task Feed", description: "Server-sent events task feed for real-time updates without polling.", tech: ["Node.js", "SSE", "Express"], category: "realtime" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/node-sse-task-feed" },
  { title: "Event Stream Monitor", description: "Event stream monitoring dashboard for tracking system events.", tech: ["Python", "Flask", "Streaming"], category: "realtime" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/eventstream-monitor" },
  { title: "Service Health Dashboard", description: "Service health monitoring with status checks and alerting.", tech: ["Python", "Flask", "REST"], category: "realtime" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/service-health-dashboard" },
  { title: "LocalStack SQS DynamoDB", description: "AWS infrastructure locally with LocalStack using Terraform.", tech: ["LocalStack", "Terraform", "DynamoDB"], category: "iac" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/localstack-sqs-dynamodb-iac" },
  { title: "SensorLab Device Sim", description: "IoT sensor device simulation with Robot Framework tests.", tech: ["Python", "IoT", "Robot Framework"], category: "iot" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/sensorlab-device-sim-tests" },
  { title: "ChargeLab EV Sessions", description: "EV charging session simulator for testing charging infrastructure.", tech: ["Node.js", "REST", "WebSocket"], category: "iot" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/node-chargelab-ev-sessions" },
  { title: "FleetPilot Telemetry", description: "Vehicle fleet telemetry system for tracking and analytics.", tech: ["Python", "Telemetry", "REST"], category: "iot" as Category, url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/fleetpilot-vehicle-telemetry" },
];

const categories = [
  { key: "all" as Category, label: "All" },
  { key: "devops" as Category, label: "DevOps" },
  { key: "data" as Category, label: "Data" },
  { key: "api" as Category, label: "APIs" },
  { key: "realtime" as Category, label: "Realtime" },
  { key: "iac" as Category, label: "IaC" },
  { key: "iot" as Category, label: "IoT" },
];

const skills = {
  cloud: ["AWS", "Google Cloud", "LocalStack"],
  devops: ["GitHub Actions", "Terraform", "Git", "CI/CD"],
  containers: ["Docker", "Kubernetes", "Linux"],
  databases: ["PostgreSQL", "Redis", "DynamoDB"],
  languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  frameworks: ["FastAPI", "Flask", "React", "Next.js"],
};

const certifications = [
  "AWS Cloud Foundations",
  "AWS Cloud Architecting",
  "Google Cloud Computing",
  "SAS Data Literacy",
  "Google Digital Marketing",
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e17]">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />

      {/* Floating Orbs */}
      <div className="orb orb-blue w-96 h-96 -top-48 -right-48 animate-pulse-soft" />
      <div className="orb orb-cyan w-64 h-64 top-1/2 -left-32 animate-pulse-soft" style={{ animationDelay: '2s' }} />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0e17]/90 backdrop-blur-lg border-b border-white/5" : ""
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="font-display text-xl font-bold text-white">
              TR<span className="text-[#3b82f6]">.</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="link-hover text-sm font-medium">
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="link-hover text-sm font-mono">
                GitHub
              </a>
              <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="link-hover text-sm font-mono">
                LinkedIn
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-[#94a3b8] hover:text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* ============================================
            HERO SECTION
            ============================================ */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="max-w-6xl mx-auto px-6 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="animate-fade-in-up">
                  <div className="status-badge mb-8">
                    <span className="status-dot" />
                    <span className="font-medium">Open to opportunities</span>
                  </div>
                </div>

                <h1 className="animate-fade-in-up delay-100">
                  <span className="block font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Teemu
                  </span>
                  <span className="block font-display text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
                    Rekiranta
                  </span>
                </h1>

                <p className="animate-fade-in-up delay-200 mt-6 text-xl text-[#94a3b8] font-display font-medium">
                  Junior Cloud & DevOps Engineer
                </p>

                <p className="animate-fade-in-up delay-300 mt-4 text-[#64748b] text-lg max-w-md leading-relaxed">
                  Building cloud-native solutions, automating infrastructure, and creating reliable data pipelines. Based in Helsinki, Finland.
                </p>

                <div className="animate-fade-in-up delay-400 mt-8 flex flex-wrap gap-4">
                  <a href="#contact" className="btn-primary">
                    Get in touch
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#projects" className="btn-secondary">
                    View projects
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="animate-fade-in-up delay-500 mt-12 flex gap-8">
                  <div>
                    <div className="font-display text-3xl font-bold text-white">23+</div>
                    <div className="text-sm text-[#64748b]">Projects</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-white">5</div>
                    <div className="text-sm text-[#64748b]">Certifications</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-white">15+</div>
                    <div className="text-sm text-[#64748b]">Technologies</div>
                  </div>
                </div>
              </div>

              {/* Terminal */}
              <div className="animate-slide-in-right delay-300 hidden lg:block">
                <div className="terminal animate-float">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-[#ff5f57]" />
                    <div className="terminal-dot bg-[#febc2e]" />
                    <div className="terminal-dot bg-[#28c840]" />
                    <span className="ml-4 text-xs text-[#64748b]">teemu@cloud ~</span>
                  </div>
                  <div className="terminal-body text-[#94a3b8]">
                    <div className="mb-3">
                      <span className="text-[#3b82f6]">$</span> whoami
                    </div>
                    <div className="text-white mb-4">teemu-rekiranta</div>

                    <div className="mb-3">
                      <span className="text-[#3b82f6]">$</span> cat skills.json
                    </div>
                    <div className="text-[#64748b]">
                      {"{"}<br/>
                      &nbsp;&nbsp;<span className="text-[#22d3ee]">&quot;cloud&quot;</span>: [<span className="text-[#4ade80]">&quot;AWS&quot;</span>, <span className="text-[#4ade80]">&quot;GCP&quot;</span>],<br/>
                      &nbsp;&nbsp;<span className="text-[#22d3ee]">&quot;devops&quot;</span>: [<span className="text-[#4ade80]">&quot;CI/CD&quot;</span>, <span className="text-[#4ade80]">&quot;Terraform&quot;</span>],<br/>
                      &nbsp;&nbsp;<span className="text-[#22d3ee]">&quot;containers&quot;</span>: [<span className="text-[#4ade80]">&quot;Docker&quot;</span>, <span className="text-[#4ade80]">&quot;K8s&quot;</span>]<br/>
                      {"}"}
                    </div>

                    <div className="mt-4 mb-3">
                      <span className="text-[#3b82f6]">$</span> echo $MOTTO
                    </div>
                    <div className="text-[#fbbf24] mb-4">&quot;Learning fast, building faster.&quot;</div>

                    <div>
                      <span className="text-[#3b82f6]">$</span> <span className="animate-blink">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
            <div className="flex flex-col items-center gap-2 text-[#64748b]">
              <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-[#3b82f6] to-transparent" />
            </div>
          </div>
        </section>

        {/* ============================================
            ABOUT SECTION
            ============================================ */}
        <section id="about" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-label">About</span>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white">
                  From Process<br/>to Pipeline
                </h2>
              </div>

              <div className="space-y-6 text-[#94a3b8] text-lg leading-relaxed">
                <p>
                  I&apos;m a <span className="text-white font-medium">Junior Cloud and DevOps Engineer</span> and
                  IT Infrastructure student based in Helsinki, Finland. After eight years in demanding environments
                  where I developed strong process optimization and quality control skills, I&apos;m now channeling
                  that experience into building cloud-native solutions.
                </p>
                <p>
                  My focus areas include <span className="text-[#60a5fa]">AWS</span>, <span className="text-[#60a5fa]">Google Cloud</span>,
                  <span className="text-[#60a5fa]"> CI/CD pipelines</span>, and <span className="text-[#60a5fa]">Infrastructure as Code</span>.
                  I believe in learning by building - every project in my portfolio represents hands-on exploration
                  of real-world patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SKILLS SECTION
            ============================================ */}
        <section id="skills" className="py-24 bg-[#0d1320]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="section-label justify-center">Expertise</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white">
                Tech Stack
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-card">
                  <h3 className="font-display font-semibold text-white mb-4 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-16 text-center">
              <h3 className="font-display text-xl font-semibold text-white mb-6">Certifications</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {certifications.map((cert) => (
                  <span key={cert} className="skill-tag">{cert}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            PROJECTS SECTION
            ============================================ */}
        <section id="projects" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span className="section-label">Portfolio</span>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white">
                  Featured Projects
                </h2>
                <p className="mt-4 text-[#64748b] max-w-md">
                  {projects.length} hands-on projects showcasing DevOps, data engineering, and cloud infrastructure skills.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`filter-btn ${activeCategory === cat.key ? "active" : ""}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card group"
                >
                  <div className={`badge badge-${project.category} mb-4`}>
                    {project.category}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#60a5fa] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[#64748b] text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-[#64748b] bg-[#1a2234] px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/Rekiranta/My-dev-portfolio"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View all on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ============================================
            CONTACT SECTION
            ============================================ */}
        <section id="contact" className="py-24 bg-[#0d1320]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="section-label">Contact</span>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white">
                  Let&apos;s Build<br/>
                  <span className="gradient-text">Something Great</span>
                </h2>
                <p className="mt-6 text-[#94a3b8] text-lg leading-relaxed max-w-md">
                  I&apos;m currently looking for junior cloud and DevOps roles, internships,
                  or collaborative projects. If my work looks interesting, let&apos;s connect!
                </p>
                <p className="mt-6 font-display text-[#fbbf24] text-xl italic">
                  &quot;Learning fast, building faster.&quot;
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:Teemu.Rekiranta1@gmail.com" className="contact-card group">
                  <div className="contact-icon">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#64748b] uppercase">Email</div>
                    <div className="text-white font-medium group-hover:text-[#60a5fa] transition-colors">
                      Teemu.Rekiranta1@gmail.com
                    </div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="contact-card group">
                  <div className="contact-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#64748b] uppercase">LinkedIn</div>
                    <div className="text-white font-medium group-hover:text-[#60a5fa] transition-colors">
                      teemurekiranta
                    </div>
                  </div>
                </a>

                <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="contact-card group">
                  <div className="contact-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#64748b] uppercase">GitHub</div>
                    <div className="text-white font-medium group-hover:text-[#60a5fa] transition-colors">
                      Rekiranta
                    </div>
                  </div>
                </a>

                <div className="contact-card">
                  <div className="contact-icon">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#64748b] uppercase">Location</div>
                    <div className="text-white font-medium">Helsinki, Finland</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display font-bold text-white">TR<span className="text-[#3b82f6]">.</span></span>
                <span className="text-sm text-[#64748b]">© {new Date().getFullYear()} Teemu Rekiranta</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="link-hover text-sm">GitHub</a>
                <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="link-hover text-sm">LinkedIn</a>
                <a href="mailto:Teemu.Rekiranta1@gmail.com" className="link-hover text-sm">Email</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Menu */}
      <div className={`mobile-overlay ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(false)} />
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <span className="font-display text-xl font-bold text-white">TR<span className="text-[#3b82f6]">.</span></span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#94a3b8] hover:text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-xl font-display font-semibold text-white hover:text-[#60a5fa] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
            <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="block text-[#94a3b8] hover:text-[#60a5fa]">
              GitHub →
            </a>
            <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="block text-[#94a3b8] hover:text-[#60a5fa]">
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
