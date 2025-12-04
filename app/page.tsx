import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-800">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Hi 👋, I am Teemu Rekiranta
          </h1>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
            Junior Cloud and DevOps Engineer · IT Infrastructure Student
          </p>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Cloud and Infrastructure · Learning fast, building faster
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span>📍 Helsinki, Finland</span>
            <a
              href="https://www.linkedin.com/in/teemurekiranta"
              className="hover:text-sky-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:Teemu.Rekiranta1@gmail.com"
              className="hover:text-sky-400"
            >
              Teemu.Rekiranta1@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section
        id="about"
        className="border-b border-slate-800 bg-slate-950/80"
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-12">
          <h2 className="text-2xl font-semibold md:text-3xl">📘 About Me</h2>
          <p className="text-sm text-slate-300 md:text-base">
            I am a <strong>Junior Cloud and DevOps Engineer</strong> and{" "}
            <strong>IT Infrastructure student</strong> from Helsinki, Finland.
            I am transitioning into IT after more than eight years in demanding
            and fast paced environments where I learned process optimization,
            quality control and teamwork.
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            My focus is on <strong>cloud platforms</strong>,{" "}
            <strong>DevOps practices</strong> and{" "}
            <strong>virtualized infrastructure</strong>. I enjoy learning by
            building real projects and turning theoretical concepts into
            practical solutions.
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-300 md:text-base">
            <li>
              🌱 Currently studying <strong>cloud services, virtualization and
              ICT infrastructure</strong>
            </li>
            <li>
              ☁️ Exploring <strong>AWS</strong>, <strong>Google Cloud</strong>{" "}
              and cloud native patterns
            </li>
            <li>
              ⚙️ Practicing <strong>DevOps, CI and CD, containers and
              automation</strong>
            </li>
            <li>
              🧠 Strong interest in <strong>infrastructure, APIs and data
              pipelines</strong>
            </li>
            <li>
              ⚡ Motto: <em>Learning fast, building faster.</em>
            </li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id="tech-stack"
        className="border-b border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold md:text-3xl">🛠️ Tech Stack</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <table className="min-w-full border-collapse text-xs text-slate-200 sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <Th>Cloud Platforms</Th>
                  <Th>CI/CD and Automation</Th>
                  <Th>Containers and OS</Th>
                  <Th>Databases and Analytics</Th>
                  <Th>Languages and Tools</Th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <Td>
                    <Badge src="https://img.shields.io/badge/AWS-232F3E.svg?style=for-the-badge&logo=amazonwebservices&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=for-the-badge&logo=githubactions&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=python&logoColor=white" />
                  </Td>
                </tr>
                <tr className="border-b border-slate-800">
                  <Td>
                    <Badge src="https://img.shields.io/badge/Google%20Cloud-4285F4.svg?style=for-the-badge&logo=googlecloud&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/Terraform-844FBA.svg?style=for-the-badge&logo=terraform&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/Kubernetes-326CE5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/SQL-336791.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" />
                  </Td>
                </tr>
                <tr className="border-b border-slate-800">
                  <Td />
                  <Td>
                    <Badge src="https://img.shields.io/badge/CI%2FCD-000000.svg?style=for-the-badge&logo=github&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/Linux-FCC624.svg?style=for-the-badge&logo=linux&logoColor=black" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/Power%20BI-F2C811.svg?style=for-the-badge&logo=powerbi&logoColor=black" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white" />
                  </Td>
                </tr>
                <tr className="border-b border-slate-800">
                  <Td />
                  <Td>
                    <Badge src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white" />
                  </Td>
                  <Td>
                    <Badge src="https://img.shields.io/badge/Windows%20Server-0078D6.svg?style=for-the-badge&logo=windows&logoColor=white" />
                  </Td>
                  <Td />
                  <Td>
                    <Badge src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" />
                  </Td>
                </tr>
                <tr>
                  <Td />
                  <Td />
                  <Td />
                  <Td />
                  <Td>
                    <Badge src="https://img.shields.io/badge/Bash-4EAA25.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" />
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
        className="border-b border-slate-800 bg-slate-950/80"
      >
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-semibold md:text-3xl">🎓 Certifications</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 md:text-base">
            <li>🎖️ AWS Academy Cloud Foundations</li>
            <li>🎖️ AWS Academy Cloud Architecting</li>
            <li>🎖️ Google Cloud Computing Foundations</li>
            <li>🎖️ SAS Data Literacy Essentials</li>
            <li>🎖️ Google Fundamentals of Digital Marketing</li>
          </ul>
        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-semibold md:text-3xl">📦 Selected Projects</h2>

          <div className="mt-6 space-y-8">
            <ProjectBlock
              title="BuildWatch CI Monitor"
              description="Dashboard that shows the status of CI pipelines and builds, focused on visibility and quick feedback for developers."
              keywords="DevOps, CI monitoring, automation"
              repo="buildwatch-ci-monitor"
            />
            <ProjectBlock
              title="Data Pipeline ELT with dbt"
              description="End to end ELT data pipeline that models, transforms and tests data sets using dbt style workflows."
              keywords="ELT, dbt, data engineering"
              repo="data-pipeline-elt-dbt"
            />
            <ProjectBlock
              title="Local Serverless ETL"
              description="Concept project that simulates a serverless style ETL path with event based steps and modular tasks."
              keywords="serverless patterns, ETL, automation"
              repo="local-serverless-etl"
            />
            <ProjectBlock
              title="FastAPI Redis Cache API"
              description="High speed REST API with caching and clean structure. A small but focused backend service."
              keywords="Python, FastAPI, Redis, API design"
              repo="fastapi-redis-cache-api"
            />
            <ProjectBlock
              title="DevOps CI Demo"
              description="Simple continuous integration setup that connects GitHub changes with automated checks and builds."
              keywords="DevOps, CI, GitHub Actions"
              repo="devops-ci-demo"
            />
          </div>
        </div>
      </section>

      {/* Connect */}
      <section id="contact" className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-semibold md:text-3xl">🌐 Connect With Me</h2>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            I am open to junior cloud and DevOps roles, internships and
            collaborative learning projects. If my profile and projects look
            interesting, feel free to reach out.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <ContactBadge href="https://www.linkedin.com/in/teemurekiranta">
              LinkedIn
            </ContactBadge>
            <ContactBadge href="mailto:Teemu.Rekiranta1@gmail.com">
              Email
            </ContactBadge>
            <ContactBadge href="https://github.com/Rekiranta">
              GitHub
            </ContactBadge>
          </div>

          <div className="mt-10 text-center text-sm text-slate-400">
            <p>💡 "Learning fast, building faster."</p>
          </div>
        </div>
      </section>
    </main>
  );
}

