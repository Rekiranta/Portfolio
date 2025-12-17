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
  { title: "BuildWatch CI Monitor", description: "Real-time CI pipeline dashboard with WebSocket updates for instant build feedback.", tech: ["Node.js", "GitHub Actions", "WebSocket"], category: "devops", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/buildwatch-ci-monitor" },
  { title: "DevOps CI Demo", description: "Automated CI setup with GitHub Actions, tests, and deployment workflows.", tech: ["Flask", "Pytest", "GitHub Actions"], category: "devops", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-ci-demo" },
  { title: "DevOps Status Board", description: "Live service health monitoring with React frontend and Flask API.", tech: ["React", "Flask", "WebSocket"], category: "devops", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-statusboard" },
  { title: "Local Release Pipeline", description: "Simulated release pipeline for testing deployment workflows locally.", tech: ["Python", "Docker", "CI/CD"], category: "devops", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-local-release-pipeline" },
  { title: "Terraform K8s Blueprints", description: "Kubernetes infrastructure blueprints with Terraform and CI integration.", tech: ["Terraform", "Kubernetes", "GitHub Actions"], category: "devops", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/terraform-k8s-blueprints-ci" },
  { title: "Data Pipeline ELT + dbt", description: "End-to-end ELT pipeline with data modeling and transformations using dbt.", tech: ["dbt", "PostgreSQL", "Python"], category: "data", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/data-pipeline-elt-dbt" },
  { title: "Streaming Redpanda Postgres", description: "Kafka streaming with idempotent Postgres sink for reliable data processing.", tech: ["Redpanda", "PostgreSQL", "Python"], category: "data", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/streaming-redpanda-postgres" },
  { title: "Local Serverless ETL", description: "Serverless-style ETL with event-based steps and modular execution.", tech: ["LocalStack", "Lambda", "S3"], category: "data", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/local-serverless-etl" },
  { title: "Batch ETL Validate Postgres", description: "Batch ETL pipeline with Pandera validation and quality checks.", tech: ["Python", "PostgreSQL", "Pandera"], category: "data", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/batch-etl-validate-postgres" },
  { title: "Local Streaming Pipeline", description: "Local streaming data pipeline for real-time processing experiments.", tech: ["Python", "Docker", "Streaming"], category: "data", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/local-streaming-pipeline" },
  { title: "FastAPI Redis Cache API", description: "High-performance REST API with Redis caching and dependency injection.", tech: ["FastAPI", "Redis", "Pytest"], category: "api", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/fastapi-redis-cache-api" },
  { title: "Data Quality API", description: "API for data validation with comprehensive quality checks and reporting.", tech: ["FastAPI", "Pydantic", "Python"], category: "api", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/data-quality-api" },
  { title: "Task Manager Web", description: "Web-based task management application with clean UI and REST backend.", tech: ["Flask", "JavaScript", "SQLite"], category: "api", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/task-manager-web" },
  { title: "Project Planner Flask", description: "Project planning tool with task tracking and progress visualization.", tech: ["Flask", "SQLite", "JavaScript"], category: "api", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/project-planer-flask" },
  { title: "Expense Tracker Charts", description: "Expense tracking with interactive Chart.js visualizations.", tech: ["Flask", "Chart.js", "Python"], category: "api", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/expense-tracker-charts" },
  { title: "WebSocket Realtime Board", description: "Real-time collaboration board with WebSocket communication.", tech: ["Node.js", "WebSocket", "JavaScript"], category: "realtime", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/node-ws-realtime-board" },
  { title: "SSE Task Feed", description: "Server-sent events task feed for real-time updates without polling.", tech: ["Node.js", "SSE", "Express"], category: "realtime", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/node-sse-task-feed" },
  { title: "Event Stream Monitor", description: "Event stream monitoring dashboard for tracking system events.", tech: ["Python", "Flask", "Streaming"], category: "realtime", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/eventstream-monitor" },
  { title: "Service Health Dashboard", description: "Service health monitoring with status checks and alerting.", tech: ["Python", "Flask", "REST"], category: "realtime", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/service-health-dashboard" },
  { title: "LocalStack SQS DynamoDB", description: "AWS infrastructure locally with LocalStack using Terraform.", tech: ["LocalStack", "Terraform", "DynamoDB"], category: "iac", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/localstack-sqs-dynamodb-iac" },
  { title: "SensorLab Device Sim", description: "IoT sensor device simulation with Robot Framework tests.", tech: ["Python", "IoT", "Robot Framework"], category: "iot", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/sensorlab-device-sim-tests" },
  { title: "ChargeLab EV Sessions", description: "EV charging session simulator for testing charging infrastructure.", tech: ["Node.js", "REST", "WebSocket"], category: "iot", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/node-chargelab-ev-sessions" },
  { title: "FleetPilot Telemetry", description: "Vehicle fleet telemetry system for tracking and analytics.", tech: ["Python", "Telemetry", "REST"], category: "iot", url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/fleetpilot-vehicle-telemetry" },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "devops", label: "DevOps" },
  { key: "data", label: "Data" },
  { key: "api", label: "APIs" },
  { key: "realtime", label: "Realtime" },
  { key: "iac", label: "IaC" },
  { key: "iot", label: "IoT" },
];

const certifications = [
  { name: "AWS Cloud Foundations", issuer: "Amazon Web Services" },
  { name: "AWS Cloud Architecting", issuer: "Amazon Web Services" },
  { name: "Google Cloud Computing", issuer: "Google Cloud" },
  { name: "Data Literacy Essentials", issuer: "SAS Institute" },
  { name: "Digital Marketing", issuer: "Google" },
];

const techStack = ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Python", "TypeScript", "PostgreSQL", "Redis", "FastAPI", "React", "Node.js", "Linux"];

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#f8fafc]/95 backdrop-blur-md border-b border-[#e2e8f0]" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="font-display text-xl font-bold tracking-tight">
              TR<span className="text-[#2563eb]">.</span>
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="link-underline text-sm font-medium uppercase tracking-wider">
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="link-underline text-sm font-mono">
                GitHub
              </a>
              <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="link-underline text-sm font-mono">
                LinkedIn
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-[#64748b] hover:text-[#0f172a] transition">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="bg-[#f8fafc] text-[#0f172a] min-h-screen">
        {/* ================================================================
            HERO SECTION
            ================================================================ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="geo-circle w-[600px] h-[600px] -top-48 -right-48 opacity-20" />
            <div className="geo-circle w-[400px] h-[400px] bottom-20 -left-48 opacity-10" />
            <div className="geo-line w-96 top-1/3 left-0 opacity-50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text */}
              <div className="space-y-8">
                <div className="animate-fade-up">
                  <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#e2e8f0] mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                    <span className="font-mono text-sm text-[#64748b]">Open to opportunities</span>
                  </div>
                </div>

                <h1 className="animate-fade-up delay-100">
                  <span className="block font-display text-massive font-extrabold tracking-tighter">
                    Teemu Rekiranta
                  </span>
                </h1>

                <div className="animate-fade-up delay-200">
                  <p className="font-display text-2xl lg:text-3xl font-semibold text-[#64748b]">
                    Junior Cloud & DevOps Engineer
                  </p>
                </div>

                <div className="animate-fade-up delay-300">
                  <p className="text-lg text-[#64748b] max-w-md leading-relaxed">
                    Building cloud-native solutions, automating infrastructure, and creating reliable data pipelines.
                    Based in Helsinki, Finland.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
                  <a href="#contact" className="btn-primary">
                    <span>Get in touch</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#projects" className="btn-secondary">
                    <span>View projects</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column - Terminal */}
              <div className="animate-fade-up delay-500">
                <div className="terminal glow-accent">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-[#ff5f57]" />
                    <div className="terminal-dot bg-[#febc2e]" />
                    <div className="terminal-dot bg-[#28c840]" />
                    <span className="ml-4 text-xs text-[#64748b]">teemu@cloud ~ </span>
                  </div>
                  <div className="terminal-body">
                    <div className="space-y-4">
                      <div>
                        <span className="terminal-prompt">$ </span>
                        <span className="terminal-command">whoami</span>
                        <div className="terminal-output mt-1">teemu-rekiranta</div>
                      </div>
                      <div>
                        <span className="terminal-prompt">$ </span>
                        <span className="terminal-command">cat skills.json</span>
                        <div className="terminal-output mt-1 text-[#64748b]">
                          {`{`}<br />
                          &nbsp;&nbsp;<span className="text-[#2563eb]">&quot;cloud&quot;</span>: [<span className="text-[#4ade80]">&quot;AWS&quot;</span>, <span className="text-[#4ade80]">&quot;GCP&quot;</span>],<br />
                          &nbsp;&nbsp;<span className="text-[#2563eb]">&quot;devops&quot;</span>: [<span className="text-[#4ade80]">&quot;CI/CD&quot;</span>, <span className="text-[#4ade80]">&quot;Terraform&quot;</span>],<br />
                          &nbsp;&nbsp;<span className="text-[#2563eb]">&quot;containers&quot;</span>: [<span className="text-[#4ade80]">&quot;Docker&quot;</span>, <span className="text-[#4ade80]">&quot;K8s&quot;</span>]<br />
                          {`}`}
                        </div>
                      </div>
                      <div>
                        <span className="terminal-prompt">$ </span>
                        <span className="terminal-command">echo $MOTTO</span>
                        <div className="terminal-output mt-1 text-[#06b6d4]">&quot;Learning fast, building faster.&quot;</div>
                      </div>
                      <div className="flex items-center">
                        <span className="terminal-prompt">$ </span>
                        <span className="w-2 h-5 bg-[#2563eb] cursor-blink ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
            <div className="flex flex-col items-center gap-2 text-[#64748b]">
              <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-[#2563eb] to-transparent" />
            </div>
          </div>
        </section>

        {/* ================================================================
            MARQUEE SECTION
            ================================================================ */}
        <section className="py-8 border-y border-[#e2e8f0] overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-track">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="marquee-item">
                  {tech}
                  <span className="marquee-separator">◆</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            ABOUT SECTION
            ================================================================ */}
        <section id="about" className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="font-mono text-sm text-[#2563eb] uppercase tracking-widest">About</span>
                <h2 className="font-display text-huge font-bold mt-4 tracking-tight">
                  From Process<br />
                  <span className="text-stroke text-[#64748b]">to Pipeline</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-editorial text-[#64748b] leading-relaxed">
                  I&apos;m a <span className="text-[#0f172a] font-medium">Junior Cloud and DevOps Engineer</span> and
                  IT Infrastructure student based in Helsinki, Finland. After eight years in demanding environments
                  where I developed strong process optimization and quality control skills, I&apos;m now channeling
                  that experience into building cloud-native solutions.
                </p>
                <p className="text-editorial text-[#64748b] leading-relaxed">
                  My focus areas include <span className="text-[#2563eb]">AWS</span>, <span className="text-[#2563eb]">Google Cloud</span>,
                  <span className="text-[#2563eb]"> CI/CD pipelines</span>, and <span className="text-[#2563eb]">Infrastructure as Code</span>.
                  I believe in learning by building - every project in my portfolio represents hands-on exploration
                  of real-world patterns.
                </p>

                <div className="pt-8 grid sm:grid-cols-3 gap-8">
                  <div>
                    <div className="font-display text-4xl font-bold text-[#2563eb]">23+</div>
                    <div className="font-mono text-sm text-[#64748b] mt-1">Projects</div>
                  </div>
                  <div>
                    <div className="font-display text-4xl font-bold text-[#06b6d4]">5</div>
                    <div className="font-mono text-sm text-[#64748b] mt-1">Certifications</div>
                  </div>
                  <div>
                    <div className="font-display text-4xl font-bold text-[#4ade80]">15+</div>
                    <div className="font-mono text-sm text-[#64748b] mt-1">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ================================================================
            SKILLS SECTION
            ================================================================ */}
        <section id="skills" className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="font-mono text-sm text-[#2563eb] uppercase tracking-widest">Expertise</span>
              <h2 className="font-display text-huge font-bold mt-4 tracking-tight">
                Tech Stack
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard title="Cloud Platforms" skills={["AWS", "Google Cloud", "LocalStack"]} icon="☁️" />
              <SkillCard title="DevOps & CI/CD" skills={["GitHub Actions", "Terraform", "Git", "CI/CD"]} icon="⚙️" />
              <SkillCard title="Containers" skills={["Docker", "Kubernetes", "Linux", "Windows Server"]} icon="📦" />
              <SkillCard title="Databases" skills={["PostgreSQL", "MySQL", "Redis", "DynamoDB"]} icon="🗄️" />
              <SkillCard title="Languages" skills={["Python", "TypeScript", "JavaScript", "Bash", "SQL"]} icon="💻" />
              <SkillCard title="Frameworks" skills={["FastAPI", "Flask", "Node.js", "React", "Next.js"]} icon="🚀" />
            </div>

            {/* Certifications */}
            <div className="mt-24">
              <h3 className="font-display text-2xl font-bold mb-8 text-center">Certifications</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="cert-card">
                    <h4 className="font-medium text-[#0f172a]">{cert.name}</h4>
                    <p className="font-mono text-xs text-[#64748b] mt-1">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ================================================================
            PROJECTS SECTION
            ================================================================ */}
        <section id="projects" className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
              <div>
                <span className="font-mono text-sm text-[#2563eb] uppercase tracking-widest">Portfolio</span>
                <h2 className="font-display text-huge font-bold mt-4 tracking-tight">
                  Featured Projects
                </h2>
                <p className="text-[#64748b] mt-4 max-w-lg">
                  {projects.length} hands-on projects showcasing DevOps, data engineering, and cloud infrastructure skills.
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`filter-btn ${activeCategory === cat.key ? "active" : ""}`}
                  >
                    {cat.label}
                    {cat.key !== "all" && (
                      <span className="ml-1 opacity-60">({projects.filter(p => p.category === cat.key).length})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 1} />
              ))}
            </div>

            {/* View All */}
            <div className="text-center mt-12">
              <a
                href="https://github.com/Rekiranta/My-dev-portfolio"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View all on GitHub</span>
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ================================================================
            CONTACT SECTION
            ================================================================ */}
        <section id="contact" className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="font-mono text-sm text-[#2563eb] uppercase tracking-widest">Contact</span>
                <h2 className="font-display text-huge font-bold mt-4 tracking-tight">
                  Let&apos;s Build<br />
                  <span className="gradient-text">Something Great</span>
                </h2>
                <p className="text-[#64748b] mt-6 max-w-md text-lg leading-relaxed">
                  I&apos;m currently looking for junior cloud and DevOps roles, internships,
                  or collaborative projects. If my work looks interesting, let&apos;s connect!
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="w-px h-12 bg-[#e2e8f0]" />
                  <p className="font-display text-xl text-[#06b6d4] italic">
                    &quot;Learning fast, building faster.&quot;
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a href="mailto:Teemu.Rekiranta1@gmail.com" className="contact-card group">
                  <div className="contact-icon">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#64748b] uppercase tracking-wider">Email</div>
                    <div className="font-medium mt-1 group-hover:text-[#2563eb] transition">Teemu.Rekiranta1@gmail.com</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="contact-card group">
                  <div className="contact-icon">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#64748b] uppercase tracking-wider">LinkedIn</div>
                    <div className="font-medium mt-1 group-hover:text-[#2563eb] transition">teemurekiranta</div>
                  </div>
                </a>

                <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="contact-card group">
                  <div className="contact-icon">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#64748b] uppercase tracking-wider">GitHub</div>
                    <div className="font-medium mt-1 group-hover:text-[#2563eb] transition">Rekiranta</div>
                  </div>
                </a>

                <div className="contact-card">
                  <div className="contact-icon">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#64748b] uppercase tracking-wider">Location</div>
                    <div className="font-medium mt-1">Helsinki, Finland</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            FOOTER
            ================================================================ */}
        <footer className="border-t border-[#e2e8f0] py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="font-display text-xl font-bold">TR<span className="text-[#2563eb]">.</span></span>
                <span className="text-[#64748b] text-sm">© {new Date().getFullYear()} Teemu Rekiranta</span>
              </div>
              <div className="flex items-center gap-8">
                <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="link-underline text-sm">GitHub</a>
                <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="link-underline text-sm">LinkedIn</a>
                <a href="mailto:Teemu.Rekiranta1@gmail.com" className="link-underline text-sm">Email</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(false)} />
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-12">
            <span className="font-display text-xl font-bold">TR<span className="text-[#2563eb]">.</span></span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#64748b] hover:text-[#0f172a]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-display text-2xl font-semibold hover:text-[#2563eb] transition"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="mt-12 pt-8 border-t border-[#e2e8f0] space-y-4">
            <a href="https://github.com/Rekiranta" target="_blank" rel="noreferrer" className="block font-mono text-sm text-[#64748b] hover:text-[#2563eb]">
              GitHub →
            </a>
            <a href="https://linkedin.com/in/teemurekiranta" target="_blank" rel="noreferrer" className="block font-mono text-sm text-[#64748b] hover:text-[#2563eb]">
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function SkillCard({ title, skills, icon }: { title: string; skills: string[]; icon: string }) {
  return (
    <div className="card p-6">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="font-display font-semibold text-lg mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">{skill}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const badgeClass: Record<Category, string> = {
    all: "",
    devops: "badge-devops",
    data: "badge-data",
    api: "badge-api",
    realtime: "badge-realtime",
    iac: "badge-iac",
    iot: "badge-iot",
  };

  return (
    <a href={project.url} target="_blank" rel="noreferrer" className="project-card group">
      <div className="project-number">{String(index).padStart(2, "0")}</div>
      <div className={`category-badge ${badgeClass[project.category]} mb-4`}>
        {project.category}
      </div>
      <h3 className="font-display text-xl font-semibold group-hover:text-[#2563eb] transition pr-16">
        {project.title}
      </h3>
      <p className="text-[#64748b] text-sm mt-3 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono text-[#64748b] bg-[#f1f5f9] px-2 py-1">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-6 text-sm font-medium text-[#2563eb] opacity-0 group-hover:opacity-100 transition">
        View project
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  );
}
