import type { Education } from "../../../types";

export interface EducationCardProps {
    items: Education[];
}

export function EducationCard({ items }: EducationCardProps) {
    return (
        <div className="bg-bg-card rounded-radius border border-border p-7 flex flex-col gap-4">
            {items.map((edu, idx) => (
                <div key={`${edu.school}-${idx}`}>
                    {idx > 0 && <div className="h-px bg-border my-4" />}
                    <div>
                        <div className="font-semibold text-sm">{edu.degree}</div>
                        <div className="text-text-sec text-xs">{edu.school}</div>
                        <div className="text-text-ter text-[0.75rem] font-mono">{edu.year}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
