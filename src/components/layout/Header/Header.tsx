import { navigation } from "../../../data/navigation";
import { useMobileNav } from "../../../hooks/useMobileNav";
import { useScrollPosition } from "../../../hooks/useScrollPosition";

export function Header() {
    const { isScrolled } = useScrollPosition();
    const { isOpen, toggle, close } = useMobileNav();

    return (
        <nav
            aria-label="Main navigation"
            className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isScrolled
                    ? "border-b border-border bg-bg/80 backdrop-blur-xl"
                    : "border-b border-transparent bg-bg/80 backdrop-blur-xl"
            }`}
        >
            <div className="max-w-[1120px] mx-auto px-6 h-full flex items-center justify-between">
                <a href="#" className="font-bold text-[1.05rem] tracking-tight">
                    Jason<span className="text-accent">.</span>
                </a>
                <button
                    type="button"
                    onClick={toggle}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav"
                    className="hidden flex-col gap-1.5 cursor-none p-1 max-sm:flex"
                >
                    <span className="w-6 h-0.5 bg-text rounded-sm" />
                    <span className="w-6 h-0.5 bg-text rounded-sm" />
                    <span className="w-6 h-0.5 bg-text rounded-sm" />
                </button>
                <ul
                    id="mobile-nav"
                    role="menu"
                    className={`flex gap-2 list-none max-sm:absolute max-sm:top-16 max-sm:left-0 max-sm:right-0 max-sm:flex-col max-sm:p-4 max-sm:border-b max-sm:border-border bg-bg/98 max-sm:backdrop-blur-xl ${
                        isOpen ? "max-sm:flex" : "max-sm:hidden"
                    }`}
                >
                    {navigation.map((link) => (
                        <li key={link.href} role="none">
                            <a
                                href={link.href}
                                onClick={close}
                                role="menuitem"
                                className={`px-4 py-2 text-[0.85rem] text-text-sec rounded-sm transition-colors hover:text-text hover:bg-bg-hover ${
                                    link.href === "#contact"
                                        ? "!bg-accent !text-white !font-semibold rounded-full px-5 hover:!bg-[#e85d2a]"
                                        : ""
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
