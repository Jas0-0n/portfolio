import { describe, expect, it } from "vitest";
import { experience } from "./experience";

describe("experience data", () => {
    it("has 3 timeline items", () => {
        expect(experience.timeline).toHaveLength(3);
        expect(experience.timeline[0].active).toBe(true);
        expect(experience.timeline[0].role).toBe("Assistant Product Manager");
    });

    it("has 2 education items", () => {
        expect(experience.education).toHaveLength(2);
        expect(experience.education[0].school).toContain("Hong Kong Baptist");
        expect(experience.education[1].school).toContain("Zhaoqing");
    });
});
