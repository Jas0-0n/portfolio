import { experience } from "../../../data/experience";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { EducationCard } from "../../ui/EducationCard";
import { SectionLabel } from "../../ui/SectionLabel";
import { TimelineItem } from "../../ui/TimelineItem";

export function Experience() {
    const heading = useIntersectionObserver();
    const timeline = useIntersectionObserver();
    const education = useIntersectionObserver();

    return (
        <section className="py-24 border-b border-border" id="experience">
            <div className="max-w-[1120px] mx-auto px-6">
                <SectionLabel number="02" label="Experience" />
                <h2
                    ref={heading.ref as React.RefObject<HTMLDivElement>}
                    className={`reveal text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-tight mb-12 ${
                        heading.isVisible ? "is-visible" : ""
                    }`}
                >
                    Where I've been
                </h2>
                <div className="grid grid-cols-[1.5fr_1fr] gap-12 items-start max-md:grid-cols-1">
                    <div
                        ref={timeline.ref as React.RefObject<HTMLDivElement>}
                        className={`reveal reveal-delay-1 relative pl-7 ${
                            timeline.isVisible ? "is-visible" : ""
                        }`}
                    >
                        <div className="absolute left-1.5 top-2 bottom-2 w-px bg-border" />
                        {experience.timeline.map((item, idx) => (
                            <TimelineItem key={idx} item={item} />
                        ))}
                    </div>
                    <div
                        ref={education.ref as React.RefObject<HTMLDivElement>}
                        className={`reveal reveal-delay-2 ${
                            education.isVisible ? "is-visible" : ""
                        }`}
                    >
                        <EducationCard items={experience.education} />
                    </div>
                </div>
            </div>
        </section>
    );
}
