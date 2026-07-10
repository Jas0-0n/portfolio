import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { BackToTop } from "./BackToTop";

describe("BackToTop", () => {
    beforeEach(() => {
        window.scrollTo = vi.fn();
    });

    it("is hidden by default", () => {
        render(<BackToTop isVisible={false} />);
        const btn = screen.getByRole("button");
        expect(btn.className).toContain("opacity-0");
    });

    it("is visible when isVisible is true", () => {
        render(<BackToTop isVisible />);
        const btn = screen.getByRole("button");
        expect(btn.className).toContain("opacity-100");
    });

    it("calls window.scrollTo on click", () => {
        render(<BackToTop isVisible />);
        fireEvent.click(screen.getByRole("button"));
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    });
});
