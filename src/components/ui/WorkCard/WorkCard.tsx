import type { Work } from "../../../types";

export interface WorkCardProps {
    work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
    return (
        <div className="bg-bg-card rounded-radius border border-border overflow-hidden transition-all duration-400 cursor-pointer hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <div className="aspect-[16/10] bg-gradient-to-br from-bg-hover to-[#1a1a20] flex items-center justify-center text-text-ter text-xs font-mono flex-col gap-2">
                <span className="text-2xl opacity-40">{work.icon}</span>
                <span>{work.title}</span>
            </div>
            <div className="p-6">
                <h4 className="text-base font-semibold mb-1.5">{work.title}</h4>
                <p className="text-[0.82rem] text-text-sec mb-3.5 leading-relaxed">
                    {work.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {work.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-[0.7rem] bg-bg-hover text-text-ter tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
