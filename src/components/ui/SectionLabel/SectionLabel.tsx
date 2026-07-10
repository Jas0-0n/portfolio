export interface SectionLabelProps {
    number: string;
    label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
    return (
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-text-ter font-semibold mb-2">
            <span className="text-accent">{number}</span> {label}
        </div>
    );
}
