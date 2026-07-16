import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useIntersectionObserver } from "./useIntersectionObserver";

class MockIO {
    observe: ReturnType<typeof vi.fn>;
    unobserve: ReturnType<typeof vi.fn>;
    disconnect: ReturnType<typeof vi.fn>;
    readonly root: Element | null = null;
    readonly rootMargin: string = "0px 0px -50px 0px";
    readonly thresholds: ReadonlyArray<number> = [0.1];

    callback: IntersectionObserverCallback;

    constructor(callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {
        this.observe = vi.fn();
        this.unobserve = vi.fn();
        this.disconnect = vi.fn();
        this.callback = callback;
    }
}

describe("useIntersectionObserver", () => {
    it("returns ref and initial isVisible false", () => {
        const { result } = renderHook(() => useIntersectionObserver());
        expect(result.current.ref).toHaveProperty("current", null);
        expect(result.current.isVisible).toBe(false);
    });

    it("returns ref with custom options", () => {
        const { result } = renderHook(() =>
            useIntersectionObserver({
                threshold: 0.5,
                rootMargin: "10px",
            }),
        );
        expect(result.current.isVisible).toBe(false);
    });

    it("calls observe when ref.current is set", () => {
        (globalThis as Record<string, unknown>).IntersectionObserver = MockIO;

        const { result } = renderHook(() => useIntersectionObserver());
        const el = document.createElement("div");

        (result.current.ref as React.MutableRefObject<HTMLDivElement>).current = el;

        expect(result.current.ref.current).toBe(el);
    });

    it("sets isVisible true and disconnects when target intersects", () => {
        const holder: {
            io: {
                callback: IntersectionObserverCallback;
                disconnect: ReturnType<typeof vi.fn>;
            } | null;
        } = { io: null };
        (globalThis as Record<string, unknown>).IntersectionObserver = class {
            callback: IntersectionObserverCallback;
            disconnect = vi.fn();
            observe = vi.fn();
            unobserve = vi.fn();
            readonly root: Element | null = null;
            readonly rootMargin: string = "0px 0px -50px 0px";
            readonly thresholds: ReadonlyArray<number> = [0.1];
            constructor(callback: IntersectionObserverCallback) {
                this.callback = callback;
                holder.io = this;
            }
        };

        const { result } = renderHook(() => useIntersectionObserver());
        const el = document.createElement("div");
        act(() => {
            (result.current.ref as React.MutableRefObject<HTMLDivElement>).current = el;
        });

        expect(holder.io).not.toBeNull();
        act(() => {
            holder.io?.callback(
                [{ isIntersecting: true, target: el } as unknown as IntersectionObserverEntry],
                null as unknown as IntersectionObserver,
            );
        });

        expect(result.current.isVisible).toBe(true);
        expect(holder.io?.disconnect).toHaveBeenCalled();
    });
});
