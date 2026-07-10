export interface SkillTag {
    label: string;
    accent: boolean;
}

export interface AboutData {
    bio: string[];
    skills: SkillTag[];
}

export const about: AboutData = {
    bio: [
        "Based in Hong Kong, I bring 5+ years of experience spanning full-stack web development and product management. Currently serving as an APM at YOHO HONG KONG LTD (HKG:2347), where I coordinate cross-functional teams to deliver ecommerce solutions that serve both businesses and consumers.",
        "Previously, as a Senior Web Developer, I designed and built high-impact systems including a product search engine, a personalized recommendation engine, an in-house advertising platform, and a flash-sale delivery system — all at scale.",
    ],
    skills: [
        { label: "React", accent: true },
        { label: "TypeScript", accent: true },
        { label: "Node.js", accent: false },
        { label: "Redis", accent: false },
        { label: "Redux", accent: false },
        { label: "Redux-Saga", accent: false },
        { label: "System Design", accent: true },
        { label: "Python", accent: false },
        { label: "Elasticsearch", accent: false },
        { label: "Agile / Jira", accent: false },
        { label: "Figma", accent: false },
        { label: "Code Review", accent: false },
        { label: "APM", accent: true },
        { label: "Cross-functional", accent: false },
    ],
};
