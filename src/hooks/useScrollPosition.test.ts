import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { useScrollPosition } from "./useScrollPosition";

describe("useScrollPosition", () => {
    afterEach(() => {
        window.scrollY = 0;
    });

    it("returns initial scrollY of 0", () => {
        const { result } = renderHook(() => useScrollPosition());
        expect(result.current.scrollY).toBe(0);
        expect(result.current.isScrolled).toBe(false);
        expect(result.current.isPastThreshold).toBe(false);
    });

    it("updates on scroll events", () => {
        const { result } = renderHook(() => useScrollPosition());
        act(() => {
            window.scrollY = 100;
            window.dispatchEvent(new Event("scroll"));
        });
        expect(result.current.scrollY).toBe(100);
        expect(result.current.isScrolled).toBe(true);
    });

    it("isPastThreshold when scrollY > 400", () => {
        const { result } = renderHook(() => useScrollPosition());
        act(() => {
            window.scrollY = 500;
            window.dispatchEvent(new Event("scroll"));
        });
        expect(result.current.isPastThreshold).toBe(true);
    });
});
