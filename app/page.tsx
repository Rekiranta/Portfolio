"use client";

import React from "react";

type Project = {
  title: string;
  description: string;
  keywords: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "BuildWatch CI Monitor",
    description:
      "Dashboard that shows the status of CI pipelines and builds, focused on visibility and quick feedback for developers.",
    keywords: "DevOps, CI monitoring, automation",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/buildwatch-ci-monitor",
  },
  {
    title: "Data Pipeline ELT with dbt",
    description:
      "End to end ELT data pipeline that models, transforms and tests data sets using dbt style workflows.",
    keywords: "ELT, dbt, data engineering",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/data-pipeline-elt-dbt",
  },
  {
    title: "Local Serverless ETL",
    description:
      "Concept project that simulates a serverless style ETL path with event based steps and modular tasks.",
    keywords: "serverless patterns, ETL, automation",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/local-serverless-etl",
  },
  {
    title: "FastAPI Redis Cache API",
    description:
      "High speed REST API with caching and clean structure. A small but focused backend service.",
    keywords: "Python, FastAPI, Redis, API design",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/fastapi-redis-cache-api",
  },
  {
    title: "DevOps CI Demo",
    description:
      "Simple continuous integration setup that connects GitHub changes with automated checks and builds.",
    keywords: "DevOps, CI, GitHub Actions",
    url: "https://github.com/Rekiranta/My-dev-portfolio/tree/main/devops-ci-demo",
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top navigation like example */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
              TR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">
                Teemu Rekiranta
              </span>
              <span className="text-xs text-slate-400">
                Junior Cloud and DevOps Engineer
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-5 text-xs font-medium text-slate-300 sm:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
              Cloud and DevOps
            </p>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Teemu Rekiranta
              </span>
            </h1>
            <p className="mt-3 text-sm font-semibold text-sky-300 sm:text-base">
              Junior Cloud and DevOps Engineer · IT Infrastructure Student
            </p>
            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              I build cloud ready solutions, automate infrastructure and learn
              DevOps by creating real projects. Focus on AWS, Google Cloud,
              CI and CD, virtualization and modern backend technologies.
            </p>
            <p className="mt-3 text-sm font-medium text-sky-400">
              Learning fast, building faster.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <HeroButton href="#contact" kind="primary">
                Lets connect
              </HeroButton>
              <HeroButton href="#projects" kind="outline">
                View projects
              </HeroButton>
              <HeroButton href="https://github.com/Rekiranta" kind="ghost">
                GitHub profile
              </HeroButton>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400 sm:text-sm">
              <span>📍 Helsinki, Finland</span>
              <a
                href="mailto:Teemu.Rekiranta1@gmail.com"
                className="hover:text-sky-400"
              >
                Teemu.Rekiranta1@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/teemurekiranta"
                className="hover:text-sky-400"
              >
                linkedin.com/in/teemurekiranta
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="mx-auto max-w-sm rounded-3xl border border-slate-800 bg-slate-900/40 p-5 shadow-lg shadow-slate-900/60">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Focus areas
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>Cloud platforms AWS and Google Cloud</li>
                <li>DevOps, CI and CD, GitHub Actions</li>
                <li>Terraform, Kubernetes and container workflows</li>
                <li>Infrastructure and virtualization for Linux and Windows</li>
                <li>Backend services and data pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-semibold sm:text-2xl">
            About Me
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            I am a <strong>Junior Cloud and DevOps Engineer</strong> and{" "}
            <strong>IT Infrastructure student</strong> from Helsinki, Finland.
            I am transitioning into IT after more than eight years in demanding
            and fast paced environments where I learned process optimization,
            quality control and teamwork.
          </p>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            My focus is on <strong>cloud platforms</strong>,{" "}
            <strong>DevOps practices</strong> and{" "}
            <strong>virtualized infrastructure</strong>. I enjoy learning by
            building real projects and turning theoretical concepts into
            practical solutions.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
            <li>
              🌱 Currently studying cloud services, virtualization and ICT infrastructure
            </li>
            <li>
              ☁️ Exploring AWS, Google Cloud and cloud native patterns
            </li>
            <li>
              ⚙️ Practicing DevOps, CI and CD, containers and automation
            </li>
            <li>
              🧠 Strong interest in infrastructure, APIs and data pipelines
            </li>
            <li>
              ⚡ Motto: <em>Learning fast, building faster.</em>
            </li>
          </ul>
        </div>
      </section>

      {/* Tech Stack like table in example */}
      <section
        id="skills"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Tech Stack
          </h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <table className="min-w-full border-collapse text-[11px] text-slate-100 sm:text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/70">
                  <Th>Cloud Platforms</Th>
                  <Th>CI CD and Automation</Th>
                  <Th>Containers and OS</Th>
                  <Th>Databases and Analytics</Th>
                  <Th>Languages and Tools</Th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/AWS-232F3E.svg?style=for-the-badge&logo=amazonwebservices&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=for-the-badge&logo=githubactions&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=python&logoColor=white" />
                  </Td>
                </tr>
                <tr className="border-b border-slate-800">
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Google%20Cloud-4285F4.svg?style=for-the-badge&logo=googlecloud&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Terraform-844FBA.svg?style=for-the-badge&logo=terraform&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Kubernetes-326CE5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/SQL-336791.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" />
                  </Td>
                </tr>
                <tr className="border-b border-slate-800">
                  <Td />
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/CI%2FCD-000000.svg?style=for-the-badge&logo=github&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Linux-FCC624.svg?style=for-the-badge&logo=linux&logoColor=black" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Power%20BI-F2C811.svg?style=for-the-badge&logo=powerbi&logoColor=black" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white" />
                  </Td>
                </tr>
                <tr className="border-b border-slate-800">
                  <Td />
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white" />
                  </Td>
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Windows%20Server-0078D6.svg?style=for-the-badge&logo=windows&logoColor=white" />
                  </Td>
                  <Td />
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" />
                  </Td>
                </tr>
                <tr>
                  <Td />
                  <Td />
                  <Td />
                  <Td />
                  <Td>
                    <TechBadge src="https://img.shields.io/badge/Bash-4EAA25.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" />
                  </Td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Certifications
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
            <li>AWS Academy Cloud Foundations</li>
            <li>AWS Academy Cloud Architecting</li>
            <li>Google Cloud Computing Foundations</li>
            <li>SAS Data Literacy Essentials</li>
            <li>Google Fundamentals of Digital Marketing</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Selected Projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
            A collection of projects where I learn cloud, DevOps and backend skills
            by building practical solutions.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Connect With Me
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            I am open to junior cloud and DevOps roles, internships and
            collaborative learning projects. If my profile and projects look
            interesting, feel free to reach out.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <ContactBadge href="mailto:Teemu.Rekiranta1@gmail.com">
              Email
            </ContactBadge>
            <ContactBadge href="https://www.linkedin.com/in/teemurekiranta">
              LinkedIn
            </ContactBadge>
            <ContactBadge href="https://github.com/Rekiranta">
              GitHub
            </ContactBadge>
          </div>

          <p className="mt-10 text-sm font-medium text-slate-400">
            💡 Learning fast, building faster.
          </p>
        </div>
      </section>
    </main>
  );
}

