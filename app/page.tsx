import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-slate-900 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 text-sm">
          <span className="font-semibold tracking-wide text-slate-100">
            Teemu Rekiranta
          </span>
          <nav className="hidden gap-6 text-slate-300 sm:flex">
            <a href="#skills" className="hover:text-sky-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-sky-400">
              Projects
            </a>
            <a href="#experience" className="hover:text-sky-400">
              Experience
            </a>
            <a href="#contact" className="hover:text-sky-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero like Hasan style */}
      <section className="border-b border-slate-900">
        <div className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-6 py-12 text-center">
          <div className="w-full max-w-2xl rounded-3xl bg-slate-900/60 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.8)] ring-1 ring-slate-800">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
              Junior Cloud and DevOps Engineer
            </p>
            <h1 className="mt-4 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
              Building reliable cloud and DevOps solutions
              <span className="block text-lg font-semibold text-sky-400 sm:text-xl">
                Learning fast, building faster
              </span>
            </h1>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              I am an IT Infrastructure student and junior Cloud and DevOps
              Engineer from Helsinki. I focus on cloud platforms, automation and
              modern infrastructure that supports teams and real projects.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow hover:bg-sky-400"
              >
                Lets Connect
              </a>
              <a
                href="https://github.com/Rekiranta"
                className="rounded-2xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/teemurekiranta"
                className="rounded-2xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 text-xs text-slate-500">
            <span>Scroll to explore</span>
            <span className="inline-flex h-9 w-5 items-start justify-center rounded-full border border-slate-700">
              <span className="mt-1 h-2 w-1 rounded-full bg-slate-500 animate-bounce" />
            </span>
          </div>
        </div>
      </section>

      {/* About section */}
      <section
        id="about"
        className="border-b border-slate-900 bg-slate-950/90"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 md:flex-row">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold md:text-3xl">About Me</h2>
            <p className="mt-4 text-sm text-slate-300 md:text-base">
              I am a junior Cloud and DevOps Engineer and IT Infrastructure
              student. I am moving into technology after over eight years in
              demanding service environments where I learned process thinking,
              quality focus and calm work under pressure.
            </p>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              My main interests are cloud services, DevOps culture and
              virtualized infrastructure. I like to learn by building concrete
              projects and turning concepts into working systems that others can
              understand and reuse.
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-400">
              Focus areas
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Cloud platforms AWS and Google Cloud</li>
              <li>DevOps, CI and CD, automation and GitHub workflows</li>
              <li>Containerization and basic Kubernetes usage</li>
              <li>Infrastructure and virtualization for Linux and Windows</li>
              <li>Backend and data tools such as Python, SQL and Power BI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills grid like cards */}
      <section
        id="skills"
        className="border-b border-slate-900 bg-slate-900/40"
      >
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-semibold md:text-3xl">
            A curated selection of my skills in Cloud and DevOps
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <SkillCard label="AWS" />
            <SkillCard label="Google Cloud" />
            <SkillCard label="Docker" />
            <SkillCard label="Kubernetes" />
            <SkillCard label="Terraform" />
            <SkillCard label="GitHub Actions" />
            <SkillCard label="CI and CD pipelines" />
            <SkillCard label="Linux" />
            <SkillCard label="Windows Server" />
            <SkillCard label="Git" />
            <SkillCard label="SQL and MySQL" />
            <SkillCard label="Power BI" />
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">
              More technologies I work with
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              I am constantly exploring and practicing new tools around cloud,
              DevOps and backend development.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <SkillCard label="Python" />
              <SkillCard label="JavaScript" />
              <SkillCard label="TypeScript" />
              <SkillCard label="Node.js" />
              <SkillCard label="Bash scripting" />
              <SkillCard label="Networking basics" />
              <SkillCard label="APIs and REST" />
              <SkillCard label="Monitoring and reliability thinking" />
              <SkillCard label="Documentation and process improvement" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience and certifications block */}
      <section
        id="experience"
        className="border-b border-slate-900 bg-slate-950/90"
      >
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Experience and Certifications
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-slate-50">
                Practical experience
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  Building cloud and DevOps focused projects that simulate real
                  workflows.
                </li>
                <li>
                  Working with CI and CD concepts, repository structure and
                  automation using GitHub.
                </li>
                <li>
                  Exploring network, server and virtualization topics through
                  studies and labs.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-slate-50">
                Certifications
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                <li>AWS Academy Cloud Foundations</li>
                <li>AWS Academy Cloud Architecting</li>
                <li>Google Cloud Computing Foundations</li>
                <li>SAS Data Literacy Essentials</li>
                <li>Google Fundamentals of Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-b border-slate-900 bg-slate-900/40"
      >
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Selected Projects
          </h2>
          <p className="mt-2 text-sm text-slate-300 md:text-base">
            A few projects that show how I practice cloud, DevOps and backend
            skills in real setups.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="BuildWatch CI Monitor"
              description="Dashboard that shows the status of CI pipelines and builds, focused on visibility and quick feedback for developers."
              keywords="DevOps, CI monitoring, automation"
              repo="buildwatch-ci-monitor"
            />
            <ProjectCard
              title="Data Pipeline ELT with dbt"
              description="End to end ELT data pipeline that models, transforms and tests data sets using dbt style workflows."
              keywords="ELT, dbt, data engineering"
              repo="data-pipeline-elt-dbt"
            />
            <ProjectCard
              title="Local Serverless ETL"
              description="Concept project that simulates a serverless style ETL path with event based steps and modular tasks."
              keywords="serverless patterns, ETL, automation"
              repo="local-serverless-etl"
            />
            <ProjectCard
              title="FastAPI Redis Cache API"
              description="High speed REST API with caching and clean structure."
              keywords="Python, FastAPI, Redis, API design"
              repo="fastapi-redis-cache-api"
            />
            <ProjectCard
              title="DevOps CI Demo"
              description="Simple continuous integration setup that connects GitHub changes with automated checks and builds."
              keywords="DevOps, CI, GitHub Actions"
              repo="devops-ci-demo"
            />
          </div>
        </div>
      </section>

      {/* Contact similar to form card */}
      <section id="contact" className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Connect With Me
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm text-slate-300">
                Have a project in mind or want to talk about junior cloud and
                DevOps roles. Reach out and lets see how I can help or learn
                together.
              </p>
              <div className="mt-5 space-y-2 text-sm text-slate-200">
                <p>📧 Teemu.Rekiranta1@gmail.com</p>
                <p>📍 Helsinki, Finland</p>
                <p>🔗 linkedin.com/in/teemurekiranta</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm text-slate-400">
                This simple form is only visual for now, but it shows how I
                think about clean and focused interfaces.
              </p>
              <form className="mt-4 space-y-3 text-sm">
                <InputPlaceholder label="Name" />
                <InputPlaceholder label="Email" />
                <InputPlaceholder label="Subject" />
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-400">
                    Message
                  </label>
                  <div className="h-24 rounded-xl border border-slate-700 bg-slate-950/70" />
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 py-2 text-xs font-semibold text-slate-300"
                >
                  Send Message (visual only)
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-900 pt-6 text-center text-xs text-slate-500">
            <p>Teemu Rekiranta · Junior Cloud and DevOps Engineer</p>
            <p className="mt-1">Learning fast, building faster</p>
          </div>
        </div>
      </section>
    </main>
  );
}

type SkillCardProps = {
  label: string;
};

function SkillCard({ label }: SkillCardProps) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 text-sm font-medium text-slate-100 shadow-sm">
      {label}
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  keywords: string;
  repo: string;
};

function ProjectCard({
  title,
  description,
  keywords,
  repo,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
      <div>
        <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{description}</p>
        <p className="mt-2 text-xs text-slate-400">
          <span className="font-semibold">Keywords:</span> {keywords}
        </p>
      </div>
      <div className="mt-4 flex justify-between text-xs text-slate-400">
        <a
          href={`https://github.com/Rekiranta/${repo}`}
          className="rounded-full border border-slate-700 px-3 py-1 font-medium text-sky-300 hover:border-sky-400 hover:text-sky-200"
        >
          View repository
        </a>
      </div>
    </article>
  );
}

type InputPlaceholderProps = {
  label: string;
};

function InputPlaceholder({ label }: InputPlaceholderProps) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-slate-400">
        {label}
      </label>
      <div className="h-9 rounded-xl border border-slate-700 bg-slate-950/70" />
    </div>
  );
}
