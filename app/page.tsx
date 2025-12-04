import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
            Teemu Rekiranta
          </p>
          <h1 className="text-balance text-4xl font-bold sm:text-5xl md:text-6xl">
            Junior Cloud and DevOps Engineer
            <br />
            <span className="text-sky-400 text-2xl sm:text-3xl">
              IT Infrastructure Student
            </span>
          </h1>
          <p className="max-w-2xl text-balance text-base text-slate-300 sm:text-lg">
            I build cloud ready solutions, automate infrastructure and learn
            DevOps by creating real projects. Focused on AWS, Google Cloud,
            CI and CD, virtualization and modern backend technologies.
          </p>
          <p className="rounded-full border border-sky-500 px-4 py-1 text-sm font-medium text-sky-300">
            Learning fast, building faster
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-2xl px-6 py-3 text-sm font-semibold bg-sky-500 hover:bg-sky-400 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl px-6 py-3 text-sm font-semibold border border-slate-600 hover:border-sky-400 transition"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
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

      {/* About */}
      <section id="about" className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold md:text-3xl">About Me</h2>
            <p className="mt-4 text-sm text-slate-300 md:text-base">
              I am an IT Infrastructure student and aspiring Cloud and DevOps
              Engineer from Helsinki. My background in demanding restaurant
              environments taught me process thinking, quality focus and calm
              decision making under pressure. I now apply these strengths to
              cloud services, infrastructure work and automation.
            </p>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              I like to learn by building. My projects explore cloud platforms,
              CI and CD, data pipelines and backend APIs. I enjoy turning
              complex ideas into clear and reliable systems that others can
              understand and extend.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold">Current Focus</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 md:text-base">
              <li>Cloud platforms AWS and Google Cloud</li>
              <li>DevOps culture and automation of build and release flows</li>
              <li>Virtualization and infrastructure for Linux and Windows</li>
              <li>Backend services with Python, Node.js and APIs</li>
              <li>Monitoring, quality and reliability of systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Skills</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              title="Cloud Platforms"
              text="AWS and Google Cloud. Focus on core services, identity and access, networking basics and cost awareness."
            />
            <SkillCard
              title="DevOps and Automation"
              text="CI and CD concepts, Git and GitHub workflows, Docker and simple pipelines that keep code tested and deployable."
            />
            <SkillCard
              title="Infrastructure and Virtualization"
              text="VMware vSphere, Hyper V, Windows Server and Linux. Focus on stable and repeatable setups."
            />
            <SkillCard
              title="Programming and Data"
              text="Python, Node.js, SQL and MySQL plus Power BI for simple reporting. I use code to glue services together and automate tasks."
            />
            <SkillCard
              title="Certifications"
              text="AWS Academy Cloud Foundations and Cloud Architecting, Google Cloud Computing Foundations, SAS Data Literacy and Google Digital Marketing."
            />
            <SkillCard
              title="Soft Skills"
              text="Process thinking, quality ownership, teamwork and leadership experience from high pressure kitchen environments."
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Here are some selected projects from my developer portfolio. They
            show how I learn cloud, DevOps and backend skills in practice.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="BuildWatch CI Monitor"
              description="Dashboard that shows the status of CI pipelines and builds. Focus on visibility and quick feedback for developers."
              tech="Node.js, CI concepts, monitoring"
              repo="buildwatch-ci-monitor"
            />
            <ProjectCard
              title="Data Pipeline ELT with dbt"
              description="End to end ELT data pipeline that models, transforms and tests data sets using dbt style workflows."
              tech="dbt, SQL, data engineering"
              repo="data-pipeline-elt-dbt"
            />
            <ProjectCard
              title="Local Serverless ETL"
              description="Concept project that simulates a serverless style ETL path with event based steps and modular tasks."
              tech="serverless patterns, ETL"
              repo="local-serverless-etl"
            />
            <ProjectCard
              title="FastAPI Redis Cache API"
              description="High speed REST API with caching and clean structure. A small but focused backend service."
              tech="Python, FastAPI, Redis"
              repo="fastapi-redis-cache-api"
            />
            <ProjectCard
              title="DevOps CI Demo"
              description="Simple continuous integration setup that connects GitHub changes with automated checks and builds."
              tech="DevOps, CI, GitHub Actions"
              repo="devops-ci-demo"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
            I am open to junior cloud and DevOps roles, internships and
            collaborative learning projects. If my profile and projects look
            interesting, feel free to send a message.
          </p>

          <div className="mt-6 space-y-2 text-sm text-slate-200 md:text-base">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:Teemu.Rekiranta1@gmail.com"
                className="text-sky-400 hover:underline"
              >
                Teemu.Rekiranta1@gmail.com
              </a>
            </p>
            <p>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/teemurekiranta"
                className="text-sky-400 hover:underline"
              >
                linkedin.com/in/teemurekiranta
              </a>
            </p>
          </div>

          <p className="mt-8 text-sm font-medium text-slate-400">
            Learning fast, building faster
          </p>
        </div>
      </section>
    </main>
  );
}

type SkillCardProps = {
  title: string;
  text: string;
};

function SkillCard({ title, text }: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-400">
        {title}
      </h3>
      <p className="mt-3 text-sm text-slate-300">{text}</p>
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  repo: string;
};

function ProjectCard({ title, description, tech, repo }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <div>
        <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <span>{tech}</span>
        <a
          href={`https://github.com/Rekiranta/${repo}`}
          className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-sky-300 hover:border-sky-400 hover:text-sky-200"
        >
          View repository
        </a>
      </div>
    </article>
  );
}
