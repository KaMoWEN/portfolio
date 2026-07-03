import { EnvelopeSimpleIcon, MapPinIcon } from "@phosphor-icons/react";
import { SITE } from "../data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Reveal>
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tighter text-zinc-100 sm:text-5xl">
          Let&apos;s build something.
        </h2>
        <p className="mt-5 max-w-lg leading-relaxed text-zinc-400">
          I&apos;m looking for a junior frontend role where I can grow, ship
          real product, and work with a strong team.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <EnvelopeSimpleIcon size={16} weight="bold" /> {SITE.email}
          </a>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500">
            <MapPinIcon size={14} /> {SITE.location}, remote-friendly
          </span>
        </div>
      </Reveal>
    </section>
  );
}