/* helper components */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="hover:text-sky-400"
    >
      {children}
    </a>
  );
}

type HeroButtonProps = {
  href: string;
  kind: "primary" | "outline" | "ghost";
  children: React.ReactNode;
};

function HeroButton({ href, kind, children }: HeroButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition";
  const variant =
    kind === "primary"
      ? "bg-sky-500 text-white hover:bg-sky-400"
      : kind === "outline"
      ? "border border-slate-600 text-slate-100 hover:border-sky-400"
      : "border border-slate-700 text-slate-200 hover:border-sky-400";
  return (
    <a href={href} className={`${base} ${variant}`}>
      {children}
    </a>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-2 py-2 text-left text-[0.65rem] font-semibold uppercase tracking-wide text-slate-400 sm:px-3 sm:text-xs">
      {children}
    </th>
  );
}

function Td({ children }: { children?: React.ReactNode }) {
  return (
    <td className="px-2 py-3 align-top sm:px-3">
      {children ?? <span className="text-slate-700"> </span>}
    </td>
  );
}

function TechBadge({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="mb-1 max-h-7 rounded-md bg-slate-900/80"
    />
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <div>
        <h3 className="text-base font-semibold text-slate-50">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-300">
          {project.description}
        </p>
        <p className="mt-2 text-xs text-slate-400">
          <span className="font-semibold">Keywords:</span>{" "}
          {project.keywords}
        </p>
      </div>
      <div className="mt-3">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-slate-600 px-3 py-1 text-xs font-medium text-sky-300 hover:border-sky-400 hover:text-sky-200"
        >
          View repository
        </a>
      </div>
    </article>
  );
}


function ContactBadge({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-200"
    >
      {children}
    </a>
  );
}
