import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/utils";
import NotFound from "./not-found";

describe("NotFound Page", () => {
  it("renders without crashing", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("displays a 404 heading", () => {
    render(<NotFound />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("404");
  });

  it("displays a friendly message", () => {
    render(<NotFound />);
    expect(screen.getByText(/page.*not.*found/i)).toBeInTheDocument();
  });

  it("has a link back to the home page", () => {
    render(<NotFound />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
