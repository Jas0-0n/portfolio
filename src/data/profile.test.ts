import { describe, expect, it } from "vitest";
import { profile } from "./profile";

describe("profile data", () => {
    it("has required HeroMeta fields", () => {
        expect(profile.status).toBe("AVAILABLE");
        expect(profile.location).toBe("HONG KONG");
        expect(profile.name).toBe("JASON");
    });

    it("has headline and subline", () => {
        expect(profile.headline).toContain("AI-native");
        expect(profile.subline).toContain("6 years");
    });
});
