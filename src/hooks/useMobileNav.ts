import { useCallback, useState } from "react";

export interface UseMobileNavResult {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
}

export function useMobileNav(): UseMobileNavResult {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    return { isOpen, toggle, close };
}
