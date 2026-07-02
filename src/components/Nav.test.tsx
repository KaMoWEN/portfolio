// @vitest-environment jsdom
import { describe, expect, it, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Nav } from "./Nav";
import { NAV } from "../data/site";

afterEach(cleanup);

describe("Nav", () => {
  it("renders the logo and all navigation links", () => {
    render(<Nav />);
    expect(screen.getByText("kamowen")).toBeTruthy();
    for (const item of NAV) {
      expect(screen.getAllByText(item.label).length).toBeGreaterThan(0);
    }
  });

  it("opens and closes the mobile menu", () => {
    render(<Nav />);
    const toggle = screen.getByLabelText("Open menu");

    fireEvent.click(toggle);
    expect(screen.getByLabelText("Close menu")).toBeTruthy();

    fireEvent.click(screen.getByLabelText("Close menu"));
    expect(screen.getByLabelText("Open menu")).toBeTruthy();
  });

  it("closes the mobile menu after a link is clicked", () => {
    render(<Nav />);
    fireEvent.click(screen.getByLabelText("Open menu"));

    // The mobile drawer duplicates the desktop links; click the drawer one.
    const links = screen.getAllByText("Contact");
    fireEvent.click(links[links.length - 1]);

    expect(screen.getByLabelText("Open menu")).toBeTruthy();
  });
});
