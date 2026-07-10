import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Education } from "../../../types";
import { EducationCard } from "./EducationCard";

describe("EducationCard", () => {
    const mockEducation: Education[] = [
        { degree: "MSc", school: "HKBU", year: "2020 — 2021" },
        { degree: "BSc", school: "Zhaoqing", year: "2016 — 2020" },
    ];

    it("renders all education items", () => {
        render(<EducationCard items={mockEducation} />);
        expect(screen.getByText("MSc")).toBeInTheDocument();
        expect(screen.getByText("HKBU")).toBeInTheDocument();
        expect(screen.getByText("BSc")).toBeInTheDocument();
    });
});
