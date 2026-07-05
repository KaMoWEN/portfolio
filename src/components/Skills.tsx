import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { PROJECTS, REQUIREMENTS } from "../data/projects";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-line py-16 sm:py-20"
    >
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
          Skills, with proof
        </h2>
        <p className="mt-2 mb-8 max-w-2xl text-sm leading-relaxed text-zinc-400">
          Every skill a frontend role asks for, next to the projects that
          demonstrate it. Each name links to the code.
        </p>
      </Reveal>

      <Reveal>
        <ul className="divide-y divide-line rounded-2xl border border-line bg-ink-raise/60 px-5 sm:px-6">
          {REQUIREMENTS.map((r) => {
            const proofs = PROJECTS.filter((p) => p.covers.includes(r.id));
            return (
              <li
                key={r.id}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-44 shrink-0 text-sm font-medium text-zinc-100">
                  {r.label}
                </span>
                <span className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {proofs.map((p) => (
                    <a
                      key={p.code}
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 font-mono text-xs text-zinc-400 transition-colors hover:text-accent"
                    >
                      {p.title}
                      <ArrowUpRightIcon
                        size={12}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      />
                    </a>
                  ))}
                </span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
