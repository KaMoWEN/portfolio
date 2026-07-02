import type { Icon } from "@phosphor-icons/react";

export type RequirementId =
  | "ts"
  | "react"
  | "rn"
  | "web"
  | "rest"
  | "arch"
  | "clean"
  | "ux"
  | "git";

export interface Requirement {
  id: RequirementId;
  label: string;
}

export interface Project {
  code: string;
  icon: Icon;
  title: string;
  tagline: string;
  proves: string;
  stack: string[];
  covers: RequirementId[];
  demo: string;
  repo: string;
}

export interface StackGroup {
  group: string;
  items: string[];
}
