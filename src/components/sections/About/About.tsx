import { about } from "../../../data/about";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { SectionLabel } from "../../ui/SectionLabel";
import { SkillTag } from "../../ui/SkillTag";

export function About() {
    const photo = useIntersectionObserver();
    const text = useIntersectionObserver();

    return (
        <section className="py-24 border-b border-border" id="about">
            <div className="max-w-[1120px] mx-auto px-6">
                <SectionLabel number="01" label="About" />
                <div className="grid grid-cols-[auto_1fr] gap-14 items-start max-md:grid-cols-1 max-md:text-center">
                    <div
                        ref={photo.ref as React.RefObject<HTMLDivElement>}
                        className={`reveal w-[180px] h-[180px] rounded-full overflow-hidden border-[3px] border-border flex-shrink-0 bg-gradient-to-br from-bg-hover to-border relative max-md:mx-auto ${
                            photo.isVisible ? "is-visible" : ""
                        }`}
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-text-ter text-[0.75rem] flex-col gap-1">
                            <span className="text-2xl">👤</span>
                            <span>Your photo</span>
                        </div>
                    </div>
                    <div
                        ref={text.ref as React.RefObject<HTMLDivElement>}
                        className={`reveal reveal-delay-1 ${text.isVisible ? "is-visible" : ""}`}
                    >
                        <h3 className="text-xl font-semibold mb-4 leading-tight">
                            I bridge product vision with technical delivery
                        </h3>
                        {about.bio.map((paragraph, idx) => (
                            <p
                                key={idx}
                                className="text-text-sec mb-6 max-w-[580px] text-[0.95rem] leading-7 max-md:mx-auto"
                            >
                                {paragraph}
                            </p>
                        ))}
                        <div className="flex flex-wrap gap-2 max-md:justify-center">
                            {about.skills.map((skill) => (
                                <SkillTag
                                    key={skill.label}
                                    label={skill.label}
                                    accent={skill.accent}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
