import { describe, expect, it } from "vitest";
import { navigation } from "./navigation";

describe("navigation data", () => {
    it("has 4 nav links", () => {
        expect(navigation).toHaveLength(4);
        expect(navigation[0].href).toBe("#about");
        expect(navigation[3].href).toBe("#contact");
    });
});
