import { describe, expect, it } from "vitest";
import { work } from "./work";

describe("work data", () => {
    it("has 4 project cards", () => {
        expect(work).toHaveLength(4);
    });

    it("each card has icon, title, description, and 4 tags", () => {
        work.forEach((w) => {
            expect(w.icon).toBeTruthy();
            expect(w.title).toBeTruthy();
            expect(w.description).toBeTruthy();
            expect(w.tags).toHaveLength(4);
        });
    });

    it("first card is Product Search Engine", () => {
        expect(work[0].title).toBe("Product Search Engine");
    });
});
