import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ErrorBoundary } from "./ErrorBoundary";

const Boom = ({ shouldThrow }: { shouldThrow: boolean }) => {
    if (shouldThrow) throw new Error("kaboom");
    return <p>safe</p>;
};

describe("ErrorBoundary", () => {
    it("renders children when no error", () => {
        render(
            <ErrorBoundary>
                <Boom shouldThrow={false} />
            </ErrorBoundary>,
        );
        expect(screen.getByText("safe")).toBeInTheDocument();
    });

    it("renders fallback when child throws", () => {
        const originalError = console.error;
        console.error = () => {};
        render(
            <ErrorBoundary fallback={<p>oops</p>}>
                <Boom shouldThrow={true} />
            </ErrorBoundary>,
        );
        expect(screen.getByText("oops")).toBeInTheDocument();
        console.error = originalError;
    });

    it("renders null fallback by default when child throws", () => {
        const originalError = console.error;
        console.error = () => {};
        const { container } = render(
            <ErrorBoundary>
                <Boom shouldThrow={true} />
            </ErrorBoundary>,
        );
        expect(container.innerHTML).toBe("");
        console.error = originalError;
    });
});
