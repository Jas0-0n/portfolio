import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Work } from "./Work";

describe("Work", () => {
    it("renders section label and title", () => {
        render(<Work />);
        expect(screen.getByText("03")).toBeInTheDocument();
        expect(screen.getByText("Work")).toBeInTheDocument();
        expect(screen.getByText("Featured projects")).toBeInTheDocument();
    });

    it("renders 4 work cards", () => {
        render(<Work />);
        expect(screen.getAllByText("Product Search Engine").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Recommendation System").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Advertising System").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Flash Delivery").length).toBeGreaterThan(0);
    });
});
