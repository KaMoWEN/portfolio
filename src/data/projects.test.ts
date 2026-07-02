import { describe, expect, it } from "vitest";
import { PROJECTS, REQUIREMENTS } from "./projects";

const requirementIds = new Set(REQUIREMENTS.map((r) => r.id));

describe("projects data integrity", () => {
  it("has unique project codes", () => {
    const codes = PROJECTS.map((p) => p.code);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it("only references requirements that exist", () => {
    for (const project of PROJECTS) {
      for (const id of project.covers) {
        expect(requirementIds.has(id), `${project.title} covers unknown "${id}"`).toBe(true);
      }
    }
  });

  it("covers every requirement with at least one project", () => {
    for (const req of REQUIREMENTS) {
      const covered = PROJECTS.some((p) => p.covers.includes(req.id));
      expect(covered, `"${req.label}" is not covered by any project`).toBe(true);
    }
  });

  it("gives every project a non-empty stack and links", () => {
    for (const p of PROJECTS) {
      expect(p.stack.length).toBeGreaterThan(0);
      expect(p.demo.length).toBeGreaterThan(0);
      expect(p.repo.length).toBeGreaterThan(0);
    }
  });
});
