import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";

vi.mock("../components/backgrounds/Aurora", () => ({
    default: () => null,
}));

vi.mock("../components/backgrounds/ShapeGrid", () => ({
    default: () => null,
}));

vi.mock("../components/ui/TextType/TextType", () => ({
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

describe("App", () => {
    it("renders Header, Hero content, and Footer", () => {
        render(<App />);
        expect(screen.getByText("Jason")).toBeInTheDocument();
        expect(screen.getByText("AI-native.")).toBeInTheDocument();
        expect(screen.getByText(/© 2026 Jason Chen/)).toBeInTheDocument();
    });
});
