import { type RefObject, useEffect, useMemo, useRef, useState } from "react";

export interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
}

export interface UseIntersectionObserverResult {
    ref: RefObject<HTMLDivElement | null>;
    isVisible: boolean;
}

export function useIntersectionObserver(
    options: UseIntersectionObserverOptions = {},
): UseIntersectionObserverResult {
    const { threshold = 0.1, rootMargin = "0px 0px -50px 0px" } = options;
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const nodeRef = useRef<HTMLDivElement | null>(null);

    const ref: RefObject<HTMLDivElement | null> = useMemo(
        () => ({
            get current() {
                return nodeRef.current;
            },
            set current(node: HTMLDivElement | null) {
                observerRef.current?.disconnect();
                observerRef.current = null;
                nodeRef.current = node;

                if (!node) return;

                const observer = new IntersectionObserver(
                    (entries) => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                setIsVisible(true);
                                observer.disconnect();
                                break;
                            }
                        }
                    },
                    { threshold, rootMargin },
                );

                observer.observe(node);
                observerRef.current = observer;
            },
        }),
        [threshold, rootMargin],
    );

    useEffect(() => {
        return () => {
            observerRef.current?.disconnect();
            observerRef.current = null;
        };
    }, []);

    return { ref, isVisible };
}
