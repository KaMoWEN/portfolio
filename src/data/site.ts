// ─────────────────────────────────────────────────────────────
// TODO before publishing:
//   • github → your GitHub profile URL
//   • each project's demo / repo links live in data/projects.ts
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "kamowen",
  tld: "dev",
  github: "https://github.com/KaMoWEN",
  email: "karnadg12345@gmail.com",
  location: "Nha Trang, Vietnam",
  availability: "Open to junior frontend roles",
} as const;

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Coverage", href: "#coverage" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;
