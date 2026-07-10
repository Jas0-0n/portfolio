import { social } from "../../../data/social";

export function Footer() {
    return (
        <footer className="pt-20 pb-10" id="contact">
            <div className="max-w-[1120px] mx-auto px-6">
                <div className="text-center mb-14">
                    <div className="text-[clamp(1.4rem,3vw,2rem)] font-bold mb-2">
                        Let's build something{" "}
                        <a
                            href="mailto:your.email@example.com"
                            className="text-accent relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                            together
                        </a>
                        .
                    </div>
                    <p className="text-text-ter text-sm mb-8">
                        Hong Kong · Open to opportunities &amp; collaborations
                    </p>
                    <div className="flex gap-3 justify-center mb-10">
                        {social.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={
                                    link.href.startsWith("http") ? "noopener noreferrer" : undefined
                                }
                                title={link.title}
                                className="w-12 h-12 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-sec text-[0.75rem] font-semibold transition-all duration-200 hover:bg-accent-soft hover:border-accent hover:text-accent hover:-translate-y-0.75"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="h-px bg-border mb-6" />
                <div className="flex justify-between items-center flex-wrap gap-3 max-sm:flex-col max-sm:text-center">
                    <span className="text-[0.75rem] text-text-ter">
                        © 2026 Jason Chen. All rights reserved.
                    </span>
                    <div className="flex gap-5">
                        <a
                            href="#about"
                            className="text-[0.75rem] text-text-ter hover:text-text transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#experience"
                            className="text-[0.75rem] text-text-ter hover:text-text transition-colors"
                        >
                            Experience
                        </a>
                        <a
                            href="#work"
                            className="text-[0.75rem] text-text-ter hover:text-text transition-colors"
                        >
                            Work
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
