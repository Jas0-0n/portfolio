import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import TextType from "./TextType";

const enableReducedMotion = () => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation((query: string) => ({
            matches: query === "(prefers-reduced-motion: reduce)",
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });
};

describe("TextType", () => {
    beforeEach(() => {
        enableReducedMotion();
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("renders a single text string immediately under reduced motion", () => {
        render(<TextType text="Hello" />);
        expect(screen.getByText("Hello")).toBeInTheDocument();
    });

    it("renders all accumulated texts under reduced motion", () => {
        render(
            <TextType
                text={["AI-native.", "Product-first.", "Code-ready."]}
                accumulate
                separator={[<br key="b1" />, <br key="b2" />]}
            />,
        );
        expect(screen.getByText("AI-native.")).toBeInTheDocument();
        expect(screen.getByText("Product-first.")).toBeInTheDocument();
        expect(screen.getByText("Code-ready.")).toBeInTheDocument();
    });

    it("shows cursor by default", () => {
        const { container } = render(<TextType text="Hi" />);
        expect(container.querySelector("span.ml-1")).not.toBeNull();
    });

    it("hides cursor when showCursor is false", () => {
        const { container } = render(<TextType text="Hi" showCursor={false} />);
        expect(container.querySelector("span.ml-1")).toBeNull();
    });
});
