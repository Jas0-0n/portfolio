export interface TimelineItem {
    date: string;
    company: string;
    role: string;
    desc: string;
    skills: string[];
    active?: boolean;
}

export interface Education {
    degree: string;
    school: string;
    year: string;
}

export interface Work {
    icon: string;
    title: string;
    description: string;
    tags: string[];
}

export interface SocialLink {
    href: string;
    label: string;
    title: string;
}

export interface NavLink {
    href: string;
    label: string;
}

export interface HeroMeta {
    status: string;
    name: string;
    location: string;
}
