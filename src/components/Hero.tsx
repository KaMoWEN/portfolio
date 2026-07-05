import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { SITE } from "../data/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="pt-20 pb-24 sm:pt-24 sm:pb-32">
      <motion.div
        {...enter(0)}
        className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-raise px-3.5 py-1.5"
      >
        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
        <span className="font-mono text-xs text-zinc-400">
          {SITE.availability}
        </span>
      </motion.div>

      <motion.h1
        {...enter(0.08)}
        className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tighter text-zinc-100 sm:text-6xl lg:text-7xl"
      >
        Fast, typed,{" "}
        <span className="text-accent">maintainable</span> interfaces.
      </motion.h1>

      <motion.p
        {...enter(0.16)}
        className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400"
      >
        I&apos;m Danila, a frontend developer. I turn product requirements
        into clean, reusable UI with React, TypeScript and React Native, and I
        ship it.
      </motion.p>

      <motion.div {...enter(0.24)} className="mt-10 flex flex-wrap gap-3">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          View work <ArrowRightIcon size={16} weight="bold" />
        </a>
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 active:scale-[0.98]"
        >
          <GithubLogoIcon size={16} /> GitHub
        </a>
      </motion.div>
    </section>
  );
}
