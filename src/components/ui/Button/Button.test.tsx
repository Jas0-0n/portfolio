import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
    it("renders primary variant by default", () => {
        render(<Button>Click me</Button>);
        const btn = screen.getByRole("button");
        expect(btn.className).toContain("bg-accent");
    });

    it("renders secondary variant", () => {
        render(<Button variant="secondary">Click me</Button>);
        const btn = screen.getByRole("button");
        expect(btn.className).toContain("bg-bg-card");
    });

    it("calls onClick when clicked", () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        fireEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledOnce();
    });

    it("renders as anchor when href is provided", () => {
        render(<Button href="#work">View work</Button>);
        const el = screen.getByText("View work");
        expect(el.tagName).toBe("A");
    });
});
