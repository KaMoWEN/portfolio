import {
  GlobeSimpleIcon,
  FilmSlateIcon,
  KanbanIcon,
  DeviceMobileIcon,
} from "@phosphor-icons/react";
import type { Project, Requirement, StackGroup } from "../types";

export const REQUIREMENTS: Requirement[] = [
  { id: "ts", label: "TypeScript" },
  { id: "react", label: "React" },
  { id: "rn", label: "React Native" },
  { id: "web", label: "JS · HTML · CSS" },
  { id: "rest", label: "REST API" },
  { id: "arch", label: "Architecture" },
  { id: "clean", label: "Clean code" },
  { id: "ux", label: "UX & performance" },
  { id: "git", label: "Git" },
];

export const PROJECTS: Project[] = [
  {
    code: "01",
    icon: GlobeSimpleIcon,
    title: "This Portfolio",
    tagline: "The site you are reading, built in React and TypeScript.",
    proves:
      "Component architecture, typed props, responsive layout, and attention to detail.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    covers: ["ts", "react", "web", "ux", "git", "clean"],
    demo: "https://portfolio-pi-one-55befe706c.vercel.app",
    repo: "https://github.com/KaMoWEN/portfolio",
  },
  {
    code: "02",
    icon: FilmSlateIcon,
    title: "CineScope",
    tagline: "Movie discovery app driven by the TMDB REST API.",
    proves:
      "Async fetching, debounced search with request cancellation, routing, pagination, and loading / error / empty states.",
    stack: ["React", "TypeScript", "React Router", "REST"],
    covers: ["ts", "react", "rest", "ux", "clean"],
    demo: "https://cinescope-omega-five.vercel.app",
    repo: "https://github.com/KaMoWEN/cinescope",
  },
  {
    code: "03",
    icon: KanbanIcon,
    title: "FlowBoard",
    tagline: "A Kanban board with drag-and-drop and persistent state.",
    proves:
      "Reducer-based state management, domain modelling in TypeScript, unit-tested logic, and accessible drag-and-drop.",
    stack: ["React", "TypeScript", "dnd-kit", "Vitest"],
    covers: ["ts", "react", "arch", "clean", "ux"],
    demo: "https://flowboard-ruby.vercel.app",
    repo: "https://github.com/KaMoWEN/flowboard",
  },
  {
    code: "04",
    icon: DeviceMobileIcon,
    title: "PocketWeather",
    tagline: "A weather app for iOS and Android built with Expo.",
    proves:
      "React Native fundamentals, a shared typed API layer, mobile UX, and REST integration without an API key.",
    stack: ["React Native", "TypeScript", "Expo", "REST"],
    covers: ["ts", "rn", "rest", "arch"],
    repo: "https://github.com/KaMoWEN/pocketweather",
  },
];

export const STACK: StackGroup[] = [
  { group: "Language", items: ["TypeScript", "JavaScript"] },
  { group: "Markup & style", items: ["HTML", "CSS", "Tailwind"] },
  { group: "Frameworks", items: ["React", "React Native"] },
  { group: "Tooling", items: ["Git", "REST APIs", "Vite", "Vitest"] },
];
