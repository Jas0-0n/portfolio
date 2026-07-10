import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "./About";

describe("About", () => {
    it("renders section label", () => {
        render(<About />);
        expect(screen.getByText("01")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
    });

    it("renders bio text", () => {
        render(<About />);
        expect(screen.getByText(/Hong Kong/)).toBeInTheDocument();
    });

    it("renders skill tags", () => {
        render(<About />);
        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.getByText("TypeScript")).toBeInTheDocument();
    });
});
