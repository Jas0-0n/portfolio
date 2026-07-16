import type { NavLink, SocialLink } from "../types";

export const email = "your.email@example.com";

export const social: SocialLink[] = [
    { href: "https://github.com/", label: "GH", title: "GitHub" },
    { href: "https://linkedin.com/in/", label: "LI", title: "LinkedIn" },
    { href: `mailto:${email}`, label: "@", title: "Email" },
    { href: "#", label: "X", title: "X / Twitter" },
];

export const footerNav: NavLink[] = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#work", label: "Work" },
];
