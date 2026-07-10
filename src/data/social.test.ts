import { describe, expect, it } from "vitest";
import { social } from "./social";

describe("social data", () => {
    it("has 4 social links with placeholders", () => {
        expect(social).toHaveLength(4);
        expect(social.find((s) => s.label === "GH")?.href).toBe("https://github.com/");
        expect(social.find((s) => s.label === "LI")?.href).toBe("https://linkedin.com/in/");
        expect(social.find((s) => s.label === "@")?.href).toBe("mailto:your.email@example.com");
        expect(social.find((s) => s.label === "X")?.href).toBe("#");
    });
});
