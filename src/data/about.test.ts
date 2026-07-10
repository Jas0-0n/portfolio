import { describe, expect, it } from "vitest";
import { about } from "./about";

describe("about data", () => {
    it("has bio paragraphs", () => {
        expect(about.bio).toHaveLength(2);
        expect(about.bio[0]).toContain("Hong Kong");
    });

    it("has 14 skill tags", () => {
        expect(about.skills).toHaveLength(14);
        expect(about.skills.filter((s) => s.accent).length).toBeGreaterThan(0);
    });
});
