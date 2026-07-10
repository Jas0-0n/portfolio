import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Experience } from "./Experience";

describe("Experience", () => {
    it("renders section label and title", () => {
        render(<Experience />);
        expect(screen.getByText("02")).toBeInTheDocument();
        expect(screen.getByText("Experience")).toBeInTheDocument();
        expect(screen.getByText("Where I've been")).toBeInTheDocument();
    });

    it("renders timeline items", () => {
        render(<Experience />);
        expect(screen.getByText("Assistant Product Manager")).toBeInTheDocument();
        expect(screen.getByText("Senior Web Developer")).toBeInTheDocument();
        expect(screen.getByText("Web Developer")).toBeInTheDocument();
    });

    it("renders education items", () => {
        render(<Experience />);
        expect(screen.getByText(/Hong Kong Baptist University/)).toBeInTheDocument();
        expect(screen.getByText(/Zhaoqing University/)).toBeInTheDocument();
    });
});
