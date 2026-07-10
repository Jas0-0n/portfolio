import { useEffect, useState } from "react";

export interface ScrollPosition {
    scrollY: number;
    isScrolled: boolean;
    isPastThreshold: boolean;
}

export function useScrollPosition(): ScrollPosition {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return {
        scrollY,
        isScrolled: scrollY > 50,
        isPastThreshold: scrollY > 400,
    };
}
