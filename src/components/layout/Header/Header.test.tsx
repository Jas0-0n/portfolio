import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
    beforeEach(() => {
        window.scrollTo = vi.fn();
    });

    it("renders logo and nav links", () => {
        render(<Header />);
        expect(screen.getByText("Jason")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Experience")).toBeInTheDocument();
        expect(screen.getByText("Work")).toBeInTheDocument();
    });

    it("renders contact CTA", () => {
        render(<Header />);
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    it("has mobile toggle button", () => {
        render(<Header />);
        expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
    });
});
