import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import type { Project } from "../types";
import { PROJECTS } from "../data/projects";
import { Chip } from "./Chip";
import { Reveal } from "./Reveal";

function ProjectRow({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <Reveal>
      <article className="group grid gap-x-8 gap-y-5 border-t border-line py-10 sm:py-12 md:grid-cols-12">
        <div className="flex items-center gap-4 md:col-span-1 md:block">
          <span className="font-mono text-sm text-zinc-600">
            {project.code}
          </span>
          <Icon
            size={20}
            className="text-zinc-500 transition-colors group-hover:text-accent md:mt-3"
          />
        </div>

        <div className="md:col-span-7">
          <h3 className="text-3xl font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-accent sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-zinc-400">{project.tagline}</p>
          <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-zinc-500">
            {project.proves}
          </p>
        </div>

        <div className="flex flex-col gap-5 md:col-span-4 md:items-end md:justify-between">
          <div className="flex flex-wrap gap-2 md:justify-end">
            {project.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <a
              href={project.demo}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-300 underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:text-accent"
            >
              Live demo <ArrowUpRightIcon size={14} />
            </a>
            <a
              href={project.repo}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-300 underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:text-accent"
            >
              Code <GithubLogoIcon size={14} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 pb-8">
      <Reveal>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            Selected work
          </h2>
          <span className="font-mono text-xs text-zinc-600">
            {PROJECTS.length} projects
          </span>
        </div>
      </Reveal>
      {PROJECTS.map((p) => (
        <ProjectRow key={p.code} project={p} />
      ))}
    </section>
  );
}
