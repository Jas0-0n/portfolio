import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useMobileNav } from "./useMobileNav";

describe("useMobileNav", () => {
    it("starts with isOpen false", () => {
        const { result } = renderHook(() => useMobileNav());
        expect(result.current.isOpen).toBe(false);
    });

    it("toggle switches isOpen", () => {
        const { result } = renderHook(() => useMobileNav());
        act(() => {
            result.current.toggle();
        });
        expect(result.current.isOpen).toBe(true);
        act(() => {
            result.current.toggle();
        });
        expect(result.current.isOpen).toBe(false);
    });

    it("close sets isOpen to false", () => {
        const { result } = renderHook(() => useMobileNav());
        act(() => {
            result.current.toggle();
        });
        expect(result.current.isOpen).toBe(true);
        act(() => {
            result.current.close();
        });
        expect(result.current.isOpen).toBe(false);
    });
});
