import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { NAV, SITE } from "../data/site";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-zinc-100"
        >
          {SITE.name}
          <span className="text-accent">.{SITE.tld}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-100 hover:underline focus-visible:text-zinc-100"
            >
              {n.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-md p-1.5 text-zinc-300 transition-colors hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-accent md:hidden"
        >
          {menuOpen ? <XIcon size={20} /> : <ListIcon size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line px-5 py-3 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-zinc-300 transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
