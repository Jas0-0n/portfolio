import { work } from "../../../data/work";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { SectionLabel } from "../../ui/SectionLabel";
import { WorkCard } from "../../ui/WorkCard";

export function Work() {
    const heading = useIntersectionObserver();
    const cardVisibility = work.map(() => useIntersectionObserver());

    return (
        <section className="py-24 border-b border-border" id="work">
            <div className="max-w-[1120px] mx-auto px-6">
                <SectionLabel number="03" label="Work" />
                <h2
                    ref={heading.ref as React.RefObject<HTMLHeadingElement>}
                    className={`reveal text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-tight mb-12 ${
                        heading.isVisible ? "is-visible" : ""
                    }`}
                >
                    Featured projects
                </h2>
                <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                    {work.map((w, idx) => {
                        const card = cardVisibility[idx];
                        const delay = idx < 3 ? `reveal-delay-${idx + 1}` : "";
                        return (
                            <div
                                key={idx}
                                ref={card.ref as React.RefObject<HTMLDivElement>}
                                className={`reveal ${delay} ${card.isVisible ? "is-visible" : ""}`}
                            >
                                <WorkCard work={w} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
