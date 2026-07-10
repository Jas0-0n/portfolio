import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
    it("renders CTA text", () => {
        render(<Footer />);
        expect(screen.getByText(/Let's build something/)).toBeInTheDocument();
    });

    it("renders social links", () => {
        render(<Footer />);
        expect(screen.getByTitle("GitHub")).toBeInTheDocument();
        expect(screen.getByTitle("LinkedIn")).toBeInTheDocument();
        expect(screen.getByTitle("Email")).toBeInTheDocument();
        expect(screen.getByTitle("X / Twitter")).toBeInTheDocument();
    });

    it("renders copyright", () => {
        render(<Footer />);
        expect(screen.getByText(/© 2026 Jason Chen/)).toBeInTheDocument();
    });
});
