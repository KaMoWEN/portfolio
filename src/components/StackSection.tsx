import { STACK } from "../data/projects";
import { Chip } from "./Chip";
import { Reveal } from "./Reveal";

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-line py-16 sm:py-20">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            Stack
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
            A deliberately small toolset, used well. Typed end to end, tested
            where it matters, and shipped through Git with a clean history.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 md:col-span-7">
          {STACK.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05}>
              <h3 className="mb-3 font-mono text-xs text-zinc-500">
                {s.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
