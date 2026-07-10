import "@testing-library/jest-dom/vitest";

class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin: string = "0px 0px -50px 0px";
    readonly thresholds: ReadonlyArray<number> = [0.1];
    readonly scrollMargin: string = "0px 0px 0px 0px";

    private callback: IntersectionObserverCallback;

    constructor(callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {
        this.callback = callback;
    }

    observe(target: Element) {
        setTimeout(() => {
            this.callback(
                [
                    {
                        target,
                        isIntersecting: true,
                        intersectionRatio: 1,
                        boundingClientRect: target.getBoundingClientRect() as DOMRectReadOnly,
                        intersectionRect: target.getBoundingClientRect() as DOMRectReadOnly,
                        rootBounds: null,
                        time: 0,
                    },
                ],
                this as unknown as IntersectionObserver,
            );
        }, 0);
    }

    unobserve() {}
    disconnect() {}

    takeRecords(): IntersectionObserverEntry[] {
        return [];
    }
}

(globalThis as Record<string, unknown>).IntersectionObserver = MockIntersectionObserver;
