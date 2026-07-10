import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SkillTag } from "./SkillTag";

describe("SkillTag", () => {
    it("renders label", () => {
        render(<SkillTag label="React" />);
        expect(screen.getByText("React")).toBeInTheDocument();
    });

    it("applies accent styles when accent is true", () => {
        render(<SkillTag label="React" accent />);
        const el = screen.getByText("React");
        expect(el.className).toContain("text-accent");
    });
});
