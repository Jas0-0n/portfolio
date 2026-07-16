import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const setReduced = (reduced: boolean) => {
    const listeners: ((e: MediaQueryListEvent) => void)[] = [];
    const mql = {
        matches: reduced,
        media: "(prefers-reduced-motion: reduce)",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) => listeners.push(cb),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    };
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockReturnValue(mql),
    });
    return { mql, listeners };
};

describe("usePrefersReducedMotion", () => {
    beforeEach(() => {
        setReduced(false);
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("returns false when motion is allowed", () => {
        const { result } = renderHook(() => usePrefersReducedMotion());
        expect(result.current).toBe(false);
    });

    it("returns true when reduced motion is preferred", () => {
        setReduced(true);
        const { result } = renderHook(() => usePrefersReducedMotion());
        expect(result.current).toBe(true);
    });

    it("updates when the media query changes", () => {
        const { listeners } = setReduced(false);
        const { result } = renderHook(() => usePrefersReducedMotion());
        expect(result.current).toBe(false);
        act(() => {
            for (const cb of listeners) {
                cb({ matches: true } as MediaQueryListEvent);
            }
        });
        expect(result.current).toBe(true);
    });
});
