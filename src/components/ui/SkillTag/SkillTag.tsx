export interface SkillTagProps {
    label: string;
    accent?: boolean;
}

export function SkillTag({ label, accent = false }: SkillTagProps) {
    const base = "px-4 py-1.5 rounded-full text-xs transition-all duration-200";
    const style = accent
        ? "bg-accent-soft text-accent"
        : "bg-bg-card border border-border text-text-sec hover:bg-accent-soft hover:border-accent hover:text-accent hover:-translate-y-0.5";

    return <span className={`${base} ${style}`}>{label}</span>;
}
