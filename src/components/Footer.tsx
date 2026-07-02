import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-8 font-mono text-xs text-zinc-600 sm:flex-row sm:items-center">
        <span>
          {SITE.name}
          <span className="text-accent">.{SITE.tld}</span> · built with React +
          TypeScript
        </span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