type ThProps = {
  children: React.ReactNode;
};

function Th({ children }: ThProps) {
  return (
    <th className="px-2 py-2 text-left text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400 sm:px-3 sm:text-xs">
      {children}
    </th>
  );
}

type TdProps = {
  children?: React.ReactNode;
};

function Td({ children }: TdProps) {
  return (
    <td className="px-2 py-3 align-top sm:px-3">
      {children ?? <span className="text-slate-600">{" "}</span>}
    </td>
  );
}

type BadgeProps = {
  src: string;
};

function Badge({ src }: BadgeProps) {
  return (
    <img
      src={src}
      alt=""
      className="mb-1 max-h-8 rounded-md bg-slate-900/80"
    />
  );
}

type ProjectBlockProps = {
  title: string;
  description: string;
  keywords: string;
  repo: string;
};

function ProjectBlock({
  title,
  description,
  keywords,
  repo,
}: ProjectBlockProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      <p className="mt-2 text-xs text-slate-400">
        <span className="font-semibold">Keywords:</span> {keywords}
      </p>
      <a
        href={`https://github.com/Rekiranta/${repo}`}
        className="mt-3 inline-flex rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-sky-300 hover:border-sky-400 hover:text-sky-200"
      >
        View repository
      </a>
    </article>
  );
}

type ContactBadgeProps = {
  href: string;
  children: React.ReactNode;
};

function ContactBadge({ href, children }: ContactBadgeProps) {
  return (
    <a
      href={href}
      className="rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-200"
    >
      {children}
    </a>
  );
}
