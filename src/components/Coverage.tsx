import { PROJECTS, REQUIREMENTS } from "../data/projects";
import { Reveal } from "./Reveal";

export function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-20 border-t border-line py-16 sm:py-20">
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
          Requirement coverage
        </h2>
        <p className="mt-2 mb-8 max-w-2xl text-sm leading-relaxed text-zinc-400">
          Every skill a frontend role asks for, mapped to the project
          that demonstrates it. A filled square means the project covers that
          skill.
        </p>
      </Reveal>

      <Reveal>
        <div className="overflow-x-auto rounded-2xl border border-line bg-ink-raise/60">
          <div className="min-w-[540px] p-2">
            <div className="flex items-end gap-2 px-4 pt-3 pb-3">
              <span className="flex-1 font-mono text-xs text-zinc-500">
                Requirement
              </span>
              {PROJECTS.map((p) => (
                <span
                  key={p.code}
                  className="flex w-12 flex-col items-center gap-1.5 sm:w-16"
                >
                  <p.icon size={16} className="text-zinc-400" />
                  <span className="font-mono text-[10px] text-zinc-600">
                    {p.code}
                  </span>
                </span>
              ))}
            </div>

            <div className="space-y-px">
              {REQUIREMENTS.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5 odd:bg-ink/50"
                >
                  <span className="flex-1 text-sm text-zinc-300">
                    {r.label}
                  </span>
                  {PROJECTS.map((p) => {
                    const hit = p.covers.includes(r.id);
                    return (
                      <span
                        key={p.code}
                        className="flex w-12 justify-center sm:w-16"
                        title={
                          hit ? `${p.title} covers ${r.label}` : undefined
                        }
                      >
                        <span
                          className={
                            hit
                              ? "h-2.5 w-2.5 rounded-[3px] bg-accent"
                              : "h-2.5 w-2.5 rounded-[3px] border border-zinc-700"
                          }
                        />
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
