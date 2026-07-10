import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { TimelineItem as TimelineItemType } from "../../../types";
import { TimelineItem } from "./TimelineItem";

describe("TimelineItem", () => {
    const mockItem: TimelineItemType = {
        date: "Oct 2024 — Present",
        company: "YOHO",
        role: "APM",
        desc: "Description",
        skills: ["APM"],
        active: true,
    };

    it("renders date, company, role, and skills", () => {
        render(<TimelineItem item={mockItem} />);
        expect(screen.getByText("Oct 2024 — Present")).toBeInTheDocument();
        expect(screen.getByText("YOHO")).toBeInTheDocument();
        expect(screen.getAllByText("APM")).toHaveLength(2);
    });
});
