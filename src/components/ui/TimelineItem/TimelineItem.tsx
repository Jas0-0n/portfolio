import type { TimelineItem as TimelineItemType } from "../../../types";

export interface TimelineItemProps {
    item: TimelineItemType;
}

export function TimelineItem({ item }: TimelineItemProps) {
    return (
        <div className="relative pb-8 last:pb-0">
            <div
                className={`absolute left-[-22px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-accent ${
                    item.active ? "bg-accent" : ""
                }`}
            />
            <div className="text-[0.75rem] text-text-ter font-mono mb-1">{item.date}</div>
            <div className="text-sm font-semibold mb-0.5">{item.company}</div>
            <div className="text-[0.85rem] text-accent mb-1">{item.role}</div>
            <div className="text-xs text-text-sec">{item.desc}</div>
            <div className="flex flex-wrap gap-2 mt-2">
                {item.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-1.5 rounded-full text-xs bg-bg-card border border-border text-text-sec"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
