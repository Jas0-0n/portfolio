import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Hero } from "./Hero";

vi.mock("../../ui/TextType/TextType", () => ({
    default: ({
        text,
        as: Component = "div",
        className = "",
    }: {
        text: string | string[];
        as?: string;
        className?: string;
    }) => {
        const texts = Array.isArray(text) ? text : [text];
        return React.createElement(
            Component as string,
            { className },
            ...texts.map((t, i) => React.createElement("span", { key: i }, t)),
        );
    },
}));

describe("Hero", () => {
    it("renders headline with accent span", () => {
        render(<Hero />);
        expect(screen.getByText(/AI-native/)).toBeInTheDocument();
        expect(screen.getByText(/Code-ready/)).toBeInTheDocument();
    });

    it("renders CTA buttons", () => {
        render(<Hero />);
        expect(screen.getByText(/View my work/)).toBeInTheDocument();
        expect(screen.getByText(/Get in touch/)).toBeInTheDocument();
    });

    it("renders scroll indicator", () => {
        render(<Hero />);
        expect(screen.getByText("SCROLL")).toBeInTheDocument();
    });
});
