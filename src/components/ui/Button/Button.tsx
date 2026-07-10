import type { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    href?: string;
    onClick?: () => void;
    className?: string;
}

const baseStyles =
    "inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer border-none font-inter";

const variantStyles = {
    primary:
        "bg-accent text-white hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.25)]",
    secondary:
        "bg-bg-card text-text border border-border hover:bg-bg-hover hover:border-text-ter hover:-translate-y-0.5",
};

export function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
}: ButtonProps) {
    const combined = [baseStyles, variantStyles[variant], className].filter(Boolean).join(" ");

    if (href) {
        return (
            <a href={href} className={combined}>
                {children}
            </a>
        );
    }

    return (
        <button type="button" onClick={onClick} className={combined}>
            {children}
        </button>
    );
}
