import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { BackToTop } from "./BackToTop";

describe("BackToTop", () => {
    beforeEach(() => {
        window.scrollY = 0;
        window.scrollTo = vi.fn();
    });

    it("is hidden by default", () => {
        render(<BackToTop />);
        const btn = screen.getByRole("button");
        expect(btn.className).toContain("opacity-0");
    });

    it("is visible when scrolled past threshold", () => {
        render(<BackToTop />);
        act(() => {
            window.scrollY = 500;
            window.dispatchEvent(new Event("scroll"));
        });
        const btn = screen.getByRole("button");
        expect(btn.className).toContain("opacity-100");
    });

    it("calls window.scrollTo on click", () => {
        render(<BackToTop />);
        act(() => {
            window.scrollY = 500;
            window.dispatchEvent(new Event("scroll"));
        });
        fireEvent.click(screen.getByRole("button"));
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    });
});
