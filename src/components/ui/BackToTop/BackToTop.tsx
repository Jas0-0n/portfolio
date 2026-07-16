import { useEffect, useRef } from "react";
import { useScrollPosition } from "../../../hooks/useScrollPosition";

export function BackToTop() {
    const { isPastThreshold } = useScrollPosition();
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (buttonRef.current) {
            if (isPastThreshold) {
                buttonRef.current.removeAttribute("inert");
            } else {
                buttonRef.current.setAttribute("inert", "");
            }
        }
    }, [isPastThreshold]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            ref={buttonRef}
            type="button"
            onClick={handleClick}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 w-11 h-11 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-sec cursor-pointer z-50 transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isPastThreshold
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5 pointer-events-none"
            } hover:bg-accent-soft hover:border-accent hover:text-accent`}
        >
            ↑
        </button>
    );
}
