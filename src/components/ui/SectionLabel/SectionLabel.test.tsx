import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionLabel } from "./SectionLabel";

describe("SectionLabel", () => {
    it("renders number and label", () => {
        render(<SectionLabel number="01" label="About" />);
        expect(screen.getByText("01")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
    });
});
